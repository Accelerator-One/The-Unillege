export const addPost = text => {
    return dispatch => {
        let headers = {"Content-Type": "application/json"};
        let body = JSON.stringify({text});
        return fetch("api/posts/", {headers, method: "POST", body}).then(res=>res.json()).then(post=>{
            return dispatch({
                type: 'ADD_POST',
                post
            })
        })
    }
}

export const updatePost = (id, text) => {
    return (dispatch, getState) => {
        let headers = {"Content-Type":"application/json"};
        let body = JSON.stringify({text});
        let postID = getState().posts[id].id;
        return fetch(`/api/posts/${postID}/`, {headers, method: "PUT", body}).then(res=>res.json()).then(post=>{
            return dispatch({
                type:'UPDATE_POST',
                post,
                id
            })
        })
    }
}
export const deletePost = id => {
    return (dispatch, getState) => {
        let headers = {"Content-Type":"application/json"};
        let postID = getState().posts[id].id;
        return fetch(`/api/posts/${postID}/`, {headers, method: "DELETE"}).then(res=>{
            if(res.ok){
                return dispatch({
                    type:'DELETE_POST',
                    id
                })
            }
            
        })
    }
}

export const fetchPosts = () => {
    return dispatch => {
        let headers = {
            "Content-Type": "application/json"
        };
        return fetch("/api/notes/", {headers,}).then(res => res.json()).then(posts => {
            return dispatch({
                type: 'FETCH_POSTS',
                posts
            })
        })
    }
}
