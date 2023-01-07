import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import Header from './components/UI/Header';
import CharacterGrid from './components/Characters/CharacterGrid';
import Search from "./components/UI/Search";


function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    //The Breaking Bad API is not working for now, please visit: https://breakingbadapi.com/api to learn more
    const fetchItems = async () => {
      const result = await axios(
        `https://breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
