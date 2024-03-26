import React, { useState } from 'react';

function ContactUs() {


  const contactFormContentInitial = { contact_name: '', contact_email: '', contact_other: '', contact_subject: '', contact_message: '' };
  const [contactFormContent, setContactFormContent] = useState(contactFormContentInitial);
  const contactFormChange = (event) => setContactFormNew({ ...contactFormeContent, [event.target.name]: event.target.value });
  const contactFormSubmit = async (event) => {
    event.preventDefault();
  };
  const contactFormReset = () => setContactFormContent(contactFormContentInitial);

  return (
    <section id="contactUs" className="container">
      <h4>ติดต่อ/ส่งข้อความ</h4>
      <form onSubmit={contactFormSubmit}>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">ชื่อ</label>
            <input type="text" name="contact_name" value={contactFormContent.contact_name} onChange={contactFormChange} placeholder="เทพประทานพร  ส่องสว่าง" />
          </div>
        </fieldset>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">อีเมล</label>
            <input type="email" name="contact_email" value={contactFormContent.contact_email} onChange={contactFormChange} placeholder="account@mail.com" />
          </div>
        </fieldset>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">ช่องทางติดต่ออื่น</label>
            <input type="text" name="contact_other" value={contactFormContent.contact_other} onChange={contactFormChange} placeholder="เบอร์โทรติดต่อ / Line ID" />
            <label className="label-field-end">Option</label>
          </div>
        </fieldset>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">ข้อความ</label>
            <textarea name="contact_message" value={contactFormContent.contact_message} onChange={contactFormChange} placeholder="สามารถเสนอแนะหรือแสดงความคิดเห็น&#10;เพื่อให้บริการของเรานั้นน่าใช้มากยิ่งขึ้น"></textarea>
          </div>
        </fieldset>
        <fieldset className="fieldset-button">
          <button className="btn btn-color-primary w-full 2xs:w-fit" type="submit">
            <svg className="-scale-x-100" viewBox="0 -960 960 960">
              <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
            </svg>
            <span>ส่งข้อความ</span>
          </button>
          <button className="btn btn-ghost w-full 2xs:w-fit" type="reset" onClick={contactFormReset}>
            <svg viewBox="0 -960 960 960">
              <path d="M360-200q-20 0-37.5-9T294-234L120-480l174-246q11-16 28.5-25t37.5-9h400q33 0 56.5 23.5T840-680v400q0 33-23.5 56.5T760-200H360Zm400-80v-400 400Zm-400 0h400v-400H360L218-480l142 200Zm96-40 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Z" />
            </svg>
            <span>ล้าง</span>
          </button>
        </fieldset>
      </form>
    </section>
  )

};

export default ContactUs;