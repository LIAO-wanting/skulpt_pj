parcelRequire = function(e, r, t, n) {
    var i, o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && "string" == typeof t) return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw c.code = "MODULE_NOT_FOUND",
                c
            }
            p.resolve = function(r) {
                return e[t][1][r] || r
            },
            p.cache = {};
            var l = r[t] = new f.Module(t);
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports;
        function p(e) {
            return f(p.resolve(e))
        }
    }
    f.isParcelRequire = !0,
    f.Module = function(e) {
        this.id = e,
        this.bundle = f,
        this.exports = {}
    },
    f.modules = e,
    f.cache = r,
    f.parent = o,
    f.register = function(r, t) {
        e[r] = [function(e, r) {
            r.exports = t
        },
        {}]
    };
    for (var c = 0; c < t.length; c++) try {
        f(t[c])
    } catch(e) {
        i || (i = e)
    }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l: "function" == typeof define && define.amd ? define(function() {
            return l
        }) : n && (this[n] = l)
    }
    if (parcelRequire = f, i) throw i;
    return f
} ({
    "mG0D": [function(require, module, exports) {
        var define;
        var e; !
        function(t, n) {
            "object" == typeof exports && "object" == typeof module ? module.exports = n(function() {
                try {
                    return require("poly-decomp")
                } catch(e) {}
            } ()) : "function" == typeof e && e.amd ? e("Matter", ["poly-decomp"], n) : "object" == typeof exports ? exports.Matter = n(function() {
                try {
                    return require("poly-decomp")
                } catch(e) {}
            } ()) : t.Matter = n(t.decomp)
        } (this,
        function(e) {
            return function(e) {
                var t = {};
                function n(i) {
                    if (t[i]) return t[i].exports;
                    var o = t[i] = {
                        i: i,
                        l: !1,
                        exports: {}
                    };
                    return e[i].call(o.exports, o, o.exports, n),
                    o.l = !0,
                    o.exports
                }
                return n.m = e,
                n.c = t,
                n.d = function(e, t, i) {
                    n.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: i
                    })
                },
                n.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                },
                n.t = function(e, t) {
                    if (1 & t && (e = n(e)), 8 & t) return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var i = Object.create(null);
                    if (n.r(i), Object.defineProperty(i, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t && "string" != typeof e) for (var o in e) n.d(i, o,
                    function(t) {
                        return e[t]
                    }.bind(null, o));
                    return i
                },
                n.n = function(e) {
                    var t = e && e.__esModule ?
                    function() {
                        return e.
                    default
                    }:
                    function() {
                        return e
                    };
                    return n.d(t, "a", t),
                    t
                },
                n.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                },
                n.p = "",
                n(n.s = 24)
            } ([function(e, t) {
                var n = {};
                e.exports = n,
                function() {
                    n._nextId = 0,
                    n._seed = 0,
                    n._nowStartTime = +new Date,
                    n.extend = function(e, t) {
                        var i, o;
                        "boolean" == typeof t ? (i = 2, o = t) : (i = 1, o = !0);
                        for (var r = i; r < arguments.length; r++) {
                            var s = arguments[r];
                            if (s) for (var a in s) o && s[a] && s[a].constructor === Object ? e[a] && e[a].constructor !== Object ? e[a] = s[a] : (e[a] = e[a] || {},
                            n.extend(e[a], o, s[a])) : e[a] = s[a]
                        }
                        return e
                    },
                    n.clone = function(e, t) {
                        return n.extend({},
                        t, e)
                    },
                    n.keys = function(e) {
                        if (Object.keys) return Object.keys(e);
                        var t = [];
                        for (var n in e) t.push(n);
                        return t
                    },
                    n.values = function(e) {
                        var t = [];
                        if (Object.keys) {
                            for (var n = Object.keys(e), i = 0; i < n.length; i++) t.push(e[n[i]]);
                            return t
                        }
                        for (var o in e) t.push(e[o]);
                        return t
                    },
                    n.get = function(e, t, n, i) {
                        t = t.split(".").slice(n, i);
                        for (var o = 0; o < t.length; o += 1) e = e[t[o]];
                        return e
                    },
                    n.set = function(e, t, i, o, r) {
                        var s = t.split(".").slice(o, r);
                        return n.get(e, t, 0, -1)[s[s.length - 1]] = i,
                        i
                    },
                    n.shuffle = function(e) {
                        for (var t = e.length - 1; t > 0; t--) {
                            var i = Math.floor(n.random() * (t + 1)),
                            o = e[t];
                            e[t] = e[i],
                            e[i] = o
                        }
                        return e
                    },
                    n.choose = function(e) {
                        return e[Math.floor(n.random() * e.length)]
                    },
                    n.isElement = function(e) {
                        return "undefined" != typeof HTMLElement ? e instanceof HTMLElement: !!(e && e.nodeType && e.nodeName)
                    },
                    n.isArray = function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    n.isFunction = function(e) {
                        return "function" == typeof e
                    },
                    n.isPlainObject = function(e) {
                        return "object" == typeof e && e.constructor === Object
                    },
                    n.isString = function(e) {
                        return "[object String]" === toString.call(e)
                    },
                    n.clamp = function(e, t, n) {
                        return e < t ? t: e > n ? n: e
                    },
                    n.sign = function(e) {
                        return e < 0 ? -1 : 1
                    },
                    n.now = function() {
                        if ("undefined" != typeof window && window.performance) {
                            if (window.performance.now) return window.performance.now();
                            if (window.performance.webkitNow) return window.performance.webkitNow()
                        }
                        return new Date - n._nowStartTime
                    },
                    n.random = function(t, n) {
                        return n = void 0 !== n ? n: 1,
                        (t = void 0 !== t ? t: 0) + e() * (n - t)
                    };
                    var e = function() {
                        return n._seed = (9301 * n._seed + 49297) % 233280,
                        n._seed / 233280
                    };
                    n.colorToNumber = function(e) {
                        return 3 == (e = e.replace("#", "")).length && (e = e.charAt(0) + e.charAt(0) + e.charAt(1) + e.charAt(1) + e.charAt(2) + e.charAt(2)),
                        parseInt(e, 16)
                    },
                    n.logLevel = 1,
                    n.log = function() {
                        console && n.logLevel > 0 && n.logLevel <= 3 && console.log.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                    },
                    n.info = function() {
                        console && n.logLevel > 0 && n.logLevel <= 2 && console.info.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                    },
                    n.warn = function() {
                        console && n.logLevel > 0 && n.logLevel <= 3 && console.warn.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                    },
                    n.nextId = function() {
                        return n._nextId++
                    },
                    n.indexOf = function(e, t) {
                        if (e.indexOf) return e.indexOf(t);
                        for (var n = 0; n < e.length; n++) if (e[n] === t) return n;
                        return - 1
                    },
                    n.map = function(e, t) {
                        if (e.map) return e.map(t);
                        for (var n = [], i = 0; i < e.length; i += 1) n.push(t(e[i]));
                        return n
                    },
                    n.topologicalSort = function(e) {
                        var t = [],
                        i = [],
                        o = [];
                        for (var r in e) i[r] || o[r] || n._topologicalSort(r, i, o, e, t);
                        return t
                    },
                    n._topologicalSort = function(e, t, i, o, r) {
                        var s = o[e] || [];
                        i[e] = !0;
                        for (var a = 0; a < s.length; a += 1) {
                            var l = s[a];
                            i[l] || (t[l] || n._topologicalSort(l, t, i, o, r))
                        }
                        i[e] = !1,
                        t[e] = !0,
                        r.push(e)
                    },
                    n.chain = function() {
                        for (var e = [], t = 0; t < arguments.length; t += 1) {
                            var n = arguments[t];
                            n._chained ? e.push.apply(e, n._chained) : e.push(n)
                        }
                        var i = function() {
                            for (var t, n = new Array(arguments.length), i = 0, o = arguments.length; i < o; i++) n[i] = arguments[i];
                            for (i = 0; i < e.length; i += 1) {
                                var r = e[i].apply(t, n);
                                void 0 !== r && (t = r)
                            }
                            return t
                        };
                        return i._chained = e,
                        i
                    },
                    n.chainPathBefore = function(e, t, i) {
                        return n.set(e, t, n.chain(i, n.get(e, t)))
                    },
                    n.chainPathAfter = function(e, t, i) {
                        return n.set(e, t, n.chain(n.get(e, t), i))
                    }
                } ()
            },
            function(e, t) {
                var n = {};
                e.exports = n,
                n.create = function(e) {
                    var t = {
                        min: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: 0,
                            y: 0
                        }
                    };
                    return e && n.update(t, e),
                    t
                },
                n.update = function(e, t, n) {
                    e.min.x = 1 / 0,
                    e.max.x = -1 / 0,
                    e.min.y = 1 / 0,
                    e.max.y = -1 / 0;
                    for (var i = 0; i < t.length; i++) {
                        var o = t[i];
                        o.x > e.max.x && (e.max.x = o.x),
                        o.x < e.min.x && (e.min.x = o.x),
                        o.y > e.max.y && (e.max.y = o.y),
                        o.y < e.min.y && (e.min.y = o.y)
                    }
                    n && (n.x > 0 ? e.max.x += n.x: e.min.x += n.x, n.y > 0 ? e.max.y += n.y: e.min.y += n.y)
                },
                n.contains = function(e, t) {
                    return t.x >= e.min.x && t.x <= e.max.x && t.y >= e.min.y && t.y <= e.max.y
                },
                n.overlaps = function(e, t) {
                    return e.min.x <= t.max.x && e.max.x >= t.min.x && e.max.y >= t.min.y && e.min.y <= t.max.y
                },
                n.translate = function(e, t) {
                    e.min.x += t.x,
                    e.max.x += t.x,
                    e.min.y += t.y,
                    e.max.y += t.y
                },
                n.shift = function(e, t) {
                    var n = e.max.x - e.min.x,
                    i = e.max.y - e.min.y;
                    e.min.x = t.x,
                    e.max.x = t.x + n,
                    e.min.y = t.y,
                    e.max.y = t.y + i
                }
            },
            function(e, t) {
                var n = {};
                e.exports = n,
                n.create = function(e, t) {
                    return {
                        x: e || 0,
                        y: t || 0
                    }
                },
                n.clone = function(e) {
                    return {
                        x: e.x,
                        y: e.y
                    }
                },
                n.magnitude = function(e) {
                    return Math.sqrt(e.x * e.x + e.y * e.y)
                },
                n.magnitudeSquared = function(e) {
                    return e.x * e.x + e.y * e.y
                },
                n.rotate = function(e, t, n) {
                    var i = Math.cos(t),
                    o = Math.sin(t);
                    n || (n = {});
                    var r = e.x * i - e.y * o;
                    return n.y = e.x * o + e.y * i,
                    n.x = r,
                    n
                },
                n.rotateAbout = function(e, t, n, i) {
                    var o = Math.cos(t),
                    r = Math.sin(t);
                    i || (i = {});
                    var s = n.x + ((e.x - n.x) * o - (e.y - n.y) * r);
                    return i.y = n.y + ((e.x - n.x) * r + (e.y - n.y) * o),
                    i.x = s,
                    i
                },
                n.normalise = function(e) {
                    var t = n.magnitude(e);
                    return 0 === t ? {
                        x: 0,
                        y: 0
                    }: {
                        x: e.x / t,
                        y: e.y / t
                    }
                },
                n.dot = function(e, t) {
                    return e.x * t.x + e.y * t.y
                },
                n.cross = function(e, t) {
                    return e.x * t.y - e.y * t.x
                },
                n.cross3 = function(e, t, n) {
                    return (t.x - e.x) * (n.y - e.y) - (t.y - e.y) * (n.x - e.x)
                },
                n.add = function(e, t, n) {
                    return n || (n = {}),
                    n.x = e.x + t.x,
                    n.y = e.y + t.y,
                    n
                },
                n.sub = function(e, t, n) {
                    return n || (n = {}),
                    n.x = e.x - t.x,
                    n.y = e.y - t.y,
                    n
                },
                n.mult = function(e, t) {
                    return {
                        x: e.x * t,
                        y: e.y * t
                    }
                },
                n.div = function(e, t) {
                    return {
                        x: e.x / t,
                        y: e.y / t
                    }
                },
                n.perp = function(e, t) {
                    return {
                        x: (t = !0 === t ? -1 : 1) * -e.y,
                        y: t * e.x
                    }
                },
                n.neg = function(e) {
                    return {
                        x: -e.x,
                        y: -e.y
                    }
                },
                n.angle = function(e, t) {
                    return Math.atan2(t.y - e.y, t.x - e.x)
                },
                n._temp = [n.create(), n.create(), n.create(), n.create(), n.create(), n.create()]
            },
            function(e, t, n) {
                var i = {};
                e.exports = i;
                var o = n(2),
                r = n(0);
                i.create = function(e, t) {
                    for (var n = [], i = 0; i < e.length; i++) {
                        var o = e[i],
                        r = {
                            x: o.x,
                            y: o.y,
                            index: i,
                            body: t,
                            isInternal: !1
                        };
                        n.push(r)
                    }
                    return n
                },
                i.fromPath = function(e, t) {
                    var n = [];
                    return e.replace(/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi,
                    function(e, t, i) {
                        n.push({
                            x: parseFloat(t),
                            y: parseFloat(i)
                        })
                    }),
                    i.create(n, t)
                },
                i.centre = function(e) {
                    for (var t, n, r, s = i.area(e, !0), a = {
                        x: 0,
                        y: 0
                    },
                    l = 0; l < e.length; l++) r = (l + 1) % e.length,
                    t = o.cross(e[l], e[r]),
                    n = o.mult(o.add(e[l], e[r]), t),
                    a = o.add(a, n);
                    return o.div(a, 6 * s)
                },
                i.mean = function(e) {
                    for (var t = {
                        x: 0,
                        y: 0
                    },
                    n = 0; n < e.length; n++) t.x += e[n].x,
                    t.y += e[n].y;
                    return o.div(t, e.length)
                },
                i.area = function(e, t) {
                    for (var n = 0,
                    i = e.length - 1,
                    o = 0; o < e.length; o++) n += (e[i].x - e[o].x) * (e[i].y + e[o].y),
                    i = o;
                    return t ? n / 2 : Math.abs(n) / 2
                },
                i.inertia = function(e, t) {
                    for (var n, i, r = 0,
                    s = 0,
                    a = e,
                    l = 0; l < a.length; l++) i = (l + 1) % a.length,
                    r += (n = Math.abs(o.cross(a[i], a[l]))) * (o.dot(a[i], a[i]) + o.dot(a[i], a[l]) + o.dot(a[l], a[l])),
                    s += n;
                    return t / 6 * (r / s)
                },
                i.translate = function(e, t, n) {
                    var i;
                    if (n) for (i = 0; i < e.length; i++) e[i].x += t.x * n,
                    e[i].y += t.y * n;
                    else for (i = 0; i < e.length; i++) e[i].x += t.x,
                    e[i].y += t.y;
                    return e
                },
                i.rotate = function(e, t, n) {
                    if (0 !== t) {
                        for (var i = Math.cos(t), o = Math.sin(t), r = 0; r < e.length; r++) {
                            var s = e[r],
                            a = s.x - n.x,
                            l = s.y - n.y;
                            s.x = n.x + (a * i - l * o),
                            s.y = n.y + (a * o + l * i)
                        }
                        return e
                    }
                },
                i.contains = function(e, t) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n],
                        o = e[(n + 1) % e.length];
                        if ((t.x - i.x) * (o.y - i.y) + (t.y - i.y) * (i.x - o.x) > 0) return ! 1
                    }
                    return ! 0
                },
                i.scale = function(e, t, n, r) {
                    if (1 === t && 1 === n) return e;
                    var s, a;
                    r = r || i.centre(e);
                    for (var l = 0; l < e.length; l++) s = e[l],
                    a = o.sub(s, r),
                    e[l].x = r.x + a.x * t,
                    e[l].y = r.y + a.y * n;
                    return e
                },
                i.chamfer = function(e, t, n, i, s) {
                    t = "number" == typeof t ? [t] : t || [8],
                    n = void 0 !== n ? n: -1,
                    i = i || 2,
                    s = s || 14;
                    for (var a = [], l = 0; l < e.length; l++) {
                        var c = e[l - 1 >= 0 ? l - 1 : e.length - 1],
                        d = e[l],
                        u = e[(l + 1) % e.length],
                        p = t[l < t.length ? l: t.length - 1];
                        if (0 !== p) {
                            var f = o.normalise({
                                x: d.y - c.y,
                                y: c.x - d.x
                            }),
                            v = o.normalise({
                                x: u.y - d.y,
                                y: d.x - u.x
                            }),
                            m = Math.sqrt(2 * Math.pow(p, 2)),
                            y = o.mult(r.clone(f), p),
                            g = o.normalise(o.mult(o.add(f, v), .5)),
                            x = o.sub(d, o.mult(g, m)),
                            h = n; - 1 === n && (h = 1.75 * Math.pow(p, .32)),
                            (h = r.clamp(h, i, s)) % 2 == 1 && (h += 1);
                            for (var b = Math.acos(o.dot(f, v)) / h, w = 0; w < h; w++) a.push(o.add(o.rotate(y, b * w), x))
                        } else a.push(d)
                    }
                    return a
                },
                i.clockwiseSort = function(e) {
                    var t = i.mean(e);
                    return e.sort(function(e, n) {
                        return o.angle(t, e) - o.angle(t, n)
                    }),
                    e
                },
                i.isConvex = function(e) {
                    var t, n, i, o, r = 0,
                    s = e.length;
                    if (s < 3) return null;
                    for (t = 0; t < s; t++) if (i = (t + 2) % s, o = (e[n = (t + 1) % s].x - e[t].x) * (e[i].y - e[n].y), (o -= (e[n].y - e[t].y) * (e[i].x - e[n].x)) < 0 ? r |= 1 : o > 0 && (r |= 2), 3 === r) return ! 1;
                    return 0 !== r || null
                },
                i.hull = function(e) {
                    var t, n, i = [],
                    r = [];
                    for ((e = e.slice(0)).sort(function(e, t) {
                        var n = e.x - t.x;
                        return 0 !== n ? n: e.y - t.y
                    }), n = 0; n < e.length; n += 1) {
                        for (t = e[n]; r.length >= 2 && o.cross3(r[r.length - 2], r[r.length - 1], t) <= 0;) r.pop();
                        r.push(t)
                    }
                    for (n = e.length - 1; n >= 0; n -= 1) {
                        for (t = e[n]; i.length >= 2 && o.cross3(i[i.length - 2], i[i.length - 1], t) <= 0;) i.pop();
                        i.push(t)
                    }
                    return i.pop(),
                    r.pop(),
                    i.concat(r)
                }
            },
            function(e, t, n) {
                var i = {};
                e.exports = i;
                var o = n(0);
                i.on = function(e, t, n) {
                    for (var i, o = t.split(" "), r = 0; r < o.length; r++) i = o[r],
                    e.events = e.events || {},
                    e.events[i] = e.events[i] || [],
                    e.events[i].push(n);
                    return n
                },
                i.off = function(e, t, n) {
                    if (t) {
                        "function" == typeof t && (n = t, t = o.keys(e.events).join(" "));
                        for (var i = t.split(" "), r = 0; r < i.length; r++) {
                            var s = e.events[i[r]],
                            a = [];
                            if (n && s) for (var l = 0; l < s.length; l++) s[l] !== n && a.push(s[l]);
                            e.events[i[r]] = a
                        }
                    } else e.events = {}
                },
                i.trigger = function(e, t, n) {
                    var i, r, s, a, l = e.events;
                    if (l && o.keys(l).length > 0) {
                        n || (n = {}),
                        i = t.split(" ");
                        for (var c = 0; c < i.length; c++) if (s = l[r = i[c]]) { (a = o.clone(n, !1)).name = r,
                            a.source = e;
                            for (var d = 0; d < s.length; d++) s[d].apply(e, [a])
                        }
                    }
                }
            },
            function(e, t, n) {
                var i = {};
                e.exports = i;
                var o = n(4),
                r = n(0),
                s = n(1),
                a = n(6);
                i.create = function(e) {
                    return r.extend({
                        id: r.nextId(),
                        type: "composite",
                        parent: null,
                        isModified: !1,
                        bodies: [],
                        constraints: [],
                        composites: [],
                        label: "Composite",
                        plugin: {}
                    },
                    e)
                },
                i.setModified = function(e, t, n, o) {
                    if (e.isModified = t, n && e.parent && i.setModified(e.parent, t, n, o), o) for (var r = 0; r < e.composites.length; r++) {
                        var s = e.composites[r];
                        i.setModified(s, t, n, o)
                    }
                },
                i.add = function(e, t) {
                    var n = [].concat(t);
                    o.trigger(e, "beforeAdd", {
                        object: t
                    });
                    for (var s = 0; s < n.length; s++) {
                        var a = n[s];
                        switch (a.type) {
                        case "body":
                            if (a.parent !== a) {
                                r.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");
                                break
                            }
                            i.addBody(e, a);
                            break;
                        case "constraint":
                            i.addConstraint(e, a);
                            break;
                        case "composite":
                            i.addComposite(e, a);
                            break;
                        case "mouseConstraint":
                            i.addConstraint(e, a.constraint)
                        }
                    }
                    return o.trigger(e, "afterAdd", {
                        object: t
                    }),
                    e
                },
                i.remove = function(e, t, n) {
                    var r = [].concat(t);
                    o.trigger(e, "beforeRemove", {
                        object: t
                    });
                    for (var s = 0; s < r.length; s++) {
                        var a = r[s];
                        switch (a.type) {
                        case "body":
                            i.removeBody(e, a, n);
                            break;
                        case "constraint":
                            i.removeConstraint(e, a, n);
                            break;
                        case "composite":
                            i.removeComposite(e, a, n);
                            break;
                        case "mouseConstraint":
                            i.removeConstraint(e, a.constraint)
                        }
                    }
                    return o.trigger(e, "afterRemove", {
                        object: t
                    }),
                    e
                },
                i.addComposite = function(e, t) {
                    return e.composites.push(t),
                    t.parent = e,
                    i.setModified(e, !0, !0, !1),
                    e
                },
                i.removeComposite = function(e, t, n) {
                    var o = r.indexOf(e.composites, t);
                    if ( - 1 !== o && (i.removeCompositeAt(e, o), i.setModified(e, !0, !0, !1)), n) for (var s = 0; s < e.composites.length; s++) i.removeComposite(e.composites[s], t, !0);
                    return e
                },
                i.removeCompositeAt = function(e, t) {
                    return e.composites.splice(t, 1),
                    i.setModified(e, !0, !0, !1),
                    e
                },
                i.addBody = function(e, t) {
                    return e.bodies.push(t),
                    i.setModified(e, !0, !0, !1),
                    e
                },
                i.removeBody = function(e, t, n) {
                    var o = r.indexOf(e.bodies, t);
                    if ( - 1 !== o && (i.removeBodyAt(e, o), i.setModified(e, !0, !0, !1)), n) for (var s = 0; s < e.composites.length; s++) i.removeBody(e.composites[s], t, !0);
                    return e
                },
                i.removeBodyAt = function(e, t) {
                    return e.bodies.splice(t, 1),
                    i.setModified(e, !0, !0, !1),
                    e
                },
                i.addConstraint = function(e, t) {
                    return e.constraints.push(t),
                    i.setModified(e, !0, !0, !1),
                    e
                },
                i.removeConstraint = function(e, t, n) {
                    var o = r.indexOf(e.constraints, t);
                    if ( - 1 !== o && i.removeConstraintAt(e, o), n) for (var s = 0; s < e.composites.length; s++) i.removeConstraint(e.composites[s], t, !0);
                    return e
                },
                i.removeConstraintAt = function(e, t) {
                    return e.constraints.splice(t, 1),
                    i.setModified(e, !0, !0, !1),
                    e
                },
                i.clear = function(e, t, n) {
                    if (n) for (var o = 0; o < e.composites.length; o++) i.clear(e.composites[o], t, !0);
                    return t ? e.bodies = e.bodies.filter(function(e) {
                        return e.isStatic
                    }) : e.bodies.length = 0,
                    e.constraints.length = 0,
                    e.composites.length = 0,
                    i.setModified(e, !0, !0, !1),
                    e
                },
                i.allBodies = function(e) {
                    for (var t = [].concat(e.bodies), n = 0; n < e.composites.length; n++) t = t.concat(i.allBodies(e.composites[n]));
                    return t
                },
                i.allConstraints = function(e) {
                    for (var t = [].concat(e.constraints), n = 0; n < e.composites.length; n++) t = t.concat(i.allConstraints(e.composites[n]));
                    return t
                },
                i.allComposites = function(e) {
                    for (var t = [].concat(e.composites), n = 0; n < e.composites.length; n++) t = t.concat(i.allComposites(e.composites[n]));
                    return t
                },
                i.get = function(e, t, n) {
                    var o, r;
                    switch (n) {
                    case "body":
                        o = i.allBodies(e);
                        break;
                    case "constraint":
                        o = i.allConstraints(e);
                        break;
                    case "composite":
                        o = i.allComposites(e).concat(e)
                    }
                    return o ? 0 === (r = o.filter(function(e) {
                        return e.id.toString() === t.toString()
                    })).length ? null: r[0] : null
                },
                i.move = function(e, t, n) {
                    return i.remove(e, t),
                    i.add(n, t),
                    e
                },
                i.rebase = function(e) {
                    for (var t = i.allBodies(e).concat(i.allConstraints(e)).concat(i.allComposites(e)), n = 0; n < t.length; n++) t[n].id = r.nextId();
                    return i.setModified(e, !0, !0, !1),
                    e
                },
                i.translate = function(e, t, n) {
                    for (var o = n ? i.allBodies(e) : e.bodies, r = 0; r < o.length; r++) a.translate(o[r], t);
                    return i.setModified(e, !0, !0, !1),
                    e
                },
                i.rotate = function(e, t, n, o) {
                    for (var r = Math.cos(t), s = Math.sin(t), l = o ? i.allBodies(e) : e.bodies, c = 0; c < l.length; c++) {
                        var d = l[c],
                        u = d.position.x - n.x,
                        p = d.position.y - n.y;
                        a.setPosition(d, {
                            x: n.x + (u * r - p * s),
                            y: n.y + (u * s + p * r)
                        }),
                        a.rotate(d, t)
                    }
                    return i.setModified(e, !0, !0, !1),
                    e
                },
                i.scale = function(e, t, n, o, r) {
                    for (var s = r ? i.allBodies(e) : e.bodies, l = 0; l < s.length; l++) {
                        var c = s[l],
                        d = c.position.x - o.x,
                        u = c.position.y - o.y;
                        a.setPosition(c, {
                            x: o.x + d * t,
                            y: o.y + u * n
                        }),
                        a.scale(c, t, n)
                    }
                    return i.setModified(e, !0, !0, !1),
                    e
                },
                i.bounds = function(e) {
                    for (var t = i.allBodies(e), n = [], o = 0; o < t.length; o += 1) {
                        var r = t[o];
                        n.push(r.bounds.min, r.bounds.max)
                    }
                    return s.create(n)
                }
            },
            function(e, t, n) {
                var i = {};
                e.exports = i;
                var o = n(3),
                r = n(2),
                s = n(7),
                a = (n(10), n(0)),
                l = n(1),
                c = n(15); !
                function() {
                    i._inertiaScale = 4,
                    i._nextCollidingGroupId = 1,
                    i._nextNonCollidingGroupId = -1,
                    i._nextCategory = 1,
                    i.create = function(t) {
                        var n = {
                            id: a.nextId(),
                            type: "body",
                            label: "Body",
                            parts: [],
                            plugin: {},
                            angle: 0,
                            vertices: o.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                            position: {
                                x: 0,
                                y: 0
                            },
                            force: {
                                x: 0,
                                y: 0
                            },
                            torque: 0,
                            positionImpulse: {
                                x: 0,
                                y: 0
                            },
                            constraintImpulse: {
                                x: 0,
                                y: 0,
                                angle: 0
                            },
                            totalContacts: 0,
                            speed: 0,
                            angularSpeed: 0,
                            velocity: {
                                x: 0,
                                y: 0
                            },
                            angularVelocity: 0,
                            isSensor: !1,
                            isStatic: !1,
                            isSleeping: !1,
                            motion: 0,
                            sleepThreshold: 60,
                            density: .001,
                            restitution: 0,
                            friction: .1,
                            frictionStatic: .5,
                            frictionAir: .01,
                            collisionFilter: {
                                category: 1,
                                mask: 4294967295,
                                group: 0
                            },
                            slop: .05,
                            timeScale: 1,
                            render: {
                                visible: !0,
                                opacity: 1,
                                strokeStyle: null,
                                fillStyle: null,
                                lineWidth: null,
                                sprite: {
                                    xScale: 1,
                                    yScale: 1,
                                    xOffset: 0,
                                    yOffset: 0
                                }
                            },
                            events: null,
                            bounds: null,
                            chamfer: null,
                            circleRadius: 0,
                            positionPrev: null,
                            anglePrev: 0,
                            parent: null,
                            axes: null,
                            area: 0,
                            mass: 0,
                            inertia: 0,
                            _original: null
                        },
                        i = a.extend(n, t);
                        return e(i, t),
                        i
                    },
                    i.nextGroup = function(e) {
                        return e ? i._nextNonCollidingGroupId--:i._nextCollidingGroupId++
                    },
                    i.nextCategory = function() {
                        return i._nextCategory = i._nextCategory << 1,
                        i._nextCategory
                    };
                    var e = function(e, t) {
                        t = t || {},
                        i.set(e, {
                            bounds: e.bounds || l.create(e.vertices),
                            positionPrev: e.positionPrev || r.clone(e.position),
                            anglePrev: e.anglePrev || e.angle,
                            vertices: e.vertices,
                            parts: e.parts || [e],
                            isStatic: e.isStatic,
                            isSleeping: e.isSleeping,
                            parent: e.parent || e
                        }),
                        o.rotate(e.vertices, e.angle, e.position),
                        c.rotate(e.axes, e.angle),
                        l.update(e.bounds, e.vertices, e.velocity),
                        i.set(e, {
                            axes: t.axes || e.axes,
                            area: t.area || e.area,
                            mass: t.mass || e.mass,
                            inertia: t.inertia || e.inertia
                        });
                        var n = e.isStatic ? "#14151f": a.choose(["#f19648", "#f5d259", "#f55a3c", "#063e7b", "#ececd1"]),
                        s = e.isStatic ? "#555": "#ccc",
                        d = e.isStatic && null === e.render.fillStyle ? 1 : 0;
                        e.render.fillStyle = e.render.fillStyle || n,
                        e.render.strokeStyle = e.render.strokeStyle || s,
                        e.render.lineWidth = e.render.lineWidth || d,
                        e.render.sprite.xOffset += -(e.bounds.min.x - e.position.x) / (e.bounds.max.x - e.bounds.min.x),
                        e.render.sprite.yOffset += -(e.bounds.min.y - e.position.y) / (e.bounds.max.y - e.bounds.min.y)
                    };
                    i.set = function(e, t, n) {
                        var o;
                        for (o in "string" == typeof t && (o = t, (t = {})[o] = n), t) if (Object.prototype.hasOwnProperty.call(t, o)) switch (n = t[o], o) {
                        case "isStatic":
                            i.setStatic(e, n);
                            break;
                        case "isSleeping":
                            s.set(e, n);
                            break;
                        case "mass":
                            i.setMass(e, n);
                            break;
                        case "density":
                            i.setDensity(e, n);
                            break;
                        case "inertia":
                            i.setInertia(e, n);
                            break;
                        case "vertices":
                            i.setVertices(e, n);
                            break;
                        case "position":
                            i.setPosition(e, n);
                            break;
                        case "angle":
                            i.setAngle(e, n);
                            break;
                        case "velocity":
                            i.setVelocity(e, n);
                            break;
                        case "angularVelocity":
                            i.setAngularVelocity(e, n);
                            break;
                        case "parts":
                            i.setParts(e, n);
                            break;
                        case "centre":
                            i.setCentre(e, n);
                            break;
                        default:
                            e[o] = n
                        }
                    },
                    i.setStatic = function(e, t) {
                        for (var n = 0; n < e.parts.length; n++) {
                            var i = e.parts[n];
                            i.isStatic = t,
                            t ? (i._original = {
                                restitution: i.restitution,
                                friction: i.friction,
                                mass: i.mass,
                                inertia: i.inertia,
                                density: i.density,
                                inverseMass: i.inverseMass,
                                inverseInertia: i.inverseInertia
                            },
                            i.restitution = 0, i.friction = 1, i.mass = i.inertia = i.density = 1 / 0, i.inverseMass = i.inverseInertia = 0, i.positionPrev.x = i.position.x, i.positionPrev.y = i.position.y, i.anglePrev = i.angle, i.angularVelocity = 0, i.speed = 0, i.angularSpeed = 0, i.motion = 0) : i._original && (i.restitution = i._original.restitution, i.friction = i._original.friction, i.mass = i._original.mass, i.inertia = i._original.inertia, i.density = i._original.density, i.inverseMass = i._original.inverseMass, i.inverseInertia = i._original.inverseInertia, i._original = null)
                        }
                    },
                    i.setMass = function(e, t) {
                        var n = e.inertia / (e.mass / 6);
                        e.inertia = n * (t / 6),
                        e.inverseInertia = 1 / e.inertia,
                        e.mass = t,
                        e.inverseMass = 1 / e.mass,
                        e.density = e.mass / e.area
                    },
                    i.setDensity = function(e, t) {
                        i.setMass(e, t * e.area),
                        e.density = t
                    },
                    i.setInertia = function(e, t) {
                        e.inertia = t,
                        e.inverseInertia = 1 / e.inertia
                    },
                    i.setVertices = function(e, t) {
                        t[0].body === e ? e.vertices = t: e.vertices = o.create(t, e),
                        e.axes = c.fromVertices(e.vertices),
                        e.area = o.area(e.vertices),
                        i.setMass(e, e.density * e.area);
                        var n = o.centre(e.vertices);
                        o.translate(e.vertices, n, -1),
                        i.setInertia(e, i._inertiaScale * o.inertia(e.vertices, e.mass)),
                        o.translate(e.vertices, e.position),
                        l.update(e.bounds, e.vertices, e.velocity)
                    },
                    i.setParts = function(e, t, n) {
                        var r;
                        for (t = t.slice(0), e.parts.length = 0, e.parts.push(e), e.parent = e, r = 0; r < t.length; r++) {
                            var s = t[r];
                            s !== e && (s.parent = e, e.parts.push(s))
                        }
                        if (1 !== e.parts.length) {
                            if (n = void 0 === n || n) {
                                var a = [];
                                for (r = 0; r < t.length; r++) a = a.concat(t[r].vertices);
                                o.clockwiseSort(a);
                                var l = o.hull(a),
                                c = o.centre(l);
                                i.setVertices(e, l),
                                o.translate(e.vertices, c)
                            }
                            var d = i._totalProperties(e);
                            e.area = d.area,
                            e.parent = e,
                            e.position.x = d.centre.x,
                            e.position.y = d.centre.y,
                            e.positionPrev.x = d.centre.x,
                            e.positionPrev.y = d.centre.y,
                            i.setMass(e, d.mass),
                            i.setInertia(e, d.inertia),
                            i.setPosition(e, d.centre)
                        }
                    },
                    i.setCentre = function(e, t, n) {
                        n ? (e.positionPrev.x += t.x, e.positionPrev.y += t.y, e.position.x += t.x, e.position.y += t.y) : (e.positionPrev.x = t.x - (e.position.x - e.positionPrev.x), e.positionPrev.y = t.y - (e.position.y - e.positionPrev.y), e.position.x = t.x, e.position.y = t.y)
                    },
                    i.setPosition = function(e, t) {
                        var n = r.sub(t, e.position);
                        e.positionPrev.x += n.x,
                        e.positionPrev.y += n.y;
                        for (var i = 0; i < e.parts.length; i++) {
                            var s = e.parts[i];
                            s.position.x += n.x,
                            s.position.y += n.y,
                            o.translate(s.vertices, n),
                            l.update(s.bounds, s.vertices, e.velocity)
                        }
                    },
                    i.setAngle = function(e, t) {
                        var n = t - e.angle;
                        e.anglePrev += n;
                        for (var i = 0; i < e.parts.length; i++) {
                            var s = e.parts[i];
                            s.angle += n,
                            o.rotate(s.vertices, n, e.position),
                            c.rotate(s.axes, n),
                            l.update(s.bounds, s.vertices, e.velocity),
                            i > 0 && r.rotateAbout(s.position, n, e.position, s.position)
                        }
                    },
                    i.setVelocity = function(e, t) {
                        e.positionPrev.x = e.position.x - t.x,
                        e.positionPrev.y = e.position.y - t.y,
                        e.velocity.x = t.x,
                        e.velocity.y = t.y,
                        e.speed = r.magnitude(e.velocity)
                    },
                    i.setAngularVelocity = function(e, t) {
                        e.anglePrev = e.angle - t,
                        e.angularVelocity = t,
                        e.angularSpeed = Math.abs(e.angularVelocity)
                    },
                    i.translate = function(e, t) {
                        i.setPosition(e, r.add(e.position, t))
                    },
                    i.rotate = function(e, t, n) {
                        if (n) {
                            var o = Math.cos(t),
                            r = Math.sin(t),
                            s = e.position.x - n.x,
                            a = e.position.y - n.y;
                            i.setPosition(e, {
                                x: n.x + (s * o - a * r),
                                y: n.y + (s * r + a * o)
                            }),
                            i.setAngle(e, e.angle + t)
                        } else i.setAngle(e, e.angle + t)
                    },
                    i.scale = function(e, t, n, r) {
                        var s = 0,
                        a = 0;
                        r = r || e.position;
                        for (var d = 0; d < e.parts.length; d++) {
                            var u = e.parts[d];
                            o.scale(u.vertices, t, n, r),
                            u.axes = c.fromVertices(u.vertices),
                            u.area = o.area(u.vertices),
                            i.setMass(u, e.density * u.area),
                            o.translate(u.vertices, {
                                x: -u.position.x,
                                y: -u.position.y
                            }),
                            i.setInertia(u, i._inertiaScale * o.inertia(u.vertices, u.mass)),
                            o.translate(u.vertices, {
                                x: u.position.x,
                                y: u.position.y
                            }),
                            d > 0 && (s += u.area, a += u.inertia),
                            u.position.x = r.x + (u.position.x - r.x) * t,
                            u.position.y = r.y + (u.position.y - r.y) * n,
                            l.update(u.bounds, u.vertices, e.velocity)
                        }
                        e.parts.length > 1 && (e.area = s, e.isStatic || (i.setMass(e, e.density * s), i.setInertia(e, a))),
                        e.circleRadius && (t === n ? e.circleRadius *= t: e.circleRadius = null)
                    },
                    i.update = function(e, t, n, i) {
                        var s = Math.pow(t * n * e.timeScale, 2),
                        a = 1 - e.frictionAir * n * e.timeScale,
                        d = e.position.x - e.positionPrev.x,
                        u = e.position.y - e.positionPrev.y;
                        e.velocity.x = d * a * i + e.force.x / e.mass * s,
                        e.velocity.y = u * a * i + e.force.y / e.mass * s,
                        e.positionPrev.x = e.position.x,
                        e.positionPrev.y = e.position.y,
                        e.position.x += e.velocity.x,
                        e.position.y += e.velocity.y,
                        e.angularVelocity = (e.angle - e.anglePrev) * a * i + e.torque / e.inertia * s,
                        e.anglePrev = e.angle,
                        e.angle += e.angularVelocity,
                        e.speed = r.magnitude(e.velocity),
                        e.angularSpeed = Math.abs(e.angularVelocity);
                        for (var p = 0; p < e.parts.length; p++) {
                            var f = e.parts[p];
                            o.translate(f.vertices, e.velocity),
                            p > 0 && (f.position.x += e.velocity.x, f.position.y += e.velocity.y),
                            0 !== e.angularVelocity && (o.rotate(f.vertices, e.angularVelocity, e.position), c.rotate(f.axes, e.angularVelocity), p > 0 && r.rotateAbout(f.position, e.angularVelocity, e.position, f.position)),
                            l.update(f.bounds, f.vertices, e.velocity)
                        }
                    },
                    i.applyForce = function(e, t, n) {
                        e.force.x += n.x,
                        e.force.y += n.y;
                        var i = t.x - e.position.x,
                        o = t.y - e.position.y;
                        e.torque += i * n.y - o * n.x
                    },
                    i._totalProperties = function(e) {
                        for (var t = {
                            mass: 0,
                            area: 0,
                            inertia: 0,
                            centre: {
                                x: 0,
                                y: 0
                            }
                        },
                        n = 1 === e.parts.length ? 0 : 1; n < e.parts.length; n++) {
                            var i = e.parts[n],
                            o = i.mass !== 1 / 0 ? i.mass: 1;
                            t.mass += o,
                            t.area += i.area,
                            t.inertia += i.inertia,
                            t.centre = r.add(t.centre, r.mult(i.position, o))
                        }
                        return t.centre = r.div(t.centre, t.mass),
                        t
                    }
                } ()
            },
            function(e, t, n) {
                var i = {};
                e.exports = i;
                var o = n(4);
                i._motionWakeThreshold = .18,
                i._motionSleepThreshold = .08,
                i._minBias = .9,
                i.update = function(e, t) {
                    for (var n = t * t * t,
                    o = 0; o < e.length; o++) {
                        var r = e[o],
                        s = r.speed * r.speed + r.angularSpeed * r.angularSpeed;
                        if (0 === r.force.x && 0 === r.force.y) {
                            var a = Math.min(r.motion, s),
                            l = Math.max(r.motion, s);
                            r.motion = i._minBias * a + (1 - i._minBias) * l,
                            r.sleepThreshold > 0 && r.motion < i._motionSleepThreshold * n ? (r.sleepCounter += 1, r.sleepCounter >= r.sleepThreshold && i.set(r, !0)) : r.sleepCounter > 0 && (r.sleepCounter -= 1)
                        } else i.set(r, !1)
                    }
                },
                i.afterCollisions = function(e, t) {
                    for (var n = t * t * t,
                    o = 0; o < e.length; o++) {
                        var r = e[o];
                        if (r.isActive) {
                            var s = r.collision,
                            a = s.bodyA.parent,
                            l = s.bodyB.parent;
                            if (! (a.isSleeping && l.isSleeping || a.isStatic || l.isStatic) && (a.isSleeping || l.isSleeping)) {
                                var c = a.isSleeping && !a.isStatic ? a: l,
                                d = c === a ? l: a; ! c.isStatic && d.motion > i._motionWakeThreshold * n && i.set(c, !1)
                            }
                        }
                    }
                },
                i.set = function(e, t) {
                    var n = e.isSleeping;
                    t ? (e.isSleeping = !0, e.sleepCounter = e.sleepThreshold, e.positionImpulse.x = 0, e.positionImpulse.y = 0, e.positionPrev.x = e.position.x, e.positionPrev.y = e.position.y, e.anglePrev = e.angle, e.speed = 0, e.angularSpeed = 0, e.motion = 0, n || o.trigger(e, "sleepStart")) : (e.isSleeping = !1, e.sleepCounter = 0, n && o.trigger(e, "sleepEnd"))
                }
            },
            function(e, t, n) {
                var i = {};
                e.exports = i;
                var o = n(3),
                r = n(2),
                s = n(7),
                a = n(1),
                l = n(15),
                c = n(0);
                i._warming = .4,
                i._torqueDampen = 1,
                i._minLength = 1e-6,
                i.create = function(e) {
                    var t = e;
                    t.bodyA && !t.pointA && (t.pointA = {
                        x: 0,
                        y: 0
                    }),
                    t.bodyB && !t.pointB && (t.pointB = {
                        x: 0,
                        y: 0
                    });
                    var n = t.bodyA ? r.add(t.bodyA.position, t.pointA) : t.pointA,
                    i = t.bodyB ? r.add(t.bodyB.position, t.pointB) : t.pointB,
                    o = r.magnitude(r.sub(n, i));
                    t.length = void 0 !== t.length ? t.length: o,
                    t.id = t.id || c.nextId(),
                    t.label = t.label || "Constraint",
                    t.type = "constraint",
                    t.stiffness = t.stiffness || (t.length > 0 ? 1 : .7),
                    t.damping = t.damping || 0,
                    t.angularStiffness = t.angularStiffness || 0,
                    t.angleA = t.bodyA ? t.bodyA.angle: t.angleA,
                    t.angleB = t.bodyB ? t.bodyB.angle: t.angleB,
                    t.plugin = {};
                    var s = {
                        visible: !0,
                        lineWidth: 2,
                        strokeStyle: "#ffffff",
                        type: "line",
                        anchors: !0
                    };
                    return 0 === t.length && t.stiffness > .1 ? (s.type = "pin", s.anchors = !1) : t.stiffness < .9 && (s.type = "spring"),
                    t.render = c.extend(s, t.render),
                    t
                },
                i.preSolveAll = function(e) {
                    for (var t = 0; t < e.length; t += 1) {
                        var n = e[t],
                        i = n.constraintImpulse;
                        n.isStatic || 0 === i.x && 0 === i.y && 0 === i.angle || (n.position.x += i.x, n.position.y += i.y, n.angle += i.angle)
                    }
                },
                i.solveAll = function(e, t) {
                    for (var n = 0; n < e.length; n += 1) {
                        var o = e[n],
                        r = !o.bodyA || o.bodyA && o.bodyA.isStatic,
                        s = !o.bodyB || o.bodyB && o.bodyB.isStatic; (r || s) && i.solve(e[n], t)
                    }
                    for (n = 0; n < e.length; n += 1) r = !(o = e[n]).bodyA || o.bodyA && o.bodyA.isStatic,
                    s = !o.bodyB || o.bodyB && o.bodyB.isStatic,
                    r || s || i.solve(e[n], t)
                },
                i.solve = function(e, t) {
                    var n = e.bodyA,
                    o = e.bodyB,
                    s = e.pointA,
                    a = e.pointB;
                    if (n || o) {
                        n && !n.isStatic && (r.rotate(s, n.angle - e.angleA, s), e.angleA = n.angle),
                        o && !o.isStatic && (r.rotate(a, o.angle - e.angleB, a), e.angleB = o.angle);
                        var l = s,
                        c = a;
                        if (n && (l = r.add(n.position, s)), o && (c = r.add(o.position, a)), l && c) {
                            var d = r.sub(l, c),
                            u = r.magnitude(d);
                            u < i._minLength && (u = i._minLength);
                            var p, f, v, m, y, g = (u - e.length) / u,
                            x = e.stiffness < 1 ? e.stiffness * t: e.stiffness,
                            h = r.mult(d, g * x),
                            b = (n ? n.inverseMass: 0) + (o ? o.inverseMass: 0),
                            w = b + ((n ? n.inverseInertia: 0) + (o ? o.inverseInertia: 0));
                            if (e.damping) {
                                var S = r.create();
                                v = r.div(d, u),
                                y = r.sub(o && r.sub(o.position, o.positionPrev) || S, n && r.sub(n.position, n.positionPrev) || S),
                                m = r.dot(v, y)
                            }
                            n && !n.isStatic && (f = n.inverseMass / b, n.constraintImpulse.x -= h.x * f, n.constraintImpulse.y -= h.y * f, n.position.x -= h.x * f, n.position.y -= h.y * f, e.damping && (n.positionPrev.x -= e.damping * v.x * m * f, n.positionPrev.y -= e.damping * v.y * m * f), p = r.cross(s, h) / w * i._torqueDampen * n.inverseInertia * (1 - e.angularStiffness), n.constraintImpulse.angle -= p, n.angle -= p),
                            o && !o.isStatic && (f = o.inverseMass / b, o.constraintImpulse.x += h.x * f, o.constraintImpulse.y += h.y * f, o.position.x += h.x * f, o.position.y += h.y * f, e.damping && (o.positionPrev.x += e.damping * v.x * m * f, o.positionPrev.y += e.damping * v.y * m * f), p = r.cross(a, h) / w * i._torqueDampen * o.inverseInertia * (1 - e.angularStiffness), o.constraintImpulse.angle += p, o.angle += p)
                        }
                    }
                },
                i.postSolveAll = function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t],
                        c = n.constraintImpulse;
                        if (! (n.isStatic || 0 === c.x && 0 === c.y && 0 === c.angle)) {
                            s.set(n, !1);
                            for (var d = 0; d < n.parts.length; d++) {
                                var u = n.parts[d];
                                o.translate(u.vertices, c),
                                d > 0 && (u.position.x += c.x, u.position.y += c.y),
                                0 !== c.angle && (o.rotate(u.vertices, c.angle, n.position), l.rotate(u.axes, c.angle), d > 0 && r.rotateAbout(u.position, c.angle, n.position, u.position)),
                                a.update(u.bounds, u.vertices, n.velocity)
                            }
                            c.angle *= i._warming,
                            c.x *= i._warming,
                            c.y *= i._warming
                        }
                    }
                },
                i.pointAWorld = function(e) {
                    return {
                        x: (e.bodyA ? e.bodyA.position.x: 0) + e.pointA.x,
                        y: (e.bodyA ? e.bodyA.position.y: 0) + e.pointA.y
                    }
                },
                i.pointBWorld = function(e) {
                    return {
                        x: (e.bodyB ? e.bodyB.position.x: 0) + e.pointB.x,
                        y: (e.bodyB ? e.bodyB.position.y: 0) + e.pointB.y
                    }
                }
            },
            function(e, t, n) {
                var i = {};
                e.exports = i;
                var o = n(18);
                i.create = function(e, t) {
                    var n = e.bodyA,
                    o = e.bodyB,
                    r = e.parentA,
                    s = e.parentB,
                    a = {
                        id: i.id(n, o),
                        bodyA: n,
                        bodyB: o,
                        contacts: {},
                        activeContacts: [],
                        separation: 0,
                        isActive: !0,
                        confirmedActive: !0,
                        isSensor: n.isSensor || o.isSensor,
                        timeCreated: t,
                        timeUpdated: t,
                        inverseMass: r.inverseMass + s.inverseMass,
                        friction: Math.min(r.friction, s.friction),
                        frictionStatic: Math.max(r.frictionStatic, s.frictionStatic),
                        restitution: Math.max(r.restitution, s.restitution),
                        slop: Math.max(r.slop, s.slop)
                    };
                    return i.update(a, e, t),
                    a
                },
                i.update = function(e, t, n) {
                    var r = e.contacts,
                    s = t.supports,
                    a = e.activeContacts,
                    l = t.parentA,
                    c = t.parentB;
                    if (e.collision = t, e.inverseMass = l.inverseMass + c.inverseMass, e.friction = Math.min(l.friction, c.friction), e.frictionStatic = Math.max(l.frictionStatic, c.frictionStatic), e.restitution = Math.max(l.restitution, c.restitution), e.slop = Math.max(l.slop, c.slop), a.length = 0, t.collided) {
                        for (var d = 0; d < s.length; d++) {
                            var u = s[d],
                            p = o.id(u),
                            f = r[p];
                            f ? a.push(f) : a.push(r[p] = o.create(u))
                        }
                        e.separation = t.depth,
                        i.setActive(e, !0, n)
                    } else ! 0 === e.isActive && i.setActive(e, !1, n)
                },
                i.setActive = function(e, t, n) {
                    t ? (e.isActive = !0, e.timeUpdated = n) : (e.isActive = !1, e.activeContacts.length = 0)
                },
                i.id = function(e, t) {
                    return e.id < t.id ? "A" + e.id + "B" + t.id: "A" + t.id + "B" + e.id
                }
            },
            function(e, t, n) {
                var i = {};
                e.exports = i;
                var o = n(0),
                r = n(5),
                s = n(1),
                a = n(4),
                l = n(11),
                c = n(2),
                d = n(14); !
                function() {
                    var e, t;
                    "undefined" != typeof window && (e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
                    function(e) {
                        window.setTimeout(function() {
                            e(o.now())
                        },
                        1e3 / 60)
                    },
                    t = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame),
                    i.create = function(e) {
                        var t = {
                            controller: i,
                            engine: null,
                            element: null,
                            canvas: null,
                            mouse: null,
                            frameRequestId: null,
                            options: {
                                width: 800,
                                height: 600,
                                pixelRatio: 1,
                                background: "#14151f",
                                wireframeBackground: "#14151f",
                                hasBounds: !!e.bounds,
                                enabled: !0,
                                wireframes: !0,
                                showSleeping: !0,
                                showDebug: !1,
                                showBroadphase: !1,
                                showBounds: !1,
                                showVelocity: !1,
                                showCollisions: !1,
                                showSeparations: !1,
                                showAxes: !1,
                                showPositions: !1,
                                showAngleIndicator: !1,
                                showIds: !1,
                                showShadows: !1,
                                showVertexNumbers: !1,
                                showConvexHulls: !1,
                                showInternalEdges: !1,
                                showMousePosition: !1
                            }
                        },
                        r = o.extend(t, e);
                        return r.canvas && (r.canvas.width = r.options.width || r.canvas.width, r.canvas.height = r.options.height || r.canvas.height),
                        r.mouse = e.mouse,
                        r.engine = e.engine,
                        r.canvas = r.canvas || n(r.options.width, r.options.height),
                        r.context = r.canvas.getContext("2d"),
                        r.textures = {},
                        r.bounds = r.bounds || {
                            min: {
                                x: 0,
                                y: 0
                            },
                            max: {
                                x: r.canvas.width,
                                y: r.canvas.height
                            }
                        },
                        1 !== r.options.pixelRatio && i.setPixelRatio(r, r.options.pixelRatio),
                        o.isElement(r.element) ? r.element.appendChild(r.canvas) : r.canvas.parentNode || o.log("Render.create: options.element was undefined, render.canvas was created but not appended", "warn"),
                        r
                    },
                    i.run = function(t) { !
                        function n(o) {
                            t.frameRequestId = e(n),
                            i.world(t)
                        } ()
                    },
                    i.stop = function(e) {
                        t(e.frameRequestId)
                    },
                    i.setPixelRatio = function(e, t) {
                        var n = e.options,
                        i = e.canvas;
                        "auto" === t && (t = u(i)),
                        n.pixelRatio = t,
                        i.setAttribute("data-pixel-ratio", t),
                        i.width = n.width * t,
                        i.height = n.height * t,
                        i.style.width = n.width + "px",
                        i.style.height = n.height + "px"
                    },
                    i.lookAt = function(e, t, n, i) {
                        i = void 0 === i || i,
                        t = o.isArray(t) ? t: [t],
                        n = n || {
                            x: 0,
                            y: 0
                        };
                        for (var r = {
                            min: {
                                x: 1 / 0,
                                y: 1 / 0
                            },
                            max: {
                                x: -1 / 0,
                                y: -1 / 0
                            }
                        },
                        s = 0; s < t.length; s += 1) {
                            var a = t[s],
                            l = a.bounds ? a.bounds.min: a.min || a.position || a,
                            c = a.bounds ? a.bounds.max: a.max || a.position || a;
                            l && c && (l.x < r.min.x && (r.min.x = l.x), c.x > r.max.x && (r.max.x = c.x), l.y < r.min.y && (r.min.y = l.y), c.y > r.max.y && (r.max.y = c.y))
                        }
                        var u = r.max.x - r.min.x + 2 * n.x,
                        p = r.max.y - r.min.y + 2 * n.y,
                        f = e.canvas.height,
                        v = e.canvas.width / f,
                        m = u / p,
                        y = 1,
                        g = 1;
                        m > v ? g = m / v: y = v / m,
                        e.options.hasBounds = !0,
                        e.bounds.min.x = r.min.x,
                        e.bounds.max.x = r.min.x + u * y,
                        e.bounds.min.y = r.min.y,
                        e.bounds.max.y = r.min.y + p * g,
                        i && (e.bounds.min.x += .5 * u - u * y * .5, e.bounds.max.x += .5 * u - u * y * .5, e.bounds.min.y += .5 * p - p * g * .5, e.bounds.max.y += .5 * p - p * g * .5),
                        e.bounds.min.x -= n.x,
                        e.bounds.max.x -= n.x,
                        e.bounds.min.y -= n.y,
                        e.bounds.max.y -= n.y,
                        e.mouse && (d.setScale(e.mouse, {
                            x: (e.bounds.max.x - e.bounds.min.x) / e.canvas.width,
                            y: (e.bounds.max.y - e.bounds.min.y) / e.canvas.height
                        }), d.setOffset(e.mouse, e.bounds.min))
                    },
                    i.startViewTransform = function(e) {
                        var t = e.bounds.max.x - e.bounds.min.x,
                        n = e.bounds.max.y - e.bounds.min.y,
                        i = t / e.options.width,
                        o = n / e.options.height;
                        e.context.setTransform(e.options.pixelRatio / i, 0, 0, e.options.pixelRatio / o, 0, 0),
                        e.context.translate( - e.bounds.min.x, -e.bounds.min.y)
                    },
                    i.endViewTransform = function(e) {
                        e.context.setTransform(e.options.pixelRatio, 0, 0, e.options.pixelRatio, 0, 0)
                    },
                    i.world = function(e) {
                        var t, n = e.engine,
                        o = n.world,
                        u = e.canvas,
                        p = e.context,
                        v = e.options,
                        m = r.allBodies(o),
                        y = r.allConstraints(o),
                        g = v.wireframes ? v.wireframeBackground: v.background,
                        x = [],
                        h = [],
                        b = {
                            timestamp: n.timing.timestamp
                        };
                        if (a.trigger(e, "beforeRender", b), e.currentBackground !== g && f(e, g), p.globalCompositeOperation = "source-in", p.fillStyle = "transparent", p.fillRect(0, 0, u.width, u.height), p.globalCompositeOperation = "source-over", v.hasBounds) {
                            for (t = 0; t < m.length; t++) {
                                var w = m[t];
                                s.overlaps(w.bounds, e.bounds) && x.push(w)
                            }
                            for (t = 0; t < y.length; t++) {
                                var S = y[t],
                                A = S.bodyA,
                                P = S.bodyB,
                                C = S.pointA,
                                M = S.pointB;
                                A && (C = c.add(A.position, S.pointA)),
                                P && (M = c.add(P.position, S.pointB)),
                                C && M && ((s.contains(e.bounds, C) || s.contains(e.bounds, M)) && h.push(S))
                            }
                            i.startViewTransform(e),
                            e.mouse && (d.setScale(e.mouse, {
                                x: (e.bounds.max.x - e.bounds.min.x) / e.options.width,
                                y: (e.bounds.max.y - e.bounds.min.y) / e.options.height
                            }), d.setOffset(e.mouse, e.bounds.min))
                        } else h = y,
                        x = m,
                        1 !== e.options.pixelRatio && e.context.setTransform(e.options.pixelRatio, 0, 0, e.options.pixelRatio, 0, 0); ! v.wireframes || n.enableSleeping && v.showSleeping ? i.bodies(e, x, p) : (v.showConvexHulls && i.bodyConvexHulls(e, x, p), i.bodyWireframes(e, x, p)),
                        v.showBounds && i.bodyBounds(e, x, p),
                        (v.showAxes || v.showAngleIndicator) && i.bodyAxes(e, x, p),
                        v.showPositions && i.bodyPositions(e, x, p),
                        v.showVelocity && i.bodyVelocity(e, x, p),
                        v.showIds && i.bodyIds(e, x, p),
                        v.showSeparations && i.separations(e, n.pairs.list, p),
                        v.showCollisions && i.collisions(e, n.pairs.list, p),
                        v.showVertexNumbers && i.vertexNumbers(e, x, p),
                        v.showMousePosition && i.mousePosition(e, e.mouse, p),
                        i.constraints(h, p),
                        v.showBroadphase && n.broadphase.controller === l && i.grid(e, n.broadphase, p),
                        v.showDebug && i.debug(e, p),
                        v.hasBounds && i.endViewTransform(e),
                        a.trigger(e, "afterRender", b)
                    },
                    i.debug = function(e, t) {
                        var n = t,
                        i = e.engine,
                        o = i.world,
                        s = i.metrics,
                        a = e.options,
                        c = r.allBodies(o);
                        if (i.timing.timestamp - (e.debugTimestamp || 0) >= 500) {
                            var d = "";
                            s.timing && (d += "fps: " + Math.round(s.timing.fps) + "    "),
                            s.extended && (s.timing && (d += "delta: " + s.timing.delta.toFixed(3) + "    ", d += "correction: " + s.timing.correction.toFixed(3) + "    "), d += "bodies: " + c.length + "    ", i.broadphase.controller === l && (d += "buckets: " + s.buckets + "    "), d += "\n", d += "collisions: " + s.collisions + "    ", d += "pairs: " + i.pairs.list.length + "    ", d += "broad: " + s.broadEff + "    ", d += "mid: " + s.midEff + "    ", d += "narrow: " + s.narrowEff + "    "),
                            e.debugString = d,
                            e.debugTimestamp = i.timing.timestamp
                        }
                        if (e.debugString) {
                            n.font = "12px Arial",
                            a.wireframes ? n.fillStyle = "rgba(255,255,255,0.5)": n.fillStyle = "rgba(0,0,0,0.5)";
                            for (var u = e.debugString.split("\n"), p = 0; p < u.length; p++) n.fillText(u[p], 50, 50 + 18 * p)
                        }
                    },
                    i.constraints = function(e, t) {
                        for (var n = t,
                        i = 0; i < e.length; i++) {
                            var r = e[i];
                            if (r.render.visible && r.pointA && r.pointB) {
                                var s, a, l = r.bodyA,
                                d = r.bodyB;
                                if (s = l ? c.add(l.position, r.pointA) : r.pointA, "pin" === r.render.type) n.beginPath(),
                                n.arc(s.x, s.y, 3, 0, 2 * Math.PI),
                                n.closePath();
                                else {
                                    if (a = d ? c.add(d.position, r.pointB) : r.pointB, n.beginPath(), n.moveTo(s.x, s.y), "spring" === r.render.type) for (var u, p = c.sub(a, s), f = c.perp(c.normalise(p)), v = Math.ceil(o.clamp(r.length / 5, 12, 20)), m = 1; m < v; m += 1) u = m % 2 == 0 ? 1 : -1,
                                    n.lineTo(s.x + p.x * (m / v) + f.x * u * 4, s.y + p.y * (m / v) + f.y * u * 4);
                                    n.lineTo(a.x, a.y)
                                }
                                r.render.lineWidth && (n.lineWidth = r.render.lineWidth, n.strokeStyle = r.render.strokeStyle, n.stroke()),
                                r.render.anchors && (n.fillStyle = r.render.strokeStyle, n.beginPath(), n.arc(s.x, s.y, 3, 0, 2 * Math.PI), n.arc(a.x, a.y, 3, 0, 2 * Math.PI), n.closePath(), n.fill())
                            }
                        }
                    },
                    i.bodyShadows = function(e, t, n) {
                        for (var i = n,
                        o = (e.engine, 0); o < t.length; o++) {
                            var r = t[o];
                            if (r.render.visible) {
                                if (r.circleRadius) i.beginPath(),
                                i.arc(r.position.x, r.position.y, r.circleRadius, 0, 2 * Math.PI),
                                i.closePath();
                                else {
                                    i.beginPath(),
                                    i.moveTo(r.vertices[0].x, r.vertices[0].y);
                                    for (var s = 1; s < r.vertices.length; s++) i.lineTo(r.vertices[s].x, r.vertices[s].y);
                                    i.closePath()
                                }
                                var a = r.position.x - .5 * e.options.width,
                                l = r.position.y - .2 * e.options.height,
                                c = Math.abs(a) + Math.abs(l);
                                i.shadowColor = "rgba(0,0,0,0.15)",
                                i.shadowOffsetX = .05 * a,
                                i.shadowOffsetY = .05 * l,
                                i.shadowBlur = 1 + 12 * Math.min(1, c / 1e3),
                                i.fill(),
                                i.shadowColor = null,
                                i.shadowOffsetX = null,
                                i.shadowOffsetY = null,
                                i.shadowBlur = null
                            }
                        }
                    },
                    i.bodies = function(e, t, n) {
                        var i, o, r, s, a = n,
                        l = (e.engine, e.options),
                        c = l.showInternalEdges || !l.wireframes;
                        for (r = 0; r < t.length; r++) if ((i = t[r]).render.visible) for (s = i.parts.length > 1 ? 1 : 0; s < i.parts.length; s++) if ((o = i.parts[s]).render.visible) {
                            if (l.showSleeping && i.isSleeping ? a.globalAlpha = .5 * o.render.opacity: 1 !== o.render.opacity && (a.globalAlpha = o.render.opacity), o.render.sprite && o.render.sprite.texture && !l.wireframes) {
                                var d = o.render.sprite,
                                u = p(e, d.texture);
                                a.translate(o.position.x, o.position.y),
                                a.rotate(o.angle),
                                a.drawImage(u, u.width * -d.xOffset * d.xScale, u.height * -d.yOffset * d.yScale, u.width * d.xScale, u.height * d.yScale),
                                a.rotate( - o.angle),
                                a.translate( - o.position.x, -o.position.y)
                            } else {
                                if (o.circleRadius) a.beginPath(),
                                a.arc(o.position.x, o.position.y, o.circleRadius, 0, 2 * Math.PI);
                                else {
                                    a.beginPath(),
                                    a.moveTo(o.vertices[0].x, o.vertices[0].y);
                                    for (var f = 1; f < o.vertices.length; f++) ! o.vertices[f - 1].isInternal || c ? a.lineTo(o.vertices[f].x, o.vertices[f].y) : a.moveTo(o.vertices[f].x, o.vertices[f].y),
                                    o.vertices[f].isInternal && !c && a.moveTo(o.vertices[(f + 1) % o.vertices.length].x, o.vertices[(f + 1) % o.vertices.length].y);
                                    a.lineTo(o.vertices[0].x, o.vertices[0].y),
                                    a.closePath()
                                }
                                l.wireframes ? (a.lineWidth = 1, a.strokeStyle = "#bbb", a.stroke()) : (a.fillStyle = o.render.fillStyle, o.render.lineWidth && (a.lineWidth = o.render.lineWidth, a.strokeStyle = o.render.strokeStyle, a.stroke()), a.fill())
                            }
                            a.globalAlpha = 1
                        }
                    },
                    i.bodyWireframes = function(e, t, n) {
                        var i, o, r, s, a, l = n,
                        c = e.options.showInternalEdges;
                        for (l.beginPath(), r = 0; r < t.length; r++) if ((i = t[r]).render.visible) for (a = i.parts.length > 1 ? 1 : 0; a < i.parts.length; a++) {
                            for (o = i.parts[a], l.moveTo(o.vertices[0].x, o.vertices[0].y), s = 1; s < o.vertices.length; s++) ! o.vertices[s - 1].isInternal || c ? l.lineTo(o.vertices[s].x, o.vertices[s].y) : l.moveTo(o.vertices[s].x, o.vertices[s].y),
                            o.vertices[s].isInternal && !c && l.moveTo(o.vertices[(s + 1) % o.vertices.length].x, o.vertices[(s + 1) % o.vertices.length].y);
                            l.lineTo(o.vertices[0].x, o.vertices[0].y)
                        }
                        l.lineWidth = 1,
                        l.strokeStyle = "#bbb",
                        l.stroke()
                    },
                    i.bodyConvexHulls = function(e, t, n) {
                        var i, o, r, s = n;
                        for (s.beginPath(), o = 0; o < t.length; o++) if ((i = t[o]).render.visible && 1 !== i.parts.length) {
                            for (s.moveTo(i.vertices[0].x, i.vertices[0].y), r = 1; r < i.vertices.length; r++) s.lineTo(i.vertices[r].x, i.vertices[r].y);
                            s.lineTo(i.vertices[0].x, i.vertices[0].y)
                        }
                        s.lineWidth = 1,
                        s.strokeStyle = "rgba(255,255,255,0.2)",
                        s.stroke()
                    },
                    i.vertexNumbers = function(e, t, n) {
                        var i, o, r, s = n;
                        for (i = 0; i < t.length; i++) {
                            var a = t[i].parts;
                            for (r = a.length > 1 ? 1 : 0; r < a.length; r++) {
                                var l = a[r];
                                for (o = 0; o < l.vertices.length; o++) s.fillStyle = "rgba(255,255,255,0.2)",
                                s.fillText(i + "_" + o, l.position.x + .8 * (l.vertices[o].x - l.position.x), l.position.y + .8 * (l.vertices[o].y - l.position.y))
                            }
                        }
                    },
                    i.mousePosition = function(e, t, n) {
                        var i = n;
                        i.fillStyle = "rgba(255,255,255,0.8)",
                        i.fillText(t.position.x + "  " + t.position.y, t.position.x + 5, t.position.y - 5)
                    },
                    i.bodyBounds = function(e, t, n) {
                        var i = n,
                        o = (e.engine, e.options);
                        i.beginPath();
                        for (var r = 0; r < t.length; r++) {
                            if (t[r].render.visible) for (var s = t[r].parts, a = s.length > 1 ? 1 : 0; a < s.length; a++) {
                                var l = s[a];
                                i.rect(l.bounds.min.x, l.bounds.min.y, l.bounds.max.x - l.bounds.min.x, l.bounds.max.y - l.bounds.min.y)
                            }
                        }
                        o.wireframes ? i.strokeStyle = "rgba(255,255,255,0.08)": i.strokeStyle = "rgba(0,0,0,0.1)",
                        i.lineWidth = 1,
                        i.stroke()
                    },
                    i.bodyAxes = function(e, t, n) {
                        var i, o, r, s, a = n,
                        l = (e.engine, e.options);
                        for (a.beginPath(), o = 0; o < t.length; o++) {
                            var c = t[o],
                            d = c.parts;
                            if (c.render.visible) if (l.showAxes) for (r = d.length > 1 ? 1 : 0; r < d.length; r++) for (i = d[r], s = 0; s < i.axes.length; s++) {
                                var u = i.axes[s];
                                a.moveTo(i.position.x, i.position.y),
                                a.lineTo(i.position.x + 20 * u.x, i.position.y + 20 * u.y)
                            } else for (r = d.length > 1 ? 1 : 0; r < d.length; r++) for (i = d[r], s = 0; s < i.axes.length; s++) a.moveTo(i.position.x, i.position.y),
                            a.lineTo((i.vertices[0].x + i.vertices[i.vertices.length - 1].x) / 2, (i.vertices[0].y + i.vertices[i.vertices.length - 1].y) / 2)
                        }
                        l.wireframes ? (a.strokeStyle = "indianred", a.lineWidth = 1) : (a.strokeStyle = "rgba(255, 255, 255, 0.4)", a.globalCompositeOperation = "overlay", a.lineWidth = 2),
                        a.stroke(),
                        a.globalCompositeOperation = "source-over"
                    },
                    i.bodyPositions = function(e, t, n) {
                        var i, o, r, s, a = n,
                        l = (e.engine, e.options);
                        for (a.beginPath(), r = 0; r < t.length; r++) if ((i = t[r]).render.visible) for (s = 0; s < i.parts.length; s++) o = i.parts[s],
                        a.arc(o.position.x, o.position.y, 3, 0, 2 * Math.PI, !1),
                        a.closePath();
                        for (l.wireframes ? a.fillStyle = "indianred": a.fillStyle = "rgba(0,0,0,0.5)", a.fill(), a.beginPath(), r = 0; r < t.length; r++)(i = t[r]).render.visible && (a.arc(i.positionPrev.x, i.positionPrev.y, 2, 0, 2 * Math.PI, !1), a.closePath());
                        a.fillStyle = "rgba(255,165,0,0.8)",
                        a.fill()
                    },
                    i.bodyVelocity = function(e, t, n) {
                        var i = n;
                        i.beginPath();
                        for (var o = 0; o < t.length; o++) {
                            var r = t[o];
                            r.render.visible && (i.moveTo(r.position.x, r.position.y), i.lineTo(r.position.x + 2 * (r.position.x - r.positionPrev.x), r.position.y + 2 * (r.position.y - r.positionPrev.y)))
                        }
                        i.lineWidth = 3,
                        i.strokeStyle = "cornflowerblue",
                        i.stroke()
                    },
                    i.bodyIds = function(e, t, n) {
                        var i, o, r = n;
                        for (i = 0; i < t.length; i++) if (t[i].render.visible) {
                            var s = t[i].parts;
                            for (o = s.length > 1 ? 1 : 0; o < s.length; o++) {
                                var a = s[o];
                                r.font = "12px Arial",
                                r.fillStyle = "rgba(255,255,255,0.5)",
                                r.fillText(a.id, a.position.x + 10, a.position.y - 10)
                            }
                        }
                    },
                    i.collisions = function(e, t, n) {
                        var i, o, r, s, a = n,
                        l = e.options;
                        for (a.beginPath(), r = 0; r < t.length; r++) if ((i = t[r]).isActive) for (o = i.collision, s = 0; s < i.activeContacts.length; s++) {
                            var c = i.activeContacts[s].vertex;
                            a.rect(c.x - 1.5, c.y - 1.5, 3.5, 3.5)
                        }
                        for (l.wireframes ? a.fillStyle = "rgba(255,255,255,0.7)": a.fillStyle = "orange", a.fill(), a.beginPath(), r = 0; r < t.length; r++) if ((i = t[r]).isActive && (o = i.collision, i.activeContacts.length > 0)) {
                            var d = i.activeContacts[0].vertex.x,
                            u = i.activeContacts[0].vertex.y;
                            2 === i.activeContacts.length && (d = (i.activeContacts[0].vertex.x + i.activeContacts[1].vertex.x) / 2, u = (i.activeContacts[0].vertex.y + i.activeContacts[1].vertex.y) / 2),
                            o.bodyB === o.supports[0].body || !0 === o.bodyA.isStatic ? a.moveTo(d - 8 * o.normal.x, u - 8 * o.normal.y) : a.moveTo(d + 8 * o.normal.x, u + 8 * o.normal.y),
                            a.lineTo(d, u)
                        }
                        l.wireframes ? a.strokeStyle = "rgba(255,165,0,0.7)": a.strokeStyle = "orange",
                        a.lineWidth = 1,
                        a.stroke()
                    },
                    i.separations = function(e, t, n) {
                        var i, o, r, s, a, l = n,
                        c = e.options;
                        for (l.beginPath(), a = 0; a < t.length; a++) if ((i = t[a]).isActive) {
                            r = (o = i.collision).bodyA;
                            var d = 1; (s = o.bodyB).isStatic || r.isStatic || (d = .5),
                            s.isStatic && (d = 0),
                            l.moveTo(s.position.x, s.position.y),
                            l.lineTo(s.position.x - o.penetration.x * d, s.position.y - o.penetration.y * d),
                            d = 1,
                            s.isStatic || r.isStatic || (d = .5),
                            r.isStatic && (d = 0),
                            l.moveTo(r.position.x, r.position.y),
                            l.lineTo(r.position.x + o.penetration.x * d, r.position.y + o.penetration.y * d)
                        }
                        c.wireframes ? l.strokeStyle = "rgba(255,165,0,0.5)": l.strokeStyle = "orange",
                        l.stroke()
                    },
                    i.grid = function(e, t, n) {
                        var i = n;
                        e.options.wireframes ? i.strokeStyle = "rgba(255,180,0,0.1)": i.strokeStyle = "rgba(255,180,0,0.5)",
                        i.beginPath();
                        for (var r = o.keys(t.buckets), s = 0; s < r.length; s++) {
                            var a = r[s];
                            if (! (t.buckets[a].length < 2)) {
                                var l = a.split(/C|R/);
                                i.rect(.5 + parseInt(l[1], 10) * t.bucketWidth, .5 + parseInt(l[2], 10) * t.bucketHeight, t.bucketWidth, t.bucketHeight)
                            }
                        }
                        i.lineWidth = 1,
                        i.stroke()
                    },
                    i.inspector = function(e, t) {
                        e.engine;
                        var n, i = e.selected,
                        o = e.render,
                        r = o.options;
                        if (r.hasBounds) {
                            var s = o.bounds.max.x - o.bounds.min.x,
                            a = o.bounds.max.y - o.bounds.min.y,
                            l = s / o.options.width,
                            c = a / o.options.height;
                            t.scale(1 / l, 1 / c),
                            t.translate( - o.bounds.min.x, -o.bounds.min.y)
                        }
                        for (var d = 0; d < i.length; d++) {
                            var u = i[d].data;
                            switch (t.translate(.5, .5), t.lineWidth = 1, t.strokeStyle = "rgba(255,165,0,0.9)", t.setLineDash([1, 2]), u.type) {
                            case "body":
                                n = u.bounds,
                                t.beginPath(),
                                t.rect(Math.floor(n.min.x - 3), Math.floor(n.min.y - 3), Math.floor(n.max.x - n.min.x + 6), Math.floor(n.max.y - n.min.y + 6)),
                                t.closePath(),
                                t.stroke();
                                break;
                            case "constraint":
                                var p = u.pointA;
                                u.bodyA && (p = u.pointB),
                                t.beginPath(),
                                t.arc(p.x, p.y, 10, 0, 2 * Math.PI),
                                t.closePath(),
                                t.stroke()
                            }
                            t.setLineDash([]),
                            t.translate( - .5, -.5)
                        }
                        null !== e.selectStart && (t.translate(.5, .5), t.lineWidth = 1, t.strokeStyle = "rgba(255,165,0,0.6)", t.fillStyle = "rgba(255,165,0,0.1)", n = e.selectBounds, t.beginPath(), t.rect(Math.floor(n.min.x), Math.floor(n.min.y), Math.floor(n.max.x - n.min.x), Math.floor(n.max.y - n.min.y)), t.closePath(), t.stroke(), t.fill(), t.translate( - .5, -.5)),
                        r.hasBounds && t.setTransform(1, 0, 0, 1, 0, 0)
                    };
                    var n = function(e, t) {
                        var n = document.createElement("canvas");
                        return n.width = e,
                        n.height = t,
                        n.oncontextmenu = function() {
                            return ! 1
                        },
                        n.onselectstart = function() {
                            return ! 1
                        },
                        n
                    },
                    u = function(e) {
                        var t = e.getContext("2d");
                        return (window.devicePixelRatio || 1) / (t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1)
                    },
                    p = function(e, t) {
                        var n = e.textures[t];
                        return n || ((n = e.textures[t] = new Image).src = t, n)
                    },
                    f = function(e, t) {
                        var n = t;
                        /(jpg|gif|png)$/.test(t) && (n = "url(" + t + ")"),
                        e.canvas.style.background = n,
                        e.canvas.style.backgroundSize = "contain",
                        e.currentBackground = t
                    }
                } ()
            },
            function(e, t, n) {
                var i = {};
                e.exports = i;
                var o = n(9),
                r = n(12),
                s = n(0);
                i.create = function(e) {
                    var t = {
                        controller: i,
                        detector: r.collisions,
                        buckets: {},
                        pairs: {},
                        pairsList: [],
                        bucketWidth: 48,
                        bucketHeight: 48
                    };
                    return s.extend(t, e)
                },
                i.update = function(e, t, n, o) {
                    var r, s, a, l, c, d = n.world,
                    u = e.buckets,
                    p = !1,
                    f = n.metrics;
                    for (f.broadphaseTests = 0, r = 0; r < t.length; r++) {
                        var v = t[r];
                        if ((!v.isSleeping || o) && !(v.bounds.max.x < d.bounds.min.x || v.bounds.min.x > d.bounds.max.x || v.bounds.max.y < d.bounds.min.y || v.bounds.min.y > d.bounds.max.y)) {
                            var m = i._getRegion(e, v);
                            if (!v.region || m.id !== v.region.id || o) {
                                f.broadphaseTests += 1,
                                v.region && !o || (v.region = m);
                                var y = i._regionUnion(m, v.region);
                                for (s = y.startCol; s <= y.endCol; s++) for (a = y.startRow; a <= y.endRow; a++) {
                                    l = u[c = i._getBucketId(s, a)];
                                    var g = s >= m.startCol && s <= m.endCol && a >= m.startRow && a <= m.endRow,
                                    x = s >= v.region.startCol && s <= v.region.endCol && a >= v.region.startRow && a <= v.region.endRow; ! g && x && x && l && i._bucketRemoveBody(e, l, v),
                                    (v.region === m || g && !x || o) && (l || (l = i._createBucket(u, c)), i._bucketAddBody(e, l, v))
                                }
                                v.region = m,
                                p = !0
                            }
                        }
                    }
                    p && (e.pairsList = i._createActivePairsList(e))
                },
                i.clear = function(e) {
                    e.buckets = {},
                    e.pairs = {},
                    e.pairsList = []
                },
                i._regionUnion = function(e, t) {
                    var n = Math.min(e.startCol, t.startCol),
                    o = Math.max(e.endCol, t.endCol),
                    r = Math.min(e.startRow, t.startRow),
                    s = Math.max(e.endRow, t.endRow);
                    return i._createRegion(n, o, r, s)
                },
                i._getRegion = function(e, t) {
                    var n = t.bounds,
                    o = Math.floor(n.min.x / e.bucketWidth),
                    r = Math.floor(n.max.x / e.bucketWidth),
                    s = Math.floor(n.min.y / e.bucketHeight),
                    a = Math.floor(n.max.y / e.bucketHeight);
                    return i._createRegion(o, r, s, a)
                },
                i._createRegion = function(e, t, n, i) {
                    return {
                        id: e + "," + t + "," + n + "," + i,
                        startCol: e,
                        endCol: t,
                        startRow: n,
                        endRow: i
                    }
                },
                i._getBucketId = function(e, t) {
                    return "C" + e + "R" + t
                },
                i._createBucket = function(e, t) {
                    return e[t] = []
                },
                i._bucketAddBody = function(e, t, n) {
                    for (var i = 0; i < t.length; i++) {
                        var r = t[i];
                        if (! (n.id === r.id || n.isStatic && r.isStatic)) {
                            var s = o.id(n, r),
                            a = e.pairs[s];
                            a ? a[2] += 1 : e.pairs[s] = [n, r, 1]
                        }
                    }
                    t.push(n)
                },
                i._bucketRemoveBody = function(e, t, n) {
                    t.splice(s.indexOf(t, n), 1);
                    for (var i = 0; i < t.length; i++) {
                        var r = t[i],
                        a = o.id(n, r),
                        l = e.pairs[a];
                        l && (l[2] -= 1)
                    }
                },
                i._createActivePairsList = function(e) {
                    var t, n, i = [];
                    t = s.keys(e.pairs);
                    for (var o = 0; o < t.length; o++)(n = e.pairs[t[o]])[2] > 0 ? i.push(n) : delete e.pairs[t[o]];
                    return i
                }
            },
            function(e, t, n) {
                var i = {};
                e.exports = i;
                var o = n(13),
                r = n(9),
                s = n(1);
                i.collisions = function(e, t) {
                    for (var n = [], a = t.pairs.table, l = t.metrics, c = 0; c < e.length; c++) {
                        var d = e[c][0],
                        u = e[c][1];
                        if ((!d.isStatic && !d.isSleeping || !u.isStatic && !u.isSleeping) && i.canCollide(d.collisionFilter, u.collisionFilter) && (l.midphaseTests += 1, s.overlaps(d.bounds, u.bounds))) for (var p = d.parts.length > 1 ? 1 : 0; p < d.parts.length; p++) for (var f = d.parts[p], v = u.parts.length > 1 ? 1 : 0; v < u.parts.length; v++) {
                            var m = u.parts[v];
                            if (f === d && m === u || s.overlaps(f.bounds, m.bounds)) {
                                var y, g = a[r.id(f, m)];
                                y = g && g.isActive ? g.collision: null;
                                var x = o.collides(f, m, y);
                                l.narrowphaseTests += 1,
                                x.reused && (l.narrowReuseCount += 1),
                                x.collided && (n.push(x), l.narrowDetections += 1)
                            }
                        }
                    }
                    return n
                },
                i.canCollide = function(e, t) {
                    return e.group === t.group && 0 !== e.group ? e.group > 0 : 0 != (e.mask & t.category) && 0 != (t.mask & e.category)
                }
            },
            function(e, t, n) {
                var i = {};
                e.exports = i;
                var o = n(3),
                r = n(2);
                i.collides = function(e, t, n) {
                    var s, a, l, c, d = !1;
                    if (n) {
                        var u = e.parent,
                        p = t.parent,
                        f = u.speed * u.speed + u.angularSpeed * u.angularSpeed + p.speed * p.speed + p.angularSpeed * p.angularSpeed;
                        d = n && n.collided && f < .2,
                        c = n
                    } else c = {
                        collided: !1,
                        bodyA: e,
                        bodyB: t
                    };
                    if (n && d) {
                        var v = c.axisBody,
                        m = v === e ? t: e,
                        y = [v.axes[n.axisNumber]];
                        if (l = i._overlapAxes(v.vertices, m.vertices, y), c.reused = !0, l.overlap <= 0) return c.collided = !1,
                        c
                    } else {
                        if ((s = i._overlapAxes(e.vertices, t.vertices, e.axes)).overlap <= 0) return c.collided = !1,
                        c;
                        if ((a = i._overlapAxes(t.vertices, e.vertices, t.axes)).overlap <= 0) return c.collided = !1,
                        c;
                        s.overlap < a.overlap ? (l = s, c.axisBody = e) : (l = a, c.axisBody = t),
                        c.axisNumber = l.axisNumber
                    }
                    c.bodyA = e.id < t.id ? e: t,
                    c.bodyB = e.id < t.id ? t: e,
                    c.collided = !0,
                    c.depth = l.overlap,
                    c.parentA = c.bodyA.parent,
                    c.parentB = c.bodyB.parent,
                    e = c.bodyA,
                    t = c.bodyB,
                    r.dot(l.axis, r.sub(t.position, e.position)) < 0 ? c.normal = {
                        x: l.axis.x,
                        y: l.axis.y
                    }: c.normal = {
                        x: -l.axis.x,
                        y: -l.axis.y
                    },
                    c.tangent = r.perp(c.normal),
                    c.penetration = c.penetration || {},
                    c.penetration.x = c.normal.x * c.depth,
                    c.penetration.y = c.normal.y * c.depth;
                    var g = i._findSupports(e, t, c.normal),
                    x = [];
                    if (o.contains(e.vertices, g[0]) && x.push(g[0]), o.contains(e.vertices, g[1]) && x.push(g[1]), x.length < 2) {
                        var h = i._findSupports(t, e, r.neg(c.normal));
                        o.contains(t.vertices, h[0]) && x.push(h[0]),
                        x.length < 2 && o.contains(t.vertices, h[1]) && x.push(h[1])
                    }
                    return x.length < 1 && (x = [g[0]]),
                    c.supports = x,
                    c
                },
                i._overlapAxes = function(e, t, n) {
                    for (var o, s, a = r._temp[0], l = r._temp[1], c = {
                        overlap: Number.MAX_VALUE
                    },
                    d = 0; d < n.length; d++) {
                        if (s = n[d], i._projectToAxis(a, e, s), i._projectToAxis(l, t, s), (o = Math.min(a.max - l.min, l.max - a.min)) <= 0) return c.overlap = o,
                        c;
                        o < c.overlap && (c.overlap = o, c.axis = s, c.axisNumber = d)
                    }
                    return c
                },
                i._projectToAxis = function(e, t, n) {
                    for (var i = r.dot(t[0], n), o = i, s = 1; s < t.length; s += 1) {
                        var a = r.dot(t[s], n);
                        a > o ? o = a: a < i && (i = a)
                    }
                    e.min = i,
                    e.max = o
                },
                i._findSupports = function(e, t, n) {
                    for (var i, o, s, a, l = Number.MAX_VALUE,
                    c = r._temp[0], d = t.vertices, u = e.position, p = 0; p < d.length; p++) o = d[p],
                    c.x = o.x - u.x,
                    c.y = o.y - u.y,
                    (i = -r.dot(n, c)) < l && (l = i, s = o);
                    return o = d[s.index - 1 >= 0 ? s.index - 1 : d.length - 1],
                    c.x = o.x - u.x,
                    c.y = o.y - u.y,
                    l = -r.dot(n, c),
                    a = o,
                    o = d[(s.index + 1) % d.length],
                    c.x = o.x - u.x,
                    c.y = o.y - u.y,
                    (i = -r.dot(n, c)) < l && (a = o),
                    [s, a]
                }
            },
            function(e, t, n) {
                var i = {};
                e.exports = i;
                var o = n(0);
                i.create = function(e) {
                    var t = {};
                    return e || o.log("Mouse.create: element was undefined, defaulting to document.body", "warn"),
                    t.element = e || document.body,
                    t.absolute = {
                        x: 0,
                        y: 0
                    },
                    t.position = {
                        x: 0,
                        y: 0
                    },
                    t.mousedownPosition = {
                        x: 0,
                        y: 0
                    },
                    t.mouseupPosition = {
                        x: 0,
                        y: 0
                    },
                    t.offset = {
                        x: 0,
                        y: 0
                    },
                    t.scale = {
                        x: 1,
                        y: 1
                    },
                    t.wheelDelta = 0,
                    t.button = -1,
                    t.pixelRatio = parseInt(t.element.getAttribute("data-pixel-ratio"), 10) || 1,
                    t.sourceEvents = {
                        mousemove: null,
                        mousedown: null,
                        mouseup: null,
                        mousewheel: null
                    },
                    t.mousemove = function(e) {
                        var n = i._getRelativeMousePosition(e, t.element, t.pixelRatio);
                        e.changedTouches && (t.button = 0, e.preventDefault()),
                        t.absolute.x = n.x,
                        t.absolute.y = n.y,
                        t.position.x = t.absolute.x * t.scale.x + t.offset.x,
                        t.position.y = t.absolute.y * t.scale.y + t.offset.y,
                        t.sourceEvents.mousemove = e
                    },
                    t.mousedown = function(e) {
                        var n = i._getRelativeMousePosition(e, t.element, t.pixelRatio);
                        e.changedTouches ? (t.button = 0, e.preventDefault()) : t.button = e.button,
                        t.absolute.x = n.x,
                        t.absolute.y = n.y,
                        t.position.x = t.absolute.x * t.scale.x + t.offset.x,
                        t.position.y = t.absolute.y * t.scale.y + t.offset.y,
                        t.mousedownPosition.x = t.position.x,
                        t.mousedownPosition.y = t.position.y,
                        t.sourceEvents.mousedown = e
                    },
                    t.mouseup = function(e) {
                        var n = i._getRelativeMousePosition(e, t.element, t.pixelRatio);
                        e.changedTouches && e.preventDefault(),
                        t.button = -1,
                        t.absolute.x = n.x,
                        t.absolute.y = n.y,
                        t.position.x = t.absolute.x * t.scale.x + t.offset.x,
                        t.position.y = t.absolute.y * t.scale.y + t.offset.y,
                        t.mouseupPosition.x = t.position.x,
                        t.mouseupPosition.y = t.position.y,
                        t.sourceEvents.mouseup = e
                    },
                    t.mousewheel = function(e) {
                        t.wheelDelta = Math.max( - 1, Math.min(1, e.wheelDelta || -e.detail)),
                        e.preventDefault()
                    },
                    i.setElement(t, t.element),
                    t
                },
                i.setElement = function(e, t) {
                    e.element = t,
                    t.addEventListener("mousemove", e.mousemove),
                    t.addEventListener("mousedown", e.mousedown),
                    t.addEventListener("mouseup", e.mouseup),
                    t.addEventListener("mousewheel", e.mousewheel),
                    t.addEventListener("DOMMouseScroll", e.mousewheel),
                    t.addEventListener("touchmove", e.mousemove),
                    t.addEventListener("touchstart", e.mousedown),
                    t.addEventListener("touchend", e.mouseup)
                },
                i.clearSourceEvents = function(e) {
                    e.sourceEvents.mousemove = null,
                    e.sourceEvents.mousedown = null,
                    e.sourceEvents.mouseup = null,
                    e.sourceEvents.mousewheel = null,
                    e.wheelDelta = 0
                },
                i.setOffset = function(e, t) {
                    e.offset.x = t.x,
                    e.offset.y = t.y,
                    e.position.x = e.absolute.x * e.scale.x + e.offset.x,
                    e.position.y = e.absolute.y * e.scale.y + e.offset.y
                },
                i.setScale = function(e, t) {
                    e.scale.x = t.x,
                    e.scale.y = t.y,
                    e.position.x = e.absolute.x * e.scale.x + e.offset.x,
                    e.position.y = e.absolute.y * e.scale.y + e.offset.y
                },
                i._getRelativeMousePosition = function(e, t, n) {
                    var i, o, r = t.getBoundingClientRect(),
                    s = document.documentElement || document.body.parentNode || document.body,
                    a = void 0 !== window.pageXOffset ? window.pageXOffset: s.scrollLeft,
                    l = void 0 !== window.pageYOffset ? window.pageYOffset: s.scrollTop,
                    c = e.changedTouches;
                    return c ? (i = c[0].pageX - r.left - a, o = c[0].pageY - r.top - l) : (i = e.pageX - r.left - a, o = e.pageY - r.top - l),
                    {
                        x: i / (t.clientWidth / (t.width || t.clientWidth) * n),
                        y: o / (t.clientHeight / (t.height || t.clientHeight) * n)
                    }
                }
            },
            function(e, t, n) {
                var i = {};
                e.exports = i;
                var o = n(2),
                r = n(0);
                i.fromVertices = function(e) {
                    for (var t = {},
                    n = 0; n < e.length; n++) {
                        var i = (n + 1) % e.length,
                        s = o.normalise({
                            x: e[i].y - e[n].y,
                            y: e[n].x - e[i].x
                        }),
                        a = 0 === s.y ? 1 / 0 : s.x / s.y;
                        t[a = a.toFixed(3).toString()] = s
                    }
                    return r.values(t)
                },
                i.rotate = function(e, t) {
                    if (0 !== t) for (var n = Math.cos(t), i = Math.sin(t), o = 0; o < e.length; o++) {
                        var r, s = e[o];
                        r = s.x * n - s.y * i,
                        s.y = s.x * i + s.y * n,
                        s.x = r
                    }
                }
            },
            function(e, t, n) {
                var i = {};
                e.exports = i;
                var o = n(3),
                r = n(0),
                s = n(6),
                a = n(1),
                l = n(2);
                i._decompWarned = !1,
                i.rectangle = function(e, t, n, i, a) {
                    a = a || {};
                    var l = {
                        label: "Rectangle Body",
                        position: {
                            x: e,
                            y: t
                        },
                        vertices: o.fromPath("L 0 0 L " + n + " 0 L " + n + " " + i + " L 0 " + i)
                    };
                    if (a.chamfer) {
                        var c = a.chamfer;
                        l.vertices = o.chamfer(l.vertices, c.radius, c.quality, c.qualityMin, c.qualityMax),
                        delete a.chamfer
                    }
                    return s.create(r.extend({},
                    l, a))
                },
                i.trapezoid = function(e, t, n, i, a, l) {
                    l = l || {};
                    var c, d = n * (a *= .5),
                    u = d + (1 - 2 * a) * n,
                    p = u + d;
                    c = a < .5 ? "L 0 0 L " + d + " " + -i + " L " + u + " " + -i + " L " + p + " 0": "L 0 0 L " + u + " " + -i + " L " + p + " 0";
                    var f = {
                        label: "Trapezoid Body",
                        position: {
                            x: e,
                            y: t
                        },
                        vertices: o.fromPath(c)
                    };
                    if (l.chamfer) {
                        var v = l.chamfer;
                        f.vertices = o.chamfer(f.vertices, v.radius, v.quality, v.qualityMin, v.qualityMax),
                        delete l.chamfer
                    }
                    return s.create(r.extend({},
                    f, l))
                },
                i.circle = function(e, t, n, o, s) {
                    o = o || {};
                    var a = {
                        label: "Circle Body",
                        circleRadius: n
                    };
                    s = s || 25;
                    var l = Math.ceil(Math.max(10, Math.min(s, n)));
                    return l % 2 == 1 && (l += 1),
                    i.polygon(e, t, l, n, r.extend({},
                    a, o))
                },
                i.polygon = function(e, t, n, a, l) {
                    if (l = l || {},
                    n < 3) return i.circle(e, t, a, l);
                    for (var c = 2 * Math.PI / n,
                    d = "",
                    u = .5 * c,
                    p = 0; p < n; p += 1) {
                        var f = u + p * c,
                        v = Math.cos(f) * a,
                        m = Math.sin(f) * a;
                        d += "L " + v.toFixed(3) + " " + m.toFixed(3) + " "
                    }
                    var y = {
                        label: "Polygon Body",
                        position: {
                            x: e,
                            y: t
                        },
                        vertices: o.fromPath(d)
                    };
                    if (l.chamfer) {
                        var g = l.chamfer;
                        y.vertices = o.chamfer(y.vertices, g.radius, g.quality, g.qualityMin, g.qualityMax),
                        delete l.chamfer
                    }
                    return s.create(r.extend({},
                    y, l))
                },
                i.fromVertices = function(e, t, c, d, u, p, f, v) {
                    var m, y, g, x, h, b, w, S, A, P, C;
                    try {
                        m = n(27)
                    } catch(E) {
                        m = null
                    }
                    for (y = Boolean(m && m.quickDecomp), d = d || {},
                    x = [], u = void 0 !== u && u, p = void 0 !== p ? p: .01, f = void 0 !== f ? f: 10, v = void 0 !== v ? v: .01, r.isArray(c[0]) || (c = [c]), P = 0; P < c.length; P += 1) if (b = c[P], !!(h = o.isConvex(b)) || y || i._decompWarned || (r.warn("Could not resolve the expected 'poly-decomp' package for concave vertices in 'Bodies.fromVertices'"), r.warn("Try 'npm install poly-decomp --save' or as a global e.g. 'window.decomp'"), i._decompWarned = !0), h || !y) b = h ? o.clockwiseSort(b) : o.hull(b),
                    x.push({
                        position: {
                            x: e,
                            y: t
                        },
                        vertices: b
                    });
                    else {
                        var M = b.map(function(e) {
                            return [e.x, e.y]
                        });
                        m.makeCCW(M),
                        !1 !== p && m.removeCollinearPoints(M, p),
                        !1 !== v && m.removeDuplicatePoints && m.removeDuplicatePoints(M, v);
                        var k = m.quickDecomp(M);
                        for (w = 0; w < k.length; w++) {
                            var B = k[w].map(function(e) {
                                return {
                                    x: e[0],
                                    y: e[1]
                                }
                            });
                            f > 0 && o.area(B) < f || x.push({
                                position: o.centre(B),
                                vertices: B
                            })
                        }
                    }
                    for (w = 0; w < x.length; w++) x[w] = s.create(r.extend(x[w], d));
                    if (u) for (w = 0; w < x.length; w++) {
                        var I = x[w];
                        for (S = w + 1; S < x.length; S++) {
                            var _ = x[S];
                            if (a.overlaps(I.bounds, _.bounds)) {
                                var T = I.vertices,
                                R = _.vertices;
                                for (A = 0; A < I.vertices.length; A++) for (C = 0; C < _.vertices.length; C++) {
                                    var L = l.magnitudeSquared(l.sub(T[(A + 1) % T.length], R[C])),
                                    O = l.magnitudeSquared(l.sub(T[A], R[(C + 1) % R.length]));
                                    L < 5 && O < 5 && (T[A].isInternal = !0, R[C].isInternal = !0)
                                }
                            }
                        }
                    }
                    return x.length > 1 ? (g = s.create(r.extend({
                        parts: x.slice(0)
                    },
                    d)), s.setPosition(g, {
                        x: e,
                        y: t
                    }), g) : x[0]
                }
            },
            function(e, t, n) {
                var i = {};
                e.exports = i;
                var o = n(0);
                i._registry = {},
                i.register = function(e) {
                    if (i.isPlugin(e) || o.warn("Plugin.register:", i.toString(e), "does not implement all required fields."), e.name in i._registry) {
                        var t = i._registry[e.name],
                        n = i.versionParse(e.version).number,
                        r = i.versionParse(t.version).number;
                        n > r ? (o.warn("Plugin.register:", i.toString(t), "was upgraded to", i.toString(e)), i._registry[e.name] = e) : n < r ? o.warn("Plugin.register:", i.toString(t), "can not be downgraded to", i.toString(e)) : e !== t && o.warn("Plugin.register:", i.toString(e), "is already registered to different plugin object")
                    } else i._registry[e.name] = e;
                    return e
                },
                i.resolve = function(e) {
                    return i._registry[i.dependencyParse(e).name]
                },
                i.toString = function(e) {
                    return "string" == typeof e ? e: (e.name || "anonymous") + "@" + (e.version || e.range || "0.0.0")
                },
                i.isPlugin = function(e) {
                    return e && e.name && e.version && e.install
                },
                i.isUsed = function(e, t) {
                    return e.used.indexOf(t) > -1
                },
                i.isFor = function(e, t) {
                    var n = e.
                    for && i.dependencyParse(e.
                    for);
                    return ! e.
                    for || t.name === n.name && i.versionSatisfies(t.version, n.range)
                },
                i.use = function(e, t) {
                    if (e.uses = (e.uses || []).concat(t || []), 0 !== e.uses.length) {
                        for (var n = i.dependencies(e), r = o.topologicalSort(n), s = [], a = 0; a < r.length; a += 1) if (r[a] !== e.name) {
                            var l = i.resolve(r[a]);
                            l ? i.isUsed(e, l.name) || (i.isFor(l, e) || (o.warn("Plugin.use:", i.toString(l), "is for", l.
                            for, "but installed on", i.toString(e) + "."), l._warned = !0), l.install ? l.install(e) : (o.warn("Plugin.use:", i.toString(l), "does not specify an install function."), l._warned = !0), l._warned ? (s.push("🔶 " + i.toString(l)), delete l._warned) : s.push("✅ " + i.toString(l)), e.used.push(l.name)) : s.push("❌ " + r[a])
                        }
                        s.length > 0 && o.info(s.join("  "))
                    } else o.warn("Plugin.use:", i.toString(e), "does not specify any dependencies to install.")
                },
                i.dependencies = function(e, t) {
                    var n = i.dependencyParse(e),
                    r = n.name;
                    if (! (r in (t = t || {}))) {
                        e = i.resolve(e) || e,
                        t[r] = o.map(e.uses || [],
                        function(t) {
                            i.isPlugin(t) && i.register(t);
                            var r = i.dependencyParse(t),
                            s = i.resolve(t);
                            return s && !i.versionSatisfies(s.version, r.range) ? (o.warn("Plugin.dependencies:", i.toString(s), "does not satisfy", i.toString(r), "used by", i.toString(n) + "."), s._warned = !0, e._warned = !0) : s || (o.warn("Plugin.dependencies:", i.toString(t), "used by", i.toString(n), "could not be resolved."), e._warned = !0),
                            r.name
                        });
                        for (var s = 0; s < t[r].length; s += 1) i.dependencies(t[r][s], t);
                        return t
                    }
                },
                i.dependencyParse = function(e) {
                    return o.isString(e) ? (/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?))?$/.test(e) || o.warn("Plugin.dependencyParse:", e, "is not a valid dependency string."), {
                        name: e.split("@")[0],
                        range: e.split("@")[1] || "*"
                    }) : {
                        name: e.name,
                        range: e.range || e.version
                    }
                },
                i.versionParse = function(e) {
                    var t = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-]+)?$/;
                    t.test(e) || o.warn("Plugin.versionParse:", e, "is not a valid version or range.");
                    var n = t.exec(e),
                    i = Number(n[4]),
                    r = Number(n[5]),
                    s = Number(n[6]);
                    return {
                        isRange: Boolean(n[1] || n[2]),
                        version: n[3],
                        range: e,
                        operator: n[1] || n[2] || "",
                        major: i,
                        minor: r,
                        patch: s,
                        parts: [i, r, s],
                        prerelease: n[7],
                        number: 1e8 * i + 1e4 * r + s
                    }
                },
                i.versionSatisfies = function(e, t) {
                    t = t || "*";
                    var n = i.versionParse(t),
                    o = i.versionParse(e);
                    if (n.isRange) {
                        if ("*" === n.operator || "*" === e) return ! 0;
                        if (">" === n.operator) return o.number > n.number;
                        if (">=" === n.operator) return o.number >= n.number;
                        if ("~" === n.operator) return o.major === n.major && o.minor === n.minor && o.patch >= n.patch;
                        if ("^" === n.operator) return n.major > 0 ? o.major === n.major && o.number >= n.number: n.minor > 0 ? o.minor === n.minor && o.patch >= n.patch: o.patch === n.patch
                    }
                    return e === t || "*" === e
                }
            },
            function(e, t) {
                var n = {};
                e.exports = n,
                n.create = function(e) {
                    return {
                        id: n.id(e),
                        vertex: e,
                        normalImpulse: 0,
                        tangentImpulse: 0
                    }
                },
                n.id = function(e) {
                    return e.body.id + "_" + e.index
                }
            },
            function(e, t, n) {
                var i = {};
                e.exports = i;
                var o = n(5),
                r = (n(8), n(0));
                i.create = function(e) {
                    var t = o.create(),
                    n = {
                        label: "World",
                        gravity: {
                            x: 0,
                            y: 1,
                            scale: .001
                        },
                        bounds: {
                            min: {
                                x: -1 / 0,
                                y: -1 / 0
                            },
                            max: {
                                x: 1 / 0,
                                y: 1 / 0
                            }
                        }
                    };
                    return r.extend(t, n, e)
                }
            },
            function(e, t, n) {
                var i = {};
                e.exports = i;
                var o = n(9),
                r = n(0);
                i._pairMaxIdleLife = 1e3,
                i.create = function(e) {
                    return r.extend({
                        table: {},
                        list: [],
                        collisionStart: [],
                        collisionActive: [],
                        collisionEnd: []
                    },
                    e)
                },
                i.update = function(e, t, n) {
                    var i, r, s, a, l = e.list,
                    c = e.table,
                    d = e.collisionStart,
                    u = e.collisionEnd,
                    p = e.collisionActive;
                    for (d.length = 0, u.length = 0, p.length = 0, a = 0; a < l.length; a++) l[a].confirmedActive = !1;
                    for (a = 0; a < t.length; a++)(i = t[a]).collided && ((s = c[r = o.id(i.bodyA, i.bodyB)]) ? (s.isActive ? p.push(s) : d.push(s), o.update(s, i, n), s.confirmedActive = !0) : (s = o.create(i, n), c[r] = s, d.push(s), l.push(s)));
                    for (a = 0; a < l.length; a++)(s = l[a]).isActive && !s.confirmedActive && (o.setActive(s, !1, n), u.push(s))
                },
                i.removeOld = function(e, t) {
                    var n, o, r, s, a = e.list,
                    l = e.table,
                    c = [];
                    for (s = 0; s < a.length; s++)(o = (n = a[s]).collision).bodyA.isSleeping || o.bodyB.isSleeping ? n.timeUpdated = t: t - n.timeUpdated > i._pairMaxIdleLife && c.push(s);
                    for (s = 0; s < c.length; s++) delete l[(n = a[r = c[s] - s]).id],
                    a.splice(r, 1)
                },
                i.clear = function(e) {
                    return e.table = {},
                    e.list.length = 0,
                    e.collisionStart.length = 0,
                    e.collisionActive.length = 0,
                    e.collisionEnd.length = 0,
                    e
                }
            },
            function(e, t, n) {
                var i = {};
                e.exports = i;
                var o = n(3),
                r = n(2),
                s = n(0),
                a = n(1);
                i._restingThresh = 4,
                i._restingThreshTangent = 6,
                i._positionDampen = .9,
                i._positionWarming = .8,
                i._frictionNormalMultiplier = 5,
                i.preSolvePosition = function(e) {
                    var t, n, i;
                    for (t = 0; t < e.length; t++)(n = e[t]).isActive && (i = n.activeContacts.length, n.collision.parentA.totalContacts += i, n.collision.parentB.totalContacts += i)
                },
                i.solvePosition = function(e, t) {
                    var n, o, s, a, l, c, d, u, p, f = r._temp[0],
                    v = r._temp[1],
                    m = r._temp[2],
                    y = r._temp[3];
                    for (n = 0; n < e.length; n++)(o = e[n]).isActive && !o.isSensor && (a = (s = o.collision).parentA, l = s.parentB, c = s.normal, d = r.sub(r.add(l.positionImpulse, l.position, f), r.add(a.positionImpulse, r.sub(l.position, s.penetration, v), m), y), o.separation = r.dot(c, d));
                    for (n = 0; n < e.length; n++)(o = e[n]).isActive && !o.isSensor && (a = (s = o.collision).parentA, l = s.parentB, c = s.normal, p = (o.separation - o.slop) * t, (a.isStatic || l.isStatic) && (p *= 2), a.isStatic || a.isSleeping || (u = i._positionDampen / a.totalContacts, a.positionImpulse.x += c.x * p * u, a.positionImpulse.y += c.y * p * u), l.isStatic || l.isSleeping || (u = i._positionDampen / l.totalContacts, l.positionImpulse.x -= c.x * p * u, l.positionImpulse.y -= c.y * p * u))
                },
                i.postSolvePosition = function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (n.totalContacts = 0, 0 !== n.positionImpulse.x || 0 !== n.positionImpulse.y) {
                            for (var s = 0; s < n.parts.length; s++) {
                                var l = n.parts[s];
                                o.translate(l.vertices, n.positionImpulse),
                                a.update(l.bounds, l.vertices, n.velocity),
                                l.position.x += n.positionImpulse.x,
                                l.position.y += n.positionImpulse.y
                            }
                            n.positionPrev.x += n.positionImpulse.x,
                            n.positionPrev.y += n.positionImpulse.y,
                            r.dot(n.positionImpulse, n.velocity) < 0 ? (n.positionImpulse.x = 0, n.positionImpulse.y = 0) : (n.positionImpulse.x *= i._positionWarming, n.positionImpulse.y *= i._positionWarming)
                        }
                    }
                },
                i.preSolveVelocity = function(e) {
                    var t, n, i, o, s, a, l, c, d, u, p, f, v, m, y = r._temp[0],
                    g = r._temp[1];
                    for (t = 0; t < e.length; t++) if ((i = e[t]).isActive && !i.isSensor) for (o = i.activeContacts, a = (s = i.collision).parentA, l = s.parentB, c = s.normal, d = s.tangent, n = 0; n < o.length; n++) p = (u = o[n]).vertex,
                    f = u.normalImpulse,
                    v = u.tangentImpulse,
                    0 === f && 0 === v || (y.x = c.x * f + d.x * v, y.y = c.y * f + d.y * v, a.isStatic || a.isSleeping || (m = r.sub(p, a.position, g), a.positionPrev.x += y.x * a.inverseMass, a.positionPrev.y += y.y * a.inverseMass, a.anglePrev += r.cross(m, y) * a.inverseInertia), l.isStatic || l.isSleeping || (m = r.sub(p, l.position, g), l.positionPrev.x -= y.x * l.inverseMass, l.positionPrev.y -= y.y * l.inverseMass, l.anglePrev -= r.cross(m, y) * l.inverseInertia))
                },
                i.solveVelocity = function(e, t) {
                    for (var n = t * t,
                    o = r._temp[0], a = r._temp[1], l = r._temp[2], c = r._temp[3], d = r._temp[4], u = r._temp[5], p = 0; p < e.length; p++) {
                        var f = e[p];
                        if (f.isActive && !f.isSensor) {
                            var v = f.collision,
                            m = v.parentA,
                            y = v.parentB,
                            g = v.normal,
                            x = v.tangent,
                            h = f.activeContacts,
                            b = 1 / h.length;
                            m.velocity.x = m.position.x - m.positionPrev.x,
                            m.velocity.y = m.position.y - m.positionPrev.y,
                            y.velocity.x = y.position.x - y.positionPrev.x,
                            y.velocity.y = y.position.y - y.positionPrev.y,
                            m.angularVelocity = m.angle - m.anglePrev,
                            y.angularVelocity = y.angle - y.anglePrev;
                            for (var w = 0; w < h.length; w++) {
                                var S = h[w],
                                A = S.vertex,
                                P = r.sub(A, m.position, a),
                                C = r.sub(A, y.position, l),
                                M = r.add(m.velocity, r.mult(r.perp(P), m.angularVelocity), c),
                                k = r.add(y.velocity, r.mult(r.perp(C), y.angularVelocity), d),
                                B = r.sub(M, k, u),
                                I = r.dot(g, B),
                                _ = r.dot(x, B),
                                T = Math.abs(_),
                                R = s.sign(_),
                                L = (1 + f.restitution) * I,
                                O = s.clamp(f.separation + I, 0, 1) * i._frictionNormalMultiplier,
                                E = _,
                                V = 1 / 0;
                                T > f.friction * f.frictionStatic * O * n && (V = T, E = s.clamp(f.friction * R * n, -V, V));
                                var F = r.cross(P, g),
                                W = r.cross(C, g),
                                q = b / (m.inverseMass + y.inverseMass + m.inverseInertia * F * F + y.inverseInertia * W * W);
                                if (L *= q, E *= q, I < 0 && I * I > i._restingThresh * n) S.normalImpulse = 0;
                                else {
                                    var j = S.normalImpulse;
                                    S.normalImpulse = Math.min(S.normalImpulse + L, 0),
                                    L = S.normalImpulse - j
                                }
                                if (_ * _ > i._restingThreshTangent * n) S.tangentImpulse = 0;
                                else {
                                    var D = S.tangentImpulse;
                                    S.tangentImpulse = s.clamp(S.tangentImpulse + E, -V, V),
                                    E = S.tangentImpulse - D
                                }
                                o.x = g.x * L + x.x * E,
                                o.y = g.y * L + x.y * E,
                                m.isStatic || m.isSleeping || (m.positionPrev.x += o.x * m.inverseMass, m.positionPrev.y += o.y * m.inverseMass, m.anglePrev += r.cross(P, o) * m.inverseInertia),
                                y.isStatic || y.isSleeping || (y.positionPrev.x -= o.x * y.inverseMass, y.positionPrev.y -= o.y * y.inverseMass, y.anglePrev -= r.cross(C, o) * y.inverseInertia)
                            }
                        }
                    }
                }
            },
            function(e, t, n) {
                var i = {};
                e.exports = i;
                var o = n(19),
                r = n(7),
                s = n(21),
                a = n(10),
                l = n(20),
                c = n(23),
                d = n(11),
                u = n(4),
                p = n(5),
                f = n(8),
                v = n(0),
                m = n(6);
                i.create = function(e, t) {
                    t = (t = v.isElement(e) ? t: e) || {},
                    ((e = v.isElement(e) ? e: null) || t.render) && v.warn("Engine.create: engine.render is deprecated (see docs)");
                    var n = {
                        positionIterations: 6,
                        velocityIterations: 4,
                        constraintIterations: 2,
                        enableSleeping: !1,
                        events: [],
                        plugin: {},
                        timing: {
                            timestamp: 0,
                            timeScale: 1
                        },
                        broadphase: {
                            controller: d
                        }
                    },
                    i = v.extend(n, t);
                    if (e || i.render) {
                        var r = {
                            element: e,
                            controller: a
                        };
                        i.render = v.extend(r, i.render)
                    }
                    return i.render && i.render.controller && (i.render = i.render.controller.create(i.render)),
                    i.render && (i.render.engine = i),
                    i.world = t.world || o.create(i.world),
                    i.pairs = l.create(),
                    i.broadphase = i.broadphase.controller.create(i.broadphase),
                    i.metrics = i.metrics || {
                        extended: !1
                    },
                    i.metrics = c.create(i.metrics),
                    i
                },
                i.update = function(e, t, n) {
                    t = t || 1e3 / 60,
                    n = n || 1;
                    var o, a = e.world,
                    d = e.timing,
                    v = e.broadphase,
                    m = [];
                    d.timestamp += t * d.timeScale;
                    var y = {
                        timestamp: d.timestamp
                    };
                    u.trigger(e, "beforeUpdate", y);
                    var g = p.allBodies(a),
                    x = p.allConstraints(a);
                    for (c.reset(e.metrics), e.enableSleeping && r.update(g, d.timeScale), i._bodiesApplyGravity(g, a.gravity), i._bodiesUpdate(g, t, d.timeScale, n, a.bounds), f.preSolveAll(g), o = 0; o < e.constraintIterations; o++) f.solveAll(x, d.timeScale);
                    f.postSolveAll(g),
                    v.controller ? (a.isModified && v.controller.clear(v), v.controller.update(v, g, e, a.isModified), m = v.pairsList) : m = g,
                    a.isModified && p.setModified(a, !1, !1, !0);
                    var h = v.detector(m, e),
                    b = e.pairs,
                    w = d.timestamp;
                    for (l.update(b, h, w), l.removeOld(b, w), e.enableSleeping && r.afterCollisions(b.list, d.timeScale), b.collisionStart.length > 0 && u.trigger(e, "collisionStart", {
                        pairs: b.collisionStart
                    }), s.preSolvePosition(b.list), o = 0; o < e.positionIterations; o++) s.solvePosition(b.list, d.timeScale);
                    for (s.postSolvePosition(g), f.preSolveAll(g), o = 0; o < e.constraintIterations; o++) f.solveAll(x, d.timeScale);
                    for (f.postSolveAll(g), s.preSolveVelocity(b.list), o = 0; o < e.velocityIterations; o++) s.solveVelocity(b.list, d.timeScale);
                    return b.collisionActive.length > 0 && u.trigger(e, "collisionActive", {
                        pairs: b.collisionActive
                    }),
                    b.collisionEnd.length > 0 && u.trigger(e, "collisionEnd", {
                        pairs: b.collisionEnd
                    }),
                    c.update(e.metrics, e),
                    i._bodiesClearForces(g),
                    u.trigger(e, "afterUpdate", y),
                    e
                },
                i.merge = function(e, t) {
                    if (v.extend(e, t), t.world) {
                        e.world = t.world,
                        i.clear(e);
                        for (var n = p.allBodies(e.world), o = 0; o < n.length; o++) {
                            var s = n[o];
                            r.set(s, !1),
                            s.id = v.nextId()
                        }
                    }
                },
                i.clear = function(e) {
                    var t = e.world;
                    l.clear(e.pairs);
                    var n = e.broadphase;
                    if (n.controller) {
                        var i = p.allBodies(t);
                        n.controller.clear(n),
                        n.controller.update(n, i, e, !0)
                    }
                },
                i._bodiesClearForces = function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        n.force.x = 0,
                        n.force.y = 0,
                        n.torque = 0
                    }
                },
                i._bodiesApplyGravity = function(e, t) {
                    var n = void 0 !== t.scale ? t.scale: .001;
                    if ((0 !== t.x || 0 !== t.y) && 0 !== n) for (var i = 0; i < e.length; i++) {
                        var o = e[i];
                        o.isStatic || o.isSleeping || (o.force.y += o.mass * t.y * n, o.force.x += o.mass * t.x * n)
                    }
                },
                i._bodiesUpdate = function(e, t, n, i, o) {
                    for (var r = 0; r < e.length; r++) {
                        var s = e[r];
                        s.isStatic || s.isSleeping || m.update(s, t, n, i)
                    }
                }
            },
            function(e, t, n) {
                var i = {};
                e.exports = i;
                var o = n(5),
                r = n(0);
                i.create = function(e) {
                    return r.extend({
                        extended: !1,
                        narrowDetections: 0,
                        narrowphaseTests: 0,
                        narrowReuse: 0,
                        narrowReuseCount: 0,
                        midphaseTests: 0,
                        broadphaseTests: 0,
                        narrowEff: 1e-4,
                        midEff: 1e-4,
                        broadEff: 1e-4,
                        collisions: 0,
                        buckets: 0,
                        bodies: 0,
                        pairs: 0
                    },
                    !1, e)
                },
                i.reset = function(e) {
                    e.extended && (e.narrowDetections = 0, e.narrowphaseTests = 0, e.narrowReuse = 0, e.narrowReuseCount = 0, e.midphaseTests = 0, e.broadphaseTests = 0, e.narrowEff = 0, e.midEff = 0, e.broadEff = 0, e.collisions = 0, e.buckets = 0, e.pairs = 0, e.bodies = 0)
                },
                i.update = function(e, t) {
                    if (e.extended) {
                        var n = t.world,
                        i = o.allBodies(n);
                        e.collisions = e.narrowDetections,
                        e.pairs = t.pairs.list.length,
                        e.bodies = i.length,
                        e.midEff = (e.narrowDetections / (e.midphaseTests || 1)).toFixed(2),
                        e.narrowEff = (e.narrowDetections / (e.narrowphaseTests || 1)).toFixed(2),
                        e.broadEff = (1 - e.broadphaseTests / (i.length || 1)).toFixed(2),
                        e.narrowReuse = (e.narrowReuseCount / (e.narrowphaseTests || 1)).toFixed(2)
                    }
                }
            },
            function(e, t, n) {
                var i = e.exports = n(25);
                i.Body = n(6),
                i.Composite = n(5),
                i.World = n(19),
                i.Contact = n(18),
                i.Detector = n(12),
                i.Grid = n(11),
                i.Pairs = n(20),
                i.Pair = n(9),
                i.Query = n(26),
                i.Resolver = n(21),
                i.SAT = n(13),
                i.Constraint = n(8),
                i.MouseConstraint = n(28),
                i.Common = n(0),
                i.Engine = n(22),
                i.Events = n(4),
                i.Mouse = n(14),
                i.Runner = n(29),
                i.Sleeping = n(7),
                i.Plugin = n(17),
                i.Metrics = n(23),
                i.Bodies = n(16),
                i.Composites = n(30),
                i.Axes = n(15),
                i.Bounds = n(1),
                i.Svg = n(31),
                i.Vector = n(2),
                i.Vertices = n(3),
                i.Render = n(10),
                i.RenderPixi = n(32),
                i.World.add = i.Composite.add,
                i.World.remove = i.Composite.remove,
                i.World.addComposite = i.Composite.addComposite,
                i.World.addBody = i.Composite.addBody,
                i.World.addConstraint = i.Composite.addConstraint,
                i.World.clear = i.Composite.clear,
                i.Engine.run = i.Runner.run
            },
            function(e, t, n) {
                var i = {};
                e.exports = i;
                var o = n(17),
                r = n(0);
                i.name = "matter-js",
                i.version = "0.16.1",
                i.uses = [],
                i.used = [],
                i.use = function() {
                    o.use(i, Array.prototype.slice.call(arguments))
                },
                i.before = function(e, t) {
                    return e = e.replace(/^Matter./, ""),
                    r.chainPathBefore(i, e, t)
                },
                i.after = function(e, t) {
                    return e = e.replace(/^Matter./, ""),
                    r.chainPathAfter(i, e, t)
                }
            },
            function(e, t, n) {
                var i = {};
                e.exports = i;
                var o = n(2),
                r = n(13),
                s = n(1),
                a = n(16),
                l = n(3);
                i.collides = function(e, t) {
                    for (var n = [], i = 0; i < t.length; i++) {
                        var o = t[i];
                        if (s.overlaps(o.bounds, e.bounds)) for (var a = 1 === o.parts.length ? 0 : 1; a < o.parts.length; a++) {
                            var l = o.parts[a];
                            if (s.overlaps(l.bounds, e.bounds)) {
                                var c = r.collides(l, e);
                                if (c.collided) {
                                    n.push(c);
                                    break
                                }
                            }
                        }
                    }
                    return n
                },
                i.ray = function(e, t, n, r) {
                    r = r || 1e-100;
                    for (var s = o.angle(t, n), l = o.magnitude(o.sub(t, n)), c = .5 * (n.x + t.x), d = .5 * (n.y + t.y), u = a.rectangle(c, d, l, r, {
                        angle: s
                    }), p = i.collides(u, e), f = 0; f < p.length; f += 1) {
                        var v = p[f];
                        v.body = v.bodyB = v.bodyA
                    }
                    return p
                },
                i.region = function(e, t, n) {
                    for (var i = [], o = 0; o < e.length; o++) {
                        var r = e[o],
                        a = s.overlaps(r.bounds, t); (a && !n || !a && n) && i.push(r)
                    }
                    return i
                },
                i.point = function(e, t) {
                    for (var n = [], i = 0; i < e.length; i++) {
                        var o = e[i];
                        if (s.contains(o.bounds, t)) for (var r = 1 === o.parts.length ? 0 : 1; r < o.parts.length; r++) {
                            var a = o.parts[r];
                            if (s.contains(a.bounds, t) && l.contains(a.vertices, t)) {
                                n.push(o);
                                break
                            }
                        }
                    }
                    return n
                }
            },
            function(t, n) {
                if (void 0 === e) {
                    var i = new Error("Cannot find module 'undefined'");
                    throw i.code = "MODULE_NOT_FOUND",
                    i
                }
                t.exports = e
            },
            function(e, t, n) {
                var i = {};
                e.exports = i;
                var o = n(3),
                r = n(7),
                s = n(14),
                a = n(4),
                l = n(12),
                c = n(8),
                d = n(5),
                u = n(0),
                p = n(1);
                i.create = function(e, t) {
                    var n = (e ? e.mouse: null) || (t ? t.mouse: null);
                    n || (e && e.render && e.render.canvas ? n = s.create(e.render.canvas) : t && t.element ? n = s.create(t.element) : (n = s.create(), u.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));
                    var o = {
                        type: "mouseConstraint",
                        mouse: n,
                        element: null,
                        body: null,
                        constraint: c.create({
                            label: "Mouse Constraint",
                            pointA: n.position,
                            pointB: {
                                x: 0,
                                y: 0
                            },
                            length: .01,
                            stiffness: .1,
                            angularStiffness: 1,
                            render: {
                                strokeStyle: "#90EE90",
                                lineWidth: 3
                            }
                        }),
                        collisionFilter: {
                            category: 1,
                            mask: 4294967295,
                            group: 0
                        }
                    },
                    r = u.extend(o, t);
                    return a.on(e, "beforeUpdate",
                    function() {
                        var t = d.allBodies(e.world);
                        i.update(r, t),
                        i._triggerEvents(r)
                    }),
                    r
                },
                i.update = function(e, t) {
                    var n = e.mouse,
                    i = e.constraint,
                    s = e.body;
                    if (0 === n.button) {
                        if (i.bodyB) r.set(i.bodyB, !1),
                        i.pointA = n.position;
                        else for (var c = 0; c < t.length; c++) if (s = t[c], p.contains(s.bounds, n.position) && l.canCollide(s.collisionFilter, e.collisionFilter)) for (var d = s.parts.length > 1 ? 1 : 0; d < s.parts.length; d++) {
                            var u = s.parts[d];
                            if (o.contains(u.vertices, n.position)) {
                                i.pointA = n.position,
                                i.bodyB = e.body = s,
                                i.pointB = {
                                    x: n.position.x - s.position.x,
                                    y: n.position.y - s.position.y
                                },
                                i.angleB = s.angle,
                                r.set(s, !1),
                                a.trigger(e, "startdrag", {
                                    mouse: n,
                                    body: s
                                });
                                break
                            }
                        }
                    } else i.bodyB = e.body = null,
                    i.pointB = null,
                    s && a.trigger(e, "enddrag", {
                        mouse: n,
                        body: s
                    })
                },
                i._triggerEvents = function(e) {
                    var t = e.mouse,
                    n = t.sourceEvents;
                    n.mousemove && a.trigger(e, "mousemove", {
                        mouse: t
                    }),
                    n.mousedown && a.trigger(e, "mousedown", {
                        mouse: t
                    }),
                    n.mouseup && a.trigger(e, "mouseup", {
                        mouse: t
                    }),
                    s.clearSourceEvents(t)
                }
            },
            function(e, t, n) {
                var i = {};
                e.exports = i;
                var o = n(4),
                r = n(22),
                s = n(0); !
                function() {
                    var e, t, n; ("undefined" != typeof window && (e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame), e) || (e = function(e) {
                        n = setTimeout(function() {
                            e(s.now())
                        },
                        1e3 / 60)
                    },
                    t = function() {
                        clearTimeout(n)
                    });
                    i.create = function(e) {
                        var t = s.extend({
                            fps: 60,
                            correction: 1,
                            deltaSampleSize: 60,
                            counterTimestamp: 0,
                            frameCounter: 0,
                            deltaHistory: [],
                            timePrev: null,
                            timeScalePrev: 1,
                            frameRequestId: null,
                            isFixed: !1,
                            enabled: !0
                        },
                        e);
                        return t.delta = t.delta || 1e3 / t.fps,
                        t.deltaMin = t.deltaMin || 1e3 / t.fps,
                        t.deltaMax = t.deltaMax || 1e3 / (.5 * t.fps),
                        t.fps = 1e3 / t.delta,
                        t
                    },
                    i.run = function(t, n) {
                        return void 0 !== t.positionIterations && (n = t, t = i.create()),
                        function o(r) {
                            t.frameRequestId = e(o),
                            r && t.enabled && i.tick(t, n, r)
                        } (),
                        t
                    },
                    i.tick = function(e, t, n) {
                        var i, s = t.timing,
                        a = 1,
                        l = {
                            timestamp: s.timestamp
                        };
                        o.trigger(e, "beforeTick", l),
                        o.trigger(t, "beforeTick", l),
                        e.isFixed ? i = e.delta: (i = n - e.timePrev || e.delta, e.timePrev = n, e.deltaHistory.push(i), e.deltaHistory = e.deltaHistory.slice( - e.deltaSampleSize), a = (i = (i = (i = Math.min.apply(null, e.deltaHistory)) < e.deltaMin ? e.deltaMin: i) > e.deltaMax ? e.deltaMax: i) / e.delta, e.delta = i),
                        0 !== e.timeScalePrev && (a *= s.timeScale / e.timeScalePrev),
                        0 === s.timeScale && (a = 0),
                        e.timeScalePrev = s.timeScale,
                        e.correction = a,
                        e.frameCounter += 1,
                        n - e.counterTimestamp >= 1e3 && (e.fps = e.frameCounter * ((n - e.counterTimestamp) / 1e3), e.counterTimestamp = n, e.frameCounter = 0),
                        o.trigger(e, "tick", l),
                        o.trigger(t, "tick", l),
                        t.world.isModified && t.render && t.render.controller && t.render.controller.clear && t.render.controller.clear(t.render),
                        o.trigger(e, "beforeUpdate", l),
                        r.update(t, i, a),
                        o.trigger(e, "afterUpdate", l),
                        t.render && t.render.controller && (o.trigger(e, "beforeRender", l), o.trigger(t, "beforeRender", l), t.render.controller.world(t.render), o.trigger(e, "afterRender", l), o.trigger(t, "afterRender", l)),
                        o.trigger(e, "afterTick", l),
                        o.trigger(t, "afterTick", l)
                    },
                    i.stop = function(e) {
                        t(e.frameRequestId)
                    },
                    i.start = function(e, t) {
                        i.run(e, t)
                    }
                } ()
            },
            function(e, t, n) {
                var i = {};
                e.exports = i;
                var o = n(5),
                r = n(8),
                s = n(0),
                a = n(6),
                l = n(16);
                i.stack = function(e, t, n, i, r, s, l) {
                    for (var c, d = o.create({
                        label: "Stack"
                    }), u = e, p = t, f = 0, v = 0; v < i; v++) {
                        for (var m = 0,
                        y = 0; y < n; y++) {
                            var g = l(u, p, y, v, c, f);
                            if (g) {
                                var x = g.bounds.max.y - g.bounds.min.y,
                                h = g.bounds.max.x - g.bounds.min.x;
                                x > m && (m = x),
                                a.translate(g, {
                                    x: .5 * h,
                                    y: .5 * x
                                }),
                                u = g.bounds.max.x + r,
                                o.addBody(d, g),
                                c = g,
                                f += 1
                            } else u += r
                        }
                        p += m + s,
                        u = e
                    }
                    return d
                },
                i.chain = function(e, t, n, i, a, l) {
                    for (var c = e.bodies,
                    d = 1; d < c.length; d++) {
                        var u = c[d - 1],
                        p = c[d],
                        f = u.bounds.max.y - u.bounds.min.y,
                        v = u.bounds.max.x - u.bounds.min.x,
                        m = p.bounds.max.y - p.bounds.min.y,
                        y = {
                            bodyA: u,
                            pointA: {
                                x: v * t,
                                y: f * n
                            },
                            bodyB: p,
                            pointB: {
                                x: (p.bounds.max.x - p.bounds.min.x) * i,
                                y: m * a
                            }
                        },
                        g = s.extend(y, l);
                        o.addConstraint(e, r.create(g))
                    }
                    return e.label += " Chain",
                    e
                },
                i.mesh = function(e, t, n, i, a) {
                    var l, c, d, u, p, f = e.bodies;
                    for (l = 0; l < n; l++) {
                        for (c = 1; c < t; c++) d = f[c - 1 + l * t],
                        u = f[c + l * t],
                        o.addConstraint(e, r.create(s.extend({
                            bodyA: d,
                            bodyB: u
                        },
                        a)));
                        if (l > 0) for (c = 0; c < t; c++) d = f[c + (l - 1) * t],
                        u = f[c + l * t],
                        o.addConstraint(e, r.create(s.extend({
                            bodyA: d,
                            bodyB: u
                        },
                        a))),
                        i && c > 0 && (p = f[c - 1 + (l - 1) * t], o.addConstraint(e, r.create(s.extend({
                            bodyA: p,
                            bodyB: u
                        },
                        a)))),
                        i && c < t - 1 && (p = f[c + 1 + (l - 1) * t], o.addConstraint(e, r.create(s.extend({
                            bodyA: p,
                            bodyB: u
                        },
                        a))))
                    }
                    return e.label += " Mesh",
                    e
                },
                i.pyramid = function(e, t, n, o, r, s, l) {
                    return i.stack(e, t, n, o, r, s,
                    function(t, i, s, c, d, u) {
                        var p = Math.min(o, Math.ceil(n / 2)),
                        f = d ? d.bounds.max.x - d.bounds.min.x: 0;
                        if (! (c > p || s < (c = p - c) || s > n - 1 - c)) return 1 === u && a.translate(d, {
                            x: (s + (n % 2 == 1 ? 1 : -1)) * f,
                            y: 0
                        }),
                        l(e + (d ? s * f: 0) + s * r, i, s, c, d, u)
                    })
                },
                i.newtonsCradle = function(e, t, n, i, s) {
                    for (var a = o.create({
                        label: "Newtons Cradle"
                    }), c = 0; c < n; c++) {
                        var d = l.circle(e + c * (1.9 * i), t + s, i, {
                            inertia: 1 / 0,
                            restitution: 1,
                            friction: 0,
                            frictionAir: 1e-4,
                            slop: 1
                        }),
                        u = r.create({
                            pointA: {
                                x: e + c * (1.9 * i),
                                y: t
                            },
                            bodyB: d
                        });
                        o.addBody(a, d),
                        o.addConstraint(a, u)
                    }
                    return a
                },
                i.car = function(e, t, n, i, s) {
                    var c = a.nextGroup(!0),
                    d = .5 * -n + 20,
                    u = .5 * n - 20,
                    p = o.create({
                        label: "Car"
                    }),
                    f = l.rectangle(e, t, n, i, {
                        collisionFilter: {
                            group: c
                        },
                        chamfer: {
                            radius: .5 * i
                        },
                        density: 2e-4
                    }),
                    v = l.circle(e + d, t + 0, s, {
                        collisionFilter: {
                            group: c
                        },
                        friction: .8
                    }),
                    m = l.circle(e + u, t + 0, s, {
                        collisionFilter: {
                            group: c
                        },
                        friction: .8
                    }),
                    y = r.create({
                        bodyB: f,
                        pointB: {
                            x: d,
                            y: 0
                        },
                        bodyA: v,
                        stiffness: 1,
                        length: 0
                    }),
                    g = r.create({
                        bodyB: f,
                        pointB: {
                            x: u,
                            y: 0
                        },
                        bodyA: m,
                        stiffness: 1,
                        length: 0
                    });
                    return o.addBody(p, f),
                    o.addBody(p, v),
                    o.addBody(p, m),
                    o.addConstraint(p, y),
                    o.addConstraint(p, g),
                    p
                },
                i.softBody = function(e, t, n, o, r, a, c, d, u, p) {
                    u = s.extend({
                        inertia: 1 / 0
                    },
                    u),
                    p = s.extend({
                        stiffness: .2,
                        render: {
                            type: "line",
                            anchors: !1
                        }
                    },
                    p);
                    var f = i.stack(e, t, n, o, r, a,
                    function(e, t) {
                        return l.circle(e, t, d, u)
                    });
                    return i.mesh(f, n, o, c, p),
                    f.label = "Soft Body",
                    f
                }
            },
            function(e, t, n) {
                var i = {};
                e.exports = i;
                n(1);
                var o = n(0);
                i.pathToVertices = function(e, t) {
                    "undefined" == typeof window || "SVGPathSeg" in window || o.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");
                    var n, r, s, a, l, c, d, u, p, f, v, m = [],
                    y = 0,
                    g = 0,
                    x = 0;
                    t = t || 15;
                    var h = function(e, t, n) {
                        var i = n % 2 == 1 && n > 1;
                        if (!p || e != p.x || t != p.y) {
                            p && i ? (f = p.x, v = p.y) : (f = 0, v = 0);
                            var o = {
                                x: f + e,
                                y: v + t
                            }; ! i && p || (p = o),
                            m.push(o),
                            g = f + e,
                            x = v + t
                        }
                    },
                    b = function(e) {
                        var t = e.pathSegTypeAsLetter.toUpperCase();
                        if ("Z" !== t) {
                            switch (t) {
                            case "M":
                            case "L":
                            case "T":
                            case "C":
                            case "S":
                            case "Q":
                                g = e.x,
                                x = e.y;
                                break;
                            case "H":
                                g = e.x;
                                break;
                            case "V":
                                x = e.y
                            }
                            h(g, x, e.pathSegType)
                        }
                    };
                    for (i._svgPathToAbsolute(e), s = e.getTotalLength(), c = [], n = 0; n < e.pathSegList.numberOfItems; n += 1) c.push(e.pathSegList.getItem(n));
                    for (d = c.concat(); y < s;) {
                        if ((l = c[e.getPathSegAtLength(y)]) != u) {
                            for (; d.length && d[0] != l;) b(d.shift());
                            u = l
                        }
                        switch (l.pathSegTypeAsLetter.toUpperCase()) {
                        case "C":
                        case "T":
                        case "S":
                        case "Q":
                        case "A":
                            a = e.getPointAtLength(y),
                            h(a.x, a.y, 0)
                        }
                        y += t
                    }
                    for (n = 0, r = d.length; n < r; ++n) b(d[n]);
                    return m
                },
                i._svgPathToAbsolute = function(e) {
                    for (var t, n, i, o, r, s, a = e.pathSegList,
                    l = 0,
                    c = 0,
                    d = a.numberOfItems,
                    u = 0; u < d; ++u) {
                        var p = a.getItem(u),
                        f = p.pathSegTypeAsLetter;
                        if (/[MLHVCSQTA]/.test(f))"x" in p && (l = p.x),
                        "y" in p && (c = p.y);
                        else switch ("x1" in p && (i = l + p.x1), "x2" in p && (r = l + p.x2), "y1" in p && (o = c + p.y1), "y2" in p && (s = c + p.y2), "x" in p && (l += p.x), "y" in p && (c += p.y), f) {
                        case "m":
                            a.replaceItem(e.createSVGPathSegMovetoAbs(l, c), u);
                            break;
                        case "l":
                            a.replaceItem(e.createSVGPathSegLinetoAbs(l, c), u);
                            break;
                        case "h":
                            a.replaceItem(e.createSVGPathSegLinetoHorizontalAbs(l), u);
                            break;
                        case "v":
                            a.replaceItem(e.createSVGPathSegLinetoVerticalAbs(c), u);
                            break;
                        case "c":
                            a.replaceItem(e.createSVGPathSegCurvetoCubicAbs(l, c, i, o, r, s), u);
                            break;
                        case "s":
                            a.replaceItem(e.createSVGPathSegCurvetoCubicSmoothAbs(l, c, r, s), u);
                            break;
                        case "q":
                            a.replaceItem(e.createSVGPathSegCurvetoQuadraticAbs(l, c, i, o), u);
                            break;
                        case "t":
                            a.replaceItem(e.createSVGPathSegCurvetoQuadraticSmoothAbs(l, c), u);
                            break;
                        case "a":
                            a.replaceItem(e.createSVGPathSegArcAbs(l, c, p.r1, p.r2, p.angle, p.largeArcFlag, p.sweepFlag), u);
                            break;
                        case "z":
                        case "Z":
                            l = t,
                            c = n
                        }
                        "M" != f && "m" != f || (t = l, n = c)
                    }
                }
            },
            function(e, t, n) {
                var i = {};
                e.exports = i;
                var o = n(1),
                r = n(5),
                s = n(0),
                a = n(4),
                l = n(2); !
                function() {
                    var e, t;
                    "undefined" != typeof window && (e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
                    function(e) {
                        window.setTimeout(function() {
                            e(s.now())
                        },
                        1e3 / 60)
                    },
                    t = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame),
                    i.create = function(e) {
                        s.warn("RenderPixi.create: Matter.RenderPixi is deprecated (see docs)");
                        var t = {
                            controller: i,
                            engine: null,
                            element: null,
                            frameRequestId: null,
                            canvas: null,
                            renderer: null,
                            container: null,
                            spriteContainer: null,
                            pixiOptions: null,
                            options: {
                                width: 800,
                                height: 600,
                                background: "#fafafa",
                                wireframeBackground: "#222",
                                hasBounds: !1,
                                enabled: !0,
                                wireframes: !0,
                                showSleeping: !0,
                                showDebug: !1,
                                showBroadphase: !1,
                                showBounds: !1,
                                showVelocity: !1,
                                showCollisions: !1,
                                showAxes: !1,
                                showPositions: !1,
                                showAngleIndicator: !1,
                                showIds: !1,
                                showShadows: !1
                            }
                        },
                        n = s.extend(t, e),
                        o = !n.options.wireframes && "transparent" === n.options.background;
                        return n.pixiOptions = n.pixiOptions || {
                            view: n.canvas,
                            transparent: o,
                            antialias: !0,
                            backgroundColor: e.background
                        },
                        n.mouse = e.mouse,
                        n.engine = e.engine,
                        n.renderer = n.renderer || new PIXI.WebGLRenderer(n.options.width, n.options.height, n.pixiOptions),
                        n.container = n.container || new PIXI.Container,
                        n.spriteContainer = n.spriteContainer || new PIXI.Container,
                        n.canvas = n.canvas || n.renderer.view,
                        n.bounds = n.bounds || {
                            min: {
                                x: 0,
                                y: 0
                            },
                            max: {
                                x: n.options.width,
                                y: n.options.height
                            }
                        },
                        a.on(n.engine, "beforeUpdate",
                        function() {
                            i.clear(n)
                        }),
                        n.textures = {},
                        n.sprites = {},
                        n.primitives = {},
                        n.container.addChild(n.spriteContainer),
                        s.isElement(n.element) ? n.element.appendChild(n.canvas) : s.warn('No "render.element" passed, "render.canvas" was not inserted into document.'),
                        n.canvas.oncontextmenu = function() {
                            return ! 1
                        },
                        n.canvas.onselectstart = function() {
                            return ! 1
                        },
                        n
                    },
                    i.run = function(t) { !
                        function n(o) {
                            t.frameRequestId = e(n),
                            i.world(t)
                        } ()
                    },
                    i.stop = function(e) {
                        t(e.frameRequestId)
                    },
                    i.clear = function(e) {
                        for (var t = e.container,
                        n = e.spriteContainer; t.children[0];) t.removeChild(t.children[0]);
                        for (; n.children[0];) n.removeChild(n.children[0]);
                        var i = e.sprites["bg-0"];
                        e.textures = {},
                        e.sprites = {},
                        e.primitives = {},
                        e.sprites["bg-0"] = i,
                        i && t.addChildAt(i, 0),
                        e.container.addChild(e.spriteContainer),
                        e.currentBackground = null,
                        t.scale.set(1, 1),
                        t.position.set(0, 0)
                    },
                    i.setBackground = function(e, t) {
                        if (e.currentBackground !== t) {
                            var n = t.indexOf && -1 !== t.indexOf("#"),
                            i = e.sprites["bg-0"];
                            if (n) {
                                var o = s.colorToNumber(t);
                                e.renderer.backgroundColor = o,
                                i && e.container.removeChild(i)
                            } else if (!i) {
                                var r = d(e, t); (i = e.sprites["bg-0"] = new PIXI.Sprite(r)).position.x = 0,
                                i.position.y = 0,
                                e.container.addChildAt(i, 0)
                            }
                            e.currentBackground = t
                        }
                    },
                    i.world = function(e) {
                        var t, n = e.engine.world,
                        s = e.renderer,
                        a = e.container,
                        c = e.options,
                        d = r.allBodies(n),
                        u = r.allConstraints(n),
                        p = [];
                        c.wireframes ? i.setBackground(e, c.wireframeBackground) : i.setBackground(e, c.background);
                        var f = e.bounds.max.x - e.bounds.min.x,
                        v = e.bounds.max.y - e.bounds.min.y,
                        m = f / e.options.width,
                        y = v / e.options.height;
                        if (c.hasBounds) {
                            for (t = 0; t < d.length; t++) {
                                var g = d[t];
                                g.render.sprite.visible = o.overlaps(g.bounds, e.bounds)
                            }
                            for (t = 0; t < u.length; t++) {
                                var x = u[t],
                                h = x.bodyA,
                                b = x.bodyB,
                                w = x.pointA,
                                S = x.pointB;
                                h && (w = l.add(h.position, x.pointA)),
                                b && (S = l.add(b.position, x.pointB)),
                                w && S && ((o.contains(e.bounds, w) || o.contains(e.bounds, S)) && p.push(x))
                            }
                            a.scale.set(1 / m, 1 / y),
                            a.position.set( - e.bounds.min.x * (1 / m), -e.bounds.min.y * (1 / y))
                        } else p = u;
                        for (t = 0; t < d.length; t++) i.body(e, d[t]);
                        for (t = 0; t < p.length; t++) i.constraint(e, p[t]);
                        s.render(a)
                    },
                    i.constraint = function(e, t) {
                        e.engine;
                        var n = t.bodyA,
                        i = t.bodyB,
                        o = t.pointA,
                        r = t.pointB,
                        a = e.container,
                        l = t.render,
                        c = "c-" + t.id,
                        d = e.primitives[c];
                        d || (d = e.primitives[c] = new PIXI.Graphics),
                        l.visible && t.pointA && t.pointB ? ( - 1 === s.indexOf(a.children, d) && a.addChild(d), d.clear(), d.beginFill(0, 0), d.lineStyle(l.lineWidth, s.colorToNumber(l.strokeStyle), 1), n ? d.moveTo(n.position.x + o.x, n.position.y + o.y) : d.moveTo(o.x, o.y), i ? d.lineTo(i.position.x + r.x, i.position.y + r.y) : d.lineTo(r.x, r.y), d.endFill()) : d.clear()
                    },
                    i.body = function(e, t) {
                        e.engine;
                        var i = t.render;
                        if (i.visible) if (i.sprite && i.sprite.texture) {
                            var o = "b-" + t.id,
                            r = e.sprites[o],
                            a = e.spriteContainer;
                            r || (r = e.sprites[o] = n(e, t)),
                            -1 === s.indexOf(a.children, r) && a.addChild(r),
                            r.position.x = t.position.x,
                            r.position.y = t.position.y,
                            r.rotation = t.angle,
                            r.scale.x = i.sprite.xScale || 1,
                            r.scale.y = i.sprite.yScale || 1
                        } else {
                            var l = "b-" + t.id,
                            d = e.primitives[l],
                            u = e.container;
                            d || ((d = e.primitives[l] = c(e, t)).initialAngle = t.angle),
                            -1 === s.indexOf(u.children, d) && u.addChild(d),
                            d.position.x = t.position.x,
                            d.position.y = t.position.y,
                            d.rotation = t.angle - d.initialAngle
                        }
                    };
                    var n = function(e, t) {
                        var n = t.render.sprite.texture,
                        i = d(e, n),
                        o = new PIXI.Sprite(i);
                        return o.anchor.x = t.render.sprite.xOffset,
                        o.anchor.y = t.render.sprite.yOffset,
                        o
                    },
                    c = function(e, t) {
                        var n, i = t.render,
                        o = e.options,
                        r = new PIXI.Graphics,
                        a = s.colorToNumber(i.fillStyle),
                        l = s.colorToNumber(i.strokeStyle),
                        c = s.colorToNumber(i.strokeStyle),
                        d = s.colorToNumber("#bbb"),
                        u = s.colorToNumber("#CD5C5C");
                        r.clear();
                        for (var p = t.parts.length > 1 ? 1 : 0; p < t.parts.length; p++) {
                            n = t.parts[p],
                            o.wireframes ? (r.beginFill(0, 0), r.lineStyle(1, d, 1)) : (r.beginFill(a, 1), r.lineStyle(i.lineWidth, l, 1)),
                            r.moveTo(n.vertices[0].x - t.position.x, n.vertices[0].y - t.position.y);
                            for (var f = 1; f < n.vertices.length; f++) r.lineTo(n.vertices[f].x - t.position.x, n.vertices[f].y - t.position.y);
                            r.lineTo(n.vertices[0].x - t.position.x, n.vertices[0].y - t.position.y),
                            r.endFill(),
                            (o.showAngleIndicator || o.showAxes) && (r.beginFill(0, 0), o.wireframes ? r.lineStyle(1, u, 1) : r.lineStyle(1, c), r.moveTo(n.position.x - t.position.x, n.position.y - t.position.y), r.lineTo((n.vertices[0].x + n.vertices[n.vertices.length - 1].x) / 2 - t.position.x, (n.vertices[0].y + n.vertices[n.vertices.length - 1].y) / 2 - t.position.y), r.endFill())
                        }
                        return r
                    },
                    d = function(e, t) {
                        var n = e.textures[t];
                        return n || (n = e.textures[t] = PIXI.Texture.fromImage(t)),
                        n
                    }
                } ()
            }])
        });
    },
    {}],
    "wT59": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.PixiMatter = void 0;
        var e = require("matter-js"),
        t = function() {
            function t(t) {
                this._engine = e.Engine.create(),
                this._pixiObjects = [],
                e.Engine.run(this.engine);
                var i = e.MouseConstraint.create(this.engine, {
                    mouse: e.Mouse.create(t.stage)
                });
                e.World.add(this.engine.world, i)
            }
            return Object.defineProperty(t.prototype, "engine", {
                get: function() {
                    return this._engine
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "pixiObjects", {
                get: function() {
                    return this._pixiObjects
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.update = function() {
                this._pixiObjects.forEach(function(e) {
                    return e.update()
                })
            },
            t.prototype.addToWorld = function() {
                for (var t = this,
                i = [], r = 0; r < arguments.length; r++) i[r] = arguments[r];
                i.forEach(function(i) {
                    return e.World.addBody(t.engine.world, i.body)
                }),
                this._pixiObjects = this._pixiObjects.concat(i)
            },
            t.prototype.removeFromWorld = function() {
                for (var t = this,
                i = [], r = 0; r < arguments.length; r++) i[r] = arguments[r];
                i.forEach(function(i) {
                    return e.World.remove(t.engine.world, i.body)
                }),
                this._pixiObjects = this._pixiObjects.filter(function(e) {
                    return ! i.includes(e)
                })
            },
            t
        } ();
        exports.PixiMatter = t;
    },
    {
        "matter-js": "mG0D"
    }],
    "N0iY": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.PhysicsSprite = void 0;
        var t = require("matter-js"),
        i = function() {
            function i(i, e, o) {
                void 0 === e && (e = {});
                var s = i.x,
                r = i.y,
                n = i.width,
                p = i.height;
                i.texture;
                this._sprite = i,
                this._update = o,
                this.physicsOptions = e,
                e.isCircle ? this._body = t.Bodies.circle(s, r, n / 2, e) : this._body = t.Bodies.rectangle(s, r, n, p, e)
            }
            return Object.defineProperty(i.prototype, "body", {
                get: function() {
                    return this._body
                },
                enumerable: !1,
                configurable: !0
            }),
            i.prototype.update = function() {
                this._update ? this._update({
                    position: this._body.position,
                    rotation: this._body.angle
                }) : (this._sprite.position = this._body.position, this._sprite.rotation = this._body.angle)
            },
            i
        } ();
        exports.PhysicsSprite = i;
    },
    {
        "matter-js": "mG0D"
    }],
    "UGVv": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.
    default = m;
        var e = /iPhone/i,
        i = /iPod/i,
        o = /iPad/i,
        t = /\biOS-universal(?:.+)Mac\b/i,
        n = /\bAndroid(?:.+)Mobile\b/i,
        r = /Android/i,
        a = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
        d = /Silk/i,
        l = /Windows Phone/i,
        p = /\bWindows(?:.+)ARM\b/i,
        s = /BlackBerry/i,
        u = /BB10/i,
        b = /Opera Mini/i,
        c = /\b(CriOS|Chrome)(?:.+)Mobile/i,
        h = /Mobile(?:.+)Firefox\b/i,
        v = function(e) {
            return void 0 !== e && "MacIntel" === e.platform && "number" == typeof e.maxTouchPoints && e.maxTouchPoints > 1 && "undefined" == typeof MSStream
        };
        function f(e) {
            return function(i) {
                return i.test(e)
            }
        }
        function m(m) {
            var g = {
                userAgent: "",
                platform: "",
                maxTouchPoints: 0
            };
            m || "undefined" == typeof navigator ? "string" == typeof m ? g.userAgent = m: m && m.userAgent && (g = {
                userAgent: m.userAgent,
                platform: m.platform,
                maxTouchPoints: m.maxTouchPoints || 0
            }) : g = {
                userAgent: navigator.userAgent,
                platform: navigator.platform,
                maxTouchPoints: navigator.maxTouchPoints || 0
            };
            var A = g.userAgent,
            P = A.split("[FBAN");
            void 0 !== P[1] && (A = P[0]),
            void 0 !== (P = A.split("Twitter"))[1] && (A = P[0]);
            var w = f(A),
            x = {
                apple: {
                    phone: w(e) && !w(l),
                    ipod: w(i),
                    tablet: !w(e) && (w(o) || v(g)) && !w(l),
                    universal: w(t),
                    device: (w(e) || w(i) || w(o) || w(t) || v(g)) && !w(l)
                },
                amazon: {
                    phone: w(a),
                    tablet: !w(a) && w(d),
                    device: w(a) || w(d)
                },
                android: {
                    phone: !w(l) && w(a) || !w(l) && w(n),
                    tablet: !w(l) && !w(a) && !w(n) && (w(d) || w(r)),
                    device: !w(l) && (w(a) || w(d) || w(n) || w(r)) || w(/\bokhttp\b/i)
                },
                windows: {
                    phone: w(l),
                    tablet: w(p),
                    device: w(l) || w(p)
                },
                other: {
                    blackberry: w(s),
                    blackberry10: w(u),
                    opera: w(b),
                    firefox: w(h),
                    chrome: w(c),
                    device: w(s) || w(u) || w(b) || w(h) || w(c)
                },
                any: !1,
                phone: !1,
                tablet: !1
            };
            return x.any = x.apple.device || x.android.device || x.windows.device || x.other.device,
            x.phone = x.apple.phone || x.android.phone || x.windows.phone,
            x.tablet = x.apple.tablet || x.android.tablet || x.windows.tablet,
            x
        }
    },
    {}],
    "KzjX": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var e = {};
        Object.defineProperty(exports, "default", {
            enumerable: !0,
            get: function() {
                return t.
            default
            }
        });
        var t = n(require("./isMobile"));
        function r() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return r = function() {
                return e
            },
            e
        }
        function n(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
            default:
                e
            };
            var t = r();
            if (t && t.has(e)) return t.get(e);
            var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in e) if (Object.prototype.hasOwnProperty.call(e, u)) {
                var f = o ? Object.getOwnPropertyDescriptor(e, u) : null;
                f && (f.get || f.set) ? Object.defineProperty(n, u, f) : n[u] = e[u]
            }
            return n.
        default = e,
            t && t.set(e, n),
            n
        }
        Object.keys(t).forEach(function(r) {
            "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || r in exports && exports[r] === t[r] || Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            }))
        });
    },
    {
        "./isMobile": "UGVv"
    }],
    "APb3": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.settings = exports.isMobile = void 0;
        var e = r(require("ismobilejs"));
        function r(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        var i = (0, e.
    default)(self.navigator);
        function t(e) {
            var r = !0;
            if (i.tablet || i.phone) {
                var t;
                if (i.apple.device) if (t = navigator.userAgent.match(/OS (\d+)_(\d+)?/)) parseInt(t[1], 10) < 11 && (r = !1);
                if (i.android.device) if (t = navigator.userAgent.match(/Android\s([0-9.]*)/)) parseInt(t[1], 10) < 7 && (r = !1)
            }
            return r ? e: 4
        }
        function a() {
            return ! i.apple.device
        }
        exports.isMobile = i;
        var E = {
            MIPMAP_TEXTURES: 1,
            ANISOTROPIC_LEVEL: 0,
            RESOLUTION: 1,
            FILTER_RESOLUTION: 1,
            SPRITE_MAX_TEXTURES: t(32),
            SPRITE_BATCH_SIZE: 4096,
            RENDER_OPTIONS: {
                view: null,
                antialias: !1,
                autoDensity: !1,
                backgroundColor: 0,
                backgroundAlpha: 1,
                useContextAlpha: !0,
                clearBeforeRender: !0,
                preserveDrawingBuffer: !1,
                width: 800,
                height: 600,
                legacy: !1
            },
            GC_MODE: 0,
            GC_MAX_IDLE: 3600,
            GC_MAX_CHECK_COUNT: 600,
            WRAP_MODE: 33071,
            SCALE_MODE: 1,
            PRECISION_VERTEX: "highp",
            PRECISION_FRAGMENT: i.apple.device ? "highp": "mediump",
            CAN_UPLOAD_SAME_BUFFER: a(),
            CREATE_IMAGE_BITMAP: !1,
            ROUND_PIXELS: !1
        };
        exports.settings = E;
    },
    {
        "ismobilejs": "KzjX"
    }],
    "ETil": [function(require, module, exports) {
        "use strict";
        var E, _, T, A, N, R, O, S, L, I, P, M, U, D, C, o, t;
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.WRAP_MODES = exports.TYPES = exports.TARGETS = exports.SCALE_MODES = exports.RENDERER_TYPE = exports.PRECISION = exports.MSAA_QUALITY = exports.MIPMAP_MODES = exports.MASK_TYPES = exports.GC_MODES = exports.FORMATS = exports.ENV = exports.DRAW_MODES = exports.CLEAR_MODES = exports.BUFFER_BITS = exports.BLEND_MODES = exports.ALPHA_MODES = void 0,
        exports.ENV = E,
        function(E) {
            E[E.WEBGL_LEGACY = 0] = "WEBGL_LEGACY",
            E[E.WEBGL = 1] = "WEBGL",
            E[E.WEBGL2 = 2] = "WEBGL2"
        } (E || (exports.ENV = E = {})),
        exports.RENDERER_TYPE = _,
        function(E) {
            E[E.UNKNOWN = 0] = "UNKNOWN",
            E[E.WEBGL = 1] = "WEBGL",
            E[E.CANVAS = 2] = "CANVAS"
        } (_ || (exports.RENDERER_TYPE = _ = {})),
        exports.BUFFER_BITS = T,
        function(E) {
            E[E.COLOR = 16384] = "COLOR",
            E[E.DEPTH = 256] = "DEPTH",
            E[E.STENCIL = 1024] = "STENCIL"
        } (T || (exports.BUFFER_BITS = T = {})),
        exports.BLEND_MODES = A,
        function(E) {
            E[E.NORMAL = 0] = "NORMAL",
            E[E.ADD = 1] = "ADD",
            E[E.MULTIPLY = 2] = "MULTIPLY",
            E[E.SCREEN = 3] = "SCREEN",
            E[E.OVERLAY = 4] = "OVERLAY",
            E[E.DARKEN = 5] = "DARKEN",
            E[E.LIGHTEN = 6] = "LIGHTEN",
            E[E.COLOR_DODGE = 7] = "COLOR_DODGE",
            E[E.COLOR_BURN = 8] = "COLOR_BURN",
            E[E.HARD_LIGHT = 9] = "HARD_LIGHT",
            E[E.SOFT_LIGHT = 10] = "SOFT_LIGHT",
            E[E.DIFFERENCE = 11] = "DIFFERENCE",
            E[E.EXCLUSION = 12] = "EXCLUSION",
            E[E.HUE = 13] = "HUE",
            E[E.SATURATION = 14] = "SATURATION",
            E[E.COLOR = 15] = "COLOR",
            E[E.LUMINOSITY = 16] = "LUMINOSITY",
            E[E.NORMAL_NPM = 17] = "NORMAL_NPM",
            E[E.ADD_NPM = 18] = "ADD_NPM",
            E[E.SCREEN_NPM = 19] = "SCREEN_NPM",
            E[E.NONE = 20] = "NONE",
            E[E.SRC_OVER = 0] = "SRC_OVER",
            E[E.SRC_IN = 21] = "SRC_IN",
            E[E.SRC_OUT = 22] = "SRC_OUT",
            E[E.SRC_ATOP = 23] = "SRC_ATOP",
            E[E.DST_OVER = 24] = "DST_OVER",
            E[E.DST_IN = 25] = "DST_IN",
            E[E.DST_OUT = 26] = "DST_OUT",
            E[E.DST_ATOP = 27] = "DST_ATOP",
            E[E.ERASE = 26] = "ERASE",
            E[E.SUBTRACT = 28] = "SUBTRACT",
            E[E.XOR = 29] = "XOR"
        } (A || (exports.BLEND_MODES = A = {})),
        exports.DRAW_MODES = N,
        function(E) {
            E[E.POINTS = 0] = "POINTS",
            E[E.LINES = 1] = "LINES",
            E[E.LINE_LOOP = 2] = "LINE_LOOP",
            E[E.LINE_STRIP = 3] = "LINE_STRIP",
            E[E.TRIANGLES = 4] = "TRIANGLES",
            E[E.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP",
            E[E.TRIANGLE_FAN = 6] = "TRIANGLE_FAN"
        } (N || (exports.DRAW_MODES = N = {})),
        exports.FORMATS = R,
        function(E) {
            E[E.RGBA = 6408] = "RGBA",
            E[E.RGB = 6407] = "RGB",
            E[E.ALPHA = 6406] = "ALPHA",
            E[E.LUMINANCE = 6409] = "LUMINANCE",
            E[E.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA",
            E[E.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT",
            E[E.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL"
        } (R || (exports.FORMATS = R = {})),
        exports.TARGETS = O,
        function(E) {
            E[E.TEXTURE_2D = 3553] = "TEXTURE_2D",
            E[E.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP",
            E[E.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY",
            E[E.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X",
            E[E.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X",
            E[E.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y",
            E[E.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y",
            E[E.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z",
            E[E.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z"
        } (O || (exports.TARGETS = O = {})),
        exports.TYPES = S,
        function(E) {
            E[E.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE",
            E[E.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT",
            E[E.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5",
            E[E.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4",
            E[E.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1",
            E[E.FLOAT = 5126] = "FLOAT",
            E[E.HALF_FLOAT = 36193] = "HALF_FLOAT"
        } (S || (exports.TYPES = S = {})),
        exports.SCALE_MODES = L,
        function(E) {
            E[E.NEAREST = 0] = "NEAREST",
            E[E.LINEAR = 1] = "LINEAR"
        } (L || (exports.SCALE_MODES = L = {})),
        exports.WRAP_MODES = I,
        function(E) {
            E[E.CLAMP = 33071] = "CLAMP",
            E[E.REPEAT = 10497] = "REPEAT",
            E[E.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT"
        } (I || (exports.WRAP_MODES = I = {})),
        exports.MIPMAP_MODES = P,
        function(E) {
            E[E.OFF = 0] = "OFF",
            E[E.POW2 = 1] = "POW2",
            E[E.ON = 2] = "ON",
            E[E.ON_MANUAL = 3] = "ON_MANUAL"
        } (P || (exports.MIPMAP_MODES = P = {})),
        exports.ALPHA_MODES = M,
        function(E) {
            E[E.NPM = 0] = "NPM",
            E[E.UNPACK = 1] = "UNPACK",
            E[E.PMA = 2] = "PMA",
            E[E.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA",
            E[E.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD",
            E[E.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA"
        } (M || (exports.ALPHA_MODES = M = {})),
        exports.CLEAR_MODES = U,
        function(E) {
            E[E.NO = 0] = "NO",
            E[E.YES = 1] = "YES",
            E[E.AUTO = 2] = "AUTO",
            E[E.BLEND = 0] = "BLEND",
            E[E.CLEAR = 1] = "CLEAR",
            E[E.BLIT = 2] = "BLIT"
        } (U || (exports.CLEAR_MODES = U = {})),
        exports.GC_MODES = D,
        function(E) {
            E[E.AUTO = 0] = "AUTO",
            E[E.MANUAL = 1] = "MANUAL"
        } (D || (exports.GC_MODES = D = {})),
        exports.PRECISION = C,
        function(E) {
            E.LOW = "lowp",
            E.MEDIUM = "mediump",
            E.HIGH = "highp"
        } (C || (exports.PRECISION = C = {})),
        exports.MASK_TYPES = o,
        function(E) {
            E[E.NONE = 0] = "NONE",
            E[E.SCISSOR = 1] = "SCISSOR",
            E[E.STENCIL = 2] = "STENCIL",
            E[E.SPRITE = 3] = "SPRITE"
        } (o || (exports.MASK_TYPES = o = {})),
        exports.MSAA_QUALITY = t,
        function(E) {
            E[E.NONE = 0] = "NONE",
            E[E.LOW = 2] = "LOW",
            E[E.MEDIUM = 4] = "MEDIUM",
            E[E.HIGH = 8] = "HIGH"
        } (t || (exports.MSAA_QUALITY = t = {}));
    },
    {}],
    "JJlS": [function(require, module, exports) {
        "use strict";
        var e = Object.prototype.hasOwnProperty,
        t = "~";
        function n() {}
        function r(e, t, n) {
            this.fn = e,
            this.context = t,
            this.once = n || !1
        }
        function o(e, n, o, s, i) {
            if ("function" != typeof o) throw new TypeError("The listener must be a function");
            var c = new r(o, s || e, i),
            f = t ? t + n: n;
            return e._events[f] ? e._events[f].fn ? e._events[f] = [e._events[f], c] : e._events[f].push(c) : (e._events[f] = c, e._eventsCount++),
            e
        }
        function s(e, t) {
            0 == --e._eventsCount ? e._events = new n: delete e._events[t]
        }
        function i() {
            this._events = new n,
            this._eventsCount = 0
        }
        Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (t = !1)),
        i.prototype.eventNames = function() {
            var n, r, o = [];
            if (0 === this._eventsCount) return o;
            for (r in n = this._events) e.call(n, r) && o.push(t ? r.slice(1) : r);
            return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(n)) : o
        },
        i.prototype.listeners = function(e) {
            var n = t ? t + e: e,
            r = this._events[n];
            if (!r) return [];
            if (r.fn) return [r.fn];
            for (var o = 0,
            s = r.length,
            i = new Array(s); o < s; o++) i[o] = r[o].fn;
            return i
        },
        i.prototype.listenerCount = function(e) {
            var n = t ? t + e: e,
            r = this._events[n];
            return r ? r.fn ? 1 : r.length: 0
        },
        i.prototype.emit = function(e, n, r, o, s, i) {
            var c = t ? t + e: e;
            if (!this._events[c]) return ! 1;
            var f, u, a = this._events[c],
            l = arguments.length;
            if (a.fn) {
                switch (a.once && this.removeListener(e, a.fn, void 0, !0), l) {
                case 1:
                    return a.fn.call(a.context),
                    !0;
                case 2:
                    return a.fn.call(a.context, n),
                    !0;
                case 3:
                    return a.fn.call(a.context, n, r),
                    !0;
                case 4:
                    return a.fn.call(a.context, n, r, o),
                    !0;
                case 5:
                    return a.fn.call(a.context, n, r, o, s),
                    !0;
                case 6:
                    return a.fn.call(a.context, n, r, o, s, i),
                    !0
                }
                for (u = 1, f = new Array(l - 1); u < l; u++) f[u - 1] = arguments[u];
                a.fn.apply(a.context, f)
            } else {
                var v, h = a.length;
                for (u = 0; u < h; u++) switch (a[u].once && this.removeListener(e, a[u].fn, void 0, !0), l) {
                case 1:
                    a[u].fn.call(a[u].context);
                    break;
                case 2:
                    a[u].fn.call(a[u].context, n);
                    break;
                case 3:
                    a[u].fn.call(a[u].context, n, r);
                    break;
                case 4:
                    a[u].fn.call(a[u].context, n, r, o);
                    break;
                default:
                    if (!f) for (v = 1, f = new Array(l - 1); v < l; v++) f[v - 1] = arguments[v];
                    a[u].fn.apply(a[u].context, f)
                }
            }
            return ! 0
        },
        i.prototype.on = function(e, t, n) {
            return o(this, e, t, n, !1)
        },
        i.prototype.once = function(e, t, n) {
            return o(this, e, t, n, !0)
        },
        i.prototype.removeListener = function(e, n, r, o) {
            var i = t ? t + e: e;
            if (!this._events[i]) return this;
            if (!n) return s(this, i),
            this;
            var c = this._events[i];
            if (c.fn) c.fn !== n || o && !c.once || r && c.context !== r || s(this, i);
            else {
                for (var f = 0,
                u = [], a = c.length; f < a; f++)(c[f].fn !== n || o && !c[f].once || r && c[f].context !== r) && u.push(c[f]);
                u.length ? this._events[i] = 1 === u.length ? u[0] : u: s(this, i)
            }
            return this
        },
        i.prototype.removeAllListeners = function(e) {
            var r;
            return e ? (r = t ? t + e: e, this._events[r] && s(this, r)) : (this._events = new n, this._eventsCount = 0),
            this
        },
        i.prototype.off = i.prototype.removeListener,
        i.prototype.addListener = i.prototype.on,
        i.prefixed = t,
        i.EventEmitter = i,
        "undefined" != typeof module && (module.exports = i);
    },
    {}],
    "vwhv": [function(require, module, exports) {
        "use strict";
        function e(e, t, x) {
            x = x || 2;
            var i, u, v, y, o, p, a, l = t && t.length,
            h = l ? t[0] * x: e.length,
            s = n(e, 0, h, x, !0),
            c = [];
            if (!s || s.next === s.prev) return c;
            if (l && (s = f(e, t, s, x)), e.length > 80 * x) {
                i = v = e[0],
                u = y = e[1];
                for (var Z = x; Z < h; Z += x)(o = e[Z]) < i && (i = o),
                (p = e[Z + 1]) < u && (u = p),
                o > v && (v = o),
                p > y && (y = p);
                a = 0 !== (a = Math.max(v - i, y - u)) ? 1 / a: 0
            }
            return r(s, c, x, i, u, a),
            c
        }
        function n(e, n, t, r, x) {
            var i, u;
            if (x === D(e, n, t, r) > 0) for (i = n; i < t; i += r) u = A(i, e[i], e[i + 1], u);
            else for (i = t - r; i >= n; i -= r) u = A(i, e[i], e[i + 1], u);
            return u && w(u, u.next) && (B(u), u = u.next),
            u
        }
        function t(e, n) {
            if (!e) return e;
            n || (n = e);
            var t, r = e;
            do {
                if (t = !1, r.steiner || !w(r, r.next) && 0 !== g(r.prev, r, r.next)) r = r.next;
                else {
                    if (B(r), (r = n = r.prev) === r.next) break;
                    t = !0
                }
            } while ( t || r !== n );
            return n
        }
        function r(e, n, f, y, o, p, a) {
            if (e) { ! a && p && l(e, y, o, p);
                for (var h, s, c = e; e.prev !== e.next;) if (h = e.prev, s = e.next, p ? i(e, y, o, p) : x(e)) n.push(h.i / f),
                n.push(e.i / f),
                n.push(s.i / f),
                B(e),
                e = s.next,
                c = s.next;
                else if ((e = s) === c) {
                    a ? 1 === a ? r(e = u(t(e), n, f), n, f, y, o, p, 2) : 2 === a && v(e, n, f, y, o, p) : r(t(e), n, f, y, o, p, 1);
                    break
                }
            }
        }
        function x(e) {
            var n = e.prev,
            t = e,
            r = e.next;
            if (g(n, t, r) >= 0) return ! 1;
            for (var x = e.next.next; x !== e.prev;) {
                if (Z(n.x, n.y, t.x, t.y, r.x, r.y, x.x, x.y) && g(x.prev, x, x.next) >= 0) return ! 1;
                x = x.next
            }
            return ! 0
        }
        function i(e, n, t, r) {
            var x = e.prev,
            i = e,
            u = e.next;
            if (g(x, i, u) >= 0) return ! 1;
            for (var v = x.x < i.x ? x.x < u.x ? x.x: u.x: i.x < u.x ? i.x: u.x, f = x.y < i.y ? x.y < u.y ? x.y: u.y: i.y < u.y ? i.y: u.y, y = x.x > i.x ? x.x > u.x ? x.x: u.x: i.x > u.x ? i.x: u.x, o = x.y > i.y ? x.y > u.y ? x.y: u.y: i.y > u.y ? i.y: u.y, p = s(v, f, n, t, r), a = s(y, o, n, t, r), l = e.prevZ, h = e.nextZ; l && l.z >= p && h && h.z <= a;) {
                if (l !== e.prev && l !== e.next && Z(x.x, x.y, i.x, i.y, u.x, u.y, l.x, l.y) && g(l.prev, l, l.next) >= 0) return ! 1;
                if (l = l.prevZ, h !== e.prev && h !== e.next && Z(x.x, x.y, i.x, i.y, u.x, u.y, h.x, h.y) && g(h.prev, h, h.next) >= 0) return ! 1;
                h = h.nextZ
            }
            for (; l && l.z >= p;) {
                if (l !== e.prev && l !== e.next && Z(x.x, x.y, i.x, i.y, u.x, u.y, l.x, l.y) && g(l.prev, l, l.next) >= 0) return ! 1;
                l = l.prevZ
            }
            for (; h && h.z <= a;) {
                if (h !== e.prev && h !== e.next && Z(x.x, x.y, i.x, i.y, u.x, u.y, h.x, h.y) && g(h.prev, h, h.next) >= 0) return ! 1;
                h = h.nextZ
            }
            return ! 0
        }
        function u(e, n, r) {
            var x = e;
            do {
                var i = x.prev,
                u = x.next.next; ! w(i, u) && M(i, x, x.next, u) && k(i, u) && k(u, i) && (n.push(i.i / r), n.push(x.i / r), n.push(u.i / r), B(x), B(x.next), x = e = u), x = x.next
            } while ( x !== e );
            return t(x)
        }
        function v(e, n, x, i, u, v) {
            var f = e;
            do {
                for (var y = f.next.next; y !== f.prev;) {
                    if (f.i !== y.i && d(f, y)) {
                        var o = q(f, y);
                        return f = t(f, f.next),
                        o = t(o, o.next),
                        r(f, n, x, i, u, v),
                        void r(o, n, x, i, u, v)
                    }
                    y = y.next
                }
                f = f.next
            } while ( f !== e )
        }
        function f(e, r, x, i) {
            var u, v, f, p = [];
            for (u = 0, v = r.length; u < v; u++)(f = n(e, r[u] * i, u < v - 1 ? r[u + 1] * i: e.length, i, !1)) === f.next && (f.steiner = !0),
            p.push(c(f));
            for (p.sort(y), u = 0; u < p.length; u++) o(p[u], x),
            x = t(x, x.next);
            return x
        }
        function y(e, n) {
            return e.x - n.x
        }
        function o(e, n) {
            if (n = p(e, n)) {
                var r = q(n, e);
                t(n, n.next),
                t(r, r.next)
            }
        }
        function p(e, n) {
            var t, r = n,
            x = e.x,
            i = e.y,
            u = -1 / 0;
            do {
                if (i <= r.y && i >= r.next.y && r.next.y !== r.y) {
                    var v = r.x + (i - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
                    if (v <= x && v > u) {
                        if (u = v, v === x) {
                            if (i === r.y) return r;
                            if (i === r.next.y) return r.next
                        }
                        t = r.x < r.next.x ? r: r.next
                    }
                }
                r = r.next
            } while ( r !== n );
            if (!t) return null;
            if (x === u) return t;
            var f, y = t,
            o = t.x,
            p = t.y,
            l = 1 / 0;
            r = t;
            do {
                x >= r.x && r.x >= o && x !== r.x && Z(i < p ? x: u, i, o, p, i < p ? u: x, i, r.x, r.y) && (f = Math.abs(i - r.y) / (x - r.x), k(r, e) && (f < l || f === l && (r.x > t.x || r.x === t.x && a(t, r))) && (t = r, l = f)), r = r.next
            } while ( r !== y );
            return t
        }
        function a(e, n) {
            return g(e.prev, e, n.prev) < 0 && g(n.next, e, e.next) < 0
        }
        function l(e, n, t, r) {
            var x = e;
            do {
                null === x.z && (x.z = s(x.x, x.y, n, t, r)), x.prevZ = x.prev, x.nextZ = x.next, x = x.next
            } while ( x !== e );
            x.prevZ.nextZ = null,
            x.prevZ = null,
            h(x)
        }
        function h(e) {
            var n, t, r, x, i, u, v, f, y = 1;
            do {
                for (t = e, e = null, i = null, u = 0; t;) {
                    for (u++, r = t, v = 0, n = 0; n < y && (v++, r = r.nextZ); n++);
                    for (f = y; v > 0 || f > 0 && r;) 0 !== v && (0 === f || !r || t.z <= r.z) ? (x = t, t = t.nextZ, v--) : (x = r, r = r.nextZ, f--),
                    i ? i.nextZ = x: e = x,
                    x.prevZ = i,
                    i = x;
                    t = r
                }
                i.nextZ = null, y *= 2
            } while ( u > 1 );
            return e
        }
        function s(e, n, t, r, x) {
            return (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - t) * x) | e << 8)) | e << 4)) | e << 2)) | e << 1)) | (n = 1431655765 & ((n = 858993459 & ((n = 252645135 & ((n = 16711935 & ((n = 32767 * (n - r) * x) | n << 8)) | n << 4)) | n << 2)) | n << 1)) << 1
        }
        function c(e) {
            var n = e,
            t = e;
            do { (n.x < t.x || n.x === t.x && n.y < t.y) && (t = n), n = n.next
            } while ( n !== e );
            return t
        }
        function Z(e, n, t, r, x, i, u, v) {
            return (x - u) * (n - v) - (e - u) * (i - v) >= 0 && (e - u) * (r - v) - (t - u) * (n - v) >= 0 && (t - u) * (i - v) - (x - u) * (r - v) >= 0
        }
        function d(e, n) {
            return e.next.i !== n.i && e.prev.i !== n.i && !b(e, n) && (k(e, n) && k(n, e) && j(e, n) && (g(e.prev, e, n.prev) || g(e, n.prev, n)) || w(e, n) && g(e.prev, e, e.next) > 0 && g(n.prev, n, n.next) > 0)
        }
        function g(e, n, t) {
            return (n.y - e.y) * (t.x - n.x) - (n.x - e.x) * (t.y - n.y)
        }
        function w(e, n) {
            return e.x === n.x && e.y === n.y
        }
        function M(e, n, t, r) {
            var x = m(g(e, n, t)),
            i = m(g(e, n, r)),
            u = m(g(t, r, e)),
            v = m(g(t, r, n));
            return x !== i && u !== v || (!(0 !== x || !z(e, t, n)) || (!(0 !== i || !z(e, r, n)) || (!(0 !== u || !z(t, e, r)) || !(0 !== v || !z(t, n, r)))))
        }
        function z(e, n, t) {
            return n.x <= Math.max(e.x, t.x) && n.x >= Math.min(e.x, t.x) && n.y <= Math.max(e.y, t.y) && n.y >= Math.min(e.y, t.y)
        }
        function m(e) {
            return e > 0 ? 1 : e < 0 ? -1 : 0
        }
        function b(e, n) {
            var t = e;
            do {
                if (t.i !== e.i && t.next.i !== e.i && t.i !== n.i && t.next.i !== n.i && M(t, t.next, e, n)) return ! 0;
                t = t.next
            } while ( t !== e );
            return ! 1
        }
        function k(e, n) {
            return g(e.prev, e, e.next) < 0 ? g(e, n, e.next) >= 0 && g(e, e.prev, n) >= 0 : g(e, n, e.prev) < 0 || g(e, e.next, n) < 0
        }
        function j(e, n) {
            var t = e,
            r = !1,
            x = (e.x + n.x) / 2,
            i = (e.y + n.y) / 2;
            do {
                t.y > i != t.next.y > i && t.next.y !== t.y && x < (t.next.x - t.x) * (i - t.y) / (t.next.y - t.y) + t.x && (r = !r), t = t.next
            } while ( t !== e );
            return r
        }
        function q(e, n) {
            var t = new C(e.i, e.x, e.y),
            r = new C(n.i, n.x, n.y),
            x = e.next,
            i = n.prev;
            return e.next = n,
            n.prev = e,
            t.next = x,
            x.prev = t,
            r.next = t,
            t.prev = r,
            i.next = r,
            r.prev = i,
            r
        }
        function A(e, n, t, r) {
            var x = new C(e, n, t);
            return r ? (x.next = r.next, x.prev = r, r.next.prev = x, r.next = x) : (x.prev = x, x.next = x),
            x
        }
        function B(e) {
            e.next.prev = e.prev,
            e.prev.next = e.next,
            e.prevZ && (e.prevZ.nextZ = e.nextZ),
            e.nextZ && (e.nextZ.prevZ = e.prevZ)
        }
        function C(e, n, t) {
            this.i = e,
            this.x = n,
            this.y = t,
            this.prev = null,
            this.next = null,
            this.z = null,
            this.prevZ = null,
            this.nextZ = null,
            this.steiner = !1
        }
        function D(e, n, t, r) {
            for (var x = 0,
            i = n,
            u = t - r; i < t; i += r) x += (e[u] - e[i]) * (e[i + 1] + e[u + 1]),
            u = i;
            return x
        }
        module.exports = e,
        module.exports.
    default = e,
        e.deviation = function(e, n, t, r) {
            var x = n && n.length,
            i = x ? n[0] * t: e.length,
            u = Math.abs(D(e, 0, i, t));
            if (x) for (var v = 0,
            f = n.length; v < f; v++) {
                var y = n[v] * t,
                o = v < f - 1 ? n[v + 1] * t: e.length;
                u -= Math.abs(D(e, y, o, t))
            }
            var p = 0;
            for (v = 0; v < r.length; v += 3) {
                var a = r[v] * t,
                l = r[v + 1] * t,
                h = r[v + 2] * t;
                p += Math.abs((e[a] - e[h]) * (e[l + 1] - e[a + 1]) - (e[a] - e[l]) * (e[h + 1] - e[a + 1]))
            }
            return 0 === u && 0 === p ? 0 : Math.abs((p - u) / u)
        },
        e.flatten = function(e) {
            for (var n = e[0][0].length, t = {
                vertices: [],
                holes: [],
                dimensions: n
            },
            r = 0, x = 0; x < e.length; x++) {
                for (var i = 0; i < e[x].length; i++) for (var u = 0; u < n; u++) t.vertices.push(e[x][i][u]);
                x > 0 && (r += e[x - 1].length, t.holes.push(r))
            }
            return t
        };
    },
    {}],
    "V1sf": [function(require, module, exports) {
        var global = arguments[3];
        var define;
        var o, e = arguments[3]; !
        function(n) {
            var r = "object" == typeof exports && exports && !exports.nodeType && exports,
            t = "object" == typeof module && module && !module.nodeType && module,
            u = "object" == typeof e && e;
            u.global !== u && u.window !== u && u.self !== u || (n = u);
            var i, f, c = 2147483647,
            l = 36,
            s = 1,
            p = 26,
            a = 38,
            d = 700,
            h = 72,
            v = 128,
            g = "-",
            w = /^xn--/,
            x = /[^\x20-\x7E]/,
            y = /[\x2E\u3002\uFF0E\uFF61]/g,
            m = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input"
            },
            C = l - s,
            b = Math.floor,
            j = String.fromCharCode;
            function A(o) {
                throw new RangeError(m[o])
            }
            function I(o, e) {
                for (var n = o.length,
                r = []; n--;) r[n] = e(o[n]);
                return r
            }
            function E(o, e) {
                var n = o.split("@"),
                r = "";
                return n.length > 1 && (r = n[0] + "@", o = n[1]),
                r + I((o = o.replace(y, ".")).split("."), e).join(".")
            }
            function F(o) {
                for (var e, n, r = [], t = 0, u = o.length; t < u;)(e = o.charCodeAt(t++)) >= 55296 && e <= 56319 && t < u ? 56320 == (64512 & (n = o.charCodeAt(t++))) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), t--) : r.push(e);
                return r
            }
            function O(o) {
                return I(o,
                function(o) {
                    var e = "";
                    return o > 65535 && (e += j((o -= 65536) >>> 10 & 1023 | 55296), o = 56320 | 1023 & o),
                    e += j(o)
                }).join("")
            }
            function S(o, e) {
                return o + 22 + 75 * (o < 26) - ((0 != e) << 5)
            }
            function T(o, e, n) {
                var r = 0;
                for (o = n ? b(o / d) : o >> 1, o += b(o / e); o > C * p >> 1; r += l) o = b(o / C);
                return b(r + (C + 1) * o / (o + a))
            }
            function L(o) {
                var e, n, r, t, u, i, f, a, d, w, x, y = [],
                m = o.length,
                C = 0,
                j = v,
                I = h;
                for ((n = o.lastIndexOf(g)) < 0 && (n = 0), r = 0; r < n; ++r) o.charCodeAt(r) >= 128 && A("not-basic"),
                y.push(o.charCodeAt(r));
                for (t = n > 0 ? n + 1 : 0; t < m;) {
                    for (u = C, i = 1, f = l; t >= m && A("invalid-input"), ((a = (x = o.charCodeAt(t++)) - 48 < 10 ? x - 22 : x - 65 < 26 ? x - 65 : x - 97 < 26 ? x - 97 : l) >= l || a > b((c - C) / i)) && A("overflow"), C += a * i, !(a < (d = f <= I ? s: f >= I + p ? p: f - I)); f += l) i > b(c / (w = l - d)) && A("overflow"),
                    i *= w;
                    I = T(C - u, e = y.length + 1, 0 == u),
                    b(C / e) > c - j && A("overflow"),
                    j += b(C / e),
                    C %= e,
                    y.splice(C++, 0, j)
                }
                return O(y)
            }
            function M(o) {
                var e, n, r, t, u, i, f, a, d, w, x, y, m, C, I, E = [];
                for (y = (o = F(o)).length, e = v, n = 0, u = h, i = 0; i < y; ++i)(x = o[i]) < 128 && E.push(j(x));
                for (r = t = E.length, t && E.push(g); r < y;) {
                    for (f = c, i = 0; i < y; ++i)(x = o[i]) >= e && x < f && (f = x);
                    for (f - e > b((c - n) / (m = r + 1)) && A("overflow"), n += (f - e) * m, e = f, i = 0; i < y; ++i) if ((x = o[i]) < e && ++n > c && A("overflow"), x == e) {
                        for (a = n, d = l; ! (a < (w = d <= u ? s: d >= u + p ? p: d - u)); d += l) I = a - w,
                        C = l - w,
                        E.push(j(S(w + I % C, 0))),
                        a = b(I / C);
                        E.push(j(S(a, 0))),
                        u = T(n, m, r == t),
                        n = 0,
                        ++r
                    }++n,
                    ++e
                }
                return E.join("")
            }
            if (i = {
                version: "1.4.1",
                ucs2: {
                    decode: F,
                    encode: O
                },
                decode: L,
                encode: M,
                toASCII: function(o) {
                    return E(o,
                    function(o) {
                        return x.test(o) ? "xn--" + M(o) : o
                    })
                },
                toUnicode: function(o) {
                    return E(o,
                    function(o) {
                        return w.test(o) ? L(o.slice(4).toLowerCase()) : o
                    })
                }
            },
            "function" == typeof o && "object" == typeof o.amd && o.amd) o("punycode",
            function() {
                return i
            });
            else if (r && t) if (module.exports == r) t.exports = i;
            else for (f in i) i.hasOwnProperty(f) && (r[f] = i[f]);
            else n.punycode = i
        } (this);
    },
    {}],
    "tYiT": [function(require, module, exports) {
        "use strict";
        module.exports = {
            isString: function(n) {
                return "string" == typeof n
            },
            isObject: function(n) {
                return "object" == typeof n && null !== n
            },
            isNull: function(n) {
                return null === n
            },
            isNullOrUndefined: function(n) {
                return null == n
            }
        };
    },
    {}],
    "QTCX": [function(require, module, exports) {
        "use strict";
        function r(r, e) {
            return Object.prototype.hasOwnProperty.call(r, e)
        }
        module.exports = function(t, n, o, a) {
            n = n || "&",
            o = o || "=";
            var s = {};
            if ("string" != typeof t || 0 === t.length) return s;
            var p = /\+/g;
            t = t.split(n);
            var u = 1e3;
            a && "number" == typeof a.maxKeys && (u = a.maxKeys);
            var c = t.length;
            u > 0 && c > u && (c = u);
            for (var i = 0; i < c; ++i) {
                var y, l, f, v, b = t[i].replace(p, "%20"),
                d = b.indexOf(o);
                d >= 0 ? (y = b.substr(0, d), l = b.substr(d + 1)) : (y = b, l = ""),
                f = decodeURIComponent(y),
                v = decodeURIComponent(l),
                r(s, f) ? e(s[f]) ? s[f].push(v) : s[f] = [s[f], v] : s[f] = v
            }
            return s
        };
        var e = Array.isArray ||
        function(r) {
            return "[object Array]" === Object.prototype.toString.call(r)
        };
    },
    {}],
    "QMVf": [function(require, module, exports) {
        "use strict";
        var n = function(n) {
            switch (typeof n) {
            case "string":
                return n;
            case "boolean":
                return n ? "true": "false";
            case "number":
                return isFinite(n) ? n: "";
            default:
                return ""
            }
        };
        module.exports = function(o, u, c, a) {
            return u = u || "&",
            c = c || "=",
            null === o && (o = void 0),
            "object" == typeof o ? r(t(o),
            function(t) {
                var a = encodeURIComponent(n(t)) + c;
                return e(o[t]) ? r(o[t],
                function(e) {
                    return a + encodeURIComponent(n(e))
                }).join(u) : a + encodeURIComponent(n(o[t]))
            }).join(u) : a ? encodeURIComponent(n(a)) + c + encodeURIComponent(n(o)) : ""
        };
        var e = Array.isArray ||
        function(n) {
            return "[object Array]" === Object.prototype.toString.call(n)
        };
        function r(n, e) {
            if (n.map) return n.map(e);
            for (var r = [], t = 0; t < n.length; t++) r.push(e(n[t], t));
            return r
        }
        var t = Object.keys ||
        function(n) {
            var e = [];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && e.push(r);
            return e
        };
    },
    {}],
    "HUY2": [function(require, module, exports) {
        "use strict";
        exports.decode = exports.parse = require("./decode"),
        exports.encode = exports.stringify = require("./encode");
    },
    {
        "./decode": "QTCX",
        "./encode": "QMVf"
    }],
    "FZhd": [function(require, module, exports) {
        "use strict";
        var t = require("punycode"),
        s = require("./util");
        function h() {
            this.protocol = null,
            this.slashes = null,
            this.auth = null,
            this.host = null,
            this.port = null,
            this.hostname = null,
            this.hash = null,
            this.search = null,
            this.query = null,
            this.pathname = null,
            this.path = null,
            this.href = null
        }
        exports.parse = b,
        exports.resolve = O,
        exports.resolveObject = d,
        exports.format = q,
        exports.Url = h;
        var e = /^([a-z0-9.+-]+:)/i,
        a = /:[0-9]*$/,
        r = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        o = ["<", ">", '"', "`", " ", "\r", "\n", "\t"],
        n = ["{", "}", "|", "\\", "^", "`"].concat(o),
        i = ["'"].concat(n),
        l = ["%", "/", "?", ";", "#"].concat(i),
        p = ["/", "?", "#"],
        c = 255,
        u = /^[+a-z0-9A-Z_-]{0,63}$/,
        f = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        m = {
            javascript: !0,
            "javascript:": !0
        },
        v = {
            javascript: !0,
            "javascript:": !0
        },
        g = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        },
        y = require("querystring");
        function b(t, e, a) {
            if (t && s.isObject(t) && t instanceof h) return t;
            var r = new h;
            return r.parse(t, e, a),
            r
        }
        function q(t) {
            return s.isString(t) && (t = b(t)),
            t instanceof h ? t.format() : h.prototype.format.call(t)
        }
        function O(t, s) {
            return b(t, !1, !0).resolve(s)
        }
        function d(t, s) {
            return t ? b(t, !1, !0).resolveObject(s) : s
        }
        h.prototype.parse = function(h, a, o) {
            if (!s.isString(h)) throw new TypeError("Parameter 'url' must be a string, not " + typeof h);
            var n = h.indexOf("?"),
            b = -1 !== n && n < h.indexOf("#") ? "?": "#",
            q = h.split(b);
            q[0] = q[0].replace(/\\/g, "/");
            var O = h = q.join(b);
            if (O = O.trim(), !o && 1 === h.split("#").length) {
                var d = r.exec(O);
                if (d) return this.path = O,
                this.href = O,
                this.pathname = d[1],
                d[2] ? (this.search = d[2], this.query = a ? y.parse(this.search.substr(1)) : this.search.substr(1)) : a && (this.search = "", this.query = {}),
                this
            }
            var j = e.exec(O);
            if (j) {
                var x = (j = j[0]).toLowerCase();
                this.protocol = x,
                O = O.substr(j.length)
            }
            if (o || j || O.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                var A = "//" === O.substr(0, 2); ! A || j && v[j] || (O = O.substr(2), this.slashes = !0)
            }
            if (!v[j] && (A || j && !g[j])) {
                for (var C, I, w = -1,
                U = 0; U < p.length; U++) { - 1 !== (k = O.indexOf(p[U])) && ( - 1 === w || k < w) && (w = k)
                } - 1 !== (I = -1 === w ? O.lastIndexOf("@") : O.lastIndexOf("@", w)) && (C = O.slice(0, I), O = O.slice(I + 1), this.auth = decodeURIComponent(C)),
                w = -1;
                for (U = 0; U < l.length; U++) {
                    var k; - 1 !== (k = O.indexOf(l[U])) && ( - 1 === w || k < w) && (w = k)
                } - 1 === w && (w = O.length),
                this.host = O.slice(0, w),
                O = O.slice(w),
                this.parseHost(),
                this.hostname = this.hostname || "";
                var N = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                if (!N) for (var R = this.hostname.split(/\./), S = (U = 0, R.length); U < S; U++) {
                    var $ = R[U];
                    if ($ && !$.match(u)) {
                        for (var z = "",
                        H = 0,
                        L = $.length; H < L; H++) $.charCodeAt(H) > 127 ? z += "x": z += $[H];
                        if (!z.match(u)) {
                            var Z = R.slice(0, U),
                            _ = R.slice(U + 1),
                            E = $.match(f);
                            E && (Z.push(E[1]), _.unshift(E[2])),
                            _.length && (O = "/" + _.join(".") + O),
                            this.hostname = Z.join(".");
                            break
                        }
                    }
                }
                this.hostname.length > c ? this.hostname = "": this.hostname = this.hostname.toLowerCase(),
                N || (this.hostname = t.toASCII(this.hostname));
                var P = this.port ? ":" + this.port: "",
                T = this.hostname || "";
                this.host = T + P,
                this.href += this.host,
                N && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== O[0] && (O = "/" + O))
            }
            if (!m[x]) for (U = 0, S = i.length; U < S; U++) {
                var B = i[U];
                if ( - 1 !== O.indexOf(B)) {
                    var D = encodeURIComponent(B);
                    D === B && (D = escape(B)),
                    O = O.split(B).join(D)
                }
            }
            var F = O.indexOf("#"); - 1 !== F && (this.hash = O.substr(F), O = O.slice(0, F));
            var G = O.indexOf("?");
            if ( - 1 !== G ? (this.search = O.substr(G), this.query = O.substr(G + 1), a && (this.query = y.parse(this.query)), O = O.slice(0, G)) : a && (this.search = "", this.query = {}), O && (this.pathname = O), g[x] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                P = this.pathname || "";
                var J = this.search || "";
                this.path = P + J
            }
            return this.href = this.format(),
            this
        },
        h.prototype.format = function() {
            var t = this.auth || "";
            t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), t += "@");
            var h = this.protocol || "",
            e = this.pathname || "",
            a = this.hash || "",
            r = !1,
            o = "";
            this.host ? r = t + this.host: this.hostname && (r = t + ( - 1 === this.hostname.indexOf(":") ? this.hostname: "[" + this.hostname + "]"), this.port && (r += ":" + this.port)),
            this.query && s.isObject(this.query) && Object.keys(this.query).length && (o = y.stringify(this.query));
            var n = this.search || o && "?" + o || "";
            return h && ":" !== h.substr( - 1) && (h += ":"),
            this.slashes || (!h || g[h]) && !1 !== r ? (r = "//" + (r || ""), e && "/" !== e.charAt(0) && (e = "/" + e)) : r || (r = ""),
            a && "#" !== a.charAt(0) && (a = "#" + a),
            n && "?" !== n.charAt(0) && (n = "?" + n),
            h + r + (e = e.replace(/[?#]/g,
            function(t) {
                return encodeURIComponent(t)
            })) + (n = n.replace("#", "%23")) + a
        },
        h.prototype.resolve = function(t) {
            return this.resolveObject(b(t, !1, !0)).format()
        },
        h.prototype.resolveObject = function(t) {
            if (s.isString(t)) {
                var e = new h;
                e.parse(t, !1, !0),
                t = e
            }
            for (var a = new h,
            r = Object.keys(this), o = 0; o < r.length; o++) {
                var n = r[o];
                a[n] = this[n]
            }
            if (a.hash = t.hash, "" === t.href) return a.href = a.format(),
            a;
            if (t.slashes && !t.protocol) {
                for (var i = Object.keys(t), l = 0; l < i.length; l++) {
                    var p = i[l];
                    "protocol" !== p && (a[p] = t[p])
                }
                return g[a.protocol] && a.hostname && !a.pathname && (a.path = a.pathname = "/"),
                a.href = a.format(),
                a
            }
            if (t.protocol && t.protocol !== a.protocol) {
                if (!g[t.protocol]) {
                    for (var c = Object.keys(t), u = 0; u < c.length; u++) {
                        var f = c[u];
                        a[f] = t[f]
                    }
                    return a.href = a.format(),
                    a
                }
                if (a.protocol = t.protocol, t.host || v[t.protocol]) a.pathname = t.pathname;
                else {
                    for (var m = (t.pathname || "").split("/"); m.length && !(t.host = m.shift()););
                    t.host || (t.host = ""),
                    t.hostname || (t.hostname = ""),
                    "" !== m[0] && m.unshift(""),
                    m.length < 2 && m.unshift(""),
                    a.pathname = m.join("/")
                }
                if (a.search = t.search, a.query = t.query, a.host = t.host || "", a.auth = t.auth, a.hostname = t.hostname || t.host, a.port = t.port, a.pathname || a.search) {
                    var y = a.pathname || "",
                    b = a.search || "";
                    a.path = y + b
                }
                return a.slashes = a.slashes || t.slashes,
                a.href = a.format(),
                a
            }
            var q = a.pathname && "/" === a.pathname.charAt(0),
            O = t.host || t.pathname && "/" === t.pathname.charAt(0),
            d = O || q || a.host && t.pathname,
            j = d,
            x = a.pathname && a.pathname.split("/") || [],
            A = (m = t.pathname && t.pathname.split("/") || [], a.protocol && !g[a.protocol]);
            if (A && (a.hostname = "", a.port = null, a.host && ("" === x[0] ? x[0] = a.host: x.unshift(a.host)), a.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === m[0] ? m[0] = t.host: m.unshift(t.host)), t.host = null), d = d && ("" === m[0] || "" === x[0])), O) a.host = t.host || "" === t.host ? t.host: a.host,
            a.hostname = t.hostname || "" === t.hostname ? t.hostname: a.hostname,
            a.search = t.search,
            a.query = t.query,
            x = m;
            else if (m.length) x || (x = []),
            x.pop(),
            x = x.concat(m),
            a.search = t.search,
            a.query = t.query;
            else if (!s.isNullOrUndefined(t.search)) {
                if (A) a.hostname = a.host = x.shift(),
                (k = !!(a.host && a.host.indexOf("@") > 0) && a.host.split("@")) && (a.auth = k.shift(), a.host = a.hostname = k.shift());
                return a.search = t.search,
                a.query = t.query,
                s.isNull(a.pathname) && s.isNull(a.search) || (a.path = (a.pathname ? a.pathname: "") + (a.search ? a.search: "")),
                a.href = a.format(),
                a
            }
            if (!x.length) return a.pathname = null,
            a.search ? a.path = "/" + a.search: a.path = null,
            a.href = a.format(),
            a;
            for (var C = x.slice( - 1)[0], I = (a.host || t.host || x.length > 1) && ("." === C || ".." === C) || "" === C, w = 0, U = x.length; U >= 0; U--)"." === (C = x[U]) ? x.splice(U, 1) : ".." === C ? (x.splice(U, 1), w++) : w && (x.splice(U, 1), w--);
            if (!d && !j) for (; w--; w) x.unshift(".."); ! d || "" === x[0] || x[0] && "/" === x[0].charAt(0) || x.unshift(""),
            I && "/" !== x.join("/").substr( - 1) && x.push("");
            var k, N = "" === x[0] || x[0] && "/" === x[0].charAt(0);
            A && (a.hostname = a.host = N ? "": x.length ? x.shift() : "", (k = !!(a.host && a.host.indexOf("@") > 0) && a.host.split("@")) && (a.auth = k.shift(), a.host = a.hostname = k.shift()));
            return (d = d || a.host && x.length) && !N && x.unshift(""),
            x.length ? a.pathname = x.join("/") : (a.pathname = null, a.path = null),
            s.isNull(a.pathname) && s.isNull(a.search) || (a.path = (a.pathname ? a.pathname: "") + (a.search ? a.search: "")),
            a.auth = t.auth || a.auth,
            a.slashes = a.slashes || t.slashes,
            a.href = a.format(),
            a
        },
        h.prototype.parseHost = function() {
            var t = this.host,
            s = a.exec(t);
            s && (":" !== (s = s[0]) && (this.port = s.substr(1)), t = t.substr(0, t.length - s.length)),
            t && (this.hostname = t)
        };
    },
    {
        "punycode": "V1sf",
        "./util": "tYiT",
        "querystring": "HUY2"
    }],
    "KFvg": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.clearTextureCache = Mt,
        exports.correctBlendMode = ft,
        exports.createIndicesForQuads = ct,
        exports.decomposeDataUri = Rt,
        exports.deprecation = wt,
        exports.destroyTextureCache = _t,
        exports.determineCrossOrigin = Pt,
        exports.getBufferType = dt,
        exports.getResolutionOfUrl = Tt,
        exports.hex2rgb = et,
        exports.hex2string = rt,
        exports.interleaveTypedArrays = pt,
        exports.isPow2 = bt,
        exports.isWebGLSupported = u,
        exports.log2 = ht,
        exports.nextPow2 = gt,
        exports.premultiplyRgba = it,
        exports.premultiplyTint = lt,
        exports.premultiplyTintToRgba = st,
        exports.removeItems = vt,
        exports.rgb2hex = nt,
        exports.sayHello = d,
        exports.sign = xt,
        exports.skipHello = c,
        exports.string2hex = tt,
        exports.trimCanvas = Ot,
        exports.uid = yt,
        Object.defineProperty(exports, "isMobile", {
            enumerable: !0,
            get: function() {
                return e.isMobile
            }
        }),
        Object.defineProperty(exports, "EventEmitter", {
            enumerable: !0,
            get: function() {
                return r.
            default
            }
        }),
        Object.defineProperty(exports, "earcut", {
            enumerable: !0,
            get: function() {
                return t.
            default
            }
        }),
        exports.url = exports.premultiplyBlendMode = exports.TextureCache = exports.ProgramCache = exports.DATA_URI = exports.CanvasRenderTarget = exports.BaseTextureCache = void 0;
        var e = require("@pixi/settings"),
        r = o(require("eventemitter3")),
        t = o(require("earcut")),
        n = require("url"),
        a = require("@pixi/constants");
        function o(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        var f = {
            parse: n.parse,
            format: n.format,
            resolve: n.resolve
        };
        exports.url = f,
        e.settings.RETINA_PREFIX = /@([0-9\.]+)x/,
        e.settings.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !1;
        var i, l = !1,
        s = "6.0.1";
        function c() {
            l = !0
        }
        function d(e) {
            var r;
            if (!l) {
                if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                    var t = ["\n %c %c %c PixiJS " + s + " - ✰ " + e + " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"]; (r = self.console).log.apply(r, t)
                } else self.console && self.console.log("PixiJS " + s + " - " + e + " - http://www.pixijs.com/");
                l = !0
            }
        }
        function u() {
            return void 0 === i && (i = function() {
                var r = {
                    stencil: !0,
                    failIfMajorPerformanceCaveat: e.settings.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
                };
                try {
                    if (!self.WebGLRenderingContext) return ! 1;
                    var t = document.createElement("canvas"),
                    n = t.getContext("webgl", r) || t.getContext("experimental-webgl", r),
                    a = !(!n || !n.getContextAttributes().stencil);
                    if (n) {
                        var o = n.getExtension("WEBGL_lose_context");
                        o && o.loseContext()
                    }
                    return n = null,
                    a
                } catch(f) {
                    return ! 1
                }
            } ()),
            i
        }
        var p = "#f0f8ff",
        g = "#faebd7",
        b = "#00ffff",
        h = "#7fffd4",
        v = "#f0ffff",
        x = "#f5f5dc",
        m = "#ffe4c4",
        y = "#000000",
        E = "#ffebcd",
        w = "#0000ff",
        A = "#8a2be2",
        k = "#a52a2a",
        D = "#deb887",
        _ = "#5f9ea0",
        M = "#7fff00",
        C = "#d2691e",
        O = "#ff7f50",
        N = "#6495ed",
        L = "#fff8dc",
        R = "#dc143c",
        P = "#00ffff",
        T = "#00008b",
        S = "#008b8b",
        B = "#b8860b",
        I = "#a9a9a9",
        F = "#006400",
        U = "#a9a9a9",
        q = "#bdb76b",
        j = "#8b008b",
        J = "#556b2f",
        W = "#ff8c00",
        z = "#9932cc",
        G = "#8b0000",
        Y = "#e9967a",
        H = "#8fbc8f",
        V = "#483d8b",
        X = "#2f4f4f",
        Q = "#2f4f4f",
        K = "#00ced1",
        Z = "#9400d3",
        $ = "#ff1493",
        ee = "#00bfff",
        re = "#696969",
        te = "#696969",
        ne = "#1e90ff",
        ae = "#b22222",
        oe = "#fffaf0",
        fe = "#228b22",
        ie = "#ff00ff",
        le = "#dcdcdc",
        se = "#f8f8ff",
        ce = "#daa520",
        de = "#ffd700",
        ue = "#808080",
        pe = "#008000",
        ge = "#adff2f",
        be = "#808080",
        he = "#f0fff0",
        ve = "#ff69b4",
        xe = "#cd5c5c",
        me = "#4b0082",
        ye = "#fffff0",
        Ee = "#f0e68c",
        we = "#fff0f5",
        Ae = "#e6e6fa",
        ke = "#7cfc00",
        De = "#fffacd",
        _e = "#add8e6",
        Me = "#f08080",
        Ce = "#e0ffff",
        Oe = "#fafad2",
        Ne = "#d3d3d3",
        Le = "#90ee90",
        Re = "#d3d3d3",
        Pe = "#ffb6c1",
        Te = "#ffa07a",
        Se = "#20b2aa",
        Be = "#87cefa",
        Ie = "#778899",
        Fe = "#778899",
        Ue = "#b0c4de",
        qe = "#ffffe0",
        je = "#00ff00",
        Je = "#32cd32",
        We = "#faf0e6",
        ze = "#ff00ff",
        Ge = "#800000",
        Ye = "#66cdaa",
        He = "#0000cd",
        Ve = "#ba55d3",
        Xe = "#9370db",
        Qe = "#3cb371",
        Ke = "#7b68ee",
        Ze = "#00fa9a",
        $e = "#48d1cc",
        er = "#c71585",
        rr = "#191970",
        tr = "#f5fffa",
        nr = "#ffe4e1",
        ar = "#ffe4b5",
        or = "#ffdead",
        fr = "#000080",
        ir = "#fdf5e6",
        lr = "#808000",
        sr = "#6b8e23",
        cr = "#ffa500",
        dr = "#ff4500",
        ur = "#da70d6",
        pr = "#eee8aa",
        gr = "#98fb98",
        br = "#afeeee",
        hr = "#db7093",
        vr = "#ffefd5",
        xr = "#ffdab9",
        mr = "#cd853f",
        yr = "#ffc0cb",
        Er = "#dda0dd",
        wr = "#b0e0e6",
        Ar = "#800080",
        kr = "#663399",
        Dr = "#ff0000",
        _r = "#bc8f8f",
        Mr = "#4169e1",
        Cr = "#8b4513",
        Or = "#fa8072",
        Nr = "#f4a460",
        Lr = "#2e8b57",
        Rr = "#fff5ee",
        Pr = "#a0522d",
        Tr = "#c0c0c0",
        Sr = "#87ceeb",
        Br = "#6a5acd",
        Ir = "#708090",
        Fr = "#708090",
        Ur = "#fffafa",
        qr = "#00ff7f",
        jr = "#4682b4",
        Jr = "#d2b48c",
        Wr = "#008080",
        zr = "#d8bfd8",
        Gr = "#ff6347",
        Yr = "#40e0d0",
        Hr = "#ee82ee",
        Vr = "#f5deb3",
        Xr = "#ffffff",
        Qr = "#f5f5f5",
        Kr = "#ffff00",
        Zr = "#9acd32",
        $r = {
            aliceblue: p,
            antiquewhite: g,
            aqua: b,
            aquamarine: h,
            azure: v,
            beige: x,
            bisque: m,
            black: y,
            blanchedalmond: E,
            blue: w,
            blueviolet: A,
            brown: k,
            burlywood: D,
            cadetblue: _,
            chartreuse: M,
            chocolate: C,
            coral: O,
            cornflowerblue: N,
            cornsilk: L,
            crimson: R,
            cyan: P,
            darkblue: T,
            darkcyan: S,
            darkgoldenrod: B,
            darkgray: I,
            darkgreen: F,
            darkgrey: U,
            darkkhaki: q,
            darkmagenta: j,
            darkolivegreen: J,
            darkorange: W,
            darkorchid: z,
            darkred: G,
            darksalmon: Y,
            darkseagreen: H,
            darkslateblue: V,
            darkslategray: X,
            darkslategrey: Q,
            darkturquoise: K,
            darkviolet: Z,
            deeppink: $,
            deepskyblue: ee,
            dimgray: re,
            dimgrey: te,
            dodgerblue: ne,
            firebrick: ae,
            floralwhite: oe,
            forestgreen: fe,
            fuchsia: ie,
            gainsboro: le,
            ghostwhite: se,
            goldenrod: ce,
            gold: de,
            gray: ue,
            green: pe,
            greenyellow: ge,
            grey: be,
            honeydew: he,
            hotpink: ve,
            indianred: xe,
            indigo: me,
            ivory: ye,
            khaki: Ee,
            lavenderblush: we,
            lavender: Ae,
            lawngreen: ke,
            lemonchiffon: De,
            lightblue: _e,
            lightcoral: Me,
            lightcyan: Ce,
            lightgoldenrodyellow: Oe,
            lightgray: Ne,
            lightgreen: Le,
            lightgrey: Re,
            lightpink: Pe,
            lightsalmon: Te,
            lightseagreen: Se,
            lightskyblue: Be,
            lightslategray: Ie,
            lightslategrey: Fe,
            lightsteelblue: Ue,
            lightyellow: qe,
            lime: je,
            limegreen: Je,
            linen: We,
            magenta: ze,
            maroon: Ge,
            mediumaquamarine: Ye,
            mediumblue: He,
            mediumorchid: Ve,
            mediumpurple: Xe,
            mediumseagreen: Qe,
            mediumslateblue: Ke,
            mediumspringgreen: Ze,
            mediumturquoise: $e,
            mediumvioletred: er,
            midnightblue: rr,
            mintcream: tr,
            mistyrose: nr,
            moccasin: ar,
            navajowhite: or,
            navy: fr,
            oldlace: ir,
            olive: lr,
            olivedrab: sr,
            orange: cr,
            orangered: dr,
            orchid: ur,
            palegoldenrod: pr,
            palegreen: gr,
            paleturquoise: br,
            palevioletred: hr,
            papayawhip: vr,
            peachpuff: xr,
            peru: mr,
            pink: yr,
            plum: Er,
            powderblue: wr,
            purple: Ar,
            rebeccapurple: kr,
            red: Dr,
            rosybrown: _r,
            royalblue: Mr,
            saddlebrown: Cr,
            salmon: Or,
            sandybrown: Nr,
            seagreen: Lr,
            seashell: Rr,
            sienna: Pr,
            silver: Tr,
            skyblue: Sr,
            slateblue: Br,
            slategray: Ir,
            slategrey: Fr,
            snow: Ur,
            springgreen: qr,
            steelblue: jr,
            tan: Jr,
            teal: Wr,
            thistle: zr,
            tomato: Gr,
            turquoise: Yr,
            violet: Hr,
            wheat: Vr,
            white: Xr,
            whitesmoke: Qr,
            yellow: Kr,
            yellowgreen: Zr
        };
        function et(e, r) {
            return void 0 === r && (r = []),
            r[0] = (e >> 16 & 255) / 255,
            r[1] = (e >> 8 & 255) / 255,
            r[2] = (255 & e) / 255,
            r
        }
        function rt(e) {
            var r = e.toString(16);
            return "#" + (r = "000000".substr(0, 6 - r.length) + r)
        }
        function tt(e) {
            return "string" == typeof e && "#" === (e = $r[e.toLowerCase()] || e)[0] && (e = e.substr(1)),
            parseInt(e, 16)
        }
        function nt(e) {
            return (255 * e[0] << 16) + (255 * e[1] << 8) + (255 * e[2] | 0)
        }
        function at() {
            for (var e = [], r = [], t = 0; t < 32; t++) e[t] = t,
            r[t] = t;
            e[a.BLEND_MODES.NORMAL_NPM] = a.BLEND_MODES.NORMAL,
            e[a.BLEND_MODES.ADD_NPM] = a.BLEND_MODES.ADD,
            e[a.BLEND_MODES.SCREEN_NPM] = a.BLEND_MODES.SCREEN,
            r[a.BLEND_MODES.NORMAL] = a.BLEND_MODES.NORMAL_NPM,
            r[a.BLEND_MODES.ADD] = a.BLEND_MODES.ADD_NPM,
            r[a.BLEND_MODES.SCREEN] = a.BLEND_MODES.SCREEN_NPM;
            var n = [];
            return n.push(r),
            n.push(e),
            n
        }
        var ot = at();
        function ft(e, r) {
            return ot[r ? 1 : 0][e]
        }
        function it(e, r, t, n) {
            return t = t || new Float32Array(4),
            n || void 0 === n ? (t[0] = e[0] * r, t[1] = e[1] * r, t[2] = e[2] * r) : (t[0] = e[0], t[1] = e[1], t[2] = e[2]),
            t[3] = r,
            t
        }
        function lt(e, r) {
            if (1 === r) return (255 * r << 24) + e;
            if (0 === r) return 0;
            var t = e >> 16 & 255,
            n = e >> 8 & 255,
            a = 255 & e;
            return (255 * r << 24) + ((t = t * r + .5 | 0) << 16) + ((n = n * r + .5 | 0) << 8) + (a = a * r + .5 | 0)
        }
        function st(e, r, t, n) {
            return (t = t || new Float32Array(4))[0] = (e >> 16 & 255) / 255,
            t[1] = (e >> 8 & 255) / 255,
            t[2] = (255 & e) / 255,
            (n || void 0 === n) && (t[0] *= r, t[1] *= r, t[2] *= r),
            t[3] = r,
            t
        }
        function ct(e, r) {
            void 0 === r && (r = null);
            var t = 6 * e;
            if ((r = r || new Uint16Array(t)).length !== t) throw new Error("Out buffer length is incorrect, got " + r.length + " and expected " + t);
            for (var n = 0,
            a = 0; n < t; n += 6, a += 4) r[n + 0] = a + 0,
            r[n + 1] = a + 1,
            r[n + 2] = a + 2,
            r[n + 3] = a + 0,
            r[n + 4] = a + 2,
            r[n + 5] = a + 3;
            return r
        }
        function dt(e) {
            if (4 === e.BYTES_PER_ELEMENT) return e instanceof Float32Array ? "Float32Array": e instanceof Uint32Array ? "Uint32Array": "Int32Array";
            if (2 === e.BYTES_PER_ELEMENT) {
                if (e instanceof Uint16Array) return "Uint16Array"
            } else if (1 === e.BYTES_PER_ELEMENT && e instanceof Uint8Array) return "Uint8Array";
            return null
        }
        exports.premultiplyBlendMode = ot;
        var ut = {
            Float32Array: Float32Array,
            Uint32Array: Uint32Array,
            Int32Array: Int32Array,
            Uint8Array: Uint8Array
        };
        function pt(e, r) {
            for (var t = 0,
            n = 0,
            a = {},
            o = 0; o < e.length; o++) n += r[o],
            t += e[o].length;
            var f = new ArrayBuffer(4 * t),
            i = null,
            l = 0;
            for (o = 0; o < e.length; o++) {
                var s = r[o],
                c = e[o],
                d = dt(c);
                a[d] || (a[d] = new ut[d](f)),
                i = a[d];
                for (var u = 0; u < c.length; u++) {
                    i[(u / s | 0) * n + l + u % s] = c[u]
                }
                l += s
            }
            return new Float32Array(f)
        }
        function gt(e) {
            return e += 0 === e ? 1 : 0,
            --e,
            e |= e >>> 1,
            e |= e >>> 2,
            e |= e >>> 4,
            e |= e >>> 8,
            (e |= e >>> 16) + 1
        }
        function bt(e) {
            return ! (e & e - 1 || !e)
        }
        function ht(e) {
            var r = (e > 65535 ? 1 : 0) << 4,
            t = ((e >>>= r) > 255 ? 1 : 0) << 3;
            return r |= t,
            r |= t = ((e >>>= t) > 15 ? 1 : 0) << 2,
            (r |= t = ((e >>>= t) > 3 ? 1 : 0) << 1) | (e >>>= t) >> 1
        }
        function vt(e, r, t) {
            var n, a = e.length;
            if (! (r >= a || 0 === t)) {
                var o = a - (t = r + t > a ? a - r: t);
                for (n = r; n < o; ++n) e[n] = e[n + t];
                e.length = o
            }
        }
        function xt(e) {
            return 0 === e ? 0 : e < 0 ? -1 : 1
        }
        var mt = 0;
        function yt() {
            return++mt
        }
        var Et = {};
        function wt(e, r, t) {
            if (void 0 === t && (t = 3), !Et[r]) {
                var n = (new Error).stack;
                void 0 === n ? console.warn("PixiJS Deprecation Warning: ", r + "\nDeprecated since v" + e) : (n = n.split("\n").splice(t).join("\n"), console.groupCollapsed ? (console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", r + "\nDeprecated since v" + e), console.warn(n), console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", r + "\nDeprecated since v" + e), console.warn(n))),
                Et[r] = !0
            }
        }
        var At = {};
        exports.ProgramCache = At;
        var kt = Object.create(null);
        exports.TextureCache = kt;
        var Dt = Object.create(null);
        function _t() {
            var e;
            for (e in kt) kt[e].destroy();
            for (e in Dt) Dt[e].destroy()
        }
        function Mt() {
            var e;
            for (e in kt) delete kt[e];
            for (e in Dt) delete Dt[e]
        }
        exports.BaseTextureCache = Dt;
        var Ct = function() {
            function r(r, t, n) {
                this.canvas = document.createElement("canvas"),
                this.context = this.canvas.getContext("2d"),
                this.resolution = n || e.settings.RESOLUTION,
                this.resize(r, t)
            }
            return r.prototype.clear = function() {
                this.context.setTransform(1, 0, 0, 1, 0, 0),
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
            },
            r.prototype.resize = function(e, r) {
                this.canvas.width = e * this.resolution,
                this.canvas.height = r * this.resolution
            },
            r.prototype.destroy = function() {
                this.context = null,
                this.canvas = null
            },
            Object.defineProperty(r.prototype, "width", {
                get: function() {
                    return this.canvas.width
                },
                set: function(e) {
                    this.canvas.width = e
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(r.prototype, "height", {
                get: function() {
                    return this.canvas.height
                },
                set: function(e) {
                    this.canvas.height = e
                },
                enumerable: !1,
                configurable: !0
            }),
            r
        } ();
        function Ot(e) {
            var r, t, n, a = e.width,
            o = e.height,
            f = e.getContext("2d"),
            i = f.getImageData(0, 0, a, o).data,
            l = i.length,
            s = {
                top: null,
                left: null,
                right: null,
                bottom: null
            },
            c = null;
            for (r = 0; r < l; r += 4) 0 !== i[r + 3] && (t = r / 4 % a, n = ~~ (r / 4 / a), null === s.top && (s.top = n), null === s.left ? s.left = t: t < s.left && (s.left = t), null === s.right ? s.right = t + 1 : s.right < t && (s.right = t + 1), null === s.bottom ? s.bottom = n: s.bottom < n && (s.bottom = n));
            return null !== s.top && (a = s.right - s.left, o = s.bottom - s.top + 1, c = f.getImageData(s.left, s.top, a, o)),
            {
                height: o,
                width: a,
                data: c
            }
        }
        exports.CanvasRenderTarget = Ct;
        var Nt, Lt = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;
        function Rt(e) {
            var r = Lt.exec(e);
            if (r) return {
                mediaType: r[1] ? r[1].toLowerCase() : void 0,
                subType: r[2] ? r[2].toLowerCase() : void 0,
                charset: r[3] ? r[3].toLowerCase() : void 0,
                encoding: r[4] ? r[4].toLowerCase() : void 0,
                data: r[5]
            }
        }
        function Pt(e, r) {
            if (void 0 === r && (r = self.location), 0 === e.indexOf("data:")) return "";
            r = r || self.location,
            Nt || (Nt = document.createElement("a")),
            Nt.href = e;
            var t = f.parse(Nt.href),
            n = !t.port && "" === r.port || t.port === r.port;
            return t.hostname === r.hostname && n && t.protocol === r.protocol ? "": "anonymous"
        }
        function Tt(r, t) {
            var n = e.settings.RETINA_PREFIX.exec(r);
            return n ? parseFloat(n[1]) : void 0 !== t ? t: 1
        }
        exports.DATA_URI = Lt;
    },
    {
        "@pixi/settings": "APb3",
        "eventemitter3": "JJlS",
        "earcut": "vwhv",
        "url": "FZhd",
        "@pixi/constants": "ETil"
    }],
    "DUQA": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.Runner = void 0;
        var t = function() {
            function t(t) {
                this.items = [],
                this._name = t,
                this._aliasCount = 0
            }
            return t.prototype.emit = function(t, e, i, s, n, r, o, u) {
                if (arguments.length > 8) throw new Error("max arguments reached");
                var h = this.name,
                a = this.items;
                this._aliasCount++;
                for (var m = 0,
                p = a.length; m < p; m++) a[m][h](t, e, i, s, n, r, o, u);
                return a === this.items && this._aliasCount--,
                this
            },
            t.prototype.ensureNonAliasedItems = function() {
                this._aliasCount > 0 && this.items.length > 1 && (this._aliasCount = 0, this.items = this.items.slice(0))
            },
            t.prototype.add = function(t) {
                return t[this._name] && (this.ensureNonAliasedItems(), this.remove(t), this.items.push(t)),
                this
            },
            t.prototype.remove = function(t) {
                var e = this.items.indexOf(t);
                return - 1 !== e && (this.ensureNonAliasedItems(), this.items.splice(e, 1)),
                this
            },
            t.prototype.contains = function(t) {
                return - 1 !== this.items.indexOf(t)
            },
            t.prototype.removeAll = function() {
                return this.ensureNonAliasedItems(),
                this.items.length = 0,
                this
            },
            t.prototype.destroy = function() {
                this.removeAll(),
                this.items = null,
                this._name = null
            },
            Object.defineProperty(t.prototype, "empty", {
                get: function() {
                    return 0 === this.items.length
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "name", {
                get: function() {
                    return this._name
                },
                enumerable: !1,
                configurable: !0
            }),
            t
        } ();
        exports.Runner = t,
        Object.defineProperties(t.prototype, {
            dispatch: {
                value: t.prototype.emit
            },
            run: {
                value: t.prototype.emit
            }
        });
    },
    {}],
    "Aybl": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.UPDATE_PRIORITY = exports.TickerPlugin = exports.Ticker = void 0;
        var t, e = require("@pixi/settings");
        e.settings.TARGET_FPMS = .06,
        exports.UPDATE_PRIORITY = t,
        function(t) {
            t[t.INTERACTION = 50] = "INTERACTION",
            t[t.HIGH = 25] = "HIGH",
            t[t.NORMAL = 0] = "NORMAL",
            t[t.LOW = -25] = "LOW",
            t[t.UTILITY = -50] = "UTILITY"
        } (t || (exports.UPDATE_PRIORITY = t = {}));
        var i = function() {
            function t(t, e, i, s) {
                void 0 === e && (e = null),
                void 0 === i && (i = 0),
                void 0 === s && (s = !1),
                this.next = null,
                this.previous = null,
                this._destroyed = !1,
                this.fn = t,
                this.context = e,
                this.priority = i,
                this.once = s
            }
            return t.prototype.match = function(t, e) {
                return void 0 === e && (e = null),
                this.fn === t && this.context === e
            },
            t.prototype.emit = function(t) {
                this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
                var e = this.next;
                return this.once && this.destroy(!0),
                this._destroyed && (this.next = null),
                e
            },
            t.prototype.connect = function(t) {
                this.previous = t,
                t.next && (t.next.previous = this),
                this.next = t.next,
                t.next = this
            },
            t.prototype.destroy = function(t) {
                void 0 === t && (t = !1),
                this._destroyed = !0,
                this.fn = null,
                this.context = null,
                this.previous && (this.previous.next = this.next),
                this.next && (this.next.previous = this.previous);
                var e = this.next;
                return this.next = t ? null: e,
                this.previous = null,
                e
            },
            t
        } (),
        s = function() {
            function s() {
                var t = this;
                this.autoStart = !1,
                this.deltaTime = 1,
                this.lastTime = -1,
                this.speed = 1,
                this.started = !1,
                this._requestId = null,
                this._maxElapsedMS = 100,
                this._minElapsedMS = 0,
                this._protected = !1,
                this._lastFrame = -1,
                this._head = new i(null, null, 1 / 0),
                this.deltaMS = 1 / e.settings.TARGET_FPMS,
                this.elapsedMS = 1 / e.settings.TARGET_FPMS,
                this._tick = function(e) {
                    t._requestId = null,
                    t.started && (t.update(e), t.started && null === t._requestId && t._head.next && (t._requestId = requestAnimationFrame(t._tick)))
                }
            }
            return s.prototype._requestIfNeeded = function() {
                null === this._requestId && this._head.next && (this.lastTime = performance.now(), this._lastFrame = this.lastTime, this._requestId = requestAnimationFrame(this._tick))
            },
            s.prototype._cancelIfNeeded = function() {
                null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null)
            },
            s.prototype._startIfPossible = function() {
                this.started ? this._requestIfNeeded() : this.autoStart && this.start()
            },
            s.prototype.add = function(e, s, r) {
                return void 0 === r && (r = t.NORMAL),
                this._addListener(new i(e, s, r))
            },
            s.prototype.addOnce = function(e, s, r) {
                return void 0 === r && (r = t.NORMAL),
                this._addListener(new i(e, s, r, !0))
            },
            s.prototype._addListener = function(t) {
                var e = this._head.next,
                i = this._head;
                if (e) {
                    for (; e;) {
                        if (t.priority > e.priority) {
                            t.connect(i);
                            break
                        }
                        i = e,
                        e = e.next
                    }
                    t.previous || t.connect(i)
                } else t.connect(i);
                return this._startIfPossible(),
                this
            },
            s.prototype.remove = function(t, e) {
                for (var i = this._head.next; i;) i = i.match(t, e) ? i.destroy() : i.next;
                return this._head.next || this._cancelIfNeeded(),
                this
            },
            Object.defineProperty(s.prototype, "count", {
                get: function() {
                    if (!this._head) return 0;
                    for (var t = 0,
                    e = this._head; e = e.next;) t++;
                    return t
                },
                enumerable: !1,
                configurable: !0
            }),
            s.prototype.start = function() {
                this.started || (this.started = !0, this._requestIfNeeded())
            },
            s.prototype.stop = function() {
                this.started && (this.started = !1, this._cancelIfNeeded())
            },
            s.prototype.destroy = function() {
                if (!this._protected) {
                    this.stop();
                    for (var t = this._head.next; t;) t = t.destroy(!0);
                    this._head.destroy(),
                    this._head = null
                }
            },
            s.prototype.update = function(t) {
                var i;
                if (void 0 === t && (t = performance.now()), t > this.lastTime) {
                    if ((i = this.elapsedMS = t - this.lastTime) > this._maxElapsedMS && (i = this._maxElapsedMS), i *= this.speed, this._minElapsedMS) {
                        var s = t - this._lastFrame | 0;
                        if (s < this._minElapsedMS) return;
                        this._lastFrame = t - s % this._minElapsedMS
                    }
                    this.deltaMS = i,
                    this.deltaTime = this.deltaMS * e.settings.TARGET_FPMS;
                    for (var r = this._head,
                    n = r.next; n;) n = n.emit(this.deltaTime);
                    r.next || this._cancelIfNeeded()
                } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
                this.lastTime = t
            },
            Object.defineProperty(s.prototype, "FPS", {
                get: function() {
                    return 1e3 / this.elapsedMS
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(s.prototype, "minFPS", {
                get: function() {
                    return 1e3 / this._maxElapsedMS
                },
                set: function(t) {
                    var i = Math.min(this.maxFPS, t),
                    s = Math.min(Math.max(0, i) / 1e3, e.settings.TARGET_FPMS);
                    this._maxElapsedMS = 1 / s
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(s.prototype, "maxFPS", {
                get: function() {
                    return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0
                },
                set: function(t) {
                    if (0 === t) this._minElapsedMS = 0;
                    else {
                        var e = Math.max(this.minFPS, t);
                        this._minElapsedMS = 1 / (e / 1e3)
                    }
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(s, "shared", {
                get: function() {
                    if (!s._shared) {
                        var t = s._shared = new s;
                        t.autoStart = !0,
                        t._protected = !0
                    }
                    return s._shared
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(s, "system", {
                get: function() {
                    if (!s._system) {
                        var t = s._system = new s;
                        t.autoStart = !0,
                        t._protected = !0
                    }
                    return s._system
                },
                enumerable: !1,
                configurable: !0
            }),
            s
        } ();
        exports.Ticker = s;
        var r = function() {
            function e() {}
            return e.init = function(e) {
                var i = this;
                e = Object.assign({
                    autoStart: !0,
                    sharedTicker: !1
                },
                e),
                Object.defineProperty(this, "ticker", {
                    set: function(e) {
                        this._ticker && this._ticker.remove(this.render, this),
                        this._ticker = e,
                        e && e.add(this.render, this, t.LOW)
                    },
                    get: function() {
                        return this._ticker
                    }
                }),
                this.stop = function() {
                    i._ticker.stop()
                },
                this.start = function() {
                    i._ticker.start()
                },
                this._ticker = null,
                this.ticker = e.sharedTicker ? s.shared: new s,
                e.autoStart && this.start()
            },
            e.destroy = function() {
                if (this._ticker) {
                    var t = this._ticker;
                    this.ticker = null,
                    t.destroy()
                }
            },
            e
        } ();
        exports.TickerPlugin = r;
    },
    {
        "@pixi/settings": "APb3"
    }],
    "Z5os": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.groupD8 = exports.Transform = exports.SHAPES = exports.RoundedRectangle = exports.Rectangle = exports.RAD_TO_DEG = exports.Polygon = exports.Point = exports.PI_2 = exports.ObservablePoint = exports.Matrix = exports.Ellipse = exports.DEG_TO_RAD = exports.Circle = void 0;
        var t = 2 * Math.PI;
        exports.PI_2 = t;
        var i = 180 / Math.PI;
        exports.RAD_TO_DEG = i;
        var s, h = Math.PI / 180;
        exports.DEG_TO_RAD = h,
        exports.SHAPES = s,
        function(t) {
            t[t.POLY = 0] = "POLY",
            t[t.RECT = 1] = "RECT",
            t[t.CIRC = 2] = "CIRC",
            t[t.ELIP = 3] = "ELIP",
            t[t.RREC = 4] = "RREC"
        } (s || (exports.SHAPES = s = {}));
        var o = function() {
            function t(t, i, h, o) {
                void 0 === t && (t = 0),
                void 0 === i && (i = 0),
                void 0 === h && (h = 0),
                void 0 === o && (o = 0),
                this.x = Number(t),
                this.y = Number(i),
                this.width = Number(h),
                this.height = Number(o),
                this.type = s.RECT
            }
            return Object.defineProperty(t.prototype, "left", {
                get: function() {
                    return this.x
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "right", {
                get: function() {
                    return this.x + this.width
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "top", {
                get: function() {
                    return this.y
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "bottom", {
                get: function() {
                    return this.y + this.height
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t, "EMPTY", {
                get: function() {
                    return new t(0, 0, 0, 0)
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.clone = function() {
                return new t(this.x, this.y, this.width, this.height)
            },
            t.prototype.copyFrom = function(t) {
                return this.x = t.x,
                this.y = t.y,
                this.width = t.width,
                this.height = t.height,
                this
            },
            t.prototype.copyTo = function(t) {
                return t.x = this.x,
                t.y = this.y,
                t.width = this.width,
                t.height = this.height,
                t
            },
            t.prototype.contains = function(t, i) {
                return ! (this.width <= 0 || this.height <= 0) && (t >= this.x && t < this.x + this.width && i >= this.y && i < this.y + this.height)
            },
            t.prototype.pad = function(t, i) {
                return void 0 === t && (t = 0),
                void 0 === i && (i = t),
                this.x -= t,
                this.y -= i,
                this.width += 2 * t,
                this.height += 2 * i,
                this
            },
            t.prototype.fit = function(t) {
                var i = Math.max(this.x, t.x),
                s = Math.min(this.x + this.width, t.x + t.width),
                h = Math.max(this.y, t.y),
                o = Math.min(this.y + this.height, t.y + t.height);
                return this.x = i,
                this.width = Math.max(s - i, 0),
                this.y = h,
                this.height = Math.max(o - h, 0),
                this
            },
            t.prototype.ceil = function(t, i) {
                void 0 === t && (t = 1),
                void 0 === i && (i = .001);
                var s = Math.ceil((this.x + this.width - i) * t) / t,
                h = Math.ceil((this.y + this.height - i) * t) / t;
                return this.x = Math.floor((this.x + i) * t) / t,
                this.y = Math.floor((this.y + i) * t) / t,
                this.width = s - this.x,
                this.height = h - this.y,
                this
            },
            t.prototype.enlarge = function(t) {
                var i = Math.min(this.x, t.x),
                s = Math.max(this.x + this.width, t.x + t.width),
                h = Math.min(this.y, t.y),
                o = Math.max(this.y + this.height, t.y + t.height);
                return this.x = i,
                this.width = s - i,
                this.y = h,
                this.height = o - h,
                this
            },
            t.prototype.toString = function() {
                return "[@pixi/math:Rectangle x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + "]"
            },
            t
        } ();
        exports.Rectangle = o;
        var r = function() {
            function t(t, i, h) {
                void 0 === t && (t = 0),
                void 0 === i && (i = 0),
                void 0 === h && (h = 0),
                this.x = t,
                this.y = i,
                this.radius = h,
                this.type = s.CIRC
            }
            return t.prototype.clone = function() {
                return new t(this.x, this.y, this.radius)
            },
            t.prototype.contains = function(t, i) {
                if (this.radius <= 0) return ! 1;
                var s = this.radius * this.radius,
                h = this.x - t,
                o = this.y - i;
                return (h *= h) + (o *= o) <= s
            },
            t.prototype.getBounds = function() {
                return new o(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
            },
            t.prototype.toString = function() {
                return "[@pixi/math:Circle x=" + this.x + " y=" + this.y + " radius=" + this.radius + "]"
            },
            t
        } ();
        exports.Circle = r;
        var e = function() {
            function t(t, i, h, o) {
                void 0 === t && (t = 0),
                void 0 === i && (i = 0),
                void 0 === h && (h = 0),
                void 0 === o && (o = 0),
                this.x = t,
                this.y = i,
                this.width = h,
                this.height = o,
                this.type = s.ELIP
            }
            return t.prototype.clone = function() {
                return new t(this.x, this.y, this.width, this.height)
            },
            t.prototype.contains = function(t, i) {
                if (this.width <= 0 || this.height <= 0) return ! 1;
                var s = (t - this.x) / this.width,
                h = (i - this.y) / this.height;
                return (s *= s) + (h *= h) <= 1
            },
            t.prototype.getBounds = function() {
                return new o(this.x - this.width, this.y - this.height, this.width, this.height)
            },
            t.prototype.toString = function() {
                return "[@pixi/math:Ellipse x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + "]"
            },
            t
        } ();
        exports.Ellipse = e;
        var n = function() {
            function t() {
                for (var t = arguments,
                i = [], h = 0; h < arguments.length; h++) i[h] = t[h];
                var o = Array.isArray(i[0]) ? i[0] : i;
                if ("number" != typeof o[0]) {
                    for (var r = [], e = 0, n = o.length; e < n; e++) r.push(o[e].x, o[e].y);
                    o = r
                }
                this.points = o,
                this.type = s.POLY,
                this.closeStroke = !0
            }
            return t.prototype.clone = function() {
                var i = new t(this.points.slice());
                return i.closeStroke = this.closeStroke,
                i
            },
            t.prototype.contains = function(t, i) {
                for (var s = !1,
                h = this.points.length / 2,
                o = 0,
                r = h - 1; o < h; r = o++) {
                    var e = this.points[2 * o],
                    n = this.points[2 * o + 1],
                    a = this.points[2 * r],
                    c = this.points[2 * r + 1];
                    n > i != c > i && t < (i - n) / (c - n) * (a - e) + e && (s = !s)
                }
                return s
            },
            t.prototype.toString = function() {
                return "[@pixi/math:PolygoncloseStroke=" + this.closeStroke + "points=" + this.points.reduce(function(t, i) {
                    return t + ", " + i
                },
                "") + "]"
            },
            t
        } ();
        exports.Polygon = n;
        var a = function() {
            function t(t, i, h, o, r) {
                void 0 === t && (t = 0),
                void 0 === i && (i = 0),
                void 0 === h && (h = 0),
                void 0 === o && (o = 0),
                void 0 === r && (r = 20),
                this.x = t,
                this.y = i,
                this.width = h,
                this.height = o,
                this.radius = r,
                this.type = s.RREC
            }
            return t.prototype.clone = function() {
                return new t(this.x, this.y, this.width, this.height, this.radius)
            },
            t.prototype.contains = function(t, i) {
                if (this.width <= 0 || this.height <= 0) return ! 1;
                if (t >= this.x && t <= this.x + this.width && i >= this.y && i <= this.y + this.height) {
                    if (i >= this.y + this.radius && i <= this.y + this.height - this.radius || t >= this.x + this.radius && t <= this.x + this.width - this.radius) return ! 0;
                    var s = t - (this.x + this.radius),
                    h = i - (this.y + this.radius),
                    o = this.radius * this.radius;
                    if (s * s + h * h <= o) return ! 0;
                    if ((s = t - (this.x + this.width - this.radius)) * s + h * h <= o) return ! 0;
                    if (s * s + (h = i - (this.y + this.height - this.radius)) * h <= o) return ! 0;
                    if ((s = t - (this.x + this.radius)) * s + h * h <= o) return ! 0
                }
                return ! 1
            },
            t.prototype.toString = function() {
                return "[@pixi/math:RoundedRectangle x=" + this.x + " y=" + this.y + "width=" + this.width + " height=" + this.height + " radius=" + this.radius + "]"
            },
            t
        } ();
        exports.RoundedRectangle = a;
        var c = function() {
            function t(t, i) {
                void 0 === t && (t = 0),
                void 0 === i && (i = 0),
                this.x = t,
                this.y = i
            }
            return t.prototype.clone = function() {
                return new t(this.x, this.y)
            },
            t.prototype.copyFrom = function(t) {
                return this.set(t.x, t.y),
                this
            },
            t.prototype.copyTo = function(t) {
                return t.set(this.x, this.y),
                t
            },
            t.prototype.equals = function(t) {
                return t.x === this.x && t.y === this.y
            },
            t.prototype.set = function(t, i) {
                return void 0 === t && (t = 0),
                void 0 === i && (i = t),
                this.x = t,
                this.y = i,
                this
            },
            t.prototype.toString = function() {
                return "[@pixi/math:Point x=" + this.x + " y=" + this.y + "]"
            },
            t
        } ();
        exports.Point = c;
        var u = function() {
            function t(t, i, s, h) {
                void 0 === s && (s = 0),
                void 0 === h && (h = 0),
                this._x = s,
                this._y = h,
                this.cb = t,
                this.scope = i
            }
            return t.prototype.clone = function(i, s) {
                return void 0 === i && (i = this.cb),
                void 0 === s && (s = this.scope),
                new t(i, s, this._x, this._y)
            },
            t.prototype.set = function(t, i) {
                return void 0 === t && (t = 0),
                void 0 === i && (i = t),
                this._x === t && this._y === i || (this._x = t, this._y = i, this.cb.call(this.scope)),
                this
            },
            t.prototype.copyFrom = function(t) {
                return this._x === t.x && this._y === t.y || (this._x = t.x, this._y = t.y, this.cb.call(this.scope)),
                this
            },
            t.prototype.copyTo = function(t) {
                return t.set(this._x, this._y),
                t
            },
            t.prototype.equals = function(t) {
                return t.x === this._x && t.y === this._y
            },
            t.prototype.toString = function() {
                return "[@pixi/math:ObservablePoint x=0 y=0 scope=" + this.scope + "]"
            },
            Object.defineProperty(t.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x !== t && (this._x = t, this.cb.call(this.scope))
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y !== t && (this._y = t, this.cb.call(this.scope))
                },
                enumerable: !1,
                configurable: !0
            }),
            t
        } ();
        exports.ObservablePoint = u;
        var p = function() {
            function i(t, i, s, h, o, r) {
                void 0 === t && (t = 1),
                void 0 === i && (i = 0),
                void 0 === s && (s = 0),
                void 0 === h && (h = 1),
                void 0 === o && (o = 0),
                void 0 === r && (r = 0),
                this.array = null,
                this.a = t,
                this.b = i,
                this.c = s,
                this.d = h,
                this.tx = o,
                this.ty = r
            }
            return i.prototype.fromArray = function(t) {
                this.a = t[0],
                this.b = t[1],
                this.c = t[3],
                this.d = t[4],
                this.tx = t[2],
                this.ty = t[5]
            },
            i.prototype.set = function(t, i, s, h, o, r) {
                return this.a = t,
                this.b = i,
                this.c = s,
                this.d = h,
                this.tx = o,
                this.ty = r,
                this
            },
            i.prototype.toArray = function(t, i) {
                this.array || (this.array = new Float32Array(9));
                var s = i || this.array;
                return t ? (s[0] = this.a, s[1] = this.b, s[2] = 0, s[3] = this.c, s[4] = this.d, s[5] = 0, s[6] = this.tx, s[7] = this.ty, s[8] = 1) : (s[0] = this.a, s[1] = this.c, s[2] = this.tx, s[3] = this.b, s[4] = this.d, s[5] = this.ty, s[6] = 0, s[7] = 0, s[8] = 1),
                s
            },
            i.prototype.apply = function(t, i) {
                i = i || new c;
                var s = t.x,
                h = t.y;
                return i.x = this.a * s + this.c * h + this.tx,
                i.y = this.b * s + this.d * h + this.ty,
                i
            },
            i.prototype.applyInverse = function(t, i) {
                i = i || new c;
                var s = 1 / (this.a * this.d + this.c * -this.b),
                h = t.x,
                o = t.y;
                return i.x = this.d * s * h + -this.c * s * o + (this.ty * this.c - this.tx * this.d) * s,
                i.y = this.a * s * o + -this.b * s * h + ( - this.ty * this.a + this.tx * this.b) * s,
                i
            },
            i.prototype.translate = function(t, i) {
                return this.tx += t,
                this.ty += i,
                this
            },
            i.prototype.scale = function(t, i) {
                return this.a *= t,
                this.d *= i,
                this.c *= t,
                this.b *= i,
                this.tx *= t,
                this.ty *= i,
                this
            },
            i.prototype.rotate = function(t) {
                var i = Math.cos(t),
                s = Math.sin(t),
                h = this.a,
                o = this.c,
                r = this.tx;
                return this.a = h * i - this.b * s,
                this.b = h * s + this.b * i,
                this.c = o * i - this.d * s,
                this.d = o * s + this.d * i,
                this.tx = r * i - this.ty * s,
                this.ty = r * s + this.ty * i,
                this
            },
            i.prototype.append = function(t) {
                var i = this.a,
                s = this.b,
                h = this.c,
                o = this.d;
                return this.a = t.a * i + t.b * h,
                this.b = t.a * s + t.b * o,
                this.c = t.c * i + t.d * h,
                this.d = t.c * s + t.d * o,
                this.tx = t.tx * i + t.ty * h + this.tx,
                this.ty = t.tx * s + t.ty * o + this.ty,
                this
            },
            i.prototype.setTransform = function(t, i, s, h, o, r, e, n, a) {
                return this.a = Math.cos(e + a) * o,
                this.b = Math.sin(e + a) * o,
                this.c = -Math.sin(e - n) * r,
                this.d = Math.cos(e - n) * r,
                this.tx = t - (s * this.a + h * this.c),
                this.ty = i - (s * this.b + h * this.d),
                this
            },
            i.prototype.prepend = function(t) {
                var i = this.tx;
                if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
                    var s = this.a,
                    h = this.c;
                    this.a = s * t.a + this.b * t.c,
                    this.b = s * t.b + this.b * t.d,
                    this.c = h * t.a + this.d * t.c,
                    this.d = h * t.b + this.d * t.d
                }
                return this.tx = i * t.a + this.ty * t.c + t.tx,
                this.ty = i * t.b + this.ty * t.d + t.ty,
                this
            },
            i.prototype.decompose = function(i) {
                var s = this.a,
                h = this.b,
                o = this.c,
                r = this.d,
                e = i.pivot,
                n = -Math.atan2( - o, r),
                a = Math.atan2(h, s),
                c = Math.abs(n + a);
                return c < 1e-5 || Math.abs(t - c) < 1e-5 ? (i.rotation = a, i.skew.x = i.skew.y = 0) : (i.rotation = 0, i.skew.x = n, i.skew.y = a),
                i.scale.x = Math.sqrt(s * s + h * h),
                i.scale.y = Math.sqrt(o * o + r * r),
                i.position.x = this.tx + (e.x * s + e.y * o),
                i.position.y = this.ty + (e.x * h + e.y * r),
                i
            },
            i.prototype.invert = function() {
                var t = this.a,
                i = this.b,
                s = this.c,
                h = this.d,
                o = this.tx,
                r = t * h - i * s;
                return this.a = h / r,
                this.b = -i / r,
                this.c = -s / r,
                this.d = t / r,
                this.tx = (s * this.ty - h * o) / r,
                this.ty = -(t * this.ty - i * o) / r,
                this
            },
            i.prototype.identity = function() {
                return this.a = 1,
                this.b = 0,
                this.c = 0,
                this.d = 1,
                this.tx = 0,
                this.ty = 0,
                this
            },
            i.prototype.clone = function() {
                var t = new i;
                return t.a = this.a,
                t.b = this.b,
                t.c = this.c,
                t.d = this.d,
                t.tx = this.tx,
                t.ty = this.ty,
                t
            },
            i.prototype.copyTo = function(t) {
                return t.a = this.a,
                t.b = this.b,
                t.c = this.c,
                t.d = this.d,
                t.tx = this.tx,
                t.ty = this.ty,
                t
            },
            i.prototype.copyFrom = function(t) {
                return this.a = t.a,
                this.b = t.b,
                this.c = t.c,
                this.d = t.d,
                this.tx = t.tx,
                this.ty = t.ty,
                this
            },
            i.prototype.toString = function() {
                return "[@pixi/math:Matrix a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + "]"
            },
            Object.defineProperty(i, "IDENTITY", {
                get: function() {
                    return new i
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(i, "TEMP_MATRIX", {
                get: function() {
                    return new i
                },
                enumerable: !1,
                configurable: !0
            }),
            i
        } ();
        exports.Matrix = p;
        var y = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
        x = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
        d = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
        f = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
        l = [],
        b = [],
        v = Math.sign;
        function g() {
            for (var t = 0; t < 16; t++) {
                var i = [];
                l.push(i);
                for (var s = 0; s < 16; s++) for (var h = v(y[t] * y[s] + d[t] * x[s]), o = v(x[t] * y[s] + f[t] * x[s]), r = v(y[t] * d[s] + d[t] * f[s]), e = v(x[t] * d[s] + f[t] * f[s]), n = 0; n < 16; n++) if (y[n] === h && x[n] === o && d[n] === r && f[n] === e) {
                    i.push(n);
                    break
                }
            }
            for (t = 0; t < 16; t++) {
                var a = new p;
                a.set(y[t], x[t], d[t], f[t], 0, 0),
                b.push(a)
            }
        }
        g();
        var _ = {
            E: 0,
            SE: 1,
            S: 2,
            SW: 3,
            W: 4,
            NW: 5,
            N: 6,
            NE: 7,
            MIRROR_VERTICAL: 8,
            MAIN_DIAGONAL: 10,
            MIRROR_HORIZONTAL: 12,
            REVERSE_DIAGONAL: 14,
            uX: function(t) {
                return y[t]
            },
            uY: function(t) {
                return x[t]
            },
            vX: function(t) {
                return d[t]
            },
            vY: function(t) {
                return f[t]
            },
            inv: function(t) {
                return 8 & t ? 15 & t: 7 & -t
            },
            add: function(t, i) {
                return l[t][i]
            },
            sub: function(t, i) {
                return l[t][_.inv(i)]
            },
            rotate180: function(t) {
                return 4 ^ t
            },
            isVertical: function(t) {
                return 2 == (3 & t)
            },
            byDirection: function(t, i) {
                return 2 * Math.abs(t) <= Math.abs(i) ? i >= 0 ? _.S: _.N: 2 * Math.abs(i) <= Math.abs(t) ? t > 0 ? _.E: _.W: i > 0 ? t > 0 ? _.SE: _.SW: t > 0 ? _.NE: _.NW
            },
            matrixAppendRotationInv: function(t, i, s, h) {
                void 0 === s && (s = 0),
                void 0 === h && (h = 0);
                var o = b[_.inv(i)];
                o.tx = s,
                o.ty = h,
                t.append(o)
            }
        };
        exports.groupD8 = _;
        var w = function() {
            function t() {
                this.worldTransform = new p,
                this.localTransform = new p,
                this.position = new u(this.onChange, this, 0, 0),
                this.scale = new u(this.onChange, this, 1, 1),
                this.pivot = new u(this.onChange, this, 0, 0),
                this.skew = new u(this.updateSkew, this, 0, 0),
                this._rotation = 0,
                this._cx = 1,
                this._sx = 0,
                this._cy = 0,
                this._sy = 1,
                this._localID = 0,
                this._currentLocalID = 0,
                this._worldID = 0,
                this._parentID = 0
            }
            return t.prototype.onChange = function() {
                this._localID++
            },
            t.prototype.updateSkew = function() {
                this._cx = Math.cos(this._rotation + this.skew.y),
                this._sx = Math.sin(this._rotation + this.skew.y),
                this._cy = -Math.sin(this._rotation - this.skew.x),
                this._sy = Math.cos(this._rotation - this.skew.x),
                this._localID++
            },
            t.prototype.toString = function() {
                return "[@pixi/math:Transform position=(" + this.position.x + ", " + this.position.y + ") rotation=" + this.rotation + " scale=(" + this.scale.x + ", " + this.scale.y + ") skew=(" + this.skew.x + ", " + this.skew.y + ") ]"
            },
            t.prototype.updateLocalTransform = function() {
                var t = this.localTransform;
                this._localID !== this._currentLocalID && (t.a = this._cx * this.scale.x, t.b = this._sx * this.scale.x, t.c = this._cy * this.scale.y, t.d = this._sy * this.scale.y, t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c), t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d), this._currentLocalID = this._localID, this._parentID = -1)
            },
            t.prototype.updateTransform = function(t) {
                var i = this.localTransform;
                if (this._localID !== this._currentLocalID && (i.a = this._cx * this.scale.x, i.b = this._sx * this.scale.x, i.c = this._cy * this.scale.y, i.d = this._sy * this.scale.y, i.tx = this.position.x - (this.pivot.x * i.a + this.pivot.y * i.c), i.ty = this.position.y - (this.pivot.x * i.b + this.pivot.y * i.d), this._currentLocalID = this._localID, this._parentID = -1), this._parentID !== t._worldID) {
                    var s = t.worldTransform,
                    h = this.worldTransform;
                    h.a = i.a * s.a + i.b * s.c,
                    h.b = i.a * s.b + i.b * s.d,
                    h.c = i.c * s.a + i.d * s.c,
                    h.d = i.c * s.b + i.d * s.d,
                    h.tx = i.tx * s.a + i.ty * s.c + s.tx,
                    h.ty = i.tx * s.b + i.ty * s.d + s.ty,
                    this._parentID = t._worldID,
                    this._worldID++
                }
            },
            t.prototype.setFromMatrix = function(t) {
                t.decompose(this),
                this._localID++
            },
            Object.defineProperty(t.prototype, "rotation", {
                get: function() {
                    return this._rotation
                },
                set: function(t) {
                    this._rotation !== t && (this._rotation = t, this.updateSkew())
                },
                enumerable: !1,
                configurable: !0
            }),
            t.IDENTITY = new t,
            t
        } ();
        exports.Transform = w;
    },
    {}],
    "zUtj": [function(require, module, exports) {

        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.autoDetectRenderer = It,
        exports.autoDetectResource = a,
        exports.checkMaxIfStatementsInShader = Pe,
        exports.uniformParsers = exports.systems = exports.resources = exports.defaultVertex = exports.defaultFilterVertex = exports.ViewableBuffer = exports.VideoResource = exports.UniformGroup = exports.TextureUvs = exports.TextureSystem = exports.TextureMatrix = exports.TextureGCSystem = exports.Texture = exports.System = exports.StencilSystem = exports.StateSystem = exports.State = exports.SpriteMaskFilter = exports.ShaderSystem = exports.Shader = exports.ScissorSystem = exports.SVGResource = exports.Resource = exports.Renderer = exports.RenderTextureSystem = exports.RenderTexturePool = exports.RenderTexture = exports.QuadUv = exports.Quad = exports.ProjectionSystem = exports.Program = exports.ObjectRenderer = exports.MaskSystem = exports.MaskData = exports.ImageResource = exports.ImageBitmapResource = exports.INSTALLED = exports.IGLUniformData = exports.GeometrySystem = exports.Geometry = exports.GLTexture = exports.GLProgram = exports.GLFramebuffer = exports.FramebufferSystem = exports.Framebuffer = exports.FilterSystem = exports.FilterState = exports.Filter = exports.CubeResource = exports.ContextSystem = exports.CanvasResource = exports.BufferResource = exports.Buffer = exports.BatchTextureArray = exports.BatchSystem = exports.BatchShaderGenerator = exports.BatchRenderer = exports.BatchPluginFactory = exports.BatchGeometry = exports.BatchDrawCall = exports.BaseTexture = exports.BaseRenderTexture = exports.BaseImageResource = exports.Attribute = exports.ArrayResource = exports.AbstractRenderer = exports.AbstractMultiResource = exports.AbstractBatchRenderer = void 0;
        var e = require("@pixi/settings"),
        t = require("@pixi/constants"),
        r = require("@pixi/utils"),
        i = require("@pixi/runner"),
        n = require("@pixi/ticker"),
        o = require("@pixi/math");
        e.settings.PREFER_ENV = r.isMobile.any ? t.ENV.WEBGL: t.ENV.WEBGL2,
        e.settings.STRICT_TEXTURE_CACHE = !1;
        var s = [];
        function a(e, t) {
            if (!e) return null;
            var r = "";
            if ("string" == typeof e) {
                var i = /\.(\w{3,4})(?:$|\?|#)/i.exec(e);
                i && (r = i[1].toLowerCase())
            }
            for (var n = s.length - 1; n >= 0; --n) {
                var o = s[n];
                if (o.test && o.test(e, r)) return new o(e, t)
            }
            throw new Error("Unrecognized source type to auto-detect Resource")
        }
        exports.INSTALLED = s;
        var u = function(e, t) {
            return (u = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(e, t) {
                e.__proto__ = t
            } ||
            function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
        };
        function h(e, t) {
            function r() {
                this.constructor = e
            }
            u(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
        }
        var l = function() {
            function e(e, t) {
                void 0 === e && (e = 0),
                void 0 === t && (t = 0),
                this._width = e,
                this._height = t,
                this.destroyed = !1,
                this.internal = !1,
                this.onResize = new i.Runner("setRealSize"),
                this.onUpdate = new i.Runner("update"),
                this.onError = new i.Runner("onError")
            }
            return e.prototype.bind = function(e) {
                this.onResize.add(e),
                this.onUpdate.add(e),
                this.onError.add(e),
                (this._width || this._height) && this.onResize.emit(this._width, this._height)
            },
            e.prototype.unbind = function(e) {
                this.onResize.remove(e),
                this.onUpdate.remove(e),
                this.onError.remove(e)
            },
            e.prototype.resize = function(e, t) {
                e === this._width && t === this._height || (this._width = e, this._height = t, this.onResize.emit(e, t))
            },
            Object.defineProperty(e.prototype, "valid", {
                get: function() {
                    return !! this._width && !!this._height
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.update = function() {
                this.destroyed || this.onUpdate.emit()
            },
            e.prototype.load = function() {
                return Promise.resolve(this)
            },
            Object.defineProperty(e.prototype, "width", {
                get: function() {
                    return this._width
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "height", {
                get: function() {
                    return this._height
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.style = function(e, t, r) {
                return ! 1
            },
            e.prototype.dispose = function() {},
            e.prototype.destroy = function() {
                this.destroyed || (this.destroyed = !0, this.dispose(), this.onError.removeAll(), this.onError = null, this.onResize.removeAll(), this.onResize = null, this.onUpdate.removeAll(), this.onUpdate = null)
            },
            e.test = function(e, t) {
                return ! 1
            },
            e
        } ();
        exports.Resource = l;
        var c = function(e) {
            function r(t, r) {
                var i = this,
                n = r || {},
                o = n.width,
                s = n.height;
                if (!o || !s) throw new Error("BufferResource width or height invalid");
                return (i = e.call(this, o, s) || this).data = t,
                i
            }
            return h(r, e),
            r.prototype.upload = function(e, r, i) {
                var n = e.gl;
                return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.alphaMode === t.ALPHA_MODES.UNPACK),
                i.width === r.width && i.height === r.height ? n.texSubImage2D(r.target, 0, 0, 0, r.width, r.height, r.format, r.type, this.data) : (i.width = r.width, i.height = r.height, n.texImage2D(r.target, 0, i.internalFormat, r.width, r.height, 0, r.format, i.type, this.data)),
                !0
            },
            r.prototype.dispose = function() {
                this.data = null
            },
            r.test = function(e) {
                return e instanceof Float32Array || e instanceof Uint8Array || e instanceof Uint32Array
            },
            r
        } (l);
        exports.BufferResource = c;
        var d = {
            scaleMode: t.SCALE_MODES.NEAREST,
            format: t.FORMATS.RGBA,
            alphaMode: t.ALPHA_MODES.NPM
        },
        f = function(i) {
            function n(n, o) {
                void 0 === n && (n = null),
                void 0 === o && (o = null);
                var s = i.call(this) || this,
                u = (o = o || {}).alphaMode,
                h = o.mipmap,
                c = o.anisotropicLevel,
                d = o.scaleMode,
                f = o.width,
                p = o.height,
                m = o.wrapMode,
                v = o.format,
                g = o.type,
                x = o.target,
                y = o.resolution,
                _ = o.resourceOptions;
                return ! n || n instanceof l || ((n = a(n, _)).internal = !0),
                s.width = f || 0,
                s.height = p || 0,
                s.resolution = y || e.settings.RESOLUTION,
                s.mipmap = void 0 !== h ? h: e.settings.MIPMAP_TEXTURES,
                s.anisotropicLevel = void 0 !== c ? c: e.settings.ANISOTROPIC_LEVEL,
                s.wrapMode = m || e.settings.WRAP_MODE,
                s.scaleMode = void 0 !== d ? d: e.settings.SCALE_MODE,
                s.format = v || t.FORMATS.RGBA,
                s.type = g || t.TYPES.UNSIGNED_BYTE,
                s.target = x || t.TARGETS.TEXTURE_2D,
                s.alphaMode = void 0 !== u ? u: t.ALPHA_MODES.UNPACK,
                s.uid = (0, r.uid)(),
                s.touched = 0,
                s.isPowerOfTwo = !1,
                s._refreshPOT(),
                s._glTextures = {},
                s.dirtyId = 0,
                s.dirtyStyleId = 0,
                s.cacheId = null,
                s.valid = f > 0 && p > 0,
                s.textureCacheIds = [],
                s.destroyed = !1,
                s.resource = null,
                s._batchEnabled = 0,
                s._batchLocation = 0,
                s.parentTextureArray = null,
                s.setResource(n),
                s
            }
            return h(n, i),
            Object.defineProperty(n.prototype, "realWidth", {
                get: function() {
                    return Math.ceil(this.width * this.resolution - 1e-4)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "realHeight", {
                get: function() {
                    return Math.ceil(this.height * this.resolution - 1e-4)
                },
                enumerable: !1,
                configurable: !0
            }),
            n.prototype.setStyle = function(e, t) {
                var r;
                return void 0 !== e && e !== this.scaleMode && (this.scaleMode = e, r = !0),
                void 0 !== t && t !== this.mipmap && (this.mipmap = t, r = !0),
                r && this.dirtyStyleId++,
                this
            },
            n.prototype.setSize = function(e, t, r) {
                return this.resolution = r || this.resolution,
                this.width = e,
                this.height = t,
                this._refreshPOT(),
                this.update(),
                this
            },
            n.prototype.setRealSize = function(e, t, r) {
                return this.resolution = r || this.resolution,
                this.width = e / this.resolution,
                this.height = t / this.resolution,
                this._refreshPOT(),
                this.update(),
                this
            },
            n.prototype._refreshPOT = function() {
                this.isPowerOfTwo = (0, r.isPow2)(this.realWidth) && (0, r.isPow2)(this.realHeight)
            },
            n.prototype.setResolution = function(e) {
                var t = this.resolution;
                return t === e ? this: (this.resolution = e, this.valid && (this.width = this.width * t / e, this.height = this.height * t / e, this.emit("update", this)), this._refreshPOT(), this)
            },
            n.prototype.setResource = function(e) {
                if (this.resource === e) return this;
                if (this.resource) throw new Error("Resource can be set only once");
                return e.bind(this),
                this.resource = e,
                this
            },
            n.prototype.update = function() {
                this.valid ? (this.dirtyId++, this.dirtyStyleId++, this.emit("update", this)) : this.width > 0 && this.height > 0 && (this.valid = !0, this.emit("loaded", this), this.emit("update", this))
            },
            n.prototype.onError = function(e) {
                this.emit("error", this, e)
            },
            n.prototype.destroy = function() {
                this.resource && (this.resource.unbind(this), this.resource.internal && this.resource.destroy(), this.resource = null),
                this.cacheId && (delete r.BaseTextureCache[this.cacheId], delete r.TextureCache[this.cacheId], this.cacheId = null),
                this.dispose(),
                n.removeFromCache(this),
                this.textureCacheIds = null,
                this.destroyed = !0
            },
            n.prototype.dispose = function() {
                this.emit("dispose", this)
            },
            n.prototype.castToBaseTexture = function() {
                return this
            },
            n.from = function(t, i, o) {
                void 0 === o && (o = e.settings.STRICT_TEXTURE_CACHE);
                var s = "string" == typeof t,
                a = null;
                if (s) a = t;
                else {
                    if (!t._pixiId) {
                        var u = i && i.pixiIdPrefix || "pixiid";
                        t._pixiId = u + "_" + (0, r.uid)()
                    }
                    a = t._pixiId
                }
                var h = r.BaseTextureCache[a];
                if (s && o && !h) throw new Error('The cacheId "' + a + '" does not exist in BaseTextureCache.');
                return h || ((h = new n(t, i)).cacheId = a, n.addToCache(h, a)),
                h
            },
            n.fromBuffer = function(e, r, i, o) {
                e = e || new Float32Array(r * i * 4);
                var s = new c(e, {
                    width: r,
                    height: i
                }),
                a = e instanceof Float32Array ? t.TYPES.FLOAT: t.TYPES.UNSIGNED_BYTE;
                return new n(s, Object.assign(d, o || {
                    width: r,
                    height: i,
                    type: a
                }))
            },
            n.addToCache = function(e, t) {
                t && ( - 1 === e.textureCacheIds.indexOf(t) && e.textureCacheIds.push(t), r.BaseTextureCache[t] && console.warn("BaseTexture added to the cache with an id [" + t + "] that already had an entry"), r.BaseTextureCache[t] = e)
            },
            n.removeFromCache = function(e) {
                if ("string" == typeof e) {
                    var t = r.BaseTextureCache[e];
                    if (t) {
                        var i = t.textureCacheIds.indexOf(e);
                        return i > -1 && t.textureCacheIds.splice(i, 1),
                        delete r.BaseTextureCache[e],
                        t
                    }
                } else if (e && e.textureCacheIds) {
                    for (var n = 0; n < e.textureCacheIds.length; ++n) delete r.BaseTextureCache[e.textureCacheIds[n]];
                    return e.textureCacheIds.length = 0,
                    e
                }
                return null
            },
            n._globalBatch = 0,
            n
        } (r.EventEmitter);
        exports.BaseTexture = f;
        var p = function(e) {
            function t(t, r) {
                var i = this,
                n = r || {},
                o = n.width,
                s = n.height; (i = e.call(this, o, s) || this).items = [],
                i.itemDirtyIds = [];
                for (var a = 0; a < t; a++) {
                    var u = new f;
                    i.items.push(u),
                    i.itemDirtyIds.push( - 2)
                }
                return i.length = t,
                i._load = null,
                i.baseTexture = null,
                i
            }
            return h(t, e),
            t.prototype.initFromArray = function(e, t) {
                for (var r = 0; r < this.length; r++) e[r] && (e[r].castToBaseTexture ? this.addBaseTextureAt(e[r].castToBaseTexture(), r) : e[r] instanceof l ? this.addResourceAt(e[r], r) : this.addResourceAt(a(e[r], t), r))
            },
            t.prototype.dispose = function() {
                for (var e = 0,
                t = this.length; e < t; e++) this.items[e].destroy();
                this.items = null,
                this.itemDirtyIds = null,
                this._load = null
            },
            t.prototype.addResourceAt = function(e, t) {
                if (!this.items[t]) throw new Error("Index " + t + " is out of bounds");
                return e.valid && !this.valid && this.resize(e.width, e.height),
                this.items[t].setResource(e),
                this
            },
            t.prototype.bind = function(t) {
                if (null !== this.baseTexture) throw new Error("Only one base texture per TextureArray is allowed");
                e.prototype.bind.call(this, t);
                for (var r = 0; r < this.length; r++) this.items[r].parentTextureArray = t,
                this.items[r].on("update", t.update, t)
            },
            t.prototype.unbind = function(t) {
                e.prototype.unbind.call(this, t);
                for (var r = 0; r < this.length; r++) this.items[r].parentTextureArray = null,
                this.items[r].off("update", t.update, t)
            },
            t.prototype.load = function() {
                var e = this;
                if (this._load) return this._load;
                var t = this.items.map(function(e) {
                    return e.resource
                }).filter(function(e) {
                    return e
                }).map(function(e) {
                    return e.load()
                });
                return this._load = Promise.all(t).then(function() {
                    var t = e.items[0],
                    r = t.realWidth,
                    i = t.realHeight;
                    return e.resize(r, i),
                    Promise.resolve(e)
                }),
                this._load
            },
            t
        } (l);
        exports.AbstractMultiResource = p;
        var m = function(e) {
            function r(t, r) {
                var i, n, o = this,
                s = r || {},
                a = s.width,
                u = s.height;
                return Array.isArray(t) ? (i = t, n = t.length) : n = t,
                o = e.call(this, n, {
                    width: a,
                    height: u
                }) || this,
                i && o.initFromArray(i, r),
                o
            }
            return h(r, e),
            r.prototype.addBaseTextureAt = function(e, t) {
                if (!e.resource) throw new Error("ArrayResource does not support RenderTexture");
                return this.addResourceAt(e.resource, t),
                this
            },
            r.prototype.bind = function(r) {
                e.prototype.bind.call(this, r),
                r.target = t.TARGETS.TEXTURE_2D_ARRAY
            },
            r.prototype.upload = function(e, t, r) {
                var i = this.length,
                n = this.itemDirtyIds,
                o = this.items,
                s = e.gl;
                r.dirtyId < 0 && s.texImage3D(s.TEXTURE_2D_ARRAY, 0, t.format, this._width, this._height, i, 0, t.format, t.type, null);
                for (var a = 0; a < i; a++) {
                    var u = o[a];
                    n[a] < u.dirtyId && (n[a] = u.dirtyId, u.valid && s.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, a, u.resource.width, u.resource.height, 1, t.format, t.type, u.resource.source))
                }
                return ! 0
            },
            r
        } (p);
        exports.ArrayResource = m;
        var v = function(e) {
            function i(t) {
                var r = this,
                i = t,
                n = i.naturalWidth || i.videoWidth || i.width,
                o = i.naturalHeight || i.videoHeight || i.height;
                return (r = e.call(this, n, o) || this).source = t,
                r.noSubImage = !1,
                r
            }
            return h(i, e),
            i.crossOrigin = function(e, t, i) {
                void 0 === i && 0 !== t.indexOf("data:") ? e.crossOrigin = (0, r.determineCrossOrigin)(t) : !1 !== i && (e.crossOrigin = "string" == typeof i ? i: "anonymous")
            },
            i.prototype.upload = function(e, r, i, n) {
                var o = e.gl,
                s = r.realWidth,
                a = r.realHeight;
                return n = n || this.source,
                o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.alphaMode === t.ALPHA_MODES.UNPACK),
                this.noSubImage || r.target !== o.TEXTURE_2D || i.width !== s || i.height !== a ? (i.width = s, i.height = a, o.texImage2D(r.target, 0, r.format, r.format, r.type, n)) : o.texSubImage2D(o.TEXTURE_2D, 0, 0, 0, r.format, r.type, n),
                !0
            },
            i.prototype.update = function() {
                if (!this.destroyed) {
                    var t = this.source,
                    r = t.naturalWidth || t.videoWidth || t.width,
                    i = t.naturalHeight || t.videoHeight || t.height;
                    this.resize(r, i),
                    e.prototype.update.call(this)
                }
            },
            i.prototype.dispose = function() {
                this.source = null
            },
            i
        } (l);
        exports.BaseImageResource = v;
        var g = function(e) {
            function t(t) {
                return e.call(this, t) || this
            }
            return h(t, e),
            t.test = function(e) {
                var t = self.OffscreenCanvas;
                return !! (t && e instanceof t) || self.HTMLCanvasElement && e instanceof HTMLCanvasElement
            },
            t
        } (v);
        exports.CanvasResource = g;
        var x = function(e) {
            function r(i, n) {
                var o = this,
                s = n || {},
                a = s.width,
                u = s.height,
                h = s.autoLoad,
                l = s.linkBaseTexture;
                if (i && i.length !== r.SIDES) throw new Error("Invalid length. Got " + i.length + ", expected 6");
                o = e.call(this, 6, {
                    width: a,
                    height: u
                }) || this;
                for (var c = 0; c < r.SIDES; c++) o.items[c].target = t.TARGETS.TEXTURE_CUBE_MAP_POSITIVE_X + c;
                return o.linkBaseTexture = !1 !== l,
                i && o.initFromArray(i, n),
                !1 !== h && o.load(),
                o
            }
            return h(r, e),
            r.prototype.bind = function(r) {
                e.prototype.bind.call(this, r),
                r.target = t.TARGETS.TEXTURE_CUBE_MAP
            },
            r.prototype.addBaseTextureAt = function(e, r, i) {
                if (void 0 === i && (i = this.linkBaseTexture), !this.items[r]) throw new Error("Index " + r + " is out of bounds");
                if (!this.linkBaseTexture || e.parentTextureArray || Object.keys(e._glTextures).length > 0) {
                    if (!e.resource) throw new Error("CubeResource does not support copying of renderTexture.");
                    this.addResourceAt(e.resource, r)
                } else e.target = t.TARGETS.TEXTURE_CUBE_MAP_POSITIVE_X + r,
                e.parentTextureArray = this.baseTexture,
                this.items[r] = e;
                return e.valid && !this.valid && this.resize(e.realWidth, e.realHeight),
                this.items[r] = e,
                this
            },
            r.prototype.upload = function(e, t, i) {
                for (var n = this.itemDirtyIds,
                o = 0; o < r.SIDES; o++) {
                    var s = this.items[o];
                    n[o] < s.dirtyId && (s.valid && s.resource ? (s.resource.upload(e, s, i), n[o] = s.dirtyId) : n[o] < -1 && (e.gl.texImage2D(s.target, 0, i.internalFormat, t.realWidth, t.realHeight, 0, t.format, i.type, null), n[o] = -1))
                }
                return ! 0
            },
            r.test = function(e) {
                return Array.isArray(e) && e.length === r.SIDES
            },
            r.SIDES = 6,
            r
        } (p);
        exports.CubeResource = x;
        var y = function(r) {
            function i(t, i) {
                var n = this;
                if (i = i || {},
                !(t instanceof HTMLImageElement)) {
                    var o = new Image;
                    v.crossOrigin(o, t, i.crossorigin),
                    o.src = t,
                    t = o
                }
                return n = r.call(this, t) || this,
                !t.complete && n._width && n._height && (n._width = 0, n._height = 0),
                n.url = t.src,
                n._process = null,
                n.preserveBitmap = !1,
                n.createBitmap = (void 0 !== i.createBitmap ? i.createBitmap: e.settings.CREATE_IMAGE_BITMAP) && !!self.createImageBitmap,
                n.alphaMode = "number" == typeof i.alphaMode ? i.alphaMode: null,
                n.bitmap = null,
                n._load = null,
                !1 !== i.autoLoad && n.load(),
                n
            }
            return h(i, r),
            i.prototype.load = function(e) {
                var t = this;
                return this._load ? this._load: (void 0 !== e && (this.createBitmap = e), this._load = new Promise(function(e, r) {
                    var i = t.source;
                    t.url = i.src;
                    var n = function() {
                        t.destroyed || (i.onload = null, i.onerror = null, t.resize(i.width, i.height), t._load = null, t.createBitmap ? e(t.process()) : e(t))
                    };
                    i.complete && i.src ? n() : (i.onload = n, i.onerror = function(e) {
                        r(e),
                        t.onError.emit(e)
                    })
                }), this._load)
            },
            i.prototype.process = function() {
                var e = this,
                r = this.source;
                return null !== this._process ? this._process: null === this.bitmap && self.createImageBitmap ? (this._process = self.createImageBitmap(r, 0, 0, r.width, r.height, {
                    premultiplyAlpha: this.alphaMode === t.ALPHA_MODES.UNPACK ? "premultiply": "none"
                }).then(function(t) {
                    return e.destroyed ? Promise.reject() : (e.bitmap = t, e.update(), e._process = null, Promise.resolve(e))
                }), this._process) : Promise.resolve(this)
            },
            i.prototype.upload = function(e, t, i) {
                if ("number" == typeof this.alphaMode && (t.alphaMode = this.alphaMode), !this.createBitmap) return r.prototype.upload.call(this, e, t, i);
                if (!this.bitmap && (this.process(), !this.bitmap)) return ! 1;
                if (r.prototype.upload.call(this, e, t, i, this.bitmap), !this.preserveBitmap) {
                    var n = !0,
                    o = t._glTextures;
                    for (var s in o) {
                        var a = o[s];
                        if (a !== i && a.dirtyId !== t.dirtyId) {
                            n = !1;
                            break
                        }
                    }
                    n && (this.bitmap.close && this.bitmap.close(), this.bitmap = null)
                }
                return ! 0
            },
            i.prototype.dispose = function() {
                this.source.onload = null,
                this.source.onerror = null,
                r.prototype.dispose.call(this),
                this.bitmap && (this.bitmap.close(), this.bitmap = null),
                this._process = null,
                this._load = null
            },
            i.test = function(e) {
                return "string" == typeof e || e instanceof HTMLImageElement
            },
            i
        } (v);
        exports.ImageResource = y;
        var _ = function(e) {
            function t(t, r) {
                var i = this;
                return r = r || {},
                (i = e.call(this, document.createElement("canvas")) || this)._width = 0,
                i._height = 0,
                i.svg = t,
                i.scale = r.scale || 1,
                i._overrideWidth = r.width,
                i._overrideHeight = r.height,
                i._resolve = null,
                i._crossorigin = r.crossorigin,
                i._load = null,
                !1 !== r.autoLoad && i.load(),
                i
            }
            return h(t, e),
            t.prototype.load = function() {
                var e = this;
                return this._load ? this._load: (this._load = new Promise(function(t) {
                    if (e._resolve = function() {
                        e.resize(e.source.width, e.source.height),
                        t(e)
                    },
                    /^\<svg/.test(e.svg.trim())) {
                        if (!btoa) throw new Error("Your browser doesn't support base64 conversions.");
                        e.svg = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(e.svg)))
                    }
                    e._loadSvg()
                }), this._load)
            },
            t.prototype._loadSvg = function() {
                var e = this,
                t = new Image;
                v.crossOrigin(t, this.svg, this._crossorigin),
                t.src = this.svg,
                t.onerror = function(r) {
                    e._resolve && (t.onerror = null, e.onError.emit(r))
                },
                t.onload = function() {
                    if (e._resolve) {
                        var i = t.width,
                        n = t.height;
                        if (!i || !n) throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
                        var o = i * e.scale,
                        s = n * e.scale; (e._overrideWidth || e._overrideHeight) && (o = e._overrideWidth || e._overrideHeight / n * i, s = e._overrideHeight || e._overrideWidth / i * n),
                        o = Math.round(o),
                        s = Math.round(s);
                        var a = e.source;
                        a.width = o,
                        a.height = s,
                        a._pixiId = "canvas_" + (0, r.uid)(),
                        a.getContext("2d").drawImage(t, 0, 0, i, n, 0, 0, o, s),
                        e._resolve(),
                        e._resolve = null
                    }
                }
            },
            t.getSize = function(e) {
                var r = t.SVG_SIZE.exec(e),
                i = {};
                return r && (i[r[1]] = Math.round(parseFloat(r[3])), i[r[5]] = Math.round(parseFloat(r[7]))),
                i
            },
            t.prototype.dispose = function() {
                e.prototype.dispose.call(this),
                this._resolve = null,
                this._crossorigin = null
            },
            t.test = function(e, t) {
                return "svg" === t || "string" == typeof e && /^data:image\/svg\+xml(;(charset=utf8|utf8))?;base64/.test(e) || "string" == typeof e && 0 === e.indexOf("<svg")
            },
            t.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i,
            t
        } (v);
        exports.SVGResource = _;
        var E = function(e) {
            function t(r, i) {
                var n = this;
                if (i = i || {},
                !(r instanceof HTMLVideoElement)) {
                    var o = document.createElement("video");
                    o.setAttribute("preload", "auto"),
                    o.setAttribute("webkit-playsinline", ""),
                    o.setAttribute("playsinline", ""),
                    "string" == typeof r && (r = [r]);
                    var s = r[0].src || r[0];
                    v.crossOrigin(o, s, i.crossorigin);
                    for (var a = 0; a < r.length; ++a) {
                        var u = document.createElement("source"),
                        h = r[a],
                        l = h.src,
                        c = h.mime,
                        d = (l = l || r[a]).split("?").shift().toLowerCase(),
                        f = d.substr(d.lastIndexOf(".") + 1);
                        c = c || t.MIME_TYPES[f] || "video/" + f,
                        u.src = l,
                        u.type = c,
                        o.appendChild(u)
                    }
                    r = o
                }
                return (n = e.call(this, r) || this).noSubImage = !0,
                n._autoUpdate = !0,
                n._isConnectedToTicker = !1,
                n._updateFPS = i.updateFPS || 0,
                n._msToNextUpdate = 0,
                n.autoPlay = !1 !== i.autoPlay,
                n._load = null,
                n._resolve = null,
                n._onCanPlay = n._onCanPlay.bind(n),
                n._onError = n._onError.bind(n),
                !1 !== i.autoLoad && n.load(),
                n
            }
            return h(t, e),
            t.prototype.update = function(t) {
                if (!this.destroyed) {
                    var r = n.Ticker.shared.elapsedMS * this.source.playbackRate;
                    this._msToNextUpdate = Math.floor(this._msToNextUpdate - r),
                    (!this._updateFPS || this._msToNextUpdate <= 0) && (e.prototype.update.call(this), this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0)
                }
            },
            t.prototype.load = function() {
                var e = this;
                if (this._load) return this._load;
                var t = this.source;
                return (t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) && t.width && t.height && (t.complete = !0),
                t.addEventListener("play", this._onPlayStart.bind(this)),
                t.addEventListener("pause", this._onPlayStop.bind(this)),
                this._isSourceReady() ? this._onCanPlay() : (t.addEventListener("canplay", this._onCanPlay), t.addEventListener("canplaythrough", this._onCanPlay), t.addEventListener("error", this._onError, !0)),
                this._load = new Promise(function(r) {
                    e.valid ? r(e) : (e._resolve = r, t.load())
                }),
                this._load
            },
            t.prototype._onError = function(e) {
                this.source.removeEventListener("error", this._onError, !0),
                this.onError.emit(e)
            },
            t.prototype._isSourcePlaying = function() {
                var e = this.source;
                return e.currentTime > 0 && !1 === e.paused && !1 === e.ended && e.readyState > 2
            },
            t.prototype._isSourceReady = function() {
                var e = this.source;
                return 3 === e.readyState || 4 === e.readyState
            },
            t.prototype._onPlayStart = function() {
                this.valid || this._onCanPlay(),
                this.autoUpdate && !this._isConnectedToTicker && (n.Ticker.shared.add(this.update, this), this._isConnectedToTicker = !0)
            },
            t.prototype._onPlayStop = function() {
                this._isConnectedToTicker && (n.Ticker.shared.remove(this.update, this), this._isConnectedToTicker = !1)
            },
            t.prototype._onCanPlay = function() {
                var e = this.source;
                e.removeEventListener("canplay", this._onCanPlay),
                e.removeEventListener("canplaythrough", this._onCanPlay);
                var t = this.valid;
                this.resize(e.videoWidth, e.videoHeight),
                !t && this._resolve && (this._resolve(this), this._resolve = null),
                this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && e.play()
            },
            t.prototype.dispose = function() {
                this._isConnectedToTicker && n.Ticker.shared.remove(this.update, this);
                var t = this.source;
                t && (t.removeEventListener("error", this._onError, !0), t.pause(), t.src = "", t.load()),
                e.prototype.dispose.call(this)
            },
            Object.defineProperty(t.prototype, "autoUpdate", {
                get: function() {
                    return this._autoUpdate
                },
                set: function(e) {
                    e !== this._autoUpdate && (this._autoUpdate = e, !this._autoUpdate && this._isConnectedToTicker ? (n.Ticker.shared.remove(this.update, this), this._isConnectedToTicker = !1) : this._autoUpdate && !this._isConnectedToTicker && this._isSourcePlaying() && (n.Ticker.shared.add(this.update, this), this._isConnectedToTicker = !0))
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "updateFPS", {
                get: function() {
                    return this._updateFPS
                },
                set: function(e) {
                    e !== this._updateFPS && (this._updateFPS = e)
                },
                enumerable: !1,
                configurable: !0
            }),
            t.test = function(e, r) {
                return self.HTMLVideoElement && e instanceof HTMLVideoElement || t.TYPES.indexOf(r) > -1
            },
            t.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"],
            t.MIME_TYPES = {
                ogv: "video/ogg",
                mov: "video/quicktime",
                m4v: "video/mp4"
            },
            t
        } (v);
        exports.VideoResource = E;
        var T = function(e) {
            function t(t) {
                return e.call(this, t) || this
            }
            return h(t, e),
            t.test = function(e) {
                return !! self.createImageBitmap && e instanceof ImageBitmap
            },
            t
        } (v);
        exports.ImageBitmapResource = T,
        s.push(y, T, g, E, _, c, x, m);
        var b = {
            __proto__: null,
            Resource: l,
            BaseImageResource: v,
            INSTALLED: s,
            autoDetectResource: a,
            AbstractMultiResource: p,
            ArrayResource: m,
            BufferResource: c,
            CanvasResource: g,
            CubeResource: x,
            ImageResource: y,
            SVGResource: _,
            VideoResource: E,
            ImageBitmapResource: T
        },
        S = function() {
            function e(e) {
                this.renderer = e
            }
            return e.prototype.destroy = function() {
                this.renderer = null
            },
            e
        } ();
        exports.System = S;
        var w = function(e) {
            function r() {
                return null !== e && e.apply(this, arguments) || this
            }
            return h(r, e),
            r.prototype.upload = function(e, r, i) {
                var n = e.gl;
                return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.alphaMode === t.ALPHA_MODES.UNPACK),
                i.width === r.width && i.height === r.height ? n.texSubImage2D(r.target, 0, 0, 0, r.width, r.height, r.format, r.type, this.data) : (i.width = r.width, i.height = r.height, n.texImage2D(r.target, 0, 1 === e.context.webGLVersion ? n.DEPTH_COMPONENT: n.DEPTH_COMPONENT16, r.width, r.height, 0, r.format, r.type, this.data)),
                !0
            },
            r
        } (c),
        A = function() {
            function e(e, r) {
                this.width = Math.ceil(e || 100),
                this.height = Math.ceil(r || 100),
                this.stencil = !1,
                this.depth = !1,
                this.dirtyId = 0,
                this.dirtyFormat = 0,
                this.dirtySize = 0,
                this.depthTexture = null,
                this.colorTextures = [],
                this.glFramebuffers = {},
                this.disposeRunner = new i.Runner("disposeFramebuffer"),
                this.multisample = t.MSAA_QUALITY.NONE
            }
            return Object.defineProperty(e.prototype, "colorTexture", {
                get: function() {
                    return this.colorTextures[0]
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.addColorTexture = function(e, r) {
                return void 0 === e && (e = 0),
                this.colorTextures[e] = r || new f(null, {
                    scaleMode: t.SCALE_MODES.NEAREST,
                    resolution: 1,
                    mipmap: t.MIPMAP_MODES.OFF,
                    width: this.width,
                    height: this.height
                }),
                this.dirtyId++,
                this.dirtyFormat++,
                this
            },
            e.prototype.addDepthTexture = function(e) {
                return this.depthTexture = e || new f(new w(null, {
                    width: this.width,
                    height: this.height
                }), {
                    scaleMode: t.SCALE_MODES.NEAREST,
                    resolution: 1,
                    width: this.width,
                    height: this.height,
                    mipmap: t.MIPMAP_MODES.OFF,
                    format: t.FORMATS.DEPTH_COMPONENT,
                    type: t.TYPES.UNSIGNED_SHORT
                }),
                this.dirtyId++,
                this.dirtyFormat++,
                this
            },
            e.prototype.enableDepth = function() {
                return this.depth = !0,
                this.dirtyId++,
                this.dirtyFormat++,
                this
            },
            e.prototype.enableStencil = function() {
                return this.stencil = !0,
                this.dirtyId++,
                this.dirtyFormat++,
                this
            },
            e.prototype.resize = function(e, t) {
                if (e = Math.ceil(e), t = Math.ceil(t), e !== this.width || t !== this.height) {
                    this.width = e,
                    this.height = t,
                    this.dirtyId++,
                    this.dirtySize++;
                    for (var r = 0; r < this.colorTextures.length; r++) {
                        var i = this.colorTextures[r],
                        n = i.resolution;
                        i.setSize(e / n, t / n)
                    }
                    if (this.depthTexture) {
                        n = this.depthTexture.resolution;
                        this.depthTexture.setSize(e / n, t / n)
                    }
                }
            },
            e.prototype.dispose = function() {
                this.disposeRunner.emit(this, !1)
            },
            e.prototype.destroyDepthTexture = function() {
                this.depthTexture && (this.depthTexture.destroy(), this.depthTexture = null, ++this.dirtyId, ++this.dirtyFormat)
            },
            e
        } ();
        exports.Framebuffer = A;
        var C = function(e) {
            function t(t) {
                var r = this;
                "number" == typeof t && (t = {
                    width: arguments[0],
                    height: arguments[1],
                    scaleMode: arguments[2],
                    resolution: arguments[3]
                });
                r = e.call(this, null, t) || this;
                var i = t || {},
                n = i.width,
                o = i.height;
                return r.mipmap = 0,
                r.width = Math.ceil(n) || 100,
                r.height = Math.ceil(o) || 100,
                r.valid = !0,
                r.clearColor = [0, 0, 0, 0],
                r.framebuffer = new A(r.width * r.resolution, r.height * r.resolution).addColorTexture(0, r),
                r.maskStack = [],
                r.filterStack = [{}],
                r
            }
            return h(t, e),
            t.prototype.resize = function(e, t) {
                e = Math.ceil(e),
                t = Math.ceil(t),
                this.framebuffer.resize(e * this.resolution, t * this.resolution)
            },
            t.prototype.dispose = function() {
                this.framebuffer.dispose(),
                e.prototype.dispose.call(this)
            },
            t.prototype.destroy = function() {
                e.prototype.destroy.call(this),
                this.framebuffer.destroyDepthTexture(),
                this.framebuffer = null
            },
            t
        } (f);
        exports.BaseRenderTexture = C;
        var R = function() {
            function e() {
                this.x0 = 0,
                this.y0 = 0,
                this.x1 = 1,
                this.y1 = 0,
                this.x2 = 1,
                this.y2 = 1,
                this.x3 = 0,
                this.y3 = 1,
                this.uvsFloat32 = new Float32Array(8)
            }
            return e.prototype.set = function(e, t, r) {
                var i = t.width,
                n = t.height;
                if (r) {
                    var s = e.width / 2 / i,
                    a = e.height / 2 / n,
                    u = e.x / i + s,
                    h = e.y / n + a;
                    r = o.groupD8.add(r, o.groupD8.NW),
                    this.x0 = u + s * o.groupD8.uX(r),
                    this.y0 = h + a * o.groupD8.uY(r),
                    r = o.groupD8.add(r, 2),
                    this.x1 = u + s * o.groupD8.uX(r),
                    this.y1 = h + a * o.groupD8.uY(r),
                    r = o.groupD8.add(r, 2),
                    this.x2 = u + s * o.groupD8.uX(r),
                    this.y2 = h + a * o.groupD8.uY(r),
                    r = o.groupD8.add(r, 2),
                    this.x3 = u + s * o.groupD8.uX(r),
                    this.y3 = h + a * o.groupD8.uY(r)
                } else this.x0 = e.x / i,
                this.y0 = e.y / n,
                this.x1 = (e.x + e.width) / i,
                this.y1 = e.y / n,
                this.x2 = (e.x + e.width) / i,
                this.y2 = (e.y + e.height) / n,
                this.x3 = e.x / i,
                this.y3 = (e.y + e.height) / n;
                this.uvsFloat32[0] = this.x0,
                this.uvsFloat32[1] = this.y0,
                this.uvsFloat32[2] = this.x1,
                this.uvsFloat32[3] = this.y1,
                this.uvsFloat32[4] = this.x2,
                this.uvsFloat32[5] = this.y2,
                this.uvsFloat32[6] = this.x3,
                this.uvsFloat32[7] = this.y3
            },
            e.prototype.toString = function() {
                return "[@pixi/core:TextureUvs x0=" + this.x0 + " y0=" + this.y0 + " x1=" + this.x1 + " y1=" + this.y1 + " x2=" + this.x2 + " y2=" + this.y2 + " x3=" + this.x3 + " y3=" + this.y3 + "]"
            },
            e
        } ();
        exports.TextureUvs = R;
        var I = new R,
        O = function(t) {
            function i(e, r, n, s, a, u) {
                var h = t.call(this) || this;
                if (h.noFrame = !1, r || (h.noFrame = !0, r = new o.Rectangle(0, 0, 1, 1)), e instanceof i && (e = e.baseTexture), h.baseTexture = e, h._frame = r, h.trim = s, h.valid = !1, h._uvs = I, h.uvMatrix = null, h.orig = n || r, h._rotate = Number(a || 0), !0 === a) h._rotate = 2;
                else if (h._rotate % 2 != 0) throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
                return h.defaultAnchor = u ? new o.Point(u.x, u.y) : new o.Point(0, 0),
                h._updateID = 0,
                h.textureCacheIds = [],
                e.valid ? h.noFrame ? e.valid && h.onBaseTextureUpdated(e) : h.frame = r: e.once("loaded", h.onBaseTextureUpdated, h),
                h.noFrame && e.on("update", h.onBaseTextureUpdated, h),
                h
            }
            return h(i, t),
            i.prototype.update = function() {
                this.baseTexture.resource && this.baseTexture.resource.update()
            },
            i.prototype.onBaseTextureUpdated = function(e) {
                if (this.noFrame) {
                    if (!this.baseTexture.valid) return;
                    this._frame.width = e.width,
                    this._frame.height = e.height,
                    this.valid = !0,
                    this.updateUvs()
                } else this.frame = this._frame;
                this.emit("update", this)
            },
            i.prototype.destroy = function(e) {
                if (this.baseTexture) {
                    if (e) {
                        var t = this.baseTexture.resource;
                        t && t.url && r.TextureCache[t.url] && i.removeFromCache(t.url),
                        this.baseTexture.destroy()
                    }
                    this.baseTexture.off("loaded", this.onBaseTextureUpdated, this),
                    this.baseTexture.off("update", this.onBaseTextureUpdated, this),
                    this.baseTexture = null
                }
                this._frame = null,
                this._uvs = null,
                this.trim = null,
                this.orig = null,
                this.valid = !1,
                i.removeFromCache(this),
                this.textureCacheIds = null
            },
            i.prototype.clone = function() {
                return new i(this.baseTexture, this.frame.clone(), this.orig.clone(), this.trim && this.trim.clone(), this.rotate, this.defaultAnchor)
            },
            i.prototype.updateUvs = function() {
                this._uvs === I && (this._uvs = new R),
                this._uvs.set(this._frame, this.baseTexture, this.rotate),
                this._updateID++
            },
            i.from = function(t, n, o) {
                void 0 === n && (n = {}),
                void 0 === o && (o = e.settings.STRICT_TEXTURE_CACHE);
                var s = "string" == typeof t,
                a = null;
                if (s) a = t;
                else {
                    if (!t._pixiId) {
                        var u = n && n.pixiIdPrefix || "pixiid";
                        t._pixiId = u + "_" + (0, r.uid)()
                    }
                    a = t._pixiId
                }
                var h = r.TextureCache[a];
                if (s && o && !h) throw new Error('The cacheId "' + a + '" does not exist in TextureCache.');
                return h || (n.resolution || (n.resolution = (0, r.getResolutionOfUrl)(t)), (h = new i(new f(t, n))).baseTexture.cacheId = a, f.addToCache(h.baseTexture, a), i.addToCache(h, a)),
                h
            },
            i.fromURL = function(e, t) {
                var r = Object.assign({
                    autoLoad: !1
                },
                null == t ? void 0 : t.resourceOptions),
                n = i.from(e, Object.assign({
                    resourceOptions: r
                },
                t), !1),
                o = n.baseTexture.resource;
                return n.baseTexture.valid ? Promise.resolve(n) : o.load().then(function() {
                    return Promise.resolve(n)
                })
            },
            i.fromBuffer = function(e, t, r, n) {
                return new i(f.fromBuffer(e, t, r, n))
            },
            i.fromLoader = function(t, n, o, s) {
                var a = new f(t, Object.assign({
                    scaleMode: e.settings.SCALE_MODE,
                    resolution: (0, r.getResolutionOfUrl)(n)
                },
                s)),
                u = a.resource;
                u instanceof y && (u.url = n);
                var h = new i(a);
                return o || (o = n),
                f.addToCache(h.baseTexture, o),
                i.addToCache(h, o),
                o !== n && (f.addToCache(h.baseTexture, n), i.addToCache(h, n)),
                h.baseTexture.valid ? Promise.resolve(h) : new Promise(function(e) {
                    h.baseTexture.once("loaded",
                    function() {
                        return e(h)
                    })
                })
            },
            i.addToCache = function(e, t) {
                t && ( - 1 === e.textureCacheIds.indexOf(t) && e.textureCacheIds.push(t), r.TextureCache[t] && console.warn("Texture added to the cache with an id [" + t + "] that already had an entry"), r.TextureCache[t] = e)
            },
            i.removeFromCache = function(e) {
                if ("string" == typeof e) {
                    var t = r.TextureCache[e];
                    if (t) {
                        var i = t.textureCacheIds.indexOf(e);
                        return i > -1 && t.textureCacheIds.splice(i, 1),
                        delete r.TextureCache[e],
                        t
                    }
                } else if (e && e.textureCacheIds) {
                    for (var n = 0; n < e.textureCacheIds.length; ++n) r.TextureCache[e.textureCacheIds[n]] === e && delete r.TextureCache[e.textureCacheIds[n]];
                    return e.textureCacheIds.length = 0,
                    e
                }
                return null
            },
            Object.defineProperty(i.prototype, "resolution", {
                get: function() {
                    return this.baseTexture.resolution
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(i.prototype, "frame", {
                get: function() {
                    return this._frame
                },
                set: function(e) {
                    this._frame = e,
                    this.noFrame = !1;
                    var t = e.x,
                    r = e.y,
                    i = e.width,
                    n = e.height,
                    o = t + i > this.baseTexture.width,
                    s = r + n > this.baseTexture.height;
                    if (o || s) {
                        var a = o && s ? "and": "or",
                        u = "X: " + t + " + " + i + " = " + (t + i) + " > " + this.baseTexture.width,
                        h = "Y: " + r + " + " + n + " = " + (r + n) + " > " + this.baseTexture.height;
                        throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: " + u + " " + a + " " + h)
                    }
                    this.valid = i && n && this.baseTexture.valid,
                    this.trim || this.rotate || (this.orig = e),
                    this.valid && this.updateUvs()
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(i.prototype, "rotate", {
                get: function() {
                    return this._rotate
                },
                set: function(e) {
                    this._rotate = e,
                    this.valid && this.updateUvs()
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(i.prototype, "width", {
                get: function() {
                    return this.orig.width
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(i.prototype, "height", {
                get: function() {
                    return this.orig.height
                },
                enumerable: !1,
                configurable: !0
            }),
            i.prototype.castToBaseTexture = function() {
                return this.baseTexture
            },
            i
        } (r.EventEmitter);
        function M() {
            var e = document.createElement("canvas");
            e.width = 16,
            e.height = 16;
            var t = e.getContext("2d");
            return t.fillStyle = "white",
            t.fillRect(0, 0, 16, 16),
            new O(new f(new g(e)))
        }
        function P(e) {
            e.destroy = function() {},
            e.on = function() {},
            e.once = function() {},
            e.emit = function() {}
        }
        exports.Texture = O,
        O.EMPTY = new O(new f),
        P(O.EMPTY),
        P(O.EMPTY.baseTexture),
        O.WHITE = M(),
        P(O.WHITE),
        P(O.WHITE.baseTexture);
        var F = function(e) {
            function t(t, r) {
                var i = e.call(this, t, r) || this;
                return i.valid = !0,
                i.filterFrame = null,
                i.filterPoolKey = null,
                i.updateUvs(),
                i
            }
            return h(t, e),
            Object.defineProperty(t.prototype, "framebuffer", {
                get: function() {
                    return this.baseTexture.framebuffer
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.resize = function(e, t, r) {
                void 0 === r && (r = !0),
                e = Math.ceil(e),
                t = Math.ceil(t),
                this.valid = e > 0 && t > 0,
                this._frame.width = this.orig.width = e,
                this._frame.height = this.orig.height = t,
                r && this.baseTexture.resize(e, t),
                this.updateUvs()
            },
            t.prototype.setResolution = function(e) {
                var t = this.baseTexture;
                t.resolution !== e && (t.setResolution(e), this.resize(t.width, t.height, !1))
            },
            t.create = function(e) {
                for (var i = arguments,
                n = [], o = 1; o < arguments.length; o++) n[o - 1] = i[o];
                return "number" == typeof e && ((0, r.deprecation)("6.0.0", "Arguments (width, height, scaleMode, resolution) have been deprecated."), e = {
                    width: e,
                    height: n[0],
                    scaleMode: n[1],
                    resolution: n[2]
                }),
                new t(new C(e))
            },
            t
        } (O);
        exports.RenderTexture = F;
        var D = function() {
            function e(e) {
                this.texturePool = {},
                this.textureOptions = e || {},
                this.enableFullScreen = !1,
                this._pixelsWidth = 0,
                this._pixelsHeight = 0
            }
            return e.prototype.createTexture = function(e, t) {
                var r = new C(Object.assign({
                    width: e,
                    height: t,
                    resolution: 1
                },
                this.textureOptions));
                return new F(r)
            },
            e.prototype.getOptimalTexture = function(t, i, n) {
                void 0 === n && (n = 1);
                var o = e.SCREEN_KEY;
                t *= n,
                i *= n,
                this.enableFullScreen && t === this._pixelsWidth && i === this._pixelsHeight || (o = (65535 & (t = (0, r.nextPow2)(t))) << 16 | 65535 & (i = (0, r.nextPow2)(i))),
                this.texturePool[o] || (this.texturePool[o] = []);
                var s = this.texturePool[o].pop();
                return s || (s = this.createTexture(t, i)),
                s.filterPoolKey = o,
                s.setResolution(n),
                s
            },
            e.prototype.getFilterTexture = function(e, t) {
                var r = this.getOptimalTexture(e.width, e.height, t || e.resolution);
                return r.filterFrame = e.filterFrame,
                r
            },
            e.prototype.returnTexture = function(e) {
                var t = e.filterPoolKey;
                e.filterFrame = null,
                this.texturePool[t].push(e)
            },
            e.prototype.returnFilterTexture = function(e) {
                this.returnTexture(e)
            },
            e.prototype.clear = function(e) {
                if (e = !1 !== e) for (var t in this.texturePool) {
                    var r = this.texturePool[t];
                    if (r) for (var i = 0; i < r.length; i++) r[i].destroy(!0)
                }
                this.texturePool = {}
            },
            e.prototype.setScreenSize = function(t) {
                if (t.width !== this._pixelsWidth || t.height !== this._pixelsHeight) {
                    var r = e.SCREEN_KEY,
                    i = this.texturePool[r];
                    if (this.enableFullScreen = t.width > 0 && t.height > 0, i) for (var n = 0; n < i.length; n++) i[n].destroy(!0);
                    this.texturePool[r] = [],
                    this._pixelsWidth = t.width,
                    this._pixelsHeight = t.height
                }
            },
            e.SCREEN_KEY = "screen",
            e
        } ();
        exports.RenderTexturePool = D;
        var N = function() {
            function e(e, t, r, i, n, o, s) {
                void 0 === t && (t = 0),
                void 0 === r && (r = !1),
                void 0 === i && (i = 5126),
                this.buffer = e,
                this.size = t,
                this.normalized = r,
                this.type = i,
                this.stride = n,
                this.start = o,
                this.instance = s
            }
            return e.prototype.destroy = function() {
                this.buffer = null
            },
            e.from = function(t, r, i, n, o) {
                return new e(t, r, i, n, o)
            },
            e
        } ();
        exports.Attribute = N;
        var B = 0,
        L = function() {
            function e(e, t, r) {
                void 0 === t && (t = !0),
                void 0 === r && (r = !1),
                this.data = e || new Float32Array(1),
                this._glBuffers = {},
                this._updateID = 0,
                this.index = r,
                this.static = t,
                this.id = B++,
                this.disposeRunner = new i.Runner("disposeBuffer")
            }
            return e.prototype.update = function(e) {
                this.data = e || this.data,
                this._updateID++
            },
            e.prototype.dispose = function() {
                this.disposeRunner.emit(this, !1)
            },
            e.prototype.destroy = function() {
                this.dispose(),
                this.data = null
            },
            e.from = function(t) {
                return t instanceof Array && (t = new Float32Array(t)),
                new e(t)
            },
            e
        } ();
        function U(e) {
            if (4 === e.BYTES_PER_ELEMENT) return e instanceof Float32Array ? "Float32Array": e instanceof Uint32Array ? "Uint32Array": "Int32Array";
            if (2 === e.BYTES_PER_ELEMENT) {
                if (e instanceof Uint16Array) return "Uint16Array"
            } else if (1 === e.BYTES_PER_ELEMENT && e instanceof Uint8Array) return "Uint8Array";
            return null
        }
        exports.Buffer = L;
        var k = {
            Float32Array: Float32Array,
            Uint32Array: Uint32Array,
            Int32Array: Int32Array,
            Uint8Array: Uint8Array
        };
        function G(e, t) {
            for (var r = 0,
            i = 0,
            n = {},
            o = 0; o < e.length; o++) i += t[o],
            r += e[o].length;
            var s = new ArrayBuffer(4 * r),
            a = null,
            u = 0;
            for (o = 0; o < e.length; o++) {
                var h = t[o],
                l = e[o],
                c = U(l);
                n[c] || (n[c] = new k[c](s)),
                a = n[c];
                for (var d = 0; d < l.length; d++) {
                    a[(d / h | 0) * i + u + d % h] = l[d]
                }
                u += h
            }
            return new Float32Array(s)
        }
        var V = {
            5126 : 4,
            5123 : 2,
            5121 : 1
        },
        j = 0,
        H = {
            Float32Array: Float32Array,
            Uint32Array: Uint32Array,
            Int32Array: Int32Array,
            Uint8Array: Uint8Array,
            Uint16Array: Uint16Array
        },
        X = function() {
            function e(e, t) {
                void 0 === e && (e = []),
                void 0 === t && (t = {}),
                this.buffers = e,
                this.indexBuffer = null,
                this.attributes = t,
                this.glVertexArrayObjects = {},
                this.id = j++,
                this.instanced = !1,
                this.instanceCount = 1,
                this.disposeRunner = new i.Runner("disposeGeometry"),
                this.refCount = 0
            }
            return e.prototype.addAttribute = function(e, t, r, i, n, o, s, a) {
                if (void 0 === r && (r = 0), void 0 === i && (i = !1), void 0 === a && (a = !1), !t) throw new Error("You must pass a buffer when creating an attribute");
                t instanceof L || (t instanceof Array && (t = new Float32Array(t)), t = new L(t));
                var u = e.split("|");
                if (u.length > 1) {
                    for (var h = 0; h < u.length; h++) this.addAttribute(u[h], t, r, i, n);
                    return this
                }
                var l = this.buffers.indexOf(t);
                return - 1 === l && (this.buffers.push(t), l = this.buffers.length - 1),
                this.attributes[e] = new N(l, r, i, n, o, s, a),
                this.instanced = this.instanced || a,
                this
            },
            e.prototype.getAttribute = function(e) {
                return this.attributes[e]
            },
            e.prototype.getBuffer = function(e) {
                return this.buffers[this.getAttribute(e).buffer]
            },
            e.prototype.addIndex = function(e) {
                return e instanceof L || (e instanceof Array && (e = new Uint16Array(e)), e = new L(e)),
                e.index = !0,
                this.indexBuffer = e,
                -1 === this.buffers.indexOf(e) && this.buffers.push(e),
                this
            },
            e.prototype.getIndex = function() {
                return this.indexBuffer
            },
            e.prototype.interleave = function() {
                if (1 === this.buffers.length || 2 === this.buffers.length && this.indexBuffer) return this;
                var e, t = [],
                r = [],
                i = new L;
                for (e in this.attributes) {
                    var n = this.attributes[e],
                    o = this.buffers[n.buffer];
                    t.push(o.data),
                    r.push(n.size * V[n.type] / 4),
                    n.buffer = 0
                }
                for (i.data = G(t, r), e = 0; e < this.buffers.length; e++) this.buffers[e] !== this.indexBuffer && this.buffers[e].destroy();
                return this.buffers = [i],
                this.indexBuffer && this.buffers.push(this.indexBuffer),
                this
            },
            e.prototype.getSize = function() {
                for (var e in this.attributes) {
                    var t = this.attributes[e];
                    return this.buffers[t.buffer].data.length / (t.stride / 4 || t.size)
                }
                return 0
            },
            e.prototype.dispose = function() {
                this.disposeRunner.emit(this, !1)
            },
            e.prototype.destroy = function() {
                this.dispose(),
                this.buffers = null,
                this.indexBuffer = null,
                this.attributes = null
            },
            e.prototype.clone = function() {
                for (var t = new e,
                r = 0; r < this.buffers.length; r++) t.buffers[r] = new L(this.buffers[r].data.slice(0));
                for (var r in this.attributes) {
                    var i = this.attributes[r];
                    t.attributes[r] = new N(i.buffer, i.size, i.normalized, i.type, i.stride, i.start, i.instance)
                }
                return this.indexBuffer && (t.indexBuffer = t.buffers[this.buffers.indexOf(this.indexBuffer)], t.indexBuffer.index = !0),
                t
            },
            e.merge = function(t) {
                for (var r, i = new e,
                n = [], o = [], s = [], a = 0; a < t.length; a++) {
                    r = t[a];
                    for (var u = 0; u < r.buffers.length; u++) o[u] = o[u] || 0,
                    o[u] += r.buffers[u].data.length,
                    s[u] = 0
                }
                for (a = 0; a < r.buffers.length; a++) n[a] = new(H[U(r.buffers[a].data)])(o[a]),
                i.buffers[a] = new L(n[a]);
                for (a = 0; a < t.length; a++) {
                    r = t[a];
                    for (u = 0; u < r.buffers.length; u++) n[u].set(r.buffers[u].data, s[u]),
                    s[u] += r.buffers[u].data.length
                }
                if (i.attributes = r.attributes, r.indexBuffer) {
                    i.indexBuffer = i.buffers[r.buffers.indexOf(r.indexBuffer)],
                    i.indexBuffer.index = !0;
                    var h = 0,
                    l = 0,
                    c = 0,
                    d = 0;
                    for (a = 0; a < r.buffers.length; a++) if (r.buffers[a] !== r.indexBuffer) {
                        d = a;
                        break
                    }
                    for (var a in r.attributes) {
                        var f = r.attributes[a]; (0 | f.buffer) === d && (l += f.size * V[f.type] / 4)
                    }
                    for (a = 0; a < t.length; a++) {
                        var p = t[a].indexBuffer.data;
                        for (u = 0; u < p.length; u++) i.indexBuffer.data[u + c] += h;
                        h += r.buffers[d].data.length / l,
                        c += p.length
                    }
                }
                return i
            },
            e
        } ();
        exports.Geometry = X;
        var z = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.addAttribute("aVertexPosition", new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])).addIndex([0, 1, 3, 2]),
                t
            }
            return h(t, e),
            t
        } (X);
        exports.Quad = z;
        var W = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.vertices = new Float32Array([ - 1, -1, 1, -1, 1, 1, -1, 1]),
                t.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
                t.vertexBuffer = new L(t.vertices),
                t.uvBuffer = new L(t.uvs),
                t.addAttribute("aVertexPosition", t.vertexBuffer).addAttribute("aTextureCoord", t.uvBuffer).addIndex([0, 1, 2, 0, 2, 3]),
                t
            }
            return h(t, e),
            t.prototype.map = function(e, t) {
                var r = 0,
                i = 0;
                return this.uvs[0] = r,
                this.uvs[1] = i,
                this.uvs[2] = r + t.width / e.width,
                this.uvs[3] = i,
                this.uvs[4] = r + t.width / e.width,
                this.uvs[5] = i + t.height / e.height,
                this.uvs[6] = r,
                this.uvs[7] = i + t.height / e.height,
                r = t.x,
                i = t.y,
                this.vertices[0] = r,
                this.vertices[1] = i,
                this.vertices[2] = r + t.width,
                this.vertices[3] = i,
                this.vertices[4] = r + t.width,
                this.vertices[5] = i + t.height,
                this.vertices[6] = r,
                this.vertices[7] = i + t.height,
                this.invalidate(),
                this
            },
            t.prototype.invalidate = function() {
                return this.vertexBuffer._updateID++,
                this.uvBuffer._updateID++,
                this
            },
            t
        } (X);
        exports.QuadUv = W;
        var Y = 0,
        K = function() {
            function e(e, t) {
                this.uniforms = e,
                this.group = !0,
                this.syncUniforms = {},
                this.dirtyId = 0,
                this.id = Y++,
                this.static = !!t
            }
            return e.prototype.update = function() {
                this.dirtyId++
            },
            e.prototype.add = function(t, r, i) {
                this.uniforms[t] = new e(r, i)
            },
            e.from = function(t, r) {
                return new e(t, r)
            },
            e
        } ();
        exports.UniformGroup = K;
        var q = function() {
            function e() {
                this.renderTexture = null,
                this.target = null,
                this.legacy = !1,
                this.resolution = 1,
                this.sourceFrame = new o.Rectangle,
                this.destinationFrame = new o.Rectangle,
                this.bindingSourceFrame = new o.Rectangle,
                this.bindingDestinationFrame = new o.Rectangle,
                this.filters = [],
                this.transform = null
            }
            return e.prototype.clear = function() {
                this.target = null,
                this.filters = null,
                this.renderTexture = null
            },
            e
        } ();
        exports.FilterState = q;
        var Q = [new o.Point, new o.Point, new o.Point, new o.Point],
        Z = new o.Matrix,
        $ = function(e) {
            function r(t) {
                var r = e.call(this, t) || this;
                return r.defaultFilterStack = [{}],
                r.texturePool = new D,
                r.texturePool.setScreenSize(t.view),
                r.statePool = [],
                r.quad = new z,
                r.quadUv = new W,
                r.tempRect = new o.Rectangle,
                r.activeState = {},
                r.globalUniforms = new K({
                    outputFrame: new o.Rectangle,
                    inputSize: new Float32Array(4),
                    inputPixel: new Float32Array(4),
                    inputClamp: new Float32Array(4),
                    resolution: 1,
                    filterArea: new Float32Array(4),
                    filterClamp: new Float32Array(4)
                },
                !0),
                r.forceClear = !1,
                r.useMaxPadding = !1,
                r
            }
            return h(r, e),
            r.prototype.push = function(e, t) {
                for (var r = this.renderer,
                i = this.defaultFilterStack,
                n = this.statePool.pop() || new q, o = this.renderer.renderTexture, s = t[0].resolution, a = t[0].padding, u = t[0].autoFit, h = t[0].legacy, l = 1; l < t.length; l++) {
                    var c = t[l];
                    s = Math.min(s, c.resolution),
                    a = this.useMaxPadding ? Math.max(a, c.padding) : a + c.padding,
                    u = u && c.autoFit,
                    h = h || c.legacy
                }
                if (1 === i.length && (this.defaultFilterStack[0].renderTexture = o.current), i.push(n), n.resolution = s, n.legacy = h, n.target = e, n.sourceFrame.copyFrom(e.filterArea || e.getBounds(!0)), n.sourceFrame.pad(a), u) {
                    var d = this.tempRect.copyFrom(o.sourceFrame);
                    r.projection.transform && this.transformAABB(Z.copyFrom(r.projection.transform).invert(), d),
                    n.sourceFrame.fit(d)
                }
                this.roundFrame(n.sourceFrame, o.current ? o.current.resolution: r.resolution, o.sourceFrame, o.destinationFrame, r.projection.transform),
                n.renderTexture = this.getOptimalFilterTexture(n.sourceFrame.width, n.sourceFrame.height, s),
                n.filters = t,
                n.destinationFrame.width = n.renderTexture.width,
                n.destinationFrame.height = n.renderTexture.height;
                var f = this.tempRect;
                f.x = 0,
                f.y = 0,
                f.width = n.sourceFrame.width,
                f.height = n.sourceFrame.height,
                n.renderTexture.filterFrame = n.sourceFrame,
                n.bindingSourceFrame.copyFrom(o.sourceFrame),
                n.bindingDestinationFrame.copyFrom(o.destinationFrame),
                n.transform = r.projection.transform,
                r.projection.transform = null,
                o.bind(n.renderTexture, n.sourceFrame, f),
                r.framebuffer.clear(0, 0, 0, 0)
            },
            r.prototype.pop = function() {
                var e = this.defaultFilterStack,
                r = e.pop(),
                i = r.filters;
                this.activeState = r;
                var n = this.globalUniforms.uniforms;
                n.outputFrame = r.sourceFrame,
                n.resolution = r.resolution;
                var o = n.inputSize,
                s = n.inputPixel,
                a = n.inputClamp;
                if (o[0] = r.destinationFrame.width, o[1] = r.destinationFrame.height, o[2] = 1 / o[0], o[3] = 1 / o[1], s[0] = o[0] * r.resolution, s[1] = o[1] * r.resolution, s[2] = 1 / s[0], s[3] = 1 / s[1], a[0] = .5 * s[2], a[1] = .5 * s[3], a[2] = r.sourceFrame.width * o[2] - .5 * s[2], a[3] = r.sourceFrame.height * o[3] - .5 * s[3], r.legacy) {
                    var u = n.filterArea;
                    u[0] = r.destinationFrame.width,
                    u[1] = r.destinationFrame.height,
                    u[2] = r.sourceFrame.x,
                    u[3] = r.sourceFrame.y,
                    n.filterClamp = n.inputClamp
                }
                this.globalUniforms.update();
                var h = e[e.length - 1];
                if (r.renderTexture.framebuffer.multisample > 1 && this.renderer.framebuffer.blit(), 1 === i.length) i[0].apply(this, r.renderTexture, h.renderTexture, t.CLEAR_MODES.BLEND, r),
                this.returnFilterTexture(r.renderTexture);
                else {
                    var l = r.renderTexture,
                    c = this.getOptimalFilterTexture(l.width, l.height, r.resolution);
                    c.filterFrame = l.filterFrame;
                    var d = 0;
                    for (d = 0; d < i.length - 1; ++d) {
                        i[d].apply(this, l, c, t.CLEAR_MODES.CLEAR, r);
                        var f = l;
                        l = c,
                        c = f
                    }
                    i[d].apply(this, l, h.renderTexture, t.CLEAR_MODES.BLEND, r),
                    this.returnFilterTexture(l),
                    this.returnFilterTexture(c)
                }
                r.clear(),
                this.statePool.push(r)
            },
            r.prototype.bindAndClear = function(e, r) {
                void 0 === r && (r = t.CLEAR_MODES.CLEAR);
                var i = this.renderer,
                n = i.renderTexture,
                o = i.state;
                if (e === this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? this.renderer.projection.transform = this.activeState.transform: this.renderer.projection.transform = null, e && e.filterFrame) {
                    var s = this.tempRect;
                    s.x = 0,
                    s.y = 0,
                    s.width = e.filterFrame.width,
                    s.height = e.filterFrame.height,
                    n.bind(e, e.filterFrame, s)
                } else e !== this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? n.bind(e) : this.renderer.renderTexture.bind(e, this.activeState.bindingSourceFrame, this.activeState.bindingDestinationFrame);
                var a = 1 & o.stateId || this.forceClear; (r === t.CLEAR_MODES.CLEAR || r === t.CLEAR_MODES.BLIT && a) && this.renderer.framebuffer.clear(0, 0, 0, 0)
            },
            r.prototype.applyFilter = function(e, r, i, n) {
                var o = this.renderer;
                o.state.set(e.state),
                this.bindAndClear(i, n),
                e.uniforms.uSampler = r,
                e.uniforms.filterGlobals = this.globalUniforms,
                o.shader.bind(e),
                e.legacy ? (this.quadUv.map(r._frame, r.filterFrame), o.geometry.bind(this.quadUv), o.geometry.draw(t.DRAW_MODES.TRIANGLES)) : (o.geometry.bind(this.quad), o.geometry.draw(t.DRAW_MODES.TRIANGLE_STRIP))
            },
            r.prototype.calculateSpriteMatrix = function(e, t) {
                var r = this.activeState,
                i = r.sourceFrame,
                n = r.destinationFrame,
                s = t._texture.orig,
                a = e.set(n.width, 0, 0, n.height, i.x, i.y),
                u = t.worldTransform.copyTo(o.Matrix.TEMP_MATRIX);
                return u.invert(),
                a.prepend(u),
                a.scale(1 / s.width, 1 / s.height),
                a.translate(t.anchor.x, t.anchor.y),
                a
            },
            r.prototype.destroy = function() {
                this.texturePool.clear(!1)
            },
            r.prototype.getOptimalFilterTexture = function(e, t, r) {
                return void 0 === r && (r = 1),
                this.texturePool.getOptimalTexture(e, t, r)
            },
            r.prototype.getFilterTexture = function(e, t) {
                if ("number" == typeof e) {
                    var r = e;
                    e = t,
                    t = r
                }
                e = e || this.activeState.renderTexture;
                var i = this.texturePool.getOptimalTexture(e.width, e.height, t || e.resolution);
                return i.filterFrame = e.filterFrame,
                i
            },
            r.prototype.returnFilterTexture = function(e) {
                this.texturePool.returnTexture(e)
            },
            r.prototype.emptyPool = function() {
                this.texturePool.clear(!0)
            },
            r.prototype.resize = function() {
                this.texturePool.setScreenSize(this.renderer.view)
            },
            r.prototype.transformAABB = function(e, t) {
                var r = Q[0],
                i = Q[1],
                n = Q[2],
                o = Q[3];
                r.set(t.left, t.top),
                i.set(t.left, t.bottom),
                n.set(t.right, t.top),
                o.set(t.right, t.bottom),
                e.apply(r, r),
                e.apply(i, i),
                e.apply(n, n),
                e.apply(o, o);
                var s = Math.min(r.x, i.x, n.x, o.x),
                a = Math.min(r.y, i.y, n.y, o.y),
                u = Math.max(r.x, i.x, n.x, o.x),
                h = Math.max(r.y, i.y, n.y, o.y);
                t.x = s,
                t.y = a,
                t.width = u - s,
                t.height = h - a
            },
            r.prototype.roundFrame = function(e, t, r, i, n) {
                if (n) {
                    var o = n.a,
                    s = n.b,
                    a = n.c,
                    u = n.d;
                    if (! (0 === s && 0 === a || 0 === o && 0 === u)) return
                } (n = n ? Z.copyFrom(n) : Z.identity()).translate( - r.x, -r.y).scale(i.width / r.width, i.height / r.height).translate(i.x, i.y),
                this.transformAABB(n, e),
                e.ceil(t),
                this.transformAABB(n.invert(), e)
            },
            r
        } (S);
        exports.FilterSystem = $;
        var J = function() {
            function e(e) {
                this.renderer = e
            }
            return e.prototype.flush = function() {},
            e.prototype.destroy = function() {
                this.renderer = null
            },
            e.prototype.start = function() {},
            e.prototype.stop = function() {
                this.flush()
            },
            e.prototype.render = function(e) {},
            e
        } ();
        exports.ObjectRenderer = J;
        var ee = function(e) {
            function t(t) {
                var r = e.call(this, t) || this;
                return r.emptyRenderer = new J(t),
                r.currentRenderer = r.emptyRenderer,
                r
            }
            return h(t, e),
            t.prototype.setObjectRenderer = function(e) {
                this.currentRenderer !== e && (this.currentRenderer.stop(), this.currentRenderer = e, this.currentRenderer.start())
            },
            t.prototype.flush = function() {
                this.setObjectRenderer(this.emptyRenderer)
            },
            t.prototype.reset = function() {
                this.setObjectRenderer(this.emptyRenderer)
            },
            t.prototype.copyBoundTextures = function(e, t) {
                for (var r = this.renderer.texture.boundTextures,
                i = t - 1; i >= 0; --i) e[i] = r[i] || null,
                e[i] && (e[i]._batchLocation = i)
            },
            t.prototype.boundArray = function(e, t, r, i) {
                for (var n = e.elements,
                o = e.ids,
                s = e.count,
                a = 0,
                u = 0; u < s; u++) {
                    var h = n[u],
                    l = h._batchLocation;
                    if (l >= 0 && l < i && t[l] === h) o[u] = l;
                    else for (; a < i;) {
                        var c = t[a];
                        if (!c || c._batchEnabled !== r || c._batchLocation !== a) {
                            o[u] = a,
                            h._batchLocation = a,
                            t[a] = h;
                            break
                        }
                        a++
                    }
                }
            },
            t
        } (S);
        exports.BatchSystem = ee;
        var te = 0,
        re = function(r) {
            function i(e) {
                var t = r.call(this, e) || this;
                return t.webGLVersion = 1,
                t.extensions = {},
                t.supports = {
                    uint32Indices: !1
                },
                t.handleContextLost = t.handleContextLost.bind(t),
                t.handleContextRestored = t.handleContextRestored.bind(t),
                e.view.addEventListener("webglcontextlost", t.handleContextLost, !1),
                e.view.addEventListener("webglcontextrestored", t.handleContextRestored, !1),
                t
            }
            return h(i, r),
            Object.defineProperty(i.prototype, "isLost", {
                get: function() {
                    return ! this.gl || this.gl.isContextLost()
                },
                enumerable: !1,
                configurable: !0
            }),
            i.prototype.contextChange = function(e) {
                this.gl = e,
                this.renderer.gl = e,
                this.renderer.CONTEXT_UID = te++,
                e.isContextLost() && e.getExtension("WEBGL_lose_context") && e.getExtension("WEBGL_lose_context").restoreContext()
            },
            i.prototype.initFromContext = function(e) {
                this.gl = e,
                this.validateContext(e),
                this.renderer.gl = e,
                this.renderer.CONTEXT_UID = te++,
                this.renderer.runners.contextChange.emit(e)
            },
            i.prototype.initFromOptions = function(e) {
                var t = this.createContext(this.renderer.view, e);
                this.initFromContext(t)
            },
            i.prototype.createContext = function(r, i) {
                var n;
                if (e.settings.PREFER_ENV >= t.ENV.WEBGL2 && (n = r.getContext("webgl2", i)), n) this.webGLVersion = 2;
                else if (this.webGLVersion = 1, !(n = r.getContext("webgl", i) || r.getContext("experimental-webgl", i))) throw new Error("This browser does not support WebGL. Try using the canvas renderer");
                return this.gl = n,
                this.getExtensions(),
                this.gl
            },
            i.prototype.getExtensions = function() {
                var e = this.gl,
                t = {
                    anisotropicFiltering: e.getExtension("EXT_texture_filter_anisotropic"),
                    floatTextureLinear: e.getExtension("OES_texture_float_linear"),
                    s3tc: e.getExtension("WEBGL_compressed_texture_s3tc"),
                    s3tc_sRGB: e.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
                    etc: e.getExtension("WEBGL_compressed_texture_etc"),
                    etc1: e.getExtension("WEBGL_compressed_texture_etc1"),
                    pvrtc: e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
                    atc: e.getExtension("WEBGL_compressed_texture_atc"),
                    astc: e.getExtension("WEBGL_compressed_texture_astc")
                };
                1 === this.webGLVersion ? Object.assign(this.extensions, t, {
                    drawBuffers: e.getExtension("WEBGL_draw_buffers"),
                    depthTexture: e.getExtension("WEBGL_depth_texture"),
                    loseContext: e.getExtension("WEBGL_lose_context"),
                    vertexArrayObject: e.getExtension("OES_vertex_array_object") || e.getExtension("MOZ_OES_vertex_array_object") || e.getExtension("WEBKIT_OES_vertex_array_object"),
                    uint32ElementIndex: e.getExtension("OES_element_index_uint"),
                    floatTexture: e.getExtension("OES_texture_float"),
                    floatTextureLinear: e.getExtension("OES_texture_float_linear"),
                    textureHalfFloat: e.getExtension("OES_texture_half_float"),
                    textureHalfFloatLinear: e.getExtension("OES_texture_half_float_linear")
                }) : 2 === this.webGLVersion && Object.assign(this.extensions, t, {
                    colorBufferFloat: e.getExtension("EXT_color_buffer_float")
                })
            },
            i.prototype.handleContextLost = function(e) {
                e.preventDefault()
            },
            i.prototype.handleContextRestored = function() {
                this.renderer.runners.contextChange.emit(this.gl)
            },
            i.prototype.destroy = function() {
                var e = this.renderer.view;
                e.removeEventListener("webglcontextlost", this.handleContextLost),
                e.removeEventListener("webglcontextrestored", this.handleContextRestored),
                this.gl.useProgram(null),
                this.extensions.loseContext && this.extensions.loseContext.loseContext()
            },
            i.prototype.postrender = function() {
                this.renderer.renderingToScreen && this.gl.flush()
            },
            i.prototype.validateContext = function(e) {
                var t = e.getContextAttributes(),
                r = "WebGL2RenderingContext" in self && e instanceof self.WebGL2RenderingContext;
                r && (this.webGLVersion = 2),
                t.stencil || console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");
                var i = r || !!e.getExtension("OES_element_index_uint");
                this.supports.uint32Indices = i,
                i || console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly")
            },
            i
        } (S);
        exports.ContextSystem = re;
        var ie = function() {
            return function(e) {
                this.framebuffer = e,
                this.stencil = null,
                this.dirtyId = 0,
                this.dirtyFormat = 0,
                this.dirtySize = 0,
                this.multisample = t.MSAA_QUALITY.NONE,
                this.msaaBuffer = null,
                this.blitFramebuffer = null
            }
        } ();
        exports.GLFramebuffer = ie;
        var ne = new o.Rectangle,
        oe = function(r) {
            function i(e) {
                var t = r.call(this, e) || this;
                return t.managedFramebuffers = [],
                t.unknownFramebuffer = new A(10, 10),
                t.msaaSamples = null,
                t
            }
            return h(i, r),
            i.prototype.contextChange = function() {
                var r = this.gl = this.renderer.gl;
                if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.current = this.unknownFramebuffer, this.viewport = new o.Rectangle, this.hasMRT = !0, this.writeDepthTexture = !0, this.disposeAll(!0), 1 === this.renderer.context.webGLVersion) {
                    var i = this.renderer.context.extensions.drawBuffers,
                    n = this.renderer.context.extensions.depthTexture;
                    e.settings.PREFER_ENV === t.ENV.WEBGL_LEGACY && (i = null, n = null),
                    i ? r.drawBuffers = function(e) {
                        return i.drawBuffersWEBGL(e)
                    }: (this.hasMRT = !1, r.drawBuffers = function() {}),
                    n || (this.writeDepthTexture = !1)
                } else this.msaaSamples = r.getInternalformatParameter(r.RENDERBUFFER, r.RGBA8, r.SAMPLES)
            },
            i.prototype.bind = function(e, t) {
                var r = this.gl;
                if (e) {
                    var i = e.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(e);
                    this.current !== e && (this.current = e, r.bindFramebuffer(r.FRAMEBUFFER, i.framebuffer)),
                    i.dirtyId !== e.dirtyId && (i.dirtyId = e.dirtyId, i.dirtyFormat !== e.dirtyFormat ? (i.dirtyFormat = e.dirtyFormat, this.updateFramebuffer(e)) : i.dirtySize !== e.dirtySize && (i.dirtySize = e.dirtySize, this.resizeFramebuffer(e)));
                    for (var n = 0; n < e.colorTextures.length; n++) {
                        var o = e.colorTextures[n];
                        this.renderer.texture.unbind(o.parentTextureArray || o)
                    }
                    e.depthTexture && this.renderer.texture.unbind(e.depthTexture),
                    t ? this.setViewport(t.x, t.y, t.width, t.height) : this.setViewport(0, 0, e.width, e.height)
                } else this.current && (this.current = null, r.bindFramebuffer(r.FRAMEBUFFER, null)),
                t ? this.setViewport(t.x, t.y, t.width, t.height) : this.setViewport(0, 0, this.renderer.width, this.renderer.height)
            },
            i.prototype.setViewport = function(e, t, r, i) {
                var n = this.viewport;
                n.width === r && n.height === i && n.x === e && n.y === t || (n.x = e, n.y = t, n.width = r, n.height = i, this.gl.viewport(e, t, r, i))
            },
            Object.defineProperty(i.prototype, "size", {
                get: function() {
                    return this.current ? {
                        x: 0,
                        y: 0,
                        width: this.current.width,
                        height: this.current.height
                    }: {
                        x: 0,
                        y: 0,
                        width: this.renderer.width,
                        height: this.renderer.height
                    }
                },
                enumerable: !1,
                configurable: !0
            }),
            i.prototype.clear = function(e, r, i, n, o) {
                void 0 === o && (o = t.BUFFER_BITS.COLOR | t.BUFFER_BITS.DEPTH);
                var s = this.gl;
                s.clearColor(e, r, i, n),
                s.clear(o)
            },
            i.prototype.initFramebuffer = function(e) {
                var t = this.gl,
                r = new ie(t.createFramebuffer());
                return r.multisample = this.detectSamples(e.multisample),
                e.glFramebuffers[this.CONTEXT_UID] = r,
                this.managedFramebuffers.push(e),
                e.disposeRunner.add(this),
                r
            },
            i.prototype.resizeFramebuffer = function(e) {
                var t = this.gl,
                r = e.glFramebuffers[this.CONTEXT_UID];
                r.stencil && (t.bindRenderbuffer(t.RENDERBUFFER, r.stencil), t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, e.width, e.height));
                for (var i = e.colorTextures,
                n = 0; n < i.length; n++) this.renderer.texture.bind(i[n], 0);
                e.depthTexture && this.renderer.texture.bind(e.depthTexture, 0)
            },
            i.prototype.updateFramebuffer = function(e) {
                var t = this.gl,
                r = e.glFramebuffers[this.CONTEXT_UID],
                i = e.colorTextures.length;
                t.drawBuffers || (i = Math.min(i, 1)),
                r.multisample > 1 && (r.msaaBuffer = t.createRenderbuffer(), t.bindRenderbuffer(t.RENDERBUFFER, r.msaaBuffer), t.renderbufferStorageMultisample(t.RENDERBUFFER, r.multisample, t.RGBA8, e.width, e.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.RENDERBUFFER, r.msaaBuffer));
                for (var n = [], o = 0; o < i; o++) if (! (0 === o && r.multisample > 1)) {
                    var s = e.colorTextures[o],
                    a = s.parentTextureArray || s;
                    this.renderer.texture.bind(a, 0),
                    t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0 + o, s.target, a._glTextures[this.CONTEXT_UID].texture, 0),
                    n.push(t.COLOR_ATTACHMENT0 + o)
                }
                if ((n.length > 1 && t.drawBuffers(n), e.depthTexture) && this.writeDepthTexture) {
                    var u = e.depthTexture;
                    this.renderer.texture.bind(u, 0),
                    t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, u._glTextures[this.CONTEXT_UID].texture, 0)
                }
                r.stencil || !e.stencil && !e.depth || (r.stencil = t.createRenderbuffer(), t.bindRenderbuffer(t.RENDERBUFFER, r.stencil), t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, e.width, e.height), e.depthTexture || t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, r.stencil))
            },
            i.prototype.detectSamples = function(e) {
                var r = this.msaaSamples,
                i = t.MSAA_QUALITY.NONE;
                if (e <= 1 || null === r) return i;
                for (var n = 0; n < r.length; n++) if (r[n] <= e) {
                    i = r[n];
                    break
                }
                return 1 === i && (i = t.MSAA_QUALITY.NONE),
                i
            },
            i.prototype.blit = function(e, t, r) {
                var i = this.current,
                n = this.renderer,
                o = this.gl,
                s = this.CONTEXT_UID;
                if (2 === n.context.webGLVersion && i) {
                    var a = i.glFramebuffers[s];
                    if (a) {
                        if (!e) {
                            if (a.multisample <= 1) return;
                            a.blitFramebuffer || (a.blitFramebuffer = new A(i.width, i.height), a.blitFramebuffer.addColorTexture(0, i.colorTextures[0])),
                            (e = a.blitFramebuffer).width = i.width,
                            e.height = i.height
                        }
                        t || ((t = ne).width = i.width, t.height = i.height),
                        r || (r = t);
                        var u = t.width === r.width && t.height === r.height;
                        this.bind(e),
                        o.bindFramebuffer(o.READ_FRAMEBUFFER, a.framebuffer),
                        o.blitFramebuffer(t.x, t.y, t.width, t.height, r.x, r.y, r.width, r.height, o.COLOR_BUFFER_BIT, u ? o.NEAREST: o.LINEAR)
                    }
                }
            },
            i.prototype.disposeFramebuffer = function(e, t) {
                var r = e.glFramebuffers[this.CONTEXT_UID],
                i = this.gl;
                if (r) {
                    delete e.glFramebuffers[this.CONTEXT_UID];
                    var n = this.managedFramebuffers.indexOf(e);
                    n >= 0 && this.managedFramebuffers.splice(n, 1),
                    e.disposeRunner.remove(this),
                    t || (i.deleteFramebuffer(r.framebuffer), r.stencil && i.deleteRenderbuffer(r.stencil))
                }
            },
            i.prototype.disposeAll = function(e) {
                var t = this.managedFramebuffers;
                this.managedFramebuffers = [];
                for (var r = 0; r < t.length; r++) this.disposeFramebuffer(t[r], e)
            },
            i.prototype.forceStencil = function() {
                var e = this.current;
                if (e) {
                    var t = e.glFramebuffers[this.CONTEXT_UID];
                    if (t && !t.stencil) {
                        e.enableStencil();
                        var r = e.width,
                        i = e.height,
                        n = this.gl,
                        o = n.createRenderbuffer();
                        n.bindRenderbuffer(n.RENDERBUFFER, o),
                        n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_STENCIL, r, i),
                        t.stencil = o,
                        n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.RENDERBUFFER, o)
                    }
                }
            },
            i.prototype.reset = function() {
                this.current = this.unknownFramebuffer,
                this.viewport = new o.Rectangle
            },
            i
        } (S);
        exports.FramebufferSystem = oe;
        var se = function() {
            return function(e) {
                this.buffer = e || null,
                this.updateID = -1,
                this.byteLength = -1,
                this.refCount = 0
            }
        } (),
        ae = {
            5126 : 4,
            5123 : 2,
            5121 : 1
        },
        ue = function(r) {
            function i(e) {
                var t = r.call(this, e) || this;
                return t._activeGeometry = null,
                t._activeVao = null,
                t.hasVao = !0,
                t.hasInstance = !0,
                t.canUseUInt32ElementIndex = !1,
                t.managedGeometries = {},
                t.managedBuffers = {},
                t
            }
            return h(i, r),
            i.prototype.contextChange = function() {
                this.disposeAll(!0);
                var r = this.gl = this.renderer.gl,
                i = this.renderer.context;
                if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, 2 !== i.webGLVersion) {
                    var n = this.renderer.context.extensions.vertexArrayObject;
                    e.settings.PREFER_ENV === t.ENV.WEBGL_LEGACY && (n = null),
                    n ? (r.createVertexArray = function() {
                        return n.createVertexArrayOES()
                    },
                    r.bindVertexArray = function(e) {
                        return n.bindVertexArrayOES(e)
                    },
                    r.deleteVertexArray = function(e) {
                        return n.deleteVertexArrayOES(e)
                    }) : (this.hasVao = !1, r.createVertexArray = function() {
                        return null
                    },
                    r.bindVertexArray = function() {
                        return null
                    },
                    r.deleteVertexArray = function() {
                        return null
                    })
                }
                if (2 !== i.webGLVersion) {
                    var o = r.getExtension("ANGLE_instanced_arrays");
                    o ? (r.vertexAttribDivisor = function(e, t) {
                        return o.vertexAttribDivisorANGLE(e, t)
                    },
                    r.drawElementsInstanced = function(e, t, r, i, n) {
                        return o.drawElementsInstancedANGLE(e, t, r, i, n)
                    },
                    r.drawArraysInstanced = function(e, t, r, i) {
                        return o.drawArraysInstancedANGLE(e, t, r, i)
                    }) : this.hasInstance = !1
                }
                this.canUseUInt32ElementIndex = 2 === i.webGLVersion || !!i.extensions.uint32ElementIndex
            },
            i.prototype.bind = function(e, t) {
                t = t || this.renderer.shader.shader;
                var r = this.gl,
                i = e.glVertexArrayObjects[this.CONTEXT_UID],
                n = !1;
                i || (this.managedGeometries[e.id] = e, e.disposeRunner.add(this), e.glVertexArrayObjects[this.CONTEXT_UID] = i = {},
                n = !0);
                var o = i[t.program.id] || this.initGeometryVao(e, t.program, n);
                this._activeGeometry = e,
                this._activeVao !== o && (this._activeVao = o, this.hasVao ? r.bindVertexArray(o) : this.activateVao(e, t.program)),
                this.updateBuffers()
            },
            i.prototype.reset = function() {
                this.unbind()
            },
            i.prototype.updateBuffers = function() {
                for (var e = this._activeGeometry,
                t = this.gl,
                r = 0; r < e.buffers.length; r++) {
                    var i = e.buffers[r],
                    n = i._glBuffers[this.CONTEXT_UID];
                    if (i._updateID !== n.updateID) {
                        n.updateID = i._updateID;
                        var o = i.index ? t.ELEMENT_ARRAY_BUFFER: t.ARRAY_BUFFER;
                        if (t.bindBuffer(o, n.buffer), this._boundBuffer = n, n.byteLength >= i.data.byteLength) t.bufferSubData(o, 0, i.data);
                        else {
                            var s = i.static ? t.STATIC_DRAW: t.DYNAMIC_DRAW;
                            n.byteLength = i.data.byteLength,
                            t.bufferData(o, i.data, s)
                        }
                    }
                }
            },
            i.prototype.checkCompatibility = function(e, t) {
                var r = e.attributes,
                i = t.attributeData;
                for (var n in i) if (!r[n]) throw new Error('shader and geometry incompatible, geometry missing the "' + n + '" attribute')
            },
            i.prototype.getSignature = function(e, t) {
                var r = e.attributes,
                i = t.attributeData,
                n = ["g", e.id];
                for (var o in r) i[o] && n.push(o);
                return n.join("-")
            },
            i.prototype.initGeometryVao = function(e, t, r) {
                void 0 === r && (r = !0),
                this.checkCompatibility(e, t);
                var i = this.gl,
                n = this.CONTEXT_UID,
                o = this.getSignature(e, t),
                s = e.glVertexArrayObjects[this.CONTEXT_UID],
                a = s[o];
                if (a) return s[t.id] = a,
                a;
                var u = e.buffers,
                h = e.attributes,
                l = {},
                c = {};
                for (var d in u) l[d] = 0,
                c[d] = 0;
                for (var d in h) ! h[d].size && t.attributeData[d] ? h[d].size = t.attributeData[d].size: h[d].size || console.warn("PIXI Geometry attribute '" + d + "' size cannot be determined (likely the bound shader does not have the attribute)"),
                l[h[d].buffer] += h[d].size * ae[h[d].type];
                for (var d in h) {
                    var f = h[d],
                    p = f.size;
                    void 0 === f.stride && (l[f.buffer] === p * ae[f.type] ? f.stride = 0 : f.stride = l[f.buffer]),
                    void 0 === f.start && (f.start = c[f.buffer], c[f.buffer] += p * ae[f.type])
                }
                a = i.createVertexArray(),
                i.bindVertexArray(a);
                for (var m = 0; m < u.length; m++) {
                    var v = u[m];
                    v._glBuffers[n] || (v._glBuffers[n] = new se(i.createBuffer()), this.managedBuffers[v.id] = v, v.disposeRunner.add(this)),
                    r && v._glBuffers[n].refCount++
                }
                return this.activateVao(e, t),
                this._activeVao = a,
                s[t.id] = a,
                s[o] = a,
                a
            },
            i.prototype.disposeBuffer = function(e, t) {
                if (this.managedBuffers[e.id]) {
                    delete this.managedBuffers[e.id];
                    var r = e._glBuffers[this.CONTEXT_UID],
                    i = this.gl;
                    e.disposeRunner.remove(this),
                    r && (t || i.deleteBuffer(r.buffer), delete e._glBuffers[this.CONTEXT_UID])
                }
            },
            i.prototype.disposeGeometry = function(e, t) {
                if (this.managedGeometries[e.id]) {
                    delete this.managedGeometries[e.id];
                    var r = e.glVertexArrayObjects[this.CONTEXT_UID],
                    i = this.gl,
                    n = e.buffers;
                    if (e.disposeRunner.remove(this), r) {
                        for (var o = 0; o < n.length; o++) {
                            var s = n[o]._glBuffers[this.CONTEXT_UID];
                            s.refCount--,
                            0 !== s.refCount || t || this.disposeBuffer(n[o], t)
                        }
                        if (!t) for (var a in r) if ("g" === a[0]) {
                            var u = r[a];
                            this._activeVao === u && this.unbind(),
                            i.deleteVertexArray(u)
                        }
                        delete e.glVertexArrayObjects[this.CONTEXT_UID]
                    }
                }
            },
            i.prototype.disposeAll = function(e) {
                for (var t = Object.keys(this.managedGeometries), r = 0; r < t.length; r++) this.disposeGeometry(this.managedGeometries[t[r]], e);
                t = Object.keys(this.managedBuffers);
                for (r = 0; r < t.length; r++) this.disposeBuffer(this.managedBuffers[t[r]], e)
            },
            i.prototype.activateVao = function(e, t) {
                var r = this.gl,
                i = this.CONTEXT_UID,
                n = e.buffers,
                o = e.attributes;
                e.indexBuffer && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, e.indexBuffer._glBuffers[i].buffer);
                var s = null;
                for (var a in o) {
                    var u = o[a],
                    h = n[u.buffer]._glBuffers[i];
                    if (t.attributeData[a]) {
                        s !== h && (r.bindBuffer(r.ARRAY_BUFFER, h.buffer), s = h);
                        var l = t.attributeData[a].location;
                        if (r.enableVertexAttribArray(l), r.vertexAttribPointer(l, u.size, u.type || r.FLOAT, u.normalized, u.stride, u.start), u.instance) {
                            if (!this.hasInstance) throw new Error("geometry error, GPU Instancing is not supported on this device");
                            r.vertexAttribDivisor(l, 1)
                        }
                    }
                }
            },
            i.prototype.draw = function(e, t, r, i) {
                var n = this.gl,
                o = this._activeGeometry;
                if (o.indexBuffer) {
                    var s = o.indexBuffer.data.BYTES_PER_ELEMENT,
                    a = 2 === s ? n.UNSIGNED_SHORT: n.UNSIGNED_INT;
                    2 === s || 4 === s && this.canUseUInt32ElementIndex ? o.instanced ? n.drawElementsInstanced(e, t || o.indexBuffer.data.length, a, (r || 0) * s, i || 1) : n.drawElements(e, t || o.indexBuffer.data.length, a, (r || 0) * s) : console.warn("unsupported index buffer type: uint32")
                } else o.instanced ? n.drawArraysInstanced(e, r, t || o.getSize(), i || 1) : n.drawArrays(e, r, t || o.getSize());
                return this
            },
            i.prototype.unbind = function() {
                this.gl.bindVertexArray(null),
                this._activeVao = null,
                this._activeGeometry = null
            },
            i
        } (S);
        exports.GeometrySystem = ue;
        var he = function() {
            function e(e) {
                void 0 === e && (e = null),
                this.type = t.MASK_TYPES.NONE,
                this.autoDetect = !0,
                this.maskObject = e || null,
                this.pooled = !1,
                this.isMaskData = !0,
                this._stencilCounter = 0,
                this._scissorCounter = 0,
                this._scissorRect = null,
                this._target = null
            }
            return e.prototype.reset = function() {
                this.pooled && (this.maskObject = null, this.type = t.MASK_TYPES.NONE, this.autoDetect = !0),
                this._target = null
            },
            e.prototype.copyCountersOrReset = function(e) {
                e ? (this._stencilCounter = e._stencilCounter, this._scissorCounter = e._scissorCounter, this._scissorRect = e._scissorRect) : (this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null)
            },
            e
        } ();
        function le(e, t, r) {
            var i = e.createShader(t);
            return e.shaderSource(i, r),
            e.compileShader(i),
            i
        }
        function ce(e, t, r, i) {
            var n = le(e, e.VERTEX_SHADER, t),
            o = le(e, e.FRAGMENT_SHADER, r),
            s = e.createProgram();
            if (e.attachShader(s, n), e.attachShader(s, o), i) for (var a in i) e.bindAttribLocation(s, i[a], a);
            return e.linkProgram(s),
            e.getProgramParameter(s, e.LINK_STATUS) || (e.getShaderParameter(n, e.COMPILE_STATUS) || (console.warn(t), console.error(e.getShaderInfoLog(n))), e.getShaderParameter(o, e.COMPILE_STATUS) || (console.warn(r), console.error(e.getShaderInfoLog(o))), console.error("Pixi.js Error: Could not initialize shader."), console.error("gl.VALIDATE_STATUS", e.getProgramParameter(s, e.VALIDATE_STATUS)), console.error("gl.getError()", e.getError()), "" !== e.getProgramInfoLog(s) && console.warn("Pixi.js Warning: gl.getProgramInfoLog()", e.getProgramInfoLog(s)), e.deleteProgram(s), s = null),
            e.deleteShader(n),
            e.deleteShader(o),
            s
        }
        function de(e) {
            for (var t = new Array(e), r = 0; r < t.length; r++) t[r] = !1;
            return t
        }
        function fe(e, t) {
            switch (e) {
            case "float":
                return 0;
            case "vec2":
                return new Float32Array(2 * t);
            case "vec3":
                return new Float32Array(3 * t);
            case "vec4":
                return new Float32Array(4 * t);
            case "int":
            case "uint":
            case "sampler2D":
            case "sampler2DArray":
                return 0;
            case "ivec2":
                return new Int32Array(2 * t);
            case "ivec3":
                return new Int32Array(3 * t);
            case "ivec4":
                return new Int32Array(4 * t);
            case "uvec2":
                return new Uint32Array(2 * t);
            case "uvec3":
                return new Uint32Array(3 * t);
            case "uvec4":
                return new Uint32Array(4 * t);
            case "bool":
                return ! 1;
            case "bvec2":
                return de(2 * t);
            case "bvec3":
                return de(3 * t);
            case "bvec4":
                return de(4 * t);
            case "mat2":
                return new Float32Array([1, 0, 0, 1]);
            case "mat3":
                return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
            case "mat4":
                return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
            }
            return null
        }
        exports.MaskData = he;
        var pe, me = {},
        ve = me;
        function ge() {
            if (ve === me || ve && ve.isContextLost()) {
                var r = document.createElement("canvas"),
                i = void 0;
                e.settings.PREFER_ENV >= t.ENV.WEBGL2 && (i = r.getContext("webgl2", {})),
                i || ((i = r.getContext("webgl", {}) || r.getContext("experimental-webgl", {})) ? i.getExtension("WEBGL_draw_buffers") : i = null),
                ve = i
            }
            return ve
        }
        function xe() {
            if (!pe) {
                pe = t.PRECISION.MEDIUM;
                var e = ge();
                if (e && e.getShaderPrecisionFormat) {
                    var r = e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT);
                    pe = r.precision ? t.PRECISION.HIGH: t.PRECISION.MEDIUM
                }
            }
            return pe
        }
        function ye(e, r, i) {
            if ("precision" !== e.substring(0, 9)) {
                var n = r;
                return r === t.PRECISION.HIGH && i !== t.PRECISION.HIGH && (n = t.PRECISION.MEDIUM),
                "precision " + n + " float;\n" + e
            }
            return i !== t.PRECISION.HIGH && "precision highp" === e.substring(0, 15) ? e.replace("precision highp", "precision mediump") : e
        }
        var _e = {
            float: 1,
            vec2: 2,
            vec3: 3,
            vec4: 4,
            int: 1,
            ivec2: 2,
            ivec3: 3,
            ivec4: 4,
            uint: 1,
            uvec2: 2,
            uvec3: 3,
            uvec4: 4,
            bool: 1,
            bvec2: 2,
            bvec3: 3,
            bvec4: 4,
            mat2: 4,
            mat3: 9,
            mat4: 16,
            sampler2D: 1
        };
        function Ee(e) {
            return _e[e]
        }
        var Te = null,
        be = {
            FLOAT: "float",
            FLOAT_VEC2: "vec2",
            FLOAT_VEC3: "vec3",
            FLOAT_VEC4: "vec4",
            INT: "int",
            INT_VEC2: "ivec2",
            INT_VEC3: "ivec3",
            INT_VEC4: "ivec4",
            UNSIGNED_INT: "uint",
            UNSIGNED_INT_VEC2: "uvec2",
            UNSIGNED_INT_VEC3: "uvec3",
            UNSIGNED_INT_VEC4: "uvec4",
            BOOL: "bool",
            BOOL_VEC2: "bvec2",
            BOOL_VEC3: "bvec3",
            BOOL_VEC4: "bvec4",
            FLOAT_MAT2: "mat2",
            FLOAT_MAT3: "mat3",
            FLOAT_MAT4: "mat4",
            SAMPLER_2D: "sampler2D",
            INT_SAMPLER_2D: "sampler2D",
            UNSIGNED_INT_SAMPLER_2D: "sampler2D",
            SAMPLER_CUBE: "samplerCube",
            INT_SAMPLER_CUBE: "samplerCube",
            UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
            SAMPLER_2D_ARRAY: "sampler2DArray",
            INT_SAMPLER_2D_ARRAY: "sampler2DArray",
            UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray"
        };
        function Se(e, t) {
            if (!Te) {
                var r = Object.keys(be);
                Te = {};
                for (var i = 0; i < r.length; ++i) {
                    var n = r[i];
                    Te[e[n]] = be[n]
                }
            }
            return Te[t]
        }
        var we = [{
            test: function(e) {
                return "float" === e.type && 1 === e.size
            },
            code: function(e) {
                return '\n            if(uv["' + e + '"] !== ud["' + e + '"].value)\n            {\n                ud["' + e + '"].value = uv["' + e + '"]\n                gl.uniform1f(ud["' + e + '"].location, uv["' + e + '"])\n            }\n            '
            }
        },
        {
            test: function(e) {
                return ("sampler2D" === e.type || "samplerCube" === e.type || "sampler2DArray" === e.type) && 1 === e.size && !e.isArray
            },
            code: function(e) {
                return 't = syncData.textureCount++;\n\n            renderer.texture.bind(uv["' + e + '"], t);\n\n            if(ud["' + e + '"].value !== t)\n            {\n                ud["' + e + '"].value = t;\n                gl.uniform1i(ud["' + e + '"].location, t);\n; // eslint-disable-line max-len\n            }'
            }
        },
        {
            test: function(e, t) {
                return "mat3" === e.type && 1 === e.size && void 0 !== t.a
            },
            code: function(e) {
                return '\n            gl.uniformMatrix3fv(ud["' + e + '"].location, false, uv["' + e + '"].toArray(true));\n            '
            }
        },
        {
            test: function(e, t) {
                return "vec2" === e.type && 1 === e.size && void 0 !== t.x
            },
            code: function(e) {
                return '\n                cv = ud["' + e + '"].value;\n                v = uv["' + e + '"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    gl.uniform2f(ud["' + e + '"].location, v.x, v.y);\n                }'
            }
        },
        {
            test: function(e) {
                return "vec2" === e.type && 1 === e.size
            },
            code: function(e) {
                return '\n                cv = ud["' + e + '"].value;\n                v = uv["' + e + '"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    gl.uniform2f(ud["' + e + '"].location, v[0], v[1]);\n                }\n            '
            }
        },
        {
            test: function(e, t) {
                return "vec4" === e.type && 1 === e.size && void 0 !== t.width
            },
            code: function(e) {
                return '\n                cv = ud["' + e + '"].value;\n                v = uv["' + e + '"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    cv[2] = v.width;\n                    cv[3] = v.height;\n                    gl.uniform4f(ud["' + e + '"].location, v.x, v.y, v.width, v.height)\n                }'
            }
        },
        {
            test: function(e) {
                return "vec4" === e.type && 1 === e.size
            },
            code: function(e) {
                return '\n                cv = ud["' + e + '"].value;\n                v = uv["' + e + '"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    cv[2] = v[2];\n                    cv[3] = v[3];\n\n                    gl.uniform4f(ud["' + e + '"].location, v[0], v[1], v[2], v[3])\n                }'
            }
        }];
        exports.uniformParsers = we;
        var Ae = {
            float: "\n    if(cv !== v)\n    {\n        cv.v = v;\n        gl.uniform1f(location, v)\n    }",
            vec2: "\n    if(cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        gl.uniform2f(location, v[0], v[1])\n    }",
            vec3: "\n    if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3f(location, v[0], v[1], v[2])\n    }",
            vec4: "gl.uniform4f(location, v[0], v[1], v[2], v[3])",
            int: "gl.uniform1i(location, v)",
            ivec2: "gl.uniform2i(location, v[0], v[1])",
            ivec3: "gl.uniform3i(location, v[0], v[1], v[2])",
            ivec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
            uint: "gl.uniform1ui(location, v)",
            uvec2: "gl.uniform2ui(location, v[0], v[1])",
            uvec3: "gl.uniform3ui(location, v[0], v[1], v[2])",
            uvec4: "gl.uniform4ui(location, v[0], v[1], v[2], v[3])",
            bool: "gl.uniform1i(location, v)",
            bvec2: "gl.uniform2i(location, v[0], v[1])",
            bvec3: "gl.uniform3i(location, v[0], v[1], v[2])",
            bvec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
            mat2: "gl.uniformMatrix2fv(location, false, v)",
            mat3: "gl.uniformMatrix3fv(location, false, v)",
            mat4: "gl.uniformMatrix4fv(location, false, v)",
            sampler2D: "gl.uniform1i(location, v)",
            samplerCube: "gl.uniform1i(location, v)",
            sampler2DArray: "gl.uniform1i(location, v)"
        },
        Ce = {
            float: "gl.uniform1fv(location, v)",
            vec2: "gl.uniform2fv(location, v)",
            vec3: "gl.uniform3fv(location, v)",
            vec4: "gl.uniform4fv(location, v)",
            mat4: "gl.uniformMatrix4fv(location, false, v)",
            mat3: "gl.uniformMatrix3fv(location, false, v)",
            mat2: "gl.uniformMatrix2fv(location, false, v)",
            int: "gl.uniform1iv(location, v)",
            ivec2: "gl.uniform2iv(location, v)",
            ivec3: "gl.uniform3iv(location, v)",
            ivec4: "gl.uniform4iv(location, v)",
            uint: "gl.uniform1uiv(location, v)",
            uvec2: "gl.uniform2uiv(location, v)",
            uvec3: "gl.uniform3uiv(location, v)",
            uvec4: "gl.uniform4uiv(location, v)",
            bool: "gl.uniform1iv(location, v)",
            bvec2: "gl.uniform2iv(location, v)",
            bvec3: "gl.uniform3iv(location, v)",
            bvec4: "gl.uniform4iv(location, v)",
            sampler2D: "gl.uniform1iv(location, v)",
            samplerCube: "gl.uniform1iv(location, v)",
            sampler2DArray: "gl.uniform1iv(location, v)"
        };
        function Re(e, t) {
            var r = ["\n        var v = null;\n        var cv = null\n        var t = 0;\n        var gl = renderer.gl\n    "];
            for (var i in e.uniforms) {
                var n = t[i];
                if (n) {
                    for (var o = e.uniforms[i], s = !1, a = 0; a < we.length; a++) if (we[a].test(n, o)) {
                        r.push(we[a].code(i, o)),
                        s = !0;
                        break
                    }
                    if (!s) {
                        var u = (1 === n.size ? Ae: Ce)[n.type].replace("location", 'ud["' + i + '"].location');
                        r.push('\n            cv = ud["' + i + '"].value;\n            v = uv["' + i + '"];\n            ' + u + ";")
                    }
                } else e.uniforms[i].group && r.push('\n                    renderer.shader.syncUniformGroup(uv["' + i + '"], syncData);\n                ')
            }
            return new Function("ud", "uv", "renderer", "syncData", r.join("\n"))
        }
        var Ie, Oe = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join("\n");
        function Me(e) {
            for (var t = "",
            r = 0; r < e; ++r) r > 0 && (t += "\nelse "),
            r < e - 1 && (t += "if(test == " + r + ".0){}");
            return t
        }
        function Pe(e, t) {
            if (0 === e) throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
            for (var r = t.createShader(t.FRAGMENT_SHADER);;) {
                var i = Oe.replace(/%forloop%/gi, Me(e));
                if (t.shaderSource(r, i), t.compileShader(r), t.getShaderParameter(r, t.COMPILE_STATUS)) break;
                e = e / 2 | 0
            }
            return e
        }
        function Fe() {
            if ("boolean" == typeof Ie) return Ie;
            try {
                var e = new Function("param1", "param2", "param3", "return param1[param2] === param3;");
                Ie = !0 === e({
                    a: "b"
                },
                "a", "b")
            } catch(t) {
                Ie = !1
            }
            return Ie
        }
        var De = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}",
        Ne = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n",
        Be = 0,
        Le = {},
        Ue = function() {
            function i(r, n, o) {
                void 0 === o && (o = "pixi-shader"),
                this.id = Be++,
                this.vertexSrc = r || i.defaultVertexSrc,
                this.fragmentSrc = n || i.defaultFragmentSrc,
                this.vertexSrc = this.vertexSrc.trim(),
                this.fragmentSrc = this.fragmentSrc.trim(),
                "#version" !== this.vertexSrc.substring(0, 8) && (o = o.replace(/\s+/g, "-"), Le[o] ? (Le[o]++, o += "-" + Le[o]) : Le[o] = 1, this.vertexSrc = "#define SHADER_NAME " + o + "\n" + this.vertexSrc, this.fragmentSrc = "#define SHADER_NAME " + o + "\n" + this.fragmentSrc, this.vertexSrc = ye(this.vertexSrc, e.settings.PRECISION_VERTEX, t.PRECISION.HIGH), this.fragmentSrc = ye(this.fragmentSrc, e.settings.PRECISION_FRAGMENT, xe())),
                this.extractData(this.vertexSrc, this.fragmentSrc),
                this.glPrograms = {},
                this.syncUniforms = null
            }
            return i.prototype.extractData = function(e, t) {
                var r = ge();
                if (r) {
                    var i = ce(r, e, t);
                    this.attributeData = this.getAttributeData(i, r),
                    this.uniformData = this.getUniformData(i, r),
                    r.deleteProgram(i)
                } else this.uniformData = {},
                this.attributeData = {}
            },
            i.prototype.getAttributeData = function(e, t) {
                for (var r = {},
                i = [], n = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), o = 0; o < n; o++) {
                    var s = t.getActiveAttrib(e, o),
                    a = Se(t, s.type),
                    u = {
                        type: a,
                        name: s.name,
                        size: Ee(a),
                        location: 0
                    };
                    r[s.name] = u,
                    i.push(u)
                }
                i.sort(function(e, t) {
                    return e.name > t.name ? 1 : -1
                });
                for (o = 0; o < i.length; o++) i[o].location = o;
                return r
            },
            i.prototype.getUniformData = function(e, t) {
                for (var r = {},
                i = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), n = 0; n < i; n++) {
                    var o = t.getActiveUniform(e, n),
                    s = o.name.replace(/\[.*?\]$/, ""),
                    a = o.name.match(/\[.*?\]$/),
                    u = Se(t, o.type);
                    r[s] = {
                        type: u,
                        size: o.size,
                        isArray: a,
                        value: fe(u, o.size)
                    }
                }
                return r
            },
            Object.defineProperty(i, "defaultVertexSrc", {
                get: function() {
                    return Ne
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(i, "defaultFragmentSrc", {
                get: function() {
                    return De
                },
                enumerable: !1,
                configurable: !0
            }),
            i.from = function(e, t, n) {
                var o = e + t,
                s = r.ProgramCache[o];
                return s || (r.ProgramCache[o] = s = new i(e, t, n)),
                s
            },
            i
        } ();
        exports.Program = Ue;
        var ke = function() {
            function e(e, t) {
                for (var r in this.program = e,
                this.uniformGroup = t ? t instanceof K ? t: new K(t) : new K({}), e.uniformData) this.uniformGroup.uniforms[r] instanceof Array && (this.uniformGroup.uniforms[r] = new Float32Array(this.uniformGroup.uniforms[r]))
            }
            return e.prototype.checkUniformExists = function(e, t) {
                if (t.uniforms[e]) return ! 0;
                for (var r in t.uniforms) {
                    var i = t.uniforms[r];
                    if (i.group && this.checkUniformExists(e, i)) return ! 0
                }
                return ! 1
            },
            e.prototype.destroy = function() {
                this.uniformGroup = null
            },
            Object.defineProperty(e.prototype, "uniforms", {
                get: function() {
                    return this.uniformGroup.uniforms
                },
                enumerable: !1,
                configurable: !0
            }),
            e.from = function(t, r, i) {
                return new e(Ue.from(t, r), i)
            },
            e
        } ();
        exports.Shader = ke;
        var Ge = 0,
        Ve = 1,
        je = 2,
        He = 3,
        Xe = 4,
        ze = 5,
        We = function() {
            function e() {
                this.data = 0,
                this.blendMode = t.BLEND_MODES.NORMAL,
                this.polygonOffset = 0,
                this.blend = !0,
                this.depthMask = !0
            }
            return Object.defineProperty(e.prototype, "blend", {
                get: function() {
                    return !! (this.data & 1 << Ge)
                },
                set: function(e) { !! (this.data & 1 << Ge) !== e && (this.data ^= 1 << Ge)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "offsets", {
                get: function() {
                    return !! (this.data & 1 << Ve)
                },
                set: function(e) { !! (this.data & 1 << Ve) !== e && (this.data ^= 1 << Ve)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "culling", {
                get: function() {
                    return !! (this.data & 1 << je)
                },
                set: function(e) { !! (this.data & 1 << je) !== e && (this.data ^= 1 << je)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "depthTest", {
                get: function() {
                    return !! (this.data & 1 << He)
                },
                set: function(e) { !! (this.data & 1 << He) !== e && (this.data ^= 1 << He)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "depthMask", {
                get: function() {
                    return !! (this.data & 1 << ze)
                },
                set: function(e) { !! (this.data & 1 << ze) !== e && (this.data ^= 1 << ze)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "clockwiseFrontFace", {
                get: function() {
                    return !! (this.data & 1 << Xe)
                },
                set: function(e) { !! (this.data & 1 << Xe) !== e && (this.data ^= 1 << Xe)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "blendMode", {
                get: function() {
                    return this._blendMode
                },
                set: function(e) {
                    this.blend = e !== t.BLEND_MODES.NONE,
                    this._blendMode = e
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "polygonOffset", {
                get: function() {
                    return this._polygonOffset
                },
                set: function(e) {
                    this.offsets = !!e,
                    this._polygonOffset = e
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.toString = function() {
                return "[@pixi/core:State blendMode=" + this.blendMode + " clockwiseFrontFace=" + this.clockwiseFrontFace + " culling=" + this.culling + " depthMask=" + this.depthMask + " polygonOffset=" + this.polygonOffset + "]"
            },
            e.for2d = function() {
                var t = new e;
                return t.depthTest = !1,
                t.blend = !0,
                t
            },
            e
        } ();
        exports.State = We;
        var Ye = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n",
        Ke = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n",
        qe = function(t) {
            function r(i, n, o) {
                var s = this,
                a = Ue.from(i || r.defaultVertexSrc, n || r.defaultFragmentSrc);
                return (s = t.call(this, a, o) || this).padding = 0,
                s.resolution = e.settings.FILTER_RESOLUTION,
                s.enabled = !0,
                s.autoFit = !0,
                s.legacy = !!s.program.attributeData.aTextureCoord,
                s.state = new We,
                s
            }
            return h(r, t),
            r.prototype.apply = function(e, t, r, i, n) {
                e.applyFilter(this, t, r, i)
            },
            Object.defineProperty(r.prototype, "blendMode", {
                get: function() {
                    return this.state.blendMode
                },
                set: function(e) {
                    this.state.blendMode = e
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(r, "defaultVertexSrc", {
                get: function() {
                    return Ye
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(r, "defaultFragmentSrc", {
                get: function() {
                    return Ke
                },
                enumerable: !1,
                configurable: !0
            }),
            r
        } (ke);
        exports.Filter = qe;
        var Qe = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n",
        Ze = "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n",
        $e = new o.Matrix,
        Je = function() {
            function e(e, t) {
                this._texture = e,
                this.mapCoord = new o.Matrix,
                this.uClampFrame = new Float32Array(4),
                this.uClampOffset = new Float32Array(2),
                this._textureID = -1,
                this._updateID = 0,
                this.clampOffset = 0,
                this.clampMargin = void 0 === t ? .5 : t,
                this.isSimple = !1
            }
            return Object.defineProperty(e.prototype, "texture", {
                get: function() {
                    return this._texture
                },
                set: function(e) {
                    this._texture = e,
                    this._textureID = -1
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.multiplyUvs = function(e, t) {
                void 0 === t && (t = e);
                for (var r = this.mapCoord,
                i = 0; i < e.length; i += 2) {
                    var n = e[i],
                    o = e[i + 1];
                    t[i] = n * r.a + o * r.c + r.tx,
                    t[i + 1] = n * r.b + o * r.d + r.ty
                }
                return t
            },
            e.prototype.update = function(e) {
                var t = this._texture;
                if (!t || !t.valid) return ! 1;
                if (!e && this._textureID === t._updateID) return ! 1;
                this._textureID = t._updateID,
                this._updateID++;
                var r = t._uvs;
                this.mapCoord.set(r.x1 - r.x0, r.y1 - r.y0, r.x3 - r.x0, r.y3 - r.y0, r.x0, r.y0);
                var i = t.orig,
                n = t.trim;
                n && ($e.set(i.width / n.width, 0, 0, i.height / n.height, -n.x / n.width, -n.y / n.height), this.mapCoord.append($e));
                var o = t.baseTexture,
                s = this.uClampFrame,
                a = this.clampMargin / o.resolution,
                u = this.clampOffset;
                return s[0] = (t._frame.x + a + u) / o.width,
                s[1] = (t._frame.y + a + u) / o.height,
                s[2] = (t._frame.x + t._frame.width - a + u) / o.width,
                s[3] = (t._frame.y + t._frame.height - a + u) / o.height,
                this.uClampOffset[0] = u / o.realWidth,
                this.uClampOffset[1] = u / o.realHeight,
                this.isSimple = t._frame.width === o.width && t._frame.height === o.height && 0 === t.rotate,
                !0
            },
            e
        } ();
        exports.TextureMatrix = Je;
        var et = function(e) {
            function t(t) {
                var r = this,
                i = new o.Matrix;
                return r = e.call(this, Qe, Ze) || this,
                t.renderable = !1,
                r.maskSprite = t,
                r.maskMatrix = i,
                r
            }
            return h(t, e),
            t.prototype.apply = function(e, t, r, i) {
                var n = this.maskSprite,
                o = n._texture;
                o.valid && (o.uvMatrix || (o.uvMatrix = new Je(o, 0)), o.uvMatrix.update(), this.uniforms.npmAlpha = o.baseTexture.alphaMode ? 0 : 1, this.uniforms.mask = o, this.uniforms.otherMatrix = e.calculateSpriteMatrix(this.maskMatrix, n).prepend(o.uvMatrix.mapCoord), this.uniforms.alpha = n.worldAlpha, this.uniforms.maskClamp = o.uvMatrix.uClampFrame, e.applyFilter(this, t, r, i))
            },
            t
        } (qe);
        exports.SpriteMaskFilter = et;
        var tt = function(e) {
            function r(t) {
                var r = e.call(this, t) || this;
                return r.enableScissor = !0,
                r.alphaMaskPool = [],
                r.maskDataPool = [],
                r.maskStack = [],
                r.alphaMaskIndex = 0,
                r
            }
            return h(r, e),
            r.prototype.setMaskStack = function(e) {
                this.maskStack = e,
                this.renderer.scissor.setMaskStack(e),
                this.renderer.stencil.setMaskStack(e)
            },
            r.prototype.push = function(e, r) {
                var i = r;
                if (!i.isMaskData) {
                    var n = this.maskDataPool.pop() || new he;
                    n.pooled = !0,
                    n.maskObject = r,
                    i = n
                }
                switch (i.autoDetect && this.detect(i), i.copyCountersOrReset(this.maskStack[this.maskStack.length - 1]), i._target = e, i.type) {
                case t.MASK_TYPES.SCISSOR:
                    this.maskStack.push(i),
                    this.renderer.scissor.push(i);
                    break;
                case t.MASK_TYPES.STENCIL:
                    this.maskStack.push(i),
                    this.renderer.stencil.push(i);
                    break;
                case t.MASK_TYPES.SPRITE:
                    i.copyCountersOrReset(null),
                    this.pushSpriteMask(i),
                    this.maskStack.push(i)
                }
            },
            r.prototype.pop = function(e) {
                var r = this.maskStack.pop();
                if (r && r._target === e) {
                    switch (r.type) {
                    case t.MASK_TYPES.SCISSOR:
                        this.renderer.scissor.pop();
                        break;
                    case t.MASK_TYPES.STENCIL:
                        this.renderer.stencil.pop(r.maskObject);
                        break;
                    case t.MASK_TYPES.SPRITE:
                        this.popSpriteMask()
                    }
                    r.reset(),
                    r.pooled && this.maskDataPool.push(r)
                }
            },
            r.prototype.detect = function(e) {
                var r = e.maskObject;
                if (r.isSprite) e.type = t.MASK_TYPES.SPRITE;
                else if (e.type = t.MASK_TYPES.STENCIL, this.enableScissor && r.isFastRect && r.isFastRect()) {
                    var i = r.worldTransform,
                    n = Math.atan2(i.b, i.a),
                    o = Math.atan2(i.d, i.c);
                    n = Math.round(n * (180 / Math.PI) * 100),
                    o = ((o = Math.round(o * (180 / Math.PI) * 100) - n) % 18e3 + 18e3) % 18e3,
                    0 === (n = (n % 9e3 + 9e3) % 9e3) && 9e3 === o && (e.type = t.MASK_TYPES.SCISSOR)
                }
            },
            r.prototype.pushSpriteMask = function(e) {
                var t = e.maskObject,
                r = e._target,
                i = this.alphaMaskPool[this.alphaMaskIndex];
                i || (i = this.alphaMaskPool[this.alphaMaskIndex] = [new et(t)]),
                i[0].resolution = this.renderer.resolution,
                i[0].maskSprite = t;
                var n = r.filterArea;
                r.filterArea = t.getBounds(!0),
                this.renderer.filter.push(r, i),
                r.filterArea = n,
                this.alphaMaskIndex++
            },
            r.prototype.popSpriteMask = function() {
                this.renderer.filter.pop(),
                this.alphaMaskIndex--
            },
            r
        } (S);
        exports.MaskSystem = tt;
        var rt = function(e) {
            function t(t) {
                var r = e.call(this, t) || this;
                return r.maskStack = [],
                r.glConst = 0,
                r
            }
            return h(t, e),
            t.prototype.getStackLength = function() {
                return this.maskStack.length
            },
            t.prototype.setMaskStack = function(e) {
                var t = this.renderer.gl,
                r = this.getStackLength();
                this.maskStack = e;
                var i = this.getStackLength();
                i !== r && (0 === i ? t.disable(this.glConst) : (t.enable(this.glConst), this._useCurrent()))
            },
            t.prototype._useCurrent = function() {},
            t.prototype.destroy = function() {
                e.prototype.destroy.call(this),
                this.maskStack = null
            },
            t
        } (S),
        it = function(e) {
            function t(t) {
                var r = e.call(this, t) || this;
                return r.glConst = WebGLRenderingContext.SCISSOR_TEST,
                r
            }
            return h(t, e),
            t.prototype.getStackLength = function() {
                var e = this.maskStack[this.maskStack.length - 1];
                return e ? e._scissorCounter: 0
            },
            t.prototype.push = function(e) {
                var t = e.maskObject;
                t.renderable = !0;
                var r = e._scissorRect,
                i = t.getBounds(!0),
                n = this.renderer.gl;
                t.renderable = !1,
                r ? i.fit(r) : n.enable(n.SCISSOR_TEST),
                e._scissorCounter++,
                e._scissorRect = i,
                this._useCurrent()
            },
            t.prototype.pop = function() {
                var e = this.renderer.gl;
                this.getStackLength() > 0 ? this._useCurrent() : e.disable(e.SCISSOR_TEST)
            },
            t.prototype._useCurrent = function() {
                var e = this.maskStack[this.maskStack.length - 1]._scissorRect,
                t = this.renderer.renderTexture.current,
                r = this.renderer.projection,
                i = r.transform,
                n = r.sourceFrame,
                o = r.destinationFrame,
                s = t ? t.resolution: this.renderer.resolution,
                a = o.width / n.width,
                u = o.height / n.height,
                h = ((e.x - n.x) * a + o.x) * s,
                l = ((e.y - n.y) * u + o.y) * s,
                c = e.width * a * s,
                d = e.height * u * s;
                i && (h += i.tx * s, l += i.ty * s),
                t || (l = this.renderer.height - d - l),
                this.renderer.gl.scissor(h, l, c, d)
            },
            t
        } (rt);
        exports.ScissorSystem = it;
        var nt = function(e) {
            function t(t) {
                var r = e.call(this, t) || this;
                return r.glConst = WebGLRenderingContext.STENCIL_TEST,
                r
            }
            return h(t, e),
            t.prototype.getStackLength = function() {
                var e = this.maskStack[this.maskStack.length - 1];
                return e ? e._stencilCounter: 0
            },
            t.prototype.push = function(e) {
                var t = e.maskObject,
                r = this.renderer.gl,
                i = e._stencilCounter;
                0 === i && (this.renderer.framebuffer.forceStencil(), r.enable(r.STENCIL_TEST)),
                e._stencilCounter++,
                r.colorMask(!1, !1, !1, !1),
                r.stencilFunc(r.EQUAL, i, this._getBitwiseMask()),
                r.stencilOp(r.KEEP, r.KEEP, r.INCR),
                t.renderable = !0,
                t.render(this.renderer),
                this.renderer.batch.flush(),
                this.renderer.framebuffer.blit(),
                t.renderable = !1,
                this._useCurrent()
            },
            t.prototype.pop = function(e) {
                var t = this.renderer.gl;
                0 === this.getStackLength() ? (t.disable(t.STENCIL_TEST), t.clear(t.STENCIL_BUFFER_BIT), t.clearStencil(0)) : (t.colorMask(!1, !1, !1, !1), t.stencilOp(t.KEEP, t.KEEP, t.DECR), e.renderable = !0, e.render(this.renderer), this.renderer.batch.flush(), e.renderable = !1, this._useCurrent())
            },
            t.prototype._useCurrent = function() {
                var e = this.renderer.gl;
                e.colorMask(!0, !0, !0, !0),
                e.stencilFunc(e.EQUAL, this.getStackLength(), this._getBitwiseMask()),
                e.stencilOp(e.KEEP, e.KEEP, e.KEEP)
            },
            t.prototype._getBitwiseMask = function() {
                return (1 << this.getStackLength()) - 1
            },
            t
        } (rt);
        exports.StencilSystem = nt;
        var ot = function(e) {
            function t(t) {
                var r = e.call(this, t) || this;
                return r.destinationFrame = null,
                r.sourceFrame = null,
                r.defaultFrame = null,
                r.projectionMatrix = new o.Matrix,
                r.transform = null,
                r
            }
            return h(t, e),
            t.prototype.update = function(e, t, r, i) {
                this.destinationFrame = e || this.destinationFrame || this.defaultFrame,
                this.sourceFrame = t || this.sourceFrame || e,
                this.calculateProjection(this.destinationFrame, this.sourceFrame, r, i),
                this.transform && this.projectionMatrix.append(this.transform);
                var n = this.renderer;
                n.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix,
                n.globalUniforms.update(),
                n.shader.shader && n.shader.syncUniformGroup(n.shader.shader.uniforms.globals)
            },
            t.prototype.calculateProjection = function(e, t, r, i) {
                var n = this.projectionMatrix,
                o = i ? -1 : 1;
                n.identity(),
                n.a = 1 / t.width * 2,
                n.d = o * (1 / t.height * 2),
                n.tx = -1 - t.x * n.a,
                n.ty = -o - t.y * n.d
            },
            t.prototype.setTransform = function(e) {},
            t
        } (S);
        exports.ProjectionSystem = ot;
        var st = new o.Rectangle,
        at = new o.Rectangle,
        ut = function(e) {
            function t(t) {
                var r = e.call(this, t) || this;
                return r.clearColor = t._backgroundColorRgba,
                r.defaultMaskStack = [],
                r.current = null,
                r.sourceFrame = new o.Rectangle,
                r.destinationFrame = new o.Rectangle,
                r.viewportFrame = new o.Rectangle,
                r
            }
            return h(t, e),
            t.prototype.bind = function(e, t, r) {
                void 0 === e && (e = null);
                var i, n, o, s = this.renderer;
                this.current = e,
                e ? (o = (i = e.baseTexture).resolution, t || (st.width = e.frame.width, st.height = e.frame.height, t = st), r || (at.x = e.frame.x, at.y = e.frame.y, at.width = t.width, at.height = t.height, r = at), n = i.framebuffer) : (o = s.resolution, t || (st.width = s.screen.width, st.height = s.screen.height, t = st), r || ((r = st).width = t.width, r.height = t.height));
                var a = this.viewportFrame;
                a.x = r.x * o,
                a.y = r.y * o,
                a.width = r.width * o,
                a.height = r.height * o,
                e || (a.y = s.view.height - (a.y + a.height)),
                this.renderer.framebuffer.bind(n, a),
                this.renderer.projection.update(r, t, o, !n),
                e ? this.renderer.mask.setMaskStack(i.maskStack) : this.renderer.mask.setMaskStack(this.defaultMaskStack),
                this.sourceFrame.copyFrom(t),
                this.destinationFrame.copyFrom(r)
            },
            t.prototype.clear = function(e, t) {
                e = this.current ? e || this.current.baseTexture.clearColor: e || this.clearColor;
                var r = this.destinationFrame,
                i = this.current ? this.current.baseTexture: this.renderer.screen,
                n = r.width !== i.width || r.height !== i.height;
                if (n) {
                    var o = this.viewportFrame,
                    s = o.x,
                    a = o.y,
                    u = o.width,
                    h = o.height;
                    this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST),
                    this.renderer.gl.scissor(s, a, u, h)
                }
                this.renderer.framebuffer.clear(e[0], e[1], e[2], e[3], t),
                n && this.renderer.scissor.pop()
            },
            t.prototype.resize = function() {
                this.bind(null)
            },
            t.prototype.reset = function() {
                this.bind(null)
            },
            t
        } (S);
        exports.RenderTextureSystem = ut;
        var ht = function() {
            return function() {}
        } ();
        exports.IGLUniformData = ht;
        var lt = function() {
            function e(e, t) {
                this.program = e,
                this.uniformData = t,
                this.uniformGroups = {}
            }
            return e.prototype.destroy = function() {
                this.uniformData = null,
                this.uniformGroups = null,
                this.program = null
            },
            e
        } ();
        exports.GLProgram = lt;
        var ct = 0,
        dt = {
            textureCount: 0
        },
        ft = function(e) {
            function t(t) {
                var r = e.call(this, t) || this;
                return r.destroyed = !1,
                r.systemCheck(),
                r.gl = null,
                r.shader = null,
                r.program = null,
                r.cache = {},
                r.id = ct++,
                r
            }
            return h(t, e),
            t.prototype.systemCheck = function() {
                if (!Fe()) throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")
            },
            t.prototype.contextChange = function(e) {
                this.gl = e,
                this.reset()
            },
            t.prototype.bind = function(e, t) {
                e.uniforms.globals = this.renderer.globalUniforms;
                var r = e.program,
                i = r.glPrograms[this.renderer.CONTEXT_UID] || this.generateShader(e);
                return this.shader = e,
                this.program !== r && (this.program = r, this.gl.useProgram(i.program)),
                t || (dt.textureCount = 0, this.syncUniformGroup(e.uniformGroup, dt)),
                i
            },
            t.prototype.setUniforms = function(e) {
                var t = this.shader.program,
                r = t.glPrograms[this.renderer.CONTEXT_UID];
                t.syncUniforms(r.uniformData, e, this.renderer)
            },
            t.prototype.syncUniformGroup = function(e, t) {
                var r = this.getglProgram();
                e.static && e.dirtyId === r.uniformGroups[e.id] || (r.uniformGroups[e.id] = e.dirtyId, this.syncUniforms(e, r, t))
            },
            t.prototype.syncUniforms = function(e, t, r) { (e.syncUniforms[this.shader.program.id] || this.createSyncGroups(e))(t.uniformData, e.uniforms, this.renderer, r)
            },
            t.prototype.createSyncGroups = function(e) {
                var t = this.getSignature(e, this.shader.program.uniformData);
                return this.cache[t] || (this.cache[t] = Re(e, this.shader.program.uniformData)),
                e.syncUniforms[this.shader.program.id] = this.cache[t],
                e.syncUniforms[this.shader.program.id]
            },
            t.prototype.getSignature = function(e, t) {
                var r = e.uniforms,
                i = [];
                for (var n in r) i.push(n),
                t[n] && i.push(t[n].type);
                return i.join("-")
            },
            t.prototype.getglProgram = function() {
                return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null
            },
            t.prototype.generateShader = function(e) {
                var t = this.gl,
                r = e.program,
                i = {};
                for (var n in r.attributeData) i[n] = r.attributeData[n].location;
                var o = ce(t, r.vertexSrc, r.fragmentSrc, i),
                s = {};
                for (var n in r.uniformData) {
                    var a = r.uniformData[n];
                    s[n] = {
                        location: t.getUniformLocation(o, n),
                        value: fe(a.type, a.size)
                    }
                }
                var u = new lt(o, s);
                return r.glPrograms[this.renderer.CONTEXT_UID] = u,
                u
            },
            t.prototype.reset = function() {
                this.program = null,
                this.shader = null
            },
            t.prototype.destroy = function() {
                this.destroyed = !0
            },
            t
        } (S);
        function pt(e, r) {
            return void 0 === r && (r = []),
            r[t.BLEND_MODES.NORMAL] = [e.ONE, e.ONE_MINUS_SRC_ALPHA],
            r[t.BLEND_MODES.ADD] = [e.ONE, e.ONE],
            r[t.BLEND_MODES.MULTIPLY] = [e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA],
            r[t.BLEND_MODES.SCREEN] = [e.ONE, e.ONE_MINUS_SRC_COLOR, e.ONE, e.ONE_MINUS_SRC_ALPHA],
            r[t.BLEND_MODES.OVERLAY] = [e.ONE, e.ONE_MINUS_SRC_ALPHA],
            r[t.BLEND_MODES.DARKEN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA],
            r[t.BLEND_MODES.LIGHTEN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA],
            r[t.BLEND_MODES.COLOR_DODGE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA],
            r[t.BLEND_MODES.COLOR_BURN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA],
            r[t.BLEND_MODES.HARD_LIGHT] = [e.ONE, e.ONE_MINUS_SRC_ALPHA],
            r[t.BLEND_MODES.SOFT_LIGHT] = [e.ONE, e.ONE_MINUS_SRC_ALPHA],
            r[t.BLEND_MODES.DIFFERENCE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA],
            r[t.BLEND_MODES.EXCLUSION] = [e.ONE, e.ONE_MINUS_SRC_ALPHA],
            r[t.BLEND_MODES.HUE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA],
            r[t.BLEND_MODES.SATURATION] = [e.ONE, e.ONE_MINUS_SRC_ALPHA],
            r[t.BLEND_MODES.COLOR] = [e.ONE, e.ONE_MINUS_SRC_ALPHA],
            r[t.BLEND_MODES.LUMINOSITY] = [e.ONE, e.ONE_MINUS_SRC_ALPHA],
            r[t.BLEND_MODES.NONE] = [0, 0],
            r[t.BLEND_MODES.NORMAL_NPM] = [e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA],
            r[t.BLEND_MODES.ADD_NPM] = [e.SRC_ALPHA, e.ONE, e.ONE, e.ONE],
            r[t.BLEND_MODES.SCREEN_NPM] = [e.SRC_ALPHA, e.ONE_MINUS_SRC_COLOR, e.ONE, e.ONE_MINUS_SRC_ALPHA],
            r[t.BLEND_MODES.SRC_IN] = [e.DST_ALPHA, e.ZERO],
            r[t.BLEND_MODES.SRC_OUT] = [e.ONE_MINUS_DST_ALPHA, e.ZERO],
            r[t.BLEND_MODES.SRC_ATOP] = [e.DST_ALPHA, e.ONE_MINUS_SRC_ALPHA],
            r[t.BLEND_MODES.DST_OVER] = [e.ONE_MINUS_DST_ALPHA, e.ONE],
            r[t.BLEND_MODES.DST_IN] = [e.ZERO, e.SRC_ALPHA],
            r[t.BLEND_MODES.DST_OUT] = [e.ZERO, e.ONE_MINUS_SRC_ALPHA],
            r[t.BLEND_MODES.DST_ATOP] = [e.ONE_MINUS_DST_ALPHA, e.SRC_ALPHA],
            r[t.BLEND_MODES.XOR] = [e.ONE_MINUS_DST_ALPHA, e.ONE_MINUS_SRC_ALPHA],
            r[t.BLEND_MODES.SUBTRACT] = [e.ONE, e.ONE, e.ONE, e.ONE, e.FUNC_REVERSE_SUBTRACT, e.FUNC_ADD],
            r
        }
        exports.ShaderSystem = ft;
        var mt = 0,
        vt = 1,
        gt = 2,
        xt = 3,
        yt = 4,
        _t = 5,
        Et = function(e) {
            function r(r) {
                var i = e.call(this, r) || this;
                return i.gl = null,
                i.stateId = 0,
                i.polygonOffset = 0,
                i.blendMode = t.BLEND_MODES.NONE,
                i._blendEq = !1,
                i.map = [],
                i.map[mt] = i.setBlend,
                i.map[vt] = i.setOffset,
                i.map[gt] = i.setCullFace,
                i.map[xt] = i.setDepthTest,
                i.map[yt] = i.setFrontFace,
                i.map[_t] = i.setDepthMask,
                i.checks = [],
                i.defaultState = new We,
                i.defaultState.blend = !0,
                i
            }
            return h(r, e),
            r.prototype.contextChange = function(e) {
                this.gl = e,
                this.blendModes = pt(e),
                this.set(this.defaultState),
                this.reset()
            },
            r.prototype.set = function(e) {
                if (e = e || this.defaultState, this.stateId !== e.data) {
                    for (var t = this.stateId ^ e.data,
                    r = 0; t;) 1 & t && this.map[r].call(this, !!(e.data & 1 << r)),
                    t >>= 1,
                    r++;
                    this.stateId = e.data
                }
                for (r = 0; r < this.checks.length; r++) this.checks[r](this, e)
            },
            r.prototype.forceState = function(e) {
                e = e || this.defaultState;
                for (var t = 0; t < this.map.length; t++) this.map[t].call(this, !!(e.data & 1 << t));
                for (t = 0; t < this.checks.length; t++) this.checks[t](this, e);
                this.stateId = e.data
            },
            r.prototype.setBlend = function(e) {
                this.updateCheck(r.checkBlendMode, e),
                this.gl[e ? "enable": "disable"](this.gl.BLEND)
            },
            r.prototype.setOffset = function(e) {
                this.updateCheck(r.checkPolygonOffset, e),
                this.gl[e ? "enable": "disable"](this.gl.POLYGON_OFFSET_FILL)
            },
            r.prototype.setDepthTest = function(e) {
                this.gl[e ? "enable": "disable"](this.gl.DEPTH_TEST)
            },
            r.prototype.setDepthMask = function(e) {
                this.gl.depthMask(e)
            },
            r.prototype.setCullFace = function(e) {
                this.gl[e ? "enable": "disable"](this.gl.CULL_FACE)
            },
            r.prototype.setFrontFace = function(e) {
                this.gl.frontFace(this.gl[e ? "CW": "CCW"])
            },
            r.prototype.setBlendMode = function(e) {
                if (e !== this.blendMode) {
                    this.blendMode = e;
                    var t = this.blendModes[e],
                    r = this.gl;
                    2 === t.length ? r.blendFunc(t[0], t[1]) : r.blendFuncSeparate(t[0], t[1], t[2], t[3]),
                    6 === t.length ? (this._blendEq = !0, r.blendEquationSeparate(t[4], t[5])) : this._blendEq && (this._blendEq = !1, r.blendEquationSeparate(r.FUNC_ADD, r.FUNC_ADD))
                }
            },
            r.prototype.setPolygonOffset = function(e, t) {
                this.gl.polygonOffset(e, t)
            },
            r.prototype.reset = function() {
                this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1),
                this.forceState(this.defaultState),
                this._blendEq = !0,
                this.blendMode = -1,
                this.setBlendMode(0)
            },
            r.prototype.updateCheck = function(e, t) {
                var r = this.checks.indexOf(e);
                t && -1 === r ? this.checks.push(e) : t || -1 === r || this.checks.splice(r, 1)
            },
            r.checkBlendMode = function(e, t) {
                e.setBlendMode(t.blendMode)
            },
            r.checkPolygonOffset = function(e, t) {
                e.setPolygonOffset(1, t.polygonOffset)
            },
            r
        } (S);
        exports.StateSystem = Et;
        var Tt = function(r) {
            function i(t) {
                var i = r.call(this, t) || this;
                return i.count = 0,
                i.checkCount = 0,
                i.maxIdle = e.settings.GC_MAX_IDLE,
                i.checkCountMax = e.settings.GC_MAX_CHECK_COUNT,
                i.mode = e.settings.GC_MODE,
                i
            }
            return h(i, r),
            i.prototype.postrender = function() {
                this.renderer.renderingToScreen && (this.count++, this.mode !== t.GC_MODES.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run())))
            },
            i.prototype.run = function() {
                for (var e = this.renderer.texture,
                t = e.managedTextures,
                r = !1,
                i = 0; i < t.length; i++) {
                    var n = t[i]; ! n.framebuffer && this.count - n.touched > this.maxIdle && (e.destroyTexture(n, !0), t[i] = null, r = !0)
                }
                if (r) {
                    var o = 0;
                    for (i = 0; i < t.length; i++) null !== t[i] && (t[o++] = t[i]);
                    t.length = o
                }
            },
            i.prototype.unload = function(e) {
                var t = this.renderer.texture,
                r = e._texture;
                r && !r.framebuffer && t.destroyTexture(r);
                for (var i = e.children.length - 1; i >= 0; i--) this.unload(e.children[i])
            },
            i
        } (S);
        exports.TextureGCSystem = Tt;
        var bt = function() {
            return function(e) {
                this.texture = e,
                this.width = -1,
                this.height = -1,
                this.dirtyId = -1,
                this.dirtyStyleId = -1,
                this.mipmap = !1,
                this.wrapMode = 33071,
                this.type = 6408,
                this.internalFormat = 5121
            }
        } ();
        exports.GLTexture = bt;
        var St = function(e) {
            function i(t) {
                var r = e.call(this, t) || this;
                return r.boundTextures = [],
                r.currentLocation = -1,
                r.managedTextures = [],
                r._unknownBoundTextures = !1,
                r.unknownTexture = new f,
                r
            }
            return h(i, e),
            i.prototype.contextChange = function() {
                var e = this.gl = this.renderer.gl;
                this.CONTEXT_UID = this.renderer.CONTEXT_UID,
                this.webGLVersion = this.renderer.context.webGLVersion;
                var t = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);
                this.boundTextures.length = t;
                for (var r = 0; r < t; r++) this.boundTextures[r] = null;
                this.emptyTextures = {};
                var i = new bt(e.createTexture());
                e.bindTexture(e.TEXTURE_2D, i.texture),
                e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, new Uint8Array(4)),
                this.emptyTextures[e.TEXTURE_2D] = i,
                this.emptyTextures[e.TEXTURE_CUBE_MAP] = new bt(e.createTexture()),
                e.bindTexture(e.TEXTURE_CUBE_MAP, this.emptyTextures[e.TEXTURE_CUBE_MAP].texture);
                for (r = 0; r < 6; r++) e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + r, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, null);
                e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MAG_FILTER, e.LINEAR),
                e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MIN_FILTER, e.LINEAR);
                for (r = 0; r < this.boundTextures.length; r++) this.bind(null, r)
            },
            i.prototype.bind = function(e, t) {
                void 0 === t && (t = 0);
                var r = this.gl;
                if (e) {
                    if ((e = e.castToBaseTexture()).parentTextureArray) return;
                    if (e.valid) {
                        e.touched = this.renderer.textureGC.count;
                        var i = e._glTextures[this.CONTEXT_UID] || this.initTexture(e);
                        this.boundTextures[t] !== e && (this.currentLocation !== t && (this.currentLocation = t, r.activeTexture(r.TEXTURE0 + t)), r.bindTexture(e.target, i.texture)),
                        i.dirtyId !== e.dirtyId && (this.currentLocation !== t && (this.currentLocation = t, r.activeTexture(r.TEXTURE0 + t)), this.updateTexture(e)),
                        this.boundTextures[t] = e
                    }
                } else this.currentLocation !== t && (this.currentLocation = t, r.activeTexture(r.TEXTURE0 + t)),
                r.bindTexture(r.TEXTURE_2D, this.emptyTextures[r.TEXTURE_2D].texture),
                this.boundTextures[t] = null
            },
            i.prototype.reset = function() {
                this._unknownBoundTextures = !0,
                this.currentLocation = -1;
                for (var e = 0; e < this.boundTextures.length; e++) this.boundTextures[e] = this.unknownTexture
            },
            i.prototype.unbind = function(e) {
                var t = this.gl,
                r = this.boundTextures;
                if (this._unknownBoundTextures) {
                    this._unknownBoundTextures = !1;
                    for (var i = 0; i < r.length; i++) r[i] === this.unknownTexture && this.bind(null, i)
                }
                for (i = 0; i < r.length; i++) r[i] === e && (this.currentLocation !== i && (t.activeTexture(t.TEXTURE0 + i), this.currentLocation = i), t.bindTexture(e.target, this.emptyTextures[e.target].texture), r[i] = null)
            },
            i.prototype.initTexture = function(e) {
                var t = new bt(this.gl.createTexture());
                return t.dirtyId = -1,
                e._glTextures[this.CONTEXT_UID] = t,
                this.managedTextures.push(e),
                e.on("dispose", this.destroyTexture, this),
                t
            },
            i.prototype.initTextureType = function(e, r) {
                if (r.internalFormat = e.format, r.type = e.type, 2 === this.webGLVersion) {
                    var i = this.renderer.gl;
                    e.type === i.FLOAT && e.format === i.RGBA && (r.internalFormat = i.RGBA32F),
                    e.type === t.TYPES.HALF_FLOAT && (r.type = i.HALF_FLOAT),
                    r.type === i.HALF_FLOAT && e.format === i.RGBA && (r.internalFormat = i.RGBA16F)
                }
            },
            i.prototype.updateTexture = function(e) {
                var t = e._glTextures[this.CONTEXT_UID];
                if (t) {
                    var r = this.renderer;
                    if (this.initTextureType(e, t), e.resource && e.resource.upload(r, e, t));
                    else {
                        var i = e.realWidth,
                        n = e.realHeight,
                        o = r.gl; (t.width !== i || t.height !== n || t.dirtyId < 0) && (t.width = i, t.height = n, o.texImage2D(e.target, 0, t.internalFormat, i, n, 0, e.format, t.type, null))
                    }
                    e.dirtyStyleId !== t.dirtyStyleId && this.updateTextureStyle(e),
                    t.dirtyId = e.dirtyId
                }
            },
            i.prototype.destroyTexture = function(e, t) {
                var i = this.gl;
                if ((e = e.castToBaseTexture())._glTextures[this.CONTEXT_UID] && (this.unbind(e), i.deleteTexture(e._glTextures[this.CONTEXT_UID].texture), e.off("dispose", this.destroyTexture, this), delete e._glTextures[this.CONTEXT_UID], !t)) {
                    var n = this.managedTextures.indexOf(e); - 1 !== n && (0, r.removeItems)(this.managedTextures, n, 1)
                }
            },
            i.prototype.updateTextureStyle = function(e) {
                var r = e._glTextures[this.CONTEXT_UID];
                r && (e.mipmap !== t.MIPMAP_MODES.POW2 && 2 === this.webGLVersion || e.isPowerOfTwo ? r.mipmap = e.mipmap >= 1 : r.mipmap = !1, 2 === this.webGLVersion || e.isPowerOfTwo ? r.wrapMode = e.wrapMode: r.wrapMode = t.WRAP_MODES.CLAMP, e.resource && e.resource.style(this.renderer, e, r) || this.setStyle(e, r), r.dirtyStyleId = e.dirtyStyleId)
            },
            i.prototype.setStyle = function(e, r) {
                var i = this.gl;
                if (r.mipmap && e.mipmap !== t.MIPMAP_MODES.ON_MANUAL && i.generateMipmap(e.target), i.texParameteri(e.target, i.TEXTURE_WRAP_S, r.wrapMode), i.texParameteri(e.target, i.TEXTURE_WRAP_T, r.wrapMode), r.mipmap) {
                    i.texParameteri(e.target, i.TEXTURE_MIN_FILTER, e.scaleMode === t.SCALE_MODES.LINEAR ? i.LINEAR_MIPMAP_LINEAR: i.NEAREST_MIPMAP_NEAREST);
                    var n = this.renderer.context.extensions.anisotropicFiltering;
                    if (n && e.anisotropicLevel > 0 && e.scaleMode === t.SCALE_MODES.LINEAR) {
                        var o = Math.min(e.anisotropicLevel, i.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
                        i.texParameterf(e.target, n.TEXTURE_MAX_ANISOTROPY_EXT, o)
                    }
                } else i.texParameteri(e.target, i.TEXTURE_MIN_FILTER, e.scaleMode === t.SCALE_MODES.LINEAR ? i.LINEAR: i.NEAREST);
                i.texParameteri(e.target, i.TEXTURE_MAG_FILTER, e.scaleMode === t.SCALE_MODES.LINEAR ? i.LINEAR: i.NEAREST)
            },
            i
        } (S);
        exports.TextureSystem = St;
        var wt = {
            __proto__: null,
            FilterSystem: $,
            BatchSystem: ee,
            ContextSystem: re,
            FramebufferSystem: oe,
            GeometrySystem: ue,
            MaskSystem: tt,
            ScissorSystem: it,
            StencilSystem: nt,
            ProjectionSystem: ot,
            RenderTextureSystem: ut,
            ShaderSystem: ft,
            StateSystem: Et,
            TextureGCSystem: Tt,
            TextureSystem: St
        },
        At = new o.Matrix,
        Ct = function(i) {
            function n(n, s) {
                void 0 === n && (n = t.RENDERER_TYPE.UNKNOWN);
                var a = i.call(this) || this;
                return s = Object.assign({},
                e.settings.RENDER_OPTIONS, s),
                a.options = s,
                a.type = n,
                a.screen = new o.Rectangle(0, 0, s.width, s.height),
                a.view = s.view || document.createElement("canvas"),
                a.resolution = s.resolution || e.settings.RESOLUTION,
                a.useContextAlpha = s.useContextAlpha,
                a.autoDensity = !!s.autoDensity,
                a.preserveDrawingBuffer = s.preserveDrawingBuffer,
                a.clearBeforeRender = s.clearBeforeRender,
                a._backgroundColor = 0,
                a._backgroundColorRgba = [0, 0, 0, 1],
                a._backgroundColorString = "#000000",
                a.backgroundColor = s.backgroundColor || a._backgroundColor,
                a.backgroundAlpha = s.backgroundAlpha,
                void 0 !== s.transparent && ((0, r.deprecation)("6.0.0", "Option transparent is deprecated, please use backgroundAlpha instead."), a.useContextAlpha = s.transparent, a.backgroundAlpha = s.transparent ? 0 : 1),
                a._lastObjectRendered = null,
                a.plugins = {},
                a
            }
            return h(n, i),
            n.prototype.initPlugins = function(e) {
                for (var t in e) this.plugins[t] = new e[t](this)
            },
            Object.defineProperty(n.prototype, "width", {
                get: function() {
                    return this.view.width
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "height", {
                get: function() {
                    return this.view.height
                },
                enumerable: !1,
                configurable: !0
            }),
            n.prototype.resize = function(e, t) {
                this.screen.width = e,
                this.screen.height = t,
                this.view.width = e * this.resolution,
                this.view.height = t * this.resolution,
                this.autoDensity && (this.view.style.width = e + "px", this.view.style.height = t + "px"),
                this.emit("resize", e, t)
            },
            n.prototype.generateTexture = function(e, t, r, i) {
                0 === (i = i || e.getLocalBounds(null, !0)).width && (i.width = 1),
                0 === i.height && (i.height = 1);
                var n = F.create({
                    width: 0 | i.width,
                    height: 0 | i.height,
                    scaleMode: t,
                    resolution: r
                });
                return At.tx = -i.x,
                At.ty = -i.y,
                this.render(e, {
                    renderTexture: n,
                    clear: !1,
                    transform: At,
                    skipUpdateTransform: !!e.parent
                }),
                n
            },
            n.prototype.destroy = function(e) {
                for (var r in this.plugins) this.plugins[r].destroy(),
                this.plugins[r] = null;
                e && this.view.parentNode && this.view.parentNode.removeChild(this.view);
                this.plugins = null,
                this.type = t.RENDERER_TYPE.UNKNOWN,
                this.view = null,
                this.screen = null,
                this._tempDisplayObjectParent = null,
                this.options = null,
                this._backgroundColorRgba = null,
                this._backgroundColorString = null,
                this._lastObjectRendered = null
            },
            Object.defineProperty(n.prototype, "backgroundColor", {
                get: function() {
                    return this._backgroundColor
                },
                set: function(e) {
                    this._backgroundColor = e,
                    this._backgroundColorString = (0, r.hex2string)(e),
                    (0, r.hex2rgb)(e, this._backgroundColorRgba)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "backgroundAlpha", {
                get: function() {
                    return this._backgroundColorRgba[3]
                },
                set: function(e) {
                    this._backgroundColorRgba[3] = e
                },
                enumerable: !1,
                configurable: !0
            }),
            n
        } (r.EventEmitter);
        exports.AbstractRenderer = Ct;
        var Rt = function(e) {
            function n(s) {
                var a = e.call(this, t.RENDERER_TYPE.WEBGL, s) || this;
                return s = a.options,
                a.gl = null,
                a.CONTEXT_UID = 0,
                a.runners = {
                    destroy: new i.Runner("destroy"),
                    contextChange: new i.Runner("contextChange"),
                    reset: new i.Runner("reset"),
                    update: new i.Runner("update"),
                    postrender: new i.Runner("postrender"),
                    prerender: new i.Runner("prerender"),
                    resize: new i.Runner("resize")
                },
                a.globalUniforms = new K({
                    projectionMatrix: new o.Matrix
                },
                !0),
                a.addSystem(tt, "mask").addSystem(re, "context").addSystem(Et, "state").addSystem(ft, "shader").addSystem(St, "texture").addSystem(ue, "geometry").addSystem(oe, "framebuffer").addSystem(it, "scissor").addSystem(nt, "stencil").addSystem(ot, "projection").addSystem(Tt, "textureGC").addSystem($, "filter").addSystem(ut, "renderTexture").addSystem(ee, "batch"),
                a.initPlugins(n.__plugins),
                s.context ? a.context.initFromContext(s.context) : a.context.initFromOptions({
                    alpha: !!a.useContextAlpha,
                    antialias: s.antialias,
                    premultipliedAlpha: a.useContextAlpha && "notMultiplied" !== a.useContextAlpha,
                    stencil: !0,
                    preserveDrawingBuffer: s.preserveDrawingBuffer,
                    powerPreference: a.options.powerPreference
                }),
                a.renderingToScreen = !0,
                (0, r.sayHello)(2 === a.context.webGLVersion ? "WebGL 2": "WebGL 1"),
                a.resize(a.options.width, a.options.height),
                a
            }
            return h(n, e),
            n.create = function(e) {
                if ((0, r.isWebGLSupported)()) return new n(e);
                throw new Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.')
            },
            n.prototype.addSystem = function(e, t) {
                t || (t = e.name);
                var r = new e(this);
                if (this[t]) throw new Error('Whoops! The name "' + t + '" is already in use');
                for (var i in this[t] = r, this.runners) this.runners[i].add(r);
                return this
            },
            n.prototype.render = function(e, t) {
                var i, n, o, s;
                if (t && (t instanceof F ? ((0, r.deprecation)("6.0.0", "Renderer#render arguments changed, use options instead."), i = t, n = arguments[2], o = arguments[3], s = arguments[4]) : (i = t.renderTexture, n = t.clear, o = t.transform, s = t.skipUpdateTransform)), this.renderingToScreen = !i, this.runners.prerender.emit(), this.emit("prerender"), this.projection.transform = o, !this.context.isLost) {
                    if (i || (this._lastObjectRendered = e), !s) {
                        var a = e.enableTempParent();
                        e.updateTransform(),
                        e.disableTempParent(a)
                    }
                    this.renderTexture.bind(i),
                    this.batch.currentRenderer.start(),
                    (void 0 !== n ? n: this.clearBeforeRender) && this.renderTexture.clear(),
                    e.render(this),
                    this.batch.currentRenderer.flush(),
                    i && i.baseTexture.update(),
                    this.runners.postrender.emit(),
                    this.projection.transform = null,
                    this.emit("postrender")
                }
            },
            n.prototype.resize = function(t, r) {
                e.prototype.resize.call(this, t, r),
                this.runners.resize.emit(t, r)
            },
            n.prototype.reset = function() {
                return this.runners.reset.emit(),
                this
            },
            n.prototype.clear = function() {
                this.renderTexture.bind(),
                this.renderTexture.clear()
            },
            n.prototype.destroy = function(t) {
                for (var r in this.runners.destroy.emit(), this.runners) this.runners[r].destroy();
                e.prototype.destroy.call(this, t),
                this.gl = null
            },
            Object.defineProperty(n.prototype, "extract", {
                get: function() {
                    return (0, r.deprecation)("6.0.0", "Renderer#extract has been deprecated, please use Renderer#plugins.extract instead."),
                    this.plugins.extract
                },
                enumerable: !1,
                configurable: !0
            }),
            n.registerPlugin = function(e, t) {
                n.__plugins = n.__plugins || {},
                n.__plugins[e] = t
            },
            n
        } (Ct);
        function It(e) {
            return Rt.create(e)
        }
        exports.Renderer = Rt;
        var Ot = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
        Mt = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n",
        Pt = Ot;
        exports.defaultVertex = Pt;
        var Ft = Mt;
        exports.defaultFilterVertex = Ft;
        var Dt = function() {
            return function() {
                this.texArray = null,
                this.blend = 0,
                this.type = t.DRAW_MODES.TRIANGLES,
                this.start = 0,
                this.size = 0,
                this.data = null
            }
        } ();
        exports.BatchDrawCall = Dt;
        var Nt = function() {
            function e() {
                this.elements = [],
                this.ids = [],
                this.count = 0
            }
            return e.prototype.clear = function() {
                for (var e = 0; e < this.count; e++) this.elements[e] = null;
                this.count = 0
            },
            e
        } ();
        exports.BatchTextureArray = Nt;
        var Bt = function() {
            function e(e) {
                "number" == typeof e ? this.rawBinaryData = new ArrayBuffer(e) : e instanceof Uint8Array ? this.rawBinaryData = e.buffer: this.rawBinaryData = e,
                this.uint32View = new Uint32Array(this.rawBinaryData),
                this.float32View = new Float32Array(this.rawBinaryData)
            }
            return Object.defineProperty(e.prototype, "int8View", {
                get: function() {
                    return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)),
                    this._int8View
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "uint8View", {
                get: function() {
                    return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)),
                    this._uint8View
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "int16View", {
                get: function() {
                    return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)),
                    this._int16View
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "uint16View", {
                get: function() {
                    return this._uint16View || (this._uint16View = new Uint16Array(this.rawBinaryData)),
                    this._uint16View
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "int32View", {
                get: function() {
                    return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)),
                    this._int32View
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.view = function(e) {
                return this[e + "View"]
            },
            e.prototype.destroy = function() {
                this.rawBinaryData = null,
                this._int8View = null,
                this._uint8View = null,
                this._int16View = null,
                this._uint16View = null,
                this._int32View = null,
                this.uint32View = null,
                this.float32View = null
            },
            e.sizeOf = function(e) {
                switch (e) {
                case "int8":
                case "uint8":
                    return 1;
                case "int16":
                case "uint16":
                    return 2;
                case "int32":
                case "uint32":
                case "float32":
                    return 4;
                default:
                    throw new Error(e + " isn't a valid view type")
                }
            },
            e
        } ();
        exports.ViewableBuffer = Bt;
        var Lt = function(i) {
            function n(t) {
                var r = i.call(this, t) || this;
                return r.shaderGenerator = null,
                r.geometryClass = null,
                r.vertexSize = null,
                r.state = We.for2d(),
                r.size = 4 * e.settings.SPRITE_BATCH_SIZE,
                r._vertexCount = 0,
                r._indexCount = 0,
                r._bufferedElements = [],
                r._bufferedTextures = [],
                r._bufferSize = 0,
                r._shader = null,
                r._packedGeometries = [],
                r._packedGeometryPoolSize = 2,
                r._flushId = 0,
                r._aBuffers = {},
                r._iBuffers = {},
                r.MAX_TEXTURES = 1,
                r.renderer.on("prerender", r.onPrerender, r),
                t.runners.contextChange.add(r),
                r._dcIndex = 0,
                r._aIndex = 0,
                r._iIndex = 0,
                r._attributeBuffer = null,
                r._indexBuffer = null,
                r._tempBoundTextures = [],
                r
            }
            return h(n, i),
            n.prototype.contextChange = function() {
                var r = this.renderer.gl;
                e.settings.PREFER_ENV === t.ENV.WEBGL_LEGACY ? this.MAX_TEXTURES = 1 : (this.MAX_TEXTURES = Math.min(r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS), e.settings.SPRITE_MAX_TEXTURES), this.MAX_TEXTURES = Pe(this.MAX_TEXTURES, r)),
                this._shader = this.shaderGenerator.generateShader(this.MAX_TEXTURES);
                for (var i = 0; i < this._packedGeometryPoolSize; i++) this._packedGeometries[i] = new this.geometryClass;
                this.initFlushBuffers()
            },
            n.prototype.initFlushBuffers = function() {
                for (var e = n._drawCallPool,
                t = n._textureArrayPool,
                r = this.size / 4,
                i = Math.floor(r / this.MAX_TEXTURES) + 1; e.length < r;) e.push(new Dt);
                for (; t.length < i;) t.push(new Nt);
                for (var o = 0; o < this.MAX_TEXTURES; o++) this._tempBoundTextures[o] = null
            },
            n.prototype.onPrerender = function() {
                this._flushId = 0
            },
            n.prototype.render = function(e) {
                e._texture.valid && (this._vertexCount + e.vertexData.length / 2 > this.size && this.flush(), this._vertexCount += e.vertexData.length / 2, this._indexCount += e.indices.length, this._bufferedTextures[this._bufferSize] = e._texture.baseTexture, this._bufferedElements[this._bufferSize++] = e)
            },
            n.prototype.buildTexturesAndDrawCalls = function() {
                var e = this._bufferedTextures,
                t = this.MAX_TEXTURES,
                r = n._textureArrayPool,
                i = this.renderer.batch,
                o = this._tempBoundTextures,
                s = this.renderer.textureGC.count,
                a = ++f._globalBatch,
                u = 0,
                h = r[0],
                l = 0;
                i.copyBoundTextures(o, t);
                for (var c = 0; c < this._bufferSize; ++c) {
                    var d = e[c];
                    e[c] = null,
                    d._batchEnabled !== a && (h.count >= t && (i.boundArray(h, o, a, t), this.buildDrawCalls(h, l, c), l = c, h = r[++u], ++a), d._batchEnabled = a, d.touched = s, h.elements[h.count++] = d)
                }
                h.count > 0 && (i.boundArray(h, o, a, t), this.buildDrawCalls(h, l, this._bufferSize), ++u, ++a);
                for (c = 0; c < o.length; c++) o[c] = null;
                f._globalBatch = a
            },
            n.prototype.buildDrawCalls = function(e, t, i) {
                var o = this._bufferedElements,
                s = this._attributeBuffer,
                a = this._indexBuffer,
                u = this.vertexSize,
                h = n._drawCallPool,
                l = this._dcIndex,
                c = this._aIndex,
                d = this._iIndex,
                f = h[l];
                f.start = this._iIndex,
                f.texArray = e;
                for (var p = t; p < i; ++p) {
                    var m = o[p],
                    v = m._texture.baseTexture,
                    g = r.premultiplyBlendMode[v.alphaMode ? 1 : 0][m.blendMode];
                    o[p] = null,
                    t < p && f.blend !== g && (f.size = d - f.start, t = p, (f = h[++l]).texArray = e, f.start = d),
                    this.packInterleavedGeometry(m, s, a, c, d),
                    c += m.vertexData.length / 2 * u,
                    d += m.indices.length,
                    f.blend = g
                }
                t < i && (f.size = d - f.start, ++l),
                this._dcIndex = l,
                this._aIndex = c,
                this._iIndex = d
            },
            n.prototype.bindAndClearTexArray = function(e) {
                for (var t = this.renderer.texture,
                r = 0; r < e.count; r++) t.bind(e.elements[r], e.ids[r]),
                e.elements[r] = null;
                e.count = 0
            },
            n.prototype.updateGeometry = function() {
                var t = this._packedGeometries,
                r = this._attributeBuffer,
                i = this._indexBuffer;
                e.settings.CAN_UPLOAD_SAME_BUFFER ? (t[this._flushId]._buffer.update(r.rawBinaryData), t[this._flushId]._indexBuffer.update(i), this.renderer.geometry.updateBuffers()) : (this._packedGeometryPoolSize <= this._flushId && (this._packedGeometryPoolSize++, t[this._flushId] = new this.geometryClass), t[this._flushId]._buffer.update(r.rawBinaryData), t[this._flushId]._indexBuffer.update(i), this.renderer.geometry.bind(t[this._flushId]), this.renderer.geometry.updateBuffers(), this._flushId++)
            },
            n.prototype.drawBatches = function() {
                for (var e = this._dcIndex,
                t = this.renderer,
                r = t.gl,
                i = t.state,
                o = n._drawCallPool,
                s = null,
                a = 0; a < e; a++) {
                    var u = o[a],
                    h = u.texArray,
                    l = u.type,
                    c = u.size,
                    d = u.start,
                    f = u.blend;
                    s !== h && (s = h, this.bindAndClearTexArray(h)),
                    this.state.blendMode = f,
                    i.set(this.state),
                    r.drawElements(l, c, r.UNSIGNED_SHORT, 2 * d)
                }
            },
            n.prototype.flush = function() {
                0 !== this._vertexCount && (this._attributeBuffer = this.getAttributeBuffer(this._vertexCount), this._indexBuffer = this.getIndexBuffer(this._indexCount), this._aIndex = 0, this._iIndex = 0, this._dcIndex = 0, this.buildTexturesAndDrawCalls(), this.updateGeometry(), this.drawBatches(), this._bufferSize = 0, this._vertexCount = 0, this._indexCount = 0)
            },
            n.prototype.start = function() {
                this.renderer.state.set(this.state),
                this.renderer.shader.bind(this._shader),
                e.settings.CAN_UPLOAD_SAME_BUFFER && this.renderer.geometry.bind(this._packedGeometries[this._flushId])
            },
            n.prototype.stop = function() {
                this.flush()
            },
            n.prototype.destroy = function() {
                for (var e = 0; e < this._packedGeometryPoolSize; e++) this._packedGeometries[e] && this._packedGeometries[e].destroy();
                this.renderer.off("prerender", this.onPrerender, this),
                this._aBuffers = null,
                this._iBuffers = null,
                this._packedGeometries = null,
                this._attributeBuffer = null,
                this._indexBuffer = null,
                this._shader && (this._shader.destroy(), this._shader = null),
                i.prototype.destroy.call(this)
            },
            n.prototype.getAttributeBuffer = function(e) {
                var t = (0, r.nextPow2)(Math.ceil(e / 8)),
                i = (0, r.log2)(t),
                n = 8 * t;
                this._aBuffers.length <= i && (this._iBuffers.length = i + 1);
                var o = this._aBuffers[n];
                return o || (this._aBuffers[n] = o = new Bt(n * this.vertexSize * 4)),
                o
            },
            n.prototype.getIndexBuffer = function(e) {
                var t = (0, r.nextPow2)(Math.ceil(e / 12)),
                i = (0, r.log2)(t),
                n = 12 * t;
                this._iBuffers.length <= i && (this._iBuffers.length = i + 1);
                var o = this._iBuffers[i];
                return o || (this._iBuffers[i] = o = new Uint16Array(n)),
                o
            },
            n.prototype.packInterleavedGeometry = function(e, t, i, n, o) {
                for (var s = t.uint32View,
                a = t.float32View,
                u = n / this.vertexSize,
                h = e.uvs,
                l = e.indices,
                c = e.vertexData,
                d = e._texture.baseTexture._batchLocation,
                f = Math.min(e.worldAlpha, 1), p = f < 1 && e._texture.baseTexture.alphaMode ? (0, r.premultiplyTint)(e._tintRGB, f) : e._tintRGB + (255 * f << 24), m = 0; m < c.length; m += 2) a[n++] = c[m],
                a[n++] = c[m + 1],
                a[n++] = h[m],
                a[n++] = h[m + 1],
                s[n++] = p,
                a[n++] = d;
                for (m = 0; m < l.length; m++) i[o++] = u + l[m]
            },
            n._drawCallPool = [],
            n._textureArrayPool = [],
            n
        } (J);
        exports.AbstractBatchRenderer = Lt;
        var Ut = function() {
            function e(e, t) {
                if (this.vertexSrc = e, this.fragTemplate = t, this.programCache = {},
                this.defaultGroupCache = {},
                t.indexOf("%count%") < 0) throw new Error('Fragment template must contain "%count%".');
                if (t.indexOf("%forloop%") < 0) throw new Error('Fragment template must contain "%forloop%".')
            }
            return e.prototype.generateShader = function(e) {
                if (!this.programCache[e]) {
                    for (var t = new Int32Array(e), r = 0; r < e; r++) t[r] = r;
                    this.defaultGroupCache[e] = K.from({
                        uSamplers: t
                    },
                    !0);
                    var i = this.fragTemplate;
                    i = (i = i.replace(/%count%/gi, "" + e)).replace(/%forloop%/gi, this.generateSampleSrc(e)),
                    this.programCache[e] = new Ue(this.vertexSrc, i)
                }
                var n = {
                    tint: new Float32Array([1, 1, 1, 1]),
                    translationMatrix: new o.Matrix,
                default:
                    this.defaultGroupCache[e]
                };
                return new ke(this.programCache[e], n)
            },
            e.prototype.generateSampleSrc = function(e) {
                var t = "";
                t += "\n",
                t += "\n";
                for (var r = 0; r < e; r++) r > 0 && (t += "\nelse "),
                r < e - 1 && (t += "if(vTextureId < " + r + ".5)"),
                t += "\n{",
                t += "\n\tcolor = texture2D(uSamplers[" + r + "], vTextureCoord);",
                t += "\n}";
                return t += "\n",
                t += "\n"
            },
            e
        } ();
        exports.BatchShaderGenerator = Ut;
        var kt = function(e) {
            function r(r) {
                void 0 === r && (r = !1);
                var i = e.call(this) || this;
                return i._buffer = new L(null, r, !1),
                i._indexBuffer = new L(null, r, !0),
                i.addAttribute("aVertexPosition", i._buffer, 2, !1, t.TYPES.FLOAT).addAttribute("aTextureCoord", i._buffer, 2, !1, t.TYPES.FLOAT).addAttribute("aColor", i._buffer, 4, !0, t.TYPES.UNSIGNED_BYTE).addAttribute("aTextureId", i._buffer, 1, !0, t.TYPES.FLOAT).addIndex(i._indexBuffer),
                i
            }
            return h(r, e),
            r
        } (X);
        exports.BatchGeometry = kt;
        var Gt = "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor * tint;\n}\n",
        Vt = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\n\nvoid main(void){\n    vec4 color;\n    %forloop%\n    gl_FragColor = color * vColor;\n}\n",
        jt = function() {
            function e() {}
            return e.create = function(e) {
                var t = Object.assign({
                    vertex: Gt,
                    fragment: Vt,
                    geometryClass: kt,
                    vertexSize: 6
                },
                e),
                r = t.vertex,
                i = t.fragment,
                n = t.vertexSize,
                o = t.geometryClass;
                return function(e) {
                    function t(t) {
                        var s = e.call(this, t) || this;
                        return s.shaderGenerator = new Ut(r, i),
                        s.geometryClass = o,
                        s.vertexSize = n,
                        s
                    }
                    return h(t, e),
                    t
                } (Lt)
            },
            Object.defineProperty(e, "defaultVertexSrc", {
                get: function() {
                    return Gt
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e, "defaultFragmentTemplate", {
                get: function() {
                    return Vt
                },
                enumerable: !1,
                configurable: !0
            }),
            e
        } ();
        exports.BatchPluginFactory = jt;
        var Ht = jt.create();
        exports.BatchRenderer = Ht;
        var Xt = {};
        exports.resources = Xt;
        var zt = function(e) {
            Object.defineProperty(Xt, e, {
                get: function() {
                    return (0, r.deprecation)("6.0.0", "PIXI.systems." + e + " has moved to PIXI." + e),
                    b[e]
                }
            })
        };
        for (var Wt in b) zt(Wt);
        var Yt = {};
        exports.systems = Yt;
        var Kt = function(e) {
            Object.defineProperty(Yt, e, {
                get: function() {
                    return (0, r.deprecation)("6.0.0", "PIXI.resources." + e + " has moved to PIXI." + e),
                    wt[e]
                }
            })
        };
        for (var Wt in wt) Kt(Wt);
    },
    {
        "@pixi/settings": "APb3",
        "@pixi/constants": "ETil",
        "@pixi/utils": "KFvg",
        "@pixi/runner": "DUQA",
        "@pixi/ticker": "Aybl",
        "@pixi/math": "Z5os"
    }],
    "ll5V": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.TemporaryDisplayObject = exports.DisplayObject = exports.Container = exports.Bounds = void 0;
        var t = require("@pixi/settings"),
        i = require("@pixi/math"),
        e = require("@pixi/utils");
        t.settings.SORTABLE_CHILDREN = !1;
        var n = function() {
            function t() {
                this.minX = 1 / 0,
                this.minY = 1 / 0,
                this.maxX = -1 / 0,
                this.maxY = -1 / 0,
                this.rect = null,
                this.updateID = -1
            }
            return t.prototype.isEmpty = function() {
                return this.minX > this.maxX || this.minY > this.maxY
            },
            t.prototype.clear = function() {
                this.minX = 1 / 0,
                this.minY = 1 / 0,
                this.maxX = -1 / 0,
                this.maxY = -1 / 0
            },
            t.prototype.getRectangle = function(t) {
                return this.minX > this.maxX || this.minY > this.maxY ? i.Rectangle.EMPTY: ((t = t || new i.Rectangle(0, 0, 1, 1)).x = this.minX, t.y = this.minY, t.width = this.maxX - this.minX, t.height = this.maxY - this.minY, t)
            },
            t.prototype.addPoint = function(t) {
                this.minX = Math.min(this.minX, t.x),
                this.maxX = Math.max(this.maxX, t.x),
                this.minY = Math.min(this.minY, t.y),
                this.maxY = Math.max(this.maxY, t.y)
            },
            t.prototype.addPointMatrix = function(t, i) {
                var e = t.a,
                n = t.b,
                r = t.c,
                s = t.d,
                o = t.tx,
                a = t.ty,
                h = e * i.x + r * i.y + o,
                l = n * i.x + s * i.y + a;
                this.minX = Math.min(this.minX, h),
                this.maxX = Math.max(this.maxX, h),
                this.minY = Math.min(this.minY, l),
                this.maxY = Math.max(this.maxY, l)
            },
            t.prototype.addQuad = function(t) {
                var i = this.minX,
                e = this.minY,
                n = this.maxX,
                r = this.maxY,
                s = t[0],
                o = t[1];
                i = s < i ? s: i,
                e = o < e ? o: e,
                n = s > n ? s: n,
                r = o > r ? o: r,
                i = (s = t[2]) < i ? s: i,
                e = (o = t[3]) < e ? o: e,
                n = s > n ? s: n,
                r = o > r ? o: r,
                i = (s = t[4]) < i ? s: i,
                e = (o = t[5]) < e ? o: e,
                n = s > n ? s: n,
                r = o > r ? o: r,
                i = (s = t[6]) < i ? s: i,
                e = (o = t[7]) < e ? o: e,
                n = s > n ? s: n,
                r = o > r ? o: r,
                this.minX = i,
                this.minY = e,
                this.maxX = n,
                this.maxY = r
            },
            t.prototype.addFrame = function(t, i, e, n, r) {
                this.addFrameMatrix(t.worldTransform, i, e, n, r)
            },
            t.prototype.addFrameMatrix = function(t, i, e, n, r) {
                var s = t.a,
                o = t.b,
                a = t.c,
                h = t.d,
                l = t.tx,
                d = t.ty,
                p = this.minX,
                m = this.minY,
                u = this.maxX,
                c = this.maxY,
                f = s * i + a * e + l,
                y = o * i + h * e + d;
                p = f < p ? f: p,
                m = y < m ? y: m,
                u = f > u ? f: u,
                c = y > c ? y: c,
                p = (f = s * n + a * e + l) < p ? f: p,
                m = (y = o * n + h * e + d) < m ? y: m,
                u = f > u ? f: u,
                c = y > c ? y: c,
                p = (f = s * i + a * r + l) < p ? f: p,
                m = (y = o * i + h * r + d) < m ? y: m,
                u = f > u ? f: u,
                c = y > c ? y: c,
                p = (f = s * n + a * r + l) < p ? f: p,
                m = (y = o * n + h * r + d) < m ? y: m,
                u = f > u ? f: u,
                c = y > c ? y: c,
                this.minX = p,
                this.minY = m,
                this.maxX = u,
                this.maxY = c
            },
            t.prototype.addVertexData = function(t, i, e) {
                for (var n = this.minX,
                r = this.minY,
                s = this.maxX,
                o = this.maxY,
                a = i; a < e; a += 2) {
                    var h = t[a],
                    l = t[a + 1];
                    n = h < n ? h: n,
                    r = l < r ? l: r,
                    s = h > s ? h: s,
                    o = l > o ? l: o
                }
                this.minX = n,
                this.minY = r,
                this.maxX = s,
                this.maxY = o
            },
            t.prototype.addVertices = function(t, i, e, n) {
                this.addVerticesMatrix(t.worldTransform, i, e, n)
            },
            t.prototype.addVerticesMatrix = function(t, i, e, n, r, s) {
                void 0 === r && (r = 0),
                void 0 === s && (s = r);
                for (var o = t.a,
                a = t.b,
                h = t.c,
                l = t.d,
                d = t.tx,
                p = t.ty,
                m = this.minX,
                u = this.minY,
                c = this.maxX,
                f = this.maxY,
                y = e; y < n; y += 2) {
                    var b = i[y],
                    x = i[y + 1],
                    v = o * b + h * x + d,
                    _ = l * x + a * b + p;
                    m = Math.min(m, v - r),
                    c = Math.max(c, v + r),
                    u = Math.min(u, _ - s),
                    f = Math.max(f, _ + s)
                }
                this.minX = m,
                this.minY = u,
                this.maxX = c,
                this.maxY = f
            },
            t.prototype.addBounds = function(t) {
                var i = this.minX,
                e = this.minY,
                n = this.maxX,
                r = this.maxY;
                this.minX = t.minX < i ? t.minX: i,
                this.minY = t.minY < e ? t.minY: e,
                this.maxX = t.maxX > n ? t.maxX: n,
                this.maxY = t.maxY > r ? t.maxY: r
            },
            t.prototype.addBoundsMask = function(t, i) {
                var e = t.minX > i.minX ? t.minX: i.minX,
                n = t.minY > i.minY ? t.minY: i.minY,
                r = t.maxX < i.maxX ? t.maxX: i.maxX,
                s = t.maxY < i.maxY ? t.maxY: i.maxY;
                if (e <= r && n <= s) {
                    var o = this.minX,
                    a = this.minY,
                    h = this.maxX,
                    l = this.maxY;
                    this.minX = e < o ? e: o,
                    this.minY = n < a ? n: a,
                    this.maxX = r > h ? r: h,
                    this.maxY = s > l ? s: l
                }
            },
            t.prototype.addBoundsMatrix = function(t, i) {
                this.addFrameMatrix(i, t.minX, t.minY, t.maxX, t.maxY)
            },
            t.prototype.addBoundsArea = function(t, i) {
                var e = t.minX > i.x ? t.minX: i.x,
                n = t.minY > i.y ? t.minY: i.y,
                r = t.maxX < i.x + i.width ? t.maxX: i.x + i.width,
                s = t.maxY < i.y + i.height ? t.maxY: i.y + i.height;
                if (e <= r && n <= s) {
                    var o = this.minX,
                    a = this.minY,
                    h = this.maxX,
                    l = this.maxY;
                    this.minX = e < o ? e: o,
                    this.minY = n < a ? n: a,
                    this.maxX = r > h ? r: h,
                    this.maxY = s > l ? s: l
                }
            },
            t.prototype.pad = function(t, i) {
                void 0 === t && (t = 0),
                void 0 === i && (i = t),
                this.isEmpty() || (this.minX -= t, this.maxX += t, this.minY -= i, this.maxY += i)
            },
            t.prototype.addFramePad = function(t, i, e, n, r, s) {
                t -= r,
                i -= s,
                e += r,
                n += s,
                this.minX = this.minX < t ? this.minX: t,
                this.maxX = this.maxX > e ? this.maxX: e,
                this.minY = this.minY < i ? this.minY: i,
                this.maxY = this.maxY > n ? this.maxY: n
            },
            t
        } ();
        exports.Bounds = n;
        var r = function(t, i) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, i) {
                t.__proto__ = i
            } ||
            function(t, i) {
                for (var e in i) i.hasOwnProperty(e) && (t[e] = i[e])
            })(t, i)
        };
        function s(t, i) {
            function e() {
                this.constructor = t
            }
            r(t, i),
            t.prototype = null === i ? Object.create(i) : (e.prototype = i.prototype, new e)
        }
        var o = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.tempDisplayObjectParent = null,
                e.transform = new i.Transform,
                e.alpha = 1,
                e.visible = !0,
                e.renderable = !0,
                e.parent = null,
                e.worldAlpha = 1,
                e._lastSortedIndex = 0,
                e._zIndex = 0,
                e.filterArea = null,
                e.filters = null,
                e._enabledFilters = null,
                e._bounds = new n,
                e._localBounds = null,
                e._boundsID = 0,
                e._boundsRect = null,
                e._localBoundsRect = null,
                e._mask = null,
                e._destroyed = !1,
                e.isSprite = !1,
                e.isMask = !1,
                e
            }
            return s(e, t),
            e.mixin = function(t) {
                for (var i = Object.keys(t), n = 0; n < i.length; ++n) {
                    var r = i[n];
                    Object.defineProperty(e.prototype, r, Object.getOwnPropertyDescriptor(t, r))
                }
            },
            e.prototype._recursivePostUpdateTransform = function() {
                this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform)
            },
            e.prototype.updateTransform = function() {
                this._boundsID++,
                this.transform.updateTransform(this.parent.transform),
                this.worldAlpha = this.alpha * this.parent.worldAlpha
            },
            e.prototype.getBounds = function(t, e) {
                return t || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, this.updateTransform(), this.parent = null)),
                this._bounds.updateID !== this._boundsID && (this.calculateBounds(), this._bounds.updateID = this._boundsID),
                e || (this._boundsRect || (this._boundsRect = new i.Rectangle), e = this._boundsRect),
                this._bounds.getRectangle(e)
            },
            e.prototype.getLocalBounds = function(t) {
                t || (this._localBoundsRect || (this._localBoundsRect = new i.Rectangle), t = this._localBoundsRect),
                this._localBounds || (this._localBounds = new n);
                var e = this.transform,
                r = this.parent;
                this.parent = null,
                this.transform = this._tempDisplayObjectParent.transform;
                var s = this._bounds,
                o = this._boundsID;
                this._bounds = this._localBounds;
                var a = this.getBounds(!1, t);
                return this.parent = r,
                this.transform = e,
                this._bounds = s,
                this._bounds.updateID += this._boundsID - o,
                a
            },
            e.prototype.toGlobal = function(t, i, e) {
                return void 0 === e && (e = !1),
                e || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)),
                this.worldTransform.apply(t, i)
            },
            e.prototype.toLocal = function(t, i, e, n) {
                return i && (t = i.toGlobal(t, e, n)),
                n || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)),
                this.worldTransform.applyInverse(t, e)
            },
            e.prototype.setParent = function(t) {
                if (!t || !t.addChild) throw new Error("setParent: Argument must be a Container");
                return t.addChild(this),
                t
            },
            e.prototype.setTransform = function(t, i, e, n, r, s, o, a, h) {
                return void 0 === t && (t = 0),
                void 0 === i && (i = 0),
                void 0 === e && (e = 1),
                void 0 === n && (n = 1),
                void 0 === r && (r = 0),
                void 0 === s && (s = 0),
                void 0 === o && (o = 0),
                void 0 === a && (a = 0),
                void 0 === h && (h = 0),
                this.position.x = t,
                this.position.y = i,
                this.scale.x = e || 1,
                this.scale.y = n || 1,
                this.rotation = r,
                this.skew.x = s,
                this.skew.y = o,
                this.pivot.x = a,
                this.pivot.y = h,
                this
            },
            e.prototype.destroy = function(t) {
                this.parent && this.parent.removeChild(this),
                this.removeAllListeners(),
                this.transform = null,
                this.parent = null,
                this._bounds = null,
                this._mask = null,
                this.filters = null,
                this.filterArea = null,
                this.hitArea = null,
                this.interactive = !1,
                this.interactiveChildren = !1,
                this._destroyed = !0
            },
            Object.defineProperty(e.prototype, "_tempDisplayObjectParent", {
                get: function() {
                    return null === this.tempDisplayObjectParent && (this.tempDisplayObjectParent = new a),
                    this.tempDisplayObjectParent
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.enableTempParent = function() {
                var t = this.parent;
                return this.parent = this._tempDisplayObjectParent,
                t
            },
            e.prototype.disableTempParent = function(t) {
                this.parent = t
            },
            Object.defineProperty(e.prototype, "x", {
                get: function() {
                    return this.position.x
                },
                set: function(t) {
                    this.transform.position.x = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "y", {
                get: function() {
                    return this.position.y
                },
                set: function(t) {
                    this.transform.position.y = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "worldTransform", {
                get: function() {
                    return this.transform.worldTransform
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "localTransform", {
                get: function() {
                    return this.transform.localTransform
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "position", {
                get: function() {
                    return this.transform.position
                },
                set: function(t) {
                    this.transform.position.copyFrom(t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "scale", {
                get: function() {
                    return this.transform.scale
                },
                set: function(t) {
                    this.transform.scale.copyFrom(t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "pivot", {
                get: function() {
                    return this.transform.pivot
                },
                set: function(t) {
                    this.transform.pivot.copyFrom(t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "skew", {
                get: function() {
                    return this.transform.skew
                },
                set: function(t) {
                    this.transform.skew.copyFrom(t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "rotation", {
                get: function() {
                    return this.transform.rotation
                },
                set: function(t) {
                    this.transform.rotation = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "angle", {
                get: function() {
                    return this.transform.rotation * i.RAD_TO_DEG
                },
                set: function(t) {
                    this.transform.rotation = t * i.DEG_TO_RAD
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "zIndex", {
                get: function() {
                    return this._zIndex
                },
                set: function(t) {
                    this._zIndex = t,
                    this.parent && (this.parent.sortDirty = !0)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "worldVisible", {
                get: function() {
                    var t = this;
                    do {
                        if (!t.visible) return ! 1;
                        t = t.parent
                    } while ( t );
                    return ! 0
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "mask", {
                get: function() {
                    return this._mask
                },
                set: function(t) {
                    var i;
                    this._mask && ((i = this._mask.maskObject || this._mask).renderable = !0, i.isMask = !1); (this._mask = t, this._mask) && ((i = this._mask.maskObject || this._mask).renderable = !1, i.isMask = !0)
                },
                enumerable: !1,
                configurable: !0
            }),
            e
        } (e.EventEmitter);
        exports.DisplayObject = o;
        var a = function(t) {
            function i() {
                var i = null !== t && t.apply(this, arguments) || this;
                return i.sortDirty = null,
                i
            }
            return s(i, t),
            i
        } (o);
        function h(t, i) {
            return t.zIndex === i.zIndex ? t._lastSortedIndex - i._lastSortedIndex: t.zIndex - i.zIndex
        }
        exports.TemporaryDisplayObject = a,
        o.prototype.displayObjectUpdateTransform = o.prototype.updateTransform;
        var l = function(i) {
            function n() {
                var e = i.call(this) || this;
                return e.children = [],
                e.sortableChildren = t.settings.SORTABLE_CHILDREN,
                e.sortDirty = !1,
                e
            }
            return s(n, i),
            n.prototype.onChildrenChange = function(t) {},
            n.prototype.addChild = function() {
                for (var t = arguments,
                i = [], e = 0; e < arguments.length; e++) i[e] = t[e];
                if (i.length > 1) for (var n = 0; n < i.length; n++) this.addChild(i[n]);
                else {
                    var r = i[0];
                    r.parent && r.parent.removeChild(r),
                    r.parent = this,
                    this.sortDirty = !0,
                    r.transform._parentID = -1,
                    this.children.push(r),
                    this._boundsID++,
                    this.onChildrenChange(this.children.length - 1),
                    this.emit("childAdded", r, this, this.children.length - 1),
                    r.emit("added", this)
                }
                return i[0]
            },
            n.prototype.addChildAt = function(t, i) {
                if (i < 0 || i > this.children.length) throw new Error(t + "addChildAt: The index " + i + " supplied is out of bounds " + this.children.length);
                return t.parent && t.parent.removeChild(t),
                t.parent = this,
                this.sortDirty = !0,
                t.transform._parentID = -1,
                this.children.splice(i, 0, t),
                this._boundsID++,
                this.onChildrenChange(i),
                t.emit("added", this),
                this.emit("childAdded", t, this, i),
                t
            },
            n.prototype.swapChildren = function(t, i) {
                if (t !== i) {
                    var e = this.getChildIndex(t),
                    n = this.getChildIndex(i);
                    this.children[e] = i,
                    this.children[n] = t,
                    this.onChildrenChange(e < n ? e: n)
                }
            },
            n.prototype.getChildIndex = function(t) {
                var i = this.children.indexOf(t);
                if ( - 1 === i) throw new Error("The supplied DisplayObject must be a child of the caller");
                return i
            },
            n.prototype.setChildIndex = function(t, i) {
                if (i < 0 || i >= this.children.length) throw new Error("The index " + i + " supplied is out of bounds " + this.children.length);
                var n = this.getChildIndex(t); (0, e.removeItems)(this.children, n, 1),
                this.children.splice(i, 0, t),
                this.onChildrenChange(i)
            },
            n.prototype.getChildAt = function(t) {
                if (t < 0 || t >= this.children.length) throw new Error("getChildAt: Index (" + t + ") does not exist.");
                return this.children[t]
            },
            n.prototype.removeChild = function() {
                for (var t = arguments,
                i = [], n = 0; n < arguments.length; n++) i[n] = t[n];
                if (i.length > 1) for (var r = 0; r < i.length; r++) this.removeChild(i[r]);
                else {
                    var s = i[0],
                    o = this.children.indexOf(s);
                    if ( - 1 === o) return null;
                    s.parent = null,
                    s.transform._parentID = -1,
                    (0, e.removeItems)(this.children, o, 1),
                    this._boundsID++,
                    this.onChildrenChange(o),
                    s.emit("removed", this),
                    this.emit("childRemoved", s, this, o)
                }
                return i[0]
            },
            n.prototype.removeChildAt = function(t) {
                var i = this.getChildAt(t);
                return i.parent = null,
                i.transform._parentID = -1,
                (0, e.removeItems)(this.children, t, 1),
                this._boundsID++,
                this.onChildrenChange(t),
                i.emit("removed", this),
                this.emit("childRemoved", i, this, t),
                i
            },
            n.prototype.removeChildren = function(t, i) {
                void 0 === t && (t = 0),
                void 0 === i && (i = this.children.length);
                var e, n = t,
                r = i - n;
                if (r > 0 && r <= i) {
                    e = this.children.splice(n, r);
                    for (var s = 0; s < e.length; ++s) e[s].parent = null,
                    e[s].transform && (e[s].transform._parentID = -1);
                    this._boundsID++,
                    this.onChildrenChange(t);
                    for (s = 0; s < e.length; ++s) e[s].emit("removed", this),
                    this.emit("childRemoved", e[s], this, s);
                    return e
                }
                if (0 === r && 0 === this.children.length) return [];
                throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
            },
            n.prototype.sortChildren = function() {
                for (var t = !1,
                i = 0,
                e = this.children.length; i < e; ++i) {
                    var n = this.children[i];
                    n._lastSortedIndex = i,
                    t || 0 === n.zIndex || (t = !0)
                }
                t && this.children.length > 1 && this.children.sort(h),
                this.sortDirty = !1
            },
            n.prototype.updateTransform = function() {
                this.sortableChildren && this.sortDirty && this.sortChildren(),
                this._boundsID++,
                this.transform.updateTransform(this.parent.transform),
                this.worldAlpha = this.alpha * this.parent.worldAlpha;
                for (var t = 0,
                i = this.children.length; t < i; ++t) {
                    var e = this.children[t];
                    e.visible && e.updateTransform()
                }
            },
            n.prototype.calculateBounds = function() {
                this._bounds.clear(),
                this._calculateBounds();
                for (var t = 0; t < this.children.length; t++) {
                    var i = this.children[t];
                    if (i.visible && i.renderable) if (i.calculateBounds(), i._mask) {
                        var e = i._mask.maskObject || i._mask;
                        e.calculateBounds(),
                        this._bounds.addBoundsMask(i._bounds, e._bounds)
                    } else i.filterArea ? this._bounds.addBoundsArea(i._bounds, i.filterArea) : this._bounds.addBounds(i._bounds)
                }
                this._bounds.updateID = this._boundsID
            },
            n.prototype.getLocalBounds = function(t, e) {
                void 0 === e && (e = !1);
                var n = i.prototype.getLocalBounds.call(this, t);
                if (!e) for (var r = 0,
                s = this.children.length; r < s; ++r) {
                    var o = this.children[r];
                    o.visible && o.updateTransform()
                }
                return n
            },
            n.prototype._calculateBounds = function() {},
            n.prototype.render = function(t) {
                if (this.visible && !(this.worldAlpha <= 0) && this.renderable) if (this._mask || this.filters && this.filters.length) this.renderAdvanced(t);
                else {
                    this._render(t);
                    for (var i = 0,
                    e = this.children.length; i < e; ++i) this.children[i].render(t)
                }
            },
            n.prototype.renderAdvanced = function(t) {
                t.batch.flush();
                var i = this.filters,
                e = this._mask;
                if (i) {
                    this._enabledFilters || (this._enabledFilters = []),
                    this._enabledFilters.length = 0;
                    for (var n = 0; n < i.length; n++) i[n].enabled && this._enabledFilters.push(i[n]);
                    this._enabledFilters.length && t.filter.push(this, this._enabledFilters)
                }
                e && t.mask.push(this, this._mask),
                this._render(t);
                n = 0;
                for (var r = this.children.length; n < r; n++) this.children[n].render(t);
                t.batch.flush(),
                e && t.mask.pop(this),
                i && this._enabledFilters && this._enabledFilters.length && t.filter.pop()
            },
            n.prototype._render = function(t) {},
            n.prototype.destroy = function(t) {
                i.prototype.destroy.call(this),
                this.sortDirty = !1;
                var e = "boolean" == typeof t ? t: t && t.children,
                n = this.removeChildren(0, this.children.length);
                if (e) for (var r = 0; r < n.length; ++r) n[r].destroy(t)
            },
            Object.defineProperty(n.prototype, "width", {
                get: function() {
                    return this.scale.x * this.getLocalBounds().width
                },
                set: function(t) {
                    var i = this.getLocalBounds().width;
                    this.scale.x = 0 !== i ? t / i: 1,
                    this._width = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "height", {
                get: function() {
                    return this.scale.y * this.getLocalBounds().height
                },
                set: function(t) {
                    var i = this.getLocalBounds().height;
                    this.scale.y = 0 !== i ? t / i: 1,
                    this._height = t
                },
                enumerable: !1,
                configurable: !0
            }),
            n
        } (o);
        exports.Container = l,
        l.prototype.containerUpdateTransform = l.prototype.updateTransform;
    },
    {
        "@pixi/settings": "APb3",
        "@pixi/math": "Z5os",
        "@pixi/utils": "KFvg"
    }],
    "reqQ": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.graphicsUtils = exports.LineStyle = exports.LINE_JOIN = exports.LINE_CAP = exports.GraphicsGeometry = exports.GraphicsData = exports.Graphics = exports.GRAPHICS_CURVES = exports.FillStyle = void 0;
        var t, e, i = require("@pixi/core"),
        r = require("@pixi/math"),
        s = require("@pixi/utils"),
        n = require("@pixi/constants"),
        h = require("@pixi/display");
        exports.LINE_JOIN = t,
        function(t) {
            t.MITER = "miter",
            t.BEVEL = "bevel",
            t.ROUND = "round"
        } (t || (exports.LINE_JOIN = t = {})),
        exports.LINE_CAP = e,
        function(t) {
            t.BUTT = "butt",
            t.ROUND = "round",
            t.SQUARE = "square"
        } (e || (exports.LINE_CAP = e = {}));
        var a = {
            adaptive: !0,
            maxLength: 10,
            minSegments: 8,
            maxSegments: 2048,
            epsilon: 1e-4,
            _segmentsCount: function(t, e) {
                if (void 0 === e && (e = 20), !this.adaptive || !t || isNaN(t)) return e;
                var i = Math.ceil(t / this.maxLength);
                return i < this.minSegments ? i = this.minSegments: i > this.maxSegments && (i = this.maxSegments),
                i
            }
        };
        exports.GRAPHICS_CURVES = a;
        var o = function() {
            function t() {
                this.color = 16777215,
                this.alpha = 1,
                this.texture = i.Texture.WHITE,
                this.matrix = null,
                this.visible = !1,
                this.reset()
            }
            return t.prototype.clone = function() {
                var e = new t;
                return e.color = this.color,
                e.alpha = this.alpha,
                e.texture = this.texture,
                e.matrix = this.matrix,
                e.visible = this.visible,
                e
            },
            t.prototype.reset = function() {
                this.color = 16777215,
                this.alpha = 1,
                this.texture = i.Texture.WHITE,
                this.matrix = null,
                this.visible = !1
            },
            t.prototype.destroy = function() {
                this.texture = null,
                this.matrix = null
            },
            t
        } ();
        exports.FillStyle = o;
        var l = function(t, e) {
            return (l = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(t, e) {
                t.__proto__ = e
            } ||
            function(t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        };
        function u(t, e) {
            function i() {
                this.constructor = t
            }
            l(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }
        var p = {
            build: function(t) {
                t.points = t.shape.points.slice()
            },
            triangulate: function(t, e) {
                var i = t.points,
                r = t.holes,
                n = e.points,
                h = e.indices;
                if (i.length >= 6) {
                    for (var a = [], o = 0; o < r.length; o++) {
                        var l = r[o];
                        a.push(i.length / 2),
                        i = i.concat(l.points)
                    }
                    var u = (0, s.earcut)(i, a, 2);
                    if (!u) return;
                    var p = n.length / 2;
                    for (o = 0; o < u.length; o += 3) h.push(u[o] + p),
                    h.push(u[o + 1] + p),
                    h.push(u[o + 2] + p);
                    for (o = 0; o < i.length; o++) n.push(i[o])
                }
            }
        },
        c = {
            build: function(t) {
                var e, i, s = t.shape,
                n = t.points,
                h = s.x,
                a = s.y;
                if (n.length = 0, t.type === r.SHAPES.CIRC) e = s.radius,
                i = s.radius;
                else {
                    var o = t.shape;
                    e = o.width,
                    i = o.height
                }
                if (0 !== e && 0 !== i) {
                    var l = Math.floor(30 * Math.sqrt(s.radius)) || Math.floor(15 * Math.sqrt(e + i));
                    l /= 2.3;
                    for (var u = 2 * Math.PI / l,
                    p = 0; p < l - .5; p++) n.push(h + Math.sin( - u * p) * e, a + Math.cos( - u * p) * i);
                    n.push(n[0], n[1])
                }
            },
            triangulate: function(t, e) {
                var i = t.points,
                r = e.points,
                s = e.indices,
                n = r.length / 2,
                h = n,
                a = t.shape,
                o = t.matrix,
                l = a.x,
                u = a.y;
                r.push(t.matrix ? o.a * l + o.c * u + o.tx: l, t.matrix ? o.b * l + o.d * u + o.ty: u);
                for (var p = 0; p < i.length; p += 2) r.push(i[p], i[p + 1]),
                s.push(n++, h, n)
            }
        },
        d = {
            build: function(t) {
                var e = t.shape,
                i = e.x,
                r = e.y,
                s = e.width,
                n = e.height,
                h = t.points;
                h.length = 0,
                h.push(i, r, i + s, r, i + s, r + n, i, r + n)
            },
            triangulate: function(t, e) {
                var i = t.points,
                r = e.points,
                s = r.length / 2;
                r.push(i[0], i[1], i[2], i[3], i[6], i[7], i[4], i[5]),
                e.indices.push(s, s + 1, s + 2, s + 1, s + 2, s + 3)
            }
        };
        function f(t, e, i) {
            return t + (e - t) * i
        }
        function y(t, e, i, r, s, n, h) {
            void 0 === h && (h = []);
            for (var a = h,
            o = 0,
            l = 0,
            u = 0,
            p = 0,
            c = 0,
            d = 0,
            y = 0,
            g = 0; y <= 20; ++y) o = f(t, i, g = y / 20),
            l = f(e, r, g),
            u = f(i, s, g),
            p = f(r, n, g),
            c = f(o, u, g),
            d = f(l, p, g),
            a.push(c, d);
            return a
        }
        var g = {
            build: function(t) {
                var e = t.shape,
                i = t.points,
                r = e.x,
                s = e.y,
                n = e.width,
                h = e.height,
                a = Math.max(0, Math.min(e.radius, Math.min(n, h) / 2));
                i.length = 0,
                a ? (y(r, s + a, r, s, r + a, s, i), y(r + n - a, s, r + n, s, r + n, s + a, i), y(r + n, s + h - a, r + n, s + h, r + n - a, s + h, i), y(r + a, s + h, r, s + h, r, s + h - a, i)) : i.push(r, s, r + n, s, r + n, s + h, r, s + h)
            },
            triangulate: function(t, e) {
                for (var i = t.points,
                r = e.points,
                n = e.indices,
                h = r.length / 2,
                a = (0, s.earcut)(i, null, 2), o = 0, l = a.length; o < l; o += 3) n.push(a[o] + h),
                n.push(a[o + 1] + h),
                n.push(a[o + 2] + h);
                for (o = 0, l = i.length; o < l; o++) r.push(i[o], i[++o])
            }
        };
        function v(t, e, i, r, s, n, h, a) {
            var o, l;
            h ? (o = r, l = -i) : (o = -r, l = i);
            var u = t - i * s + o,
            p = e - r * s + l,
            c = t + i * n + o,
            d = e + r * n + l;
            return a.push(u, p),
            a.push(c, d),
            2
        }
        function b(t, e, i, r, s, n, h, a) {
            var o = i - t,
            l = r - e,
            u = Math.atan2(o, l),
            p = Math.atan2(s - t, n - e);
            a && u < p ? u += 2 * Math.PI: !a && u > p && (p += 2 * Math.PI);
            var c = u,
            d = p - u,
            f = Math.abs(d),
            y = Math.sqrt(o * o + l * l),
            g = 1 + (15 * f * Math.sqrt(y) / Math.PI >> 0),
            v = d / g;
            if (c += v, a) {
                h.push(t, e),
                h.push(i, r);
                for (var b = 1,
                x = c; b < g; b++, x += v) h.push(t, e),
                h.push(t + Math.sin(x) * y, e + Math.cos(x) * y);
                h.push(t, e),
                h.push(s, n)
            } else {
                h.push(i, r),
                h.push(t, e);
                for (b = 1, x = c; b < g; b++, x += v) h.push(t + Math.sin(x) * y, e + Math.cos(x) * y),
                h.push(t, e);
                h.push(s, n),
                h.push(t, e)
            }
            return 2 * g
        }
        function x(i, s) {
            var n = i.shape,
            h = i.points || n.points.slice(),
            o = s.closePointEps;
            if (0 !== h.length) {
                var l = i.lineStyle,
                u = new r.Point(h[0], h[1]),
                p = new r.Point(h[h.length - 2], h[h.length - 1]),
                c = n.type !== r.SHAPES.POLY || n.closeStroke,
                d = Math.abs(u.x - p.x) < o && Math.abs(u.y - p.y) < o;
                if (c) {
                    h = h.slice(),
                    d && (h.pop(), h.pop(), p.set(h[h.length - 2], h[h.length - 1]));
                    var f = .5 * (u.x + p.x),
                    y = .5 * (p.y + u.y);
                    h.unshift(f, y),
                    h.push(f, y)
                }
                var g = s.points,
                x = h.length / 2,
                m = h.length,
                _ = g.length / 2,
                S = l.width / 2,
                P = S * S,
                w = l.miterLimit * l.miterLimit,
                M = h[0],
                D = h[1],
                T = h[2],
                A = h[3],
                E = 0,
                I = 0,
                C = -(D - A),
                R = M - T,
                B = 0,
                L = 0,
                O = Math.sqrt(C * C + R * R);
                C /= O,
                R /= O,
                C *= S,
                R *= S;
                var U = l.alignment,
                N = 2 * (1 - U),
                H = 2 * U;
                c || (l.cap === e.ROUND ? m += b(M - C * (N - H) * .5, D - R * (N - H) * .5, M - C * N, D - R * N, M + C * H, D + R * H, g, !0) + 2 : l.cap === e.SQUARE && (m += v(M, D, C, R, N, H, !0, g))),
                g.push(M - C * N, D - R * N),
                g.push(M + C * H, D + R * H);
                for (var F = 1; F < x - 1; ++F) {
                    M = h[2 * (F - 1)],
                    D = h[2 * (F - 1) + 1],
                    T = h[2 * F],
                    A = h[2 * F + 1],
                    E = h[2 * (F + 1)],
                    I = h[2 * (F + 1) + 1],
                    C = -(D - A),
                    R = M - T,
                    C /= O = Math.sqrt(C * C + R * R),
                    R /= O,
                    C *= S,
                    R *= S,
                    B = -(A - I),
                    L = T - E,
                    B /= O = Math.sqrt(B * B + L * L),
                    L /= O,
                    B *= S,
                    L *= S;
                    var j = T - M,
                    q = D - A,
                    z = T - E,
                    G = I - A,
                    k = q * z - G * j,
                    W = k < 0;
                    if (Math.abs(k) < .1) g.push(T - C * N, A - R * N),
                    g.push(T + C * H, A + R * H);
                    else {
                        var V = ( - C + M) * ( - R + A) - ( - C + T) * ( - R + D),
                        Y = ( - B + E) * ( - L + A) - ( - B + T) * ( - L + I),
                        Q = (j * Y - z * V) / k,
                        X = (G * V - q * Y) / k,
                        J = (Q - T) * (Q - T) + (X - A) * (X - A),
                        Z = T + (Q - T) * N,
                        K = A + (X - A) * N,
                        $ = T - (Q - T) * H,
                        tt = A - (X - A) * H,
                        et = W ? N: H;
                        J <= Math.min(j * j + q * q, z * z + G * G) + et * et * P ? l.join === t.BEVEL || J / P > w ? (W ? (g.push(Z, K), g.push(T + C * H, A + R * H), g.push(Z, K), g.push(T + B * H, A + L * H)) : (g.push(T - C * N, A - R * N), g.push($, tt), g.push(T - B * N, A - L * N), g.push($, tt)), m += 2) : l.join === t.ROUND ? W ? (g.push(Z, K), g.push(T + C * H, A + R * H), m += b(T, A, T + C * H, A + R * H, T + B * H, A + L * H, g, !0) + 4, g.push(Z, K), g.push(T + B * H, A + L * H)) : (g.push(T - C * N, A - R * N), g.push($, tt), m += b(T, A, T - C * N, A - R * N, T - B * N, A - L * N, g, !1) + 4, g.push(T - B * N, A - L * N), g.push($, tt)) : (g.push(Z, K), g.push($, tt)) : (g.push(T - C * N, A - R * N), g.push(T + C * H, A + R * H), l.join === t.BEVEL || J / P > w || (l.join === t.ROUND ? m += W ? b(T, A, T + C * H, A + R * H, T + B * H, A + L * H, g, !0) + 2 : b(T, A, T - C * N, A - R * N, T - B * N, A - L * N, g, !1) + 2 : (W ? (g.push($, tt), g.push($, tt)) : (g.push(Z, K), g.push(Z, K)), m += 2)), g.push(T - B * N, A - L * N), g.push(T + B * H, A + L * H), m += 2)
                    }
                }
                M = h[2 * (x - 2)],
                D = h[2 * (x - 2) + 1],
                T = h[2 * (x - 1)],
                C = -(D - (A = h[2 * (x - 1) + 1])),
                R = M - T,
                C /= O = Math.sqrt(C * C + R * R),
                R /= O,
                C *= S,
                R *= S,
                g.push(T - C * N, A - R * N),
                g.push(T + C * H, A + R * H),
                c || (l.cap === e.ROUND ? m += b(T - C * (N - H) * .5, A - R * (N - H) * .5, T - C * N, A - R * N, T + C * H, A + R * H, g, !1) + 2 : l.cap === e.SQUARE && (m += v(T, A, C, R, N, H, !1, g)));
                var it = s.indices,
                rt = a.epsilon * a.epsilon;
                for (F = _; F < m + _ - 2; ++F) M = g[2 * F],
                D = g[2 * F + 1],
                T = g[2 * (F + 1)],
                A = g[2 * (F + 1) + 1],
                E = g[2 * (F + 2)],
                I = g[2 * (F + 2) + 1],
                Math.abs(M * (A - I) + T * (I - D) + E * (D - A)) < rt || it.push(F, F + 1, F + 2)
            }
        }
        function m(t, e) {
            var i = 0,
            s = t.shape,
            n = t.points || s.points,
            h = s.type !== r.SHAPES.POLY || s.closeStroke;
            if (0 !== n.length) {
                var a = e.points,
                o = e.indices,
                l = n.length / 2,
                u = a.length / 2,
                p = u;
                for (a.push(n[0], n[1]), i = 1; i < l; i++) a.push(n[2 * i], n[2 * i + 1]),
                o.push(p, p + 1),
                p++;
                h && o.push(p, u)
            }
        }
        function _(t, e) {
            t.lineStyle.native ? m(t, e) : x(t, e)
        }
        var S, P = function() {
            function t() {}
            return t.curveTo = function(t, e, i, r, s, n) {
                var h = n[n.length - 2],
                a = n[n.length - 1] - e,
                o = h - t,
                l = r - e,
                u = i - t,
                p = Math.abs(a * u - o * l);
                if (p < 1e-8 || 0 === s) return n[n.length - 2] === t && n[n.length - 1] === e || n.push(t, e),
                null;
                var c = a * a + o * o,
                d = l * l + u * u,
                f = a * l + o * u,
                y = s * Math.sqrt(c) / p,
                g = s * Math.sqrt(d) / p,
                v = y * f / c,
                b = g * f / d,
                x = y * u + g * o,
                m = y * l + g * a,
                _ = o * (g + v),
                S = a * (g + v),
                P = u * (y + b),
                w = l * (y + b);
                return {
                    cx: x + t,
                    cy: m + e,
                    radius: s,
                    startAngle: Math.atan2(S - m, _ - x),
                    endAngle: Math.atan2(w - m, P - x),
                    anticlockwise: o * l > u * a
                }
            },
            t.arc = function(t, e, i, s, n, h, o, l, u) {
                for (var p = o - h,
                c = a._segmentsCount(Math.abs(p) * n, 40 * Math.ceil(Math.abs(p) / r.PI_2)), d = p / (2 * c), f = 2 * d, y = Math.cos(d), g = Math.sin(d), v = c - 1, b = v % 1 / v, x = 0; x <= v; ++x) {
                    var m = d + h + f * (x + b * x),
                    _ = Math.cos(m),
                    S = -Math.sin(m);
                    u.push((y * _ + g * S) * n + i, (y * -S + g * _) * n + s)
                }
            },
            t
        } (),
        w = function() {
            function t() {}
            return t.curveLength = function(t, e, i, r, s, n, h, a) {
                for (var o = 0,
                l = 0,
                u = 0,
                p = 0,
                c = 0,
                d = 0,
                f = 0,
                y = 0,
                g = 0,
                v = 0,
                b = 0,
                x = t,
                m = e,
                _ = 1; _ <= 10; ++_) v = x - (y = (f = (d = (c = 1 - (l = _ / 10)) * c) * c) * t + 3 * d * l * i + 3 * c * (u = l * l) * s + (p = u * l) * h),
                b = m - (g = f * e + 3 * d * l * r + 3 * c * u * n + p * a),
                x = y,
                m = g,
                o += Math.sqrt(v * v + b * b);
                return o
            },
            t.curveTo = function(e, i, r, s, n, h, o) {
                var l = o[o.length - 2],
                u = o[o.length - 1];
                o.length -= 2;
                var p = a._segmentsCount(t.curveLength(l, u, e, i, r, s, n, h)),
                c = 0,
                d = 0,
                f = 0,
                y = 0,
                g = 0;
                o.push(l, u);
                for (var v = 1,
                b = 0; v <= p; ++v) f = (d = (c = 1 - (b = v / p)) * c) * c,
                g = (y = b * b) * b,
                o.push(f * l + 3 * d * b * e + 3 * c * y * r + g * n, f * u + 3 * d * b * i + 3 * c * y * s + g * h)
            },
            t
        } (),
        M = function() {
            function t() {}
            return t.curveLength = function(t, e, i, r, s, n) {
                var h = t - 2 * i + s,
                a = e - 2 * r + n,
                o = 2 * i - 2 * t,
                l = 2 * r - 2 * e,
                u = 4 * (h * h + a * a),
                p = 4 * (h * o + a * l),
                c = o * o + l * l,
                d = 2 * Math.sqrt(u + p + c),
                f = Math.sqrt(u),
                y = 2 * u * f,
                g = 2 * Math.sqrt(c),
                v = p / f;
                return (y * d + f * p * (d - g) + (4 * c * u - p * p) * Math.log((2 * f + v + d) / (v + g))) / (4 * y)
            },
            t.curveTo = function(e, i, r, s, n) {
                for (var h = n[n.length - 2], o = n[n.length - 1], l = a._segmentsCount(t.curveLength(h, o, e, i, r, s)), u = 0, p = 0, c = 1; c <= l; ++c) {
                    var d = c / l;
                    u = h + (e - h) * d,
                    p = o + (i - o) * d,
                    n.push(u + (e + (r - e) * d - u) * d, p + (i + (s - i) * d - p) * d)
                }
            },
            t
        } (),
        D = function() {
            function t() {
                this.reset()
            }
            return t.prototype.begin = function(t, e, i) {
                this.reset(),
                this.style = t,
                this.start = e,
                this.attribStart = i
            },
            t.prototype.end = function(t, e) {
                this.attribSize = e - this.attribStart,
                this.size = t - this.start
            },
            t.prototype.reset = function() {
                this.style = null,
                this.size = 0,
                this.start = 0,
                this.attribStart = 0,
                this.attribSize = 0
            },
            t
        } (),
        T = ((S = {})[r.SHAPES.POLY] = p, S[r.SHAPES.CIRC] = c, S[r.SHAPES.ELIP] = c, S[r.SHAPES.RECT] = d, S[r.SHAPES.RREC] = g, S),
        A = [],
        E = [],
        I = function() {
            function t(t, e, i, r) {
                void 0 === e && (e = null),
                void 0 === i && (i = null),
                void 0 === r && (r = null),
                this.shape = t,
                this.lineStyle = i,
                this.fillStyle = e,
                this.matrix = r,
                this.type = t.type,
                this.points = [],
                this.holes = []
            }
            return t.prototype.clone = function() {
                return new t(this.shape, this.fillStyle, this.lineStyle, this.matrix)
            },
            t.prototype.destroy = function() {
                this.shape = null,
                this.holes.length = 0,
                this.holes = null,
                this.points.length = 0,
                this.points = null,
                this.lineStyle = null,
                this.fillStyle = null
            },
            t
        } ();
        exports.GraphicsData = I;
        var C = new r.Point,
        R = new h.Bounds,
        B = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.uvsFloat32 = null,
                e.indicesUint16 = null,
                e.points = [],
                e.colors = [],
                e.uvs = [],
                e.indices = [],
                e.textureIds = [],
                e.graphicsData = [],
                e.dirty = 0,
                e.batchDirty = -1,
                e.cacheDirty = -1,
                e.clearDirty = 0,
                e.drawCalls = [],
                e.batches = [],
                e.shapeIndex = 0,
                e._bounds = new h.Bounds,
                e.boundsDirty = -1,
                e.boundsPadding = 0,
                e.batchable = !1,
                e.indicesUint16 = null,
                e.uvsFloat32 = null,
                e.closePointEps = 1e-4,
                e
            }
            return u(e, t),
            Object.defineProperty(e.prototype, "bounds", {
                get: function() {
                    return this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.calculateBounds()),
                    this._bounds
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.invalidate = function() {
                this.boundsDirty = -1,
                this.dirty++,
                this.batchDirty++,
                this.shapeIndex = 0,
                this.points.length = 0,
                this.colors.length = 0,
                this.uvs.length = 0,
                this.indices.length = 0,
                this.textureIds.length = 0;
                for (var t = 0; t < this.drawCalls.length; t++) this.drawCalls[t].texArray.clear(),
                E.push(this.drawCalls[t]);
                this.drawCalls.length = 0;
                for (t = 0; t < this.batches.length; t++) {
                    var e = this.batches[t];
                    e.reset(),
                    A.push(e)
                }
                this.batches.length = 0
            },
            e.prototype.clear = function() {
                return this.graphicsData.length > 0 && (this.invalidate(), this.clearDirty++, this.graphicsData.length = 0),
                this
            },
            e.prototype.drawShape = function(t, e, i, r) {
                void 0 === e && (e = null),
                void 0 === i && (i = null),
                void 0 === r && (r = null);
                var s = new I(t, e, i, r);
                return this.graphicsData.push(s),
                this.dirty++,
                this
            },
            e.prototype.drawHole = function(t, e) {
                if (void 0 === e && (e = null), !this.graphicsData.length) return null;
                var i = new I(t, null, null, e),
                r = this.graphicsData[this.graphicsData.length - 1];
                return i.lineStyle = r.lineStyle,
                r.holes.push(i),
                this.dirty++,
                this
            },
            e.prototype.destroy = function() {
                t.prototype.destroy.call(this);
                for (var e = 0; e < this.graphicsData.length; ++e) this.graphicsData[e].destroy();
                this.points.length = 0,
                this.points = null,
                this.colors.length = 0,
                this.colors = null,
                this.uvs.length = 0,
                this.uvs = null,
                this.indices.length = 0,
                this.indices = null,
                this.indexBuffer.destroy(),
                this.indexBuffer = null,
                this.graphicsData.length = 0,
                this.graphicsData = null,
                this.drawCalls.length = 0,
                this.drawCalls = null,
                this.batches.length = 0,
                this.batches = null,
                this._bounds = null
            },
            e.prototype.containsPoint = function(t) {
                for (var e = this.graphicsData,
                i = 0; i < e.length; ++i) {
                    var r = e[i];
                    if (r.fillStyle.visible && (r.shape && (r.matrix ? r.matrix.applyInverse(t, C) : C.copyFrom(t), r.shape.contains(C.x, C.y)))) {
                        var s = !1;
                        if (r.holes) for (var n = 0; n < r.holes.length; n++) {
                            if (r.holes[n].shape.contains(C.x, C.y)) {
                                s = !0;
                                break
                            }
                        }
                        if (!s) return ! 0
                    }
                }
                return ! 1
            },
            e.prototype.updateBatches = function(t) {
                if (this.graphicsData.length) {
                    if (this.validateBatching()) {
                        this.cacheDirty = this.dirty;
                        var e = this.uvs,
                        i = this.graphicsData,
                        r = null,
                        s = null;
                        this.batches.length > 0 && (s = (r = this.batches[this.batches.length - 1]).style);
                        for (var h = this.shapeIndex; h < i.length; h++) {
                            this.shapeIndex++;
                            var a = i[h],
                            o = a.fillStyle,
                            l = a.lineStyle;
                            T[a.type].build(a),
                            a.matrix && this.transformPoints(a.points, a.matrix);
                            for (var u = 0; u < 2; u++) {
                                var p = 0 === u ? o: l;
                                if (p.visible) {
                                    var c = p.texture.baseTexture,
                                    d = this.indices.length,
                                    f = this.points.length / 2;
                                    c.wrapMode = n.WRAP_MODES.REPEAT,
                                    0 === u ? this.processFill(a) : this.processLine(a);
                                    var y = this.points.length / 2 - f;
                                    0 !== y && (r && !this._compareStyles(s, p) && (r.end(d, f), r = null), r || ((r = A.pop() || new D).begin(p, d, f), this.batches.push(r), s = p), this.addUvs(this.points, e, p.texture, f, y, p.matrix))
                                }
                            }
                        }
                        var g = this.indices.length,
                        v = this.points.length / 2;
                        if (r && r.end(g, v), 0 !== this.batches.length) {
                            if (this.indicesUint16 && this.indices.length === this.indicesUint16.length) this.indicesUint16.set(this.indices);
                            else {
                                var b = v > 65535 && t;
                                this.indicesUint16 = b ? new Uint32Array(this.indices) : new Uint16Array(this.indices)
                            }
                            this.batchable = this.isBatchable(),
                            this.batchable ? this.packBatches() : this.buildDrawCalls()
                        } else this.batchable = !0
                    }
                } else this.batchable = !0
            },
            e.prototype._compareStyles = function(t, e) {
                return ! (!t || !e) && (t.texture.baseTexture === e.texture.baseTexture && (t.color + t.alpha === e.color + e.alpha && !!t.native == !!e.native))
            },
            e.prototype.validateBatching = function() {
                if (this.dirty === this.cacheDirty || !this.graphicsData.length) return ! 1;
                for (var t = 0,
                e = this.graphicsData.length; t < e; t++) {
                    var i = this.graphicsData[t],
                    r = i.fillStyle,
                    s = i.lineStyle;
                    if (r && !r.texture.baseTexture.valid) return ! 1;
                    if (s && !s.texture.baseTexture.valid) return ! 1
                }
                return ! 0
            },
            e.prototype.packBatches = function() {
                this.batchDirty++,
                this.uvsFloat32 = new Float32Array(this.uvs);
                for (var t = this.batches,
                e = 0,
                i = t.length; e < i; e++) for (var r = t[e], s = 0; s < r.size; s++) {
                    var n = r.start + s;
                    this.indicesUint16[n] = this.indicesUint16[n] - r.attribStart
                }
            },
            e.prototype.isBatchable = function() {
                if (this.points.length > 131070) return ! 1;
                for (var t = this.batches,
                i = 0; i < t.length; i++) if (t[i].style.native) return ! 1;
                return this.points.length < 2 * e.BATCHABLE_SIZE
            },
            e.prototype.buildDrawCalls = function() {
                for (var t = ++i.BaseTexture._globalBatch,
                e = 0; e < this.drawCalls.length; e++) this.drawCalls[e].texArray.clear(),
                E.push(this.drawCalls[e]);
                this.drawCalls.length = 0;
                var r = this.colors,
                s = this.textureIds,
                h = E.pop();
                h || ((h = new i.BatchDrawCall).texArray = new i.BatchTextureArray),
                h.texArray.count = 0,
                h.start = 0,
                h.size = 0,
                h.type = n.DRAW_MODES.TRIANGLES;
                var a = 0,
                o = null,
                l = 0,
                u = !1,
                p = n.DRAW_MODES.TRIANGLES,
                c = 0;
                this.drawCalls.push(h);
                for (e = 0; e < this.batches.length; e++) {
                    var d = this.batches[e],
                    f = d.style,
                    y = f.texture.baseTexture;
                    u !== !!f.native && (p = (u = !!f.native) ? n.DRAW_MODES.LINES: n.DRAW_MODES.TRIANGLES, o = null, a = 8, t++),
                    o !== y && (o = y, y._batchEnabled !== t && (8 === a && (t++, a = 0, h.size > 0 && ((h = E.pop()) || ((h = new i.BatchDrawCall).texArray = new i.BatchTextureArray), this.drawCalls.push(h)), h.start = c, h.size = 0, h.texArray.count = 0, h.type = p), y.touched = 1, y._batchEnabled = t, y._batchLocation = a, y.wrapMode = 10497, h.texArray.elements[h.texArray.count++] = y, a++)),
                    h.size += d.size,
                    c += d.size,
                    l = y._batchLocation,
                    this.addColors(r, f.color, f.alpha, d.attribSize),
                    this.addTextureIds(s, l, d.attribSize)
                }
                i.BaseTexture._globalBatch = t,
                this.packAttributes()
            },
            e.prototype.packAttributes = function() {
                for (var t = this.points,
                e = this.uvs,
                i = this.colors,
                r = this.textureIds,
                s = new ArrayBuffer(3 * t.length * 4), n = new Float32Array(s), h = new Uint32Array(s), a = 0, o = 0; o < t.length / 2; o++) n[a++] = t[2 * o],
                n[a++] = t[2 * o + 1],
                n[a++] = e[2 * o],
                n[a++] = e[2 * o + 1],
                h[a++] = i[o],
                n[a++] = r[o];
                this._buffer.update(s),
                this._indexBuffer.update(this.indicesUint16)
            },
            e.prototype.processFill = function(t) {
                t.holes.length ? (this.processHoles(t.holes), p.triangulate(t, this)) : T[t.type].triangulate(t, this)
            },
            e.prototype.processLine = function(t) {
                _(t, this);
                for (var e = 0; e < t.holes.length; e++) _(t.holes[e], this)
            },
            e.prototype.processHoles = function(t) {
                for (var e = 0; e < t.length; e++) {
                    var i = t[e];
                    T[i.type].build(i),
                    i.matrix && this.transformPoints(i.points, i.matrix)
                }
            },
            e.prototype.calculateBounds = function() {
                var t = this._bounds,
                e = R,
                i = r.Matrix.IDENTITY;
                this._bounds.clear(),
                e.clear();
                for (var s = 0; s < this.graphicsData.length; s++) {
                    var n = this.graphicsData[s],
                    h = n.shape,
                    a = n.type,
                    o = n.lineStyle,
                    l = n.matrix || r.Matrix.IDENTITY,
                    u = 0;
                    if (o && o.visible) {
                        var p = o.alignment;
                        u = o.width,
                        a === r.SHAPES.POLY ? u *= .5 + Math.abs(.5 - p) : u *= Math.max(0, p)
                    }
                    if (i !== l && (e.isEmpty() || (t.addBoundsMatrix(e, i), e.clear()), i = l), a === r.SHAPES.RECT || a === r.SHAPES.RREC) {
                        var c = h;
                        e.addFramePad(c.x, c.y, c.x + c.width, c.y + c.height, u, u)
                    } else if (a === r.SHAPES.CIRC) {
                        var d = h;
                        e.addFramePad(d.x, d.y, d.x, d.y, d.radius + u, d.radius + u)
                    } else if (a === r.SHAPES.ELIP) {
                        var f = h;
                        e.addFramePad(f.x, f.y, f.x, f.y, f.width + u, f.height + u)
                    } else {
                        var y = h;
                        t.addVerticesMatrix(i, y.points, 0, y.points.length, u, u)
                    }
                }
                e.isEmpty() || t.addBoundsMatrix(e, i),
                t.pad(this.boundsPadding, this.boundsPadding)
            },
            e.prototype.transformPoints = function(t, e) {
                for (var i = 0; i < t.length / 2; i++) {
                    var r = t[2 * i],
                    s = t[2 * i + 1];
                    t[2 * i] = e.a * r + e.c * s + e.tx,
                    t[2 * i + 1] = e.b * r + e.d * s + e.ty
                }
            },
            e.prototype.addColors = function(t, e, i, r) {
                for (var n = (e >> 16) + (65280 & e) + ((255 & e) << 16), h = (0, s.premultiplyTint)(n, i); r-->0;) t.push(h)
            },
            e.prototype.addTextureIds = function(t, e, i) {
                for (; i-->0;) t.push(e)
            },
            e.prototype.addUvs = function(t, e, i, r, s, n) {
                void 0 === n && (n = null);
                for (var h = 0,
                a = e.length,
                o = i.frame; h < s;) {
                    var l = t[2 * (r + h)],
                    u = t[2 * (r + h) + 1];
                    if (n) {
                        var p = n.a * l + n.c * u + n.tx;
                        u = n.b * l + n.d * u + n.ty,
                        l = p
                    }
                    h++,
                    e.push(l / o.width, u / o.height)
                }
                var c = i.baseTexture; (o.width < c.width || o.height < c.height) && this.adjustUvs(e, i, a, s)
            },
            e.prototype.adjustUvs = function(t, e, i, r) {
                for (var s = e.baseTexture,
                n = i + 2 * r,
                h = e.frame,
                a = h.width / s.width,
                o = h.height / s.height,
                l = h.x / h.width,
                u = h.y / h.height,
                p = Math.floor(t[i] + 1e-6), c = Math.floor(t[i + 1] + 1e-6), d = i + 2; d < n; d += 2) p = Math.min(p, Math.floor(t[d] + 1e-6)),
                c = Math.min(c, Math.floor(t[d + 1] + 1e-6));
                l -= p,
                u -= c;
                for (d = i; d < n; d += 2) t[d] = (t[d] + l) * a,
                t[d + 1] = (t[d + 1] + u) * o
            },
            e.BATCHABLE_SIZE = 100,
            e
        } (i.BatchGeometry);
        exports.GraphicsGeometry = B;
        var L = function(i) {
            function r() {
                var r = null !== i && i.apply(this, arguments) || this;
                return r.width = 0,
                r.alignment = .5,
                r.native = !1,
                r.cap = e.BUTT,
                r.join = t.MITER,
                r.miterLimit = 10,
                r
            }
            return u(r, i),
            r.prototype.clone = function() {
                var t = new r;
                return t.color = this.color,
                t.alpha = this.alpha,
                t.texture = this.texture,
                t.matrix = this.matrix,
                t.visible = this.visible,
                t.width = this.width,
                t.alignment = this.alignment,
                t.native = this.native,
                t.cap = this.cap,
                t.join = this.join,
                t.miterLimit = this.miterLimit,
                t
            },
            r.prototype.reset = function() {
                i.prototype.reset.call(this),
                this.color = 0,
                this.alignment = .5,
                this.width = 0,
                this.native = !1
            },
            r
        } (o);
        exports.LineStyle = L;
        var O = new Float32Array(3),
        U = {},
        N = function(h) {
            function a(t) {
                void 0 === t && (t = null);
                var e = h.call(this) || this;
                return e._geometry = t || new B,
                e._geometry.refCount++,
                e.shader = null,
                e.state = i.State.for2d(),
                e._fillStyle = new o,
                e._lineStyle = new L,
                e._matrix = null,
                e._holeMode = !1,
                e.currentPath = null,
                e.batches = [],
                e.batchTint = -1,
                e.batchDirty = -1,
                e.vertexData = null,
                e.pluginName = "batch",
                e._transformID = -1,
                e.tint = 16777215,
                e.blendMode = n.BLEND_MODES.NORMAL,
                e
            }
            return u(a, h),
            Object.defineProperty(a.prototype, "geometry", {
                get: function() {
                    return this._geometry
                },
                enumerable: !1,
                configurable: !0
            }),
            a.prototype.clone = function() {
                return this.finishPoly(),
                new a(this._geometry)
            },
            Object.defineProperty(a.prototype, "blendMode", {
                get: function() {
                    return this.state.blendMode
                },
                set: function(t) {
                    this.state.blendMode = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(a.prototype, "tint", {
                get: function() {
                    return this._tint
                },
                set: function(t) {
                    this._tint = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(a.prototype, "fill", {
                get: function() {
                    return this._fillStyle
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(a.prototype, "line", {
                get: function() {
                    return this._lineStyle
                },
                enumerable: !1,
                configurable: !0
            }),
            a.prototype.lineStyle = function(t, e, i, r, s) {
                return void 0 === t && (t = null),
                void 0 === e && (e = 0),
                void 0 === i && (i = 1),
                void 0 === r && (r = .5),
                void 0 === s && (s = !1),
                "number" == typeof t && (t = {
                    width: t,
                    color: e,
                    alpha: i,
                    alignment: r,
                    native: s
                }),
                this.lineTextureStyle(t)
            },
            a.prototype.lineTextureStyle = function(r) {
                r = Object.assign({
                    width: 0,
                    texture: i.Texture.WHITE,
                    color: r && r.texture ? 16777215 : 0,
                    alpha: 1,
                    matrix: null,
                    alignment: .5,
                    native: !1,
                    cap: e.BUTT,
                    join: t.MITER,
                    miterLimit: 10
                },
                r),
                this.currentPath && this.startPoly();
                var s = r.width > 0 && r.alpha > 0;
                return s ? (r.matrix && (r.matrix = r.matrix.clone(), r.matrix.invert()), Object.assign(this._lineStyle, {
                    visible: s
                },
                r)) : this._lineStyle.reset(),
                this
            },
            a.prototype.startPoly = function() {
                if (this.currentPath) {
                    var t = this.currentPath.points,
                    e = this.currentPath.points.length;
                    e > 2 && (this.drawShape(this.currentPath), this.currentPath = new r.Polygon, this.currentPath.closeStroke = !1, this.currentPath.points.push(t[e - 2], t[e - 1]))
                } else this.currentPath = new r.Polygon,
                this.currentPath.closeStroke = !1
            },
            a.prototype.finishPoly = function() {
                this.currentPath && (this.currentPath.points.length > 2 ? (this.drawShape(this.currentPath), this.currentPath = null) : this.currentPath.points.length = 0)
            },
            a.prototype.moveTo = function(t, e) {
                return this.startPoly(),
                this.currentPath.points[0] = t,
                this.currentPath.points[1] = e,
                this
            },
            a.prototype.lineTo = function(t, e) {
                this.currentPath || this.moveTo(0, 0);
                var i = this.currentPath.points,
                r = i[i.length - 2],
                s = i[i.length - 1];
                return r === t && s === e || i.push(t, e),
                this
            },
            a.prototype._initCurve = function(t, e) {
                void 0 === t && (t = 0),
                void 0 === e && (e = 0),
                this.currentPath ? 0 === this.currentPath.points.length && (this.currentPath.points = [t, e]) : this.moveTo(t, e)
            },
            a.prototype.quadraticCurveTo = function(t, e, i, r) {
                this._initCurve();
                var s = this.currentPath.points;
                return 0 === s.length && this.moveTo(0, 0),
                M.curveTo(t, e, i, r, s),
                this
            },
            a.prototype.bezierCurveTo = function(t, e, i, r, s, n) {
                return this._initCurve(),
                w.curveTo(t, e, i, r, s, n, this.currentPath.points),
                this
            },
            a.prototype.arcTo = function(t, e, i, r, s) {
                this._initCurve(t, e);
                var n = this.currentPath.points,
                h = P.curveTo(t, e, i, r, s, n);
                if (h) {
                    var a = h.cx,
                    o = h.cy,
                    l = h.radius,
                    u = h.startAngle,
                    p = h.endAngle,
                    c = h.anticlockwise;
                    this.arc(a, o, l, u, p, c)
                }
                return this
            },
            a.prototype.arc = function(t, e, i, s, n, h) {
                if (void 0 === h && (h = !1), s === n) return this;
                if (!h && n <= s ? n += r.PI_2: h && s <= n && (s += r.PI_2), 0 === n - s) return this;
                var a = t + Math.cos(s) * i,
                o = e + Math.sin(s) * i,
                l = this._geometry.closePointEps,
                u = this.currentPath ? this.currentPath.points: null;
                if (u) {
                    var p = Math.abs(u[u.length - 2] - a),
                    c = Math.abs(u[u.length - 1] - o);
                    p < l && c < l || u.push(a, o)
                } else this.moveTo(a, o),
                u = this.currentPath.points;
                return P.arc(a, o, t, e, i, s, n, h, u),
                this
            },
            a.prototype.beginFill = function(t, e) {
                return void 0 === t && (t = 0),
                void 0 === e && (e = 1),
                this.beginTextureFill({
                    texture: i.Texture.WHITE,
                    color: t,
                    alpha: e
                })
            },
            a.prototype.beginTextureFill = function(t) {
                t = Object.assign({
                    texture: i.Texture.WHITE,
                    color: 16777215,
                    alpha: 1,
                    matrix: null
                },
                t),
                this.currentPath && this.startPoly();
                var e = t.alpha > 0;
                return e ? (t.matrix && (t.matrix = t.matrix.clone(), t.matrix.invert()), Object.assign(this._fillStyle, {
                    visible: e
                },
                t)) : this._fillStyle.reset(),
                this
            },
            a.prototype.endFill = function() {
                return this.finishPoly(),
                this._fillStyle.reset(),
                this
            },
            a.prototype.drawRect = function(t, e, i, s) {
                return this.drawShape(new r.Rectangle(t, e, i, s))
            },
            a.prototype.drawRoundedRect = function(t, e, i, s, n) {
                return this.drawShape(new r.RoundedRectangle(t, e, i, s, n))
            },
            a.prototype.drawCircle = function(t, e, i) {
                return this.drawShape(new r.Circle(t, e, i))
            },
            a.prototype.drawEllipse = function(t, e, i, s) {
                return this.drawShape(new r.Ellipse(t, e, i, s))
            },
            a.prototype.drawPolygon = function() {
                for (var t, e = arguments,
                i = [], s = 0; s < arguments.length; s++) i[s] = e[s];
                var n = !0,
                h = i[0];
                h.points ? (n = h.closeStroke, t = h.points) : t = Array.isArray(i[0]) ? i[0] : i;
                var a = new r.Polygon(t);
                return a.closeStroke = n,
                this.drawShape(a),
                this
            },
            a.prototype.drawShape = function(t) {
                return this._holeMode ? this._geometry.drawHole(t, this._matrix) : this._geometry.drawShape(t, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix),
                this
            },
            a.prototype.clear = function() {
                return this._geometry.clear(),
                this._lineStyle.reset(),
                this._fillStyle.reset(),
                this._boundsID++,
                this._matrix = null,
                this._holeMode = !1,
                this.currentPath = null,
                this
            },
            a.prototype.isFastRect = function() {
                var t = this._geometry.graphicsData;
                return 1 === t.length && t[0].shape.type === r.SHAPES.RECT && !(t[0].lineStyle.visible && t[0].lineStyle.width)
            },
            a.prototype._render = function(t) {
                this.finishPoly();
                var e = this._geometry,
                i = t.context.supports.uint32Indices;
                e.updateBatches(i),
                e.batchable ? (this.batchDirty !== e.batchDirty && this._populateBatches(), this._renderBatched(t)) : (t.batch.flush(), this._renderDirect(t))
            },
            a.prototype._populateBatches = function() {
                var t = this._geometry,
                e = this.blendMode,
                i = t.batches.length;
                this.batchTint = -1,
                this._transformID = -1,
                this.batchDirty = t.batchDirty,
                this.batches.length = i,
                this.vertexData = new Float32Array(t.points);
                for (var r = 0; r < i; r++) {
                    var n = t.batches[r],
                    h = n.style.color,
                    a = new Float32Array(this.vertexData.buffer, 4 * n.attribStart * 2, 2 * n.attribSize),
                    o = new Float32Array(t.uvsFloat32.buffer, 4 * n.attribStart * 2, 2 * n.attribSize),
                    l = {
                        vertexData: a,
                        blendMode: e,
                        indices: new Uint16Array(t.indicesUint16.buffer, 2 * n.start, n.size),
                        uvs: o,
                        _batchRGB: (0, s.hex2rgb)(h),
                        _tintRGB: h,
                        _texture: n.style.texture,
                        alpha: n.style.alpha,
                        worldAlpha: 1
                    };
                    this.batches[r] = l
                }
            },
            a.prototype._renderBatched = function(t) {
                if (this.batches.length) {
                    t.batch.setObjectRenderer(t.plugins[this.pluginName]),
                    this.calculateVertices(),
                    this.calculateTints();
                    for (var e = 0,
                    i = this.batches.length; e < i; e++) {
                        var r = this.batches[e];
                        r.worldAlpha = this.worldAlpha * r.alpha,
                        t.plugins[this.pluginName].render(r)
                    }
                }
            },
            a.prototype._renderDirect = function(t) {
                var e = this._resolveDirectShader(t),
                i = this._geometry,
                r = this.tint,
                s = this.worldAlpha,
                n = e.uniforms,
                h = i.drawCalls;
                n.translationMatrix = this.transform.worldTransform,
                n.tint[0] = (r >> 16 & 255) / 255 * s,
                n.tint[1] = (r >> 8 & 255) / 255 * s,
                n.tint[2] = (255 & r) / 255 * s,
                n.tint[3] = s,
                t.shader.bind(e),
                t.geometry.bind(i, e),
                t.state.set(this.state);
                for (var a = 0,
                o = h.length; a < o; a++) this._renderDrawCallDirect(t, i.drawCalls[a])
            },
            a.prototype._renderDrawCallDirect = function(t, e) {
                for (var i = e.texArray,
                r = e.type,
                s = e.size,
                n = e.start,
                h = i.count,
                a = 0; a < h; a++) t.texture.bind(i.elements[a], a);
                t.geometry.draw(r, s, n)
            },
            a.prototype._resolveDirectShader = function(t) {
                var e = this.shader,
                s = this.pluginName;
                if (!e) {
                    if (!U[s]) {
                        for (var n = t.plugins.batch.MAX_TEXTURES,
                        h = new Int32Array(n), a = 0; a < n; a++) h[a] = a;
                        var o = {
                            tint: new Float32Array([1, 1, 1, 1]),
                            translationMatrix: new r.Matrix,
                        default:
                            i.UniformGroup.from({
                                uSamplers:
                                h
                            },
                            !0)
                        },
                        l = t.plugins[s]._shader.program;
                        U[s] = new i.Shader(l, o)
                    }
                    e = U[s]
                }
                return e
            },
            a.prototype._calculateBounds = function() {
                this.finishPoly();
                var t = this._geometry;
                if (t.graphicsData.length) {
                    var e = t.bounds,
                    i = e.minX,
                    r = e.minY,
                    s = e.maxX,
                    n = e.maxY;
                    this._bounds.addFrame(this.transform, i, r, s, n)
                }
            },
            a.prototype.containsPoint = function(t) {
                return this.worldTransform.applyInverse(t, a._TEMP_POINT),
                this._geometry.containsPoint(a._TEMP_POINT)
            },
            a.prototype.calculateTints = function() {
                if (this.batchTint !== this.tint) {
                    this.batchTint = this.tint;
                    for (var t = (0, s.hex2rgb)(this.tint, O), e = 0; e < this.batches.length; e++) {
                        var i = this.batches[e],
                        r = i._batchRGB,
                        n = (t[0] * r[0] * 255 << 16) + (t[1] * r[1] * 255 << 8) + (0 | t[2] * r[2] * 255);
                        i._tintRGB = (n >> 16) + (65280 & n) + ((255 & n) << 16)
                    }
                }
            },
            a.prototype.calculateVertices = function() {
                var t = this.transform._worldID;
                if (this._transformID !== t) {
                    this._transformID = t;
                    for (var e = this.transform.worldTransform,
                    i = e.a,
                    r = e.b,
                    s = e.c,
                    n = e.d,
                    h = e.tx,
                    a = e.ty,
                    o = this._geometry.points,
                    l = this.vertexData,
                    u = 0,
                    p = 0; p < o.length; p += 2) {
                        var c = o[p],
                        d = o[p + 1];
                        l[u++] = i * c + s * d + h,
                        l[u++] = n * d + r * c + a
                    }
                }
            },
            a.prototype.closePath = function() {
                var t = this.currentPath;
                return t && (t.closeStroke = !0),
                this
            },
            a.prototype.setMatrix = function(t) {
                return this._matrix = t,
                this
            },
            a.prototype.beginHole = function() {
                return this.finishPoly(),
                this._holeMode = !0,
                this
            },
            a.prototype.endHole = function() {
                return this.finishPoly(),
                this._holeMode = !1,
                this
            },
            a.prototype.destroy = function(t) {
                this._geometry.refCount--,
                0 === this._geometry.refCount && this._geometry.dispose(),
                this._matrix = null,
                this.currentPath = null,
                this._lineStyle.destroy(),
                this._lineStyle = null,
                this._fillStyle.destroy(),
                this._fillStyle = null,
                this._geometry = null,
                this.shader = null,
                this.vertexData = null,
                this.batches.length = 0,
                this.batches = null,
                h.prototype.destroy.call(this, t)
            },
            a._TEMP_POINT = new r.Point,
            a
        } (h.Container);
        exports.Graphics = N;
        var H = {
            buildPoly: p,
            buildCircle: c,
            buildRectangle: d,
            buildRoundedRectangle: g,
            buildLine: _,
            ArcUtils: P,
            BezierUtils: w,
            QuadraticUtils: M,
            BatchPart: D,
            FILL_COMMANDS: T,
            BATCH_POOL: A,
            DRAW_CALL_POOL: E
        };
        exports.graphicsUtils = H;
    },
    {
        "@pixi/core": "zUtj",
        "@pixi/math": "Z5os",
        "@pixi/utils": "KFvg",
        "@pixi/constants": "ETil",
        "@pixi/display": "ll5V"
    }],
    "qKSF": [function(require, module, exports) {
        "use strict";
        var t = this && this.__extends ||
        function() {
            var t = function(i, o) {
                return (t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array &&
                function(t, i) {
                    t.__proto__ = i
                } ||
                function(t, i) {
                    for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o])
                })(i, o)
            };
            return function(i, o) {
                if ("function" != typeof o && null !== o) throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
                function r() {
                    this.constructor = i
                }
                t(i, o),
                i.prototype = null === o ? Object.create(o) : (r.prototype = o.prototype, new r)
            }
        } ();
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.PhysicsGraphics = void 0;
        var i = require("@pixi/graphics"),
        o = require("matter-js"),
        r = window.PIXI ? window.PIXI.Graphics: i.Graphics,
        s = function(i) {
            function r(t, r, s) {
                void 0 === r && (r = {});
                var n = i.call(this) || this;
                n.graphicsOptions = {
                    x: 0,
                    y: 0,
                    width: 100,
                    height: 100,
                    fill: 0,
                    lineWidth: 1,
                    lineColor: 16777215
                },
                n.graphicsOptions = Object.assign(n.graphicsOptions, t),
                n.physicsOptions = r;
                var e = n.graphicsOptions.width / 2,
                p = n.graphicsOptions.height / 2;
                return n.pivot.x = e,
                n.pivot.y = p,
                n._update = s,
                n.graphicsOptions.radius ? n._body = o.Bodies.circle(n.graphicsOptions.x, n.graphicsOptions.y, n.graphicsOptions.radius, n.physicsOptions) : n._body = o.Bodies.rectangle(n.graphicsOptions.x + e, n.graphicsOptions.y + p, n.graphicsOptions.width, n.graphicsOptions.height, n.physicsOptions),
                n
            }
            return t(r, i),
            Object.defineProperty(r.prototype, "body", {
                get: function() {
                    return this._body
                },
                enumerable: !1,
                configurable: !0
            }),
            r.prototype.update = function() {
                this._update({
                    position: this._body.position,
                    rotation: this._body.angle
                })
            },
            r
        } (r);
        exports.PhysicsGraphics = s;
    },
    {
        "@pixi/graphics": "reqQ",
        "matter-js": "mG0D"
    }],
    "JWrf": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.PhysicsGraphics = exports.PhysicsSprite = exports.PixiMatter = void 0;
        var e = require("./pixi-matter");
        Object.defineProperty(exports, "PixiMatter", {
            enumerable: !0,
            get: function() {
                return e.PixiMatter
            }
        });
        var r = require("./physics_objects/physics_sprite");
        Object.defineProperty(exports, "PhysicsSprite", {
            enumerable: !0,
            get: function() {
                return r.PhysicsSprite
            }
        });
        var t = require("./physics_objects/physics_graphics");
        Object.defineProperty(exports, "PhysicsGraphics", {
            enumerable: !0,
            get: function() {
                return t.PhysicsGraphics
            }
        });
    },
    {
        "./pixi-matter": "wT59",
        "./physics_objects/physics_sprite": "N0iY",
        "./physics_objects/physics_graphics": "qKSF"
    }],
    "UnXq": [function(require, module, exports) {
        "use strict";
        var e = this && this.__assign ||
        function() {
            return (e = Object.assign ||
            function(e) {
                for (var r, t = 1,
                n = arguments.length; t < n; t++) for (var i in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                return e
            }).apply(this, arguments)
        },
        r = this && this.__spreadArray ||
        function(e, r) {
            for (var t = 0,
            n = r.length,
            i = e.length; t < n; t++, i++) e[i] = r[t];
            return e
        };
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.upgradeGraphics = exports.defineProperty = exports.genkwaFunc = exports.defineGetter = exports.textureRecources = exports.hitTestRectangle = exports.translateTools = exports.ColorNameMap = exports.resetPygameZero = exports.loadScript = void 0;
        var t = require("./matter-pixi"),
        n = require("matter-js");
        function i(e, r) {
            return window[r] ? Promise.resolve(window[r]) : new Promise(function(t, n) {
                var i = document.createElement("script");
                i.onload = function() {
                    t(r && window[r])
                },
                i.onerror = function(e) {
                    i.onload = null,
                    i.onerror = null,
                    document.body.removeChild(i),
                    n(e)
                },
                i.src = e,
                i.async = !0,
                document.body.appendChild(i)
            })
        }
        exports.loadScript = i;
        var o = function(e) {
            e.App && (e.App.destroy({
                removeView: !0
            }), window.PIXI.loader.destroy(), e.App = null, e.timerMap.forEach(function(e, r) {
                window.clearInterval(e),
                window.clearTimeout(e)
            }), e.timerMap.clear(), e.soundMap = {},
            e.music.pause(), e.music = null, e.music = new Audio, Object.keys(e.windowListener).map(function(r) {
                var t = r.replace("Listener", "");
                window.removeEventListener(t, e.windowListener[r])
            }))
        };
        exports.resetPygameZero = o,
        exports.ColorNameMap = {
            aqua: "#00FFFF",
            black: "#000000",
            blue: "#0000FF",
            fuchsia: "#FF00FF",
            gray: "#808080",
            green: "#008000",
            lime: "#00FF00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            orange: "#FFA500",
            purple: "#800080",
            red: "#FF0000",
            silver: "#C0C0C0",
            teal: "#008080",
            white: "#FFFFFF",
            yellow: "#FFFF00"
        };
        var a = function(e) {
            Math.round(e.view.width / 2),
            Math.round(e.view.height / 2);
            var r = {
                transX: function(e, r) {
                    return void 0 === r && (r = !1),
                    e
                },
                transY: function(e, r) {
                    return void 0 === r && (r = !1),
                    e
                },
                transPos: function(e, t) {
                    return void 0 === t && (t = !1),
                    e ? [r.transX(e[0], t), r.transY(e[1], t)] : e
                },
                transColor: function(e) {
                    return Array.isArray(e) ? window.PIXI.utils.rgb2hex(e) : e.match("#") ? window.PIXI.utils.string2hex(e) : exports.ColorNameMap[e] ? window.PIXI.utils.string2hex(exports.ColorNameMap[e]) : 16777215
                }
            };
            return r
        };
        function s(e, r) {
            Array.isArray(r) && (r.x = r[0], r.y = r[1], r.width = 0, r.height = 0),
            e.centerX = e.x + e.width / 2,
            e.centerY = e.y + e.height / 2,
            r.centerX = r.x + r.width / 2,
            r.centerY = r.y + r.height / 2,
            e.halfWidth = e.width / 2,
            e.halfHeight = e.height / 2,
            r.halfWidth = r.width / 2,
            r.halfHeight = r.height / 2;
            var t = e.centerX - r.centerX,
            n = e.centerY - r.centerY,
            i = e.halfWidth + r.halfWidth,
            o = e.halfHeight + r.halfHeight;
            return Math.abs(t) < i && Math.abs(n) < o
        }
        exports.translateTools = a,
        exports.hitTestRectangle = s;
        var c = {};
        function u(e) {
            function t(e) {
                var t;
                return Array.isArray(e) && (t = r([], e), e = t[0]),
                new Promise(function(r, n) {
                    window.PIXI.utils.TextureCache[e] ? r(window.PIXI.utils.TextureCache[e]) : window.PIXI.loader.add(t || e).load(function() {
                        var t = window.PIXI.loader.resources[e].texture;
                        r(t)
                    })
                })
            }
            return /\.json$/.test(e) ? c[e] ? t(c[e]) : fetch(e).then(function(e) {
                return e.json()
            }).then(function(r) {
                var n = e.replace("index.json", ""),
                i = r.map(function(e) {
                    return n + e
                });
                return c[e] = i,
                t(i)
            }) : t(e)
        }
        exports.textureRecources = u;
        var p = window.Sk,
        h = function(e) {
            return p.misceval.callsimOrSuspend(p.builtins.property, new p.builtin.func(e), new p.builtin.func(function() {}))
        };
        function l(e, r) {
            var t = function(t) {
                for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
                r || (n = new p.builtins.tuple(n));
                var o = new p.builtin.dict(t);
                return e(n, o)
            };
            return t.co_kwargs = !0,
            t
        }
        exports.defineGetter = h,
        exports.genkwaFunc = l;
        var d = function(e, r) {
            return p.misceval.callsimOrSuspend(p.builtins.property, new p.builtin.func(function(t) {
                return "function" == typeof e ? e(t) : p.ffi.remapToPy(t[e][r])
            }), new p.builtin.func(function(t, n) {
                "function" == typeof r ? r(t, n) : t[e][r] = n.v
            }))
        };
        exports.defineProperty = d;
        var f = function(i, o, a, s) {
            return new p.builtin.func(function(o) {
                for (var c = [], u = 1; u < arguments.length; u++) c[u - 1] = arguments[u];
                return p.misceval.callsimOrSuspend(p.misceval.buildClass(i,
                function(i, u) {
                    u.__init__ = new p.builtin.func(function(e) {
                        e.graph = new window.PIXI.Graphics;
                        var t = e.graph;
                        s.apply(void 0, r([o, t], c));
                        var n = e.graph.width / 2,
                        i = e.graph.height / 2,
                        a = e.graph.graphicsData[0].shape.x,
                        u = e.graph.graphicsData[0].shape.y;
                        e.graph.isCircle ? (e.graph.pivot.set(2 * n, 2 * i), e.graph.position.set(2 * n, 2 * n)) : (e.graph.pivot.set(a + n, u + i), e.graph.position.set(a + n, u + i))
                    }),
                    u.rotation = exports.defineProperty(function(e) {
                        return p.ffi.remapToPy(e.rotation)
                    },
                    function(e, r) {
                        e.physicGraphics ? n.Body.setAngle(e.physicGraphics._body, r.v) : e.graph.rotation = r.v
                    }),
                    u.physicsImpostor = new p.builtin.func(l(function(r, i) {
                        i = p.ffi.remapToJs(i);
                        var o = r[0],
                        s = r[1],
                        c = r[2];
                        s = p.ffi.remapToJs(s || i.is_static) || !1;
                        var u = !1;
                        c = p.ffi.remapToJs(c || i.physicsOptions) || {};
                        var h = o.graph,
                        l = h.graphicsData,
                        d = h.width,
                        f = h.height,
                        w = h.line,
                        g = h.rotation,
                        v = {};
                        o.graph.isCircle && (u = !0, v.radius = l[0].shape.radius),
                        o.graph.isFilled && (v.fill = l[0].fillStyle.color),
                        o.physicGraphics = new t.PhysicsGraphics(e({
                            x: l[0].shape.x,
                            y: l[0].shape.y,
                            width: d,
                            height: f,
                            lineWidth: w.width,
                            lineColor: w.color
                        },
                        v), e({
                            isCircle: u,
                            isStatic: s
                        },
                        c),
                        function(e) {
                            var r = e.position,
                            t = e.rotation;
                            o.graph.position = r,
                            o.graph.rotation = t
                        }),
                        n.Body.setAngle(o.physicGraphics._body, g),
                        a.addToWorld(o.physicGraphics)
                    },
                    !0))
                }))
            })
        };
        exports.upgradeGraphics = f;
    },
    {
        "./matter-pixi": "JWrf",
        "matter-js": "mG0D"
    }],
    "S9nX": [function(require, module, exports) {
        "use strict";
        var e = this && this.__assign ||
        function() {
            return (e = Object.assign ||
            function(e) {
                for (var i, n = 1,
                t = arguments.length; n < t; n++) for (var r in i = arguments[n]) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var i = window.Sk,
        n = window.PIXI,
        t = require("./matter-pixi"),
        r = require("matter-js"),
        s = require("./utils"),
        o = {
            tween: "https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.6.4/dist/tween.umd.js"
        },
        a = n.Application,
        u = n.loader,
        c = n.loader.resources,
        l = n.Sprite,
        f = n.Graphics,
        p = n.Text,
        d = n.TextStyle,
        m = window.PyGameZero._moduleCache,
        w = !1;
        window.PyGameZero._handleReset = function() {
            w = !0,
            s.resetPygameZero(m)
        },
        w || s.resetPygameZero(m),
        u.pre(function(e, i) {
            e.crossOrigin = "anonymous",
            e.loadType = window.PIXI.loaders.Resource.LOAD_TYPE.XHR,
            i()
        });
        var y = 500,
        v = 400;
        window.PyGameZero.container && (y = window.PyGameZero.container.offsetWidth, v = window.PyGameZero.container.offsetHeight),
        m.App = new a({
            backgroundColor: 0,
            width: y,
            height: v
        });
        var h = m.App,
        T = new t.PixiMatter({
            stage: h.view
        });
        window.PyGameZero._onRunning(h),
        window.PyGameZero.container.appendChild(h.view);
        var _ = s.translateTools(h),
        g = _.transX,
        b = _.transY,
        P = _.transPos,
        x = _.transColor;
        window.$builtinmodule = function() {
            var a = {
                __name__: new i.builtin.str("pygame-zero")
            };
            a.WIDTH = i.ffi.remapToPy(h.view.width),
            a.HEIGHT = i.ffi.remapToPy(h.view.height),
            a.Actor = i.misceval.buildClass(a,
            function(n, o) {
                o.__init__ = new i.builtin.func(function(e, n, t) {
                    return new i.misceval.promiseToSuspension(new Promise(function(r) {
                        n = i.ffi.remapToJs(n),
                        t = i.ffi.remapToJs(t) || [],
                        s.textureRecources(n).then(function(i) {
                            var s = new l(i);
                            s.zOrder = 1,
                            e.sprite = s,
                            e.sprite.anchor.set(.5),
                            e.sprite.x = g(t[0] || 0),
                            e.sprite.y = b(t[1] || 0),
                            e.actorName = n,

                            e.sprite._flip_x = false,
                            e.sprite._flip_y = false,
                            e.sprite._scale = 1,
                            e.sprite._mask = null,
                            e.sprite._animate_counter = 0,
                            e.sprite.fps = 5,
                            e.sprite.direction = 0,
                            r(void 0)
                        })
                    }))
                }),
                o.flip_x = s.defineProperty(function(e) {
                    return i.ffi.remapToPy(e.sprite._flip_x)
                },
                function(e, i) {
                    e.sprite._flip_x = i
                }),

                o.flip_y = s.defineProperty(function(e) {
                    return i.ffi.remapToPy(e.sprite._flip_y)
                },
                function(e, i) {
                    e.sprite._flip_y = i
                }),

                o.x = s.defineProperty(function(e) {
                    return i.ffi.remapToPy(g(e.sprite.x, !0))
                },
                function(e, i) {
                    e.physicSprite ? r.Body.setPosition(e.physicSprite._body, {
                        x: g(i.v),
                        y: e.physicSprite.y
                    }) : e.sprite.x = g(i.v)
                }),

                o.y = s.defineProperty(function(e) {
                    return i.ffi.remapToPy(b(e.sprite.y, !0))
                },
                function(e, i) {
                    e.physicSprite ? r.Body.setPosition(e.physicSprite._body, {
                        x: e.physicSprite.x,
                        y: g(i.v)
                    }) : e.sprite.y = g(i.v)
                }),
                o.width = s.defineProperty("sprite", "width"),
                o.height = s.defineProperty("sprite", "height"),
                o.size = s.defineProperty(function(e) {
                    return i.ffi.remapToPy([e.sprite.width, e.sprite.height])
                },
                function(e, n) {
                    var t = i.ffi.remapToJs(n),
                    r = t[0],
                    s = t[1];
                    e.sprite.width = r,
                    e.sprite.height = s,
                    e.sprite.pos = [r, s]
                }),
                o.pos = s.defineProperty(function(e) {
                    return i.ffi.remapToPy(P([e.sprite.x, e.sprite.y], !0))
                },
                function(e, n) {
                    var t = P(i.ffi.remapToJs(n)),
                    s = t[0],
                    o = t[1];
                    e.physicSprite ? r.Body.setPosition(e.physicSprite._body, {
                        x: s,
                        y: o
                    }) : (e.sprite.x = s, e.sprite.y = o, e.sprite.pos = [s, o])
                }),
                o.angle = s.defineProperty("sprite", "angle"),
                o.show = s.defineProperty("sprite", "visible"),
                o.image = s.defineProperty(function(e) {
                    return i.ffi.remapToPy(e.sprite.texture)
                },
                function(e, n) {
                    return new i.misceval.promiseToSuspension(new Promise(function(i) {
                        s.textureRecources(n.v).then(function(n) {
                            e.sprite.texture = n,
                            i(void 0)
                        })
                    }))
                }),
                o.frame = s.defineProperty(function(e) {
                    return i.ffi.remapToPy(e.sprite.texture)
                },
                function(e, n) {
                    return new i.misceval.promiseToSuspension(new Promise(function(i) {
                        s.textureRecources(e.actorName[n.v - 1] || "./assets/" + e.actorName + "/造型" + n.v + ".png").then(function(n) {
                            e.sprite.texture = n,
                            i(void 0)
                        })
                    }))
                }),
                o.distance_to = new i.builtin.func(function(e, n) {
                    return n = P(i.ffi.remapToJs(n)),
                    i.ffi.remapToPy(Math.round(Math.abs(Math.sqrt(Math.pow(e.sprite.x - n[0], 2) + Math.pow(e.sprite.y - n[1], 2)))))
                }),
                o.angle_to = new i.builtin.func(function(e, n) {
                    n = P(i.ffi.remapToJs(n));
                    var t = e.sprite.y,
                    r = n[0],
                    s = e.sprite.y,
                    o = n[1],
                    a = Math.abs(t - r),
                    u = Math.abs(s - o),
                    c = Math.sqrt(a * a + u * u);
                    return i.ffi.remapToPy(Math.round(Math.asin(u / c) / Math.PI * 180))
                }),
                o.collide_point = new i.builtin.func(function(e, n) {
                    return s.hitTestRectangle(e.sprite, P(i.ffi.remapToJs(n)))
                }),
                o.collide_actor = new i.builtin.func(function(e, i) {
                    return s.hitTestRectangle(e.sprite, i.sprite)
                }),
                o.colliderect = new i.builtin.func(function(e, i) {
                    return s.hitTestRectangle(e.sprite, i.sprite)
                }),
                o.remove = new i.builtin.func(function(e) {
                    h.stage.removeChild(e.sprite)
                }),
                o.draw = new i.builtin.func(function(e) {
                    h.stage.addChild(e.physicSprite || e.sprite)
                }),
                o.physicsImpostor = new i.builtin.func(s.genkwaFunc(function(n, r) {
                    r = i.ffi.remapToJs(r);
                    var s = n[0],
                    o = n[1],
                    a = n[2],
                    u = n[3];
                    o = i.ffi.remapToJs(o || r.is_circle) || !1,
                    a = i.ffi.remapToJs(a || r.is_static) || !1,
                    u = i.ffi.remapToJs(u || r.physicsOptions) || {},
                    s.physicSprite = new t.PhysicsSprite(s.sprite, e({
                        isCircle: o,
                        isStatic: a
                    },
                    u)),
                    T.addToWorld(s.physicSprite)
                },
                !0))
            },
            "Actor"),
            a.Rect = i.misceval.buildClass(a,
            function(e, n) {
                n.__init__ = new i.builtin.func(function(e, n, t) {
                    n = P(i.ffi.remapToJs(n)),
                    t = i.ffi.remapToJs(t),
                    e.pos = {
                        x: n[0],
                        y: n[1]
                    },
                    e.size = {
                        width: t[0],
                        height: t[1]
                    }
                }),
                n.pos = s.defineGetter(function(e) {
                    return i.ffi.remapToPy(P(e.pos, !0))
                }),
                n.size = s.defineGetter(function(e) {
                    return i.ffi.remapToPy(e.size)
                })
            },
            "Rect", []),
            a.draw = i.misceval.buildClass(a,
            function(e, t) {
                t.__init__ = new i.builtin.func(function(e) {
                    e.size = 5,
                    e.graphMap = []
                }),
                t.size = new i.builtin.func(function(e, i) {
                    e.size = i.v
                }),
                t.line = new i.builtin.func(function(e, t, r, s) {
                    var o = new n.Graphics;
                    e.graphMap.push(o),
                    s = x(i.ffi.remapToJs(s)),
                    t = i.ffi.remapToJs(t),
                    r = i.ffi.remapToJs(r),
                    o.lineStyle(e.size || 2, s, 1),
                    o.moveTo(t[0], t[1]),
                    o.lineTo(r[0], r[1]),
                    h.stage.addChild(o)
                }),
                t.circle = s.upgradeGraphics(a, h, T,
                function(e, n, t, r, s) {
                    e.graphMap.push(n),
                    s = x(i.ffi.remapToJs(s)),
                    t = P(i.ffi.remapToJs(t)),
                    n.lineStyle(e.size, s, 1),
                    n.drawCircle(t[0], t[1], r.v),
                    n.isCircle = !0,
                    h.stage.addChild(n)
                }),
                t.filled_circle = s.upgradeGraphics(a, h, T,
                function(e, n, t, r, s) {
                    e.graphMap.push(n),
                    s = x(i.ffi.remapToJs(s)),
                    t = P(i.ffi.remapToJs(t)),
                    n.lineStyle(0),
                    n.beginFill(s, 1),
                    n.drawCircle(t[0], t[1], r.v),
                    n.endFill(),
                    n.isCircle = !0,
                    n.isFilled = !0,
                    h.stage.addChild(n)
                }),
                t.rect = s.upgradeGraphics(a, h, T,
                function(e, n) {
                    for (var t = [], r = 2; r < arguments.length; r++) t[r - 2] = arguments[r];
                    if (e.graphMap.push(n), "Rect" === i.abstr.typeName(t[0])) {
                        var s = t[0],
                        o = t[1];
                        n.lineStyle(e.size, x(i.ffi.remapToJs(o)), 1),
                        n.drawRect(s.pos.x, s.pos.y, s.size.width, s.size.height)
                    } else {
                        var a = void 0,
                        u = void 0,
                        c = i.ffi.remapToJs(t[0]);
                        Array.isArray(c) ? (a = c[0], u = c[1], t.shift()) : (a = t[0].v, u = t[1].v, t.shift(), t.shift());
                        var l = t[0],
                        f = t[1];
                        o = t[2];
                        l = i.ffi.remapToJs(l),
                        f = i.ffi.remapToJs(f),
                        n.lineStyle(e.size, x(i.ffi.remapToJs(o)), 1),
                        n.drawRect(g(a), b(u), l, f),
                        h.stage.addChild(n)
                    }
                }),
                t.filled_rect = s.upgradeGraphics(a, h, T,
                function(e, n) {
                    for (var t = [], r = 2; r < arguments.length; r++) t[r - 2] = arguments[r];
                    if (e.graphMap.push(n), "Rect" === i.abstr.typeName(t[0])) {
                        var s = t[0],
                        o = t[1];
                        n.lineStyle(0),
                        n.beginFill(x(i.ffi.remapToJs(o)), 1),
                        n.drawRect(s.pos.x, s.pos.y, s.size.width, s.size.height),
                        n.endFill()
                    } else {
                        var a = void 0,
                        u = void 0,
                        c = i.ffi.remapToJs(t[0]);
                        Array.isArray(c) ? (a = c[0], u = c[1], t.shift()) : (a = t[0].v, u = t[1].v, t.shift(), t.shift());
                        var l = t[0],
                        f = t[1];
                        o = t[2];
                        l = i.ffi.remapToJs(l),
                        f = i.ffi.remapToJs(f),
                        o = x(i.ffi.remapToJs(o)),
                        n.lineStyle(0),
                        n.beginFill(o, 1),
                        n.drawRect(g(a), b(u), l, f),
                        n.endFill()
                    }
                    n.isFilled = !0,
                    h.stage.addChild(n)
                }),
                t.clear = new i.builtin.func(function(e) {
                    e.graphMap.map(function(e) {
                        return e.clear()
                    }),
                    e.graphMap.length = 0,
                    e.basicText && e.basicText.destroy()
                }),
                t.text = new i.builtin.func(s.genkwaFunc(function(e, t) {
                    t = i.ffi.remapToJs(t);
                    var r = e[0],
                    s = e[1],
                    o = e[2],
                    a = e[3],
                    u = e[4],
                    c = e[5];
                    a = x(i.ffi.remapToJs(a || t.color)),
                    u = i.ffi.remapToJs(u || t.fontsize),
                    c = i.ffi.remapToJs(c || t.fontname),
                    o = P(i.ffi.remapToJs(o));
                    var l = new n.TextStyle({
                        fontFamily: c || "PingFang SC",
                        fontSize: u,
                        fill: a
                    }),
                    f = new n.Text(s.v, l);
                    r.basicText = f,
                    f.anchor.set(.5),
                    o && (f.x = o[0], f.y = o[1]),
                    h.stage.addChild(f)
                },
                !0))
            },
            "Draw", []),
            a.screen = i.misceval.callsimOrSuspend(i.misceval.buildClass(a,
            function(e, n) {
                n.__init__ = new i.builtin.func(function(e) {
                    e.graph = new f
                }),
                n.draw = i.misceval.callsimOrSuspend(a.draw),
                n.clear = new i.builtin.func(function(e) {
                    for (; h.stage.children.length > 0;) {
                        var i = h.stage.getChildAt(0);
                        h.stage.removeChild(i)
                    }
                }),
                n.fill = new i.builtin.func(function(e, n) {
                    var t = e.graph;
                    t.clear(),
                    t.beginFill(x(i.ffi.remapToJs(n)), 1),
                    t.drawRect(0, 0, h.view.width, h.view.height),
                    t.endFill(),
                    h.stage.addChild(t)
                })
            },
            "Screen", [])),
            a.clock = i.misceval.callsimOrSuspend(i.misceval.buildClass(a,
            function(e, n) {
                n.__init__ = new i.builtin.func(function(e) {}),
                n.schedule = new i.builtin.func(function(e, n, t) {
                    m.timerMap.set(n, setTimeout(function() {
                        i.misceval.callsimAsync(null, n)
                    },
                    1e3 * t.v))
                }),
                n.schedule_interval = new i.builtin.func(function(e, n, t) {
                    m.timerMap.set(n, setInterval(function() {
                        i.misceval.callsimAsync(null, n)
                    },
                    1e3 * t.v))
                }),
                n.schedule_unique = new i.builtin.func(function(e, n, t) {
                    e.timerMap.has(n) && (clearTimeout(m.timerMap.get(n)), clearInterval(m.timerMap.get(n))),
                    m.timerMap.set(n, setTimeout(function() {
                        i.misceval.callsimAsync(null, n)
                    },
                    1e3 * t.v))
                }),
                n.unschedule = new i.builtin.func(function(e, i, n) {
                    m.timerMap.has(i) && (clearTimeout(m.timerMap.get(i)), clearInterval(m.timerMap.get(i)))
                })
            },
            "Clock", [])),
            a.music = i.misceval.callsimOrSuspend(i.misceval.buildClass(a,
            function(e, n) {
                n.__init__ = new i.builtin.func(function(e) {}),
                n.play = new i.builtin.func(function(e, i) {
                    m.music.src = i.v,
                    m.music.loop = !0,
                    m.music.play()
                }),
                n.play_once = new i.builtin.func(function(e, i) {
                    m.music.src = i.v,
                    m.music.loop = !1,
                    m.music.play()
                }),
                n.is_playing = new i.builtin.func(function(e, i) {
                    return ! m.music.paused
                }),
                n.volume = s.defineProperty(function(e) {
                    return m.music.volume
                },
                function(e, i) {
                    m.music.volume = i.v
                }),
                n.set_volume = new i.builtin.func(function(e, i) {
                    m.music.volume = i.v
                }),
                n.get_volume = new i.builtin.func(function(e) {
                    return m.music.volume
                }),
                n.stop = new i.builtin.func(function(e, i) {
                    m.music.currentTime = 0,
                    m.music.pause()
                })
            },
            "Music", [])),
            a.sound = i.misceval.callsimOrSuspend(i.misceval.buildClass(a,
            function(e, n) {
                n.__init__ = new i.builtin.func(function(e) {}),
                n.play = new i.builtin.func(function(e, i) {
                    if (m.soundMap[i.v]) m.soundMap[i.v].play(),
                    m.soundMap[i.v].currentTime = 0;
                    else {
                        var n = new Audio;
                        n.src = i.v,
                        n.loop = !1,
                        n.play(),
                        m.soundMap[i.v] = n
                    }
                }),
                n.stop = new i.builtin.func(function(e, i) {
                    m.soundMap[i.v].pause()
                }),
                n.get_length = new i.builtin.func(function(e, n) {
                    return i.ffi.remapToPy(Math.ceil(m.soundMap[n.v].duration))
                })
            },
            "Sound", []));
            var u = !1;
            a.animate = i.misceval.buildClass(a,
            function(e, n) {
                n.__init__ = new i.builtin.func(s.genkwaFunc(function(e, n) {
                    var t = i.ffi.remapToJs(n),
                    r = e[0],
                    a = e[1],
                    c = e[2],
                    l = e[3],
                    f = e[4],
                    p = e[5];
                    c = c || t.tween || "linear",
                    l = l || t.duration || 1,
                    f = f || n.entries.on_finished.rhs;
                    var d = g(t.x) || a.sprite.x,
                    m = b(t.y) || a.sprite.y,
                    w = P(p) || P(t.pos) || [d, m];
                    return new i.misceval.promiseToSuspension(new Promise(function(e) {
                        s.loadScript(o.tween, "TWEEN").then(function() {
                            u || (h.ticker.add(function() {
                                window.TWEEN.update()
                            }), u = !0);
                            var n = window.TWEEN.Easing,
                            t = {
                                linear: n.Linear.None,
                                accelerate: n.Quartic.Out,
                                decelerate: n.Quartic.In,
                                accel_decel: n.Quartic.InOut,
                                elastic_start: n.Elastic.In,
                                elastic_end: n.Elastic.Out,
                                elastic_start_end: n.Elastic.InOut,
                                bounce_start: n.Bounce.In,
                                bounce_end: n.Bounce.Out,
                                bounce_start_end: n.Bounce.InOut
                            };
                            r.ani = new window.TWEEN.Tween({
                                x: a.sprite.x,
                                y: a.sprite.y
                            }).to({
                                x: w[0] || d,
                                y: w[1] || m
                            },
                            1e3 * l).easing(t[c] || n.Linear.None).onUpdate(function(e) {
                                a.sprite.y = e.y,
                                a.sprite.x = e.x
                            }).onComplete(function() {
                                f && i.misceval.callsimOrSuspend(f)
                            }).start(),
                            e(void 0)
                        })
                    }))
                },
                !0)),
                n.stop = new i.builtin.func(function(e) {
                    e.ani.pause()
                }),
                n.running = s.defineGetter(function(e) {
                    return i.ffi.remapToPy(e.ani.tweens[0].playing)
                })
            },
            "Animate", []),
            h.ticker.add(function(e) {
                i.globals.draw && i.misceval.callsimAsync(null, i.globals.draw),
                i.globals.update && i.misceval.callsimAsync(null, i.globals.update),
                T.update()
            });
            var c = ["K_0", "K_1", "K_2", "K_3", "K_4", "K_5", "K_6", "K_7", "K_8", "K_9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "SHIFT", "CTRL", "ALT", "LEFT", "UP", "RIGHT", "DOWN", "PAGEUP", "PAGEDOWN", "END", "HOME", "ESCAPE", "ENTER", "SPACE", "RETURN", "BACKSPACE", "INSERT", "DELETE", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15"],
            p = {}; ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "Shift", "Ctrl", "Alt", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "PageUp", "PageDown", "End", "Home", "Escape", "Enter", "", "Return", "Backspace", "Insert", "Delete", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15"].map(function(e, i) {
                p[e] = c[i]
            });
            var d = {};
            m.windowListener.keydownListener = function(e) {
                d[p[e.key]] = !0,
                i.globals.on_key_down && i.misceval.callsimAsync(null, i.globals.on_key_down, i.ffi.remapToPy(p[e.key]))
            },
            window.addEventListener("keydown", m.windowListener.keydownListener),
            m.windowListener.keyupListener = function(e) {
                d[p[e.key]] = !1,
                i.globals.on_key_down && i.misceval.callsimAsync(null, i.globals.on_key_down, i.ffi.remapToPy(p[e.key]))
            },
            window.addEventListener("keyup", m.windowListener.keyupListener),
            a.Keys = i.misceval.callsimOrSuspend(i.misceval.buildClass(a,
            function(e, n) {
                c.map(function(e) {
                    n[e] = s.defineGetter(function() {
                        return i.ffi.remapToPy(e)
                    })
                })
            },
            "Keys", [])),
            a.keyboard = i.misceval.callsimOrSuspend(i.misceval.buildClass(a,
            function(e, i) {
                c.map(function(e, n) {
                    i[e.toLowerCase()] = s.defineGetter(function() {
                        return d[e] || !1
                    })
                })
            },
            "keyboard", []));
            var w = {
                0 : "LEFT",
                1 : "MIDDLE",
                2 : "RIGHT"
            },
            y = {
                x: 0,
                y: 0
            },
            v = [],
            _ = function(e, i) {
                i && !~e.indexOf(i) && e.push(i)
            },
            F = function(e, i) {
                var n = e.indexOf(i);~n && e.splice(n, 1)
            };
            return h.view.addEventListener("mousedown",
            function(e) {
                var n = (w[e.button] || "").toLowerCase();
                _(v, n),
                i.globals.on_mouse_down && i.misceval.callsimAsync(null, i.globals.on_mouse_down, i.ffi.remapToPy([g(e.offsetX, !0), b(e.offsetY, !0)]), i.ffi.remapToPy(n))
            }),
            h.view.addEventListener("mouseup",
            function(e) {
                var n = (w[e.button] || "").toLowerCase();
                F(v, n),
                i.globals.on_mouse_up && i.misceval.callsimAsync(null, i.globals.on_mouse_up, i.ffi.remapToPy([g(e.offsetX, !0), b(e.offsetY, !0)]), i.ffi.remapToPy(w[e.button]))
            }),
            h.view.addEventListener("mousemove",
            function(e) {
                y = {
                    x: g(e.offsetX, !0),
                    y: b(e.offsetY, !0)
                },
                i.globals.on_mouse_move && i.misceval.callsimAsync(null, i.globals.on_mouse_move, i.ffi.remapToPy([y.x, y.y]), i.ffi.remapToPy([y.x, y.y]), i.ffi.remapToPy(v))
            }),
            h.view.addEventListener("wheel",
            function(e) {
                e.deltaY > 0 ? (_(v, "wheel_down"), F(v, "wheel_up")) : e.deltaY < 0 ? (_(v, "wheel_up"), F(v, "wheel_down")) : (F(v, "wheel_up"), F(v, "wheel_down"))
            }),
            a.mouse = i.misceval.callsimOrSuspend(i.misceval.buildClass(a,
            function(e, n) {
                n.x = s.defineGetter(function() {
                    return y.x
                }),
                n.y = s.defineGetter(function() {
                    return y.y
                }),
                n.pos = s.defineGetter(function() {
                    return i.ffi.remapToPy([y.x, y.y])
                }),
                n.LEFT = i.ffi.remapToPy("left"),
                n.MIDDLE = i.ffi.remapToPy("middle"),
                n.RIGHT = i.ffi.remapToPy("right"),
                n.WHEEL_UP = i.ffi.remapToPy("wheel_up"),
                n.WHEEL_DOWN = i.ffi.remapToPy("wheel_down")
            },
            "Mouse", [])),
            a.go = new i.builtin.func(function(e) {}),
            a
        };
    },
    {
        "./matter-pixi": "JWrf",
        "matter-js": "mG0D",
        "./utils": "UnXq"
    }]
},
{},
["S9nX"], null)
