/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/3/16.
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
  Picker,
  Dimensions,
} from 'react-native';

import {
    Container,
    Header,
    Tab,
    Tabs,
    TabHeading,
    Icon,
    Content
} from 'native-base';


import PublicHalfList from '../../PublicLikeList/PublicHalfList/PublicHalfList'

export default class PublicStoreDetailContent extends PureComponent{
  state={
      language:''
  }
  render() {
    const {navigate}=this.props;
    return (
        <Content style={styles.View}>
          <Tabs
              tabBarUnderlineStyle={{height:1,backgroundColor:'red'}}
              style={styles.TabsView}
          >
            <Tab heading={
                <TabHeading style={styles.TabHeadingView}>
                  <Picker
                      selectedValue={this.state.language}
                      onValueChange={(lang) => this.setState({language: lang})
                      }
                      style={styles.PickerView}
                      mode='dropdown'
                  >
                     <Picker.Item label="综合排序" value="综合排序" />
                     <Picker.Item label="优惠券面值由高到低" value="优惠券面值由高到低" />
                     <Picker.Item label="优惠券面值由低到高" value="优惠券面值由低到高" />
                  </Picker>
                </TabHeading>}>
                <PublicHalfList navigate={navigate}/>
            </Tab>
              <Tab heading={<TabHeading style={styles.TabHeadingView}>
                                <Text>券后价</Text>
                            </TabHeading>}
              >
                  <PublicHalfList  navigate={navigate}/>
            </Tab>
              <Tab heading={<TabHeading style={styles.TabHeadingView}>
                                <Text>销量</Text>
                            </TabHeading>}>
                  <PublicHalfList  navigate={navigate}/>
            </Tab>
          </Tabs>
        </Content>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        flex:1,
    },
    TabsView:{
        flex:1,
    },
    PickerView:{
        width:'100%',
        zIndex:-1,
    },
    TabHeadingView:{
        backgroundColor:'#FFF'
    }
});
