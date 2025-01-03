(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    2357: function (e, s, i) {
      Promise.resolve().then(i.bind(i, 7243));
    },
    706: function (e, s, i) {
      "use strict";
      i.d(s, {
        Z: function () {
          return c;
        },
      });
      var t = i(7437),
        a = i(7907),
        l = i(6850),
        r = i(3107),
        n = i(2265);
      function c() {
        let e = (0, a.useSearchParams)();
        async function s(e) {
          await r.Z.post(
            "https://backend.fractionai.xyz/api/landingPageReferral/addVisitorCount",
            { refCode: e },
            { headers: { "Content-Type": "application/json" } }
          );
        }
        return (
          (0, n.useEffect)(() => {
            if (!(0, l.j)()) {
              let i = e.get("refCode");
              i && ((0, l.S)(i), s(i));
            }
          }, []),
          (0, t.jsx)(t.Fragment, {})
        );
      }
    },
    7243: function (e, s, i) {
      "use strict";
      i.r(s),
        i.d(s, {
          default: function () {
            return ec;
          },
        });
      var t = i(7437),
        a = i(2265),
        l = i(4963),
        r = i(9960),
        n = i.n(r);
      i(4656);
      var c = { src: "/_next/static/media/RectangleOne.96544b79.svg" },
        d = { src: "/_next/static/media/RectangleTwo.62e64d7b.svg" },
        m = {
          src: "/_next/static/media/HeroImageNew.38eaa4c1.svg",
          height: 1401,
          width: 1170,
          blurWidth: 0,
          blurHeight: 0,
        },
        o = { src: "/_next/static/media/DashedEllipse.fed6feae.svg" },
        h = i(703),
        x = i(7303),
        f = i(5587),
        j = i(8792),
        u = () => {
          let e = {
            offscreen: { y: 300 },
            onscreen: { y: 50, transition: { type: "spring", duration: 1.8 } },
          };
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)(f.E.div, {
              initial: { opacity: 0 },
              whileInView: {
                opacity: 1,
                transition: { type: "easeIn", stiffness: 100, duration: 1 },
              },
              viewport: { once: !0 },
              children: (0, t.jsx)(f.E.div, {
                variants: e,
                children: (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsxs)("div", {
                      className:
                        "flex justify-between pt-[3.375rem] pb-[5.375rem] pl-[20rem] pr-[24rem]",
                      children: [
                        (0, t.jsx)("div", {
                          className: "flex items-center hero-banner-text",
                          children: (0, t.jsx)("span", { children: x.Dh }),
                        }),
                        (0, t.jsx)("div", {
                          className: n().className,
                          children: (0, t.jsxs)("div", {
                            className: "flex text-[1.125rem] gap-[1.25rem]",
                            children: [
                              (0, t.jsxs)(j.default, {
                                href: "https://app.segmai.xyz",
                                className:
                                  "relative solid-bg-parent w-[9rem] h-[9rem]",
                                children: [
                                  (0, t.jsx)("div", {
                                    className:
                                      "absolute flex justify-center items-center circle-button w-full h-full solid-bg top-0 left-0 z-0",
                                  }),
                                  (0, t.jsx)("div", {
                                    className:
                                      "absolute flex justify-center items-center w-full h-full top-0 left-0 z-1",
                                    children: (0, t.jsx)("span", {
                                      className: "circle-button-content",
                                      children: x.lw,
                                    }),
                                  }),
                                ],
                              }),
                              (0, t.jsxs)(j.default, {
                                className:
                                  "relative transparent-bg-parent w-[7.1875rem] h-[9rem]",
                                href: "https://docs.segmai.xyz",
                                target: "_blank",
                                children: [
                                  (0, t.jsx)("div", {
                                    className:
                                      "absolute flex justify-center items-center w-full h-full circle-button transparent-bg top-0 left-0 z-0",
                                  }),
                                  (0, t.jsx)("div", {
                                    className:
                                      "absolute flex justify-center items-center w-full h-full top-0 left-0 z-1",
                                    children: (0, t.jsx)("span", {
                                      className: "circle-button-content",
                                      children: x.so,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, t.jsx)("div", {
                          className: "ml-[10.9375rem] mr-[15.9375rem]",
                          children: (0, t.jsx)("div", {
                            className: "relative w-full h-[87.5rem]",
                            children: (0, t.jsx)(h.default, {
                              src: m,
                              alt: "Fraction",
                              fill: !0,
                            }),
                          }),
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "absolute w-full top-[46.57%] left-0 pl-[3.75rem] pr-[6.75rem] flex justify-between",
                          children: [
                            (0, t.jsx)(f.E.div, {
                              initial: { opacity: 0, y: 100 },
                              whileInView: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                  type: "easeIn",
                                  stiffness: 100,
                                  duration: 1,
                                },
                              },
                              viewport: { once: !0 },
                              children: (0, t.jsx)(f.E.div, {
                                variants: e,
                                children: (0, t.jsxs)("div", {
                                  className: "w-[37%]",
                                  children: [
                                    (0, t.jsx)("div", {
                                      className:
                                        "hero-banner-problem-header pb-[0.6875rem]",
                                      children: (0, t.jsx)("span", {
                                        children: x.z$,
                                      }),
                                    }),
                                    (0, t.jsx)("div", {
                                      className: "hero-banner-problem-content",
                                      children: (0, t.jsx)("span", {
                                        dangerouslySetInnerHTML: {
                                          __html: x.nt,
                                        },
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            (0, t.jsx)(f.E.div, {
                              initial: { opacity: 0, y: 100 },
                              whileInView: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                  type: "easeIn",
                                  stiffness: 100,
                                  duration: 1,
                                },
                              },
                              viewport: { once: !0 },
                              children: (0, t.jsx)(f.E.div, {
                                variants: e,
                                children: (0, t.jsxs)("div", {
                                  className: "relative mt-[3rem]",
                                  children: [
                                    (0, t.jsx)("div", {
                                      className: "w-[17.75rem]",
                                      children: (0, t.jsx)("span", {
                                        className:
                                          "dashed-ellipse-container-text",
                                        children: x.zC,
                                      }),
                                    }),
                                    (0, t.jsx)("figure", {
                                      className:
                                        "absolute w-[22rem] top-[2.625rem] left-[-2.125rem]",
                                      children: (0, t.jsx)(h.default, {
                                        alt: "centralized",
                                        loading: "lazy",
                                        decoding: "async",
                                        "data-nimg": "1",
                                        src: o.src,
                                        className:
                                          "text-transparent w-[22rem] h-[5rem]",
                                        width: 352,
                                        height: 80,
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsx)(f.E.div, {
                      initial: { opacity: 0, y: 100 },
                      whileInView: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          type: "easeIn",
                          stiffness: 100,
                          duration: 1,
                        },
                      },
                      viewport: { once: !0 },
                      children: (0, t.jsx)(f.E.div, {
                        variants: e,
                        children: (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsxs)("div", {
                              className:
                                "flex justify-center items-center pt-16",
                              children: [
                                (0, t.jsx)("figure", {
                                  className: "solution-line",
                                  children: (0, t.jsx)(h.default, {
                                    src: c.src,
                                    className: "w-[2.6875rem] h-[0.0625rem]",
                                    alt: "",
                                    width: 43,
                                    height: 1,
                                  }),
                                }),
                                (0, t.jsx)("span", {
                                  className: "solution-header px-[0.75rem]",
                                  children: x.JT,
                                }),
                                (0, t.jsx)("figure", {
                                  className: "solution-line",
                                  children: (0, t.jsx)(h.default, {
                                    src: d.src,
                                    className: "w-[2.6875rem] h-[0.0625rem]",
                                    alt: "",
                                    width: 43,
                                    height: 1,
                                  }),
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                "flex flex-col items-center text-white pt-4",
                              children: [
                                (0, t.jsx)("div", {
                                  className: "hero-banner-title",
                                  children: x.AA,
                                }),
                                (0, t.jsx)("div", {
                                  className:
                                    "hero-banner-subtext pt-[1.375rem] w-[41.5625rem]",
                                  children: (0, t.jsx)("span", {
                                    dangerouslySetInnerHTML: { __html: x.Cf },
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        p = i(9922);
      function v(e) {
        let { title: s, description: i } = e;
        return (0, t.jsxs)("div", {
          className:
            "collapse collapse-arrow pb-[2.75rem] rounded-none w-[67.5rem]",
          children: [
            (0, t.jsx)("input", { type: "checkbox" }),
            (0, t.jsx)("div", {
              className: "collapse-title faq-item-header p-0",
              children: s,
            }),
            (0, t.jsx)("div", {
              className: "collapse-content collapse-content-custom p-0",
              children: (0, t.jsx)("p", {
                className:
                  "faq-item-description w-[38.75rem] ml-[3.75rem] pt-[1.75rem]",
                dangerouslySetInnerHTML: { __html: i },
              }),
            }),
          ],
        });
      }
      function N(e) {
        let { title: s, description: i } = e;
        return (0, t.jsxs)("div", {
          className:
            "faq-item-mobile collapse collapse-arrow pb-[11.282rem] rounded-none w-full",
          children: [
            (0, t.jsx)("input", { type: "checkbox" }),
            (0, t.jsx)("div", {
              className: "collapse-title faq-item-header p-0",
              children: (0, t.jsx)("div", {
                className: "w-[73.333rem] pb-[7.436rem]",
                children: (0, t.jsx)("span", {
                  className: "text-[5.641rem] leading-[6.667rem]",
                  children: s,
                }),
              }),
            }),
            (0, t.jsx)("div", {
              className:
                "collapse-content collapse-content-custom p-0 !w-full pt-[4.103rem]",
              children: (0, t.jsx)("p", {
                className:
                  "faq-item-description !text-[4.615rem] !leading-[6.667rem]",
                dangerouslySetInnerHTML: { __html: i },
              }),
            }),
          ],
        });
      }
      i(2562);
      var g = i(3914);
      function w() {
        return (0, t.jsx)(f.E.div, {
          initial: { opacity: 0, y: 100 },
          whileInView: {
            opacity: 1,
            y: 0,
            transition: { type: "easeIn", stiffness: 100, duration: 1 },
          },
          viewport: { once: !0 },
          children: (0, t.jsx)(f.E.div, {
            variants: {
              offscreen: { y: 300 },
              onscreen: {
                y: 50,
                transition: { type: "spring", duration: 1.8 },
              },
            },
            children: (0, t.jsxs)("div", {
              id: "faqs",
              className: "flex pt-[16.9375rem]",
              children: [
                (0, t.jsx)("div", {
                  className: "pl-[10.9375rem] faq-header",
                  children: (0, t.jsx)("span", { children: x.mi }),
                }),
                (0, t.jsx)("div", {
                  className: "pl-[9.5625rem]",
                  children: (0, t.jsx)("div", {
                    children: g.tZ.map((e, s) =>
                      (0, t.jsx)(
                        v,
                        { title: e.title, description: e.description },
                        s
                      )
                    ),
                  }),
                }),
              ],
            }),
          }),
        });
      }
      i(4066);
      var y = i(4232);
      let b = (0, y.default)(
        () => Promise.all([i.e(628), i.e(311)]).then(i.bind(i, 2311)),
        { loadableGenerated: { webpack: () => [2311] }, ssr: !1 }
      );
      var z = () =>
          (0, t.jsx)(f.E.div, {
            initial: { opacity: 0, y: 100 },
            whileInView: {
              opacity: 1,
              y: 0,
              transition: { type: "easeIn", stiffness: 100, duration: 1 },
            },
            viewport: { once: !0 },
            children: (0, t.jsx)(f.E.div, {
              variants: {
                offscreen: { y: 300 },
                onscreen: {
                  y: 50,
                  transition: { type: "spring", duration: 1.8 },
                },
              },
              children: (0, t.jsxs)("div", {
                className: "pt-[13.75rem] relative",
                children: [
                  (0, t.jsxs)("div", {
                    className:
                      "flex justify-between items-center pt-[1.3125rem] pl-[11.375rem] pr-[9.25rem]",
                    children: [
                      (0, t.jsx)("div", {
                        children: (0, t.jsx)("div", {
                          className: "ensuring-data-header",
                          children: x.n6,
                        }),
                      }),
                      (0, t.jsx)("div", {
                        children: (0, t.jsx)("div", {
                          className: "ensuring-data-subheader",
                          children: x.Qz,
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: "flex relative",
                    children: (0, t.jsxs)("div", {
                      className: "flex justify-center",
                      children: [
                        (0, t.jsx)("div", {
                          id: "animation-two-container",
                          className:
                            "w-[79.35rem] h-[50.84875rem] ml-[9.3125rem]",
                          children: (0, t.jsx)(b, {
                            src: "videos/AnimationThree.lottie",
                          }),
                        }),
                        (0, t.jsx)("figure", {
                          className:
                            "absolute top-[27.72625rem] left-[16.1075rem]",
                          children: (0, t.jsx)(h.default, {
                            src: "/_next/static/media/Content.d10ae6ba.svg",
                            className: "w-[69.2675rem] h-[7rem]",
                            alt: "Content",
                            width: 1108,
                            height: 112,
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        I = { src: "/_next/static/media/Cube.93325ca7.svg" },
        _ = { src: "/_next/static/media/Cylinder.5b4ee6e9.svg" },
        k = { src: "/_next/static/media/Pyramid.fbc0d612.svg" };
      function E() {
        return (0, t.jsxs)("div", {
          className: "relative mt-[13.75rem] h-[58.5rem] overflow-x-hidden",
          children: [
            (0, t.jsx)("div", {
              className:
                "flex justify-center absolute top-[0] w-[100rem] mix-blend-lighten",
              children: (0, t.jsx)("div", {
                className: "w-[60rem] h-[45rem]",
                children: (0, t.jsx)("video", {
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  playsInline: !0,
                  disableRemotePlayback: !0,
                  className: "video-black-hole",
                  children: (0, t.jsx)("source", {
                    src: "/videos/BlackHole_Transparent.webm",
                    type: "video/webm",
                  }),
                }),
              }),
            }),
            (0, t.jsx)(f.E.div, {
              initial: { opacity: 0, y: 100 },
              whileInView: {
                opacity: 1,
                y: 0,
                transition: { type: "easeIn", stiffness: 100, duration: 1 },
              },
              viewport: { once: !0 },
              children: (0, t.jsxs)(f.E.div, {
                variants: {
                  offscreen: { y: 300 },
                  onscreen: {
                    y: 50,
                    transition: { type: "spring", duration: 1.8 },
                  },
                },
                children: [
                  (0, t.jsx)("div", {
                    className:
                      "relative w-full flex justify-center z-20 pt-[3.3125rem] text-center",
                    children: (0, t.jsx)("div", {
                      className: "novel-protocol-header w-[39.9375rem]",
                      children: x.IJ,
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className:
                      "absolute top-[13.1875rem] left-[4.1875rem] z-30",
                    children: (0, t.jsx)("figure", {
                      children: (0, t.jsx)(h.default, {
                        src: I.src,
                        className: "w-[27rem] h-[28.4375rem]",
                        alt: "cube",
                        width: 432,
                        height: 455,
                      }),
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: "absolute top-[11rem] left-[66.25rem] z-40",
                    children: (0, t.jsx)("figure", {
                      children: (0, t.jsx)(h.default, {
                        src: k.src,
                        className: "w-[33.0625rem] h-[26.625rem]",
                        alt: "pyramid",
                        width: 529,
                        height: 426,
                      }),
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className:
                      "absolute top-[29.375rem] w-full flex justify-center z-50",
                    children: (0, t.jsx)("figure", {
                      children: (0, t.jsx)(h.default, {
                        src: _.src,
                        className: "w-[23.875rem] h-[27.5rem]",
                        alt: "cylinder",
                        width: 382,
                        height: 440,
                      }),
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className:
                      "absolute top-[22.75rem] left-[8.8125rem] text-center z-[55]",
                    children: (0, t.jsxs)("div", {
                      className: "w-[17rem]",
                      children: [
                        (0, t.jsx)("div", {
                          className: "shape-header !text-[2rem]",
                          children: (0, t.jsx)("span", { children: x.ar }),
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "shape-subtext !text-[1.125rem] !leading-[1.625rem] pt-[1.25rem]",
                          children: (0, t.jsx)("span", { children: x.H8 }),
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className:
                      "absolute top-[21.9375rem] left-[75.4375rem] text-center z-[55]",
                    children: (0, t.jsxs)("div", {
                      className: "w-[15.6875rem]",
                      children: [
                        (0, t.jsx)("div", {
                          className: "shape-header !text-[2rem]",
                          children: (0, t.jsx)("span", { children: x.v }),
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "shape-subtext !text-[1.125rem] !leading-[1.625rem] pt-[1.25rem]",
                          children: (0, t.jsx)("span", { children: x.dc }),
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className:
                      "absolute top-[39.0625rem] w-full flex justify-center text-center z-[55]",
                    children: (0, t.jsxs)("div", {
                      className: "w-[15.1875rem] flex flex-col items-center",
                      children: [
                        (0, t.jsx)("div", {
                          className: "shape-header !text-[2rem]",
                          children: (0, t.jsx)("span", { children: x.m }),
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "shape-subtext !text-[1.125rem] !leading-[1.625rem] pt-[1.25rem] w-[12.3125rem]",
                          children: (0, t.jsx)("span", { children: x.tE }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, t.jsx)("div", {
              className:
                "absolute bottom-[1.625rem] z-50 flex justify-center w-full",
              children: (0, t.jsx)("div", {
                className:
                  "w-[43.125rem] h-[5.875rem] rounded-[1.25rem] border-[0.0625rem] bg-[#080808] border-[#BC87FF] border-solid",
                children: (0, t.jsxs)("div", {
                  className: "flex pl-[2.25rem] pt-[1.9375rem]",
                  children: [
                    (0, t.jsx)("figure", {
                      children: (0, t.jsx)(h.default, {
                        src: "/apple-touch-icon.png",
                        className: "w-[3.125rem] h-[2rem]",
                        alt: "fractionai logo",
                        width: 50,
                        height: 32,
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "pl-[1rem] h-[2rem] flex items-center powered-by-text",
                      children: (0, t.jsx)("span", {
                        className: "!text-[1.125rem] !leading-[1.625rem]",
                        children: x.NR,
                      }),
                    }),
                  ],
                }),
              }),
            }),
            (0, t.jsxs)(j.default, {
              href: "https://app.segmai.xyz",
              className:
                "absolute solid-bg-parent w-[9rem] h-[9rem] top-[49.5rem] left-[63.375rem] z-[60]",
              children: [
                (0, t.jsx)("div", {
                  className:
                    "absolute flex justify-center items-center circle-button w-full h-full solid-bg top-0 left-0 z-0",
                }),
                (0, t.jsx)("div", {
                  className:
                    "absolute flex justify-center items-center w-full h-full top-0 left-0 z-1",
                  children: (0, t.jsx)("span", {
                    className: "circle-button-content",
                    children: x.Rr,
                  }),
                }),
              ],
            }),
          ],
        });
      }
      i(161), i(5768), i(8694), i(566);
      var S = () =>
          (0, t.jsx)(t.Fragment, {
          }),
        C = {
          src: "/_next/static/media/PerpetualLabelledIconsBackground.57ed8b90.svg",
        };
      function V() {
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(f.E.div, {
            initial: { opacity: 0, y: 100 },
            whileInView: {
              opacity: 1,
              y: 0,
              transition: { type: "easeIn", stiffness: 100, duration: 1 },
            },
            viewport: { once: !0 },
            children: (0, t.jsx)(f.E.div, {
              variants: {
                offscreen: { y: 300 },
                onscreen: {
                  y: 50,
                  transition: { type: "spring", duration: 1.8 },
                },
              },
              children: (0, t.jsxs)("div", {
                className: "w-full h-[28.875rem] mt-[13.75rem] relative",
                children: [
                  (0, t.jsx)("figure", {
                    className: "absolute top-0 left-0",
                    children: (0, t.jsx)(h.default, {
                      src: "/_next/static/media/SCurve.ccb392a4.svg",
                      className: "w-[100rem] h-[28.875rem]",
                      alt: "s-curve",
                      width: 1600,
                      height: 462,
                    }),
                  }),
                  (0, t.jsx)("figure", {
                    className: "absolute top-[9rem] left-[42.9375rem]",
                    children: (0, t.jsx)(h.default, {
                      src: C.src,
                      className: "w-[10.375rem] h-[20.875rem]",
                      alt: "perpetual-labelled-icons-background",
                      width: 166,
                      height: 334,
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: "relative flex",
                    children: [
                      (0, t.jsx)("div", {
                        className: "pt-[3rem] pl-[13.75rem]",
                        children: (0, t.jsxs)("div", {
                          className:
                            "flex flex-col justify-between w-[24.25rem] h-[15.125rem]",
                          children: [
                            (0, t.jsx)("div", {
                              className: "perpetual-labelled-header",
                              children: (0, t.jsx)("p", { children: x.RN }),
                            }),
                            (0, t.jsx)("div", {
                              className: "perpetual-labelled-subtext pt-[2rem]",
                              children: (0, t.jsx)("p", { children: x.p2 }),
                            }),
                          ],
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className: "pt-[3.75rem] pl-[7.375rem]",
                        children: [
                          (0, t.jsx)("div", {
                            children: (0, t.jsx)("span", {
                              className: "perpetual-labelled-icon-list-header",
                              children: x.Sy,
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className: "pt-[2.0625rem]",
                            children: g.f0.map((e, s) =>
                              (0, t.jsxs)(
                                "div",
                                {
                                  className: "flex pt-[1.75rem]",
                                  children: [
                                    (0, t.jsx)("div", {
                                      className: "relative",
                                      children: (0, t.jsx)("figure", {
                                        className: "relative",
                                        children: (0, t.jsx)(h.default, {
                                          src: e.Icon.src,
                                          className: "w-[5rem] h-[5rem]",
                                          alt: "Dataset Icon",
                                          loading: "lazy",
                                          decoding: "async",
                                          width: 80,
                                          height: 80,
                                        }),
                                      }),
                                    }),
                                    (0, t.jsxs)("div", {
                                      className:
                                        "text-left pl-[2.5rem] pt-[0.3125rem]",
                                      children: [
                                        (0, t.jsx)("span", {
                                          className:
                                            "perpetual-labelled-icon-header",
                                          children: e.Text,
                                        }),
                                        (0, t.jsx)("br", {}),
                                        (0, t.jsx)("span", {
                                          className:
                                            "perpetual-labelled-icon-subtext",
                                          children: e.subText,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                s
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      }
      i(1253);
      var T = i(9359),
        F = { src: "/_next/static/media/BlockQuote.c34dfe4c.svg" };
      function R() {
        let e = (0, a.useRef)(null),
          [s, i] = (0, a.useState)(1),
          l = (e) => {
            i(e);
          };
        return (0, t.jsx)(f.E.div, {
          initial: { opacity: 0, y: 100 },
          whileInView: {
            opacity: 1,
            y: 0,
            transition: { type: "easeIn", stiffness: 100, duration: 1 },
          },
          viewport: { once: !0 },
          children: (0, t.jsx)(f.E.div, {
            variants: {
              offscreen: { y: 300 },
              onscreen: {
                y: 50,
                transition: { type: "spring", duration: 1.8 },
              },
            },
            children: (0, t.jsxs)("div", {
              className: "relative",
              children: [
                (0, t.jsx)("figure", {
                  className: "absolute top-[-4.25rem] left-0 z-0",
                  children: (0, t.jsx)(h.default, {
                    src: "/_next/static/media/TestimonialsBackground.968a2b40.svg",
                    className: "w-[100rem] h-[59rem]",
                    alt: "testimonials-background",
                    width: 1600,
                    height: 944,
                  }),
                }),
                (0, t.jsxs)("div", {
                  className:
                    "relative flex justify-between items-center px-[27.75rem] z-10",
                  children: [
                    (0, t.jsx)("figure", {
                      onClick: () => {
                        var s;
                        return null === (s = e.current) || void 0 === s
                          ? void 0
                          : s.slickPrev();
                      },
                      children: (0, t.jsx)(h.default, {
                        alt: "",
                        loading: "lazy",
                        className: "w-[3.25rem] h-[3.25rem]",
                        decoding: "async",
                        src: "/_next/static/media/LeftArrowIcon.471f45f6.svg",
                        width: 52,
                        height: 52,
                      }),
                    }),
                    (0, t.jsx)("div", {
                      children: (0, t.jsx)("span", {
                        className: "testimonial-header-text",
                        children: x.aP,
                      }),
                    }),
                    (0, t.jsx)("figure", {
                      onClick: () => {
                        var s;
                        return null === (s = e.current) || void 0 === s
                          ? void 0
                          : s.slickNext();
                      },
                      children: (0, t.jsx)(h.default, {
                        alt: "",
                        loading: "lazy",
                        className: "w-[3.25rem] h-[3.25rem]",
                        decoding: "async",
                        src: "/_next/static/media/RightArrowIcon.2495a398.svg",
                        width: 52,
                        height: 52,
                      }),
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "relative pt-[5.875rem] px-[6rem]",
                  children: (0, t.jsx)(T.Z, {
                    dots: !0,
                    speed: 500,
                    slidesToShow: 3,
                    infinite: !0,
                    centerMode: !0,
                    centerPadding: "0px",
                    arrows: !1,
                    ref: e,
                    beforeChange: (e, s) => l((s + 1) % 3),
                    children: g.pb.map((e, i) =>
                      (0, t.jsx)(
                        "div",
                        {
                          children:
                            i === s
                              ? (0, t.jsx)(B, { testimonial: e })
                              : (0, t.jsx)(M, { testimonial: e }),
                        },
                        i
                      )
                    ),
                  }),
                }),
              ],
            }),
          }),
        });
      }
      function B(e) {
        let { testimonial: s } = e;
        return (0, t.jsxs)(f.E.div, {
          className: "w-[20.5rem] h-full flex flex-col items-center",
          initial: "hidden",
          animate: "visible",
          exit: "exit",
          variants: {
            hidden: { scale: 0.8, y: 10 },
            visible: { scale: 1, y: 0, transition: { duration: 0.5 } },
            exit: { scale: 0.8, y: 10, transition: { duration: 0.5 } },
          },
          children: [
            (0, t.jsx)("figure", {
              children: (0, t.jsx)(h.default, {
                src: s.icon.src,
                className: "w-[6.25rem] h-[6.25rem]",
                alt: "",
                width: 100,
                height: 100,
              }),
            }),
            (0, t.jsxs)("div", {
              className: "flex flex-col items-center text-center pt-[1.25rem]",
              children: [
                (0, t.jsx)("div", {
                  className: "main-card-header",
                  children: s.header,
                }),
                (0, t.jsx)("div", {
                  className: "main-card-subtext pt-[0.3125rem]",
                  children: s.subtext,
                }),
                (0, t.jsx)("figure", {
                  className: "pt-[0.25rem]",
                  children: (0, t.jsx)(h.default, {
                    src: F.src,
                    className: "w-[2.25rem] h-[2.25rem]",
                    alt: "",
                    width: 36,
                    height: 36,
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "main-card-text pt-[0.4375rem]",
                  children: s.text,
                }),
              ],
            }),
          ],
        });
      }
      function M(e) {
        let { testimonial: s } = e;
        return (0, t.jsxs)(f.E.div, {
          className:
            "mt-[3rem] w-[14.375rem] h-full flex flex-col items-center",
          initial: "hidden",
          animate: "visible",
          exit: "exit",
          variants: {
            hidden: { scale: 1.24, y: -10 },
            visible: { scale: 1, y: 0, transition: { duration: 0.5 } },
            exit: { scale: 1.24, y: -10, transition: { duration: 0.5 } },
          },
          children: [
            (0, t.jsx)("figure", {
              children: (0, t.jsx)(h.default, {
                src: s.icon.src,
                className: "w-[5rem] h-[5rem]",
                alt: "",
                width: 80,
                height: 80,
              }),
            }),
            (0, t.jsxs)("div", {
              className: "flex flex-col items-center text-center pt-[1rem]",
              children: [
                (0, t.jsx)("div", {
                  className: "side-card-header",
                  children: s.header,
                }),
                (0, t.jsx)("div", {
                  className: "side-card-subtext pt-[0.25rem]",
                  children: s.subtext,
                }),
                (0, t.jsx)("figure", {
                  children: (0, t.jsx)(h.default, {
                    src: F.src,
                    className: "w-[1.375rem] h-[1.375rem]",
                    alt: "",
                    width: 22,
                    height: 22,
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "side-card-text pt-[0.25rem]",
                  children: s.text,
                }),
              ],
            }),
          ],
        });
      }
      i(7682), i(9265);
      var H = () =>
          (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)(f.E.div, {
              initial: { opacity: 0, y: 100 },
              whileInView: {
                opacity: 1,
                y: 0,
                transition: { type: "easeIn", stiffness: 100, duration: 1 },
              },
              viewport: { once: !0 },
              children: (0, t.jsx)("div", {
                children: (0, t.jsxs)("div", {
                  className: "organisation-conatiner relative",
                  children: [
                    (0, t.jsx)("div", {
                      className: "w-full flex justify-center",
                      children: (0, t.jsx)("div", {
                        className:
                          "w-[68.5625rem] pt-[6rem] text-center organisation-slider-header",
                        children: (0, t.jsx)("span", { children: x.if }),
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "pt-[7.75rem] px-[5rem]",
                      children: (0, t.jsxs)("div", {
                        className: "relative flex overflow-hidden",
                        children: [
                          (0, t.jsx)("div", {
                            className: "flex animate-marquee",
                            children: g.aV.map((e, s) =>
                              (0, t.jsx)(
                                "figure",
                                {
                                  children: (0, t.jsx)("div", {
                                    className: "relative "
                                      .concat(e.width, " ")
                                      .concat(e.height),
                                    children: (0, t.jsx)("div", {
                                      className:
                                        "relative w-full h-full flex justify-center items-center z-10",
                                      children: (0, t.jsx)(h.default, {
                                        alt: "Slide ".concat(s),
                                        className: "object-contain px-8 z-20",
                                        src: e.icon.src,
                                        priority: !0,
                                        fill: !0,
                                      }),
                                    }),
                                  }),
                                },
                                s
                              )
                            ),
                          }),
                          (0, t.jsx)("div", {
                            className: "flex absolute animate-marquee2",
                            children: g.aV.map((e, s) =>
                              (0, t.jsx)(
                                "figure",
                                {
                                  children: (0, t.jsx)("div", {
                                    className: "relative "
                                      .concat(e.width, " ")
                                      .concat(e.height),
                                    children: (0, t.jsx)("div", {
                                      className:
                                        "relative w-full h-full flex justify-center items-center z-10",
                                      children: (0, t.jsx)(h.default, {
                                        alt: "Slide ".concat(s),
                                        className: "object-contain px-8 z-20",
                                        src: e.icon.src,
                                        priority: !0,
                                        fill: !0,
                                      }),
                                    }),
                                  }),
                                },
                                s
                              )
                            ),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          }),
        q = { src: "/_next/static/media/ReadItArrow.55abd8dc.svg" };
      i(309);
      var L = i(768);
      let P = "".concat(L.wB, "/datasets/");
      var A = (e) => {
        let { content: s = "View Datasets", link: i = P } = e;
        return (0, t.jsxs)("div", {
          className:
            "relative transparent-bg-parent w-[29.487rem] h-[29.487rem] sm:w-[14.974rem] sm:h-[14.974rem] md:w-[7.188rem] md:h-[7.188rem] cursor-pointer",
          onClick: () => {
            i && window.open(i, "_blank", "noopener,noreferrer");
          },
          children: [
            (0, t.jsx)("div", {
              className:
                "absolute flex justify-center items-center w-full h-full circle-button transparent-bg top-0 left-0 z-0",
            }),
            (0, t.jsx)("div", {
              className:
                "absolute flex justify-center items-center w-full h-full top-0 left-0 z-1",
              children: (0, t.jsx)("span", {
                className:
                  "circle-button-content !text-[4.615rem] sm:!text-[2.344rem] md:!text-[1.125rem] text-center",
                children: s,
              }),
            }),
          ],
        });
      };
      function Z() {
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(f.E.div, {
            initial: { opacity: 0, y: 100 },
            whileInView: {
              opacity: 1,
              y: 0,
              transition: { type: "easeIn", stiffness: 100, duration: 1 },
            },
            viewport: { once: !0 },
            children: (0, t.jsx)(f.E.div, {
              variants: {
                offscreen: { y: 300 },
                onscreen: {
                  y: 50,
                  transition: { type: "spring", duration: 1.8 },
                },
              },
              children: (0, t.jsxs)("div", {
                children: [
                  (0, t.jsxs)("div", {
                    className: "relative h-[8rem] w-full",
                    children: [
                      (0, t.jsx)("div", {
                        className: "pl-[13.75rem] pt-[3rem] blog-header",
                        children: x.RM,
                      }),
                      (0, t.jsx)("div", {
                        className: "absolute top-7 left-[77.25rem]",
                        children: (0, t.jsx)(A, { content: x.OU, link: L.ke }),
                      }),
                      (0, t.jsx)("div", {
                        className: "absolute top-[6.75rem] left-[3rem]",
                        children: (0, t.jsx)("figure", {
                          children: (0, t.jsx)(h.default, {
                            alt: "Blog Left Curve",
                            loading: "lazy",
                            decoding: "async",
                            src: "/_next/static/media/BlogLeftCurve.cf38e22b.svg",
                            className: "w-[9.5625rem] h-[28.5625rem]",
                            width: 153,
                            height: 457,
                          }),
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "absolute top-[6.75rem] right-[3rem]",
                        children: (0, t.jsx)("figure", {
                          children: (0, t.jsx)(h.default, {
                            alt: "Blog Right Curve",
                            loading: "lazy",
                            decoding: "async",
                            src: "/_next/static/media/BlogRightCurve.f457aa1a.svg",
                            className: "w-[9.5625rem] h-[28.5625rem]",
                            width: 153,
                            height: 457,
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: "flex justify-between px-[11.25rem]",
                    children: g.Jc.map((e, s) =>
                      (0, t.jsxs)(
                        "div",
                        {
                          children: [
                            (0, t.jsx)(j.default, {
                              href: L.ke + e.href,
                              target: "_blank",
                              children: (0, t.jsx)("figure", {
                                children: (0, t.jsx)(h.default, {
                                  alt: "Slide ".concat(s),
                                  loading: "lazy",
                                  decoding: "async",
                                  src: e.icon.src,
                                  className: "w-[18.375rem] h-[18.375rem]",
                                  width: 294,
                                  height: 294,
                                }),
                              }),
                            }),
                            (0, t.jsxs)("div", {
                              className: "pt-[1.25rem] w-[16.875rem]",
                              children: [
                                (0, t.jsx)("div", {
                                  className: "blog-card-text",
                                  children: (0, t.jsx)("span", {
                                    children:
                                      (null == e ? void 0 : e.text.length) >
                                      L.S7
                                        ? (null == e
                                            ? void 0
                                            : e.text.slice(0, L.S7)) + "..."
                                        : null == e
                                        ? void 0
                                        : e.text,
                                  }),
                                }),
                                (0, t.jsxs)(j.default, {
                                  className: "pt-[1.75rem] flex",
                                  href: L.ke + e.href,
                                  target: "_blank",
                                  children: [
                                    (0, t.jsx)("div", {
                                      className: "blog-readme-text",
                                      children: (0, t.jsx)("span", {
                                        children: x.BF,
                                      }),
                                    }),
                                    (0, t.jsx)("figure", {
                                      className: "pl-[0.375rem]",
                                      children: (0, t.jsx)(h.default, {
                                        alt: "Arrow",
                                        loading: "lazy",
                                        decoding: "async",
                                        src: q.src,
                                        className: "w-[1rem] h-[1rem]",
                                        width: 16,
                                        height: 16,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        s
                      )
                    ),
                  }),
                ],
              }),
            }),
          }),
        });
      }
      var D = i(7907),
        W = i(3107),
        J = i(6850);
      function O() {
        let [e, s] = (0, a.useState)(""),
          [i, l] = (0, a.useState)(!1),
          r = (0, D.useRouter)(),
          n = (e) =>
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              String(e).toLowerCase()
            ),
          c = async () => {
            if (!n(e)) {
              l(!0);
              return;
            }
            try {
              l(!1);
              let s = await W.Z.post(
                "https://backend.fractionai.xyz/api/waitList/createNewsLetter",
                { email: e, refCode: (0, J.j)() || "" },
                { headers: { "Content-Type": "application/json" } }
              );
              console.log("Response:", s.data),
                r.push(
                  "/waitlist-confirmation?type=".concat(
                    encodeURIComponent("newsletter")
                  )
                );
            } catch (e) {
              console.error("Error:", e);
            }
          };
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(f.E.div, {
            initial: { opacity: 0, y: 100 },
            whileInView: {
              opacity: 1,
              y: 0,
              transition: { type: "easeIn", stiffness: 100, duration: 1 },
            },
            viewport: { once: !0 },
            children: (0, t.jsx)(f.E.div, {
              variants: {
                offscreen: { y: 300 },
                onscreen: {
                  y: 50,
                  transition: { type: "spring", duration: 1.8 },
                },
              },
              children: (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("figure", {
                    className: "absolute top-0 z-0",
                    children: (0, t.jsx)(h.default, {
                      src: "/_next/static/media/NewsletterBackground.5e260f9a.svg",
                      className: "w-[100rem] h-[27.75rem]",
                      alt: "newsletter",
                      width: 1600,
                      height: 444,
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className:
                      "absolute top-[3.8375rem] h-[19.5rem] flex justify-center w-full",
                    children: (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("div", {
                              className: "pt-[2rem] newsletter-header",
                              children: x.Sg,
                            }),
                            (0, t.jsx)("div", {
                              className: "pt-[0.75rem] newsletter-subtext",
                              children: x.py,
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "h-[9rem] mt-[1rem] flex justify-between items-center w-[41.9375rem]",
                          children: [
                            (0, t.jsx)("div", {
                              className: "pl-[1.4375rem] pt-[0.75rem]",
                              children: (0, t.jsx)("input", {
                                className:
                                  "bg-transparent border-none outline-none input-email w-[31rem]",
                                value: e,
                                onChange: (e) => s(e.target.value),
                                placeholder: x.PN,
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className:
                                "relative w-[9rem] h-[9rem] cursor-pointer",
                              children: (0, t.jsxs)("div", {
                                className:
                                  "absolute solid-bg-parent w-[9rem] h-[9rem] top-[0] left-[0] z-20",
                                children: [
                                  (0, t.jsx)("div", {
                                    className:
                                      "absolute flex justify-center items-center circle-button w-full h-full solid-bg top-0 left-0 z-0",
                                  }),
                                  (0, t.jsx)("div", {
                                    className:
                                      "absolute flex justify-center items-center w-full h-full top-0 left-0 z-1",
                                    onClick: c,
                                    children: (0, t.jsx)("span", {
                                      className: "circle-button-content",
                                      children: x.kD,
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      }
      i(6717);
      var Q = i(8201);
      function U() {
        let e = {
          offscreen: { y: 300 },
          onscreen: { y: 50, transition: { type: "spring", duration: 1.8 } },
        };
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(f.E.div, {
            initial: { opacity: 0 },
            whileInView: {
              opacity: 1,
              transition: { type: "easeIn", stiffness: 100, duration: 1 },
            },
            viewport: { once: !0 },
            className: "md:hidden",
            children: (0, t.jsx)(f.E.div, {
              variants: e,
              children: (0, t.jsxs)("div", {
                className: "relative",
                children: [
                  (0, t.jsx)("figure", {
                    className: "absolute",
                    children: (0, t.jsx)(h.default, {
                      alt: "logo",
                      loading: "lazy",
                      decoding: "async",
                      "data-nimg": "1",
                      src: "/_next/static/media/IntroductionMobileShadow.da0436e3.jpg",
                      className: "text-transparent w-[100rem] h-[225.897rem]",
                      width: 1600,
                      height: 3614.352,
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: "relative z-10",
                    children: [
                      (0, t.jsx)(Q.default, {}),
                      (0, t.jsx)("div", {
                        className:
                          "flex hero-banner-text pl-[10.769rem] pt-[13.333rem]",
                        children: (0, t.jsx)("div", {
                          className: "w-[78.205rem] text-center",
                          children: (0, t.jsx)("span", {
                            className: "text-[9.231rem] leading-[9.231rem]",
                            children: x.Dh,
                          }),
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "pl-[14.102rem] pt-[6.154rem]",
                        children: (0, t.jsxs)("div", {
                          className: "flex gap-[5.128rem]",
                          children: [
                            (0, t.jsxs)(j.default, {
                              href: "https://app.segmai.xyz",
                              className:
                                "relative solid-bg-parent w-[36.923rem] h-[36.923rem]",
                              children: [
                                (0, t.jsx)("div", {
                                  className:
                                    "absolute flex justify-center items-center circle-button w-full h-full solid-bg top-0 left-0 z-0",
                                }),
                                (0, t.jsx)("div", {
                                  className:
                                    "absolute flex justify-center items-center w-full h-full top-0 left-0 z-1",
                                  children: (0, t.jsx)("span", {
                                    className:
                                      "!text-[4.615rem] circle-button-content",
                                    children: x.lw,
                                  }),
                                }),
                              ],
                            }),
                            (0, t.jsxs)(j.default, {
                              href: "https://docs.segmai.xyz",
                              target: "_blank",
                              className:
                                "relative transparent-bg-parent w-[29.487rem] h-[36.923rem]",
                              children: [
                                (0, t.jsx)("div", {
                                  className:
                                    "absolute flex justify-center items-center w-full h-full circle-button transparent-bg top-0 left-0 z-0",
                                }),
                                (0, t.jsx)("div", {
                                  className:
                                    "absolute flex justify-center items-center w-full h-full top-0 left-0 z-1",
                                  children: (0, t.jsx)("span", {
                                    className:
                                      "!text-[4.615rem] circle-button-content",
                                    children: x.so,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, t.jsx)("figure", {
                        className: "pt-[11.282rem]",
                        children: (0, t.jsx)(h.default, {
                          alt: "logo",
                          loading: "lazy",
                          decoding: "async",
                          "data-nimg": "1",
                          src: "/_next/static/media/HeroImageMobile.77496780.png",
                          className:
                            "text-transparent w-[100rem] h-[199.487rem]",
                          width: 1600,
                          height: 3191.792,
                        }),
                      }),
                      (0, t.jsx)(f.E.div, {
                        initial: { opacity: 0, y: 100 },
                        whileInView: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            type: "easeIn",
                            stiffness: 100,
                            duration: 1,
                          },
                        },
                        viewport: { once: !0 },
                        children: (0, t.jsx)(f.E.div, {
                          variants: e,
                          children: (0, t.jsxs)("div", {
                            className:
                              "w-[43.846rem] ml-[5.128rem] pt-[7.436rem]",
                            children: [
                              (0, t.jsx)("div", {
                                className:
                                  "hero-banner-problem-header pb-[0.6875rem]",
                                children: (0, t.jsx)("span", {
                                  className:
                                    "text-[3.077rem] leading-[6.154rem]",
                                  children: x.z$,
                                }),
                              }),
                              (0, t.jsx)("div", {
                                className: "hero-banner-problem-content",
                                children: (0, t.jsx)("span", {
                                  className: "text-[3.589rem]",
                                  dangerouslySetInnerHTML: { __html: x.nt },
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, t.jsx)(f.E.div, {
                        initial: { opacity: 0, y: 100 },
                        whileInView: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            type: "easeIn",
                            stiffness: 100,
                            duration: 1,
                          },
                        },
                        viewport: { once: !0 },
                        children: (0, t.jsxs)("div", {
                          className: "relative mt-[5.128rem] ml-[51.538rem]",
                          children: [
                            (0, t.jsx)("div", {
                              className: "w-[40rem]",
                              children: (0, t.jsx)("span", {
                                className:
                                  "dashed-ellipse-container-text !text-[3.59rem]",
                                children: x.zC,
                              }),
                            }),
                            (0, t.jsx)("figure", {
                              className:
                                "absolute w-[48.205rem] top-[8.974rem] left-[-5.128rem]",
                              children: (0, t.jsx)(h.default, {
                                alt: "centralized",
                                loading: "lazy",
                                decoding: "async",
                                "data-nimg": "1",
                                src: o.src,
                                className:
                                  "text-transparent w-[48.205rem] h-[15.641rem]",
                                width: 771.28,
                                height: 250.256,
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, t.jsx)(f.E.div, {
                        initial: { opacity: 0, y: 100 },
                        whileInView: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            type: "easeIn",
                            stiffness: 100,
                            duration: 1,
                          },
                        },
                        viewport: { once: !0 },
                        children: (0, t.jsxs)(f.E.div, {
                          variants: e,
                          children: [
                            (0, t.jsxs)("div", {
                              className:
                                "flex justify-center items-center pt-[27.692rem]",
                              children: [
                                (0, t.jsx)("figure", {
                                  className: "solution-line",
                                  children: (0, t.jsx)(h.default, {
                                    src: c.src,
                                    className: "w-[11.026rem] h-[0.256rem]",
                                    alt: "",
                                    width: 176.416,
                                    height: 4.096,
                                  }),
                                }),
                                (0, t.jsx)("span", {
                                  className:
                                    "solution-header px-[3.077rem] !text-[3.077rem] !leading-[6.154rem]",
                                  children: x.JT,
                                }),
                                (0, t.jsx)("figure", {
                                  className: "solution-line",
                                  children: (0, t.jsx)(h.default, {
                                    src: d.src,
                                    className: "w-[11.026rem] h-[0.256rem]",
                                    alt: "",
                                    width: 176.416,
                                    height: 4.096,
                                  }),
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                "flex flex-col items-center text-white pt-[4.102rem]",
                              children: [
                                (0, t.jsx)("div", {
                                  className:
                                    "hero-banner-title !text-[9.231rem]",
                                  children: x.AA,
                                }),
                                (0, t.jsx)("div", {
                                  className:
                                    "hero-banner-subtext pt-[4.103rem] !text-[5.128rem] !leading-[7.179rem] w-[89.487rem]",
                                  children: (0, t.jsx)("span", {
                                    dangerouslySetInnerHTML: { __html: x.Cf },
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      }
      function $() {
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(f.E.div, {
            initial: { opacity: 0, y: 100 },
            whileInView: {
              opacity: 1,
              y: 0,
              transition: { type: "easeIn", stiffness: 100, duration: 1 },
            },
            viewport: { once: !0 },
            children: (0, t.jsx)("div", {
              className: "w-[100rem] h-[131.538rem] pt-[37.436rem]",
              children: (0, t.jsxs)("div", {
                className: "relative",
                children: [
                  (0, t.jsx)("figure", {
                    className: "absolute top-[-172.436rem]",
                    children: (0, t.jsx)(h.default, {
                      alt: "logo",
                      loading: "lazy",
                      decoding: "async",
                      "data-nimg": "1",
                      src: "/_next/static/media/InvestorsMobileShadow2.ff47d2e8.png",
                      className: "text-transparent w-[100rem] h-[347.436rem]",
                      width: 1600,
                      height: 5558.976,
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: "relative z-10",
                    children: [
                      (0, t.jsx)("figure", {
                        className: "absolute top-0 left-0",
                        children: (0, t.jsx)(h.default, {
                          src: "/_next/static/media/InvestorBackgroundMobile.5c73c5b4.svg",
                          className: "w-[100rem] h-[94.103rem]",
                          alt: "Ellipse",
                          width: 1600,
                          height: 1505.648,
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "relative px-[5.769rem] pt-[36.923rem]",
                        children: (0, t.jsx)("div", {
                          className: "investor-logo-carousel",
                          children: (0, t.jsxs)("div", {
                            className:
                              "relative w-full h-[36.923rem] overflow-hidden",
                            children: [
                              (0, t.jsx)("div", {
                                className: "flex absolute animate-marquee",
                                children: g.WH.map((e, s) =>
                                  (0, t.jsx)(
                                    "figure",
                                    {
                                      children: (0, t.jsx)("div", {
                                        className: "relative "
                                          .concat(e.mobileWidth, " ")
                                          .concat(e.mobileHeight),
                                        children: (0, t.jsx)("div", {
                                          className:
                                            "relative w-full h-full flex justify-center items-center z-10",
                                          children: (0, t.jsx)(h.default, {
                                            src: e.icon.src,
                                            alt: "Slide ".concat(s),
                                            className:
                                              "object-contain p-16 z-20",
                                            priority: !0,
                                            fill: !0,
                                          }),
                                        }),
                                      }),
                                    },
                                    s
                                  )
                                ),
                              }),
                              (0, t.jsx)("div", {
                                className:
                                  "flex absolute top-0 animate-marquee2",
                                children: g.WH.map((e, s) =>
                                  (0, t.jsx)(
                                    "figure",
                                    {
                                      children: (0, t.jsx)("div", {
                                        className: "relative "
                                          .concat(e.mobileWidth, " ")
                                          .concat(e.mobileHeight),
                                        children: (0, t.jsx)("div", {
                                          className:
                                            "relative w-full h-full flex justify-center items-center z-10",
                                          children: (0, t.jsx)(h.default, {
                                            src: e.icon.src,
                                            alt: "Slide ".concat(s),
                                            className:
                                              "object-contain p-16 z-20",
                                            priority: !0,
                                            fill: !0,
                                          }),
                                        }),
                                      }),
                                    },
                                    s
                                  )
                                ),
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      }
      function G() {
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(f.E.div, {
            initial: { opacity: 0, y: 100 },
            whileInView: {
              opacity: 1,
              y: 0,
              transition: { type: "easeIn", stiffness: 100, duration: 1 },
            },
            viewport: { once: !0 },
            children: (0, t.jsx)(f.E.div, {
              variants: {
                offscreen: { y: 300 },
                onscreen: {
                  y: 50,
                  transition: { type: "spring", duration: 1.8 },
                },
              },
              children: (0, t.jsxs)("div", {
                className: "w-full pt-[34.359rem] relative",
                children: [
                  (0, t.jsx)("figure", {
                    className: "absolute top-[97.436rem]",
                    children: (0, t.jsx)(h.default, {
                      alt: "logo",
                      loading: "lazy",
                      decoding: "async",
                      "data-nimg": "1",
                      src: "/_next/static/media/PerpetualMobileShadow2.e1a89918.png",
                      className:
                        "text-transparent w-[100rem] h-[268.974rem] opacity-70",
                      width: 1600,
                      height: 4303.584,
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: "relative z-10",
                    children: [
                      (0, t.jsx)("div", {
                        className: "pl-[12.821rem]",
                        children: (0, t.jsxs)("div", {
                          className: "w-[82.051rem]",
                          children: [
                            (0, t.jsx)("div", {
                              className: "perpetual-labelled-header",
                              children: (0, t.jsx)("p", {
                                className: "text-[11.795rem]",
                                children: x.RN,
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className:
                                "pt-[7.179rem] perpetual-labelled-subtext",
                              children: (0, t.jsx)("p", {
                                className:
                                  "text-[4.103rem] leading-[7.179rem] text-left",
                                children: x.p2,
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "pt-[20.513rem] ml-[12.821rem] w-[74.615rem]",
                        children: (0, t.jsx)("span", {
                          className:
                            "perpetual-labelled-icon-list-header !text-[4.615rem] !leading-[8.205rem]",
                          children: x.Sy,
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className: "relative pt-[9.231rem] pl-[5.385rem]",
                        children: [
                          (0, t.jsx)("figure", {
                            className:
                              "absolute top-[14rem] left-[-5rem] z-[-3]",
                            children: (0, t.jsx)(h.default, {
                              src: C.src,
                              className: "w-[42.564rem] h-[85.641rem]",
                              alt: "perpetual-labelled-icons-background",
                              width: 681.024,
                              height: 1370.256,
                            }),
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex",
                            children: [
                              (0, t.jsx)("div", {
                                children: (0, t.jsx)("figure", {
                                  children: (0, t.jsx)(h.default, {
                                    src: g.f0[0].Icon.src,
                                    className:
                                      "w-[20.513rem] h-[20.513rem] mt-[4rem] ml-[2rem]",
                                    alt: "Dataset Icon",
                                    loading: "lazy",
                                    decoding: "async",
                                    width: 328.208,
                                    height: 328.208,
                                  }),
                                }),
                              }),
                              (0, t.jsxs)("div", {
                                className:
                                  "text-left ml-[8.256rem] pt-[1.282rem] w-[51.79rem]",
                                children: [
                                  (0, t.jsx)("div", {
                                    className:
                                      "perpetual-labelled-icon-header !text-[5.641rem] !leading-[6.667rem]",
                                    children: g.f0[0].Text,
                                  }),
                                  (0, t.jsx)("div", {
                                    className:
                                      "perpetual-labelled-icon-subtext !text-[4.103rem] !leading-[5.128rem] pt-[2.051rem]",
                                    children: g.f0[0].subText,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex pt-[8rem]",
                            children: [
                              (0, t.jsx)("div", {
                                children: (0, t.jsx)("figure", {
                                  children: (0, t.jsx)(h.default, {
                                    src: g.f0[1].Icon.src,
                                    className:
                                      "w-[20.513rem] h-[20.513rem] ml-[2rem]",
                                    alt: "Dataset Icon",
                                    loading: "lazy",
                                    decoding: "async",
                                    width: 328.208,
                                    height: 328.208,
                                  }),
                                }),
                              }),
                              (0, t.jsxs)("div", {
                                className:
                                  "text-left ml-[8.256rem] pt-[1.538rem] w-[51.79rem]",
                                children: [
                                  (0, t.jsx)("div", {
                                    className:
                                      "perpetual-labelled-icon-header !text-[5.641rem] !leading-[6.667rem]",
                                    children: g.f0[1].Text,
                                  }),
                                  (0, t.jsx)("div", {
                                    className:
                                      "perpetual-labelled-icon-subtext !text-[4.103rem] !leading-[5.128rem] pt-[2.051rem]",
                                    children: g.f0[1].subText,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex pt-[7rem]",
                            children: [
                              (0, t.jsx)("div", {
                                children: (0, t.jsx)("figure", {
                                  children: (0, t.jsx)(h.default, {
                                    src: g.f0[2].Icon.src,
                                    className:
                                      "w-[20.513rem] h-[20.513rem] ml-[2rem]",
                                    alt: "Dataset Icon",
                                    loading: "lazy",
                                    decoding: "async",
                                    width: 328.208,
                                    height: 328.208,
                                  }),
                                }),
                              }),
                              (0, t.jsxs)("div", {
                                className:
                                  "text-left ml-[8.256rem] pt-[1.538rem] w-[51.79rem]",
                                children: [
                                  (0, t.jsx)("div", {
                                    className:
                                      "perpetual-labelled-icon-header !text-[5.641rem] !leading-[6.667rem]",
                                    children: g.f0[2].Text,
                                  }),
                                  (0, t.jsx)("div", {
                                    className:
                                      "perpetual-labelled-icon-subtext !text-[4.103rem] !leading-[5.128rem] pt-[2.051rem]",
                                    children: g.f0[2].subText,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      }
      function K() {
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsxs)("div", {
            className: "relative mt-[38.974rem] h-[403.077rem]",
            children: [
              (0, t.jsx)("div", {
                className: "absolute top-[34.744rem] mix-blend-lighten",
                children: (0, t.jsx)("div", {
                  className:
                    "h-[97.692rem] w-[100rem] overflow-hidden flex justify-center items-center",
                  children: (0, t.jsx)("video", {
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                    disableRemotePlayback: !0,
                    className: "scale-[3]",
                    children: (0, t.jsx)("source", {
                      src: "/videos/BlackHole_Transparent.webm",
                      type: "video/webm",
                    }),
                  }),
                }),
              }),
              (0, t.jsx)("figure", {
                className: "absolute bottom-[-158.205rem]",
                children: (0, t.jsx)(h.default, {
                  alt: "logo",
                  loading: "lazy",
                  decoding: "async",
                  "data-nimg": "1",
                  src: "/_next/static/media/NovelMobileShadow2.f12a45b7.png",
                  className: "text-transparent w-[100rem] h-[340rem]",
                  width: 1600,
                  height: 5440,
                }),
              }),
              (0, t.jsx)(f.E.div, {
                initial: { opacity: 0, y: 100 },
                whileInView: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "easeIn", stiffness: 100, duration: 1 },
                },
                viewport: { once: !0 },
                children: (0, t.jsxs)(f.E.div, {
                  variants: {
                    offscreen: { y: 300 },
                    onscreen: {
                      y: 50,
                      transition: { type: "spring", duration: 1.8 },
                    },
                  },
                  children: [
                    (0, t.jsx)("div", {
                      className: "relative px-[2rem] flex justify-center z-20",
                      children: (0, t.jsx)("div", {
                        className:
                          "novel-protocol-header !text-[10.795rem] w-full",
                        children: (0, t.jsx)("span", { children: x.IJ }),
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "absolute top-[118.205rem] left-[0] z-30",
                      children: (0, t.jsx)("figure", {
                        children: (0, t.jsx)(h.default, {
                          src: I.src,
                          className: "w-[110.769rem] h-[116.667rem]",
                          alt: "cube",
                          width: 1772.304,
                          height: 1866.672,
                        }),
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "absolute top-[188.487rem] left-[-6.667rem] z-40",
                      children: (0, t.jsx)("figure", {
                        children: (0, t.jsx)(h.default, {
                          src: k.src,
                          className: "w-[109.487rem] h-[84.615rem]",
                          alt: "pyramid",
                          width: 1751.792,
                          height: 1353.84,
                        }),
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "absolute top-[258.197rem] z-50",
                      children: (0, t.jsx)("figure", {
                        children: (0, t.jsx)(h.default, {
                          src: _.src,
                          className: "w-[97.945rem] h-[112.821rem]",
                          alt: "cylinder",
                          width: 1567.12,
                          height: 1805.136,
                        }),
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "absolute top-[155.282rem] w-full flex justify-center text-center z-[55]",
                      children: (0, t.jsxs)("div", {
                        className: "w-[57rem]",
                        children: [
                          (0, t.jsx)("div", {
                            className: "shape-header",
                            children: (0, t.jsx)("span", { children: x.ar }),
                          }),
                          (0, t.jsx)("div", {
                            className: "shape-subtext pt-[4.872rem]",
                            children: (0, t.jsx)("span", { children: x.H8 }),
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "absolute top-[225.282rem] w-full flex justify-center text-center z-[55]",
                      children: (0, t.jsxs)("div", {
                        className: "w-[64.359rem]",
                        children: [
                          (0, t.jsx)("div", {
                            className: "shape-header",
                            children: (0, t.jsx)("span", { children: x.v }),
                          }),
                          (0, t.jsx)("div", {
                            className: "shape-subtext pt-[4.872rem]",
                            children: (0, t.jsx)("span", { children: x.dc }),
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "absolute top-[300.282rem] w-full flex justify-center text-center z-[55]",
                      children: (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("div", {
                            className: "shape-header w-[56.923rem]",
                            children: (0, t.jsx)("span", { children: x.m }),
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "shape-subtext pt-[4.872rem] w-[50.513rem]",
                            children: (0, t.jsx)("span", { children: x.tE }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              (0, t.jsx)("div", {
                className:
                  "absolute bottom-[18.462rem] z-50 flex justify-center w-full",
                children: (0, t.jsx)("div", {
                  className:
                    "w-[89.744rem] h-[43.077rem] rounded-[5.128rem] border-[0.256rem] bg-[#080808] border-[#BC87FF] border-solid",
                  children: (0, t.jsxs)("div", {
                    className: "flex pl-[10.769rem] pt-[8.974rem]",
                    children: [
                      (0, t.jsx)("figure", {
                        children: (0, t.jsx)(h.default, {
                          src: "/_next/static/media/FracLogo.43d8c45f.jpg",
                          className: "w-[12.821rem] h-[8.205rem]",
                          alt: "fractionai logo",
                          width: 205.136,
                          height: 131.28,
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "pl-[4.103rem] h-[8.205rem] flex items-center powered-by-text",
                        children: (0, t.jsx)("span", { children: x.NR }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, t.jsx)("div", {
                className:
                  "absolute bottom-0 flex justify-center w-full z-[60]",
                children: (0, t.jsxs)(j.default, {
                  href: "https://app.segmai.xyz",
                  className:
                    "relative solid-bg-parent w-[36.923rem] h-[36.923rem]",
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "absolute flex justify-center items-center circle-button w-full h-full solid-bg top-0 left-0",
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "absolute flex justify-center items-center w-full h-full top-0 left-0",
                      children: (0, t.jsx)("span", {
                        className: "!text-[4.615rem] circle-button-content",
                        children: x.Rr,
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      let X = (0, y.default)(
        () => Promise.all([i.e(628), i.e(311)]).then(i.bind(i, 2311)),
        { loadableGenerated: { webpack: () => [2311] }, ssr: !1 }
      );
      function Y() {
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(f.E.div, {
            initial: { opacity: 0, y: 100 },
            whileInView: {
              opacity: 1,
              y: 0,
              transition: { type: "easeIn", stiffness: 100, duration: 1 },
            },
            viewport: { once: !0 },
            children: (0, t.jsx)(f.E.div, {
              variants: {
                offscreen: { y: 300 },
                onscreen: {
                  y: 50,
                  transition: { type: "spring", duration: 1.8 },
                },
              },
              children: (0, t.jsxs)("div", {
                className: "pt-[38.974rem] relative",
                children: [
                  (0, t.jsxs)("div", {
                    className: "pl-[5.128rem] pr-[6.667rem]",
                    children: [
                      (0, t.jsx)("div", {
                        children: (0, t.jsx)("div", {
                          className:
                            "ensuring-data-header !text-[11.282rem] !leading-[100%] w-[80.205rem]",
                          children: x.n6,
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "pt-[12.821rem] pl-[35.231rem]",
                        children: (0, t.jsx)("div", {
                          className:
                            "ensuring-data-subheader !text-right !text-[5.128rem] !leading-[7.179rem]",
                          children: x.Qz,
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: "flex relative",
                    children: (0, t.jsx)("div", {
                      className:
                        "flex justify-center items-center w-full h-[87.436rem] overflow-hidden",
                      children: (0, t.jsx)("div", {
                        id: "data-quality-mobile",
                        className: "scale-[1.5]",
                        children: (0, t.jsx)(X, {
                          src: "videos/AnimationThree.lottie",
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      }
      function ee() {
        let e = (0, a.useRef)(null),
          [s, i] = (0, a.useState)(1),
          l = (e) => {
            i(e);
          };
        return (0, t.jsx)(f.E.div, {
          initial: { opacity: 0, y: 100 },
          whileInView: {
            opacity: 1,
            y: 0,
            transition: { type: "easeIn", stiffness: 100, duration: 1 },
          },
          viewport: { once: !0 },
          children: (0, t.jsx)(f.E.div, {
            variants: {
              offscreen: { y: 300 },
              onscreen: {
                y: 50,
                transition: { type: "spring", duration: 1.8 },
              },
            },
            children: (0, t.jsxs)("div", {
              className: "relative",
              children: [
                (0, t.jsx)("figure", {
                  className: "absolute top-[20rem] left-0 z-0",
                  children: (0, t.jsx)(h.default, {
                    src: "/_next/static/media/TestimonialBgMobile.b214ad80.svg",
                    className: "w-[100rem] h-[242.051rem]",
                    alt: "testimonials-background",
                    width: 1600,
                    height: 3872.816,
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "relative",
                  children: (0, t.jsx)("div", {
                    className:
                      "absolute w-full h-[0.256rem] bg-[#43325F] top-[86.974rem]",
                  }),
                }),
                (0, t.jsx)("div", {
                  className:
                    "flex justify-center items-center pt-[39.231rem] w-full",
                  children: (0, t.jsx)("div", {
                    children: (0, t.jsx)("span", {
                      className: "testimonial-header-text !text-[11.795rem]",
                      children: x.aP,
                    }),
                  }),
                }),
                (0, t.jsx)("div", {
                  className:
                    "pt-[22.821rem] slick-mobile overflow-hidden max-w-[100rem]",
                  children: (0, t.jsx)(T.Z, {
                    dots: !0,
                    speed: 800,
                    slidesToShow: 1,
                    infinite: !0,
                    centerPadding: "0px",
                    slidesToScroll: 1,
                    arrows: !1,
                    ref: e,
                    afterChange: (e) => l(e),
                    swipeToSlide: !0,
                    touchMove: !0,
                    children: g.pb.map((e, s) =>
                      (0, t.jsx)(
                        "div",
                        { children: (0, t.jsx)(es, { testimonial: e }) },
                        s
                      )
                    ),
                  }),
                }),
              ],
            }),
          }),
        });
      }
      function es(e) {
        let { testimonial: s } = e;
        return (0, t.jsxs)("div", {
          className: "w-[84.103rem] pb-[32.964rem] flex flex-col items-center",
          children: [
            (0, t.jsx)("figure", {
              children: (0, t.jsx)(h.default, {
                src: s.icon.src,
                className: "w-[25.641rem] h-[25.641rem]",
                alt: "testimonial",
                width: 410.256,
                height: 410.256,
                priority: !0,
              }),
            }),
            (0, t.jsxs)("div", {
              className: "flex flex-col items-center text-center pt-[5.128rem]",
              children: [
                (0, t.jsx)("div", {
                  className: "main-card-header !text-[6.154rem]",
                  children: s.header,
                }),
                (0, t.jsx)("div", {
                  className:
                    "main-card-subtext pt-[1.282rem] !text-[3.076rem] !leading-[6.154rem]",
                  children: s.subtext,
                }),
                (0, t.jsx)("figure", {
                  className: "pt-[1.023rem]",
                  children: (0, t.jsx)(h.default, {
                    src: F.src,
                    className: "w-[9.231rem] h-[9.231rem]",
                    alt: "block-quote",
                    width: 147.696,
                    height: 147.696,
                    priority: !0,
                  }),
                }),
                (0, t.jsx)("div", {
                  className:
                    "main-card-text pt-[1.795rem] w-[84.103rem] !text-[4.615rem] !leading-[6.667rem]",
                  children: s.text,
                }),
              ],
            }),
          ],
        });
      }
      function ei() {
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(f.E.div, {
            initial: { opacity: 0, y: 100 },
            whileInView: {
              opacity: 1,
              y: 0,
              transition: { type: "easeIn", stiffness: 100, duration: 1 },
            },
            viewport: { once: !0 },
            children: (0, t.jsx)(f.E.div, {
              variants: {
                offscreen: { y: 300 },
                onscreen: {
                  y: 50,
                  transition: { type: "spring", duration: 1.8 },
                },
              },
              children: (0, t.jsxs)("div", {
                className: "mt-[38.974rem] relative",
                children: [
                  (0, t.jsx)("figure", {
                    className: "absolute bottom-[-126.154rem]",
                    children: (0, t.jsx)(h.default, {
                      alt: "logo",
                      loading: "lazy",
                      decoding: "async",
                      "data-nimg": "1",
                      src: "/_next/static/media/OrganisationMobileShadow2.efbfa735.png",
                      className: "text-transparent w-[100rem] h-[296.667rem]",
                      width: 1600,
                      height: 4746.672,
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: "organisation-conatiner-mobile relative z-10",
                    children: [
                      (0, t.jsx)("div", {
                        className: "flex justify-center",
                        children: (0, t.jsx)("div", {
                          className:
                            "w-[89.744rem] pt-[14.359rem] text-center organisation-slider-header",
                          children: (0, t.jsx)("span", {
                            className: "text-[6.41rem] leading-[110%]",
                            children: x.if,
                          }),
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "pt-[20.513rem] px-[5.128rem] overflow-hidden max-w-[100rem]",
                        children: (0, t.jsxs)("div", {
                          className: "relative flex overflow-hidden",
                          children: [
                            (0, t.jsx)("div", {
                              className: "flex animate-marquee",
                              children: g.aV.map((e, s) =>
                                (0, t.jsx)(
                                  "figure",
                                  {
                                    children: (0, t.jsx)("div", {
                                      className: "relative "
                                        .concat(e.mobileWidth, " ")
                                        .concat(e.mobileHeight),
                                      children: (0, t.jsx)("div", {
                                        className:
                                          "relative w-full h-full flex justify-center items-center z-10",
                                        children: (0, t.jsx)(h.default, {
                                          alt: "Slide ".concat(s),
                                          className:
                                            "object-contain px-12 z-20",
                                          src: e.icon.src,
                                          priority: !0,
                                          fill: !0,
                                        }),
                                      }),
                                    }),
                                  },
                                  s
                                )
                              ),
                            }),
                            (0, t.jsx)("div", {
                              className: "flex absolute animate-marquee2",
                              children: g.aV.map((e, s) =>
                                (0, t.jsx)(
                                  "figure",
                                  {
                                    children: (0, t.jsx)("div", {
                                      className: "relative "
                                        .concat(e.mobileWidth, " ")
                                        .concat(e.mobileHeight),
                                      children: (0, t.jsx)("div", {
                                        className:
                                          "relative w-full h-full flex justify-center items-center z-10",
                                        children: (0, t.jsx)(h.default, {
                                          alt: "Slide ".concat(s),
                                          className:
                                            "object-contain px-12 z-20",
                                          src: e.icon.src,
                                          priority: !0,
                                          fill: !0,
                                        }),
                                      }),
                                    }),
                                  },
                                  s
                                )
                              ),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      }
      function et() {
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(f.E.div, {
            initial: { opacity: 0, y: 100 },
            whileInView: {
              opacity: 1,
              y: 0,
              transition: { type: "easeIn", stiffness: 100, duration: 1 },
            },
            viewport: { once: !0 },
            children: (0, t.jsx)(f.E.div, {
              variants: {
                offscreen: { y: 300 },
                onscreen: {
                  y: 50,
                  transition: { type: "spring", duration: 1.8 },
                },
              },
              children: (0, t.jsxs)("div", {
                className: "relative mt-[38.974rem] h-[507.436rem] z-20",
                children: [
                  (0, t.jsx)("figure", {
                    className: "absolute top-[92.821rem]",
                    children: (0, t.jsx)(h.default, {
                      alt: "logo",
                      loading: "lazy",
                      decoding: "async",
                      "data-nimg": "1",
                      src: "/_next/static/media/BlogMobileShadow2.43af0582.png",
                      className: "text-transparent w-[100rem] h-[215.385rem]",
                      width: 1600,
                      height: 3446.16,
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, t.jsx)("figure", {
                        className: "absolute bottom-0 -z-10",
                        children: (0, t.jsx)(h.default, {
                          alt: "Blog Left Curve",
                          loading: "lazy",
                          decoding: "async",
                          src: "/_next/static/media/BlogBackgroundMobile.a0bdb17c.svg",
                          className: "w-full h-[462.308rem]",
                          width: 1600,
                          height: 7396.928,
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "w-full",
                        children: (0, t.jsx)("div", {
                          className:
                            "flex justify-center blog-header !text-[10.256rem] !leading-[100%]",
                          children: x.RM,
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "absolute top-[17.436rem] flex justify-center w-full",
                        children: (0, t.jsxs)(j.default, {
                          href: L.ke,
                          target: "_blank",
                          className:
                            "relative transparent-bg-parent w-[36.923rem] h-[36.923rem]",
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "absolute flex justify-center items-center w-full h-full circle-button transparent-bg top-0 left-0 z-0",
                            }),
                            (0, t.jsx)("div", {
                              className:
                                "absolute flex justify-center items-center w-full h-full top-0 left-0 z-1",
                              children: (0, t.jsx)("span", {
                                className:
                                  "circle-button-content !text-[4.615rem]",
                                children: x.OU,
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "flex flex-col items-center justify-between w-full mt-[40rem] h-[457.179rem]",
                        children: g.Jc.map((e, s) =>
                          (0, t.jsxs)(
                            "div",
                            {
                              children: [
                                (0, t.jsx)(j.default, {
                                  href: L.ke + e.href,
                                  target: "_blank",
                                  children: (0, t.jsx)("figure", {
                                    children: (0, t.jsx)(h.default, {
                                      alt: "Slide ".concat(s),
                                      loading: "lazy",
                                      decoding: "async",
                                      src: e.icon.src,
                                      className: "w-[75.385rem] h-[75.385rem]",
                                      width: 1206.16,
                                      height: 1206.16,
                                    }),
                                  }),
                                }),
                                (0, t.jsxs)("div", {
                                  className: "pt-[5.128rem] pl-[3.077rem]",
                                  children: [
                                    (0, t.jsx)("div", {
                                      className: "blog-card-text w-[69.231rem]",
                                      children: (0, t.jsx)("span", {
                                        className:
                                          "text-[4.103rem] leading-[6.667rem]",
                                        children:
                                          (null == e ? void 0 : e.text.length) >
                                          L.S7
                                            ? (null == e
                                                ? void 0
                                                : e.text.slice(0, L.S7)) + "..."
                                            : null == e
                                            ? void 0
                                            : e.text,
                                      }),
                                    }),
                                    (0, t.jsxs)(j.default, {
                                      className: "pt-[5.641rem] flex",
                                      href: L.ke + e.href,
                                      target: "_blank",
                                      children: [
                                        (0, t.jsx)("div", {
                                          className: "blog-readme-text",
                                          children: (0, t.jsx)("span", {
                                            className:
                                              "text-[3.59rem] leading-[4.103rem]",
                                            children: x.BF,
                                          }),
                                        }),
                                        (0, t.jsx)("figure", {
                                          className: "pl-[1.538rem]",
                                          children: (0, t.jsx)(h.default, {
                                            alt: "Arrow",
                                            loading: "lazy",
                                            decoding: "async",
                                            src: q.src,
                                            className:
                                              "w-[4.103rem] h-[4.103rem]",
                                            width: 65.648,
                                            height: 65.648,
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            s
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      }
      function ea() {
        return (0, t.jsx)(f.E.div, {
          initial: { opacity: 0, y: 100 },
          whileInView: {
            opacity: 1,
            y: 0,
            transition: { type: "easeIn", stiffness: 100, duration: 1 },
          },
          viewport: { once: !0 },
          children: (0, t.jsxs)("div", {
            id: "faq",
            className: "relative mt-[35.641rem]",
            children: [
              (0, t.jsx)("figure", {
                className: "absolute top-[-52.821rem]",
                children: (0, t.jsx)(h.default, {
                  alt: "logo",
                  loading: "lazy",
                  decoding: "async",
                  "data-nimg": "1",
                  src: "/_next/static/media/FAQMobileShadow2.de31c308.png",
                  className: "text-transparent w-[100rem] h-[256.641rem]",
                  width: 1600,
                  height: 4106.256,
                }),
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("div", {
                    className:
                      "relative w-full flex justify-center faq-header z-20",
                    children: (0, t.jsx)("span", {
                      className: "text-[14.872rem] leading-[110%]",
                      children: x.mi,
                    }),
                  }),
                  (0, t.jsx)("figure", {
                    className: "absolute top-[-84.846rem] z-10",
                    children: (0, t.jsx)(h.default, {
                      src: "/_next/static/media/FAQBackgroundMobile.866fab60.svg",
                      className: "w-[130rem] h-[177.436rem]",
                      alt: "background",
                      width: 2080,
                      height: 2838.976,
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: "relative pt-[20.513rem] px-[5.128rem] z-30",
                    children: (0, t.jsx)("div", {
                      children: g.tZ.map((e, s) =>
                        (0, t.jsx)(
                          N,
                          { title: e.title, description: e.description },
                          s
                        )
                      ),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function el() {
        let [e, s] = (0, a.useState)(""),
          [i, l] = (0, a.useState)(!1),
          r = (0, D.useRouter)(),
          n = (e) =>
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              String(e).toLowerCase()
            ),
          c = async () => {
            if (!n(e)) {
              l(!0);
              return;
            }
            try {
              l(!1);
              let s = await W.Z.post(
                "https://backend.fractionai.xyz/api/waitList/createNewsLetter",
                { email: e, refCode: (0, J.j)() || "" },
                { headers: { "Content-Type": "application/json" } }
              );
              console.log("Response:", s.data),
                r.push(
                  "/waitlist-confirmation?type=".concat(
                    encodeURIComponent("newsletter")
                  )
                );
            } catch (e) {
              console.error("Error:", e);
            }
          };
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(f.E.div, {
            initial: { opacity: 0, y: 100 },
            whileInView: {
              opacity: 1,
              y: 0,
              transition: { type: "easeIn", stiffness: 100, duration: 1 },
            },
            viewport: { once: !0 },
            children: (0, t.jsx)(f.E.div, {
              variants: {
                offscreen: { y: 300 },
                onscreen: {
                  y: 50,
                  transition: { type: "spring", duration: 1.8 },
                },
              },
              children: (0, t.jsxs)("div", {
                className: "newsletter-mobile relative pt-[27.692rem]",
                children: [
                  (0, t.jsx)("figure", {
                    className: "absolute z-0",
                    children: (0, t.jsx)(h.default, {
                      src: "/_next/static/media/NewsletterBgMobile.86464a6f.svg",
                      className: "w-[100rem] h-[105.385rem]",
                      alt: "newsletter",
                      width: 1600,
                      height: 1686.16,
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "relative flex flex-col items-center w-full z-10",
                    children: [
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("div", {
                            className:
                              "pt-[8.205rem] newsletter-header !text-[9.231rem] !leading-[110%]",
                            children: x.Sg,
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "pt-[4.103rem] w-[62.308rem] newsletter-subtext",
                            children: x.py,
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "pt-[13.333rem] w-[86.385rem]",
                        children: (0, t.jsx)("input", {
                          className:
                            "pl-[7.897rem] bg-transparent border-none outline-none input-email",
                          value: e,
                          onChange: (e) => s(e.target.value),
                          placeholder: x.PN,
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "mt-[12.564rem] relative w-[36.923rem] h-[36.923rem]",
                        children: (0, t.jsxs)("div", {
                          className:
                            "absolute solid-bg-parent w-[36.923rem] h-[36.923rem] z-20",
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "absolute flex justify-center items-center circle-button w-full h-full solid-bg top-0 left-0 z-0",
                            }),
                            (0, t.jsx)("div", {
                              className:
                                "absolute flex justify-center items-center w-full h-full top-0 left-0 z-1",
                              onClick: c,
                              children: (0, t.jsx)("span", {
                                className:
                                  "circle-button-content !text-[4.615rem]",
                                children: x.kD,
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      }
      var er = i(463),
        en = i(706);
      function ec() {
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(a.Suspense, { children: (0, t.jsx)(en.Z, {}) }),
            (0, t.jsxs)("div", {
              className: "hidden md:block home-page",
              children: [
                (0, t.jsx)("div", {
                  className: "bg-img section-1 ",
                  children: (0, t.jsxs)("div", {
                    className: "component-div",
                    children: [(0, t.jsx)(l.default, {}), (0, t.jsx)(u, {})],
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "bg-img section-3",
                  children: (0, t.jsxs)("div", {
                    className: "component-div",
                    children: [
                      (0, t.jsx)(V, {}),
                      (0, t.jsx)(E, {}),
                      (0, t.jsx)(z, {}),
                    ],
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "bg-img section-4 ",
                  children: (0, t.jsx)("div", {
                    className: "component-div  ",
                    children: (0, t.jsx)(R, {}),
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "bg-img section-5 ",
                  children: (0, t.jsx)("div", {
                    className: "component-div",
                    children: (0, t.jsx)(H, {}),
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "bg-img section-7 ",
                  children: (0, t.jsx)("div", {
                    className: "component-div",
                    children: (0, t.jsx)(Z, {}),
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "bg-img section-8 ",
                  children: (0, t.jsx)("div", {
                    className: "pb-[8rem]",
                    children: (0, t.jsx)(w, {}),
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "bg-img section-9 ",
                  children: (0, t.jsxs)("div", {
                    className: "component-div",
                    children: [(0, t.jsx)(O, {}), (0, t.jsx)(p.default, {})],
                  }),
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: "block md:hidden home-page-mobile bg-[#080808]",
              children: [
                (0, t.jsx)("div", {
                  className: "mobile-introduction-background",
                  children: (0, t.jsx)(U, {}),
                }),
                (0, t.jsx)($, {}),
                (0, t.jsx)(G, {}),
                (0, t.jsx)(K, {}),
                (0, t.jsx)(Y, {}),
                (0, t.jsx)(ee, {}),
                (0, t.jsx)(ei, {}),
                (0, t.jsx)(et, {}),
                (0, t.jsx)(ea, {}),
                (0, t.jsx)(el, {}),
                (0, t.jsx)(er.default, {}),
              ],
            }),
          ],
        });
      }
    },
    6850: function (e, s, i) {
      "use strict";
      function t() {
        return localStorage.getItem("refCode");
      }
      function a(e) {
        localStorage.setItem("refCode", e);
      }
      i.d(s, {
        S: function () {
          return a;
        },
        j: function () {
          return t;
        },
      });
    },
    4656: function () {},
    4066: function () {},
    309: function () {},
    566: function () {},
    2562: function () {},
    161: function () {},
    9265: function () {},
    1253: function () {},
    7682: function () {},
  },
  function (e) {
    e.O(0, [19, 587, 401, 615, 9, 90, 478, 69, 744], function () {
      return e((e.s = 2357));
    }),
      (_N_E = e.O());
  },
]);
