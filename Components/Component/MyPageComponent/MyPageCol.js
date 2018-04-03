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
 *     2018/3/12.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
  TouchableOpacity,
} from 'react-native';


import MyPageAnnouncement from './MyPageAnnouncement'
import MyPageOpinion from './MyPageOpinion'
import MyPageAbout from './MyPageAbout'
export default class MyPageCol extends PureComponent{
  render() {
    const {navigate}=this.props;
    return (
      <View>
          {
            this.props.Landing
            ?
            <View  style={styles.View}>
                <MyPageAnnouncement  GoTo={'AnnouncementPageList'} navigate={navigate}/>
                <MyPageOpinion  GoTo={'OpinionPage'} navigate={navigate}/>
                <MyPageAbout  GoTo={'AboutPage'} navigate={navigate}/>
            </View>
            :
            <View  style={styles.View}>
                <MyPageAnnouncement  GoTo={'LandingPage'} navigate={navigate}/>
                <MyPageOpinion  GoTo={'LandingPage'} navigate={navigate}/>
                <MyPageAbout  GoTo={'LandingPage'} navigate={navigate}/>
            </View>
          }

      </View>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        marginTop:5,
    }
});
