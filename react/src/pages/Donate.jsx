import React, { useState } from 'react';

function Donate() {

  const donateTime = new Date(new Date - new Date()?.getTimezoneOffset() * 60000)?.toISOString()?.slice(0, 16)
  const donateContentInitial = { donate_name: '', donate_email: '', donate_time: donateTime, donate_message: '' };
  const [donateContent, setDonateContent] = useState(donateContentInitial);
  const donateChange = (event) => setDonateContent({ ...donateContent, [event.target.name]: event.target.value });
  const handleDonateSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section id="donate" className="container">
      <h1>ร่วมสนับสนุน</h1>
      <div className="flex flex-col sm:flex-row justify-between gap">
        <section id="donatePayment" className="flex flex-col w-fit gap-4 text-nowrap mx-auto sm:mx-0">
          <div className="text-center w-28 p-1 rounded-lg mx-auto bg-secondary">
            <img className="donate-qrcode w-[104px] h-[104px] rounded bg-white" src="" />
            <h6 className="block leading-none text-white pb-1.5">
              <span className="h3 block text-white">สแกน QR</span>
              <span className="">เพื่อโอนเข้าบัญชี</span></h6>
          </div>
          <p className="leading-snug">
            <i className="bank bank-kbank"></i><br />
            <strong>นายทดลอง  ทดสอบ</strong><br />
            บัญชี: XXX-X-X0000-X<br />
            <span className="text-sm text-slate-400">เลขที่อ้างอิง: 012345678901234</span></p>
        </section>
        <hr className="sm:w-0 sm:h-auto sm:border-t-0 sm:border-r -mx-4 sm:mx-0 my-4 sm:my-0" />
        <form className="sm:w-1/2 form-color-secondary" onSubmit={handleDonateSubmit}>
          <fieldset className="fieldset-border">
            <div className="field">
              <label className="label-border">ชื่อผู้ใช้</label>
              <input type="text" name="donate_name" value={donateContent?.donate_name} onChange={donateChange} placeholder="เทพประทานพร  ส่องสว่าง" />
            </div>
          </fieldset>
          <fieldset className="fieldset-border">
            <div className="field">
              <label className="label-border">อีเมล</label>
              <input className="pr-16" type="email" name="donate_email" value={donateContent?.donate_email} onChange={donateChange} placeholder="account@mail.com" />
              <label className="label-field-end">เพิ่มเติม</label>
            </div>
          </fieldset>
          <fieldset className="fieldset-border">
            <div className="field">
              <label className="label-border">เวลาโอน</label>
              <input type="datetime-local" name="donate_time" value={donateContent?.donate_time} onChange={donateChange} min="2024-01-01" max="2030-12-31" placeholder="dd mm yyyy" />
            </div>
          </fieldset>
          <fieldset className="fieldset-border">
            <div className="field">
              <label className="label-border">ข้อความ</label>
              <textarea name="donate_message" value={donateContent?.donate_message} onChange={donateChange} placeholder="สามารถเสนอแนะหรือแสดงความคิดเห็น&#10;เพื่อให้บริการของเรานั้นน่าใช้มากยิ่งขึ้น"></textarea>
            </div>
          </fieldset>
          <fieldset className="fieldset-button">
            <button className="btn btn-color-secondary" type="submit">
              <span className="material-symbols-outlined">redeem</span>
              <span className="text">ส่งกำลังใจ</span>
            </button>
          </fieldset>
        </form>
      </div>
        
    </section>
  )

};

export default Donate;