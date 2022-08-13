import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../sections/Contact';
import Logo from '../assets/shop-logo.svg';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['font-ubuntu text-primary bg-light-gray md:bg-white', ...additionalClass].join(' ')}>
        <Helmet>
            <html lang="en" />
        </Helmet>
        <Header />
        {children}
        <Contact
            logoImage={Logo}
            additionalClass={['my-5']}
            socialIconsHeaderText="Find us"
            formHeaderText="Contact us"
            nameInputLabel="Name"
            emailInputLabel="Email"
            messageInputLabel="Message"
            buttonLabel="Contact"
            phoneNumber="+86 135 1324 5677"
            address="Some Street"
            emailAddress="someemial.outlook.com"
        />
        <Footer />
    </main>
);

export default Layout;
