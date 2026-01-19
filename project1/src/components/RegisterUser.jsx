import React, { useState } from 'react'
import './RegisterUser.css'

const RegisterUser = () => {

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

    function handleSubmit(event) {
        event.preventDefault()
        console.log(user)
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