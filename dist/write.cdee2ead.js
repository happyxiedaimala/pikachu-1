// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"write.js":[function(require,module,exports) {
var string = "\n/*\u8FD9\u662F\u4E00\u6BB5\u753B\u76AE\u5361\u4E18\u7684\u4EE3\u7801\uFF0C\u9996\u5148\u6211\u4EEC\u6765\u6E05\u9664\u6D4F\u89C8\u5668\u7684\u9ED8\u8BA4\u6837\u5F0F*/\n* {\n\tbox-sizing: border-box;\n\tmargin: 0px;\n\tpadding: 0px;\n}\n*:before,\n*:after {\n\tbox-sizing: border-box;\n}\n/*\u9996\u5148\u6211\u4EEC\u8981\u51C6\u5907\u76AE\u5361\u4E18\u7684\u76AE\u80A4*/\n.skin {\n\tposition: relative;\n\theight: 100vh;\n\tbackground-color: RGB(255, 230, 0);\n}\n/*\u7136\u540E\u753B\u76AE\u5361\u4E18\u7684\u773C\u775B*/\n.eyes {\n\tposition: absolute;\n\twidth: 300px;\n\ttop: 60px;\n\tleft: 50%;\n\tmargin-left: -150px;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n}\n.eye {\n\tborder: 3px solid black;\n\twidth: 64px;\n\theight: 64px;\n\tborder-radius: 50%;\n\tbackground-color: RGB(46, 46, 46);\n\ttransition: 1s;\n}\n/*\u7ED9\u773C\u775B\u52A0\u4E00\u70B9\u5C0F\u773C\u795E ~ */\n.eye:before {\n\tborder: 3px solid black;\n\tcontent: \"\";\n\tdisplay: block;\n\twidth: 28px;\n\theight: 28px;\n\tborder-radius: 50%;\n\tbackground-color: white;\n\tposition: relative;\n\tright: -10px;\n}\n/*\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u6765\u753B\u76AE\u5361\u4E18\u7684\u9F3B\u5B50*/\n.nose {\n\tborder: 14px solid black;\n\tposition: absolute;\n\tleft: 50%;\n\tmargin-left: -14px;\n\ttop: 124px;\n\tborder-color: black transparent transparent transparent;\n\tborder-radius: 50%;\n}\n@keyframes rock {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t33% {\n\t\ttransform: rotate(10deg);\n\t}\n\t66% {\n\t\ttransform: rotate(-10deg);\n\t}\n\t100% {\n\t\ttransform: rotate(0deg);\n\t}\n}\n/*\u7136\u540E\u6211\u4EEC\u6765\u753B\u76AE\u5361\u4E18\u7684\u5634\u5DF4*/\n.mouth {\n\twidth: 200px;\n\theight: 200px;\n\tposition: absolute;\n\tleft: 50%;\n\tmargin-left: -100px;\n\ttop: 150px;\n}\n/*\u9996\u5148\u6765\u753B\u4E0A\u5634\u5507*/\n.lips {\n\tborder: 3px solid black;\n\tposition: absolute;\n\twidth: 90px;\n\theight: 30px;\n\tleft: 50%;\n\tbackground-color: RGB(255, 230, 0);\n\tz-index: 1;\n}\n.lips.left {\n\tborder-bottom-left-radius: 61px 28px;\n\ttransform: rotate(-17deg);\n\tmargin-left: -90px;\n\tborder-color: transparent transparent black black;\n}\n.lips.right {\n\tborder-bottom-right-radius: 61px 28px;\n\ttransform: rotate(17deg);\n\tmargin-left: 1px;\n\tborder-color: transparent black black transparent;\n}\n/*\u7136\u540E\u753B\u753B\u4E0B\u5634\u5507*/\n.lowerLip {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 166px;\n\ttop: 12px;\n\toverflow: hidden;\n}\n.oralDown {\n\tborder: 3px solid black;\n\twidth: 160px;\n\theight: 1000px;\n\tposition: absolute;\n\tleft: 50%;\n\tmargin-left: -80px;\n\tbottom: 5px;\n\tborder-radius: 80px/320px;\n\tbackground-color: RGB(155, 0, 10);\n\toverflow: hidden;\n\ttransition: 1s;\n}\n.oralDown:hover {\n\ttransition: 1s;\n}\n.oralUp {\n\tbackground-color: RGB(255, 72, 95);\n\twidth: 240px;\n\theight: 300px;\n\tposition: absolute;\n\tleft: 50%;\n\tmargin-left: -120px;\n\tbottom: -170px;\n\tborder-radius: 50%;\n}\n/*\u6700\u540E\u6211\u4EEC\u753B\u4E24\u4E2A\u53EF\u7231\u7684\u8138\u988A\uFF01*/\n.face {\n\tposition: absolute;\n\twidth: 420px;\n\tleft: 50%;\n\tmargin-left: -210px;\n\ttop: 200px;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\ttransition: 1s;\n}\n.cheek {\n\tborder: 3px solid black;\n\twidth: 80px;\n\theight: 80px;\n\tbackground-color: red;\n\tborder-radius: 50%;\n}\n\n.cheek.left > img {\n\ttransform: rotateY(-180deg);\n\ttransform-origin: 25% 0;\n}\n/*\u547C\uFF0C\u7EC8\u4E8E\u753B\u597D\u4E86\uFF0C\u8FD9\u53EA\u76AE\u5361\u4E18\u5C31\u9001\u7ED9\u4F60\u5427 ~\n* \u7528\u9F20\u6807\u6478\u6478\u5B83\u53EF\u7231\u7684\u8138\n* \u5B83\u4F1A\u5F00\u5FC3\u8D77\u6765\u5662\uFF01\n*/\n";
var speed = 50;
var n = 0;

write = function write() {
  n++;

  if (n > string.length) {
    imgLeft.src = "./images/lightning.gif";
    imgRight.src = "./images/lightning.gif";
    window.clearInterval(time);
  } else {
    content.innerText = string.substring(0, n);
    style.innerHTML = string.substring(0, n);
    content.scrollTop = 99999;
  }
};

var time = setInterval(write, speed);

var play = function play() {
  return setInterval(write, speed);
};

var pause = function pause() {
  window.clearInterval(time);
};

btnPlay.onclick = function () {
  pause();
  time = play();
};

btnPause.onclick = function () {
  pause();
};

playSlow.onclick = function () {
  pause();
  speed = 200;
  time = play();
};

playNormal.onclick = function () {
  pause();
  speed = 50;
  time = play();
};

playFast.onclick = function () {
  pause();
  speed = 0;
  time = play();
};
},{}],"C:/Users/yyfs/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50252" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/yyfs/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","write.js"], null)
//# sourceMappingURL=/write.cdee2ead.js.map