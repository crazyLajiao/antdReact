import React,{useState,useEffect,useCallback} from 'react'
import { Menu } from 'antd';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'  //连接器
import { switchMenu } from './../../redux/action' //事件行为
import MenuConfig from './../../config/menuConfig'
import styles from './index.less'

const SubMenu = Menu.SubMenu;

function NavLeft(props){
    const [currentKey,setCurrentKey] = useState('')
    
    const handleClick = useCallback(
        ({item, key}) => {
            if (key === currentKey) {
                return false;
            }
            // 事件派发，自动调用reducer，通过reducer保存到store对象中
            const { dispatch } = props;
            dispatch(switchMenu(item.props.title)) 
            setCurrentKey(key)
        },
        [currentKey],
    )
    const homeHandleClick = useCallback(
        () => {
            const { dispatch } = props;
            dispatch(switchMenu('首页'));
            setCurrentKey('')
        },
        [currentKey],
    )
    const renderMenu = (data) => {
        return data.map((item) => {
            if(item.children) {
              return (
                  <SubMenu title={item.title} key={item.key}>
                       {renderMenu(item.children)}
                  </SubMenu>
              )
            }
            return <Menu.Item title={item.title} key={item.key}>
                  <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
     }
     useEffect(() => {
        let currentKey = window.location.hash.replace(/#|\?.*$/g, '');
        setCurrentKey(currentKey)
    }, [])
     return (
        <div className={styles.navLeft}>
            <div className={styles.logo}>
                <img src="/assets/logo-ant.svg" alt=""/>
                <h1>LJQ MS</h1>
            </div>
            <Menu 
                onClick={handleClick}
                selectedKeys={[currentKey]}
                theme="dark"
                >
                {renderMenu(MenuConfig)}      
            </Menu>
        </div>
    )
}
// class NavLeft extends React.Component {
//     state = {
//         currentKey: ''
//     }
//     handleClick = ({item, key}) => {
//         if (key === this.state.currentKey) {
//             return false;
//         }
//         // 事件派发，自动调用reducer，通过reducer保存到store对象中
//         const { dispatch } = this.props;
//         dispatch(switchMenu(item.props.title)) 
//         this.setState({
//             currentKey: key
//         })
//     }
//     homeHandleClick = () => {
//         const { dispatch } = this.props;
//         dispatch(switchMenu('首页'));
//         this.setState({
//             currentKey: ""
//         });
//     };
//     componentWillMount() {
//        const MenuTreeNode = this.renderMenu(MenuConfig);
//        let currentKey = window.location.hash.replace(/#|\?.*$/g, '');
//        this.setState({
//            currentKey,
//            MenuTreeNode
//        })
//     }
//     //菜单渲染 -- 递归
//     renderMenu = (data) => {
//        return data.map((item) => {
//            if(item.children) {
//              return (
//                  <SubMenu title={item.title} key={item.key}>
//                       {this.renderMenu(item.children)}
//                  </SubMenu>
//              )
//            }
//            return <Menu.Item title={item.title} key={item.key}>
//                  <NavLink to={item.key}>{item.title}</NavLink>
//            </Menu.Item>
//        })
//     }
//     render() {
//         return (
//             <div className={styles.navLeft}>
//                 <div className={styles.logo}>
//                     <img src="/assets/logo-ant.svg" alt=""/>
//                     <h1>LJQ MS</h1>
//                 </div>
//                 <Menu 
//                     onClick={this.handleClick}
//                     selectedKeys={[this.state.currentKey]}
//                     theme="dark"
//                     >
//                     {this.state.MenuTreeNode}      
//                 </Menu>
//             </div>
//         )
//     }
// }
export default connect()(NavLeft)