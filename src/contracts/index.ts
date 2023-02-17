import {ethers,Signer} from 'ethers';

import gameAbi from '../abis/game.json';
import monsterAbi from '../abis/monster.json';


const Monster = (provider:Signer)=>{
    return new ethers.Contract('0x09B2731870B347446a3aBC50f19011Bf96F357dc',monsterAbi,provider);//monster edit enemy info
}

const Game = (provider:Signer)=>{
    return new ethers.Contract('0x1Dc68b16062FB9b0Cac4bB9F11076e8C8c61b2Fe',gameAbi,provider);//game edit task infoc
}


export {
    Game,
    Monster,
}