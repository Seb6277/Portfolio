import ExistingProjectComponent from '../components/admin/ExistingProjectComponent'

describe('<ExistingProjectComponent/>', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ExistingProjectComponent/>)
    expect(wrapper).toMatchSnapshot()
  });

  it('should call handleDeleteClick on click', () => {
    const spy = sinon.spy();
    const wrapper = mount(<ExistingProjectComponent key={10} name="test" id={10} deleteAction={spy}/>)
    expect(wrapper).toMatchSnapshot()

    wrapper.find("button").first().simulate("click")

    expect(spy.calledOnce).toBe(true)
  });
})