import { Box, Button, Container, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import http from "../../../http/http";
import ITag from "../../../interfaces/ITag";
import IRestaurante from "../../../interfaces/IRestaurante";

const FormPrato = () => {
    const [nomePrato, setNomePrato] = useState('');
    const [descricao, setDescricao] = useState('');
    const [tag, setTag] = useState('');
    const [tags, setTags] = useState<ITag[]>([]);
    const [restaurante, setRestaurante] = useState('');
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
    const [imagem, setImagem] = useState<File | null>(null);

    useEffect(() => {
        //Esta vindo da API um objeto{tags}
        http.get<{tags: ITag[]}>('tags/')
        .then(resposta => setTags(resposta.data.tags));
        //Esta vindo da API uma lista[]
        http.get<IRestaurante[]>('restaurantes/')
        .then(resposta => setRestaurantes(resposta.data));
    }, []);

    const selecionarArquivo = (evento: React.ChangeEvent<HTMLInputElement>) => {
        if (evento.target.files?.length) {
            setImagem(evento.target.files[0]);
        } else {
            setImagem(null);
        }
    }
    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        const formData = new FormData();
        formData.append('nome', nomePrato);
        formData.append('descricao', descricao);
        formData.append('tag', tag);
        formData.append('restaurante', restaurante);
        if (imagem) {
            formData.append('imagem', imagem);
        }
        http.request({
            url: 'pratos/',
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        })
        .then(() => {
            //Para Limpar o formulário após submeter
            setNomePrato('');
            setDescricao('');
            setTag('');
            setRestaurante('');
            alert('Prato cadastrado com sucesso!')
        })
        .catch(erro => console.log(erro));
    };
    return (
        <Box>
            <Container maxWidth="lg" sx={{ marginTop: 1 }}>
                <Paper sx={{ p: 2 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 5, flexGrow: 1 }}>
                        <Typography component='h1' variant='h5'>Formulário do Prato</Typography>
                        <Box sx={{ marginTop: 2, width: "100%" }} component='form' onSubmit={aoSubmeterForm}>
                            <TextField
                                value={nomePrato}
                                onChange={evento => setNomePrato(evento.target.value)}
                                label="Nome do Prato"
                                variant="standard"
                                fullWidth
                                required
                                sx={{ marginTop: 4 }}
                            />
                            <TextField
                                value={descricao}
                                onChange={evento => setDescricao(evento.target.value)}
                                label="Descrição do Prato"
                                variant="standard"
                                fullWidth
                                required
                                sx={{ marginTop: 4 }}
                            />
                            <FormControl sx={{ marginTop: 8 }} fullWidth>
                                <InputLabel id="select-tag">Tags</InputLabel>
                                <Select labelId="select-tag" value={tag} onChange={evento => setTag(evento.target.value)}>
                                    {tags.map(tag => 
                                        <MenuItem key={tag.id} value={tag.value}>
                                            {tag.value}
                                        </MenuItem>)}
                                </Select>
                            </FormControl>
                            <FormControl sx={{ marginTop: 8, marginBottom: 4 }} fullWidth>
                                <InputLabel id="select-restaurante">Restaurantes</InputLabel>
                                <Select labelId="select-restaurante" value={restaurante} onChange={evento => setRestaurante(evento.target.value)}>
                                    {restaurantes.map(restaurante => 
                                        <MenuItem key={restaurante.id} value={restaurante.id}>
                                            {restaurante.nome}
                                        </MenuItem>)}
                                </Select>
                            </FormControl>
                            <input type="file" onChange={selecionarArquivo}/>
                            <Button sx={{ marginTop: 2 }} fullWidth type="submit" variant="outlined">Salvar</Button>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};
export default FormPrato;
