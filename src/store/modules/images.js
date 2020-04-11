import api from '../../api/imgur';

const state = {
  images : []
};

const getters = {
  allImages: () => state.images
};

const actions = {
  async fetchImages({ rootState }){
    const {token} = rootState.auth;
    const res = await api.fetchImages(token);
    console.log(res);
  }
};

const mutations = {
  setImages = (state, images) => {
    state.images = images;
  } 
};

export default { 
  state,
  getters,
  mutations,
  actions
}