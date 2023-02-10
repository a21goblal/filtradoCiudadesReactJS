import logo from './logo.svg';
import { useState } from 'react';
import './App.css';


function App() {
  const cities = ['Jaen', 'Córdoba', 'Sevilla', 'Huelva', 'Cádiz', 'Málaga', 'Granada', 'Almería'];
  const [filter, setFilter] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input id="filter"
          name="filter"
          type="text"
          value={filter}
          onChange={event => setFilter(event.target.value)}
        />
      <ul>
      {cities.filter(f => f.includes(filter) || filter === '')
            .map(f => <li key={f}>{f}</li>)}
      </ul>
      </header>
    </div>
  );
}

export default App;
