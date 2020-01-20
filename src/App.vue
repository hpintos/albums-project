<template>
  <div id="app">
    <div class="container-fluid">
      <Photos/>
    </div>
  </div>
</template>

<script>

import Photos from './components/Photos.vue';
import Photo from './components/Photo.vue';

export default {
  name: 'app',
  components: {
    Photos,
    Photo
  }
}
</script>
