import axios from "axios";
const instance = axios.create({
  baseURL: 'http://localhost:8090/',
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar', 
}
});

export const getAccounts = (onSuccess?: Function) =>  {
    instance.get("accounts")
    .then(response => {
        onSuccess(response)
    })
    .catch(e => console.log(e))
}

export const getAccountFollowers = (userID: string, onSuccess?: Function) => {
    instance.get(`accounts/${userID}`)
        .then(response => {
            onSuccess(response)
        })
        .catch(e => console.log(e))
}

export const getAllAccountsFollowers = (onSuccess?: Function) => {
    instance.get(`accounts/followers`)
        .then(response => {
            onSuccess(response);
        })
        .catch(e => console.log(e))
}

export const postAddNewAccount = (payload: any, onSuccess?: Function) => {
    console.log(payload)
    instance.post(`accounts/add`, payload)
        .then(response => {
            console.log(response);
            onSuccess && onSuccess(response);
        })
        .catch(e => console.log(e));
}
// export const getProjectType = (
//   view: eWantedUserView,
//   projectTypeID: string,
//   onSuccess?: Function,
//   onFail?: Function
// ) => {
 //   instance
//     .get(`/api/WantedProjectType/${getController(view)}Get/${projectTypeID}`)
//     .then(response => {
//       onSuccess && onSuccess(response.data);
//     })
//     .catch(error => {
//       onFail && onFail(error);
//     });
// };
