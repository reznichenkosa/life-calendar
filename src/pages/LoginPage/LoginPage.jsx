import React from 'react';
import LayoutLogin from '../../components/LayoutLogin/LayoutLogin';
import CustomButton from '../../components/UI/CustomButton/CustomButton';
import CustomInput from '../../components/UI/CustomInput/CustomInput';
import Logo from '../../components/UI/Logo/Logo';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
    return (
        <LayoutLogin>
            <div className={styles.title}>Welcome</div>
            <Logo className={styles.logo}/>
            <form action="#" className={styles.form}>
                <CustomInput required minLength="3" type="text" placeholder='Login' className={styles.input} />
                <CustomInput required minLength="8" type="password" placeholder='Password' className={styles.input} />
                <CustomButton className={styles.btn}>Sign In</CustomButton>
            </form>
            <div className={styles.signUp}>Don't have an account? <a href="/signup" className={styles.link}>Sign Up</a></div>
        </LayoutLogin>    
    );
};

export default LoginPage;