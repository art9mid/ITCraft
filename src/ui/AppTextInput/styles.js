import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

export default function (theme) {
  const inputTextField = {
    textAlignVertical: 'center',
    borderWidth: 0,
    backgroundColor: 'rgba(59,35,39,0.10)',
    paddingHorizontal: 22,
    color: '#212121',
    width: '100%',
    minHeight: 55,
    maxHeight: 300,
    fontSize: 15,
    marginVertical: 7,
    borderRadius: 5,
    textAlign: 'left', //rtl
  };

  return StyleSheet.create({
    inputErrorContainer: {
      ...inputTextField,
      borderColor: AppStyles.colorSet[theme].red,
    },
    inputContainer: {
      ...inputTextField,
      borderColor: AppStyles.colorSet[theme].grey1,
    },
  });
}
