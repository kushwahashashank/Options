import React,{ useState} from 'react'
import "./home.css"
function Home() {
const [data,setData] = useState("");
const changehandler =(e)=>{
setData(e.target.value);
}

const addhandler = ()=>{
  // setOption__data([...option_data , data]);
  const select1 = document.querySelector('.select');
  console.log(select1)
  const option1 = document.createElement('option');
  option1.innerText=data;
  select1.appendChild(option1);
  const input1 = document.querySelector('.option__add');
input1.innerText=null;
}

// console.log(data)
// console.log(option_data)


  return (
    <div className='homeContainer'>

    <div className='home'>
      <div className="head">
        <input type="text" placeholder='Form title' className='title' />
        <button className='btn'>Check Box</button>
        <button className='btn'>Drop Down</button>
        </div>
        <div className="question">
                <input type="text" placeholder='Your Question'  />
        </div>
    
          <select name="Select" className="select" id="select1" placeholder='Select'  >
           <option value="">Select your option</option>
           {/* <option value="">Option 1</option> */}
                {/* {option_data.map((v) => (
        <option key={v} value="">
          {v}
        </option> 
      ))} */}
          </select>
          <div className="add">
            <input type="text" name='option_input' placeholder='Add a option' onChange={changehandler} className="option__add" />
            <button className="add__option" onClick={addhandler}>Add</button>
          </div>
    </div>
 
    </div>
  )
}

export default Home