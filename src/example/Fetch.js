import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { AddresBook } from '../config';
// 資料庫如果常用的部分可以用create view
function Fetch() {
  const [data, setData] = useState({});
  const [totalRows, setTotalRows] = useState(0);

  useEffect(() => {
    (async () => {
      const r = await fetch(AddresBook);
      const j = await r.json();
      if (j.totalRows) {
        setTotalRows(j.totalRows);
        setData(j);
      }
    })();
  }, []);
  console.log('data', data);
  console.log('totalRows', totalRows);
  return (
    <>
      <h1>Fetch</h1>
      <table>
        <tbody>
          {data.rows
            ? data.rows.map((v, i) => {
                return (
                  <tr key={i}>
                    <td>{v.sid}</td>
                    <td>{v.name}</td>
                    <td>{v.email}</td>
                    <td>{v.mobile}</td>
                    <td>{dayjs(v.birthday).format('YYYY-MM-DD')}</td>
                    <td>{v.address}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </>
  );
}

export default Fetch;
