class SearchPhotoData {
  #BASE_URL;
  #API_KEY;

  constructor({ url, key, perPage, imageType, orientation, safesearch }) {
    this.#BASE_URL = url;
    this.#API_KEY = key;

    // this.page = 1;
    this.perPage = perPage;
    this.imageType = imageType;
    this.orientation = orientation;
    this.safesearch = safesearch;
  }

  getBasicFetchUrl(searchValue, page) {
    return `${this.#BASE_URL}?key=${
      this.#API_KEY
    }&q=${searchValue}&page=${page}`;
  }

  getFetchUrl(searchValue = '', page) {
    const url = `${this.getBasicFetchUrl(searchValue, page)}&per_page=${
      this.perPage
    }&image_type=${this.imageType}&orientation=${this.orientation}&safesearch=${
      this.safesearch
    }`;
    return url;
  }
}

const photoFinderOptions = {
  url: 'https://pixabay.com/api/',
  key: '22936688-6b3396d854cca2c3f8d0c7d41',
  perPage: 12,
  imageType: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

const photoFinder = new SearchPhotoData({ ...photoFinderOptions });
export { photoFinder };
