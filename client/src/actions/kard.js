export const FETCH_KARD_REQUEST = 'FETCH_KARD_REQUEST';
export const fetchKardRequest = () => ({
  type: FETCH_KARD_REQUEST,
});

export const FETCH_KARD_SUCCESS = 'FETCH_KARD_SUCCESS';
export const fetchKardSuccess = kard => ({
  type: FETCH_KARD_SUCCESS,
  kard
});

export const FETCH_KARD_ERROR = 'FETCH_KARD_ERROR';
export const fetchKardError = error => ({
  type: FETCH_KARD_ERROR,
  error
});

export const fetchKard = () => dispatch => {
  dispatch(fetchKardRequest());
  fetch('/api/kard').then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(kard => {
    console.log(kard);
    dispatch(fetchKardSuccess(kard));
  }).catch(err => {
    dispatch(fetchKardError(err));
  });
};
