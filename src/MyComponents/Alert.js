import React from 'react'

export default function Alert(props) {
    const capitalize=(word)=>{
        let low=word.toLowerCase();
        let up=low.charAt(0).toUpperCase()+low.slice(1);
        return up;

    }
    return (
       
     <div style={{height:"50px"}}> {props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
            
        </div>}</div>
      
    )
}
