import ContactComponent from '../components/contact/ContactComponent'

describe('<ContactComponent/>', () => {
  it('should render corrctly', () => {
    const wrapper = shallow(<ContactComponent/>)
    expect(wrapper).toMatchSnapshot()
  });
})