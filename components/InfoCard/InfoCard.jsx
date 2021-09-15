import Image from 'next/image'
import sectionTwoPicture from '@/public/home-2.jpg'

export const InfoCard = ({ data }) => {
  return (
    <>
      <div className="col-span-4 mb-8">
        <div className="mb-4">
          <img
            src={`http://localhost:1337${data.image.url}`}
            alt="article image"
            style={{ height: '250px', objectFit: 'cover' }}
          />
        </div>
        <h3 className="text-lg font-bold mb-1">{data.title}</h3>
        <div className="text-md">{data.description}</div>
      </div>
    </>
  )
}
