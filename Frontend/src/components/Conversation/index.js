import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box, Stack } from "@mui/material";
import Message from "./Message";

const Conversation = ({ toggleContact }) => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/*Chat header*/}
      <Header toggleContact={toggleContact} />
      {/*msg*/}
      <Box
        width={"100%"}
        sx={{ flexGrow: 1, height: "100%", overflow: "scroll" }}
      >
        <Message menu={true} />
      </Box>

      {/*Chat footer*/}
      <Footer />
    </Stack>
  );
};

export default Conversation;
