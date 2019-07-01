import App from '../App';

describe('<App/>', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper).toMatchSnapshot()
  });

  it('should render correctly again', () => {
    const wrapper = render(<App/>);
    expect(wrapper).toMatchSnapshot()
  });

  it('should render home page img', () => {
    const wrapper = mount(<App/>)
    const src = wrapper.find("img").props().src
    expect(src).toBeDefined()
  });
});