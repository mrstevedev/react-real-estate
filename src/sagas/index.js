import { put, takeLatest, delay, call, all } from "redux-saga/effects";
import axios from "axios";

function* fetchListingsAsync() {
  yield delay(1);

  const listings = yield call(() =>
    axios.get(`./homes.json`).then((res) => res.data)
  );
  // console.log(listings)
  yield put({ type: "FETCH_LISTINGS_ASYNC", payload: listings });
}

function* watchFetchListings() {
  yield takeLatest("FETCH_LISTINGS", fetchListingsAsync);
}

function* closeNotificationAsync() {
  yield (document.cookie = "notification_accept=true;");
  yield put({ type: "CLOSE_NOTIFICATION_ASYNC" });
}

function* showNotificationAsync() {
    yield delay(1);
    yield put({ type: 'SHOW_NOTIFICATION_ASYNC', payload: true });
}

function* watchCloseNotification() {
  yield takeLatest("CLOSE_NOTIFICATION", closeNotificationAsync);
}

function* watchShowNotification() {
    yield takeLatest("SHOW_NOTIFICATION", showNotificationAsync);
}

function* filterCityAsync(data) {
  console.log('listings and val in saga', data)
  yield put({ type: 'FILTER_CITY_ASYNC', data });
}
function* watchFilterCity() {
  yield takeLatest('FILTER_CITY', filterCityAsync);
}

function* filterPriceAsync(data) {
  console.log('listings and val in saga', data)

  yield put({ type: 'FILTER_PRICE_ASYNC', data });
}

function* watchFilterPrice() {
  yield takeLatest('FILTER_PRICE', filterPriceAsync);
}

function* filterNumberBedrooms(data) {
  yield put({ type: 'FILTER_NUMBER_BEDROOMS_ASYNC', data });
}

function* watchFilterBedrooms() {
  yield takeLatest('FILTER_NUMBER_BEDROOMS', filterNumberBedrooms);
}

export default function* rootSaga() {
  yield all([
    watchFetchListings(), 
    watchCloseNotification(),
    watchShowNotification(),
    watchFilterCity(),
    watchFilterPrice(),
    watchFilterBedrooms()
]);
}
