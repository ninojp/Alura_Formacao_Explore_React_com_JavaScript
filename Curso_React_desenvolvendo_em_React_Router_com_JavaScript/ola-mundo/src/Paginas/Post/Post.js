import { Route, Routes, useParams } from "react-router-dom";
import posts from 'json/posts.json';
import PostModelo from "componentes/PostModelo/PostModelo";
import ReactMarkdown from 'react-markdown';
import './Post.css';
import styles from './Post.module.css';
import PgNãoEncontrada from "Paginas/PgNãoEncontrada/PgNãoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao/PaginaPadrao";
import PostCard from "componentes/PostCard/PostCard";

export default function Post() {
    // Novo(aprendido) Hook do React(PARAMETRO de ROTA), para receber um parametro
    const parametros = useParams();
    // console.log(parametros)
    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    });
    if(!post){
        return <PgNãoEncontrada />
    }

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);
        console.log(postsRecomendados)

    return (
        <Routes>
            <Route path='*' element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo} >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>
                        <h2 className={styles.tituloOutrosPosts}>
                            Outros Posts que você pode gostar
                        </h2>
                        <ul className={styles.postsRecomendados}>
                            {postsRecomendados.map((post) => (
                                <li key={post.id}>
                                    <PostCard post={post} />
                                </li>
                            ))}
                        </ul>
                    </PostModelo>
                } />
            </Route>
        </Routes>
    );
};