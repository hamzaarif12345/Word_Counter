import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState(''); {/* convert the state to the setstate. */ }
  const handleupclick = () => {
    console.log("uppercase was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const handleloclick = () => {
    console.log("uppercase was clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  const extraspace_remove = () => {
  let newText = text.split(/[ ]+/); // Replace multiple spaces after a period with a single space
  setText(newText.join(" "));
};


  const handletoclear = () => {
    console.log("uppercase was clicked");
    let newtext = ('');
    setText(newtext);
  }
  const handleonchange = (event) => {
    console.log("on changed");
    setText(event.target.value);
  }
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">{/*props.heading*/}</label>
          <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>

        </div>
        <button className="text-bg-primary  mx-2" onClick={handleupclick}>Convert to UpperCase</button>
        <button className="text-bg-primary  mx-2" onClick={handleloclick}>Convert to LowerCase</button>
        <button className="text-bg-primary  mx-2" onClick={handletoclear}>Clear the text</button>
        <button className="text-bg-primary  mx-2" onClick={extraspace_remove}>remove the extra space</button>
      </div>
      <div className="container my-3">
        <h2>Your text summary is here</h2>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
      </div>
    </>

  );
}

