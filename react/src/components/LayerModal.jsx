import React, { useEffect } from 'react';

function LayerModal() {

  useEffect(() => {
    document.querySelectorAll('svg').forEach(svg => svg.setAttribute('viewBox', '0 -960 960 960'));
  }, []);

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
              <div className="form-control-button">
                <button className="btn btn-alternate-success">
                  <span>ยกเลิก</span>
                </button>
                <button className="btn btn-color-error">
                  <span>ลบ</span>
                </button>
              </div>
            </div>
            <button className="modal-close"></button>
          </dialog>
          <dialog className="modal modal-tooltip">
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
              <div className="form-control-button">
                <button className="btn btn-2xs btn-alternate-success">
                  <span>ยกเลิก</span>
                </button>
                <button className="btn btn-2xs btn-color-error">
                  <span>ลบ</span>
                </button>
              </div>
            </div>
            <button className="modal-close"></button>
          </dialog>
          <dialog className="modal active">
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
              <div className="form-control-button">
                <button className="btn btn-alternate-success">
                  <span>ยกเลิก</span>
                </button>
                <button className="btn btn-color-error">
                  <span>ลบ</span>
                </button>
              </div>
            </div>
            <button className="modal-close"></button>
          </dialog>
        </section>
      </section>
    </>
  )

};

export default LayerModal;