"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [587],
  {
    5587: function (t, e, i) {
      let s, n;
      i.d(e, {
        E: function () {
          return n8;
        },
      });
      var r,
        o,
        a = i(7437),
        l = i(2265);
      let h = (0, l.createContext)({
          transformPagePoint: (t) => t,
          isStatic: !1,
          reducedMotion: "never",
        }),
        u = (0, l.createContext)({}),
        d = (0, l.createContext)(null),
        c = "undefined" != typeof document,
        p = c ? l.useLayoutEffect : l.useEffect,
        m = (0, l.createContext)({ strict: !1 }),
        f = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        v = "data-" + f("framerAppearId"),
        g = { skipAnimations: !1, useManualTiming: !1 };
      class y {
        constructor() {
          (this.order = []), (this.scheduled = new Set());
        }
        add(t) {
          if (!this.scheduled.has(t))
            return this.scheduled.add(t), this.order.push(t), !0;
        }
        remove(t) {
          let e = this.order.indexOf(t);
          -1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t));
        }
        clear() {
          (this.order.length = 0), this.scheduled.clear();
        }
      }
      let x = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function P(t, e) {
        let i = !1,
          s = !0,
          n = { delta: 0, timestamp: 0, isProcessing: !1 },
          r = x.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new y(),
                  i = new y(),
                  s = 0,
                  n = !1,
                  r = !1,
                  o = new WeakSet(),
                  a = {
                    schedule: (t, r = !1, a = !1) => {
                      let l = a && n,
                        h = l ? e : i;
                      return (
                        r && o.add(t),
                        h.add(t) && l && n && (s = e.order.length),
                        t
                      );
                    },
                    cancel: (t) => {
                      i.remove(t), o.delete(t);
                    },
                    process: (l) => {
                      if (n) {
                        r = !0;
                        return;
                      }
                      if (
                        ((n = !0),
                        ([e, i] = [i, e]),
                        i.clear(),
                        (s = e.order.length))
                      )
                        for (let i = 0; i < s; i++) {
                          let s = e.order[i];
                          o.has(s) && (a.schedule(s), t()), s(l);
                        }
                      (n = !1), r && ((r = !1), a.process(l));
                    },
                  };
                return a;
              })(() => (i = !0))),
              t
            ),
            {}
          ),
          o = (t) => {
            r[t].process(n);
          },
          a = () => {
            let r = g.useManualTiming ? n.timestamp : performance.now();
            (i = !1),
              (n.delta = s
                ? 1e3 / 60
                : Math.max(Math.min(r - n.timestamp, 40), 1)),
              (n.timestamp = r),
              (n.isProcessing = !0),
              x.forEach(o),
              (n.isProcessing = !1),
              i && e && ((s = !1), t(a));
          },
          l = () => {
            (i = !0), (s = !0), n.isProcessing || t(a);
          };
        return {
          schedule: x.reduce((t, e) => {
            let s = r[e];
            return (
              (t[e] = (t, e = !1, n = !1) => (i || l(), s.schedule(t, e, n))), t
            );
          }, {}),
          cancel: (t) => x.forEach((e) => r[e].cancel(t)),
          state: n,
          steps: r,
        };
      }
      let { schedule: T, cancel: w } = P(queueMicrotask, !1);
      function b(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function S(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function A(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      let V = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        E = ["initial", ...V];
      function M(t) {
        return A(t.animate) || E.some((e) => S(t[e]));
      }
      function C(t) {
        return !!(M(t) || t.variants);
      }
      function R(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let k = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        D = {};
      for (let t in k) D[t] = { isEnabled: (e) => k[t].some((t) => !!e[t]) };
      let F = (0, l.createContext)({}),
        L = (0, l.createContext)({}),
        j = Symbol.for("motionComponentSymbol"),
        B = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function O(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (B.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      let I = {},
        U = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        $ = new Set(U);
      function N(t, { layout: e, layoutId: i }) {
        return (
          $.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!I[t] || "opacity" === t))
        );
      }
      let W = (t) => !!(t && t.getVelocity),
        H = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        z = U.length,
        Y = (t) => (e) => "string" == typeof e && e.startsWith(t),
        K = Y("--"),
        X = Y("var(--"),
        G = (t) => !!X(t) && q.test(t.split("/*")[0].trim()),
        q =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
        Z = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        _ = (t, e, i) => (i > e ? e : i < t ? t : i),
        J = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        Q = { ...J, transform: (t) => _(0, 1, t) },
        tt = { ...J, default: 1 },
        te = (t) => Math.round(1e5 * t) / 1e5,
        ti = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        ts =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        tn =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function tr(t) {
        return "string" == typeof t;
      }
      let to = (t) => ({
          test: (e) => tr(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        ta = to("deg"),
        tl = to("%"),
        th = to("px"),
        tu = to("vh"),
        td = to("vw"),
        tc = {
          ...tl,
          parse: (t) => tl.parse(t) / 100,
          transform: (t) => tl.transform(100 * t),
        },
        tp = { ...J, transform: Math.round },
        tm = {
          borderWidth: th,
          borderTopWidth: th,
          borderRightWidth: th,
          borderBottomWidth: th,
          borderLeftWidth: th,
          borderRadius: th,
          radius: th,
          borderTopLeftRadius: th,
          borderTopRightRadius: th,
          borderBottomRightRadius: th,
          borderBottomLeftRadius: th,
          width: th,
          maxWidth: th,
          height: th,
          maxHeight: th,
          size: th,
          top: th,
          right: th,
          bottom: th,
          left: th,
          padding: th,
          paddingTop: th,
          paddingRight: th,
          paddingBottom: th,
          paddingLeft: th,
          margin: th,
          marginTop: th,
          marginRight: th,
          marginBottom: th,
          marginLeft: th,
          rotate: ta,
          rotateX: ta,
          rotateY: ta,
          rotateZ: ta,
          scale: tt,
          scaleX: tt,
          scaleY: tt,
          scaleZ: tt,
          skew: ta,
          skewX: ta,
          skewY: ta,
          distance: th,
          translateX: th,
          translateY: th,
          translateZ: th,
          x: th,
          y: th,
          z: th,
          perspective: th,
          transformPerspective: th,
          opacity: Q,
          originX: tc,
          originY: tc,
          originZ: th,
          zIndex: tp,
          backgroundPositionX: th,
          backgroundPositionY: th,
          fillOpacity: Q,
          strokeOpacity: Q,
          numOctaves: tp,
        };
      function tf(t, e, i, s) {
        let { style: n, vars: r, transform: o, transformOrigin: a } = t,
          l = !1,
          h = !1,
          u = !0;
        for (let t in e) {
          let i = e[t];
          if (K(t)) {
            r[t] = i;
            continue;
          }
          let s = tm[t],
            d = Z(i, s);
          if ($.has(t)) {
            if (((l = !0), (o[t] = d), !u)) continue;
            i !== (s.default || 0) && (u = !1);
          } else t.startsWith("origin") ? ((h = !0), (a[t] = d)) : (n[t] = d);
        }
        if (
          (!e.transform &&
            (l || s
              ? (n.transform = (function (
                  t,
                  {
                    enableHardwareAcceleration: e = !0,
                    allowTransformNone: i = !0,
                  },
                  s,
                  n
                ) {
                  let r = "";
                  for (let e = 0; e < z; e++) {
                    let i = U[e];
                    if (void 0 !== t[i]) {
                      let e = H[i] || i;
                      r += `${e}(${t[i]}) `;
                    }
                  }
                  return (
                    e && !t.z && (r += "translateZ(0)"),
                    (r = r.trim()),
                    n ? (r = n(t, s ? "" : r)) : i && s && (r = "none"),
                    r
                  );
                })(t.transform, i, u, s))
              : n.transform && (n.transform = "none")),
          h)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = a;
          n.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      let tv = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function tg(t, e, i) {
        for (let s in e) W(e[s]) || N(s, i) || (t[s] = e[s]);
      }
      let ty = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function tx(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          ty.has(t)
        );
      }
      let tP = (t) => !tx(t);
      try {
        (r = require("@emotion/is-prop-valid").default) &&
          (tP = (t) => (t.startsWith("on") ? !tx(t) : r(t)));
      } catch (t) {}
      function tT(t, e, i) {
        return "string" == typeof t ? t : th.transform(e + i * t);
      }
      let tw = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        tb = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function tS(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: s,
          originX: n,
          originY: r,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...h
        },
        u,
        d,
        c
      ) {
        if ((tf(t, h, u, c), d)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: p, style: m, dimensions: f } = t;
        p.transform && (f && (m.transform = p.transform), delete p.transform),
          f &&
            (void 0 !== n || void 0 !== r || m.transform) &&
            (m.transformOrigin = (function (t, e, i) {
              let s = tT(e, t.x, t.width),
                n = tT(i, t.y, t.height);
              return `${s} ${n}`;
            })(f, void 0 !== n ? n : 0.5, void 0 !== r ? r : 0.5)),
          void 0 !== e && (p.x = e),
          void 0 !== i && (p.y = i),
          void 0 !== s && (p.scale = s),
          void 0 !== o &&
            (function (t, e, i = 1, s = 0, n = !0) {
              t.pathLength = 1;
              let r = n ? tw : tb;
              t[r.offset] = th.transform(-s);
              let o = th.transform(e),
                a = th.transform(i);
              t[r.array] = `${o} ${a}`;
            })(p, o, a, l, !1);
      }
      let tA = () => ({ ...tv(), attrs: {} }),
        tV = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function tE(t, { style: e, vars: i }, s, n) {
        for (let r in (Object.assign(t.style, e, n && n.getProjectionStyles(s)),
        i))
          t.style.setProperty(r, i[r]);
      }
      let tM = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function tC(t, e, i, s) {
        for (let i in (tE(t, e, void 0, s), e.attrs))
          t.setAttribute(tM.has(i) ? i : f(i), e.attrs[i]);
      }
      function tR(t, e, i) {
        var s;
        let { style: n } = t,
          r = {};
        for (let o in n)
          (W(n[o]) ||
            (e.style && W(e.style[o])) ||
            N(o, t) ||
            (null === (s = null == i ? void 0 : i.getValue(o)) || void 0 === s
              ? void 0
              : s.liveStyle) !== void 0) &&
            (r[o] = n[o]);
        return r;
      }
      function tk(t, e, i) {
        let s = tR(t, e, i);
        for (let i in t)
          (W(t[i]) || W(e[i])) &&
            (s[
              -1 !== U.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return s;
      }
      function tD(t, e, i, s = {}, n = {}) {
        return (
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, s, n)),
          "string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, s, n)),
          e
        );
      }
      let tF = (t) => Array.isArray(t),
        tL = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        tj = (t) => (tF(t) ? t[t.length - 1] || 0 : t);
      function tB(t) {
        let e = W(t) ? t.get() : t;
        return tL(e) ? e.toValue() : e;
      }
      let tO = (t) => (e, i) => {
          let s = (0, l.useContext)(u),
            n = (0, l.useContext)(d),
            r = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: t,
                  createRenderState: e,
                  onMount: i,
                },
                s,
                n,
                r
              ) {
                let o = {
                  latestValues: (function (t, e, i, s) {
                    let n = {},
                      r = s(t, {});
                    for (let t in r) n[t] = tB(r[t]);
                    let { initial: o, animate: a } = t,
                      l = M(t),
                      h = C(t);
                    e &&
                      h &&
                      !l &&
                      !1 !== t.inherit &&
                      (void 0 === o && (o = e.initial),
                      void 0 === a && (a = e.animate));
                    let u = !!i && !1 === i.initial,
                      d = (u = u || !1 === o) ? a : o;
                    return (
                      d &&
                        "boolean" != typeof d &&
                        !A(d) &&
                        (Array.isArray(d) ? d : [d]).forEach((e) => {
                          let i = tD(t, e);
                          if (!i) return;
                          let { transitionEnd: s, transition: r, ...o } = i;
                          for (let t in o) {
                            let e = o[t];
                            if (Array.isArray(e)) {
                              let t = u ? e.length - 1 : 0;
                              e = e[t];
                            }
                            null !== e && (n[t] = e);
                          }
                          for (let t in s) n[t] = s[t];
                        }),
                      n
                    );
                  })(s, n, r, t),
                  renderState: e(),
                };
                return i && (o.mount = (t) => i(s, t, o)), o;
              })(t, e, s, n);
          return i
            ? r()
            : (function (t) {
                let e = (0, l.useRef)(null);
                return null === e.current && (e.current = t()), e.current;
              })(r);
        },
        tI = (t) => t,
        {
          schedule: tU,
          cancel: t$,
          state: tN,
          steps: tW,
        } = P(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : tI,
          !0
        ),
        tH = {
          useVisualState: tO({
            scrapeMotionValuesFromProps: tk,
            createRenderState: tA,
            onMount: (t, e, { renderState: i, latestValues: s }) => {
              tU.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                tU.render(() => {
                  tS(
                    i,
                    s,
                    { enableHardwareAcceleration: !1 },
                    tV(e.tagName),
                    t.transformTemplate
                  ),
                    tC(e, i);
                });
            },
          }),
        },
        tz = {
          useVisualState: tO({
            scrapeMotionValuesFromProps: tR,
            createRenderState: tv,
          }),
        };
      function tY(t, e, i, s = { passive: !0 }) {
        return t.addEventListener(e, i, s), () => t.removeEventListener(e, i);
      }
      let tK = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function tX(t, e = "page") {
        return { point: { x: t[`${e}X`], y: t[`${e}Y`] } };
      }
      let tG = (t) => (e) => tK(e) && t(e, tX(e));
      function tq(t, e, i, s) {
        return tY(t, e, tG(i), s);
      }
      let tZ = (t, e) => (i) => e(t(i)),
        t_ = (...t) => t.reduce(tZ);
      function tJ(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let tQ = tJ("dragHorizontal"),
        t0 = tJ("dragVertical");
      function t1(t) {
        let e = !1;
        if ("y" === t) e = t0();
        else if ("x" === t) e = tQ();
        else {
          let t = tQ(),
            i = t0();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function t5() {
        let t = t1(!0);
        return !t || (t(), !1);
      }
      class t2 {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      function t3(t, e) {
        let i = e ? "onHoverStart" : "onHoverEnd";
        return tq(
          t.current,
          e ? "pointerenter" : "pointerleave",
          (s, n) => {
            if ("touch" === s.pointerType || t5()) return;
            let r = t.getProps();
            t.animationState &&
              r.whileHover &&
              t.animationState.setActive("whileHover", e);
            let o = r[i];
            o && o(s, n);
          },
          { passive: !t.getProps()[i] }
        );
      }
      class t9 extends t2 {
        mount() {
          this.unmount = t_(t3(this.node, !0), t3(this.node, !1));
        }
        unmount() {}
      }
      class t4 extends t2 {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = t_(
            tY(this.node.current, "focus", () => this.onFocus()),
            tY(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let t6 = (t, e) => !!e && (t === e || t6(t, e.parentElement));
      function t7(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, tX(i));
      }
      class t8 extends t2 {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = tI),
            (this.removeEndListeners = tI),
            (this.removeAccessibleListeners = tI),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let i = this.node.getProps(),
                s = tq(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let {
                      onTap: i,
                      onTapCancel: s,
                      globalTapTarget: n,
                    } = this.node.getProps();
                    n || t6(this.node.current, t.target)
                      ? i && i(t, e)
                      : s && s(t, e);
                  },
                  { passive: !(i.onTap || i.onPointerUp) }
                ),
                n = tq(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(i.onTapCancel || i.onPointerCancel) }
                );
              (this.removeEndListeners = t_(s, n)), this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = tY(this.node.current, "keydown", (t) => {
                  "Enter" !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = tY(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          t7("up", (t, e) => {
                            let { onTap: i } = this.node.getProps();
                            i && i(t, e);
                          });
                      }
                    )),
                    t7("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = tY(this.node.current, "blur", () => {
                  this.isPressing &&
                    t7("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = t_(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: s } = this.node.getProps();
          s &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            i && i(t, e);
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !t5()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && i(t, e);
        }
        mount() {
          let t = this.node.getProps(),
            e = tq(
              t.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) }
            ),
            i = tY(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = t_(e, i);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let et = new WeakMap(),
        ee = new WeakMap(),
        ei = (t) => {
          let e = et.get(t.target);
          e && e(t);
        },
        es = (t) => {
          t.forEach(ei);
        },
        en = { some: 0, all: 1 };
      class er extends t2 {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: s = "some", once: n } = t,
            r = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof s ? s : en[s],
            };
          return (function (t, e, i) {
            let s = (function ({ root: t, ...e }) {
              let i = t || document;
              ee.has(i) || ee.set(i, {});
              let s = ee.get(i),
                n = JSON.stringify(e);
              return (
                s[n] ||
                  (s[n] = new IntersectionObserver(es, { root: t, ...e })),
                s[n]
              );
            })(e);
            return (
              et.set(t, i),
              s.observe(t),
              () => {
                et.delete(t), s.unobserve(t);
              }
            );
          })(this.node.current, r, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), n && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: s } =
                this.node.getProps(),
              r = e ? i : s;
            r && r(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      function eo(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let s = 0; s < i; s++) if (e[s] !== t[s]) return !1;
        return !0;
      }
      function ea(t, e, i) {
        let s = t.getProps();
        return tD(
          s,
          e,
          void 0 !== i ? i : s.custom,
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.get())), e;
          })(t),
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.getVelocity())), e;
          })(t)
        );
      }
      let el = (t) => 1e3 * t,
        eh = (t) => t / 1e3,
        eu = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        ed = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        ec = { type: "keyframes", duration: 0.8 },
        ep = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        em = (t, { keyframes: e }) =>
          e.length > 2
            ? ec
            : $.has(t)
            ? t.startsWith("scale")
              ? ed(e[1])
              : eu
            : ep;
      function ef(t, e) {
        return t[e] || t.default || t;
      }
      let ev = { current: !1 },
        eg = (t) => null !== t;
      function ey(t, { repeat: e, repeatType: i = "loop" }, s) {
        let n = t.filter(eg),
          r = e && "loop" !== i && e % 2 == 1 ? 0 : n.length - 1;
        return r && void 0 !== s ? s : n[r];
      }
      function ex() {
        s = void 0;
      }
      let eP = {
          now: () => (
            void 0 === s &&
              eP.set(
                tN.isProcessing || g.useManualTiming
                  ? tN.timestamp
                  : performance.now()
              ),
            s
          ),
          set: (t) => {
            (s = t), queueMicrotask(ex);
          },
        },
        eT = (t) => /^0[^.\s]+$/u.test(t),
        ew = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        eb = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        eS = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        eA = (t) => t === J || t === th,
        eV = (t, e) => parseFloat(t.split(", ")[e]),
        eE =
          (t, e) =>
          (i, { transform: s }) => {
            if ("none" === s || !s) return 0;
            let n = s.match(/^matrix3d\((.+)\)$/u);
            if (n) return eV(n[1], e);
            {
              let e = s.match(/^matrix\((.+)\)$/u);
              return e ? eV(e[1], t) : 0;
            }
          },
        eM = new Set(["x", "y", "z"]),
        eC = U.filter((t) => !eM.has(t)),
        eR = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: eE(4, 13),
          y: eE(5, 14),
        };
      (eR.translateX = eR.x), (eR.translateY = eR.y);
      let ek = (t) => (e) => e.test(t),
        eD = [
          J,
          th,
          tl,
          ta,
          td,
          tu,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        eF = (t) => eD.find(ek(t)),
        eL = new Set(),
        ej = !1,
        eB = !1;
      function eO() {
        if (eB) {
          let t = Array.from(eL).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (function (t) {
              let e = [];
              return (
                eC.forEach((i) => {
                  let s = t.getValue(i);
                  void 0 !== s &&
                    (e.push([i, s.get()]),
                    s.set(i.startsWith("scale") ? 1 : 0));
                }),
                e
              );
            })(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var s;
                  null === (s = t.getValue(e)) || void 0 === s || s.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (eB = !1), (ej = !1), eL.forEach((t) => t.complete()), eL.clear();
      }
      function eI() {
        eL.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (eB = !0);
        });
      }
      class eU {
        constructor(t, e, i, s, n, r = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = s),
            (this.element = n),
            (this.isAsync = r);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (eL.add(this),
                ej || ((ej = !0), tU.read(eI), tU.resolveKeyframes(eO)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: s,
          } = this;
          for (let n = 0; n < t.length; n++)
            if (null === t[n]) {
              if (0 === n) {
                let n = null == s ? void 0 : s.get(),
                  r = t[t.length - 1];
                if (void 0 !== n) t[0] = n;
                else if (i && e) {
                  let s = i.readValue(e, r);
                  null != s && (t[0] = s);
                }
                void 0 === t[0] && (t[0] = r), s && void 0 === n && s.set(t[0]);
              } else t[n] = t[n - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            eL.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), eL.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      let e$ = (t, e) => (i) =>
          !!(
            (tr(i) && tn.test(i) && i.startsWith(t)) ||
            (e && Object.prototype.hasOwnProperty.call(i, e))
          ),
        eN = (t, e, i) => (s) => {
          if (!tr(s)) return s;
          let [n, r, o, a] = s.match(ti);
          return {
            [t]: parseFloat(n),
            [e]: parseFloat(r),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        eW = (t) => _(0, 255, t),
        eH = { ...J, transform: (t) => Math.round(eW(t)) },
        ez = {
          test: e$("rgb", "red"),
          parse: eN("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: s = 1 }) =>
            "rgba(" +
            eH.transform(t) +
            ", " +
            eH.transform(e) +
            ", " +
            eH.transform(i) +
            ", " +
            te(Q.transform(s)) +
            ")",
        },
        eY = {
          test: e$("#"),
          parse: function (t) {
            let e = "",
              i = "",
              s = "",
              n = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (s = t.substring(5, 7)),
                  (n = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (s = t.substring(3, 4)),
                  (n = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (s += s),
                  (n += n)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(s, 16),
                alpha: n ? parseInt(n, 16) / 255 : 1,
              }
            );
          },
          transform: ez.transform,
        },
        eK = {
          test: e$("hsl", "hue"),
          parse: eN("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: s = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            tl.transform(te(e)) +
            ", " +
            tl.transform(te(i)) +
            ", " +
            te(Q.transform(s)) +
            ")",
        },
        eX = {
          test: (t) => ez.test(t) || eY.test(t) || eK.test(t),
          parse: (t) =>
            ez.test(t) ? ez.parse(t) : eK.test(t) ? eK.parse(t) : eY.parse(t),
          transform: (t) =>
            tr(t)
              ? t
              : t.hasOwnProperty("red")
              ? ez.transform(t)
              : eK.transform(t),
        },
        eG = "number",
        eq = "color",
        eZ =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function e_(t) {
        let e = t.toString(),
          i = [],
          s = { color: [], number: [], var: [] },
          n = [],
          r = 0,
          o = e
            .replace(
              eZ,
              (t) => (
                eX.test(t)
                  ? (s.color.push(r), n.push(eq), i.push(eX.parse(t)))
                  : t.startsWith("var(")
                  ? (s.var.push(r), n.push("var"), i.push(t))
                  : (s.number.push(r), n.push(eG), i.push(parseFloat(t))),
                ++r,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: o, indexes: s, types: n };
      }
      function eJ(t) {
        return e_(t).values;
      }
      function eQ(t) {
        let { split: e, types: i } = e_(t),
          s = e.length;
        return (t) => {
          let n = "";
          for (let r = 0; r < s; r++)
            if (((n += e[r]), void 0 !== t[r])) {
              let e = i[r];
              e === eG
                ? (n += te(t[r]))
                : e === eq
                ? (n += eX.transform(t[r]))
                : (n += t[r]);
            }
          return n;
        };
      }
      let e0 = (t) => ("number" == typeof t ? 0 : t),
        e1 = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              tr(t) &&
              ((null === (e = t.match(ti)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(ts)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: eJ,
          createTransformer: eQ,
          getAnimatableNone: function (t) {
            let e = eJ(t);
            return eQ(t)(e.map(e0));
          },
        },
        e5 = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function e2(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [s] = i.match(ti) || [];
        if (!s) return t;
        let n = i.replace(s, ""),
          r = e5.has(e) ? 1 : 0;
        return s !== i && (r *= 100), e + "(" + r + n + ")";
      }
      let e3 = /\b([a-z-]*)\(.*?\)/gu,
        e9 = {
          ...e1,
          getAnimatableNone: (t) => {
            let e = t.match(e3);
            return e ? e.map(e2).join(" ") : t;
          },
        },
        e4 = {
          ...tm,
          color: eX,
          backgroundColor: eX,
          outlineColor: eX,
          fill: eX,
          stroke: eX,
          borderColor: eX,
          borderTopColor: eX,
          borderRightColor: eX,
          borderBottomColor: eX,
          borderLeftColor: eX,
          filter: e9,
          WebkitFilter: e9,
        },
        e6 = (t) => e4[t];
      function e7(t, e) {
        let i = e6(t);
        return (
          i !== e9 && (i = e1),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      class e8 extends eU {
        constructor(t, e, i, s) {
          super(t, e, i, s, null == s ? void 0 : s.owner, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let s = t[i];
            if ("string" == typeof s && G(s)) {
              let n = (function t(e, i, s = 1) {
                tI(
                  s <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [n, r] = (function (t) {
                  let e = eb.exec(t);
                  if (!e) return [,];
                  let [, i, s, n] = e;
                  return [`--${null != i ? i : s}`, n];
                })(e);
                if (!n) return;
                let o = window.getComputedStyle(i).getPropertyValue(n);
                if (o) {
                  let t = o.trim();
                  return ew(t) ? parseFloat(t) : t;
                }
                return G(r) ? t(r, i, s + 1) : r;
              })(s, e.current);
              void 0 !== n && (t[i] = n),
                i === t.length - 1 && (this.finalKeyframe = s);
            }
          }
          if (!eS.has(i) || 2 !== t.length) return this.resolveNoneKeyframes();
          let [s, n] = t,
            r = eF(s),
            o = eF(n);
          if (r !== o) {
            if (eA(r) && eA(o))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var s;
            ("number" == typeof (s = t[e])
              ? 0 === s
              : null === s || "none" === s || "0" === s || eT(s)) && i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let s,
                n = 0;
              for (; n < t.length && !s; )
                "string" == typeof t[n] &&
                  "none" !== t[n] &&
                  "0" !== t[n] &&
                  (s = t[n]),
                  n++;
              if (s && i) for (let n of e) t[n] = e7(i, s);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = eR[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let s = e[e.length - 1];
          void 0 !== s && t.getValue(i, s).jump(s, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: s } = this;
          if (!e.current) return;
          let n = e.getValue(i);
          n && n.jump(this.measuredOrigin, !1);
          let r = s.length - 1,
            o = s[r];
          (s[r] = eR[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
      let it = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (e1.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      class ie {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: s = 0,
          repeatDelay: n = 0,
          repeatType: r = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: s,
              repeatDelay: n,
              repeatType: r,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (eI(), eO()),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          this.hasAttemptedResolve = !0;
          let {
            name: i,
            type: s,
            velocity: n,
            delay: r,
            onComplete: o,
            onUpdate: a,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (t, e, i, s) {
              let n = t[0];
              if (null === n) return !1;
              let r = t[t.length - 1],
                o = it(n, e),
                a = it(r, e);
              return (
                tI(
                  o === a,
                  `You are trying to animate ${e} from "${n}" to "${r}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${r} via the \`style\` property.`
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    ("spring" === i && s))
              );
            })(t, i, s, n)
          ) {
            if (ev.current || !r) {
              null == a || a(ey(t, this.options, e)),
                null == o || o(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let h = this.initPlayback(t, e);
          !1 !== h &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...h }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      function ii(t, e, i) {
        var s, n;
        let r = Math.max(e - 5, 0);
        return (s = i - t(r)), (n = e - r) ? (1e3 / n) * s : 0;
      }
      function is(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let ir = ["duration", "bounce"],
        io = ["stiffness", "damping", "mass"];
      function ia(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function il({ keyframes: t, restDelta: e, restSpeed: i, ...s }) {
        let n;
        let r = t[0],
          o = t[t.length - 1],
          a = { done: !1, value: r },
          {
            stiffness: l,
            damping: h,
            mass: u,
            duration: d,
            velocity: c,
            isResolvedFromDuration: p,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!ia(t, io) && ia(t, ir)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: s = 1,
              }) {
                let n, r;
                tI(t <= el(10), "Spring duration must be 10 seconds or less");
                let o = 1 - e;
                (o = _(0.05, 1, o)),
                  (t = _(0.01, 10, eh(t))),
                  o < 1
                    ? ((n = (e) => {
                        let s = e * o,
                          n = s * t;
                        return 0.001 - ((s - i) / is(e, o)) * Math.exp(-n);
                      }),
                      (r = (e) => {
                        let s = e * o * t,
                          r = Math.pow(o, 2) * Math.pow(e, 2) * t,
                          a = is(Math.pow(e, 2), o);
                        return (
                          ((s * i + i - r) *
                            Math.exp(-s) *
                            (-n(e) + 0.001 > 0 ? -1 : 1)) /
                          a
                        );
                      }))
                    : ((n = (e) =>
                        -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                      (r = (e) => t * t * (i - e) * Math.exp(-e * t)));
                let a = (function (t, e, i) {
                  let s = i;
                  for (let i = 1; i < 12; i++) s -= t(s) / e(s);
                  return s;
                })(n, r, 5 / t);
                if (((t = el(t)), isNaN(a)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(a, 2) * s;
                  return {
                    stiffness: e,
                    damping: 2 * o * Math.sqrt(s * e),
                    duration: t,
                  };
                }
              })(t);
              (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...s, velocity: -eh(s.velocity || 0) }),
          m = c || 0,
          f = h / (2 * Math.sqrt(l * u)),
          v = o - r,
          g = eh(Math.sqrt(l / u)),
          y = 5 > Math.abs(v);
        if ((i || (i = y ? 0.01 : 2), e || (e = y ? 0.005 : 0.5), f < 1)) {
          let t = is(g, f);
          n = (e) =>
            o -
            Math.exp(-f * g * e) *
              (((m + f * g * v) / t) * Math.sin(t * e) + v * Math.cos(t * e));
        } else if (1 === f)
          n = (t) => o - Math.exp(-g * t) * (v + (m + g * v) * t);
        else {
          let t = g * Math.sqrt(f * f - 1);
          n = (e) => {
            let i = Math.exp(-f * g * e),
              s = Math.min(t * e, 300);
            return (
              o -
              (i * ((m + f * g * v) * Math.sinh(s) + t * v * Math.cosh(s))) / t
            );
          };
        }
        return {
          calculatedDuration: (p && d) || null,
          next: (t) => {
            let s = n(t);
            if (p) a.done = t >= d;
            else {
              let r = m;
              0 !== t && (r = f < 1 ? ii(n, t, s) : 0);
              let l = Math.abs(r) <= i,
                h = Math.abs(o - s) <= e;
              a.done = l && h;
            }
            return (a.value = a.done ? o : s), a;
          },
        };
      }
      function ih({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: s = 325,
        bounceDamping: n = 10,
        bounceStiffness: r = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: h = 0.5,
        restSpeed: u,
      }) {
        let d, c;
        let p = t[0],
          m = { done: !1, value: p },
          f = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          g = i * e,
          y = p + g,
          x = void 0 === o ? y : o(y);
        x !== y && (g = x - p);
        let P = (t) => -g * Math.exp(-t / s),
          T = (t) => x + P(t),
          w = (t) => {
            let e = P(t),
              i = T(t);
            (m.done = Math.abs(e) <= h), (m.value = m.done ? x : i);
          },
          b = (t) => {
            f(m.value) &&
              ((d = t),
              (c = il({
                keyframes: [m.value, v(m.value)],
                velocity: ii(T, t, m.value),
                damping: n,
                stiffness: r,
                restDelta: h,
                restSpeed: u,
              })));
          };
        return (
          b(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (c || void 0 !== d || ((e = !0), w(t), b(t)),
              void 0 !== d && t >= d)
                ? c.next(t - d)
                : (e || w(t), m);
            },
          }
        );
      }
      let iu = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function id(t, e, i, s) {
        if (t === e && i === s) return tI;
        let n = (e) =>
          (function (t, e, i, s, n) {
            let r, o;
            let a = 0;
            do
              (r = iu((o = e + (i - e) / 2), s, n) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(r) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : iu(n(t), e, s));
      }
      let ic = id(0.42, 0, 1, 1),
        ip = id(0, 0, 0.58, 1),
        im = id(0.42, 0, 0.58, 1),
        iv = (t) => Array.isArray(t) && "number" != typeof t[0],
        ig = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        iy = (t) => (e) => 1 - t(1 - e),
        ix = (t) => 1 - Math.sin(Math.acos(t)),
        iP = iy(ix),
        iT = ig(ix),
        iw = id(0.33, 1.53, 0.69, 0.99),
        ib = iy(iw),
        iS = ig(ib),
        iA = {
          linear: tI,
          easeIn: ic,
          easeInOut: im,
          easeOut: ip,
          circIn: ix,
          circInOut: iT,
          circOut: iP,
          backIn: ib,
          backInOut: iS,
          backOut: iw,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * ib(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        iV = (t) => {
          if (Array.isArray(t)) {
            tI(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, s, n] = t;
            return id(e, i, s, n);
          }
          return "string" == typeof t
            ? (tI(void 0 !== iA[t], `Invalid easing type '${t}'`), iA[t])
            : t;
        },
        iE = (t, e, i) => {
          let s = e - t;
          return 0 === s ? 1 : (i - t) / s;
        },
        iM = (t, e, i) => t + (e - t) * i;
      function iC(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      let iR = (t, e, i) => {
          let s = t * t,
            n = i * (e * e - s) + s;
          return n < 0 ? 0 : Math.sqrt(n);
        },
        ik = [eY, ez, eK],
        iD = (t) => ik.find((e) => e.test(t));
      function iF(t) {
        let e = iD(t);
        tI(
          !!e,
          `'${t}' is not an animatable color. Use the equivalent color code instead.`
        );
        let i = e.parse(t);
        return (
          e === eK &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: s }) {
              (t /= 360), (i /= 100);
              let n = 0,
                r = 0,
                o = 0;
              if ((e /= 100)) {
                let s = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - s;
                (n = iC(a, s, t + 1 / 3)),
                  (r = iC(a, s, t)),
                  (o = iC(a, s, t - 1 / 3));
              } else n = r = o = i;
              return {
                red: Math.round(255 * n),
                green: Math.round(255 * r),
                blue: Math.round(255 * o),
                alpha: s,
              };
            })(i)),
          i
        );
      }
      let iL = (t, e) => {
        let i = iF(t),
          s = iF(e),
          n = { ...i };
        return (t) => (
          (n.red = iR(i.red, s.red, t)),
          (n.green = iR(i.green, s.green, t)),
          (n.blue = iR(i.blue, s.blue, t)),
          (n.alpha = iM(i.alpha, s.alpha, t)),
          ez.transform(n)
        );
      };
      function ij(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      function iB(t, e) {
        return (i) => iM(t, e, i);
      }
      function iO(t) {
        return "number" == typeof t
          ? iB
          : "string" == typeof t
          ? G(t)
            ? ij
            : eX.test(t)
            ? iL
            : i$
          : Array.isArray(t)
          ? iI
          : "object" == typeof t
          ? eX.test(t)
            ? iL
            : iU
          : ij;
      }
      function iI(t, e) {
        let i = [...t],
          s = i.length,
          n = t.map((t, i) => iO(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < s; e++) i[e] = n[e](t);
          return i;
        };
      }
      function iU(t, e) {
        let i = { ...t, ...e },
          s = {};
        for (let n in i)
          void 0 !== t[n] && void 0 !== e[n] && (s[n] = iO(t[n])(t[n], e[n]));
        return (t) => {
          for (let e in s) i[e] = s[e](t);
          return i;
        };
      }
      let i$ = (t, e) => {
        let i = e1.createTransformer(e),
          s = e_(t),
          n = e_(e);
        return s.indexes.var.length === n.indexes.var.length &&
          s.indexes.color.length === n.indexes.color.length &&
          s.indexes.number.length >= n.indexes.number.length
          ? t_(
              iI(
                (function (t, e) {
                  var i;
                  let s = [],
                    n = { color: 0, var: 0, number: 0 };
                  for (let r = 0; r < e.values.length; r++) {
                    let o = e.types[r],
                      a = t.indexes[o][n[o]],
                      l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                    (s[r] = l), n[o]++;
                  }
                  return s;
                })(s, n),
                n.values
              ),
              i
            )
          : (tI(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            ij(t, e));
      };
      function iN(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? iM(t, e, i)
          : iO(t)(t, e);
      }
      function iW({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: s = "easeInOut",
      }) {
        let n = iv(s) ? s.map(iV) : iV(s),
          r = { done: !1, value: e[0] },
          o = (function (t, e, { clamp: i = !0, ease: s, mixer: n } = {}) {
            let r = t.length;
            if (
              (tI(
                r === e.length,
                "Both input and output ranges must be the same length"
              ),
              1 === r)
            )
              return () => e[0];
            if (2 === r && t[0] === t[1]) return () => e[1];
            t[0] > t[r - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let o = (function (t, e, i) {
                let s = [],
                  n = i || iN,
                  r = t.length - 1;
                for (let i = 0; i < r; i++) {
                  let r = n(t[i], t[i + 1]);
                  e && (r = t_(Array.isArray(e) ? e[i] || tI : e, r)),
                    s.push(r);
                }
                return s;
              })(e, s, n),
              a = o.length,
              l = (e) => {
                let i = 0;
                if (a > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                let s = iE(t[i], t[i + 1], e);
                return o[i](s);
              };
            return i ? (e) => l(_(t[0], t[r - 1], e)) : l;
          })(
            (i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let s = 1; s <= e; s++) {
                        let n = iE(0, e, s);
                        t.push(iM(i, 1, n));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map((e) => e * t),
            e,
            {
              ease: Array.isArray(n)
                ? n
                : e.map(() => n || im).splice(0, e.length - 1),
            }
          );
        return {
          calculatedDuration: t,
          next: (e) => ((r.value = o(e)), (r.done = e >= t), r),
        };
      }
      let iH = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => tU.update(e, !0),
            stop: () => t$(e),
            now: () => (tN.isProcessing ? tN.timestamp : eP.now()),
          };
        },
        iz = { decay: ih, inertia: ih, tween: iW, keyframes: iW, spring: il },
        iY = (t) => t / 100;
      class iK extends ie {
        constructor({ KeyframeResolver: t = eU, ...e }) {
          super(e),
            (this.holdTime = null),
            (this.startTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let { name: i, motionValue: s, keyframes: n } = this.options,
            r = (t, e) => this.onKeyframesResolved(t, e);
          i && s && s.owner
            ? (this.resolver = s.owner.resolveKeyframes(n, r, i, s))
            : (this.resolver = new t(n, r, i, s)),
            this.resolver.scheduleResolve();
        }
        initPlayback(t) {
          let e, i;
          let {
              type: s = "keyframes",
              repeat: n = 0,
              repeatDelay: r = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = iz[s] || iW;
          l !== iW &&
            "number" != typeof t[0] &&
            ((e = t_(iY, iN(t[0], t[1]))), (t = [0, 100]));
          let h = l({ ...this.options, keyframes: t });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === h.calculatedDuration &&
              (h.calculatedDuration = (function (t) {
                let e = 0,
                  i = t.next(e);
                for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
                return e >= 2e4 ? 1 / 0 : e;
              })(h));
          let { calculatedDuration: u } = h,
            d = u + r;
          return {
            generator: h,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: u,
            resolvedDuration: d,
            totalDuration: d * (n + 1) - r,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: s,
            generator: n,
            mirroredGenerator: r,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: h,
            resolvedDuration: u,
          } = i;
          if (null === this.startTime) return n.next(0);
          let {
            delay: d,
            repeat: c,
            repeatType: p,
            repeatDelay: m,
            onUpdate: f,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - h / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let v = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            g = this.speed >= 0 ? v < 0 : v > h;
          (this.currentTime = Math.max(v, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = h);
          let y = this.currentTime,
            x = n;
          if (c) {
            let t = Math.min(this.currentTime, h) / u,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, c + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), m && (i -= m / u))
                  : "mirror" === p && (x = r)),
              (y = _(0, 1, i) * u);
          }
          let P = g ? { done: !1, value: a[0] } : x.next(y);
          o && (P.value = o(P.value));
          let { done: T } = P;
          g ||
            null === l ||
            (T =
              this.speed >= 0 ? this.currentTime >= h : this.currentTime <= 0);
          let w =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && T));
          return (
            w && void 0 !== s && (P.value = ey(a, this.options, s)),
            f && f(P.value),
            w && this.finish(),
            P
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? eh(t.calculatedDuration) : 0;
        }
        get time() {
          return eh(this.currentTime);
        }
        set time(t) {
          (t = el(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t), e && (this.time = eh(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = iH, onPlay: e } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let i = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = i - this.holdTime)
            : (this.startTime && "finished" !== this.state) ||
              (this.startTime = i),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      let iX = (t) => Array.isArray(t) && "number" == typeof t[0],
        iG = ([t, e, i, s]) => `cubic-bezier(${t}, ${e}, ${i}, ${s})`,
        iq = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: iG([0, 0.65, 0.55, 1]),
          circOut: iG([0.55, 0, 1, 0.45]),
          backIn: iG([0.31, 0.01, 0.66, -0.59]),
          backOut: iG([0.33, 1.53, 0.69, 0.99]),
        };
      function iZ(t) {
        return i_(t) || iq.easeOut;
      }
      function i_(t) {
        if (t) return iX(t) ? iG(t) : Array.isArray(t) ? t.map(iZ) : iq[t];
      }
      let iJ =
          ((o = () => Object.hasOwnProperty.call(Element.prototype, "animate")),
          () => (void 0 === n && (n = o()), n)),
        iQ = new Set(["opacity", "clipPath", "filter", "transform"]);
      class i0 extends ie {
        constructor(t) {
          super(t);
          let { name: e, motionValue: i, keyframes: s } = this.options;
          (this.resolver = new e8(
            s,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i, s;
          let {
            duration: n = 300,
            times: r,
            ease: o,
            type: a,
            motionValue: l,
            name: h,
          } = this.options;
          if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
            return !1;
          if (
            "spring" === (s = this.options).type ||
            "backgroundColor" === s.name ||
            !(function t(e) {
              return !!(
                !e ||
                ("string" == typeof e && e in iq) ||
                iX(e) ||
                (Array.isArray(e) && e.every(t))
              );
            })(s.ease)
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: s,
                ...l
              } = this.options,
              h = (function (t, e) {
                let i = new iK({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  s = { done: !1, value: t[0] },
                  n = [],
                  r = 0;
                for (; !s.done && r < 2e4; )
                  n.push((s = i.sample(r)).value), (r += 10);
                return {
                  times: void 0,
                  keyframes: n,
                  duration: r - 10,
                  ease: "linear",
                };
              })(t, l);
            1 === (t = h.keyframes).length && (t[1] = t[0]),
              (n = h.duration),
              (r = h.times),
              (o = h.ease),
              (a = "keyframes");
          }
          let u = (function (
            t,
            e,
            i,
            {
              delay: s = 0,
              duration: n = 300,
              repeat: r = 0,
              repeatType: o = "loop",
              ease: a,
              times: l,
            } = {}
          ) {
            let h = { [e]: i };
            l && (h.offset = l);
            let u = i_(a);
            return (
              Array.isArray(u) && (h.easing = u),
              t.animate(h, {
                delay: s,
                duration: n,
                easing: Array.isArray(u) ? "linear" : u,
                fill: "both",
                iterations: r + 1,
                direction: "reverse" === o ? "alternate" : "normal",
              })
            );
          })(l.owner.current, h, t, {
            ...this.options,
            duration: n,
            times: r,
            ease: o,
          });
          return (
            (u.startTime = eP.now()),
            this.pendingTimeline
              ? ((u.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (u.onfinish = () => {
                  let { onComplete: i } = this.options;
                  l.set(ey(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: u,
              duration: n,
              times: r,
              type: a,
              ease: o,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return eh(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return eh(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = el(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return tI;
            let { animation: i } = e;
            (i.timeline = t), (i.onfinish = null);
          } else this.pendingTimeline = t;
          return tI;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: s,
            type: n,
            ease: r,
            times: o,
          } = t;
          if ("idle" !== e.playState && "finished" !== e.playState) {
            if (this.time) {
              let {
                  motionValue: t,
                  onUpdate: e,
                  onComplete: a,
                  ...l
                } = this.options,
                h = new iK({
                  ...l,
                  keyframes: i,
                  duration: s,
                  type: n,
                  ease: r,
                  times: o,
                  isGenerator: !0,
                }),
                u = el(this.time);
              t.setWithVelocity(h.sample(u - 10).value, h.sample(u).value, 10);
            }
            this.cancel();
          }
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: s,
            repeatType: n,
            damping: r,
            type: o,
          } = t;
          return (
            iJ() &&
            i &&
            iQ.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !s &&
            "mirror" !== n &&
            0 !== r &&
            "inertia" !== o
          );
        }
      }
      let i1 =
        (t, e, i, s = {}, n, r) =>
        (o) => {
          let a = ef(s, t) || {},
            l = a.delay || s.delay || 0,
            { elapsed: h = 0 } = s;
          h -= el(l);
          let u = {
            keyframes: Array.isArray(i) ? i : [null, i],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...a,
            delay: -h,
            onUpdate: (t) => {
              e.set(t), a.onUpdate && a.onUpdate(t);
            },
            onComplete: () => {
              o(), a.onComplete && a.onComplete();
            },
            name: t,
            motionValue: e,
            element: r ? void 0 : n,
          };
          !(function ({
            when: t,
            delay: e,
            delayChildren: i,
            staggerChildren: s,
            staggerDirection: n,
            repeat: r,
            repeatType: o,
            repeatDelay: a,
            from: l,
            elapsed: h,
            ...u
          }) {
            return !!Object.keys(u).length;
          })(a) && (u = { ...u, ...em(t, u) }),
            u.duration && (u.duration = el(u.duration)),
            u.repeatDelay && (u.repeatDelay = el(u.repeatDelay)),
            void 0 !== u.from && (u.keyframes[0] = u.from);
          let d = !1;
          if (
            ((!1 !== u.type && (0 !== u.duration || u.repeatDelay)) ||
              ((u.duration = 0), 0 !== u.delay || (d = !0)),
            (ev.current || g.skipAnimations) &&
              ((d = !0), (u.duration = 0), (u.delay = 0)),
            d && !r && void 0 !== e.get())
          ) {
            let t = ey(u.keyframes, a);
            if (void 0 !== t) {
              tU.update(() => {
                u.onUpdate(t), u.onComplete();
              });
              return;
            }
          }
          return !r && i0.supports(u) ? new i0(u) : new iK(u);
        };
      function i5(t) {
        return !!(W(t) && t.add);
      }
      function i2(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function i3(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      class i9 {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return i2(this.subscriptions, t), () => i3(this.subscriptions, t);
        }
        notify(t, e, i) {
          let s = this.subscriptions.length;
          if (s) {
            if (1 === s) this.subscriptions[0](t, e, i);
            else
              for (let n = 0; n < s; n++) {
                let s = this.subscriptions[n];
                s && s(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let i4 = (t) => !isNaN(parseFloat(t)),
        i6 = { current: void 0 };
      class i7 {
        constructor(t, e = {}) {
          (this.version = "11.1.7"),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = eP.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.canTrackVelocity = i4(this.current)),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t), (this.updatedAt = eP.now());
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new i9());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  tU.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return i6.current && i6.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t;
          let e = eP.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (
            (t = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
            i ? (1e3 / i) * t : 0
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function i8(t, e) {
        return new i7(t, e);
      }
      function st(t, e, { delay: i = 0, transitionOverride: s, type: n } = {}) {
        var r;
        let {
            transition: o = t.getDefaultTransition(),
            transitionEnd: a,
            ...l
          } = e,
          h = t.getValue("willChange");
        s && (o = s);
        let u = [],
          d = n && t.animationState && t.animationState.getState()[n];
        for (let e in l) {
          let s = t.getValue(
              e,
              null !== (r = t.latestValues[e]) && void 0 !== r ? r : null
            ),
            n = l[e];
          if (
            void 0 === n ||
            (d &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let s = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), s;
              })(d, e))
          )
            continue;
          let a = { delay: i, elapsed: 0, ...ef(o || {}, e) },
            c = !1;
          if (window.HandoffAppearAnimations) {
            let i = t.getProps()[v];
            if (i) {
              let t = window.HandoffAppearAnimations(i, e);
              null !== t && ((a.elapsed = t), (c = !0));
            }
          }
          s.start(
            i1(
              e,
              s,
              n,
              t.shouldReduceMotion && $.has(e) ? { type: !1 } : a,
              t,
              c
            )
          );
          let p = s.animation;
          p && (i5(h) && (h.add(e), p.then(() => h.remove(e))), u.push(p));
        }
        return (
          a &&
            Promise.all(u).then(() => {
              tU.update(() => {
                a &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: s = {},
                      ...n
                    } = ea(t, e) || {};
                    for (let e in (n = { ...n, ...i })) {
                      let i = tj(n[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, i8(i));
                    }
                  })(t, a);
              });
            }),
          u
        );
      }
      function se(t, e, i = {}) {
        var s;
        let n = ea(
            t,
            e,
            "exit" === i.type
              ? null === (s = t.presenceContext) || void 0 === s
                ? void 0
                : s.custom
              : void 0
          ),
          { transition: r = t.getDefaultTransition() || {} } = n || {};
        i.transitionOverride && (r = i.transitionOverride);
        let o = n ? () => Promise.all(st(t, n, i)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (s = 0) => {
                  let {
                    delayChildren: n = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = r;
                  return (function (t, e, i = 0, s = 0, n = 1, r) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * s,
                      l = 1 === n ? (t = 0) => t * s : (t = 0) => a - t * s;
                    return (
                      Array.from(t.variantChildren)
                        .sort(si)
                        .forEach((t, s) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              se(t, e, { ...r, delay: i + l(s) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, n + s, o, a, i);
                }
              : () => Promise.resolve(),
          { when: l } = r;
        if (!l) return Promise.all([o(), a(i.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
          return t().then(() => e());
        }
      }
      function si(t, e) {
        return t.sortNodePosition(e);
      }
      let ss = [...V].reverse(),
        sn = V.length;
      function sr(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      class so extends t2 {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let s;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            s = Promise.all(e.map((e) => se(t, e, i)));
                          else if ("string" == typeof e) s = se(t, e, i);
                          else {
                            let n =
                              "function" == typeof e ? ea(t, e, i.custom) : e;
                            s = Promise.all(st(t, n, i));
                          }
                          return s.then(() => {
                            tU.postRender(() => {
                              t.notify("AnimationComplete", e);
                            });
                          });
                        })(t, e, i)
                      )
                    ),
                  i = {
                    animate: sr(!0),
                    whileInView: sr(),
                    whileHover: sr(),
                    whileTap: sr(),
                    whileDrag: sr(),
                    whileFocus: sr(),
                    exit: sr(),
                  },
                  s = !0,
                  n = (e) => (i, s) => {
                    var n;
                    let r = ea(
                      t,
                      s,
                      "exit" === e
                        ? null === (n = t.presenceContext) || void 0 === n
                          ? void 0
                          : n.custom
                        : void 0
                    );
                    if (r) {
                      let { transition: t, transitionEnd: e, ...s } = r;
                      i = { ...i, ...s, ...e };
                    }
                    return i;
                  };
                function r(r) {
                  let o = t.getProps(),
                    a = t.getVariantContext(!0) || {},
                    l = [],
                    h = new Set(),
                    u = {},
                    d = 1 / 0;
                  for (let e = 0; e < sn; e++) {
                    var c;
                    let p = ss[e],
                      m = i[p],
                      f = void 0 !== o[p] ? o[p] : a[p],
                      v = S(f),
                      g = p === r ? m.isActive : null;
                    !1 === g && (d = e);
                    let y = f === a[p] && f !== o[p] && v;
                    if (
                      (y && s && t.manuallyAnimateOnMount && (y = !1),
                      (m.protectedKeys = { ...u }),
                      (!m.isActive && null === g) ||
                        (!f && !m.prevProp) ||
                        A(f) ||
                        "boolean" == typeof f)
                    )
                      continue;
                    let x =
                        ((c = m.prevProp),
                        ("string" == typeof f
                          ? f !== c
                          : !!Array.isArray(f) && !eo(f, c)) ||
                          (p === r && m.isActive && !y && v) ||
                          (e > d && v)),
                      P = !1,
                      T = Array.isArray(f) ? f : [f],
                      w = T.reduce(n(p), {});
                    !1 === g && (w = {});
                    let { prevResolvedValues: b = {} } = m,
                      V = { ...b, ...w },
                      E = (e) => {
                        (x = !0),
                          h.has(e) && ((P = !0), h.delete(e)),
                          (m.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in V) {
                      let e = w[t],
                        i = b[t];
                      if (!u.hasOwnProperty(t))
                        (tF(e) && tF(i) ? eo(e, i) : e === i)
                          ? void 0 !== e && h.has(t)
                            ? E(t)
                            : (m.protectedKeys[t] = !0)
                          : null != e
                          ? E(t)
                          : h.add(t);
                    }
                    (m.prevProp = f),
                      (m.prevResolvedValues = w),
                      m.isActive && (u = { ...u, ...w }),
                      s && t.blockInitialAnimation && (x = !1),
                      x &&
                        (!y || P) &&
                        l.push(
                          ...T.map((t) => ({
                            animation: t,
                            options: { type: p },
                          }))
                        );
                  }
                  if (h.size) {
                    let e = {};
                    h.forEach((i) => {
                      let s = t.getBaseTarget(i),
                        n = t.getValue(i);
                      n && (n.liveStyle = !0), (e[i] = null != s ? s : null);
                    }),
                      l.push({ animation: e });
                  }
                  let p = !!l.length;
                  return (
                    s &&
                      (!1 === o.initial || o.initial === o.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (p = !1),
                    (s = !1),
                    p ? e(l) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: r,
                  setActive: function (e, s) {
                    var n;
                    if (i[e].isActive === s) return Promise.resolve();
                    null === (n = t.variantChildren) ||
                      void 0 === n ||
                      n.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, s);
                      }),
                      (i[e].isActive = s);
                    let o = r(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return o;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          this.unmount(), A(t) && (this.unmount = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {}
      }
      let sa = 0;
      class sl extends t2 {
        constructor() {
          super(...arguments), (this.id = sa++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let s = this.node.animationState.setActive("exit", !t);
          e && !t && s.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let sh = (t, e) => Math.abs(t - e);
      class su {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: s,
            dragSnapToOrigin: n = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let i = sp(this.lastMoveEventInfo, this.history),
                s = null !== this.startEvent,
                n =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(sh(t.x, e.x) ** 2 + sh(t.y, e.y) ** 2) >= 3);
              if (!s && !n) return;
              let { point: r } = i,
                { timestamp: o } = tN;
              this.history.push({ ...r, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              s ||
                (a && a(this.lastMoveEvent, i),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, i);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = sd(e, this.transformPagePoint)),
                tU.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: s,
                resumeAnimation: n,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && n && n(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let r = sp(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : sd(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, r), s && s(t, r);
            }),
            !tK(t))
          )
            return;
          (this.dragSnapToOrigin = n),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = s || window);
          let r = sd(tX(t), this.transformPagePoint),
            { point: o } = r,
            { timestamp: a } = tN;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, sp(r, this.history)),
            (this.removeListeners = t_(
              tq(this.contextWindow, "pointermove", this.handlePointerMove),
              tq(this.contextWindow, "pointerup", this.handlePointerUp),
              tq(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(), t$(this.updatePoint);
        }
      }
      function sd(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function sc(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function sp({ point: t }, e) {
        return {
          point: t,
          delta: sc(t, sm(e)),
          offset: sc(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              s = null,
              n = sm(t);
            for (
              ;
              i >= 0 && ((s = t[i]), !(n.timestamp - s.timestamp > el(0.1)));

            )
              i--;
            if (!s) return { x: 0, y: 0 };
            let r = eh(n.timestamp - s.timestamp);
            if (0 === r) return { x: 0, y: 0 };
            let o = { x: (n.x - s.x) / r, y: (n.y - s.y) / r };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function sm(t) {
        return t[t.length - 1];
      }
      function sf(t) {
        return t.max - t.min;
      }
      function sv(t, e = 0, i = 0.01) {
        return Math.abs(t - e) <= i;
      }
      function sg(t, e, i, s = 0.5) {
        (t.origin = s),
          (t.originPoint = iM(e.min, e.max, t.origin)),
          (t.scale = sf(i) / sf(e)),
          (sv(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = iM(i.min, i.max, t.origin) - t.originPoint),
          (sv(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function sy(t, e, i, s) {
        sg(t.x, e.x, i.x, s ? s.originX : void 0),
          sg(t.y, e.y, i.y, s ? s.originY : void 0);
      }
      function sx(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + sf(e));
      }
      function sP(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + sf(e));
      }
      function sT(t, e, i) {
        sP(t.x, e.x, i.x), sP(t.y, e.y, i.y);
      }
      function sw(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function sb(t, e) {
        let i = e.min - t.min,
          s = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, s] = [s, i]), { min: i, max: s }
        );
      }
      function sS(t, e, i) {
        return { min: sA(t, e), max: sA(t, i) };
      }
      function sA(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let sV = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        sE = () => ({ x: sV(), y: sV() }),
        sM = () => ({ min: 0, max: 0 }),
        sC = () => ({ x: sM(), y: sM() });
      function sR(t) {
        return [t("x"), t("y")];
      }
      function sk({ top: t, left: e, right: i, bottom: s }) {
        return { x: { min: e, max: i }, y: { min: t, max: s } };
      }
      function sD(t) {
        return void 0 === t || 1 === t;
      }
      function sF({ scale: t, scaleX: e, scaleY: i }) {
        return !sD(t) || !sD(e) || !sD(i);
      }
      function sL(t) {
        return (
          sF(t) ||
          sj(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function sj(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function sB(t, e, i, s, n) {
        return void 0 !== n && (t = s + n * (t - s)), s + i * (t - s) + e;
      }
      function sO(t, e = 0, i = 1, s, n) {
        (t.min = sB(t.min, e, i, s, n)), (t.max = sB(t.max, e, i, s, n));
      }
      function sI(t, { x: e, y: i }) {
        sO(t.x, e.translate, e.scale, e.originPoint),
          sO(t.y, i.translate, i.scale, i.originPoint);
      }
      function sU(t) {
        return Number.isInteger(t)
          ? t
          : t > 1.0000000000001 || t < 0.999999999999
          ? t
          : 1;
      }
      function s$(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function sN(t, e, [i, s, n]) {
        let r = void 0 !== e[n] ? e[n] : 0.5,
          o = iM(t.min, t.max, r);
        sO(t, e[i], e[s], o, e.scale);
      }
      let sW = ["x", "scaleX", "originX"],
        sH = ["y", "scaleY", "originY"];
      function sz(t, e) {
        sN(t.x, e, sW), sN(t.y, e, sH);
      }
      function sY(t, e) {
        return sk(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              s = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: s.y, right: s.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let sK = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        sX = new WeakMap();
      class sG {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = sC()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: s } = this.getProps();
          this.panSession = new su(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(tX(t, "page").point);
              },
              onStart: (t, e) => {
                let {
                  drag: i,
                  dragPropagation: s,
                  onDragStart: n,
                } = this.getProps();
                if (
                  i &&
                  !s &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = t1(i)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  sR((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (tl.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let s = i.layout.layoutBox[t];
                        if (s) {
                          let t = sf(s);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  n && n(t, e);
                let { animationState: r } = this.visualElement;
                r && r.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: s,
                  onDirectionLock: n,
                  onDrag: r,
                } = this.getProps();
                if (!i && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (s && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      n &&
                      n(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  r && r(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                sR((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: s,
              contextWindow: sK(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: s } = e;
          this.startAnimation(s);
          let { onDragEnd: n } = this.getProps();
          n && n(t, e);
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: s } = this.getProps();
          if (!i || !sq(t, s, this.currentDirection)) return;
          let n = this.getAxisMotionValue(t),
            r = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (r = (function (t, { min: e, max: i }, s) {
              return (
                void 0 !== e && t < e
                  ? (t = s ? iM(e, t, s.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = s ? iM(i, t, s.max) : Math.min(t, i)),
                t
              );
            })(r, this.constraints[t], this.elastic[t])),
            n.set(r);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            s =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            n = this.constraints;
          e && b(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && s
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: s, right: n }
              ) {
                return { x: sw(t.x, i, n), y: sw(t.y, e, s) };
              })(s.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: sS(t, "left", "right"), y: sS(t, "top", "bottom") }
              );
            })(i)),
            n !== this.constraints &&
              s &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              sR((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(s.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !b(e)) return !1;
          let s = e.current;
          tI(
            null !== s,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: n } = this.visualElement;
          if (!n || !n.layout) return !1;
          let r = (function (t, e, i) {
              let s = sY(t, i),
                { scroll: n } = e;
              return n && (s$(s.x, n.offset.x), s$(s.y, n.offset.y)), s;
            })(s, n.root, this.visualElement.getTransformPagePoint()),
            o = { x: sb((t = n.layout.layoutBox).x, r.x), y: sb(t.y, r.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = sk(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: s,
              dragTransition: n,
              dragSnapToOrigin: r,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            sR((o) => {
              if (!sq(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              r && (l = { min: 0, max: 0 });
              let h = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: s ? 200 : 1e6,
                bounceDamping: s ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...n,
                ...l,
              };
              return this.startAxisValueAnimation(o, h);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return i.start(i1(t, i, 0, e, this.visualElement));
        }
        stopAnimation() {
          sR((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          sR((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          sR((e) => {
            let { drag: i } = this.getProps();
            if (!sq(e, i, this.currentDirection)) return;
            let { projection: s } = this.visualElement,
              n = this.getAxisMotionValue(e);
            if (s && s.layout) {
              let { min: i, max: r } = s.layout.layoutBox[e];
              n.set(t[e] - iM(i, r, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!b(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let s = { x: 0, y: 0 };
          sR((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              s[t] = (function (t, e) {
                let i = 0.5,
                  s = sf(t),
                  n = sf(e);
                return (
                  n > s
                    ? (i = iE(e.min, e.max - s, t.min))
                    : s > n && (i = iE(t.min, t.max - n, e.min)),
                  _(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: n } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = n ? n({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            sR((e) => {
              if (!sq(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: n, max: r } = this.constraints[e];
              i.set(iM(n, r, s[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          sX.set(this.visualElement, this);
          let t = tq(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              b(t) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            s = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            e();
          let n = tY(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            r = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (sR((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            n(), t(), s(), r && r();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: s = !1,
              dragConstraints: n = !1,
              dragElastic: r = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: s,
            dragConstraints: n,
            dragElastic: r,
            dragMomentum: o,
          };
        }
      }
      function sq(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class sZ extends t2 {
        constructor(t) {
          super(t),
            (this.removeGroupControls = tI),
            (this.removeListeners = tI),
            (this.controls = new sG(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || tI);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let s_ = (t) => (e, i) => {
        t && t(e, i);
      };
      class sJ extends t2 {
        constructor() {
          super(...arguments), (this.removePointerDownListener = tI);
        }
        onPointerDown(t) {
          this.session = new su(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: sK(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: s,
          } = this.node.getProps();
          return {
            onSessionStart: s_(t),
            onStart: s_(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, s && s(t, e);
            },
          };
        }
        mount() {
          this.removePointerDownListener = tq(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      let sQ = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function s0(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let s1 = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!th.test(t)) return t;
            t = parseFloat(t);
          }
          let i = s0(t, e.target.x),
            s = s0(t, e.target.y);
          return `${i}% ${s}%`;
        },
      };
      class s5 extends l.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: s,
            } = this.props,
            { projection: n } = t;
          Object.assign(I, s3),
            n &&
              (e.group && e.group.add(n),
              i && i.register && s && i.register(n),
              n.root.didUpdate(),
              n.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              n.setOptions({
                ...n.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (sQ.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: s,
              isPresent: n,
            } = this.props,
            r = i.projection;
          return (
            r &&
              ((r.isPresent = n),
              s || t.layoutDependency !== e || void 0 === e
                ? r.willUpdate()
                : this.safeToRemove(),
              t.isPresent === n ||
                (n
                  ? r.promote()
                  : r.relegate() ||
                    tU.postRender(() => {
                      let t = r.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            T.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: s } = t;
          s &&
            (s.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(s),
            i && i.deregister && i.deregister(s));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function s2(t) {
        let [e, i] = (function () {
            let t = (0, l.useContext)(d);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: s } = t,
              n = (0, l.useId)();
            return (
              (0, l.useEffect)(() => s(n), []),
              !e && i ? [!1, () => i && i(n)] : [!0]
            );
          })(),
          s = (0, l.useContext)(F);
        return (0, a.jsx)(s5, {
          ...t,
          layoutGroup: s,
          switchLayoutGroup: (0, l.useContext)(L),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let s3 = {
          borderRadius: {
            ...s1,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: s1,
          borderTopRightRadius: s1,
          borderBottomLeftRadius: s1,
          borderBottomRightRadius: s1,
          boxShadow: {
            correct: (t, { treeScale: e, projectionDelta: i }) => {
              let s = e1.parse(t);
              if (s.length > 5) return t;
              let n = e1.createTransformer(t),
                r = "number" != typeof s[0] ? 1 : 0,
                o = i.x.scale * e.x,
                a = i.y.scale * e.y;
              (s[0 + r] /= o), (s[1 + r] /= a);
              let l = iM(o, a, 0.5);
              return (
                "number" == typeof s[2 + r] && (s[2 + r] /= l),
                "number" == typeof s[3 + r] && (s[3 + r] /= l),
                n(s)
              );
            },
          },
        },
        s9 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        s4 = s9.length,
        s6 = (t) => ("string" == typeof t ? parseFloat(t) : t),
        s7 = (t) => "number" == typeof t || th.test(t);
      function s8(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let nt = ni(0, 0.5, iP),
        ne = ni(0.5, 0.95, tI);
      function ni(t, e, i) {
        return (s) => (s < t ? 0 : s > e ? 1 : i(iE(t, e, s)));
      }
      function ns(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function nn(t, e) {
        ns(t.x, e.x), ns(t.y, e.y);
      }
      function nr(t, e, i, s, n) {
        return (
          (t -= e),
          (t = s + (1 / i) * (t - s)),
          void 0 !== n && (t = s + (1 / n) * (t - s)),
          t
        );
      }
      function no(t, e, [i, s, n], r, o) {
        !(function (t, e = 0, i = 1, s = 0.5, n, r = t, o = t) {
          if (
            (tl.test(e) &&
              ((e = parseFloat(e)), (e = iM(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = iM(r.min, r.max, s);
          t === r && (a -= e),
            (t.min = nr(t.min, e, i, a, n)),
            (t.max = nr(t.max, e, i, a, n));
        })(t, e[i], e[s], e[n], e.scale, r, o);
      }
      let na = ["x", "scaleX", "originX"],
        nl = ["y", "scaleY", "originY"];
      function nh(t, e, i, s) {
        no(t.x, e, na, i ? i.x : void 0, s ? s.x : void 0),
          no(t.y, e, nl, i ? i.y : void 0, s ? s.y : void 0);
      }
      function nu(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function nd(t) {
        return nu(t.x) && nu(t.y);
      }
      function nc(t, e) {
        return (
          Math.round(t.x.min) === Math.round(e.x.min) &&
          Math.round(t.x.max) === Math.round(e.x.max) &&
          Math.round(t.y.min) === Math.round(e.y.min) &&
          Math.round(t.y.max) === Math.round(e.y.max)
        );
      }
      function np(t) {
        return sf(t.x) / sf(t.y);
      }
      class nm {
        constructor() {
          this.members = [];
        }
        add(t) {
          i2(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (i3(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: s } = t.options;
            !1 === s && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function nf(t, e, i) {
        let s = "",
          n = t.x.translate / e.x,
          r = t.y.translate / e.y,
          o = (null == i ? void 0 : i.z) || 0;
        if (
          ((n || r || o) && (s = `translate3d(${n}px, ${r}px, ${o}px) `),
          (1 !== e.x || 1 !== e.y) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
          i)
        ) {
          let {
            transformPerspective: t,
            rotate: e,
            rotateX: n,
            rotateY: r,
            skewX: o,
            skewY: a,
          } = i;
          t && (s = `perspective(${t}px) ${s}`),
            e && (s += `rotate(${e}deg) `),
            n && (s += `rotateX(${n}deg) `),
            r && (s += `rotateY(${r}deg) `),
            o && (s += `skewX(${o}deg) `),
            a && (s += `skewY(${a}deg) `);
        }
        let a = t.x.scale * e.x,
          l = t.y.scale * e.y;
        return (1 !== a || 1 !== l) && (s += `scale(${a}, ${l})`), s || "none";
      }
      let nv = (t, e) => t.depth - e.depth;
      class ng {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          i2(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          i3(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(nv),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      let ny = ["", "X", "Y", "Z"],
        nx = { visibility: "hidden" },
        nP = 0,
        nT = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function nw(t, e, i, s) {
        let { latestValues: n } = e;
        n[t] && ((i[t] = n[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
      }
      function nb({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: s,
        resetTransform: n,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = nP++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  (nT.totalNodes =
                    nT.resolvedTargetDeltas =
                    nT.recalculatedProjection =
                      0),
                  this.nodes.forEach(nV),
                  this.nodes.forEach(nF),
                  this.nodes.forEach(nL),
                  this.nodes.forEach(nE),
                  window.MotionDebug && window.MotionDebug.record(nT);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new ng());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new i9()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: s, layout: n, visualElement: r } = this.options;
            if (
              (r && !r.current && r.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (n || s) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let s = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = eP.now(),
                      s = ({ timestamp: n }) => {
                        let r = n - i;
                        r >= e && (t$(s), t(r - e));
                      };
                    return tU.read(s, !0), () => t$(s);
                  })(s, 250)),
                  sQ.hasAnimatedSinceResize &&
                    ((sQ.hasAnimatedSinceResize = !1), this.nodes.forEach(nD));
              });
            }
            s && this.root.registerSharedNode(s, this),
              !1 !== this.options.animate &&
                r &&
                (s || n) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: s,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let n =
                        this.options.transition ||
                        r.getDefaultTransition() ||
                        n$,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = r.getProps(),
                      l = !this.targetLayout || !nc(this.targetLayout, s) || i,
                      h = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      h ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, h);
                      let e = { ...ef(n, "layout"), onPlay: o, onComplete: a };
                      (r.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || nD(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = s;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              t$(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(nj),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let s = this.getTransformTemplate();
            (this.prevTransformTemplateValue = s
              ? s(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(nC);
              return;
            }
            this.isUpdating || this.nodes.forEach(nR),
              (this.isUpdating = !1),
              window.HandoffCancelAllAnimations &&
                window.HandoffCancelAllAnimations(),
              this.nodes.forEach(nk),
              this.nodes.forEach(nS),
              this.nodes.forEach(nA),
              this.clearAllSnapshots();
            let t = eP.now();
            (tN.delta = _(0, 1e3 / 60, t - tN.timestamp)),
              (tN.timestamp = t),
              (tN.isProcessing = !0),
              tW.update.process(tN),
              tW.preRender.process(tN),
              tW.render.process(tN),
              (tN.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), T.read(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(nM), this.sharedNodes.forEach(nB);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              tU.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            tU.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = sC()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
              e &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: s(this.instance),
                  offset: i(this.instance),
                });
          }
          resetTransform() {
            if (!n) return;
            let t = this.isLayoutDirty || this.shouldResetTransform,
              e = this.projectionDelta && !nd(this.projectionDelta),
              i = this.getTransformTemplate(),
              s = i ? i(this.latestValues, "") : void 0,
              r = s !== this.prevTransformTemplateValue;
            t &&
              (e || sL(this.latestValues) || r) &&
              (n(this.instance, s),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              s = this.removeElementScroll(i);
            return (
              t && (s = this.removeTransform(s)),
              nH((e = s).x),
              nH(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: s,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return sC();
            let e = t.measureViewportBox(),
              { scroll: i } = this.root;
            return i && (s$(e.x, i.offset.x), s$(e.y, i.offset.y)), e;
          }
          removeElementScroll(t) {
            let e = sC();
            nn(e, t);
            for (let i = 0; i < this.path.length; i++) {
              let s = this.path[i],
                { scroll: n, options: r } = s;
              if (s !== this.root && n && r.layoutScroll) {
                if (n.isRoot) {
                  nn(e, t);
                  let { scroll: i } = this.root;
                  i && (s$(e.x, -i.offset.x), s$(e.y, -i.offset.y));
                }
                s$(e.x, n.offset.x), s$(e.y, n.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let i = sC();
            nn(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let s = this.path[t];
              !e &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                sz(i, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
                sL(s.latestValues) && sz(i, s.latestValues);
            }
            return sL(this.latestValues) && sz(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = sC();
            nn(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !sL(i.latestValues)) continue;
              sF(i.latestValues) && i.updateSnapshot();
              let s = sC();
              nn(s, i.measurePageBox()),
                nh(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  s
                );
            }
            return sL(this.latestValues) && nh(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== tN.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, s, n;
            let r = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = r.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = r.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = r.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== r;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = tN.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = sC()),
                    (this.relativeTargetOrigin = sC()),
                    sT(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    nn(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = sC()), (this.targetWithTransforms = sC())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (s = this.relativeTarget),
                      (n = this.relativeParent.target),
                      sx(i.x, s.x, n.x),
                      sx(i.y, s.y, n.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : nn(this.target, this.layout.layoutBox),
                      sI(this.target, this.targetDelta))
                    : nn(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = sC()),
                      (this.relativeTargetOrigin = sC()),
                      sT(this.relativeTargetOrigin, this.target, t.target),
                      nn(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                nT.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              sF(this.parent.latestValues) ||
              sj(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              s = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (s = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (s = !1),
              this.resolvedRelativeTargetAt === tN.timestamp && (s = !1),
              s)
            )
              return;
            let { layout: n, layoutId: r } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(n || r))
            )
              return;
            nn(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, s = !1) {
              let n, r;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  r = (n = i[a]).projectionDelta;
                  let o = n.instance;
                  (!o || !o.style || "contents" !== o.style.display) &&
                    (s &&
                      n.options.layoutScroll &&
                      n.scroll &&
                      n !== n.root &&
                      sz(t, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                    r && ((e.x *= r.x.scale), (e.y *= r.y.scale), sI(t, r)),
                    s && sL(n.latestValues) && sz(t, n.latestValues));
                }
                (e.x = sU(e.x)), (e.y = sU(e.y));
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = sC()));
            let { target: l } = e;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = sE()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = sE()),
              (this.projectionDeltaWithTransform = sE()));
            let h = this.projectionTransform;
            sy(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = nf(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== h ||
                this.treeScale.x !== o ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              nT.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let s = this.snapshot,
              n = s ? s.latestValues : {},
              r = { ...this.latestValues },
              o = sE();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = sC(),
              l =
                (s ? s.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              h = this.getStack(),
              u = !h || h.members.length <= 1,
              d = !!(
                l &&
                !u &&
                !0 === this.options.crossfade &&
                !this.path.some(nU)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let s = e / 1e3;
                if (
                  (nO(o.x, t.x, s),
                  nO(o.y, t.y, s),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var h, c, p, m;
                  sT(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    nI(p.x, m.x, a.x, s),
                    nI(p.y, m.y, a.y, s),
                    i &&
                      ((h = this.relativeTarget),
                      (c = i),
                      h.x.min === c.x.min &&
                        h.x.max === c.x.max &&
                        h.y.min === c.y.min &&
                        h.y.max === c.y.max) &&
                      (this.isProjectionDirty = !1),
                    i || (i = sC()),
                    nn(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = r),
                  (function (t, e, i, s, n, r) {
                    n
                      ? ((t.opacity = iM(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          nt(s)
                        )),
                        (t.opacityExit = iM(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          ne(s)
                        )))
                      : r &&
                        (t.opacity = iM(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          s
                        ));
                    for (let n = 0; n < s4; n++) {
                      let r = `border${s9[n]}Radius`,
                        o = s8(e, r),
                        a = s8(i, r);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || s7(o) === s7(a)
                          ? ((t[r] = Math.max(iM(s6(o), s6(a), s), 0)),
                            (tl.test(a) || tl.test(o)) && (t[r] += "%"))
                          : (t[r] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = iM(e.rotate || 0, i.rotate || 0, s));
                  })(r, n, this.latestValues, s, d, u)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = s);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                (t$(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = tU.update(() => {
                (sQ.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let s = W(t) ? t : i8(t);
                    return s.start(i1("", s, 1e3, i)), s.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: s,
                latestValues: n,
              } = t;
            if (e && i && s) {
              if (
                this !== t &&
                this.layout &&
                s &&
                nz(
                  this.options.animationType,
                  this.layout.layoutBox,
                  s.layoutBox
                )
              ) {
                i = this.target || sC();
                let e = sf(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let s = sf(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + s);
              }
              nn(e, i),
                sz(e, n),
                sy(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  n
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new nm()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let s = this.getStack();
            s && s.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let s = {};
            i.z && nw("z", t, s, this.animationValues);
            for (let e = 0; e < ny.length; e++)
              nw(`rotate${ny[e]}`, t, s, this.animationValues),
                nw(`skew${ny[e]}`, t, s, this.animationValues);
            for (let e in (t.render(), s))
              t.setStaticValue(e, s[e]),
                this.animationValues && (this.animationValues[e] = s[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return nx;
            let s = { visibility: "" },
              n = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (s.opacity = ""),
                (s.pointerEvents =
                  tB(null == t ? void 0 : t.pointerEvents) || ""),
                (s.transform = n ? n(this.latestValues, "") : "none"),
                s
              );
            let r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    tB(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !sL(this.latestValues) &&
                  ((e.transform = n ? n({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = r.animationValues || r.latestValues;
            this.applyTransformsToTarget(),
              (s.transform = nf(
                this.projectionDeltaWithTransform,
                this.treeScale,
                o
              )),
              n && (s.transform = n(o, s.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((s.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            r.animationValues
              ? (s.opacity =
                  r === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (s.opacity =
                  r === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            I)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = I[t],
                n = "none" === s.transform ? o[t] : e(o[t], r);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) s[i[e]] = n;
              } else s[t] = n;
            }
            return (
              this.options.layoutId &&
                (s.pointerEvents =
                  r === this
                    ? tB(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              s
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(nC),
              this.root.sharedNodes.clear();
          }
        };
      }
      function nS(t) {
        t.updateLayout();
      }
      function nA(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: s } = t.layout,
            { animationType: n } = t.options,
            r = i.source !== t.layout.source;
          "size" === n
            ? sR((t) => {
                let s = r ? i.measuredBox[t] : i.layoutBox[t],
                  n = sf(s);
                (s.min = e[t].min), (s.max = s.min + n);
              })
            : nz(n, i.layoutBox, e) &&
              sR((s) => {
                let n = r ? i.measuredBox[s] : i.layoutBox[s],
                  o = sf(e[s]);
                (n.max = n.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[s].max = t.relativeTarget[s].min + o));
              });
          let o = sE();
          sy(o, e, i.layoutBox);
          let a = sE();
          r
            ? sy(a, t.applyTransform(s, !0), i.measuredBox)
            : sy(a, e, i.layoutBox);
          let l = !nd(o),
            h = !1;
          if (!t.resumeFrom) {
            let s = t.getClosestProjectingParent();
            if (s && !s.resumeFrom) {
              let { snapshot: n, layout: r } = s;
              if (n && r) {
                let o = sC();
                sT(o, i.layoutBox, n.layoutBox);
                let a = sC();
                sT(a, e, r.layoutBox),
                  nc(o, a) || (h = !0),
                  s.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = s));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: h,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function nV(t) {
        nT.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function nE(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function nM(t) {
        t.clearSnapshot();
      }
      function nC(t) {
        t.clearMeasurements();
      }
      function nR(t) {
        t.isLayoutDirty = !1;
      }
      function nk(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function nD(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function nF(t) {
        t.resolveTargetDelta();
      }
      function nL(t) {
        t.calcProjection();
      }
      function nj(t) {
        t.resetSkewAndRotation();
      }
      function nB(t) {
        t.removeLeadSnapshot();
      }
      function nO(t, e, i) {
        (t.translate = iM(e.translate, 0, i)),
          (t.scale = iM(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function nI(t, e, i, s) {
        (t.min = iM(e.min, i.min, s)), (t.max = iM(e.max, i.max, s));
      }
      function nU(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let n$ = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        nN = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        nW = nN("applewebkit/") && !nN("chrome/") ? Math.round : tI;
      function nH(t) {
        (t.min = nW(t.min)), (t.max = nW(t.max));
      }
      function nz(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !sv(np(e), np(i), 0.2))
        );
      }
      let nY = nb({
          attachResizeListener: (t, e) => tY(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        nK = { current: void 0 },
        nX = nb({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!nK.current) {
              let t = new nY({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (nK.current = t);
            }
            return nK.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        }),
        nG = { current: null },
        nq = { current: !1 },
        nZ = new WeakMap(),
        n_ = [...eD, eX, e1],
        nJ = (t) => n_.find(ek(t)),
        nQ = Object.keys(D),
        n0 = nQ.length,
        n1 = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        n5 = E.length;
      class n2 {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: s,
            blockInitialAnimation: n,
            visualState: r,
          },
          o = {}
        ) {
          (this.resolveKeyframes = (t, e, i, s) =>
            new this.KeyframeResolver(t, e, i, s, this)),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = eU),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => tU.render(this.render, !1, !0));
          let { latestValues: a, renderState: l } = r;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = s),
            (this.options = o),
            (this.blockInitialAnimation = !!n),
            (this.isControllingVariants = M(e)),
            (this.isVariantNode = C(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: h, ...u } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in u) {
            let e = u[t];
            void 0 !== a[t] && W(e) && (e.set(a[t], !1), i5(h) && h.add(t));
          }
        }
        mount(t) {
          (this.current = t),
            nZ.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            nq.current ||
              (function () {
                if (((nq.current = !0), c)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (nG.current = t.matches);
                    t.addListener(e), e();
                  } else nG.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || nG.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          var t;
          for (let t in (nZ.delete(this.current),
          this.projection && this.projection.unmount(),
          t$(this.notifyUpdate),
          t$(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let e in this.features)
            null === (t = this.features[e]) || void 0 === t || t.unmount();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i = $.has(t),
            s = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && tU.preRender(this.notifyUpdate),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            n = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            s(), n(), e.owner && e.stop();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures({ children: t, ...e }, i, s, n) {
          let r, o;
          for (let t = 0; t < n0; t++) {
            let i = nQ[t],
              {
                isEnabled: s,
                Feature: n,
                ProjectionNode: a,
                MeasureLayout: l,
              } = D[i];
            a && (r = a),
              s(e) &&
                (!this.features[i] && n && (this.features[i] = new n(this)),
                l && (o = l));
          }
          if (
            ("html" === this.type || "svg" === this.type) &&
            !this.projection &&
            r
          ) {
            this.projection = new r(
              this.latestValues,
              (function t(e) {
                if (e)
                  return !1 !== e.options.allowProjection
                    ? e.projection
                    : t(e.parent);
              })(this.parent)
            );
            let {
              layoutId: t,
              layout: i,
              drag: s,
              dragConstraints: o,
              layoutScroll: a,
              layoutRoot: l,
            } = e;
            this.projection.setOptions({
              layoutId: t,
              layout: i,
              alwaysMeasureLayout: !!s || (o && b(o)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof i ? i : "both",
              initialPromotionConfig: n,
              layoutScroll: a,
              layoutRoot: l,
            });
          }
          return o;
        }
        updateFeatures() {
          for (let t in this.features) {
            let e = this.features[t];
            e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : sC();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < n1.length; e++) {
            let i = n1[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let s = t["on" + i];
            s && (this.propEventSubscriptions[i] = this.on(i, s));
          }
          (this.prevMotionValues = (function (t, e, i) {
            let { willChange: s } = e;
            for (let n in e) {
              let r = e[n],
                o = i[n];
              if (W(r)) t.addValue(n, r), i5(s) && s.add(n);
              else if (W(o))
                t.addValue(n, i8(r, { owner: t })), i5(s) && s.remove(n);
              else if (o !== r) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, i8(void 0 !== e ? e : r, { owner: t }));
                }
              }
            }
            for (let s in i) void 0 === e[s] && t.removeValue(s);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(t = !1) {
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let e = {};
          for (let t = 0; t < n5; t++) {
            let i = E[t],
              s = this.props[i];
            (S(s) || !1 === s) && (e[i] = s);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = i8(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let s =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != s &&
              ("string" == typeof s && (ew(s) || eT(s))
                ? (s = parseFloat(s))
                : !nJ(s) && e1.test(e) && (s = e7(t, e)),
              this.setBaseTarget(t, W(s) ? s.get() : s)),
            W(s) ? s.get() : s
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: s } = this.props;
          if ("string" == typeof s || "object" == typeof s) {
            let n = tD(
              this.props,
              s,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            n && (i = n[t]);
          }
          if (s && void 0 !== i) return i;
          let n = this.getBaseTargetFromProps(this.props, t);
          return void 0 === n || W(n)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : n;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new i9()), this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class n3 extends n2 {
        constructor() {
          super(...arguments), (this.KeyframeResolver = e8);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
      }
      class n9 extends n3 {
        constructor() {
          super(...arguments), (this.type = "html");
        }
        readValueFromInstance(t, e) {
          if ($.has(e)) {
            let t = e6(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              s = (K(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof s ? s.trim() : s;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return sY(t, e);
        }
        build(t, e, i, s) {
          tf(t, e, i, s.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return tR(t, e, i);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          W(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
        renderInstance(t, e, i, s) {
          tE(t, e, i, s);
        }
      }
      class n4 extends n3 {
        constructor() {
          super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if ($.has(e)) {
            let t = e6(e);
            return (t && t.default) || 0;
          }
          return (e = tM.has(e) ? e : f(e)), t.getAttribute(e);
        }
        measureInstanceViewportBox() {
          return sC();
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return tk(t, e, i);
        }
        build(t, e, i, s) {
          tS(t, e, i, this.isSVGTag, s.transformTemplate);
        }
        renderInstance(t, e, i, s) {
          tC(t, e, i, s);
        }
        mount(t) {
          (this.isSVGTag = tV(t.tagName)), super.mount(t);
        }
      }
      let n6 = (t, e) =>
          O(t)
            ? new n4(e, { enableHardwareAcceleration: !1 })
            : new n9(e, {
                allowProjection: t !== l.Fragment,
                enableHardwareAcceleration: !0,
              }),
        n7 = {
          animation: { Feature: so },
          exit: { Feature: sl },
          inView: { Feature: er },
          tap: { Feature: t8 },
          focus: { Feature: t4 },
          hover: { Feature: t9 },
          pan: { Feature: sJ },
          drag: { Feature: sZ, ProjectionNode: nX, MeasureLayout: s2 },
          layout: { ProjectionNode: nX, MeasureLayout: s2 },
        },
        n8 = (function (t) {
          function e(e, i = {}) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              useRender: i,
              useVisualState: s,
              Component: n,
            }) {
              t &&
                (function (t) {
                  for (let e in t) D[e] = { ...D[e], ...t[e] };
                })(t);
              let r = (0, l.forwardRef)(function (r, o) {
                var f;
                let g;
                let y = {
                    ...(0, l.useContext)(h),
                    ...r,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, l.useContext)(F).id;
                      return e && void 0 !== t ? e + "-" + t : t;
                    })(r),
                  },
                  { isStatic: x } = y,
                  P = (function (t) {
                    let { initial: e, animate: i } = (function (t, e) {
                      if (M(t)) {
                        let { initial: e, animate: i } = t;
                        return {
                          initial: !1 === e || S(e) ? e : void 0,
                          animate: S(i) ? i : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, l.useContext)(u));
                    return (0, l.useMemo)(
                      () => ({ initial: e, animate: i }),
                      [R(e), R(i)]
                    );
                  })(r),
                  w = s(r, x);
                if (!x && c) {
                  P.visualElement = (function (t, e, i, s) {
                    let { visualElement: n } = (0, l.useContext)(u),
                      r = (0, l.useContext)(m),
                      o = (0, l.useContext)(d),
                      a = (0, l.useContext)(h).reducedMotion,
                      c = (0, l.useRef)();
                    (s = s || r.renderer),
                      !c.current &&
                        s &&
                        (c.current = s(t, {
                          visualState: e,
                          parent: n,
                          props: i,
                          presenceContext: o,
                          blockInitialAnimation: !!o && !1 === o.initial,
                          reducedMotionConfig: a,
                        }));
                    let f = c.current;
                    (0, l.useInsertionEffect)(() => {
                      f && f.update(i, o);
                    });
                    let g = (0, l.useRef)(!!(i[v] && !window.HandoffComplete));
                    return (
                      p(() => {
                        f &&
                          (T.postRender(f.render),
                          g.current &&
                            f.animationState &&
                            f.animationState.animateChanges());
                      }),
                      (0, l.useEffect)(() => {
                        f &&
                          (f.updateFeatures(),
                          !g.current &&
                            f.animationState &&
                            f.animationState.animateChanges(),
                          g.current &&
                            ((g.current = !1), (window.HandoffComplete = !0)));
                      }),
                      f
                    );
                  })(n, w, y, e);
                  let i = (0, l.useContext)(L),
                    s = (0, l.useContext)(m).strict;
                  P.visualElement &&
                    (g = P.visualElement.loadFeatures(y, s, t, i));
                }
                return (0, a.jsxs)(u.Provider, {
                  value: P,
                  children: [
                    g && P.visualElement
                      ? (0, a.jsx)(g, { visualElement: P.visualElement, ...y })
                      : null,
                    i(
                      n,
                      r,
                      ((f = P.visualElement),
                      (0, l.useCallback)(
                        (t) => {
                          t && w.mount && w.mount(t),
                            f && (t ? f.mount(t) : f.unmount()),
                            o &&
                              ("function" == typeof o
                                ? o(t)
                                : b(o) && (o.current = t));
                        },
                        [f]
                      )),
                      w,
                      x,
                      P.visualElement
                    ),
                  ],
                });
              });
              return (r[j] = n), r;
            })(t(e, i));
          }
          if ("undefined" == typeof Proxy) return e;
          let i = new Map();
          return new Proxy(e, {
            get: (t, s) => (i.has(s) || i.set(s, e(s)), i.get(s)),
          });
        })((t, e) =>
          (function (t, { forwardMotionProps: e = !1 }, i, s) {
            return {
              ...(O(t) ? tH : tz),
              preloadedFeatures: i,
              useRender: (function (t = !1) {
                return (e, i, s, { latestValues: n }, r) => {
                  let o = (
                      O(e)
                        ? function (t, e, i, s) {
                            let n = (0, l.useMemo)(() => {
                              let i = tA();
                              return (
                                tS(
                                  i,
                                  e,
                                  { enableHardwareAcceleration: !1 },
                                  tV(s),
                                  t.transformTemplate
                                ),
                                { ...i.attrs, style: { ...i.style } }
                              );
                            }, [e]);
                            if (t.style) {
                              let e = {};
                              tg(e, t.style, t),
                                (n.style = { ...e, ...n.style });
                            }
                            return n;
                          }
                        : function (t, e, i) {
                            let s = {},
                              n = (function (t, e, i) {
                                let s = t.style || {},
                                  n = {};
                                return (
                                  tg(n, s, t),
                                  Object.assign(
                                    n,
                                    (function ({ transformTemplate: t }, e, i) {
                                      return (0, l.useMemo)(() => {
                                        let s = tv();
                                        return (
                                          tf(
                                            s,
                                            e,
                                            { enableHardwareAcceleration: !i },
                                            t
                                          ),
                                          Object.assign({}, s.vars, s.style)
                                        );
                                      }, [e]);
                                    })(t, e, i)
                                  ),
                                  n
                                );
                              })(t, e, i);
                            return (
                              t.drag &&
                                !1 !== t.dragListener &&
                                ((s.draggable = !1),
                                (n.userSelect =
                                  n.WebkitUserSelect =
                                  n.WebkitTouchCallout =
                                    "none"),
                                (n.touchAction =
                                  !0 === t.drag
                                    ? "none"
                                    : `pan-${"x" === t.drag ? "y" : "x"}`)),
                              void 0 === t.tabIndex &&
                                (t.onTap || t.onTapStart || t.whileTap) &&
                                (s.tabIndex = 0),
                              (s.style = n),
                              s
                            );
                          }
                    )(i, n, r, e),
                    a = (function (t, e, i) {
                      let s = {};
                      for (let n in t)
                        ("values" !== n || "object" != typeof t.values) &&
                          (tP(n) ||
                            (!0 === i && tx(n)) ||
                            (!e && !tx(n)) ||
                            (t.draggable && n.startsWith("onDrag"))) &&
                          (s[n] = t[n]);
                      return s;
                    })(i, "string" == typeof e, t),
                    h = e !== l.Fragment ? { ...a, ...o, ref: s } : {},
                    { children: u } = i,
                    d = (0, l.useMemo)(() => (W(u) ? u.get() : u), [u]);
                  return (0, l.createElement)(e, { ...h, children: d });
                };
              })(e),
              createVisualElement: s,
              Component: t,
            };
          })(t, e, n7, n6)
        );
    },
  },
]);
