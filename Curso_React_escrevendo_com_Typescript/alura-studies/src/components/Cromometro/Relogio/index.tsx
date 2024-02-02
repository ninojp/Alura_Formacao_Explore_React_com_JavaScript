import style from './relogio.module.css'

interface props{
    tempo: number | undefined
}
export default function Relogio({tempo = 0}:props) {
    const minutos = Math.floor(tempo / 60);
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');
    const segundos = tempo % 60;
    const [segundosDezena, segundosUnudade] = String(segundos).padStart(2, '0');
    return (
        <>
            <span className={style.relogioNumero}>
                {minutoDezena}
            </span>
            <span className={style.relogioNumero}>
                {minutoUnidade}
            </span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>
                {segundosDezena}
            </span>
            <span className={style.relogioNumero}>
                {segundosUnudade}
            </span>
        </>
    );
};
