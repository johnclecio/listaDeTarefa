import { Destino } from "@/app/types/types"
import Card from "@/app/components/Card";
import styles from "./Grid.module.css";

type Props ={
    destino: Destino[]
    className?: string;
}

const Grid = ({destino, className}: Props) =>{

    return(
        <section className={`${styles.grid} ${className || ""}`}>
            {destino.map(destino => <Card  key={destino.id} destino={destino}/>)}
        </section>
    )
}

export default Grid;