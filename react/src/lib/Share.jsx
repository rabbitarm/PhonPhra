import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function Share() {

  const [copySuccess, setCopySuccess] = useState('');
  const currentURL = decodeURIComponent(window?.location?.href);
  const brandLogo = '/vite.svg';

  const QRCodeData = {
    value: currentURL,
    size: 160,
    fgColor: "#64748b",
    imageSettings: {
      src: brandLogo,
      width : 24,
      height: 24,
      excavate: true,
    },
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentURL)
      .then(()  => {setCopySuccess(true) ; setTimeout(() => setCopySuccess(''), 3000);})
      .catch(() => {setCopySuccess(false); setTimeout(() => setCopySuccess(''), 3000);});
  };

  return (
    <section id="share">
      <h5 className="heading">แบ่งปันบทสวดมนต์</h5>
      <div className="share-qrcode"><QRCode {...QRCodeData} /></div>
      <form onSubmit={(event) => event.preventDefault()}>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border hidden">ลิ้งก์หน้าเว็บไซต์</label>
            <input type="text" name="url" value={currentURL} placeholder="ลิ้งก์หน้าเว็บไซต์" readOnly />
            <div className="field-button-end">
              <div className="tooltip" data-tip="คัดลอกลิ้งก์">
                <button className="btn btn-icon btn-ghost-alternate-primary" onClick={handleCopyLink}>
                  <span className="material-symbols-outlined">link</span>
                  <span className="text hidden">คัดลอกลิ้งก์</span>
                </button>
              </div>
            </div>
          </div>
          {copySuccess !== '' &&
            <label className={`badge badge-sm ${copySuccess ? 'badge-outline-success' : 'badge-outline-error'} !bg-white absolute w-full !h-10 !rounded-lg`}>
              <span className="material-symbols-outlined">{copySuccess ? 'check' : 'error'}</span>
              <span className="text">{copySuccess ? 'คัดลอกลิงก์แล้ว' : 'ไม่สามารถคัดลอกลิงก์ได้'}</span>
            </label>
          }
        </fieldset>
      </form>
    </section>
  );

};

export default Share;