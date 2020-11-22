// Fetch Posts Action
export const fetchPosts = () => {

    return (dispatch, getState) => {

      let headers = {"Content-Type": "application/json"};
      let {token} = getState().auth;
  
      if (token) {
        headers["Authorization"] = `Token ${token}`;
      }
  
      return fetch("/api/posts/", {headers, })
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

          if (res.status === 200)
            return dispatch({type: 'FETCH_POSTS', posts: res.data});
          else if (res.status === 401 || res.status === 403) {
            dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
            throw res.data;
          }

        })
    }
}
  
// Add Post Action
export const addPost = (title, content, image, author_name_id, is_approved=false) => {

  return (dispatch, getState) => {
    let newObject = new FormData();
    newObject.append('title',title);
    newObject.append('content', content);
    newObject.append('image',image);
    newObject.append('user', author_name_id);
    let headers = {};
    let {token} = getState().auth;

    if (token)
      headers["Authorization"] = `Token ${token}`;
   
    return fetch("/api/posts/", {headers, method: "POST", body: newObject})
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
              return dispatch({type: 'ADD_POST', post: res.data});
            } else if (res.status === 401 || res.status === 403) {
              dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
              throw res.data;
            }

          })
    }
}

// Update Post Action
export const updatePost = (index, text) => {
  
  return (dispatch, getState) => {

    let headers = {"Content-Type": "application/json"};
    let {token} = getState().auth;

    if (token)
      headers["Authorization"] = `Token ${token}`;

    let body = JSON.stringify({text, });
    let postId = getState().notes[index].id;

    // Update Post
    return fetch(`/api/posts/${postId}/`, {headers, method: "PUT", body})
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

            if (res.status === 200)
              return dispatch({type: 'UPDATE_POST', post: res.data, index});
            else if (res.status === 401 || res.status === 403) {
              dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
              throw res.data;
            }

          })
    }
}

// Delete Post Action
export const deletePost = index => {
  
  return (dispatch, getState) => {

    let headers = {"Content-Type": "application/json"};
    let {token} = getState().auth;

    if (token)
      headers["Authorization"] = `Token ${token}`;

    let postId = getState().posts[index].id;

    // Delete Post
    return fetch(`/api/notes/${postId}/`, {headers, method: "DELETE"})
          .then(res => {

            if (res.status === 204)
              return {status: res.status, data: {}};
            else if (res.status < 500) {
              return res.json().then(data => {
                return {status: res.status, data};
              })
            } else {
              console.log("Server Error!");
              throw res;
            }

          })
          .then(res => {

            if (res.status === 204)
              return dispatch({type: 'DELETE_POST', index});
            else if (res.status === 401 || res.status === 403) {
              dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
              throw res.data;
            }

          })
    }
}