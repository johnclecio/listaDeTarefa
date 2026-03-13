import { useContext } from "react";
import { useInput } from "../hooks/useInput";
import { UserContext } from "../contexts/UserContext";
import styles from './ListaTarefa.module.css';


function Login(){
    const nomeDoUsuario = useInput();
    const {setUsuario} = useContext(UserContext);
    const handlelogin =(e) => {
        e.preventDefault();
        setUsuario({nome: nomeDoUsuario.valor, estaLogado: true});
    }
    return(
        <form onSubmit={handlelogin}>
            <input className={styles.input} type="text"
            value={nomeDoUsuario.valor}
            onChange={nomeDoUsuario.onChange} />
            <button className={styles.button} type="submit">Entrar</button>
        </form>

    )
}

export default Login;
