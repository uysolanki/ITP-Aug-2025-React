import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { userValidationRules } from '../validation/UserValidationSchema';
import './RegisterUser.css';
import { useState } from 'react';
const RegisterUser1 = () => {

    const eyeImg='/myimages/eye.png'
    const hideEyeImg='/myimages/hide_eye.png'
    const navigate = useNavigate();
    
    const [toggle,setToggle]=useState(false)

    function setPasswordVisibility()
     {
      setToggle(!toggle)
     }
    const u1 = {
        username: "",
        password: "",
        confirmPassword: ""
    }

    const {
        errors,
        values, 
        touched,
        handleBlur,
        handleSubmit,
        handleChange,
      } = useFormik({
        initialValues: u1,  
        validationSchema: userValidationRules,
        onSubmit: function () 
        {
            saveData()
        },
    })

    
    async function saveData() {
        const payload={
            username:values.username,
            password:values.password
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
              <div>
                <input
                    type="text" 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="username"
                    value={values.username}
                />
                {touched.username && errors.username && (<p className="text-danger">{errors.username}</p>)}
                </div>

                <div>
                <input 
                    type={toggle ? "text" : "password"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                    value={values.password}
                />
                {touched.password && errors.password && (<p className="text-danger">{errors.password}</p>)}
                </div>

                <div>
                <input 
                    type={toggle ? "text" : "password"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="confirmPassword"
                    value={values.confirmPassword}
                />
                {touched.confirmPassword && errors.confirmPassword && (<p className="text-danger">{errors.confirmPassword}</p>)}
                </div>
                <div>
                  <button
                  type="button"
                  className='password-show-btn'
                  onClick={setPasswordVisibility}
                  >
                    {
                      toggle?<img src={eyeImg} /> : <img src={hideEyeImg} />
                    }

                  </button>

                </div>

                <input type="submit" value="Register"></input>
            </form>
        </>
    )
}

export default RegisterUser1