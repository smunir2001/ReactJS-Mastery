import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'John D.',
      university: 'Massachusetts Institute of Technology'
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi, {this.state.name}<br></br>{this.state.university}</p>
          <button onClick={() => {
            this.setState((state, props) => {
              // updater function where you will return an object to shallow merge
              return {
                name: 'Sami D. Munir',
                university: 'Rutgers University'
              }
            }, () => {
              // callback function that runs only when the state object has been fully updated
              alert(this.state);
            });
          }}>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;