import { useContext } from "react";
import { useinput } from "../hooks/useInput";
import { UserContext } from "../contexts/UserContext";


function Login(){
    const nomeDoUsuario = useinput();
    const {setUsuario} = useContext(UserContext);
    const handlelogin =(e) => {
        e.preventDefault();
        setUsuario({nome: nomeDoUsuario.valor, estaLogado: true});
    }
    return(
        <form onSubmit={handlelogin}>
            <input type="text"
            value={nomeDoUsuario.valor}
            onChange={nomeDoUsuario.onChange} />
            <button type="submit">Entrar</button>
        </form>

    )
}

export default Login;