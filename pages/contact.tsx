import { Button, Container, Grid, Spacer, Textarea } from '@nextui-org/react'
import type { NextPage } from 'next';
import { Image } from "@nextui-org/react";
import { Input, Text } from '@nextui-org/react';
import { useState } from 'react';
import axios from 'axios';
interface IData {
  name: string;
  email: string;
  message: string;
}
const Contact: NextPage = () => {
  const emptyData: IData = { name: '', email: '', message: '' };
  const [data, setData] = useState<IData>(emptyData);

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  }
  const onSubmit = async () => {
    console.log(process.env.API_URL);
    let config = {
      method: 'POST',
      url: `/api/contact`,
      headers: {
        'Content-Type': 'Application/json'
      },
      data: data
    }

    try {
      const response = await axios(config);
      if (response.status === 200) {
        console.log('success');
        alert("Message sent");
      }
    } catch (error) {
      console.error({ error: error });
    }
  }


  return (
    <Container sm gap={10} style={{ padding: "2%", display: 'flex' }}>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
          display: 'block',
          width: '100%',
          margin: '5px'

        }}
        weight="bold"
      >
        Contact
      </Text>
      <Grid.Container gap={2} justify="center" style={{ marginTop: '70px' }}>
        <Grid xs={12} md={4}>
          <Image width={"200px"} height={"200px"} src={"contact.png"} />
        </Grid>
        <Grid xs={12} md={8} style={{ display: 'block' }}>
          <Grid.Container gap={2} >
            <Grid xs={12} md={5}>
              <Input width={"100%"} label="Full Name" value={data?.name} onChange={(e) => onChange(e)} name="name" placeholder="Guillermo Rauch" />
            </Grid>
            <Grid xs={12} md={5}>
              <Input width={"100%"} label="Email" value={data?.email} onChange={(e) => onChange(e)} name="email" placeholder="username@email.com" type="email" />
            </Grid>
          </Grid.Container>
          <Grid.Container gap={2}>
            <Grid xs={12} md={10} >
              <Textarea width='100%' label="Message" value={data?.message} onChange={(e) => onChange(e)} name="message" placeholder="Content ...." />
            </Grid>
            <Grid xs={12} md={10} style={{ justifyContent: 'right' }}>
              <Button style={{ margin: '5px' }} onClick={() => onSubmit()} >Send</Button>
            </Grid>
          </Grid.Container>
          <Spacer />
        </Grid>
      </Grid.Container>
    </Container>
  )
}

export default Contact;
