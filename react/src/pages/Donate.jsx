import React, { useState } from 'react'

function Donate() {

  const donateTime = new Date(new Date - new Date()?.getTimezoneOffset() * 60000)?.toISOString()?.slice(0, 16)
  const donateContentInitial = { donate_name: '', donate_email: '', donate_time: donateTime, donate_message: '' }
  const [donateContent, setDonateContent] = useState(donateContentInitial)
  const donateChange = (event) => setDonateContent({ ...donateContent, [event.target.name]: event.target.value })
  const handleDonateSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <section id="donate" className="container">
      <h1>ร่วมสนับสนุน</h1>
      <div className="wrapper">
        <section className="donate-channel">
          <div className="donate-channel-qrcode">
            <img src="" />
            <h6 className="heading"><span>สแกน QR</span> เพื่อโอนเข้าบัญชี</h6>
          </div>
          <div className="donate-channel-desc">
            <i className="bank bank-color bank-kbank"></i>
            <h4 className="heading text-bank-kbank">ธนาคารกสิกรไทย</h4>
            <p>
              นายทดลอง  ทดสอบ<br />
              บัญชี: XXX-X-X0000-X<br />
              <span className="number-reference">เลขที่อ้างอิง: 012345678901234</span>
            </p>
          </div>
        </section>
        <hr />
        <form className="form-color-secondary" onSubmit={handleDonateSubmit}>
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

}

export default Donate