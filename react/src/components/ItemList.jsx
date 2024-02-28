import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ItemList() {
  /* Item */
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  /* Item List - Get */
  useEffect(() => {
    document.querySelectorAll('svg').forEach(svg => svg.setAttribute('viewBox', '0 -960 960 960'));
    const abortController = new AbortController();
    const itemListGet = async () => {
      try {
        setLoading(true);
        setError('');
        const response = await axios.get(`http://localhost:3001/item/list`, {
          crossdomain: true,
          signal: abortController.signal
        });
        setItemList(response.data);
        document.querySelectorAll('svg').forEach(svg => svg.setAttribute('viewBox', '0 -960 960 960'));
      } catch (error) {
        setError('Error getting item list: ' + error.message);
      } finally {
        setLoading(false);
      };
    };
    itemListGet();
    return () => abortController.abort();
  }, []);

  return (
    <>
      <section id="itemList" className="container">
        <h3>บทสวดมนต์</h3>
        <table className="table-action">
          <thead>
            <tr>
              <th>เลขที่</th>
              <th>ชื่อบทสวดมนต์</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {itemList.map(itemItemList => (
              <tr key={itemItemList?._id} index={itemItemList?._id} className="hover">
                <td>{itemItemList?.item_number}</td>
                <td><a className="btn btn-ghost" href="#test">{itemItemList?.item_name}</a></td>
                <td>
                  <div className="tooltip" data-tip="เพิ่ม">
                    <button className="btn btn-icon btn-mix-alternate">
                      <svg viewBox="0 -960 960 960">
                        <path d="M200-120v-640q0-33 23.5-56.5T280-840h240v80H280v518l200-86 200 86v-278h80v400L480-240 200-120Zm80-640h240-240Zm400 160v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
                      </svg>
                      <span className="hidden">เพิ่ม</span>
                    </button>
                  </div>
                  <div className="tooltip" data-tip="แก้ไข">
                    <button className="btn btn-icon btn-mix-alternate">
                      <svg viewBox="0 -960 960 960">
                        <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                      </svg>
                      <span className="hidden">แก้ไข</span>
                    </button>
                  </div>
                  <div className="tooltip" data-tip="ลบ">
                    <button className="btn btn-icon btn-mix-alternate-warning">
                      <svg viewBox="0 -960 960 960">
                        <path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" />
                      </svg>
                      <span className="hidden">ลบ</span>
                    </button>
                    <dialog className="modal modal-tooltip">
                      <div className="modal-content">
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
                    </dialog>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <mark className="w-fit block text-sm text-slate-400 text-center px-3 py-2 rounded-lg mx-auto bg-slate-100">{itemList.length} บทสวดมนต์</mark>
      </section>
    </>
  );

};

export default ItemList;