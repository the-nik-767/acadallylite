import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Mockup from '../screen/mockup';
import Home from '../screen/home';
import { SignupTabs } from './SignupTabs';
import { Image, StyleSheet, Text, View } from 'react-native';
import { color, responsiveHeight, responsiveWidth } from '../constant/theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Science from '../screen/subject/science';
import { icons } from '../assets';
import Math from '../screen/subject/math';
import More from '../screen/subject/more';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Mockup" component={Mockup} />
        <Stack.Screen name="Home" component={MyTabs} />
        {/* <Stack.Screen name="Home" component={SignupTabs} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          bottom: 20,
          left: responsiveWidth('7%'),
          right: responsiveWidth('7%'),
          position: 'absolute',
          borderRadius: 10,
          backgroundColor: color.white,
          height: responsiveWidth('17.5%'),
          ...style.shadow,
          // borderWidth:1,
          borderColor: 'gray',
          paddingBottom: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={icons.ic_home}
                resizeMode="contain"
                style={{
                  height: responsiveHeight('5%'),
                  width: responsiveWidth('5%'),
                  margin: responsiveWidth('-1.5%'),
                  tintColor: focused ? color.green : color.gray,
                }}
              />
              <Text style={{color: focused ? color.green : color.gray}}>
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Science"
        component={Science}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={icons.ic_book}
                resizeMode="contain"
                style={{
                  height: responsiveHeight('5%'),
                  width: responsiveWidth('5%'),
                  margin: responsiveWidth('-1.5%'),
                  tintColor: focused ? color.green : color.gray,
                }}
              />
              <Text style={{color: focused ? color.green : color.gray}}>
                Subject
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Math"
        component={Math}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={icons.ic_graph}
                resizeMode="contain"
                style={{
                  height: responsiveHeight('5%'),
                  width: responsiveWidth('5%'),
                  margin: responsiveWidth('-1.5%'),
                  tintColor: focused ? color.green : color.gray,
                }}
              />
              <Text style={{color: focused ? color.green : color.gray}}>
                Progress
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={icons.ic_more}
                resizeMode="contain"
                style={{
                  height: responsiveHeight('5%'),
                  width: responsiveWidth('5%'),
                  margin: responsiveWidth('-1.5%'),
                  tintColor: focused ? color.green : color.gray,
                }}
              />
              <Text style={{color: focused ? color.green : color.gray}}>
                More
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}


const style = StyleSheet.create({
  shadow: {
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default MainNavigator;
