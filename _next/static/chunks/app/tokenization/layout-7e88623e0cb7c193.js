(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [997, 509],
  {
    7836: function (e, t, i) {
      Promise.resolve().then(i.bind(i, 9922)),
        Promise.resolve().then(i.bind(i, 3811)),
        Promise.resolve().then(i.bind(i, 463)),
        Promise.resolve().then(i.bind(i, 8201)),
        Promise.resolve().then(i.bind(i, 4963)),
        Promise.resolve().then(i.bind(i, 2398)),
        Promise.resolve().then(i.bind(i, 8162)),
        Promise.resolve().then(i.bind(i, 6494));
    },
    3811: function (e, t, i) {
      "use strict";
      i.r(t);
      var s = i(7437),
        r = i(5587),
        n = i(703);
      t.default = (e) => {
        let { title: t, content: i, img: l } = e;
        return (0, s.jsx)(r.E.div, {
          initial: { opacity: 0, y: 100 },
          whileInView: {
            opacity: 1,
            y: 0,
            transition: { type: "easeIn", stiffness: 100, duration: 1 },
          },
          viewport: { once: !0 },
          className:
            "py-[9.231rem] sm:py-[3.125rem] md:pt-[3.375rem] md:pb-[1.625rem]",
          children: (0, s.jsx)(r.E.div, {
            variants: {
              offscreen: { y: 300 },
              onscreen: {
                y: 50,
                transition: { type: "spring", duration: 1.8 },
              },
            },
            children: (0, s.jsxs)("div", {
              className:
                "perpetual-bg-img relative w-full md:w-[68.75rem] mx-auto",
              children: [
                (0, s.jsx)(n.default, {
                  src: l.desktop,
                  className: "w-full absolute top-[2.375rem] hidden md:block",
                  alt: "hero",
                  width: 1100,
                  height: 156,
                }),
                (0, s.jsx)("div", {
                  className: "flex justify-center",
                  children: (0, s.jsxs)("div", {
                    className:
                      "flex flex-col items-center text-white w-[78.205rem] sm:w-[86.589rem] md:w-[41.563rem]",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "hero-banner-title !text-[10.231rem] sm:!text-[7.552rem] md:!text-[3.625rem]",
                        children: t,
                      }),
                      (0, s.jsx)("div", {
                        className: "hero-banner-subtext pt-[1.375rem]",
                        children: (0, s.jsx)("span", {
                          className:
                            "md:text-[1.875rem] text-[3.59rem] leading-[5.179rem] md:leading-[1.625rem] text-center",
                          children: i,
                        }),
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)(n.default, {
                  src: l.mobile,
                  className: "w-full sm:hidden",
                  alt: "hero",
                  width: 768,
                  height: 90,
                }),
                (0, s.jsx)(n.default, {
                  src: l.tablet,
                  className: "w-full hidden sm:block md:hidden",
                  alt: "hero",
                  width: 768,
                  height: 225,
                }),
              ],
            }),
          }),
        });
      };
    },
    2398: function (e, t, i) {
      "use strict";
      i.r(t),
        (t.default = {
          src: "/_next/static/media/TokenizationHeroDesktop.a0134e04.svg",
          height: 88,
          width: 1100,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    8162: function (e, t, i) {
      "use strict";
      i.r(t),
        (t.default = {
          src: "/_next/static/media/TokenizationHeroMobile.d9d79bee.svg",
          height: 90,
          width: 390,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    6494: function (e, t, i) {
      "use strict";
      i.r(t),
        (t.default = {
          src: "/_next/static/media/TokenizationHeroTablet.fff70acd.svg",
          height: 90,
          width: 767,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
  },
  function (e) {
    e.O(0, [19, 587, 401, 90, 478, 69, 744], function () {
      return e((e.s = 7836));
    }),
      (_N_E = e.O());
  },
]);
