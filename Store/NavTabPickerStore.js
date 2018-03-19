/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/3/14.
 */

import {observable,action} from 'mobx';



class NavTabPickerStore {
  // 被观察者
  @observable Picker='综合排序';
  @observable PriceHigh=false;
  @observable SalesHigh=false;
  @observable Quan=true;
  @observable Default=true;

}

let NewNavTabPickerStore=new NavTabPickerStore();
export default NewNavTabPickerStore;
