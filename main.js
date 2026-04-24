/* K-Bunsik — small, dependency-free UX layer */
(function () {
  'use strict';

  // Mark JS as available so progressive-enhancement styles apply
  document.documentElement.classList.add('js');

  // Year in footer
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  // Nav: shrink on scroll + mobile toggle
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('navToggle');

  if (nav) {
    var onScroll = function () {
      if (window.scrollY > 24) nav.classList.add('nav--scrolled');
      else nav.classList.remove('nav--scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('nav--open');
    });
    // Close the mobile menu when a link is tapped
    nav.querySelectorAll('.nav__links a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('nav--open'); });
    });
  }

  // Highlight today's row in the hours table
  var hours = document.getElementById('hoursTable');
  if (hours) {
    var today = new Date().getDay(); // 0 = Sunday
    var row = hours.querySelector('li[data-day="' + today + '"]');
    if (row) row.classList.add('is-today');
  }

  // Reveal-on-scroll. Elements start visible; for below-the-fold items we
  // briefly hide them and then release once they enter the viewport — this
  // gives a gentle fade without risking content being stuck invisible.
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    reveals.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top > window.innerHeight) el.classList.add('is-hidden');
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.remove('is-hidden');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { if (el.classList.contains('is-hidden')) io.observe(el); });
  }

  // Menu filters
  var filters = document.getElementById('menuFilters');
  if (filters) {
    filters.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-filter]');
      if (!btn) return;
      var filter = btn.dataset.filter;

      filters.querySelectorAll('button').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      document.querySelectorAll('.menu-section').forEach(function (section) {
        var cat = (section.dataset.category || '').split(/\s+/);
        var show = (filter === 'all') || cat.indexOf(filter) !== -1;
        section.style.display = show ? '' : 'none';
      });

      // Smooth scroll the filter bar into view on mobile
      if (window.innerWidth < 720 && filter !== 'all') {
        var target = document.getElementById(filter);
        if (target) {
          var y = target.getBoundingClientRect().top + window.scrollY - 140;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    });
  }
})();
