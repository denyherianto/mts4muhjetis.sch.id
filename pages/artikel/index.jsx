import axios from 'axios'
import { InfoCard } from '@/components/InfoCard'
import { Layout } from '@/components/Layout'

import styles from './index.module.css'

export const getStaticProps = async () => {
  let articles = []
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/articles?_sort=created_at:DESC`,
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

export default function Article({ articles }) {
  return (
    <>
      <Layout>
        {/* Section: Info Terbaru */}
        {articles.length > 0 && (
          <>
            <div className={styles.ArticleSectionEvents}>
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
      </Layout>
    </>
  )
}
