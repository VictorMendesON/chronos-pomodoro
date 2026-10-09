import { createElement } from 'react';
import { toast } from 'react-toastify';
import type { Id } from 'react-toastify';
import { Dialog } from '../components/Dialog';

export const showMessage = {
  success: (msg: string) => toast.success(msg),
  error: (msg: string) => toast.error(msg),
  warning: (msg: string) => toast.warning(msg),
  info: (msg: string) => toast.info(msg),
  dismiss: (id?: Id) => toast.dismiss(id),
  confirm: (data: string, onClosing: (confirmation: boolean) => void) =>
    toast<string>(props => createElement(Dialog, props), {
      data,
      onClose: confirmation => {
        onClosing(confirmation === true);
      },
      autoClose: false,
      closeOnClick: false,
      closeButton: false,
      draggable: false,
    }),
};
