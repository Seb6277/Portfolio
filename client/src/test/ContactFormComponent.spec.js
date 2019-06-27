import ContactFormComponent from '../components/contact/ContactFormComponent'

describe('<ContactFormComponent/>', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ContactFormComponent/>)
    expect(wrapper).toMatchSnapshot()
  });
})