const sidebar = {
  state: {
    isOpen: sessionStorage.getItem('sidebar-open') === 'true'
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      state.isOpen = !state.isOpen;
      sessionStorage.setItem('sidebar-open', '' + state.isOpen);
    }
  }
};
export default sidebar;
