import React, { useState } from 'react'
import './RegisterUser.css'
import { useNavigate } from 'react-router-dom';

const RegisterUser = () => {

    const navigate = useNavigate();
    
    const u1 = {
        username: "",
        password: "",
        confirmPassword: ""
    }

    const [user, setUser] = useState(u1)

    function handleOnChange(event) {
        const { name, value } = event.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const payload={
            username:user.username,
            password:user.password
        }

        try {
          const response = await fetch("http://localhost:8087/registerUser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });
    
          if (response.ok) {
            const data = await response.json();
            //alert(data.sname + " " +" user registered successfully!");
            alert("User Registration successful!");
            navigate("/");
            console.log(data);
            //resetForm();
          } else {
            alert("Failed to Register User");
          }
        } catch (error) {
          console.error("Error submitting the form", error);
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text" onChange={handleOnChange}
                    name="username"
                    value={user.username}
                    className='abc'
                />

                <input type="text" onChange={handleOnChange}
                    name="password"
                    value={user.password}
                />

                <input type="text" onChange={handleOnChange}
                    name="confirmPassword"
                    value={user.confirmPassword}
                />

                <input type="submit" value="Register" disabled={
                    !user.password ||
                    !user.confirmPassword ||
                    user.password !== user.confirmPassword
                }
                ></input>
            </form>
        </>
    )
}

export default RegisterUser