import React, { useState } from 'react';

function LayerModal() {

  const [modalToggle, setModalToggle] = useState(false);
  const handleModal = () => setModalToggle((toggle) => !toggle);

  return (
    <>
      <section className="container frame !gap-4">
        <h5>Modal</h5>
        <section className="flex flex-wrap gap-4">
          <dialog className="modal modal-state">
            <div className="modal-content">
              <div className="tooltip" data-tip="ยกเลิก">
                <button className="btn btn-icon btn-text">
                  <svg>
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                  <span className="hidden">ยกเลิก</span>
                </button>
              </div>
              <h3>Modal title</h3>
              <p>Modal body text goes here.</p>
              <fieldset className="fieldset-button">
                <button className="btn btn-color-error">
                  <span>ลบ</span>
                </button>
                <button className="btn">
                  <span>ยกเลิก</span>
                </button>
              </fieldset>
            </div>
            <button className="modal-close"></button>
          </dialog>
          <dialog className="modal modal-tooltip onState">
            <div className="modal-content">
              <div className="tooltip" data-tip="ยกเลิก">
                <button className="btn btn-icon btn-text">
                  <svg>
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                  <span className="hidden">ยกเลิก</span>
                </button>
              </div>
              <p>Modal body text goes here.</p>
              <fieldset className="fieldset-button">
                <button className="btn btn-2xs btn-color-error">
                  <span>ลบ</span>
                </button>
                <button className="btn btn-2xs">
                  <span>ยกเลิก</span>
                </button>
              </fieldset>
            </div>
            <button className="modal-close"></button>
          </dialog>
          <div>
            <button className="btn btn-outline-alternate-info" onClick={handleModal}>
              <svg viewBox="0 -960 960 960">
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
              </svg>
              <span>เปิด</span>
            </button>
            {modalToggle
            ? <dialog className="modal">
                <div className="modal-content">
                  <div className="tooltip" data-tip="ยกเลิก">
                    <button className="btn btn-icon btn-text" onClick={handleModal}>
                      <svg viewBox="0 -960 960 960">
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                      </svg>
                      <span className="hidden">ยกเลิก</span>
                    </button>
                  </div>
                  <h3>Modal title</h3>
                  <p>Modal body text goes here.</p>
                  <fieldset className="fieldset-button">
                    <button className="btn btn-color-error" onClick={handleModal}>
                      <span>ลบ</span>
                    </button>
                    <button className="btn" onClick={handleModal}>
                      <span>ยกเลิก</span>
                    </button>
                  </fieldset>
                </div>
                <button className="modal-close" onClick={handleModal}></button>
              </dialog>
            : null
            }
          </div>
        </section>
      </section>
    </>
  )

};

export default LayerModal;