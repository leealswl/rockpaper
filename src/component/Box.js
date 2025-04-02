import React from 'react'


const Box = (props) => {
    
    let result

    if (
        props.title.toLowerCase() === "computer" &&
        props.result !== "TIE" &&
        props.result !== ""
        ) {
        result = props.result === "WIN" ? "LOSE" : "WIN";
        } else {
        result = props.result;
        }
          

    if (props.title === "computer") {
        console.log("computer", result);
      }


    return (
        <div className={`box ${result && result.toLowerCase()}`}>
            <h1>{props.title}</h1>
            <img className='item-img'  alt=""
            src={props.item && props.item.url} />
            <h2 className="result-text">{result}</h2>
        </div>
    )
}

export default Box