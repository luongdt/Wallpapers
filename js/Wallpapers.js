/**
* @Author: luongtd
* @Date:   2016-07-21T00:49:24-07:00
* @Last modified by:   luongtd
* @Last modified time: 2016-07-26T01:42:37-07:00
*/



import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Actions, Scene, Router} from 'react-native-router-flux';
import Main from './Main';
import Detail from './Detail';
import Category from './Category';
import Setting from './Setting';
import NavigationDrawer from './components/NavigationDrawer';
import SideMenu from './SideMenu';

class Wallpapers extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
        <Scene key="sidemenu" component={NavigationDrawer}>
         <Scene key = "content" >
          <Scene key="main"
             component={Main}
             title="Home"
             onRight={()=>alert("Right button")} rightTitle="Update" rightTitleStyle={{color:'#FFFAF0'}}
             navigationBarStyle={{backgroundColor:'#4EE2EC'}} titleStyle={{color:'#FFFAF0'}}
             initial={true} type='replace'/>
          <Scene key="category"
             component={Category}
             hideNavBar={true} 
             title="1/8" type='push'/>                        
          <Scene key="detail" component={Detail} title="1/8" />
          <Scene key="setting" component={Setting} title="Setting" type= 'replace'/>
         </Scene>
         </Scene>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  styleTitle: {
    color :'#FFFAF0',
  },
});

export default Wallpapers;
