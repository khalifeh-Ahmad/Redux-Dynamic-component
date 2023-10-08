import { useDispatch } from "react-redux";
import { openModal } from "../../store/modalSlice";

const LoginRegister = () => {
  const disp = useDispatch();
  return (
    <div className="login-register">
      <button
        className="btn"
        onClick={() => disp(openModal({ name: "login" }))}
      >
        Login
      </button>
      <div>OR</div>
      <button
        className="btn"
        onClick={() =>
          disp(openModal({ name: "register", position: "bottom" }))
        }
      >
        Register
      </button>
    </div>
  );
};

export default LoginRegister;
