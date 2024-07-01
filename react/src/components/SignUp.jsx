import React, { useState } from 'react';

function SignUp() {

  const [signUpContent, setSignUpContent] = useState();
  const handleSignUpSubmit = (event) => {event.preventDefault();}
  const handleSignUpReset = () => setSignUpContent();

  return (
    <section id="signUp" className="container">
      <h1 className="h3">สมัครสมาชิก</h1>
      <form onSubmit={handleSignUpSubmit}>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">ชื่อที่ใช้แสดง</label>
            <input type="text" name="signup_name" placeholder="เทพประทานพร  ส่องสว่าง" />
          </div>
        </fieldset>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">อีเมล</label>
            <input type="email" name="signup_email" placeholder="account@mail.com" />
          </div>
        </fieldset>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">รหัสผ่าน</label>
            <input type="password" name="signup_password" />
            <label className="label-field-end">
              <span className="icon-sm material-symbols-outlined">visibility</span>
            </label>
          </div>
        </fieldset>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">ยืนยันรหัสผ่าน</label>
            <input type="password" />
            <label className="label-field-end">
              <span className="icon-sm material-symbols-outlined">visibility_off</span>
            </label>
          </div>
        </fieldset>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">ปีเกิด (พ.ศ.)</label>
            <input type="number" name="signup_birth_year" min="2000" max="2567" placeholder="2499" />
            <label className="label-field-end">เพิ่มเติม</label>
          </div>
        </fieldset>
        <fieldset className="fieldset-inline">
          <label>เพศ</label>
          <div className="field">
            <input type="radio" name="signup_gender" id="male" value="ชาย" />
            <label htmlFor="male">ชาย</label>
          </div>
          <div className="field">
            <input type="radio" name="signup_gender" id="female" value="หญิง" />
            <label htmlFor="female">หญิง</label>
          </div>
          <div className="field">
            <input type="radio" name="signup_gender" id="other" value="ทางเลือก" />
            <label htmlFor="other">ทางเลือก</label>
          </div>
          <label className="label-field-end">เพิ่มเติม</label>
        </fieldset>
        <fieldset className="fieldset-button">
          <button className="btn btn-color-primary w-full 2xs:w-fit" type="submit">
            <span className="material-symbols-outlined">person_add</span>
            <span className="text">สมัคร</span>
          </button>
          <button className="btn btn-ghost w-full 2xs:w-fit" type="reset" onClick={handleSignUpReset}>
            <span className="material-symbols-outlined">backspace</span>
            <span className="text">ล้าง</span>
          </button>
        </fieldset>
      </form>
    </section>
  )

};

export default SignUp;