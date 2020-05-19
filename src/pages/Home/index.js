import React from 'react'
import styles from './index.less'

export default class Home extends React.Component{
    render() {
        return (
            <div className={styles.homeWrap}>
                欢迎学习慕课后台管理系统课程
            </div>
        )
    }
}