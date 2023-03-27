import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PageGrid from "../../UI/PageGrid";

function LoginPage() {
  const navigate = useNavigate();
  const onLogin: React.FormEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
  };
  return (
    <PageGrid>
      <form>
        <input />
        <input />
        <button onSubmit={onLogin}>로그인</button>
        <button
          onClick={() => {
            navigate("/signin");
          }}
        >
          회원가입
        </button>
      </form>
    </PageGrid>
  );
}

export default LoginPage;
