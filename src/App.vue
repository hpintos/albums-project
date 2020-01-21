<template>
  <div id="app">
    <div class="container-fluid">
      <Photos v-bind:photos="photos" v-on:deletePhoto="onDeletePhoto"/>
    </div>
  </div>
</template>

<script>

import {getPhotos} from '@/services/photos';
import {debounce, hasAlmostReachedBottom} from '@/utils'
import Photos from './components/Photos.vue';

export default {
  name: 'app',
  components: {
    Photos
  },
  data: function() {
        return {
          NUMBER_OF_ITEMS: 50,
          response: undefined,
          pageIndexNumber: 0,
          photos: []
        };
    },
  methods: {
    getPhotos: async function () {
        const response = await getPhotos();
        this.response = response;
        this.updatePhotos();
    },
    updatePhotos: function() {
        const dataChunk = this.response.data.slice(this.pageIndexNumber,this.pageIndexNumber += this.NUMBER_OF_ITEMS)
        this.photos = this.photos.concat(dataChunk);
    },
    onDeletePhoto: function(id) {
        const photoIndex = this.photos.findIndex(photo => photo.id === id);
        this.photos.splice(photoIndex, 1);
    },
    handleScroll: function() {
        if (hasAlmostReachedBottom()) {
            this.updatePhotos();
        }
    },
  },
  created: function () {
      this.getPhotos();
      window.addEventListener('scroll', debounce(this.handleScroll,250));
  },
  destroyed: function () {
      window.removeEventListener('scroll', debounce(this.handleScroll,250));
  }
}
</script>
