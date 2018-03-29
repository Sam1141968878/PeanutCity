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
 *     2018/3/29.
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
  ScrollView
} from 'react-native';


import PublicGoBack from '../../PublicComponent/PublicGoBack'
export default class NovicePage extends PureComponent{
  render() {
    const {state,goBack,navigate}=this.props.navigation;
    return (
      <ScrollView>
        <PublicGoBack
            goBack={()=>goBack()}
            title={state.params.title}
        />
        <Image
            source={require('../../../Icons/BigImage/RookieHelp.jpg')}
            style={{width:'100%',height:3000}}
            resizeMode='contain'
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});
