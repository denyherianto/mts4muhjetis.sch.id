import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import RehypeRaw from 'rehype-raw'
import RehypeSanitize from 'rehype-sanitize'
import { InfoCard } from '@/components/InfoCard'
import { Layout } from '@/components/Layout'

import styles from './index.module.css'

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  let article = null
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/articles?slug=${params.slug}`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    )
    article = response.data[0]
  } catch (err) {}

  return {
    props: {
      article,
    },
  }
}

export default function ArticleDetail({ article }) {
  return (
    <>
      <Layout>
        {/* Section: Info Terbaru */}
        {article && (
          <>
            <img
              src={`http://localhost:1337${article.image.url}`}
              alt="article image"
              className={styles.ArticleDetailSectionEventsImage}
            />
            <div className={styles.ArticleDetailSectionEvents}>
              <div className="container mx-auto">
                <div className="py-20 px-8">
                  <div className="flex justify-center">
                    <h1 className="text-3xl font-black font-title mb-2">
                      {article.title}
                    </h1>
                  </div>
                  <div className="flex justify-center">
                    <h1 className="text-lg text-gray-500 font-sans mb-12">
                      {article.created_at}
                    </h1>
                  </div>
                  <div className="h-full max-w-3xl mx-auto">
                    <ReactMarkdown rehypePlugins={[RehypeRaw, RehypeSanitize]}>{article.content}</ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Layout>
    </>
  )
}
