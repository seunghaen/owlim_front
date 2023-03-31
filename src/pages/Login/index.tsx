import { Grid } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { googleLogin, sample } from "../../api";
import PageGrid from "../../UI/PageGrid";

function LoginPage() {
  const navigate = useNavigate();
  const onLogin: React.FormEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    sample();
  };

  const googleLoginHandler = () => {
    window.open("http://localhost:8001/auth/google", "_self");
  };
  return (
    <PageGrid>
      <form>
        <input />
        <input />
        <button onSubmit={onLogin}>로그인</button>
      </form>
      <button onClick={googleLoginHandler}>구글 로그인 버튼</button>
      <button
        onClick={() => {
          axios.get("/sample");
        }}
      >
        샘플
      </button>
    </PageGrid>
  );
}

export default LoginPage;
