import React from "react";

function Rezultat(props){
  return(
    <div className="result">
      <h4 className="result__text">Wynik: {props.rezultat}</h4>
    </div>
  )
}
export default Rezultat;