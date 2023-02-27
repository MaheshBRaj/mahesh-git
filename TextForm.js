import React,{useState} from 'react'

export default function TextForm(props) {
    var event;
    const handleClick =()=>{
        console.log("uppercase button clicked" +text);
        let newText=text.toLocaleUpperCase();
        setText(newText)
    }
    const handleonClick =()=>{
      console.log("uppercase button clicked" +text);
      let newText=text.toLocaleLowerCase();
      setText(newText)
  }
  const handleclearClick =()=>{
    console.log("uppercase button clicked" +text);
    let newText='';
    setText(newText)
}
const handleCopy =()=>{
  var text= document.getElementById("mybox");
  text.select();
  navigator.clipboard.writeText(text.value);
}
const handleExtraSpace=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "))
}
    const handleOnChange =(e) => {
        setText(e.target.value);
        //  setText(event);
    }
    const [text, setText] = useState('');
  return (
    <>
  
    <div className="container" style={{color:props.mode ==='dark' ? 'white':'#042743'}}>
        <h1>{props.heading}</h1>

  <div className="my-3 ">

    <textarea className="form-control" value={text } onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark' ? 'grey':'white', color:props.mode ==='dark' ? 'white':'#042743 '}} id="mybox"  rows="10"></textarea>
    
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>ConvertToUPcase</button>
  <button type="submit" className="btn btn-primary mx-3" onClick={handleonClick}>ConvertToLowerCase</button>
  <button type="submit" className="btn btn-primary mx-2" onClick={handleclearClick}>ClearText</button>
  <button type="submit" className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
  <button type="submit" className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3" style={{color:props.mode ==='dark' ? 'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p> {text.split (/\s+/).length} your words ,{text.length} characters</p>

    </div>
    </>
  )
}
