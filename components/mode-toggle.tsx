'use client'
import { Moon, Sun, Palette } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from '@/components/ui/dropdown-menu'
import { useColorTheme } from './theme-provider'

export function ModeToggle() {
  const { setTheme } = useTheme()
  const { colorTheme, setColorTheme } = useColorTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">テーマを切り替える</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>カラーテーマ</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => setColorTheme('red')}
          className={colorTheme === 'red' ? 'bg-primary/10' : ''}
        >
          <span className="inline-block w-4 h-4 rounded-full bg-[hsl(357,43%,50%)] mr-2" />
          赤系
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setColorTheme('blue')}
          className={colorTheme === 'blue' ? 'bg-primary/10' : ''}
        >
          <span className="inline-block w-4 h-4 rounded-full bg-[hsl(210,100%,50%)] mr-2" />
          青系
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setColorTheme('green')}
          className={colorTheme === 'green' ? 'bg-primary/10' : ''}
        >
          <span className="inline-block w-4 h-4 rounded-full bg-[hsl(142,76%,36%)] mr-2" />
          緑系
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
