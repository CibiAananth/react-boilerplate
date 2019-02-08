const types = {
  store: {
    request: 'STORE_CACHE_IN_DB_REQUEST',
    error: 'STORE_CACHE_IN_DB_ERROR',
  },
  set: {
    request: 'APPEND_CACHED_DATA_TO_STATE',
  },
  cacheable: ['REQUEST_ACTION'],
};

export default types;
