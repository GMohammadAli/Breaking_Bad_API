import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import Header from './components/UI/Header';
import CharacterGrid from './components/Characters/CharacterGrid';

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
     const result = await axios(
       `https://www.breakingbadapi.com/api/characters`
     )
     setItems(result.data)
     setIsLoading(false)
    }

    fetchItems()
  }, [])

  return (
    <div className="container">
      <Header />
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
