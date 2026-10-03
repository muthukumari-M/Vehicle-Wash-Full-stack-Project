
import LoginImageSection from "../Login/LoginImageSection";
import LoginFormSection from "../Login/LoginFormSection";



function Login()
{
    return (
      <div className="w-screen h-screen  flex gap-8  ">
        <LoginImageSection />
        <LoginFormSection />
      </div>
    );
}
export default Login;