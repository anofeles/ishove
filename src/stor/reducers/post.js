import { LOAD_POSTS } from '../type';

const initiakState = {
  allPosts: [],
  loading: true
};

export const postReducer = (state = initiakState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
