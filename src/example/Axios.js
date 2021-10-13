import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { AddresBook } from '../config';
import axios from 'axios';

function Axios() {
  const [data, setData] = useState({});
  // const [totalRows, setTotalRows] = useState(0);

  useEffect(() => {
    (async () => {
      let r = await axios.get(AddresBook);
      console.log(r);
      if (r.status === 200) {
        // setTotalRows(r.data.totalRows);
        setData(r.data);
      }
    })();
  }, []);

  return (
    <>
      <h1>Axios</h1>
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

export default Axios;
