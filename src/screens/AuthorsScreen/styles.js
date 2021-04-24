import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

export default function (theme) {
  return StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: AppStyles.colorSet[theme].mainThemeBackgroundColor,
      paddingHorizontal: 10,
    },
    imageMissing: {
      width: 50,
      height: 50,
      backgroundColor: 'green',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      minHeight: 70,
      backgroundColor: AppStyles.colorSet[theme].mainThemeBackgroundColor,
    },
    itemContent: {
      paddingLeft: 10,
    },
    title: {
      fontSize: 16,
      marginBottom: 5,
      color: AppStyles.colorSet[theme].textColor,
    },
    subTitle: {
      fontSize: 12,
      color: AppStyles.colorSet[theme].gray,
    },
  });
}
