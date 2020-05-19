import React from 'react';
import {Card, Carousel} from 'antd'
import classNames from 'classnames'
import styles from './ui.less'

export default class Carousels extends React.Component{
    render(){
        return (
            <div>
                <Card title="文字背景轮播" className={styles.cardWrap}>
                    <Carousel autoplay effect="fade">
                        <div><h3>Ant Motion Banner - React</h3></div>
                        <div><h3>Ant Motion Banner - Vue</h3></div>
                        <div><h3>Ant Motion Banner - Angular</h3></div>
                    </Carousel>
                </Card>
                <Card title="图片轮播" >
                    <Carousel autoplay>
                        <div><img src="/carousel-img/carousel-1.jpg" alt=""/></div>
                        <div><img src="/carousel-img/carousel-2.jpg" alt=""/></div>
                        <div><img src="/carousel-img/carousel-3.jpg" alt=""/></div>
                    </Carousel>
                </Card>
                {/* <Carousel autoplay>
                    <div style={{backgroudColor:'#ff0000',width:'100px',height:'100px'}}>
                    <h3>1</h3>
                    </div>
                    <div style={{backgroudColor:'#ff0000',width:'100px',height:'100px'}}>
                    <h3>2</h3>
                    </div>
                    <div style={{backgroudColor:'#ff0000',width:'100px',height:'100px'}}>
                    <h3>3</h3>
                    </div>
                    <div style={{backgroudColor:'#ff0000',width:'100px',height:'100px'}}>
                    <h3>4</h3>
                    </div>
                </Carousel> */}
            </div>
        )
    }
}