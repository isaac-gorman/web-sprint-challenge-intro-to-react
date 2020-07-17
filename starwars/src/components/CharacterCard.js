import React, { useState } from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  width: 400px;
  height: 200px;
  background-color: white;
  margin-top: 5px;
  margin-bottom: 5px;
  display: felx;
  flex-direction: column;
`;
const CardIMG = styled.img`
  width: 100%;
  height: 40%;
`;

const InfoDiv = styled.div`
  width: 90%;
  display: flex:
`;

const Name = styled.h3`
  font-size: 0.5em;
`;

const Species = styled.h3`
  font-size: 0.5em;
`;

function CharacterCard(props) {
  return (
    <CardDiv>
      <CardIMG src={props.image} />
      <InfoDiv>
        <Name>{props.name}</Name>
        <Species>Species: {props.species}</Species>
      </InfoDiv>
    </CardDiv>
  );
}

export default CharacterCard;
