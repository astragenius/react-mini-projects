import React, { useEffect, useState } from 'react'
import styles from './ThemeSwitcher.module.css'
import { MoonIcon, SunIcon, XMarkIcon, SwatchIcon } from '@heroicons/react/24/outline';
import useLocalStorage from '../hooks/useLocalStorage';

function ThemeSwitcher() {
    const [isColorPicking, setIsColorPicking] = useState(false);
    const [hue, setHue] = useLocalStorage('hue', '240')
    const [theme, setTheme] = useLocalStorage('theme', 'dark')

    const handleThemeButton = () => setTheme(theme === 'light' ? 'dark' : 'light')

    useEffect(() => {
        document.documentElement.setAttribute('color-scheme', theme)
    }, [theme])
    useEffect(() => {
        document.documentElement.style.setProperty('--_hue', hue)
    }, [hue])
  return (
    <aside
    className={styles.wrapper}
    style={{
        backgroundColor: isColorPicking ? 'hsl(var(--muted) / .6)' : 'transparent'
    }}
    >

        {
            isColorPicking
                ?(
                    <>
                    <button
                    className={`btn ${styles.close}`}
                    aria-label='Close color picking mode'
                    onClick={() => setIsColorPicking(false)}
                    >
                        <XMarkIcon/>
                    </button>
                    <input
                    className={styles.picker}
                    min='0'
                    max="360"
                    aria-label='Change color theme slider'
                    type="range"
                    value={hue}
                    onInput={(e) => setHue(e.target.value)}

                     />
                    </>
                )
                :(
                    <div className={styles.btns}>
                        <button 
                        className='btn'
                        aria-label={`Change theme to ${theme === 'light' ? 'dark' : 'light'} mode`}
                        role='switch'
                        onClick={handleThemeButton}
                                
                        >
                            {theme === 'dark' ? <SunIcon/> : <MoonIcon/>}
                            
                        </button>
                        <button 
                        className='btn'
                        aria-label='Enable color picking mode'
                        onClick={() => setIsColorPicking(true)}
                        >
                            <SwatchIcon/>
                        </button>
                    </div>
                )
        }

    </aside>
  )
}

export default ThemeSwitcher