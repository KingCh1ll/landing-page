/* ! smooth-scroll v16.1.2 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element &&
    !Element.prototype.closest &&
    (Element.prototype.closest = function (e) {
        var t,
            n = (this.document || this.ownerDocument).querySelectorAll(e),
            o = this;
        do {
            for (t = n.length; --t >= 0 && n.item(t) !== o; );
        } while (t < 0 && (o = o.parentElement));
        return o;
    }),
    (function () {
        if (typeof window.CustomEvent === "function") return;
        function e(e, t) {
            t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
        }
        (e.prototype = window.Event.prototype), (window.CustomEvent = e);
    })(),
    (function () {
        for (
            var r = 0, e = ["ms", "moz", "webkit", "o"], t = 0;
            t < e.length && !window.requestAnimationFrame;
            ++t
        ) {
            (window.requestAnimationFrame =
                window[`${e[t]}RequestAnimationFrame`]),
                (window.cancelAnimationFrame =
                    window[`${e[t]}CancelAnimationFrame`] ||
                    window[`${e[t]}CancelRequestAnimationFrame`]);
        }
        window.requestAnimationFrame ||
            (window.requestAnimationFrame = function (e, t) {
                var n = new Date().getTime(),
                    o = Math.max(0, 16 - (n - r)),
                    a = window.setTimeout(() => {
                        e(n + o);
                    }, o);
                return (r = n + o), a;
            }),
            window.cancelAnimationFrame ||
                (window.cancelAnimationFrame = function (e) {
                    clearTimeout(e);
                });
    })(),
    (function (e, t) {
        typeof define === "function" && define.amd
            ? define([], () => t(e))
            : typeof exports === "object"
            ? (module.exports = t(e))
            : (e.SmoothScroll = t(e));
    })(
        typeof global !== "undefined"
            ? global
            : typeof window !== "undefined"
            ? window
            : this,
        (q) => {
            "use strict";
            var I = {
                    ignore: "[data-scroll-ignore]",
                    header: null,
                    topOnEmptyHash: !0,
                    speed: 500,
                    speedAsDuration: !1,
                    durationMax: null,
                    durationMin: null,
                    clip: !0,
                    offset: 0,
                    easing: "easeInOutCubic",
                    customEasing: null,
                    updateURL: !0,
                    popstate: !0,
                    emitEvents: !0,
                },
                F = function () {
                    var n = {};
                    return (
                        Array.prototype.forEach.call(arguments, (e) => {
                            for (var t in e) {
                                if (!e.hasOwnProperty(t)) return;
                                n[t] = e[t];
                            }
                        }),
                        n
                    );
                },
                r = function (e) {
                    e.charAt(0) === "#" && (e = e.substr(1));
                    for (
                        var t,
                            n = String(e),
                            o = n.length,
                            a = -1,
                            r = "",
                            i = n.charCodeAt(0);
                        ++a < o;

                    ) {
                        if ((t = n.charCodeAt(a)) === 0) {
                            throw new InvalidCharacterError(
                                "Invalid character: the input contains U+0000."
                            );
                        }
                        (t >= 1 && t <= 31) ||
                        t == 127 ||
                        (a === 0 && t >= 48 && t <= 57) ||
                        (a === 1 && t >= 48 && t <= 57 && i === 45)
                            ? (r += `\\${t.toString(16)} `)
                            : (r +=
                                  t >= 128 ||
                                  t === 45 ||
                                  t === 95 ||
                                  (t >= 48 && t <= 57) ||
                                  (t >= 65 && t <= 90) ||
                                  (t >= 97 && t <= 122)
                                      ? n.charAt(a)
                                      : `\\${n.charAt(a)}`);
                    }
                    return `#${r}`;
                },
                L = function () {
                    return Math.max(
                        document.body.scrollHeight,
                        document.documentElement.scrollHeight,
                        document.body.offsetHeight,
                        document.documentElement.offsetHeight,
                        document.body.clientHeight,
                        document.documentElement.clientHeight
                    );
                },
                x = function (e) {
                    return e
                        ? ((t = e),
                          parseInt(q.getComputedStyle(t).height, 10) +
                              e.offsetTop)
                        : 0;
                    var t;
                },
                H = function (e, t, n, o) {
                    if (t.emitEvents && typeof q.CustomEvent === "function") {
                        var a = new CustomEvent(e, {
                            bubbles: !0,
                            detail: { anchor: n, toggle: o },
                        });
                        document.dispatchEvent(a);
                    }
                };
            return function (o, e) {
                var A,
                    a,
                    O,
                    C,
                    M = {};
                (M.cancelScroll = function (e) {
                    cancelAnimationFrame(C),
                        (C = null),
                        e || H("scrollCancel", A);
                }),
                    (M.animateScroll = function (i, c, e) {
                        M.cancelScroll();
                        var s = F(A || I, e || {}),
                            u =
                                Object.prototype.toString.call(i) ===
                                "[object Number]",
                            t = u || !i.tagName ? null : i;
                        if (u || t) {
                            var l = q.pageYOffset;
                            s.header &&
                                !O &&
                                (O = document.querySelector(s.header));
                            var n,
                                o,
                                a,
                                m,
                                r,
                                d,
                                f,
                                h,
                                p = x(O),
                                g = u
                                    ? i
                                    : (function (e, t, n, o) {
                                          var a = 0;
                                          if (e.offsetParent) {
                                              for (
                                                  ;
                                                  (a += e.offsetTop),
                                                      (e = e.offsetParent);

                                              );
                                          }
                                          return (
                                              (a = Math.max(a - t - n, 0)),
                                              o &&
                                                  (a = Math.min(
                                                      a,
                                                      L() - q.innerHeight
                                                  )),
                                              a
                                          );
                                      })(
                                          t,
                                          p,
                                          parseInt(
                                              typeof s.offset === "function"
                                                  ? s.offset(i, c)
                                                  : s.offset,
                                              10
                                          ),
                                          s.clip
                                      ),
                                y = g - l,
                                v = L(),
                                w = 0,
                                S =
                                    ((n = y),
                                    (a = (o = s).speedAsDuration
                                        ? o.speed
                                        : Math.abs((n / 1e3) * o.speed)),
                                    o.durationMax && a > o.durationMax
                                        ? o.durationMax
                                        : o.durationMin && a < o.durationMin
                                        ? o.durationMin
                                        : parseInt(a, 10)),
                                E = function (e, t) {
                                    var n,
                                        o,
                                        a,
                                        r = q.pageYOffset;
                                    if (
                                        e == t ||
                                        r == t ||
                                        (l < t && q.innerHeight + r) >= v
                                    ) {
                                        return (
                                            M.cancelScroll(!0),
                                            (o = t),
                                            (a = u),
                                            (n = i) === 0 &&
                                                document.body.focus(),
                                            a ||
                                                (n.focus(),
                                                document.activeElement !== n &&
                                                    (n.setAttribute(
                                                        "tabindex",
                                                        "-1"
                                                    ),
                                                    n.focus(),
                                                    (n.style.outline = "none")),
                                                q.scrollTo(0, o)),
                                            H("scrollStop", s, i, c),
                                            !(C = m = null)
                                        );
                                    }
                                },
                                b = function (e) {
                                    var t, n, o;
                                    m || (m = e),
                                        (w += e - m),
                                        (d =
                                            l +
                                            y *
                                                ((n = r =
                                                    (r = S === 0 ? 0 : w / S) >
                                                    1
                                                        ? 1
                                                        : r),
                                                (t = s).easing ===
                                                    "easeInQuad" && (o = n * n),
                                                t.easing === "easeOutQuad" &&
                                                    (o = n * (2 - n)),
                                                t.easing === "easeInOutQuad" &&
                                                    (o =
                                                        n < 0.5
                                                            ? 2 * n * n
                                                            : (4 - 2 * n) * n -
                                                              1),
                                                t.easing === "easeInCubic" &&
                                                    (o = n * n * n),
                                                t.easing === "easeOutCubic" &&
                                                    (o = --n * n * n + 1),
                                                t.easing === "easeInOutCubic" &&
                                                    (o =
                                                        n < 0.5
                                                            ? 4 * n * n * n
                                                            : (n - 1) *
                                                                  (2 * n - 2) *
                                                                  (2 * n - 2) +
                                                              1),
                                                t.easing === "easeInQuart" &&
                                                    (o = n * n * n * n),
                                                t.easing === "easeOutQuart" &&
                                                    (o = 1 - --n * n * n * n),
                                                t.easing === "easeInOutQuart" &&
                                                    (o =
                                                        n < 0.5
                                                            ? 8 * n * n * n * n
                                                            : 1 -
                                                              8 *
                                                                  --n *
                                                                  n *
                                                                  n *
                                                                  n),
                                                t.easing === "easeInQuint" &&
                                                    (o = n * n * n * n * n),
                                                t.easing === "easeOutQuint" &&
                                                    (o =
                                                        1 +
                                                        --n * n * n * n * n),
                                                t.easing === "easeInOutQuint" &&
                                                    (o =
                                                        n < 0.5
                                                            ? 16 *
                                                              n *
                                                              n *
                                                              n *
                                                              n *
                                                              n
                                                            : 1 +
                                                              16 *
                                                                  --n *
                                                                  n *
                                                                  n *
                                                                  n *
                                                                  n),
                                                t.customEasing &&
                                                    (o = t.customEasing(n)),
                                                o || n)),
                                        q.scrollTo(0, Math.floor(d)),
                                        E(d, g) ||
                                            ((C = q.requestAnimationFrame(b)),
                                            (m = e));
                                };
                            q.pageYOffset === 0 && q.scrollTo(0, 0),
                                (f = i),
                                (h = s),
                                u ||
                                    (history.pushState &&
                                        h.updateURL &&
                                        history.pushState(
                                            {
                                                smoothScroll: JSON.stringify(h),
                                                anchor: f.id,
                                            },
                                            document.title,
                                            f === document.documentElement
                                                ? "#top"
                                                : `#${f.id}`
                                        )),
                                "matchMedia" in q &&
                                q.matchMedia("(prefers-reduced-motion)").matches
                                    ? q.scrollTo(0, Math.floor(g))
                                    : (H("scrollStart", s, i, c),
                                      M.cancelScroll(!0),
                                      q.requestAnimationFrame(b));
                        }
                    });
                var t = function (e) {
                        if (
                            !e.defaultPrevented &&
                            !(
                                e.button !== 0 ||
                                e.metaKey ||
                                e.ctrlKey ||
                                e.shiftKey
                            ) &&
                            "closest" in e.target &&
                            (a = e.target.closest(o)) &&
                            a.tagName.toLowerCase() === "a" &&
                            !e.target.closest(A.ignore) &&
                            a.hostname === q.location.hostname &&
                            a.pathname === q.location.pathname &&
                            /#/.test(a.href)
                        ) {
                            var t, n;
                            try {
                                t = r(decodeURIComponent(a.hash));
                            } catch (e) {
                                t = r(a.hash);
                            }
                            if (t === "#") {
                                if (!A.topOnEmptyHash) return;
                                n = document.documentElement;
                            } else {
                                n = document.querySelector(t);
                            }
                            (n =
                                n || t !== "#top"
                                    ? n
                                    : document.documentElement) &&
                                (e.preventDefault(),
                                (function (e) {
                                    if (
                                        history.replaceState &&
                                        e.updateURL &&
                                        !history.state
                                    ) {
                                        var t = q.location.hash;
                                        (t = t || ""),
                                            history.replaceState(
                                                {
                                                    smoothScroll:
                                                        JSON.stringify(e),
                                                    anchor: t || q.pageYOffset,
                                                },
                                                document.title,
                                                t || q.location.href
                                            );
                                    }
                                })(A),
                                M.animateScroll(n, a));
                        }
                    },
                    n = function (e) {
                        if (
                            history.state !== null &&
                            history.state.smoothScroll &&
                            history.state.smoothScroll === JSON.stringify(A)
                        ) {
                            var t = history.state.anchor;
                            (typeof t === "string" &&
                                t &&
                                !(t = document.querySelector(
                                    r(history.state.anchor)
                                ))) ||
                                M.animateScroll(t, null, { updateURL: !1 });
                        }
                    };
                M.destroy = function () {
                    A &&
                        (document.removeEventListener("click", t, !1),
                        q.removeEventListener("popstate", n, !1),
                        M.cancelScroll(),
                        (C = O = a = A = null));
                };
                return (
                    (function () {
                        if (
                            !(
                                "querySelector" in document &&
                                "addEventListener" in q &&
                                "requestAnimationFrame" in q &&
                                "closest" in q.Element.prototype
                            )
                        )
                            throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                        M.destroy(),
                            (A = F(I, e || {})),
                            (O = A.header
                                ? document.querySelector(A.header)
                                : null),
                            document.addEventListener("click", t, !1),
                            A.updateURL &&
                                A.popstate &&
                                q.addEventListener("popstate", n, !1);
                    })(),
                    M
                );
            };
        }
    );
