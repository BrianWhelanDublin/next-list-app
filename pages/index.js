import Link from "next/link"
import styles from '../styles/Home.module.css'
import Head from "next/head"

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja list | Home</title>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ullam, autem architecto ea laborum incidunt illo maiores iusto. Doloribus quibusdam vel porro nulla reprehenderit sapiente dignissimos delectus soluta animi accusantium!</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ullam, autem architecto ea laborum incidunt illo maiores iusto. Doloribus quibusdam vel porro nulla reprehenderit sapiente dignissimos delectus soluta animi accusantium!</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
    </>
  )
}
