import timezones from './timezones.js';
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.esm.browser.js';

const timezoneItems = timezones();

export default new Vue({
  el: '#main-content',
  data: {
    items: []
  },
  methods: {
    processItems() {
      let newItems = [];

      timezoneItems.forEach((tz, index) => {
        const now = new Date();
        let response = tz;

        // Get the formatted date in this timezone and split into parts
        const localDateSplit = now
          .toLocaleString('en-GB', {timeZone: tz.timezone})
          .split(',');

        response.dateString = localDateSplit[0];
        response.timeString = localDateSplit[1].trim();

        newItems.push(response);
      });

      this.items = newItems;
    }
  },
  mounted() {
    this.processItems();

    setInterval(() => {
      this.processItems();
    }, 1000);
  }
});
