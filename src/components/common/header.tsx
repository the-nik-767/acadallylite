import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleProp,
  ImageStyle,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {icons} from '../../assets';
import {color, fontSize, responsiveWidth} from '../../constant/theme';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  arrowStyle?: StyleProp<ImageStyle>;
  rightContainer?: React.ReactNode;
  textcontainermiddal?: StyleProp<TextStyle>;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showBack,
  arrowStyle,
  rightContainer,
  textcontainermiddal,
}) => {
  const navigation = useNavigation();

  return (
    // <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.profile}>
          <Image style={styles.profileImage} source={icons.ic_profile} />
          <View >
            <Text style={styles.profileName}>KESAR</Text>
            <Text style={styles.profileDesc}>DPS Tapi</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notification}>
          <Image source={icons.ic_ball} style={styles.notificationImage} />
        </TouchableOpacity>
      </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: color.green,
    paddingTop: responsiveWidth('20'),
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    fontSize: fontSize.medium,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileDesc: {
    color: '#fff',
    fontSize: fontSize.regular,
    fontWeight: '300',
  },
  notification: {
    padding: 8,
  },
  notificationImage: {
    width: 24,
    height: 24,
  },
});

export default Header;
