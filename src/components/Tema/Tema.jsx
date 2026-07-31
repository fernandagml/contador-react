import { useEffect, useState } from "react";
import styles from "./Tema.module.css";

export default function Tema() {
    const [contador, setContador] = useState(0);

    const [nome, setNome] = useState("");

    const [temaEscuro, setTemaEscuro] = useState(false);

    useEffect(() => {console.log('Componente carregado pela primeira vez.');}, []);

    useEffect(() => {console.log('O contador foi alterado para:', contador);}, [contador]);

    useEffect(() => {console.log('Tema alterado para:', temaEscuro ? 'Claro' : 'Escuro')}, [temaEscuro]);

    function aumentarContador() {
        setContador(contador + 1)
    }

    function diminuirContador() {
        setContador(contador - 1)
    }

    function alterarTema() {
        setTemaEscuro(!temaEscuro)
    }

    const contadorFormat = contador.toString().padStart(2, '0');

    return (
        <>
            <main className={`${styles.container} ${temaEscuro ? styles.temaEscuro : styles.temaClaro}`}>
                <h1 className={styles.titulo}>Exemplos de useState e useEffect</h1>
                <section className={styles.card}>
                    <h2>1. Contador (useState)</h2>
                    <p className={styles.valor}>{contadorFormat}</p>
                    <div className={styles.botoes}>
                        <button className={styles.botaoTema} onClick={aumentarContador}>+</button>
                        <button className={styles.botaoTema} onClick={diminuirContador}>-</button>
                    </div>
                    <p>O useEffect observa a variável <strong>contador</strong> e executa sempre que ela muda.</p>
                </section>
                <section className={styles.card}>
                    <h2>2. Campo de Texto (useState)</h2>
                    <input type="text" className={styles.input} placeholder="Digite seu nome" />
                    <p>Olá, </p>
                </section>
                <section className={styles.card}>
                    <h2>3. Alternância de Tema (useState)</h2>
                    <button className={styles.botaoTema}>Alterar o tema para </button>
                    <p>O useEffect observa a variável <strong>temaEscuro</strong> e executa sempre que o tema é alterado.</p>
                </section>
            </main>
        </>
    );
}