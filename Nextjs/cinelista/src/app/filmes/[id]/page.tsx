import { filmes } from "@/src/lib/filmes";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./DetailsFilme.module.css"

type Props = {
  params: Promise<{
    id: number;
  }>;
};

export default async function DetalheFilme({ params }: Props) {
  const { id } = await params;

  const details = filmes.find( filme => filme.id == id);

  if(!details) 
   return notFound();
  
  

  const {title, imagem, description} = details;

  return (

      <>
        <div className={styles.detalhes}>
            <div className={styles.detalhes_container}>
                <Link className={styles.detalhes_voltar} href={`/`}>Voltar</Link>
                <section>
                    <figure>
                        <img className={styles.detalhes_imagem} src={imagem} alt={`Poster de filme: ${title}`} />
                    </figure>
                    <article className={styles.detalhes_info}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </article>
                </section>
            </div>
        </div>
      </>


  );    
}