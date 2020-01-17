import Api from '@/services/api';

const PHOTOS_PATH = '/photos';

export const getPhotos = () => {
    const promise = Api.get(PHOTOS_PATH);
    return promise;
};
