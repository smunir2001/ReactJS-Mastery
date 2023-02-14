import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '12e1231e'
        },
        {
          name: 'Frank',
          id: '12ed2dacas'
        },
        {
          name: 'Jacky',
          id: '1231e'
        },
        {
          name: 'Sami',
          id: '12e1ef'
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>
          })
        }
      </div>
    );
  }
}

export default App;