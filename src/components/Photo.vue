
<template>    
    <div class="m-1" v-on:click="deletePhoto(photo.id)">
        <img v-bind:src="photo.thumbnailUrl" /> 
    </div>
</template>

<script>
export default {
    name: 'Photo',
    props: {
        photo: Object
    },
    created: function() {
    },
    methods: {
        deletePhoto: function (id) {
            this.$emit('deletePhoto', id);
        }
    },
}
</script>
