import React, {useState} from "react"
import {useHistory} from "react-router-dom"

const NewColorForm = ({addColor}) =>{
const [formData, setFormData] = useState({name: "", hex:"#ffffff"});
const history = useHistory();


const handleChange = (e) =>{
    const{name,value} = e.target
    setFormData(d =>({...d,[name]:value }));
}

const handleSubmit = (e) =>{
    e.preventDefault();
    addColor({[formData.name]:formData.hex});
    history.push("/colors");
}

return(
    <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="color">Color:</label>
            <input
            name="color"
            id="color"
            placeholder="What color do you like"
            onChange={handleChange}
            value={formData.name} />
          </div>

          <div>
              <label htmlFor="hex">Hex Value</label>
              <input
              type="color"
              name="hex"
              id="hex"
              onChange={handleChange}
              value={formData.hex} />
          </div>

          <button>Add Color</button>
        </form>
    </div>
)
};

export default NewColorForm
