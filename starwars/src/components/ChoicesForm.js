import React, { useState, useEffect } from "react";
import axios from "axios";

function ChoicesForm() {
  const [choiceArray, setChoiceArray] = useState({});

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/").then((res) => {
      console.log("i am res!", res.data);
      setChoiceArray(res.data);
    });
  }, []);

  return (
    // Object.keys(user)
    <div>
      <h1>Test!</h1>
      <form>
        <label htmlFor="topic-selection">
          Select Topic:
          <select name="topic-selection" id="topic-selection">
            <option value="placeholder">--Select--</option>
            {Object.keys(choiceArray).map((crrV) => {
              return <option key={crrV}>{crrV}</option>;
            })}
          </select>
        </label>
      </form>
    </div>
  );
}

export default ChoicesForm;
