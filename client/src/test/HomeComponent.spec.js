import React from 'react'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'

import HomeComponent from '../components/home/HomeComponent'

describe('<HomeComponent/>', () => {
  it('should render without crash', () => {
    const wrapper = shallow(<HomeComponent/>)
    expect(wrapper)
  });

  it('should match snapshot', () => {
    const component = renderer.create(<HomeComponent/>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  });
})