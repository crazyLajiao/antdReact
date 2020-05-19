import React,{useEffect,useState} from 'react'
import { Row, Col,Breadcrumb } from 'antd'
import styles from './index.less'
// import './ind.css'
import Util from '../../utils/utils'
// import axios from '../../axios';
import {connect} from 'react-redux'  //连接器

function Header(props){
    const {menuName, menuType} = props;
    const [userName,setUserName] = useState('')
    const [sysTime,setSysTime] = useState('')
    // const [dayPictureUrl,setDayPictureUrl] = useState()
    // const [weather,setWeather] = useState()
    useEffect(() => {
        setUserName('xiaoxiniu')
        setInterval(() => {
            let sysTime = Util.formatDate(new Date().getTime());
            setSysTime(sysTime)
        }, 1000)
        return () => {
            
        }
    }, [userName])
//    const getWeatherAPIDate=useCallback(
//         () => {
//             let city = encodeURIComponent('杭州');
//                 axios.jsonp({
//                     url: 'http://api.map.baidu.com/telematics/v3/weather?location='+city+'&output=json&ak=kwQXPVDYPZIYArkpi3rQT7aZHTGTCCB2'
//                 }).then((res) => {
//                     if(res.status === 'success'){
//                         let data = res.result[0].weather_data[0];
//                         setDayPictureUrl(data.dayPictureUrl)
//                         setWeather(data.weather)
//                     } 
//                 })
//         },
//         [],
//     )

    return (
        <div className={styles.header}>
           <Row className={styles.headerTop}>
              {
                  menuType ? 
                  <Col span="6" className={styles.logo}>
                       <img src="/assets/logo-ant.svg" alt="" />
                       <span>LJQ 通用管理系统</span>
                  </Col> : ''
              }
              <Col span={menuType ? 18 : 24}>
                  <span>欢迎，{userName}</span>
                  <a href='#'>退出</a>
              </Col>
           </Row>
           {
               menuType ? '' : 
               <Row className={styles.breadcrumb}>
                    <Col span={4} className={styles.breadcrumbTitle}>
                        {menuName}
                    </Col>
                    <Col span={20} className={styles.weather}>
                        <span className={styles.date}>{sysTime}</span>
                        <span className={styles.weatherDetail}>晴转多云</span>
                    </Col>
               </Row>
           }
        </div>
    )
}

// class Header extends React.Component {
//     state = {}
//     componentWillMount() {
//         this.setState({
//             userName: 'xiaoxiniu'
//         })
//         setInterval(() => {
//             let sysTime = Util.formatDate(new Date().getTime());
//             this.setState({
//                 sysTime
//             })
//         }, 1000)
//         //this.getWeatherAPIDate();由于百度API禁止了服务，故该功能暂时不使用
//     }
//     getWeatherAPIDate() {
//         let city = encodeURIComponent('杭州');
//         axios.jsonp({
//             url: 'http://api.map.baidu.com/telematics/v3/weather?location='+city+'&output=json&ak=kwQXPVDYPZIYArkpi3rQT7aZHTGTCCB2'
//         }).then((res) => {
//             if(res.status === 'success'){
//                 let data = res.result[0].weather_data[0];
//                 this.setState({
//                     dayPictureUrl:data.dayPictureUrl,
//                     weather:data.weather
//                 })
//             } 
//         })
//     }
//     render() {
//         const {menuName, menuType} = this.props;
//         return (
//             <div className={styles.header}>
//                <Row className={styles.headerTop}>
//                   {
//                       menuType ? 
//                       <Col span="6" className={styles.logo}>
//                            <img src="/assets/logo-ant.svg" alt="" />
//                            <span>LJQ 通用管理系统</span>
//                       </Col> : ''
//                   }
//                   <Col span={menuType ? 18 : 24}>
//                       <span>欢迎，{this.state.userName}</span>
//                       <a href='#'>退出</a>
//                   </Col>
//                </Row>
//                {
//                    menuType ? '' : 
//                    <Row className={styles.breadcrumb}>
//                         <Col span={4} className={styles.breadcrumbTitle}>
//                             {menuName || '首页'}
//                         </Col>
//                         <Col span={20} className={styles.weather}>
//                             <span className={styles.date}>{this.state.sysTime}</span>
//                             <span className={styles.weatherDetail}>晴转多云</span>
//                         </Col>
//                    </Row>
//                }
//             </div>
//         )
//     }
// }
//将state.menuName 绑定到 props 的menuName
const mapStateToProps = state => {
    console.log(state)
    return {
        menuName: state.menuName
    }
}
export default connect(mapStateToProps)(Header)