export default {
  methods: {
    setText(options = '') {
      if (options === 'one') {
        setTimeout(() => {
          if (this.timeTextOne >= 0) {
            this.timeTextOne--;
            this.setText('one');
          }
        }, 1000);
      } else if (options === 'two') {
        setTimeout(() => {
          if (this.timeTextTwo >= 0) {
            this.timeTextTwo--;
            this.setText('two');
          }
        }, 1000);
      } else {
        setTimeout(() => {
          if (this.timeText >= 0) {
            this.timeText--;
            this.setText();
          }
        }, 1000);
      }
    }
  }
};
