import logo from './logo.svg';
import './App.css';
import './components/week'
import DomainWeek from './components/week';
import Select from './components/select';

function App() {
  return (
    <div className='container'>
      <DomainWeek />
      <div className='list-container'>
        <Select character={true}/>
        <Select character={false}/>
      </div>
    </div>
  );
}

export default App;
