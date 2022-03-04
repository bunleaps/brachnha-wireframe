import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Recent from './app-components/recents'
import MainMenu from './app-components/mainmenu'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BrachNha</title>
        <meta name="description" content="BrachNha" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Recent />
        <MainMenu />
      </main>
    </div>
  )
}
