import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'saas',
      storage,
      whitelist: ['auth', 'user', 'team'],
    },
    reducers
  );

  return persistedReducer;
};
