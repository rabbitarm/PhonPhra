import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {

  const forgotPasswordContentInitial = { user_email: '', user_password: '' };
  const [forgotPasswordContent, setForgotPasswordContent] = useState(forgotPasswordContentInitial);
  const forgotPasswordChange = (event) => setForgotPasswordContent({ ...forgotPasswordContent, [event.target.name]: event.target.value });
  const handleForgotPasswordSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section id="forgotPassword" className="container">
      <h1>ลืมรหัสผ่าน</h1>
      <form onSubmit={handleForgotPasswordSubmit}>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">อีเมล</label>
            <input type="email" name="user_email" value={forgotPasswordContent?.user_email} onChange={forgotPasswordChange} placeholder="account@mail.com" />
          </div>
        </fieldset>
        <fieldset className="fieldset-button">
          <button className="btn btn-color-primary w-full 2xs:w-fit" type="submit">
            <span className="material-symbols-outlined">send</span>
            <span className="text">ส่งคำขอ</span>
          </button>
        </fieldset>
      </form>
      <hr className="my-4" />
      <Link className="btn w-full 2xs:w-fit" to="/เข้าสู่ระบบ">
        <span className="material-symbols-outlined">login</span>
        <span className="text">เข้าสู่ระบบ</span>
      </Link>
    </section>
  )

};

export default ForgotPassword;