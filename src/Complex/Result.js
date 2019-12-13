import React from "react";

function Result(props){
  return(
    <div className="result">
<h4 className="result__text">Wynik: {props.resultReal?props.resultReal:""} {((props.resultImaginary!=="0") && (props.resultImaginary!==0))?"+ " + props.resultImaginary+"i":""}</h4>
    </div>
  )
}
export default Result;