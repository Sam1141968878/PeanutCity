/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/4/3.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
  TouchableOpacity,
  Image,
  WebView,
  Dimensions,
  ActivityIndicator,
  Linking
} from 'react-native';

var {height, width} = Dimensions.get('window');

import fetchJson from '../../Fetch/FetchJson'

const Api='http://111.230.254.117:8000/rob?num_iid='
export default class RobStampsPage extends PureComponent{
  state={
    data:''
  }
  fetchData = async () => {
    const json = await fetchJson(`${Api}${this.props.navigation.state.params.id}`);
      this.setState({
             data: json.data,
      })
  }
  componentDidMount() {
      this.fetchData();
  }
  render() {
    return (
      <View style={styles.container}>
          {
            this.state.data
            ?
                <WebView
                  bounces={false}
                  scalesPageToFit={false}
                  source={{uri:this.state.data,method: 'GET'}}
                  style={{width:width, height:height}}>
                </WebView>
            :
                <ActivityIndicator/>
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});
