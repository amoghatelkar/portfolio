import { Card, Col, Row, Button, Text, Grid, Link } from "@nextui-org/react";
import { useEffect } from "react";
import { useRouter } from 'next/router'

interface IPortFolioCard{
  cardKey:string;
  image:string;
  name:string;
  language:string
  description:string;
  repoUrl:string;
  lastPushed:string;
}

export const PortFolioCard = ({cardKey,lastPushed,image, name,language,description,repoUrl}:IPortFolioCard) => {

  const router = useRouter();
  const date = new Date(lastPushed);

 return(

  <Card key={cardKey} css={{ p: "$6", w: "400px",h:"200px" }}>
      <Card.Header>
        <Grid.Container>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
            {name}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>{language?.toLowerCase()}</Text>
          </Grid>
          <Grid>
          <Text css={{color:"$accents6",fontSize:'12px'}}>Last Pushed: {date.toDateString()}</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>
        {description}
        </Text>
      </Card.Body>
      <Card.Footer>
        <Link
          color="primary"
          target="_blank"
          onClick={() => router.push(repoUrl)}
        >
          Visit source code on GitHub.
        </Link>
      </Card.Footer>
    </Card>)
};
