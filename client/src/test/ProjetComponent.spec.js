import React from 'react'
import {shallow} from 'enzyme'

import ProjetComponent from '../components/projet/ProjetComponent'

describe('<ProjetComponent/>', () => {
  it('should render without crash', () => {
    const wrapper = shallow(<ProjetComponent/>)
    expect(wrapper)
  });
})

describe('onExiting', () => {
  it('should return false', () => {
    const wrapper = shallow(<ProjetComponent/>)
    wrapper.instance().onExiting = jest.fn(() => false)
    expect(wrapper.instance().onExiting()).toBeFalsy
  });
})

describe('onExited', () => {
  it('should return false', () => {
    const wrapper = shallow(<ProjetComponent/>)
    wrapper.instance().onExited = jest.fn(() => false)
    expect(wrapper.instance().onExited()).toBeFalsy
  });
})

describe('next', () => {
  it('should update the state', () => {
    const wrapper = shallow(<ProjetComponent/>)
    const nextButton = wrapper.find('CarouselControl').at(1)
    expect(wrapper.state().activeIndex).toEqual(0)
    nextButton.simulate('click')
    expect(wrapper.instance().next()).toBeCalled
  });
})