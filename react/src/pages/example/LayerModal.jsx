import React, { useState } from 'react'
import Modal from '../../lib/Modal'

function LayerModal() {

  const [modalActive, setModalActive] = useState(false)
  const handleModalActive = () => setModalActive((toggle) => !toggle)

  return (
    <section id="layerModal" className="layer">
      <h5 className="heading">Modal</h5>
      <div className="!gap-4">
        <Modal mode="modal-state">
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
        </Modal>
        <Modal mode="modal-tooltip modal-onstate">
          <p>Modal body text goes here.</p>
          <fieldset className="fieldset-button">
            <button className="btn btn-2xs btn-color-error">
              <span className="text">ลบ</span>
            </button>
            <button className="btn btn-2xs">
              <span className="text">ยกเลิก</span>
            </button>
          </fieldset>
        </Modal>
        <div>
          <button className="btn btn-outline-alternate-info" onClick={handleModalActive}>
            <span className="material-symbols-outlined">open_in_new</span>
            <span className="text">เปิด</span>
          </button>
          {modalActive &&
            <Modal mode="" setModalActive={setModalActive}>
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
            </Modal>
          }
        </div>
      </div>
    </section>
  )

}

export default LayerModal