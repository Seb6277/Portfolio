import Login from '../components/login/Login'

describe('<Login/>', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Login/>)
    expect(wrapper).toMatchSnapshot()
  });
})