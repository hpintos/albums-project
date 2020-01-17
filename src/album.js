export default class Album {

    constructor({ albumId, id, title, url, thumbnailUrl}) {
        this.albumId = albumId || 1;
        this.id = id || Math.random();
        this.title = title || 'title';
        this.url = url || 'url';
        this.thumbnailUrl = thumbnailUrl || 'thumbnailUrl';
    }

}
