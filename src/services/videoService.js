import youtube from '../shared/api';

class VideoService {
    async fetchVideos(term) {
        const { data } = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        return data.items;
    }
}

export const videoService = new VideoService();