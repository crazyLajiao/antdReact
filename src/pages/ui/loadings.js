import React from 'react';
import {Card, Spin, Alert} from 'antd'
import {
    
    LoadingOutlined,
  } from '@ant-design/icons';
import styles from './ui.less'

export default class Loadings extends React.Component{
    render() {
        const icon = <LoadingOutlined style={{fontSize:24}}/>
        return (
            <div>
                <Card title="Spin用法" className={styles.cardWrap}>
                    <Spin size="small"/>
                    <Spin style={{margin:'0 10px'}}/>
                    <Spin size="large"/>
                    <Spin indicator={icon} style={{marginLeft:10}}/>
                </Card>
                <Card title="内容遮罩" className={styles.cardWrap}>
                    <Alert 
                        message="React"
                        description="欢迎使用柳柳版信息框"
                        type="info"
                    />
                    <Spin>
                        <Alert 
                            message="React"
                            description="欢迎使用柳柳版警告框"
                            type="warning"
                        />
                    </Spin>
                    <Spin tip="加载中">
                        <Alert 
                            message="React"
                            description="欢迎使用柳柳版警告框"
                            type="warning"
                        />
                    </Spin>
                    <Spin indicator={icon}>
                        <Alert 
                            message="React"
                            description="欢迎使用柳柳版警告框"
                            type="warning"
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}

