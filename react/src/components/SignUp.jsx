import React, { useState } from 'react';

function SignUp() {

  const signUpInitial = { user_name: '', user_email: '', user_password: '', user_password2: '', user_birth_year: '', user_gender: '' };
  const [signUpContent, setSignUpContent] = useState(signUpInitial);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const handleSignUpPasswordVisibility = () => setPasswordVisibility(!passwordVisibility);
  const signUpChange = (event) => setSignUpContent({ ...signUpContent, [event.target.name]: event.target.value });
  const handleSignUpSubmit = (event) => event.preventDefault();
  const handleSignUpReset = () => setSignUpContent(signUpInitial);

  return (
    <section id="signUp" className="container">
      <h1 className="h3">สมัครสมาชิก</h1>
      <form onSubmit={handleSignUpSubmit}>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">ชื่อผู้ใช้</label>
            <input type="text" name="user_name" value={signUpContent?.user_name} onChange={signUpChange} placeholder="เทพประทานพร  ส่องสว่าง" />
          </div>
        </fieldset>
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
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">ยืนยันรหัสผ่าน</label>
            <input className="pr-10" type={passwordVisibility ? 'text' : 'password'} name="user_password2" value={signUpContent?.user_password2} onChange={signUpChange} />
            <div className="field-button-end">
              <div className="tooltip tooltip-left" data-tip="แสดงรหัสผ่าน">
                <button className={`btn btn-icon ${passwordVisibility ? 'btn-text-primary' : 'btn-text'}`} onClick={handleSignUpPasswordVisibility}>
                  <span className="material-symbols-outlined">{passwordVisibility ? 'visibility' : 'visibility_off'}</span>
                  <span className="text hidden">แสดงรหัสผ่าน</span>
                </button>
              </div>
            </div>
          </div>
          {signUpContent.user_password !== '' && signUpContent.user_password2 !== '' && signUpContent.user_password !== signUpContent.user_password2 &&
            <label className="badge badge-sm badge-color-warning">
              <span className="material-symbols-outlined">warning</span>
              <span className="text">กรอกรหัสผ่านไม่ตรงกัน</span>
            </label>
          }
        </fieldset>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">ปีเกิด (พ.ศ.)</label>
            <input className="pr-16" type="number" name="user_birth_year" value={signUpContent?.user_birth_year} onChange={signUpChange} min="2000" max="2567" placeholder="2499" />
            <label className="label-field-end">เพิ่มเติม</label>
          </div>
        </fieldset>
        <fieldset className="fieldset-inline border">
          <label className="label-border">เพศ</label>
          <div className="field">
            <input type="radio" name="user_gender" value="male" onChange={signUpChange} id="male" />
            <label htmlFor="male">ชาย</label>
          </div>
          <div className="field">
            <input type="radio" name="user_gender" value="female" onChange={signUpChange} id="female" />
            <label htmlFor="female">หญิง</label>
          </div>
          <div className="field">
            <input type="radio" name="user_gender" value="other" onChange={signUpChange} id="other" />
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