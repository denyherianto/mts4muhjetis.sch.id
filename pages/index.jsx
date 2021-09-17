import axios from 'axios'
import Image from 'next/image'
import { Banner } from '@/components/Banner'
import { InfoCard } from '@/components/InfoCard'
import { Layout } from '@/components/Layout'

import styles from './index.module.css'

import sectionOnePicture from '@/public/home-1.jpg'
import sectionTwoPicture from '@/public/home-2.jpg'

export const getStaticProps = async () => {
  let articles = []
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/articles?_limit=3&_sort=created_at:DESC`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    )
    articles = response.data
  } catch (err) {}

  return {
    props: {
      articles,
    },
  }
}

export default function Home({ articles }) {
  return (
    <>
      <Layout>
        {/* Section: Banner */}
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
                    Di sini sekolahnya seru. Guru-gurunya bisa diajak ngobrol
                    dan menyenangkan. Jika saya tidak paham dengan materi, saya
                    bisa menghubungi Bapak Ibu guru bahkan diluar jam sekolah.
                    Sehat selalu Bapak Ibu Guru!
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

        {/* Section: Mengapa Harus Sekolah di sini? */}
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
                    Mengapa Harus Sekolah di sini?
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
                    Kami dekat dengan siswa agar belajar mereka senyaman di
                    rumah. Kami sering memperhati mereka, agar guru sama
                    hangatnya dengan ibu. Kami banyak bercerita, menanamkan
                    nilai moral, membentuk rasa tanggung jawab dan empati.
                    <br />
                    <br />
                    Kami bekali pula dengan agama, Al-Quran dan Al-Hadist. Kami
                    percaya, setiap anak berhak tumbuh dan mendapatkan pendidikan
                    terbaik dari manapun asal dan latar belakangnya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Agenda Terbaru */}
        {articles.length > 0 && (
          <>
            <div id="agenda" className={styles.HomeSectionEvents}>
              <div className="container mx-auto">
                <div className="py-20 px-8">
                  <div className="flex justify-center">
                    <h1 className="text-3xl font-black font-title mb-12">
                      Info Terbaru
                    </h1>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-20">
                    {Object.values(articles).map((article) => {
                      return <InfoCard data={article} />
                    })}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Section: Kontak Kami */}
        <div id="contact" className={styles.HomeSectionContact}>
          <div className="container mx-auto">
            <div className="py-20 px-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-20">
                <div className="col-span-6 mb-8">
                  <iframe
                    className={styles.HomeSectionContactMap}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.567181274949!2d111.47993611459935!3d-7.940188994280599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e790ad690f711ff%3A0x14b99b9d68ebfa08!2sMTS%20MUHAMMADIYAH%204%20JETIS!5e0!3m2!1sen!2sid!4v1631695597239!5m2!1sen!2sid"
                    width="100%"
                    height="450"
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="col-span-6">
                  <h1 className="text-3xl font-black font-title mb-12">
                    Kontak Kami
                  </h1>
                  <h3 className="text-xl font-bold mb-8">
                    MTS MUHAMMADIYAH 4 JETIS PONOROGO
                  </h3>
                  <p className="text-lg mb-8">
                    Jl S. Sukowati No. 180
                    <br />
                    Dukuh Tegalarum, Desa Kutu Kulon
                    <br />
                    Kec. Jetis, Kab. Ponorogo
                    <br />
                    Provinsi Jawa Timur
                    <br />
                    Kode Pos 63473
                    <br />
                    <br />
                    Tel: <strong>(0352) 311-289</strong>
                    <br />
                    Email: <strong><a href="mailto:mts3jetis@yahoo.co.id">mts3jetis@yahoo.co.id</a></strong>
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
