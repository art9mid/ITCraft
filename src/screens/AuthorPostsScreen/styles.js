import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

export default function (theme) {
  return StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: AppStyles.colorSet[theme].mainThemeBackgroundColor,
      padding: 10,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      minHeight: 70,
      padding: 10,
      backgroundColor: AppStyles.colorSet[theme].mainThemeBackgroundColor,
      shadowColor: AppStyles.colorSet[theme].textColor,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginVertical: 5,
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
