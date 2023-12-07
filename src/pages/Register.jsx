import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import InputField from "../components/react-hook-form-Filed/InputField";
import SelectField from "../components/react-hook-form-Filed/SelectField";
import ModalPortal from "../components/ui/ModalPortal";

import InputFieldOtion from "../components/react-hook-form-Filed/InputFieldOtion";
import { AuthContext } from "../context/AuthContext";
import { isValidEmail } from "../../utils/Validation";
import { Notification } from "../context/NotificationProvider";

function Register() {
  const { toggleNotification, setMessage, setType } = useContext(Notification);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { registerUser, isLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      let hasError = false;
      if (!formData.email) {
        setMessage(`이메일은 필수입니다.`);
        setType("error");
        toggleNotification();
        hasError = true;
      }

      if (!isValidEmail(formData.email)) {
        setMessage(`유효하지 않은 이메일.`);
        setType("error");
        toggleNotification();
        hasError = true;
      }

      if (formData.password1 !== formData.password2) {
        setMessage(`비밀번호가 다릅니다.`);
        setType("error");
        toggleNotification();
        hasError = true;
      }

      if (!hasError) {
        await registerUser({ formData });
        if (isLogin()) {
          navigate('/home');
        }
        console.log("Registration successful!");
      }
    } catch (error) {
      setMessage(`회원가입 실패: ${error.message}`);
      setType("error");
      toggleNotification();
      console.error("Registration failed:", error.message);
    } finally {
      // 모달을 닫습니다.
    }
  };

  const userClassificationOptions = [
    { value: "PartyLeader", label: "파티장" },
    { value: "Member", label: "회원" },
    { value: "Seller", label: "판매자" },
  ];

  const ageOptions = [
    { value: "10", label: "10" },
    { value: "20", label: "20" },
    { value: "30", label: "30" },
    { value: "40", label: "40" },
    { value: "50", label: "50" },
    { value: "60", label: "60" },
    { value: "70", label: "70+" },
  ];

  const genderOptions = [
    { value: "female", label: "여성" },
    { value: "male", label: "남성" },
  ];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="text-center">Register Form</div>

          <div className="card shadow-lg p-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputField label="email" name="email" register={register} errors={errors} placeholder="email" />
              <InputField label="이름" name="name" register={register} errors={errors} placeholder="FullName" />
              <InputField label="닉네임" name="user_nick_name" register={register} errors={errors} placeholder="NickName" />
              <InputField label="비밀번호" name="password1" register={register} errors={errors} placeholder="password" />
              <InputField label="비밀번호확인" name="password2" register={register} errors={errors} placeholder="passwordCheck" />
              <SelectField label="가입유형" name="user_classification" register={register} options={userClassificationOptions} />
              <SelectField label="나이" name="age" register={register} options={ageOptions} />
              <SelectField label="성별" name="gender" register={register} options={genderOptions} />

              <div className="mb-3">
                <input
                  type="submit"
                  className="btn btn-primary btn-block bg-red-600"
                />
              </div>
            </form>
            <p>
              <div className="flex justify-around w-full">
                <div className="mt-3">계정이 있나요? </div>
                <div className="mt-3">
                  <Link to="/login">로그인</Link>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>

    
    </div>
  );
}

export default Register;
