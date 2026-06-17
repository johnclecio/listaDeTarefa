import { Destino } from "@/app/types/types";
import styles from "./Card.module.css";

type Props = {
    destino: Destino
}   

const Card  = ({destino}: Props) =>{
    const {id, nome, pais, continente, imagem, descricao, precoMedio} = destino;

    return(
        <div className={styles.card} key={id}>
            <img src={imagem} alt={`Ponto turístico ${nome}`} width={300} height={200} className={styles.card_poster}/>
            <div className={styles.card_info}>
                <h3 className={styles.card_title}>{nome}</h3>
                <p>{pais}</p>
                <p>{continente}</p>

                <p>
                {precoMedio?.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                })}
                </p>

                <p className={styles.card_description}>{descricao}</p>
            </div>
         </div>  
    );
}   