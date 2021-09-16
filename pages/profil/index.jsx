import Image from 'next/image'
import { Layout } from '@/components/Layout'

import styles from './index.module.css'

import sectionProfilePicture from '@/public/home-1.jpg'
import sectionTwoPicture from '@/public/home-2.jpg'

export default function Profile() {
  return (
    <>
      <Layout>
        {/* Section: Tentang Sekolah */}
        <div className={styles.ProfileSectionAbout}>
          <div className="container mx-auto">
            <div className="py-20 px-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-20">
                <div className="col-span-7 text-right">
                  <iframe
                    width="100%"
                    height="400px"
                    src="https://www.youtube-nocookie.com/embed/tXL4ZRaQkFg?autoplay=1"
                    title="Profil MTs Muhammadiyah 4 Jetis"
                    frameborder="0"
                  ></iframe>
                </div>
                <div className="col-span-5">
                  <h1 className="text-3xl font-black font-title mb-12">
                    Tentang Sekolah
                  </h1>
                  <p className="text-lg">
                    Madrasah Tsanawiyah Muhammadiyah 4 Jetis Ponorogo didirikan
                    pada tanggal 01 Juli 1964 dengan izin operasional No.:
                    L.M/3/23/C/1978, yang bernaung dibawah Majelis Pendidikan
                    Dasar dan Menengah Daerah
                    <br /><br />
                    Madrasah Tsanawiyah Muhammadiyah 4 Jetis
                    Ponorogo berupaya melestarikan metode lama yang
                    kami anggap baik dan mengambil baru yang lebih baik. Metode ini
                    diharapkan sesuai dengan arah kebijakan pemerintah mengenai
                    kurikulum pembelajaran tahun 2013 yang telah diberlakukan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Visi & Misi */}
        <div className={styles.ProfileSectionVision}>
          <div className="container mx-auto">
            <div className="py-20 px-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-28">
                <div className="col-span-6">
                  <h1 className="text-3xl font-black font-title mb-12">
                    Tujuan Pendidikan Menengah
                  </h1>
                  <p className="text-lg mb-8">
                    Standar Kompetensi Lulusan pada satuan pendidikan menengah
                    umum bertujuan untuk meningkatkan kecerdasan, pengetahuan,
                    kepribadian, akhlak mulia, serta ketrampilan untuk hidup
                    mandiri dan mengikuti pendidikan lebih lanjut.
                  </p>
                  <h1 className="text-3xl font-black font-title mb-12">Visi</h1>
                  <p className="text-lg mb-8">
                    Terbentuknya pelajar Muslim yang berakhlak mulia, percaya
                    diri, cakap dalam IMTAQ dan IPTEK.
                  </p>
                </div>
                <div className="col-span-6">
                  <h1 className="text-3xl font-black font-title mb-12">Misi</h1>
                  <p className="text-lg mb-8">
                    <ol className="list-decimal list-outside pl-4">
                      <li>
                        Memberikan dasar-dasar nilai agama berupa kesempurnaan
                        budi pekerti dan akal serta terpeliharanya ketaqwaan dan
                        kesalehan hidup.
                      </li>
                      <li>
                        Pembiasaan do'a, kegiatan sehari-hari dalam ibadah wajib
                        dan sunnah.
                      </li>
                      <li>
                        Menumbuhkan penghayatan dan pengamalan terhadap ajaran
                        Islam.
                      </li>
                      <li>
                        Melaksanakan pembelajaran dan bimbingan secara efektif.
                      </li>
                      <li>
                        Menyiapkan anak didik yang mampu menghadapi situasi
                        global.
                      </li>
                      <li>
                        Terciptanya hubungan yang harmonis dan demokratis antar
                        warga sekolah dan lingkungan sekolah.
                      </li>
                    </ol>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
