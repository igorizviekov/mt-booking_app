import { put, takeEvery, call } from 'redux-saga/effects';
import { addToStory } from '../reducers/geocodingReducer';
import {
  GeocodingActionTypes,
  IGeocodingItem,
} from '../types/geocodingReducer.types.d';

const getAddressByRequest = async (): Promise<IGeocodingItem> => {
  const hrefParts = window.location.href.split('/');
  const searchString = hrefParts[hrefParts.length - 1];
  const URL = 'https://geocode.maps.co/search?q=' + searchString;

  const request = await fetch(URL);
  const response: Array<IGeocodingItem> = await request.json();

  return response[0];
};

function* addWorker(): Generator {
  try {
    const data: any = yield call(getAddressByRequest);
    yield put(addToStory(data));
  } catch (err) {
    return null;
  }
}

export function* storyWatcher() {
  yield takeEvery(GeocodingActionTypes.FETCH_STORY, addWorker);
}
