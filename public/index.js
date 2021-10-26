!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
      ? define(e)
      : (t.lozad = e());
})(this, function () {
  "use strict";
  var a = "undefined" != typeof document && document.documentMode,
    m = {
      rootMargin: "0px",
      threshold: 0,
      load: function (t) {
        if (
          ("picture" === t.nodeName.toLowerCase() &&
            ((o = !1),
              null === (r = t.querySelector("img")) &&
              ((r = document.createElement("img")), (o = !0)),
              a &&
              t.getAttribute("data-iesrc") &&
              (r.src = t.getAttribute("data-iesrc")),
              t.getAttribute("data-alt") && (r.alt = t.getAttribute("data-alt")),
              o && t.append(r)),
            "video" === t.nodeName.toLowerCase() &&
            !t.getAttribute("data-src") &&
            t.children)
        ) {
          for (var e, n = t.children, i = 0; i <= n.length - 1; i++)
            (e = n[i].getAttribute("data-src")) && (n[i].src = e);
          t.load();
        }
        t.getAttribute("data-poster") &&
          (t.poster = t.getAttribute("data-poster")),
          t.getAttribute("data-src") && (t.src = t.getAttribute("data-src")),
          t.getAttribute("data-srcset") &&
          t.setAttribute("srcset", t.getAttribute("data-srcset"));
        var r,
          o = ",";
        t.getAttribute("data-background-delimiter") &&
          (o = t.getAttribute("data-background-delimiter")),
          t.getAttribute("data-background-image")
            ? (t.style.backgroundImage =
              "url('" +
              t
                .getAttribute("data-background-image")
                .split(o)
                .join("'),url('") +
              "')")
            : t.getAttribute("data-background-image-set") &&
            ((o =
              -1 ===
                (o =
                  (r = t
                    .getAttribute("data-background-image-set")
                    .split(o))[0].substr(0, r[0].indexOf(" ")) || r[0]).indexOf(
                      "url("
                    )
                ? "url(" + o + ")"
                : o),
              1 === r.length
                ? (t.style.backgroundImage = o)
                : t.setAttribute(
                  "style",
                  (t.getAttribute("style") || "") +
                  "background-image: " +
                  o +
                  "; background-image: -webkit-image-set(" +
                  r +
                  "); background-image: image-set(" +
                  r +
                  ")"
                )),
          t.getAttribute("data-toggle-class") &&
          t.classList.toggle(t.getAttribute("data-toggle-class"));
      },
      loaded: function () { },
    };
  function h(t) {
    t.setAttribute("data-loaded", !0);
  }
  function p(t) {
    return "true" === t.getAttribute("data-loaded");
  }
  function v(t) {
    var e =
      1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document;
    return t instanceof Element
      ? [t]
      : t instanceof NodeList
        ? t
        : e.querySelectorAll(t);
  }
  return function () {
    var n,
      i,
      r =
        0 < arguments.length && void 0 !== arguments[0]
          ? arguments[0]
          : ".lozad",
      t = Object.assign(
        {},
        m,
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
      ),
      o = t.root,
      e = t.rootMargin,
      a = t.threshold,
      u = t.load,
      l = t.loaded,
      s = void 0;
    "undefined" != typeof window &&
      window.IntersectionObserver &&
      (s = new IntersectionObserver(
        ((n = u),
          (i = l),
          function (t, e) {
            t.forEach(function (t) {
              (0 < t.intersectionRatio || t.isIntersecting) &&
                (e.unobserve(t.target),
                  p(t.target) || (n(t.target), h(t.target), i(t.target)));
            });
          }),
        { root: o, rootMargin: e, threshold: a }
      ));
    for (var c, d = v(r, o), f = 0; f < d.length; f++)
      (c = d[f]).getAttribute("data-placeholder-background") &&
        (c.style.background = c.getAttribute("data-placeholder-background"));
    return {
      observe: function () {
        for (var t = v(r, o), e = 0; e < t.length; e++)
          p(t[e]) || (s ? s.observe(t[e]) : (u(t[e]), h(t[e]), l(t[e])));
      },
      triggerLoad: function (t) {
        p(t) || (u(t), h(t), l(t));
      },
      observer: s,
    };
  };
}),
  (function () {
    Object.keys ||
      (Object.keys = function (t) {
        var e,
          n = [];
        for (e in t) Object.prototype.hasOwnProperty.call(t, e) && n.push(e);
        return n;
      }),
      "remove" in Element.prototype ||
      (Element.prototype.remove = function () {
        this.parentNode && this.parentNode.removeChild(this);
      });
    var t = window,
      Mi =
        t.requestAnimationFrame ||
        t.webkitRequestAnimationFrame ||
        t.mozRequestAnimationFrame ||
        t.msRequestAnimationFrame ||
        function (t) {
          return setTimeout(t, 16);
        },
      e = window,
      Ai =
        e.cancelAnimationFrame ||
        e.mozCancelAnimationFrame ||
        function (t) {
          clearTimeout(t);
        };
    function Ti(t) {
      for (var e, n, i, r = t || {}, o = 1, a = arguments.length; o < a; o++)
        if (null !== (e = arguments[o]))
          for (n in e) r !== (i = e[n]) && void 0 !== i && (r[n] = i);
      return r;
    }
    function Ei(t) {
      return 0 <= ["true", "false"].indexOf(t) ? JSON.parse(t) : t;
    }
    function Li(t, e, n, i) {
      if (i)
        try {
          t.setItem(e, n);
        } catch (t) { }
      return n;
    }
    function ki() {
      var t = document,
        e = t.body;
      return e || ((e = t.createElement("body")).fake = !0), e;
    }
    var n = document.documentElement;
    function Si(t) {
      var e = "";
      return (
        t.fake &&
        ((e = n.style.overflow),
          (t.style.background = ""),
          (t.style.overflow = n.style.overflow = "hidden"),
          n.appendChild(t)),
        e
      );
    }
    function Ni(t, e) {
      t.fake && (t.remove(), (n.style.overflow = e), n.offsetHeight);
    }
    function Bi(t, e, n, i) {
      "insertRule" in t
        ? t.insertRule(e + "{" + n + "}", i)
        : t.addRule(e, n, i);
    }
    function Oi(t) {
      return ("insertRule" in t ? t.cssRules : t.rules).length;
    }
    function Di(t, e, n) {
      for (var i = 0, r = t.length; i < r; i++) e.call(n, t[i], i);
    }
    var e = "classList" in document.createElement("_"),
      Hi = e
        ? function (t, e) {
          return t.classList.contains(e);
        }
        : function (t, e) {
          return 0 <= t.className.indexOf(e);
        },
      Ii = e
        ? function (t, e) {
          Hi(t, e) || t.classList.add(e);
        }
        : function (t, e) {
          Hi(t, e) || (t.className += " " + e);
        },
      Ri = e
        ? function (t, e) {
          Hi(t, e) && t.classList.remove(e);
        }
        : function (t, e) {
          Hi(t, e) && (t.className = t.className.replace(e, ""));
        };
    function Pi(t, e) {
      return t.hasAttribute(e);
    }
    function zi(t, e) {
      return t.getAttribute(e);
    }
    function o(t) {
      return void 0 !== t.item;
    }
    function qi(t, e) {
      if (
        ((t = o(t) || t instanceof Array ? t : [t]),
          "[object Object]" === Object.prototype.toString.call(e))
      )
        for (var n = t.length; n--;)
          for (var i in e) t[n].setAttribute(i, e[i]);
    }
    function Wi(t, e) {
      t = o(t) || t instanceof Array ? t : [t];
      for (
        var n = (e = e instanceof Array ? e : [e]).length, i = t.length;
        i--;

      )
        for (var r = n; r--;) t[i].removeAttribute(e[r]);
    }
    function Fi(t) {
      for (var e = [], n = 0, i = t.length; n < i; n++) e.push(t[n]);
      return e;
    }
    function ji(t, e) {
      "none" !== t.style.display && (t.style.display = "none");
    }
    function _i(t, e) {
      "none" === t.style.display && (t.style.display = "");
    }
    function Vi(t) {
      return "none" !== window.getComputedStyle(t).display;
    }
    function Gi(e) {
      var n, i;
      "string" == typeof e &&
        ((n = [e]),
          (i = e.charAt(0).toUpperCase() + e.substr(1)),
          ["Webkit", "Moz", "ms", "O"].forEach(function (t) {
            ("ms" === t && "transform" !== e) || n.push(t + i);
          }),
          (e = n));
      for (
        var t = document.createElement("fakeelement"), r = (e.length, 0);
        r < e.length;
        r++
      ) {
        var o = e[r];
        if (void 0 !== t.style[o]) return o;
      }
      return !1;
    }
    function Qi(t, e) {
      var n = !1;
      return (
        /^Webkit/.test(t)
          ? (n = "webkit" + e + "End")
          : /^O/.test(t)
            ? (n = "o" + e + "End")
            : t && (n = e.toLowerCase() + "end"),
        n
      );
    }
    var i = !1;
    try {
      var r = Object.defineProperty({}, "passive", {
        get: function () {
          i = !0;
        },
      });
      window.addEventListener("test", null, r);
    } catch (t) { }
    var a = !!i && { passive: !0 };
    function Xi(t, e, n) {
      for (var i in e) {
        var r = 0 <= ["touchstart", "touchmove"].indexOf(i) && !n && a;
        t.addEventListener(i, e[i], r);
      }
    }
    function Yi(t, e) {
      for (var n in e) {
        var i = 0 <= ["touchstart", "touchmove"].indexOf(n) && a;
        t.removeEventListener(n, e[n], i);
      }
    }
    function Ki() {
      return {
        topics: {},
        on: function (t, e) {
          (this.topics[t] = this.topics[t] || []), this.topics[t].push(e);
        },
        off: function (t, e) {
          if (this.topics[t])
            for (var n = 0; n < this.topics[t].length; n++)
              if (this.topics[t][n] === e) {
                this.topics[t].splice(n, 1);
                break;
              }
        },
        emit: function (e, n) {
          (n.type = e),
            this.topics[e] &&
            this.topics[e].forEach(function (t) {
              t(n, e);
            });
        },
      };
    }
    function Ji(M) {
      M = Ti(
        {
          container: ".slider",
          mode: "carousel",
          axis: "horizontal",
          items: 1,
          gutter: 0,
          edgePadding: 0,
          fixedWidth: !1,
          autoWidth: !1,
          viewportMax: !1,
          slideBy: 1,
          center: !1,
          controls: !0,
          controlsPosition: "top",
          controlsText: ["prev", "next"],
          controlsContainer: !1,
          prevButton: !1,
          nextButton: !1,
          nav: !0,
          navPosition: "top",
          navContainer: !1,
          navAsThumbnails: !1,
          arrowKeys: !1,
          speed: 300,
          autoplay: !1,
          autoplayPosition: "top",
          autoplayTimeout: 5e3,
          autoplayDirection: "forward",
          autoplayText: ["start", "stop"],
          autoplayHoverPause: !1,
          autoplayButton: !1,
          autoplayButtonOutput: !0,
          autoplayResetOnVisibility: !0,
          animateIn: "tns-fadeIn",
          animateOut: "tns-fadeOut",
          animateNormal: "tns-normal",
          animateDelay: !1,
          loop: !0,
          rewind: !1,
          autoHeight: !1,
          responsive: !1,
          lazyload: !1,
          lazyloadSelector: ".tns-lazy-img",
          touch: !0,
          mouseDrag: !1,
          swipeAngle: 15,
          nested: !1,
          preventActionWhenRunning: !1,
          preventScrollOnTouch: !1,
          freezable: !0,
          onInit: !1,
          useLocalStorage: !0,
        },
        M || {}
      );
      var A = document,
        v = window,
        i = { ENTER: 13, SPACE: 32, LEFT: 37, RIGHT: 39 },
        e = {},
        t = M.useLocalStorage;
      if (t) {
        var n = navigator.userAgent,
          r = new Date();
        try {
          (e = v.localStorage)
            ? (e.setItem(r, r), (t = e.getItem(r) == r), e.removeItem(r))
            : (t = !1),
            t || (e = {});
        } catch (n) {
          t = !1;
        }
        t &&
          (e.tnsApp &&
            e.tnsApp !== n &&
            [
              "tC",
              "tPL",
              "tMQ",
              "tTf",
              "t3D",
              "tTDu",
              "tTDe",
              "tADu",
              "tADe",
              "tTE",
              "tAE",
            ].forEach(function (t) {
              e.removeItem(t);
            }),
            (localStorage.tnsApp = n));
      }
      var o,
        a,
        u,
        l,
        g = e.tC
          ? Ei(e.tC)
          : Li(
            e,
            "tC",
            (function () {
              var t = document,
                e = ki(),
                n = Si(e),
                i = t.createElement("div"),
                r = !1;
              e.appendChild(i);
              try {
                for (
                  var o,
                  a = "(10px * 10)",
                  u = ["calc" + a, "-moz-calc" + a, "-webkit-calc" + a],
                  l = 0;
                  l < 3;
                  l++
                )
                  if (
                    ((o = u[l]), (i.style.width = o), 100 === i.offsetWidth)
                  ) {
                    r = o.replace(a, "");
                    break;
                  }
              } catch (t) { }
              return e.fake ? Ni(e, n) : i.remove(), r;
            })(),
            t
          ),
        y = e.tPL
          ? Ei(e.tPL)
          : Li(
            e,
            "tPL",
            (function () {
              var t = document,
                e = ki(),
                n = Si(e),
                i = t.createElement("div"),
                t = t.createElement("div"),
                r = "";
              (i.className = "tns-t-subp2"), (t.className = "tns-t-ct");
              for (var o = 0; o < 70; o++) r += "<div></div>";
              return (
                (t.innerHTML = r),
                i.appendChild(t),
                e.appendChild(i),
                (t =
                  Math.abs(
                    i.getBoundingClientRect().left -
                    t.children[67].getBoundingClientRect().left
                  ) < 2),
                e.fake ? Ni(e, n) : i.remove(),
                t
              );
            })(),
            t
          ),
        T = e.tMQ
          ? Ei(e.tMQ)
          : Li(
            e,
            "tMQ",
            ((o = document),
              (u = Si((a = ki()))),
              (l = o.createElement("div")),
              (c =
                "@media all and (min-width:1px){.tns-mq-test{position:absolute}}"),
              ((r = o.createElement("style")).type = "text/css"),
              (l.className = "tns-mq-test"),
              a.appendChild(r),
              a.appendChild(l),
              r.styleSheet
                ? (r.styleSheet.cssText = c)
                : r.appendChild(o.createTextNode(c)),
              (c = (
                window.getComputedStyle
                  ? window.getComputedStyle(l)
                  : l.currentStyle
              ).position),
              a.fake ? Ni(a, u) : l.remove(),
              "absolute" === c),
            t
          ),
        s = e.tTf ? Ei(e.tTf) : Li(e, "tTf", Gi("transform"), t),
        c = e.t3D
          ? Ei(e.t3D)
          : Li(
            e,
            "t3D",
            (function (t) {
              if (!t) return !1;
              if (!window.getComputedStyle) return !1;
              var e = document,
                n = ki(),
                i = Si(n),
                r = e.createElement("p"),
                e =
                  9 < t.length
                    ? "-" + t.slice(0, -9).toLowerCase() + "-"
                    : "";
              return (
                (e += "transform"),
                n.insertBefore(r, null),
                (r.style[t] = "translate3d(1px,1px,1px)"),
                (e = window.getComputedStyle(r).getPropertyValue(e)),
                n.fake ? Ni(n, i) : r.remove(),
                void 0 !== e && 0 < e.length && "none" !== e
              );
            })(s),
            t
          ),
        b = e.tTDu ? Ei(e.tTDu) : Li(e, "tTDu", Gi("transitionDuration"), t),
        d = e.tTDe ? Ei(e.tTDe) : Li(e, "tTDe", Gi("transitionDelay"), t),
        x = e.tADu ? Ei(e.tADu) : Li(e, "tADu", Gi("animationDuration"), t),
        f = e.tADe ? Ei(e.tADe) : Li(e, "tADe", Gi("animationDelay"), t),
        m = e.tTE ? Ei(e.tTE) : Li(e, "tTE", Qi(b, "Transition"), t),
        h = e.tAE ? Ei(e.tAE) : Li(e, "tAE", Qi(x, "Animation"), t),
        p = v.console && "function" == typeof v.console.warn,
        w = [
          "container",
          "controlsContainer",
          "prevButton",
          "nextButton",
          "navContainer",
          "autoplayButton",
        ],
        C = {};
      if (
        (w.forEach(function (t) {
          var e, n;
          "string" == typeof M[t] &&
            ((e = M[t]),
              (n = A.querySelector(e)),
              (C[t] = e),
              n && n.nodeName
                ? (M[t] = n)
                : p && console.warn("Can't find", M[t]));
        }),
          !(M.container.children.length < 1))
      ) {
        var E,
          L,
          k,
          S,
          N = M.responsive,
          B = M.nested,
          O = "carousel" === M.mode;
        if (N) {
          0 in N && ((M = Ti(M, N[0])), delete N[0]);
          var D,
            H = {};
          for (D in N) {
            var I = "number" == typeof (I = N[D]) ? { items: I } : I;
            H[D] = I;
          }
          (N = H), (H = null);
        }
        O ||
          (function t(e) {
            for (var n in e)
              O ||
                ("slideBy" === n && (e[n] = "page"),
                  "edgePadding" === n && (e[n] = !1),
                  "autoHeight" === n && (e[n] = !1)),
                "responsive" === n && t(e[n]);
          })(M),
          O ||
          ((M.axis = "horizontal"),
            (M.slideBy = "page"),
            (M.edgePadding = !1),
            (E = M.animateIn),
            (L = M.animateOut),
            (k = M.animateDelay),
            (S = M.animateNormal));
        var R,
          P,
          z = "horizontal" === M.axis,
          q = A.createElement("div"),
          W = A.createElement("div"),
          F = M.container,
          j = F.parentNode,
          _ = F.outerHTML,
          V = F.children,
          G = V.length,
          Q = tn(),
          X = !1;
        N && wn(), O && (F.className += " tns-vpfix");
        var Y,
          K,
          J,
          U,
          Z,
          $,
          tt,
          et,
          nt,
          it,
          rt,
          ot,
          at,
          ut,
          lt,
          st,
          ct,
          dt,
          ft,
          mt,
          ht,
          pt,
          vt,
          gt,
          yt,
          bt,
          xt,
          wt,
          Ct,
          Mt,
          At,
          Tt,
          Et,
          Lt,
          kt,
          St,
          Nt,
          Bt,
          Ot = M.autoWidth,
          Dt = on("fixedWidth"),
          Ht = on("edgePadding"),
          It = on("gutter"),
          Rt = nn(),
          Pt = on("center"),
          zt = Ot ? 1 : Math.floor(on("items")),
          qt = on("slideBy"),
          Wt = M.viewportMax || M.fixedWidthViewportWidth,
          Ft = on("arrowKeys"),
          jt = on("speed"),
          _t = M.rewind,
          Vt = !_t && M.loop,
          Gt = on("autoHeight"),
          Qt = on("controls"),
          Xt = on("controlsText"),
          Yt = on("nav"),
          Kt = on("touch"),
          Jt = on("mouseDrag"),
          Ut = on("autoplay"),
          Zt = on("autoplayTimeout"),
          $t = on("autoplayText"),
          te = on("autoplayHoverPause"),
          ee = on("autoplayResetOnVisibility"),
          ne =
            ((t = document.createElement("style")),
              document.querySelector("head").appendChild(t),
              t.sheet || t.styleSheet),
          ie = M.lazyload,
          re = (M.lazyloadSelector, []),
          oe = Vt
            ? ((t = (function () {
              if (Ot || (Dt && !Wt)) return G - 1;
              var t = Dt ? "fixedWidth" : "items",
                e = [];
              if (((Dt || M[t] < G) && e.push(M[t]), N))
                for (var n in N) {
                  n = N[n][t];
                  n && (Dt || n < G) && e.push(n);
                }
              return (
                e.length || e.push(0),
                Math.ceil(
                  Dt ? Wt / Math.min.apply(null, e) : Math.max.apply(null, e)
                )
              );
            })()),
              (U = O ? Math.ceil((5 * t - G) / 2) : 4 * t - G),
              (U = Math.max(t, U)),
              rn("edgePadding") ? U + 1 : U)
            : 0,
          ae = O ? G + 2 * oe : G + oe,
          ue = !((!Dt && !Ot) || Vt),
          le = Dt ? Yn() : null,
          se = !O || !Vt,
          ce = z ? "left" : "top",
          de = "",
          fe = "",
          me = Dt
            ? function () {
              return Pt && !Vt ? G - 1 : Math.ceil(-le / (Dt + It));
            }
            : Ot
              ? function () {
                for (var t = ae; t--;) if (Y[t] >= -le) return t;
              }
              : function () {
                return Pt && O && !Vt
                  ? G - 1
                  : Vt || O
                    ? Math.max(0, ae - Math.ceil(zt))
                    : ae - 1;
              },
          he = Ue(on("startIndex")),
          pe = he,
          ve = (Je(), 0),
          ge = Ot ? null : me(),
          ye = M.preventActionWhenRunning,
          be = M.swipeAngle,
          xe = !be || "?",
          we = !1,
          Ce = M.onInit,
          Me = new Ki(),
          Ae = " tns-slider tns-" + M.mode,
          Te =
            F.id ||
            ((U = window.tnsId),
              (window.tnsId = U ? U + 1 : 1),
              "tns" + window.tnsId),
          Ee = on("disable"),
          Le = !1,
          ke = M.freezable,
          Se = !(!ke || Ot) && xn(),
          Ne = !1,
          Be = {
            click: ii,
            keydown: function (t) {
              t = di(t);
              var e = [i.LEFT, i.RIGHT].indexOf(t.keyCode);
              0 <= e &&
                (0 === e ? nt.disabled || ii(t, -1) : it.disabled || ii(t, 1));
            },
          },
          Oe = {
            click: function (t) {
              if (we) {
                if (ye) return;
                ei();
              }
              for (
                var e, n, i = fi((t = di(t)));
                i !== ut && !Pi(i, "data-nav");

              )
                i = i.parentNode;
              Pi(i, "data-nav") &&
                ((e = dt = Number(zi(i, "data-nav"))),
                  (n = Dt || Ot ? (e * G) / st : e * zt),
                  ni(We ? e : Math.min(Math.ceil(n), G - 1), t),
                  ft === e && (yt && li(), (dt = -1)));
            },
            keydown: function (t) {
              t = di(t);
              var e,
                n = A.activeElement;
              Pi(n, "data-nav") &&
                ((e = [i.LEFT, i.RIGHT, i.ENTER, i.SPACE].indexOf(t.keyCode)),
                  (n = Number(zi(n, "data-nav"))),
                  0 <= e &&
                  (0 === e
                    ? 0 < n && ci(at[n - 1])
                    : 1 === e
                      ? n < st - 1 && ci(at[n + 1])
                      : ni((dt = n), t)));
            },
          },
          De = {
            mouseover: function () {
              yt && (oi(), (bt = !0));
            },
            mouseout: function () {
              bt && (ri(), (bt = !1));
            },
          },
          He = {
            visibilitychange: function () {
              A.hidden ? yt && (oi(), (wt = !0)) : wt && (ri(), (wt = !1));
            },
          },
          Ie = {
            keydown: function (t) {
              t = di(t);
              var e = [i.LEFT, i.RIGHT].indexOf(t.keyCode);
              0 <= e && ii(t, 0 === e ? -1 : 1);
            },
          },
          Re = { touchstart: vi, touchmove: gi, touchend: yi, touchcancel: yi },
          Pe = { mousedown: vi, mousemove: gi, mouseup: yi, mouseleave: yi },
          ze = rn("controls"),
          qe = rn("nav"),
          We = !!Ot || M.navAsThumbnails,
          Fe = rn("autoplay"),
          t = rn("touch"),
          je = rn("mouseDrag"),
          _e = "tns-slide-active",
          Ve = "tns-complete",
          Ge = {
            load: function (t) {
              Nn(fi(t));
            },
            error: function (t) {
              t = fi(t);
              Ii(t, "failed"), Bn(t);
            },
          },
          Qe = "force" === M.preventScrollOnTouch;
        ze &&
          ((tt = M.controlsContainer),
            (et = M.controlsContainer ? M.controlsContainer.outerHTML : ""),
            (nt = M.prevButton),
            (it = M.nextButton),
            (rt = M.prevButton ? M.prevButton.outerHTML : ""),
            (ot = M.nextButton ? M.nextButton.outerHTML : "")),
          qe &&
          ((ut = M.navContainer),
            (lt = M.navContainer ? M.navContainer.outerHTML : ""),
            (st = Ot ? G : xi()),
            (ct = 0),
            (dt = -1),
            (ft = $e()),
            (mt = ft),
            (ht = "tns-nav-active"),
            (pt = "Carousel Page "),
            (vt = " (Current Slide)")),
          Fe &&
          ((Ct = "forward" === M.autoplayDirection ? 1 : -1),
            (Mt = M.autoplayButton),
            (At = M.autoplayButton ? M.autoplayButton.outerHTML : ""),
            (Tt = ["<span class='tns-visually-hidden'>", " animation</span>"])),
          (t || je) &&
          ((kt = {}),
            (Nt = !(St = {})),
            (Bt = z
              ? function (t, e) {
                return t.x - e.x;
              }
              : function (t, e) {
                return t.y - e.y;
              })),
          Ot || Ke(Ee || Se),
          s &&
          ((ce = s),
            (de = "translate"),
            (fe = c
              ? ((de += z ? "3d(" : "3d(0px, "), z ? ", 0px, 0px)" : ", 0px)")
              : ((de += z ? "X(" : "Y("), ")"))),
          O && (F.className = F.className.replace("tns-vpfix", "")),
          (function () {
            if (
              (rn("gutter"),
                (q.className = "tns-outer"),
                (W.className = "tns-inner"),
                (q.id = Te + "-ow"),
                (W.id = Te + "-iw"),
                "" === F.id && (F.id = Te),
                (Ae += y || Ot ? " tns-subpixel" : " tns-no-subpixel"),
                (Ae += g ? " tns-calc" : " tns-no-calc"),
                Ot && (Ae += " tns-autowidth"),
                (Ae += " tns-" + M.axis),
                (F.className += Ae),
                O
                  ? (((R = A.createElement("div")).id = Te + "-mw"),
                    (R.className = "tns-ovh"),
                    q.appendChild(R),
                    R.appendChild(W))
                  : q.appendChild(W),
                Gt && ((R || W).className += " tns-ah"),
                j.insertBefore(q, F),
                W.appendChild(F),
                Di(V, function (t, e) {
                  Ii(t, "tns-item"),
                    t.id || (t.id = Te + "-item" + e),
                    !O && S && Ii(t, S),
                    qi(t, { "aria-hidden": "true", tabindex: "-1" });
                }),
                oe)
            ) {
              for (
                var t = A.createDocumentFragment(),
                e = A.createDocumentFragment(),
                n = oe;
                n--;

              ) {
                var i = n % G,
                  r = V[i].cloneNode(!0);
                Wi(r, "id"),
                  e.insertBefore(r, e.firstChild),
                  O &&
                  (Wi((i = V[G - 1 - i].cloneNode(!0)), "id"),
                    t.appendChild(i));
              }
              F.insertBefore(t, F.firstChild),
                F.appendChild(e),
                (V = F.children);
            }
          })(),
          (function () {
            if (!O)
              for (var t = he, e = he + Math.min(G, zt); t < e; t++) {
                var n = V[t];
                (n.style.left = (100 * (t - he)) / zt + "%"),
                  Ii(n, E),
                  Ri(n, S);
              }
            if (
              (z &&
                (y || Ot
                  ? (Bi(
                    ne,
                    "#" + Te + " > .tns-item",
                    "font-size:" + v.getComputedStyle(V[0]).fontSize + ";",
                    Oi(ne)
                  ),
                    Bi(ne, "#" + Te, "font-size:0;", Oi(ne)))
                  : O &&
                  Di(V, function (t, e) {
                    t.style.marginLeft = g
                      ? g + "(" + 100 * e + "% / " + ae + ")"
                      : (100 * e) / ae + "%";
                  })),
                T
                  ? (b &&
                    ((o = R && M.autoHeight ? dn(M.speed) : ""),
                      Bi(ne, "#" + Te + "-mw", o, Oi(ne))),
                    (o = an(
                      M.edgePadding,
                      M.gutter,
                      M.fixedWidth,
                      M.speed,
                      M.autoHeight
                    )),
                    Bi(ne, "#" + Te + "-iw", o, Oi(ne)),
                    O &&
                    ((o =
                      z && !Ot
                        ? "width:" + un(M.fixedWidth, M.gutter, M.items) + ";"
                        : ""),
                      b && (o += dn(jt)),
                      Bi(ne, "#" + Te, o, Oi(ne))),
                    (o = z && !Ot ? ln(M.fixedWidth, M.gutter, M.items) : ""),
                    M.gutter && (o += sn(M.gutter)),
                    O || (b && (o += dn(jt)), x && (o += fn(jt))))
                  : (Rn(),
                    (W.style.cssText = an(Ht, It, Dt, Gt)),
                    O && z && !Ot && (F.style.width = un(Dt, It, zt)),
                    (o = z && !Ot ? ln(Dt, It, zt) : ""),
                    It && (o += sn(It))),
                o && Bi(ne, "#" + Te + " > .tns-item", o, Oi(ne)),
                N && T)
            )
              for (var i in N) {
                var i = parseInt(i),
                  r = N[i],
                  o = "",
                  a = "",
                  u = "",
                  l = "",
                  s = "",
                  c = Ot ? null : on("items", i),
                  d = on("fixedWidth", i),
                  f = on("speed", i),
                  m = on("edgePadding", i),
                  h = on("autoHeight", i),
                  p = on("gutter", i);
                b &&
                  R &&
                  on("autoHeight", i) &&
                  "speed" in r &&
                  (a = "#" + Te + "-mw{" + dn(f) + "}"),
                  ("edgePadding" in r || "gutter" in r) &&
                  (u = "#" + Te + "-iw{" + an(m, p, d, f, h) + "}"),
                  O &&
                  z &&
                  !Ot &&
                  ("fixedWidth" in r ||
                    "items" in r ||
                    (Dt && "gutter" in r)) &&
                  (l = "width:" + un(d, p, c) + ";"),
                  b && "speed" in r && (l += dn(f)),
                  (l = l && "#" + Te + "{" + l + "}"),
                  ("fixedWidth" in r ||
                    (Dt && "gutter" in r) ||
                    (!O && "items" in r)) &&
                  (s += ln(d, p, c)),
                  "gutter" in r && (s += sn(p)),
                  !O && "speed" in r && (b && (s += dn(f)), x && (s += fn(f))),
                  (o =
                    a +
                    u +
                    l +
                    (s = s && "#" + Te + " > .tns-item{" + s + "}")) &&
                  ne.insertRule(
                    "@media (min-width: " + i / 16 + "em) {" + o + "}",
                    ne.cssRules.length
                  );
              }
          })(),
          mn();
        var Xe = Vt
          ? O
            ? function () {
              var t = ve,
                e = ge;
              (t += qt),
                (e -= qt),
                Ht ? ((t += 1), --e) : Dt && (Rt + It) % (Dt + It) && --e,
                oe && (e < he ? (he -= G) : he < t && (he += G));
            }
            : function () {
              if (ge < he) for (; ve + G <= he;) he -= G;
              else if (he < ve) for (; he <= ge - G;) he += G;
            }
          : function () {
            he = Math.max(ve, Math.min(ge, he));
          },
          Ye = O
            ? function () {
              var e, n, i, r, t, o, a, u, l, s, c;
              Qn(F, ""),
                b || !jt
                  ? (Un(), (jt && Vi(F)) || ei())
                  : ((e = F),
                    (n = ce),
                    (i = de),
                    (r = fe),
                    (t = Kn()),
                    (o = jt),
                    (a = ei),
                    (u = Math.min(o, 10)),
                    (l = 0 <= t.indexOf("%") ? "%" : "px"),
                    (t = t.replace(l, "")),
                    (s = Number(
                      e.style[n].replace(i, "").replace(r, "").replace(l, "")
                    )),
                    (c = ((t - s) / o) * u),
                    setTimeout(function t() {
                      (o -= u),
                        (s += c),
                        (e.style[n] = i + s + l + r),
                        0 < o ? setTimeout(t, u) : a();
                    }, u)),
                z || bi();
            }
            : function () {
              re = [];
              var t = {};
              (t[m] = t[h] = ei),
                Yi(V[pe], t),
                Xi(V[he], t),
                Zn(pe, E, L, !0),
                Zn(he, S, E),
                (m && h && jt && Vi(F)) || ei();
            };
        return {
          version: "2.9.2",
          getInfo: Ci,
          events: Me,
          goTo: ni,
          play: function () {
            Ut && !yt && (ui(), (xt = !1));
          },
          pause: function () {
            yt && (li(), (xt = !0));
          },
          isOn: X,
          updateSliderHeight: zn,
          refresh: mn,
          destroy: function () {
            var t;
            (ne.disabled = !0),
              ne.ownerNode && ne.ownerNode.remove(),
              Yi(v, { resize: yn }),
              Ft && Yi(A, Ie),
              tt && Yi(tt, Be),
              ut && Yi(ut, Oe),
              Yi(F, De),
              Yi(F, He),
              Mt && Yi(Mt, { click: si }),
              Ut && clearInterval(gt),
              O && m && (((t = {})[m] = ei), Yi(F, t)),
              Kt && Yi(F, Re),
              Jt && Yi(F, Pe);
            var e,
              o = [_, et, rt, ot, lt, At];
            for (e in (w.forEach(function (t, e) {
              var n,
                i,
                r = "container" === t ? q : M[t];
              "object" == typeof r &&
                ((n = !!r.previousElementSibling && r.previousElementSibling),
                  (i = r.parentNode),
                  (r.outerHTML = o[e]),
                  (M[t] = n ? n.nextElementSibling : i.firstElementChild));
            }),
              (w =
                E =
                L =
                k =
                S =
                z =
                q =
                W =
                F =
                j =
                _ =
                V =
                G =
                P =
                Q =
                Ot =
                Dt =
                Ht =
                It =
                Rt =
                zt =
                qt =
                Wt =
                Ft =
                jt =
                _t =
                Vt =
                Gt =
                ne =
                ie =
                Y =
                re =
                oe =
                ae =
                ue =
                le =
                se =
                ce =
                de =
                fe =
                me =
                he =
                pe =
                ve =
                ge =
                be =
                xe =
                we =
                Ce =
                Me =
                Ae =
                Te =
                Ee =
                Le =
                ke =
                Se =
                Ne =
                Be =
                Oe =
                De =
                He =
                Ie =
                Re =
                Pe =
                ze =
                qe =
                We =
                Fe =
                je =
                _e =
                Ve =
                Ge =
                K =
                Qt =
                Xt =
                tt =
                et =
                nt =
                it =
                Z =
                $ =
                Yt =
                ut =
                lt =
                at =
                st =
                ct =
                dt =
                ft =
                mt =
                ht =
                pt =
                vt =
                Ut =
                Zt =
                Ct =
                $t =
                te =
                Mt =
                At =
                ee =
                Tt =
                gt =
                yt =
                bt =
                xt =
                wt =
                kt =
                St =
                Et =
                Nt =
                Lt =
                Bt =
                Kt =
                Jt =
                null),
              this))
              "rebuild" !== e && (this[e] = null);
            X = !1;
          },
          rebuild: function () {
            return Ji(Ti(M, C));
          },
        };
      }
      function Ke(t) {
        t && (Qt = Yt = Kt = Jt = Ft = Ut = te = ee = !1);
      }
      function Je() {
        for (var t = O ? he - oe : he; t < 0;) t += G;
        return (t % G) + 1;
      }
      function Ue(t) {
        return (
          (t = t ? Math.max(0, Math.min(Vt ? G - 1 : G - zt, t)) : 0),
          O ? t + oe : t
        );
      }
      function Ze(t) {
        for (null == t && (t = he), O && (t -= oe); t < 0;) t += G;
        return Math.floor(t % G);
      }
      function $e() {
        var t = Ze(),
          t = We
            ? t
            : Dt || Ot
              ? Math.ceil(((t + 1) * st) / G - 1)
              : Math.floor(t / zt);
        return (t = !Vt && O && he === ge ? st - 1 : t);
      }
      function tn() {
        return (
          v.innerWidth || A.documentElement.clientWidth || A.body.clientWidth
        );
      }
      function en(t) {
        return "top" === t ? "afterbegin" : "beforeend";
      }
      function nn() {
        var t = Ht ? 2 * Ht - It : 0;
        return (
          (function t(e) {
            var n,
              i = A.createElement("div");
            return (
              e.appendChild(i),
              (n = (n = i.getBoundingClientRect()).right - n.left),
              i.remove(),
              n || t(e.parentNode)
            );
          })(j) - t
        );
      }
      function rn(t) {
        if (M[t]) return !0;
        if (N) for (var e in N) if (N[e][t]) return !0;
        return !1;
      }
      function on(t, e) {
        if ((null == e && (e = Q), "items" === t && Dt))
          return Math.floor((Rt + It) / (Dt + It)) || 1;
        var n = M[t];
        if (N) for (var i in N) e >= parseInt(i) && t in N[i] && (n = N[i][t]);
        return (
          "slideBy" === t && "page" === n && (n = on("items")),
          (n = !(O || ("slideBy" !== t && "items" !== t)) ? Math.floor(n) : n)
        );
      }
      function an(t, e, n, i, r) {
        var o,
          a = "";
        return (
          void 0 !== t
            ? ((o = t),
              e && (o -= e),
              (a = z
                ? "margin: 0 " + o + "px 0 " + t + "px;"
                : "margin: " + t + "px 0 " + o + "px 0;"))
            : e &&
            !n &&
            ((e = "-" + e + "px"),
              (a = "margin: 0 " + (z ? e + " 0 0" : "0 " + e + " 0") + ";")),
          !O && r && b && i && (a += dn(i)),
          a
        );
      }
      function un(t, e, n) {
        return t
          ? (t + e) * ae + "px"
          : g
            ? g + "(" + 100 * ae + "% / " + n + ")"
            : (100 * ae) / n + "%";
      }
      function ln(t, e, n) {
        var i;
        return (
          (i =
            "width:" +
            (i = t
              ? t + e + "px"
              : (O || (n = Math.floor(n)),
                (i = O ? ae : n),
                g ? g + "(100% / " + i + ")" : 100 / i + "%"))),
          "inner" !== B ? i + ";" : i + " !important;"
        );
      }
      function sn(t) {
        return !1 !== t
          ? (z ? "padding-" : "margin-") +
          (z ? "right" : "bottom") +
          ": " +
          t +
          "px;"
          : "";
      }
      function cn(t, e) {
        e = t.substring(0, t.length - e).toLowerCase();
        return (e = e && "-" + e + "-");
      }
      function dn(t) {
        return cn(b, 18) + "transition-duration:" + t / 1e3 + "s;";
      }
      function fn(t) {
        return cn(x, 17) + "animation-duration:" + t / 1e3 + "s;";
      }
      function mn() {
        var t;
        rn("autoHeight") || Ot || !z
          ? (Di((t = F.querySelectorAll("img")), function (t) {
            var e = t.src;
            e && e.indexOf("data:image") < 0
              ? (Xi(t, Ge), (t.src = ""), (t.src = e), Ii(t, "loading"))
              : ie || Nn(t);
          }),
            Mi(function () {
              Hn(Fi(t), function () {
                K = !0;
              });
            }),
            !Ot && z && (t = On(he, Math.min(he + zt - 1, ae - 1))),
            ie
              ? hn()
              : Mi(function () {
                Hn(Fi(t), hn);
              }))
          : (O && Jn(), vn(), gn());
      }
      function hn() {
        var e;
        Ot
          ? ((e = Vt ? he : G - 1),
            (function t() {
              V[e - 1].getBoundingClientRect().right.toFixed(2) ===
                V[e].getBoundingClientRect().left.toFixed(2)
                ? pn()
                : setTimeout(function () {
                  t();
                }, 16);
            })())
          : pn();
      }
      function pn() {
        (z && !Ot) ||
          (qn(),
            Ot
              ? ((le = Yn()), ke && (Se = xn()), (ge = me()), Ke(Ee || Se))
              : bi()),
          O && Jn(),
          vn(),
          gn();
      }
      function vn() {
        var t, e;
        if (
          (Wn(),
            q.insertAdjacentHTML(
              "afterbegin",
              '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' +
              Ln() +
              "</span>  of " +
              G +
              "</div>"
            ),
            (J = q.querySelector(".tns-liveregion .current")),
            Fe &&
            ((e = Ut ? "stop" : "start"),
              Mt
                ? qi(Mt, { "data-action": e })
                : M.autoplayButtonOutput &&
                (q.insertAdjacentHTML(
                  en(M.autoplayPosition),
                  '<button data-action="' +
                  e +
                  '">' +
                  Tt[0] +
                  e +
                  Tt[1] +
                  $t[0] +
                  "</button>"
                ),
                  (Mt = q.querySelector("[data-action]"))),
              Mt && Xi(Mt, { click: si }),
              Ut && (ui(), te && Xi(F, De), ee && Xi(F, He))),
            qe)
        ) {
          if (ut)
            qi(ut, { "aria-label": "Carousel Pagination" }),
              Di((at = ut.children), function (t, e) {
                qi(t, {
                  "data-nav": e,
                  tabindex: "-1",
                  "aria-label": pt + (e + 1),
                  "aria-controls": Te,
                });
              });
          else {
            for (
              var n = "", i = We ? "" : 'style="display:none"', r = 0;
              r < G;
              r++
            )
              n +=
                '<button data-nav="' +
                r +
                '" tabindex="-1" aria-controls="' +
                Te +
                '" ' +
                i +
                ' aria-label="' +
                pt +
                (r + 1) +
                '"></button>';
            q.insertAdjacentHTML(
              en(M.navPosition),
              (n =
                '<div class="tns-nav" aria-label="Carousel Pagination">' +
                n +
                "</div>")
            ),
              (ut = q.querySelector(".tns-nav")),
              (at = ut.children);
          }
          wi(),
            b &&
            ((t = b.substring(0, b.length - 18).toLowerCase()),
              (e = "transition: all " + jt / 1e3 + "s"),
              Bi(
                ne,
                "[aria-controls^=" + Te + "-item]",
                (e = t ? "-" + t + "-" + e : e),
                Oi(ne)
              )),
            qi(at[ft], { "aria-label": pt + (ft + 1) + vt }),
            Wi(at[ft], "tabindex"),
            Ii(at[ft], ht),
            Xi(ut, Oe);
        }
        ze &&
          (tt ||
            (nt && it) ||
            (q.insertAdjacentHTML(
              en(M.controlsPosition),
              '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' +
              Te +
              '">' +
              Xt[0] +
              '</button><button data-controls="next" tabindex="-1" aria-controls="' +
              Te +
              '">' +
              Xt[1] +
              "</button></div>"
            ),
              (tt = q.querySelector(".tns-controls"))),
            (nt && it) || ((nt = tt.children[0]), (it = tt.children[1])),
            M.controlsContainer &&
            qi(tt, { "aria-label": "Carousel Navigation", tabindex: "0" }),
            (M.controlsContainer || (M.prevButton && M.nextButton)) &&
            qi([nt, it], { "aria-controls": Te, tabindex: "-1" }),
            (M.controlsContainer || (M.prevButton && M.nextButton)) &&
            (qi(nt, { "data-controls": "prev" }),
              qi(it, { "data-controls": "next" })),
            (Z = jn(nt)),
            ($ = jn(it)),
            Gn(),
            tt ? Xi(tt, Be) : (Xi(nt, Be), Xi(it, Be))),
          Cn();
      }
      function gn() {
        var t;
        O && m && (((t = {})[m] = ei), Xi(F, t)),
          Kt && Xi(F, Re, M.preventScrollOnTouch),
          Jt && Xi(F, Pe),
          Ft && Xi(A, Ie),
          "inner" === B
            ? Me.on("outerResized", function () {
              bn(), Me.emit("innerLoaded", Ci());
            })
            : (N || Dt || Ot || Gt || !z) && Xi(v, { resize: yn }),
          Gt && ("outer" === B ? Me.on("innerLoaded", Dn) : Ee || Dn()),
          Sn(),
          Ee ? Tn() : Se && An(),
          Me.on("indexChanged", In),
          "inner" === B && Me.emit("innerLoaded", Ci()),
          "function" == typeof Ce && Ce(Ci()),
          (X = !0);
      }
      function yn(t) {
        Mi(function () {
          bn(di(t));
        });
      }
      function bn(t) {
        var e, n, i, r, o, a, u, l, s, c, d, f, m, h, p, v, g, y, b, x, w, C;
        X &&
          ("outer" === B && Me.emit("outerResized", Ci(t)),
            (Q = tn()),
            (h = P),
            (n = !1),
            N && (wn(), (e = h !== P) && Me.emit("newBreakpointStart", Ci(t))),
            (i = zt),
            (r = Ee),
            (o = Se),
            (a = Ft),
            (u = Qt),
            (l = Yt),
            (s = Kt),
            (c = Jt),
            (d = Ut),
            (f = te),
            (m = ee),
            (h = he),
            e &&
            ((p = Dt),
              (b = Gt),
              (x = Xt),
              (y = Pt),
              (v = $t),
              T || ((C = It), (g = Ht))),
            (Ft = on("arrowKeys")),
            (Qt = on("controls")),
            (Yt = on("nav")),
            (Kt = on("touch")),
            (Pt = on("center")),
            (Jt = on("mouseDrag")),
            (Ut = on("autoplay")),
            (te = on("autoplayHoverPause")),
            (ee = on("autoplayResetOnVisibility")),
            e &&
            ((Ee = on("disable")),
              (Dt = on("fixedWidth")),
              (jt = on("speed")),
              (Gt = on("autoHeight")),
              (Xt = on("controlsText")),
              ($t = on("autoplayText")),
              (Zt = on("autoplayTimeout")),
              T || ((Ht = on("edgePadding")), (It = on("gutter")))),
            Ke(Ee),
            (Rt = nn()),
            (z && !Ot) || Ee || (qn(), z || (bi(), (n = !0))),
            (Dt || Ot) && ((le = Yn()), (ge = me())),
            (e || Dt) &&
            ((zt = on("items")),
              (qt = on("slideBy")),
              (w = zt !== i) && (Dt || Ot || (ge = me()), Xe())),
            e &&
            Ee !== r &&
            (Ee
              ? Tn
              : function () {
                if (Le) {
                  if (((ne.disabled = !1), (F.className += Ae), Jn(), Vt))
                    for (var t = oe; t--;) O && _i(V[t]), _i(V[ae - t - 1]);
                  if (!O)
                    for (var e = he, n = he + G; e < n; e++) {
                      var i = V[e],
                        r = e < he + zt ? E : S;
                      (i.style.left = (100 * (e - he)) / zt + "%"), Ii(i, r);
                    }
                  Mn(), (Le = !1);
                }
              })(),
            ke &&
            (e || Dt || Ot) &&
            (Se = xn()) !== o &&
            (Se
              ? (Un(Kn(Ue(0))), An())
              : ((function () {
                if (Ne) {
                  if ((Ht && T && (W.style.margin = ""), oe))
                    for (var t = "tns-transparent", e = oe; e--;)
                      O && Ri(V[e], t), Ri(V[ae - e - 1], t);
                  Mn(), (Ne = !1);
                }
              })(),
                (n = !0))),
            Ke(Ee || Se),
            Ut || (te = ee = !1),
            Ft !== a && (Ft ? Xi : Yi)(A, Ie),
            Qt !== u &&
            (Qt
              ? tt
                ? _i(tt)
                : (nt && _i(nt), it && _i(it))
              : tt
                ? ji(tt)
                : (nt && ji(nt), it && ji(it))),
            Yt !== l && (Yt ? _i : ji)(ut),
            Kt !== s && (Kt ? Xi(F, Re, M.preventScrollOnTouch) : Yi(F, Re)),
            Jt !== c && (Jt ? Xi : Yi)(F, Pe),
            Ut !== d &&
            (Ut
              ? (Mt && _i(Mt), yt || xt || ui())
              : (Mt && ji(Mt), yt && li())),
            te !== f && (te ? Xi : Yi)(F, De),
            ee !== m && (ee ? Xi : Yi)(A, He),
            e
              ? ((Dt === p && Pt === y) || (n = !0),
                Gt !== b && (Gt || (W.style.height = "")),
                Qt &&
                Xt !== x &&
                ((nt.innerHTML = Xt[0]), (it.innerHTML = Xt[1])),
                Mt &&
                $t !== v &&
                ((y = Ut ? 1 : 0),
                  (x = (b = Mt.innerHTML).length - v[y].length),
                  b.substring(x) === v[y] &&
                  (Mt.innerHTML = b.substring(0, x) + $t[y])))
              : Pt && (Dt || Ot) && (n = !0),
            (w || (Dt && !Ot)) && ((st = xi()), wi()),
            (h = he !== h)
              ? (Me.emit("indexChanged", Ci()), (n = !0))
              : w
                ? h || In()
                : (Dt || Ot) && (Sn(), Wn(), En()),
            w &&
            !O &&
            (function () {
              for (var t = he + Math.min(G, zt), e = ae; e--;) {
                var n = V[e];
                he <= e && e < t
                  ? (Ii(n, "tns-moving"),
                    (n.style.left = (100 * (e - he)) / zt + "%"),
                    Ii(n, E),
                    Ri(n, S))
                  : n.style.left && ((n.style.left = ""), Ii(n, S), Ri(n, E)),
                  Ri(n, L);
              }
              setTimeout(function () {
                Di(V, function (t) {
                  Ri(t, "tns-moving");
                });
              }, 300);
            })(),
            Ee ||
            Se ||
            (e &&
              !T &&
              ((Gt === autoheightTem && jt === speedTem) || Rn(),
                (Ht === g && It === C) ||
                (W.style.cssText = an(Ht, It, Dt, jt, Gt)),
                z) &&
              (O && (F.style.width = un(Dt, It, zt)),
                (w = ln(Dt, It, zt) + sn(It)),
                (C = Oi((g = ne)) - 1),
                "deleteRule" in g ? g.deleteRule(C) : g.removeRule(C),
                Bi(ne, "#" + Te + " > .tns-item", w, Oi(ne))),
              Gt && Dn(),
              n && (Jn(), (pe = he))),
            e && Me.emit("newBreakpointEnd", Ci(t)));
      }
      function xn() {
        if (!Dt && !Ot) return G <= (Pt ? zt - (zt - 1) / 2 : zt);
        var t = Dt ? (Dt + It) * G : Y[G],
          e = Ht ? Rt + 2 * Ht : Rt + It;
        return (
          Pt && (e -= Dt ? (Rt - Dt) / 2 : (Rt - (Y[he + 1] - Y[he] - It)) / 2),
          t <= e
        );
      }
      function wn() {
        for (var t in ((P = 0), N)) (t = parseInt(t)) <= Q && (P = t);
      }
      function Cn() {
        !Ut && Mt && ji(Mt),
          !Yt && ut && ji(ut),
          Qt || (tt ? ji(tt) : (nt && ji(nt), it && ji(it)));
      }
      function Mn() {
        Ut && Mt && _i(Mt),
          Yt && ut && _i(ut),
          Qt && (tt ? _i(tt) : (nt && _i(nt), it && _i(it)));
      }
      function An() {
        if (!Ne) {
          if ((Ht && (W.style.margin = "0px"), oe))
            for (var t = "tns-transparent", e = oe; e--;)
              O && Ii(V[e], t), Ii(V[ae - e - 1], t);
          Cn(), (Ne = !0);
        }
      }
      function Tn() {
        if (!Le) {
          if (
            ((ne.disabled = !0),
              (F.className = F.className.replace(Ae.substring(1), "")),
              Wi(F, ["style"]),
              Vt)
          )
            for (var t = oe; t--;) O && ji(V[t]), ji(V[ae - t - 1]);
          if (((z && O) || Wi(W, ["style"]), !O))
            for (var e = he, n = he + G; e < n; e++) {
              var i = V[e];
              Wi(i, ["style"]), Ri(i, E), Ri(i, S);
            }
          Cn(), (Le = !0);
        }
      }
      function En() {
        var t = Ln();
        J.innerHTML !== t && (J.innerHTML = t);
      }
      function Ln() {
        var t = kn(),
          e = t[0] + 1,
          t = t[1] + 1;
        return e === t ? e + "" : e + " to " + t;
      }
      function kn(t) {
        null == t && (t = Kn());
        var n,
          i,
          r,
          e,
          o = he;
        return (
          Pt || Ht
            ? (Ot || Dt) && ((n = -(parseFloat(t) + Ht)), (i = n + Rt + 2 * Ht))
            : Ot && ((n = Y[he]), (i = n + Rt)),
          Ot
            ? Y.forEach(function (t, e) {
              e < ae &&
                ((Pt || Ht) && t <= n + 0.5 && (o = e),
                  0.5 <= i - t && (r = e));
            })
            : ((r = Dt
              ? ((e = Dt + It),
                Pt || Ht
                  ? ((o = Math.floor(n / e)), Math.ceil(i / e - 1))
                  : o + Math.ceil(Rt / e) - 1)
              : Pt || Ht
                ? ((e = zt - 1),
                  (r = Pt ? ((o -= e / 2), he + e / 2) : he + e),
                  Ht && ((o -= e = (Ht * zt) / Rt), (r += e)),
                  (o = Math.floor(o)),
                  Math.ceil(r))
                : o + zt - 1),
              (o = Math.max(o, 0)),
              (r = Math.min(r, ae - 1))),
          [o, r]
        );
      }
      function Sn() {
        ie &&
          !Ee &&
          On.apply(null, kn()).forEach(function (t) {
            var e;
            Hi(t, Ve) ||
              (((e = {})[m] = function (t) {
                t.stopPropagation();
              }),
                Xi(t, e),
                Xi(t, Ge),
                (t.src = zi(t, "data-src")),
                (e = zi(t, "data-srcset")) && (t.srcset = e),
                Ii(t, "loading"));
          });
      }
      function Nn(t) {
        Ii(t, "loaded"), Bn(t);
      }
      function Bn(t) {
        Ii(t, "tns-complete"), Ri(t, "loading"), Yi(t, Ge);
      }
      function On(t, e) {
        for (var n = []; t <= e;)
          Di(V[t].querySelectorAll("img"), function (t) {
            n.push(t);
          }),
            t++;
        return n;
      }
      function Dn() {
        var t = On.apply(null, kn());
        Mi(function () {
          Hn(t, zn);
        });
      }
      function Hn(n, t) {
        return K
          ? t()
          : (n.forEach(function (t, e) {
            Hi(t, Ve) && n.splice(e, 1);
          }),
            n.length
              ? void Mi(function () {
                Hn(n, t);
              })
              : t());
      }
      function In() {
        var t, e;
        Sn(),
          Wn(),
          En(),
          Gn(),
          Yt &&
          ((ft = 0 <= dt ? dt : $e()), (dt = -1), ft !== mt) &&
          ((t = at[mt]),
            (e = at[ft]),
            qi(t, { tabindex: "-1", "aria-label": pt + (mt + 1) }),
            Ri(t, ht),
            qi(e, { "aria-label": pt + (ft + 1) + vt }),
            Wi(e, "tabindex"),
            Ii(e, ht),
            (mt = ft));
      }
      function Rn() {
        O && Gt && (R.style[b] = jt / 1e3 + "s");
      }
      function Pn(t, e) {
        for (var n = [], i = t, r = Math.min(t + e, ae); i < r; i++)
          n.push(V[i].offsetHeight);
        return Math.max.apply(null, n);
      }
      function zn() {
        var t = Gt ? Pn(he, zt) : Pn(oe, G),
          e = R || W;
        e.style.height !== t && (e.style.height = t + "px");
      }
      function qn() {
        Y = [0];
        var n = z ? "left" : "top",
          i = z ? "right" : "bottom",
          r = V[0].getBoundingClientRect()[n];
        Di(V, function (t, e) {
          e && Y.push(t.getBoundingClientRect()[n] - r),
            e === ae - 1 && Y.push(t.getBoundingClientRect()[i] - r);
        });
      }
      function Wn() {
        var t = kn(),
          n = t[0],
          i = t[1];
        Di(V, function (t, e) {
          n <= e && e <= i
            ? Pi(t, "aria-hidden") &&
            (Wi(t, ["aria-hidden", "tabindex"]), Ii(t, _e))
            : Pi(t, "aria-hidden") ||
            (qi(t, { "aria-hidden": "true", tabindex: "-1" }), Ri(t, _e));
        });
      }
      function Fn(t) {
        return t.nodeName.toLowerCase();
      }
      function jn(t) {
        return "button" === Fn(t);
      }
      function _n(t) {
        return "true" === t.getAttribute("aria-disabled");
      }
      function Vn(t, e, n) {
        t ? (e.disabled = n) : e.setAttribute("aria-disabled", n.toString());
      }
      function Gn() {
        var t, e, n, i;
        !Qt ||
          _t ||
          Vt ||
          ((t = Z ? nt.disabled : _n(nt)),
            (e = $ ? it.disabled : _n(it)),
            (i = !_t && ge <= he),
            (n = he <= ve) && !t && Vn(Z, nt, !0),
            !n && t && Vn(Z, nt, !1),
            i && !e && Vn($, it, !0),
            !i && e && Vn($, it, !1));
      }
      function Qn(t, e) {
        b && (t.style[b] = e);
      }
      function Xn(t) {
        return (
          null == t && (t = he),
          Ot
            ? (Rt - (Ht ? It : 0) - (Y[t + 1] - Y[t] - It)) / 2
            : Dt
              ? (Rt - Dt) / 2
              : (zt - 1) / 2
        );
      }
      function Yn() {
        var t = Rt + (Ht ? It : 0) - (Dt ? (Dt + It) * ae : Y[ae]);
        return (t =
          0 <
            (t =
              Pt && !Vt
                ? Dt
                  ? -(Dt + It) * (ae - 1) - Xn()
                  : Xn(ae - 1) - Y[ae - 1]
                : t)
            ? 0
            : t);
      }
      function Kn(t) {
        var e, n;
        return (
          null == t && (t = he),
          z && !Ot
            ? Dt
              ? ((e = -(Dt + It) * t), Pt && (e += Xn()))
              : ((n = s ? ae : zt), Pt && (t -= Xn()), (e = (100 * -t) / n))
            : ((e = -Y[t]), Pt && Ot && (e += Xn())),
          (e = ue ? Math.max(e, le) : e) + (!z || Ot || Dt ? "px" : "%")
        );
      }
      function Jn(t) {
        Qn(F, "0s"), Un(t);
      }
      function Un(t) {
        null == t && (t = Kn()), (F.style[ce] = de + t + fe);
      }
      function Zn(t, e, n, i) {
        var r = t + zt;
        Vt || (r = Math.min(r, ae));
        for (var o = t; o < r; o++) {
          var a = V[o];
          i || (a.style.left = (100 * (o - he)) / zt + "%"),
            k && d && (a.style[d] = a.style[f] = (k * (o - t)) / 1e3 + "s"),
            Ri(a, e),
            Ii(a, n),
            i && re.push(a);
        }
      }
      function $n(t, e) {
        se && Xe(),
          (he === pe && !e) ||
          (Me.emit("indexChanged", Ci()),
            Me.emit("transitionStart", Ci()),
            Gt && Dn(),
            yt && t && 0 <= ["click", "keydown"].indexOf(t.type) && li(),
            (we = !0),
            Ye());
      }
      function ti(t) {
        return t.toLowerCase().replace(/-/g, "");
      }
      function ei(t) {
        if (O || we) {
          if ((Me.emit("transitionEnd", Ci(t)), !O && 0 < re.length))
            for (var e = 0; e < re.length; e++) {
              var n = re[e];
              (n.style.left = ""),
                f && d && ((n.style[f] = ""), (n.style[d] = "")),
                Ri(n, L),
                Ii(n, S);
            }
          (!t ||
            (!O && t.target.parentNode === F) ||
            (t.target === F && ti(t.propertyName) === ti(ce))) &&
            (se ||
              ((t = he),
                Xe(),
                he !== t && (Me.emit("indexChanged", Ci()), Jn())),
              "inner" === B && Me.emit("innerLoaded", Ci()),
              (we = !1),
              (pe = he));
        }
      }
      function ni(t, e) {
        if (!Se)
          if ("prev" === t) ii(e, -1);
          else if ("next" === t) ii(e, 1);
          else {
            if (we) {
              if (ye) return;
              ei();
            }
            var n = Ze(),
              i = 0;
            "first" === t
              ? (i = -n)
              : "last" === t
                ? (i = O ? G - zt - n : G - 1 - n)
                : ("number" != typeof t && (t = parseInt(t)),
                  isNaN(t) ||
                  (i = (t = !e ? Math.max(0, Math.min(G - 1, t)) : t) - n)),
              !O &&
              i &&
              Math.abs(i) < zt &&
              ((n = 0 < i ? 1 : -1),
                (i += ve <= he + i - G ? G * n : 2 * G * n * -1)),
              (he += i),
              O && Vt && (he < ve && (he += G), ge < he && (he -= G)),
              Ze(he) !== Ze(pe) && $n(e);
          }
      }
      function ii(t, e) {
        if (we) {
          if (ye) return;
          ei();
        }
        var n;
        if (!e) {
          for (var i = fi((t = di(t))); i !== tt && [nt, it].indexOf(i) < 0;)
            i = i.parentNode;
          var r = [nt, it].indexOf(i);
          0 <= r && ((n = !0), (e = 0 === r ? -1 : 1));
        }
        if (_t) {
          if (he === ve && -1 === e) return void ni("last", t);
          if (he === ge && 1 === e) return void ni("first", t);
        }
        e &&
          ((he += qt * e),
            Ot && (he = Math.floor(he)),
            $n(n || (t && "keydown" === t.type) ? t : null));
      }
      function ri() {
        (gt = setInterval(function () {
          ii(null, Ct);
        }, Zt)),
          (yt = !0);
      }
      function oi() {
        clearInterval(gt), (yt = !1);
      }
      function ai(t, e) {
        qi(Mt, { "data-action": t }), (Mt.innerHTML = Tt[0] + t + Tt[1] + e);
      }
      function ui() {
        ri(), Mt && ai("stop", $t[1]);
      }
      function li() {
        oi(), Mt && ai("start", $t[0]);
      }
      function si() {
        xt = yt ? (li(), !0) : (ui(), !1);
      }
      function ci(t) {
        t.focus();
      }
      function di(t) {
        return mi((t = t || v.event)) ? t.changedTouches[0] : t;
      }
      function fi(t) {
        return t.target || v.event.srcElement;
      }
      function mi(t) {
        return 0 <= t.type.indexOf("touch");
      }
      function hi(t) {
        t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
      }
      function pi() {
        return (
          (e = St.y - kt.y),
          (n = St.x - kt.x),
          (t = Math.atan2(e, n) * (180 / Math.PI)),
          (e = !1),
          90 - (n = be) <= (t = Math.abs(90 - Math.abs(t)))
            ? (e = "horizontal")
            : t <= n && (e = "vertical"),
          e === M.axis
        );
        var t, e, n;
      }
      function vi(t) {
        if (we) {
          if (ye) return;
          ei();
        }
        Ut && yt && oi(), (Nt = !0), Lt && (Ai(Lt), (Lt = null));
        var e = di(t);
        Me.emit(mi(t) ? "touchStart" : "dragStart", Ci(t)),
          !mi(t) && 0 <= ["img", "a"].indexOf(Fn(fi(t))) && hi(t),
          (St.x = kt.x = e.clientX),
          (St.y = kt.y = e.clientY),
          O && ((Et = parseFloat(F.style[ce].replace(de, ""))), Qn(F, "0s"));
      }
      function gi(t) {
        var e;
        Nt &&
          ((e = di(t)),
            (St.x = e.clientX),
            (St.y = e.clientY),
            O
              ? (Lt =
                Lt ||
                Mi(function () {
                  !(function t(e) {
                    if (!xe) return (Nt = !1);
                    if (
                      (Ai(Lt),
                        Nt &&
                        (Lt = Mi(function () {
                          t(e);
                        })),
                        (xe = "?" === xe ? pi() : xe))
                    ) {
                      !Qe && mi(e) && (Qe = !0);
                      try {
                        e.type &&
                          Me.emit(mi(e) ? "touchMove" : "dragMove", Ci(e));
                      } catch (t) { }
                      var n = Et,
                        i = Bt(St, kt);
                      !z || Dt || Ot
                        ? ((n += i), (n += "px"))
                        : ((n += s
                          ? (i * zt * 100) / ((Rt + It) * ae)
                          : (100 * i) / (Rt + It)),
                          (n += "%")),
                        (F.style[ce] = de + n + fe);
                    }
                  })(t);
                }))
              : (xe = "?" === xe ? pi() : xe) && (Qe = !0),
            Qe && t.preventDefault());
      }
      function yi(i) {
        var t, r, n;
        Nt &&
          (Lt && (Ai(Lt), (Lt = null)),
            O && Qn(F, ""),
            (Nt = !1),
            (t = di(i)),
            (St.x = t.clientX),
            (St.y = t.clientY),
            (r = Bt(St, kt)),
            Math.abs(r) &&
            (mi(i) ||
              Xi((n = fi(i)), {
                click: function t(e) {
                  hi(e), Yi(n, { click: t });
                },
              }),
              O
                ? (Lt = Mi(function () {
                  if (z && !Ot) {
                    var t = (-r * zt) / (Rt + It),
                      t = 0 < r ? Math.floor(t) : Math.ceil(t);
                    he += t;
                  } else {
                    var e = -(Et + r);
                    if (e <= 0) he = ve;
                    else if (e >= Y[ae - 1]) he = ge;
                    else
                      for (var n = 0; n < ae && e >= Y[n];)
                        e > Y[(he = n)] && r < 0 && (he += 1), n++;
                  }
                  $n(i, r), Me.emit(mi(i) ? "touchEnd" : "dragEnd", Ci(i));
                }))
                : xe && ii(i, 0 < r ? -1 : 1))),
          "auto" === M.preventScrollOnTouch && (Qe = !1),
          be && (xe = "?"),
          Ut && !yt && ri();
      }
      function bi() {
        (R || W).style.height = Y[he + zt] - Y[he] + "px";
      }
      function xi() {
        var t = Dt ? ((Dt + It) * G) / Rt : G / zt;
        return Math.min(Math.ceil(t), G);
      }
      function wi() {
        if (Yt && !We && st !== ct) {
          var t = ct,
            e = st,
            n = _i;
          for (st < ct && ((t = st), (e = ct), (n = ji)); t < e;)
            n(at[t]), t++;
          ct = st;
        }
      }
      function Ci(t) {
        return {
          container: F,
          slideItems: V,
          navContainer: ut,
          navItems: at,
          controlsContainer: tt,
          hasControls: ze,
          prevButton: nt,
          nextButton: it,
          items: zt,
          slideBy: qt,
          cloneCount: oe,
          slideCount: G,
          slideCountNew: ae,
          index: he,
          indexCached: pe,
          displayIndex: Je(),
          navCurrentIndex: ft,
          navCurrentIndexCached: mt,
          pages: st,
          pagesCached: ct,
          sheet: ne,
          isOn: X,
          event: t || {},
        };
      }
      p && console.warn("No slides found in", M.container);
    }
    return Ji;
  })()({
    container: ".refunds-slider",
    controlsText: [
      '<svg style="transform: rotate(180deg);" enable-background="new 0 0 64 64" viewBox="0 0 64 64"><path d="m37.379 12.552c-.799-.761-2.066-.731-2.827.069-.762.8-.73 2.066.069 2.828l15.342 14.551h-39.963c-1.104 0-2 .896-2 2s.896 2 2 2h39.899l-15.278 14.552c-.8.762-.831 2.028-.069 2.828.393.412.92.62 1.448.62.496 0 .992-.183 1.379-.552l17.449-16.62c.756-.755 1.172-1.759 1.172-2.828s-.416-2.073-1.207-2.862z"/></svg>',
      '<svg enable-background="new 0 0 64 64" viewBox="0 0 64 64"><path d="m37.379 12.552c-.799-.761-2.066-.731-2.827.069-.762.8-.73 2.066.069 2.828l15.342 14.551h-39.963c-1.104 0-2 .896-2 2s.896 2 2 2h39.899l-15.278 14.552c-.8.762-.831 2.028-.069 2.828.393.412.92.62 1.448.62.496 0 .992-.183 1.379-.552l17.449-16.62c.756-.755 1.172-1.759 1.172-2.828s-.416-2.073-1.207-2.862z"/></svg>',
    ],
  }),
  (() => {
    var e = document.querySelector(".header .menu"),
      t = e.querySelector(".menu-list"),
      n = t.querySelectorAll(".menu-list__item > a"),
      i = e.querySelector(".menu__control--open"),
      r = e.querySelector(".menu__control--close");
    function o() {
      (document.body.style.overflow = ""),
        t.classList.add("menu-list--hidden"),
        t.setAttribute("aria-hidden", "true"),
        i.setAttribute("aria-hidden", "false"),
        (i.disabled = !1),
        (r.disabled = !0);
    }
    function a() {
      (document.body.style.overflow = "hidden"),
        t.classList.remove("menu-list--hidden"),
        t.setAttribute("aria-hidden", "false"),
        i.setAttribute("aria-hidden", "true"),
        (i.disabled = !0),
        (r.disabled = !1);
    }
    function u(t) {
      e.classList[t ? "add" : "remove"]("menu--mobile"),
        t ? o() : (a(), (document.body.style.overflow = ""));
    }
    n.forEach(function (t) {
      t.addEventListener("click", o);
    }),
      i.addEventListener("click", a),
      r.addEventListener("click", o);
    n = window.matchMedia("(max-width:850px)");
    n.addEventListener("change", function (t) {
      u(t.matches);
    }),
      u(n.matches);
  })(),
  (() => {
    const e = document.querySelector("#dark-theme-icon"),
      n = document.querySelector("#light-theme-icon"),
      i = (t) => {
        t ? n.replaceWith(e) : e.replaceWith(n);
      },
      t = window.matchMedia("(prefers-color-scheme:dark)");
    t.addEventListener("change", ({ matches: t }) => i(t)), i(t.matches);
  })(),
  (() => {
    const t = document.querySelector(".modal"),
      e = () => {
        t.style.display = "none";
      },
      n = () => {
        t.style.display = "block";
      };
    [
      document.querySelector(".header .hotline-btn"),
      ...document.querySelectorAll("#loss-categories .hotline-btn"),
    ].forEach((t) => {
      t.addEventListener("click", n);
    }),
      t.querySelector(".modal__bg").addEventListener("click", e),
      document.addEventListener("keyup", ({ key: t }) => {
        "Escape" === t && e();
      });
  })(),
  lozad(".lozad", { rootMargin: "100px 0px" }).observe();


const topForm = document.querySelector('form[name="top-form"]');
const bigForm = document.querySelector('form[name="big-form"]');
const modalForm = document.querySelector('form[name="modal-form"]');

topForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('input[name="top-name"]').value
  const email = document.querySelector('input[name="top-email"]').value
  const broker = document.querySelector('input[name="top-broker"]').value
  const sum = document.querySelector('input[name="top-sum"]').value
  const time = document.querySelector('input[name="top-time"]').value
  submit({ broker, sum, time, name, email })
});

bigForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('input[name="big-name"]').value
  const tel = document.querySelector('input[name="big-tel"]').value
  const email = document.querySelector('input[name="big-email"]').value
  const broker = document.querySelector('input[name="big-broker"]').value
  const sum = document.querySelector('input[name="big-sum"]').value
  const time = document.querySelector('input[name="big-time"]').value
  const desc = document.querySelector('textarea[name="big-desc"]').value
  submit({ name, tel, email, broker, sum, time, desc })
});

modalForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('input[name="modal-name"]').value
  const tel = document.querySelector('input[name="modal-tel"]').value
  const email = document.querySelector('input[name="modal-email"]').value
  submit({ name, tel, email })
});

const submit = (data) => {
  fetch('/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
}
