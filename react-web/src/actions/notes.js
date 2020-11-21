export const fetchNotes = () => {
    return (dispatch, getState) => {
        let headers = {"Content-Type": "application/json"};
        let {token} = getState().auth;
        if(token){
            headers["Authorization"] = `Token ${token}`;
        }
        return fetch("/api/notes/", {headers}).then(res=>{
            if (res.status < 500) {
                return res.json().then(data => {
                  return {status: res.status, data};
                })
              } else {
                console.log("Server Error!");
                throw res;
              }
        }).then(res=>{
            if (res.status === 200){
            return dispatch({type: 'FETCH_NOTES', notes: res.data});
        }
          else if (res.status === 401 || res.status === 403) {
            dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
            throw res.data;
          }
        })
    }
}
export const addNote = (title, pdf) => {

  return (dispatch, getState) => {

    let headers = {"Content-Type": "application/json"};
    let {token} = getState().auth;

    if (token)
      headers["Authorization"] = `Token ${token}`;

    let body = JSON.stringify({title,pdf});
    return fetch("/api/notes/", {headers, method: "POST", body})
          .then(res => {

            if (res.status < 500) {
              return res.json().then(data => {
                return {status: res.status, data};
              })
            } else {
              console.log("Server Error!");
              throw res;
            }

          })
          .then(res => {

            if (res.status === 201) {
              return dispatch({type: 'ADD_NOTE', notes: res.data});
            } else if (res.status === 401 || res.status === 403) {
              dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
              throw res.data;
            }

          })
    }
}