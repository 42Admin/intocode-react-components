import React from 'react';
import styles from './App.module.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";


function App() {
    return (
        <div className={styles.container}>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;