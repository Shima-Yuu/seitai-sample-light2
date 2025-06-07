'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Menu, Phone } from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { siteConfig } from '@/lib/config/site'

const navItems = [
  { name: '症状別のお悩み', href: '#symptoms' },
  { name: '当院の強み', href: '#strengths' },
  { name: '施術メニュー・料金表', href: '#treatment' },
  { name: '施術の流れ', href: '#process' },
  { name: 'アクセス・営業時間', href: '#store-info' },
  { name: 'よくある質問', href: '#faq' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl font-bold text-primary">
          {siteConfig.name}
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <ModeToggle />

          <Button asChild variant="default" size="sm" className="hidden md:flex">
            <Link href="#contact" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              ご予約・お問い合わせ
            </Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">メニューを開く</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="text-xl font-bold mb-4">{siteConfig.name}</SheetTitle>
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map(item => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <Link
                    href="#contact"
                    className="flex items-center gap-2 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone className="h-4 w-4" />
                    ご予約・お問い合わせ
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
