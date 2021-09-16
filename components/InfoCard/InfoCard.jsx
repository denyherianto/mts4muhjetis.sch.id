import Image from 'next/image'
import Link from 'next/link'
import sectionTwoPicture from '@/public/home-2.jpg'

export const InfoCard = ({ data }) => {
  const getSubtring = (content) => {
    return `${content.replace(/(<([^>]+)>)/gi, '').slice(0, 50)}...`
  }

  return (
    <>
      <Link href={`/artikel/${data.slug}`} passHref>
        <a className="col-span-4">
          <div className="mb-4">
            <img
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${data.image.url}`}
              alt="article image"
              style={{ height: '250px', objectFit: 'cover' }}
            />
          </div>
          <h3 className="text-lg font-bold mb-1">{data.title}</h3>
          <div className="text-md">{getSubtring(data.description)}</div>
        </a>
      </Link>
    </>
  )
}
