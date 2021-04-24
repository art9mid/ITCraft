import React from 'react';
import { useColorScheme } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthorPostsScreen, AuthorsScreen } from '../screens';
import dynamicStyles from './styles';

const MainStack = createStackNavigator();

export function MainStackNavigation() {
  const them = useColorScheme();
  const styles = dynamicStyles(them);

  const defaultOptions = (title) => {
    return {
      headerTitle: title || null,
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.titleStyle,
      headerRightContainerStyle: styles.headerContainer,
      headerLeftContainerStyle: styles.headerContainer,
    };
  };

  return (
    <MainStack.Navigator initialRouteName={'AuthorsScreen'}>
      <MainStack.Screen
        name="AuthorsScreen"
        component={AuthorsScreen}
        options={defaultOptions('Authors')}
      />
      <MainStack.Screen
        name="AuthorPostsScreen"
        component={AuthorPostsScreen}
        options={{title: null}}
      />
    </MainStack.Navigator>
  );
}
