import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import {
  DocMsg,
  LinkMsg,
  MediaMsg,
  ReplyMsg,
  TextMsg,
  Timeline,
} from "./MsgTypes";

const Message = (menu) => {
  return (
    <>
      <Box p={3}>
        <Stack spacing={3}>
          {Chat_History.map((el, i) => {
            switch (el.type) {
              case "divider":
                // Timeline
                return <Timeline key={i} el={el} />;
              case "msg":
                switch (el.subtype) {
                  case "img":
                    // img msg
                    return <MediaMsg key={i} el={el} menu={menu} />;
                  case "doc":
                    // doc msg
                    return <DocMsg key={i} el={el} menu={menu} />;
                  case "link":
                    // link msg
                    return <LinkMsg key={i} el={el} menu={menu} />;
                  case "reply":
                    // reply msg
                    return <ReplyMsg key={i} el={el} menu={menu} />;

                  default:
                    // text msg
                    return <TextMsg key={i} el={el} menu={menu} />;
                }

              default:
                return <></>;
            }
          })}
        </Stack>
      </Box>
    </>
  );
};

export default Message;
