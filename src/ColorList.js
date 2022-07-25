import React from "react";
import {Link} from "react-router-dom"

const ColorList = ({colors}) =>{
    const colorLinks = Object.keys(colors).map(colorName =>(
        <li key={colorName}>
            <Link to={`/colors/${colorName}`}>{colorName}</Link>
        </li>
    ));


    return (
        <div>
            <h1>Hello. Lots of Colors Here</h1>
            <div>
                <h4>Choose a color</h4>
                <ul>{colorLinks}</ul>
            </div>
            <div>
                <Link to="/colors/new">Add a color</Link>
            </div>
        </div>
    );
}

export default ColorList
