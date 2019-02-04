import axios from 'axios';
import $ from 'jquery';
import { message } from 'antd';
import { host } from '../../../../../globalHelpers/axiosCalls';
import { sessionExpired } from './helpers';
import GlobalLocalization from '../../../../../globalLocalization';

export const callHandleUpload = async (context, info, token, navbarContainer) => {
  context.setState({ fileAdded: { status: true, uploaded: false } });
  const status = info.file.status;
  switch (status) {
    case 'removed': {
      context.setState({ fileAdded: { status: false, uploaded: false }, fileLocation: '' });
      const headers = { 'Content-Type': 'application/json' };
      const uri = `${ host }/uploaders/remove-single-upload`;
      const data = { fileId: context.state.fileLocation.split('/')[3] };
      await axios.post(uri, JSON.stringify(data), { headers });
      message.success(GlobalLocalization.RemovedSuccess);
      break;
    }
    case 'done': {
      await context.setState({
        fileAdded: { status: true, uploaded: true },
        fileLocation: info.file.response.fileLocation,
      });
      message.success(GlobalLocalization.GetStarted);
      break;
    }
    case 'error': {
      if (info.file.error.status === 409) {
        info.file.response = GlobalLocalization.SessionExpired;
        info.fileList[0].response = GlobalLocalization.SessionExpired;
        sessionExpired(navbarContainer);
        $('.anticon-close').click();
      } else {
        info.file.response = GlobalLocalization.UploadImageFailure;
        info.fileList[0].response = GlobalLocalization.UploadImageFailure;
        message.error(GlobalLocalization.UploadImageFailure);
      }
    }
  }
};
