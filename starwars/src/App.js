import React, { useEffect, useState } from "react";
import "./App.css";
import ChoicesForm from "./components/ChoicesForm";
import CharacterCard from "./components/CharacterCard";
import axios from "axios";

const App = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      console.log("for cards!", res.data.results);
      setCardData(res.data.results);
    });
  }, []);

  return (
    <div className="App">
      <header className="Header">Ricky App</header>
      <ChoicesForm />
      {cardData.map((crrObj) => {
        return (
          <CharacterCard
            species={crrObj.species}
            name={crrObj.name}
            image={crrObj.image}
          />
        );
      })}
    </div>
  );
};

export default App;
