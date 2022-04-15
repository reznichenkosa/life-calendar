import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import Logo from '../UI/Logo/Logo';
import CustomButton from '../UI/CustomButton/CustomButton';
import lightMode from '../../assets/icons/brightness.png';
import darkMode from '../../assets/icons/night-mode.png';

const Header = () => {
    const [mode, setMode] = useState('light');

    useEffect(() => {
        document.body.setAttribute('data-mode', mode);
    })

    const toogleMode = () => {
        if (mode === 'light') {
            setMode('dark')
        } else {
            setMode('light')
        }
    }

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>
                    <a className={styles.logo} href="/"><Logo /></a>
                    <div className={styles.right}>
                        <div className={styles.mode}><img onClick={toogleMode} src={mode === 'light' ? lightMode : darkMode} alt="" />{mode === 'light' ? 'Light mode' : 'Dark mode'}</div>
                        <CustomButton>Sign Out</CustomButton>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;