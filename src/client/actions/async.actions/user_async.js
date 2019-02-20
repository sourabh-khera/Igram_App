import user from "../../../../../WebstormProjects/hcl-concerts-react-native/src/reducers/user";

export const adduser = (userInfo) => async dispatch => {
    const response = await fetch('https://localhost:3000/api/v1/addUser', {
        method: 'post',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(userInfo)
    });
    const json = await response.json();
    console.log("json----", json);
}