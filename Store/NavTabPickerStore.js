/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/3/14.
 */

import {observable,action} from 'mobx';



class NavTabPickerStore {
  // 被观察者
  @observable Picker=1;
  @observable PriceHigh=false;
  @observable SalesHigh=false;
  @observable QuanHigh=false;
  @observable QuanLow=false;
  @observable Default=false;

}

let NewNavTabPickerStore=new NavTabPickerStore();
export default NewNavTabPickerStore;
