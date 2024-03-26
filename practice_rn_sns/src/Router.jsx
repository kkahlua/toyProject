import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import Splash from './pages/Splash';
import CustomBottomTab from './components/CustomBottomTab';
import Search from './pages/Search';
import Add from './pages/Add';
import Play from './pages/Play';
import MyPage from './pages/MyPage';
import SearchList from './pages/SearchList';
import Follower from './pages/Follower';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const renderTabBar = props => <CustomBottomTab {...props} />;

const SearchTab = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="SearchList" component={SearchList} />
    </Stack.Navigator>
  );
};

const MainTab = () => {
  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="홈" component={Home} />
      <Tab.Screen name="검색" component={SearchTab} />
      <Tab.Screen name="추가" component={Add} />
      <Tab.Screen name="쇼츠" component={Play} />
      <Tab.Screen name="마이페이지" component={MyPage} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="Follower" component={Follower} />
    </Stack.Navigator>
  );
};

export default Router;
