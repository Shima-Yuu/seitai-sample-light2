'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const symptoms = [
  {
    id: 'neck-shoulder',
    title: '首・肩のこり',
    description:
      '長時間のデスクワークやスマートフォンの使用による首・肩のコリや痛みを改善します。独自の施術で血行を促進し、凝り固まった筋肉をほぐすことで、首や肩の可動域を広げ、痛みの軽減を目指します。',
    link: '#treatment',
  },
  {
    id: 'lower-back',
    title: '腰痛',
    description:
      '慢性的な腰痛から急性の腰痛まで、お客様の症状に合わせた施術を行います。正しい姿勢の指導と、腰周りの筋肉や関節の調整により、根本的な改善を目指します。日常生活での予防法もアドバイスいたします。',
    link: '#treatment',
  },
  {
    id: 'headache',
    title: 'スポーツ外傷',
    description:
      'スポーツ活動による怪我や痛みに対して、早期回復と再発防止を目指した施術を行います。アスリートの方から趣味のスポーツまで、それぞれの活動レベルに合わせた最適なケアをご提案します。',
    link: '#treatment',
  },
  {
    id: 'stiff-body',
    title: '交通事故でお悩みの方',
    description:
      '交通事故による首や腰の痛み、むち打ちなどの症状に対して、丁寧な施術で回復をサポートします。保険適用の手続きもお手伝いし、事故後の身体の不調を総合的にケアいたします。',
    link: '#treatment',
  },
  {
    id: 'posture',
    title: '膝の痛み',
    description:
      '加齢や運動、長時間の歩行による膝の痛みに対して、専門的なアプローチで改善を図ります。膝周りの筋肉バランスを整え、関節への負担を軽減する施術で、日常生活の動作をサポート。適切なストレッチ法や生活上の注意点もアドバイスいたします。',
    link: '#treatment',
  },
  {
    id: 'numbness',
    title: '寝違え',
    description:
      '寝違えは、急な首の動きや不自然な姿勢が原因で首の筋肉や靭帯が損傷し、痛みやこりを引き起こす一般的な症状です。特に寝ている間や長時間同じ姿勢でいる際に発生しやすく、早期の対処が必要です。当院では、専門的な治療で症状の改善を目指します。',
    link: '#treatment',
  },
]

export function SymptomsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="symptoms" className="container-section bg-secondary/60">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">症状別のお悩み</h2>
        <p className="text-center text-sm md:text-lg mb-8">
          このような痛みやお悩みを抱えていませんか？
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {symptoms.map(symptom => (
            <motion.div key={symptom.id} variants={item}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg md:text-2xl">{symptom.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm md:text-base mb-4">
                    {symptom.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
            <Link href="#treatment">施術メニューを見る</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
