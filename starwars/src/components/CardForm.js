import React, { useState } from "react";
// import CharacterCard from "./CharacterCard";

function CardForm(props) {
  const [input, setInput] = useState("");
  const [cardData, setCardData] = useState({});

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log("card value,", input);
  };

  const populateCardData = () => {
    props.cardData.filter((crrV) => {
      const matchObj = crrV.name === input;
      console.log("I am the matchObj", matchObj);
      return setCardData(matchObj);
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    populateCardData();
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="">
          Select {props.topic} Name:
          <br />
          <select
            id={input}
            value={input}
            onChange={(e) => handleChange(e)}
            disabled={props.cardData === 0}
          >
            <option value="placeholder">--Select--</option>
            {props.cardData.map((crrObj) => {
              return (
                <option key={crrObj.name} value={crrObj.name}>
                  {crrObj.name}
                </option>
              );
            })}
          </select>
        </label>
        <br />
        <button>Submit</button>
      </form>
      <div>
        {/* 
        {populateCardData.map(crrV => {
          <CharacterCard image={crrV} />;
        })} */}
      </div>
    </div>
  );
}

export default CardForm;
