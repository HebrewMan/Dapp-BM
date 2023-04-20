import React from 'react';

function Enemy(props: any) {

    let enemyInfo = ['Id', 'Odds', 'Reward', 'Xp', 'Hp', 'Name'];

  
    const handleChange = (event:any)=>{
        event.preventDefault();
        // const index = enemyInfo.findIndex(element => element === event.target.name);
        // enemyData[index] = event.target.value;
        // setEnemyData(enemyData);
        props.setInputData(event.target.name.toLowerCase(),event.target.value);
    }

    return (
        <React.Fragment>
            {enemyInfo.map((item,index) =>
                <p key={index} >Enemy {item} * : <input name={item} type="text" onChange={handleChange} /> </p>
            )}
        </React.Fragment>
    )
}
export default Enemy;
