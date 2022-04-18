import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LayoutLogin from '../../components/LayoutLogin/LayoutLogin';
import CustomButton from '../../components/UI/CustomButton/CustomButton';
import CustomInput from '../../components/UI/CustomInput/CustomInput';
import Logo from '../../components/UI/Logo/Logo';
import { setLifeExpectancy } from '../../store/LifeExpectancy/lifeExpectancy-actions';
import { setUser } from '../../store/User/user-actions';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
    
    const navigation = useNavigate();
    const dispatch = useDispatch();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3001/users?login=${login}&password=${password}`)
        .then(response => response.json())
        .then(data => {
            if (data.length === 0) {
                throw new Error("Login or password wrong!");
            }
            dispatch(setUser(data[0]));
            setLogin('');
            setPassword('');
            
            return fetch(`http://localhost:3001/lifeExpectancy?name=${data[0].country}`);
        })
        .then(response => response.json())
        .then(data => {
            dispatch(setLifeExpectancy(data[0]));
            navigation('/')
        })
        .catch(err => alert(err));
    }

    return (
        <LayoutLogin>
            <div className={styles.title}>Welcome</div>
            <Logo className={styles.logo}/>
            <form onSubmit={onLogin} className={styles.form}>
                <CustomInput onChange={(e) => setLogin(e.target.value)}
                             value={login}
                             required
                             minLength="3"
                             type="text"
                             placeholder='Login'
                             className={styles.input} />
                <CustomInput onChange={(e) => setPassword(e.target.value)}
                             value={password}
                             required 
                             minLength="8" 
                             type="password" 
                             placeholder='Password' 
                             className={styles.input} />
                <CustomButton className={styles.btn}>Sign In</CustomButton>
            </form>
            <div className={styles.signUp}>Don't have an account? <a href="/signup" className={styles.link}>Sign Up</a></div>
        </LayoutLogin>    
    );
};

export default LoginPage;