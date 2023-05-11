"use client"

import useColorMode from '@/hooks/useColorMode'
import { SwitchMod } from './mod/switch';

type Props = {}

const ThemeToggle = (props: Props) => {
    const [theme, setTheme] = useColorMode();

    return (
    <div className="flex items-center justify-center">
        <SwitchMod
            id="theme-toggle"
            onClick={() =>{ 
                //@ts-expect-error
                setTheme(theme === 'light' ? 'dark' : 'light')}
            }
            className='px-1 py-2 text-sm font-medium'
        >
            {theme !== 'light' ? "🌙 dark" : "☀️ light"}
        </SwitchMod>
    </div>
  )
}

export default ThemeToggle