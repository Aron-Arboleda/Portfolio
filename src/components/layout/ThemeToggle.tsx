import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { Button } from '@/components/ui/Button'

const themeLabels = {
  light: 'Switch to dark mode',
  dark: 'Switch to system theme',
  system: 'Switch to light mode',
} as const

const themeIcons = {
  light: Sun,
  dark: Moon,
  system: Monitor,
} as const

export function ThemeToggle() {
  const { theme, cycleTheme } = useTheme()
  const Icon = themeIcons[theme]

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={cycleTheme}
      aria-label={themeLabels[theme]}
      title={themeLabels[theme]}
      className="h-9 w-9 px-0"
    >
      <Icon size={18} aria-hidden="true" />
    </Button>
  )
}
