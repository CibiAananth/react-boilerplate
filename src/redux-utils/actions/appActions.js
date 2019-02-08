import { createAction } from 'redux-starter-kit';
import { networkTypes } from 'redux-utils/types';
import apiModel from 'models/apiModel';
import reducerModel from 'models/reducerModel';

const startWatchNetworkAction = createAction(
  networkTypes.START_WATCH_NETWORK_STATUS,
);

const stopWatchNetworkAction = createAction(
  networkTypes.STOP_WATCH_NETWORK_STATUS,
);

const exampleCacheAction = (
  payload,
  meta = { reducerID: [reducerModel.app.id] },
) => {
  const action = createAction('REQUEST_ACTION')({
    ...payload,
    dbKey: {
      apiID: apiModel.getChartList,
      params: JSON.stringify(
        payload ? (payload.params ? payload.params : {}) : {},
      ),
    },
    targetAction: 'SUCCESS_ACTION',
    requestAction: 'API_REQUEST_ACTION',
  });
  action.meta = meta;
  return action;
};

export { exampleCacheAction, startWatchNetworkAction, stopWatchNetworkAction };
