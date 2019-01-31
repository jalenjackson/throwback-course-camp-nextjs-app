import { shallow } from 'enzyme';
import React from 'react';
import IndexComponent from '../frontend/reactComponents/index/index';

describe('The home page renders correctly', () => {
  it('The home page has the proper copy', () => {
    const homePage = shallow(<IndexComponent />);
    expect(homePage.find('#home-page-value-props-text-container h1').text()).toEqual('Innovate For The Future');
    expect(homePage.find('#home-page-value-props-text-container p').text()).toEqual('Proven fun interactive affordable online courses');
    expect(homePage.find('.earn-money-cta-text-container h1').text()).toEqual('Want To Earn Money Teaching?');
    expect(homePage.find('.earn-money-cta-text-container p').text()).toEqual('Lorem ipsum is simply dummy text. Hello world you are awesome');
  })
});
