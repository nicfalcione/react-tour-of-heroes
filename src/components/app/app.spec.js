import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import chaiEnzyme from 'chai-enzyme';
import chai, { expect } from 'chai';
import {configure, shallow } from 'enzyme';
import App from './app';
import NavigationBar from '../navigation-bar/navigation-bar';

chai.use(chaiEnzyme());

configure({adapter: new Adapter()});

describe('App component', () => {
  it('should have one Navigation bar', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(NavigationBar)).to.have.length(1);
  });
});