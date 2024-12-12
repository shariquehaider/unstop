import React, { useState } from 'react'

function userLogin() {
  const [type, setType] = useState<string>("password");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("")
  const [error, setError] = useState({
    username: "",
    email: "",
    passowrd: ""
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (!emailRegex.test(event.target.value)) {
        setError(prevValue => {
          return {
            ...prevValue,
            email: "Please enter a valid email address."
          }
        });
    } else {
        setError(prevValue => {
          return {
            ...prevValue,
            email: ""
          }
        }); 
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value.length < 8) {
        setError(prevValue => {
          return {
            ...prevValue,
            password: "The password must contain a minimum of 8 characters"
          }
        });
    } else {
        setError(prevValue => {
          return {
            ...prevValue,
            password: ""
          }
        }); 
    }
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    if (event.target.value !== "emilys") {
        setError(prevValue => {
          return {
            ...prevValue,
            username: "Incorrect Username"
          }
        });
    } else {
        setError(prevValue => {
          return {
            ...prevValue,
            username: ""
          }
        }); 
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (type === "password") setType("text");
    else setType("password");
  }

  return { type, email, password, username, error, handleEmailChange, handlePasswordChange, handleUsernameChange, handleClick };
}

export default userLogin