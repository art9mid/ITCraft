import {
  CLEAR_SEARCH_DATA,
  GET_USER_POSTS_ACTION_FAILED,
  GET_USER_POSTS_ACTION_STARTED,
  GET_USER_POSTS_ACTION_SUCCESS,
  GET_USERS_ACTION_FAILED,
  GET_USERS_ACTION_STARTED,
  GET_USERS_ACTION_SUCCESS,
  SEARCH_ACTION_FAILED,
  SEARCH_ACTION_STARTED,
  SEARCH_USERS_ACTION_SUCCESS,
  SEARCH_POSTS_ACTION_SUCCESS,
} from '../actions';

const initialState = {
  loading: false,
  users: [],
  posts: [],

  searchResultUser: [],
  searchResultPosts: [],

  errors: false,
};

export const app = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_ACTION_STARTED: {
      return { ...state, loading: true };
    }

    case GET_USERS_ACTION_SUCCESS: {
      return { ...state, users: action.data, loading: false };
    }

    case GET_USERS_ACTION_FAILED: {
      return { ...state, errors: true, loading: false };
    }

    case GET_USER_POSTS_ACTION_STARTED: {
      return { ...state, loading: true };
    }

    case GET_USER_POSTS_ACTION_SUCCESS: {
      return { ...state, posts: action.data, loading: false };
    }

    case GET_USER_POSTS_ACTION_FAILED: {
      return { ...state, errors: true, loading: false };
    }

    case CLEAR_SEARCH_DATA: {
      return { ...state, searchResultUser: [], searchResultPosts: [] };
    }

    case SEARCH_ACTION_STARTED: {
      return { ...state, loading: true };
    }

    case SEARCH_USERS_ACTION_SUCCESS: {
      return { ...state, searchResultUser: [...state.searchResultUser, ...action.data], loading: false };
    }
    case SEARCH_POSTS_ACTION_SUCCESS: {
      return { ...state, searchResultPosts: [...state.searchResultPosts, ...action.data], loading: false };
    }

    case SEARCH_ACTION_FAILED: {
      return { ...state, errors: true, loading: false };
    }
  }

  return state;
};
