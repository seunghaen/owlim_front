import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { googleLogin, sample } from "../../api";
import PageGrid from "../../UI/PageGrid";

function LoginPage() {
  const navigate = useNavigate();
  const onLogin: React.FormEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    sample();
  };
  return (
    <PageGrid>
      <form>
        <input />
        <input />
        <button onSubmit={onLogin}>로그인</button>
        <button
          onClick={() => {
            googleLogin();
          }}
        >
          구글로그인
        </button>
      </form>
    </PageGrid>
  );
}

export default LoginPage;