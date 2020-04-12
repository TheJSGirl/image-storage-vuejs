import api from '../../api/imgur';
import { router } from '../../main';

const state = {
  images : []
};

const getters = {
  allImages: () => state.images
};

const actions = {
  async fetchImages({ rootState, commit }){
    const {token} = rootState.auth;
    const res = await api.fetchImages(token);
    commit('setImages', res.data.data);
  },
  async uploadImages({ rootState }, images) {
    //Get the access token
    const { token } = rootState.auth;

    //call imgur api to upload images
    await api.uploadImage(images, token);

    // redirect to imagelist
    router.push('/')

  }
};

const mutations = {
  setImages(state, images){
    state.images = images;
  } 
};

export default { 
  state,
  getters,
  mutations,
  actions
}