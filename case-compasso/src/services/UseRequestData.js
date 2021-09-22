import axios from 'axios'
import { useLayoutEffect, useState } from 'react'

export const UseRequestData = (url) => {
    const [data, setData] = useState([])
 
    useLayoutEffect (() => {

        axios.get(url)
        .then((res) => {
            setData(res.data)
                      
        })
        .catch((erro) => {
        })

    },[url])
    return data

}