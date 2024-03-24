import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    handleAppVersionCheckLogic();
  }, []);

  const handleAppVersionCheckLogic = async () => {
    setTimeout(() => {
      navigation.replace('MainTab');
    }, 2000);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;
