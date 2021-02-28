import styles from '../../styles/Biscoito.module.css';
import frases from '../../frases.json';
import { useState } from 'react';
export default function Biscoito(){

    const [novaFrase, setNovaFrase] = useState('');

    function adicionarFrase(){
        let randomFrase = Math.floor(Math.random() * frases.length);
        let novaFrase = frases[randomFrase];
        setNovaFrase(novaFrase);
    }

    return(
        <div className={styles.container}>
            <h1>Retire a sua sorte!</h1>
            <p>A sua sorte não depende da frase e sim de você mesmo!</p>
            <button type="button" onClick={adicionarFrase}>
                Sortear!
            </button>
            {novaFrase && 
            <label>
                {novaFrase}
            </label>}
            
        </div>
    )
}