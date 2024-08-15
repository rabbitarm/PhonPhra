import React, { useState } from 'react'

function LayerModal() {

  const [modalToggle, setModalToggle] = useState(false)
  const handleModal = () => setModalToggle((toggle) => !toggle)

  return (
    <section id="layerModal" className="layer">
      <h5>Modal</h5>
      <section className="flex flex-wrap gap-4">
        <dialog className="modal modal-state">
          <div className="modal-content">
            <div className="tooltip" data-tip="ยกเลิก">
              <button className="btn btn-icon btn-text">
                <span className="material-symbols-outlined">close</span>
                <span className="text hidden">ยกเลิก</span>
              </button>
            </div>
            <h3>Modal title</h3>
            <p>Modal body text goes here.</p>
            <fieldset className="fieldset-button">
              <button className="btn btn-color-error">
                <span className="text">ลบ</span>
              </button>
              <button className="btn">
                <span className="text">ยกเลิก</span>
              </button>
            </fieldset>
          </div>
          <button className="modal-close"></button>
        </dialog>
        <dialog className="modal modal-tooltip onState">
          <div className="modal-content">
            <div className="tooltip" data-tip="ยกเลิก">
              <button className="btn btn-icon btn-text">
                <span className="material-symbols-outlined">close</span>
                <span className="text hidden">ยกเลิก</span>
              </button>
            </div>
            <p>Modal body text goes here.</p>
            <fieldset className="fieldset-button">
              <button className="btn btn-2xs btn-color-error">
                <span className="text">ลบ</span>
              </button>
              <button className="btn btn-2xs">
                <span className="text">ยกเลิก</span>
              </button>
            </fieldset>
          </div>
          <button className="modal-close"></button>
        </dialog>
        <div>
          <button className="btn btn-outline-alternate-info" onClick={handleModal}>
            <span className="material-symbols-outlined">open_in_new</span>
            <span className="text">เปิด</span>
          </button>
          {modalToggle &&
            <dialog className="modal">
              <div className="modal-content">
                <div className="tooltip tooltip-left" data-tip="ยกเลิก">
                  <button className="btn btn-icon btn-ghost" onClick={handleModal}>
                    <span className="material-symbols-outlined">close</span>
                    <span className="text hidden">ยกเลิก</span>
                  </button>
                </div>
                <h3>Modal title</h3>
                <p>Modal body text goes here.</p>
                <fieldset className="fieldset-button">
                  <button className="btn btn-color-error" onClick={handleModal}>
                    <span>ลบ</span>
                  </button>
                  <button className="btn" onClick={handleModal}>
                    <span className="text">ยกเลิก</span>
                  </button>
                </fieldset>
              </div>
              <button className="modal-close" onClick={handleModal}></button>
            </dialog>
          }
        </div>
      </section>
    </section>
  )

}

export default LayerModal