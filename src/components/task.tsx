import { log } from 'console';
import React, { useState, useEffect, useRef } from 'react';

function Task(props: any) {

    let enemyInfo = ['Id', 'Odds', 'Reward'];

    let data = {
        id: '',
        odds: '',
        reward: '',
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
                <p key={index} >Enemy {item} * : <input type="text" value={inputValue1} onChange={handleChange } ></input> </p>
            )}
        </React.Fragment>
    )
}
export default Task;
