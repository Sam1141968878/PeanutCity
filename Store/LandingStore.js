/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/4/2.
 */

import {observable,action} from 'mobx';


class LandingStore {
  // 被观察者
  @observable phone='';
}

let NewLandingStore=new LandingStore();
export default NewLandingStore;
