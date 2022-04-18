import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import Logo from '../UI/Logo/Logo';
import CustomButton from '../UI/CustomButton/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { clearLifeExpectancy } from '../../store/LifeExpectancy/lifeExpectancy-actions';
import { clearUser } from '../../store/User/user-actions';

const Header = () => {
    const [mode, setMode] = useState('light');
    const dispatch = useDispatch();

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
    
    const onSignOut = () => {
        dispatch(clearLifeExpectancy());
        dispatch(clearUser());
    }

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>
                    <a className={styles.logo} href="/"><Logo /></a>
                    <div className={styles.right}>
                        <div onClick={toogleMode} className={styles.mode}>
                            { mode === 'light' ? <i className="bi bi-sun"></i> : <i className="bi bi-cloud-moon"></i>}{mode}
                        </div>
                        <CustomButton onClick={onSignOut}>Sign Out</CustomButton>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;