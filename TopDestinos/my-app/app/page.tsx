
import Title from "@/app/components/Title";
import Grid from "@/app/components/Grid";
import { destinos } from "@/app/lib/destino";

export default function Home() {
  return (
    <>
    <Title title ="Cuida Na Promoção"/>
    <Grid destino={destinos}/>
    </>
  );
}
