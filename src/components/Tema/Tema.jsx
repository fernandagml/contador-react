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
            <main>
                {/* H1 */}
                {/* SECTION 1: contador: usestate */}
                <section className={styles.container}>
                    <h2>1. Contador</h2>
                    <p>{contadorFormat}</p>
                    <button className={styles.botoes} onClick={aumentarContador}>+</button>
                    <button className={styles.botoes} onClick={diminuirContador}>-</button>
                </section>
            </main>
        </>
    );
}