(function () {
  var me = document.currentScript, page = me.getAttribute('data-page') || '', root = me.getAttribute('data-root') || './';
  var frame = document.getElementById('app'), off = document.getElementById('off'), exec = String(window.RS_EXEC_URL || '');
  if (!/^https:\/\/script\.google\.com\/.+\/exec$/.test(exec)) { off.hidden = false; off.querySelector('p').textContent = 'RM Nexus isn\'t set up yet. Add the Apps Script link to config.js.'; return; }
  var q = new URLSearchParams(location.search); if (page && !q.has('page')) q.set('page', page);
  var src = exec + (q.toString() ? '?' + q.toString() : '');
  function show() { off.hidden = navigator.onLine; if (navigator.onLine && frame.getAttribute('src') !== src) frame.setAttribute('src', src); }
  window.addEventListener('online', show); window.addEventListener('offline', show); show();
  if ('serviceWorker' in navigator) navigator.serviceWorker.register(root + 'sw.js', { scope: root }).catch(function () {});
})();
