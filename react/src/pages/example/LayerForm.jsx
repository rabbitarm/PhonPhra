import React from 'react'

function LayerForm() {

  return (
    <section id="layerForm" className="layer">
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
          <fieldset className="fieldset-border">
            <div className="field">
              <label className="label-border">ตัวเลข</label>
              <input type="number" placeholder="1234567890" />
              <label className="label-field-end">เพิ่มเติม</label>
            </div>
          </fieldset>
          <fieldset>
            <div className="field">
              <label className="label-field-on">เบอร์ติดต่อ</label>
              <input type="tel" placeholder="081-234-5678" />
              <label className="label-field-end">เพิ่มเติม</label>
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
              <label className="label-field-end">เพิ่มเติม</label>
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
              <span className="material-symbols-outlined">forward_to_inbox</span>
              <span className="text">ส่งข้อความ</span>
            </button>
            <button className="btn btn-ghost w-full 2xs:w-fit">
              <span className="material-symbols-outlined">backspace</span>
              <span className="text">ล้าง</span>
            </button>
          </fieldset>
        </form>
      </section>
    </section>
  )

}

export default LayerForm