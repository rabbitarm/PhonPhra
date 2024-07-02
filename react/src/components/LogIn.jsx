import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {

  const signUpInitial = { user_email: '', user_password: '' };
  const [signUpContent, setSignUpContent] = useState(signUpInitial);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const handleSignUpPasswordVisibility = () => setPasswordVisibility(!passwordVisibility);
  const signUpChange = (event) => setSignUpContent({ ...signUpContent, [event.target.name]: event.target.value });
  const handleSignUpSubmit = (event) => event.preventDefault();

  return (
    <section id="login" className="container">
      <h1 className="h3">เข้าสู่ระบบ</h1>
      <form onSubmit={handleSignUpSubmit}>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">อีเมล</label>
            <input type="email" name="user_email" value={signUpContent?.user_email} onChange={signUpChange} placeholder="account@mail.com" />
          </div>
        </fieldset>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">รหัสผ่าน</label>
            <input className="pr-10" type={passwordVisibility ? 'text' : 'password'} name="user_password" value={signUpContent?.user_password} onChange={signUpChange} />
            <div className="field-button-end">
              <div className="tooltip tooltip-left" data-tip="แสดงรหัสผ่าน">
                <button className={`btn btn-icon ${passwordVisibility ? 'btn-text-primary' : 'btn-text'}`} onClick={handleSignUpPasswordVisibility}>
                  <span className="material-symbols-outlined">{passwordVisibility ? 'visibility' : 'visibility_off'}</span>
                  <span className="text hidden">แสดงรหัสผ่าน</span>
                </button>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="fieldset-inline justify-between mt-0">
          <div className="field btn btn-xs btn-text !h-fit gap-0 !p-0">
            <input className="!size-5" type="checkbox" name="login_remember" onChange={signUpChange} id="loginRemember" />
            <label htmlFor="loginRemember">บันทึกการเข้าสู่ระบบ</label>
          </div>
          <div className="field">
            <Link className="btn btn-xs btn-text !h-fit !p-0" to="#ลืมรหัสผ่าน">
              <span className="material-symbols-outlined">lock_reset</span>
              <span className="text">ลืมรหัสผ่าน?</span>
            </Link>
          </div>
        </fieldset>
        <fieldset className="fieldset-button">
          <button className="btn btn-color-primary w-full 2xs:w-fit" type="submit">
            <span className="material-symbols-outlined">login</span>
            <span className="text">เข้าสู่ระบบ</span>
          </button>
        </fieldset>
      </form>
    </section>
  )

};

export default Login;