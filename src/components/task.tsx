import { log } from 'console';
import React, { useState, useEffect, useRef } from 'react';

function Task(props: any) {

    let enemyInfo = ['Amount', 'Delete', ];

    let data = {
        amount: '',
        delete:''
      }

    const [inputValue1, setInputValue1] = useState('');

    const handleChange = (event:any)=>{
        event.preventDefault();
        setInputValue1(event.target.value)
        console.log(event.target.value)
    }

    return (
        <React.Fragment>
            {enemyInfo.map((item,index) =>
                <p key={index} >donation {item} * : <input type="text" value={inputValue1} onChange={handleChange } ></input> </p>
            )}
        </React.Fragment>
    )
}
export default Task;
