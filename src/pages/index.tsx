import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from './home.module.scss'
import { GetServerSideProps } from 'next'
import { stripe } from '../services/stripe'


interface HomeProps {
  product:{
    priceId: string;
    amount: number;
  }
}

 export default function Home({product}: HomeProps) {
  return (
    <>
      <Head>

      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>
            👏Hey, Welcome!!!
          </span>
          <h1>News about the <span>React</span> world.</h1>
          <p>Get acess to all the publications <br /> <span> for {product.amount} month</span> </p>
          <SubscribeButton/>
        </section>
        <img src="/images/avatar.svg" alt="girl coding"/>
      </main>
    </>
  ) 
}


export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1KZwAfCN4uWSA4UcGPCu1yHb', {
    expand: ['product']
  })
  const product = {
    priceId: price.id,
    amount: price.unit_amount! / 100,
  };
 return {
   props: {
     name: 'aeudo',
   }
 }
}