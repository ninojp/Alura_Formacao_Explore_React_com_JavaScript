import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IRestaurante from "../../../interfaces/IRestaurante";
import http from "../../../http/http";

const FormRestaurantes = () => {
    const parametros = useParams();
    const [nomeRestaurante, setNomeRestaurante] = useState('');

    useEffect(() => {
        if (parametros.id) {
            http.get<IRestaurante>(`restaurantes/${parametros.id}/`)
                .then(resposta => setNomeRestaurante(resposta.data.nome));
        };
    }, [parametros]);

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        if (parametros.id) {
            http.put(`restaurantes/${parametros.id}/`, { nome: nomeRestaurante })
                .then(() => {
                    alert('Restaurante Atualizado com sucesso!')
                });
        } else {
            http.post('restaurantes/', { nome: nomeRestaurante })
                .then(() => {
                    alert('Restaurante Cadastrado com sucesso!')
                });
        };
    };
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 5}}>
            <Box sx={{marginTop: 2}} component='form' onSubmit={aoSubmeterForm}>
                <Typography component='h1' variant='h5'>Formulário de Restaurantes</Typography>
                <TextField
                    value={nomeRestaurante}
                    onChange={evento => setNomeRestaurante(evento.target.value)}
                    label="Nome do Restaurante"
                    variant="standard"
                    fullWidth
                    required
                    sx={{marginTop: 2}}
                />
                <Button sx={{marginTop: 2}} fullWidth type="submit" variant="outlined">Salvar</Button>
            </Box>
        </Box>
    );
};
export default FormRestaurantes;
