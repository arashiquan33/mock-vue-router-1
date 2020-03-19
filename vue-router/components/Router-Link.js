export default {
  props: {
    to: null
  },

  template: ` <a href="javascript:void(0)" 
                to="to" v-on:click="click"
                class="nav-link">
                  <slot name="default"></slot>
             </a>`,

  methods: {
    click() {
      window.location.hash = "#" + this.to;
    }
  }
};
