import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Photo from '@/components/Photo.vue'

const photo = {
  id: 1,
  thumbnailUrl: 'some/url'
};
const wrapper = shallowMount(Photo, {
  propsData: { photo }
})

describe('Photo.vue', () => {

  it('renders photo when passed', () => {
    expect(wrapper.find('img[src="some/url"]').exists()).to.be.true;
  })

  it('click on photo emit event', () => {
    const img = wrapper.find('img');
    img.trigger('click');
    expect(wrapper.emitted().deletePhoto.length).to.be.equal(1)
  })
  
})
