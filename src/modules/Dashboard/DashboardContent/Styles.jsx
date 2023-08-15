import { styled, Box, Card } from "@mui/material";

export const CardContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: "320px",
  marginTop: "5px",
  marginLeft: "0.5%",
  marginRight: "0.5%",

  ":hover":{

    ZIndex:"1",
  }
}));
