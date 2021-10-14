import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';


const SearchBarra = (props) => {
    const history = useHistory()
    const [form, onChange] = useForm({username:""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        history.push(form.username)
    }

    return(
        <div>           
            <form onSubmit={onSubmitForm}>                
                <input name={"username"}
                value={form.username}
                onChange={onChange}
                label={"Digite o nome do usuário GitHub"}
                />
                <Button variant="contained" onClick={onSubmitForm}
                type={"submit"}
                >
                Pesquisar
                </Button>
            </form>       
        </div>
    )
}
export default SearchBarra