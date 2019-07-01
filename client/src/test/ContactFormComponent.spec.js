import ContactFormComponent from '../components/contact/ContactFormComponent'

describe('<ContactFormComponent/>', () => {
  it('should render correctly', async () => {
    const wrapper = await shallow(<ContactFormComponent/>)
    expect(wrapper).toMatchSnapshot()
  });
})