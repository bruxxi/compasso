import axios from 'axios'
import { BASE_URL } from '../urls/url'
import { useLayoutEffect, useState } from 'react'

export const RequestSearch = (username) => {
    const [data, setData] = useState([])
 
    useLayoutEffect (() => {

        axios.get(`${BASE_URL}/${username.username}`)
        .then((res) => {
            setData(res.data)
        })
        .catch((erro) => {
            alert(erro)
        })

    },[username])
    return data

}