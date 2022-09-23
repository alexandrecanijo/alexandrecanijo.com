import { mount } from '@vue/test-utils';
import AcLogo from '~/components/Logo.vue';

describe('AcLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(AcLogo);
    expect(wrapper.vm).toBeTruthy();
  });
});
