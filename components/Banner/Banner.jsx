import styles from './Banner.module.css'

export function Banner() {
  return (
    <>
      <main className={styles.Banner}>
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="container">
            <div className="text-center flex flex-col justify-end px-6">
              <h1 className="text-2xl tracking-tight font-bold text-gray-900 md:text-4xl">
                <span className="block xl:inline text-white">
                  Pendidikan Berbasis Karakter, Kecerdasan Intelektual & Empati
                  Bersosial Berlandaskan Agama Islam yang Luhur
                </span>
              </h1>
              <div className="mt-5 sm:mt-8 sm:flex justify-center">
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-sm font-medium text-white bg-transparent hover:bg-white hover:text-black border-white border-solid"
                  >
                    LEBIH LANJUT >
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
