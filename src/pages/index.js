import Link from 'next/link'
import styles from '../../styles/Home.module.css';
export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <h1>My Lucky | Biscoito da Sorte!</h1>
        <p>Veja a sua sorte!</p>
        <Link href="/Biscoito">
          <button type="button">
            Entrar <img src="/arrow.svg" alt="Avançar"/>
          </button>
        </Link>
      </div>
    </div>
  )
}
