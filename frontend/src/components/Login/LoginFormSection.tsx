
import { useForm } from "react-hook-form";
import { Lock, Mail } from "lucide-react";
import { useLoginMutation } from "../../redux/services/authApi";
import { toast } from "sonner";
 
function LoginFormSection() {

  const { register, handleSubmit, formState: errors } = useForm();
  
  
  const [login] = useLoginMutation();
   
  const onSubmit = async (data) => {
    try {
      const response = await login(data).unwrap();

      toast.success(response.message || "Login Successfully")
    }
    catch (error) {
        console.log("Login error:", error);
        toast.error(error?.data?.message|| "Login Failed");
    }
  }
  return (
    <div className="w-1/2  ">
      <div className="w-full h-full flex flex-col justify-center items-center ">
        {/* <img
          src="/images/logo.svg"
          alt="Sparkle wash"
          width={250}
          height={250}
        /> */}

        <h1 className="text-4xl font-bold leading-none my-3 ">
          Welcome to <span className="text-cyan-950"> Sparkle Wash</span>
        </h1>

        <p className="text-lg text-slate-800 ">Login Your Account</p>
        {/* form */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" w-full max-w-md flex flex-col gap-4 my-6 px-14"
        >
        
            {/* Email */}
            <div className="flex items-center gap-1 border rounded-lg px-3">
              <Mail size={20} />

              <input
                {...register("email")}
                type="email"
                placeholder="Enter Your Email"
                className="w-full p-1.5 outline-none"
              />
            </div>

            {/* Password */}
            <div className="flex items-center gap-1 border rounded-lg px-3">
              <Lock size={20} />

              <input
                {...register("password")}
                type="password"
                placeholder="Enter Your Password"
                className="w-full p-1.5 outline-none"
              />
           </div>
                  
          
          <button
            type="submit"
            className="bg-cyan-800 p-3 rounded-2xl text-white font-bold my-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginFormSection;