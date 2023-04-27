import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { imgUpload, uploadLetter } from "../../api/admin";
import LandingPageGrid from "../../UI/LandingPageGrid";
import { adminformSxProp, adminImgSxProp } from "./style";

function Admin() {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [desc, setDesc] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const imgUploadHandler: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("img", file);
      const res = await imgUpload(formData);
      setImgSrc(res.data.url);
    }
  };
  const letterSubmitHandler: React.FormEventHandler = async (event) => {
    event.preventDefault();
    console.log("daf");
    const formData = new FormData();
    if (name && desc && type && address && imgSrc) {
      formData.append("url", imgSrc);
      formData.append("type", type);
      formData.append("desc", desc);
      formData.append("address", address);
      formData.append("name", name);
      const res = await uploadLetter(formData);
      console.log(res);
    }
  };
  return (
    <LandingPageGrid>
      <Typography>새로운 뉴스레터 등록 페이지</Typography>
      <input type="file" onChange={imgUploadHandler} id="img" />
      {imgSrc && (
        <Box component="img" src={imgSrc} alt="" sx={adminImgSxProp} />
      )}
      <Box component="form" sx={adminformSxProp} onSubmit={letterSubmitHandler}>
        <Box>
          <TextField
            type="text"
            id="name"
            label="name"
            color="secondary"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            fullWidth
          />
        </Box>
        <Box>
          <TextField
            type="text"
            id="desc"
            label="설명"
            color="secondary"
            multiline={true}
            minRows={3}
            fullWidth
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </Box>
        <Box>
          <TextField
            type="text"
            id="type"
            label="type"
            color="secondary"
            fullWidth
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
        </Box>
        <Box>
          <TextField
            type="text"
            id="address"
            label="보내주는 주소"
            color="secondary"
            fullWidth
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </Box>
        <Button color="secondary" type="submit">
          등록
        </Button>
      </Box>
    </LandingPageGrid>
  );
}

export default Admin;
