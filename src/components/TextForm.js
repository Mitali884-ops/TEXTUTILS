import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
      // console.log("UpperCase was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to upper case", "success");
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  }
  const handleClrClick = ()=>{
    let newText = ("");
    setText(newText);
    props.showAlert("Text cleared", "success");
  }

  const handleCopy = ()=>{
      var text = document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard", "success");
  } 

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
}

  const handleOnChange = (event)=>{
      // console.log("OnChange");
      setText(event.target.value);
  }

  const [text, setText] = useState('');
  // text = "new text"; wrong way to change the text
  // setText("new text") //Correct way to change the text

  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ? 'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
          <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey':'white',
           color: props.mode === 'dark' ? 'white':'black'}} value={text} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-3" onClick={handleClrClick}>Clear text</button>
      <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Space</button>

    </div>
    <div className="container" my-3  style={{color: props.mode === 'dark' ? 'white':'black'}}>
        <h1>Your text summary</h1>
        <p><b>{text.split(" ").length} words and {text.length} characters</b></p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter something to preview it here"}</p>
    </div>
    </>
  )
}
