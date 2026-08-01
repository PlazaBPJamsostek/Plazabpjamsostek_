/* Ballroom page */
(function () {
  const tabs = document.querySelectorAll('.layout-tab');
  const panels = document.querySelectorAll('.layout-panel');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((tb) => tb.classList.remove('active'));
      panels.forEach((p) => p.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById(tab.getAttribute('data-layout'));
      if (target) target.classList.add('active');
    });
  });
})();
