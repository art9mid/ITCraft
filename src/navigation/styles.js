import { StyleSheet } from 'react-native';
import AppStyles from '../AppStyles';

export default function (theme) {
  return StyleSheet.create({
    headerStyle: {
      borderBottomWidth: 0,
      shadowColor: 'transparent',
      shadowOpacity: 0,
      elevation: 0,
    },
    whiteHeaderStyle: {
      borderBottomWidth: 0,
      shadowColor: 'transparent',
      shadowOpacity: 0,
      elevation: 0,
    },
    headerContainer: {
      paddingHorizontal: 20,
      width: '50%',
      backgroundColor: AppStyles.colorSet[theme].mainThemeBackgroundColor,
    },
  });
}
