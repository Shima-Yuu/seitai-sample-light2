'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'

const faqs = [
  {
    id: 'faq1',
    question: '初めての施術でも大丈夫ですか？',
    answer:
      'もちろん大丈夫です。初めての方には丁寧なカウンセリングを行い、ご不安やご質問にお答えした上で施術を進めます。また、施術の強さは随時調整可能ですので、お気軽にお申し付けください。',
  },
  {
    id: 'faq2',
    question: 'どのくらいの頻度で通えばいいですか？',
    answer:
      'お身体の状態や目的によって異なりますが、一般的には最初は週1〜2回、症状が改善してきたら2週間に1回、その後は月1回のメンテナンスがおすすめです。最適な通院計画はカウンセリング時にご提案いたします。',
  },
  {
    id: 'faq3',
    question: '服装は何を着ればいいですか？',
    answer:
      'リラックスできる動きやすい服装でお越しください。ジーンズなどの固い素材は施術がしづらい場合がありますので、可能であればジャージやスウェットなどの柔らかい素材の服装をおすすめします。必要に応じて施術着もご用意しております。',
  },
  {
    id: 'faq4',
    question: '施術は痛いですか？',
    answer:
      '当院では痛みを伴わない施術を心がけていますが、症状や施術箇所によっては多少の痛みを感じる場合があります。痛みを感じた場合はすぐにお申し出ください。強さを調整いたします。',
  },
  {
    id: 'faq5',
    question: '予約のキャンセルはできますか？',
    answer:
      '予約のキャンセルは前日までにご連絡いただければ料金はかかりません。当日のキャンセルは施術料金の50%をキャンセル料としていただいております。ただし、体調不良の場合はご相談ください。',
  },
  {
    id: 'faq6',
    question: '保険は使えますか？',
    answer:
      '当院の施術は自費診療となりますので、健康保険は適用されません。ただし、交通事故によるケガの場合は自賠責保険が適用される場合がありますので、詳しくはお問い合わせください。',
  },
  {
    id: 'faq7',
    question: '子供も施術を受けられますか？',
    answer:
      'はい、お子様も施術を受けることができます。成長期特有の姿勢の悪さや運動による疲労にも対応しています。お子様の年齢や体格に合わせて優しく施術いたしますのでご安心ください。',
  },
  {
    id: 'faq8',
    question: '妊娠中でも施術を受けられますか？',
    answer:
      '妊娠中の方も安心して施術を受けていただけます。妊娠中特有の腰痛や肩こりに対応した専用のプログラムをご用意しています。ただし、妊娠初期や体調がすぐれない場合は医師にご相談の上、ご来院ください。',
  },
  {
    id: 'faq9',
    question: '効果はどのくらいで実感できますか？',
    answer:
      '個人差はありますが、多くの方が初回の施術後から何らかの変化を感じられます。慢性的な症状の場合は、3〜5回程度の施術を継続することで徐々に改善していくケースが多いです。定期的なケアで効果を持続させることをおすすめします。',
  },
  {
    id: 'faq10',
    question: '施術後に気をつけることはありますか？',
    answer:
      '施術後は十分な水分補給をしていただき、激しい運動や飲酒は控えめにしていただくことをおすすめします。また、施術効果を高めるために、お伝えするストレッチやセルフケアを継続していただくと効果的です。',
  },
  {
    id: 'faq11',
    question: 'どのような症状に効果がありますか？',
    answer:
      '肩こり、腰痛、頭痛などの一般的な症状はもちろん、姿勢改善、スポーツ障害、産後の骨盤調整、自律神経の乱れによる不調など、幅広い症状に対応しています。詳しくはカウンセリング時にご相談ください。',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="container-section relative overflow-hidden bg-secondary/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">よくある質問</h2>
        <p className="text-center max-w-2xl mx-auto mb-10 text-sm md:text-base">
          当院に寄せられるよくあるご質問をまとめました。
          <br />
          ご不明な点がございましたら、お気軽にお問い合わせください。
        </p>

        <Card className="max-w-3xl mx-auto shadow-sm border-primary/10 bg-background/80 backdrop-blur-sm">
          <CardContent className="p-4 md:p-6 pt-2">
            <Accordion type="multiple" className="w-full">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <AccordionItem value={faq.id}>
                    <AccordionTrigger className="text-sm md:text-base text-left px-3 py-3 md:px-4 md:py-4 rounded-md transition-all">
                      <span className="font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="rounded-md mt-1 mb-2">
                      <p className="text-sm md:text-base py-0 px-2 md:px-4">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
