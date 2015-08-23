/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

htmlSuite('loader and build', function() {
  htmlTest('html/dev-loader.html');
  htmlTest('html/dev-loader-swizzled.html');
  htmlTest('html/loader-forcepoly.html');
});

htmlSuite('integration', function() {
  htmlTest('html/web-components.html');
  htmlTest('html/smoke.html');
  htmlTest('html/smoke.html?wc-shadow');
  htmlTest('html/ce-import.html');
  htmlTest('html/ce-upgradedocumenttree.html');
  htmlTest('html/ce-import.html?wc-shadow');
  htmlTest('html/ce-upgrade-order.html');
  htmlTest('html/ce-import-upgrade.html');
  htmlTest('html/ce-import-upgrade-async.html');
  htmlTest('html/attached-infinite-loop.html');
});

htmlSuite('Library Cooperation', function() {
  htmlTest('html/jquery-shadowdom-polyfill.html');
});
