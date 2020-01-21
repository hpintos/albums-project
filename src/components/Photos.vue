
<template>
    <div class="photos-component mb-5">
        <span class="photos-empty-message" v-if="photos.length === 0">No photos were feched yet...</span>
        <div v-if="photos.length !== 0">
            <transition-group name="list" tag="div" class="d-flex flex-row flex-wrap">
                <Photo class="list-item"
                    v-for="photo in photos" :key="photo.id" 
                    v-bind:photo="photo" v-on:deletePhoto="onDeletePhoto"/>
            </transition-group>
        </div>
    </div>
</template>

<script>

import Photo from '@/components/Photo.vue';

export default {
    name: 'Photos',
    components: {
        Photo
    },
    props: {
        photos: Array
    },
    methods: {
        onDeletePhoto: function(id) {
            this.$emit('deletePhoto', id);
        },
    },
    created: function () {
        this.photos = this.photos || [];
    },
}
</script>

<style scoped>

.list-item {
  transition: all 1.5s;
}

.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.list-leave-active {
  position: absolute;
}
</style>