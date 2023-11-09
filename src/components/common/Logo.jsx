import { Typography, useTheme } from "@mui/material";

const Logo = () => {
  const theme = useTheme();

  return (
      <Typography
        fontWeight="900"
        fontSize="1.7rem"
        sx={{fontStyle: "italic", cursor: "pointer", textDecoration: "none !important",border: "none" }}
      >
        Maro-<span style={{ color: theme.palette.primary.main }}>Flix</span>
      </Typography>
  );
};

export default Logo;
