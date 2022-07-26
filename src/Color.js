// import React from "react"
// import {Link, useParams,useNavigate} from "react-router-dom"
// import "./Color.css"

// const Color = ({colors}) => {
//     const {color} = useParams()
//     const hex = colors[color]
//     const history = useNavigate();

//     if(!hex){
//         history.push("/colors");
//     }


//     return (
//         <div className="Color" style={{backgroundColor: hex}}>
//             <h3>{color}</h3>
//             <h5>
//                 <Link to="/">Go Back</Link>
//             </h5>
//         </div>
//     )
// }

// export default Color;

import React from "react";
import { Link } from "react-router-dom";


function Color({hex, color, history}) {
  if (!hex) {
    history.push("/colors");
  }

  return (
    <div className="Color" style={{ backgroundColor: hex }}>
      <p>this is {color}.</p>
      <p>Isn't it beautiful?</p>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
}

export default Color;
