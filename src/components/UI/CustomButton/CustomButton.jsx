import React from 'react';
import styles from './CustomButton.module.scss';

const CustomButton = (props) => {
    const otherClass = props.className ? ' ' + props.className : '';
    return (
        <>
            <button {...props} className={styles.btn + otherClass}>{props.children}</button>
        </>
    );
};

export default CustomButton;