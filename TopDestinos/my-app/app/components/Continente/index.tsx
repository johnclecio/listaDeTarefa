import Title from "@/app/components/Title";
import Grid from "@/app/components/Grid";
import { destinos } from "@/app/lib/destino";
import styles from "./Continente.module.css";

type Props = {
    continente: string;
};

const Continente = ({ continente }: Props) => {
    const destinosFiltrados = destinos.filter(
        (destino) => destino.continente === continente
    );

    return (
        <>
            <Title title={continente} />
            <Grid destino={destinosFiltrados} 
            className={styles.singleColumn}/>
        </>
    );
};

export default Continente;