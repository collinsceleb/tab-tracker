import Api from '@/services/Api';

export default {
    index({songId, userId}) {
        return Api().get(`bookmark?songId=${songId}&userId=${userId}`);
    },
    post(bookmark) {
        return Api().post('bookmarks', bookmark);
    },
    delete(bookmarkId) {
        return Api().delete(`bookmarks/${bookmarkId}`);
    },
}