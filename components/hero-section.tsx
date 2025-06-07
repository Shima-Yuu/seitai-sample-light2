'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Search, Heart, MapPin } from 'lucide-react'
import Image from 'next/image'
import { siteConfig } from '@/lib/config/site'

export function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative pt-24 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/img_hero-bg.png"
          alt="整体院の背景"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-secondary/50" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto md:text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <Badge
              variant="outline"
              className="mb-4 text-sm px-4 py-1 border-primary bg-primary text-white"
            >
              {siteConfig.name}
            </Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-3xl md:text-4xl lg:text-6xl font-bold lg:leading-[1.3] mb-4 md:mb-6"
          >
            身体のことで
            <br className="md:hidden" />
            悩まないような
            <br className="hidden md:block" />
            人生を
            <br className="md:hidden" />
            おくってもらいたい。
          </motion.h1>

          <motion.p variants={item} className="text-sm md:text-lg md:text-xl mb-8">
            痛みを少しでも取り除いて、より豊かな人生を送ってもらえるように。
          </motion.p>

          <motion.div
            variants={item}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 hidden md:grid"
          >
            <div className="flex flex-col items-center p-4 bg-background/80 rounded-lg shadow-sm">
              <Search className="h-10 w-10 text-primary mb-2" />
              <h3 className="font-semibold">根本原因を突き止める 丁寧な問診</h3>
            </div>
            <div className="flex flex-col items-center p-4 bg-background/80 rounded-lg shadow-sm">
              <Heart className="h-10 w-10 text-primary mb-2" />
              <h3 className="font-semibold">痛みを最小限に抑えた優しい施術</h3>
            </div>
            <div className="flex flex-col items-center p-4 bg-background/80 rounded-lg shadow-sm">
              <MapPin className="h-10 w-10 text-primary mb-2" />
              <h3 className="font-semibold">地域密着での信頼と実績</h3>
            </div>
          </motion.div>

          <motion.div variants={item} className="flex md:block justify-center">
            <Button asChild size="lg" className="text-base">
              <Link href="#contact">ご予約・お問い合わせはこちら</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
