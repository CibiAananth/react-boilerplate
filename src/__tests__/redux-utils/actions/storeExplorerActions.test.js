import * as actions from 'redux-utils/actions';
import * as types from 'redux-utils/types';
import apiModel from 'models/apiModel';
import reducerModel from 'models/reducerModel';

describe('Chart actions', () => {
  it('should create an action to get shelf images', () => {
    const action1 = {
      meta: { reducerID: [reducerModel.storeExplorer.id] },
      payload: {
        dbKey: {
          apiID: apiModel.getShelfImage,
          params: JSON.stringify({}),
        },
        targetAction: types.storeExplorerTypes.getShelfImage.success,
        requestAction: types.storeExplorerTypes.getShelfImage.fromAPI,
      },
      type: types.storeExplorerTypes.getShelfImage.request,
    };
    const action2 = {
      meta: { reducerID: ['rx_store_explorer'] },
      payload: {
        dbKey: {
          apiID: 'apv1_get_shelf_photos',
          params: '{}',
        },
        targetAction: 'GET_SHELF_IMAGE_SUCCESS',
        requestAction: 'GET_SHELF_IMAGE_FROM_API',
      },
      type: 'GET_SHELF_IMAGE_REQUEST',
    };
    expect(actions.storeExplorerActions.getShelfImageAction({})).toEqual(
      action1,
    );
    expect(actions.storeExplorerActions.getShelfImageAction({})).toEqual(
      action2,
    );
  });

  it('should create an action to get store list', () => {
    const action1 = {
      meta: { reducerID: [reducerModel.app.id, reducerModel.filter.id] },
      payload: {
        dbKey: {
          apiID: apiModel.getCurationStores,
          params: JSON.stringify({}),
        },
        targetAction: types.storeExplorerTypes.getCurationStores.success,
        requestAction: types.storeExplorerTypes.getCurationStores.fromAPI,
      },
      type: types.storeExplorerTypes.getCurationStores.request,
    };
    const action2 = {
      meta: { reducerID: ['rx_app_state', 'rx_filter'] },
      payload: {
        dbKey: {
          apiID: 'apv1_get_curation_stores',
          params: '{}',
        },
        targetAction: 'GET_CURATION_STORES_SUCCESS',
        requestAction: 'GET_CURATION_STORES_FROM_API',
      },
      type: 'GET_CURATION_STORES_REQUEST',
    };
    expect(actions.storeExplorerActions.getCurationStoresAction({})).toEqual(
      action1,
    );
    expect(actions.storeExplorerActions.getCurationStoresAction({})).toEqual(
      action2,
    );
  });
});
