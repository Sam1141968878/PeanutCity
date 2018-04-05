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
} from 'react-native';

import PublicGoBack from '../../PublicComponent/PublicGoBack'
import TabNavigator from 'react-native-tab-navigator';
import CollectionOneDetail from './CollectionOneDetail';
import CollectionTwoDetail from './CollectionTwoDetail';
export default class CollectionPage extends PureComponent{
  state={
    selectedTab:'宝贝'
  }
  render() {
    const {state,goBack,navigate}=this.props.navigation;
    return (
      <View style={styles.View}>
          <PublicGoBack
            goBack={()=>goBack()}
            title={state.params.title}
          />
          <TabNavigator
              tabBarStyle={styles.TabBarView}
              hidesTabTouch={true}
          >
              <TabNavigator.Item
                tabStyle={this.state.selectedTab=='宝贝'?styles.TabItemRed:styles.TabItemWhile}
                selected={this.state.selectedTab === '宝贝'}
                title="宝贝"
                selectedTitleStyle={styles.selectTitle}
                titleStyle={styles.Title}
                onPress={() => this.setState({ selectedTab: '宝贝' })}>
                <CollectionOneDetail/>
              </TabNavigator.Item>
              <TabNavigator.Item
                tabStyle={this.state.selectedTab=='品牌'?styles.TabItemRed:styles.TabItemWhile}
                selected={this.state.selectedTab === '品牌'}
                title="品牌"
                selectedTitleStyle={styles.selectTitle}
                titleStyle={styles.Title}
                onPress={() => this.setState({ selectedTab: '品牌' })}>
                <CollectionTwoDetail navigate={navigate}/>
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
