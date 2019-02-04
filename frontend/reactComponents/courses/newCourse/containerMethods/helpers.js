import { message } from 'antd';
import GlobalLocalization from '../../../../../globalLocalization';

export const sessionExpired = navbarContainer => {
  message.error(GlobalLocalization.SessionExpired, 5);
  navbarContainer.setContainerState('authenticated', false);
  navbarContainer.setContainerState('profileDrawerVisibility', false);
};

export const cleanData = str => {
  return str.replace(/\n/ig, '');
};
