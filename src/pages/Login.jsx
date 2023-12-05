import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Notification } from "../context/NotificationProvider";

import { useForm } from "react-hook-form";
import InputField from "../components/react-hook-form-Filed/InputField";
import { isValidEmail } from "../../utils/Validation";
import TopRightNotification from "../components/CustomAlert/TopRightNotification";

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const { toggleNotification, setMessage, setType } = useContext(Notification); 
  
  const { login } = useContext(AuthContext); // Move useContext hook outside

  const onSubmit = async (formData) => {
    if(!isValidEmail(formData.email)){

      setMessage(`유효하지 않은 이메일 `)
      setType("error")
      toggleNotification()
    }
    try {
     
      console.log(formData.passwod)
      const res = await login({
        "email": formData.email,
        "password": formData.password,
      })


      
      if (res.status === 200) {
        navigate('/home');
      }
      
      
    } catch (error) {

      setMessage( `회원가입 실패: ${error.message}`,)
      setType("error")
      toggleNotification()
    
    } finally {

    }
  };

  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-8 col-sm-10">

    <div className="text-center">
      <h3>LOGIN FORM</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 각 입력 필드에 InputField 컴포넌트 사용 */}
        <InputField label="email" name="email" register={register} errors={errors} placeholder="email" />
        <InputField label="password" name="password" register={register} errors={errors} placeholder="password" />

        <div className="mb-3">
          <input
            type="submit"
            className="btn btn-primary btn-block bg-red-600"
          />
        </div>
      </form>

      <p>
        <Link to="/login">forgotten password? </Link>
      </p>
      <p>
        New member in here? <Link to="/register">register</Link>
      </p>
    </div>

  
    </div>
    </div>
    </div>
  );
}

export default Login;
