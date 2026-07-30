import { useEffect, useState } from "react";
import styles from "./UseEffectHook.module.css";

export default function UseEffectHook(){
    const [contador, setContador] = useState(0);
    const titulo = 'Clicou ';

    console.log('Sempre ocorre, mas antes do useEffect.');

    useEffect(() => {console.log('Ocorre quando renderizar.');});

    useEffect(() => {console.log('Ocorre quando renderizar apenas na primeira vez.');}, []);

    useEffect(() => {console.log('Ocorre quando renderizar o Contador.');}, [contador]);

    return(
        <button className={styles.aut} onClick={() => setContador(contador + 1)}>{contador}</button>
    );
}