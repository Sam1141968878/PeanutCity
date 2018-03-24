/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/3/22.
 */

import {observable,action} from 'mobx';



class NavTabPickerStore {
  // 被观察者
  @observable DaTaoKe=false;

}

let NewDaTaoKe=new NavTabPickerStore();
export default NewDaTaoKe;
