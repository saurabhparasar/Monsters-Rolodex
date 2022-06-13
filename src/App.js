import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filterMons, setFiltermons] = useState(monsters);

  const onSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => setMonsters(user));
  }, []);

  useEffect(() => {
    const searchText = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(search)
    );
    setFiltermons(searchText);
  }, [search, monsters]);
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        handleChange={onSearch}
        placeholder="search monsters"
        className="search-box"
      />
      <CardList monsters={filterMons} />
    </div>
  );
};
export default App;
