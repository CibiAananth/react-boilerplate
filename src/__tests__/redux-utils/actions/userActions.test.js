import * as actions from 'redux-utils/actions';
import * as types from 'redux-utils/types';
import apiModel from 'models/apiModel';
import reducerModel from 'models/reducerModel';

describe('Chart actions', () => {
  it('should create an action to get user profile', () => {
    const action1 = {
      meta: { reducerID: [reducerModel.userProfile.id] },
      payload: {
        dbKey: {
          apiID: apiModel.getUserProfile,
          params: JSON.stringify({}),
        },
        targetAction: types.userTypes.getUserProfile.success,
        requestAction: types.userTypes.getUserProfile.fromAPI,
      },
      type: types.userTypes.getUserProfile.request,
    };
    const action2 = {
      meta: { reducerID: ['rx_user_profile'] },
      payload: {
        dbKey: {
          apiID: 'apv1_get_user_profile',
          params: '{}',
        },
        targetAction: 'GET_USER_PROFILE_SUCCESS',
        requestAction: 'GET_USER_PROFILE_FROM_API',
      },
      type: 'GET_USER_PROFILE_REQUEST',
    };
    expect(actions.userActions.getUserProfileAction({})).toEqual(action1);
    expect(actions.userActions.getUserProfileAction({})).toEqual(action2);
  });

  it('should create an action to get user preferences', () => {
    const action1 = {
      meta: { reducerID: [reducerModel.userProfile.id] },
      payload: {
        dbKey: {
          apiID: apiModel.getUserPrefs,
          params: JSON.stringify({}),
        },
        targetAction: types.userTypes.getUserPreference.success,
        requestAction: types.userTypes.getUserPreference.fromAPI,
      },
      type: types.userTypes.getUserPreference.request,
    };
    const action2 = {
      meta: { reducerID: ['rx_user_profile'] },
      payload: {
        dbKey: {
          apiID: 'apv1_get_user_prefs',
          params: '{}',
        },
        targetAction: 'GET_USER_PREFERENCE_SUCCESS',
        requestAction: 'GET_USER_PREFERENCE_FROM_API',
      },
      type: 'GET_USER_PREFERENCE_REQUEST',
    };
    expect(actions.userActions.getUserPreferenceAction({})).toEqual(action1);
    expect(actions.userActions.getUserPreferenceAction({})).toEqual(action2);
  });

  it('should create an action to save user preferences', () => {
    const action1 = {
      meta: { reducerID: [reducerModel.userProfile.id] },
      payload: {},
      type: types.userTypes.saveUserPreference.request,
    };
    const action2 = {
      meta: { reducerID: ['rx_user_profile'] },
      payload: {},
      type: 'SAVE_USER_PREFERENCE_REQUEST',
    };
    expect(actions.userActions.saveUserPreferenceAction({})).toEqual(action1);
    expect(actions.userActions.saveUserPreferenceAction({})).toEqual(action2);
  });
});
