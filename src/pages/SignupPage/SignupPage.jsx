import React from 'react';
import LayoutLogin from '../../components/LayoutLogin/LayoutLogin';
import CustomButton from '../../components/UI/CustomButton/CustomButton';
import CustomInput from '../../components/UI/CustomInput/CustomInput';
import Logo from '../../components/UI/Logo/Logo';
import styles from './SignupPage.module.scss';

const SignupPage = () => {
    return (
        <LayoutLogin>
            <div className={styles.title}>Welcome</div>
            <Logo className={styles.logo} />
            <form action="#" className={styles.form}>
                <CustomInput required minLength="3" type="text" placeholder='Login' className={styles.input} />
                <CustomInput required minLength="8" type="password" placeholder='Password' className={styles.input} />
                <CustomInput required minLength="8" type="password" placeholder='Repeat password' className={styles.input} />
                <CustomButton className={styles.btn}>Sign Up</CustomButton>
            </form>
            <div className={styles.signUp}>Do you have an account? <a href="/login" className={styles.link}>Sign In</a></div>
        </LayoutLogin>
    );
};

export default SignupPage;