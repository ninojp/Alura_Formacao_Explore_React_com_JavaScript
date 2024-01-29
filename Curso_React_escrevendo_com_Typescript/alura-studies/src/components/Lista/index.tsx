
function Lista () {
    const tarefas = [
        {
            id: 1,
            tarefa: 'React',
            tempo: '02:00:00'
        },
        {
            id: 2,
            tarefa: 'JavaScript',
            tempo: '01:00:00'
        },
        {
            id: 3,
            tarefa: 'TypeScript',
            tempo: '03:00:00'
        }
    ]
    return (
        <aside>
            <h2>Estudo do Dia</h2>
            <ul>
                {tarefas.map((itenTarefa) => (
                    <li key={itenTarefa.id}>
                        <h3>{itenTarefa.tarefa}</h3>
                        <span>{itenTarefa.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    );
};
export default Lista;
