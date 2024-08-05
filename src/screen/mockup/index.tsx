import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
// import { icons } from "../assets";
// import { Button } from "../components";
import {
  color,
  fontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../constant/theme';
import {Button} from '../../components';
import {icons} from '../../assets';

const Mockup = ({navigation}: any) => {
  return (
    <View style={{flex: 1, backgroundColor: color.green}}>
      <View style={{backgroundColor: color.white}}>
        <View style={styles.maintop}>
          {/* <Image style={styles.heart} source={icons.heart2} /> */}
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.titleText}>Acadally Lite</Text>
        <Text style={styles.subtitleText}>
          {
            'Learning new skills has never been easier. \n  With our app, you can take courses online, \n  anytime and anywhere, and boost your knowledge!'
          }
        </Text>

        <View style={{flex: 1}} />

        <Button
          title={'Login'}
          onPress={() => {
            navigation.navigate('Home');
          }}
        />

        <Button
          title={'Sign Up'}
          onPress={() => {
            navigation.navigate('SignupTabs');
          }}
          buttonContainer={{
            backgroundColor: color.white,
            marginBottom: responsiveWidth('5%'),
          }}
          titleStyle={{color: color.green}}
        />
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  heart: {
    height: responsiveWidth('25%'),
    width: responsiveWidth('25%'),
    resizeMode: 'contain',
    transform: [{rotate: '340deg'}],
  },
  maintop: {
    backgroundColor: color.green,
    height: responsiveHeight('35%'),
    borderBottomLeftRadius: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    paddingTop: responsiveWidth('15%'),
    flex: 1,
    backgroundColor: color.white,
    borderTopRightRadius: 80,
    paddingHorizontal: responsiveWidth('5%'),
  },
  titleText: {
    fontSize: fontSize.large,
    fontWeight: '800',
    alignSelf: 'center',
    color: color.black,
  },
  subtitleText: {
    fontSize: fontSize.mini,
    marginVertical: responsiveWidth('7%'),
    textAlign: 'center',
    color: color.black,
    fontWeight: '500',
    lineHeight: 22,
  },
  buttonContainer: {
    padding: responsiveWidth('4%'),
    backgroundColor: color.green,
    alignItems: 'center',
    borderRadius: 40,
    marginHorizontal: responsiveWidth('5%'),
    marginVertical: responsiveWidth('2%'),
    borderWidth: 1,
    borderColor: color.green,
  },
});

export default Mockup;
