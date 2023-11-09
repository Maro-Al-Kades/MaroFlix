import { Paper, Stack, Button, Box, Typography } from "@mui/material";
import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import menuConfigs from "../../configs/menu.configs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <Paper square={true} sx={{ backgroundImage: "unset", padding: "2rem" }}>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: "column", md: "row " }}
          sx={{ height: "max-content" }}
        >
          <Logo />
          <a
            href="https://maro-al-kades.github.io/Maro-Al-Kades/"
            target="_blank"
            rel="noreferrer"
          >
            <Typography
              variant="h5"
              color="primary"
              fontWeight="800"
              sx={{ fontStyle: "italic", opacity: 0.8 }}
            >
              <span
                style={{ color: "white", fontWeight: 400, fontStyle: "normal" }}
              >
                Made with:{" "}
              </span>{" "}
              Maro Asam
            </Typography>
          </a>

          <Box>
            {menuConfigs.main.map((item, index) => (
              <Button
                key={index}
                sx={{ color: "inherit" }}
                component={Link}
                to={item.path}
              >
                {item.display}
              </Button>
            ))}
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Footer;
