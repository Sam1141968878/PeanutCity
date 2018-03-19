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
 *     2018/3/16.
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
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import {observable,action} from 'mobx';
import {observer} from "mobx-react";
import PublicWholeNavListPrice from '../PublicLikeList/PublicWholeList/PublicWhoNavList/PublicWholeNavListPrice/PublicWholeNavListPrice'
import PublicWholeNavListQuan from '../PublicLikeList/PublicWholeList/PublicWhoNavList/PublicWholeNavListQuan/PublicWholeNavListQuan'
import PublicWholeNavListSales from '../PublicLikeList/PublicWholeList/PublicWhoNavList/PublicWholeNavListSales/PublicWholeNavListSales'
import NewNavTabPickerStore from '../../../Store/NavTabPickerStore'

@observer
export default class PublicGoodssTab extends PureComponent{
    state={
        selectedTab:'Picker',
        language:'',
    }
  render() {
    const {navigate}=this.props;
    const {selectedTab}=this.state;
    return (
            <View style={styles.View}>
                <TabNavigator tabBarStyle={styles.tabBarStyle}>
                  <TabNavigator.Item
                    tabStyle={styles.titleStyle}
                    selected={this.state.selectedTab === 'Picker'}
                    selectedTitleStyle={{color: "#3496f0"}}
                    onPress={() =>this.setState({ selectedTab: 'Picker' })}>
                    <PublicWholeNavListQuan
                        navigate={navigate}
                    />
                  </TabNavigator.Item>
                  <TabNavigator.Item
                    tabStyle={styles.titleStyle}
                    selected={this.state.selectedTab === 'Price'}
                    title="券后价"
                    selectedTitleStyle={{color: "#3496f0"}}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'Price',
                        })
                        action
                        NewNavTabPickerStore.PriceHigh=!NewNavTabPickerStore.PriceHigh;
                    }
                    }>
                    <PublicWholeNavListPrice
                        navigate={navigate}
                    />
                  </TabNavigator.Item>
                  <TabNavigator.Item
                    tabStyle={styles.titleStyle}
                    selected={this.state.selectedTab === 'Sales_num'}
                    title="销量"
                    selectedTitleStyle={{color: "#3496f0"}}
                    onPress={() => {
                        this.setState({ selectedTab: 'Sales_num' })
                        action
                        NewNavTabPickerStore.SalesHigh=!NewNavTabPickerStore.SalesHigh;
                    }}>
                    <PublicWholeNavListSales
                        navigate={navigate}
                    />
                  </TabNavigator.Item>
                </TabNavigator>
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={(lang) => {
                        this.setState({language: lang});
                        NewNavTabPickerStore.Picker=lang;
                        }
                    }
                    style={styles.PickerView}
                    mode='dropdown'
                >
                   <Picker.Item label="综合排序" value="综合排序" />
                   <Picker.Item label="优惠券面值由高到低" value="优惠券面值由高到低" />
                   <Picker.Item label="优惠券面值由低到高" value="优惠券面值由低到高" />
                   <Picker.Item label="预估分享赚由高到低" value="预估分享赚由高到低" />
                </Picker>
            </View>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        flex:1,
    },
    tabBarStyle:{
        position:'absolute',
        top:0,
        height:40,
    },
    PickerView:{
        color:'red',
        width:'30%',
        position:'absolute',
        top:0,
        left:20,
    }
});
