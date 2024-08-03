import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {

  const loginContentInitial = { user_email: '', user_password: '' };
  const [loginContent, setLoginContent] = useState(loginContentInitial);
  const loginChange = (event) => setLoginContent({ ...loginContent, [event.target.name]: event.target.value });
  const handleLoginSubmit = (event) => {
    event.preventDefault();
  };

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const handlePasswordVisibility = () => setPasswordVisibility(!passwordVisibility);

  return (
    <section id="login" className="container">
      <h1>เข้าสู่ระบบ</h1>
      <form onSubmit={handleLoginSubmit}>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">อีเมล</label>
            <input type="email" name="user_email" value={loginContent?.user_email} onChange={loginChange} placeholder="account@mail.com" />
          </div>
        </fieldset>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">รหัสผ่าน</label>
            <input className="pr-10" type={passwordVisibility ? 'text' : 'password'} name="user_password" value={loginContent?.user_password} onChange={loginChange} />
            <div className="field-button-end">
              <div className="tooltip tooltip-left" data-tip="แสดงรหัสผ่าน">
                <button className={`btn btn-icon ${passwordVisibility ? 'btn-text-primary' : 'btn-text'}`} onClick={handlePasswordVisibility}>
                  <span className="material-symbols-outlined">{passwordVisibility ? 'visibility' : 'visibility_off'}</span>
                  <span className="text hidden">แสดงรหัสผ่าน</span>
                </button>
              </div>
            </div>
          </div>
        </fieldset>
        {/*
        <fieldset className="fieldset-inline 2xs:flex-row justify-between mt-0">
          <div className="field btn btn-xs btn-text w-fit !h-fit gap-0 !p-0">
            <input className="!size-5" type="checkbox" name="login_remember" onChange={loginChange} id="loginRemember" />
            <label htmlFor="loginRemember">บันทึกการเข้าสู่ระบบ</label>
          </div>
          <div className="field">
            <Link className="btn btn-xs btn-text w-fit !h-fit !p-0" to="/ลืมรหัสผ่าน">
              <span className="material-symbols-outlined">lock_reset</span>
              <span className="text">ลืมรหัสผ่าน?</span>
            </Link>
          </div>
        </fieldset>
        */}
        <fieldset className="fieldset-button justify-between">
          <button className="btn btn-color-primary w-full 2xs:w-fit" type="submit">
            <span className="material-symbols-outlined">login</span>
            <span className="text">เข้าสู่ระบบ</span>
          </button>
          <Link className="btn btn-ghost w-full 2xs:w-fit" to="/ลืมรหัสผ่าน">
            <span className="material-symbols-outlined">lock_reset</span>
            <span className="text">ลืมรหัสผ่าน?</span>
          </Link>
        </fieldset>
      </form>
      <hr className="my-4" />
      <Link className="btn w-full 2xs:w-fit" to="/สมัครสมาชิก">
        <span className="material-symbols-outlined">person_add</span>
        <span className="text">สมัครสมาชิก</span>
      </Link>
    </section>
  )

};

export default Login;