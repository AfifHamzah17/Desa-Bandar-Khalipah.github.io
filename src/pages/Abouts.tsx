import React from 'react';
import '../Abouts.css'; // Ensure you have the relevant CSS styles

const Abouts: React.FC = () => {
  return (
    <div className="about-page">
      <h1>Gambaran Umum Desa Bandar Khalipah</h1>
      
      <section>
        <h2>1. Orbitasi</h2>
        <ul>
          <li>Jarak tempuh desa ke kecamatan: + 6,6 Km</li>
          <li>Jarak tempuh ke kabupaten: + 21 Km</li>
          <li>Jarak tempuh ke propinsi: + 14 Km</li>
        </ul>
      </section>
      
      <section>
        <h2>2. Letak Geografis</h2>
        <ul>
          <li>Desa Bandar Khalipah secara geografis terletak pada ketinggian + 0 - 25 m di atas permukaan laut.</li>
          <li>Curah hujan rata-rata + 0,5 m/detik</li>
          <li>Suhu udara rata-rata + 25 °C s/d 32 °C</li>
        </ul>
      </section>
      
      <section>
        <h2>3. Batas Wilayah</h2>
        <ul>
          <li>Sebelah UTARA berbatas dengan Desa Bandar Setia/Desa Laut Dendang</li>
          <li>Sebelah TIMUR berbatas dengan Desa Bandar Klippa</li>
          <li>Sebelah SELATAN berbatas dengan Desa Bandar Klippa/Desa Tembung</li>
          <li>Sebelah BARAT berbatas dengan Desa Medan Estate/Kelurahan Tembung</li>
        </ul>
      </section>
      
      <section>
        <h2>4. Luas Wilayah</h2>
        <p>Bandar Khalipah memiliki luas wilayah + 443 Ha dengan permukaan wilayah sebagai berikut:</p>
        <table className="responsive-table">
          <thead>
            <tr>
              <th>Kategori</th>
              <th>Luas (Ha)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pemukiman / Perkarangan</td>
              <td>326,58</td>
            </tr>
            <tr>
              <td>Perkantoran</td>
              <td>1,75</td>
            </tr>
            <tr>
              <td>Sekolah</td>
              <td>3,95</td>
            </tr>
            <tr>
              <td>Pabrik</td>
              <td>21,25</td>
            </tr>
            <tr>
              <td>Mesjid / Musholla</td>
              <td>2,77</td>
            </tr>
            <tr>
              <td>Gereja</td>
              <td>0,02</td>
            </tr>
            <tr>
              <td>Pemakaman/Perkuburan Muslim</td>
              <td>2,75</td>
            </tr>
            <tr>
              <td>Real Estate</td>
              <td>12,55</td>
            </tr>
            <tr>
              <td>KPR Property</td>
              <td>20,50</td>
            </tr>
            <tr>
              <td>Jalan</td>
              <td>76,05</td>
            </tr>
            <tr>
              <td>Lain-lain</td>
              <td>14,85</td>
            </tr>
          </tbody>
        </table>
      </section>
      
      <section>
        <h2>5. Sarana dan Prasarana</h2>
        <table className="responsive-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Prasarana</th>
              <th>Jumlah</th>
              <th>Satuan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Panjang Jalan Aspal</td>
              <td>27.800</td>
              <td>Meter</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jumlah jembatan beton</td>
              <td>29</td>
              <td>Unit</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Warung kelontong</td>
              <td>1.921</td>
              <td>Unit</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Usaha kelompok simpan pinjam</td>
              <td>3</td>
              <td>Unit</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Jumlah Pos Kamling</td>
              <td>21</td>
              <td>Unit</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Jumlah sepeda motor</td>
              <td>18.273</td>
              <td>Unit</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Jumlah mobil</td>
              <td>1.575</td>
              <td>Unit</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Jumlah sumur galian</td>
              <td>10.239</td>
              <td>Unit</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Jumlah Mesjid</td>
              <td>34</td>
              <td>Buah</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Jumlah Musholla/Langgar</td>
              <td>10</td>
              <td>Buah</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Jumlah Gereja</td>
              <td>2</td>
              <td>Buah</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Lapangan sepak bola</td>
              <td>1</td>
              <td>Unit</td>
            </tr>
            <tr>
              <td>13</td>
              <td>Klinik / Balai Pengobatan</td>
              <td>32</td>
              <td>Unit</td>
            </tr>
            <tr>
              <td>14</td>
              <td>Puskesmas</td>
              <td>1</td>
              <td>Unit</td>
            </tr>
            <tr>
              <td>15</td>
              <td>Posyandu</td>
              <td>17</td>
              <td>Unit</td>
            </tr>
          </tbody>
        </table>
      </section>
      
      <section>
        <h2>6. Jumlah Penduduk</h2>
        <p>Penduduk Desa Bandar Khalipah pada tahun 2024 berjumlah + 53.143 jiwa yang terdiri dari laki-laki = 24.572 jiwa dan perempuan = 28.571 jiwa dengan jumlah Kepala Keluarga = 12.805 KK, dengan rincian sebagai berikut:</p>
        
        <h3>1) Jumlah penduduk berdasarkan etnis/suku:</h3>
        <table className="responsive-table">
          <thead>
            <tr>
              <th>Etnis</th>
              <th>Tahun 2023</th>
              <th>Tahun 2024</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jawa</td>
              <td>31.357</td>
              <td>32.168</td>
            </tr>
            <tr>
              <td>Melayu</td>
              <td>3.359</td>
              <td>3.909</td>
            </tr>
            <tr>
              <td>Batak (Toba, Mandailing, Karo, Nias)</td>
              <td>9.296</td>
              <td>10.092</td>
            </tr>
            <tr>
              <td>Aceh</td>
              <td>1.814</td>
              <td>1.829</td>
            </tr>
            <tr>
              <td>Minang</td>
              <td>2.245</td>
              <td>2.701</td>
            </tr>
            <tr>
              <td>Banjar</td>
              <td>1.316</td>
              <td>1.066</td>
            </tr>
            <tr>
              <td>Lain-lain</td>
              <td>2.400</td>
              <td>1.478</td>
            </tr>
            <tr>
              <td>JUMLAH</td>
              <td>51.143</td>
              <td>53.143</td>
            </tr>
          </tbody>
        </table>
        
        <h3>2) Jumlah penduduk menurut Agama:</h3>
        <table className="responsive-table">
          <thead>
            <tr>
              <th>Agama</th>
              <th>Tahun 2023</th>
              <th>Tahun 2024</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Islam</td>
              <td>48.010</td>
              <td>48.560</td>
            </tr>
            <tr>
              <td>Kristen</td>
              <td>3.083</td>
              <td>4.383</td>
            </tr>
            <tr>
              <td>Budha</td>
              <td>111</td>
              <td>211</td>
            </tr>
            <tr>
              <td>Hindu</td>
              <td>39</td>
              <td>89</td>
            </tr>
            <tr>
              <td>JUMLAH</td>
              <td>51.143</td>
              <td>53.143</td>
            </tr>
          </tbody>
        </table>
        
        <h3>3) Jumlah penduduk berdasarkan Mata Pencaharian:</h3>
        <table className="responsive-table">
          <thead>
            <tr>
              <th>Jenis Mata Pencaharian</th>
              <th>Jumlah</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Petani</td>
              <td>19</td>
            </tr>
            <tr>
              <td>Karyawan</td>
              <td>6.714</td>
            </tr>
            <tr>
              <td>Buruh & Jasa lainnya</td>
              <td>9.147</td>
            </tr>
            <tr>
              <td>PNS</td>
              <td>2.856</td>
            </tr>
            <tr>
              <td>Pedagang/Wiraswasta</td>
              <td>7.345</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Abouts;
