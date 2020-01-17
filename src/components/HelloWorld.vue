
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <Albums v-bind:albums="albums"/>
    <button v-on:click="getPhotos">
      Get Photos
    </button>
  </div>
</template>

<script>
import {getPhotos} from '@/services/photos';
import Album from '@/album'
import Albums from "./Albums";
export default {
  name: 'HelloWorld',
  components: {Albums},
  props: {
    msg: String
  },
  data: function() {
    return {
      loading: false,
      albums: []
    };
  },
  methods: {
    getPhotos: async function () {
      const response = await getPhotos();
      this.albums.push(new Album({}));
    },
    enableLoading: function() {
      this.loading = true;
    },
    disableLoading: function() {
      this.loading = false;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
