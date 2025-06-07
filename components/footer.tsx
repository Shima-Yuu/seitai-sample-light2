import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { siteConfig } from '@/lib/config/site'

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container mx-auto px-4 py-12 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4">{siteConfig.name}</h3>
            <ul className="text-xs md:text-sm space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  {siteConfig.clinic.address.postalCode}
                  <br />
                  {siteConfig.clinic.address.full}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>{siteConfig.clinic.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>{siteConfig.clinic.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  営業時間: {siteConfig.clinic.businessHours[0].days}{' '}
                  {siteConfig.clinic.businessHours[0].hours}
                  <br />
                  {siteConfig.clinic.businessHours[1].days}{' '}
                  {siteConfig.clinic.businessHours[1].hours} /{' '}
                  {siteConfig.clinic.businessHours[2].days}{' '}
                  {siteConfig.clinic.businessHours[2].hours}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold mb-4">サイトマップ</h3>
            <ul className="text-xs md:text-sm space-y-2">
              <li>
                <Link href="#strengths" className="hover:text-primary transition-colors">
                  当院の強み
                </Link>
              </li>
              <li>
                <Link href="#symptoms" className="hover:text-primary transition-colors">
                  症状別のお悩み
                </Link>
              </li>
              <li>
                <Link href="#treatment" className="hover:text-primary transition-colors">
                  料金表
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-primary transition-colors">
                  施術の流れ
                </Link>
              </li>
              <li>
                <Link href="#store-info" className="hover:text-primary transition-colors">
                  アクセス・営業時間
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-primary transition-colors">
                  よくある質問
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary transition-colors">
                  ご予約・お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold mb-4">施術メニュー</h3>
            <ul className="text-xs md:text-sm space-y-2">
              <li>
                <Link href="#treatment" className="hover:text-primary transition-colors">
                  標準整体コース
                </Link>
              </li>
              <li>
                <Link href="#treatment" className="hover:text-primary transition-colors">
                  プレミアム整体コース
                </Link>
              </li>
              <li>
                <Link href="#treatment" className="hover:text-primary transition-colors">
                  骨盤矯正コース
                </Link>
              </li>
              <li>
                <Link href="#treatment" className="hover:text-primary transition-colors">
                  首・肩集中ケアコース
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t text-center text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
