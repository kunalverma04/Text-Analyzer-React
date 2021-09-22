import React, { useState } from 'react'

export default function Textform(props) {

  
  const [Text, setText] = useState("")
  // let Words=Text.length>0 ? Text.trim().split(/ \s+/).length:0;
  let Words=Text.split(/\s+/).filter((e)=>{return e.length!==0}).length

  const UpperbtnClick = () => {

    setText(Text.toUpperCase())
    props.funAlert("Text Converted To Upper Case","success")

  }
  const LowerbtnClick = () => {

    setText(Text.toLowerCase())
    props.funAlert("Text Converted To Lower Case","success")

  }
  const ClearbtnClick = () => {

    setText("")
    props.funAlert("Text Cleared ","success")
  }
 
 

  // The action of this function is to speak text what ever you written 
const handleTextToSpeech = (e1) => {
  var msg = new SpeechSynthesisUtterance();
  msg.text = Text //  text what you written
  // console.log(e1.target.value);
  window.speechSynthesis.speak(msg);
};

const handleExtraSpaces=()=>{

  let newtext=Text.split(/[ ]+/);
  setText(newtext.join(" "))
}
const handleCopy = () => {

  var text = document.getElementById("exampleFormControlTextarea1");
  text.select();
  text.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(text.value);
  // var Text = document.getElementById("exampleFormControlTextarea1");
  // Text.select();
  // navigator.clipboard.writeText(Text.value);
  // Text.setSelectionRange(0, 9999);
  props.funAlert("Text Copied To Clipboard ","success")


}
  const OnTextChange = (e) => {
    setText(e.target.value)
    

  }


  return (
    <>
      <div className="container my-3" style={{color:props.mode === "light" ?"black" :"white" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
          <textarea className="form-control" value={Text}  style={{backgroundColor:props.mode === "light" ?"white" :"#505356",color:props.mode === "light" ?"black" :"white",cursor:"text" }} onChange={OnTextChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" disabled={Text.length===0} onClick={UpperbtnClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={Text.length===0} onClick={LowerbtnClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={Text.length===0} onClick={ClearbtnClick}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" disabled={Text.length===0} onClick={handleTextToSpeech}>Read Out</button>
        <button className="btn btn-primary mx-1 my-1" disabled={Text.length===0} onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" disabled={Text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3"  style={{color:props.mode === "light" ?"black" :"white" }}>
        <h2>Your Text Summary</h2>
        <p>{Words} Words and {Text.length} Characters</p>
        <p>{(0.008*Words).toFixed(4)} Minutes read</p>
        <h2>Preview Text</h2>
        <p>{Text.length>0?Text:"Enter The Text Above To Preview"}</p>

      </div>
    </>
  )
}
