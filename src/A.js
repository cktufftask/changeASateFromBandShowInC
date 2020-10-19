import React from 'react'
import B from './B';
import C from './C';

const  A=()=> {
    const [name , setName]=  React.useState('');
    const onChangeHandle= (e)=>{
        setName(e);
    }

    return (
        <div>
            <label>A Component</label>
            <br/>
            <B  changeHandle={onChangeHandle} name={name}/>
            <br/>
            <C val={name} />
            
        </div>
    )
}
export default A;
