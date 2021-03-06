from bs4 import BeautifulSoup
import requests
import json

print("Starting webscraper")

wiki_url = 'https://genshin-impact.fandom.com'
character_site = '/wiki/Characters/List'
weapon_site = '/wiki/Weapons/List'

html_file = requests.get(wiki_url + character_site).text
soup = BeautifulSoup(html_file, 'lxml')
character_table = soup.find('table', class_='article-table')
character_list = character_table.find_all('tr')

characters = []


i = 0
for character in character_list:
    info = character.find_all('td')
    if (info == None or len(info) == 0):
        continue
    else:
        #print(info)
        character_name = info[1].text.replace('\n','')
        character_url = info[1].find('a')['href']
        character_html = requests.get(wiki_url + character_url).text
        character_soup = BeautifulSoup(character_html, 'lxml')
        talent_book = character_soup.find('div', id='mw-content-text')\
                                        .find_all('table', class_='wikitable')[5]\
                                        .find_all('tr')[1].find('div', class_='card_2')\
                                        .find('a')['title']\
                                        .split()[2]

        characters.append({ "name": character_name,
                            "mat" : talent_book})

with open('characters.json', 'w') as outfile:
    json.dump({"characters" : characters}, outfile)

print("Finished webscraping characters")

html_file = requests.get(wiki_url + weapon_site).text
soup = BeautifulSoup(html_file, 'lxml')
weapon_table = soup.find('table', class_='article-table')
weapon_list = weapon_table.find_all('tr')

weapons = []
for weapon in weapon_list:
    info = weapon.find_all('td')
    if (info == None or len(info) == 0):
        continue
    else:
        weapon_url = info[0].find('a')['href']
        weapon_name = info[0].find('a')['title']
        weapon_html = requests.get(wiki_url + weapon_url).text
        weapon_soup = BeautifulSoup(weapon_html, 'lxml')
        weapon_table = weapon_soup.find('table', class_='wikitable')
        if (weapon_table == None):
            continue
        weapon_entry = weapon_table.find('tr')
        for i in range(6):
            weapon_entry = weapon_entry.next_sibling
        weapon_mat = weapon_entry.find('div', class_='card_2').find('a')['title']

        weapons.append({"name": weapon_name,
                        "mat" : weapon_mat})

with open('weapons.json', 'w') as outfile:
    json.dump({"weapons": weapons}, outfile)

print("Finished webscraping weapons")

