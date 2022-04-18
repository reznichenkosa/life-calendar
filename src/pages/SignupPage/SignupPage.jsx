import React, { useEffect, useState } from 'react';
import LayoutLogin from '../../components/LayoutLogin/LayoutLogin';
import CustomButton from '../../components/UI/CustomButton/CustomButton';
import CustomInput from '../../components/UI/CustomInput/CustomInput';
import Logo from '../../components/UI/Logo/Logo';
import styles from './SignupPage.module.scss';

const SignupPage = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/lifeExpectancy')
        .then(response => response.json())
        .then(data => setCountries(data))
        .catch(err => alert(err));
    }, []);

    return (
        <LayoutLogin>
            <div className={styles.title}>Welcome</div>
            <Logo className={styles.logo} />
            <form action="#" className={styles.form}>
                <CustomInput required minLength="3" type="text" placeholder='Login' className={styles.input} />
                <CustomInput required minLength="8" type="password" placeholder='Password' className={styles.input} />
                <CustomInput required minLength="8" type="password" placeholder='Repeat password' className={styles.input} />
                <CustomInput onFocus={(e) => e.target.type = 'date'} required type="text" placeholder='Date of birth' className={styles.input} />
                <label className={styles.input} htmlFor="male">Male</label>
                <input required minLength="8" id="male" type="radio" name='gender' value="male" className={styles.input} />
                <label className={styles.input} htmlFor="female">Female</label>
                <input required minLength="8" id="female" type="radio" name='gender' value="female" className={styles.input} />
                <select className={styles.input} required name="select">
                    {
                        countries.map(item => <option key={item.name} value={item.name}>{item.name}</option>)
                    }
                </select>
                <CustomButton className={styles.btn}>Sign Up</CustomButton>
            </form>
            <div className={styles.signUp}>Do you have an account? <a href="/login" className={styles.link}>Sign In</a></div>
        </LayoutLogin>
    );
};

export default SignupPage;