import { destinos } from "@/app/lib/destino";

export default async function DestinoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const destino = destinos.find(
    (d) => d.id === Number(id)
  );

  if (!destino) {
    return <h1>Destino não encontrado</h1>;
  }

  return (
    <>
      <h1>{destino.nome}</h1>
      <p>{destino.descricao}</p>
    </>
  );
}