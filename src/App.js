import React, { Component } from "react";
import "./App.css";
import { CardList } from "./component/card-list/card-list.component";
import { SearchBox } from "./component/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resonse) => resonse.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filterMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>monster rolodex</h1>
        <SearchBox
          placeholder="search monster"
          handelSearchBox={(e) =>
            this.setState({ searchField: e.target.value })
          }
        />
        <CardList monsters={filterMonster} />
      </div>
    );
  }
}

export default App;
