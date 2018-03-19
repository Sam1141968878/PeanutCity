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
 *     2018/3/8.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
  Picker,
} from 'react-native';


import PublicGoBack from '../../PublicComponent/PublicGoBack'
import PublicGoodsTab from '../../PublicComponent/PublicGoodsTab/PublicGoodsTab'
import {
    Container,
    Content
} from 'native-base';

export default class NavBannerDetailPage extends PureComponent{

  render() {
    const {state,goBack,navigate}=this.props.navigation
    return (
        <Container>
            <PublicGoBack
                goBack={()=>goBack()}
                title={state.params.NavTitle}
            />
            <PublicGoodsTab navigate={navigate}/>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
});
