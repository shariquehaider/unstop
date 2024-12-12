
import Input from "@/components/Input";
import userLogo from "@/assets/account_circle.png";
import emailLogo from "@/assets/mail.png";
import key from "@/assets/key.png";
import { Button } from "./ui/button";
import eye from "@/assets/visibility.png";
import google from "@/assets/Frame 1.png";
import facebook from "@/assets/Frame 2.png";
import { Form, Link, redirect } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import userLogin from "@/hooks/userLogin";
import store from "@/store";
import { loginDispatchAction } from "@/dispatcher/login";

function LoginComponent() {
  const { type, error, handleEmailChange, handleUsernameChange, handlePasswordChange, handleClick } = userLogin();


  return (
    <>
      <div className="bg-[#FFFFFF] flex flex-col w-6/12 rounded-[20px] p-[25px_40px_0_40px] border-[1px] border-[#E2E2E2] gap-[1rem] h-full">
        <div className="flex flex-col">
          <p className="text-[1.4rem] text-black font-normal">Welcome to</p>
          <span className="text-[2.2rem] text-[#6358DC] font-black">Unstop</span>
        </div>
        <div className="flex flex-col w-full gap-[0.5rem] o-auth">
          <a href="" className="w-full bg-white rounded-[16px] flex justify-center border-[1px] border-[#E2E2E2] p-[0.8rem_0]">
            <img src={google} alt="" width={140} />
          </a>
          <a href="" className="w-full bg-white rounded-[16px] flex justify-center border-[1px] border-[#E2E2E2] p-[0.8rem_0]">
            <img src={facebook} alt="" width={140} />
          </a>
        </div>
        <div className="flex items-center justify-between">
          <hr className="w-[250px]" />
          <p className="text-[0.6rem] text-black">OR</p>
          <hr className="w-[250px]" />
        </div>
        <Form className="flex flex-col gap-[0.5rem]" action="/auth/login" method="post">
          <div className="flex bg-[#F4F4F4] items-center rounded-[1rem] gap-[1rem] p-[10px]">
            <img src={userLogo} alt="" />
            <Input label="username" type="text" name="username" size="27rem" handleClick={handleUsernameChange}/>
          </div>
          { error.username? <p className="text-[red] text-[8px]">{error.username}</p> : null}
          <div className="flex bg-[#F4F4F4] items-center rounded-[1rem] p-[10px] gap-[1rem]">
            <img src={emailLogo} alt="" />
            <Input label="email" type="email" name="email" size="27rem" handleClick={handleEmailChange}/>
          </div>
          { error.email? <p className="text-[red] text-[8px]">{error.email}</p> : null}
          <div className="flex bg-[#F4F4F4] items-center rounded-[1rem] p-[10px] gap-[1rem]">
            <img src={key} alt="" />
            <Input label="Password" type={type} name="password" size="26rem" handleClick={handlePasswordChange}/>
            <button className={cn("bg-[#F4F4F4]")} type="button" onClick={handleClick}><img src={eye} alt="" /></button>
          </div>
          { error.passowrd? <p className="text-[red] text-[8px]">{error.passowrd}</p> : null}
          <div className="flex flex-col btn-div">
            <div className="flex justify-between items-center p-[5px]">
              <span className="flex items-center gap-[10px]">
                <Checkbox id="remember" name="remember"/>
                <Label htmlFor="remember">Remember Me</Label>
              </span>
              <Link to="/" className="text-[#6358DC]">Forget Password</Link>
            </div>
            <Button type="submit" className={cn("w-full bg-[#6358DC]")}>Login</Button>
          </div>
        </Form>
      </div>
    </>
  )
}

export default LoginComponent;


export async function loginAction({request} : {request :any}) {
  const formData = await request.formData();
  const user = {
    username: formData.get("username")? formData.get('username') : "",
    email: formData.get("email")? formData.get('email') : "",
    password: formData.get('password')
  };
  const rememberMe = formData.get("remember")? true : false;
  const isAuthenticated = await store.dispatch(loginDispatchAction(user, rememberMe));
  if (isAuthenticated) {
    return redirect("/home");
  } else {
    return null;
  }
}