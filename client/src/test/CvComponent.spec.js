import React from 'react'
import {shallow} from 'enzyme'
import renderer from 'react-test-renderer'

import CvComponent from '../components/cv/CvComponent'

describe('<CvComponent/>', () => {
  it('should render without crash', () => {
    const wrapper = shallow(<CvComponent/>)
    expect(wrapper)
  });

  it('should match snapshot', () => {
    const component = renderer.create(<CvComponent/>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  });
})