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

import {observable,action} from 'mobx';
import {observer} from "mobx-react";
import PublicWholeNavListPrice from '../PublicLikeList/PublicWholeList/PublicWhoNavList/PublicWholeNavListPrice/PublicWholeNavListPrice'
import PublicWholeNavListQuan from '../PublicLikeList/PublicWholeList/PublicWhoNavList/PublicWholeNavListQuan/PublicWholeNavListQuan'
import PublicWholeNavListSales from '../PublicLikeList/PublicWholeList/PublicWhoNavList/PublicWholeNavListSales/PublicWholeNavListSales'
import NewNavTabPickerStore from '../../../Store/NavTabPickerStore';
import TabNavigator from 'react-native-tab-navigator';

@observer
export default class PublicGoodssTab extends PureComponent{
    state={
        selectedTab:'one',
        language:0,
    }
  render() {
    const {navigate,title}=this.props;
    const {selectedTab}=this.state;
    return (
        <View style={styles.View}>
            <TabNavigator tabBarStyle={styles.tabBarStyle}>
              <TabNavigator.Item
                tabStyle={{width:0,height:0}}
                selected={this.state.selectedTab === 'one'}
                onPress={() => this.setState({ selectedTab: 'one' })}>
                <PublicWholeNavListQuan title={title} navigate={navigate}/>
              </TabNavigator.Item>
              <TabNavigator.Item
                selected={this.state.selectedTab === '券后价'}
                title="券后价"
                onPress={() => {
                    this.setState({ selectedTab: '券后价' },()=>{
                        NewNavTabPickerStore.PriceDESC=!NewNavTabPickerStore.PriceDESC
                    })
                }}>
                 <PublicWholeNavListPrice title={title} navigate={navigate}/>
              </TabNavigator.Item>
              <TabNavigator.Item
                selected={this.state.selectedTab === '销量'}
                title="销量"
                onPress={() => {
                    this.setState({ selectedTab: '销量' },()=>{
                        NewNavTabPickerStore.SalesDESC=!NewNavTabPickerStore.SalesDESC
                    })
                }}>
                <PublicWholeNavListSales title={title} navigate={navigate}/>
              </TabNavigator.Item>
            </TabNavigator>
            <TouchableOpacity
                onPress={()=>this.setState({ selectedTab: 'one' })}
                style={styles.PickerView}
            >
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={(lang) => {
                        this.setState({
                            language: lang,
                        });
                        NewNavTabPickerStore.Picker=lang;

                        }
                    }
                    style={styles.Picker}
                    mode='dropdown'
                >
                    <Picker.Item label="综合排序" value="0" />
                    <Picker.Item label="优惠券面值由高到低" value="1" />
                    <Picker.Item label="优惠券面值由低到高" value="2" />
                </Picker>
            </TouchableOpacity>

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
        width:'33%',
        position:'absolute',
        top:0,
        left:20,

    },
    Picker:{
        flex:1,
    }
});
