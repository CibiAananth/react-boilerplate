import * as dexie from '__mocks__/dexie';

describe('Cache middleware', () => {
  it('should create a mock db', () => {
    // dexie.openDB();
    const callback = jest.fn((val) => {
      console.log('vaal', val);
      return 'mock';
    });
    const dbValue = { apiID: 'test', params: '{}' };

    const writeToDB = jest.spyOn(dexie, 'writeToDB');
    // writeToDB.mockImplementation(() => 'mock');
    // expect(dexie.writeToDB(dbValue, 2)).toEqual('mock');

    // writeToDB.mockRestore();
    expect(dexie.writeToDB(dbValue, callback));
    expect(writeToDB).toHaveBeenCalledTimes(1);
    expect(writeToDB).toHaveBeenCalledWith(dbValue, callback);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
