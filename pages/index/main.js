require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export domain */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return get; });
/* unused harmony export post */
/* unused harmony export request */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);

/**
 * 基于Promise的网络请求库,包含GET POST请求
 * 使用方法：
 * 先引入： import {get,post,...} from 本文件;
 * · get请求:    get("/index",{id:2}).then(data=>{}).catch(error=>{});
 * · post请求:    post("/index",{id:2}).then(data=>{}).catch(error=>{});
 */

/*  服务器请求地址 */
var domain = 'https://api.it120.cc/tz/';

/**
 * 发起get请求
 * @param url 请求路径 必填
 * @param data 请求参数 get请求的参数会自动拼到地址后面
 * @param headers 请求头 选填
 * @returns {Promise}
 */
var get = function get(url, data, headers) {
  return request('GET', url, data, headers);
};

/**
 * 发起post请求
 * @param url 请求路径 必填
 * @param data 请求参数
 * @param headers 请求头 选填
 * @returns {Promise}
 */
var post = function post(url, data, headers) {
  return request('POST', url, data, headers);
};
/**
 * 接口请求基类方法
 * @param method 请求方法 必填
 * @param url 请求路径 必填
 * @param data 请求参数
 * @param header 请求头 选填
 * @returns {Promise}
 */
function request(method, url, data) {
  var header = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
    'Content-Type': 'application/json'
  };

  wx.showLoading({
    title: '加载中...'
  });
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    var response = {};
    url = domain + url;
    wx.request({
      url: url,
      method: method,
      data: data,
      header: header,
      success: function success(res) {
        return response.success = res;
      },
      fail: function fail(error) {
        return response.fail = error;
      },
      complete: function complete() {
        wx.hideLoading();
        if (response.success) {
          if (response.success.statusCode != 200) {
            wx.showToast({
              title: "网络出错，稍后再试",
              icon: "none"
            });
            return;
          }
          resolve(response.success.data);
        } else {
          wx.showToast({
            title: "数据请求失败，请稍后重试",
            icon: "none"
          });
          console.log('数据请求失败', response.fail);
          reject(response.fail);
        }
      }
    });
  });
}

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(17);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6b277275_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(26);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(18)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6b277275"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6b277275_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b277275", Component.options)
  } else {
    hotAPI.reload("data-v-6b277275", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 18:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_calendar__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_network__ = __webpack_require__(121);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      tabList: [],
      motto: "Hello World",
      userInfo: {},
      currIndex: 0
    };
  },


  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */],
    calendar: __WEBPACK_IMPORTED_MODULE_1__components_calendar__["a" /* default */]
  },

  methods: {
    getName: function getName(msg) {
      console.log(msg);
    },
    setTab: function setTab(e) {
      this.currIndex = e;
      console.log(this.currIndex);
    },
    changeVal: function changeVal() {
      this.motto = "还可以";
    }
  },
  created: function created() {
    var _this = this;

    Object(__WEBPACK_IMPORTED_MODULE_2__utils_network__["a" /* get */])("banner/list", { key: "mallName" }).then(function (res) {
      console.log(res);
      _this.tabList = res.data;
    });
  }
});

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('calendar', {
    attrs: {
      "name": _vm.motto,
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "changeName": _vm.getName
    }
  }), _vm._v(" "), _c('a', {
    attrs: {
      "href": "../number/main"
    }
  }, [_vm._v("跳转")]), _vm._v(" "), _c('div', [_vm._v("点击获取子组件传递过来的值")]), _vm._v(" "), _c('div', {
    staticClass: "view-tab"
  }, [_c('ul', _vm._l((_vm.tabList), function(item, index) {
    return _c('li', {
      key: index,
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "click": function($event) {
          _vm.setTab(index)
        }
      }
    }, [_c('div', {
      class: [index == _vm.currIndex ? 'mycolor' : '', _vm.view - _vm.list]
    }, [_vm._v(" " + _vm._s(item.id))])])
  }))], 1), _vm._v(" "), _c('input', {
    attrs: {
      "type": "text",
      "value": _vm.motto
    }
  }), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.changeVal
    }
  }, [_vm._v("按钮")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6b277275", esExports)
  }
}

/***/ })

},[16]);
//# sourceMappingURL=main.js.map