import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [
      ],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({ monsters: data }))
  }

  handleChange = (e) =>  {
    this.setState({ searchfield: e.target.value })
  }

  render() {
    const { monsters, searchfield } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
      );
    return (    
    <div className="App">
      <h1>Monsoters Rolodex</h1>
      <SearchBox 
        placeholder='search monsters'
        handleChange={ this.handleChange }>
      </SearchBox>
      <CardList monsters={filteredMonsters}>
      </CardList>
    </div>)
  }
}

export default App;
