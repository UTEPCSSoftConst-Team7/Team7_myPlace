"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
}
: function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
}
;
!function(t) {
    "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).basicScroll = t()
}(function() {
    return function s(r, a, l) {
        function c(e, t) {
            if (!a[e]) {
                if (!r[e]) {
                    var i = "function" == typeof require && require;
                    if (!t && i)
                        return i(e, !0);
                    if (u)
                        return u(e, !0);
                    var n = new Error("Cannot find module '" + e + "'");
                    throw n.code = "MODULE_NOT_FOUND",
                    n
                }
                var o = a[e] = {
                    exports: {}
                };
                r[e][0].call(o.exports, function(t) {
                    return c(r[e][1][t] || t)
                }, o, o.exports, s, r, a, l)
            }
            return a[e].exports
        }
        for (var u = "function" == typeof require && require, t = 0; t < l.length; t++)
            c(l[t]);
        return c
    }({
        1: [function(t, e, i) {
            e.exports = function(t) {
                var e = 2.5949095;
                return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
            }
        }
        , {}],
        2: [function(t, e, i) {
            e.exports = function(t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            }
        }
        , {}],
        3: [function(t, e, i) {
            e.exports = function(t) {
                var e = 1.70158;
                return --t * t * ((e + 1) * t + e) + 1
            }
        }
        , {}],
        4: [function(t, e, i) {
            var n = t("./bounce-out");
            e.exports = function(t) {
                return t < .5 ? .5 * (1 - n(1 - 2 * t)) : .5 * n(2 * t - 1) + .5
            }
        }
        , {
            "./bounce-out": 6
        }],
        5: [function(t, e, i) {
            var n = t("./bounce-out");
            e.exports = function(t) {
                return 1 - n(1 - t)
            }
        }
        , {
            "./bounce-out": 6
        }],
        6: [function(t, e, i) {
            e.exports = function(t) {
                var e = t * t;
                return t < 4 / 11 ? 7.5625 * e : t < 8 / 11 ? 9.075 * e - 9.9 * t + 3.4 : t < .9 ? 4356 / 361 * e - 35442 / 1805 * t + 16061 / 1805 : 10.8 * t * t - 20.52 * t + 10.72
            }
        }
        , {}],
        7: [function(t, e, i) {
            e.exports = function(t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            }
        }
        , {}],
        8: [function(t, e, i) {
            e.exports = function(t) {
                return 1 - Math.sqrt(1 - t * t)
            }
        }
        , {}],
        9: [function(t, e, i) {
            e.exports = function(t) {
                return Math.sqrt(1 - --t * t)
            }
        }
        , {}],
        10: [function(t, e, i) {
            e.exports = function(t) {
                return t < .5 ? 4 * t * t * t : .5 * Math.pow(2 * t - 2, 3) + 1
            }
        }
        , {}],
        11: [function(t, e, i) {
            e.exports = function(t) {
                return t * t * t
            }
        }
        , {}],
        12: [function(t, e, i) {
            e.exports = function(t) {
                var e = t - 1;
                return e * e * e + 1
            }
        }
        , {}],
        13: [function(t, e, i) {
            e.exports = function(t) {
                return t < .5 ? .5 * Math.sin(13 * Math.PI / 2 * 2 * t) * Math.pow(2, 10 * (2 * t - 1)) : .5 * Math.sin(-13 * Math.PI / 2 * (2 * t - 1 + 1)) * Math.pow(2, -10 * (2 * t - 1)) + 1
            }
        }
        , {}],
        14: [function(t, e, i) {
            e.exports = function(t) {
                return Math.sin(13 * t * Math.PI / 2) * Math.pow(2, 10 * (t - 1))
            }
        }
        , {}],
        15: [function(t, e, i) {
            e.exports = function(t) {
                return Math.sin(-13 * (t + 1) * Math.PI / 2) * Math.pow(2, -10 * t) + 1
            }
        }
        , {}],
        16: [function(t, e, i) {
            e.exports = function(t) {
                return 0 === t || 1 === t ? t : t < .5 ? .5 * Math.pow(2, 20 * t - 10) : -.5 * Math.pow(2, 10 - 20 * t) + 1
            }
        }
        , {}],
        17: [function(t, e, i) {
            e.exports = function(t) {
                return 0 === t ? t : Math.pow(2, 10 * (t - 1))
            }
        }
        , {}],
        18: [function(t, e, i) {
            e.exports = function(t) {
                return 1 === t ? t : 1 - Math.pow(2, -10 * t)
            }
        }
        , {}],
        19: [function(t, e, i) {
            e.exports = {
                backInOut: t("./back-in-out"),
                backIn: t("./back-in"),
                backOut: t("./back-out"),
                bounceInOut: t("./bounce-in-out"),
                bounceIn: t("./bounce-in"),
                bounceOut: t("./bounce-out"),
                circInOut: t("./circ-in-out"),
                circIn: t("./circ-in"),
                circOut: t("./circ-out"),
                cubicInOut: t("./cubic-in-out"),
                cubicIn: t("./cubic-in"),
                cubicOut: t("./cubic-out"),
                elasticInOut: t("./elastic-in-out"),
                elasticIn: t("./elastic-in"),
                elasticOut: t("./elastic-out"),
                expoInOut: t("./expo-in-out"),
                expoIn: t("./expo-in"),
                expoOut: t("./expo-out"),
                linear: t("./linear"),
                quadInOut: t("./quad-in-out"),
                quadIn: t("./quad-in"),
                quadOut: t("./quad-out"),
                quartInOut: t("./quart-in-out"),
                quartIn: t("./quart-in"),
                quartOut: t("./quart-out"),
                quintInOut: t("./quint-in-out"),
                quintIn: t("./quint-in"),
                quintOut: t("./quint-out"),
                sineInOut: t("./sine-in-out"),
                sineIn: t("./sine-in"),
                sineOut: t("./sine-out")
            }
        }
        , {
            "./back-in": 2,
            "./back-in-out": 1,
            "./back-out": 3,
            "./bounce-in": 5,
            "./bounce-in-out": 4,
            "./bounce-out": 6,
            "./circ-in": 8,
            "./circ-in-out": 7,
            "./circ-out": 9,
            "./cubic-in": 11,
            "./cubic-in-out": 10,
            "./cubic-out": 12,
            "./elastic-in": 14,
            "./elastic-in-out": 13,
            "./elastic-out": 15,
            "./expo-in": 17,
            "./expo-in-out": 16,
            "./expo-out": 18,
            "./linear": 20,
            "./quad-in": 22,
            "./quad-in-out": 21,
            "./quad-out": 23,
            "./quart-in": 25,
            "./quart-in-out": 24,
            "./quart-out": 26,
            "./quint-in": 28,
            "./quint-in-out": 27,
            "./quint-out": 29,
            "./sine-in": 31,
            "./sine-in-out": 30,
            "./sine-out": 32
        }],
        20: [function(t, e, i) {
            e.exports = function(t) {
                return t
            }
        }
        , {}],
        21: [function(t, e, i) {
            e.exports = function(t) {
                return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            }
        }
        , {}],
        22: [function(t, e, i) {
            e.exports = function(t) {
                return t * t
            }
        }
        , {}],
        23: [function(t, e, i) {
            e.exports = function(t) {
                return -t * (t - 2)
            }
        }
        , {}],
        24: [function(t, e, i) {
            e.exports = function(t) {
                return t < .5 ? 8 * Math.pow(t, 4) : -8 * Math.pow(t - 1, 4) + 1
            }
        }
        , {}],
        25: [function(t, e, i) {
            e.exports = function(t) {
                return Math.pow(t, 4)
            }
        }
        , {}],
        26: [function(t, e, i) {
            e.exports = function(t) {
                return Math.pow(t - 1, 3) * (1 - t) + 1
            }
        }
        , {}],
        27: [function(t, e, i) {
            e.exports = function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            }
        }
        , {}],
        28: [function(t, e, i) {
            e.exports = function(t) {
                return t * t * t * t * t
            }
        }
        , {}],
        29: [function(t, e, i) {
            e.exports = function(t) {
                return --t * t * t * t * t + 1
            }
        }
        , {}],
        30: [function(t, e, i) {
            e.exports = function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            }
        }
        , {}],
        31: [function(t, e, i) {
            e.exports = function(t) {
                var e = Math.cos(t * Math.PI * .5);
                return Math.abs(e) < 1e-14 ? 1 : 1 - e
            }
        }
        , {}],
        32: [function(t, e, i) {
            e.exports = function(t) {
                return Math.sin(t * Math.PI / 2)
            }
        }
        , {}],
        33: [function(t, Xt, Jt) {
            (function(t) {
                var d = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function(t) {
                    return void 0 === t ? "undefined" : _typeof(t)
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : _typeof(t)
                }
                  , n = "__lodash_hash_undefined__"
                  , h = 9007199254740991
                  , k = "[object Arguments]"
                  , x = "[object Boolean]"
                  , _ = "[object Date]"
                  , P = "[object Function]"
                  , j = "[object GeneratorFunction]"
                  , M = "[object Map]"
                  , A = "[object Number]"
                  , B = "[object Object]"
                  , o = "[object Promise]"
                  , z = "[object RegExp]"
                  , D = "[object Set]"
                  , q = "[object String]"
                  , T = "[object Symbol]"
                  , s = "[object WeakMap]"
                  , I = "[object ArrayBuffer]"
                  , O = "[object DataView]"
                  , F = "[object Float32Array]"
                  , R = "[object Float64Array]"
                  , H = "[object Int8Array]"
                  , N = "[object Int16Array]"
                  , W = "[object Int32Array]"
                  , U = "[object Uint8Array]"
                  , V = "[object Uint8ClampedArray]"
                  , G = "[object Uint16Array]"
                  , X = "[object Uint32Array]"
                  , J = /\w*$/
                  , r = /^\[object .+?Constructor\]$/
                  , f = /^(?:0|[1-9]\d*)$/
                  , Q = {};
                Q[k] = Q["[object Array]"] = Q[I] = Q[O] = Q[x] = Q[_] = Q[F] = Q[R] = Q[H] = Q[N] = Q[W] = Q[M] = Q[A] = Q[B] = Q[z] = Q[D] = Q[q] = Q[T] = Q[U] = Q[V] = Q[G] = Q[X] = !0,
                Q["[object Error]"] = Q[P] = Q[s] = !1;
                var e = "object" == (void 0 === t ? "undefined" : d(t)) && t && t.Object === Object && t
                  , i = "object" == ("undefined" == typeof self ? "undefined" : d(self)) && self && self.Object === Object && self
                  , a = e || i || Function("return this")()
                  , l = "object" == (void 0 === Jt ? "undefined" : d(Jt)) && Jt && !Jt.nodeType && Jt
                  , c = l && "object" == (void 0 === Xt ? "undefined" : d(Xt)) && Xt && !Xt.nodeType && Xt
                  , u = c && c.exports === l;
                function Y(t, e) {
                    return t.set(e[0], e[1]),
                    t
                }
                function $(t, e) {
                    return t.add(e),
                    t
                }
                function Z(t, e, i, n) {
                    var o = -1
                      , s = t ? t.length : 0;
                    for (n && s && (i = t[++o]); ++o < s; )
                        i = e(i, t[o], o, t);
                    return i
                }
                function K(t) {
                    var e = !1;
                    if (null != t && "function" != typeof t.toString)
                        try {
                            e = !!(t + "")
                        } catch (t) {}
                    return e
                }
                function tt(t) {
                    var i = -1
                      , n = Array(t.size);
                    return t.forEach(function(t, e) {
                        n[++i] = [e, t]
                    }),
                    n
                }
                function p(e, i) {
                    return function(t) {
                        return e(i(t))
                    }
                }
                function et(t) {
                    var e = -1
                      , i = Array(t.size);
                    return t.forEach(function(t) {
                        i[++e] = t
                    }),
                    i
                }
                var m, v = Array.prototype, g = Function.prototype, y = Object.prototype, b = a["__core-js_shared__"], L = (m = /[^.]+$/.exec(b && b.keys && b.keys.IE_PROTO || "")) ? "Symbol(src)_1." + m : "", S = g.toString, it = y.hasOwnProperty, E = y.toString, w = RegExp("^" + S.call(it).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), C = u ? a.Buffer : void 0, nt = a.Symbol, ot = a.Uint8Array, st = p(Object.getPrototypeOf, Object), rt = Object.create, at = y.propertyIsEnumerable, lt = v.splice, ct = Object.getOwnPropertySymbols, ut = C ? C.isBuffer : void 0, dt = p(Object.keys, Object), ht = qt(a, "DataView"), ft = qt(a, "Map"), pt = qt(a, "Promise"), mt = qt(a, "Set"), vt = qt(a, "WeakMap"), gt = qt(Object, "create"), yt = Ft(ht), bt = Ft(ft), Lt = Ft(pt), St = Ft(mt), Et = Ft(vt), wt = nt ? nt.prototype : void 0, Ct = wt ? wt.valueOf : void 0;
                function kt(t) {
                    var e = -1
                      , i = t ? t.length : 0;
                    for (this.clear(); ++e < i; ) {
                        var n = t[e];
                        this.set(n[0], n[1])
                    }
                }
                function xt(t) {
                    var e = -1
                      , i = t ? t.length : 0;
                    for (this.clear(); ++e < i; ) {
                        var n = t[e];
                        this.set(n[0], n[1])
                    }
                }
                function _t(t) {
                    var e = -1
                      , i = t ? t.length : 0;
                    for (this.clear(); ++e < i; ) {
                        var n = t[e];
                        this.set(n[0], n[1])
                    }
                }
                function Pt(t) {
                    this.__data__ = new xt(t)
                }
                function jt(t, e, i) {
                    var n = t[e];
                    it.call(t, e) && Rt(n, i) && (void 0 !== i || e in t) || (t[e] = i)
                }
                function Mt(t, e) {
                    for (var i = t.length; i--; )
                        if (Rt(t[i][0], e))
                            return i;
                    return -1
                }
                function At(r, a, l, c, t, e, u) {
                    var d;
                    if (c && (d = e ? c(r, t, e, u) : c(r)),
                    void 0 !== d)
                        return d;
                    if (!Vt(r))
                        return r;
                    var i, n, o, s, h, f, p, m, v, g = Ht(r);
                    if (g) {
                        if (m = (p = r).length,
                        v = p.constructor(m),
                        m && "string" == typeof p[0] && it.call(p, "index") && (v.index = p.index,
                        v.input = p.input),
                        d = v,
                        !a)
                            return function(t, e) {
                                var i = -1
                                  , n = t.length;
                                for (e || (e = Array(n)); ++i < n; )
                                    e[i] = t[i];
                                return e
                            }(r, d)
                    } else {
                        var y = It(r)
                          , b = y == P || y == j;
                        if (Wt(r))
                            return function(t, e) {
                                if (a)
                                    return t.slice();
                                var i = new t.constructor(t.length);
                                return t.copy(i),
                                i
                            }(r);
                        if (y == B || y == k || b && !e) {
                            if (K(r))
                                return e ? r : {};
                            if (d = "function" != typeof (h = b ? {} : r).constructor || Ot(h) ? {} : Vt(f = st(h)) ? rt(f) : {},
                            !a)
                                return s = i = r,
                                n = (o = d) && zt(s, Gt(s), o),
                                zt(i, Tt(i), n)
                        } else {
                            if (!Q[y])
                                return e ? r : {};
                            d = function(t, e, i, n) {
                                var o, s, r, a, l, c, u, d, h, f = t.constructor;
                                switch (e) {
                                case I:
                                    return Bt(t);
                                case x:
                                case _:
                                    return new f(+t);
                                case O:
                                    return d = t,
                                    h = n ? Bt(d.buffer) : d.buffer,
                                    new d.constructor(h,d.byteOffset,d.byteLength);
                                case F:
                                case R:
                                case H:
                                case N:
                                case W:
                                case U:
                                case V:
                                case G:
                                case X:
                                    return c = t,
                                    u = n ? Bt(c.buffer) : c.buffer,
                                    new c.constructor(u,c.byteOffset,c.length);
                                case M:
                                    return l = t,
                                    Z(n ? i(tt(l), !0) : tt(l), Y, new l.constructor);
                                case A:
                                case q:
                                    return new f(t);
                                case z:
                                    return (a = new (r = t).constructor(r.source,J.exec(r))).lastIndex = r.lastIndex,
                                    a;
                                case D:
                                    return s = t,
                                    Z(n ? i(et(s), !0) : et(s), $, new s.constructor);
                                case T:
                                    return o = t,
                                    Ct ? Object(Ct.call(o)) : {}
                                }
                            }(r, y, At, a)
                        }
                    }
                    u || (u = new Pt);
                    var L, S, E, w = u.get(r);
                    if (w)
                        return w;
                    if (u.set(r, d),
                    !g)
                        var C = l ? (S = Tt,
                        E = Gt(L = r),
                        Ht(L) ? E : function(t, e) {
                            for (var i = -1, n = e.length, o = t.length; ++i < n; )
                                t[o + i] = e[i];
                            return t
                        }(E, S(L))) : Gt(r);
                    return function(t, e) {
                        for (var i = -1, n = t ? t.length : 0; ++i < n && !1 !== (o = t[i],
                        s = i,
                        C && (o = r[s = o]),
                        void jt(d, s, At(o, a, l, c, s, r, u))); )
                            ;
                        var o, s
                    }(C || r),
                    d
                }
                function Bt(t) {
                    var e = new t.constructor(t.byteLength);
                    return new ot(e).set(new ot(t)),
                    e
                }
                function zt(t, e, i, n) {
                    i || (i = {});
                    for (var o = -1, s = e.length; ++o < s; ) {
                        var r = e[o]
                          , a = n ? n(i[r], t[r], r, i, t) : void 0;
                        jt(i, r, void 0 === a ? t[r] : a)
                    }
                    return i
                }
                function Dt(t, e) {
                    var i, n, o = t.__data__;
                    return ("string" == (n = void 0 === (i = e) ? "undefined" : d(i)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== i : null === i) ? o["string" == typeof e ? "string" : "hash"] : o.map
                }
                function qt(t, e) {
                    var i, n, o = null == (i = t) ? void 0 : i[e];
                    return !Vt(n = o) || L && L in n || !(Ut(n) || K(n) ? w : r).test(Ft(n)) ? void 0 : o
                }
                kt.prototype.clear = function() {
                    this.__data__ = gt ? gt(null) : {}
                }
                ,
                kt.prototype.delete = function(t) {
                    return this.has(t) && delete this.__data__[t]
                }
                ,
                kt.prototype.get = function(t) {
                    var e = this.__data__;
                    if (gt) {
                        var i = e[t];
                        return i === n ? void 0 : i
                    }
                    return it.call(e, t) ? e[t] : void 0
                }
                ,
                kt.prototype.has = function(t) {
                    var e = this.__data__;
                    return gt ? void 0 !== e[t] : it.call(e, t)
                }
                ,
                kt.prototype.set = function(t, e) {
                    return this.__data__[t] = gt && void 0 === e ? n : e,
                    this
                }
                ,
                xt.prototype.clear = function() {
                    this.__data__ = []
                }
                ,
                xt.prototype.delete = function(t) {
                    var e = this.__data__
                      , i = Mt(e, t);
                    return !(i < 0 || (i == e.length - 1 ? e.pop() : lt.call(e, i, 1),
                    0))
                }
                ,
                xt.prototype.get = function(t) {
                    var e = this.__data__
                      , i = Mt(e, t);
                    return i < 0 ? void 0 : e[i][1]
                }
                ,
                xt.prototype.has = function(t) {
                    return -1 < Mt(this.__data__, t)
                }
                ,
                xt.prototype.set = function(t, e) {
                    var i = this.__data__
                      , n = Mt(i, t);
                    return n < 0 ? i.push([t, e]) : i[n][1] = e,
                    this
                }
                ,
                _t.prototype.clear = function() {
                    this.__data__ = {
                        hash: new kt,
                        map: new (ft || xt),
                        string: new kt
                    }
                }
                ,
                _t.prototype.delete = function(t) {
                    return Dt(this, t).delete(t)
                }
                ,
                _t.prototype.get = function(t) {
                    return Dt(this, t).get(t)
                }
                ,
                _t.prototype.has = function(t) {
                    return Dt(this, t).has(t)
                }
                ,
                _t.prototype.set = function(t, e) {
                    return Dt(this, t).set(t, e),
                    this
                }
                ,
                Pt.prototype.clear = function() {
                    this.__data__ = new xt
                }
                ,
                Pt.prototype.delete = function(t) {
                    return this.__data__.delete(t)
                }
                ,
                Pt.prototype.get = function(t) {
                    return this.__data__.get(t)
                }
                ,
                Pt.prototype.has = function(t) {
                    return this.__data__.has(t)
                }
                ,
                Pt.prototype.set = function(t, e) {
                    var i = this.__data__;
                    if (i instanceof xt) {
                        var n = i.__data__;
                        if (!ft || n.length < 199)
                            return n.push([t, e]),
                            this;
                        i = this.__data__ = new _t(n)
                    }
                    return i.set(t, e),
                    this
                }
                ;
                var Tt = ct ? p(ct, Object) : function() {
                    return []
                }
                  , It = function(t) {
                    return E.call(t)
                };
                function Ot(t) {
                    var e = t && t.constructor;
                    return t === ("function" == typeof e && e.prototype || y)
                }
                function Ft(t) {
                    if (null != t) {
                        try {
                            return S.call(t)
                        } catch (t) {}
                        try {
                            return t + ""
                        } catch (t) {}
                    }
                    return ""
                }
                function Rt(t, e) {
                    return t === e || t != t && e != e
                }
                (ht && It(new ht(new ArrayBuffer(1))) != O || ft && It(new ft) != M || pt && It(pt.resolve()) != o || mt && It(new mt) != D || vt && It(new vt) != s) && (It = function(t) {
                    var e = E.call(t)
                      , i = e == B ? t.constructor : void 0
                      , n = i ? Ft(i) : void 0;
                    if (n)
                        switch (n) {
                        case yt:
                            return O;
                        case bt:
                            return M;
                        case Lt:
                            return o;
                        case St:
                            return D;
                        case Et:
                            return s
                        }
                    return e
                }
                );
                var Ht = Array.isArray;
                function Nt(t) {
                    return null != t && "number" == typeof (e = t.length) && -1 < e && e % 1 == 0 && e <= h && !Ut(t);
                    var e
                }
                var Wt = ut || function() {
                    return !1
                }
                ;
                function Ut(t) {
                    var e = Vt(t) ? E.call(t) : "";
                    return e == P || e == j
                }
                function Vt(t) {
                    var e = void 0 === t ? "undefined" : d(t);
                    return !!t && ("object" == e || "function" == e)
                }
                function Gt(t) {
                    return Nt(t) ? function(t, e) {
                        var i, n, o, s, r, a = Ht(t) || (o = n = i = t) && "object" == (void 0 === o ? "undefined" : d(o)) && Nt(n) && it.call(i, "callee") && (!at.call(i, "callee") || E.call(i) == k) ? function(t, e) {
                            for (var i = -1, n = Array(t); ++i < t; )
                                n[i] = e(i);
                            return n
                        }(t.length, String) : [], l = a.length, c = !!l;
                        for (var u in t)
                            !e && !it.call(t, u) || c && ("length" == u || (s = u,
                            (r = null == (r = l) ? h : r) && ("number" == typeof s || f.test(s)) && -1 < s && s % 1 == 0 && s < r)) || a.push(u);
                        return a
                    }(t) : function(t) {
                        if (!Ot(t))
                            return dt(t);
                        var e = [];
                        for (var i in Object(t))
                            it.call(t, i) && "constructor" != i && e.push(i);
                        return e
                    }(t)
                }
                Xt.exports = function(t) {
                    return At(t, !0, !0)
                }
            }
            ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {}],
        34: [function(t, e, i) {
            e.exports = function(t, e) {
                e || (e = [0, ""]),
                t = String(t);
                var i = parseFloat(t, 10);
                return e[0] = i,
                e[1] = t.match(/[\d.\-\+]*\s*(.*)/)[1] || "",
                e
            }
        }
        , {}],
        35: [function(t, e, i) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.create = void 0;
            var n = o(t("parse-unit"))
              , s = o(t("lodash.clonedeep"))
              , r = o(t("eases"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var a, l, c = [], d = function() {
                return (document.querySelector("body:not(.isMobile) .basicScroll") || document.scrollingElement || document.documentElement).scrollTop
            }, u = function(t) {
                return !1 === isNaN((0,
                n.default)(t)[0])
            }, h = function(t) {
                var e = (0,
                n.default)(t);
                return {
                    value: e[0],
                    unit: e[1]
                }
            }, f = function(t) {
                return null !== String(t).match(/^[a-z]+-[a-z]+$/)
            }, p = function(t, e) {
                var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : d()
                  , n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : window.innerHeight || window.outerHeight
                  , o = e.getBoundingClientRect()
                  , s = t.match(/^[a-z]+/)[0]
                  , r = t.match(/[a-z]+$/)[0]
                  , a = 0;
                return "top" === r && (a -= 0),
                "middle" === r && (a -= n / 2),
                "bottom" === r && (a -= n),
                "top" === s && (a += o.top + i),
                "middle" === s && (a += o.top + i + o.height / 2),
                "bottom" === s && (a += o.top + i + o.height),
                a + "px"
            }, m = function(t) {
                var e, i, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : d(), l = t.getData(), o = l.to.value - l.from.value, s = (n - l.from.value) / (o / 100), c = Math.min(Math.max(s, 0), 100), r = (e = l.direct,
                i = {
                    global: document.documentElement,
                    elem: l.elem,
                    direct: l.direct
                },
                !0 === e ? i.elem : e instanceof HTMLElement == 1 ? i.direct : i.global), a = Object.keys(l.props).reduce(function(t, e) {
                    var i = l.props[e]
                      , n = i.from.unit || i.to.unit
                      , o = i.from.value - i.to.value
                      , s = i.timing(c / 100)
                      , r = i.from.value - o * s
                      , a = Math.round(1e4 * r) / 1e4;
                    return t[e] = a + n,
                    t
                }, {}), u = s < 0 || 100 < s;
                return !0 == (0 <= s && s <= 100) && l.inside(t, s, a),
                !0 === u && l.outside(t, s, a),
                {
                    elem: r,
                    props: a
                }
            }, v = function(n, o) {
                Object.keys(o).forEach(function(t) {
                    return e = n,
                    i = {
                        key: t,
                        value: o[t]
                    },
                    void e.style.setProperty(i.key, i.value);
                    var e, i
                })
            };
            i.create = function(t) {
                var e = null
                  , i = !1
                  , n = {
                    isActive: function() {
                        return i
                    },
                    getData: function() {
                        return e
                    },
                    calculate: function() {
                        e = function() {
                            var i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            if (null == (i = (0,
                            s.default)(i)).from)
                                throw new Error("Missing property `from`");
                            if (null == i.to)
                                throw new Error("Missing property `to`");
                            if (null == i.inside && (i.inside = function() {}
                            ),
                            null == i.outside && (i.outside = function() {}
                            ),
                            !0 === i.direct && null == i.elem)
                                throw new Error("Property `elem` required when `direct` is true");
                            if (!0 !== i.direct && i.direct instanceof HTMLElement == 0 && (i.direct = !1),
                            !1 !== i.track && (i.track = !0),
                            "function" != typeof i.inside)
                                throw new Error("Property `inside` must be a function");
                            if ("function" != typeof i.outside)
                                throw new Error("Property `outside` must be a function");
                            if (null == i.elem) {
                                if (!1 === u(i.from))
                                    throw new Error("Property `from` must be a absolute value when no `elem` has been provided");
                                if (!1 === u(i.to))
                                    throw new Error("Property `to` must be a absolute value when no `elem` has been provided")
                            } else
                                !0 === f(i.from) && (i.from = p(i.from, i.elem)),
                                !0 === f(i.to) && (i.to = p(i.to, i.elem));
                            return i.from = h(i.from),
                            i.to = h(i.to),
                            null == i.props && (i.props = {}),
                            Object.keys(i.props).forEach(function(t) {
                                var e = i.props[t];
                                if (!1 === u(e.from))
                                    throw new Error("Property `from` of prop must be a absolute value");
                                if (!1 === u(e.to))
                                    throw new Error("Property `from` of prop must be a absolute value");
                                if (e.from = h(e.from),
                                e.to = h(e.to),
                                "string" == typeof e.timing && null == r.default[e.timing])
                                    throw new Error("Unknown timing for property `timing` of prop");
                                null == e.timing && (e.timing = r.default.linear),
                                "string" == typeof e.timing && (e.timing = r.default[e.timing])
                            }),
                            i
                        }(t)
                    },
                    update: function() {
                        var t = m(n)
                          , e = t.elem
                          , i = t.props;
                        return v(e, i),
                        i
                    },
                    start: function() {
                        i = !0
                    },
                    stop: function() {
                        i = !1
                    },
                    destroy: function() {
                        c[o] = void 0
                    }
                }
                  , o = c.push(n) - 1;
                return n.calculate(),
                n
            }
            ,
            function t(e, i) {
                var n = function() {
                    requestAnimationFrame(function() {
                        return t(e, i)
                    })
                }
                  , o = c.filter(function(t) {
                    return null != t && t.isActive()
                });
                if (0 === o.length)
                    return n();
                var s = d();
                if (i === s)
                    return n();
                i = s,
                o.map(function(t) {
                    return m(t, s)
                }).forEach(function(t) {
                    var e = t.elem
                      , i = t.props;
                    return v(e, i)
                }),
                n()
            }(),
            window.addEventListener("resize", (a = function() {
                c.filter(function(t) {
                    return null != t && t.getData().track
                }).forEach(function(t) {
                    t.calculate(),
                    t.update()
                })
            }
            ,
            50,
            l = null,
            function() {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                clearTimeout(l),
                l = setTimeout(function() {
                    return a.apply(void 0, e)
                }, 50)
            }
            ))
        }
        , {
            eases: 19,
            "lodash.clonedeep": 33,
            "parse-unit": 34
        }]
    }, {}, [35])(35)
});
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
}
: function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
}
;
!function(e, i) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(t) {
        return i(e, t)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = i(e, require("jquery")) : e.jQueryBridget = i(e, e.jQuery)
}(window, function(t, e) {
    function i(c, o, u) {
        (u = u || e || t.jQuery) && (o.prototype.option || (o.prototype.option = function(t) {
            u.isPlainObject(t) && (this.options = u.extend(!0, this.options, t))
        }
        ),
        u.fn[c] = function(t) {
            if ("string" == typeof t) {
                var e = d.call(arguments, 1);
                return r = e,
                l = "$()." + c + '("' + (s = t) + '")',
                (i = this).each(function(t, e) {
                    var i = u.data(e, c);
                    if (i) {
                        var n = i[s];
                        if (n && "_" != s.charAt(0)) {
                            var o = n.apply(i, r);
                            a = void 0 === a ? o : a
                        } else
                            h(l + " is not a valid method")
                    } else
                        h(c + " not initialized. Cannot call methods, i.e. " + l)
                }),
                void 0 !== a ? a : i
            }
            var i, s, r, a, l, n;
            return n = t,
            this.each(function(t, e) {
                var i = u.data(e, c);
                i ? (i.option(n),
                i._init()) : (i = new o(e,n),
                u.data(e, c, i))
            }),
            this
        }
        ,
        n(u))
    }
    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var d = Array.prototype.slice
      , o = t.console
      , h = void 0 === o ? function() {}
    : function(t) {
        o.error(t)
    }
    ;
    return n(e || t.jQuery),
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : void 0, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}
              , n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e),
            this
        }
    }
    ,
    e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0,
            this
        }
    }
    ,
    e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1),
            this
        }
    }
    ,
    e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0),
            e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
                var s = i[o];
                n && n[s] && (this.off(t, s),
                delete n[s]),
                s.apply(this, e)
            }
            return this
        }
    }
    ,
    e.allOff = function() {
        delete this._events,
        delete this._onceEvents
    }
    ,
    t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
        return e()
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    function g(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e
    }
    function y(t) {
        var e = getComputedStyle(t);
        return e || i("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),
        e
    }
    function b(t) {
        if (function() {
            if (!w) {
                w = !0;
                var t = document.createElement("div");
                t.style.width = "200px",
                t.style.padding = "1px 2px 3px 4px",
                t.style.borderStyle = "solid",
                t.style.borderWidth = "1px 2px 3px 4px",
                t.style.boxSizing = "border-box";
                var e = document.body || document.documentElement;
                e.appendChild(t);
                var i = y(t);
                b.isBoxSizeOuter = L = 200 == g(i.width),
                e.removeChild(t)
            }
        }(),
        "string" == typeof t && (t = document.querySelector(t)),
        t && "object" == (void 0 === t ? "undefined" : _typeof(t)) && t.nodeType) {
            var e = y(t);
            if ("none" == e.display)
                return function() {
                    for (var t = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0
                    }, e = 0; e < E; e++)
                        t[S[e]] = 0;
                    return t
                }();
            var i = {};
            i.width = t.offsetWidth,
            i.height = t.offsetHeight;
            for (var n = i.isBorderBox = "border-box" == e.boxSizing, o = 0; o < E; o++) {
                var s = S[o]
                  , r = e[s]
                  , a = parseFloat(r);
                i[s] = isNaN(a) ? 0 : a
            }
            var l = i.paddingLeft + i.paddingRight
              , c = i.paddingTop + i.paddingBottom
              , u = i.marginLeft + i.marginRight
              , d = i.marginTop + i.marginBottom
              , h = i.borderLeftWidth + i.borderRightWidth
              , f = i.borderTopWidth + i.borderBottomWidth
              , p = n && L
              , m = g(e.width);
            !1 !== m && (i.width = m + (p ? 0 : l + h));
            var v = g(e.height);
            return !1 !== v && (i.height = v + (p ? 0 : c + f)),
            i.innerWidth = i.width - (l + h),
            i.innerHeight = i.height - (c + f),
            i.outerWidth = i.width + u,
            i.outerHeight = i.height + d,
            i
        }
    }
    var L, i = "undefined" == typeof console ? function() {}
    : function(t) {
        console.error(t)
    }
    , S = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], E = S.length, w = !1;
    return b
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    var i = function() {
        var t = window.Element.prototype;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i] + "MatchesSelector";
            if (t[n])
                return n
        }
    }();
    return function(t, e) {
        return t[i](e)
    }
}),
function(e, i) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(t) {
        return i(e, t)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = i(e, require("desandro-matches-selector")) : e.fizzyUIUtils = i(e, e.matchesSelector)
}(window, function(c, s) {
    var u = {
        extend: function(t, e) {
            for (var i in e)
                t[i] = e[i];
            return t
        },
        modulo: function(t, e) {
            return (t % e + e) % e
        }
    }
      , e = Array.prototype.slice;
    u.makeArray = function(t) {
        return Array.isArray(t) ? t : null == t ? [] : "object" == (void 0 === t ? "undefined" : _typeof(t)) && "number" == typeof t.length ? e.call(t) : [t]
    }
    ,
    u.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1)
    }
    ,
    u.getParent = function(t, e) {
        for (; t.parentNode && t != document.body; )
            if (t = t.parentNode,
            s(t, e))
                return t
    }
    ,
    u.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }
    ,
    u.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    u.filterFindElements = function(t, n) {
        t = u.makeArray(t);
        var o = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!n)
                    return void o.push(t);
                s(t, n) && o.push(t);
                for (var e = t.querySelectorAll(n), i = 0; i < e.length; i++)
                    o.push(e[i])
            }
        }),
        o
    }
    ,
    u.debounceMethod = function(t, e, n) {
        n = n || 100;
        var o = t.prototype[e]
          , s = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[s];
            clearTimeout(t);
            var e = arguments
              , i = this;
            this[s] = setTimeout(function() {
                o.apply(i, e),
                delete i[s]
            }, n)
        }
    }
    ,
    u.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }
    ,
    u.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    }
    ;
    var d = c.console;
    return u.htmlInit = function(a, l) {
        u.docReady(function() {
            var t = u.toDashed(l)
              , o = "data-" + t
              , e = document.querySelectorAll("[" + o + "]")
              , i = document.querySelectorAll(".js-" + t)
              , n = u.makeArray(e).concat(u.makeArray(i))
              , s = o + "-options"
              , r = c.jQuery;
            n.forEach(function(e) {
                var t, i = e.getAttribute(o) || e.getAttribute(s);
                try {
                    t = i && JSON.parse(i)
                } catch (t) {
                    return void (d && d.error("Error parsing " + o + " on " + e.className + ": " + t))
                }
                var n = new a(e,t);
                r && r.data(e, l, n)
            })
        })
    }
    ,
    u
}),
function(e, i) {
    "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function(t) {
        return i(e, t)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = i(e, require("get-size")) : (e.Flickity = e.Flickity || {},
    e.Flickity.Cell = i(e, e.getSize))
}(window, function(t, e) {
    function i(t, e) {
        this.element = t,
        this.parent = e,
        this.create()
    }
    var n = i.prototype;
    return n.create = function() {
        this.element.style.position = "absolute",
        this.element.setAttribute("aria-selected", "false"),
        this.x = 0,
        this.shift = 0
    }
    ,
    n.destroy = function() {
        this.element.style.position = "";
        var t = this.parent.originSide;
        this.element.removeAttribute("aria-selected"),
        this.element.style[t] = ""
    }
    ,
    n.getSize = function() {
        this.size = e(this.element)
    }
    ,
    n.setPosition = function(t) {
        this.x = t,
        this.updateTarget(),
        this.renderPosition(t)
    }
    ,
    n.updateTarget = n.setDefaultTarget = function() {
        var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
        this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
    }
    ,
    n.renderPosition = function(t) {
        var e = this.parent.originSide;
        this.element.style[e] = this.parent.getPositionValue(t)
    }
    ,
    n.wrapShift = function(t) {
        this.shift = t,
        this.renderPosition(this.x + this.parent.slideableWidth * t)
    }
    ,
    n.remove = function() {
        this.element.parentNode.removeChild(this.element)
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/slide", e) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : (t.Flickity = t.Flickity || {},
    t.Flickity.Slide = e())
}(window, function() {
    function t(t) {
        this.parent = t,
        this.isOriginLeft = "left" == t.originSide,
        this.cells = [],
        this.outerWidth = 0,
        this.height = 0
    }
    var e = t.prototype;
    return e.addCell = function(t) {
        if (this.cells.push(t),
        this.outerWidth += t.size.outerWidth,
        this.height = Math.max(t.size.outerHeight, this.height),
        1 == this.cells.length) {
            this.x = t.x;
            var e = this.isOriginLeft ? "marginLeft" : "marginRight";
            this.firstMargin = t.size[e]
        }
    }
    ,
    e.updateTarget = function() {
        var t = this.isOriginLeft ? "marginRight" : "marginLeft"
          , e = this.getLastCell()
          , i = e ? e.size[t] : 0
          , n = this.outerWidth - (this.firstMargin + i);
        this.target = this.x + this.firstMargin + n * this.parent.cellAlign
    }
    ,
    e.getLastCell = function() {
        return this.cells[this.cells.length - 1]
    }
    ,
    e.select = function() {
        this.changeSelected(!0)
    }
    ,
    e.unselect = function() {
        this.changeSelected(!1)
    }
    ,
    e.changeSelected = function(e) {
        var i = e ? "add" : "remove";
        this.cells.forEach(function(t) {
            t.element.classList[i]("is-selected"),
            t.element.setAttribute("aria-selected", e.toString())
        })
    }
    ,
    e.getCellElements = function() {
        return this.cells.map(function(t) {
            return t.element
        })
    }
    ,
    t
}),
function(e, i) {
    "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function(t) {
        return i(e, t)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = i(e, require("fizzy-ui-utils")) : (e.Flickity = e.Flickity || {},
    e.Flickity.animatePrototype = i(e, e.fizzyUIUtils))
}(window, function(t, s) {
    var e = {
        startAnimation: function() {
            this.isAnimating || (this.isAnimating = !0,
            this.restingFrames = 0,
            this.animate())
        },
        animate: function() {
            this.applyDragForce(),
            this.applySelectedAttraction();
            var t = this.x;
            if (this.integratePhysics(),
            this.positionSlider(),
            this.settle(t),
            this.isAnimating) {
                var e = this;
                requestAnimationFrame(function() {
                    e.animate()
                })
            }
        },
        positionSlider: function() {
            var t = this.x;
            this.options.wrapAround && 1 < this.cells.length && (t = s.modulo(t, this.slideableWidth),
            t -= this.slideableWidth,
            this.shiftWrapCells(t)),
            t += this.cursorPosition,
            t = this.options.rightToLeft ? -t : t;
            var e = this.getPositionValue(t);
            this.slider.style.transform = this.isAnimating ? "translate3d(" + e + ",0,0)" : "translateX(" + e + ")";
            var i = this.slides[0];
            if (i) {
                var n = -this.x - i.target
                  , o = n / this.slidesWidth;
                this.dispatchEvent("scroll", null, [o, n])
            }
        },
        positionSliderAtSelected: function() {
            this.cells.length && (this.x = -this.selectedSlide.target,
            this.velocity = 0,
            this.positionSlider())
        },
        getPositionValue: function(t) {
            return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
        },
        settle: function(t) {
            this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++,
            2 < this.restingFrames && (this.isAnimating = !1,
            delete this.isFreeScrolling,
            this.positionSlider(),
            this.dispatchEvent("settle", null, [this.selectedIndex]))
        },
        shiftWrapCells: function(t) {
            var e = this.cursorPosition + t;
            this._shiftCells(this.beforeShiftCells, e, -1);
            var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
            this._shiftCells(this.afterShiftCells, i, 1)
        },
        _shiftCells: function(t, e, i) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n]
                  , s = 0 < e ? i : 0;
                o.wrapShift(s),
                e -= o.size.outerWidth
            }
        },
        _unshiftCells: function(t) {
            if (t && t.length)
                for (var e = 0; e < t.length; e++)
                    t[e].wrapShift(0)
        },
        integratePhysics: function() {
            this.x += this.velocity,
            this.velocity *= this.getFrictionFactor()
        },
        applyForce: function(t) {
            this.velocity += t
        },
        getFrictionFactor: function() {
            return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
        },
        getRestingPosition: function() {
            return this.x + this.velocity / (1 - this.getFrictionFactor())
        },
        applyDragForce: function() {
            if (this.isDraggable && this.isPointerDown) {
                var t = this.dragX - this.x - this.velocity;
                this.applyForce(t)
            }
        },
        applySelectedAttraction: function() {
            if (!(this.isDraggable && this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
                var t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
                this.applyForce(t)
            }
        }
    };
    return e
}),
function(r, a) {
    if ("function" == typeof define && define.amd)
        define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function(t, e, i, n, o, s) {
            return a(r, t, e, i, n, o, s)
        });
    else if ("object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports)
        module.exports = a(r, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));
    else {
        var t = r.Flickity;
        r.Flickity = a(r, r.EvEmitter, r.getSize, r.fizzyUIUtils, t.Cell, t.Slide, t.animatePrototype)
    }
}(window, function(n, t, e, a, i, r, o) {
    function s(t, e) {
        for (t = a.makeArray(t); t.length; )
            e.appendChild(t.shift())
    }
    function l(t, e) {
        var i = a.getQueryElement(t);
        if (i) {
            if (this.element = i,
            this.element.flickityGUID) {
                var n = f[this.element.flickityGUID];
                return n.option(e),
                n
            }
            c && (this.$element = c(this.element)),
            this.options = a.extend({}, this.constructor.defaults),
            this.option(e),
            this._create()
        } else
            d && d.error("Bad element for Flickity: " + (i || t))
    }
    var c = n.jQuery
      , u = n.getComputedStyle
      , d = n.console
      , h = 0
      , f = {};
    l.defaults = {
        accessibility: !0,
        cellAlign: "center",
        freeScrollFriction: .075,
        friction: .28,
        namespaceJQueryEvents: !0,
        percentPosition: !0,
        resize: !0,
        selectedAttraction: .025,
        setGallerySize: !0
    },
    l.createMethods = [];
    var p = l.prototype;
    a.extend(p, t.prototype),
    p._create = function() {
        var t = this.guid = ++h;
        for (var e in this.element.flickityGUID = t,
        (f[t] = this).selectedIndex = 0,
        this.restingFrames = 0,
        this.x = 0,
        this.velocity = 0,
        this.originSide = this.options.rightToLeft ? "right" : "left",
        this.viewport = document.createElement("div"),
        this.viewport.className = "flickity-viewport",
        this._createSlider(),
        (this.options.resize || this.options.watchCSS) && n.addEventListener("resize", this),
        this.options.on) {
            var i = this.options.on[e];
            this.on(e, i)
        }
        l.createMethods.forEach(function(t) {
            this[t]()
        }, this),
        this.options.watchCSS ? this.watchCSS() : this.activate()
    }
    ,
    p.option = function(t) {
        a.extend(this.options, t)
    }
    ,
    p.activate = function() {
        if (!this.isActive) {
            this.isActive = !0,
            this.element.classList.add("flickity-enabled"),
            this.options.rightToLeft && this.element.classList.add("flickity-rtl"),
            this.getSize(),
            s(this._filterFindCellElements(this.element.children), this.slider),
            this.viewport.appendChild(this.slider),
            this.element.appendChild(this.viewport),
            this.reloadCells(),
            this.options.accessibility && (this.element.tabIndex = 0,
            this.element.addEventListener("keydown", this)),
            this.emitEvent("activate");
            var t, e = this.options.initialIndex;
            t = this.isInitActivated ? this.selectedIndex : void 0 !== e && this.cells[e] ? e : 0,
            this.select(t, !1, !0),
            this.isInitActivated = !0,
            this.dispatchEvent("ready")
        }
    }
    ,
    p._createSlider = function() {
        var t = document.createElement("div");
        t.className = "flickity-slider",
        t.style[this.originSide] = 0,
        this.slider = t
    }
    ,
    p._filterFindCellElements = function(t) {
        return a.filterFindElements(t, this.options.cellSelector)
    }
    ,
    p.reloadCells = function() {
        this.cells = this._makeCells(this.slider.children),
        this.positionCells(),
        this._getWrapShiftCells(),
        this.setGallerySize()
    }
    ,
    p._makeCells = function(t) {
        return this._filterFindCellElements(t).map(function(t) {
            return new i(t,this)
        }, this)
    }
    ,
    p.getLastCell = function() {
        return this.cells[this.cells.length - 1]
    }
    ,
    p.getLastSlide = function() {
        return this.slides[this.slides.length - 1]
    }
    ,
    p.positionCells = function() {
        this._sizeCells(this.cells),
        this._positionCells(0)
    }
    ,
    p._positionCells = function(t) {
        t = t || 0,
        this.maxCellHeight = t && this.maxCellHeight || 0;
        var e = 0;
        if (0 < t) {
            var i = this.cells[t - 1];
            e = i.x + i.size.outerWidth
        }
        for (var n = this.cells.length, o = t; o < n; o++) {
            var s = this.cells[o];
            s.setPosition(e),
            e += s.size.outerWidth,
            this.maxCellHeight = Math.max(s.size.outerHeight, this.maxCellHeight)
        }
        this.slideableWidth = e,
        this.updateSlides(),
        this._containSlides(),
        this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0
    }
    ,
    p._sizeCells = function(t) {
        t.forEach(function(t) {
            t.getSize()
        })
    }
    ,
    p.updateSlides = function() {
        if (this.slides = [],
        this.cells.length) {
            var n = new r(this);
            this.slides.push(n);
            var o = "left" == this.originSide ? "marginRight" : "marginLeft"
              , s = this._getCanCellFit();
            this.cells.forEach(function(t, e) {
                if (n.cells.length) {
                    var i = n.outerWidth - n.firstMargin + (t.size.outerWidth - t.size[o]);
                    s.call(this, e, i) || (n.updateTarget(),
                    n = new r(this),
                    this.slides.push(n)),
                    n.addCell(t)
                } else
                    n.addCell(t)
            }, this),
            n.updateTarget(),
            this.updateSelectedSlide()
        }
    }
    ,
    p._getCanCellFit = function() {
        var t = this.options.groupCells;
        if (!t)
            return function() {
                return !1
            }
            ;
        if ("number" == typeof t) {
            var e = parseInt(t, 10);
            return function(t) {
                return t % e != 0
            }
        }
        var i = "string" == typeof t && t.match(/^(\d+)%$/)
          , n = i ? parseInt(i[1], 10) / 100 : 1;
        return function(t, e) {
            return e <= (this.size.innerWidth + 1) * n
        }
    }
    ,
    p._init = p.reposition = function() {
        this.positionCells(),
        this.positionSliderAtSelected()
    }
    ,
    p.getSize = function() {
        this.size = e(this.element),
        this.setCellAlign(),
        this.cursorPosition = this.size.innerWidth * this.cellAlign
    }
    ;
    var m = {
        center: {
            left: .5,
            right: .5
        },
        left: {
            left: 0,
            right: 1
        },
        right: {
            right: 0,
            left: 1
        }
    };
    return p.setCellAlign = function() {
        var t = m[this.options.cellAlign];
        this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
    }
    ,
    p.setGallerySize = function() {
        if (this.options.setGallerySize) {
            var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
            this.viewport.style.height = t + "px"
        }
    }
    ,
    p._getWrapShiftCells = function() {
        if (this.options.wrapAround) {
            this._unshiftCells(this.beforeShiftCells),
            this._unshiftCells(this.afterShiftCells);
            var t = this.cursorPosition
              , e = this.cells.length - 1;
            this.beforeShiftCells = this._getGapCells(t, e, -1),
            t = this.size.innerWidth - this.cursorPosition,
            this.afterShiftCells = this._getGapCells(t, 0, 1)
        }
    }
    ,
    p._getGapCells = function(t, e, i) {
        for (var n = []; 0 < t; ) {
            var o = this.cells[e];
            if (!o)
                break;
            n.push(o),
            e += i,
            t -= o.size.outerWidth
        }
        return n
    }
    ,
    p._containSlides = function() {
        if (this.options.contain && !this.options.wrapAround && this.cells.length) {
            var t = this.options.rightToLeft
              , e = t ? "marginRight" : "marginLeft"
              , i = t ? "marginLeft" : "marginRight"
              , n = this.slideableWidth - this.getLastCell().size[i]
              , o = n < this.size.innerWidth
              , s = this.cursorPosition + this.cells[0].size[e]
              , r = n - this.size.innerWidth * (1 - this.cellAlign);
            this.slides.forEach(function(t) {
                o ? t.target = n * this.cellAlign : (t.target = Math.max(t.target, s),
                t.target = Math.min(t.target, r))
            }, this)
        }
    }
    ,
    p.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n),
        c && this.$element) {
            var o = t += this.options.namespaceJQueryEvents ? ".flickity" : "";
            if (e) {
                var s = c.Event(e);
                s.type = t,
                o = s
            }
            this.$element.trigger(o, i)
        }
    }
    ,
    p.select = function(t, e, i) {
        if (this.isActive && (t = parseInt(t, 10),
        this._wrapSelect(t),
        (this.options.wrapAround || e) && (t = a.modulo(t, this.slides.length)),
        this.slides[t])) {
            var n = this.selectedIndex;
            this.selectedIndex = t,
            this.updateSelectedSlide(),
            i ? this.positionSliderAtSelected() : this.startAnimation(),
            this.options.adaptiveHeight && this.setGallerySize(),
            this.dispatchEvent("select", null, [t]),
            t != n && this.dispatchEvent("change", null, [t]),
            this.dispatchEvent("cellSelect")
        }
    }
    ,
    p._wrapSelect = function(t) {
        var e = this.slides.length;
        if (!(this.options.wrapAround && 1 < e))
            return t;
        var i = a.modulo(t, e)
          , n = Math.abs(i - this.selectedIndex)
          , o = Math.abs(i + e - this.selectedIndex)
          , s = Math.abs(i - e - this.selectedIndex);
        !this.isDragSelect && o < n ? t += e : !this.isDragSelect && s < n && (t -= e),
        t < 0 ? this.x -= this.slideableWidth : e <= t && (this.x += this.slideableWidth)
    }
    ,
    p.previous = function(t, e) {
        this.select(this.selectedIndex - 1, t, e)
    }
    ,
    p.next = function(t, e) {
        this.select(this.selectedIndex + 1, t, e)
    }
    ,
    p.updateSelectedSlide = function() {
        var t = this.slides[this.selectedIndex];
        t && (this.unselectSelectedSlide(),
        (this.selectedSlide = t).select(),
        this.selectedCells = t.cells,
        this.selectedElements = t.getCellElements(),
        this.selectedCell = t.cells[0],
        this.selectedElement = this.selectedElements[0])
    }
    ,
    p.unselectSelectedSlide = function() {
        this.selectedSlide && this.selectedSlide.unselect()
    }
    ,
    p.selectCell = function(t, e, i) {
        var n = this.queryCell(t);
        if (n) {
            var o = this.getCellSlideIndex(n);
            this.select(o, e, i)
        }
    }
    ,
    p.getCellSlideIndex = function(t) {
        for (var e = 0; e < this.slides.length; e++) {
            if (-1 != this.slides[e].cells.indexOf(t))
                return e
        }
    }
    ,
    p.getCell = function(t) {
        for (var e = 0; e < this.cells.length; e++) {
            var i = this.cells[e];
            if (i.element == t)
                return i
        }
    }
    ,
    p.getCells = function(t) {
        t = a.makeArray(t);
        var i = [];
        return t.forEach(function(t) {
            var e = this.getCell(t);
            e && i.push(e)
        }, this),
        i
    }
    ,
    p.getCellElements = function() {
        return this.cells.map(function(t) {
            return t.element
        })
    }
    ,
    p.getParentCell = function(t) {
        var e = this.getCell(t);
        return e || (t = a.getParent(t, ".flickity-slider > *"),
        this.getCell(t))
    }
    ,
    p.getAdjacentCellElements = function(t, e) {
        if (!t)
            return this.selectedSlide.getCellElements();
        e = void 0 === e ? this.selectedIndex : e;
        var i = this.slides.length;
        if (i <= 1 + 2 * t)
            return this.getCellElements();
        for (var n = [], o = e - t; o <= e + t; o++) {
            var s = this.options.wrapAround ? a.modulo(o, i) : o
              , r = this.slides[s];
            r && (n = n.concat(r.getCellElements()))
        }
        return n
    }
    ,
    p.queryCell = function(t) {
        return "number" == typeof t ? this.cells[t] : ("string" == typeof t && (t = this.element.querySelector(t)),
        this.getCell(t))
    }
    ,
    p.uiChange = function() {
        this.emitEvent("uiChange")
    }
    ,
    p.childUIPointerDown = function(t) {
        this.emitEvent("childUIPointerDown", [t])
    }
    ,
    p.onresize = function() {
        this.watchCSS(),
        this.resize()
    }
    ,
    a.debounceMethod(l, "onresize", 150),
    p.resize = function() {
        if (this.isActive) {
            this.getSize(),
            this.options.wrapAround && (this.x = a.modulo(this.x, this.slideableWidth)),
            this.positionCells(),
            this._getWrapShiftCells(),
            this.setGallerySize(),
            this.emitEvent("resize");
            var t = this.selectedElements && this.selectedElements[0];
            this.selectCell(t, !1, !0)
        }
    }
    ,
    p.watchCSS = function() {
        this.options.watchCSS && (-1 != u(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate())
    }
    ,
    p.onkeydown = function(t) {
        var e = document.activeElement && document.activeElement != this.element;
        if (this.options.accessibility && !e) {
            var i = l.keyboardHandlers[t.keyCode];
            i && i.call(this)
        }
    }
    ,
    l.keyboardHandlers = {
        37: function() {
            var t = this.options.rightToLeft ? "next" : "previous";
            this.uiChange(),
            this[t]()
        },
        39: function() {
            var t = this.options.rightToLeft ? "previous" : "next";
            this.uiChange(),
            this[t]()
        }
    },
    p.focus = function() {
        var t = n.pageYOffset;
        this.element.focus(),
        n.pageYOffset != t && n.scrollTo(n.pageXOffset, t)
    }
    ,
    p.deactivate = function() {
        this.isActive && (this.element.classList.remove("flickity-enabled"),
        this.element.classList.remove("flickity-rtl"),
        this.unselectSelectedSlide(),
        this.cells.forEach(function(t) {
            t.destroy()
        }),
        this.element.removeChild(this.viewport),
        s(this.slider.children, this.element),
        this.options.accessibility && (this.element.removeAttribute("tabIndex"),
        this.element.removeEventListener("keydown", this)),
        this.isActive = !1,
        this.emitEvent("deactivate"))
    }
    ,
    p.destroy = function() {
        this.deactivate(),
        n.removeEventListener("resize", this),
        this.emitEvent("destroy"),
        c && this.$element && c.removeData(this.element, "flickity"),
        delete this.element.flickityGUID,
        delete f[this.guid]
    }
    ,
    a.extend(p, o),
    l.data = function(t) {
        var e = (t = a.getQueryElement(t)) && t.flickityGUID;
        return e && f[e]
    }
    ,
    a.htmlInit(l, "flickity"),
    c && c.bridget && c.bridget("flickity", l),
    l.setJQuery = function(t) {
        c = t
    }
    ,
    l.Cell = i,
    l
}),
function(e, i) {
    "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function(t) {
        return i(e, t)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = i(e, require("ev-emitter")) : e.Unipointer = i(e, e.EvEmitter)
}(window, function(o, t) {
    function e() {}
    var i = e.prototype = Object.create(t.prototype);
    i.bindStartEvent = function(t) {
        this._bindStartEvent(t, !0)
    }
    ,
    i.unbindStartEvent = function(t) {
        this._bindStartEvent(t, !1)
    }
    ,
    i._bindStartEvent = function(t, e) {
        var i = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener"
          , n = "mousedown";
        o.PointerEvent ? n = "pointerdown" : "ontouchstart"in o && (n = "touchstart"),
        t[i](n, this)
    }
    ,
    i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    i.getTouch = function(t) {
        for (var e = 0; e < t.length; e++) {
            var i = t[e];
            if (i.identifier == this.pointerIdentifier)
                return i
        }
    }
    ,
    i.onmousedown = function(t) {
        var e = t.button;
        e && 0 !== e && 1 !== e || this._pointerDown(t, t)
    }
    ,
    i.ontouchstart = function(t) {
        this._pointerDown(t, t.changedTouches[0])
    }
    ,
    i.onpointerdown = function(t) {
        this._pointerDown(t, t)
    }
    ,
    i._pointerDown = function(t, e) {
        t.button || this.isPointerDown || (this.isPointerDown = !0,
        this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier,
        this.pointerDown(t, e))
    }
    ,
    i.pointerDown = function(t, e) {
        this._bindPostStartEvents(t),
        this.emitEvent("pointerDown", [t, e])
    }
    ;
    var n = {
        mousedown: ["mousemove", "mouseup"],
        touchstart: ["touchmove", "touchend", "touchcancel"],
        pointerdown: ["pointermove", "pointerup", "pointercancel"]
    };
    return i._bindPostStartEvents = function(t) {
        if (t) {
            var e = n[t.type];
            e.forEach(function(t) {
                o.addEventListener(t, this)
            }, this),
            this._boundPointerEvents = e
        }
    }
    ,
    i._unbindPostStartEvents = function() {
        this._boundPointerEvents && (this._boundPointerEvents.forEach(function(t) {
            o.removeEventListener(t, this)
        }, this),
        delete this._boundPointerEvents)
    }
    ,
    i.onmousemove = function(t) {
        this._pointerMove(t, t)
    }
    ,
    i.onpointermove = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
    }
    ,
    i.ontouchmove = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerMove(t, e)
    }
    ,
    i._pointerMove = function(t, e) {
        this.pointerMove(t, e)
    }
    ,
    i.pointerMove = function(t, e) {
        this.emitEvent("pointerMove", [t, e])
    }
    ,
    i.onmouseup = function(t) {
        this._pointerUp(t, t)
    }
    ,
    i.onpointerup = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
    }
    ,
    i.ontouchend = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerUp(t, e)
    }
    ,
    i._pointerUp = function(t, e) {
        this._pointerDone(),
        this.pointerUp(t, e)
    }
    ,
    i.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [t, e])
    }
    ,
    i._pointerDone = function() {
        this._pointerReset(),
        this._unbindPostStartEvents(),
        this.pointerDone()
    }
    ,
    i._pointerReset = function() {
        this.isPointerDown = !1,
        delete this.pointerIdentifier
    }
    ,
    i.pointerDone = function() {}
    ,
    i.onpointercancel = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
    }
    ,
    i.ontouchcancel = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerCancel(t, e)
    }
    ,
    i._pointerCancel = function(t, e) {
        this._pointerDone(),
        this.pointerCancel(t, e)
    }
    ,
    i.pointerCancel = function(t, e) {
        this.emitEvent("pointerCancel", [t, e])
    }
    ,
    e.getPointerPoint = function(t) {
        return {
            x: t.pageX,
            y: t.pageY
        }
    }
    ,
    e
}),
function(e, i) {
    "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function(t) {
        return i(e, t)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = i(e, require("unipointer")) : e.Unidragger = i(e, e.Unipointer)
}(window, function(s, t) {
    function e() {}
    var i = e.prototype = Object.create(t.prototype);
    i.bindHandles = function() {
        this._bindHandles(!0)
    }
    ,
    i.unbindHandles = function() {
        this._bindHandles(!1)
    }
    ,
    i._bindHandles = function(t) {
        for (var e = (t = void 0 === t || t) ? "addEventListener" : "removeEventListener", i = t ? this._touchActionValue : "", n = 0; n < this.handles.length; n++) {
            var o = this.handles[n];
            this._bindStartEvent(o, t),
            o[e]("click", this),
            s.PointerEvent && (o.style.touchAction = i)
        }
    }
    ,
    i._touchActionValue = "none",
    i.pointerDown = function(t, e) {
        this.okayPointerDown(t) && (this.pointerDownPointer = e,
        t.preventDefault(),
        this.pointerDownBlur(),
        this._bindPostStartEvents(t),
        this.emitEvent("pointerDown", [t, e]))
    }
    ;
    var o = {
        TEXTAREA: !0,
        INPUT: !0,
        SELECT: !0,
        OPTION: !0
    }
      , r = {
        radio: !0,
        checkbox: !0,
        button: !0,
        submit: !0,
        image: !0,
        file: !0
    };
    return i.okayPointerDown = function(t) {
        var e = o[t.target.nodeName]
          , i = r[t.target.type]
          , n = !e || i;
        return n || this._pointerReset(),
        n
    }
    ,
    i.pointerDownBlur = function() {
        var t = document.activeElement;
        t && t.blur && t != document.body && t.blur()
    }
    ,
    i.pointerMove = function(t, e) {
        var i = this._dragPointerMove(t, e);
        this.emitEvent("pointerMove", [t, e, i]),
        this._dragMove(t, e, i)
    }
    ,
    i._dragPointerMove = function(t, e) {
        var i = {
            x: e.pageX - this.pointerDownPointer.pageX,
            y: e.pageY - this.pointerDownPointer.pageY
        };
        return !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e),
        i
    }
    ,
    i.hasDragStarted = function(t) {
        return 3 < Math.abs(t.x) || 3 < Math.abs(t.y)
    }
    ,
    i.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [t, e]),
        this._dragPointerUp(t, e)
    }
    ,
    i._dragPointerUp = function(t, e) {
        this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
    }
    ,
    i._dragStart = function(t, e) {
        this.isDragging = !0,
        this.isPreventingClicks = !0,
        this.dragStart(t, e)
    }
    ,
    i.dragStart = function(t, e) {
        this.emitEvent("dragStart", [t, e])
    }
    ,
    i._dragMove = function(t, e, i) {
        this.isDragging && this.dragMove(t, e, i)
    }
    ,
    i.dragMove = function(t, e, i) {
        t.preventDefault(),
        this.emitEvent("dragMove", [t, e, i])
    }
    ,
    i._dragEnd = function(t, e) {
        this.isDragging = !1,
        setTimeout(function() {
            delete this.isPreventingClicks
        }
        .bind(this)),
        this.dragEnd(t, e)
    }
    ,
    i.dragEnd = function(t, e) {
        this.emitEvent("dragEnd", [t, e])
    }
    ,
    i.onclick = function(t) {
        this.isPreventingClicks && t.preventDefault()
    }
    ,
    i._staticClick = function(t, e) {
        this.isIgnoringMouseUp && "mouseup" == t.type || (this.staticClick(t, e),
        "mouseup" != t.type && (this.isIgnoringMouseUp = !0,
        setTimeout(function() {
            delete this.isIgnoringMouseUp
        }
        .bind(this), 400)))
    }
    ,
    i.staticClick = function(t, e) {
        this.emitEvent("staticClick", [t, e])
    }
    ,
    e.getPointerPoint = t.getPointerPoint,
    e
}),
function(n, o) {
    "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function(t, e, i) {
        return o(n, t, e, i)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = o(n, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : n.Flickity = o(n, n.Flickity, n.Unidragger, n.fizzyUIUtils)
}(window, function(i, t, e, a) {
    function n() {
        return {
            x: i.pageXOffset,
            y: i.pageYOffset
        }
    }
    a.extend(t.defaults, {
        draggable: ">1",
        dragThreshold: 3
    }),
    t.createMethods.push("_createDrag");
    var o = t.prototype;
    a.extend(o, e.prototype),
    o._touchActionValue = "pan-y";
    var s = "createTouch"in document
      , r = !1;
    o._createDrag = function() {
        this.on("activate", this.onActivateDrag),
        this.on("uiChange", this._uiChangeDrag),
        this.on("childUIPointerDown", this._childUIPointerDownDrag),
        this.on("deactivate", this.unbindDrag),
        this.on("cellChange", this.updateDraggable),
        s && !r && (i.addEventListener("touchmove", function() {}),
        r = !0)
    }
    ,
    o.onActivateDrag = function() {
        this.handles = [this.viewport],
        this.bindHandles(),
        this.updateDraggable()
    }
    ,
    o.onDeactivateDrag = function() {
        this.unbindHandles(),
        this.element.classList.remove("is-draggable")
    }
    ,
    o.updateDraggable = function() {
        ">1" == this.options.draggable ? this.isDraggable = 1 < this.slides.length : this.isDraggable = this.options.draggable,
        this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable")
    }
    ,
    o.bindDrag = function() {
        this.options.draggable = !0,
        this.updateDraggable()
    }
    ,
    o.unbindDrag = function() {
        this.options.draggable = !1,
        this.updateDraggable()
    }
    ,
    o._uiChangeDrag = function() {
        delete this.isFreeScrolling
    }
    ,
    o._childUIPointerDownDrag = function(t) {
        t.preventDefault(),
        this.pointerDownFocus(t)
    }
    ,
    o.pointerDown = function(t, e) {
        this.isDraggable ? this.okayPointerDown(t) && (this._pointerDownPreventDefault(t),
        this.pointerDownFocus(t),
        document.activeElement != this.element && this.pointerDownBlur(),
        this.dragX = this.x,
        this.viewport.classList.add("is-pointer-down"),
        this.pointerDownScroll = n(),
        i.addEventListener("scroll", this),
        this._pointerDownDefault(t, e)) : this._pointerDownDefault(t, e)
    }
    ,
    o._pointerDownDefault = function(t, e) {
        this.pointerDownPointer = e,
        this._bindPostStartEvents(t),
        this.dispatchEvent("pointerDown", t, [e])
    }
    ;
    var l = {
        INPUT: !0,
        TEXTAREA: !0,
        SELECT: !0
    };
    return o.pointerDownFocus = function(t) {
        l[t.target.nodeName] || this.focus()
    }
    ,
    o._pointerDownPreventDefault = function(t) {
        var e = "touchstart" == t.type
          , i = "touch" == t.pointerType
          , n = l[t.target.nodeName];
        e || i || n || t.preventDefault()
    }
    ,
    o.hasDragStarted = function(t) {
        return Math.abs(t.x) > this.options.dragThreshold
    }
    ,
    o.pointerUp = function(t, e) {
        delete this.isTouchScrolling,
        this.viewport.classList.remove("is-pointer-down"),
        this.dispatchEvent("pointerUp", t, [e]),
        this._dragPointerUp(t, e)
    }
    ,
    o.pointerDone = function() {
        i.removeEventListener("scroll", this),
        delete this.pointerDownScroll
    }
    ,
    o.dragStart = function(t, e) {
        this.isDraggable && (this.dragStartPosition = this.x,
        this.startAnimation(),
        i.removeEventListener("scroll", this),
        this.dispatchEvent("dragStart", t, [e]))
    }
    ,
    o.pointerMove = function(t, e) {
        var i = this._dragPointerMove(t, e);
        this.dispatchEvent("pointerMove", t, [e, i]),
        this._dragMove(t, e, i)
    }
    ,
    o.dragMove = function(t, e, i) {
        if (this.isDraggable) {
            t.preventDefault(),
            this.previousDragX = this.dragX;
            var n = this.options.rightToLeft ? -1 : 1;
            this.options.wrapAround && (i.x = i.x % this.slideableWidth);
            var o = this.dragStartPosition + i.x * n;
            if (!this.options.wrapAround && this.slides.length) {
                var s = Math.max(-this.slides[0].target, this.dragStartPosition);
                o = s < o ? .5 * (o + s) : o;
                var r = Math.min(-this.getLastSlide().target, this.dragStartPosition);
                o = o < r ? .5 * (o + r) : o
            }
            this.dragX = o,
            this.dragMoveTime = new Date,
            this.dispatchEvent("dragMove", t, [e, i])
        }
    }
    ,
    o.dragEnd = function(t, e) {
        if (this.isDraggable) {
            this.options.freeScroll && (this.isFreeScrolling = !0);
            var i = this.dragEndRestingSelect();
            if (this.options.freeScroll && !this.options.wrapAround) {
                var n = this.getRestingPosition();
                this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target
            } else
                this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
            delete this.previousDragX,
            this.isDragSelect = this.options.wrapAround,
            this.select(i),
            delete this.isDragSelect,
            this.dispatchEvent("dragEnd", t, [e])
        }
    }
    ,
    o.dragEndRestingSelect = function() {
        var t = this.getRestingPosition()
          , e = Math.abs(this.getSlideDistance(-t, this.selectedIndex))
          , i = this._getClosestResting(t, e, 1)
          , n = this._getClosestResting(t, e, -1);
        return i.distance < n.distance ? i.index : n.index
    }
    ,
    o._getClosestResting = function(t, e, i) {
        for (var n = this.selectedIndex, o = 1 / 0, s = this.options.contain && !this.options.wrapAround ? function(t, e) {
            return t <= e
        }
        : function(t, e) {
            return t < e
        }
        ; s(e, o) && (n += i,
        o = e,
        null !== (e = this.getSlideDistance(-t, n))); )
            e = Math.abs(e);
        return {
            distance: o,
            index: n - i
        }
    }
    ,
    o.getSlideDistance = function(t, e) {
        var i = this.slides.length
          , n = this.options.wrapAround && 1 < i
          , o = n ? a.modulo(e, i) : e
          , s = this.slides[o];
        if (!s)
            return null;
        var r = n ? this.slideableWidth * Math.floor(e / i) : 0;
        return t - (s.target + r)
    }
    ,
    o.dragEndBoostSelect = function() {
        if (void 0 === this.previousDragX || !this.dragMoveTime || 100 < new Date - this.dragMoveTime)
            return 0;
        var t = this.getSlideDistance(-this.dragX, this.selectedIndex)
          , e = this.previousDragX - this.dragX;
        return 0 < t && 0 < e ? 1 : t < 0 && e < 0 ? -1 : 0
    }
    ,
    o.staticClick = function(t, e) {
        var i = this.getParentCell(t.target)
          , n = i && i.element
          , o = i && this.cells.indexOf(i);
        this.dispatchEvent("staticClick", t, [e, n, o])
    }
    ,
    o.onscroll = function() {
        var t = n()
          , e = this.pointerDownScroll.x - t.x
          , i = this.pointerDownScroll.y - t.y;
        (3 < Math.abs(e) || 3 < Math.abs(i)) && this._pointerDone()
    }
    ,
    t
}),
function(e, i) {
    "function" == typeof define && define.amd ? define("tap-listener/tap-listener", ["unipointer/unipointer"], function(t) {
        return i(e, t)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = i(e, require("unipointer")) : e.TapListener = i(e, e.Unipointer)
}(window, function(a, l) {
    function t(t) {
        this.bindTap(t)
    }
    var e = t.prototype = Object.create(l.prototype);
    return e.bindTap = function(t) {
        t && (this.unbindTap(),
        this.tapElement = t,
        this._bindStartEvent(t, !0))
    }
    ,
    e.unbindTap = function() {
        this.tapElement && (this._bindStartEvent(this.tapElement, !0),
        delete this.tapElement)
    }
    ,
    e.pointerUp = function(t, e) {
        if (!this.isIgnoringMouseUp || "mouseup" != t.type) {
            var i = l.getPointerPoint(e)
              , n = this.tapElement.getBoundingClientRect()
              , o = a.pageXOffset
              , s = a.pageYOffset;
            if (i.x >= n.left + o && i.x <= n.right + o && i.y >= n.top + s && i.y <= n.bottom + s && this.emitEvent("tap", [t, e]),
            "mouseup" != t.type) {
                this.isIgnoringMouseUp = !0;
                var r = this;
                setTimeout(function() {
                    delete r.isIgnoringMouseUp
                }, 400)
            }
        }
    }
    ,
    e.destroy = function() {
        this.pointerDone(),
        this.unbindTap()
    }
    ,
    t
}),
function(n, o) {
    "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(t, e, i) {
        return o(n, t, e, i)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = o(n, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : o(n, n.Flickity, n.TapListener, n.fizzyUIUtils)
}(window, function(t, e, i, n) {
    function o(t, e) {
        this.direction = t,
        this.parent = e,
        this._create()
    }
    var s = "http://www.w3.org/2000/svg";
    (o.prototype = Object.create(i.prototype))._create = function() {
        this.isEnabled = !0,
        this.isPrevious = -1 == this.direction;
        var t = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == t;
        var e = this.element = document.createElement("button");
        e.className = "flickity-button flickity-prev-next-button",
        e.className += this.isPrevious ? " previous" : " next",
        e.setAttribute("type", "button"),
        this.disable(),
        e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
        var i = this.createSVG();
        e.appendChild(i),
        this.on("tap", this.onTap),
        this.parent.on("select", this.update.bind(this)),
        this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
    }
    ,
    o.prototype.activate = function() {
        this.bindTap(this.element),
        this.element.addEventListener("click", this),
        this.parent.element.appendChild(this.element)
    }
    ,
    o.prototype.deactivate = function() {
        this.parent.element.removeChild(this.element),
        i.prototype.destroy.call(this),
        this.element.removeEventListener("click", this)
    }
    ,
    o.prototype.createSVG = function() {
        var t = document.createElementNS(s, "svg");
        t.setAttribute("class", "flickity-button-icon"),
        t.setAttribute("viewBox", "0 0 100 100");
        var e, i = document.createElementNS(s, "path"), n = "string" == typeof (e = this.parent.options.arrowShape) ? e : "M " + e.x0 + ",50 L " + e.x1 + "," + (e.y1 + 50) + " L " + e.x2 + "," + (e.y2 + 50) + " L " + e.x3 + ",50  L " + e.x2 + "," + (50 - e.y2) + " L " + e.x1 + "," + (50 - e.y1) + " Z";
        return i.setAttribute("d", n),
        i.setAttribute("class", "arrow"),
        this.isLeft || i.setAttribute("transform", "translate(100, 100) rotate(180) "),
        t.appendChild(i),
        t
    }
    ,
    o.prototype.onTap = function() {
        if (this.isEnabled) {
            this.parent.uiChange();
            var t = this.isPrevious ? "previous" : "next";
            this.parent[t]()
        }
    }
    ,
    o.prototype.handleEvent = n.handleEvent,
    o.prototype.onclick = function(t) {
        var e = document.activeElement;
        e && e == this.element && this.onTap(t, t)
    }
    ,
    o.prototype.enable = function() {
        this.isEnabled || (this.element.disabled = !1,
        this.isEnabled = !0)
    }
    ,
    o.prototype.disable = function() {
        this.isEnabled && (this.element.disabled = !0,
        this.isEnabled = !1)
    }
    ,
    o.prototype.update = function() {
        var t = this.parent.slides;
        if (this.parent.options.wrapAround && 1 < t.length)
            this.enable();
        else {
            var e = t.length ? t.length - 1 : 0
              , i = this.isPrevious ? 0 : e;
            this[this.parent.selectedIndex == i ? "disable" : "enable"]()
        }
    }
    ,
    o.prototype.destroy = function() {
        this.deactivate()
    }
    ,
    n.extend(e.defaults, {
        prevNextButtons: !0,
        arrowShape: {
            x0: 10,
            x1: 60,
            y1: 50,
            x2: 70,
            y2: 40,
            x3: 30
        }
    }),
    e.createMethods.push("_createPrevNextButtons");
    var r = e.prototype;
    return r._createPrevNextButtons = function() {
        this.options.prevNextButtons && (this.prevButton = new o(-1,this),
        this.nextButton = new o(1,this),
        this.on("activate", this.activatePrevNextButtons))
    }
    ,
    r.activatePrevNextButtons = function() {
        this.prevButton.activate(),
        this.nextButton.activate(),
        this.on("deactivate", this.deactivatePrevNextButtons)
    }
    ,
    r.deactivatePrevNextButtons = function() {
        this.prevButton.deactivate(),
        this.nextButton.deactivate(),
        this.off("deactivate", this.deactivatePrevNextButtons)
    }
    ,
    e.PrevNextButton = o,
    e
}),
function(n, o) {
    "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(t, e, i) {
        return o(n, t, e, i)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = o(n, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : o(n, n.Flickity, n.TapListener, n.fizzyUIUtils)
}(window, function(t, e, i, n) {
    function o(t) {
        this.parent = t,
        this._create()
    }
    (o.prototype = new i)._create = function() {
        this.holder = document.createElement("ol"),
        this.holder.className = "flickity-page-dots",
        this.dots = [],
        this.on("tap", this.onTap),
        this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
    }
    ,
    o.prototype.activate = function() {
        this.setDots(),
        this.bindTap(this.holder),
        this.parent.element.appendChild(this.holder)
    }
    ,
    o.prototype.deactivate = function() {
        this.parent.element.removeChild(this.holder),
        i.prototype.destroy.call(this)
    }
    ,
    o.prototype.setDots = function() {
        var t = this.parent.slides.length - this.dots.length;
        0 < t ? this.addDots(t) : t < 0 && this.removeDots(-t)
    }
    ,
    o.prototype.addDots = function(t) {
        for (var e = document.createDocumentFragment(), i = [], n = this.dots.length, o = n + t, s = n; s < o; s++) {
            var r = document.createElement("li");
            r.className = "dot",
            r.setAttribute("aria-label", "Page dot " + (s + 1)),
            e.appendChild(r),
            i.push(r)
        }
        this.holder.appendChild(e),
        this.dots = this.dots.concat(i)
    }
    ,
    o.prototype.removeDots = function(t) {
        this.dots.splice(this.dots.length - t, t).forEach(function(t) {
            this.holder.removeChild(t)
        }, this)
    }
    ,
    o.prototype.updateSelected = function() {
        this.selectedDot && (this.selectedDot.className = "dot",
        this.selectedDot.removeAttribute("aria-current")),
        this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex],
        this.selectedDot.className = "dot is-selected",
        this.selectedDot.setAttribute("aria-current", "step"))
    }
    ,
    o.prototype.onTap = function(t) {
        var e = t.target;
        if ("LI" == e.nodeName) {
            this.parent.uiChange();
            var i = this.dots.indexOf(e);
            this.parent.select(i)
        }
    }
    ,
    o.prototype.destroy = function() {
        this.deactivate()
    }
    ,
    e.PageDots = o,
    n.extend(e.defaults, {
        pageDots: !0
    }),
    e.createMethods.push("_createPageDots");
    var s = e.prototype;
    return s._createPageDots = function() {
        this.options.pageDots && (this.pageDots = new o(this),
        this.on("activate", this.activatePageDots),
        this.on("select", this.updateSelectedPageDots),
        this.on("cellChange", this.updatePageDots),
        this.on("resize", this.updatePageDots),
        this.on("deactivate", this.deactivatePageDots))
    }
    ,
    s.activatePageDots = function() {
        this.pageDots.activate()
    }
    ,
    s.updateSelectedPageDots = function() {
        this.pageDots.updateSelected()
    }
    ,
    s.updatePageDots = function() {
        this.pageDots.setDots()
    }
    ,
    s.deactivatePageDots = function() {
        this.pageDots.deactivate()
    }
    ,
    e.PageDots = o,
    e
}),
function(t, n) {
    "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function(t, e, i) {
        return n(t, e, i)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = n(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : n(t.EvEmitter, t.fizzyUIUtils, t.Flickity)
}(window, function(t, e, i) {
    function n(t) {
        this.parent = t,
        this.state = "stopped",
        this.onVisibilityChange = this.visibilityChange.bind(this),
        this.onVisibilityPlay = this.visibilityPlay.bind(this)
    }
    (n.prototype = Object.create(t.prototype)).play = function() {
        if ("playing" != this.state) {
            if (document.hidden)
                return void document.addEventListener("visibilitychange", this.onVisibilityPlay);
            this.state = "playing",
            document.addEventListener("visibilitychange", this.onVisibilityChange),
            this.tick()
        }
    }
    ,
    n.prototype.tick = function() {
        if ("playing" == this.state) {
            var t = this.parent.options.autoPlay;
            t = "number" == typeof t ? t : 3e3;
            var e = this;
            this.clear(),
            this.timeout = setTimeout(function() {
                e.parent.next(!0),
                e.tick()
            }, t)
        }
    }
    ,
    n.prototype.stop = function() {
        this.state = "stopped",
        this.clear(),
        document.removeEventListener("visibilitychange", this.onVisibilityChange)
    }
    ,
    n.prototype.clear = function() {
        clearTimeout(this.timeout)
    }
    ,
    n.prototype.pause = function() {
        "playing" == this.state && (this.state = "paused",
        this.clear())
    }
    ,
    n.prototype.unpause = function() {
        "paused" == this.state && this.play()
    }
    ,
    n.prototype.visibilityChange = function() {
        this[document.hidden ? "pause" : "unpause"]()
    }
    ,
    n.prototype.visibilityPlay = function() {
        this.play(),
        document.removeEventListener("visibilitychange", this.onVisibilityPlay)
    }
    ,
    e.extend(i.defaults, {
        pauseAutoPlayOnHover: !0
    }),
    i.createMethods.push("_createPlayer");
    var o = i.prototype;
    return o._createPlayer = function() {
        this.player = new n(this),
        this.on("activate", this.activatePlayer),
        this.on("uiChange", this.stopPlayer),
        this.on("pointerDown", this.stopPlayer),
        this.on("deactivate", this.deactivatePlayer)
    }
    ,
    o.activatePlayer = function() {
        this.options.autoPlay && (this.player.play(),
        this.element.addEventListener("mouseenter", this))
    }
    ,
    o.playPlayer = function() {
        this.player.play()
    }
    ,
    o.stopPlayer = function() {
        this.player.stop()
    }
    ,
    o.pausePlayer = function() {
        this.player.pause()
    }
    ,
    o.unpausePlayer = function() {
        this.player.unpause()
    }
    ,
    o.deactivatePlayer = function() {
        this.player.stop(),
        this.element.removeEventListener("mouseenter", this)
    }
    ,
    o.onmouseenter = function() {
        this.options.pauseAutoPlayOnHover && (this.player.pause(),
        this.element.addEventListener("mouseleave", this))
    }
    ,
    o.onmouseleave = function() {
        this.player.unpause(),
        this.element.removeEventListener("mouseleave", this)
    }
    ,
    i.Player = n,
    i
}),
function(i, n) {
    "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function(t, e) {
        return n(i, t, e)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = n(i, require("./flickity"), require("fizzy-ui-utils")) : n(i, i.Flickity, i.fizzyUIUtils)
}(window, function(t, e, n) {
    var i = e.prototype;
    return i.insert = function(t, e) {
        var i, n, o = this._makeCells(t);
        if (o && o.length) {
            var s = this.cells.length;
            e = void 0 === e ? s : e;
            var r = (i = o,
            n = document.createDocumentFragment(),
            i.forEach(function(t) {
                n.appendChild(t.element)
            }),
            n)
              , a = e == s;
            if (a)
                this.slider.appendChild(r);
            else {
                var l = this.cells[e].element;
                this.slider.insertBefore(r, l)
            }
            if (0 === e)
                this.cells = o.concat(this.cells);
            else if (a)
                this.cells = this.cells.concat(o);
            else {
                var c = this.cells.splice(e, s - e);
                this.cells = this.cells.concat(o).concat(c)
            }
            this._sizeCells(o),
            this.cellChange(e, !0)
        }
    }
    ,
    i.append = function(t) {
        this.insert(t, this.cells.length)
    }
    ,
    i.prepend = function(t) {
        this.insert(t, 0)
    }
    ,
    i.remove = function(t) {
        var e = this.getCells(t);
        if (e && e.length) {
            var i = this.cells.length - 1;
            e.forEach(function(t) {
                t.remove();
                var e = this.cells.indexOf(t);
                i = Math.min(e, i),
                n.removeFrom(this.cells, t)
            }, this),
            this.cellChange(i, !0)
        }
    }
    ,
    i.cellSizeChange = function(t) {
        var e = this.getCell(t);
        if (e) {
            e.getSize();
            var i = this.cells.indexOf(e);
            this.cellChange(i)
        }
    }
    ,
    i.cellChange = function(t, e) {
        var i = this.selectedElement;
        this._positionCells(t),
        this._getWrapShiftCells(),
        this.setGallerySize();
        var n = this.getCell(i);
        n && (this.selectedIndex = this.getCellSlideIndex(n)),
        this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex),
        this.emitEvent("cellChange", [t]),
        this.select(this.selectedIndex),
        e && this.positionSliderAtSelected()
    }
    ,
    e
}),
function(i, n) {
    "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function(t, e) {
        return n(i, t, e)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = n(i, require("./flickity"), require("fizzy-ui-utils")) : n(i, i.Flickity, i.fizzyUIUtils)
}(window, function(t, e, s) {
    function o(t, e) {
        this.img = t,
        this.flickity = e,
        this.load()
    }
    e.createMethods.push("_createLazyload");
    var i = e.prototype;
    return i._createLazyload = function() {
        this.on("select", this.lazyLoad)
    }
    ,
    i.lazyLoad = function() {
        var t = this.options.lazyLoad;
        if (t) {
            var e = "number" == typeof t ? t : 0
              , i = this.getAdjacentCellElements(e)
              , n = [];
            i.forEach(function(t) {
                var e = function(t) {
                    if ("IMG" == t.nodeName) {
                        var e = t.getAttribute("data-flickity-lazyload")
                          , i = t.getAttribute("data-flickity-lazyload-src")
                          , n = t.getAttribute("data-flickity-lazyload-srcset");
                        if (e || i || n)
                            return [t]
                    }
                    var o = t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");
                    return s.makeArray(o)
                }(t);
                n = n.concat(e)
            }),
            n.forEach(function(t) {
                new o(t,this)
            }, this)
        }
    }
    ,
    o.prototype.handleEvent = s.handleEvent,
    o.prototype.load = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this);
        var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src")
          , e = this.img.getAttribute("data-flickity-lazyload-srcset");
        this.img.src = t,
        e && this.img.setAttribute("srcset", e),
        this.img.removeAttribute("data-flickity-lazyload"),
        this.img.removeAttribute("data-flickity-lazyload-src"),
        this.img.removeAttribute("data-flickity-lazyload-srcset")
    }
    ,
    o.prototype.onload = function(t) {
        this.complete(t, "flickity-lazyloaded")
    }
    ,
    o.prototype.onerror = function(t) {
        this.complete(t, "flickity-lazyerror")
    }
    ,
    o.prototype.complete = function(t, e) {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this);
        var i = this.flickity.getParentCell(this.img)
          , n = i && i.element;
        this.flickity.cellSizeChange(n),
        this.img.classList.add(e),
        this.flickity.dispatchEvent("lazyLoad", t, n)
    }
    ,
    e.LazyLoader = o,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports && (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")))
}(window, function(t) {
    return t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t.Flickity, t.fizzyUIUtils)
}(window, function(n, o) {
    n.createMethods.push("_createAsNavFor");
    var t = n.prototype;
    return t._createAsNavFor = function() {
        this.on("activate", this.activateAsNavFor),
        this.on("deactivate", this.deactivateAsNavFor),
        this.on("destroy", this.destroyAsNavFor);
        var t = this.options.asNavFor;
        if (t) {
            var e = this;
            setTimeout(function() {
                e.setNavCompanion(t)
            })
        }
    }
    ,
    t.setNavCompanion = function(t) {
        t = o.getQueryElement(t);
        var e = n.data(t);
        if (e && e != this) {
            this.navCompanion = e;
            var i = this;
            this.onNavCompanionSelect = function() {
                i.navCompanionSelect()
            }
            ,
            e.on("select", this.onNavCompanionSelect),
            this.on("staticClick", this.onNavStaticClick),
            this.navCompanionSelect(!0)
        }
    }
    ,
    t.navCompanionSelect = function(t) {
        if (this.navCompanion) {
            var e = this.navCompanion.selectedCells[0]
              , i = this.navCompanion.cells.indexOf(e)
              , n = i + this.navCompanion.selectedCells.length - 1
              , o = Math.floor((r = i,
            a = n,
            l = this.navCompanion.cellAlign,
            (a - r) * l + r));
            if (this.selectCell(o, !1, t),
            this.removeNavSelectedElements(),
            !(o >= this.cells.length)) {
                var s = this.cells.slice(i, n + 1);
                this.navSelectedElements = s.map(function(t) {
                    return t.element
                }),
                this.changeNavSelectedClass("add")
            }
        }
        var r, a, l
    }
    ,
    t.changeNavSelectedClass = function(e) {
        this.navSelectedElements.forEach(function(t) {
            t.classList[e]("is-nav-selected")
        })
    }
    ,
    t.activateAsNavFor = function() {
        this.navCompanionSelect(!0)
    }
    ,
    t.removeNavSelectedElements = function() {
        this.navSelectedElements && (this.changeNavSelectedClass("remove"),
        delete this.navSelectedElements)
    }
    ,
    t.onNavStaticClick = function(t, e, i, n) {
        "number" == typeof n && this.navCompanion.selectCell(n)
    }
    ,
    t.deactivateAsNavFor = function() {
        this.removeNavSelectedElements()
    }
    ,
    t.destroyAsNavFor = function() {
        this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect),
        this.off("staticClick", this.onNavStaticClick),
        delete this.navCompanion)
    }
    ,
    n
}),
function(e, i) {
    "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function(t) {
        return i(e, t)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = i(e, require("ev-emitter")) : e.imagesLoaded = i(e, e.EvEmitter)
}("undefined" != typeof window ? window : void 0, function(e, t) {
    function s(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function r(t, e, i) {
        if (!(this instanceof r))
            return new r(t,e,i);
        var n, o = t;
        return "string" == typeof t && (o = document.querySelectorAll(t)),
        o ? (this.elements = (n = o,
        Array.isArray(n) ? n : "object" == (void 0 === n ? "undefined" : _typeof(n)) && "number" == typeof n.length ? c.call(n) : [n]),
        this.options = s({}, this.options),
        "function" == typeof e ? i = e : s(this.options, e),
        i && this.on("always", i),
        this.getImages(),
        a && (this.jqDeferred = new a.Deferred),
        void setTimeout(this.check.bind(this))) : void l.error("Bad element for imagesLoaded " + (o || t))
    }
    function i(t) {
        this.img = t
    }
    function n(t, e) {
        this.url = t,
        this.element = e,
        this.img = new Image
    }
    var a = e.jQuery
      , l = e.console
      , c = Array.prototype.slice;
    (r.prototype = Object.create(t.prototype)).options = {},
    r.prototype.getImages = function() {
        this.images = [],
        this.elements.forEach(this.addElementImages, this)
    }
    ,
    r.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t),
        !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && u[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var s = t.querySelectorAll(this.options.background);
                for (n = 0; n < s.length; n++) {
                    var r = s[n];
                    this.addElementBackgroundImages(r)
                }
            }
        }
    }
    ;
    var u = {
        1: !0,
        9: !0,
        11: !0
    };
    return r.prototype.addElementBackgroundImages = function(t) {
        var e = getComputedStyle(t);
        if (e)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n; ) {
                var o = n && n[2];
                o && this.addBackground(o, t),
                n = i.exec(e.backgroundImage)
            }
    }
    ,
    r.prototype.addImage = function(t) {
        var e = new i(t);
        this.images.push(e)
    }
    ,
    r.prototype.addBackground = function(t, e) {
        var i = new n(t,e);
        this.images.push(i)
    }
    ,
    r.prototype.check = function() {
        function e(t, e, i) {
            setTimeout(function() {
                n.progress(t, e, i)
            })
        }
        var n = this;
        return this.progressedCount = 0,
        this.hasAnyBroken = !1,
        this.images.length ? void this.images.forEach(function(t) {
            t.once("progress", e),
            t.check()
        }) : void this.complete()
    }
    ,
    r.prototype.progress = function(t, e, i) {
        this.progressedCount++,
        this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded,
        this.emitEvent("progress", [this, t, e]),
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
        this.progressedCount == this.images.length && this.complete(),
        this.options.debug && l && l.log("progress: " + i, t, e)
    }
    ,
    r.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0,
        this.emitEvent(t, [this]),
        this.emitEvent("always", [this]),
        this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }
    ,
    (i.prototype = Object.create(t.prototype)).check = function() {
        return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
        this.proxyImage.addEventListener("load", this),
        this.proxyImage.addEventListener("error", this),
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        void (this.proxyImage.src = this.img.src))
    }
    ,
    i.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }
    ,
    i.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.img, e])
    }
    ,
    i.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    i.prototype.onload = function() {
        this.confirm(!0, "onload"),
        this.unbindEvents()
    }
    ,
    i.prototype.onerror = function() {
        this.confirm(!1, "onerror"),
        this.unbindEvents()
    }
    ,
    i.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this),
        this.proxyImage.removeEventListener("error", this),
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    (n.prototype = Object.create(i.prototype)).check = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.url,
        this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
        this.unbindEvents())
    }
    ,
    n.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    n.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.element, e])
    }
    ,
    r.makeJQueryPlugin = function(t) {
        (t = t || e.jQuery) && ((a = t).fn.imagesLoaded = function(t, e) {
            return new r(this,t,e).jqDeferred.promise(a(this))
        }
        )
    }
    ,
    r.makeJQueryPlugin(),
    r
}),
function(i, n) {
    "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function(t, e) {
        return n(i, t, e)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = n(i, require("flickity"), require("imagesloaded")) : i.Flickity = n(i, i.Flickity, i.imagesLoaded)
}(window, function(t, e, i) {
    e.createMethods.push("_createImagesLoaded");
    var n = e.prototype;
    return n._createImagesLoaded = function() {
        this.on("activate", this.imagesLoaded)
    }
    ,
    n.imagesLoaded = function() {
        if (this.options.imagesLoaded) {
            var n = this;
            i(this.slider).on("progress", function(t, e) {
                var i = n.getParentCell(e.img);
                n.cellSizeChange(i && i.element),
                n.options.freeScroll || n.positionSliderAtSelected()
            })
        }
    }
    ,
    e
});
var _createClass = function() {
    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    return function(t, e, i) {
        return e && n(t.prototype, e),
        i && n(t, i),
        t
    }
}();
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
var Reveal = function() {
    function t() {
        _classCallCheck(this, t),
        this.initVars(),
        this.initEvents(),
        this.onScroll()
    }
    return _createClass(t, [{
        key: "initVars",
        value: function() {
            this.isMobile = document.documentElement.clientWidth < 768,
            this.isBasicScroll = document.querySelector(".basicScroll") && !this.isMobile,
            this.isBasicScroll ? this.scrollContainer = document.querySelector(".basicScroll") : this.scrollContainer = window,
            this.revealCollection = document.querySelectorAll(".reveal"),
            this.lastScrollY = 0,
            this.ticking = !1,
            this.offsetMultipler = .85,
            this.offsetMultiplerMobile = 1,
            this.onScrollRef = this.onScroll.bind(this)
        }
    }, {
        key: "initEvents",
        value: function() {
            this.scrollContainer.addEventListener("scroll", this.onScrollRef, !1)
        }
    }, {
        key: "stopEvents",
        value: function() {
            this.scrollContainer.removeEventListener("scroll", this.onScrollRef, !1)
        }
    }, {
        key: "onScroll",
        value: function() {
            this.isBasicScroll ? this.lastScrollY = this.scrollContainer.pageYOffset || this.scrollContainer.scrollTop : this.lastScrollY = this.scrollContainer.pageYOffset,
            this.requestTick(this)
        }
    }, {
        key: "requestTick",
        value: function(t) {
            t.ticking || (requestAnimationFrame(t.update.bind(t)),
            t.ticking = !0)
        }
    }, {
        key: "update",
        value: function() {
            var t = document.documentElement.clientWidth < 768
              , e = this.offsetMultipler;
            if (t)
                this.offsetMultiplerMobile;
            for (var i = null, n = [], o = window.innerHeight * e, s = 0; s < this.revealCollection.length; s++)
                i = this.revealCollection[s],
                n[s] = i.offsetTop,
                this.lastScrollY > n[s] - o && i.classList.add("reveal-show");
            this.ticking = !1
        }
    }]),
    t
}();
function _toConsumableArray(t) {
    if (Array.isArray(t)) {
        for (var e = 0, i = Array(t.length); e < t.length; e++)
            i[e] = t[e];
        return i
    }
    return Array.from(t)
}
"function" != typeof Object.assign && (Object.assign = function(t) {
    if (null == t)
        throw new TypeError("Cannot convert undefined or null to object");
    t = Object(t);
    for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        if (null != i)
            for (var n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
    }
    return t
}
),
window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(t, e) {
    e = e || window;
    for (var i = 0; i < (void 0).length; i++)
        t.call(e, (void 0)[i], i, void 0)
}
);
var documentBody = document.body
  , isMobile = document.documentElement.clientWidth < 768
  , home = void 0
  , work = void 0
  , journal = void 0
  , journalPost = void 0
  , reveal = void 0
  , namespace = void 0;
function initPage() {
    documentBody.classList.contains("home-page") || documentBody.classList.contains("work-page") ? documentBody.classList.remove("loading") : setTimeout(function() {
        documentBody.classList.remove("loading")
    }, 500);
    for (var t = document.querySelectorAll("[data-script-src]"), l = 0, e = t.length; l < e; l++) {
        var i = t[l]
          , n = i.getAttribute("data-script-src")
          , o = document.createElement("script");
        o.src = n,
        i.appendChild(o)
    }
    document.querySelectorAll(".reveal").length && (reveal = new Reveal);
    var c = document.querySelectorAll(".module-gallery .gallery")
      , s = function() {
        var t = c[l]
          , n = c[l].parentElement
          , e = n.querySelector(".btn-gallery-left")
          , i = n.querySelector(".btn-gallery-right")
          , o = n.querySelector(".current")
          , s = n.querySelector(".total")
          , r = new Flickity(t,{
            adaptiveHeight: !0,
            imagesLoaded: !0,
            autoPlay: !1,
            wrapAround: !0
        })
          , a = r.selectedCell.element;
        a.hasAttribute("autoplay") && a.play(),
        o.innerHTML = r.selectedIndex + 1,
        s.innerHTML = r.slides.length,
        e.addEventListener("click", function(t) {
            r.previous(),
            o.innerHTML = r.selectedIndex + 1
        }),
        i.addEventListener("click", function(t) {
            r.next(),
            o.innerHTML = r.selectedIndex + 1
        }),
        r.on("change", function(t) {
            o.innerHTML = r.selectedIndex + 1;
            var e = [].concat(_toConsumableArray(n.getElementsByTagName("video")))
              , i = n.querySelector("video.is-selected");
            e.forEach(function(t) {
                t.pause()
            }),
            i && i.play()
        })
    };
    for (l = 0,
    e = c.length; l < e; l++)
        s();
    var r = document.querySelector("body.home-page-js");
    null !== r && (home = new Home(r));
    var a = document.querySelector("body.work-page-js");
    null !== a && (work = new Work(a));
    var u = document.querySelector("body.journal-page-js");
    null !== u && (journal = new Journal(u));
    var d = document.querySelector("body.journal-post-page-js");
    null !== d && (journalPost = new JournalPost(d))
}
function stopPage() {
    null != reveal && (reveal.stopEvents(),
    reveal = null),
    null != home && (home.stopEvents(),
    home = null),
    null != work && (work.stopEvents(),
    work = null),
    null != journal && (journal.stopEvents(),
    journal = null),
    null != journalPost && (journalPost.stopEvents(),
    journalPost = null)
}
window.addEventListener("load", function(e) {
    var _this = void 0
      , ui = document.querySelector(".ui")
      , uiInfo = document.querySelector(".ui .info")
      , colorMode = document.querySelector(".color-mode")
      , nightMode = document.querySelector(".color-mode .night-mode")
      , lightMode = document.querySelector(".color-mode .light-mode")
      , ultraMode = document.querySelector(".color-mode .ultra-mode")
      , mobileNav = document.querySelector(".mobile-nav")
      , navAbout = document.querySelector(".about-li button.link")
      , aboutBack = document.querySelector(".about .btn-back")
      , aboutContainer = document.querySelector(".about .container")
      , prevPage = void 0
      , nextPage = void 0
      , barbaSelectedLink = void 0
      , barbaContainer = document.querySelector(".barba-container")
      , colorModeSelection = "default";
    setTimeout(function() {
        documentBody.classList.contains("night-mode") && (colorModeSelection = "night-mode")
    }, 1050),
    namespace = barbaContainer.getAttribute("data-namespace"),
    isMobile && documentBody.classList.add("isMobile"),
    Barba.Dispatcher.on("linkClicked", function(t, e) {
        prevPage = Barba.HistoryManager.currentStatus().namespace,
        nextPage = t.getAttribute("data-barba"),
        barbaSelectedLink = t,
        documentBody.classList.contains("uiHover") && documentBody.classList.remove("uiHover"),
        documentBody.classList.contains("home-page") || documentBody.classList.contains("navTop") || documentBody.classList.add("navTop"),
        "HomeTransition" == nextPage && t.closest(".projectsLi").classList.add("isSelected")
    }),
    Barba.Dispatcher.on("newPageReady", function() {
        window.ga && "localhost" != document.location.hostname && gtag("config", "UA-120921934-1", {
            page_path: location.pathname
        })
    }),
    isMobile || (ui.addEventListener("mouseenter", function(t) {
        documentBody.classList.contains("journal-post-page") && ui.classList.contains("bottom") ? documentBody.classList.add("uiHover") : documentBody.classList.contains("journal-post-page") || documentBody.classList.contains("uiHover") || ui.classList.contains("outline") || documentBody.classList.add("uiHover")
    }),
    ui.addEventListener("mouseleave", function(t) {
        documentBody.classList.contains("uiHover") && documentBody.classList.remove("uiHover")
    })),
    nightMode.addEventListener("click", function(t) {
        var e = t.target.getAttribute("class");
        documentBody.classList.contains(e) || ("default" == colorModeSelection ? documentBody.classList.remove("ultra-mode") : documentBody.classList.remove(colorModeSelection),
        documentBody.classList.add("easter-egg"),
        documentBody.classList.add(e)),
        colorModeSelection = e
    }),
    nightMode.addEventListener("mouseenter", function(t) {
        colorMode.classList.add("night")
    }),
    nightMode.addEventListener("mouseleave", function(t) {
        colorMode.classList.remove("night")
    }),
    lightMode.addEventListener("click", function(t) {
        var e = t.target.getAttribute("class");
        documentBody.classList.contains(e) || ("default" == colorModeSelection ? documentBody.classList.remove("ultra-mode") : documentBody.classList.remove(colorModeSelection),
        documentBody.classList.add("easter-egg"),
        documentBody.classList.add(e)),
        colorModeSelection = e
    }),
    lightMode.addEventListener("mouseenter", function(t) {
        colorMode.classList.add("light")
    }),
    lightMode.addEventListener("mouseleave", function(t) {
        colorMode.classList.remove("light")
    }),
    ultraMode.addEventListener("click", function(t) {
        var e = t.target.getAttribute("class");
        documentBody.classList.contains(e) || (documentBody.classList.remove(colorModeSelection),
        documentBody.classList.add("easter-egg"),
        documentBody.classList.add(e)),
        colorModeSelection = e
    }),
    ultraMode.addEventListener("mouseenter", function(t) {
        colorMode.classList.add("ultra")
    }),
    ultraMode.addEventListener("mouseleave", function(t) {
        colorMode.classList.remove("ultra")
    }),
    mobileNav.addEventListener("click", function(t) {
        t.stopPropagation(),
        t.preventDefault(),
        documentBody.classList.toggle("mobileNavOpen"),
        documentBody.classList.remove("uiHover")
    }),
    navAbout.addEventListener("click", function(t) {
        t.stopPropagation(),
        t.preventDefault(),
        isMobile && documentBody.classList.remove("mobileNavOpen"),
        aboutContainer.scrollTop = 0,
        documentBody.classList.add("navTop"),
        documentBody.classList.add("aboutShow")
    }),
    aboutBack.addEventListener("click", function(t) {
        t.stopPropagation(),
        t.preventDefault(),
        (documentBody.classList.contains("home-page") || documentBody.classList.contains("work-page") && ui.classList.contains("bottom") || !documentBody.classList.contains("journal-page") && ui.classList.contains("bottom")) && documentBody.classList.remove("navTop"),
        documentBody.classList.remove("aboutShow"),
        isMobile && documentBody.classList.add("mobileNavOpen")
    }),
    isMobile || (document.onkeydown = function(t) {
        t = t || window.event,
        documentBody.classList.contains("aboutShow") && 27 == t.keyCode && ((documentBody.classList.contains("home-page") || documentBody.classList.contains("work-page") && ui.classList.contains("bottom") || !documentBody.classList.contains("journal-page") && ui.classList.contains("bottom")) && documentBody.classList.remove("navTop"),
        documentBody.classList.remove("aboutShow"))
    }
    );
    var FadeOutTransition = Barba.BaseTransition.extend({
        start: function() {
            Promise.all([this.newContainerLoading, this.outro()]).then(this.finish.bind(this))
        },
        outro: function() {
            var e = Barba.Utils.deferred();
            return documentBody.classList.add("loading"),
            documentBody.classList.contains("aboutShow") && documentBody.classList.remove("aboutShow"),
            documentBody.classList.contains("mobileNavOpen") && documentBody.classList.remove("mobileNavOpen"),
            ui.classList.contains("outline") && ui.classList.remove("outline"),
            ui.classList.contains("bottom") && ui.classList.remove("bottom"),
            setTimeout(function(t) {
                e.resolve()
            }, 1e3),
            e.promise
        },
        finish: function() {
            window.scrollTo(0, 0),
            this.done()
        }
    })
      , HomeTransition = Barba.BaseTransition.extend({
        start: function() {
            Promise.all([this.newContainerLoading, this.outro()]).then(this.finish.bind(this))
        },
        outro: function() {
            var e = Barba.Utils.deferred();
            return documentBody.classList.add("overflowHidden"),
            documentBody.classList.contains("aboutShow") && documentBody.classList.remove("aboutShow"),
            documentBody.classList.contains("mobileNavOpen") && documentBody.classList.remove("mobileNavOpen"),
            ui.classList.contains("outline") && ui.classList.remove("outline"),
            ui.classList.contains("bottom") && ui.classList.remove("bottom"),
            setTimeout(function(t) {
                documentBody.classList.add("outro")
            }, 250),
            setTimeout(function(t) {
                "default" == colorModeSelection && documentBody.classList.remove("ultra-mode")
            }, 1500),
            setTimeout(function(t) {
                documentBody.classList.add("loading"),
                documentBody.classList.remove("overflowHidden"),
                e.resolve()
            }, 2e3),
            e.promise
        },
        finish: function() {
            documentBody.classList.remove("outro"),
            window.scrollTo(0, 0),
            this.done()
        }
    });
    Barba.Pjax.getTransition = function() {
        return null != nextPage ? eval(nextPage) : FadeOutTransition
    }
    ;
    var Homepage = Barba.BaseView.extend({
        namespace: "home-page",
        onEnter: function() {
            documentBody.classList.add("home-page")
        },
        onEnterCompleted: function() {
            "default" != colorModeSelection || documentBody.classList.contains("ultra-mode") || documentBody.classList.add("ultra-mode"),
            documentBody.classList.add("home-page-js"),
            initPage(),
            setTimeout(function() {
                documentBody.classList.contains("navTop") && documentBody.classList.remove("navTop")
            }, 250)
        },
        onLeave: function() {
            stopPage(),
            documentBody.classList.remove("home-page-js")
        },
        onLeaveCompleted: function() {
            documentBody.classList.remove("home-page"),
            documentBody.classList.add("navTop"),
            documentBody.classList.remove("outro"),
            "default" == colorModeSelection && documentBody.classList.remove("ultra-mode")
        }
    });
    Homepage.init();
    var Workpage = Barba.BaseView.extend({
        namespace: "work-page",
        onEnter: function() {
            documentBody.classList.add("work-page")
        },
        onEnterCompleted: function() {
            documentBody.classList.add("work-page-js"),
            initPage()
        },
        onLeave: function() {
            documentBody.classList.contains("first-load") && documentBody.classList.remove("first-load"),
            stopPage(),
            documentBody.classList.remove("work-page-js"),
            !documentBody.classList.contains("easter-egg") && documentBody.classList.contains("night-mode") && (colorModeSelection = "default")
        },
        onLeaveCompleted: function() {
            documentBody.classList.contains("night-mode") && null == documentBody.querySelector(".hero.dark") && "night-mode" != colorModeSelection && documentBody.classList.remove("night-mode"),
            documentBody.classList.contains("work-page-js") || documentBody.classList.remove("work-page")
        }
    });
    Workpage.init();
    var Journalpage = Barba.BaseView.extend({
        namespace: "journal-page",
        onEnter: function() {
            documentBody.classList.add("journal-page")
        },
        onEnterCompleted: function() {
            documentBody.classList.add("journal-page-js"),
            initPage(),
            setTimeout(function() {
                documentBody.classList.contains("journal-page") || documentBody.classList.add("journal-page")
            }, 500)
        },
        onLeave: function() {
            stopPage(),
            documentBody.classList.remove("journal-page-js")
        },
        onLeaveCompleted: function() {
            documentBody.classList.remove("journal-page")
        }
    });
    Journalpage.init();
    var JournalPostpage = Barba.BaseView.extend({
        namespace: "journal-post-page",
        onEnter: function() {
            documentBody.classList.add("journal-post-page")
        },
        onEnterCompleted: function() {
            documentBody.classList.add("journal-post-page-js"),
            initPage(),
            setTimeout(function() {
                documentBody.classList.contains("journal-post-page") || documentBody.classList.add("journal-post-page"),
                !documentBody.classList.contains("easter-egg") && document.querySelector(".barba-container.dark") && "default" == colorModeSelection && (colorModeSelection = "night-mode",
                documentBody.classList.add(colorModeSelection))
            }, 500)
        },
        onLeave: function() {
            stopPage(),
            documentBody.classList.remove("journal-post-page-js"),
            !documentBody.classList.contains("easter-egg") && documentBody.classList.contains("night-mode") && (colorModeSelection = "default")
        },
        onLeaveCompleted: function() {
            !documentBody.classList.contains("easter-egg") && documentBody.classList.contains("night-mode") && documentBody.classList.remove("night-mode"),
            documentBody.classList.remove("journal-post-page")
        }
    });
    JournalPostpage.init(),
    Barba.Pjax.start()
});
var _createClass = function() {
    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    return function(t, e, i) {
        return e && n(t.prototype, e),
        i && n(t, i),
        t
    }
}();
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
var Home = function() {
    function e(t) {
        _classCallCheck(this, e),
        this.initVars(t),
        this.initEvents(),
        this.initHome()
    }
    return _createClass(e, [{
        key: "initVars",
        value: function(t) {
            this.documentBody = document.body,
            this.stagePerspective = document.querySelector(".stagePerspective"),
            this.stageContainer = document.querySelector(".stageContainer"),
            this.stage = document.querySelector(".stage"),
            this.projectsLi = document.querySelectorAll(".projects li"),
            this.projectsLiA = document.querySelectorAll(".projects li a"),
            this.isMobile = document.documentElement.clientWidth < 768,
            this.isSafari = !1,
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !this.isMobile && (this.isSafari = !0,
            this.documentBody.classList.add("safari")),
            this.scrollHeight = 0,
            this.scrollOffset = 0,
            this.scrollPercent = 0,
            this.stagePosition = this.scrollPercent,
            this.modifier = 0,
            this.resizeRef = this.resize.bind(this),
            this.scrollRef = this.scroll.bind(this),
            this.projectsLiClickRef = this.projectsLiClick.bind(this),
            this.projectsLiMouseOverRef = this.projectsLiMouseOver.bind(this),
            this.projectsLiMouseOutRef = this.projectsLiMouseOut.bind(this),
            this.projectsLiAClickRef = this.projectsLiAClick.bind(this)
        }
    }, {
        key: "initEvents",
        value: function() {
            var e = this;
            this.isMobile || setTimeout(function(t) {
                window.addEventListener("resize", e.resizeRef, !1),
                e.stagePerspective.addEventListener("scroll", e.scrollRef, !1)
            }, 3e3),
            this.projectsLi.forEach(function(t) {
                t.addEventListener("click", e.projectsLiClickRef, !1),
                t.addEventListener("mouseover", e.projectsLiMouseOverRef, !1),
                t.addEventListener("mouseout", e.projectsLiMouseOutRef, !1)
            }),
            this.projectsLiA.forEach(function(t) {
                t.addEventListener("click", e.projectsLiAClickRef, !1)
            })
        }
    }, {
        key: "stopEvents",
        value: function() {
            var e = this;
            window.removeEventListener("resize", e.resizeRef, !1),
            this.stagePerspective.removeEventListener("scroll", e.scrollRef, !1),
            this.projectsLi.forEach(function(t) {
                t.removeEventListener("click", e.projectsLiClickRef, !1),
                t.removeEventListener("mouseover", e.projectsLiMouseOverRef, !1),
                t.removeEventListener("mouseout", e.projectsLiMouseOutRef, !1)
            }),
            this.projectsLiA.forEach(function(t) {
                t.removeEventListener("click", e.projectsLiAClickRef, !1)
            })
        }
    }, {
        key: "initHome",
        value: function() {
            var t = this;
            this.documentBody.classList.add("intro"),
            setTimeout(function() {
                t.stageContainer.style.opacity = 1
            }, 300),
            this.isMobile || (this.resize(),
            this.loop()),
            setTimeout(function() {
                t.documentBody.classList.remove("intro")
            }, 2900),
            this.isMobile && document.querySelectorAll(".perspective-origin-tt-bb").forEach(function(t) {
                basicScroll.create({
                    elem: t,
                    from: "top-top",
                    to: "bottom-bottom",
                    direct: !0,
                    props: {
                        "perspective-origin-y": {
                            from: "25%",
                            to: "85%"
                        },
                        "--perspective-origin-y": {
                            from: "25%",
                            to: "85%"
                        }
                    }
                }).start()
            })
        }
    }, {
        key: "resize",
        value: function() {
            this.isSafari || (this.modifier = .075 * this.documentBody.scrollWidth + 158),
            this.scrollHeight = this.stage.offsetHeight - this.modifier,
            this.stageContainer.style.height = this.scrollHeight + "px"
        }
    }, {
        key: "loop",
        value: function() {
            this.stagePosition = this.lerp(this.stagePosition, this.scrollPercent, .05),
            this.stagePosition = Math.floor(1e4 * this.stagePosition) / 1e4;
            var t = "translate3d( 0, " + this.stagePosition + "px, 0)";
            this.stage.style.mozTransform = t,
            this.stage.style.webkitTransform = t,
            this.stage.style.transform = t,
            this.loopRef = this.loop.bind(this),
            requestAnimationFrame(this.loopRef)
        }
    }, {
        key: "lerp",
        value: function(t, e, i) {
            return (1 - i) * t + i * e
        }
    }, {
        key: "scroll",
        value: function() {
            document.documentElement.clientWidth;
            this.scrollOffset = this.stagePerspective.pageYOffset || this.stagePerspective.scrollTop,
            this.scrollPercent = this.scrollOffset / (this.scrollHeight - this.documentBody.offsetHeight) || 0,
            this.scrollPercent *= -.075 * this.documentBody.scrollWidth - 158
        }
    }, {
        key: "projectsLiClick",
        value: function(t) {
            t.stopPropagation(),
            t.preventDefault();
            var e = t.target
              , i = e.querySelector("a")
              , n = i.getAttribute("href");
            e.classList.add("isSelected"),
            Barba.Dispatcher.trigger("linkClicked", i, t),
            Barba.Pjax.goTo(n)
        }
    }, {
        key: "projectsLiMouseOver",
        value: function(t) {
            var e = document.querySelectorAll(".isHovered")
              , i = document.querySelector(".projects");
            e.forEach(function(t, e) {
                t.classList.remove("isHovered")
            }),
            t.target.classList.add("isHovered"),
            i.classList.add("isHovering")
        }
    }, {
        key: "projectsLiMouseOut",
        value: function(t) {
            var e = document.querySelectorAll(".isHovered")
              , i = document.querySelector(".projects");
            e.forEach(function(t, e) {
                t.classList.remove("isHovered")
            }),
            i.classList.remove("isHovering")
        }
    }, {
        key: "projectsLiAClick",
        value: function(t) {
            t.stopPropagation(),
            t.preventDefault();
            var e = t.target.getAttribute("href");
            t.target.closest(".projectsLi").classList.add("isSelected"),
            Barba.Dispatcher.trigger("linkClicked", t.target, t),
            Barba.Pjax.goTo(e)
        }
    }]),
    e
}()
  , _createClass = function() {
    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    return function(t, e, i) {
        return e && n(t.prototype, e),
        i && n(t, i),
        t
    }
}();
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
var JournalPost = function() {
    function e(t) {
        _classCallCheck(this, e),
        this.initVars(t),
        this.initEvents(),
        this.initJournalPost()
    }
    return _createClass(e, [{
        key: "initVars",
        value: function(t) {
            this.documentBody = document.body,
            this.ui = document.querySelector(".ui"),
            this.post = document.querySelector(".post"),
            this.postContainer = document.querySelector(".post .container"),
            this.postContent = document.querySelector(".post .content"),
            this.firstRun = !0,
            this.isMobile = document.documentElement.clientWidth < 768,
            this.isSafari = !1,
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !this.isMobile && (this.isSafari = !0,
            this.documentBody.classList.add("safari")),
            this.scrollHeight = 0,
            this.scrollOffset = 0,
            this.scrollPercent = 0,
            this.contentPosition = this.scrollPercent,
            this.resizeRef = this.resize.bind(this),
            this.scrollRef = this.scroll.bind(this)
        }
    }, {
        key: "initEvents",
        value: function() {
            this.isMobile || (window.addEventListener("resize", this.resizeRef, !1),
            this.post.addEventListener("scroll", this.scrollRef, !1))
        }
    }, {
        key: "stopEvents",
        value: function() {
            this.isMobile || (window.removeEventListener("resize", this.resizeRef, !1),
            this.post.removeEventListener("scroll", this.scrollRef, !1))
        }
    }, {
        key: "initJournalPost",
        value: function() {
            this.isMobile || (this.resize(),
            this.loop()),
            document.querySelectorAll(".parallax-vertical-mm-bt").forEach(function(t) {
                var e = t.getAttribute("data-from")
                  , i = t.getAttribute("data-to")
                  , n = t.getAttribute("data-timing");
                basicScroll.create({
                    elem: t,
                    from: "middle-middle",
                    to: "bottom-top",
                    direct: !0,
                    props: {
                        "transform-y": {
                            from: e,
                            to: i,
                            timing: n
                        },
                        "--transform-y": {
                            from: e,
                            to: i,
                            timing: n
                        }
                    }
                }).start()
            }),
            document.querySelectorAll(".parallax-vertical-tb-bt").forEach(function(t) {
                var e = t.getAttribute("data-from")
                  , i = t.getAttribute("data-to")
                  , n = t.getAttribute("data-timing");
                basicScroll.create({
                    elem: t,
                    from: "top-bottom",
                    to: "bottom-top",
                    direct: !0,
                    props: {
                        "transform-y": {
                            from: e,
                            to: i,
                            timing: n
                        },
                        "--transform-y": {
                            from: e,
                            to: i,
                            timing: n
                        }
                    }
                }).start()
            })
        }
    }, {
        key: "resize",
        value: function() {
            this.scrollHeight = this.postContent.offsetHeight,
            this.postContainer.style.height = this.scrollHeight + "px"
        }
    }, {
        key: "loop",
        value: function() {
            this.contentPosition = this.lerp(this.contentPosition, this.scrollPercent, .05),
            this.contentPosition = Math.floor(1e4 * this.contentPosition) / 1e4;
            var t = "translate3d( 0, " + this.contentPosition + "px, 0)";
            this.postContent.style.mozTransform = t,
            this.postContent.style.webkitTransform = t,
            this.postContent.style.transform = t,
            this.loopRef = this.loop.bind(this),
            requestAnimationFrame(this.loopRef)
        }
    }, {
        key: "lerp",
        value: function(t, e, i) {
            return (1 - i) * t + i * e
        }
    }, {
        key: "scroll",
        value: function() {
            this.firstRun && (this.firstRun = !1,
            this.resize());
            document.documentElement.clientWidth;
            this.scrollOffset = this.post.pageYOffset || this.post.scrollTop,
            this.scrollPercent = this.scrollOffset / (this.scrollHeight - this.documentBody.offsetHeight) || 0,
            this.isMobile || (.07 < this.scrollPercent && !this.ui.classList.contains("outline") ? this.ui.classList.add("outline") : this.scrollPercent <= .07 && this.ui.classList.contains("outline") ? this.ui.classList.remove("outline") : 1 == this.scrollPercent && this.ui.classList.contains("outline") && this.ui.classList.remove("outline"),
            1 != this.scrollPercent || this.ui.classList.contains("bottom") ? 1 != this.scrollPercent && this.ui.classList.contains("bottom") && (this.ui.classList.remove("bottom"),
            this.documentBody.classList.add("navTop")) : (this.ui.classList.add("bottom"),
            this.documentBody.classList.remove("navTop"))),
            this.scrollPercent *= -.075 * this.documentBody.scrollWidth
        }
    }]),
    e
}()
  , _createClass = function() {
    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    return function(t, e, i) {
        return e && n(t.prototype, e),
        i && n(t, i),
        t
    }
}();
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
var Journal = function() {
    function e(t) {
        _classCallCheck(this, e),
        this.initVars(t),
        this.initEvents(),
        this.initJournal()
    }
    return _createClass(e, [{
        key: "initVars",
        value: function(t) {
            this.documentBody = document.body,
            this.ui = document.querySelector(".ui"),
            this.journal = document.querySelector(".journal"),
            this.journalContainer = document.querySelector(".journal .container"),
            this.journalContent = document.querySelector(".journal .content"),
            this.isMobile = document.documentElement.clientWidth < 768,
            this.isSafari = !1,
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !this.isMobile && (this.isSafari = !0,
            this.documentBody.classList.add("safari")),
            this.scrollHeight = 0,
            this.scrollOffset = 0,
            this.scrollPercent = 0,
            this.contentPosition = this.scrollPercent,
            this.resizeRef = this.resize.bind(this),
            this.scrollRef = this.scroll.bind(this)
        }
    }, {
        key: "initEvents",
        value: function() {
            this.isMobile || (window.addEventListener("resize", this.resizeRef, !1),
            this.journal.addEventListener("scroll", this.scrollRef, !1))
        }
    }, {
        key: "stopEvents",
        value: function() {
            this.isMobile || (window.removeEventListener("resize", this.resizeRef, !1),
            this.journal.removeEventListener("scroll", this.scrollRef, !1))
        }
    }, {
        key: "initJournal",
        value: function() {
            this.isMobile || (this.resize(),
            this.loop()),
            document.querySelectorAll(".parallax-horizontal-tb-bt").forEach(function(t) {
                var e = t.getAttribute("data-from")
                  , i = t.getAttribute("data-to")
                  , n = t.getAttribute("data-timing");
                basicScroll.create({
                    elem: t,
                    from: "top-bottom",
                    to: "bottom-top",
                    direct: !0,
                    props: {
                        "transform-x": {
                            from: e,
                            to: i,
                            timing: n
                        },
                        "--transform-x": {
                            from: e,
                            to: i,
                            timing: n
                        }
                    }
                }).start()
            })
        }
    }, {
        key: "resize",
        value: function() {
            this.scrollHeight = this.journalContent.offsetHeight,
            this.journalContainer.style.height = this.scrollHeight + "px"
        }
    }, {
        key: "loop",
        value: function() {
            this.contentPosition = this.lerp(this.contentPosition, this.scrollPercent, .05),
            this.contentPosition = Math.floor(1e4 * this.contentPosition) / 1e4;
            var t = "translate3d( 0, " + this.contentPosition + "px, 0)";
            this.journalContent.style.mozTransform = t,
            this.journalContent.style.webkitTransform = t,
            this.journalContent.style.transform = t,
            this.loopRef = this.loop.bind(this),
            requestAnimationFrame(this.loopRef)
        }
    }, {
        key: "lerp",
        value: function(t, e, i) {
            return (1 - i) * t + i * e
        }
    }, {
        key: "scroll",
        value: function() {
            document.documentElement.clientWidth;
            this.scrollOffset = this.journal.pageYOffset || this.journal.scrollTop,
            this.scrollPercent = this.scrollOffset / (this.scrollHeight - this.documentBody.offsetHeight) || 0,
            this.isMobile || (.07 < this.scrollPercent && !this.ui.classList.contains("outline") ? this.ui.classList.add("outline") : this.scrollPercent <= .07 && this.ui.classList.contains("outline") ? this.ui.classList.remove("outline") : 1 == this.scrollPercent && this.ui.classList.contains("outline") && this.ui.classList.remove("outline"),
            1 != this.scrollPercent || this.ui.classList.contains("bottom") ? 1 != this.scrollPercent && this.ui.classList.contains("bottom") && this.ui.classList.remove("bottom") : this.ui.classList.add("bottom")),
            this.scrollPercent *= -.075 * this.documentBody.scrollWidth
        }
    }]),
    e
}()
  , _createClass = function() {
    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    return function(t, e, i) {
        return e && n(t.prototype, e),
        i && n(t, i),
        t
    }
}();
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
var Work = function() {
    function e(t) {
        _classCallCheck(this, e),
        this.initVars(t),
        this.initEvents(),
        this.initWork()
    }
    return _createClass(e, [{
        key: "initVars",
        value: function(t) {
            this.documentBody = document.body,
            this.ui = document.querySelector(".ui"),
            this.caseStudy = document.querySelector(".case-study"),
            this.caseStudyContainer = document.querySelector(".case-study .container"),
            this.caseStudyContent = document.querySelector(".case-study .content"),
            this.firstRun = !0,
            this.isMobile = document.documentElement.clientWidth < 768,
            this.isSafari = !1,
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !this.isMobile && (this.isSafari = !0,
            this.documentBody.classList.add("safari")),
            this.nightMode = null != documentBody.querySelector(".hero.dark"),
            this.scrollHeight = 0,
            this.scrollOffset = 0,
            this.scrollPercent = 0,
            this.contentPosition = this.scrollPercent,
            this.resizeRef = this.resize.bind(this),
            this.scrollRef = this.scroll.bind(this)
        }
    }, {
        key: "initEvents",
        value: function() {
            this.isMobile || (window.addEventListener("resize", this.resizeRef, !1),
            this.caseStudy.addEventListener("scroll", this.scrollRef, !1))
        }
    }, {
        key: "stopEvents",
        value: function() {
            this.isMobile || (window.removeEventListener("resize", this.resizeRef, !1),
            this.caseStudy.removeEventListener("scroll", this.scrollRef, !1))
        }
    }, {
        key: "initWork",
        value: function() {
            this.isMobile || (this.resize(),
            this.loop()),
            this.nightMode && !documentBody.classList.contains("easter-egg") && setTimeout(function() {
                documentBody.classList.add("night-mode")
            }, 1e3),
            document.querySelectorAll(".parallax-vertical-mm-bt").forEach(function(t) {
                var e = t.getAttribute("data-from")
                  , i = t.getAttribute("data-to")
                  , n = t.getAttribute("data-timing");
                basicScroll.create({
                    elem: t,
                    from: "middle-middle",
                    to: "bottom-top",
                    direct: !0,
                    props: {
                        "transform-y": {
                            from: e,
                            to: i,
                            timing: n
                        },
                        "--transform-y": {
                            from: e,
                            to: i,
                            timing: n
                        }
                    }
                }).start()
            }),
            document.querySelectorAll(".parallax-vertical-tb-bt").forEach(function(t) {
                var e = t.getAttribute("data-from")
                  , i = t.getAttribute("data-to")
                  , n = t.getAttribute("data-timing");
                basicScroll.create({
                    elem: t,
                    from: "top-bottom",
                    to: "bottom-top",
                    direct: !0,
                    props: {
                        "transform-y": {
                            from: e,
                            to: i,
                            timing: n
                        },
                        "--transform-y": {
                            from: e,
                            to: i,
                            timing: n
                        }
                    }
                }).start()
            })
        }
    }, {
        key: "resize",
        value: function() {
            this.scrollHeight = this.caseStudyContent.offsetHeight,
            this.caseStudyContainer.style.height = this.scrollHeight + "px"
        }
    }, {
        key: "loop",
        value: function() {
            this.contentPosition = this.lerp(this.contentPosition, this.scrollPercent, .05),
            this.contentPosition = Math.floor(1e4 * this.contentPosition) / 1e4;
            var t = "translate3d( 0, " + this.contentPosition + "px, 0)";
            this.caseStudyContent.style.mozTransform = t,
            this.caseStudyContent.style.webkitTransform = t,
            this.caseStudyContent.style.transform = t,
            this.loopRef = this.loop.bind(this),
            requestAnimationFrame(this.loopRef)
        }
    }, {
        key: "lerp",
        value: function(t, e, i) {
            return (1 - i) * t + i * e
        }
    }, {
        key: "scroll",
        value: function() {
            this.firstRun && (this.firstRun = !1,
            this.resize());
            document.documentElement.clientWidth;
            this.scrollOffset = this.caseStudy.pageYOffset || this.caseStudy.scrollTop,
            this.scrollPercent = this.scrollOffset / (this.scrollHeight - this.documentBody.offsetHeight) || 0,
            this.isMobile || (.07 < this.scrollPercent && this.scrollPercent < 1 && !this.ui.classList.contains("outline") ? this.ui.classList.add("outline") : this.scrollPercent <= .07 && this.ui.classList.contains("outline") ? this.ui.classList.remove("outline") : 1 <= this.scrollPercent && this.ui.classList.contains("outline") && this.ui.classList.remove("outline"),
            1 != this.scrollPercent || this.ui.classList.contains("bottom") ? 1 != this.scrollPercent && this.ui.classList.contains("bottom") && (this.ui.classList.remove("bottom"),
            this.documentBody.classList.add("navTop")) : (this.ui.classList.add("bottom"),
            this.documentBody.classList.remove("navTop"))),
            this.scrollPercent *= -.075 * this.documentBody.scrollWidth
        }
    }]),
    e
}();