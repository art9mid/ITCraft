import React from 'react';
import {
  Text,
  View,
  useColorScheme,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import dynamicStyles from './styles';
import { AppTextInput } from '../../ui';
import { clearSearchDataThunk, getUsersThunk, searchByThunk } from '../../redux/thunks/app.thunks';

function AuthorsScreen(props) {
  const dispatch = useDispatch();
  const theme = useColorScheme();
  const styles = dynamicStyles(theme);
  const [searchValue, setSearchValue] = React.useState('');

  const loading = useSelector((state) => state.app.loading);
  const users = useSelector((state) => state.app.users);
  const searchResult = useSelector((state) => state.app.searchResultUser);

  React.useEffect(() => {
    props.navigation.addListener('focus', () => {
      dispatch(getUsersThunk());
    });
  }, []);

  React.useEffect(() => {
    if (searchValue.length > 0) {
      dispatch(clearSearchDataThunk());
      dispatch(searchByThunk('users', 'name', searchValue));
      dispatch(searchByThunk('users', 'email', searchValue));
    }

    if (!searchValue.length) {
      dispatch(getUsersThunk());
    }
  }, [searchValue]);

  function userCardListItem({ item }) {
    const goToPosts = () => props.navigation.navigate('MainStack', {
      screen: 'AuthorPostsScreen',
      params: { id: item.id, name: item.name },
    });

    return (
      <TouchableOpacity style={styles.itemContainer} onPress={goToPosts}>
        <View style={styles.imageMissing}>
          <Text>{item?.name?.split(' ').map((item) => item[0].toUpperCase()).join('')}</Text>
        </View>
        <View style={styles.itemContent}>
          <Text style={styles.title}>{item?.name}</Text>
          <Text style={styles.subTitle}>{item?.email}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  const keyExtractor = ({ id }, index) => id.toString() + index;

  return (
    <View style={styles.container}>
      <AppTextInput value={searchValue} onChange={setSearchValue} placeholder={'Search here'} />
      {loading ? (<ActivityIndicator color={'#000'} size={100} />) : (
        <FlatList
          contentContainerStyles={{ flex: 1 }}
          maxToRenderPerBatch={20}
          initialNumToRender={10}
          windowSize={10}
          data={!searchResult[0] ? users : searchResult}
          renderItem={userCardListItem}
          keyExtractor={keyExtractor}
        />
      )}
    </View>
  );
}

export default AuthorsScreen;
