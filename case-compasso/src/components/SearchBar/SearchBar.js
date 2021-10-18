import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { BarContent } from './styled';


const SearchBarra = (props) => {
    const history = useHistory()
    const [form, onChange] = useForm({username:""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        history.push(form.username)
    }

    return(
        <BarContent>           
            <form onSubmit={onSubmitForm}>                
                <input className="inputSearch" name={"username"}
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
        </BarContent>
    )
}
export default SearchBarra