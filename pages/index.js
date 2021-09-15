import Head from 'next/head'
import Image from 'next/image'
import { Banner } from '@/components/Banner'
import { Navbar } from '@/components/Navbar'

import styles from './index.module.css'

import sectionOnePicture from '@/public/home-1.jpg'
import sectionTwoPicture from '@/public/home-2.jpg'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <Head>
        <title>MTs Muhammadiyah 4 Jetis Ponorogo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Banner />

      {/* Section: Apa Kata Mereka? */}
      <div className="max-w-7xl w-full mb-20">
        <div className="container mx-auto">
          <div className="py-20 px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-20">
              <div className="col-span-6">
                <h1 className="text-3xl font-black font-title mb-12">
                  Apa Kata Mereka?
                </h1>
                <p className="text-lg mb-8">
                  Disini sekolahnya seru. Guru-gurunya bisa diajak ngobrol dan
                  menyenangkan. Jika saya tidak paham dengan materi, saya bisa
                  menghubungi Bapak Ibu guru bahkan diluar jam sekolah. Sehat
                  selalu Bapak Ibu Guru!
                </p>
                <p className="text-xl font-bold mb-1">
                  Keenan Adinata Damien Herianto
                </p>
                <p className="text-md mb-8">
                  KETUA OSIS MTs Muhammadiyah 4 Jetis Ponorogo
                </p>
              </div>
              <div className="col-span-6 text-right">
                <Image src={sectionOnePicture} alt="Apa kata mereka?" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Mengapa Harus Sekolah di Sini? */}
      <div className={styles.HomeSectionWhy}>
        <div className="container mx-auto">
          <div className="py-20 px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-20">
              <div className="col-span-6 mb-8">
                <Image
                  src={sectionTwoPicture}
                  alt="Apa kata mereka?"
                  className="absolute left-0"
                />
              </div>
              <div className="col-span-6">
                <h1 className="text-3xl font-black font-title mb-12">
                  Mengapa Harus Sekolah di Sini?
                </h1>
                <p className="text-lg mb-8 pr-0 md:pr-8">
                  Bukan hanya sekedar nilai,{' '}
                  <span className="font-bold">
                    MTs Muhammadiyah 4 Jetis Ponorogo
                  </span>{' '}
                  fokus dalam membangun pribadi siswa dengan kecakapan yang
                  lebih luas.
                  <br />
                  <br />
                  Kami dekat dengan siswa agar belajar mereka senyaman di rumah.
                  Kami sering memperhati mereka, agar guru sama hangatnya dengan
                  ibu. Kami banyak bercerita, menanamkan nilai moral, membentuk
                  rasa tanggung jawab dan empati.
                  <br />
                  <br />
                  Kami bekali pula dengan agama, Al-Quran dan Al-Hadist. Kami
                  percaya, setiap anak berhak tumbuh dan mendampat pendidikan
                  terbaik dari manapun asal dan latar belakangnya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Agenda Terbaru */}
      <div id="agenda" className={styles.HomeSectionEvents}>
        <div className="container mx-auto">
          <div className="py-20 px-8">
            <div className="flex justify-center">
              <h1 className="text-3xl font-black font-title mb-12">
                Agenda Terbaru
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-20">
              <div className="col-span-4 mb-8">
                <div className="mb-4">
                  <Image src={sectionTwoPicture} alt="Apa kata mereka?" />
                </div>
                <h3 className="text-lg font-bold mb-1">Akreditasi</h3>
                <div className="text-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </div>
              </div>
              <div className="col-span-4 mb-8">
                <div className="mb-4">
                  <Image src={sectionTwoPicture} alt="Apa kata mereka?" />
                </div>
                <h3 className="text-lg font-bold mb-1">Akreditasi</h3>
                <div className="text-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </div>
              </div>
              <div className="col-span-4 mb-8">
                <div className="mb-4">
                  <Image src={sectionTwoPicture} alt="Apa kata mereka?" />
                </div>
                <h3 className="text-lg font-bold mb-1">Akreditasi</h3>
                <div className="text-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Kontak Kami */}
      <div id="contact" className={styles.HomeSectionContact}>
        <div className="container mx-auto">
          <div className="py-20 px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-20">
              <div className="col-span-6 mb-8">
                <Image
                  src={sectionTwoPicture}
                  alt="Apa kata mereka?"
                  className="absolute left-0"
                />
              </div>
              <div className="col-span-6">
                <h1 className="text-3xl font-black font-title mb-12">
                  Kontak Kami
                </h1>
                <h3 className="text-xl font-bold mb-8">
                  MTS MUHAMMADIYAH 4 JETIS PONOROGO
                </h3>
                <p className="text-lg mb-8">
                  Dukuh Tegalarum, Desa Kutu Kulon
                  <br />
                  Kec. Jetis, Kab. Ponorogo
                  <br />
                  Provinsi Jawa Timur
                  <br />
                  Kode Pos 63473
                  <br />
                  <br />
                  Tel: <strong>(0343) 1234-5678</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex items-center justify-center text-center w-full h-24 border-t font-bold bg-black text-white">
        © 2021 MTS MUHAMMADIYAH 4 JETIS PONOROGO
      </footer>
    </div>
  )
}
