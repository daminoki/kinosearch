import { apiHelper } from './apiHelper';

export const getRandomTitle = async() => apiHelper('get', 'v1.3/movie/random');

export const getPopularTvShows = async(params) => apiHelper('get', 'v1.3/movie', { params: params});