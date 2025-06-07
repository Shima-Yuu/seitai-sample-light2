'use client'

import { motion } from 'framer-motion'
import { Search, Feather, BookOpen, UserCheck } from 'lucide-react'
import Image from 'next/image'

const strengths = [
  {
    id: 'experience',
    title: '根本の原因を突き止める',
    description:
      '「なぜ痛みが出るのか」「どうすれば改善するのか」。同じ症状でも、原因は人それぞれ異なります。問診では、いつ、どんな時に症状が出るのか、普段の生活習慣なども含めて丁寧にお伺いします。そこから本当の原因を見つけ出し、最適な施術プランをご提案いたします。長年の経験で培った「見る目」と「聴く耳」で、お客様の痛みの根本原因を特定。一度の施術ではなく、長期的な視点での改善計画を立てることで、着実な回復を実現します。',
    icon: Search,
  },
  {
    id: 'custom',
    title: '痛みを最小限に抑えた優しい施術',
    description:
      '「整体は痛そう」「怖い」という不安の声をよく耳にします。当院では、痛みの少ない独自の施術法を採用。丁寧な検査と施術で、必要最小限の刺激で最大限の効果を引き出します。痛みの少ない施術により、お身体への負担を抑え、早期回復を目指します。特に初めての方や痛みに敏感な方にも安心していただけるよう、徐々に強さを調整しながら施術を進めていきます。また、施術前の丁寧な説明で不安を解消し、リラックスした状態で施術を受けていただけます。',
    icon: Feather,
  },
  {
    id: 'relaxation',
    title: '徹底したアフターケアと再発予防指導',
    description:
      '「一時的に良くなっても、また症状が戻ってしまう」というお悩みにもしっかり対応します。施術後には、日常生活でのセルフケア方法や、姿勢・動作の改善点をわかりやすくお伝えします。また、定期的なフォローアップで症状の変化を確認し、再発防止のためのアドバイスを継続的に提供。お客様の健康な生活を長期的にサポートいたします。お客様自身が「自分の体を理解する」ことを大切にしています。症状の原因や予防法を分かりやすく解説し、日常生活での小さな変化が大きな効果を生み出すことを実感していただけるようサポートいたします。',
    icon: BookOpen,
  },
  {
    id: 'holistic',
    title: '個別対応に特化したパーソナル整体',
    description:
      '「画一的な施術では満足できない」「自分の体質や生活に合わせた整体を受けたい」というご要望にお応えします。当院では、お一人おひとりの体質、生活環境、職業、趣味などを総合的に考慮した完全オーダーメイドの施術プランをご提供。初回のカウンセリングで詳細な情報をお伺いし、お客様だけの施術メニューを作成します。',
    icon: UserCheck,
  },
]

export function StrengthsSection() {
  return (
    <section id="strengths" className="container-section relative overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/img_strengths-bg.png"
          alt="整体院の施術風景"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">当院の強み</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 bg-background/80 py-6 px-6 md:p-6 rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="p-3 bg-primary/10 rounded-full">
                  <strength.icon className="h-4 w-4 md:h-6 md:w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{strength.title}</h3>
                <p className="text-sm md:text-base">{strength.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
