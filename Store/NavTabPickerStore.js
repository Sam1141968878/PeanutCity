/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/3/14.
 */

import {observable,action} from 'mobx';



class NavTabPickerStore {
  // 被观察者
  @observable Picker=0;
  @observable PriceDESC=true;
  @observable SalesDESC=true;
  @observable Landing=false;
  @observable WxBind=false;
  @observable PassWord='';
  @observable Phone='';
  @observable Code='';
  @observable Name='';
  @observable Sex='';
  @observable Province='';
  @observable City='';
  @observable Headimgurl='';
}

let NewNavTabPickerStore=new NavTabPickerStore();
export default NewNavTabPickerStore;
