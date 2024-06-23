import { useReducer } from 'react';

interface UserState {
  name: string;
  age: number;
}

type UserAction = { type: 'SET_USER'; payload: UserState };

const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const useUser = (initialState: UserState) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const setUser = (user: UserState) => {
    dispatch({ type: 'SET_USER', payload: user });
  };

  return { user: state, setUser };
};

export default useUser;
