import React from 'react';
import SliderComponent from '../components/SliderComponents';
import MapComponent from '../components/MapComponents';
import '../App.css';
import { Link } from 'react-router-dom';

const Homes: React.FC = () => {
  return (
    <div className="landing-page">
      <SliderComponent />
      <div className="content">
        <div className="container">
          <div className="info">
            <h1>Desa Bandar Khalipah</h1>
            <p>
              Desa Bandar Khalipah Kecamatan Percut Sei Tuan yang dalam catatan sejarah
              didirikan oleh Tokoh Melayu Deli yaitu DATOK LAILA ASRY dulunya bernama Kampung
              Bandar Chalifah yang merupakan kampung tempat berkumpulnya para pemimpin perjuangan
              di Sumatera. Dan pada tahun 1954 oleh Pemerintah Republik Indonesia diberi
              penghargaan sebagai Kampoeng Pahlawan melalui Kementerian Pertahanan Stap Angkatan
              Darat dengan mengeluarkan Surat Penghargaan No. 5/Kps/A.Djen/Peng/53 tanggal 25
              Oktober 1954, sehingga sampai saat ini Makam Pahlawan yang berada di
              Dusun-III/Kamboja Desa Bandar Khalipah Kecamatan Percut Sei Tuan sebagai tempat
              Upacara Renungan Suci karena di makam tersebut masih ada 3 (tiga) makam pahlawan lagi
              yang telah gugur sebagai kesuma bangsa dan sejak tahun 1948 sampai dengan tahun 1961
              Desa Bandar Khalipah dipimpin oleh seorang Kepala Kampung.
            </p>
            <Link to="/sejarah-desa"><button>Read More</button></Link>
          </div>
          <div className="map">
            <MapComponent /> {/* Use the MapComponent here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homes;
