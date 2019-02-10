import axios from 'axios';
import { message } from 'antd';
import GlobalLocalization from '../../../../../globalLocalization';

export const call = async $img => {
  try {
    await axios.post(
  'http://localhost:5000/uploaders/remove-single-upload',
  { fileId: $img.attr('src').split('/')[3] }
    );
  } catch(e) {
    message.error(GlobalLocalization.UnexpectedError)
  }
};
