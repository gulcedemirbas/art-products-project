import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import contact from "../images/contact/contact.JPG";

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", width: "1000px" }}>
      <CardMedia
        component="img"
        sx={{ width: 300, opacity: "50%" }}
        image={contact}
        alt="Live from space album cover"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "20px",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            component="div"
            variant="h7"
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Poppins",
            }}
          >
            Başlık
            <input
              className="w-[400px] border box-border rounded border border-gray-300 text-[14px] p-1"
              placeholder="Mesajınız için bir başlık girin"
            ></input>
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Poppins",
            }}
          >
            Mesajınız
            <input
              className="w-[400px] border box-border rounded border border-gray-300 text-[14px] p-1 h-40"
              placeholder="sjndfdj"
            ></input>
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
