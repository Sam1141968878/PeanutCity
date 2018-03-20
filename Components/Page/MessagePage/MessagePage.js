/**
 * Sample
 * React
 * Native
 * App
 * https://github.com/facebook/react-native
 * @flow
 * Created
 *     by
 *     Administrator
 *     on
 *     2018/3/20.
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
} from 'react-native';

import PublicGoBack from '../../PublicComponent/PublicGoBack'
import TabNavigator from 'react-native-tab-navigator';
import MessageOneDetail from './MessageOneDetail';
import MessageTwoDetail from './MessageTwoDetail';
export default class MessagePage extends PureComponent{
  state={
      selectedTab:'收益消息'
  }
  render() {
    const {goBack,navigate}=this.props.navigation;
    return (
      <View style={styles.View}>
          <PublicGoBack
            goBack={()=>goBack()}
            title={'消息'}
          />
          <TabNavigator
              tabBarStyle={styles.TabBarView}
              hidesTabTouch={true}
          >
              <TabNavigator.Item
                tabStyle={this.state.selectedTab=='收益消息'?styles.TabItemRed:styles.TabItemWhile}
                selected={this.state.selectedTab === '收益消息'}
                title="收益消息"
                selectedTitleStyle={styles.selectTitle}
                titleStyle={styles.Title}
                onPress={() => this.setState({ selectedTab: '收益消息' })}>
                <MessageOneDetail/>
              </TabNavigator.Item>
              <TabNavigator.Item
                tabStyle={this.state.selectedTab=='其他消息'?styles.TabItemRed:styles.TabItemWhile}
                selected={this.state.selectedTab === '其他消息'}
                title="其他消息"
                selectedTitleStyle={styles.selectTitle}
                titleStyle={styles.Title}
                onPress={() => this.setState({ selectedTab: '其他消息' })}>
                <MessageTwoDetail navigate={navigate}/>
              </TabNavigator.Item>
          </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        flex:1,
        backgroundColor:'#FFF',
        marginTop:-10
    },
    TabBarView:{
        position:'absolute',
        top:0,
        width:'100%',
        left:0,
        height:40,
    },
    TabItemRed:{
        backgroundColor:'red',
        justifyContent:'center',
    },
    TabItemWhile:{
        backgroundColor:'#FFF',
        justifyContent:'center',
    },
    Title:{
        fontSize:14,
        color:'#000'
    },
    selectTitle:{
        color:'#FFF',
        fontSize:14
    }
});
