import SecureLS from 'secure-ls';

const secureLs = new SecureLS({
  encodingType: 'aes',
  isCompression: true,
  encryptionSecret: process.env.REACT_ENCKEY,
});

function storageFactory() {
  let inMemoryStorage = {};

  function isSupported() {
    try {
      const testKey = '__some_random_key_you_are_not_going_to_use__';
      secureLs.set(testKey, testKey);
      secureLs.remove(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  function clear() {
    if (isSupported()) {
      secureLs.clear();
    } else {
      inMemoryStorage = {};
    }
  }

  function get(name) {
    if (isSupported()) {
      return secureLs.get(name) || null;
    }
    if (inMemoryStorage[name] !== undefined || inMemoryStorage[name] !== null) {
      return inMemoryStorage[name];
    }
    return null;
  }

  function key(index) {
    if (isSupported()) {
      return secureLs.getAllKeys()[index] || null;
    }
    return Object.keys(inMemoryStorage)[index] || null;
  }

  function remove(name) {
    if (isSupported()) {
      secureLs.remove(name);
    } else {
      delete inMemoryStorage[name];
    }
  }

  function set(name, value) {
    if (isSupported()) {
      secureLs.set(name, value);
    } else {
      inMemoryStorage[name] = String(value); // not everyone uses TypeScript
    }
  }

  function length() {
    if (isSupported()) {
      return secureLs.getAllKeys().length || 0;
    }
    return Object.keys(inMemoryStorage).length;
  }

  return {
    get,
    set,
    remove,
    isSupported,
    clear,
    key,
    get length() {
      return length();
    },
  };
}

const ls = storageFactory();

export default ls;
