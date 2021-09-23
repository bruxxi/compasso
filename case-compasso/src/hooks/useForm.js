import { useState , useContext } from 'react'
import { GlobalStateContext } from "../global/GlobalStateContext";

const useForm = (initialState) =>{
    const [form, setForm] = useState(initialState)
    const {setIsLoading, setUserName} =  useContext(GlobalStateContext)

    const onChange = (event) => {
        const {value, name} = event.target
        setForm({...form, [name]: value})
        setIsLoading(true)
        setUserName(event.target.value)
    }
    const cleanFields = () => {
        setForm(initialState);
    };
  
    return [form, onChange, cleanFields]
}
export default useForm