import React, { useState } from 'react';

const TextForm = () => {

  const handleUpclick = ()=>{
    let newtext = text.toUpperCase();
    setText(newtext);
  }

  const handleloclick = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
  }

  const handleClear = ()=>{
    let newtext = '';
    setText(newtext);
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const [text, setText] = useState('This is text Area');

  

  return (
    <>

    <div>
      <h1>
        Convert to Uppercase
      </h1>

      
      



      <div className='mb-3'>

        <textarea className='form-control' value={text} onChange= {handleOnChange}id= "myBox" rows = "10" columns = "20">

        </textarea>


        </div>      
      <button className="btn btn-primary" onClick={handleUpclick}>Convert to Uppercase</button>
      <button className="btn btn-primary" onClick={handleloclick}>Convert to lowercase</button>
      <button className="btn btn-primary" onClick={handleClear}>Clear</button>


    

    </div>

    <div className='container my-3'>
        <h1>
          Your text summary
        </h1>

        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length
        } Minutes read</p>

        <h2>Preview</h2>
        <p> {text}</p>
    </div>
    </>
    
  );
};

export default TextForm;
