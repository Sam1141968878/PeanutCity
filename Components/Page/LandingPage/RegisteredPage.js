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
 *     2018/3/19.
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
import { Container, Content,Form,Label, Item, Input, Icon } from 'native-base';


import PublicGoBack from '../../PublicComponent/PublicGoBack'
export default class RegisteredPage extends PureComponent{
  render() {
    const {state,goBack}=this.props.navigation;
    return (
      <Container
          style={styles.View}>
        <PublicGoBack
            goBack={()=>goBack()}
            title={state.params.title}
        />
        <Content style={styles.SmallView}>
            <Form>
                <Item floatingLabel>
                    <Label><Text style={styles.LabelText}>请输入手机号</Text> </Label>
                    <Icon active name='ios-phone-portrait' />
                    <Input keyboardType='numeric' maxLength={11}/>
                </Item>
                <Item floatingLabel>
                    <Label><Text style={styles.LabelText}>请输入邀请码</Text> </Label>
                    <Icon active name='md-person-add' style={styles.Icon2}/>
                    <Input autoCapitalize='none'/>
                    </Item>
                <Item floatingLabel>
                    <Label><Text style={styles.LabelText}>请输入验证码</Text> </Label>
                    <Icon active name='ios-unlock' />
                    <Input
                        keyboardType='numeric'
                        autoCapitalize='none'
                    />
                </Item>
                <Item floatingLabel>
                    <Icon active name='key'/>
                    <Label><Text style={styles.LabelText}>请输入6~32位密码</Text> </Label>
                    <Input
                        maxLength={32}
                        secureTextEntry={true}
                        autoCapitalize='none'
                    />
                </Item>
            </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        flex:1,
        backgroundColor:'#FFF'
    },
    SmallView:{
        marginLeft:40,
        marginRight:40,
        marginTop:30,
        height:350,
    },
    Icon2:{
        marginLeft:-5,
    },
    LabelText:{
        fontSize:14,
        color:'gray',
    }
});
