import axios from 'axios'
import {useState} from 'react'
import { BASE_URL } from '../urls/url'

export const UseStarredData = (url) => {
     const [data, setData] = useState([])

        axios.get(`${BASE_URL}/${url}/starred`)
          .then((response) => {
            setData(response.data)
          })
          .catch((error)=> {
            console.log(error)
            // alert('Ocorreu um erro, tente novamente')
          })
     return data
        }