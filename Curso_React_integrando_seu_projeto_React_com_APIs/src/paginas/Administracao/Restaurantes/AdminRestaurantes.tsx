import { Grid, IconButton, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import IRestaurante from "../../../interfaces/IRestaurante";
import { Link as RouterLink } from 'react-router-dom'
import http from "../../../http/http";
import { Delete, Edit } from "@mui/icons-material";

const AdminRestaurantes = () => {
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

    useEffect(() => {
        http.get<IRestaurante[]>('restaurantes/')
            .then(resposta => setRestaurantes(resposta.data))
    }, []);

    const excluir = (restauranteAhSerExcluido: IRestaurante) => {
        http.delete(`restaurantes/${restauranteAhSerExcluido.id}/`)
        .then(() => {
            const listaRestaurantes = restaurantes.filter(restaurante => restaurante.id !== restauranteAhSerExcluido.id)
            setRestaurantes([...listaRestaurantes])
        })
    }
    // return (
    //     <TableContainer component={Paper}>
    //         <Table aria-label="Tabela de restaurantes">
    //             <TableHead>
    //                 <TableRow>
    //                     <TableCell>Nome</TableCell>
    //                     <TableCell>Editar</TableCell>
    //                     <TableCell>Excluir</TableCell>
    //                 </TableRow>
    //             </TableHead>
    //             <TableBody>
    //                 {restaurantes.map(restaurante =>
    //                     <TableRow key={restaurante.id}>
    //                         <TableCell>
    //                             {restaurante.nome}
    //                         </TableCell>
    //                         <TableCell>
    //                             [<Link to={`/admin/restaurantes/${restaurante.id}`}>Editar</Link>]
    //                         </TableCell>
    //                         <TableCell>
    //                             <Button variant="outlined" color="error" onClick={() => excluir(restaurante)}>
    //                                 Excluir
    //                             </Button>
    //                         </TableCell>
    //                     </TableRow>
    //                 )}
    //             </TableBody>
    //         </Table>
    //     </TableContainer>
    // );
    return (
        <>
          <Grid container>
            <Grid item xs>
              <Typography component="h1" variant="h6">
                Restaurantes
              </Typography>
            </Grid>
            <Grid item>
              <Link
                variant="button"
                component={RouterLink}
                to="/admin/restaurantes/novo"
              >
                Novo
              </Link>
            </Grid>
          </Grid>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell colSpan={2}>Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {restaurantes?.map((restaurante) => (
                  <TableRow key={restaurante.id}>
                    <TableCell>
                      {restaurante.nome}
                    </TableCell>
                    <TableCell>
                      <Link
                        variant="button"
                        component={RouterLink}
                        to={`/admin/restaurantes/${restaurante.id}`}
                      >
                        <IconButton aria-label="editar">
                          <Edit />
                        </IconButton>
                      </Link>
                      <IconButton aria-label="deletar" onClick={() => excluir(restaurante)}>
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      );
};
export default AdminRestaurantes;
