(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [130],
  {
    1866: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 1004));
    },
    706: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return c;
        },
      });
      var s = a(7437),
        r = a(7907),
        n = a(6850),
        i = a(3107),
        l = a(2265);
      function c() {
        let e = (0, r.useSearchParams)();
        async function t(e) {
          await i.Z.post(
            "https://backend.fractionai.xyz/api/landingPageReferral/addVisitorCount",
            { refCode: e },
            { headers: { "Content-Type": "application/json" } }
          );
        }
        return (
          (0, l.useEffect)(() => {
            if (!(0, n.j)()) {
              let a = e.get("refCode");
              a && ((0, n.S)(a), t(a));
            }
          }, []),
          (0, s.jsx)(s.Fragment, {})
        );
      }
    },
    6850: function (e, t, a) {
      "use strict";
      function s() {
        return localStorage.getItem("refCode");
      }
      function r(e) {
        localStorage.setItem("refCode", e);
      }
      a.d(t, {
        S: function () {
          return r;
        },
        j: function () {
          return s;
        },
      });
    },
    1004: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return o;
          },
        });
      var s = a(7437),
        r = a(703);
      a(6586);
      var n = {
          src: "/_next/static/media/Email.192647d2.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        i = a(2265),
        l = a(7907),
        c = a(3107),
        d = a(6850),
        m = a(706),
        o = () => {
          let [e, t] = (0, i.useState)(""),
            [a, o] = (0, i.useState)(!1),
            [u, x] = (0, i.useState)(!1),
            p = (0, l.useRouter)(),
            h = (e) =>
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                String(e).toLowerCase()
              ),
            f = async () => {
              if (!h(e)) {
                x(!0);
                return;
              }
              try {
                x(!1), o(!0);
                let t = await c.Z.post(
                  "https://backend.fractionai.xyz/api/waitList/createWaitlist",
                  { email: e, refCode: (0, d.j)() || "" },
                  { headers: { "Content-Type": "application/json" } }
                );
                console.log("Response:", t.data),
                  p.push(
                    "/waitlist-confirmation?type=".concat(
                      encodeURIComponent("waitlist")
                    )
                  );
              } catch (e) {
                console.error("Error:", e), o(!1);
              }
            };
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(i.Suspense, { children: (0, s.jsx)(m.Z, {}) }),
              (0, s.jsx)("section", {
                className:
                  "flex justify-center items-center pt-[35rem] md:pt-[6rem]",
                children: (0, s.jsx)("div", {
                  className:
                    "text-white w-full lg:max-w-xl md:max-w-4xl sm:max-w-5xl max-w-[96rem] mx-auto p-8",
                  children: (0, s.jsxs)("div", {
                    className: "pb-4 text-center",
                    children: [
                      (0, s.jsxs)("h3", {
                        className:
                          "text-[7.231rem] sm:text-[4.552rem] md:text-[3.5rem] lg:text-[2.5rem] waitlist-heading",
                        children: [
                          "Join the waitlist and ",
                          (0, s.jsx)("span", {
                            className: "gradient-text",
                            children: "Earn Rewards!",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "md:my-12 sm:my-20 my-32 md:space-y-7 w-[65%] mx-auto space-y-20 sm:space-y-12",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "relative",
                            children: [
                              (0, s.jsx)("span", {
                                className:
                                  "absolute inset-y-0 left-0 flex items-center md:pl-3 pl-5",
                                children: (0, s.jsx)(r.default, {
                                  src: n,
                                  alt: "email",
                                  className:
                                    "md:w-6 md:h-6 w-24 h-24 sm:w-14 sm:h-14 relative z-20",
                                  width: 24,
                                  height: 24,
                                }),
                              }),
                              (0, s.jsx)("input", {
                                type: "email",
                                name: "email",
                                id: "email",
                                value: e,
                                onChange: (e) => t(e.target.value),
                                placeholder: "Email address...",
                                className:
                                  "md:p-3 md:pl-10 p-8 pl-32 sm:pl-24 rounded-lg border border-gray-600 w-full text-gray-500 bg-black placeholder-gray-500 text-7xl md:text-base sm:text-4xl relative z-10",
                              }),
                            ],
                          }),
                          (0, s.jsx)("button", {
                            className:
                              "bg-[purple] hover:bg-gray-900 text-white md:py-3 md:px-8 py-8 px-12 rounded-lg border border-gray-600 w-full flex items-center justify-between text-7xl sm:text-4xl md:text-base relative z-10",
                            onClick: f,
                            disabled: a,
                            children: (0, s.jsx)("span", {
                              className: "mx-auto",
                              children: a ? "Submitting" : "Submit",
                            }),
                          }),
                          u &&
                            (0, s.jsx)("p", {
                              className:
                                "text-red-500 text-center text-[3rem] md:text-[1rem]",
                              children: "Please enter a valid email address",
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        };
    },
    6586: function () {},
  },
  function (e) {
    e.O(0, [19, 615, 478, 69, 744], function () {
      return e((e.s = 1866));
    }),
      (_N_E = e.O());
  },
]);
