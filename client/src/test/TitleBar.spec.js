import TitleBar from '../components/TitleBar'

describe('<TitleBar/>', () => {
  it('should render without crash', () => {
    const wrapper = shallow(<TitleBar/>)
    expect(wrapper).toMatchSnapshot()
  });
});