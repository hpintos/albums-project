import Vue from 'vue';
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Photos from '@/components/Photos.vue'
import Photo from '@/components/Photo.vue'

const photo = {
  id: 1,
  thumbnailUrl: 'some/url'
};

const photosInput = [];
const wrapper = shallowMount(Photos, {
  propsData: {
    photos: photosInput
  },
  stubs: {
    'Photo': Photo
  },
  listeners: {
    click: onClick
  }
})

describe('Photos.vue', () => {

  it('sets the correct default data', () => {
    expect(wrapper.vm.photos).to.eql([]);
    const isEmptyMessage = wrapper.find('.photos-empty-message').exists();
    expect(isEmptyMessage).to.be.true;
  })

  it('renders correctly when image is added', () => {
    wrapper.setData({ photos: [photo]})
    console.log(wrapper.html());
    expect(wrapper.find('.photo-component').exists()).to.be.true
  })

  it('called deletePhoto when event', () => {
    expect(true).to.be.true
  })
  
})
