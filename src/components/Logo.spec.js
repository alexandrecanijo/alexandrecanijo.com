import { shallowMount } from '@vue/test-utils';
import Logo from './Logo.vue';

describe('Logo', () => {
  it('should render the component', () => {
    const wrapper = shallowMount(Logo, {});
    expect(wrapper.html()).toMatchSnapshot();
  });
});
