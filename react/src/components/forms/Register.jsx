import React, { useState } from 'react';

function Register() {

  const registerContentInitial = { user_name: '', user_email: '', user_password: '', user_password2: '', user_birthday: '', user_gender: '' };
  const [registerContent, setRegisterContent] = useState(registerContentInitial);
  const registerChange = (event) => setRegisterContent({ ...registerContent, [event.target.name]: event.target.value });
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
  };
  const handleRegisterReset = () => setRegisterContent(registerContentInitial);

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const handlePasswordVisibility = () => setPasswordVisibility(!passwordVisibility);

  return (
    <section id="register" className="container">
      <h1>สมัครสมาชิก</h1>
      <form onSubmit={handleRegisterSubmit}>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">ชื่อผู้ใช้</label>
            <input type="text" name="user_name" value={registerContent?.user_name} onChange={registerChange} placeholder="เทพประทานพร  ส่องสว่าง" />
          </div>
        </fieldset>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">อีเมล</label>
            <input type="email" name="user_email" value={registerContent?.user_email} onChange={registerChange} placeholder="account@mail.com" />
          </div>
        </fieldset>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">รหัสผ่าน</label>
            <input className="pr-10" type={passwordVisibility ? 'text' : 'password'} name="user_password" value={registerContent?.user_password} onChange={registerChange} />
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
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">ยืนยันรหัสผ่าน</label>
            <input className="pr-10" type={passwordVisibility ? 'text' : 'password'} name="user_password2" value={registerContent?.user_password2} onChange={registerChange} />
            <div className="field-button-end">
              <div className="tooltip tooltip-left" data-tip="แสดงรหัสผ่าน">
                <button className={`btn btn-icon ${passwordVisibility ? 'btn-text-primary' : 'btn-text'}`} onClick={handlePasswordVisibility}>
                  <span className="material-symbols-outlined">{passwordVisibility ? 'visibility' : 'visibility_off'}</span>
                  <span className="text hidden">แสดงรหัสผ่าน</span>
                </button>
              </div>
            </div>
          </div>
          {registerContent.user_password !== '' && registerContent.user_password2 !== '' && registerContent.user_password !== registerContent.user_password2 &&
            <label className="badge badge-sm badge-color-warning">
              <span className="material-symbols-outlined">warning</span>
              <span className="text">กรอกรหัสผ่านไม่ตรงกัน</span>
            </label>
          }
        </fieldset>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">วันเกิด</label>
            <input className="pr-16" type="date" name="user_birthday" value={registerContent?.user_birthday} onChange={registerChange} min="1901-01-01" max="2030-12-31" placeholder="dd mm yyyy" />
            <label className="label-field-end">เพิ่มเติม</label>
          </div>
        </fieldset>
        <fieldset className="fieldset-inline border">
          <label className="label-border">เพศ</label>
          <div className="field">
            <input type="radio" name="user_gender" value="male" onChange={registerChange} id="male" />
            <label htmlFor="male">ชาย</label>
          </div>
          <div className="field">
            <input type="radio" name="user_gender" value="female" onChange={registerChange} id="female" />
            <label htmlFor="female">หญิง</label>
          </div>
          <div className="field">
            <input type="radio" name="user_gender" value="other" onChange={registerChange} id="other" />
            <label htmlFor="other">ทางเลือก</label>
          </div>
          <label className="label-field-end">เพิ่มเติม</label>
        </fieldset>
        <fieldset className="fieldset-button">
          <button className="btn btn-color-primary w-full 2xs:w-fit" type="submit">
            <span className="material-symbols-outlined">person_add</span>
            <span className="text">สมัคร</span>
          </button>
          <button className="btn btn-ghost w-full 2xs:w-fit" type="reset" onClick={handleRegisterReset}>
            <span className="material-symbols-outlined">backspace</span>
            <span className="text">ล้าง</span>
          </button>
        </fieldset>
      </form>
    </section>
  )

};

export default Register;