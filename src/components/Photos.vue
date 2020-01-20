
<template>
    <div class="photos-component mb-5">
        <span v-if="photos.length === 0">No photos were feched yet...</span>
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
import {getPhotos} from '@/services/photos';
import {debounce, hasAlmostReachedBottom} from '@/utils'
import Photo from '@/components/Photo.vue';

export default {
    name: 'Photos',
    components: {
        Photo
    },
    props: {
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