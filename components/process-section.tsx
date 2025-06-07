'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ClipboardList, MessageSquare, Stethoscope, Hand, CalendarClock } from 'lucide-react'

const steps = [
  {
    id: 'step1',
    title: '受付・ご案内',
    description:
      'ご来院後、受付でお名前をお伺いし、問診票のご記入をお願いいたします。お着替えのご案内もさせていただきます。',
    icon: ClipboardList,
  },
  {
    id: 'step2',
    title: 'カウンセリング',
    description:
      '痛みの症状や原因、生活習慣などを丁寧にお伺いし、最適な施術プランをご提案いたします。',
    icon: MessageSquare,
  },
  {
    id: 'step3',
    title: '検査・診断',
    description: '姿勢や動きの確認、触診などを行い、お体の状態を詳しく検査します。',
    icon: Stethoscope,
  },
  {
    id: 'step4',
    title: '施術',
    description:
      'お一人おひとりの症状に合わせた施術を、リラックスできる空間で行います。痛みを最小限に抑えた丁寧な施術を心がけています。',
    icon: Hand,
  },
  {
    id: 'step5',
    title: 'お会計・アフターケア',
    description:
      '施術後の経過説明と、ご自宅でのケア方法をお伝えいたします。次回のご予約も承ります。',
    icon: CalendarClock,
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="container-section relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">施術の流れ</h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* 縦線 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />

            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-0 md:mb-12 last:mb-0 relative"
              >
                <div
                  className={`md:flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="md:w-1/2 p-3 md:p-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg md:text-2xl flex items-center gap-2">
                          <span className="inline-flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary text-primary-foreground">
                            {index + 1}
                          </span>
                          {step.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm md:text-base">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="hidden md:flex justify-center items-center md:w-1/2 relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                      <step.icon className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
