/* eslint-disable no-undef */
import * as actions from 'redux-utils/actions';
import * as types from 'redux-utils/types';
import apiModel from 'models/apiModel';
import reducerModel from 'models/reducerModel';

describe('App actions', () => {
  it('should create an action to pin charts to dashboard', () => {
    const action1 = {
      meta: { reducerID: [reducerModel.chart.id] },
      payload: {
        cacheRequest: false,
        dbKey: {
          apiID: apiModel.pinToDashboard,
          params: JSON.stringify({}),
        },
        targetAction: types.appTypes.pinToDashboard.success,
        requestAction: types.appTypes.pinToDashboard.fromAPI,
      },
      type: types.appTypes.pinToDashboard.request,
    };
    const action2 = {
      meta: { reducerID: ['rx_chart'] },
      payload: {
        cacheRequest: false,
        params: { chart_name: 'ch-share-of-shelf-brand-overview' },
        dbKey: {
          apiID: 'api_v1_pin_chart',
          params: '{"chart_name":"ch-share-of-shelf-brand-overview"}',
        },
        targetAction: 'PIN_TO_DASHBOARD_SUCCESS',
        requestAction: 'PIN_TO_DASHBOARD_FROM_API',
      },
      type: 'PIN_TO_DASHBOARD_REQUEST',
    };
    expect(actions.appActions.pinToDashboardAction()).toEqual(action1);
    expect(
      actions.appActions.pinToDashboardAction({
        params: { chart_name: 'ch-share-of-shelf-brand-overview' },
      }),
    ).toEqual(action2);
  });

  it('should create an action to unpin charts from dashboard', () => {
    const action1 = {
      meta: { reducerID: [reducerModel.chart.id] },
      payload: {
        cacheRequest: false,
        dbKey: {
          apiID: apiModel.unPinFromDashboard,
          params: JSON.stringify({}),
        },
        targetAction: types.appTypes.unPinFromDashboard.success,
        requestAction: types.appTypes.unPinFromDashboard.fromAPI,
      },
      type: types.appTypes.unPinFromDashboard.request,
    };
    const action2 = {
      meta: { reducerID: ['rx_chart'] },
      payload: {
        cacheRequest: false,
        params: { chart_name: 'ch-share-of-shelf-brand-overview' },
        dbKey: {
          apiID: 'api_v1_unpin_chart',
          params: '{"chart_name":"ch-share-of-shelf-brand-overview"}',
        },
        targetAction: 'UNPIN_FROM_DASHBOARD_SUCCESS',
        requestAction: 'UNPIN_FROM_DASHBOARD_FROM_API',
      },
      type: 'UNPIN_FROM_DASHBOARD_REQUEST',
    };
    expect(actions.appActions.unPinFromDashboardAction()).toEqual(action1);
    expect(
      actions.appActions.unPinFromDashboardAction({
        params: { chart_name: 'ch-share-of-shelf-brand-overview' },
      }),
    ).toEqual(action2);
  });

  it('should create an action to get app layout', () => {
    const action1 = {
      meta: { reducerID: [reducerModel.layout.id] },
      payload: {
        dbKey: {
          apiID: apiModel.getLayoutList,
          params: JSON.stringify({}),
        },
        targetAction: types.appTypes.getLayout.success,
        requestAction: types.appTypes.getLayout.fromAPI,
      },
      type: types.appTypes.getLayout.request,
    };
    const action2 = {
      meta: { reducerID: ['rx_layout'] },
      payload: {
        dbKey: {
          apiID: 'apv1_get_layout_list',
          params: '{}',
        },
        targetAction: 'GET_LAYOUT_SUCCESS',
        requestAction: 'GET_LAYOUT_FROM_API',
      },
      type: 'GET_LAYOUT_REQUEST',
    };
    expect(actions.appActions.layoutRequestAction()).toEqual(action1);
    expect(actions.appActions.layoutRequestAction()).toEqual(action2);
  });

  it('should create an action to get filter list', () => {
    const action1 = {
      meta: { reducerID: [reducerModel.filter.id] },
      payload: {
        cacheRequest: false,
        dbKey: {
          apiID: apiModel.getFilterList,
          params: JSON.stringify({}),
        },
        targetAction: types.appTypes.getFilterList.success,
        requestAction: types.appTypes.getFilterList.fromAPI,
      },
      type: types.appTypes.getFilterList.request,
    };
    const action2 = {
      meta: { reducerID: ['rx_filter'] },
      payload: {
        cacheRequest: false,
        dbKey: {
          apiID: 'apv1_get_filter_list',
          params: '{}',
        },
        targetAction: 'GET_FILTER_LIST_SUCCESS',
        requestAction: 'GET_FILTER_LIST_FROM_API',
      },
      type: 'GET_FILTER_LIST_REQUEST',
    };
    expect(actions.appActions.getFilterListAction()).toEqual(action1);
    expect(actions.appActions.getFilterListAction()).toEqual(action2);
  });

  it('should create an action to notify filter change', () => {
    const action1 = {
      meta: { reducerID: [reducerModel.app.id, reducerModel.storeExplorer.id] },
      payload: {},
      type: types.appTypes.filterChange,
    };
    const action2 = {
      meta: { reducerID: ['rx_app_state', 'rx_store_explorer'] },
      payload: {},
      type: 'PAGE_FILTER_CHANGE_NOTIFICATION',
    };
    expect(actions.appActions.filterChangeAction({})).toEqual(action1);
    expect(actions.appActions.filterChangeAction({})).toEqual(action2);
  });

  it('should create an action to clear the filter preferences', () => {
    const action1 = {
      meta: { reducerID: [reducerModel.app.id, reducerModel.storeExplorer.id] },
      payload: {},
      type: types.appTypes.clearFilter,
    };
    const action2 = {
      meta: { reducerID: ['rx_app_state', 'rx_store_explorer'] },
      payload: {},
      type: 'CLEAR_FILTER_LIST',
    };
    expect(actions.appActions.clearFilterList({})).toEqual(action1);
    expect(actions.appActions.clearFilterList({})).toEqual(action2);
  });

  it('should create an action to notify the route change', () => {
    const action1 = {
      type: types.appTypes.routeChange,
    };
    const action2 = {
      type: 'APP_ROUTE_CHANGE',
    };
    expect(actions.appActions.routeChangeAction()).toEqual(action1);
    expect(actions.appActions.routeChangeAction()).toEqual(action2);
  });

  it('should create an action to start network monitor', () => {
    const action1 = {
      type: types.networkTypes.START_WATCH_NETWORK_STATUS,
    };
    const action2 = {
      type: '@@saga-network-status/START_WATCH_NETWORK_STATUS',
    };
    expect(actions.appActions.startWatchNetworkAction()).toEqual(action1);
    expect(actions.appActions.startWatchNetworkAction()).toEqual(action2);
  });

  it('should create an action to stop network monitor', () => {
    const action1 = {
      type: types.networkTypes.STOP_WATCH_NETWORK_STATUS,
    };
    const action2 = {
      type: '@@saga-network-status/STOP_WATCH_NETWORK_STATUS',
    };
    expect(actions.appActions.stopWatchNetworkAction()).toEqual(action1);
    expect(actions.appActions.stopWatchNetworkAction()).toEqual(action2);
  });
});
