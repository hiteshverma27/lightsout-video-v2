import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const successToast = (msg) => {
  toast.success(msg, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
};

const errorToast = (msg) => {
    toast.error(msg, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };


export { successToast, errorToast };