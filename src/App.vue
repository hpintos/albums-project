<template>
  <div id="app">
    <div class="container-fluid">
      <Photos/>
    </div>
  </div>
</template>

<script>

import Photos from './components/Photos.vue';

export default {
  name: 'app',
  components: {
    Photos
  }
}
</script>
