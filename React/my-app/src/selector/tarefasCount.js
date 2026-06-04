import { selector } from "recoil";
import { tarefasFiltradasState } from "./tarefasSelector";

export const tarefasCountSelector = selector({
  key: "tarefasCount",
  get: ({ get }) => {
    const tarefas = get(tarefasFiltradasState);
    return tarefas.length;
  }
});