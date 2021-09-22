import { useState } from 'react'

const useForm = (initialState) =>{
    const [form, setForm] = useState(initialState)

    const onChange = (event) => {
        const {value, name} = event.target
        setForm({...form, [name]: value})
    }
  
    return [form, onChange]
}
export default useForm