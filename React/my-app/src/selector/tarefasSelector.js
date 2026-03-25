import { atom, selector } from "recoil";
import { tarefasState } from "../atomo/tarefas";
import { userState } from "../atomo/user";

export const filtroState = atom({
  key: "filtroState",
  default: "todas",
});

export const tarefasFiltradasState = selector({
  key: "tarefasFiltradas",
  get: ({ get }) => {
    const tarefas = get(tarefasState);
    const filtro = get(filtroState);
    const usuario = get(userState);

    return tarefas
      .filter(t => t.usuario === usuario?.nome)
      .filter(t => {
        if (filtro === "pendentes") return !t.concluida;
        if (filtro === "concluidas") return t.concluida;
        return true;
      });
  }
}); 