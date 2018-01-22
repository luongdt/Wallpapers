/**
* @Author: luongtd
* @Date:   2016-07-21T00:49:24-07:00
* @Last modified by:   luongtd
* @Last modified time: 2016-08-17T00:50:03-07:00
*/



import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ViewPager from 'react-native-viewpager';
var {height, width} = Dimensions.get('window');
const COLOR_WHITE = '#ddd';
const COLOR_WHITE_ICON = '#A1A1A1';
class Category extends Component {
   constructor(props, context) {
    super(props, context);
     var IMGS = [
       this.props.list[1]+'1.jpg',
       this.props.list[1]+'2.jpg',
       this.props.list[1]+'3.jpg',
       this.props.list[1]+'4.jpg',
       this.props.list[1]+'5.jpg',
       this.props.list[1]+'6.jpg',
       this.props.list[1]+'7.jpg',
       this.props.list[1]+'8.jpg'
];
     var dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });
    this.state = {
      dataSource: dataSource.cloneWithPages(IMGS)
    };
  };
  onPressSlide(index){
    console.log("===========4====="+ index);
  }
 
  render() {
    var url  = this.props.list[1]+'1.jpg';
    console.log("===99999====" + String(url));
    return (
       <View style={{ flex: 1, backgroundColor : '#2b2c2e', }}>
           
           <ViewPager
              style={styles.container}
              dataSource={this.state.dataSource}
              renderPage={this._renderPage}
              isLoop={true}
              autoPlay={false}/>
             <TouchableOpacity onPress={() => {Actions.pop()}} style={{ marginTop : 25,
                marginBottom: 5,position: 'absolute',left: 0,top: 0}}>
                <Image style={{ marginLeft : 3,color:COLOR_WHITE_ICON,alignItems: 'center',justifyContent : 'center'}} source={require('./../img/arrow-left.png')}  size={50} />
             </TouchableOpacity>
             <View style={{backgroundColor : '#00AAAAAA',padding : 5, width : 40,position: 'absolute',left: 0,top: height/2,marginLeft : 7}}>
               <Image style={{ marginLeft : 3,color:COLOR_WHITE_ICON}} source={require('./../img/getapp.png')}  size={50} />
               <Image style={{ marginLeft : 3,marginTop : 7,color:COLOR_WHITE_ICON}} source={require('./../img/share.png')}  size={50} />
        </View>
       </View>
    );
  }
    _renderPage(data: Object,pageID: number | string,) 
    {
         
          return (
             <Image
                source={{uri: data}}
                style={styles.page} />
                 );
          
      }
}

const styles = StyleSheet.create({
  container: {
     width: width,
     height : height,
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'transparent',
     
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
  thumbnail: {
    marginTop : 30,
    width: 245,
    height: 435,
  },
  bg : {
    flex : 1,

    resizeMode: 'cover',
  },
  bgImageWrapper: {
        position: 'absolute',
        top: 0, bottom: 0, left: 0, right: 0
    },
    bgImage: {
        width:Dimensions.get('window').width,
        height : Dimensions.get('window').height,
        resizeMode: 'cover'
    },
   page: {
     width: width,
    
     
  }
});

export default Category;
