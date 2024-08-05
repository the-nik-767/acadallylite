import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color, responsiveWidth} from '../../constant/theme';

const More = ({navigation}: any) => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text>More</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heart: {
    height: responsiveWidth('25%'),
    width: responsiveWidth('25%'),
    resizeMode: 'contain',
    transform: [{rotate: '340deg'}],
  },
});

export default More;
