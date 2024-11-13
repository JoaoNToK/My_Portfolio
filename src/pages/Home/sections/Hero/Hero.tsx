import { Box, Container, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/img/WhatsApp Image 2024-11-13 at 13.51.11.jpeg";
import Grid from "@mui/material/Grid";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      // <= mobile
      paddingTop: "100px",
    },
    [theme.breakpoints.up("xs")]: {
      // >= mobile
      paddingTop: "100px",
    },
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "80%",
    borderRadius: "50%",
    botder: `1px solid ${theme.palette.primary.contrastText}`,
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign={"center"}>
                  <StyledImg src={Avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign="center"
                pb={2}
              >
                João Neto
              </Typography>
              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign="center"
              >
                I'm a Software Developer
              </Typography>
              <Grid
                container
                display="flex"
                justifyContent="center"
                spacing={3}
              >
                <Grid
                  item
                  xs={12}
                  md={4}
                  display={"flex"}
                  justifyContent="center"
                  pt={3}
                >
                  <StyledButton>
                    <FileDownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display={"flex"}
                  justifyContent="center"
                >
                  <StyledButton>
                    <EmailIcon />
                    <Typography>Contact me</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
