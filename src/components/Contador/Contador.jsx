import { useEffect, useState } from "react";
import styles from './Contador.module.css';

export default function Contador(){
    const [contador, setContador] = useState(0);
    const [contadorAuto, setAuto] = useState(false);

    const atualizarContadorSoma = () => { return setContador(contador + 1) };
    const atualizarContadorSub = () => { return setContador(contador - 1) };
    const atualizarContadorResete = () => { return setContador(0); setAuto(false) };
    const atualizarContadorSorteio = () => { return setContador(Math.floor(Math.random() * 10) + 1)};
    const atualizarContadorAuto = () => { return setAuto(!contadorAuto) };

    setInterval(() => setAuto), 1000
    useEffect(() => {
        let relogio;

        if (contadorAuto) {
            relogio = setInterval(() => {
                setContador((valorAtual) => valorAtual + 1)
            }, 1000);
        }

        return () => {clearInterval(relogio)}
    }, [contadorAuto])
    
    const contadorFormat = contador.toString().padStart(2, '0');

    return (
        <>
        <div style={{boxShadow: contador === 0 ? '0 0 50px rgba(0, 0, 0, 0.8)' : contador > 0 ? '0 0 50px rgba(23, 94, 23, 0.8)' : '0 0 50px rgba(116, 29, 29, 0.8)'}} className={styles.container}>
            <h1 style={{color: 'black', textShadow: contador === 0 ? '0 0 12px black' : contador > 0 ? '0 0 12px green' : '0 0 12px red', fontSize: "8rem", marginBottom: "20px"}}>{contadorFormat}</h1>
            <div className={styles.buttons}>
                <button className={styles.reset} onClick={atualizarContadorResete}>↩ Resetar</button>
                <button className={styles.add} onClick={atualizarContadorSoma}>Somar +</button>
                <button className={styles.sub} onClick={atualizarContadorSub}>Subtrair -</button>
                <button className={styles.sort} onClick={atualizarContadorSorteio}>Sortear</button>
                <button className={styles.aut} onClick={atualizarContadorAuto}>{contadorAuto ? 'Parar' : 'Contar Automaticamente'}</button>
            </div>
        </div>
        </>
    );
};