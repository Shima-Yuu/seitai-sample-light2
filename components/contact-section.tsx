'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const formSchema = z.object({
  name: z.string().min(1, {
    message: 'お名前を入力してください',
  }),
  email: z.string().email({
    message: '有効なメールアドレスを入力してください',
  }),
  phone: z.string().min(10, {
    message: '有効な電話番号を入力してください',
  }),
  contactMethod: z.enum(['email', 'phone'], {
    required_error: '連絡方法を選択してください',
  }),
  message: z.string().min(1, {
    message: 'お問い合わせを入力してください',
  }),
  symptoms: z.array(z.string()).optional(),
})

type FormValues = z.infer<typeof formSchema>

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      contactMethod: 'email',
      message: '',
      symptoms: [],
    },
  })

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)

    try {
      // FormspreeのAPIエンドポイントにデータを送信
      const response = await fetch('https://formspree.io/f/xxxx', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          // 症状が配列の場合は文字列に変換
          symptoms: data.symptoms ? data.symptoms.join(', ') : '',
        }),
      })

      if (response.ok) {
        toast.success('お問い合わせありがとうございます。担当者より折り返しご連絡いたします。')
        form.reset()
      } else {
        toast.error('送信に失敗しました。しばらく経ってからもう一度お試しください。')
      }
    } catch (error) {
      console.error('送信エラー:', error)
      toast.error('送信中にエラーが発生しました。インターネット接続をご確認ください。')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="container-section bg-secondary/60">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">ご予約・お問い合わせ</h2>

        <div className="flex flex-col items-center justify-center mb-8">
          <p className="text-base md:text-lg font-semibold text-muted-foreground mb-1">
            お電話でのご予約はこちら
          </p>
          <a
            href="tel:03-1234-5678"
            className="text-3xl md:text-4xl font-bold text-primary hover:text-primary/90 transition-colors"
          >
            03-1234-5678
          </a>
          <p className="text-xs md:text-sm text-muted-foreground mt-2">
            受付時間: 9:00〜18:00（平日・土曜）
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base">
                      お名前 <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input className="text-sm md:text-base" placeholder="山田 太郎" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm md:text-base">
                        メールアドレス <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="text-sm md:text-base"
                          placeholder="example@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm md:text-base">
                        電話番号 <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="text-sm md:text-base"
                          placeholder="090-1234-5678"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="contactMethod"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-sm md:text-base">
                      ご希望の連絡方法 <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="text-sm md:text-base flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="email" />
                          <Label htmlFor="email">メール</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="phone" />
                          <Label htmlFor="phone">電話</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="symptoms"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="">お悩みの症状（複数選択可）</FormLabel>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {['肩こり', '腰痛', '頭痛', '姿勢の悪さ', '手足のしびれ', '全身の疲れ'].map(
                        symptom => (
                          <FormField
                            key={symptom}
                            control={form.control}
                            name="symptoms"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={symptom}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      className="text-sm md:text-base"
                                      checked={field.value?.includes(symptom)}
                                      onCheckedChange={checked => {
                                        return checked
                                          ? field.onChange([...(field.value || []), symptom])
                                          : field.onChange(
                                              field.value?.filter(value => value !== symptom)
                                            )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">{symptom}</FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        )
                      )}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base">
                      お問い合わせ内容 <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="ご質問やご要望などをご記入ください"
                        className="text-sm md:text-base min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? '送信中...' : '送信する'}
              </Button>
            </form>
          </Form>
        </div>
      </motion.div>
    </section>
  )
}
