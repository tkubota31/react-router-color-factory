// import React, {useState} from "react"
// import { useNavigate } from "react-router-dom"

// const NewColorForm = ({addColor}) =>{
// const [formData, setFormData] = useState({name: "", hex:"#ffffff"});
// const history = useNavigate();


// const handleChange = (e) =>{
//     const{name,value} = e.target
//     setFormData(d =>({...d,[name]:value }));
// }

// const handleSubmit = (e) =>{
//     e.preventDefault();
//     addColor({[formData.name]:formData.hex});
//     history.push("/colors");
// }

// return(
//     <div>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="color">Color:</label>
//             <input
//             name="color"
//             id="color"
//             placeholder="What color do you like"
//             onChange={handleChange}
//             value={formData.name} />
//           </div>

//           <div>
//               <label htmlFor="hex">Hex Value</label>
//               <input
//               type="color"
//               name="hex"
//               id="hex"
//               onChange={handleChange}
//               value={formData.hex} />
//           </div>

//           <button>Add Color</button>
//         </form>
//     </div>
// )
// };

// export default NewColorForm

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function NewColorForm({addColor}) {

  const [form, updateForm] = useState({name: "", hex:"#ffffff"});
  const history = useNavigate();

  function handleChange(e) {
    e.persist();
    updateForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addColor({ [form.name]: form.hex });
    history("/colors");
  }

  const {hex, name} = form;

  return (
    <div className="NewColor">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Color name</label>
          <input
            name="name"
            id="name"
            placeholder="Enter color name"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="hex">Color value</label>
          <input
            type="color"
            name="hex"
            id="hex"
            onChange={handleChange}
            value={hex}
          />
        </div>
        <input type="Submit" value="Add this color" readOnly />
      </form>
    </div>
  );
}

export default NewColorForm;
