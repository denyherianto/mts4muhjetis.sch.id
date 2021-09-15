import Masonry from "react-responsive-masonry"

import { Layout } from '@/components/Layout'

const images = Array(16)
  .fill(0)
  .map((_, i) => `/gallery/gallery (${i + 1}).jpg`)

export default function Gallery() {
  return (
    <>
      <Layout>
        {/* Section: Galeri */}
        <div className="max-w-7xl w-full my-10">
          <div className="container mx-auto">
            <div className="py-20 px-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-20">
                <div className="col-span-12">
                  <h1 className="text-3xl font-black font-title mb-12">
                    Galeri
                  </h1>
                  <Masonry columnsCount={3} gutter={12}>
                    {images.map((image) => (
                      <img src={image} />
                    ))}
                  </Masonry>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
