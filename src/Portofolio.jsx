/**
 * ███╗   ██╗███████╗██████╗  █████╗    ███████╗████████╗██╗   ██╗██████╗ ██╗ ██████╗ 
 * ████╗  ██║██╔════╝██╔══██╗██╔══██╗   ██╔════╝╚══██╔══╝██║   ██║██╔══██╗██║██╔═══██╗
 * ██╔██╗ ██║█████╗  ██████╔╝███████║   ███████╗   ██║   ██║   ██║██║  ██║██║██║   ██║
 * ██║╚██╗██║██╔══╝  ██╔══██╗██╔══██║   ╚════██║   ██║   ██║   ██║██║  ██║██║██║   ██║
 * ██║ ╚████║███████╗██║  ██║██║  ██║██╗███████║   ██║   ╚██████╔╝██████╔╝██║╚██████╔╝
 * ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝ 
 * 
 *          THE BEST POWER FULL STUDIO ENGGINERING EVER! IN THIS WORLD
 * 
 * OWNER: M.KHAIRUNNASAL AL AROBI
 * NUMBER: +62 859-2908-8764
 * STATUS: STUDENT
 * SCHOOL: SMPN 1 GILI GENTING
 * 
 * SITE: https://neraflix.wuaze.com
 * 
 * ███╗    ██╗    ███╗     ██████╗ ██████╗ ██████╗ ██╗   ██╗██████╗ ██╗ ██████╗ ██╗  ██╗████████╗    ███╗   ██╗███████╗██████╗  █████╗ ███████╗██╗     ██╗██╗  ██╗    ██████╗  ██████╗ ██████╗  ██████╗     ██╗██████╗  ██████╗ ██████╗ ███████╗
 * ██╔╝    ██║    ╚██║    ██╔════╝██╔═══██╗██╔══██╗╚██╗ ██╔╝██╔══██╗██║██╔════╝ ██║  ██║╚══██╔══╝    ████╗  ██║██╔════╝██╔══██╗██╔══██╗██╔════╝██║     ██║╚██╗██╔╝    ╚════██╗██╔═████╗╚════██╗██╔════╝    ██╔╝╚════██╗██╔═████╗╚════██╗╚════██║
 * ██║     ██║     ██║    ██║     ██║   ██║██████╔╝ ╚████╔╝ ██████╔╝██║██║  ███╗███████║   ██║       ██╔██╗ ██║█████╗  ██████╔╝███████║█████╗  ██║     ██║ ╚███╔╝      █████╔╝██║██╔██║ █████╔╝███████╗   ██╔╝  █████╔╝██║██╔██║ █████╔╝    ██╔╝
 * ██║     ╚═╝     ██║    ██║     ██║   ██║██╔═══╝   ╚██╔╝  ██╔══██╗██║██║   ██║██╔══██║   ██║       ██║╚██╗██║██╔══╝  ██╔══██╗██╔══██║██╔══╝  ██║     ██║ ██╔██╗     ██╔═══╝ ████╔╝██║██╔═══╝ ██╔═══██╗ ██╔╝  ██╔═══╝ ████╔╝██║██╔═══╝    ██╔╝ 
 * ███╗    ██╗    ███║    ╚██████╗╚██████╔╝██║        ██║   ██║  ██║██║╚██████╔╝██║  ██║   ██║       ██║ ╚████║███████╗██║  ██║██║  ██║██║     ███████╗██║██╔╝ ██╗    ███████╗╚██████╔╝███████╗╚██████╔╝██╔╝   ███████╗╚██████╔╝███████╗   ██║  
 * ╚══╝    ╚═╝    ╚══╝     ╚═════╝ ╚═════╝ ╚═╝        ╚═╝   ╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝       ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚══════╝╚═╝╚═╝  ╚═╝    ╚══════╝ ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝    ╚══════╝ ╚═════╝ ╚══════╝   ╚═╝  
 */

import { useState } from "react"
import '../public/logic/style.css'

function Portofolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState('beranda')

  const menus = [
    { id: 'beranda', label: 'BERANDA', icon: 'fa-home' },
    { id: 'informasi', label: 'INFORMASI', icon: 'fa-info-circle' },
    { id: 'galeri', label: 'GALERI', icon: 'fa-images' },
    { id: 'kontak', label: 'KONTAK', icon: 'fa-phone' },
  ]

  return (
    <div className="beranda" id="beranda">
      <nav className="div-navigation">
        <div className="nav-left">
          <h1 className="judulNav">
            SMPN 1
            <span>GILI GENTING</span>
          </h1>
        </div>
        <div className="nav-center">
          <div className="nav-navigation">
            <ul className="desktop">
              {menus.map(menu => (
                <li key={menu.id} className="li-nav">
                  <a 
                    href={`#${menu.id}`}
                    className={`link-nav ${activeMenu === menu.id ? 'active' : ''}`}
                    onClick={() => setActiveMenu(menu.id)}
                  >
                    <i className={`fa ${menu.icon}`}></i>
                    {menu.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="nav-right">
          <a href="#ppdb" className="btn-ppdb">
            PPDB 2024
          </a>
          <button 
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`fa ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {menus.map(menu => (
          <a 
            key={menu.id}
            href={`#${menu.id}`}
            className={activeMenu === menu.id ? 'active' : ''}
            onClick={() => {
              setActiveMenu(menu.id)
              setMenuOpen(false)
            }}
          >
            <i className={`fa ${menu.icon}`}></i>
            {menu.label}
          </a>
        ))}
        <a href="#ppdb" className="btn-ppdb-mobile">
          PPDB 2024
        </a>
      </div>

      {/* CONTENT */}
      <div className="content">
        <div className="background-images">
          <div className="intro-content">
            <h2 className="textINTRO">SMPN 1</h2>
            <h1 className="textINTRO">GILI GENTING</h1>
            <p className="button-jelajah"><a href="#katapengantar">JELAJAHI SITUS!</a></p>
          </div>
        </div>
        <div className="floating-badge-container">
          <div className="badge-div">
            <div className="card-badge">
              <i className="fa fa-user-graduate icon"></i>
              <h3>140+</h3>
              <p>siswa aktif</p>
            </div>
            <div className="card-badge">
              <i className="fa fa-chalkboard-teacher icon"></i>
              <h3>18+</h3>
              <p>tenaga pendidik</p>
            </div>
            <div className="card-badge">
              <i className="fa fa-volleyball-ball icon"></i>
              <h3>12</h3>
              <p>extrakulikuler</p>
            </div>
            <div className="card-badge">
              <i className="fa fa-trophy icon"></i>
              <h3>A+</h3>
              <p>prestasi</p>
            </div>
            <div className="card-badge">
              <i className="fa fa-user icon"></i>
              <h3>--</h3>
              <p>angkatan</p>
            </div>
          </div>
        </div>
      </div>
      {/* KATA PENGANTAR */}
      <div className="kata-pengantar" id="katapengantar">
        <h1>DRS. MOH SELKET GANI</h1>
        <div className="kata-pak-gani-div">
          <img src="/images/kepsek.png" alt="kepsek smpn 1 gili genting" className="kepsek-images" />
          <div className="pg-kata">
            <p>
              <strong>Drs. Moh. Selket Gani</strong><br /><br />

              Assalamu'alaikum warahmatullahi wabarakatuh,<br />
              Salam sejahtera untuk kita semua.<br /><br />

              Puji syukur kita panjatkan ke hadirat Allah SWT atas limpahan rahmat dan karunia-Nya, sehingga SMPN 1 Giligenting dapat terus berkontribusi dalam dunia pendidikan, khususnya di wilayah kepulauan Kabupaten Sumenep.<br /><br />

              Selamat datang di situs resmi SMPN 1 Giligenting. Kehadiran website ini merupakan salah satu langkah kami untuk mengikuti perkembangan teknologi informasi dan komunikasi sebagai bagian dari upaya modernisasi pelayanan pendidikan. Dengan website ini, kami berharap dapat memberikan akses yang lebih luas kepada siswa, orang tua, dan masyarakat umum mengenai informasi seputar program, kegiatan, dan prestasi sekolah.<br /><br />

              Sebagai sekolah yang berada di wilayah kepulauan, SMPN 1 Giligenting berkomitmen untuk tetap memberikan pendidikan berkualitas meskipun menghadapi tantangan geografis. Kami percaya bahwa setiap siswa memiliki potensi besar yang dapat dikembangkan melalui pendidikan yang baik. Dengan didukung oleh tenaga pendidik yang profesional dan berbagai program unggulan, kami berupaya mencetak generasi pelajar yang berprestasi, berkarakter, dan mampu bersaing di era global.<br /><br />

              Melalui website ini, kami juga ingin menjalin komunikasi yang lebih erat dengan seluruh elemen masyarakat. Kami mengundang seluruh pihak untuk bersama-sama mendukung kemajuan SMPN 1 Giligenting demi terwujudnya visi kami, yaitu menciptakan generasi yang cerdas, berakhlak mulia, dan berjiwa Pancasila.<br /><br />

              Terima kasih atas kunjungan Anda ke situs ini. Kami berharap website ini dapat menjadi sarana yang bermanfaat bagi kita semua.<br /><br />

              Wassalamu'alaikum warahmatullahi wabarakatuh,<br /><br />

              <strong>Kepala Sekolah<br />
              SMPN 1 Giligenting</strong><br /><br />

              [Drs. Moh. Selket Gani]
            </p>
          </div>
        </div>
      </div>
      {/* INFORMASI UTAMA */}
      <div className="informasi-utama" id="informasi">
        <div className="container-info">
          <h1 className="info-judul">INFORMASI UTAMA</h1>
          <div className="info-card">
            <img src="/images/paper-blank.png" alt="not found?" style={{ width: '50% '}} />
            <div className="in-informasi-div">
              <h1>Refleksi<br></br>Obser Kelas</h1>
              <h4>Tujuan utama dari refleksi observasi kelas adalah untuk menjembatani celah antara perencanaan pembelajaran dan realita di kelas. Melalui refleksi ini, guru dapat mengidentifikasi pola instruksional yang efektif serta mengenali hambatan yang muncul saat interaksi dengan siswa. Proses ini bertujuan untuk meningkatkan kualitas pengajaran secara berkelanjutan (continuous improvement) demi menciptakan lingkungan belajar yang lebih berpusat pada murid."</h4>
                <p className="info-url-btn"><i className="fa fa-chain"></i><a className="info-url-a" href="type:blank">abcd</a></p>
            </div>
          </div>
          <div className="info-card">
            <img src="/images/grafitikasi-smbp.png" alt="not found?" style={{ width: '50% '}} />
            <div className="in-informasi-div">
              <h1>STOP GRATIFIKASI SPMB 2025/2026</h1>
              <h4>stop GRATIFIKASI
                "Penerimaan Siswa Baru (PPDB/SPMB) di sekolah kami menjunjung tinggi prinsip Transparansi, Akuntabel, dan Objektif. Kami berkomitmen untuk menyelenggarakan proses seleksi yang bersih tanpa praktik gratifikasi.
                Kami menghimbau kepada seluruh orang tua calon siswa untuk tidak memberikan uang, barang, atau fasilitas apa pun kepada panitia maupun pihak sekolah demi meloloskan si\
                wa. Prestasi dan kriteria yang telah ditetapkan adalah satu-satunya tolok ukur kelulusan. Mari kita ajarkan anak-anak kita nilai kejujuran sejak dini dengan tidak mencoreng proses pendidikan mereka melalui jalan pintas."
              </h4>
                <p className="info-url-btn"><i className="fa fa-chain"></i><a className="info-url-a" href="type:blank">abcd</a></p>
            </div>
          </div>
          <div className="info-card">
            <div className="map-container">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31666.8321842103!2d113.9192028!3d-7.2003882!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7598515e2fe53%3A0xb2f30f3a276f7e48!2sGili%20Genteng!5e0!3m2!1sid!2sid!4v1770645061514!5m2!1sid!2sid"
                width="100%"
                height="200%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="in-informasi-div">
              <h1>Pulau Giligenting</h1>
              <h4>
                Gili Genteng (Madura: Ghili Ghenténg; Péghu: ڬْيلي ڬْٓنتَيڠ) adalah sebuah pulau yang terletak di sebelah tenggara Pulau Madura. <br /><br />
                Secara administratif, pulau ini termasuk wilayah Kecamatan Giligenting, Sumenep, Jawa Timur. Kecamatan Giligenting terdiri dari dua pulau, yakni Pulau Gili Raja dan Pulau Gili Genteng sebagai pusat kecamatannya. <br /><br />
                Hampir semua penduduk pulau ini adalah suku Madura dan sebagian besar masyarakatnya hijrah ke Cirebon, Jakarta, Serang, dan Banten; mereka rata-rata membuka toko sembako. <br /><br />
                Di Cirebon sendiri saat ini hampir mencapai 500 toko milik orang yang berasal dari Kecamatan Giligenting, Sumenep, dan sempat mendirikan Organisasi IKAMA (Ikatan Keluarga Madura) yang bertujuan menertibkan orang Gili Genteng yang ada di Kota Udang tersebut. <br /><br />
                Kecamatan Gili Genting resmi terbentuk pada tahun 1982 berdasarkan Peraturan Pemerintah Republik Indonesia (PP) Nomor 7 Tahun 1982. <br /><br />
                Kecamatan Gili Genting terdiri dari 8 desa, yakni Desa Aenganyar, Desa Gedugan, Desa Bringsang, Desa Galis (Pulau Gili Genteng), serta Desa Banbaru, Desa Ban Maleng, Desa Lombang, dan Desa Jate (Pulau Gili Raja).
              </h4>
                <p className="info-url-btn"><i className="fa fa-chain"></i><a className="info-url-a" href="type:blank">abcd</a></p>
            </div>
          </div>
        </div>
      </div>
      {/* GALERY */}
      <div className="galery" id="galeri">
        <h1>GALERI SEKOLAH</h1>
        <div className="galery-container">
          <div className="card-galery">
            <div className="video-wrapper">
              <iframe width="90%" height="30%" src="https://www.youtube.com/embed/hop2CD7g_Ls?si=ZRv62PDhrBrxnGZy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <h5>Desiminasi OJT 1 Kepala<br></br>Sekolah SMPN 1 Giligenting 2025</h5>
          </div>
          <div className="card-galery">
            <div className="video-wrapper">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/48IZSpvpp44?si=S4vz3MeNqEjzO4wU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <h5>OBSERVASI KELAS PJOK (Verri Ariwahyuni.S.Pd) 2025</h5>
          </div>
          <div className="card-galery">
            <div className="video-wrapper">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/iQ2IJTL6vOQ?si=ephxPn_rkIfqbS0G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <h5>OBSERVASI KELAS PKn  (Sukianto.S.Sos) 2025</h5>
          </div>
          <div className="card-galery">
            <div className="video-wrapper">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/zJvKUUoMs6g?si=AcieeIpjZAWLNikJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <h5>Kegiatan SPMB 2025</h5>
          </div>
          <div className="card-galery">
            <div className="video-wrapper">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/dGLJg-WKyTI?si=LeaV4gsG3LOW3sIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <h5>7 Kebiasaan Anak Indonesia Hebat SMPN 1 Giligenting</h5>
          </div>
          <div className="card-galery">
            <div className="video-wrapper">
              <iframe width="560" height="315" src="https://drive.google.com/file/d/1ZMGc2KiaDqX4o9L5GpEsy6N7LOVsSuhS/view?usp=sharing" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <h5>7 Kebiasaan Anak Indonesia Hebat SMPN 1 Giligenting</h5>
          </div>
          <div className="card-galery">
            <div className="video-wrapper">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/IDDPkN8zAgE?si=NDJhUw4RUX-rCL9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <h5>DRUMBAND SPENSAGI</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portofolio;