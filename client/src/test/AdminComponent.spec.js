import AdminComponent from '../components/admin/AdminComponent'

describe('<AdminComponent/>', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<AdminComponent/>)
    expect(wrapper).toMatchSnapshot()
  });
})