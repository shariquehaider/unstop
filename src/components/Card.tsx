import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import ProfilePic from "@/assets/Frame 1116607307.png";
import { useDispatch } from "react-redux";
import { userLogoutAction } from "@/dispatcher/login";
import { useLoaderData } from "react-router-dom";

function Card() {
  const details = useLoaderData();
  const dispatch: any = useDispatch();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    dispatch(userLogoutAction());
  };
  return (
    <>
      <div className="flex flex-col rounded-[20px] card justify-center items-center">
        <div>
          <img src={ProfilePic} alt="" />
        </div>
        <div className="flex flex-col gap-[20px] justify-center items-center">
          <p className="font-bold text-[#6358DC] text-[16px]">{details.firstName} {details.lastName}</p>
          <span className="flex flex-col justify-center items-center">
            <p className="text-[#383838] text-[12px]">{details.email}</p>
            <p className="text-[#383838] text-[12px]">{details.gender}</p>
          </span>
          </div>
        <div>
          <Button className={cn("bg-[#6358DC]")} onClick={handleClick}>Logout</Button>
        </div>
      </div>
    </>
  )
}

export default Card;

export const userDetails = () => {
  const details = localStorage.getItem("details") || sessionStorage.getItem('authToken');;
  if (details) {
    return JSON.parse(details);
  }
  return null;
}