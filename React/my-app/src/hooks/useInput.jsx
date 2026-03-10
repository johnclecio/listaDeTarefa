import { useState } from "react"


export function useinput(valorInicial = ""){

    const [valor, setValor] = useState(valorInicial);

    const onChange = (e) => {
        setValor(e.target.value);
    }

    const valorLimpo = () => valor.trim();

    const limpar = () => setValor("");
    return{
        valor,
        onChange,
        valorLimpo,
        limpar

    }
}