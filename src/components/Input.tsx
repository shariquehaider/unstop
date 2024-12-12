import { Label } from "./ui/label";

interface props  {
  label: string,
  type: string,
  name: string,
  size: string,
  handleClick: any
}

function Input({label, type, name, size, handleClick}: props) {
  return (
    <span className="flex flex-col">
      <Label htmlFor={name} className="text-[6px]">{label}</Label>
      <input type={type} id={name} name={name} placeholder={name} style={{width: size}} onChange={handleClick}/>
    </span>
  )
}

export default Input;