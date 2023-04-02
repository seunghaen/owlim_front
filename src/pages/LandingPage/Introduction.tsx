import { Box, Typography } from "@mui/material";
import { textAlign } from "@mui/system";
import React from "react";

function Introduction() {
  return (
    <Box
      sx={{
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        paddingBottom: "30px",
      }}
    >
      <Typography
        component="h6"
        sx={{ paddingBottom: "10px", fontSize: "1.5rem" }}
      >
        뉴스레터 관리 플랫폼 올림에 오신것을 환영합니다.
      </Typography>
      <Typography>
        해당 서비스는 뉴스레터를 효과적으로 관리하기 위한 프로그램입니다.
      </Typography>
      <Typography>Gmail 연동 등의 서비스는 업데이트 될 예정입니다.</Typography>
    </Box>
  );
}

export default Introduction;
