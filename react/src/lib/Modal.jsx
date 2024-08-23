import React from 'react'

function Modal({ mode, setModalActive, children }) {

  const handleModalClose = () => setModalActive((toggle) => !toggle)
  /*
    default not add value
    modal-state
    modal-tooltip
  */

  return (
    <dialog className={`modal ${mode}`}>
      <div className="modal-content">
        {setModalActive !== undefined &&
          <button className="btn-close btn btn-icon btn-ghost" onClick={handleModalClose}>
            <span className="material-symbols-outlined">close</span>
            <span className="text hidden">ยกเลิก</span>
          </button>
        }
        {children}
      </div>
      {setModalActive !== undefined &&
        <button className="modal-close" onClick={handleModalClose}></button>
      }
    </dialog>
  )

}

export default Modal