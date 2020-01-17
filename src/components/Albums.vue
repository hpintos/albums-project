
<template>
    <div class="albums" style="border: 1px solid lightgray">
        <h4>Hey! This is albums!</h4>
        <p v-if="albums.length === 0">No albums were feched yet...</p>

        <ul v-if="albums.length !== 0">
            <li v-for="album in albums" :key="album.id">
                {{album.id}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Albums',
        props: {
            msg: String
        },
        data: function() {
            return {
                albums: []
            };
        },
        methods: {
        },
    }
</script>
