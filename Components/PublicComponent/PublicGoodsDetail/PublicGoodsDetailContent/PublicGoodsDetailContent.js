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
 *     2018/3/15.
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
  FlatList,
} from 'react-native';




export default class PublicGoodsDetailContent extends PureComponent{
    state={
        display:false,
    }
  render() {
    const {display}=this.state;
    return (
      <View style={styles.View}>
          <View style={styles.TextView}>
              <View>
               <Text style={styles.Text}>查看宝贝详情</Text>
              </View>
              <TouchableOpacity
                  style={styles.ImgView}
                  onPress={()=>this.setState({
                      display:!display
                    })
                  }
                  >
                  {display ?
                   <Image
                       source={require('../../../../Icons/DownArrow.png')}
                       style={styles.Img}
                   /> :
                   <Image
                       source={require('../../../../Icons/UpArrow.png')}
                       style={styles.Img}
                   />
                  }
              </TouchableOpacity>
          </View>
          {
            display
            ?
            <View>
                {
                    this.props.Description.map((item,index)=>
                    <Image
                        source={{uri:item.img}}
                        style={{
                            width:'98%',
                            height:item.height*0.45,
                            marginLeft:3,
                        }}
                        resizeMode='contain'
                    />
                    )
                }
            </View>
            :
              <View></View>
          }

      </View>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        flex:1
    },
    TextView:{
        height:40,
        width:'100%',
        flexDirection:'row',
        alignItems:'center'
    },
    Text:{
        fontSize:15,
        color:'#000',
        marginLeft:20,
    },
    ImgView:{
        width:25,
        height:30,
        position:'absolute',
        right:10,
    },
    Img:{
        width:25,
        height:30,
    },
});
