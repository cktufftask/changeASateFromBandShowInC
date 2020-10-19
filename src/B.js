import React from 'react'

const  B=(props)=> {

    const onChangeEvent=(e)=>{
         props.changeHandle(e.target.value);
    }
    return (
        <div>
            <label>B Component</label>
            <br/>
            <input type="text" value={props.name} onChange={(e)=>{onChangeEvent(e)}} />
         </div>
    )
}
export default B;
