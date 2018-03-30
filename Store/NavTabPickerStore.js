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

}

let NewNavTabPickerStore=new NavTabPickerStore();
export default NewNavTabPickerStore;
