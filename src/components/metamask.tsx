import React ,{useState,useEffect} from 'react';
import {ethers} from 'ethers';

function Home() {

    const [provider,setProvider] = useState();
    const [balance,setBalance] = useState();
    let web3Provider:any;

    const {ethereum} = (window as any).ethereum;

    useEffect(()=>{
        async function connetToNetwork(){
            if(ethereum){
                web3Provider = new ethers.providers.Web3Provider(ethereum);
                const signer = web3Provider.getSigner();
                setProvider(web3Provider);
            }

            try{
                const accounts = await web3Provider.listAccounts();
                const account = accounts[0];
                const _balance = await web3Provider.getBalance(account);
                setBalance(_balance);
            }catch(e){
                console.error(e);
            }
        }
        connetToNetwork();
    },[])

    return(
        <div>
            <h1>My Ether balance</h1>
            <p>{balance}</p>
        </div>
    )
}

export default Home;
