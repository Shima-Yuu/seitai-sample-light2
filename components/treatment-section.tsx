'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

const treatments = [
  {
    id: 'standard',
    title: '標準整体コース',
    description:
      '全身のバランスを整え、筋肉の緊張を和らげる基本的な整体施術です。肩こりや腰痛など一般的な症状に対応し、日々の疲れを解消します。独自の手技で筋肉の緊張をほぐし、関節の可動域を広げることで、身体本来の自然治癒力を引き出します。初めての方や定期的なメンテナンスに最適なコースです。',
    time: '60分',
    price: '7,000円',
    firstTime: '5,600円',
  },
  {
    id: 'premium',
    title: 'プレミアム整体コース',
    description:
      '標準コースに加え、深層筋へのアプローチを強化した贅沢な施術コースです。じっくり時間をかけて全身の筋バランスを調整し、慢性的な痛みや凝りの根本改善を目指します。東洋医学の考え方も取り入れ、エネルギーの流れを整えることで心身ともにリラックスした状態へ導きます。特に長時間のデスクワークやストレスによる不調を抱える方におすすめです。',
    time: '90分',
    price: '10,000円',
    firstTime: '8,000円',
    isRecommended: true,
  },
  {
    id: 'pelvis',
    title: '骨盤矯正コース',
    description:
      '骨盤のゆがみを調整し、姿勢改善や腰痛軽減を目指す専門コースです。日常生活での癖や姿勢の悪さによって歪んだ骨盤を正しい位置に戻し、全身のバランスを整えます。特に産後の方や座り仕事が多い方、下半身のむくみや冷えにお悩みの方に効果的です。骨盤周辺の筋肉にもアプローチし、歪みの再発を防ぎます。',
    time: '50分',
    price: '6,000円',
    firstTime: '4,800円',
  },
  {
    id: 'neck-shoulder',
    title: '首・肩集中ケアコース',
    description:
      '首や肩の慢性的なこりに特化した集中ケアコース。頭痛緩和にも効果的です。スマートフォンやパソコンの長時間使用による首・肩周りの緊張を丁寧にほぐし、血行を促進します。首から肩にかけての筋肉だけでなく、頭皮や顔の筋肉も含めたトータルケアで、眼精疲労や頭重感の改善も期待できます。デスクワークの多い方や頭痛持ちの方に特におすすめです。',
    time: '40分',
    price: '5,000円',
    firstTime: '4,000円',
  },
]

const tickets = [
  {
    id: 'standard-5',
    name: '標準整体コース 5回券',
    price: '33,000円',
    discount: '2,000円お得',
  },
  {
    id: 'premium-5',
    name: 'プレミアム整体コース 5回券',
    price: '47,500円',
    discount: '2,500円お得',
  },
  {
    id: 'pelvis-5',
    name: '骨盤矯正コース 5回券',
    price: '28,500円',
    discount: '1,500円お得',
  },
]

export function TreatmentSection() {
  return (
    <section id="treatment" className="container-section relative overflow-hidden bg-secondary/60">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">施術メニュー・料金</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {treatments.map(treatment => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className={`h-full ${treatment.isRecommended ? 'border-primary' : ''}`}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg md:text-2xl">{treatment.title}</CardTitle>
                    {treatment.isRecommended && <Badge variant="default">おすすめ</Badge>}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm md:text-base">{treatment.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm">施術時間</p>
                      <p className="font-medium">{treatment.time}</p>
                    </div>
                    <div>
                      <p className="text-sm">通常料金</p>
                      <p className="font-medium">{treatment.price}</p>
                    </div>
                    <div>
                      <p className="text-sm">初回料金</p>
                      <p className="font-medium text-primary">{treatment.firstTime}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="bg-secondary/30 rounded-lg md:p-6">
          <h3 className="section-subtitle text-center">回数券のご案内</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs md:text-base">回数券</TableHead>
                <TableHead className="text-xs md:text-base">料金</TableHead>
                <TableHead className="text-xs md:text-base">お得な金額</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tickets.map(ticket => (
                <TableRow key={ticket.id}>
                  <TableCell className="text-xs md:text-base font-medium">{ticket.name}</TableCell>
                  <TableCell className="text-xs md:text-base">{ticket.price}</TableCell>
                  <TableCell className="text-xs md:text-base text-primary">
                    {ticket.discount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </motion.div>
    </section>
  )
}
