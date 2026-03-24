import { useInput } from "../../hooks/useInput";
import { Form, Input, Botao } from './style';
import { useSetRecoilState } from "recoil";
import { userState } from "../../state/user";

function Login(){
    const nomeDoUsuario = useInput();

    const setUsuario = useSetRecoilState(userState);

    const handlelogin = (e) => {
        e.preventDefault();

        if (!nomeDoUsuario.valor.trim()) return;

        setUsuario({
            nome: nomeDoUsuario.valor,
            estaLogado: true
        });
    }

    return(
        <Form onSubmit={handlelogin}>
            <Input
                type="text"
                placeholder="Digite seu nome"
                value={nomeDoUsuario.valor}
                onChange={nomeDoUsuario.onChange}
            />
            <Botao type="submit">Entrar</Botao>
        </Form>
    );
}

export default Login;   