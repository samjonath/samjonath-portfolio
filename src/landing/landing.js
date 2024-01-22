import { Grid, Card, Image, Group, Text, Badge, Button } from "@mantine/core";
import "../assets/styles/landing.css";

import ProfilePhoto from "../assets/images/WhatsApp_Image_2023-08-10_at_01.35.47-removebg-preview.png";

function landing() {
  return (
    <div className="App" style={{ position: "relative", zIndex: "-1" }}>
      <div style={{ backgroundColor: "white" }}>
        <Grid>
          <Grid.Col span={5}>
            <img
              src={ProfilePhoto}
              alt="click here"
              style={{
                height: "20rem",
                width: "21rem",
                marginLeft: "12rem",
                WebkitMaskImage:
                  "-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
              }}
            />
          </Grid.Col>
          <Grid.Col
            span={7}
            style={{
              alignItems: "baseline",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
            }}
          >
            <h1 style={{ width: "fit-content", fontSize: "6rem", margin: "0" }}>
              SAM JONATH
            </h1>
            <h1
              style={{
                backgroundColor: "#50577A",
                width: "fit-content",
                fontSize: "2rem",
                borderRadius: "1rem",
                padding: "0.5rem",
                margin: "0",
              }}
            >
              I'M A FULL STACK WEB DEVELOPER
            </h1>
          </Grid.Col>
        </Grid>
      </div>
      {/* About Me div */}
      <div
        id="aboutme"
        class="container aboutMediv"
        style={{ marginTop: "3rem" }}
      >
        <Grid>
          <Grid.Col
            span={12}
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1
              style={{ fontSize: "4rem", fontWeight: "800", color: "#D8D9DA" }}
            >
              ABOUT
            </h1>
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#404258",
                position: "absolute",
                fontStyle: "italic",
              }}
            >
              Who am I?
            </h1>
          </Grid.Col>
          <Grid.Col
            span={12}
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section></Card.Section>

              <Group position="apart" mt="md" mb="xs">
                {/* <Text weight={500}>Norway Fjord Adventures</Text> */}
                {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
              </Group>

              <Text size="sm" color="dimmed">
                An enthusiastic undergraduate with good skills in coding and
                creativity. with interest in field of web development, machine
                learning and related areas. As a student I was good at science,
                Mathematics, Social but nothing interests me more than coding
                and create something out of pure creativity. I believe that
                ciphering is the language of future.
              </Text>

              {/* <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
              >
                Book classic tour now
              </Button> */}
            </Card>
          </Grid.Col>
        </Grid>
      </div>

      {/* <div style={{height:"40rem"}}>
            <Grid style={{marginTop:"4rem"}}>
                <Grid.Col span={5} style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                    <div style={{marginLeft:"12rem"}}>
                        <h1 style={{backgroundColor:"#50577A", fontSize:"3rem", width:"fit-content", margin:"0", padding:"0.5rem", borderRadius:"1rem"}}>
                            ABOUT ME. 
                        </h1>
                        
                    </div>
                </Grid.Col>
                <Grid.Col span={7}>
                    <p style={{fontSize:"1.3rem", paddingRight:"3rem"}}>
                    An enthusiastic undergraduate with good skills in coding and creativity. 
                    with interest in field of web development, machine learning and related areas. 
                    As a student I was good at science, Mathematics, Social but nothing interests me more than 
                    coding and create something out of pure creativity. 
                    I believe that ciphering is the language of future.
                    </p>
                </Grid.Col>
                
            </Grid>
        </div> */}
    </div>
  );
}

export default landing;
