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
import { MapPin, Phone, Clock } from 'lucide-react'
import Image from 'next/image'
import { siteConfig } from '@/lib/config/site'

export function StoreInfoSection() {
  return (
    <section id="store-info" className="container-section relative overflow-hidden bg-secondary/60">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">店舗情報</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg md:text-2xl flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                アクセス
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="text-sm md:text-base font-medium">{siteConfig.name}</p>
                <p className="text-sm md:text-base">{siteConfig.clinic.address.postalCode}</p>
                <p className="text-sm md:text-base">{siteConfig.clinic.address.full}</p>
                <p className="mt-2 text-sm md:text-base">
                  <span className="font-medium">最寄り駅：</span>
                  {siteConfig.clinic.access}
                </p>
              </div>

              <div className="aspect-video relative rounded-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.828030689816!2d139.69850261525877!3d35.68960868019392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd0d6b1ba1f%3A0x1c0a476cb0b11deb!2z5paw5a6_6aeF!5e0!3m2!1sja!2sjp!4v1651234567890!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '0.5rem' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${siteConfig.name}の地図`}
                  aria-label={`${siteConfig.name}の地図`}
                ></iframe>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg md:text-2xl flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                営業時間
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="bg-primary/10">
                    <TableHead className="text-sm md:text-base font-bold text-foreground w-1/3">
                      曜日
                    </TableHead>
                    <TableHead className="text-sm md:text-base font-bold text-foreground w-2/3">
                      営業時間
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {siteConfig.clinic.businessHours.map((item, index) => (
                    <TableRow
                      key={index}
                      className={index % 2 === 0 ? 'bg-background' : 'bg-secondary/20'}
                    >
                      <TableCell className="text-sm md:text-base font-medium text-primary">
                        {item.days}
                      </TableCell>
                      <TableCell className="text-sm md:text-base font-medium">
                        {item.hours}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="mt-6 p-3 border border-primary/20 rounded-md bg-primary/5">
                <p className="flex items-center gap-2 mb-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm md:text-base font-bold">電話番号：</span>
                  <span className="font-medium">{siteConfig.clinic.phone}</span>
                </p>
                <p className="text-xs md:text-sm ml-6">
                  ※当日予約も承っておりますが、事前のご予約をおすすめします。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <h3 className="section-subtitle text-center">院内の様子</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="aspect-video relative rounded-md overflow-hidden">
                <Image
                  src={`/images/img_store-info__clinic-img-0${i}.png`}
                  alt={`${siteConfig.name}の院内の様子 ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
