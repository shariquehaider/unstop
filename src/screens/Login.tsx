import Illustration from "@/components/Illustration"
import LoginComponent from "@/components/LoginComponent"


function Login() {
  return (
    <>
      <div className="flex justify-between bg-[#F4F4F4] w-full p-[50px_10rem] h-[100vh] items-center login">
        <Illustration></Illustration>
        <LoginComponent/>
      </div>
    </>
  )
}

export default Login