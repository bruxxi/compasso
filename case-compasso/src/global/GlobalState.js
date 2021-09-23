import { GlobalStateContext } from "./GlobalStateContext";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { BASE_URL } from '../urls/url';

export const GlobalState = (props) => {

    const [isLoading, setIsLoading] = useState(false)
    const [info, setInfo] = useState([])
    const [userName, setUserName] = useState(undefined)
   

 useEffect(() => {
    getUser();
  }, [userName]);

  const getUser = async ()=>{
      console.log(`entrouu`)

        await axios.get(`${BASE_URL}/${userName}`)
        .then((res) => {
            setInfo(res.data)
            console.log(`res`, res.data)
            setIsLoading(false)
        })
        .catch((erro) => {
            alert(`usuário não encontrado`)
        })        
}
// const getRepo = async ()=>{

//     await axios.get()
// }


    
  const data = {
      info,
      setInfo,
   isLoading,
   setIsLoading,
   userName,
   setUserName
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
