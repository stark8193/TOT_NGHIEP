import { message } from 'antd';
import React from 'react';

    const success = (mes = 'Success') => {
      message.success(mes)
    };
  
    const error = (mes = 'Error') => {
      message.error(mes)
    };
  
    const warning = (mes = 'Warning') => {
     message.warning(mes)
    };
  
export {success, error, warning}