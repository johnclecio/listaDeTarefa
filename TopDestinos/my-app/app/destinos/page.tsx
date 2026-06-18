import Link from "next/link";
import { destinos } from "@/app/lib/destino";

export default function Destinos() {
  return (
    <>
      <h1>Destinos</h1>

      {destinos.map((destino) => (
        <div key={destino.id}>
          <Link href={`/destinos/${destino.id}`}>
            {destino.nome}
          </Link>
        </div>
      ))}
    </>
  );
}