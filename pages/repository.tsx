import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PortFolioNavbar } from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.css'
import { Container, Card, Row, Text, Col, Spacer, Grid, Pagination } from "@nextui-org/react";
import { PortFolioCard } from '../components/Card/Card'
import { useEffect, useState } from 'react'



const Repository: NextPage = () => {

  const [repos, setRepos] = useState<Array<any>>([]);
  const [page,setPage] = useState(1);
  const [start,setStart] = useState(0);
  const [end,setEnd] = useState(4);
  const getRepos = () => {
    fetch("https://api.github.com/users/amoghtelkar/repos").then((res) => res.json()).then((data) => setRepos(data));
  }

  useEffect(() => getRepos(), []);

  const onPageChange = (page:number) => {
    setPage(page);
    setStart(0+page-1);
    setEnd(4+page-1);
  }
  
  return (
    
    <Container sm gap={10} style={{ padding: "2%" ,display:'flex'}}>
       <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
          display:'block',
          width:'100%',
          margin:'5px'
          
        }}
        weight="bold"
      >

        Repositories
      </Text>  
      {repos.slice(start,end).map((repo) => (
        
        <div key={repo.id} style={{margin:'2%'}}>
          <PortFolioCard cardKey={repo.id} image={"socialpedia.png"} name={repo.name} description={repo.description} repoUrl={repo.html_url}/>
          </div >
      ))}
      
      <Spacer x={2}/>
      <Grid xs={12} style={{justifyContent:'center'}}>
        <Pagination color={"gradient"} total={repos.length/4 === 0 ? repos.length/4 : (repos.length/4)+1} page={page} onChange={onPageChange} />
      </Grid>
    </Container>
  )
}

export default Repository
