import { useEffect, useState } from "react";
import styles from "./Tema.module.css";

export default function Tema(){
    const [contador, setContador] = useState(0);

    const [nome, setNome] = useState("");

    const [temaEscuro, setTemaEscuro] = useState(false);

    useEffect(() => {}, []);

    useEffect(() => {}, [contador]);

    useEffect(() => {}, [temaEscuro]);

    function aumentarContador() {

    }

    function diminuirContador(){}

    function alterarTema(){}

    return(
        <>
        <main></main>
        </>
    );
}