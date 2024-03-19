import React from 'react';

function LayerModal() {

  return (
    <>

      <section id="contactUs" className="container">
        <h4>ติดต่อ/ส่งข้อความ</h4>
        <form>
          <fieldset>
            <div className="field">
              <label className="label-border">ชื่อ</label>
              <input type="text" placeholder="John Doje" />
            </div>
          </fieldset>
          <fieldset>
            <div className="field">
              <label className="label-border">อีเมล</label>
              <input type="email" placeholder="name@mail.com" />
            </div>
          </fieldset>
          <fieldset>
            <div className="field">
              <label className="label-border">หัวเรื่อง</label>
              <input type="text" placeholder="หัวเรื่องที่สอบถาม" />
              <label className="label-field-end">Option</label>
            </div>
          </fieldset>
          <fieldset>
            <div className="field">
              <label className="label-border">ข้อความ</label>
              <textarea placeholder="ข้อความ"></textarea>
            </div>
          </fieldset>
          <fieldset className="fieldset-button">
            <button className="btn btn-color-primary w-full 2xs:w-fit">
              <svg viewBox="0 -960 960 960">
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
              </svg>
              <span>ส่งข้อความ</span>
            </button>
            <button className="btn btn-ghost w-full 2xs:w-fit">
              <svg viewBox="0 -960 960 960">
                <path d="M360-200q-20 0-37.5-9T294-234L120-480l174-246q11-16 28.5-25t37.5-9h400q33 0 56.5 23.5T840-680v400q0 33-23.5 56.5T760-200H360Zm400-80v-400 400Zm-400 0h400v-400H360L218-480l142 200Zm96-40 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Z" />
              </svg>
              <span>ล้าง</span>
            </button>
          </fieldset>
        </form>
      </section>
    </>
  )

};

export default LayerModal;