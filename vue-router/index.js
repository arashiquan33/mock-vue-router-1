//定义vuerouter类
//当vuerouter实例化时，

import RouterLink from "./components/Router-Link.js";
import RouterView from "./components/Router-View.js";

export class VueRouter {
  constructor(routerOptions) {
    this.routerOptions = routerOptions;
    this.mode = routerOptions.mode || "hash";
    this.routes = routerOptions.routes || [];
    this.hashWatchers = [];
    this.init();
  }

  init() {
    const _self = this;

    window.addEventListener("hashchange", function() {
      _self.notifyHashChangeToWatchers(window.location.hash);
    });

    setTimeout(function() {
      window.location.hash = "#/";
    }, 3000);
  }

  notifyHashChangeToWatchers(newHash) {
    this.hashWatchers.forEach(watcher => {
      watcher(newHash);
    });
  }

  addHashWatcher(watcher) {
    this.hashWatchers.push(watcher);
  }
}

//提供install方法,扩展vue
VueRouter.install = function(Vue) {
  const vue_proto = Vue.prototype;

  // //所有vue实例从原型链集成$vue_router当前应用程序路由管理对象,即vueRouter实例
  //返回根实例上挂载的vueRouter对象
  Object.defineProperty(vue_proto, "$vue_router", {
    get: function() {
      return this.$root.vue_router;
    }
  });

  Vue.component("router-link", RouterLink);
  Vue.component("router-view", RouterView);

  //全局混入
  Vue.mixin({
    created: function() {
      var vue_router = this.$options.vue_router;
      if (vue_router) {
        this.$root.vue_router = vue_router; //挂载到根实例上
      }
    }
  });
};
