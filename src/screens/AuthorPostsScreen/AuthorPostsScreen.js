import React from 'react';
import {
  Text,
  View,
  useColorScheme,
  ActivityIndicator,
  FlatList,
  Pressable,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import dynamicStyles from './styles';
import { AppTextInput } from '../../ui';
import { clearSearchDataThunk, getUserPostsThunk, getUsersThunk, searchByThunk } from '../../redux/thunks/app.thunks';

function AuthorPostsScreen(props) {
  const dispatch = useDispatch();
  const theme = useColorScheme();
  const styles = dynamicStyles(theme);
  const [searchValue, setSearchValue] = React.useState('');

  const loading = useSelector((state) => state.app.loading);
  const posts = useSelector((state) => state.app.posts);
  const searchResult = useSelector((state) => state.app.searchResultPosts);
  const id = props.route?.params?.id;
  const name = props.route?.params?.name;

  React.useEffect(() => {
    props.navigation.addListener('focus', () => {
      dispatch(getUserPostsThunk(id));
    });

    props.navigation.setOptions({
      headerTitle: name + ' Posts',
    });
  }, []);

  React.useEffect(() => {
    if (searchValue.length > 0) {
      dispatch(clearSearchDataThunk());
      dispatch(searchByThunk('posts', 'title', searchValue));
      dispatch(searchByThunk('posts', 'body', searchValue));
    }

    if (!searchValue.length) {
      dispatch(getUsersThunk());
    }
  }, [searchValue]);

  const keyExtractor = ({ id }, index) => id.toString() + index;

  function userPostsListItem({ item }) {
    return (
      <Pressable style={styles.itemContainer}>
        <View style={styles.itemContent}>
          <Text style={styles.title}>{item?.title.slice(0, 20) + '...' + item?.userId}</Text>
          <Text style={styles.subTitle}>{item?.body.slice(0, 150) + '...'}</Text>
        </View>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <AppTextInput value={searchValue} onChange={setSearchValue} placeholder={'Search here...'} />
      {loading ? (<ActivityIndicator color={'#000'} size={100} />) : (
        <FlatList
          contentContainerStyles={{ flex: 1 }}
          maxToRenderPerBatch={20}
          initialNumToRender={10}
          windowSize={10}
          data={!searchResult[0] ? posts : searchResult}
          renderItem={userPostsListItem}
          keyExtractor={keyExtractor}
        />
      )}
    </View>
  );
}

export default AuthorPostsScreen;
