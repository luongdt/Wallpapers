/**
* @Author: luongtd
* @Date:   2016-07-21T00:49:24-07:00
* @Last modified by:   luongtd
* @Last modified time: 2017-03-01T21:45:58-08:00
*/



import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
//import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import GridView from 'react-native-grid-view'
import jsondata from './../services/jsondata'
var API_URL =  'https://www.dropbox.com/s/up20ydi46crr3jw/galaxy.json?dl=1' ;///'https://googledrive.com/host/0By5C6ybU2K6gRGtCRWV3c01zTHc/data.json';
var MOVIES_PER_ROW = 2;
class Movie extends Component {
  render() {
      return (
        <TouchableOpacity onPress={this.props.clickMe}>
        <View style={styles.movie} >
          <Image
            source={{uri: this.props.movie.thumbs}}
            style={styles.thumbnail}
          />
          <View >
            <Text
            style={styles.title}
            numberOfLines={1}>{this.props.movie.name}</Text>
            <Text style={styles.year}>{this.props.movie.total} wallpapers</Text>
            <Text style={styles.year}>Add to favorite aaa</Text>
          </View>

        </View>
        </TouchableOpacity>
      );
  }
}


class Main extends Component {
  constructor(props) {
      super(props);
      this.state = {
        dataSource: null,
        loaded: false,
      }
    }

    componentDidMount() {
  //    this.props.fetchData();
     this.fetchData();
    }

    fetchData() {
      fetch(API_URL)
        .then((response) => response.json())
        .then((responseData) => {
          console.log("=======" + responseData);
          this.setState({
            dataSource: responseData,
            loaded: true,
          });
        })
        .done();
    }


  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return (
      <GridView
       items={this.state.dataSource}
       itemsPerRow={MOVIES_PER_ROW}
       renderItem={this.renderItem}
       style={styles.listView}
     />
    );
  }

  renderLoadingView() {
    return (
      <View>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

  renderItem(item) {
      return <Movie movie={item} clickMe={()=>{
        console.log("=====3======");
         Actions.category({list : item.list});
      }}/>
  }

}

const styles = StyleSheet.create({
  movie: {
    height: 300,
    flex: 1,
    flexDirection: 'column',
    backgroundColor : '#F5FCFF',
    margin: 10
  },
  title: {
    fontSize: 12,
    marginTop: 8,
    width: 90,
    marginLeft : 5,
  },
  year: {
    fontSize: 9,
    width: 90,
    marginLeft : 5,
  },
  thumbnail: {
    width: 153,
    height: 181,
  },
  listView: {
    paddingTop: 70,
    backgroundColor: '#999999',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2b2c2e',
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
});
function select(state) {
  return {
        dataSource: state.responseData
    };
}

export default (Main);
