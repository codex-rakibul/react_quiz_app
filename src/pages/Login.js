import Illustration from "../Components/Illustration";
import LoginForm from "../Components/LoginForm";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>

      <div className="column">
        <Illustration />
        <LoginForm />
      </div>
    </>
  );
}
