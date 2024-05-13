import { Button, Container, Grid, Loading, Spacer, Textarea } from '@nextui-org/react'
import type { NextPage } from 'next';
import { Image, useInput } from "@nextui-org/react";
import { Input, Text } from '@nextui-org/react';
import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

interface IData {
  name: string;
  email: string;
  message: string;
  ip: any;
  device: any;
};

const Contact: NextPage = () => {
  const emptyData: IData = { name: '', email: '', message: '', ip: null, device: null };
  const [data, setData] = useState<IData>(emptyData);
  const [isLoading, setIsLoading] = useState(false);
  const validateEmail = (value:string) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  }

  useEffect(() => { 
    getIPDataAndDeviceInfo();
  },[]);

  const getIPDataAndDeviceInfo = async () => {
    const res = await axios.get('https://geolocation-db.com/json/');
    setData({...data,ip:JSON.stringify(res.data),device:JSON.stringify(navigator.userAgent)});
  }

 

  const onSubmit = async () => {
    setIsLoading(true);
    console.log(data);
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
        toast.success("Contact submission successful");
      }
    } catch (error) {
      console.error({ error: error });
      toast.error("Contact submission failed");
    }finally{
      setIsLoading(false);
    }
  }


  const isValid = data.name && validateEmail(data.email) && data.message;
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
          <Image width={"200px"} height={"200px"} src={"contact.png"} alt={"random alt image"} />
        </Grid>
        <Grid xs={12} md={8} style={{ display: 'block' }}>
          <Grid.Container gap={2} >
            <Grid xs={12} md={5}>
              <Input width={"100%"} label="Full Name" value={data?.name} onChange={(e) => onChange(e)} name="name" placeholder="Guillermo Rauch" />
            </Grid>
            <Grid xs={12} md={5}>
              <Input width={"100%"} label="Email" value={data?.email} onChange={(e) => onChange(e)} name="email" placeholder="username@email.com" type="email" helperColor={!validateEmail(data.email) ? 'error' : 'default'} helperText={!validateEmail(data.email) ? "Yess! It's Required & valid one ;)" : ''} />
            </Grid>
          </Grid.Container>
          <Grid.Container gap={2}>
            <Grid xs={12} md={10} >
              <Textarea width='100%' label="Message" value={data?.message} onChange={(e) => onChange(e)} name="message" placeholder="Content ...." />
            </Grid>
            <Grid xs={12} md={10} style={{ justifyContent: 'right' }}>
            <Button bordered color="primary" auto style={{ margin: '5px' }} disabled={!isValid} onClick={() => onSubmit()} >{ isLoading ? <Loading type='spinner'/> : 'Send'}</Button>
            </Grid>
          </Grid.Container>
          <Spacer />
        </Grid>
      </Grid.Container>
    </Container>
  )
}

export default Contact;
