import axios from "axios";
//import { toast } from "react-toastify";
// axios.interceptors.response.use(null, e => {
//   console.log(e.error.status);
//   if (!(e.error && e.error.status >= 400)) {
//     console.log(e);
//     toast("An Unexpected Error Has Occured");
//   }
//   return Promise.reject(e);
// });

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch
};
