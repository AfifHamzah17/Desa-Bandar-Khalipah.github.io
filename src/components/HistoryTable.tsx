import React from 'react';
import { useTable, Column } from 'react-table';

interface HistoryData {
  year: string;
  role: string;
  name: string;
  description: string;
}

const HistoryTable: React.FC = () => {
  const data = React.useMemo<HistoryData[]>(
    () => [
      { year: '1948-1950', role: 'Kepala Kampung', name: 'H. BAHARI NUR', description: 'Pilihan Masyarakat' },
      { year: '1950-1955', role: 'Kepala Kampung', name: 'OK. M. IDRIS', description: 'Pilihan Masyarakat' },
      { year: '1955-1961', role: 'Kepala Desa', name: 'M. SALEH IBRAHIM', description: 'Pilihan Masyarakat' },
      { year: '1961-1966', role: 'Kepala Desa', name: 'AMAT SU’EB', description: 'Pilihan Masyarakat' },
      { year: '1966-1971', role: 'Kepala Desa', name: 'KASAN SIPON', description: 'Pilihan Masyarakat' },
      { year: '1972-1978', role: 'Kepala Desa', name: 'USMAN SIDDIQ', description: 'Pilihan Masyarakat' },
      { year: '1978-1983', role: 'Kepala Desa', name: 'M I N G A N', description: 'Pilihan Masyarakat' },
      { year: '1983-1984', role: 'Kepala Desa', name: 'M .   A M I N', description: 'Pjs' },
      { year: '1984-1992', role: 'Kepala Desa', name: 'H A S A N', description: 'Pjs/Pilihan Masyarakat' },
      { year: '1994-2002', role: 'Kepala Desa', name: 'SANIMIN SONY SERO', description: 'Pilihan Masyarakat' },
      { year: '2002-2004', role: 'Kepala Desa', name: 'SUPARDI, S.Pd', description: 'Pilihan Masyarakat' },
      { year: '2004-2009', role: 'Kepala Desa', name: 'LISMA, A.Ks', description: 'Pelaksana Tugas' },
      { year: '2009-2015', role: 'Kepala Desa', name: 'M I S N O', description: 'Pilihan Masyarakat' },
      { year: '2016-Sekarang', role: 'Kepala Desa', name: 'SUPARYO, SH', description: 'Pilihan Masyarakat' },
    ],
    []
  );

  const columns = React.useMemo<Column<HistoryData>[]>(
    () => [
      { Header: 'Tahun', accessor: 'year' },
      { Header: 'Dipimpin', accessor: 'role' },
      { Header: 'Nama', accessor: 'name' },
      { Header: 'Keterangan', accessor: 'description' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue', width: '100%', margin: '20px 0' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: 'solid 3px red',
                  background: 'aliceblue',
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td
                  {...cell.getCellProps()}
                  style={{
                    padding: '10px',
                    border: 'solid 1px gray',
                    background: 'papayawhip',
                  }}
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default HistoryTable;
