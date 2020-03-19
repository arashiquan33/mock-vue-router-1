export default {
  data: function() {
    return {
      matchedComp: null
    };
  },
  mounted() {
    let routes = this.$vue_router.routes;
    let _self = this;

    this.$vue_router.addHashWatcher(function(newHash) {
      let newPath = newHash.substring(1);
      let matchedRoute = routes.find(route => route.path === newPath);

      if (matchedRoute) {
        let matchedComp = matchedRoute.component;
        _self.matchedComp = matchedComp;
      }
    });
  },
  render(_h) {
    let tag = this.matchedComp ? this.matchedComp : "div";
    console.log(tag);
    return _h(tag, "");
  }
};
