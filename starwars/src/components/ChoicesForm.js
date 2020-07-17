import React, { useState, useEffect } from "react";
import axios from "axios";
import CardForm from "./CardForm";
// import CardContainer from "./CardContainer";
function ChoicesForm() {
  const [choiceArray, setChoiceArray] = useState({});
  const [selection, setSelection] = useState("");
  const [cardData, setCardData] = useState([]);

  const handleChange = (e) => {
    setSelection(e.target.value);
    console.log("selection value,", selection);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    requestData();
  };

  // Selection
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/").then((res) => {
      console.log("i am res!", res.data);
      setChoiceArray(res.data);
    });
  }, []);

  // API Call After Aelection
  // "https://rickandmortyapi.com/api/character",

  function requestData() {
    console.log(
      "I am the value of selection in api call",
      selection.slice(0, -1)
    );
    console.log(`https://rickandmortyapi.com/api/${selection.slice(0, -1)}`);
    axios
      .get(`https://rickandmortyapi.com/api/${selection.slice(0, -1)}`)
      .then((res) => {
        console.log("cardData!", res.data.results);
        setCardData(res.data.results);
      })
      .catch((err) => {
        console.log(err, "found!");
      });
  }

  return (
    <div>
      <h1>Rick and Morty App</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="topic-selection">
          Select Topic:
          <br />
          <select
            name="topic-selection"
            id="topic-selection"
            onChange={(e) => handleChange(e)}
          >
            <option value="placeholder" key="0">
              --Select--
            </option>
            {Object.keys(choiceArray).map((crrV) => {
              return (
                <option value={crrV} key={crrV}>
                  {crrV}
                </option>
              );
            })}
          </select>
        </label>
        <br />
        <button>Submit!</button>
      </form>
      <br />
      <br />
      <div>
        <CardForm cardData={cardData} name={cardData.name} />
      </div>
      <br />
      <br />
      {/* <CardContainer /> */}
    </div>
  );
}

export default ChoicesForm;
