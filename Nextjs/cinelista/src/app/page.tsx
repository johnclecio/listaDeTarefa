import Title from "./components/Title";
import Grid from "./components/Grid";
import {filmes} from "@/src/lib/filmes";
export default function Home() {
  return (
    <>
    <Title title="filmes em destaque"/>
    
    <Grid filmes={filmes}/>

    </>
  );
}
