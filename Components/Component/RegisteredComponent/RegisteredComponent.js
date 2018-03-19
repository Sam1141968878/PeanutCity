/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/3/19.
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
export default class RegisteredComponent extends PureComponent{
  render() {
    const {state,goBack}=this.props.navigation;
    return (
      <View>
          <PublicGoBack
              goBack={()=>goBack()}
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
    DownText1:{
        textDecorationLine:'underline'
    },
});
