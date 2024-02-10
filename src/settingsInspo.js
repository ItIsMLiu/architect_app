/* eslint-disable eol-last */

export const apiKey = '01af89b3ed58c0e07f9808616864b18a';

export const apiUrl = 'https://api.flickr.com/services/rest/';

export const apiArgs = {
  api_key: apiKey,
  format: 'json',
  media: 'photos',
  method: 'flickr.photos.search',
  sort: 'relevance',
  nojsoncallback: 1,
  per_page: 48
};

export const imgSize = 'n';

export const searchPlaceholder = 'architecture design';

export const defaultTags = [
  'house extension',
  'house remodelling',
  'modern architecture'
];