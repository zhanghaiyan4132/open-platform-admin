
import svgIcon from '@/components/svgIcon';
import remoteJs from '@/components/remoteJs';
import bottomFooter from '@/components/bottomFooter';

const Yto = {
  install: function (Vue) {
    Vue.component('svgIcon', svgIcon);
    Vue.component('remoteJs', remoteJs);
    Vue.component('bottomFooter', bottomFooter);
  }
};

export default Yto;
