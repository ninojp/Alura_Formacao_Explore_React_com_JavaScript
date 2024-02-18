import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import ListaParticipantes from "./ListaParticipantes";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";

jest.mock('../state/hook/useListaDeParticipantes', () => {
    return{
        useListaDeParticipantes: jest.fn()
    };
});

describe('Uma lista vazia de Participantes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
    });

    test('Deve ser renderizada sem elementos', () => {
        render(<RecoilRoot>
            <ListaParticipantes />
        </RecoilRoot>);
    
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(0);
    });
});
describe('Uma lista Preenchida de Participantes', () => {
    const participantes = ['Ana', 'Catarina'];
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
    });
    test('Deve ser renderizada com elementos', () => {
        render(<RecoilRoot>
            <ListaParticipantes />
        </RecoilRoot>);
    
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(participantes.length);
    });
});
