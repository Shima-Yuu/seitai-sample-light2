'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { motion } from 'framer-motion'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

// サンプルのお知らせデータ
const newsItems = [
  {
    id: '1',
    date: new Date('2023-12-15'),
    title: '年末年始の営業時間について',
    content: '12月29日から1月3日まで休業いたします。年始は1月4日から通常営業いたします。',
  },
  {
    id: '2',
    date: new Date('2023-11-20'),
    title: '新メニュー「骨盤矯正コース」開始のお知らせ',
    content:
      '11月より新メニュー「<span class="text-primary font-medium">骨盤矯正コース</span>」を開始いたしました。<br /><br />産後の方や姿勢改善にお悩みの方におすすめです。',
  },
  {
    id: '3',
    date: new Date('2023-10-05'),
    title: '10月の臨時休業について',
    content:
      '10月10日(火)は設備メンテナンスのため<span class="text-destructive font-medium">臨時休業</span>とさせていただきます。<br />ご迷惑をおかけして申し訳ございません。',
  },
  {
    id: '4',
    date: new Date('2023-09-15'),
    title: '秋の健康キャンペーン実施中',
    content:
      '9月15日から10月15日まで、初回限定で通常料金から<span class="text-primary font-bold">20%OFF</span>でご利用いただけます。<br /><br />この機会にぜひご来院ください。',
  },
  {
    id: '5',
    date: new Date('2023-08-01'),
    title: '夏季休業のお知らせ',
    content:
      '8月11日から8月15日まで夏季休業とさせていただきます。<br />ご迷惑をおかけして申し訳ございません。',
  },
  {
    id: '6',
    date: new Date('2023-07-10'),
    title: '新しい<span class="text-primary">スタッフ</span>が加わりました',
    content:
      '7月より新しい施術者が加わりました。<br /><br /><span class="font-medium">女性の施術者をご希望の方</span>は予約時にお申し付けください。',
  },
]

export function NewsSection() {
  const [showAll, setShowAll] = useState(false)
  const displayedNews = showAll ? newsItems : newsItems.slice(0, 3)

  return (
    <section className="container-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">お知らせ</h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="multiple" className="w-full">
            {displayedNews.map(news => (
              <AccordionItem key={news.id} value={news.id}>
                <AccordionTrigger className="text-left">
                  <div>
                    <span className="text-xs md:text-sm block">
                      {format(news.date, 'yyyy年MM月dd日', { locale: ja })}
                    </span>
                    <span
                      className="text-sm md:text-base font-medium"
                      dangerouslySetInnerHTML={{ __html: news.title }}
                    />
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    className="py-2 text-sm md:text-base"
                    dangerouslySetInnerHTML={{ __html: news.content }}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {newsItems.length > 3 && (
            <div className="mt-6 text-center">
              <Button
                className="hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                variant="outline"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? '閉じる' : 'もっと見る'}
              </Button>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  )
}
