/* eslint-disable no-undef */
import * as actions from 'redux-utils/actions';
import * as types from 'redux-utils/types';
import apiModel from 'models/apiModel';
import reducerModel from 'models/reducerModel';

describe('Chart actions', () => {
  it('should create an action to get chart data', () => {
    const action1 = {
      meta: { reducerID: [reducerModel.chart.id] },
      payload: {
        dbKey: {
          apiID: apiModel.getChartData,
          params: JSON.stringify({}),
        },
        targetAction: types.chartTypes.getChartData.success,
        requestAction: types.chartTypes.getChartData.fromAPI,
      },
      type: types.chartTypes.getChartData.request,
    };
    const action2 = {
      meta: { reducerID: ['rx_chart'] },
      payload: {
        dbKey: {
          apiID: 'apv1_get_chart_data',
          params: '{}',
        },
        targetAction: 'GET_CHART_DATA_SUCCESS',
        requestAction: 'GET_CHART_DATA_FROM_API',
      },
      type: 'GET_CHART_DATA_REQUEST',
    };
    expect(actions.chartActions.getChartDataAction({})).toEqual(action1);
    expect(actions.chartActions.getChartDataAction({})).toEqual(action2);
  });

  it('should create an action to get chart list', () => {
    const action1 = {
      meta: { reducerID: [reducerModel.app.id, reducerModel.chart.id] },
      payload: {
        dbKey: {
          apiID: apiModel.getChartList,
          params: JSON.stringify({}),
        },
        targetAction: types.chartTypes.getChartList.success,
        requestAction: types.chartTypes.getChartList.fromAPI,
      },
      type: types.chartTypes.getChartList.request,
    };
    const action2 = {
      meta: { reducerID: ['rx_app_state', 'rx_chart'] },
      payload: {
        dbKey: {
          apiID: 'apv1_get_chart_list',
          params: '{}',
        },
        targetAction: 'GET_CHART_LIST_SUCCESS',
        requestAction: 'GET_CHART_LIST_FROM_API',
      },
      type: 'GET_CHART_LIST_REQUEST',
    };
    expect(actions.chartActions.getChartListAction({})).toEqual(action1);
    expect(actions.chartActions.getChartListAction({})).toEqual(action2);
  });
});
