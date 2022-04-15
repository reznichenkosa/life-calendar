import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const LayoutMain = (props) => {
    return (
        <>
            <Header />
                <main className='main'>
                    {props.children}
                </main>
            <Footer />
        </>
    );
};

export default LayoutMain;