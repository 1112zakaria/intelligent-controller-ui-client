import { request } from "../axiosHelper";

export const loginService = (login: string, password: string, callback: (arg: string | null) => void) => {
  console.log('calling login service');

  request(
    'POST',
    'http://localhost:5000/login',
    {login: login, password: password}
  ).then((response: any) => {
    console.log(response.data);
    callback(response.data.token);
  }).catch((error: any) => {
    // FIXME: expired token sent perhaps? is this even needed???
    console.log(error);
    callback(null);
  });

};

export const registerService = (firstName: string, lastName: string, login: string, password: string, callback: (arg: string | null) => void) => {
  console.log('submitting form');
  
  request(
    'POST',
    'http://localhost:5000/register',
    {login: login, password: password, firstName: firstName, lastName: lastName}
  ).then((response: any) => {
    console.log(response.data);
    callback(response.data.token);
  }).catch((error: any) => {
    // FIXME: expired token sent perhaps? is this even needed??
    console.log(error);
    callback(null);
  });
};