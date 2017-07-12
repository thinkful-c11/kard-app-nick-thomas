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
    dispatch(fetchKardSuccess(kard[0]));
  }).catch(err => {
    dispatch(fetchKardError(err));
  });
};

export const addItem = (type, content, id) => dispatch => {
  dispatch(fetchKardRequest());
  const newObj = {
    work: {
      type, content
    }
  };
  const data = {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newObj)
  };

  fetch(`/api/kard/update/${id}`, data).then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(kard => {
    dispatch(fetchKardSuccess(kard[0]));
  }).catch(err => {
    dispatch(fetchKardError(err));
  });
};
