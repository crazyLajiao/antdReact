import React from 'react'
import { Row, Col } from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import styles from './style/common.less'

export default function Admin(props){
    return (
        <Row className={styles.container}>
            <Col span={4} className={styles.navLeft}>
                <NavLeft />
            </Col>
            <Col span={20} className={styles.main}>
                <Header></Header>
                <Row className={styles.content}>
                    {/* <Home /> */}
                    {props.children}   
                </Row>
                <Footer></Footer>
            </Col>
        </Row>
    )
}