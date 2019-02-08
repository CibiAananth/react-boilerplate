/* eslint-disable no-undef */
import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ConnectedDeviceMonitor, { DeviceMonitor } from '../utils/device/DeviceMonitor';
import detectDevice from '../utils/device/Device';

describe('DeviceMonitor Component', () => {
  // eslint-disable-next-line no-unused-vars
  let wrapper;
  // our mock dispatch function to replace the one provided by connect()
  const mockDispatchfn = jest.fn();
  const t = jest.fn();

  beforeEach(() => {
    // pass the mock function as the dispatch prop
    wrapper = shallow(<DeviceMonitor dispatch={mockDispatchfn} t={t} />);
  });

  describe('When the window is resized', () => {
    it('should call the mock dispatch function', () => {
      window.resizeTo(1000, 1000);
      expect(mockDispatchfn.mock.calls[0][0]).toEqual({
        type: 'DEVICE_CHANGE',
        payload: detectDevice(),
      });
      window.resizeTo(200, 1000);
      expect(mockDispatchfn.mock.calls[1][0]).toEqual({
        type: 'DEVICE_CHANGE',
        payload: detectDevice(),
      });
    });
  });

  describe('i18n localization', () => {
    it('test render of named export', () => {
      const mounted = shallow(
        <DeviceMonitor dispatch={mockDispatchfn} t={() => 'translate hardcoded'} />,
      );
      expect(mounted.contains(<div>translate hardcoded</div>)).toBe(true);
    });

    // create any initial state needed
    const initialState = {
      deviceMode: {
        device: detectDevice(),
      },
    };

    // here it is possible to pass in any middleware if needed into //configureStore
    const mockStore = configureStore();
    let store;
    let i18nText;

    beforeEach(() => {
      // creates the store with any initial state or middleware needed
      store = mockStore(initialState);
      const connectedMount = mount(
        <Provider store={store}>
          <ConnectedDeviceMonitor />
        </Provider>,
      );
      i18nText = connectedMount.contains(<div>titles.homePage</div>);
    });

    it('test render of component inside hoc (default export)', () => {
      expect(i18nText).toBe(true);
    });
  });
});
