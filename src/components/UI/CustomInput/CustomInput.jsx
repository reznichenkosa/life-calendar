import React from 'react';
import styles from './CustomInput.module.scss'

const CustomInput = (props) => {
    const otherClass = props.className ? ' ' + props.className : '';
    return (
        <>
            <input {...props} className={styles.input + otherClass} />
        </>
    );
};

export default CustomInput;