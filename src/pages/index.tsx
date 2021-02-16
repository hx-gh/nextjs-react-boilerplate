import React from 'react';
import Head from 'next/head';
import BoilerSVG from '../assets/svg/boiler.svg'
import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>ReactJs + NextJs</title>
      </Head>
      <body>
        <Container>
          <BoilerSVG />
          <h1>ReactJS + NextJs Boilerplate</h1>
        </Container>
      </body>
    </div>
  )
}
export default Home
