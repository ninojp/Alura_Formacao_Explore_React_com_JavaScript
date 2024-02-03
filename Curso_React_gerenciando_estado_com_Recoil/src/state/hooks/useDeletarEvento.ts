import { useSetRecoilState } from "recoil";
import { listaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";

const useDeletarEvento = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
    return (evento: IEvento) => {
        setListaDeEventos((listaAntiga) => [...listaAntiga.filter(evt => evento.id !== evt.id)])
    }
};
export default useDeletarEvento;
