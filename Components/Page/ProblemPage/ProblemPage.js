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
 *     2018/3/30.
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
export default class ProblemPage extends PureComponent{
  render() {
    const {state,goBack}=this.props.navigation;
    const {
        Title,
        Content1,
        Content2,
        Content3,
        Content4,
        Content5,
        Content6,
        Content7,
        Content8,
        Content9,
        Content10,
        Content11,
        Content12,
        Content13,
        image,
    }=this.props.navigation.state.params;
    return (
      <ScrollView style={styles.View}>
        <PublicGoBack
            goBack={()=>goBack()}
            title={state.params.title}
        />
        <View
            style={styles.RedView}>
            <View style={styles.Red}>
                <Text style={styles.RedText1}>问</Text>
            </View>
            <Text style={styles.RedText2}>{Title}</Text>
        </View>
          <View style={styles.TextView}>
              <Text style={styles.Text}>{Content1}</Text>
              <Text style={styles.Text}>{Content2}</Text>
              <Text style={styles.Text}>{Content3}</Text>
              <Text style={styles.Text}>{Content4}</Text>
              <Text style={styles.Text}>{Content5}</Text>
              <Text style={styles.Text}>{Content6}</Text>
              <Text style={styles.Text}>{Content7}</Text>
              <Text style={styles.Text}>{Content8}</Text>
              <Text style={styles.Text}>{Content9}</Text>
              <Text style={styles.Text}>{Content10}</Text>
              <Text style={styles.Text}>{Content11}</Text>
              <Text style={styles.Text}>{Content12}</Text>
              <Text style={styles.Text}>{Content13}</Text>
              <Image
                 source={image}
                 style={{width:'100%',height:400,marginBottom:60}}
                 resizeMode='contain'
              />
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        flex:1,
        backgroundColor:'#fff',
        paddingLeft:10,
        paddingRight:10,
    },
    RedView:{
        flexDirection:'row',
        alignItems:'center',

    } ,
    Red:{
        width:15,
        height:15,
        borderRadius:8,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    },
    RedText1:{
        color:'#fff',
        fontSize:10,
    },
    RedText2:{
        marginLeft:10,
        color:'#000'
    },
    TextView:{
        marginTop:10,
    },
    Text:{
        color:'#000',
        lineHeight:30,
    },
    Image:{
        width:100,
        height:600,
    }
});
