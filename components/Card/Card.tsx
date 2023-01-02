import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { useEffect } from "react";
import { useRouter } from 'next/router'

export const PortFolioCard = ({cardKey,image, name,description,repoUrl}) => {

  const router = useRouter();

 return(
  <Card key={cardKey} css={{ w: "400px", h: "250px",  m:"2%" }}>  
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={image}
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Relaxing app background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row>
            <Col>
              <Text color="#d1d1d1" size={14}>
                {name}
              </Text>
              <Text color="#d1d1d1" size={12}>
                {description}
              </Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button
              flat
              auto
              rounded
              css={{ color: "#94f9f0", bg: "#94f9f026" }}
            >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
                onClick={() => router.push(repoUrl)}
              >
                Github Repo
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>)
};
