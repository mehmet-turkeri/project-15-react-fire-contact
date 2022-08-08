import { toast } from 'react-toastify';


export const toastSuccessNotify = (msg) => {
    toast.success(msg, {
        position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  export const toastDangerNotify = (msg) => {
    toast.error(msg, {
        position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  export const toastWarnNotify = (msg) => {
    toast.warn(msg, {
        position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };