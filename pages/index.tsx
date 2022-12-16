import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PortFolioNavbar } from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.css'
import { Card, Container, Row, Text } from "@nextui-org/react";

const Home: NextPage = () => {
  return (
    <>
    <Container sm style={{paddingTop:'100px'}}>
        <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        AMOGH TELKAR
      </Text>
      <Text
        h2
        size={30}
        // css={{
        //   textGradient: "45deg, $purple600 -20%, $pink600 100%",
        // }}
        weight="bold"
      >
       {"Hey, 👋🏽 ."}
      </Text>
      <Text
        h2
        size={20}
        // css={{
        //   textGradient: "45deg, $blue600 -20%, $red600 100%",
        // }}
        weight="normal"
      >
    {"A passionate Web developer, with a curious mind and a constant learning attitude. I spent most of my life living in Hassan Karnataka, my hometown, and now working in Bengaluru."}
      </Text>
     
      </Container>
    </>
  )
}

export default Home
