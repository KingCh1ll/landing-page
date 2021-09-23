/* !
 * pace.js v1.2.4
 * https://github.com/CodeByZach/pace/
 * Licensed MIT © HubSpot, Inc.
 */
!function () {
    function o(t, e) {
        return function () {
            return t.apply(e, arguments);
        };
    }
    var u,
        c,
        i,
        s,
        n,
        y,
        t,
        l,
        v,
        r,
        a,
        p,
        e,
        h,
        w,
        b,
        f,
        g,
        d,
        m,
        k,
        S,
        q,
        L,
        x,
        P,
        T,
        R,
        j,
        O,
        E,
        M,
        A,
        C,
        N,
        _,
        F,
        U,
        W,
        X,
        D,
        H,
        I,
        z,
        G,
        B,
        J = [].slice,
        K = {}.hasOwnProperty,
        Q = function (t, e) {
            for (var n in e) K.call(e, n) && (t[n] = e[n]);
            function r() {
                this.constructor = t;
            }
            return (
                (r.prototype = e.prototype),
                (t.prototype = new r()),
                (t.__super__ = e.prototype),
                t
            );
        },
        V =
            [].indexOf ||
            function (t) {
                for (var e = 0, n = this.length; e < n; e++)
                    if (e in this && this[e] === t) return e;
                return -1;
            };
    function Y() {}
    for (
        g = {
            className: "",
            catchupTime: 100,
            initialRate: 0.03,
            minTime: 250,
            ghostTime: 100,
            maxProgressPerFrame: 20,
            easeFactor: 1.25,
            startOnPageLoad: !0,
            restartOnPushState: !0,
            restartOnRequestAfter: 500,
            target: "body",
            elements: { checkInterval: 100, selectors: ["body"] },
            eventLag: { minSamples: 10, sampleCount: 3, lagThreshold: 3 },
            ajax: {
                trackMethods: ["GET"],
                trackWebSockets: !0,
                ignoreURLs: [],
            },
        },
            P = function () {
                var t;
                return (t =
                    typeof performance !== "undefined" &&
                    performance !== null &&
                    typeof performance.now === "function"
                        ? performance.now()
                        : void 0) != null
                    ? t
                    : +new Date();
            },
            R =
                window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame,
            f = window.cancelAnimationFrame || window.mozCancelAnimationFrame,
            p = function (t, e, n) {
                if (typeof t.addEventListener === "function")
                    return t.addEventListener(e, n, !1);
                var r;
                typeof t[`on${e}`] !== "function" ||
                typeof t[`on${e}`].eventListeners !== "object"
                    ? ((r = new s()),
                      typeof t[`on${e}`] === "function" && r.on(e, t[`on${e}`]),
                      (t[`on${e}`] = function (t) {
                          return r.trigger(e, t);
                      }),
                      (t[`on${e}`].eventListeners = r))
                    : (r = t[`on${e}`].eventListeners),
                    r.on(e, n);
            },
            R == null &&
                ((R = function (t) {
                    return setTimeout(t, 50);
                }),
                (f = function (t) {
                    return clearTimeout(t);
                })),
            O = function (e) {
                var n = P(),
                    r = function () {
                        var t = P() - n;
                        return t >= 33
                            ? ((n = P()), e(t, () => R(r)))
                            : setTimeout(r, 33 - t);
                    };
                return r();
            },
            j = function () {
                var t = arguments[0],
                    e = arguments[1],
                    n = arguments.length >= 3 ? J.call(arguments, 2) : [];
                return typeof t[e] === "function" ? t[e].apply(t, n) : t[e];
            },
            d = function () {
                for (
                    var t,
                        e,
                        n,
                        r = arguments[0],
                        s = arguments.length >= 2 ? J.call(arguments, 1) : [],
                        o = 0,
                        i = s.length;
                    o < i;
                    o++
                ) {
                    if ((e = s[o])) {
                        for (t in e) {
                            K.call(e, t) &&
                                ((n = e[t]),
                                r[t] != null &&
                                typeof r[t] === "object" &&
                                n != null &&
                                typeof n === "object"
                                    ? d(r[t], n)
                                    : (r[t] = n));
                        }
                    }
                }
                return r;
            },
            h = function (t) {
                for (var e, n, r = (e = 0), s = 0, o = t.length; s < o; s++)
                    (n = t[s]), (r += Math.abs(n)), e++;
                return r / e;
            },
            k = function (t, e) {
                var n, r;
                if (
                    (t == null && (t = "options"),
                    e == null && (e = !0),
                    (r = document.querySelector(`[data-pace-${t}]`)))
                ) {
                    if (((n = r.getAttribute(`data-pace-${t}`)), !e)) return n;
                    try {
                        return JSON.parse(n);
                    } catch (t) {
                        return typeof console !== "undefined" &&
                            console !== null
                            ? console.error(
                                  "Error parsing inline pace options",
                                  t
                              )
                            : void 0;
                    }
                }
            },
            Y.prototype.on = function (t, e, n, r) {
                var s;
                return (
                    r == null && (r = !1),
                    this.bindings == null && (this.bindings = {}),
                    (s = this.bindings)[t] == null && (s[t] = []),
                    this.bindings[t].push({ handler: e, ctx: n, once: r })
                );
            },
            Y.prototype.once = function (t, e, n) {
                return this.on(t, e, n, !0);
            },
            Y.prototype.off = function (t, e) {
                var n, r, s;
                if (((r = this.bindings) != null ? r[t] : void 0) != null) {
                    if (e == null) return delete this.bindings[t];
                    for (n = 0, s = []; n < this.bindings[t].length; ) {
                        this.bindings[t][n].handler === e
                            ? s.push(this.bindings[t].splice(n, 1))
                            : s.push(n++);
                    }
                    return s;
                }
            },
            Y.prototype.trigger = function () {
                var t,
                    e,
                    n,
                    r,
                    s,
                    o,
                    i = arguments[0],
                    a = arguments.length >= 2 ? J.call(arguments, 1) : [];
                if ((r = this.bindings) != null && r[i]) {
                    for (n = 0, o = []; n < this.bindings[i].length; ) {
                        (e = (s = this.bindings[i][n]).handler),
                            (t = s.ctx),
                            (s = s.once),
                            e.apply(t != null ? t : this, a),
                            s
                                ? o.push(this.bindings[i].splice(n, 1))
                                : o.push(n++);
                    }
                    return o;
                }
            },
            B = Y,
            y = window.Pace || {},
            window.Pace = y,
            d(y, B.prototype),
            T = y.options = d({}, g, window.paceOptions, k()),
            X = 0,
            H = (z = ["ajax", "document", "eventLag", "elements"]).length;
        X < H;
        X++
    )
        !0 === T[(C = z[X])] && (T[C] = g[C]);
    function Z() {
        return Z.__super__.constructor.apply(this, arguments);
    }
    function $() {
        this.progress = 0;
    }
    function tt() {
        this.bindings = {};
    }
    function et() {
        var e,
            o = this;
        et.__super__.constructor.apply(this, arguments),
            (e = function (r) {
                var s = r.open;
                return (r.open = function (t, e, n) {
                    return (
                        A(t) &&
                            o.trigger("request", {
                                type: t,
                                url: e,
                                request: r,
                            }),
                        s.apply(r, arguments)
                    );
                });
            }),
            (window.XMLHttpRequest = function (t) {
                t = new W(t);
                return e(t), t;
            });
        try {
            m(window.XMLHttpRequest, W);
        } catch (t) {}
        if (U != null) {
            window.XDomainRequest = function () {
                var t = new U();
                return e(t), t;
            };
            try {
                m(window.XDomainRequest, U);
            } catch (t) {}
        }
        if (F != null && T.ajax.trackWebSockets) {
            window.WebSocket = function (t, e) {
                var n = e != null ? new F(t, e) : new F(t);
                return (
                    A("socket") &&
                        o.trigger("request", {
                            type: "socket",
                            url: t,
                            protocols: e,
                            request: n,
                        }),
                    n
                );
            };
            try {
                m(window.WebSocket, F);
            } catch (t) {}
        }
    }
    function nt() {
        this.complete = o(this.complete, this);
        var t = this;
        (this.elements = []),
            S().on("request", function () {
                return t.watch.apply(t, arguments);
            });
    }
    function rt(t) {
        var e, n, r, s;
        for (
            t == null && (t = {}),
                this.complete = o(this.complete, this),
                this.elements = [],
                t.selectors == null && (t.selectors = []),
                n = 0,
                r = (s = t.selectors).length;
            n < r;
            n++
        )
            (e = s[n]), this.elements.push(new i(e, this.complete));
    }
    function st(t, e) {
        (this.selector = t),
            (this.completeCallback = e),
            (this.progress = 0),
            this.check();
    }
    function ot() {
        var t,
            e,
            n = this;
        (this.progress =
            (e = this.states[document.readyState]) != null ? e : 100),
            (t = document.onreadystatechange),
            (document.onreadystatechange = function () {
                return (
                    n.states[document.readyState] != null &&
                        (n.progress = n.states[document.readyState]),
                    typeof t === "function" ? t.apply(null, arguments) : void 0
                );
            });
    }
    function it(t) {
        (this.source = t),
            (this.last = this.sinceLastUpdate = 0),
            (this.rate = T.initialRate),
            (this.catchup = 0),
            (this.progress = this.lastProgress = 0),
            this.source != null && (this.progress = j(this.source, "progress"));
    }
    (B = Error),
        Q(Z, B),
        (n = Z),
        ($.prototype.getElement = function () {
            var t;
            if (this.el == null) {
                if (!(t = document.querySelector(T.target))) throw new n();
                (this.el = document.createElement("div")),
                    (this.el.className = "pace pace-active"),
                    (document.body.className = document.body.className.replace(
                        /(pace-done )|/,
                        "pace-running "
                    ));
                var e = T.className !== "" ? ` ${T.className}` : "";
                (this.el.innerHTML = `<div class="pace-progress${e}">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>`),
                    t.firstChild != null
                        ? t.insertBefore(this.el, t.firstChild)
                        : t.appendChild(this.el);
            }
            return this.el;
        }),
        ($.prototype.finish = function () {
            var t = this.getElement();
            return (
                (t.className = t.className.replace(
                    "pace-active",
                    "pace-inactive"
                )),
                (document.body.className = document.body.className.replace(
                    "pace-running ",
                    "pace-done "
                ))
            );
        }),
        ($.prototype.update = function (t) {
            return (this.progress = t), y.trigger("progress", t), this.render();
        }),
        ($.prototype.destroy = function () {
            try {
                this.getElement().parentNode.removeChild(this.getElement());
            } catch (t) {
                n = t;
            }
            return (this.el = void 0);
        }),
        ($.prototype.render = function () {
            var t, e, n, r, s, o, i;
            if (document.querySelector(T.target) == null) return !1;
            for (
                t = this.getElement(),
                    r = `translate3d(${this.progress}%, 0, 0)`,
                    s = 0,
                    o = (i = ["webkitTransform", "msTransform", "transform"])
                        .length;
                s < o;
                s++
            )
                (e = i[s]), (t.children[0].style[e] = r);
            return (
                (!this.lastRenderedProgress ||
                    this.lastRenderedProgress | (this.progress !== 0) | 0) &&
                    (t.children[0].setAttribute(
                        "data-progress-text",
                        `${0 | this.progress}%`
                    ),
                    this.progress >= 100
                        ? (n = "99")
                        : ((n = this.progress < 10 ? "0" : ""),
                          (n += 0 | this.progress)),
                    t.children[0].setAttribute("data-progress", `${n}`)),
                y.trigger("change", this.progress),
                (this.lastRenderedProgress = this.progress)
            );
        }),
        ($.prototype.done = function () {
            return this.progress >= 100;
        }),
        (c = $),
        (tt.prototype.trigger = function (t, e) {
            var n, r, s, o, i;
            if (this.bindings[t] != null) {
                for (
                    i = [], r = 0, s = (o = this.bindings[t]).length;
                    r < s;
                    r++
                )
                    (n = o[r]), i.push(n.call(this, e));
                return i;
            }
        }),
        (tt.prototype.on = function (t, e) {
            var n;
            return (
                (n = this.bindings)[t] == null && (n[t] = []),
                this.bindings[t].push(e)
            );
        }),
        (s = tt),
        (W = window.XMLHttpRequest),
        (U = window.XDomainRequest),
        (F = window.WebSocket),
        (m = function (t, e) {
            var n,
                r = [];
            for (n in e.prototype) {
                try {
                    t[n] == null && typeof e[n] !== "function"
                        ? typeof Object.defineProperty === "function"
                            ? r.push(
                                  Object.defineProperty(t, n, {
                                      get: (function (t) {
                                          return function () {
                                              return e.prototype[t];
                                          };
                                      })(n),
                                      configurable: !0,
                                      enumerable: !0,
                                  })
                              )
                            : r.push((t[n] = e.prototype[n]))
                        : r.push(void 0);
                } catch (t) {
                    0;
                }
            }
            return r;
        }),
        (L = []),
        (y.ignore = function () {
            var t = arguments[0],
                e = arguments.length >= 2 ? J.call(arguments, 1) : [];
            return L.unshift("ignore"), (e = t.apply(null, e)), L.shift(), e;
        }),
        (y.track = function () {
            var t = arguments[0],
                e = arguments.length >= 2 ? J.call(arguments, 1) : [];
            return L.unshift("track"), (e = t.apply(null, e)), L.shift(), e;
        }),
        (A = function (t) {
            if ((t == null && (t = "GET"), L[0] === "track")) return "force";
            if (!L.length && T.ajax) {
                if (t === "socket" && T.ajax.trackWebSockets) return !0;
                if (
                    ((t = t.toUpperCase()), V.call(T.ajax.trackMethods, t) >= 0)
                )
                    return !0;
            }
            return !1;
        }),
        Q(et, s),
        (t = et),
        (D = null),
        (M = function (t) {
            for (
                var e, n = T.ajax.ignoreURLs, r = 0, s = n.length;
                r < s;
                r++
            ) {
                if (typeof (e = n[r]) === "string") {
                    if (t.indexOf(e) !== -1) return !0;
                } else if (e.test(t)) {
                    return !0;
                }
            }
            return !1;
        }),
        (S = function () {
            return (D = D == null ? new t() : D);
        })().on("request", function (t) {
            var o,
                i = t.type,
                a = t.request,
                e = t.url;
            if (!M(e)) {
                return y.running ||
                    (!1 === T.restartOnRequestAfter && A(i) !== "force")
                    ? void 0
                    : ((o = arguments),
                      typeof (e = T.restartOnRequestAfter || 0) === "boolean" &&
                          (e = 0),
                      setTimeout(() => {
                          var t,
                              e,
                              n,
                              r,
                              s =
                                  i === "socket"
                                      ? a.readyState < 1
                                      : (s = a.readyState) > 0 && s < 4;
                          if (s) {
                              for (
                                  y.restart(),
                                      r = [],
                                      t = 0,
                                      e = (n = y.sources).length;
                                  t < e;
                                  t++
                              ) {
                                  if ((C = n[t]) instanceof u) {
                                      C.watch.apply(C, o);
                                      break;
                                  }
                                  r.push(void 0);
                              }
                              return r;
                          }
                      }, e));
            }
        }),
        (nt.prototype.watch = function (t) {
            var e = t.type,
                n = t.request,
                t = t.url;
            if (!M(t)) {
                return (
                    (n = new (e === "socket" ? r : a)(n, this.complete)),
                    this.elements.push(n)
                );
            }
        }),
        (nt.prototype.complete = function (e) {
            return (this.elements = this.elements.filter((t) => t !== e));
        }),
        (u = nt),
        (a = function (e, n) {
            var t,
                r,
                s,
                o,
                i = this;
            if (((this.progress = 0), window.ProgressEvent != null)) {
                for (
                    p(e, "progress", (t) =>
                        t.lengthComputable
                            ? (i.progress = (100 * t.loaded) / t.total)
                            : (i.progress += (100 - i.progress) / 2)
                    ),
                        t = 0,
                        r = (o = ["load", "abort", "timeout", "error"]).length;
                    t < r;
                    t++
                )
                    p(e, o[t], () => (n(i), (i.progress = 100)));
            } else {
                (s = e.onreadystatechange),
                    (e.onreadystatechange = function () {
                        var t;
                        return (
                            (t = e.readyState) === 0 || t === 4
                                ? (n(i), (i.progress = 100))
                                : e.readyState === 3 && (i.progress = 50),
                            typeof s === "function"
                                ? s.apply(null, arguments)
                                : void 0
                        );
                    });
            }
        }),
        (r = function (t, e) {
            for (
                var n,
                    r = this,
                    s = (this.progress = 0),
                    o = (n = ["error", "open"]).length;
                s < o;
                s++
            )
                p(t, n[s], () => (e(r), (r.progress = 100)));
        }),
        (rt.prototype.complete = function (e) {
            return (this.elements = this.elements.filter((t) => t !== e));
        }),
        (k = rt),
        (st.prototype.check = function () {
            var t = this;
            return document.querySelector(this.selector)
                ? this.done()
                : setTimeout(() => t.check(), T.elements.checkInterval);
        }),
        (st.prototype.done = function () {
            return (
                this.completeCallback(this),
                (this.completeCallback = null),
                (this.progress = 100)
            );
        }),
        (i = st),
        (ot.prototype.states = { loading: 0, interactive: 50, complete: 100 }),
        (B = ot),
        (Q = function () {
            var e,
                n,
                r,
                s,
                o,
                i = this;
            (this.progress = 0),
                (o = []),
                (s = 0),
                (r = P()),
                (n = setInterval(() => {
                    var t = P() - r - 50;
                    return (
                        (r = P()),
                        o.push(t),
                        o.length > T.eventLag.sampleCount && o.shift(),
                        (e = h(o)),
                        ++s >= T.eventLag.minSamples &&
                        e < T.eventLag.lagThreshold
                            ? ((i.progress = 100), clearInterval(n))
                            : (i.progress = (3 / (e + 3)) * 100)
                    );
                }, 50));
        }),
        (it.prototype.tick = function (t, e) {
            return (
                (e = e == null ? j(this.source, "progress") : e) >= 100 &&
                    (this.done = !0),
                e === this.last
                    ? (this.sinceLastUpdate += t)
                    : (this.sinceLastUpdate &&
                          (this.rate = (e - this.last) / this.sinceLastUpdate),
                      (this.catchup = (e - this.progress) / T.catchupTime),
                      (this.sinceLastUpdate = 0),
                      (this.last = e)),
                e > this.progress && (this.progress += this.catchup * t),
                (e = 1 - Math.pow(this.progress / 100, T.easeFactor)),
                (this.progress += e * this.rate * t),
                (this.progress = Math.min(
                    this.lastProgress + T.maxProgressPerFrame,
                    this.progress
                )),
                (this.progress = Math.max(0, this.progress)),
                (this.progress = Math.min(100, this.progress)),
                (this.lastProgress = this.progress),
                this.progress
            );
        }),
        (v = it),
        (b = e = _ = w = E = N = null),
        (y.running = !1),
        (q = function () {
            if (T.restartOnPushState) return y.restart();
        }),
        window.history.pushState != null &&
            ((I = window.history.pushState),
            (window.history.pushState = function () {
                return q(), I.apply(window.history, arguments);
            })),
        window.history.replaceState != null &&
            ((G = window.history.replaceState),
            (window.history.replaceState = function () {
                return q(), G.apply(window.history, arguments);
            })),
        (l = { ajax: u, elements: k, document: B, eventLag: Q }),
        (x = function () {
            var t, e, n, r, s, o, i, a;
            for (
                y.sources = N = [],
                    e = 0,
                    r = (o = ["ajax", "elements", "document", "eventLag"])
                        .length;
                e < r;
                e++
            )
                !1 !== T[(t = o[e])] && N.push(new l[t](T[t]));
            for (
                n = 0, s = (a = (i = T.extraSources) != null ? i : []).length;
                n < s;
                n++
            )
                (C = a[n]), N.push(new C(T));
            return (y.bar = w = new c()), (E = []), (_ = new v());
        })(),
        (y.stop = function () {
            return (
                y.trigger("stop"),
                (y.running = !1),
                w.destroy(),
                (b = !0),
                e != null && (typeof f === "function" && f(e), (e = null)),
                x()
            );
        }),
        (y.restart = function () {
            return y.trigger("restart"), y.stop(), y.start();
        }),
        (y.go = function () {
            var m;
            return (
                (y.running = !0),
                w.render(),
                (m = P()),
                (b = !1),
                (e = O((t, e) => {
                    w.progress;
                    for (
                        var n,
                            r,
                            s,
                            o,
                            i,
                            a,
                            u,
                            c,
                            l,
                            p,
                            h = (a = 0),
                            f = !0,
                            g = (u = 0),
                            d = N.length;
                        u < d;
                        g = ++u
                    ) {
                        for (
                            C = N[g],
                                i = E[g] != null ? E[g] : (E[g] = []),
                                s = c = 0,
                                l = (r = (p = C.elements) != null ? p : [C])
                                    .length;
                            c < l;
                            s = ++c
                        ) {
                            (o = r[s]),
                                (f &= (o =
                                    i[s] != null ? i[s] : (i[s] = new v(o)))
                                    .done),
                                o.done || (h++, (a += o.tick(t)));
                        }
                    }
                    return (
                        (n = a / h),
                        w.update(_.tick(t, n)),
                        w.done() || f || b
                            ? (w.update(100),
                              y.trigger("done"),
                              setTimeout(
                                  () => (
                                      w.finish(),
                                      (y.running = !1),
                                      y.trigger("hide")
                                  ),
                                  Math.max(
                                      T.ghostTime,
                                      Math.max(T.minTime - (P() - m), 0)
                                  )
                              ))
                            : e()
                    );
                }))
            );
        }),
        (y.start = function (t) {
            d(T, t), (y.running = !0);
            try {
                w.render();
            } catch (t) {
                n = t;
            }
            return document.querySelector(".pace")
                ? (y.trigger("start"), y.go())
                : setTimeout(y.start, 50);
        }),
        typeof define === "function" && define.amd
            ? define(() => y)
            : typeof exports === "object"
            ? (module.exports = y)
            : T.startOnPageLoad && y.start();
}.call(this);
