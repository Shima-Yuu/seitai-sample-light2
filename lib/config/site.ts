/**
 * サイト全体の設定
 */

export const siteConfig = {
  // 整体院の名前
  name: '〇〇整体院',

  // サイトのタイトル
  title: {
    default: '〇〇整体院 | 辛い痛みやコリを根本から改善',
  },

  // 整体院の基本情報
  clinic: {
    address: {
      postalCode: '〒123-4567',
      full: '東京都新宿区新宿1-1-1 〇〇ビル2F',
    },
    phone: '03-1234-5678',
    phoneRaw: '0312345678',
    email: 'info@washin-seitai.com',
    businessHours: [
      { days: '月〜金', hours: '10:00-20:00' },
      { days: '土・祝', hours: '9:00-18:00' },
      { days: '日曜', hours: '休業' },
    ],
    closedDays: '年末年始・GW・お盆期間',
    access: '〇〇線〇〇駅 徒歩5分',
  },

  // SEO関連
  description:
    '〇〇整体院は自然治癒力を引き出す施術で、あなたの健康を支えます。肩こり、腰痛、頭痛などの症状改善に特化した整体院です。',
  keywords: '整体院, 肩こり, 腰痛, 頭痛, 自然治癒力, 施術, 健康',
}

export type SiteConfig = typeof siteConfig
