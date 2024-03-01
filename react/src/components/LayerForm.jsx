import React from 'react';

function LayerModal() {

  return (
    <>
      <section className="container frame !gap-4">
        <h5>Form</h5>
        <section className="flex flex-wrap gap-4">
          <form>
            <fieldset>
              <label>ชื่อ</label>
              <input type="text" placeholder="John Doje" required />
            </fieldset>
            <fieldset>
              <label>อีเมล</label>
              <input type="email" placeholder="name@mail.com" />
            </fieldset>
            <fieldset>
              <div className="field">
                <label className="label-border">ตัวเลข</label>
                <input type="number" placeholder="1234567890" />
                <label className="label-field-end">Option</label>
              </div>
            </fieldset>
            <fieldset>
              <div className="field">
                <label className="label-field-on">เบอร์ติดต่อ</label>
                <input type="tel" placeholder="081-234-5678" />
              </div>
            </fieldset>
            <fieldset>
              <label>Disabled</label>
              <input type="text" placeholder="Disabled" disabled />
            </fieldset>
            <fieldset>
              <label>ตัวเลือก</label>
              <select>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </fieldset>
            <fieldset>
              <label>ข้อความ</label>
              <div className="field">
                <textarea placeholder="ข้อความ"></textarea>
                <label className="label-field-end">Option</label>
              </div>
            </fieldset>
            <fieldset className="fieldset-inline">
              <label>เบอร์ติดต่อ</label>
              <div className="field">
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">Checkbox</label>
              </div>
              <div className="field">
                <input type="radio" id="radio" />
                <label htmlFor="radio">Radio</label>
              </div>
            </fieldset>
            <fieldset className="fieldset-button">
              <button className="btn btn-color-primary w-full 2xs:w-fit">
                <svg viewBox="0 -960 960 960">
                  <path d="M440-240h80v-120h120v-80H520v-120h-80v120H320v80h120v120ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
                </svg>
                <span>ส่ง</span>
              </button>
              <button className="btn btn-ghost w-full 2xs:w-fit">
                <svg viewBox="0 -960 960 960">
                  <path d="M360-200q-20 0-37.5-9T294-234L120-480l174-246q11-16 28.5-25t37.5-9h400q33 0 56.5 23.5T840-680v400q0 33-23.5 56.5T760-200H360Zm400-80v-400 400Zm-400 0h400v-400H360L218-480l142 200Zm96-40 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Z" />
                </svg>
                <span>ล้างข้อความ</span>
              </button>
            </fieldset>
          </form>
        </section>
      </section>
    </>
  )

};

export default LayerModal;