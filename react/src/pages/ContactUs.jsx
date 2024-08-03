import React, { useState } from 'react';

function ContactUs() {

  const contactContentInitial = { contact_name: '', contact_email: '', contact_other: '', contact_message: '' };
  const [contactContent, setContactContent] = useState(contactContentInitial);
  const contactChange = (event) => setContactContent({ ...contactContent, [event.target.name]: event.target.value });
  const handleContactSubmit = (event) => {
    event.preventDefault();
  };
  const handleContactReset = () => setContactContent(contactContentInitial);

  return (
    <section id="contactUs" className="container">
      <h1>ติดต่อเรา</h1>
      <form onSubmit={handleContactSubmit}>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">ชื่อ</label>
            <input type="text" name="contact_name" value={contactContent?.contact_name} onChange={contactChange} placeholder="เทพประทานพร  ส่องสว่าง" />
          </div>
        </fieldset>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">อีเมล</label>
            <input type="email" name="contact_email" value={contactContent?.contact_email} onChange={contactChange} placeholder="account@mail.com" />
          </div>
        </fieldset>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">ช่องทางติดต่ออื่น</label>
            <input type="text" name="contact_other" value={contactContent?.contact_other} onChange={contactChange} placeholder="เบอร์โทรติดต่อ , ไลน์ไอดี" />
            <label className="label-field-end">เพิ่มเติม</label>
          </div>
        </fieldset>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">ข้อความ</label>
            <textarea name="contact_message" value={contactContent?.contact_message} onChange={contactChange} placeholder="สามารถเสนอแนะหรือแสดงความคิดเห็น&#10;เพื่อให้บริการของเรานั้นน่าใช้มากยิ่งขึ้น"></textarea>
          </div>
        </fieldset>
        <fieldset className="fieldset-button">
          <button className="btn btn-color-primary w-full 2xs:w-fit" type="submit">
            <span className="material-symbols-outlined">forward_to_inbox</span>
            <span className="text">ส่งข้อความ</span>
          </button>
          <button className="btn btn-ghost w-full 2xs:w-fit" type="reset" onClick={handleContactReset}>
            <span className="material-symbols-outlined">backspace</span>
            <span className="text">ล้าง</span>
          </button>
        </fieldset>
      </form>
    </section>
  )

};

export default ContactUs;