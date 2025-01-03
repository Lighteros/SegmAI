"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [311],
  {
    2311: function (e, t, u) {
      u.r(t);
      var a = u(7437),
        l = u(2265);
      u(4628),
        (t.default = (e) => {
          let { src: t, width: u = "100%", height: s = "100%" } = e,
            [r, n] = (0, l.useState)(!1);
          return ((0, l.useEffect)(() => {
            n(!0);
          }, []),
          r)
            ? (0, a.jsx)("dotlottie-player", {
                src: t,
                background: "transparent",
                style: { width: u, height: s },
                loop: !0,
                autoplay: !0,
              })
            : null;
        });
    },
  },
]);
