//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props) {
    return (
        <div className="granC">
            <div className="ca">
                <i className="fa-regular fa-clock"></i>
            </div>
            <div className="cinco"></div>
            <div className="cuatro"></div>
            <div className="tres"></div>
            <div className="dos"></div>
            <div className="uno"></div>
        </div>);
}

//render your react application
ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
