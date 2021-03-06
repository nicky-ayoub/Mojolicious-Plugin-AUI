(function (e, t) {
    function i(e) {
        var t = ft[e] = {};
        return Q.each(e.split(tt), function (e, i) {
            t[i] = !0
        }), t
    }

    function n(e, i, n) {
        if (n === t && 1 === e.nodeType) {
            var r = "data-" + i.replace(mt, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : gt.test(n) ? Q.parseJSON(n) : n
                } catch (s) {
                }
                Q.data(e, i, n)
            } else n = t
        }
        return n
    }

    function r(e) {
        var t;
        for (t in e)if (("data" !== t || !Q.isEmptyObject(e[t])) && "toJSON" !== t)return!1;
        return!0
    }

    function s() {
        return!1
    }

    function a() {
        return!0
    }

    function o(e) {
        return!e || !e.parentNode || 11 === e.parentNode.nodeType
    }

    function l(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function c(e, t, i) {
        if (t = t || 0, Q.isFunction(t))return Q.grep(e, function (e, n) {
            var r = !!t.call(e, n, e);
            return r === i
        });
        if (t.nodeType)return Q.grep(e, function (e) {
            return e === t === i
        });
        if ("string" == typeof t) {
            var n = Q.grep(e, function (e) {
                return 1 === e.nodeType
            });
            if (Rt.test(t))return Q.filter(t, n, !i);
            t = Q.filter(t, n)
        }
        return Q.grep(e, function (e) {
            return Q.inArray(e, t) >= 0 === i
        })
    }

    function u(e) {
        var t = Jt.split("|"), i = e.createDocumentFragment();
        if (i.createElement)for (; t.length;)i.createElement(t.pop());
        return i
    }

    function d(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function h(e, t) {
        if (1 === t.nodeType && Q.hasData(e)) {
            var i, n, r, s = Q._data(e), a = Q._data(t, s), o = s.events;
            if (o) {
                delete a.handle, a.events = {};
                for (i in o)for (n = 0, r = o[i].length; r > n; n++)Q.event.add(t, i, o[i][n])
            }
            a.data && (a.data = Q.extend({}, a.data))
        }
    }

    function p(e, t) {
        var i;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), i = t.nodeName.toLowerCase(), "object" === i ? (t.parentNode && (t.outerHTML = e.outerHTML), Q.support.html5Clone && e.innerHTML && !Q.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === i && Vt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === i ? t.selected = e.defaultSelected : "input" === i || "textarea" === i ? t.defaultValue = e.defaultValue : "script" === i && t.text !== e.text && (t.text = e.text), t.removeAttribute(Q.expando))
    }

    function f(e) {
        return e.getElementsByTagName !== t ? e.getElementsByTagName("*") : e.querySelectorAll !== t ? e.querySelectorAll("*") : []
    }

    function g(e) {
        Vt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function m(e, t) {
        if (t in e)return t;
        for (var i = t.charAt(0).toUpperCase() + t.slice(1), n = t, r = yi.length; r--;)if (t = yi[r] + i, t in e)return t;
        return n
    }

    function y(e, t) {
        return e = t || e, "none" === Q.css(e, "display") || !Q.contains(e.ownerDocument, e)
    }

    function v(e, t) {
        for (var i, n, r = [], s = 0, a = e.length; a > s; s++)i = e[s], i.style && (r[s] = Q._data(i, "olddisplay"), t ? (r[s] || "none" !== i.style.display || (i.style.display = ""), "" === i.style.display && y(i) && (r[s] = Q._data(i, "olddisplay", _(i.nodeName)))) : (n = ii(i, "display"), r[s] || "none" === n || Q._data(i, "olddisplay", n)));
        for (s = 0; a > s; s++)i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
        return e
    }

    function b(e, t, i) {
        var n = ui.exec(t);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
    }

    function x(e, t, i, n) {
        for (var r = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2)"margin" === i && (s += Q.css(e, i + mi[r], !0)), n ? ("content" === i && (s -= parseFloat(ii(e, "padding" + mi[r])) || 0), "margin" !== i && (s -= parseFloat(ii(e, "border" + mi[r] + "Width")) || 0)) : (s += parseFloat(ii(e, "padding" + mi[r])) || 0, "padding" !== i && (s += parseFloat(ii(e, "border" + mi[r] + "Width")) || 0));
        return s
    }

    function w(e, t, i) {
        var n = "width" === t ? e.offsetWidth : e.offsetHeight, r = !0, s = Q.support.boxSizing && "border-box" === Q.css(e, "boxSizing");
        if (0 >= n || null == n) {
            if (n = ii(e, t), (0 > n || null == n) && (n = e.style[t]), di.test(n))return n;
            r = s && (Q.support.boxSizingReliable || n === e.style[t]), n = parseFloat(n) || 0
        }
        return n + x(e, t, i || (s ? "border" : "content"), r) + "px"
    }

    function _(e) {
        if (pi[e])return pi[e];
        var t = Q("<" + e + ">").appendTo(B.body), i = t.css("display");
        return t.remove(), ("none" === i || "" === i) && (ni = B.body.appendChild(ni || Q.extend(B.createElement("iframe"), {frameBorder: 0, width: 0, height: 0})), ri && ni.createElement || (ri = (ni.contentWindow || ni.contentDocument).document, ri.write("<!doctype html><html><body>"), ri.close()), t = ri.body.appendChild(ri.createElement(e)), i = ii(t, "display"), B.body.removeChild(ni)), pi[e] = i, i
    }

    function S(e, t, i, n) {
        var r;
        if (Q.isArray(t))Q.each(t, function (t, r) {
            i || xi.test(e) ? n(e, r) : S(e + "[" + ("object" == typeof r ? t : "") + "]", r, i, n)
        }); else if (i || "object" !== Q.type(t))n(e, t); else for (r in t)S(e + "[" + r + "]", t[r], i, n)
    }

    function C(e) {
        return function (t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, r, s, a = t.toLowerCase().split(tt), o = 0, l = a.length;
            if (Q.isFunction(i))for (; l > o; o++)n = a[o], s = /^\+/.test(n), s && (n = n.substr(1) || "*"), r = e[n] = e[n] || [], r[s ? "unshift" : "push"](i)
        }
    }

    function A(e, i, n, r, s, a) {
        s = s || i.dataTypes[0], a = a || {}, a[s] = !0;
        for (var o, l = e[s], c = 0, u = l ? l.length : 0, d = e === Ri; u > c && (d || !o); c++)o = l[c](i, n, r), "string" == typeof o && (!d || a[o] ? o = t : (i.dataTypes.unshift(o), o = A(e, i, n, r, o, a)));
        return!d && o || a["*"] || (o = A(e, i, n, r, "*", a)), o
    }

    function $(e, i) {
        var n, r, s = Q.ajaxSettings.flatOptions || {};
        for (n in i)i[n] !== t && ((s[n] ? e : r || (r = {}))[n] = i[n]);
        r && Q.extend(!0, e, r)
    }

    function k(e, i, n) {
        var r, s, a, o, l = e.contents, c = e.dataTypes, u = e.responseFields;
        for (s in u)s in n && (i[u[s]] = n[s]);
        for (; "*" === c[0];)c.shift(), r === t && (r = e.mimeType || i.getResponseHeader("content-type"));
        if (r)for (s in l)if (l[s] && l[s].test(r)) {
            c.unshift(s);
            break
        }
        if (c[0]in n)a = c[0]; else {
            for (s in n) {
                if (!c[0] || e.converters[s + " " + c[0]]) {
                    a = s;
                    break
                }
                o || (o = s)
            }
            a = a || o
        }
        return a ? (a !== c[0] && c.unshift(a), n[a]) : t
    }

    function T(e, t) {
        var i, n, r, s, a = e.dataTypes.slice(), o = a[0], l = {}, c = 0;
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), a[1])for (i in e.converters)l[i.toLowerCase()] = e.converters[i];
        for (; r = a[++c];)if ("*" !== r) {
            if ("*" !== o && o !== r) {
                if (i = l[o + " " + r] || l["* " + r], !i)for (n in l)if (s = n.split(" "), s[1] === r && (i = l[o + " " + s[0]] || l["* " + s[0]])) {
                    i === !0 ? i = l[n] : l[n] !== !0 && (r = s[0], a.splice(c--, 0, r));
                    break
                }
                if (i !== !0)if (i && e["throws"])t = i(t); else try {
                    t = i(t)
                } catch (u) {
                    return{state: "parsererror", error: i ? u : "No conversion from " + o + " to " + r}
                }
            }
            o = r
        }
        return{state: "success", data: t}
    }

    function D() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function N() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    function E() {
        return setTimeout(function () {
            qi = t
        }, 0), qi = Q.now()
    }

    function M(e, t) {
        Q.each(t, function (t, i) {
            for (var n = (Zi[t] || []).concat(Zi["*"]), r = 0, s = n.length; s > r; r++)if (n[r].call(e, t, i))return
        })
    }

    function P(e, t, i) {
        var n, r = 0, s = Qi.length, a = Q.Deferred().always(function () {
            delete o.elem
        }), o = function () {
            for (var t = qi || E(), i = Math.max(0, l.startTime + l.duration - t), n = i / l.duration || 0, r = 1 - n, s = 0, o = l.tweens.length; o > s; s++)l.tweens[s].run(r);
            return a.notifyWith(e, [l, r, i]), 1 > r && o ? i : (a.resolveWith(e, [l]), !1)
        }, l = a.promise({elem: e, props: Q.extend({}, t), opts: Q.extend(!0, {specialEasing: {}}, i), originalProperties: t, originalOptions: i, startTime: qi || E(), duration: i.duration, tweens: [], createTween: function (t, i) {
            var n = Q.Tween(e, l.opts, t, i, l.opts.specialEasing[t] || l.opts.easing);
            return l.tweens.push(n), n
        }, stop: function (t) {
            for (var i = 0, n = t ? l.tweens.length : 0; n > i; i++)l.tweens[i].run(1);
            return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
        }}), c = l.props;
        for (I(c, l.opts.specialEasing); s > r; r++)if (n = Qi[r].call(l, e, c, l.opts))return n;
        return M(l, c), Q.isFunction(l.opts.start) && l.opts.start.call(e, l), Q.fx.timer(Q.extend(o, {anim: l, queue: l.opts.queue, elem: e})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function I(e, t) {
        var i, n, r, s, a;
        for (i in e)if (n = Q.camelCase(i), r = t[n], s = e[i], Q.isArray(s) && (r = s[1], s = e[i] = s[0]), i !== n && (e[n] = s, delete e[i]), a = Q.cssHooks[n], a && "expand"in a) {
            s = a.expand(s), delete e[n];
            for (i in s)i in e || (e[i] = s[i], t[i] = r)
        } else t[n] = r
    }

    function H(e, t, i) {
        var n, r, s, a, o, l, c, u, d, h = this, p = e.style, f = {}, g = [], m = e.nodeType && y(e);
        i.queue || (u = Q._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, d = u.empty.fire, u.empty.fire = function () {
            u.unqueued || d()
        }), u.unqueued++, h.always(function () {
            h.always(function () {
                u.unqueued--, Q.queue(e, "fx").length || u.empty.fire()
            })
        })), 1 === e.nodeType && ("height"in t || "width"in t) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === Q.css(e, "display") && "none" === Q.css(e, "float") && (Q.support.inlineBlockNeedsLayout && "inline" !== _(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", Q.support.shrinkWrapBlocks || h.done(function () {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (n in t)if (s = t[n], Vi.exec(s)) {
            if (delete t[n], l = l || "toggle" === s, s === (m ? "hide" : "show"))continue;
            g.push(n)
        }
        if (a = g.length) {
            o = Q._data(e, "fxshow") || Q._data(e, "fxshow", {}), "hidden"in o && (m = o.hidden), l && (o.hidden = !m), m ? Q(e).show() : h.done(function () {
                Q(e).hide()
            }), h.done(function () {
                var t;
                Q.removeData(e, "fxshow", !0);
                for (t in f)Q.style(e, t, f[t])
            });
            for (n = 0; a > n; n++)r = g[n], c = h.createTween(r, m ? o[r] : 0), f[r] = o[r] || Q.style(e, r), r in o || (o[r] = c.start, m && (c.end = c.start, c.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function R(e, t, i, n, r) {
        return new R.prototype.init(e, t, i, n, r)
    }

    function L(e, t) {
        var i, n = {height: e}, r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)i = mi[r], n["margin" + i] = n["padding" + i] = e;
        return t && (n.opacity = n.width = e), n
    }

    function O(e) {
        return Q.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }

    var J, F, B = e.document, j = e.location, z = e.navigator, W = e.jQuery, Y = e.$, U = Array.prototype.push, q = Array.prototype.slice, K = Array.prototype.indexOf, V = Object.prototype.toString, G = Object.prototype.hasOwnProperty, X = String.prototype.trim, Q = function (e, t) {
        return new Q.fn.init(e, t, J)
    }, Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, et = /\S/, tt = /\s+/, it = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, nt = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, rt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, st = /^[\],:{}\s]*$/, at = /(?:^|:|,)(?:\s*\[)+/g, ot = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, lt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, ct = /^-ms-/, ut = /-([\da-z])/gi, dt = function (e, t) {
        return(t + "").toUpperCase()
    }, ht = function () {
        B.addEventListener ? (B.removeEventListener("DOMContentLoaded", ht, !1), Q.ready()) : "complete" === B.readyState && (B.detachEvent("onreadystatechange", ht), Q.ready())
    }, pt = {};
    Q.fn = Q.prototype = {constructor: Q, init: function (e, i, n) {
        var r, s, a;
        if (!e)return this;
        if (e.nodeType)return this.context = this[0] = e, this.length = 1, this;
        if ("string" == typeof e) {
            if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : nt.exec(e), !r || !r[1] && i)return!i || i.jquery ? (i || n).find(e) : this.constructor(i).find(e);
            if (r[1])return i = i instanceof Q ? i[0] : i, a = i && i.nodeType ? i.ownerDocument || i : B, e = Q.parseHTML(r[1], a, !0), rt.test(r[1]) && Q.isPlainObject(i) && this.attr.call(e, i, !0), Q.merge(this, e);
            if (s = B.getElementById(r[2]), s && s.parentNode) {
                if (s.id !== r[2])return n.find(e);
                this.length = 1, this[0] = s
            }
            return this.context = B, this.selector = e, this
        }
        return Q.isFunction(e) ? n.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), Q.makeArray(e, this))
    }, selector: "", jquery: "1.8.3", length: 0, size: function () {
        return this.length
    }, toArray: function () {
        return q.call(this)
    }, get: function (e) {
        return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
    }, pushStack: function (e, t, i) {
        var n = Q.merge(this.constructor(), e);
        return n.prevObject = this, n.context = this.context, "find" === t ? n.selector = this.selector + (this.selector ? " " : "") + i : t && (n.selector = this.selector + "." + t + "(" + i + ")"), n
    }, each: function (e, t) {
        return Q.each(this, e, t)
    }, ready: function (e) {
        return Q.ready.promise().done(e), this
    }, eq: function (e) {
        return e = +e, -1 === e ? this.slice(e) : this.slice(e, e + 1)
    }, first: function () {
        return this.eq(0)
    }, last: function () {
        return this.eq(-1)
    }, slice: function () {
        return this.pushStack(q.apply(this, arguments), "slice", q.call(arguments).join(","))
    }, map: function (e) {
        return this.pushStack(Q.map(this, function (t, i) {
            return e.call(t, i, t)
        }))
    }, end: function () {
        return this.prevObject || this.constructor(null)
    }, push: U, sort: [].sort, splice: [].splice}, Q.fn.init.prototype = Q.fn, Q.extend = Q.fn.extend = function () {
        var e, i, n, r, s, a, o = arguments[0] || {}, l = 1, c = arguments.length, u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[1] || {}, l = 2), "object" == typeof o || Q.isFunction(o) || (o = {}), c === l && (o = this, --l); c > l; l++)if (null != (e = arguments[l]))for (i in e)n = o[i], r = e[i], o !== r && (u && r && (Q.isPlainObject(r) || (s = Q.isArray(r))) ? (s ? (s = !1, a = n && Q.isArray(n) ? n : []) : a = n && Q.isPlainObject(n) ? n : {}, o[i] = Q.extend(u, a, r)) : r !== t && (o[i] = r));
        return o
    }, Q.extend({noConflict: function (t) {
        return e.$ === Q && (e.$ = Y), t && e.jQuery === Q && (e.jQuery = W), Q
    }, isReady: !1, readyWait: 1, holdReady: function (e) {
        e ? Q.readyWait++ : Q.ready(!0)
    }, ready: function (e) {
        if (e === !0 ? !--Q.readyWait : !Q.isReady) {
            if (!B.body)return setTimeout(Q.ready, 1);
            Q.isReady = !0, e !== !0 && --Q.readyWait > 0 || (F.resolveWith(B, [Q]), Q.fn.trigger && Q(B).trigger("ready").off("ready"))
        }
    }, isFunction: function (e) {
        return"function" === Q.type(e)
    }, isArray: Array.isArray || function (e) {
        return"array" === Q.type(e)
    }, isWindow: function (e) {
        return null != e && e == e.window
    }, isNumeric: function (e) {
        return!isNaN(parseFloat(e)) && isFinite(e)
    }, type: function (e) {
        return null == e ? e + "" : pt[V.call(e)] || "object"
    }, isPlainObject: function (e) {
        if (!e || "object" !== Q.type(e) || e.nodeType || Q.isWindow(e))return!1;
        try {
            if (e.constructor && !G.call(e, "constructor") && !G.call(e.constructor.prototype, "isPrototypeOf"))return!1
        } catch (i) {
            return!1
        }
        var n;
        for (n in e);
        return n === t || G.call(e, n)
    }, isEmptyObject: function (e) {
        var t;
        for (t in e)return!1;
        return!0
    }, error: function (e) {
        throw Error(e)
    }, parseHTML: function (e, t, i) {
        var n;
        return e && "string" == typeof e ? ("boolean" == typeof t && (i = t, t = 0), t = t || B, (n = rt.exec(e)) ? [t.createElement(n[1])] : (n = Q.buildFragment([e], t, i ? null : []), Q.merge([], (n.cacheable ? Q.clone(n.fragment) : n.fragment).childNodes))) : null
    }, parseJSON: function (i) {
        return i && "string" == typeof i ? (i = Q.trim(i), e.JSON && e.JSON.parse ? e.JSON.parse(i) : st.test(i.replace(ot, "@").replace(lt, "]").replace(at, "")) ? Function("return " + i)() : (Q.error("Invalid JSON: " + i), t)) : null
    }, parseXML: function (i) {
        var n, r;
        if (!i || "string" != typeof i)return null;
        try {
            e.DOMParser ? (r = new DOMParser, n = r.parseFromString(i, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(i))
        } catch (s) {
            n = t
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || Q.error("Invalid XML: " + i), n
    }, noop: function () {
    }, globalEval: function (t) {
        t && et.test(t) && (e.execScript || function (t) {
            e.eval.call(e, t)
        })(t)
    }, camelCase: function (e) {
        return e.replace(ct, "ms-").replace(ut, dt)
    }, nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, each: function (e, i, n) {
        var r, s = 0, a = e.length, o = a === t || Q.isFunction(e);
        if (n)if (o) {
            for (r in e)if (i.apply(e[r], n) === !1)break
        } else for (; a > s && i.apply(e[s++], n) !== !1;); else if (o) {
            for (r in e)if (i.call(e[r], r, e[r]) === !1)break
        } else for (; a > s && i.call(e[s], s, e[s++]) !== !1;);
        return e
    }, trim: X && !X.call("\ufeff\u00a0") ? function (e) {
        return null == e ? "" : X.call(e)
    } : function (e) {
        return null == e ? "" : (e + "").replace(it, "")
    }, makeArray: function (e, t) {
        var i, n = t || [];
        return null != e && (i = Q.type(e), null == e.length || "string" === i || "function" === i || "regexp" === i || Q.isWindow(e) ? U.call(n, e) : Q.merge(n, e)), n
    }, inArray: function (e, t, i) {
        var n;
        if (t) {
            if (K)return K.call(t, e, i);
            for (n = t.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)if (i in t && t[i] === e)return i
        }
        return-1
    }, merge: function (e, i) {
        var n = i.length, r = e.length, s = 0;
        if ("number" == typeof n)for (; n > s; s++)e[r++] = i[s]; else for (; i[s] !== t;)e[r++] = i[s++];
        return e.length = r, e
    }, grep: function (e, t, i) {
        var n, r = [], s = 0, a = e.length;
        for (i = !!i; a > s; s++)n = !!t(e[s], s), i !== n && r.push(e[s]);
        return r
    }, map: function (e, i, n) {
        var r, s, a = [], o = 0, l = e.length, c = e instanceof Q || l !== t && "number" == typeof l && (l > 0 && e[0] && e[l - 1] || 0 === l || Q.isArray(e));
        if (c)for (; l > o; o++)r = i(e[o], o, n), null != r && (a[a.length] = r); else for (s in e)r = i(e[s], s, n), null != r && (a[a.length] = r);
        return a.concat.apply([], a)
    }, guid: 1, proxy: function (e, i) {
        var n, r, s;
        return"string" == typeof i && (n = e[i], i = e, e = n), Q.isFunction(e) ? (r = q.call(arguments, 2), s = function () {
            return e.apply(i, r.concat(q.call(arguments)))
        }, s.guid = e.guid = e.guid || Q.guid++, s) : t
    }, access: function (e, i, n, r, s, a, o) {
        var l, c = null == n, u = 0, d = e.length;
        if (n && "object" == typeof n) {
            for (u in n)Q.access(e, i, u, n[u], 1, a, r);
            s = 1
        } else if (r !== t) {
            if (l = o === t && Q.isFunction(r), c && (l ? (l = i, i = function (e, t, i) {
                return l.call(Q(e), i)
            }) : (i.call(e, r), i = null)), i)for (; d > u; u++)i(e[u], n, l ? r.call(e[u], u, i(e[u], n)) : r, o);
            s = 1
        }
        return s ? e : c ? i.call(e) : d ? i(e[0], n) : a
    }, now: function () {
        return(new Date).getTime()
    }}), Q.ready.promise = function (t) {
        if (!F)if (F = Q.Deferred(), "complete" === B.readyState)setTimeout(Q.ready, 1); else if (B.addEventListener)B.addEventListener("DOMContentLoaded", ht, !1), e.addEventListener("load", Q.ready, !1); else {
            B.attachEvent("onreadystatechange", ht), e.attachEvent("onload", Q.ready);
            var i = !1;
            try {
                i = null == e.frameElement && B.documentElement
            } catch (n) {
            }
            i && i.doScroll && function r() {
                if (!Q.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (e) {
                        return setTimeout(r, 50)
                    }
                    Q.ready()
                }
            }()
        }
        return F.promise(t)
    }, Q.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
        pt["[object " + t + "]"] = t.toLowerCase()
    }), J = Q(B);
    var ft = {};
    Q.Callbacks = function (e) {
        e = "string" == typeof e ? ft[e] || i(e) : Q.extend({}, e);
        var n, r, s, a, o, l, c = [], u = !e.once && [], d = function (t) {
            for (n = e.memory && t, r = !0, l = a || 0, a = 0, o = c.length, s = !0; c && o > l; l++)if (c[l].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                n = !1;
                break
            }
            s = !1, c && (u ? u.length && d(u.shift()) : n ? c = [] : h.disable())
        }, h = {add: function () {
            if (c) {
                var t = c.length;
                (function i(t) {
                    Q.each(t, function (t, n) {
                        var r = Q.type(n);
                        "function" === r ? e.unique && h.has(n) || c.push(n) : n && n.length && "string" !== r && i(n)
                    })
                })(arguments), s ? o = c.length : n && (a = t, d(n))
            }
            return this
        }, remove: function () {
            return c && Q.each(arguments, function (e, t) {
                for (var i; (i = Q.inArray(t, c, i)) > -1;)c.splice(i, 1), s && (o >= i && o--, l >= i && l--)
            }), this
        }, has: function (e) {
            return Q.inArray(e, c) > -1
        }, empty: function () {
            return c = [], this
        }, disable: function () {
            return c = u = n = t, this
        }, disabled: function () {
            return!c
        }, lock: function () {
            return u = t, n || h.disable(), this
        }, locked: function () {
            return!u
        }, fireWith: function (e, t) {
            return t = t || [], t = [e, t.slice ? t.slice() : t], !c || r && !u || (s ? u.push(t) : d(t)), this
        }, fire: function () {
            return h.fireWith(this, arguments), this
        }, fired: function () {
            return!!r
        }};
        return h
    }, Q.extend({Deferred: function (e) {
        var t = [
            ["resolve", "done", Q.Callbacks("once memory"), "resolved"],
            ["reject", "fail", Q.Callbacks("once memory"), "rejected"],
            ["notify", "progress", Q.Callbacks("memory")]
        ], i = "pending", n = {state: function () {
            return i
        }, always: function () {
            return r.done(arguments).fail(arguments), this
        }, then: function () {
            var e = arguments;
            return Q.Deferred(function (i) {
                Q.each(t, function (t, n) {
                    var s = n[0], a = e[t];
                    r[n[1]](Q.isFunction(a) ? function () {
                        var e = a.apply(this, arguments);
                        e && Q.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[s + "With"](this === r ? i : this, [e])
                    } : i[s])
                }), e = null
            }).promise()
        }, promise: function (e) {
            return null != e ? Q.extend(e, n) : n
        }}, r = {};
        return n.pipe = n.then, Q.each(t, function (e, s) {
            var a = s[2], o = s[3];
            n[s[1]] = a.add, o && a.add(function () {
                i = o
            }, t[1 ^ e][2].disable, t[2][2].lock), r[s[0]] = a.fire, r[s[0] + "With"] = a.fireWith
        }), n.promise(r), e && e.call(r, r), r
    }, when: function (e) {
        var t, i, n, r = 0, s = q.call(arguments), a = s.length, o = 1 !== a || e && Q.isFunction(e.promise) ? a : 0, l = 1 === o ? e : Q.Deferred(), c = function (e, i, n) {
            return function (r) {
                i[e] = this, n[e] = arguments.length > 1 ? q.call(arguments) : r, n === t ? l.notifyWith(i, n) : --o || l.resolveWith(i, n)
            }
        };
        if (a > 1)for (t = Array(a), i = Array(a), n = Array(a); a > r; r++)s[r] && Q.isFunction(s[r].promise) ? s[r].promise().done(c(r, n, s)).fail(l.reject).progress(c(r, i, t)) : --o;
        return o || l.resolveWith(n, s), l.promise()
    }}), Q.support = function () {
        var i, n, r, s, a, o, l, c, u, d, h, p = B.createElement("div");
        if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0], !n || !r || !n.length)return{};
        s = B.createElement("select"), a = s.appendChild(B.createElement("option")), o = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", i = {leadingWhitespace: 3 === p.firstChild.nodeType, tbody: !p.getElementsByTagName("tbody").length, htmlSerialize: !!p.getElementsByTagName("link").length, style: /top/.test(r.getAttribute("style")), hrefNormalized: "/a" === r.getAttribute("href"), opacity: /^0.5/.test(r.style.opacity), cssFloat: !!r.style.cssFloat, checkOn: "on" === o.value, optSelected: a.selected, getSetAttribute: "t" !== p.className, enctype: !!B.createElement("form").enctype, html5Clone: "<:nav></:nav>" !== B.createElement("nav").cloneNode(!0).outerHTML, boxModel: "CSS1Compat" === B.compatMode, submitBubbles: !0, changeBubbles: !0, focusinBubbles: !1, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1}, o.checked = !0, i.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, i.optDisabled = !a.disabled;
        try {
            delete p.test
        } catch (f) {
            i.deleteExpando = !1
        }
        if (!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", h = function () {
            i.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick"), p.detachEvent("onclick", h)), o = B.createElement("input"), o.value = "t", o.setAttribute("type", "radio"), i.radioValue = "t" === o.value, o.setAttribute("checked", "checked"), o.setAttribute("name", "t"), p.appendChild(o), l = B.createDocumentFragment(), l.appendChild(p.lastChild), i.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, i.appendChecked = o.checked, l.removeChild(o), l.appendChild(p), p.attachEvent)for (u in{submit: !0, change: !0, focusin: !0})c = "on" + u, d = c in p, d || (p.setAttribute(c, "return;"), d = "function" == typeof p[c]), i[u + "Bubbles"] = d;
        return Q(function () {
            var n, r, s, a, o = "padding:0;margin:0;border:0;display:block;overflow:hidden;", l = B.getElementsByTagName("body")[0];
            l && (n = B.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", l.insertBefore(n, l.firstChild), r = B.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = r.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", d = 0 === s[0].offsetHeight, s[0].style.display = "", s[1].style.display = "none", i.reliableHiddenOffsets = d && 0 === s[0].offsetHeight, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", i.boxSizing = 4 === r.offsetWidth, i.doesNotIncludeMarginInBodyOffset = 1 !== l.offsetTop, e.getComputedStyle && (i.pixelPosition = "1%" !== (e.getComputedStyle(r, null) || {}).top, i.boxSizingReliable = "4px" === (e.getComputedStyle(r, null) || {width: "4px"}).width, a = B.createElement("div"), a.style.cssText = r.style.cssText = o, a.style.marginRight = a.style.width = "0", r.style.width = "1px", r.appendChild(a), i.reliableMarginRight = !parseFloat((e.getComputedStyle(a, null) || {}).marginRight)), r.style.zoom !== t && (r.innerHTML = "", r.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", i.inlineBlockNeedsLayout = 3 === r.offsetWidth, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", i.shrinkWrapBlocks = 3 !== r.offsetWidth, n.style.zoom = 1), l.removeChild(n), n = r = s = a = null)
        }), l.removeChild(p), n = r = s = a = o = l = p = null, i
    }();
    var gt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, mt = /([A-Z])/g;
    Q.extend({cache: {}, deletedIds: [], uuid: 0, expando: "jQuery" + (Q.fn.jquery + Math.random()).replace(/\D/g, ""), noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0}, hasData: function (e) {
        return e = e.nodeType ? Q.cache[e[Q.expando]] : e[Q.expando], !!e && !r(e)
    }, data: function (e, i, n, r) {
        if (Q.acceptData(e)) {
            var s, a, o = Q.expando, l = "string" == typeof i, c = e.nodeType, u = c ? Q.cache : e, d = c ? e[o] : e[o] && o;
            if (d && u[d] && (r || u[d].data) || !l || n !== t)return d || (c ? e[o] = d = Q.deletedIds.pop() || Q.guid++ : d = o), u[d] || (u[d] = {}, c || (u[d].toJSON = Q.noop)), ("object" == typeof i || "function" == typeof i) && (r ? u[d] = Q.extend(u[d], i) : u[d].data = Q.extend(u[d].data, i)), s = u[d], r || (s.data || (s.data = {}), s = s.data), n !== t && (s[Q.camelCase(i)] = n), l ? (a = s[i], null == a && (a = s[Q.camelCase(i)])) : a = s, a
        }
    }, removeData: function (e, t, i) {
        if (Q.acceptData(e)) {
            var n, s, a, o = e.nodeType, l = o ? Q.cache : e, c = o ? e[Q.expando] : Q.expando;
            if (l[c]) {
                if (t && (n = i ? l[c] : l[c].data)) {
                    Q.isArray(t) || (t in n ? t = [t] : (t = Q.camelCase(t), t = t in n ? [t] : t.split(" ")));
                    for (s = 0, a = t.length; a > s; s++)delete n[t[s]];
                    if (!(i ? r : Q.isEmptyObject)(n))return
                }
                (i || (delete l[c].data, r(l[c]))) && (o ? Q.cleanData([e], !0) : Q.support.deleteExpando || l != l.window ? delete l[c] : l[c] = null)
            }
        }
    }, _data: function (e, t, i) {
        return Q.data(e, t, i, !0)
    }, acceptData: function (e) {
        var t = e.nodeName && Q.noData[e.nodeName.toLowerCase()];
        return!t || t !== !0 && e.getAttribute("classid") === t
    }}), Q.fn.extend({data: function (e, i) {
        var r, s, a, o, l, c = this[0], u = 0, d = null;
        if (e === t) {
            if (this.length && (d = Q.data(c), 1 === c.nodeType && !Q._data(c, "parsedAttrs"))) {
                for (a = c.attributes, l = a.length; l > u; u++)o = a[u].name, o.indexOf("data-") || (o = Q.camelCase(o.substring(5)), n(c, o, d[o]));
                Q._data(c, "parsedAttrs", !0)
            }
            return d
        }
        return"object" == typeof e ? this.each(function () {
            Q.data(this, e)
        }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", s = r[1] + "!", Q.access(this, function (i) {
            return i === t ? (d = this.triggerHandler("getData" + s, [r[0]]), d === t && c && (d = Q.data(c, e), d = n(c, e, d)), d === t && r[1] ? this.data(r[0]) : d) : (r[1] = i, this.each(function () {
                var t = Q(this);
                t.triggerHandler("setData" + s, r), Q.data(this, e, i), t.triggerHandler("changeData" + s, r)
            }), t)
        }, null, i, arguments.length > 1, null, !1))
    }, removeData: function (e) {
        return this.each(function () {
            Q.removeData(this, e)
        })
    }}), Q.extend({queue: function (e, i, n) {
        var r;
        return e ? (i = (i || "fx") + "queue", r = Q._data(e, i), n && (!r || Q.isArray(n) ? r = Q._data(e, i, Q.makeArray(n)) : r.push(n)), r || []) : t
    }, dequeue: function (e, t) {
        t = t || "fx";
        var i = Q.queue(e, t), n = i.length, r = i.shift(), s = Q._queueHooks(e, t), a = function () {
            Q.dequeue(e, t)
        };
        "inprogress" === r && (r = i.shift(), n--), r && ("fx" === t && i.unshift("inprogress"), delete s.stop, r.call(e, a, s)), !n && s && s.empty.fire()
    }, _queueHooks: function (e, t) {
        var i = t + "queueHooks";
        return Q._data(e, i) || Q._data(e, i, {empty: Q.Callbacks("once memory").add(function () {
            Q.removeData(e, t + "queue", !0), Q.removeData(e, i, !0)
        })})
    }}), Q.fn.extend({queue: function (e, i) {
        var n = 2;
        return"string" != typeof e && (i = e, e = "fx", n--), n > arguments.length ? Q.queue(this[0], e) : i === t ? this : this.each(function () {
            var t = Q.queue(this, e, i);
            Q._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && Q.dequeue(this, e)
        })
    }, dequeue: function (e) {
        return this.each(function () {
            Q.dequeue(this, e)
        })
    }, delay: function (e, t) {
        return e = Q.fx ? Q.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, i) {
            var n = setTimeout(t, e);
            i.stop = function () {
                clearTimeout(n)
            }
        })
    }, clearQueue: function (e) {
        return this.queue(e || "fx", [])
    }, promise: function (e, i) {
        var n, r = 1, s = Q.Deferred(), a = this, o = this.length, l = function () {
            --r || s.resolveWith(a, [a])
        };
        for ("string" != typeof e && (i = e, e = t), e = e || "fx"; o--;)n = Q._data(a[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(l));
        return l(), s.promise(i)
    }});
    var yt, vt, bt, xt = /[\t\r\n]/g, wt = /\r/g, _t = /^(?:button|input)$/i, St = /^(?:button|input|object|select|textarea)$/i, Ct = /^a(?:rea|)$/i, At = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, $t = Q.support.getSetAttribute;
    Q.fn.extend({attr: function (e, t) {
        return Q.access(this, Q.attr, e, t, arguments.length > 1)
    }, removeAttr: function (e) {
        return this.each(function () {
            Q.removeAttr(this, e)
        })
    }, prop: function (e, t) {
        return Q.access(this, Q.prop, e, t, arguments.length > 1)
    }, removeProp: function (e) {
        return e = Q.propFix[e] || e, this.each(function () {
            try {
                this[e] = t, delete this[e]
            } catch (i) {
            }
        })
    }, addClass: function (e) {
        var t, i, n, r, s, a, o;
        if (Q.isFunction(e))return this.each(function (t) {
            Q(this).addClass(e.call(this, t, this.className))
        });
        if (e && "string" == typeof e)for (t = e.split(tt), i = 0, n = this.length; n > i; i++)if (r = this[i], 1 === r.nodeType)if (r.className || 1 !== t.length) {
            for (s = " " + r.className + " ", a = 0, o = t.length; o > a; a++)0 > s.indexOf(" " + t[a] + " ") && (s += t[a] + " ");
            r.className = Q.trim(s)
        } else r.className = e;
        return this
    }, removeClass: function (e) {
        var i, n, r, s, a, o, l;
        if (Q.isFunction(e))return this.each(function (t) {
            Q(this).removeClass(e.call(this, t, this.className))
        });
        if (e && "string" == typeof e || e === t)for (i = (e || "").split(tt), o = 0, l = this.length; l > o; o++)if (r = this[o], 1 === r.nodeType && r.className) {
            for (n = (" " + r.className + " ").replace(xt, " "), s = 0, a = i.length; a > s; s++)for (; n.indexOf(" " + i[s] + " ") >= 0;)n = n.replace(" " + i[s] + " ", " ");
            r.className = e ? Q.trim(n) : ""
        }
        return this
    }, toggleClass: function (e, t) {
        var i = typeof e, n = "boolean" == typeof t;
        return Q.isFunction(e) ? this.each(function (i) {
            Q(this).toggleClass(e.call(this, i, this.className, t), t)
        }) : this.each(function () {
            if ("string" === i)for (var r, s = 0, a = Q(this), o = t, l = e.split(tt); r = l[s++];)o = n ? o : !a.hasClass(r), a[o ? "addClass" : "removeClass"](r); else("undefined" === i || "boolean" === i) && (this.className && Q._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : Q._data(this, "__className__") || "")
        })
    }, hasClass: function (e) {
        for (var t = " " + e + " ", i = 0, n = this.length; n > i; i++)if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(xt, " ").indexOf(t) >= 0)return!0;
        return!1
    }, val: function (e) {
        var i, n, r, s = this[0];
        {
            if (arguments.length)return r = Q.isFunction(e), this.each(function (n) {
                var s, a = Q(this);
                1 === this.nodeType && (s = r ? e.call(this, n, a.val()) : e, null == s ? s = "" : "number" == typeof s ? s += "" : Q.isArray(s) && (s = Q.map(s, function (e) {
                    return null == e ? "" : e + ""
                })), i = Q.valHooks[this.type] || Q.valHooks[this.nodeName.toLowerCase()], i && "set"in i && i.set(this, s, "value") !== t || (this.value = s))
            });
            if (s)return i = Q.valHooks[s.type] || Q.valHooks[s.nodeName.toLowerCase()], i && "get"in i && (n = i.get(s, "value")) !== t ? n : (n = s.value, "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)
        }
    }}), Q.extend({valHooks: {option: {get: function (e) {
        var t = e.attributes.value;
        return!t || t.specified ? e.value : e.text
    }}, select: {get: function (e) {
        for (var t, i, n = e.options, r = e.selectedIndex, s = "select-one" === e.type || 0 > r, a = s ? null : [], o = s ? r + 1 : n.length, l = 0 > r ? o : s ? r : 0; o > l; l++)if (i = n[l], !(!i.selected && l !== r || (Q.support.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && Q.nodeName(i.parentNode, "optgroup"))) {
            if (t = Q(i).val(), s)return t;
            a.push(t)
        }
        return a
    }, set: function (e, t) {
        var i = Q.makeArray(t);
        return Q(e).find("option").each(function () {
            this.selected = Q.inArray(Q(this).val(), i) >= 0
        }), i.length || (e.selectedIndex = -1), i
    }}}, attrFn: {}, attr: function (e, i, n, r) {
        var s, a, o, l = e.nodeType;
        if (e && 3 !== l && 8 !== l && 2 !== l)return r && Q.isFunction(Q.fn[i]) ? Q(e)[i](n) : e.getAttribute === t ? Q.prop(e, i, n) : (o = 1 !== l || !Q.isXMLDoc(e), o && (i = i.toLowerCase(), a = Q.attrHooks[i] || (At.test(i) ? vt : yt)), n !== t ? null === n ? (Q.removeAttr(e, i), t) : a && "set"in a && o && (s = a.set(e, n, i)) !== t ? s : (e.setAttribute(i, n + ""), n) : a && "get"in a && o && null !== (s = a.get(e, i)) ? s : (s = e.getAttribute(i), null === s ? t : s))
    }, removeAttr: function (e, t) {
        var i, n, r, s, a = 0;
        if (t && 1 === e.nodeType)for (n = t.split(tt); n.length > a; a++)r = n[a], r && (i = Q.propFix[r] || r, s = At.test(r), s || Q.attr(e, r, ""), e.removeAttribute($t ? r : i), s && i in e && (e[i] = !1))
    }, attrHooks: {type: {set: function (e, t) {
        if (_t.test(e.nodeName) && e.parentNode)Q.error("type property can't be changed"); else if (!Q.support.radioValue && "radio" === t && Q.nodeName(e, "input")) {
            var i = e.value;
            return e.setAttribute("type", t), i && (e.value = i), t
        }
    }}, value: {get: function (e, t) {
        return yt && Q.nodeName(e, "button") ? yt.get(e, t) : t in e ? e.value : null
    }, set: function (e, i, n) {
        return yt && Q.nodeName(e, "button") ? yt.set(e, i, n) : (e.value = i, t)
    }}}, propFix: {tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable"}, prop: function (e, i, n) {
        var r, s, a, o = e.nodeType;
        if (e && 3 !== o && 8 !== o && 2 !== o)return a = 1 !== o || !Q.isXMLDoc(e), a && (i = Q.propFix[i] || i, s = Q.propHooks[i]), n !== t ? s && "set"in s && (r = s.set(e, n, i)) !== t ? r : e[i] = n : s && "get"in s && null !== (r = s.get(e, i)) ? r : e[i]
    }, propHooks: {tabIndex: {get: function (e) {
        var i = e.getAttributeNode("tabindex");
        return i && i.specified ? parseInt(i.value, 10) : St.test(e.nodeName) || Ct.test(e.nodeName) && e.href ? 0 : t
    }}}}), vt = {get: function (e, i) {
        var n, r = Q.prop(e, i);
        return r === !0 || "boolean" != typeof r && (n = e.getAttributeNode(i)) && n.nodeValue !== !1 ? i.toLowerCase() : t
    }, set: function (e, t, i) {
        var n;
        return t === !1 ? Q.removeAttr(e, i) : (n = Q.propFix[i] || i, n in e && (e[n] = !0), e.setAttribute(i, i.toLowerCase())), i
    }}, $t || (bt = {name: !0, id: !0, coords: !0}, yt = Q.valHooks.button = {get: function (e, i) {
        var n;
        return n = e.getAttributeNode(i), n && (bt[i] ? "" !== n.value : n.specified) ? n.value : t
    }, set: function (e, t, i) {
        var n = e.getAttributeNode(i);
        return n || (n = B.createAttribute(i), e.setAttributeNode(n)), n.value = t + ""
    }}, Q.each(["width", "height"], function (e, i) {
        Q.attrHooks[i] = Q.extend(Q.attrHooks[i], {set: function (e, n) {
            return"" === n ? (e.setAttribute(i, "auto"), n) : t
        }})
    }), Q.attrHooks.contenteditable = {get: yt.get, set: function (e, t, i) {
        "" === t && (t = "false"), yt.set(e, t, i)
    }}), Q.support.hrefNormalized || Q.each(["href", "src", "width", "height"], function (e, i) {
        Q.attrHooks[i] = Q.extend(Q.attrHooks[i], {get: function (e) {
            var n = e.getAttribute(i, 2);
            return null === n ? t : n
        }})
    }), Q.support.style || (Q.attrHooks.style = {get: function (e) {
        return e.style.cssText.toLowerCase() || t
    }, set: function (e, t) {
        return e.style.cssText = t + ""
    }}), Q.support.optSelected || (Q.propHooks.selected = Q.extend(Q.propHooks.selected, {get: function (e) {
        var t = e.parentNode;
        return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
    }})), Q.support.enctype || (Q.propFix.enctype = "encoding"), Q.support.checkOn || Q.each(["radio", "checkbox"], function () {
        Q.valHooks[this] = {get: function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }}
    }), Q.each(["radio", "checkbox"], function () {
        Q.valHooks[this] = Q.extend(Q.valHooks[this], {set: function (e, i) {
            return Q.isArray(i) ? e.checked = Q.inArray(Q(e).val(), i) >= 0 : t
        }})
    });
    var kt = /^(?:textarea|input|select)$/i, Tt = /^([^\.]*|)(?:\.(.+)|)$/, Dt = /(?:^|\s)hover(\.\S+|)\b/, Nt = /^key/, Et = /^(?:mouse|contextmenu)|click/, Mt = /^(?:focusinfocus|focusoutblur)$/, Pt = function (e) {
        return Q.event.special.hover ? e : e.replace(Dt, "mouseenter$1 mouseleave$1")
    };
    Q.event = {add: function (e, i, n, r, s) {
        var a, o, l, c, u, d, h, p, f, g, m;
        if (3 !== e.nodeType && 8 !== e.nodeType && i && n && (a = Q._data(e))) {
            for (n.handler && (f = n, n = f.handler, s = f.selector), n.guid || (n.guid = Q.guid++), l = a.events, l || (a.events = l = {}), o = a.handle, o || (a.handle = o = function (e) {
                return Q === t || e && Q.event.triggered === e.type ? t : Q.event.dispatch.apply(o.elem, arguments)
            }, o.elem = e), i = Q.trim(Pt(i)).split(" "), c = 0; i.length > c; c++)u = Tt.exec(i[c]) || [], d = u[1], h = (u[2] || "").split(".").sort(), m = Q.event.special[d] || {}, d = (s ? m.delegateType : m.bindType) || d, m = Q.event.special[d] || {}, p = Q.extend({type: d, origType: u[1], data: r, handler: n, guid: n.guid, selector: s, needsContext: s && Q.expr.match.needsContext.test(s), namespace: h.join(".")}, f), g = l[d], g || (g = l[d] = [], g.delegateCount = 0, m.setup && m.setup.call(e, r, h, o) !== !1 || (e.addEventListener ? e.addEventListener(d, o, !1) : e.attachEvent && e.attachEvent("on" + d, o))), m.add && (m.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), s ? g.splice(g.delegateCount++, 0, p) : g.push(p), Q.event.global[d] = !0;
            e = null
        }
    }, global: {}, remove: function (e, t, i, n, r) {
        var s, a, o, l, c, u, d, h, p, f, g, m = Q.hasData(e) && Q._data(e);
        if (m && (h = m.events)) {
            for (t = Q.trim(Pt(t || "")).split(" "), s = 0; t.length > s; s++)if (a = Tt.exec(t[s]) || [], o = l = a[1], c = a[2], o) {
                for (p = Q.event.special[o] || {}, o = (n ? p.delegateType : p.bindType) || o, f = h[o] || [], u = f.length, c = c ? RegExp("(^|\\.)" + c.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, d = 0; f.length > d; d++)g = f[d], !r && l !== g.origType || i && i.guid !== g.guid || c && !c.test(g.namespace) || n && n !== g.selector && ("**" !== n || !g.selector) || (f.splice(d--, 1), g.selector && f.delegateCount--, p.remove && p.remove.call(e, g));
                0 === f.length && u !== f.length && (p.teardown && p.teardown.call(e, c, m.handle) !== !1 || Q.removeEvent(e, o, m.handle), delete h[o])
            } else for (o in h)Q.event.remove(e, o + t[s], i, n, !0);
            Q.isEmptyObject(h) && (delete m.handle, Q.removeData(e, "events", !0))
        }
    }, customEvent: {getData: !0, setData: !0, changeData: !0}, trigger: function (i, n, r, s) {
        if (!r || 3 !== r.nodeType && 8 !== r.nodeType) {
            var a, o, l, c, u, d, h, p, f, g, m = i.type || i, y = [];
            if (!Mt.test(m + Q.event.triggered) && (m.indexOf("!") >= 0 && (m = m.slice(0, -1), o = !0), m.indexOf(".") >= 0 && (y = m.split("."), m = y.shift(), y.sort()), r && !Q.event.customEvent[m] || Q.event.global[m]))if (i = "object" == typeof i ? i[Q.expando] ? i : new Q.Event(m, i) : new Q.Event(m), i.type = m, i.isTrigger = !0, i.exclusive = o, i.namespace = y.join("."), i.namespace_re = i.namespace ? RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, d = 0 > m.indexOf(":") ? "on" + m : "", r) {
                if (i.result = t, i.target || (i.target = r), n = null != n ? Q.makeArray(n) : [], n.unshift(i), h = Q.event.special[m] || {}, !h.trigger || h.trigger.apply(r, n) !== !1) {
                    if (f = [
                        [r, h.bindType || m]
                    ], !s && !h.noBubble && !Q.isWindow(r)) {
                        for (g = h.delegateType || m, c = Mt.test(g + m) ? r : r.parentNode, u = r; c; c = c.parentNode)f.push([c, g]), u = c;
                        u === (r.ownerDocument || B) && f.push([u.defaultView || u.parentWindow || e, g])
                    }
                    for (l = 0; f.length > l && !i.isPropagationStopped(); l++)c = f[l][0], i.type = f[l][1], p = (Q._data(c, "events") || {})[i.type] && Q._data(c, "handle"), p && p.apply(c, n), p = d && c[d], p && Q.acceptData(c) && p.apply && p.apply(c, n) === !1 && i.preventDefault();
                    return i.type = m, s || i.isDefaultPrevented() || h._default && h._default.apply(r.ownerDocument, n) !== !1 || "click" === m && Q.nodeName(r, "a") || !Q.acceptData(r) || d && r[m] && ("focus" !== m && "blur" !== m || 0 !== i.target.offsetWidth) && !Q.isWindow(r) && (u = r[d], u && (r[d] = null), Q.event.triggered = m, r[m](), Q.event.triggered = t, u && (r[d] = u)), i.result
                }
            } else {
                a = Q.cache;
                for (l in a)a[l].events && a[l].events[m] && Q.event.trigger(i, n, a[l].handle.elem, !0)
            }
        }
    }, dispatch: function (i) {
        i = Q.event.fix(i || e.event);
        var n, r, s, a, o, l, c, u, d, h = (Q._data(this, "events") || {})[i.type] || [], p = h.delegateCount, f = q.call(arguments), g = !i.exclusive && !i.namespace, m = Q.event.special[i.type] || {}, y = [];
        if (f[0] = i, i.delegateTarget = this, !m.preDispatch || m.preDispatch.call(this, i) !== !1) {
            if (p && (!i.button || "click" !== i.type))for (s = i.target; s != this; s = s.parentNode || this)if (s.disabled !== !0 || "click" !== i.type) {
                for (o = {}, c = [], n = 0; p > n; n++)u = h[n], d = u.selector, o[d] === t && (o[d] = u.needsContext ? Q(d, this).index(s) >= 0 : Q.find(d, this, null, [s]).length), o[d] && c.push(u);
                c.length && y.push({elem: s, matches: c})
            }
            for (h.length > p && y.push({elem: this, matches: h.slice(p)}), n = 0; y.length > n && !i.isPropagationStopped(); n++)for (l = y[n], i.currentTarget = l.elem, r = 0; l.matches.length > r && !i.isImmediatePropagationStopped(); r++)u = l.matches[r], (g || !i.namespace && !u.namespace || i.namespace_re && i.namespace_re.test(u.namespace)) && (i.data = u.data, i.handleObj = u, a = ((Q.event.special[u.origType] || {}).handle || u.handler).apply(l.elem, f), a !== t && (i.result = a, a === !1 && (i.preventDefault(), i.stopPropagation())));
            return m.postDispatch && m.postDispatch.call(this, i), i.result
        }
    }, props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
    }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (e, i) {
        var n, r, s, a = i.button, o = i.fromElement;
        return null == e.pageX && null != i.clientX && (n = e.target.ownerDocument || B, r = n.documentElement, s = n.body, e.pageX = i.clientX + (r && r.scrollLeft || s && s.scrollLeft || 0) - (r && r.clientLeft || s && s.clientLeft || 0), e.pageY = i.clientY + (r && r.scrollTop || s && s.scrollTop || 0) - (r && r.clientTop || s && s.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? i.toElement : o), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
    }}, fix: function (e) {
        if (e[Q.expando])return e;
        var t, i, n = e, r = Q.event.fixHooks[e.type] || {}, s = r.props ? this.props.concat(r.props) : this.props;
        for (e = Q.Event(n), t = s.length; t;)i = s[--t], e[i] = n[i];
        return e.target || (e.target = n.srcElement || B), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, r.filter ? r.filter(e, n) : e
    }, special: {load: {noBubble: !0}, focus: {delegateType: "focusin"}, blur: {delegateType: "focusout"}, beforeunload: {setup: function (e, t, i) {
        Q.isWindow(this) && (this.onbeforeunload = i)
    }, teardown: function (e, t) {
        this.onbeforeunload === t && (this.onbeforeunload = null)
    }}}, simulate: function (e, t, i, n) {
        var r = Q.extend(new Q.Event, i, {type: e, isSimulated: !0, originalEvent: {}});
        n ? Q.event.trigger(r, null, t) : Q.event.dispatch.call(t, r), r.isDefaultPrevented() && i.preventDefault()
    }}, Q.event.handle = Q.event.dispatch, Q.removeEvent = B.removeEventListener ? function (e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i, !1)
    } : function (e, i, n) {
        var r = "on" + i;
        e.detachEvent && (e[r] === t && (e[r] = null), e.detachEvent(r, n))
    }, Q.Event = function (e, i) {
        return this instanceof Q.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? a : s) : this.type = e, i && Q.extend(this, i), this.timeStamp = e && e.timeStamp || Q.now(), this[Q.expando] = !0, t) : new Q.Event(e, i)
    }, Q.Event.prototype = {preventDefault: function () {
        this.isDefaultPrevented = a;
        var e = this.originalEvent;
        e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
    }, stopPropagation: function () {
        this.isPropagationStopped = a;
        var e = this.originalEvent;
        e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
    }, stopImmediatePropagation: function () {
        this.isImmediatePropagationStopped = a, this.stopPropagation()
    }, isDefaultPrevented: s, isPropagationStopped: s, isImmediatePropagationStopped: s}, Q.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        Q.event.special[e] = {delegateType: t, bindType: t, handle: function (e) {
            var i, n = this, r = e.relatedTarget, s = e.handleObj;
            return s.selector, (!r || r !== n && !Q.contains(n, r)) && (e.type = s.origType, i = s.handler.apply(this, arguments), e.type = t), i
        }}
    }), Q.support.submitBubbles || (Q.event.special.submit = {setup: function () {
        return Q.nodeName(this, "form") ? !1 : (Q.event.add(this, "click._submit keypress._submit", function (e) {
            var i = e.target, n = Q.nodeName(i, "input") || Q.nodeName(i, "button") ? i.form : t;
            n && !Q._data(n, "_submit_attached") && (Q.event.add(n, "submit._submit", function (e) {
                e._submit_bubble = !0
            }), Q._data(n, "_submit_attached", !0))
        }), t)
    }, postDispatch: function (e) {
        e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && Q.event.simulate("submit", this.parentNode, e, !0))
    }, teardown: function () {
        return Q.nodeName(this, "form") ? !1 : (Q.event.remove(this, "._submit"), t)
    }}), Q.support.changeBubbles || (Q.event.special.change = {setup: function () {
        return kt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (Q.event.add(this, "propertychange._change", function (e) {
            "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
        }), Q.event.add(this, "click._change", function (e) {
            this._just_changed && !e.isTrigger && (this._just_changed = !1), Q.event.simulate("change", this, e, !0)
        })), !1) : (Q.event.add(this, "beforeactivate._change", function (e) {
            var t = e.target;
            kt.test(t.nodeName) && !Q._data(t, "_change_attached") && (Q.event.add(t, "change._change", function (e) {
                !this.parentNode || e.isSimulated || e.isTrigger || Q.event.simulate("change", this.parentNode, e, !0)
            }), Q._data(t, "_change_attached", !0))
        }), t)
    }, handle: function (e) {
        var i = e.target;
        return this !== i || e.isSimulated || e.isTrigger || "radio" !== i.type && "checkbox" !== i.type ? e.handleObj.handler.apply(this, arguments) : t
    }, teardown: function () {
        return Q.event.remove(this, "._change"), !kt.test(this.nodeName)
    }}), Q.support.focusinBubbles || Q.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var i = 0, n = function (e) {
            Q.event.simulate(t, e.target, Q.event.fix(e), !0)
        };
        Q.event.special[t] = {setup: function () {
            0 === i++ && B.addEventListener(e, n, !0)
        }, teardown: function () {
            0 === --i && B.removeEventListener(e, n, !0)
        }}
    }), Q.fn.extend({on: function (e, i, n, r, a) {
        var o, l;
        if ("object" == typeof e) {
            "string" != typeof i && (n = n || i, i = t);
            for (l in e)this.on(l, i, n, e[l], a);
            return this
        }
        if (null == n && null == r ? (r = i, n = i = t) : null == r && ("string" == typeof i ? (r = n, n = t) : (r = n, n = i, i = t)), r === !1)r = s; else if (!r)return this;
        return 1 === a && (o = r, r = function (e) {
            return Q().off(e), o.apply(this, arguments)
        }, r.guid = o.guid || (o.guid = Q.guid++)), this.each(function () {
            Q.event.add(this, e, r, n, i)
        })
    }, one: function (e, t, i, n) {
        return this.on(e, t, i, n, 1)
    }, off: function (e, i, n) {
        var r, a;
        if (e && e.preventDefault && e.handleObj)return r = e.handleObj, Q(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
        if ("object" == typeof e) {
            for (a in e)this.off(a, i, e[a]);
            return this
        }
        return(i === !1 || "function" == typeof i) && (n = i, i = t), n === !1 && (n = s), this.each(function () {
            Q.event.remove(this, e, n, i)
        })
    }, bind: function (e, t, i) {
        return this.on(e, null, t, i)
    }, unbind: function (e, t) {
        return this.off(e, null, t)
    }, live: function (e, t, i) {
        return Q(this.context).on(e, this.selector, t, i), this
    }, die: function (e, t) {
        return Q(this.context).off(e, this.selector || "**", t), this
    }, delegate: function (e, t, i, n) {
        return this.on(t, e, i, n)
    }, undelegate: function (e, t, i) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
    }, trigger: function (e, t) {
        return this.each(function () {
            Q.event.trigger(e, t, this)
        })
    }, triggerHandler: function (e, i) {
        return this[0] ? Q.event.trigger(e, i, this[0], !0) : t
    }, toggle: function (e) {
        var t = arguments, i = e.guid || Q.guid++, n = 0, r = function (i) {
            var r = (Q._data(this, "lastToggle" + e.guid) || 0) % n;
            return Q._data(this, "lastToggle" + e.guid, r + 1), i.preventDefault(), t[r].apply(this, arguments) || !1
        };
        for (r.guid = i; t.length > n;)t[n++].guid = i;
        return this.click(r)
    }, hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    }}), Q.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        Q.fn[t] = function (e, i) {
            return null == i && (i = e, e = null), arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }, Nt.test(t) && (Q.event.fixHooks[t] = Q.event.keyHooks), Et.test(t) && (Q.event.fixHooks[t] = Q.event.mouseHooks)
    }), function (e, t) {
        function i(e, t, i, n) {
            i = i || [], t = t || E;
            var r, s, a, o, l = t.nodeType;
            if (!e || "string" != typeof e)return i;
            if (1 !== l && 9 !== l)return[];
            if (a = w(t), !a && !n && (r = it.exec(e)))if (o = r[1]) {
                if (9 === l) {
                    if (s = t.getElementById(o), !s || !s.parentNode)return i;
                    if (s.id === o)return i.push(s), i
                } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(o)) && _(t, s) && s.id === o)return i.push(s), i
            } else {
                if (r[2])return R.apply(i, L.call(t.getElementsByTagName(e), 0)), i;
                if ((o = r[3]) && ht && t.getElementsByClassName)return R.apply(i, L.call(t.getElementsByClassName(o), 0)), i
            }
            return g(e.replace(X, "$1"), t, i, n, a)
        }

        function n(e) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return"input" === i && t.type === e
            }
        }

        function r(e) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return("input" === i || "button" === i) && t.type === e
            }
        }

        function s(e) {
            return J(function (t) {
                return t = +t, J(function (i, n) {
                    for (var r, s = e([], i.length, t), a = s.length; a--;)i[r = s[a]] && (i[r] = !(n[r] = i[r]))
                })
            })
        }

        function a(e, t, i) {
            if (e === t)return i;
            for (var n = e.nextSibling; n;) {
                if (n === t)return-1;
                n = n.nextSibling
            }
            return 1
        }

        function o(e, t) {
            var n, r, s, a, o, l, c, u = j[D][e + " "];
            if (u)return t ? 0 : u.slice(0);
            for (o = e, l = [], c = b.preFilter; o;) {
                (!n || (r = Z.exec(o))) && (r && (o = o.slice(r[0].length) || o), l.push(s = [])), n = !1, (r = et.exec(o)) && (s.push(n = new N(r.shift())), o = o.slice(n.length), n.type = r[0].replace(X, " "));
                for (a in b.filter)!(r = ot[a].exec(o)) || c[a] && !(r = c[a](r)) || (s.push(n = new N(r.shift())), o = o.slice(n.length), n.type = a, n.matches = r);
                if (!n)break
            }
            return t ? o.length : o ? i.error(e) : j(e, l).slice(0)
        }

        function l(e, t, i) {
            var n = t.dir, r = i && "parentNode" === t.dir, s = I++;
            return t.first ? function (t, i, s) {
                for (; t = t[n];)if (r || 1 === t.nodeType)return e(t, i, s)
            } : function (t, i, a) {
                if (a) {
                    for (; t = t[n];)if ((r || 1 === t.nodeType) && e(t, i, a))return t
                } else for (var o, l = P + " " + s + " ", c = l + y; t = t[n];)if (r || 1 === t.nodeType) {
                    if ((o = t[D]) === c)return t.sizset;
                    if ("string" == typeof o && 0 === o.indexOf(l)) {
                        if (t.sizset)return t
                    } else {
                        if (t[D] = c, e(t, i, a))return t.sizset = !0, t;
                        t.sizset = !1
                    }
                }
            }
        }

        function c(e) {
            return e.length > 1 ? function (t, i, n) {
                for (var r = e.length; r--;)if (!e[r](t, i, n))return!1;
                return!0
            } : e[0]
        }

        function u(e, t, i, n, r) {
            for (var s, a = [], o = 0, l = e.length, c = null != t; l > o; o++)(s = e[o]) && (!i || i(s, n, r)) && (a.push(s), c && t.push(o));
            return a
        }

        function d(e, t, i, n, r, s) {
            return n && !n[D] && (n = d(n)), r && !r[D] && (r = d(r, s)), J(function (s, a, o, l) {
                var c, d, h, p = [], g = [], m = a.length, y = s || f(t || "*", o.nodeType ? [o] : o, []), v = !e || !s && t ? y : u(y, p, e, o, l), b = i ? r || (s ? e : m || n) ? [] : a : v;
                if (i && i(v, b, o, l), n)for (c = u(b, g), n(c, [], o, l), d = c.length; d--;)(h = c[d]) && (b[g[d]] = !(v[g[d]] = h));
                if (s) {
                    if (r || e) {
                        if (r) {
                            for (c = [], d = b.length; d--;)(h = b[d]) && c.push(v[d] = h);
                            r(null, b = [], c, l)
                        }
                        for (d = b.length; d--;)(h = b[d]) && (c = r ? O.call(s, h) : p[d]) > -1 && (s[c] = !(a[c] = h))
                    }
                } else b = u(b === a ? b.splice(m, b.length) : b), r ? r(null, a, b, l) : R.apply(a, b)
            })
        }

        function h(e) {
            for (var t, i, n, r = e.length, s = b.relative[e[0].type], a = s || b.relative[" "], o = s ? 1 : 0, u = l(function (e) {
                return e === t
            }, a, !0), p = l(function (e) {
                return O.call(t, e) > -1
            }, a, !0), f = [function (e, i, n) {
                return!s && (n || i !== $) || ((t = i).nodeType ? u(e, i, n) : p(e, i, n))
            }]; r > o; o++)if (i = b.relative[e[o].type])f = [l(c(f), i)]; else {
                if (i = b.filter[e[o].type].apply(null, e[o].matches), i[D]) {
                    for (n = ++o; r > n && !b.relative[e[n].type]; n++);
                    return d(o > 1 && c(f), o > 1 && e.slice(0, o - 1).join("").replace(X, "$1"), i, n > o && h(e.slice(o, n)), r > n && h(e = e.slice(n)), r > n && e.join(""))
                }
                f.push(i)
            }
            return c(f)
        }

        function p(e, t) {
            var n = t.length > 0, r = e.length > 0, s = function (a, o, l, c, d) {
                var h, p, f, g = [], m = 0, v = "0", x = a && [], w = null != d, _ = $, S = a || r && b.find.TAG("*", d && o.parentNode || o), C = P += null == _ ? 1 : Math.E;
                for (w && ($ = o !== E && o, y = s.el); null != (h = S[v]); v++) {
                    if (r && h) {
                        for (p = 0; f = e[p]; p++)if (f(h, o, l)) {
                            c.push(h);
                            break
                        }
                        w && (P = C, y = ++s.el)
                    }
                    n && ((h = !f && h) && m--, a && x.push(h))
                }
                if (m += v, n && v !== m) {
                    for (p = 0; f = t[p]; p++)f(x, g, o, l);
                    if (a) {
                        if (m > 0)for (; v--;)x[v] || g[v] || (g[v] = H.call(c));
                        g = u(g)
                    }
                    R.apply(c, g), w && !a && g.length > 0 && m + t.length > 1 && i.uniqueSort(c)
                }
                return w && (P = C, $ = _), x
            };
            return s.el = 0, n ? J(s) : s
        }

        function f(e, t, n) {
            for (var r = 0, s = t.length; s > r; r++)i(e, t[r], n);
            return n
        }

        function g(e, t, i, n, r) {
            var s, a, l, c, u, d = o(e);
            if (d.length, !n && 1 === d.length) {
                if (a = d[0] = d[0].slice(0), a.length > 2 && "ID" === (l = a[0]).type && 9 === t.nodeType && !r && b.relative[a[1].type]) {
                    if (t = b.find.ID(l.matches[0].replace(at, ""), t, r)[0], !t)return i;
                    e = e.slice(a.shift().length)
                }
                for (s = ot.POS.test(e) ? -1 : a.length - 1; s >= 0 && (l = a[s], !b.relative[c = l.type]); s--)if ((u = b.find[c]) && (n = u(l.matches[0].replace(at, ""), nt.test(a[0].type) && t.parentNode || t, r))) {
                    if (a.splice(s, 1), e = n.length && a.join(""), !e)return R.apply(i, L.call(n, 0)), i;
                    break
                }
            }
            return S(e, d)(n, t, r, i, nt.test(e)), i
        }

        function m() {
        }

        var y, v, b, x, w, _, S, C, A, $, k = !0, T = "undefined", D = ("sizcache" + Math.random()).replace(".", ""), N = String, E = e.document, M = E.documentElement, P = 0, I = 0, H = [].pop, R = [].push, L = [].slice, O = [].indexOf || function (e) {
            for (var t = 0, i = this.length; i > t; t++)if (this[t] === e)return t;
            return-1
        }, J = function (e, t) {
            return e[D] = null == t || t, e
        }, F = function () {
            var e = {}, t = [];
            return J(function (i, n) {
                return t.push(i) > b.cacheLength && delete e[t.shift()], e[i + " "] = n
            }, e)
        }, B = F(), j = F(), z = F(), W = "[\\x20\\t\\r\\n\\f]", Y = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", U = Y.replace("w", "w#"), q = "([*^$|!~]?=)", K = "\\[" + W + "*(" + Y + ")" + W + "*(?:" + q + W + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + U + ")|)|)" + W + "*\\]", V = ":(" + Y + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + K + ")|[^:]|\\\\.)*|.*))\\)|)", G = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + W + "*((?:-\\d)?\\d*)" + W + "*\\)|)(?=[^-]|$)", X = RegExp("^" + W + "+|((?:^|[^\\\\])(?:\\\\.)*)" + W + "+$", "g"), Z = RegExp("^" + W + "*," + W + "*"), et = RegExp("^" + W + "*([\\x20\\t\\r\\n\\f>+~])" + W + "*"), tt = RegExp(V), it = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, nt = /[\x20\t\r\n\f]*[+~]/, rt = /h\d/i, st = /input|select|textarea|button/i, at = /\\(?!\\)/g, ot = {ID: RegExp("^#(" + Y + ")"), CLASS: RegExp("^\\.(" + Y + ")"), NAME: RegExp("^\\[name=['\"]?(" + Y + ")['\"]?\\]"), TAG: RegExp("^(" + Y.replace("w", "w*") + ")"), ATTR: RegExp("^" + K), PSEUDO: RegExp("^" + V), POS: RegExp(G, "i"), CHILD: RegExp("^:(only|nth|first|last)-child(?:\\(" + W + "*(even|odd|(([+-]|)(\\d*)n|)" + W + "*(?:([+-]|)" + W + "*(\\d+)|))" + W + "*\\)|)", "i"), needsContext: RegExp("^" + W + "*[>+~]|" + G, "i")}, lt = function (e) {
            var t = E.createElement("div");
            try {
                return e(t)
            } catch (i) {
                return!1
            } finally {
                t = null
            }
        }, ct = lt(function (e) {
            return e.appendChild(E.createComment("")), !e.getElementsByTagName("*").length
        }), ut = lt(function (e) {
            return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== T && "#" === e.firstChild.getAttribute("href")
        }), dt = lt(function (e) {
            e.innerHTML = "<select></select>";
            var t = typeof e.lastChild.getAttribute("multiple");
            return"boolean" !== t && "string" !== t
        }), ht = lt(function (e) {
            return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
        }), pt = lt(function (e) {
            e.id = D + 0, e.innerHTML = "<a name='" + D + "'></a><div name='" + D + "'></div>", M.insertBefore(e, M.firstChild);
            var t = E.getElementsByName && E.getElementsByName(D).length === 2 + E.getElementsByName(D + 0).length;
            return v = !E.getElementById(D), M.removeChild(e), t
        });
        try {
            L.call(M.childNodes, 0)[0].nodeType
        } catch (ft) {
            L = function (e) {
                for (var t, i = []; t = this[e]; e++)i.push(t);
                return i
            }
        }
        i.matches = function (e, t) {
            return i(e, null, null, t)
        }, i.matchesSelector = function (e, t) {
            return i(t, null, null, [e]).length > 0
        }, x = i.getText = function (e) {
            var t, i = "", n = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)i += x(e)
                } else if (3 === r || 4 === r)return e.nodeValue
            } else for (; t = e[n]; n++)i += x(t);
            return i
        }, w = i.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, _ = i.contains = M.contains ? function (e, t) {
            var i = 9 === e.nodeType ? e.documentElement : e, n = t && t.parentNode;
            return e === n || !!(n && 1 === n.nodeType && i.contains && i.contains(n))
        } : M.compareDocumentPosition ? function (e, t) {
            return t && !!(16 & e.compareDocumentPosition(t))
        } : function (e, t) {
            for (; t = t.parentNode;)if (t === e)return!0;
            return!1
        }, i.attr = function (e, t) {
            var i, n = w(e);
            return n || (t = t.toLowerCase()), (i = b.attrHandle[t]) ? i(e) : n || dt ? e.getAttribute(t) : (i = e.getAttributeNode(t), i ? "boolean" == typeof e[t] ? e[t] ? t : null : i.specified ? i.value : null : null)
        }, b = i.selectors = {cacheLength: 50, createPseudo: J, match: ot, attrHandle: ut ? {} : {href: function (e) {
            return e.getAttribute("href", 2)
        }, type: function (e) {
            return e.getAttribute("type")
        }}, find: {ID: v ? function (e, t, i) {
            if (typeof t.getElementById !== T && !i) {
                var n = t.getElementById(e);
                return n && n.parentNode ? [n] : []
            }
        } : function (e, i, n) {
            if (typeof i.getElementById !== T && !n) {
                var r = i.getElementById(e);
                return r ? r.id === e || typeof r.getAttributeNode !== T && r.getAttributeNode("id").value === e ? [r] : t : []
            }
        }, TAG: ct ? function (e, i) {
            return typeof i.getElementsByTagName !== T ? i.getElementsByTagName(e) : t
        } : function (e, t) {
            var i = t.getElementsByTagName(e);
            if ("*" === e) {
                for (var n, r = [], s = 0; n = i[s]; s++)1 === n.nodeType && r.push(n);
                return r
            }
            return i
        }, NAME: pt && function (e, i) {
            return typeof i.getElementsByName !== T ? i.getElementsByName(name) : t
        }, CLASS: ht && function (e, i, n) {
            return typeof i.getElementsByClassName === T || n ? t : i.getElementsByClassName(e)
        }}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (e) {
            return e[1] = e[1].replace(at, ""), e[3] = (e[4] || e[5] || "").replace(at, ""), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        }, CHILD: function (e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1] ? (e[2] || i.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * ("even" === e[2] || "odd" === e[2])), e[4] = +(e[6] + e[7] || "odd" === e[2])) : e[2] && i.error(e[0]), e
        }, PSEUDO: function (e) {
            var t, i;
            return ot.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[3] : (t = e[4]) && (tt.test(t) && (i = o(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (t = t.slice(0, i), e[0] = e[0].slice(0, i)), e[2] = t), e.slice(0, 3))
        }}, filter: {ID: v ? function (e) {
            return e = e.replace(at, ""), function (t) {
                return t.getAttribute("id") === e
            }
        } : function (e) {
            return e = e.replace(at, ""), function (t) {
                var i = typeof t.getAttributeNode !== T && t.getAttributeNode("id");
                return i && i.value === e
            }
        }, TAG: function (e) {
            return"*" === e ? function () {
                return!0
            } : (e = e.replace(at, "").toLowerCase(), function (t) {
                return t.nodeName && t.nodeName.toLowerCase() === e
            })
        }, CLASS: function (e) {
            var t = B[D][e + " "];
            return t || (t = RegExp("(^|" + W + ")" + e + "(" + W + "|$)")) && B(e, function (e) {
                return t.test(e.className || typeof e.getAttribute !== T && e.getAttribute("class") || "")
            })
        }, ATTR: function (e, t, n) {
            return function (r) {
                var s = i.attr(r, e);
                return null == s ? "!=" === t : t ? (s += "", "=" === t ? s === n : "!=" === t ? s !== n : "^=" === t ? n && 0 === s.indexOf(n) : "*=" === t ? n && s.indexOf(n) > -1 : "$=" === t ? n && s.substr(s.length - n.length) === n : "~=" === t ? (" " + s + " ").indexOf(n) > -1 : "|=" === t ? s === n || s.substr(0, n.length + 1) === n + "-" : !1) : !0
            }
        }, CHILD: function (e, t, i, n) {
            return"nth" === e ? function (e) {
                var t, r, s = e.parentNode;
                if (1 === i && 0 === n)return!0;
                if (s)for (r = 0, t = s.firstChild; t && (1 !== t.nodeType || (r++, e !== t)); t = t.nextSibling);
                return r -= n, r === i || 0 === r % i && r / i >= 0
            } : function (t) {
                var i = t;
                switch (e) {
                    case"only":
                    case"first":
                        for (; i = i.previousSibling;)if (1 === i.nodeType)return!1;
                        if ("first" === e)return!0;
                        i = t;
                    case"last":
                        for (; i = i.nextSibling;)if (1 === i.nodeType)return!1;
                        return!0
                }
            }
        }, PSEUDO: function (e, t) {
            var n, r = b.pseudos[e] || b.setFilters[e.toLowerCase()] || i.error("unsupported pseudo: " + e);
            return r[D] ? r(t) : r.length > 1 ? (n = [e, e, "", t], b.setFilters.hasOwnProperty(e.toLowerCase()) ? J(function (e, i) {
                for (var n, s = r(e, t), a = s.length; a--;)n = O.call(e, s[a]), e[n] = !(i[n] = s[a])
            }) : function (e) {
                return r(e, 0, n)
            }) : r
        }}, pseudos: {not: J(function (e) {
            var t = [], i = [], n = S(e.replace(X, "$1"));
            return n[D] ? J(function (e, t, i, r) {
                for (var s, a = n(e, null, r, []), o = e.length; o--;)(s = a[o]) && (e[o] = !(t[o] = s))
            }) : function (e, r, s) {
                return t[0] = e, n(t, null, s, i), !i.pop()
            }
        }), has: J(function (e) {
            return function (t) {
                return i(e, t).length > 0
            }
        }), contains: J(function (e) {
            return function (t) {
                return(t.textContent || t.innerText || x(t)).indexOf(e) > -1
            }
        }), enabled: function (e) {
            return e.disabled === !1
        }, disabled: function (e) {
            return e.disabled === !0
        }, checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return"input" === t && !!e.checked || "option" === t && !!e.selected
        }, selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
        }, parent: function (e) {
            return!b.pseudos.empty(e)
        }, empty: function (e) {
            var t;
            for (e = e.firstChild; e;) {
                if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t)return!1;
                e = e.nextSibling
            }
            return!0
        }, header: function (e) {
            return rt.test(e.nodeName)
        }, text: function (e) {
            var t, i;
            return"input" === e.nodeName.toLowerCase() && "text" === (t = e.type) && (null == (i = e.getAttribute("type")) || i.toLowerCase() === t)
        }, radio: n("radio"), checkbox: n("checkbox"), file: n("file"), password: n("password"), image: n("image"), submit: r("submit"), reset: r("reset"), button: function (e) {
            var t = e.nodeName.toLowerCase();
            return"input" === t && "button" === e.type || "button" === t
        }, input: function (e) {
            return st.test(e.nodeName)
        }, focus: function (e) {
            var t = e.ownerDocument;
            return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        }, active: function (e) {
            return e === e.ownerDocument.activeElement
        }, first: s(function () {
            return[0]
        }), last: s(function (e, t) {
            return[t - 1]
        }), eq: s(function (e, t, i) {
            return[0 > i ? i + t : i]
        }), even: s(function (e, t) {
            for (var i = 0; t > i; i += 2)e.push(i);
            return e
        }), odd: s(function (e, t) {
            for (var i = 1; t > i; i += 2)e.push(i);
            return e
        }), lt: s(function (e, t, i) {
            for (var n = 0 > i ? i + t : i; --n >= 0;)e.push(n);
            return e
        }), gt: s(function (e, t, i) {
            for (var n = 0 > i ? i + t : i; t > ++n;)e.push(n);
            return e
        })}}, C = M.compareDocumentPosition ? function (e, t) {
            return e === t ? (A = !0, 0) : (e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) : e.compareDocumentPosition) ? -1 : 1
        } : function (e, t) {
            if (e === t)return A = !0, 0;
            if (e.sourceIndex && t.sourceIndex)return e.sourceIndex - t.sourceIndex;
            var i, n, r = [], s = [], o = e.parentNode, l = t.parentNode, c = o;
            if (o === l)return a(e, t);
            if (!o)return-1;
            if (!l)return 1;
            for (; c;)r.unshift(c), c = c.parentNode;
            for (c = l; c;)s.unshift(c), c = c.parentNode;
            i = r.length, n = s.length;
            for (var u = 0; i > u && n > u; u++)if (r[u] !== s[u])return a(r[u], s[u]);
            return u === i ? a(e, s[u], -1) : a(r[u], t, 1)
        }, [0, 0].sort(C), k = !A, i.uniqueSort = function (e) {
            var t, i = [], n = 1, r = 0;
            if (A = k, e.sort(C), A) {
                for (; t = e[n]; n++)t === e[n - 1] && (r = i.push(n));
                for (; r--;)e.splice(i[r], 1)
            }
            return e
        }, i.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, S = i.compile = function (e, t) {
            var i, n = [], r = [], s = z[D][e + " "];
            if (!s) {
                for (t || (t = o(e)), i = t.length; i--;)s = h(t[i]), s[D] ? n.push(s) : r.push(s);
                s = z(e, p(r, n))
            }
            return s
        }, E.querySelectorAll && function () {
            var e, t = g, n = /'|\\/g, r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, s = [":focus"], a = [":active"], l = M.matchesSelector || M.mozMatchesSelector || M.webkitMatchesSelector || M.oMatchesSelector || M.msMatchesSelector;
            lt(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || s.push("\\[" + W + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || s.push(":checked")
            }), lt(function (e) {
                e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && s.push("[*^$]=" + W + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || s.push(":enabled", ":disabled")
            }), s = RegExp(s.join("|")), g = function (e, i, r, a, l) {
                if (!a && !l && !s.test(e)) {
                    var c, u, d = !0, h = D, p = i, f = 9 === i.nodeType && e;
                    if (1 === i.nodeType && "object" !== i.nodeName.toLowerCase()) {
                        for (c = o(e), (d = i.getAttribute("id")) ? h = d.replace(n, "\\$&") : i.setAttribute("id", h), h = "[id='" + h + "'] ", u = c.length; u--;)c[u] = h + c[u].join("");
                        p = nt.test(e) && i.parentNode || i, f = c.join(",")
                    }
                    if (f)try {
                        return R.apply(r, L.call(p.querySelectorAll(f), 0)), r
                    } catch (g) {
                    } finally {
                        d || i.removeAttribute("id")
                    }
                }
                return t(e, i, r, a, l)
            }, l && (lt(function (t) {
                e = l.call(t, "div");
                try {
                    l.call(t, "[test!='']:sizzle"), a.push("!=", V)
                } catch (i) {
                }
            }), a = RegExp(a.join("|")), i.matchesSelector = function (t, n) {
                if (n = n.replace(r, "='$1']"), !w(t) && !a.test(n) && !s.test(n))try {
                    var o = l.call(t, n);
                    if (o || e || t.document && 11 !== t.document.nodeType)return o
                } catch (c) {
                }
                return i(n, null, null, [t]).length > 0
            })
        }(), b.pseudos.nth = b.pseudos.eq, b.filters = m.prototype = b.pseudos, b.setFilters = new m, i.attr = Q.attr, Q.find = i, Q.expr = i.selectors, Q.expr[":"] = Q.expr.pseudos, Q.unique = i.uniqueSort, Q.text = i.getText, Q.isXMLDoc = i.isXML, Q.contains = i.contains
    }(e);
    var It = /Until$/, Ht = /^(?:parents|prev(?:Until|All))/, Rt = /^.[^:#\[\.,]*$/, Lt = Q.expr.match.needsContext, Ot = {children: !0, contents: !0, next: !0, prev: !0};
    Q.fn.extend({find: function (e) {
        var t, i, n, r, s, a, o = this;
        if ("string" != typeof e)return Q(e).filter(function () {
            for (t = 0, i = o.length; i > t; t++)if (Q.contains(o[t], this))return!0
        });
        for (a = this.pushStack("", "find", e), t = 0, i = this.length; i > t; t++)if (n = a.length, Q.find(e, this[t], a), t > 0)for (r = n; a.length > r; r++)for (s = 0; n > s; s++)if (a[s] === a[r]) {
            a.splice(r--, 1);
            break
        }
        return a
    }, has: function (e) {
        var t, i = Q(e, this), n = i.length;
        return this.filter(function () {
            for (t = 0; n > t; t++)if (Q.contains(this, i[t]))return!0
        })
    }, not: function (e) {
        return this.pushStack(c(this, e, !1), "not", e)
    }, filter: function (e) {
        return this.pushStack(c(this, e, !0), "filter", e)
    }, is: function (e) {
        return!!e && ("string" == typeof e ? Lt.test(e) ? Q(e, this.context).index(this[0]) >= 0 : Q.filter(e, this).length > 0 : this.filter(e).length > 0)
    }, closest: function (e, t) {
        for (var i, n = 0, r = this.length, s = [], a = Lt.test(e) || "string" != typeof e ? Q(e, t || this.context) : 0; r > n; n++)for (i = this[n]; i && i.ownerDocument && i !== t && 11 !== i.nodeType;) {
            if (a ? a.index(i) > -1 : Q.find.matchesSelector(i, e)) {
                s.push(i);
                break
            }
            i = i.parentNode
        }
        return s = s.length > 1 ? Q.unique(s) : s, this.pushStack(s, "closest", e)
    }, index: function (e) {
        return e ? "string" == typeof e ? Q.inArray(this[0], Q(e)) : Q.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
    }, add: function (e, t) {
        var i = "string" == typeof e ? Q(e, t) : Q.makeArray(e && e.nodeType ? [e] : e), n = Q.merge(this.get(), i);
        return this.pushStack(o(i[0]) || o(n[0]) ? n : Q.unique(n))
    }, addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }}), Q.fn.andSelf = Q.fn.addBack, Q.each({parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
    }, parents: function (e) {
        return Q.dir(e, "parentNode")
    }, parentsUntil: function (e, t, i) {
        return Q.dir(e, "parentNode", i)
    }, next: function (e) {
        return l(e, "nextSibling")
    }, prev: function (e) {
        return l(e, "previousSibling")
    }, nextAll: function (e) {
        return Q.dir(e, "nextSibling")
    }, prevAll: function (e) {
        return Q.dir(e, "previousSibling")
    }, nextUntil: function (e, t, i) {
        return Q.dir(e, "nextSibling", i)
    }, prevUntil: function (e, t, i) {
        return Q.dir(e, "previousSibling", i)
    }, siblings: function (e) {
        return Q.sibling((e.parentNode || {}).firstChild, e)
    }, children: function (e) {
        return Q.sibling(e.firstChild)
    }, contents: function (e) {
        return Q.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : Q.merge([], e.childNodes)
    }}, function (e, t) {
        Q.fn[e] = function (i, n) {
            var r = Q.map(this, t, i);
            return It.test(e) || (n = i), n && "string" == typeof n && (r = Q.filter(n, r)), r = this.length > 1 && !Ot[e] ? Q.unique(r) : r, this.length > 1 && Ht.test(e) && (r = r.reverse()), this.pushStack(r, e, q.call(arguments).join(","))
        }
    }), Q.extend({filter: function (e, t, i) {
        return i && (e = ":not(" + e + ")"), 1 === t.length ? Q.find.matchesSelector(t[0], e) ? [t[0]] : [] : Q.find.matches(e, t)
    }, dir: function (e, i, n) {
        for (var r = [], s = e[i]; s && 9 !== s.nodeType && (n === t || 1 !== s.nodeType || !Q(s).is(n));)1 === s.nodeType && r.push(s), s = s[i];
        return r
    }, sibling: function (e, t) {
        for (var i = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && i.push(e);
        return i
    }});
    var Jt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Ft = / jQuery\d+="(?:null|\d+)"/g, Bt = /^\s+/, jt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, zt = /<([\w:]+)/, Wt = /<tbody/i, Yt = /<|&#?\w+;/, Ut = /<(?:script|style|link)/i, qt = /<(?:script|object|embed|option|style)/i, Kt = RegExp("<(?:" + Jt + ")[\\s/>]", "i"), Vt = /^(?:checkbox|radio)$/, Gt = /checked\s*(?:[^=]|=\s*.checked.)/i, Xt = /\/(java|ecma)script/i, Qt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, Zt = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""]}, ei = u(B), ti = ei.appendChild(B.createElement("div"));
    Zt.optgroup = Zt.option, Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead, Zt.th = Zt.td, Q.support.htmlSerialize || (Zt._default = [1, "X<div>", "</div>"]), Q.fn.extend({text: function (e) {
        return Q.access(this, function (e) {
            return e === t ? Q.text(this) : this.empty().append((this[0] && this[0].ownerDocument || B).createTextNode(e))
        }, null, e, arguments.length)
    }, wrapAll: function (e) {
        if (Q.isFunction(e))return this.each(function (t) {
            Q(this).wrapAll(e.call(this, t))
        });
        if (this[0]) {
            var t = Q(e, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)e = e.firstChild;
                return e
            }).append(this)
        }
        return this
    }, wrapInner: function (e) {
        return Q.isFunction(e) ? this.each(function (t) {
            Q(this).wrapInner(e.call(this, t))
        }) : this.each(function () {
            var t = Q(this), i = t.contents();
            i.length ? i.wrapAll(e) : t.append(e)
        })
    }, wrap: function (e) {
        var t = Q.isFunction(e);
        return this.each(function (i) {
            Q(this).wrapAll(t ? e.call(this, i) : e)
        })
    }, unwrap: function () {
        return this.parent().each(function () {
            Q.nodeName(this, "body") || Q(this).replaceWith(this.childNodes)
        }).end()
    }, append: function () {
        return this.domManip(arguments, !0, function (e) {
            (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(e)
        })
    }, prepend: function () {
        return this.domManip(arguments, !0, function (e) {
            (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(e, this.firstChild)
        })
    }, before: function () {
        if (!o(this[0]))return this.domManip(arguments, !1, function (e) {
            this.parentNode.insertBefore(e, this)
        });
        if (arguments.length) {
            var e = Q.clean(arguments);
            return this.pushStack(Q.merge(e, this), "before", this.selector)
        }
    }, after: function () {
        if (!o(this[0]))return this.domManip(arguments, !1, function (e) {
            this.parentNode.insertBefore(e, this.nextSibling)
        });
        if (arguments.length) {
            var e = Q.clean(arguments);
            return this.pushStack(Q.merge(this, e), "after", this.selector)
        }
    }, remove: function (e, t) {
        for (var i, n = 0; null != (i = this[n]); n++)(!e || Q.filter(e, [i]).length) && (t || 1 !== i.nodeType || (Q.cleanData(i.getElementsByTagName("*")), Q.cleanData([i])), i.parentNode && i.parentNode.removeChild(i));
        return this
    }, empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)for (1 === e.nodeType && Q.cleanData(e.getElementsByTagName("*")); e.firstChild;)e.removeChild(e.firstChild);
        return this
    }, clone: function (e, t) {
        return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
            return Q.clone(this, e, t)
        })
    }, html: function (e) {
        return Q.access(this, function (e) {
            var i = this[0] || {}, n = 0, r = this.length;
            if (e === t)return 1 === i.nodeType ? i.innerHTML.replace(Ft, "") : t;
            if (!("string" != typeof e || Ut.test(e) || !Q.support.htmlSerialize && Kt.test(e) || !Q.support.leadingWhitespace && Bt.test(e) || Zt[(zt.exec(e) || ["", ""])[1].toLowerCase()])) {
                e = e.replace(jt, "<$1></$2>");
                try {
                    for (; r > n; n++)i = this[n] || {}, 1 === i.nodeType && (Q.cleanData(i.getElementsByTagName("*")), i.innerHTML = e);
                    i = 0
                } catch (s) {
                }
            }
            i && this.empty().append(e)
        }, null, e, arguments.length)
    }, replaceWith: function (e) {
        return o(this[0]) ? this.length ? this.pushStack(Q(Q.isFunction(e) ? e() : e), "replaceWith", e) : this : Q.isFunction(e) ? this.each(function (t) {
            var i = Q(this), n = i.html();
            i.replaceWith(e.call(this, t, n))
        }) : ("string" != typeof e && (e = Q(e).detach()), this.each(function () {
            var t = this.nextSibling, i = this.parentNode;
            Q(this).remove(), t ? Q(t).before(e) : Q(i).append(e)
        }))
    }, detach: function (e) {
        return this.remove(e, !0)
    }, domManip: function (e, i, n) {
        e = [].concat.apply([], e);
        var r, s, a, o, l = 0, c = e[0], u = [], h = this.length;
        if (!Q.support.checkClone && h > 1 && "string" == typeof c && Gt.test(c))return this.each(function () {
            Q(this).domManip(e, i, n)
        });
        if (Q.isFunction(c))return this.each(function (r) {
            var s = Q(this);
            e[0] = c.call(this, r, i ? s.html() : t), s.domManip(e, i, n)
        });
        if (this[0]) {
            if (r = Q.buildFragment(e, this, u), a = r.fragment, s = a.firstChild, 1 === a.childNodes.length && (a = s), s)for (i = i && Q.nodeName(s, "tr"), o = r.cacheable || h - 1; h > l; l++)n.call(i && Q.nodeName(this[l], "table") ? d(this[l], "tbody") : this[l], l === o ? a : Q.clone(a, !0, !0));
            a = s = null, u.length && Q.each(u, function (e, t) {
                t.src ? Q.ajax ? Q.ajax({url: t.src, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0}) : Q.error("no ajax") : Q.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Qt, "")), t.parentNode && t.parentNode.removeChild(t)
            })
        }
        return this
    }}), Q.buildFragment = function (e, i, n) {
        var r, s, a, o = e[0];
        return i = i || B, i = !i.nodeType && i[0] || i, i = i.ownerDocument || i, !(1 === e.length && "string" == typeof o && 512 > o.length && i === B && "<" === o.charAt(0)) || qt.test(o) || !Q.support.checkClone && Gt.test(o) || !Q.support.html5Clone && Kt.test(o) || (s = !0, r = Q.fragments[o], a = r !== t), r || (r = i.createDocumentFragment(), Q.clean(e, i, r, n), s && (Q.fragments[o] = a && r)), {fragment: r, cacheable: s}
    }, Q.fragments = {}, Q.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (e, t) {
        Q.fn[e] = function (i) {
            var n, r = 0, s = [], a = Q(i), o = a.length, l = 1 === this.length && this[0].parentNode;
            if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === o)return a[t](this[0]), this;
            for (; o > r; r++)n = (r > 0 ? this.clone(!0) : this).get(), Q(a[r])[t](n), s = s.concat(n);
            return this.pushStack(s, e, a.selector)
        }
    }), Q.extend({clone: function (e, t, i) {
        var n, r, s, a;
        if (Q.support.html5Clone || Q.isXMLDoc(e) || !Kt.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (ti.innerHTML = e.outerHTML, ti.removeChild(a = ti.firstChild)), !(Q.support.noCloneEvent && Q.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Q.isXMLDoc(e)))for (p(e, a), n = f(e), r = f(a), s = 0; n[s]; ++s)r[s] && p(n[s], r[s]);
        if (t && (h(e, a), i))for (n = f(e), r = f(a), s = 0; n[s]; ++s)h(n[s], r[s]);
        return n = r = null, a
    }, clean: function (e, i, n, r) {
        var s, a, o, l, c, d, h, p, f, m, y, v = i === B && ei, b = [];
        for (i && i.createDocumentFragment !== t || (i = B), s = 0; null != (o = e[s]); s++)if ("number" == typeof o && (o += ""), o) {
            if ("string" == typeof o)if (Yt.test(o)) {
                for (v = v || u(i), h = i.createElement("div"), v.appendChild(h), o = o.replace(jt, "<$1></$2>"), l = (zt.exec(o) || ["", ""])[1].toLowerCase(), c = Zt[l] || Zt._default, d = c[0], h.innerHTML = c[1] + o + c[2]; d--;)h = h.lastChild;
                if (!Q.support.tbody)for (p = Wt.test(o), f = "table" !== l || p ? "<table>" !== c[1] || p ? [] : h.childNodes : h.firstChild && h.firstChild.childNodes, a = f.length - 1; a >= 0; --a)Q.nodeName(f[a], "tbody") && !f[a].childNodes.length && f[a].parentNode.removeChild(f[a]);
                !Q.support.leadingWhitespace && Bt.test(o) && h.insertBefore(i.createTextNode(Bt.exec(o)[0]), h.firstChild), o = h.childNodes, h.parentNode.removeChild(h)
            } else o = i.createTextNode(o);
            o.nodeType ? b.push(o) : Q.merge(b, o)
        }
        if (h && (o = h = v = null), !Q.support.appendChecked)for (s = 0; null != (o = b[s]); s++)Q.nodeName(o, "input") ? g(o) : o.getElementsByTagName !== t && Q.grep(o.getElementsByTagName("input"), g);
        if (n)for (m = function (e) {
            return!e.type || Xt.test(e.type) ? r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e) : t
        }, s = 0; null != (o = b[s]); s++)Q.nodeName(o, "script") && m(o) || (n.appendChild(o), o.getElementsByTagName !== t && (y = Q.grep(Q.merge([], o.getElementsByTagName("script")), m), b.splice.apply(b, [s + 1, 0].concat(y)), s += y.length));
        return b
    }, cleanData: function (e, t) {
        for (var i, n, r, s, a = 0, o = Q.expando, l = Q.cache, c = Q.support.deleteExpando, u = Q.event.special; null != (r = e[a]); a++)if ((t || Q.acceptData(r)) && (n = r[o], i = n && l[n])) {
            if (i.events)for (s in i.events)u[s] ? Q.event.remove(r, s) : Q.removeEvent(r, s, i.handle);
            l[n] && (delete l[n], c ? delete r[o] : r.removeAttribute ? r.removeAttribute(o) : r[o] = null, Q.deletedIds.push(n))
        }
    }}), function () {
        var e, t;
        Q.uaMatch = function (e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return{browser: t[1] || "", version: t[2] || "0"}
        }, e = Q.uaMatch(z.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), Q.browser = t, Q.sub = function () {
            function e(t, i) {
                return new e.fn.init(t, i)
            }

            Q.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function (i, n) {
                return n && n instanceof Q && !(n instanceof e) && (n = e(n)), Q.fn.init.call(this, i, n, t)
            }, e.fn.init.prototype = e.fn;
            var t = e(B);
            return e
        }
    }();
    var ii, ni, ri, si = /alpha\([^)]*\)/i, ai = /opacity=([^)]*)/, oi = /^(top|right|bottom|left)$/, li = /^(none|table(?!-c[ea]).+)/, ci = /^margin/, ui = RegExp("^(" + Z + ")(.*)$", "i"), di = RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"), hi = RegExp("^([-+])=(" + Z + ")", "i"), pi = {BODY: "block"}, fi = {position: "absolute", visibility: "hidden", display: "block"}, gi = {letterSpacing: 0, fontWeight: 400}, mi = ["Top", "Right", "Bottom", "Left"], yi = ["Webkit", "O", "Moz", "ms"], vi = Q.fn.toggle;
    Q.fn.extend({css: function (e, i) {
        return Q.access(this, function (e, i, n) {
            return n !== t ? Q.style(e, i, n) : Q.css(e, i)
        }, e, i, arguments.length > 1)
    }, show: function () {
        return v(this, !0)
    }, hide: function () {
        return v(this)
    }, toggle: function (e, t) {
        var i = "boolean" == typeof e;
        return Q.isFunction(e) && Q.isFunction(t) ? vi.apply(this, arguments) : this.each(function () {
            (i ? e : y(this)) ? Q(this).show() : Q(this).hide()
        })
    }}), Q.extend({cssHooks: {opacity: {get: function (e, t) {
        if (t) {
            var i = ii(e, "opacity");
            return"" === i ? "1" : i
        }
    }}}, cssNumber: {fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": Q.support.cssFloat ? "cssFloat" : "styleFloat"}, style: function (e, i, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var s, a, o, l = Q.camelCase(i), c = e.style;
            if (i = Q.cssProps[l] || (Q.cssProps[l] = m(c, l)), o = Q.cssHooks[i] || Q.cssHooks[l], n === t)return o && "get"in o && (s = o.get(e, !1, r)) !== t ? s : c[i];
            if (a = typeof n, "string" === a && (s = hi.exec(n)) && (n = (s[1] + 1) * s[2] + parseFloat(Q.css(e, i)), a = "number"), !(null == n || "number" === a && isNaN(n) || ("number" !== a || Q.cssNumber[l] || (n += "px"), o && "set"in o && (n = o.set(e, n, r)) === t)))try {
                c[i] = n
            } catch (u) {
            }
        }
    }, css: function (e, i, n, r) {
        var s, a, o, l = Q.camelCase(i);
        return i = Q.cssProps[l] || (Q.cssProps[l] = m(e.style, l)), o = Q.cssHooks[i] || Q.cssHooks[l], o && "get"in o && (s = o.get(e, !0, r)), s === t && (s = ii(e, i)), "normal" === s && i in gi && (s = gi[i]), n || r !== t ? (a = parseFloat(s), n || Q.isNumeric(a) ? a || 0 : s) : s
    }, swap: function (e, t, i) {
        var n, r, s = {};
        for (r in t)s[r] = e.style[r], e.style[r] = t[r];
        n = i.call(e);
        for (r in t)e.style[r] = s[r];
        return n
    }}), e.getComputedStyle ? ii = function (t, i) {
        var n, r, s, a, o = e.getComputedStyle(t, null), l = t.style;
        return o && (n = o.getPropertyValue(i) || o[i], "" !== n || Q.contains(t.ownerDocument, t) || (n = Q.style(t, i)), di.test(n) && ci.test(i) && (r = l.width, s = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = n, n = o.width, l.width = r, l.minWidth = s, l.maxWidth = a)), n
    } : B.documentElement.currentStyle && (ii = function (e, t) {
        var i, n, r = e.currentStyle && e.currentStyle[t], s = e.style;
        return null == r && s && s[t] && (r = s[t]), di.test(r) && !oi.test(t) && (i = s.left, n = e.runtimeStyle && e.runtimeStyle.left, n && (e.runtimeStyle.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : r, r = s.pixelLeft + "px", s.left = i, n && (e.runtimeStyle.left = n)), "" === r ? "auto" : r
    }), Q.each(["height", "width"], function (e, i) {
        Q.cssHooks[i] = {get: function (e, n, r) {
            return n ? 0 === e.offsetWidth && li.test(ii(e, "display")) ? Q.swap(e, fi, function () {
                return w(e, i, r)
            }) : w(e, i, r) : t
        }, set: function (e, t, n) {
            return b(e, t, n ? x(e, i, n, Q.support.boxSizing && "border-box" === Q.css(e, "boxSizing")) : 0)
        }}
    }), Q.support.opacity || (Q.cssHooks.opacity = {get: function (e, t) {
        return ai.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
    }, set: function (e, t) {
        var i = e.style, n = e.currentStyle, r = Q.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", s = n && n.filter || i.filter || "";
        i.zoom = 1, t >= 1 && "" === Q.trim(s.replace(si, "")) && i.removeAttribute && (i.removeAttribute("filter"), n && !n.filter) || (i.filter = si.test(s) ? s.replace(si, r) : s + " " + r)
    }}), Q(function () {
        Q.support.reliableMarginRight || (Q.cssHooks.marginRight = {get: function (e, i) {
            return Q.swap(e, {display: "inline-block"}, function () {
                return i ? ii(e, "marginRight") : t
            })
        }}), !Q.support.pixelPosition && Q.fn.position && Q.each(["top", "left"], function (e, t) {
            Q.cssHooks[t] = {get: function (e, i) {
                if (i) {
                    var n = ii(e, t);
                    return di.test(n) ? Q(e).position()[t] + "px" : n
                }
            }}
        })
    }), Q.expr && Q.expr.filters && (Q.expr.filters.hidden = function (e) {
        return 0 === e.offsetWidth && 0 === e.offsetHeight || !Q.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ii(e, "display"))
    }, Q.expr.filters.visible = function (e) {
        return!Q.expr.filters.hidden(e)
    }), Q.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        Q.cssHooks[e + t] = {expand: function (i) {
            var n, r = "string" == typeof i ? i.split(" ") : [i], s = {};
            for (n = 0; 4 > n; n++)s[e + mi[n] + t] = r[n] || r[n - 2] || r[0];
            return s
        }}, ci.test(e) || (Q.cssHooks[e + t].set = b)
    });
    var bi = /%20/g, xi = /\[\]$/, wi = /\r?\n/g, _i = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, Si = /^(?:select|textarea)/i;
    Q.fn.extend({serialize: function () {
        return Q.param(this.serializeArray())
    }, serializeArray: function () {
        return this.map(function () {
            return this.elements ? Q.makeArray(this.elements) : this
        }).filter(function () {
            return this.name && !this.disabled && (this.checked || Si.test(this.nodeName) || _i.test(this.type))
        }).map(function (e, t) {
            var i = Q(this).val();
            return null == i ? null : Q.isArray(i) ? Q.map(i, function (e) {
                return{name: t.name, value: e.replace(wi, "\r\n")}
            }) : {name: t.name, value: i.replace(wi, "\r\n")}
        }).get()
    }}), Q.param = function (e, i) {
        var n, r = [], s = function (e, t) {
            t = Q.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (i === t && (i = Q.ajaxSettings && Q.ajaxSettings.traditional), Q.isArray(e) || e.jquery && !Q.isPlainObject(e))Q.each(e, function () {
            s(this.name, this.value)
        }); else for (n in e)S(n, e[n], i, s);
        return r.join("&").replace(bi, "+")
    };
    var Ci, Ai, $i = /#.*$/, ki = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Ti = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Di = /^(?:GET|HEAD)$/, Ni = /^\/\//, Ei = /\?/, Mi = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Pi = /([?&])_=[^&]*/, Ii = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Hi = Q.fn.load, Ri = {}, Li = {}, Oi = ["*/"] + ["*"];
    try {
        Ai = j.href
    } catch (Ji) {
        Ai = B.createElement("a"), Ai.href = "", Ai = Ai.href
    }
    Ci = Ii.exec(Ai.toLowerCase()) || [], Q.fn.load = function (e, i, n) {
        if ("string" != typeof e && Hi)return Hi.apply(this, arguments);
        if (!this.length)return this;
        var r, s, a, o = this, l = e.indexOf(" ");
        return l >= 0 && (r = e.slice(l, e.length), e = e.slice(0, l)), Q.isFunction(i) ? (n = i, i = t) : i && "object" == typeof i && (s = "POST"), Q.ajax({url: e, type: s, dataType: "html", data: i, complete: function (e, t) {
            n && o.each(n, a || [e.responseText, t, e])
        }}).done(function (e) {
            a = arguments, o.html(r ? Q("<div>").append(e.replace(Mi, "")).find(r) : e)
        }), this
    }, Q.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
        Q.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), Q.each(["get", "post"], function (e, i) {
        Q[i] = function (e, n, r, s) {
            return Q.isFunction(n) && (s = s || r, r = n, n = t), Q.ajax({type: i, url: e, data: n, success: r, dataType: s})
        }
    }), Q.extend({getScript: function (e, i) {
        return Q.get(e, t, i, "script")
    }, getJSON: function (e, t, i) {
        return Q.get(e, t, i, "json")
    }, ajaxSetup: function (e, t) {
        return t ? $(e, Q.ajaxSettings) : (t = e, e = Q.ajaxSettings), $(e, t), e
    }, ajaxSettings: {url: Ai, isLocal: Ti.test(Ci[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded; charset=UTF-8", processData: !0, async: !0, accepts: {xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": Oi}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText"}, converters: {"* text": e.String, "text html": !0, "text json": Q.parseJSON, "text xml": Q.parseXML}, flatOptions: {context: !0, url: !0}}, ajaxPrefilter: C(Ri), ajaxTransport: C(Li), ajax: function (e, i) {
        function n(e, i, n, a) {
            var c, d, v, b, w, S = i;
            2 !== x && (x = 2, l && clearTimeout(l), o = t, s = a || "", _.readyState = e > 0 ? 4 : 0, n && (b = k(h, _, n)), e >= 200 && 300 > e || 304 === e ? (h.ifModified && (w = _.getResponseHeader("Last-Modified"), w && (Q.lastModified[r] = w), w = _.getResponseHeader("Etag"), w && (Q.etag[r] = w)), 304 === e ? (S = "notmodified", c = !0) : (c = T(h, b), S = c.state, d = c.data, v = c.error, c = !v)) : (v = S, (!S || e) && (S = "error", 0 > e && (e = 0))), _.status = e, _.statusText = (i || S) + "", c ? g.resolveWith(p, [d, S, _]) : g.rejectWith(p, [_, S, v]), _.statusCode(y), y = t, u && f.trigger("ajax" + (c ? "Success" : "Error"), [_, h, c ? d : v]), m.fireWith(p, [_, S]), u && (f.trigger("ajaxComplete", [_, h]), --Q.active || Q.event.trigger("ajaxStop")))
        }

        "object" == typeof e && (i = e, e = t), i = i || {};
        var r, s, a, o, l, c, u, d, h = Q.ajaxSetup({}, i), p = h.context || h, f = p !== h && (p.nodeType || p instanceof Q) ? Q(p) : Q.event, g = Q.Deferred(), m = Q.Callbacks("once memory"), y = h.statusCode || {}, v = {}, b = {}, x = 0, w = "canceled", _ = {readyState: 0, setRequestHeader: function (e, t) {
            if (!x) {
                var i = e.toLowerCase();
                e = b[i] = b[i] || e, v[e] = t
            }
            return this
        }, getAllResponseHeaders: function () {
            return 2 === x ? s : null
        }, getResponseHeader: function (e) {
            var i;
            if (2 === x) {
                if (!a)for (a = {}; i = ki.exec(s);)a[i[1].toLowerCase()] = i[2];
                i = a[e.toLowerCase()]
            }
            return i === t ? null : i
        }, overrideMimeType: function (e) {
            return x || (h.mimeType = e), this
        }, abort: function (e) {
            return e = e || w, o && o.abort(e), n(0, e), this
        }};
        if (g.promise(_), _.success = _.done, _.error = _.fail, _.complete = m.add, _.statusCode = function (e) {
            if (e) {
                var t;
                if (2 > x)for (t in e)y[t] = [y[t], e[t]]; else t = e[_.status], _.always(t)
            }
            return this
        }, h.url = ((e || h.url) + "").replace($i, "").replace(Ni, Ci[1] + "//"), h.dataTypes = Q.trim(h.dataType || "*").toLowerCase().split(tt), null == h.crossDomain && (c = Ii.exec(h.url.toLowerCase()), h.crossDomain = !(!c || c[1] === Ci[1] && c[2] === Ci[2] && (c[3] || ("http:" === c[1] ? 80 : 443)) == (Ci[3] || ("http:" === Ci[1] ? 80 : 443)))), h.data && h.processData && "string" != typeof h.data && (h.data = Q.param(h.data, h.traditional)), A(Ri, h, i, _), 2 === x)return _;
        if (u = h.global, h.type = h.type.toUpperCase(), h.hasContent = !Di.test(h.type), u && 0 === Q.active++ && Q.event.trigger("ajaxStart"), !h.hasContent && (h.data && (h.url += (Ei.test(h.url) ? "&" : "?") + h.data, delete h.data), r = h.url, h.cache === !1)) {
            var S = Q.now(), C = h.url.replace(Pi, "$1_=" + S);
            h.url = C + (C === h.url ? (Ei.test(h.url) ? "&" : "?") + "_=" + S : "")
        }
        (h.data && h.hasContent && h.contentType !== !1 || i.contentType) && _.setRequestHeader("Content-Type", h.contentType), h.ifModified && (r = r || h.url, Q.lastModified[r] && _.setRequestHeader("If-Modified-Since", Q.lastModified[r]), Q.etag[r] && _.setRequestHeader("If-None-Match", Q.etag[r])), _.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Oi + "; q=0.01" : "") : h.accepts["*"]);
        for (d in h.headers)_.setRequestHeader(d, h.headers[d]);
        if (h.beforeSend && (h.beforeSend.call(p, _, h) === !1 || 2 === x))return _.abort();
        w = "abort";
        for (d in{success: 1, error: 1, complete: 1})_[d](h[d]);
        if (o = A(Li, h, i, _)) {
            _.readyState = 1, u && f.trigger("ajaxSend", [_, h]), h.async && h.timeout > 0 && (l = setTimeout(function () {
                _.abort("timeout")
            }, h.timeout));
            try {
                x = 1, o.send(v, n)
            } catch ($) {
                if (!(2 > x))throw $;
                n(-1, $)
            }
        } else n(-1, "No Transport");
        return _
    }, active: 0, lastModified: {}, etag: {}});
    var Fi = [], Bi = /\?/, ji = /(=)\?(?=&|$)|\?\?/, zi = Q.now();
    Q.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
        var e = Fi.pop() || Q.expando + "_" + zi++;
        return this[e] = !0, e
    }}), Q.ajaxPrefilter("json jsonp", function (i, n, r) {
        var s, a, o, l = i.data, c = i.url, u = i.jsonp !== !1, d = u && ji.test(c), h = u && !d && "string" == typeof l && !(i.contentType || "").indexOf("application/x-www-form-urlencoded") && ji.test(l);
        return"jsonp" === i.dataTypes[0] || d || h ? (s = i.jsonpCallback = Q.isFunction(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback, a = e[s], d ? i.url = c.replace(ji, "$1" + s) : h ? i.data = l.replace(ji, "$1" + s) : u && (i.url += (Bi.test(c) ? "&" : "?") + i.jsonp + "=" + s), i.converters["script json"] = function () {
            return o || Q.error(s + " was not called"), o[0]
        }, i.dataTypes[0] = "json", e[s] = function () {
            o = arguments
        }, r.always(function () {
            e[s] = a, i[s] && (i.jsonpCallback = n.jsonpCallback, Fi.push(s)), o && Q.isFunction(a) && a(o[0]), o = a = t
        }), "script") : t
    }), Q.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /javascript|ecmascript/}, converters: {"text script": function (e) {
        return Q.globalEval(e), e
    }}}), Q.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), Q.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var i, n = B.head || B.getElementsByTagName("head")[0] || B.documentElement;
            return{send: function (r, s) {
                i = B.createElement("script"), i.async = "async", e.scriptCharset && (i.charset = e.scriptCharset), i.src = e.url, i.onload = i.onreadystatechange = function (e, r) {
                    (r || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, n && i.parentNode && n.removeChild(i), i = t, r || s(200, "success"))
                }, n.insertBefore(i, n.firstChild)
            }, abort: function () {
                i && i.onload(0, 1)
            }}
        }
    });
    var Wi, Yi = e.ActiveXObject ? function () {
        for (var e in Wi)Wi[e](0, 1)
    } : !1, Ui = 0;
    Q.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return!this.isLocal && D() || N()
    } : D, function (e) {
        Q.extend(Q.support, {ajax: !!e, cors: !!e && "withCredentials"in e})
    }(Q.ajaxSettings.xhr()), Q.support.ajax && Q.ajaxTransport(function (i) {
        if (!i.crossDomain || Q.support.cors) {
            var n;
            return{send: function (r, s) {
                var a, o, l = i.xhr();
                if (i.username ? l.open(i.type, i.url, i.async, i.username, i.password) : l.open(i.type, i.url, i.async), i.xhrFields)for (o in i.xhrFields)l[o] = i.xhrFields[o];
                i.mimeType && l.overrideMimeType && l.overrideMimeType(i.mimeType), i.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (o in r)l.setRequestHeader(o, r[o])
                } catch (c) {
                }
                l.send(i.hasContent && i.data || null), n = function (e, r) {
                    var o, c, u, d, h;
                    try {
                        if (n && (r || 4 === l.readyState))if (n = t, a && (l.onreadystatechange = Q.noop, Yi && delete Wi[a]), r)4 !== l.readyState && l.abort(); else {
                            o = l.status, u = l.getAllResponseHeaders(), d = {}, h = l.responseXML, h && h.documentElement && (d.xml = h);
                            try {
                                d.text = l.responseText
                            } catch (p) {
                            }
                            try {
                                c = l.statusText
                            } catch (p) {
                                c = ""
                            }
                            o || !i.isLocal || i.crossDomain ? 1223 === o && (o = 204) : o = d.text ? 200 : 404
                        }
                    } catch (f) {
                        r || s(-1, f)
                    }
                    d && s(o, c, d, u)
                }, i.async ? 4 === l.readyState ? setTimeout(n, 0) : (a = ++Ui, Yi && (Wi || (Wi = {}, Q(e).unload(Yi)), Wi[a] = n), l.onreadystatechange = n) : n()
            }, abort: function () {
                n && n(0, 1)
            }}
        }
    });
    var qi, Ki, Vi = /^(?:toggle|show|hide)$/, Gi = RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$", "i"), Xi = /queueHooks$/, Qi = [H], Zi = {"*": [function (e, t) {
        var i, n, r = this.createTween(e, t), s = Gi.exec(t), a = r.cur(), o = +a || 0, l = 1, c = 20;
        if (s) {
            if (i = +s[2], n = s[3] || (Q.cssNumber[e] ? "" : "px"), "px" !== n && o) {
                o = Q.css(r.elem, e, !0) || i || 1;
                do l = l || ".5", o /= l, Q.style(r.elem, e, o + n); while (l !== (l = r.cur() / a) && 1 !== l && --c)
            }
            r.unit = n, r.start = o, r.end = s[1] ? o + (s[1] + 1) * i : i
        }
        return r
    }]};
    Q.Animation = Q.extend(P, {tweener: function (e, t) {
        Q.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
        for (var i, n = 0, r = e.length; r > n; n++)i = e[n], Zi[i] = Zi[i] || [], Zi[i].unshift(t)
    }, prefilter: function (e, t) {
        t ? Qi.unshift(e) : Qi.push(e)
    }}), Q.Tween = R, R.prototype = {constructor: R, init: function (e, t, i, n, r, s) {
        this.elem = e, this.prop = i, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = s || (Q.cssNumber[i] ? "" : "px")
    }, cur: function () {
        var e = R.propHooks[this.prop];
        return e && e.get ? e.get(this) : R.propHooks._default.get(this)
    }, run: function (e) {
        var t, i = R.propHooks[this.prop];
        return this.pos = t = this.options.duration ? Q.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : R.propHooks._default.set(this), this
    }}, R.prototype.init.prototype = R.prototype, R.propHooks = {_default: {get: function (e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Q.css(e.elem, e.prop, !1, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
    }, set: function (e) {
        Q.fx.step[e.prop] ? Q.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Q.cssProps[e.prop]] || Q.cssHooks[e.prop]) ? Q.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
    }}}, R.propHooks.scrollTop = R.propHooks.scrollLeft = {set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }}, Q.each(["toggle", "show", "hide"], function (e, t) {
        var i = Q.fn[t];
        Q.fn[t] = function (n, r, s) {
            return null == n || "boolean" == typeof n || !e && Q.isFunction(n) && Q.isFunction(r) ? i.apply(this, arguments) : this.animate(L(t, !0), n, r, s)
        }
    }), Q.fn.extend({fadeTo: function (e, t, i, n) {
        return this.filter(y).css("opacity", 0).show().end().animate({opacity: t}, e, i, n)
    }, animate: function (e, t, i, n) {
        var r = Q.isEmptyObject(e), s = Q.speed(t, i, n), a = function () {
            var t = P(this, Q.extend({}, e), s);
            r && t.stop(!0)
        };
        return r || s.queue === !1 ? this.each(a) : this.queue(s.queue, a)
    }, stop: function (e, i, n) {
        var r = function (e) {
            var t = e.stop;
            delete e.stop, t(n)
        };
        return"string" != typeof e && (n = i, i = e, e = t), i && e !== !1 && this.queue(e || "fx", []), this.each(function () {
            var t = !0, i = null != e && e + "queueHooks", s = Q.timers, a = Q._data(this);
            if (i)a[i] && a[i].stop && r(a[i]); else for (i in a)a[i] && a[i].stop && Xi.test(i) && r(a[i]);
            for (i = s.length; i--;)s[i].elem !== this || null != e && s[i].queue !== e || (s[i].anim.stop(n), t = !1, s.splice(i, 1));
            (t || !n) && Q.dequeue(this, e)
        })
    }}), Q.each({slideDown: L("show"), slideUp: L("hide"), slideToggle: L("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (e, t) {
        Q.fn[e] = function (e, i, n) {
            return this.animate(t, e, i, n)
        }
    }), Q.speed = function (e, t, i) {
        var n = e && "object" == typeof e ? Q.extend({}, e) : {complete: i || !i && t || Q.isFunction(e) && e, duration: e, easing: i && t || t && !Q.isFunction(t) && t};
        return n.duration = Q.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in Q.fx.speeds ? Q.fx.speeds[n.duration] : Q.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            Q.isFunction(n.old) && n.old.call(this), n.queue && Q.dequeue(this, n.queue)
        }, n
    }, Q.easing = {linear: function (e) {
        return e
    }, swing: function (e) {
        return.5 - Math.cos(e * Math.PI) / 2
    }}, Q.timers = [], Q.fx = R.prototype.init, Q.fx.tick = function () {
        var e, i = Q.timers, n = 0;
        for (qi = Q.now(); i.length > n; n++)e = i[n], e() || i[n] !== e || i.splice(n--, 1);
        i.length || Q.fx.stop(), qi = t
    }, Q.fx.timer = function (e) {
        e() && Q.timers.push(e) && !Ki && (Ki = setInterval(Q.fx.tick, Q.fx.interval))
    }, Q.fx.interval = 13, Q.fx.stop = function () {
        clearInterval(Ki), Ki = null
    }, Q.fx.speeds = {slow: 600, fast: 200, _default: 400}, Q.fx.step = {}, Q.expr && Q.expr.filters && (Q.expr.filters.animated = function (e) {
        return Q.grep(Q.timers,function (t) {
            return e === t.elem
        }).length
    });
    var en = /^(?:body|html)$/i;
    Q.fn.offset = function (e) {
        if (arguments.length)return e === t ? this : this.each(function (t) {
            Q.offset.setOffset(this, e, t)
        });
        var i, n, r, s, a, o, l, c = {top: 0, left: 0}, u = this[0], d = u && u.ownerDocument;
        if (d)return(n = d.body) === u ? Q.offset.bodyOffset(u) : (i = d.documentElement, Q.contains(i, u) ? (u.getBoundingClientRect !== t && (c = u.getBoundingClientRect()), r = O(d), s = i.clientTop || n.clientTop || 0, a = i.clientLeft || n.clientLeft || 0, o = r.pageYOffset || i.scrollTop, l = r.pageXOffset || i.scrollLeft, {top: c.top + o - s, left: c.left + l - a}) : c)
    }, Q.offset = {bodyOffset: function (e) {
        var t = e.offsetTop, i = e.offsetLeft;
        return Q.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(Q.css(e, "marginTop")) || 0, i += parseFloat(Q.css(e, "marginLeft")) || 0), {top: t, left: i}
    }, setOffset: function (e, t, i) {
        var n = Q.css(e, "position");
        "static" === n && (e.style.position = "relative");
        var r, s, a = Q(e), o = a.offset(), l = Q.css(e, "top"), c = Q.css(e, "left"), u = ("absolute" === n || "fixed" === n) && Q.inArray("auto", [l, c]) > -1, d = {}, h = {};
        u ? (h = a.position(), r = h.top, s = h.left) : (r = parseFloat(l) || 0, s = parseFloat(c) || 0), Q.isFunction(t) && (t = t.call(e, i, o)), null != t.top && (d.top = t.top - o.top + r), null != t.left && (d.left = t.left - o.left + s), "using"in t ? t.using.call(e, d) : a.css(d)
    }}, Q.fn.extend({position: function () {
        if (this[0]) {
            var e = this[0], t = this.offsetParent(), i = this.offset(), n = en.test(t[0].nodeName) ? {top: 0, left: 0} : t.offset();
            return i.top -= parseFloat(Q.css(e, "marginTop")) || 0, i.left -= parseFloat(Q.css(e, "marginLeft")) || 0, n.top += parseFloat(Q.css(t[0], "borderTopWidth")) || 0, n.left += parseFloat(Q.css(t[0], "borderLeftWidth")) || 0, {top: i.top - n.top, left: i.left - n.left}
        }
    }, offsetParent: function () {
        return this.map(function () {
            for (var e = this.offsetParent || B.body; e && !en.test(e.nodeName) && "static" === Q.css(e, "position");)e = e.offsetParent;
            return e || B.body
        })
    }}), Q.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, i) {
        var n = /Y/.test(i);
        Q.fn[e] = function (r) {
            return Q.access(this, function (e, r, s) {
                var a = O(e);
                return s === t ? a ? i in a ? a[i] : a.document.documentElement[r] : e[r] : (a ? a.scrollTo(n ? Q(a).scrollLeft() : s, n ? s : Q(a).scrollTop()) : e[r] = s, t)
            }, e, r, arguments.length, null)
        }
    }), Q.each({Height: "height", Width: "width"}, function (e, i) {
        Q.each({padding: "inner" + e, content: i, "": "outer" + e}, function (n, r) {
            Q.fn[r] = function (r, s) {
                var a = arguments.length && (n || "boolean" != typeof r), o = n || (r === !0 || s === !0 ? "margin" : "border");
                return Q.access(this, function (i, n, r) {
                    var s;
                    return Q.isWindow(i) ? i.document.documentElement["client" + e] : 9 === i.nodeType ? (s = i.documentElement, Math.max(i.body["scroll" + e], s["scroll" + e], i.body["offset" + e], s["offset" + e], s["client" + e])) : r === t ? Q.css(i, n, r, o) : Q.style(i, n, r, o)
                }, i, a ? r : t, a, null)
            }
        })
    }), e.jQuery = e.$ = Q, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return Q
    })
})(window), function (e) {
    var t, i, n = "0.3.4", r = "hasOwnProperty", s = /[\.\/]/, a = "*", o = function () {
    }, l = function (e, t) {
        return e - t
    }, c = {n: {}}, u = function (e, n) {
        var r, s = i, a = Array.prototype.slice.call(arguments, 2), o = u.listeners(e), c = 0, d = [], h = {}, p = [], f = t;
        t = e, i = 0;
        for (var g = 0, m = o.length; m > g; g++)"zIndex"in o[g] && (d.push(o[g].zIndex), 0 > o[g].zIndex && (h[o[g].zIndex] = o[g]));
        for (d.sort(l); 0 > d[c];)if (r = h[d[c++]], p.push(r.apply(n, a)), i)return i = s, p;
        for (g = 0; m > g; g++)if (r = o[g], "zIndex"in r)if (r.zIndex == d[c]) {
            if (p.push(r.apply(n, a)), i)break;
            do if (c++, r = h[d[c]], r && p.push(r.apply(n, a)), i)break; while (r)
        } else h[r.zIndex] = r; else if (p.push(r.apply(n, a)), i)break;
        return i = s, t = f, p.length ? p : null
    };
    u.listeners = function (e) {
        var t, i, n, r, o, l, u, d, h = e.split(s), p = c, f = [p], g = [];
        for (r = 0, o = h.length; o > r; r++) {
            for (d = [], l = 0, u = f.length; u > l; l++)for (p = f[l].n, i = [p[h[r]], p[a]], n = 2; n--;)t = i[n], t && (d.push(t), g = g.concat(t.f || []));
            f = d
        }
        return g
    }, u.on = function (e, t) {
        for (var i = e.split(s), n = c, r = 0, a = i.length; a > r; r++)n = n.n, !n[i[r]] && (n[i[r]] = {n: {}}), n = n[i[r]];
        for (n.f = n.f || [], r = 0, a = n.f.length; a > r; r++)if (n.f[r] == t)return o;
        return n.f.push(t), function (e) {
            +e == +e && (t.zIndex = +e)
        }
    }, u.stop = function () {
        i = 1
    }, u.nt = function (e) {
        return e ? RegExp("(?:\\.|\\/|^)" + e + "(?:\\.|\\/|$)").test(t) : t
    }, u.off = u.unbind = function (e, t) {
        var i, n, o, l, u, d, h, p = e.split(s), f = [c];
        for (l = 0, u = p.length; u > l; l++)for (d = 0; f.length > d; d += o.length - 2) {
            if (o = [d, 1], i = f[d].n, p[l] != a)i[p[l]] && o.push(i[p[l]]); else for (n in i)i[r](n) && o.push(i[n]);
            f.splice.apply(f, o)
        }
        for (l = 0, u = f.length; u > l; l++)for (i = f[l]; i.n;) {
            if (t) {
                if (i.f) {
                    for (d = 0, h = i.f.length; h > d; d++)if (i.f[d] == t) {
                        i.f.splice(d, 1);
                        break
                    }
                    !i.f.length && delete i.f
                }
                for (n in i.n)if (i.n[r](n) && i.n[n].f) {
                    var g = i.n[n].f;
                    for (d = 0, h = g.length; h > d; d++)if (g[d] == t) {
                        g.splice(d, 1);
                        break
                    }
                    !g.length && delete i.n[n].f
                }
            } else {
                delete i.f;
                for (n in i.n)i.n[r](n) && i.n[n].f && delete i.n[n].f
            }
            i = i.n
        }
    }, u.once = function (e, t) {
        var i = function () {
            var n = t.apply(this, arguments);
            return u.unbind(e, i), n
        };
        return u.on(e, i)
    }, u.version = n, u.toString = function () {
        return"You are running Eve " + n
    }, "undefined" != typeof module && module.exports ? module.exports = u : "undefined" != typeof define ? define("eve", [], function () {
        return u
    }) : e.eve = u
}(this), window.eve || "function" != typeof define || "function" != typeof require || (window.eve = require("eve")), function () {
    function e(t) {
        if (e.is(t, "function"))return v ? t() : eve.on("raphael.DOMload", t);
        if (e.is(t, Y))return e._engine.create[k](e, t.splice(0, 3 + e.is(t[0], z))).add(t);
        var i = Array.prototype.slice.call(arguments, 0);
        if (e.is(i[i.length - 1], "function")) {
            var n = i.pop();
            return v ? n.call(e._engine.create[k](e, i)) : eve.on("raphael.DOMload", function () {
                n.call(e._engine.create[k](e, i))
            })
        }
        return e._engine.create[k](e, arguments)
    }

    function t(e) {
        if (Object(e) !== e)return e;
        var i = new e.constructor;
        for (var n in e)e[S](n) && (i[n] = t(e[n]));
        return i
    }

    function i(e, t) {
        for (var i = 0, n = e.length; n > i; i++)if (e[i] === t)return e.push(e.splice(i, 1)[0])
    }

    function n(e, t, n) {
        function r() {
            var s = Array.prototype.slice.call(arguments, 0), a = s.join("\u2400"), o = r.cache = r.cache || {}, l = r.count = r.count || [];
            return o[S](a) ? (i(l, a), n ? n(o[a]) : o[a]) : (l.length >= 1e3 && delete o[l.shift()], l.push(a), o[a] = e[k](t, s), n ? n(o[a]) : o[a])
        }

        return r
    }

    function r() {
        return this.hex
    }

    function s(e, t) {
        for (var i = [], n = 0, r = e.length; r - 2 * !t > n; n += 2) {
            var s = [
                {x: +e[n - 2], y: +e[n - 1]},
                {x: +e[n], y: +e[n + 1]},
                {x: +e[n + 2], y: +e[n + 3]},
                {x: +e[n + 4], y: +e[n + 5]}
            ];
            t ? n ? r - 4 == n ? s[3] = {x: +e[0], y: +e[1]} : r - 2 == n && (s[2] = {x: +e[0], y: +e[1]}, s[3] = {x: +e[2], y: +e[3]}) : s[0] = {x: +e[r - 2], y: +e[r - 1]} : r - 4 == n ? s[3] = s[2] : n || (s[0] = {x: +e[n], y: +e[n + 1]}), i.push(["C", (-s[0].x + 6 * s[1].x + s[2].x) / 6, (-s[0].y + 6 * s[1].y + s[2].y) / 6, (s[1].x + 6 * s[2].x - s[3].x) / 6, (s[1].y + 6 * s[2].y - s[3].y) / 6, s[2].x, s[2].y])
        }
        return i
    }

    function a(e, t, i, n, r) {
        var s = -3 * t + 9 * i - 9 * n + 3 * r, a = e * s + 6 * t - 12 * i + 6 * n;
        return e * a - 3 * t + 3 * i
    }

    function o(e, t, i, n, r, s, o, l, c) {
        null == c && (c = 1), c = c > 1 ? 1 : 0 > c ? 0 : c;
        for (var u = c / 2, d = 12, h = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], p = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], f = 0, g = 0; d > g; g++) {
            var m = u * h[g] + u, y = a(m, e, i, r, o), v = a(m, t, n, s, l), b = y * y + v * v;
            f += p[g] * L.sqrt(b)
        }
        return u * f
    }

    function l(e, t, i, n, r, s, a, l, c) {
        if (!(0 > c || c > o(e, t, i, n, r, s, a, l))) {
            var u, d = 1, h = d / 2, p = d - h, f = .01;
            for (u = o(e, t, i, n, r, s, a, l, p); F(u - c) > f;)h /= 2, p += (c > u ? 1 : -1) * h, u = o(e, t, i, n, r, s, a, l, p);
            return p
        }
    }

    function c(e, t, i, n, r, s, a, o) {
        if (!(O(e, i) < J(r, a) || J(e, i) > O(r, a) || O(t, n) < J(s, o) || J(t, n) > O(s, o))) {
            var l = (e * n - t * i) * (r - a) - (e - i) * (r * o - s * a), c = (e * n - t * i) * (s - o) - (t - n) * (r * o - s * a), u = (e - i) * (s - o) - (t - n) * (r - a);
            if (u) {
                var d = l / u, h = c / u, p = +d.toFixed(2), f = +h.toFixed(2);
                if (!(+J(e, i).toFixed(2) > p || p > +O(e, i).toFixed(2) || +J(r, a).toFixed(2) > p || p > +O(r, a).toFixed(2) || +J(t, n).toFixed(2) > f || f > +O(t, n).toFixed(2) || +J(s, o).toFixed(2) > f || f > +O(s, o).toFixed(2)))return{x: d, y: h}
            }
        }
    }

    function u(t, i, n) {
        var r = e.bezierBBox(t), s = e.bezierBBox(i);
        if (!e.isBBoxIntersect(r, s))return n ? 0 : [];
        for (var a = o.apply(0, t), l = o.apply(0, i), u = ~~(a / 5), d = ~~(l / 5), h = [], p = [], f = {}, g = n ? 0 : [], m = 0; u + 1 > m; m++) {
            var y = e.findDotsAtSegment.apply(e, t.concat(m / u));
            h.push({x: y.x, y: y.y, t: m / u})
        }
        for (m = 0; d + 1 > m; m++)y = e.findDotsAtSegment.apply(e, i.concat(m / d)), p.push({x: y.x, y: y.y, t: m / d});
        for (m = 0; u > m; m++)for (var v = 0; d > v; v++) {
            var b = h[m], x = h[m + 1], w = p[v], _ = p[v + 1], S = .001 > F(x.x - b.x) ? "y" : "x", C = .001 > F(_.x - w.x) ? "y" : "x", A = c(b.x, b.y, x.x, x.y, w.x, w.y, _.x, _.y);
            if (A) {
                if (f[A.x.toFixed(4)] == A.y.toFixed(4))continue;
                f[A.x.toFixed(4)] = A.y.toFixed(4);
                var $ = b.t + F((A[S] - b[S]) / (x[S] - b[S])) * (x.t - b.t), k = w.t + F((A[C] - w[C]) / (_[C] - w[C])) * (_.t - w.t);
                $ >= 0 && 1 >= $ && k >= 0 && 1 >= k && (n ? g++ : g.push({x: A.x, y: A.y, t1: $, t2: k}))
            }
        }
        return g
    }

    function d(t, i, n) {
        t = e._path2curve(t), i = e._path2curve(i);
        for (var r, s, a, o, l, c, d, h, p, f, g = n ? 0 : [], m = 0, y = t.length; y > m; m++) {
            var v = t[m];
            if ("M" == v[0])r = l = v[1], s = c = v[2]; else {
                "C" == v[0] ? (p = [r, s].concat(v.slice(1)), r = p[6], s = p[7]) : (p = [r, s, r, s, l, c, l, c], r = l, s = c);
                for (var b = 0, x = i.length; x > b; b++) {
                    var w = i[b];
                    if ("M" == w[0])a = d = w[1], o = h = w[2]; else {
                        "C" == w[0] ? (f = [a, o].concat(w.slice(1)), a = f[6], o = f[7]) : (f = [a, o, a, o, d, h, d, h], a = d, o = h);
                        var _ = u(p, f, n);
                        if (n)g += _; else {
                            for (var S = 0, C = _.length; C > S; S++)_[S].segment1 = m, _[S].segment2 = b, _[S].bez1 = p, _[S].bez2 = f;
                            g = g.concat(_)
                        }
                    }
                }
            }
        }
        return g
    }

    function h(e, t, i, n, r, s) {
        null != e ? (this.a = +e, this.b = +t, this.c = +i, this.d = +n, this.e = +r, this.f = +s) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
    }

    function p() {
        return this.x + E + this.y + E + this.width + " \u00d7 " + this.height
    }

    function f(e, t, i, n, r, s) {
        function a(e) {
            return((d * e + u) * e + c) * e
        }

        function o(e, t) {
            var i = l(e, t);
            return((f * i + p) * i + h) * i
        }

        function l(e, t) {
            var i, n, r, s, o, l;
            for (r = e, l = 0; 8 > l; l++) {
                if (s = a(r) - e, t > F(s))return r;
                if (o = (3 * d * r + 2 * u) * r + c, 1e-6 > F(o))break;
                r -= s / o
            }
            if (i = 0, n = 1, r = e, i > r)return i;
            if (r > n)return n;
            for (; n > i;) {
                if (s = a(r), t > F(s - e))return r;
                e > s ? i = r : n = r, r = (n - i) / 2 + i
            }
            return r
        }

        var c = 3 * t, u = 3 * (n - t) - c, d = 1 - c - u, h = 3 * i, p = 3 * (r - i) - h, f = 1 - h - p;
        return o(e, 1 / (200 * s))
    }

    function g(e, t) {
        var i = [], n = {};
        if (this.ms = t, this.times = 1, e) {
            for (var r in e)e[S](r) && (n[X(r)] = e[r], i.push(X(r)));
            i.sort(ct)
        }
        this.anim = n, this.top = i[i.length - 1], this.percents = i
    }

    function m(t, i, n, r, s, a) {
        n = X(n);
        var o, l, c, u, d, p, g = t.ms, m = {}, y = {}, v = {};
        if (r)for (w = 0, _ = si.length; _ > w; w++) {
            var b = si[w];
            if (b.el.id == i.id && b.anim == t) {
                b.percent != n ? (si.splice(w, 1), c = 1) : l = b, i.attr(b.totalOrigin);
                break
            }
        } else r = +y;
        for (var w = 0, _ = t.percents.length; _ > w; w++) {
            if (t.percents[w] == n || t.percents[w] > r * t.top) {
                n = t.percents[w], d = t.percents[w - 1] || 0, g = g / t.top * (n - d), u = t.percents[w + 1], o = t.anim[n];
                break
            }
            r && i.attr(t.anim[t.percents[w]])
        }
        if (o) {
            if (l)l.initstatus = r, l.start = new Date - l.ms * r; else {
                for (var C in o)if (o[S](C) && (tt[S](C) || i.paper.customAttributes[S](C)))switch (m[C] = i.attr(C), null == m[C] && (m[C] = et[C]), y[C] = o[C], tt[C]) {
                    case z:
                        v[C] = (y[C] - m[C]) / g;
                        break;
                    case"colour":
                        m[C] = e.getRGB(m[C]);
                        var A = e.getRGB(y[C]);
                        v[C] = {r: (A.r - m[C].r) / g, g: (A.g - m[C].g) / g, b: (A.b - m[C].b) / g};
                        break;
                    case"path":
                        var $ = It(m[C], y[C]), k = $[1];
                        for (m[C] = $[0], v[C] = [], w = 0, _ = m[C].length; _ > w; w++) {
                            v[C][w] = [0];
                            for (var D = 1, N = m[C][w].length; N > D; D++)v[C][w][D] = (k[w][D] - m[C][w][D]) / g
                        }
                        break;
                    case"transform":
                        var E = i._, I = Jt(E[C], y[C]);
                        if (I)for (m[C] = I.from, y[C] = I.to, v[C] = [], v[C].real = !0, w = 0, _ = m[C].length; _ > w; w++)for (v[C][w] = [m[C][w][0]], D = 1, N = m[C][w].length; N > D; D++)v[C][w][D] = (y[C][w][D] - m[C][w][D]) / g; else {
                            var H = i.matrix || new h, R = {_: {transform: E.transform}, getBBox: function () {
                                return i.getBBox(1)
                            }};
                            m[C] = [H.a, H.b, H.c, H.d, H.e, H.f], Lt(R, y[C]), y[C] = R._.transform, v[C] = [(R.matrix.a - H.a) / g, (R.matrix.b - H.b) / g, (R.matrix.c - H.c) / g, (R.matrix.d - H.d) / g, (R.matrix.e - H.e) / g, (R.matrix.f - H.f) / g]
                        }
                        break;
                    case"csv":
                        var L = M(o[C])[P](x), O = M(m[C])[P](x);
                        if ("clip-rect" == C)for (m[C] = O, v[C] = [], w = O.length; w--;)v[C][w] = (L[w] - m[C][w]) / g;
                        y[C] = L;
                        break;
                    default:
                        for (L = [][T](o[C]), O = [][T](m[C]), v[C] = [], w = i.paper.customAttributes[C].length; w--;)v[C][w] = ((L[w] || 0) - (O[w] || 0)) / g
                }
                var J = o.easing, F = e.easing_formulas[J];
                if (!F)if (F = M(J).match(V), F && 5 == F.length) {
                    var B = F;
                    F = function (e) {
                        return f(e, +B[1], +B[2], +B[3], +B[4], g)
                    }
                } else F = dt;
                if (p = o.start || t.start || +new Date, b = {anim: t, percent: n, timestamp: p, start: p + (t.del || 0), status: 0, initstatus: r || 0, stop: !1, ms: g, easing: F, from: m, diff: v, to: y, el: i, callback: o.callback, prev: d, next: u, repeat: a || t.times, origin: i.attr(), totalOrigin: s}, si.push(b), r && !l && !c && (b.stop = !0, b.start = new Date - g * r, 1 == si.length))return oi();
                c && (b.start = new Date - b.ms * r), 1 == si.length && ai(oi)
            }
            eve("raphael.anim.start." + i.id, i, t)
        }
    }

    function y(e) {
        for (var t = 0; si.length > t; t++)si[t].el.paper == e && si.splice(t--, 1)
    }

    e.version = "2.1.0", e.eve = eve;
    var v, b, x = /[, ]+/, w = {circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1}, _ = /\{(\d+)\}/g, S = "hasOwnProperty", C = {doc: document, win: window}, A = {was: Object.prototype[S].call(C.win, "Raphael"), is: C.win.Raphael}, $ = function () {
        this.ca = this.customAttributes = {}
    }, k = "apply", T = "concat", D = "createTouch"in C.doc, N = "", E = " ", M = String, P = "split", I = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[P](E), H = {mousedown: "touchstart", mousemove: "touchmove", mouseup: "touchend"}, R = M.prototype.toLowerCase, L = Math, O = L.max, J = L.min, F = L.abs, B = L.pow, j = L.PI, z = "number", W = "string", Y = "array", U = Object.prototype.toString, q = (e._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i), K = {NaN: 1, Infinity: 1, "-Infinity": 1}, V = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/, G = L.round, X = parseFloat, Q = parseInt, Z = M.prototype.toUpperCase, et = e._availableAttrs = {"arrow-end": "none", "arrow-start": "none", blur: 0, "clip-rect": "0 0 1e9 1e9", cursor: "default", cx: 0, cy: 0, fill: "#fff", "fill-opacity": 1, font: '10px "Arial"', "font-family": '"Arial"', "font-size": "10", "font-style": "normal", "font-weight": 400, gradient: 0, height: 0, href: "http://raphaeljs.com/", "letter-spacing": 0, opacity: 1, path: "M0,0", r: 0, rx: 0, ry: 0, src: "", stroke: "#000", "stroke-dasharray": "", "stroke-linecap": "butt", "stroke-linejoin": "butt", "stroke-miterlimit": 0, "stroke-opacity": 1, "stroke-width": 1, target: "_blank", "text-anchor": "middle", title: "Raphael", transform: "", width: 0, x: 0, y: 0}, tt = e._availableAnimAttrs = {blur: z, "clip-rect": "csv", cx: z, cy: z, fill: "colour", "fill-opacity": z, "font-size": z, height: z, opacity: z, path: "path", r: z, rx: z, ry: z, stroke: "colour", "stroke-opacity": z, "stroke-width": z, transform: "transform", width: z, x: z, y: z}, it = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/, nt = {hs: 1, rg: 1}, rt = /,?([achlmqrstvxz]),?/gi, st = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi, at = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi, ot = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi, lt = (e._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}), ct = function (e, t) {
        return X(e) - X(t)
    }, ut = function () {
    }, dt = function (e) {
        return e
    }, ht = e._rectPath = function (e, t, i, n, r) {
        return r ? [
            ["M", e + r, t],
            ["l", i - 2 * r, 0],
            ["a", r, r, 0, 0, 1, r, r],
            ["l", 0, n - 2 * r],
            ["a", r, r, 0, 0, 1, -r, r],
            ["l", 2 * r - i, 0],
            ["a", r, r, 0, 0, 1, -r, -r],
            ["l", 0, 2 * r - n],
            ["a", r, r, 0, 0, 1, r, -r],
            ["z"]
        ] : [
            ["M", e, t],
            ["l", i, 0],
            ["l", 0, n],
            ["l", -i, 0],
            ["z"]
        ]
    }, pt = function (e, t, i, n) {
        return null == n && (n = i), [
            ["M", e, t],
            ["m", 0, -n],
            ["a", i, n, 0, 1, 1, 0, 2 * n],
            ["a", i, n, 0, 1, 1, 0, -2 * n],
            ["z"]
        ]
    }, ft = e._getPath = {path: function (e) {
        return e.attr("path")
    }, circle: function (e) {
        var t = e.attrs;
        return pt(t.cx, t.cy, t.r)
    }, ellipse: function (e) {
        var t = e.attrs;
        return pt(t.cx, t.cy, t.rx, t.ry)
    }, rect: function (e) {
        var t = e.attrs;
        return ht(t.x, t.y, t.width, t.height, t.r)
    }, image: function (e) {
        var t = e.attrs;
        return ht(t.x, t.y, t.width, t.height)
    }, text: function (e) {
        var t = e._getBBox();
        return ht(t.x, t.y, t.width, t.height)
    }}, gt = e.mapPath = function (e, t) {
        if (!t)return e;
        var i, n, r, s, a, o, l;
        for (e = It(e), r = 0, a = e.length; a > r; r++)for (l = e[r], s = 1, o = l.length; o > s; s += 2)i = t.x(l[s], l[s + 1]), n = t.y(l[s], l[s + 1]), l[s] = i, l[s + 1] = n;
        return e
    };
    if (e._g = C, e.type = C.win.SVGAngle || C.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == e.type) {
        var mt, yt = C.doc.createElement("div");
        if (yt.innerHTML = '<v:shape adj="1"/>', mt = yt.firstChild, mt.style.behavior = "url(#default#VML)", !mt || "object" != typeof mt.adj)return e.type = N;
        yt = null
    }
    e.svg = !(e.vml = "VML" == e.type), e._Paper = $, e.fn = b = $.prototype = e.prototype, e._id = 0, e._oid = 0, e.is = function (e, t) {
        return t = R.call(t), "finite" == t ? !K[S](+e) : "array" == t ? e instanceof Array : "null" == t && null === e || t == typeof e && null !== e || "object" == t && e === Object(e) || "array" == t && Array.isArray && Array.isArray(e) || U.call(e).slice(8, -1).toLowerCase() == t
    }, e.angle = function (t, i, n, r, s, a) {
        if (null == s) {
            var o = t - n, l = i - r;
            return o || l ? (180 + 180 * L.atan2(-l, -o) / j + 360) % 360 : 0
        }
        return e.angle(t, i, s, a) - e.angle(n, r, s, a)
    }, e.rad = function (e) {
        return e % 360 * j / 180
    }, e.deg = function (e) {
        return 180 * e / j % 360
    }, e.snapTo = function (t, i, n) {
        if (n = e.is(n, "finite") ? n : 10, e.is(t, Y)) {
            for (var r = t.length; r--;)if (n >= F(t[r] - i))return t[r]
        } else {
            t = +t;
            var s = i % t;
            if (n > s)return i - s;
            if (s > t - n)return i - s + t
        }
        return i
    }, e.createUUID = function (e, t) {
        return function () {
            return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(e, t).toUpperCase()
        }
    }(/[xy]/g, function (e) {
        var t = 0 | 16 * L.random(), i = "x" == e ? t : 8 | 3 & t;
        return i.toString(16)
    }), e.setWindow = function (t) {
        eve("raphael.setWindow", e, C.win, t), C.win = t, C.doc = C.win.document, e._engine.initWin && e._engine.initWin(C.win)
    };
    var vt = function (t) {
        if (e.vml) {
            var i, r = /^\s+|\s+$/g;
            try {
                var s = new ActiveXObject("htmlfile");
                s.write("<body>"), s.close(), i = s.body
            } catch (a) {
                i = createPopup().document.body
            }
            var o = i.createTextRange();
            vt = n(function (e) {
                try {
                    i.style.color = M(e).replace(r, N);
                    var t = o.queryCommandValue("ForeColor");
                    return t = (255 & t) << 16 | 65280 & t | (16711680 & t) >>> 16, "#" + ("000000" + t.toString(16)).slice(-6)
                } catch (n) {
                    return"none"
                }
            })
        } else {
            var l = C.doc.createElement("i");
            l.title = "Rapha\u00ebl Colour Picker", l.style.display = "none", C.doc.body.appendChild(l), vt = n(function (e) {
                return l.style.color = e, C.doc.defaultView.getComputedStyle(l, N).getPropertyValue("color")
            })
        }
        return vt(t)
    }, bt = function () {
        return"hsb(" + [this.h, this.s, this.b] + ")"
    }, xt = function () {
        return"hsl(" + [this.h, this.s, this.l] + ")"
    }, wt = function () {
        return this.hex
    }, _t = function (t, i, n) {
        if (null == i && e.is(t, "object") && "r"in t && "g"in t && "b"in t && (n = t.b, i = t.g, t = t.r), null == i && e.is(t, W)) {
            var r = e.getRGB(t);
            t = r.r, i = r.g, n = r.b
        }
        return(t > 1 || i > 1 || n > 1) && (t /= 255, i /= 255, n /= 255), [t, i, n]
    }, St = function (t, i, n, r) {
        t *= 255, i *= 255, n *= 255;
        var s = {r: t, g: i, b: n, hex: e.rgb(t, i, n), toString: wt};
        return e.is(r, "finite") && (s.opacity = r), s
    };
    e.color = function (t) {
        var i;
        return e.is(t, "object") && "h"in t && "s"in t && "b"in t ? (i = e.hsb2rgb(t), t.r = i.r, t.g = i.g, t.b = i.b, t.hex = i.hex) : e.is(t, "object") && "h"in t && "s"in t && "l"in t ? (i = e.hsl2rgb(t), t.r = i.r, t.g = i.g, t.b = i.b, t.hex = i.hex) : (e.is(t, "string") && (t = e.getRGB(t)), e.is(t, "object") && "r"in t && "g"in t && "b"in t ? (i = e.rgb2hsl(t), t.h = i.h, t.s = i.s, t.l = i.l, i = e.rgb2hsb(t), t.v = i.b) : (t = {hex: "none"}, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1)), t.toString = wt, t
    }, e.hsb2rgb = function (e, t, i, n) {
        this.is(e, "object") && "h"in e && "s"in e && "b"in e && (i = e.b, t = e.s, e = e.h, n = e.o), e *= 360;
        var r, s, a, o, l;
        return e = e % 360 / 60, l = i * t, o = l * (1 - F(e % 2 - 1)), r = s = a = i - l, e = ~~e, r += [l, o, 0, 0, o, l][e], s += [o, l, l, o, 0, 0][e], a += [0, 0, o, l, l, o][e], St(r, s, a, n)
    }, e.hsl2rgb = function (e, t, i, n) {
        this.is(e, "object") && "h"in e && "s"in e && "l"in e && (i = e.l, t = e.s, e = e.h), (e > 1 || t > 1 || i > 1) && (e /= 360, t /= 100, i /= 100), e *= 360;
        var r, s, a, o, l;
        return e = e % 360 / 60, l = 2 * t * (.5 > i ? i : 1 - i), o = l * (1 - F(e % 2 - 1)), r = s = a = i - l / 2, e = ~~e, r += [l, o, 0, 0, o, l][e], s += [o, l, l, o, 0, 0][e], a += [0, 0, o, l, l, o][e], St(r, s, a, n)
    }, e.rgb2hsb = function (e, t, i) {
        i = _t(e, t, i), e = i[0], t = i[1], i = i[2];
        var n, r, s, a;
        return s = O(e, t, i), a = s - J(e, t, i), n = 0 == a ? null : s == e ? (t - i) / a : s == t ? (i - e) / a + 2 : (e - t) / a + 4, n = 60 * ((n + 360) % 6) / 360, r = 0 == a ? 0 : a / s, {h: n, s: r, b: s, toString: bt}
    }, e.rgb2hsl = function (e, t, i) {
        i = _t(e, t, i), e = i[0], t = i[1], i = i[2];
        var n, r, s, a, o, l;
        return a = O(e, t, i), o = J(e, t, i), l = a - o, n = 0 == l ? null : a == e ? (t - i) / l : a == t ? (i - e) / l + 2 : (e - t) / l + 4, n = 60 * ((n + 360) % 6) / 360, s = (a + o) / 2, r = 0 == l ? 0 : .5 > s ? l / (2 * s) : l / (2 - 2 * s), {h: n, s: r, l: s, toString: xt}
    }, e._path2string = function () {
        return this.join(",").replace(rt, "$1")
    }, e._preload = function (e, t) {
        var i = C.doc.createElement("img");
        i.style.cssText = "position:absolute;left:-9999em;top:-9999em", i.onload = function () {
            t.call(this), this.onload = null, C.doc.body.removeChild(this)
        }, i.onerror = function () {
            C.doc.body.removeChild(this)
        }, C.doc.body.appendChild(i), i.src = e
    }, e.getRGB = n(function (t) {
        if (!t || (t = M(t)).indexOf("-") + 1)return{r: -1, g: -1, b: -1, hex: "none", error: 1, toString: r};
        if ("none" == t)return{r: -1, g: -1, b: -1, hex: "none", toString: r};
        !(nt[S](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = vt(t));
        var i, n, s, a, o, l, c = t.match(q);
        return c ? (c[2] && (s = Q(c[2].substring(5), 16), n = Q(c[2].substring(3, 5), 16), i = Q(c[2].substring(1, 3), 16)), c[3] && (s = Q((o = c[3].charAt(3)) + o, 16), n = Q((o = c[3].charAt(2)) + o, 16), i = Q((o = c[3].charAt(1)) + o, 16)), c[4] && (l = c[4][P](it), i = X(l[0]), "%" == l[0].slice(-1) && (i *= 2.55), n = X(l[1]), "%" == l[1].slice(-1) && (n *= 2.55), s = X(l[2]), "%" == l[2].slice(-1) && (s *= 2.55), "rgba" == c[1].toLowerCase().slice(0, 4) && (a = X(l[3])), l[3] && "%" == l[3].slice(-1) && (a /= 100)), c[5] ? (l = c[5][P](it), i = X(l[0]), "%" == l[0].slice(-1) && (i *= 2.55), n = X(l[1]), "%" == l[1].slice(-1) && (n *= 2.55), s = X(l[2]), "%" == l[2].slice(-1) && (s *= 2.55), ("deg" == l[0].slice(-3) || "\u00b0" == l[0].slice(-1)) && (i /= 360), "hsba" == c[1].toLowerCase().slice(0, 4) && (a = X(l[3])), l[3] && "%" == l[3].slice(-1) && (a /= 100), e.hsb2rgb(i, n, s, a)) : c[6] ? (l = c[6][P](it), i = X(l[0]), "%" == l[0].slice(-1) && (i *= 2.55), n = X(l[1]), "%" == l[1].slice(-1) && (n *= 2.55), s = X(l[2]), "%" == l[2].slice(-1) && (s *= 2.55), ("deg" == l[0].slice(-3) || "\u00b0" == l[0].slice(-1)) && (i /= 360), "hsla" == c[1].toLowerCase().slice(0, 4) && (a = X(l[3])), l[3] && "%" == l[3].slice(-1) && (a /= 100), e.hsl2rgb(i, n, s, a)) : (c = {r: i, g: n, b: s, toString: r}, c.hex = "#" + (16777216 | s | n << 8 | i << 16).toString(16).slice(1), e.is(a, "finite") && (c.opacity = a), c)) : {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: r}
    }, e), e.hsb = n(function (t, i, n) {
        return e.hsb2rgb(t, i, n).hex
    }), e.hsl = n(function (t, i, n) {
        return e.hsl2rgb(t, i, n).hex
    }), e.rgb = n(function (e, t, i) {
        return"#" + (16777216 | i | t << 8 | e << 16).toString(16).slice(1)
    }), e.getColor = function (e) {
        var t = this.getColor.start = this.getColor.start || {h: 0, s: 1, b: e || .75}, i = this.hsb2rgb(t.h, t.s, t.b);
        return t.h += .075, t.h > 1 && (t.h = 0, t.s -= .2, 0 >= t.s && (this.getColor.start = {h: 0, s: 1, b: t.b})), i.hex
    }, e.getColor.reset = function () {
        delete this.start
    }, e.parsePathString = function (t) {
        if (!t)return null;
        var i = Ct(t);
        if (i.arr)return $t(i.arr);
        var n = {a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0}, r = [];
        return e.is(t, Y) && e.is(t[0], Y) && (r = $t(t)), r.length || M(t).replace(st, function (e, t, i) {
            var s = [], a = t.toLowerCase();
            if (i.replace(ot, function (e, t) {
                t && s.push(+t)
            }), "m" == a && s.length > 2 && (r.push([t][T](s.splice(0, 2))), a = "l", t = "m" == t ? "l" : "L"), "r" == a)r.push([t][T](s)); else for (; s.length >= n[a] && (r.push([t][T](s.splice(0, n[a]))), n[a]););
        }), r.toString = e._path2string, i.arr = $t(r), r
    }, e.parseTransformString = n(function (t) {
        if (!t)return null;
        var i = [];
        return e.is(t, Y) && e.is(t[0], Y) && (i = $t(t)), i.length || M(t).replace(at, function (e, t, n) {
            var r = [];
            R.call(t), n.replace(ot, function (e, t) {
                t && r.push(+t)
            }), i.push([t][T](r))
        }), i.toString = e._path2string, i
    });
    var Ct = function (e) {
        var t = Ct.ps = Ct.ps || {};
        return t[e] ? t[e].sleep = 100 : t[e] = {sleep: 100}, setTimeout(function () {
            for (var i in t)t[S](i) && i != e && (t[i].sleep--, !t[i].sleep && delete t[i])
        }), t[e]
    };
    e.findDotsAtSegment = function (e, t, i, n, r, s, a, o, l) {
        var c = 1 - l, u = B(c, 3), d = B(c, 2), h = l * l, p = h * l, f = u * e + 3 * d * l * i + 3 * c * l * l * r + p * a, g = u * t + 3 * d * l * n + 3 * c * l * l * s + p * o, m = e + 2 * l * (i - e) + h * (r - 2 * i + e), y = t + 2 * l * (n - t) + h * (s - 2 * n + t), v = i + 2 * l * (r - i) + h * (a - 2 * r + i), b = n + 2 * l * (s - n) + h * (o - 2 * s + n), x = c * e + l * i, w = c * t + l * n, _ = c * r + l * a, S = c * s + l * o, C = 90 - 180 * L.atan2(m - v, y - b) / j;
        return(m > v || b > y) && (C += 180), {x: f, y: g, m: {x: m, y: y}, n: {x: v, y: b}, start: {x: x, y: w}, end: {x: _, y: S}, alpha: C}
    }, e.bezierBBox = function (t, i, n, r, s, a, o, l) {
        e.is(t, "array") || (t = [t, i, n, r, s, a, o, l]);
        var c = Pt.apply(null, t);
        return{x: c.min.x, y: c.min.y, x2: c.max.x, y2: c.max.y, width: c.max.x - c.min.x, height: c.max.y - c.min.y}
    }, e.isPointInsideBBox = function (e, t, i) {
        return t >= e.x && e.x2 >= t && i >= e.y && e.y2 >= i
    }, e.isBBoxIntersect = function (t, i) {
        var n = e.isPointInsideBBox;
        return n(i, t.x, t.y) || n(i, t.x2, t.y) || n(i, t.x, t.y2) || n(i, t.x2, t.y2) || n(t, i.x, i.y) || n(t, i.x2, i.y) || n(t, i.x, i.y2) || n(t, i.x2, i.y2) || (t.x < i.x2 && t.x > i.x || i.x < t.x2 && i.x > t.x) && (t.y < i.y2 && t.y > i.y || i.y < t.y2 && i.y > t.y)
    }, e.pathIntersection = function (e, t) {
        return d(e, t)
    }, e.pathIntersectionNumber = function (e, t) {
        return d(e, t, 1)
    }, e.isPointInsidePath = function (t, i, n) {
        var r = e.pathBBox(t);
        return e.isPointInsideBBox(r, i, n) && 1 == d(t, [
            ["M", i, n],
            ["H", r.x2 + 10]
        ], 1) % 2
    }, e._removedFactory = function (e) {
        return function () {
            eve("raphael.log", null, "Rapha\u00ebl: you are calling to method \u201c" + e + "\u201d of removed object", e)
        }
    };
    var At = e.pathBBox = function (e) {
        var i = Ct(e);
        if (i.bbox)return i.bbox;
        if (!e)return{x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0};
        e = It(e);
        for (var n, r = 0, s = 0, a = [], o = [], l = 0, c = e.length; c > l; l++)if (n = e[l], "M" == n[0])r = n[1], s = n[2], a.push(r), o.push(s); else {
            var u = Pt(r, s, n[1], n[2], n[3], n[4], n[5], n[6]);
            a = a[T](u.min.x, u.max.x), o = o[T](u.min.y, u.max.y), r = n[5], s = n[6]
        }
        var d = J[k](0, a), h = J[k](0, o), p = O[k](0, a), f = O[k](0, o), g = {x: d, y: h, x2: p, y2: f, width: p - d, height: f - h};
        return i.bbox = t(g), g
    }, $t = function (i) {
        var n = t(i);
        return n.toString = e._path2string, n
    }, kt = e._pathToRelative = function (t) {
        var i = Ct(t);
        if (i.rel)return $t(i.rel);
        e.is(t, Y) && e.is(t && t[0], Y) || (t = e.parsePathString(t));
        var n = [], r = 0, s = 0, a = 0, o = 0, l = 0;
        "M" == t[0][0] && (r = t[0][1], s = t[0][2], a = r, o = s, l++, n.push(["M", r, s]));
        for (var c = l, u = t.length; u > c; c++) {
            var d = n[c] = [], h = t[c];
            if (h[0] != R.call(h[0]))switch (d[0] = R.call(h[0]), d[0]) {
                case"a":
                    d[1] = h[1], d[2] = h[2], d[3] = h[3], d[4] = h[4], d[5] = h[5], d[6] = +(h[6] - r).toFixed(3), d[7] = +(h[7] - s).toFixed(3);
                    break;
                case"v":
                    d[1] = +(h[1] - s).toFixed(3);
                    break;
                case"m":
                    a = h[1], o = h[2];
                default:
                    for (var p = 1, f = h.length; f > p; p++)d[p] = +(h[p] - (p % 2 ? r : s)).toFixed(3)
            } else {
                d = n[c] = [], "m" == h[0] && (a = h[1] + r, o = h[2] + s);
                for (var g = 0, m = h.length; m > g; g++)n[c][g] = h[g]
            }
            var y = n[c].length;
            switch (n[c][0]) {
                case"z":
                    r = a, s = o;
                    break;
                case"h":
                    r += +n[c][y - 1];
                    break;
                case"v":
                    s += +n[c][y - 1];
                    break;
                default:
                    r += +n[c][y - 2], s += +n[c][y - 1]
            }
        }
        return n.toString = e._path2string, i.rel = $t(n), n
    }, Tt = e._pathToAbsolute = function (t) {
        var i = Ct(t);
        if (i.abs)return $t(i.abs);
        if (e.is(t, Y) && e.is(t && t[0], Y) || (t = e.parsePathString(t)), !t || !t.length)return[
            ["M", 0, 0]
        ];
        var n = [], r = 0, a = 0, o = 0, l = 0, c = 0;
        "M" == t[0][0] && (r = +t[0][1], a = +t[0][2], o = r, l = a, c++, n[0] = ["M", r, a]);
        for (var u, d, h = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), p = c, f = t.length; f > p; p++) {
            if (n.push(u = []), d = t[p], d[0] != Z.call(d[0]))switch (u[0] = Z.call(d[0]), u[0]) {
                case"A":
                    u[1] = d[1], u[2] = d[2], u[3] = d[3], u[4] = d[4], u[5] = d[5], u[6] = +(d[6] + r), u[7] = +(d[7] + a);
                    break;
                case"V":
                    u[1] = +d[1] + a;
                    break;
                case"H":
                    u[1] = +d[1] + r;
                    break;
                case"R":
                    for (var g = [r, a][T](d.slice(1)), m = 2, y = g.length; y > m; m++)g[m] = +g[m] + r, g[++m] = +g[m] + a;
                    n.pop(), n = n[T](s(g, h));
                    break;
                case"M":
                    o = +d[1] + r, l = +d[2] + a;
                default:
                    for (m = 1, y = d.length; y > m; m++)u[m] = +d[m] + (m % 2 ? r : a)
            } else if ("R" == d[0])g = [r, a][T](d.slice(1)), n.pop(), n = n[T](s(g, h)), u = ["R"][T](d.slice(-2)); else for (var v = 0, b = d.length; b > v; v++)u[v] = d[v];
            switch (u[0]) {
                case"Z":
                    r = o, a = l;
                    break;
                case"H":
                    r = u[1];
                    break;
                case"V":
                    a = u[1];
                    break;
                case"M":
                    o = u[u.length - 2], l = u[u.length - 1];
                default:
                    r = u[u.length - 2], a = u[u.length - 1]
            }
        }
        return n.toString = e._path2string, i.abs = $t(n), n
    }, Dt = function (e, t, i, n) {
        return[e, t, i, n, i, n]
    }, Nt = function (e, t, i, n, r, s) {
        var a = 1 / 3, o = 2 / 3;
        return[a * e + o * i, a * t + o * n, a * r + o * i, a * s + o * n, r, s]
    }, Et = function (e, t, i, r, s, a, o, l, c, u) {
        var d, h = 120 * j / 180, p = j / 180 * (+s || 0), f = [], g = n(function (e, t, i) {
            var n = e * L.cos(i) - t * L.sin(i), r = e * L.sin(i) + t * L.cos(i);
            return{x: n, y: r}
        });
        if (u)C = u[0], A = u[1], _ = u[2], S = u[3]; else {
            d = g(e, t, -p), e = d.x, t = d.y, d = g(l, c, -p), l = d.x, c = d.y;
            var m = (L.cos(j / 180 * s), L.sin(j / 180 * s), (e - l) / 2), y = (t - c) / 2, v = m * m / (i * i) + y * y / (r * r);
            v > 1 && (v = L.sqrt(v), i = v * i, r = v * r);
            var b = i * i, x = r * r, w = (a == o ? -1 : 1) * L.sqrt(F((b * x - b * y * y - x * m * m) / (b * y * y + x * m * m))), _ = w * i * y / r + (e + l) / 2, S = w * -r * m / i + (t + c) / 2, C = L.asin(((t - S) / r).toFixed(9)), A = L.asin(((c - S) / r).toFixed(9));
            C = _ > e ? j - C : C, A = _ > l ? j - A : A, 0 > C && (C = 2 * j + C), 0 > A && (A = 2 * j + A), o && C > A && (C -= 2 * j), !o && A > C && (A -= 2 * j)
        }
        var $ = A - C;
        if (F($) > h) {
            var k = A, D = l, N = c;
            A = C + h * (o && A > C ? 1 : -1), l = _ + i * L.cos(A), c = S + r * L.sin(A), f = Et(l, c, i, r, s, 0, o, D, N, [A, k, _, S])
        }
        $ = A - C;
        var E = L.cos(C), M = L.sin(C), I = L.cos(A), H = L.sin(A), R = L.tan($ / 4), O = 4 / 3 * i * R, J = 4 / 3 * r * R, B = [e, t], z = [e + O * M, t - J * E], W = [l + O * H, c - J * I], Y = [l, c];
        if (z[0] = 2 * B[0] - z[0], z[1] = 2 * B[1] - z[1], u)return[z, W, Y][T](f);
        f = [z, W, Y][T](f).join()[P](",");
        for (var U = [], q = 0, K = f.length; K > q; q++)U[q] = q % 2 ? g(f[q - 1], f[q], p).y : g(f[q], f[q + 1], p).x;
        return U
    }, Mt = function (e, t, i, n, r, s, a, o, l) {
        var c = 1 - l;
        return{x: B(c, 3) * e + 3 * B(c, 2) * l * i + 3 * c * l * l * r + B(l, 3) * a, y: B(c, 3) * t + 3 * B(c, 2) * l * n + 3 * c * l * l * s + B(l, 3) * o}
    }, Pt = n(function (e, t, i, n, r, s, a, o) {
        var l, c = r - 2 * i + e - (a - 2 * r + i), u = 2 * (i - e) - 2 * (r - i), d = e - i, h = (-u + L.sqrt(u * u - 4 * c * d)) / 2 / c, p = (-u - L.sqrt(u * u - 4 * c * d)) / 2 / c, f = [t, o], g = [e, a];
        return F(h) > "1e12" && (h = .5), F(p) > "1e12" && (p = .5), h > 0 && 1 > h && (l = Mt(e, t, i, n, r, s, a, o, h), g.push(l.x), f.push(l.y)), p > 0 && 1 > p && (l = Mt(e, t, i, n, r, s, a, o, p), g.push(l.x), f.push(l.y)), c = s - 2 * n + t - (o - 2 * s + n), u = 2 * (n - t) - 2 * (s - n), d = t - n, h = (-u + L.sqrt(u * u - 4 * c * d)) / 2 / c, p = (-u - L.sqrt(u * u - 4 * c * d)) / 2 / c, F(h) > "1e12" && (h = .5), F(p) > "1e12" && (p = .5), h > 0 && 1 > h && (l = Mt(e, t, i, n, r, s, a, o, h), g.push(l.x), f.push(l.y)), p > 0 && 1 > p && (l = Mt(e, t, i, n, r, s, a, o, p), g.push(l.x), f.push(l.y)), {min: {x: J[k](0, g), y: J[k](0, f)}, max: {x: O[k](0, g), y: O[k](0, f)}}
    }), It = e._path2curve = n(function (e, t) {
        var i = !t && Ct(e);
        if (!t && i.curve)return $t(i.curve);
        for (var n = Tt(e), r = t && Tt(t), s = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null}, a = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null}, o = (function (e, t) {
            var i, n;
            if (!e)return["C", t.x, t.y, t.x, t.y, t.x, t.y];
            switch (!(e[0]in{T: 1, Q: 1}) && (t.qx = t.qy = null), e[0]) {
                case"M":
                    t.X = e[1], t.Y = e[2];
                    break;
                case"A":
                    e = ["C"][T](Et[k](0, [t.x, t.y][T](e.slice(1))));
                    break;
                case"S":
                    i = t.x + (t.x - (t.bx || t.x)), n = t.y + (t.y - (t.by || t.y)), e = ["C", i, n][T](e.slice(1));
                    break;
                case"T":
                    t.qx = t.x + (t.x - (t.qx || t.x)), t.qy = t.y + (t.y - (t.qy || t.y)), e = ["C"][T](Nt(t.x, t.y, t.qx, t.qy, e[1], e[2]));
                    break;
                case"Q":
                    t.qx = e[1], t.qy = e[2], e = ["C"][T](Nt(t.x, t.y, e[1], e[2], e[3], e[4]));
                    break;
                case"L":
                    e = ["C"][T](Dt(t.x, t.y, e[1], e[2]));
                    break;
                case"H":
                    e = ["C"][T](Dt(t.x, t.y, e[1], t.y));
                    break;
                case"V":
                    e = ["C"][T](Dt(t.x, t.y, t.x, e[1]));
                    break;
                case"Z":
                    e = ["C"][T](Dt(t.x, t.y, t.X, t.Y))
            }
            return e
        }), l = function (e, t) {
            if (e[t].length > 7) {
                e[t].shift();
                for (var i = e[t]; i.length;)e.splice(t++, 0, ["C"][T](i.splice(0, 6)));
                e.splice(t, 1), d = O(n.length, r && r.length || 0)
            }
        }, c = function (e, t, i, s, a) {
            e && t && "M" == e[a][0] && "M" != t[a][0] && (t.splice(a, 0, ["M", s.x, s.y]), i.bx = 0, i.by = 0, i.x = e[a][1], i.y = e[a][2], d = O(n.length, r && r.length || 0))
        }, u = 0, d = O(n.length, r && r.length || 0); d > u; u++) {
            n[u] = o(n[u], s), l(n, u), r && (r[u] = o(r[u], a)), r && l(r, u), c(n, r, s, a, u), c(r, n, a, s, u);
            var h = n[u], p = r && r[u], f = h.length, g = r && p.length;
            s.x = h[f - 2], s.y = h[f - 1], s.bx = X(h[f - 4]) || s.x, s.by = X(h[f - 3]) || s.y, a.bx = r && (X(p[g - 4]) || a.x), a.by = r && (X(p[g - 3]) || a.y), a.x = r && p[g - 2], a.y = r && p[g - 1]
        }
        return r || (i.curve = $t(n)), r ? [n, r] : n
    }, null, $t), Ht = (e._parseDots = n(function (t) {
        for (var i = [], n = 0, r = t.length; r > n; n++) {
            var s = {}, a = t[n].match(/^([^:]*):?([\d\.]*)/);
            if (s.color = e.getRGB(a[1]), s.color.error)return null;
            s.color = s.color.hex, a[2] && (s.offset = a[2] + "%"), i.push(s)
        }
        for (n = 1, r = i.length - 1; r > n; n++)if (!i[n].offset) {
            for (var o = X(i[n - 1].offset || 0), l = 0, c = n + 1; r > c; c++)if (i[c].offset) {
                l = i[c].offset;
                break
            }
            l || (l = 100, c = r), l = X(l);
            for (var u = (l - o) / (c - n + 1); c > n; n++)o += u, i[n].offset = o + "%"
        }
        return i
    }), e._tear = function (e, t) {
        e == t.top && (t.top = e.prev), e == t.bottom && (t.bottom = e.next), e.next && (e.next.prev = e.prev), e.prev && (e.prev.next = e.next)
    }), Rt = (e._tofront = function (e, t) {
        t.top !== e && (Ht(e, t), e.next = null, e.prev = t.top, t.top.next = e, t.top = e)
    }, e._toback = function (e, t) {
        t.bottom !== e && (Ht(e, t), e.next = t.bottom, e.prev = null, t.bottom.prev = e, t.bottom = e)
    }, e._insertafter = function (e, t, i) {
        Ht(e, i), t == i.top && (i.top = e), t.next && (t.next.prev = e), e.next = t.next, e.prev = t, t.next = e
    }, e._insertbefore = function (e, t, i) {
        Ht(e, i), t == i.bottom && (i.bottom = e), t.prev && (t.prev.next = e), e.prev = t.prev, t.prev = e, e.next = t
    }, e.toMatrix = function (e, t) {
        var i = At(e), n = {_: {transform: N}, getBBox: function () {
            return i
        }};
        return Lt(n, t), n.matrix
    }), Lt = (e.transformPath = function (e, t) {
        return gt(e, Rt(e, t))
    }, e._extractTransform = function (t, i) {
        if (null == i)return t._.transform;
        i = M(i).replace(/\.{3}|\u2026/g, t._.transform || N);
        var n = e.parseTransformString(i), r = 0, s = 0, a = 0, o = 1, l = 1, c = t._, u = new h;
        if (c.transform = n || [], n)for (var d = 0, p = n.length; p > d; d++) {
            var f, g, m, y, v, b = n[d], x = b.length, w = M(b[0]).toLowerCase(), _ = b[0] != w, S = _ ? u.invert() : 0;
            "t" == w && 3 == x ? _ ? (f = S.x(0, 0), g = S.y(0, 0), m = S.x(b[1], b[2]), y = S.y(b[1], b[2]), u.translate(m - f, y - g)) : u.translate(b[1], b[2]) : "r" == w ? 2 == x ? (v = v || t.getBBox(1), u.rotate(b[1], v.x + v.width / 2, v.y + v.height / 2), r += b[1]) : 4 == x && (_ ? (m = S.x(b[2], b[3]), y = S.y(b[2], b[3]), u.rotate(b[1], m, y)) : u.rotate(b[1], b[2], b[3]), r += b[1]) : "s" == w ? 2 == x || 3 == x ? (v = v || t.getBBox(1), u.scale(b[1], b[x - 1], v.x + v.width / 2, v.y + v.height / 2), o *= b[1], l *= b[x - 1]) : 5 == x && (_ ? (m = S.x(b[3], b[4]), y = S.y(b[3], b[4]), u.scale(b[1], b[2], m, y)) : u.scale(b[1], b[2], b[3], b[4]), o *= b[1], l *= b[2]) : "m" == w && 7 == x && u.add(b[1], b[2], b[3], b[4], b[5], b[6]), c.dirtyT = 1, t.matrix = u
        }
        t.matrix = u, c.sx = o, c.sy = l, c.deg = r, c.dx = s = u.e, c.dy = a = u.f, 1 == o && 1 == l && !r && c.bbox ? (c.bbox.x += +s, c.bbox.y += +a) : c.dirtyT = 1
    }), Ot = function (e) {
        var t = e[0];
        switch (t.toLowerCase()) {
            case"t":
                return[t, 0, 0];
            case"m":
                return[t, 1, 0, 0, 1, 0, 0];
            case"r":
                return 4 == e.length ? [t, 0, e[2], e[3]] : [t, 0];
            case"s":
                return 5 == e.length ? [t, 1, 1, e[3], e[4]] : 3 == e.length ? [t, 1, 1] : [t, 1]
        }
    }, Jt = e._equaliseTransform = function (t, i) {
        i = M(i).replace(/\.{3}|\u2026/g, t), t = e.parseTransformString(t) || [], i = e.parseTransformString(i) || [];
        for (var n, r, s, a, o = O(t.length, i.length), l = [], c = [], u = 0; o > u; u++) {
            if (s = t[u] || Ot(i[u]), a = i[u] || Ot(s), s[0] != a[0] || "r" == s[0].toLowerCase() && (s[2] != a[2] || s[3] != a[3]) || "s" == s[0].toLowerCase() && (s[3] != a[3] || s[4] != a[4]))return;
            for (l[u] = [], c[u] = [], n = 0, r = O(s.length, a.length); r > n; n++)n in s && (l[u][n] = s[n]), n in a && (c[u][n] = a[n])
        }
        return{from: l, to: c}
    };
    e._getContainer = function (t, i, n, r) {
        var s;
        return s = null != r || e.is(t, "object") ? t : C.doc.getElementById(t), null != s ? s.tagName ? null == i ? {container: s, width: s.style.pixelWidth || s.offsetWidth, height: s.style.pixelHeight || s.offsetHeight} : {container: s, width: i, height: n} : {container: 1, x: t, y: i, width: n, height: r} : void 0
    }, e.pathToRelative = kt, e._engine = {}, e.path2curve = It, e.matrix = function (e, t, i, n, r, s) {
        return new h(e, t, i, n, r, s)
    }, function (t) {
        function i(e) {
            return e[0] * e[0] + e[1] * e[1]
        }

        function n(e) {
            var t = L.sqrt(i(e));
            e[0] && (e[0] /= t), e[1] && (e[1] /= t)
        }

        t.add = function (e, t, i, n, r, s) {
            var a, o, l, c, u = [
                [],
                [],
                []
            ], d = [
                [this.a, this.c, this.e],
                [this.b, this.d, this.f],
                [0, 0, 1]
            ], p = [
                [e, i, r],
                [t, n, s],
                [0, 0, 1]
            ];
            for (e && e instanceof h && (p = [
                [e.a, e.c, e.e],
                [e.b, e.d, e.f],
                [0, 0, 1]
            ]), a = 0; 3 > a; a++)for (o = 0; 3 > o; o++) {
                for (c = 0, l = 0; 3 > l; l++)c += d[a][l] * p[l][o];
                u[a][o] = c
            }
            this.a = u[0][0], this.b = u[1][0], this.c = u[0][1], this.d = u[1][1], this.e = u[0][2], this.f = u[1][2]
        }, t.invert = function () {
            var e = this, t = e.a * e.d - e.b * e.c;
            return new h(e.d / t, -e.b / t, -e.c / t, e.a / t, (e.c * e.f - e.d * e.e) / t, (e.b * e.e - e.a * e.f) / t)
        }, t.clone = function () {
            return new h(this.a, this.b, this.c, this.d, this.e, this.f)
        }, t.translate = function (e, t) {
            this.add(1, 0, 0, 1, e, t)
        }, t.scale = function (e, t, i, n) {
            null == t && (t = e), (i || n) && this.add(1, 0, 0, 1, i, n), this.add(e, 0, 0, t, 0, 0), (i || n) && this.add(1, 0, 0, 1, -i, -n)
        }, t.rotate = function (t, i, n) {
            t = e.rad(t), i = i || 0, n = n || 0;
            var r = +L.cos(t).toFixed(9), s = +L.sin(t).toFixed(9);
            this.add(r, s, -s, r, i, n), this.add(1, 0, 0, 1, -i, -n)
        }, t.x = function (e, t) {
            return e * this.a + t * this.c + this.e
        }, t.y = function (e, t) {
            return e * this.b + t * this.d + this.f
        }, t.get = function (e) {
            return+this[M.fromCharCode(97 + e)].toFixed(4)
        }, t.toString = function () {
            return e.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
        }, t.toFilter = function () {
            return"progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
        }, t.offset = function () {
            return[this.e.toFixed(4), this.f.toFixed(4)]
        }, t.split = function () {
            var t = {};
            t.dx = this.e, t.dy = this.f;
            var r = [
                [this.a, this.c],
                [this.b, this.d]
            ];
            t.scalex = L.sqrt(i(r[0])), n(r[0]), t.shear = r[0][0] * r[1][0] + r[0][1] * r[1][1], r[1] = [r[1][0] - r[0][0] * t.shear, r[1][1] - r[0][1] * t.shear], t.scaley = L.sqrt(i(r[1])), n(r[1]), t.shear /= t.scaley;
            var s = -r[0][1], a = r[1][1];
            return 0 > a ? (t.rotate = e.deg(L.acos(a)), 0 > s && (t.rotate = 360 - t.rotate)) : t.rotate = e.deg(L.asin(s)), t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t
        }, t.toTransformString = function (e) {
            var t = e || this[P]();
            return t.isSimple ? (t.scalex = +t.scalex.toFixed(4), t.scaley = +t.scaley.toFixed(4), t.rotate = +t.rotate.toFixed(4), (t.dx || t.dy ? "t" + [t.dx, t.dy] : N) + (1 != t.scalex || 1 != t.scaley ? "s" + [t.scalex, t.scaley, 0, 0] : N) + (t.rotate ? "r" + [t.rotate, 0, 0] : N)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
        }
    }(h.prototype);
    var Ft = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
    b.safari = "Apple Computer, Inc." == navigator.vendor && (Ft && 4 > Ft[1] || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && Ft && 8 > Ft[1] ? function () {
        var e = this.rect(-99, -99, this.width + 99, this.height + 99).attr({stroke: "none"});
        setTimeout(function () {
            e.remove()
        })
    } : ut;
    for (var Bt = function () {
        this.returnValue = !1
    }, jt = function () {
        return this.originalEvent.preventDefault()
    }, zt = function () {
        this.cancelBubble = !0
    }, Wt = function () {
        return this.originalEvent.stopPropagation()
    }, Yt = function () {
        return C.doc.addEventListener ? function (e, t, i, n) {
            var r = D && H[t] ? H[t] : t, s = function (r) {
                var s = C.doc.documentElement.scrollTop || C.doc.body.scrollTop, a = C.doc.documentElement.scrollLeft || C.doc.body.scrollLeft, o = r.clientX + a, l = r.clientY + s;
                if (D && H[S](t))for (var c = 0, u = r.targetTouches && r.targetTouches.length; u > c; c++)if (r.targetTouches[c].target == e) {
                    var d = r;
                    r = r.targetTouches[c], r.originalEvent = d, r.preventDefault = jt, r.stopPropagation = Wt;
                    break
                }
                return i.call(n, r, o, l)
            };
            return e.addEventListener(r, s, !1), function () {
                return e.removeEventListener(r, s, !1), !0
            }
        } : C.doc.attachEvent ? function (e, t, i, n) {
            var r = function (e) {
                e = e || C.win.event;
                var t = C.doc.documentElement.scrollTop || C.doc.body.scrollTop, r = C.doc.documentElement.scrollLeft || C.doc.body.scrollLeft, s = e.clientX + r, a = e.clientY + t;
                return e.preventDefault = e.preventDefault || Bt, e.stopPropagation = e.stopPropagation || zt, i.call(n, e, s, a)
            };
            e.attachEvent("on" + t, r);
            var s = function () {
                return e.detachEvent("on" + t, r), !0
            };
            return s
        } : void 0
    }(), Ut = [], qt = function (e) {
        for (var t, i = e.clientX, n = e.clientY, r = C.doc.documentElement.scrollTop || C.doc.body.scrollTop, s = C.doc.documentElement.scrollLeft || C.doc.body.scrollLeft, a = Ut.length; a--;) {
            if (t = Ut[a], D) {
                for (var o, l = e.touches.length; l--;)if (o = e.touches[l], o.identifier == t.el._drag.id) {
                    i = o.clientX, n = o.clientY, (e.originalEvent ? e.originalEvent : e).preventDefault();
                    break
                }
            } else e.preventDefault();
            var c, u = t.el.node, d = u.nextSibling, h = u.parentNode, p = u.style.display;
            C.win.opera && h.removeChild(u), u.style.display = "none", c = t.el.paper.getElementByPoint(i, n), u.style.display = p, C.win.opera && (d ? h.insertBefore(u, d) : h.appendChild(u)), c && eve("raphael.drag.over." + t.el.id, t.el, c), i += s, n += r, eve("raphael.drag.move." + t.el.id, t.move_scope || t.el, i - t.el._drag.x, n - t.el._drag.y, i, n, e)
        }
    }, Kt = function (t) {
        e.unmousemove(qt).unmouseup(Kt);
        for (var i, n = Ut.length; n--;)i = Ut[n], i.el._drag = {}, eve("raphael.drag.end." + i.el.id, i.end_scope || i.start_scope || i.move_scope || i.el, t);
        Ut = []
    }, Vt = e.el = {}, Gt = I.length; Gt--;)(function (t) {
        e[t] = Vt[t] = function (i, n) {
            return e.is(i, "function") && (this.events = this.events || [], this.events.push({name: t, f: i, unbind: Yt(this.shape || this.node || C.doc, t, i, n || this)})), this
        }, e["un" + t] = Vt["un" + t] = function (e) {
            for (var i = this.events || [], n = i.length; n--;)if (i[n].name == t && i[n].f == e)return i[n].unbind(), i.splice(n, 1), !i.length && delete this.events, this;
            return this
        }
    })(I[Gt]);
    Vt.data = function (t, i) {
        var n = lt[this.id] = lt[this.id] || {};
        if (1 == arguments.length) {
            if (e.is(t, "object")) {
                for (var r in t)t[S](r) && this.data(r, t[r]);
                return this
            }
            return eve("raphael.data.get." + this.id, this, n[t], t), n[t]
        }
        return n[t] = i, eve("raphael.data.set." + this.id, this, i, t), this
    }, Vt.removeData = function (e) {
        return null == e ? lt[this.id] = {} : lt[this.id] && delete lt[this.id][e], this
    }, Vt.hover = function (e, t, i, n) {
        return this.mouseover(e, i).mouseout(t, n || i)
    }, Vt.unhover = function (e, t) {
        return this.unmouseover(e).unmouseout(t)
    };
    var Xt = [];
    Vt.drag = function (t, i, n, r, s, a) {
        function o(o) {
            (o.originalEvent || o).preventDefault();
            var l = C.doc.documentElement.scrollTop || C.doc.body.scrollTop, c = C.doc.documentElement.scrollLeft || C.doc.body.scrollLeft;
            this._drag.x = o.clientX + c, this._drag.y = o.clientY + l, this._drag.id = o.identifier, !Ut.length && e.mousemove(qt).mouseup(Kt), Ut.push({el: this, move_scope: r, start_scope: s, end_scope: a}), i && eve.on("raphael.drag.start." + this.id, i), t && eve.on("raphael.drag.move." + this.id, t), n && eve.on("raphael.drag.end." + this.id, n), eve("raphael.drag.start." + this.id, s || r || this, o.clientX + c, o.clientY + l, o)
        }

        return this._drag = {}, Xt.push({el: this, start: o}), this.mousedown(o), this
    }, Vt.onDragOver = function (e) {
        e ? eve.on("raphael.drag.over." + this.id, e) : eve.unbind("raphael.drag.over." + this.id)
    }, Vt.undrag = function () {
        for (var t = Xt.length; t--;)Xt[t].el == this && (this.unmousedown(Xt[t].start), Xt.splice(t, 1), eve.unbind("raphael.drag.*." + this.id));
        !Xt.length && e.unmousemove(qt).unmouseup(Kt)
    }, b.circle = function (t, i, n) {
        var r = e._engine.circle(this, t || 0, i || 0, n || 0);
        return this.__set__ && this.__set__.push(r), r
    }, b.rect = function (t, i, n, r, s) {
        var a = e._engine.rect(this, t || 0, i || 0, n || 0, r || 0, s || 0);
        return this.__set__ && this.__set__.push(a), a
    }, b.ellipse = function (t, i, n, r) {
        var s = e._engine.ellipse(this, t || 0, i || 0, n || 0, r || 0);
        return this.__set__ && this.__set__.push(s), s
    }, b.path = function (t) {
        t && !e.is(t, W) && !e.is(t[0], Y) && (t += N);
        var i = e._engine.path(e.format[k](e, arguments), this);
        return this.__set__ && this.__set__.push(i), i
    }, b.image = function (t, i, n, r, s) {
        var a = e._engine.image(this, t || "about:blank", i || 0, n || 0, r || 0, s || 0);
        return this.__set__ && this.__set__.push(a), a
    }, b.text = function (t, i, n) {
        var r = e._engine.text(this, t || 0, i || 0, M(n));
        return this.__set__ && this.__set__.push(r), r
    }, b.set = function (t) {
        !e.is(t, "array") && (t = Array.prototype.splice.call(arguments, 0, arguments.length));
        var i = new ci(t);
        return this.__set__ && this.__set__.push(i), i
    }, b.setStart = function (e) {
        this.__set__ = e || this.set()
    }, b.setFinish = function () {
        var e = this.__set__;
        return delete this.__set__, e
    }, b.setSize = function (t, i) {
        return e._engine.setSize.call(this, t, i)
    }, b.setViewBox = function (t, i, n, r, s) {
        return e._engine.setViewBox.call(this, t, i, n, r, s)
    }, b.top = b.bottom = null, b.raphael = e;
    var Qt = function (e) {
        var t = e.getBoundingClientRect(), i = e.ownerDocument, n = i.body, r = i.documentElement, s = r.clientTop || n.clientTop || 0, a = r.clientLeft || n.clientLeft || 0, o = t.top + (C.win.pageYOffset || r.scrollTop || n.scrollTop) - s, l = t.left + (C.win.pageXOffset || r.scrollLeft || n.scrollLeft) - a;
        return{y: o, x: l}
    };
    b.getElementByPoint = function (e, t) {
        var i = this, n = i.canvas, r = C.doc.elementFromPoint(e, t);
        if (C.win.opera && "svg" == r.tagName) {
            var s = Qt(n), a = n.createSVGRect();
            a.x = e - s.x, a.y = t - s.y, a.width = a.height = 1;
            var o = n.getIntersectionList(a, null);
            o.length && (r = o[o.length - 1])
        }
        if (!r)return null;
        for (; r.parentNode && r != n.parentNode && !r.raphael;)r = r.parentNode;
        return r == i.canvas.parentNode && (r = n), r = r && r.raphael ? i.getById(r.raphaelid) : null
    }, b.getById = function (e) {
        for (var t = this.bottom; t;) {
            if (t.id == e)return t;
            t = t.next
        }
        return null
    }, b.forEach = function (e, t) {
        for (var i = this.bottom; i;) {
            if (e.call(t, i) === !1)return this;
            i = i.next
        }
        return this
    }, b.getElementsByPoint = function (e, t) {
        var i = this.set();
        return this.forEach(function (n) {
            n.isPointInside(e, t) && i.push(n)
        }), i
    }, Vt.isPointInside = function (t, i) {
        var n = this.realPath = this.realPath || ft[this.type](this);
        return e.isPointInsidePath(n, t, i)
    }, Vt.getBBox = function (e) {
        if (this.removed)return{};
        var t = this._;
        return e ? ((t.dirty || !t.bboxwt) && (this.realPath = ft[this.type](this), t.bboxwt = At(this.realPath), t.bboxwt.toString = p, t.dirty = 0), t.bboxwt) : ((t.dirty || t.dirtyT || !t.bbox) && ((t.dirty || !this.realPath) && (t.bboxwt = 0, this.realPath = ft[this.type](this)), t.bbox = At(gt(this.realPath, this.matrix)), t.bbox.toString = p, t.dirty = t.dirtyT = 0), t.bbox)
    }, Vt.clone = function () {
        if (this.removed)return null;
        var e = this.paper[this.type]().attr(this.attr());
        return this.__set__ && this.__set__.push(e), e
    }, Vt.glow = function (e) {
        if ("text" == this.type)return null;
        e = e || {};
        var t = {width: (e.width || 10) + (+this.attr("stroke-width") || 1), fill: e.fill || !1, opacity: e.opacity || .5, offsetx: e.offsetx || 0, offsety: e.offsety || 0, color: e.color || "#000"}, i = t.width / 2, n = this.paper, r = n.set(), s = this.realPath || ft[this.type](this);
        s = this.matrix ? gt(s, this.matrix) : s;
        for (var a = 1; i + 1 > a; a++)r.push(n.path(s).attr({stroke: t.color, fill: t.fill ? t.color : "none", "stroke-linejoin": "round", "stroke-linecap": "round", "stroke-width": +(t.width / i * a).toFixed(3), opacity: +(t.opacity / i).toFixed(3)}));
        return r.insertBefore(this).translate(t.offsetx, t.offsety)
    };
    var Zt = function (t, i, n, r, s, a, c, u, d) {
        return null == d ? o(t, i, n, r, s, a, c, u) : e.findDotsAtSegment(t, i, n, r, s, a, c, u, l(t, i, n, r, s, a, c, u, d))
    }, ei = function (t, i) {
        return function (n, r, s) {
            n = It(n);
            for (var a, o, l, c, u, d = "", h = {}, p = 0, f = 0, g = n.length; g > f; f++) {
                if (l = n[f], "M" == l[0])a = +l[1], o = +l[2]; else {
                    if (c = Zt(a, o, l[1], l[2], l[3], l[4], l[5], l[6]), p + c > r) {
                        if (i && !h.start) {
                            if (u = Zt(a, o, l[1], l[2], l[3], l[4], l[5], l[6], r - p), d += ["C" + u.start.x, u.start.y, u.m.x, u.m.y, u.x, u.y], s)return d;
                            h.start = d, d = ["M" + u.x, u.y + "C" + u.n.x, u.n.y, u.end.x, u.end.y, l[5], l[6]].join(), p += c, a = +l[5], o = +l[6];
                            continue
                        }
                        if (!t && !i)return u = Zt(a, o, l[1], l[2], l[3], l[4], l[5], l[6], r - p), {x: u.x, y: u.y, alpha: u.alpha}
                    }
                    p += c, a = +l[5], o = +l[6]
                }
                d += l.shift() + l
            }
            return h.end = d, u = t ? p : i ? h : e.findDotsAtSegment(a, o, l[0], l[1], l[2], l[3], l[4], l[5], 1), u.alpha && (u = {x: u.x, y: u.y, alpha: u.alpha}), u
        }
    }, ti = ei(1), ii = ei(), ni = ei(0, 1);
    e.getTotalLength = ti, e.getPointAtLength = ii, e.getSubpath = function (e, t, i) {
        if (1e-6 > this.getTotalLength(e) - i)return ni(e, t).end;
        var n = ni(e, i, 1);
        return t ? ni(n, t).end : n
    }, Vt.getTotalLength = function () {
        return"path" == this.type ? this.node.getTotalLength ? this.node.getTotalLength() : ti(this.attrs.path) : void 0
    }, Vt.getPointAtLength = function (e) {
        return"path" == this.type ? ii(this.attrs.path, e) : void 0
    }, Vt.getSubpath = function (t, i) {
        return"path" == this.type ? e.getSubpath(this.attrs.path, t, i) : void 0
    };
    var ri = e.easing_formulas = {linear: function (e) {
        return e
    }, "<": function (e) {
        return B(e, 1.7)
    }, ">": function (e) {
        return B(e, .48)
    }, "<>": function (e) {
        var t = .48 - e / 1.04, i = L.sqrt(.1734 + t * t), n = i - t, r = B(F(n), 1 / 3) * (0 > n ? -1 : 1), s = -i - t, a = B(F(s), 1 / 3) * (0 > s ? -1 : 1), o = r + a + .5;
        return 3 * (1 - o) * o * o + o * o * o
    }, backIn: function (e) {
        var t = 1.70158;
        return e * e * ((t + 1) * e - t)
    }, backOut: function (e) {
        e -= 1;
        var t = 1.70158;
        return e * e * ((t + 1) * e + t) + 1
    }, elastic: function (e) {
        return e == !!e ? e : B(2, -10 * e) * L.sin((e - .075) * 2 * j / .3) + 1
    }, bounce: function (e) {
        var t, i = 7.5625, n = 2.75;
        return 1 / n > e ? t = i * e * e : 2 / n > e ? (e -= 1.5 / n, t = i * e * e + .75) : 2.5 / n > e ? (e -= 2.25 / n, t = i * e * e + .9375) : (e -= 2.625 / n, t = i * e * e + .984375), t
    }};
    ri.easeIn = ri["ease-in"] = ri["<"], ri.easeOut = ri["ease-out"] = ri[">"], ri.easeInOut = ri["ease-in-out"] = ri["<>"], ri["back-in"] = ri.backIn, ri["back-out"] = ri.backOut;
    var si = [], ai = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
        setTimeout(e, 16)
    }, oi = function () {
        for (var t = +new Date, i = 0; si.length > i; i++) {
            var n = si[i];
            if (!n.el.removed && !n.paused) {
                var r, s, a = t - n.start, o = n.ms, l = n.easing, c = n.from, u = n.diff, d = n.to, h = (n.t, n.el), p = {}, f = {};
                if (n.initstatus ? (a = (n.initstatus * n.anim.top - n.prev) / (n.percent - n.prev) * o, n.status = n.initstatus, delete n.initstatus, n.stop && si.splice(i--, 1)) : n.status = (n.prev + (n.percent - n.prev) * (a / o)) / n.anim.top, !(0 > a))if (o > a) {
                    var g = l(a / o);
                    for (var y in c)if (c[S](y)) {
                        switch (tt[y]) {
                            case z:
                                r = +c[y] + g * o * u[y];
                                break;
                            case"colour":
                                r = "rgb(" + [li(G(c[y].r + g * o * u[y].r)), li(G(c[y].g + g * o * u[y].g)), li(G(c[y].b + g * o * u[y].b))].join(",") + ")";
                                break;
                            case"path":
                                r = [];
                                for (var v = 0, b = c[y].length; b > v; v++) {
                                    r[v] = [c[y][v][0]];
                                    for (var x = 1, w = c[y][v].length; w > x; x++)r[v][x] = +c[y][v][x] + g * o * u[y][v][x];
                                    r[v] = r[v].join(E)
                                }
                                r = r.join(E);
                                break;
                            case"transform":
                                if (u[y].real)for (r = [], v = 0, b = c[y].length; b > v; v++)for (r[v] = [c[y][v][0]], x = 1, w = c[y][v].length; w > x; x++)r[v][x] = c[y][v][x] + g * o * u[y][v][x]; else {
                                    var _ = function (e) {
                                        return+c[y][e] + g * o * u[y][e]
                                    };
                                    r = [
                                        ["m", _(0), _(1), _(2), _(3), _(4), _(5)]
                                    ]
                                }
                                break;
                            case"csv":
                                if ("clip-rect" == y)for (r = [], v = 4; v--;)r[v] = +c[y][v] + g * o * u[y][v];
                                break;
                            default:
                                var C = [][T](c[y]);
                                for (r = [], v = h.paper.customAttributes[y].length; v--;)r[v] = +C[v] + g * o * u[y][v]
                        }
                        p[y] = r
                    }
                    h.attr(p), function (e, t, i) {
                        setTimeout(function () {
                            eve("raphael.anim.frame." + e, t, i)
                        })
                    }(h.id, h, n.anim)
                } else {
                    if (function (t, i, n) {
                        setTimeout(function () {
                            eve("raphael.anim.frame." + i.id, i, n), eve("raphael.anim.finish." + i.id, i, n), e.is(t, "function") && t.call(i)
                        })
                    }(n.callback, h, n.anim), h.attr(d), si.splice(i--, 1), n.repeat > 1 && !n.next) {
                        for (s in d)d[S](s) && (f[s] = n.totalOrigin[s]);
                        n.el.attr(f), m(n.anim, n.el, n.anim.percents[0], null, n.totalOrigin, n.repeat - 1)
                    }
                    n.next && !n.stop && m(n.anim, n.el, n.next, null, n.totalOrigin, n.repeat)
                }
            }
        }
        e.svg && h && h.paper && h.paper.safari(), si.length && ai(oi)
    }, li = function (e) {
        return e > 255 ? 255 : 0 > e ? 0 : e
    };
    Vt.animateWith = function (t, i, n, r, s, a) {
        var o = this;
        if (o.removed)return a && a.call(o), o;
        var l = n instanceof g ? n : e.animation(n, r, s, a);
        m(l, o, l.percents[0], null, o.attr());
        for (var c = 0, u = si.length; u > c; c++)if (si[c].anim == i && si[c].el == t) {
            si[u - 1].start = si[c].start;
            break
        }
        return o
    }, Vt.onAnimation = function (e) {
        return e ? eve.on("raphael.anim.frame." + this.id, e) : eve.unbind("raphael.anim.frame." + this.id), this
    }, g.prototype.delay = function (e) {
        var t = new g(this.anim, this.ms);
        return t.times = this.times, t.del = +e || 0, t
    }, g.prototype.repeat = function (e) {
        var t = new g(this.anim, this.ms);
        return t.del = this.del, t.times = L.floor(O(e, 0)) || 1, t
    }, e.animation = function (t, i, n, r) {
        if (t instanceof g)return t;
        (e.is(n, "function") || !n) && (r = r || n || null, n = null), t = Object(t), i = +i || 0;
        var s, a, o = {};
        for (a in t)t[S](a) && X(a) != a && X(a) + "%" != a && (s = !0, o[a] = t[a]);
        return s ? (n && (o.easing = n), r && (o.callback = r), new g({100: o}, i)) : new g(t, i)
    }, Vt.animate = function (t, i, n, r) {
        var s = this;
        if (s.removed)return r && r.call(s), s;
        var a = t instanceof g ? t : e.animation(t, i, n, r);
        return m(a, s, a.percents[0], null, s.attr()), s
    }, Vt.setTime = function (e, t) {
        return e && null != t && this.status(e, J(t, e.ms) / e.ms), this
    }, Vt.status = function (e, t) {
        var i, n, r = [], s = 0;
        if (null != t)return m(e, this, -1, J(t, 1)), this;
        for (i = si.length; i > s; s++)if (n = si[s], n.el.id == this.id && (!e || n.anim == e)) {
            if (e)return n.status;
            r.push({anim: n.anim, status: n.status})
        }
        return e ? 0 : r
    }, Vt.pause = function (e) {
        for (var t = 0; si.length > t; t++)si[t].el.id != this.id || e && si[t].anim != e || eve("raphael.anim.pause." + this.id, this, si[t].anim) !== !1 && (si[t].paused = !0);
        return this
    }, Vt.resume = function (e) {
        for (var t = 0; si.length > t; t++)if (si[t].el.id == this.id && (!e || si[t].anim == e)) {
            var i = si[t];
            eve("raphael.anim.resume." + this.id, this, i.anim) !== !1 && (delete i.paused, this.status(i.anim, i.status))
        }
        return this
    }, Vt.stop = function (e) {
        for (var t = 0; si.length > t; t++)si[t].el.id != this.id || e && si[t].anim != e || eve("raphael.anim.stop." + this.id, this, si[t].anim) !== !1 && si.splice(t--, 1);
        return this
    }, eve.on("raphael.remove", y), eve.on("raphael.clear", y), Vt.toString = function () {
        return"Rapha\u00ebl\u2019s object"
    };
    var ci = function (e) {
        if (this.items = [], this.length = 0, this.type = "set", e)for (var t = 0, i = e.length; i > t; t++)!e[t] || e[t].constructor != Vt.constructor && e[t].constructor != ci || (this[this.items.length] = this.items[this.items.length] = e[t], this.length++)
    }, ui = ci.prototype;
    ui.push = function () {
        for (var e, t, i = 0, n = arguments.length; n > i; i++)e = arguments[i], !e || e.constructor != Vt.constructor && e.constructor != ci || (t = this.items.length, this[t] = this.items[t] = e, this.length++);
        return this
    }, ui.pop = function () {
        return this.length && delete this[this.length--], this.items.pop()
    }, ui.forEach = function (e, t) {
        for (var i = 0, n = this.items.length; n > i; i++)if (e.call(t, this.items[i], i) === !1)return this;
        return this
    };
    for (var di in Vt)Vt[S](di) && (ui[di] = function (e) {
        return function () {
            var t = arguments;
            return this.forEach(function (i) {
                i[e][k](i, t)
            })
        }
    }(di));
    ui.attr = function (t, i) {
        if (t && e.is(t, Y) && e.is(t[0], "object"))for (var n = 0, r = t.length; r > n; n++)this.items[n].attr(t[n]); else for (var s = 0, a = this.items.length; a > s; s++)this.items[s].attr(t, i);
        return this
    }, ui.clear = function () {
        for (; this.length;)this.pop()
    }, ui.splice = function (e, t) {
        e = 0 > e ? O(this.length + e, 0) : e, t = O(0, J(this.length - e, t));
        var i, n = [], r = [], s = [];
        for (i = 2; arguments.length > i; i++)s.push(arguments[i]);
        for (i = 0; t > i; i++)r.push(this[e + i]);
        for (; this.length - e > i; i++)n.push(this[e + i]);
        var a = s.length;
        for (i = 0; a + n.length > i; i++)this.items[e + i] = this[e + i] = a > i ? s[i] : n[i - a];
        for (i = this.items.length = this.length -= t - a; this[i];)delete this[i++];
        return new ci(r)
    }, ui.exclude = function (e) {
        for (var t = 0, i = this.length; i > t; t++)if (this[t] == e)return this.splice(t, 1), !0
    }, ui.animate = function (t, i, n, r) {
        (e.is(n, "function") || !n) && (r = n || null);
        var s, a, o = this.items.length, l = o, c = this;
        if (!o)return this;
        r && (a = function () {
            !--o && r.call(c)
        }), n = e.is(n, W) ? n : a;
        var u = e.animation(t, i, n, a);
        for (s = this.items[--l].animate(u); l--;)this.items[l] && !this.items[l].removed && this.items[l].animateWith(s, u, u);
        return this
    }, ui.insertAfter = function (e) {
        for (var t = this.items.length; t--;)this.items[t].insertAfter(e);
        return this
    }, ui.getBBox = function () {
        for (var e = [], t = [], i = [], n = [], r = this.items.length; r--;)if (!this.items[r].removed) {
            var s = this.items[r].getBBox();
            e.push(s.x), t.push(s.y), i.push(s.x + s.width), n.push(s.y + s.height)
        }
        return e = J[k](0, e), t = J[k](0, t), i = O[k](0, i), n = O[k](0, n), {x: e, y: t, x2: i, y2: n, width: i - e, height: n - t}
    }, ui.clone = function (e) {
        e = new ci;
        for (var t = 0, i = this.items.length; i > t; t++)e.push(this.items[t].clone());
        return e
    }, ui.toString = function () {
        return"Rapha\u00ebl\u2018s set"
    }, e.registerFont = function (e) {
        if (!e.face)return e;
        this.fonts = this.fonts || {};
        var t = {w: e.w, face: {}, glyphs: {}}, i = e.face["font-family"];
        for (var n in e.face)e.face[S](n) && (t.face[n] = e.face[n]);
        if (this.fonts[i] ? this.fonts[i].push(t) : this.fonts[i] = [t], !e.svg) {
            t.face["units-per-em"] = Q(e.face["units-per-em"], 10);
            for (var r in e.glyphs)if (e.glyphs[S](r)) {
                var s = e.glyphs[r];
                if (t.glyphs[r] = {w: s.w, k: {}, d: s.d && "M" + s.d.replace(/[mlcxtrv]/g, function (e) {
                    return{l: "L", c: "C", x: "z", t: "m", r: "l", v: "c"}[e] || "M"
                }) + "z"}, s.k)for (var a in s.k)s[S](a) && (t.glyphs[r].k[a] = s.k[a])
            }
        }
        return e
    }, b.getFont = function (t, i, n, r) {
        if (r = r || "normal", n = n || "normal", i = +i || {normal: 400, bold: 700, lighter: 300, bolder: 800}[i] || 400, e.fonts) {
            var s = e.fonts[t];
            if (!s) {
                var a = RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, N) + "(\\s|$)", "i");
                for (var o in e.fonts)if (e.fonts[S](o) && a.test(o)) {
                    s = e.fonts[o];
                    break
                }
            }
            var l;
            if (s)for (var c = 0, u = s.length; u > c && (l = s[c], l.face["font-weight"] != i || l.face["font-style"] != n && l.face["font-style"] || l.face["font-stretch"] != r); c++);
            return l
        }
    }, b.print = function (t, i, n, r, s, a, o) {
        a = a || "middle", o = O(J(o || 0, 1), -1);
        var l, c = M(n)[P](N), u = 0, d = 0, h = N;
        if (e.is(r, n) && (r = this.getFont(r)), r) {
            l = (s || 16) / r.face["units-per-em"];
            for (var p = r.face.bbox[P](x), f = +p[0], g = p[3] - p[1], m = 0, y = +p[1] + ("baseline" == a ? g + +r.face.descent : g / 2), v = 0, b = c.length; b > v; v++) {
                if ("\n" == c[v])u = 0, _ = 0, d = 0, m += g; else {
                    var w = d && r.glyphs[c[v - 1]] || {}, _ = r.glyphs[c[v]];
                    u += d ? (w.w || r.w) + (w.k && w.k[c[v]] || 0) + r.w * o : 0, d = 1
                }
                _ && _.d && (h += e.transformPath(_.d, ["t", u * l, m * l, "s", l, l, f, y, "t", (t - f) / l, (i - y) / l]))
            }
        }
        return this.path(h).attr({fill: "#000", stroke: "none"})
    }, b.add = function (t) {
        if (e.is(t, "array"))for (var i, n = this.set(), r = 0, s = t.length; s > r; r++)i = t[r] || {}, w[S](i.type) && n.push(this[i.type]().attr(i));
        return n
    }, e.format = function (t, i) {
        var n = e.is(i, Y) ? [0][T](i) : arguments;
        return t && e.is(t, W) && n.length - 1 && (t = t.replace(_, function (e, t) {
            return null == n[++t] ? N : n[t]
        })), t || N
    }, e.fullfill = function () {
        var e = /\{([^\}]+)\}/g, t = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, i = function (e, i, n) {
            var r = n;
            return i.replace(t, function (e, t, i, n, s) {
                t = t || n, r && (t in r && (r = r[t]), "function" == typeof r && s && (r = r()))
            }), r = (null == r || r == n ? e : r) + ""
        };
        return function (t, n) {
            return(t + "").replace(e, function (e, t) {
                return i(e, t, n)
            })
        }
    }(), e.ninja = function () {
        return A.was ? C.win.Raphael = A.is : delete Raphael, e
    }, e.st = ui, function (t, i, n) {
        function r() {
            /in/.test(t.readyState) ? setTimeout(r, 9) : e.eve("raphael.DOMload")
        }

        null == t.readyState && t.addEventListener && (t.addEventListener(i, n = function () {
            t.removeEventListener(i, n, !1), t.readyState = "complete"
        }, !1), t.readyState = "loading"), r()
    }(document, "DOMContentLoaded"), A.was ? C.win.Raphael = e : Raphael = e, eve.on("raphael.DOMload", function () {
        v = !0
    })
}(), window.Raphael && window.Raphael.svg && function (e) {
    var t = "hasOwnProperty", i = String, n = parseFloat, r = parseInt, s = Math, a = s.max, o = s.abs, l = s.pow, c = /[, ]+/, u = e.eve, d = "", h = " ", p = "http://www.w3.org/1999/xlink", f = {block: "M5,0 0,2.5 5,5z", classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z", diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z", open: "M6,1 1,3.5 6,6", oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"}, g = {};
    e.toString = function () {
        return"Your browser supports SVG.\nYou are running Rapha\u00ebl " + this.version
    };
    var m = function (n, r) {
        if (r) {
            "string" == typeof n && (n = m(n));
            for (var s in r)r[t](s) && ("xlink:" == s.substring(0, 6) ? n.setAttributeNS(p, s.substring(6), i(r[s])) : n.setAttribute(s, i(r[s])))
        } else n = e._g.doc.createElementNS("http://www.w3.org/2000/svg", n), n.style && (n.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
        return n
    }, y = function (t, r) {
        var c = "linear", u = t.id + r, h = .5, p = .5, f = t.node, g = t.paper, y = f.style, v = e._g.doc.getElementById(u);
        if (!v) {
            if (r = i(r).replace(e._radial_gradient, function (e, t, i) {
                if (c = "radial", t && i) {
                    h = n(t), p = n(i);
                    var r = 2 * (p > .5) - 1;
                    l(h - .5, 2) + l(p - .5, 2) > .25 && (p = s.sqrt(.25 - l(h - .5, 2)) * r + .5) && .5 != p && (p = p.toFixed(5) - 1e-5 * r)
                }
                return d
            }), r = r.split(/\s*\-\s*/), "linear" == c) {
                var b = r.shift();
                if (b = -n(b), isNaN(b))return null;
                var x = [0, 0, s.cos(e.rad(b)), s.sin(e.rad(b))], w = 1 / (a(o(x[2]), o(x[3])) || 1);
                x[2] *= w, x[3] *= w, 0 > x[2] && (x[0] = -x[2], x[2] = 0), 0 > x[3] && (x[1] = -x[3], x[3] = 0)
            }
            var _ = e._parseDots(r);
            if (!_)return null;
            if (u = u.replace(/[\(\)\s,\xb0#]/g, "_"), t.gradient && u != t.gradient.id && (g.defs.removeChild(t.gradient), delete t.gradient), !t.gradient) {
                v = m(c + "Gradient", {id: u}), t.gradient = v, m(v, "radial" == c ? {fx: h, fy: p} : {x1: x[0], y1: x[1], x2: x[2], y2: x[3], gradientTransform: t.matrix.invert()}), g.defs.appendChild(v);
                for (var S = 0, C = _.length; C > S; S++)v.appendChild(m("stop", {offset: _[S].offset ? _[S].offset : S ? "100%" : "0%", "stop-color": _[S].color || "#fff"}))
            }
        }
        return m(f, {fill: "url(#" + u + ")", opacity: 1, "fill-opacity": 1}), y.fill = d, y.opacity = 1, y.fillOpacity = 1, 1
    }, v = function (e) {
        var t = e.getBBox(1);
        m(e.pattern, {patternTransform: e.matrix.invert() + " translate(" + t.x + "," + t.y + ")"})
    }, b = function (n, r, s) {
        if ("path" == n.type) {
            for (var a, o, l, c, u, h = i(r).toLowerCase().split("-"), p = n.paper, y = s ? "end" : "start", v = n.node, b = n.attrs, x = b["stroke-width"], w = h.length, _ = "classic", S = 3, C = 3, A = 5; w--;)switch (h[w]) {
                case"block":
                case"classic":
                case"oval":
                case"diamond":
                case"open":
                case"none":
                    _ = h[w];
                    break;
                case"wide":
                    C = 5;
                    break;
                case"narrow":
                    C = 2;
                    break;
                case"long":
                    S = 5;
                    break;
                case"short":
                    S = 2
            }
            if ("open" == _ ? (S += 2, C += 2, A += 2, l = 1, c = s ? 4 : 1, u = {fill: "none", stroke: b.stroke}) : (c = l = S / 2, u = {fill: b.stroke, stroke: "none"}), n._.arrows ? s ? (n._.arrows.endPath && g[n._.arrows.endPath]--, n._.arrows.endMarker && g[n._.arrows.endMarker]--) : (n._.arrows.startPath && g[n._.arrows.startPath]--, n._.arrows.startMarker && g[n._.arrows.startMarker]--) : n._.arrows = {}, "none" != _) {
                var $ = "raphael-marker-" + _, k = "raphael-marker-" + y + _ + S + C;
                e._g.doc.getElementById($) ? g[$]++ : (p.defs.appendChild(m(m("path"), {"stroke-linecap": "round", d: f[_], id: $})), g[$] = 1);
                var T, D = e._g.doc.getElementById(k);
                D ? (g[k]++, T = D.getElementsByTagName("use")[0]) : (D = m(m("marker"), {id: k, markerHeight: C, markerWidth: S, orient: "auto", refX: c, refY: C / 2}), T = m(m("use"), {"xlink:href": "#" + $, transform: (s ? "rotate(180 " + S / 2 + " " + C / 2 + ") " : d) + "scale(" + S / A + "," + C / A + ")", "stroke-width": (1 / ((S / A + C / A) / 2)).toFixed(4)}), D.appendChild(T), p.defs.appendChild(D), g[k] = 1), m(T, u);
                var N = l * ("diamond" != _ && "oval" != _);
                s ? (a = n._.arrows.startdx * x || 0, o = e.getTotalLength(b.path) - N * x) : (a = N * x, o = e.getTotalLength(b.path) - (n._.arrows.enddx * x || 0)), u = {}, u["marker-" + y] = "url(#" + k + ")", (o || a) && (u.d = Raphael.getSubpath(b.path, a, o)), m(v, u), n._.arrows[y + "Path"] = $, n._.arrows[y + "Marker"] = k, n._.arrows[y + "dx"] = N, n._.arrows[y + "Type"] = _, n._.arrows[y + "String"] = r
            } else s ? (a = n._.arrows.startdx * x || 0, o = e.getTotalLength(b.path) - a) : (a = 0, o = e.getTotalLength(b.path) - (n._.arrows.enddx * x || 0)), n._.arrows[y + "Path"] && m(v, {d: Raphael.getSubpath(b.path, a, o)}), delete n._.arrows[y + "Path"], delete n._.arrows[y + "Marker"], delete n._.arrows[y + "dx"], delete n._.arrows[y + "Type"], delete n._.arrows[y + "String"];
            for (u in g)if (g[t](u) && !g[u]) {
                var E = e._g.doc.getElementById(u);
                E && E.parentNode.removeChild(E)
            }
        }
    }, x = {"": [0], none: [0], "-": [3, 1], ".": [1, 1], "-.": [3, 1, 1, 1], "-..": [3, 1, 1, 1, 1, 1], ". ": [1, 3], "- ": [4, 3], "--": [8, 3], "- .": [4, 3, 1, 3], "--.": [8, 3, 1, 3], "--..": [8, 3, 1, 3, 1, 3]}, w = function (e, t, n) {
        if (t = x[i(t).toLowerCase()]) {
            for (var r = e.attrs["stroke-width"] || "1", s = {round: r, square: r, butt: 0}[e.attrs["stroke-linecap"] || n["stroke-linecap"]] || 0, a = [], o = t.length; o--;)a[o] = t[o] * r + (o % 2 ? 1 : -1) * s;
            m(e.node, {"stroke-dasharray": a.join(",")})
        }
    }, _ = function (n, s) {
        var l = n.node, u = n.attrs, h = l.style.visibility;
        l.style.visibility = "hidden";
        for (var f in s)if (s[t](f)) {
            if (!e._availableAttrs[t](f))continue;
            var g = s[f];
            switch (u[f] = g, f) {
                case"blur":
                    n.blur(g);
                    break;
                case"href":
                case"title":
                case"target":
                    var x = l.parentNode;
                    if ("a" != x.tagName.toLowerCase()) {
                        var _ = m("a");
                        x.insertBefore(_, l), _.appendChild(l), x = _
                    }
                    "target" == f ? x.setAttributeNS(p, "show", "blank" == g ? "new" : g) : x.setAttributeNS(p, f, g);
                    break;
                case"cursor":
                    l.style.cursor = g;
                    break;
                case"transform":
                    n.transform(g);
                    break;
                case"arrow-start":
                    b(n, g);
                    break;
                case"arrow-end":
                    b(n, g, 1);
                    break;
                case"clip-rect":
                    var S = i(g).split(c);
                    if (4 == S.length) {
                        n.clip && n.clip.parentNode.parentNode.removeChild(n.clip.parentNode);
                        var A = m("clipPath"), $ = m("rect");
                        A.id = e.createUUID(), m($, {x: S[0], y: S[1], width: S[2], height: S[3]}), A.appendChild($), n.paper.defs.appendChild(A), m(l, {"clip-path": "url(#" + A.id + ")"}), n.clip = $
                    }
                    if (!g) {
                        var k = l.getAttribute("clip-path");
                        if (k) {
                            var T = e._g.doc.getElementById(k.replace(/(^url\(#|\)$)/g, d));
                            T && T.parentNode.removeChild(T), m(l, {"clip-path": d}), delete n.clip
                        }
                    }
                    break;
                case"path":
                    "path" == n.type && (m(l, {d: g ? u.path = e._pathToAbsolute(g) : "M0,0"}), n._.dirty = 1, n._.arrows && ("startString"in n._.arrows && b(n, n._.arrows.startString), "endString"in n._.arrows && b(n, n._.arrows.endString, 1)));
                    break;
                case"width":
                    if (l.setAttribute(f, g), n._.dirty = 1, !u.fx)break;
                    f = "x", g = u.x;
                case"x":
                    u.fx && (g = -u.x - (u.width || 0));
                case"rx":
                    if ("rx" == f && "rect" == n.type)break;
                case"cx":
                    l.setAttribute(f, g), n.pattern && v(n), n._.dirty = 1;
                    break;
                case"height":
                    if (l.setAttribute(f, g), n._.dirty = 1, !u.fy)break;
                    f = "y", g = u.y;
                case"y":
                    u.fy && (g = -u.y - (u.height || 0));
                case"ry":
                    if ("ry" == f && "rect" == n.type)break;
                case"cy":
                    l.setAttribute(f, g), n.pattern && v(n), n._.dirty = 1;
                    break;
                case"r":
                    "rect" == n.type ? m(l, {rx: g, ry: g}) : l.setAttribute(f, g), n._.dirty = 1;
                    break;
                case"src":
                    "image" == n.type && l.setAttributeNS(p, "href", g);
                    break;
                case"stroke-width":
                    (1 != n._.sx || 1 != n._.sy) && (g /= a(o(n._.sx), o(n._.sy)) || 1), n.paper._vbSize && (g *= n.paper._vbSize), l.setAttribute(f, g), u["stroke-dasharray"] && w(n, u["stroke-dasharray"], s), n._.arrows && ("startString"in n._.arrows && b(n, n._.arrows.startString), "endString"in n._.arrows && b(n, n._.arrows.endString, 1));
                    break;
                case"stroke-dasharray":
                    w(n, g, s);
                    break;
                case"fill":
                    var D = i(g).match(e._ISURL);
                    if (D) {
                        A = m("pattern");
                        var N = m("image");
                        A.id = e.createUUID(), m(A, {x: 0, y: 0, patternUnits: "userSpaceOnUse", height: 1, width: 1}), m(N, {x: 0, y: 0, "xlink:href": D[1]}), A.appendChild(N), function (t) {
                            e._preload(D[1], function () {
                                var e = this.offsetWidth, i = this.offsetHeight;
                                m(t, {width: e, height: i}), m(N, {width: e, height: i}), n.paper.safari()
                            })
                        }(A), n.paper.defs.appendChild(A), m(l, {fill: "url(#" + A.id + ")"}), n.pattern = A, n.pattern && v(n);
                        break
                    }
                    var E = e.getRGB(g);
                    if (E.error) {
                        if (("circle" == n.type || "ellipse" == n.type || "r" != i(g).charAt()) && y(n, g)) {
                            if ("opacity"in u || "fill-opacity"in u) {
                                var M = e._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, d));
                                if (M) {
                                    var P = M.getElementsByTagName("stop");
                                    m(P[P.length - 1], {"stop-opacity": ("opacity"in u ? u.opacity : 1) * ("fill-opacity"in u ? u["fill-opacity"] : 1)})
                                }
                            }
                            u.gradient = g, u.fill = "none";
                            break
                        }
                    } else delete s.gradient, delete u.gradient, !e.is(u.opacity, "undefined") && e.is(s.opacity, "undefined") && m(l, {opacity: u.opacity}), !e.is(u["fill-opacity"], "undefined") && e.is(s["fill-opacity"], "undefined") && m(l, {"fill-opacity": u["fill-opacity"]});
                    E[t]("opacity") && m(l, {"fill-opacity": E.opacity > 1 ? E.opacity / 100 : E.opacity});
                case"stroke":
                    E = e.getRGB(g), l.setAttribute(f, E.hex), "stroke" == f && E[t]("opacity") && m(l, {"stroke-opacity": E.opacity > 1 ? E.opacity / 100 : E.opacity}), "stroke" == f && n._.arrows && ("startString"in n._.arrows && b(n, n._.arrows.startString), "endString"in n._.arrows && b(n, n._.arrows.endString, 1));
                    break;
                case"gradient":
                    ("circle" == n.type || "ellipse" == n.type || "r" != i(g).charAt()) && y(n, g);
                    break;
                case"opacity":
                    u.gradient && !u[t]("stroke-opacity") && m(l, {"stroke-opacity": g > 1 ? g / 100 : g});
                case"fill-opacity":
                    if (u.gradient) {
                        M = e._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, d)), M && (P = M.getElementsByTagName("stop"), m(P[P.length - 1], {"stop-opacity": g}));
                        break
                    }
                default:
                    "font-size" == f && (g = r(g, 10) + "px");
                    var I = f.replace(/(\-.)/g, function (e) {
                        return e.substring(1).toUpperCase()
                    });
                    l.style[I] = g, n._.dirty = 1, l.setAttribute(f, g)
            }
        }
        C(n, s), l.style.visibility = h
    }, S = 1.2, C = function (n, s) {
        if ("text" == n.type && (s[t]("text") || s[t]("font") || s[t]("font-size") || s[t]("x") || s[t]("y"))) {
            var a = n.attrs, o = n.node, l = o.firstChild ? r(e._g.doc.defaultView.getComputedStyle(o.firstChild, d).getPropertyValue("font-size"), 10) : 10;
            if (s[t]("text")) {
                for (a.text = s.text; o.firstChild;)o.removeChild(o.firstChild);
                for (var c, u = i(s.text).split("\n"), h = [], p = 0, f = u.length; f > p; p++)c = m("tspan"), p && m(c, {dy: l * S, x: a.x}), c.appendChild(e._g.doc.createTextNode(u[p])), o.appendChild(c), h[p] = c
            } else for (h = o.getElementsByTagName("tspan"), p = 0, f = h.length; f > p; p++)p ? m(h[p], {dy: l * S, x: a.x}) : m(h[0], {dy: 0});
            m(o, {x: a.x, y: a.y}), n._.dirty = 1;
            var g = n._getBBox(), y = a.y - (g.y + g.height / 2);
            y && e.is(y, "finite") && m(h[0], {dy: y})
        }
    }, A = function (t, i) {
        this[0] = this.node = t, t.raphael = !0, this.id = e._oid++, t.raphaelid = this.id, this.matrix = e.matrix(), this.realPath = null, this.paper = i, this.attrs = this.attrs || {}, this._ = {transform: [], sx: 1, sy: 1, deg: 0, dx: 0, dy: 0, dirty: 1}, !i.bottom && (i.bottom = this), this.prev = i.top, i.top && (i.top.next = this), i.top = this, this.next = null
    }, $ = e.el;
    A.prototype = $, $.constructor = A, e._engine.path = function (e, t) {
        var i = m("path");
        t.canvas && t.canvas.appendChild(i);
        var n = new A(i, t);
        return n.type = "path", _(n, {fill: "none", stroke: "#000", path: e}), n
    }, $.rotate = function (e, t, r) {
        if (this.removed)return this;
        if (e = i(e).split(c), e.length - 1 && (t = n(e[1]), r = n(e[2])), e = n(e[0]), null == r && (t = r), null == t || null == r) {
            var s = this.getBBox(1);
            t = s.x + s.width / 2, r = s.y + s.height / 2
        }
        return this.transform(this._.transform.concat([
            ["r", e, t, r]
        ])), this
    }, $.scale = function (e, t, r, s) {
        if (this.removed)return this;
        if (e = i(e).split(c), e.length - 1 && (t = n(e[1]), r = n(e[2]), s = n(e[3])), e = n(e[0]), null == t && (t = e), null == s && (r = s), null == r || null == s)var a = this.getBBox(1);
        return r = null == r ? a.x + a.width / 2 : r, s = null == s ? a.y + a.height / 2 : s, this.transform(this._.transform.concat([
            ["s", e, t, r, s]
        ])), this
    }, $.translate = function (e, t) {
        return this.removed ? this : (e = i(e).split(c), e.length - 1 && (t = n(e[1])), e = n(e[0]) || 0, t = +t || 0, this.transform(this._.transform.concat([
            ["t", e, t]
        ])), this)
    }, $.transform = function (i) {
        var n = this._;
        if (null == i)return n.transform;
        if (e._extractTransform(this, i), this.clip && m(this.clip, {transform: this.matrix.invert()}), this.pattern && v(this), this.node && m(this.node, {transform: this.matrix}), 1 != n.sx || 1 != n.sy) {
            var r = this.attrs[t]("stroke-width") ? this.attrs["stroke-width"] : 1;
            this.attr({"stroke-width": r})
        }
        return this
    }, $.hide = function () {
        return!this.removed && this.paper.safari(this.node.style.display = "none"), this
    }, $.show = function () {
        return!this.removed && this.paper.safari(this.node.style.display = ""), this
    }, $.remove = function () {
        if (!this.removed && this.node.parentNode) {
            var t = this.paper;
            t.__set__ && t.__set__.exclude(this), u.unbind("raphael.*.*." + this.id), this.gradient && t.defs.removeChild(this.gradient), e._tear(this, t), "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node);
            for (var i in this)this[i] = "function" == typeof this[i] ? e._removedFactory(i) : null;
            this.removed = !0
        }
    }, $._getBBox = function () {
        if ("none" == this.node.style.display) {
            this.show();
            var e = !0
        }
        var t = {};
        try {
            t = this.node.getBBox()
        } catch (i) {
        } finally {
            t = t || {}
        }
        return e && this.hide(), t
    }, $.attr = function (i, n) {
        if (this.removed)return this;
        if (null == i) {
            var r = {};
            for (var s in this.attrs)this.attrs[t](s) && (r[s] = this.attrs[s]);
            return r.gradient && "none" == r.fill && (r.fill = r.gradient) && delete r.gradient, r.transform = this._.transform, r
        }
        if (null == n && e.is(i, "string")) {
            if ("fill" == i && "none" == this.attrs.fill && this.attrs.gradient)return this.attrs.gradient;
            if ("transform" == i)return this._.transform;
            for (var a = i.split(c), o = {}, l = 0, d = a.length; d > l; l++)i = a[l], o[i] = i in this.attrs ? this.attrs[i] : e.is(this.paper.customAttributes[i], "function") ? this.paper.customAttributes[i].def : e._availableAttrs[i];
            return d - 1 ? o : o[a[0]]
        }
        if (null == n && e.is(i, "array")) {
            for (o = {}, l = 0, d = i.length; d > l; l++)o[i[l]] = this.attr(i[l]);
            return o
        }
        if (null != n) {
            var h = {};
            h[i] = n
        } else null != i && e.is(i, "object") && (h = i);
        for (var p in h)u("raphael.attr." + p + "." + this.id, this, h[p]);
        for (p in this.paper.customAttributes)if (this.paper.customAttributes[t](p) && h[t](p) && e.is(this.paper.customAttributes[p], "function")) {
            var f = this.paper.customAttributes[p].apply(this, [].concat(h[p]));
            this.attrs[p] = h[p];
            for (var g in f)f[t](g) && (h[g] = f[g])
        }
        return _(this, h), this
    }, $.toFront = function () {
        if (this.removed)return this;
        "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
        var t = this.paper;
        return t.top != this && e._tofront(this, t), this
    }, $.toBack = function () {
        if (this.removed)return this;
        var t = this.node.parentNode;
        return"a" == t.tagName.toLowerCase() ? t.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : t.firstChild != this.node && t.insertBefore(this.node, this.node.parentNode.firstChild), e._toback(this, this.paper), this.paper, this
    }, $.insertAfter = function (t) {
        if (this.removed)return this;
        var i = t.node || t[t.length - 1].node;
        return i.nextSibling ? i.parentNode.insertBefore(this.node, i.nextSibling) : i.parentNode.appendChild(this.node), e._insertafter(this, t, this.paper), this
    }, $.insertBefore = function (t) {
        if (this.removed)return this;
        var i = t.node || t[0].node;
        return i.parentNode.insertBefore(this.node, i), e._insertbefore(this, t, this.paper), this
    }, $.blur = function (t) {
        var i = this;
        if (0 !== +t) {
            var n = m("filter"), r = m("feGaussianBlur");
            i.attrs.blur = t, n.id = e.createUUID(), m(r, {stdDeviation: +t || 1.5}), n.appendChild(r), i.paper.defs.appendChild(n), i._blur = n, m(i.node, {filter: "url(#" + n.id + ")"})
        } else i._blur && (i._blur.parentNode.removeChild(i._blur), delete i._blur, delete i.attrs.blur), i.node.removeAttribute("filter")
    }, e._engine.circle = function (e, t, i, n) {
        var r = m("circle");
        e.canvas && e.canvas.appendChild(r);
        var s = new A(r, e);
        return s.attrs = {cx: t, cy: i, r: n, fill: "none", stroke: "#000"}, s.type = "circle", m(r, s.attrs), s
    }, e._engine.rect = function (e, t, i, n, r, s) {
        var a = m("rect");
        e.canvas && e.canvas.appendChild(a);
        var o = new A(a, e);
        return o.attrs = {x: t, y: i, width: n, height: r, r: s || 0, rx: s || 0, ry: s || 0, fill: "none", stroke: "#000"}, o.type = "rect", m(a, o.attrs), o
    }, e._engine.ellipse = function (e, t, i, n, r) {
        var s = m("ellipse");
        e.canvas && e.canvas.appendChild(s);
        var a = new A(s, e);
        return a.attrs = {cx: t, cy: i, rx: n, ry: r, fill: "none", stroke: "#000"}, a.type = "ellipse", m(s, a.attrs), a
    }, e._engine.image = function (e, t, i, n, r, s) {
        var a = m("image");
        m(a, {x: i, y: n, width: r, height: s, preserveAspectRatio: "none"}), a.setAttributeNS(p, "href", t), e.canvas && e.canvas.appendChild(a);
        var o = new A(a, e);
        return o.attrs = {x: i, y: n, width: r, height: s, src: t}, o.type = "image", o
    }, e._engine.text = function (t, i, n, r) {
        var s = m("text");
        t.canvas && t.canvas.appendChild(s);
        var a = new A(s, t);
        return a.attrs = {x: i, y: n, "text-anchor": "middle", text: r, font: e._availableAttrs.font, stroke: "none", fill: "#000"}, a.type = "text", _(a, a.attrs), a
    }, e._engine.setSize = function (e, t) {
        return this.width = e || this.width, this.height = t || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this
    }, e._engine.create = function () {
        var t = e._getContainer.apply(0, arguments), i = t && t.container, n = t.x, r = t.y, s = t.width, a = t.height;
        if (!i)throw Error("SVG container not found.");
        var o, l = m("svg"), c = "overflow:hidden;";
        return n = n || 0, r = r || 0, s = s || 512, a = a || 342, m(l, {height: a, version: 1.1, width: s, xmlns: "http://www.w3.org/2000/svg"}), 1 == i ? (l.style.cssText = c + "position:absolute;left:" + n + "px;top:" + r + "px", e._g.doc.body.appendChild(l), o = 1) : (l.style.cssText = c + "position:relative", i.firstChild ? i.insertBefore(l, i.firstChild) : i.appendChild(l)), i = new e._Paper, i.width = s, i.height = a, i.canvas = l, i.clear(), i._left = i._top = 0, o && (i.renderfix = function () {
        }), i.renderfix(), i
    }, e._engine.setViewBox = function (e, t, i, n, r) {
        u("raphael.setViewBox", this, this._viewBox, [e, t, i, n, r]);
        var s, o, l = a(i / this.width, n / this.height), c = this.top, d = r ? "meet" : "xMinYMin";
        for (null == e ? (this._vbSize && (l = 1), delete this._vbSize, s = "0 0 " + this.width + h + this.height) : (this._vbSize = l, s = e + h + t + h + i + h + n), m(this.canvas, {viewBox: s, preserveAspectRatio: d}); l && c;)o = "stroke-width"in c.attrs ? c.attrs["stroke-width"] : 1, c.attr({"stroke-width": o}), c._.dirty = 1, c._.dirtyT = 1, c = c.prev;
        return this._viewBox = [e, t, i, n, !!r], this
    }, e.prototype.renderfix = function () {
        var e, t = this.canvas, i = t.style;
        try {
            e = t.getScreenCTM() || t.createSVGMatrix()
        } catch (n) {
            e = t.createSVGMatrix()
        }
        var r = -e.e % 1, s = -e.f % 1;
        (r || s) && (r && (this._left = (this._left + r) % 1, i.left = this._left + "px"), s && (this._top = (this._top + s) % 1, i.top = this._top + "px"))
    }, e.prototype.clear = function () {
        e.eve("raphael.clear", this);
        for (var t = this.canvas; t.firstChild;)t.removeChild(t.firstChild);
        this.bottom = this.top = null, (this.desc = m("desc")).appendChild(e._g.doc.createTextNode("Created with Rapha\u00ebl " + e.version)), t.appendChild(this.desc), t.appendChild(this.defs = m("defs"))
    }, e.prototype.remove = function () {
        u("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
        for (var t in this)this[t] = "function" == typeof this[t] ? e._removedFactory(t) : null
    };
    var k = e.st;
    for (var T in $)$[t](T) && !k[t](T) && (k[T] = function (e) {
        return function () {
            var t = arguments;
            return this.forEach(function (i) {
                i[e].apply(i, t)
            })
        }
    }(T))
}(window.Raphael), window.Raphael && window.Raphael.vml && function (e) {
    var t = "hasOwnProperty", i = String, n = parseFloat, r = Math, s = r.round, a = r.max, o = r.min, l = r.abs, c = "fill", u = /[, ]+/, d = e.eve, h = " progid:DXImageTransform.Microsoft", p = " ", f = "", g = {M: "m", L: "l", C: "c", Z: "x", m: "t", l: "r", c: "v", z: "x"}, m = /([clmz]),?([^clmz]*)/gi, y = / progid:\S+Blur\([^\)]+\)/g, v = /-?[^,\s-]+/g, b = "position:absolute;left:0;top:0;width:1px;height:1px", x = 21600, w = {path: 1, rect: 1, image: 1}, _ = {circle: 1, ellipse: 1}, S = function (t) {
        var n = /[ahqstv]/gi, r = e._pathToAbsolute;
        if (i(t).match(n) && (r = e._path2curve), n = /[clmz]/g, r == e._pathToAbsolute && !i(t).match(n)) {
            var a = i(t).replace(m, function (e, t, i) {
                var n = [], r = "m" == t.toLowerCase(), a = g[t];
                return i.replace(v, function (e) {
                    r && 2 == n.length && (a += n + g["m" == t ? "l" : "L"], n = []), n.push(s(e * x))
                }), a + n
            });
            return a
        }
        var o, l, c = r(t);
        a = [];
        for (var u = 0, d = c.length; d > u; u++) {
            o = c[u], l = c[u][0].toLowerCase(), "z" == l && (l = "x");
            for (var h = 1, y = o.length; y > h; h++)l += s(o[h] * x) + (h != y - 1 ? "," : f);
            a.push(l)
        }
        return a.join(p)
    }, C = function (t, i, n) {
        var r = e.matrix();
        return r.rotate(-t, .5, .5), {dx: r.x(i, n), dy: r.y(i, n)}
    }, A = function (e, t, i, n, r, s) {
        var a = e._, o = e.matrix, u = a.fillpos, d = e.node, h = d.style, f = 1, g = "", m = x / t, y = x / i;
        if (h.visibility = "hidden", t && i) {
            if (d.coordsize = l(m) + p + l(y), h.rotation = s * (0 > t * i ? -1 : 1), s) {
                var v = C(s, n, r);
                n = v.dx, r = v.dy
            }
            if (0 > t && (g += "x"), 0 > i && (g += " y") && (f = -1), h.flip = g, d.coordorigin = n * -m + p + r * -y, u || a.fillsize) {
                var b = d.getElementsByTagName(c);
                b = b && b[0], d.removeChild(b), u && (v = C(s, o.x(u[0], u[1]), o.y(u[0], u[1])), b.position = v.dx * f + p + v.dy * f), a.fillsize && (b.size = a.fillsize[0] * l(t) + p + a.fillsize[1] * l(i)), d.appendChild(b)
            }
            h.visibility = "visible"
        }
    };
    e.toString = function () {
        return"Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\u00ebl " + this.version
    };
    var $ = function (e, t, n) {
        for (var r = i(t).toLowerCase().split("-"), s = n ? "end" : "start", a = r.length, o = "classic", l = "medium", c = "medium"; a--;)switch (r[a]) {
            case"block":
            case"classic":
            case"oval":
            case"diamond":
            case"open":
            case"none":
                o = r[a];
                break;
            case"wide":
            case"narrow":
                c = r[a];
                break;
            case"long":
            case"short":
                l = r[a]
        }
        var u = e.node.getElementsByTagName("stroke")[0];
        u[s + "arrow"] = o, u[s + "arrowlength"] = l, u[s + "arrowwidth"] = c
    }, k = function (r, l) {
        r.attrs = r.attrs || {};
        var d = r.node, h = r.attrs, g = d.style, m = w[r.type] && (l.x != h.x || l.y != h.y || l.width != h.width || l.height != h.height || l.cx != h.cx || l.cy != h.cy || l.rx != h.rx || l.ry != h.ry || l.r != h.r), y = _[r.type] && (h.cx != l.cx || h.cy != l.cy || h.r != l.r || h.rx != l.rx || h.ry != l.ry), v = r;
        for (var b in l)l[t](b) && (h[b] = l[b]);
        if (m && (h.path = e._getPath[r.type](r), r._.dirty = 1), l.href && (d.href = l.href), l.title && (d.title = l.title), l.target && (d.target = l.target), l.cursor && (g.cursor = l.cursor), "blur"in l && r.blur(l.blur), (l.path && "path" == r.type || m) && (d.path = S(~i(h.path).toLowerCase().indexOf("r") ? e._pathToAbsolute(h.path) : h.path), "image" == r.type && (r._.fillpos = [h.x, h.y], r._.fillsize = [h.width, h.height], A(r, 1, 1, 0, 0, 0))), "transform"in l && r.transform(l.transform), y) {
            var C = +h.cx, k = +h.cy, D = +h.rx || +h.r || 0, N = +h.ry || +h.r || 0;
            d.path = e.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", s((C - D) * x), s((k - N) * x), s((C + D) * x), s((k + N) * x), s(C * x))
        }
        if ("clip-rect"in l) {
            var M = i(l["clip-rect"]).split(u);
            if (4 == M.length) {
                M[2] = +M[2] + +M[0], M[3] = +M[3] + +M[1];
                var P = d.clipRect || e._g.doc.createElement("div"), I = P.style;
                I.clip = e.format("rect({1}px {2}px {3}px {0}px)", M), d.clipRect || (I.position = "absolute", I.top = 0, I.left = 0, I.width = r.paper.width + "px", I.height = r.paper.height + "px", d.parentNode.insertBefore(P, d), P.appendChild(d), d.clipRect = P)
            }
            l["clip-rect"] || d.clipRect && (d.clipRect.style.clip = "auto")
        }
        if (r.textpath) {
            var H = r.textpath.style;
            l.font && (H.font = l.font), l["font-family"] && (H.fontFamily = '"' + l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, f) + '"'), l["font-size"] && (H.fontSize = l["font-size"]), l["font-weight"] && (H.fontWeight = l["font-weight"]), l["font-style"] && (H.fontStyle = l["font-style"])
        }
        if ("arrow-start"in l && $(v, l["arrow-start"]), "arrow-end"in l && $(v, l["arrow-end"], 1), null != l.opacity || null != l["stroke-width"] || null != l.fill || null != l.src || null != l.stroke || null != l["stroke-width"] || null != l["stroke-opacity"] || null != l["fill-opacity"] || null != l["stroke-dasharray"] || null != l["stroke-miterlimit"] || null != l["stroke-linejoin"] || null != l["stroke-linecap"]) {
            var R = d.getElementsByTagName(c), L = !1;
            if (R = R && R[0], !R && (L = R = E(c)), "image" == r.type && l.src && (R.src = l.src), l.fill && (R.on = !0), (null == R.on || "none" == l.fill || null === l.fill) && (R.on = !1), R.on && l.fill) {
                var O = i(l.fill).match(e._ISURL);
                if (O) {
                    R.parentNode == d && d.removeChild(R), R.rotate = !0, R.src = O[1], R.type = "tile";
                    var J = r.getBBox(1);
                    R.position = J.x + p + J.y, r._.fillpos = [J.x, J.y], e._preload(O[1], function () {
                        r._.fillsize = [this.offsetWidth, this.offsetHeight]
                    })
                } else R.color = e.getRGB(l.fill).hex, R.src = f, R.type = "solid", e.getRGB(l.fill).error && (v.type in{circle: 1, ellipse: 1} || "r" != i(l.fill).charAt()) && T(v, l.fill, R) && (h.fill = "none", h.gradient = l.fill, R.rotate = !1)
            }
            if ("fill-opacity"in l || "opacity"in l) {
                var F = ((+h["fill-opacity"] + 1 || 2) - 1) * ((+h.opacity + 1 || 2) - 1) * ((+e.getRGB(l.fill).o + 1 || 2) - 1);
                F = o(a(F, 0), 1), R.opacity = F, R.src && (R.color = "none")
            }
            d.appendChild(R);
            var B = d.getElementsByTagName("stroke") && d.getElementsByTagName("stroke")[0], j = !1;
            !B && (j = B = E("stroke")), (l.stroke && "none" != l.stroke || l["stroke-width"] || null != l["stroke-opacity"] || l["stroke-dasharray"] || l["stroke-miterlimit"] || l["stroke-linejoin"] || l["stroke-linecap"]) && (B.on = !0), ("none" == l.stroke || null === l.stroke || null == B.on || 0 == l.stroke || 0 == l["stroke-width"]) && (B.on = !1);
            var z = e.getRGB(l.stroke);
            B.on && l.stroke && (B.color = z.hex), F = ((+h["stroke-opacity"] + 1 || 2) - 1) * ((+h.opacity + 1 || 2) - 1) * ((+z.o + 1 || 2) - 1);
            var W = .75 * (n(l["stroke-width"]) || 1);
            if (F = o(a(F, 0), 1), null == l["stroke-width"] && (W = h["stroke-width"]), l["stroke-width"] && (B.weight = W), W && 1 > W && (F *= W) && (B.weight = 1), B.opacity = F, l["stroke-linejoin"] && (B.joinstyle = l["stroke-linejoin"] || "miter"), B.miterlimit = l["stroke-miterlimit"] || 8, l["stroke-linecap"] && (B.endcap = "butt" == l["stroke-linecap"] ? "flat" : "square" == l["stroke-linecap"] ? "square" : "round"), l["stroke-dasharray"]) {
                var Y = {"-": "shortdash", ".": "shortdot", "-.": "shortdashdot", "-..": "shortdashdotdot", ". ": "dot", "- ": "dash", "--": "longdash", "- .": "dashdot", "--.": "longdashdot", "--..": "longdashdotdot"};
                B.dashstyle = Y[t](l["stroke-dasharray"]) ? Y[l["stroke-dasharray"]] : f
            }
            j && d.appendChild(B)
        }
        if ("text" == v.type) {
            v.paper.canvas.style.display = f;
            var U = v.paper.span, q = 100, K = h.font && h.font.match(/\d+(?:\.\d*)?(?=px)/);
            g = U.style, h.font && (g.font = h.font), h["font-family"] && (g.fontFamily = h["font-family"]), h["font-weight"] && (g.fontWeight = h["font-weight"]), h["font-style"] && (g.fontStyle = h["font-style"]), K = n(h["font-size"] || K && K[0]) || 10, g.fontSize = K * q + "px", v.textpath.string && (U.innerHTML = i(v.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
            var V = U.getBoundingClientRect();
            v.W = h.w = (V.right - V.left) / q, v.H = h.h = (V.bottom - V.top) / q, v.X = h.x, v.Y = h.y + v.H / 2, ("x"in l || "y"in l) && (v.path.v = e.format("m{0},{1}l{2},{1}", s(h.x * x), s(h.y * x), s(h.x * x) + 1));
            for (var G = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], X = 0, Q = G.length; Q > X; X++)if (G[X]in l) {
                v._.dirty = 1;
                break
            }
            switch (h["text-anchor"]) {
                case"start":
                    v.textpath.style["v-text-align"] = "left", v.bbx = v.W / 2;
                    break;
                case"end":
                    v.textpath.style["v-text-align"] = "right", v.bbx = -v.W / 2;
                    break;
                default:
                    v.textpath.style["v-text-align"] = "center", v.bbx = 0
            }
            v.textpath.style["v-text-kern"] = !0
        }
    }, T = function (t, s, a) {
        t.attrs = t.attrs || {};
        var o = (t.attrs, Math.pow), l = "linear", c = ".5 .5";
        if (t.attrs.gradient = s, s = i(s).replace(e._radial_gradient, function (e, t, i) {
            return l = "radial", t && i && (t = n(t), i = n(i), o(t - .5, 2) + o(i - .5, 2) > .25 && (i = r.sqrt(.25 - o(t - .5, 2)) * (2 * (i > .5) - 1) + .5), c = t + p + i), f
        }), s = s.split(/\s*\-\s*/), "linear" == l) {
            var u = s.shift();
            if (u = -n(u), isNaN(u))return null
        }
        var d = e._parseDots(s);
        if (!d)return null;
        if (t = t.shape || t.node, d.length) {
            t.removeChild(a), a.on = !0, a.method = "none", a.color = d[0].color, a.color2 = d[d.length - 1].color;
            for (var h = [], g = 0, m = d.length; m > g; g++)d[g].offset && h.push(d[g].offset + p + d[g].color);
            a.colors = h.length ? h.join() : "0% " + a.color, "radial" == l ? (a.type = "gradientTitle", a.focus = "100%", a.focussize = "0 0", a.focusposition = c, a.angle = 0) : (a.type = "gradient", a.angle = (270 - u) % 360), t.appendChild(a)
        }
        return 1
    }, D = function (t, i) {
        this[0] = this.node = t, t.raphael = !0, this.id = e._oid++, t.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = i, this.matrix = e.matrix(), this._ = {transform: [], sx: 1, sy: 1, dx: 0, dy: 0, deg: 0, dirty: 1, dirtyT: 1}, !i.bottom && (i.bottom = this), this.prev = i.top, i.top && (i.top.next = this), i.top = this, this.next = null
    }, N = e.el;
    D.prototype = N, N.constructor = D, N.transform = function (t) {
        if (null == t)return this._.transform;
        var n, r = this.paper._viewBoxShift, s = r ? "s" + [r.scale, r.scale] + "-1-1t" + [r.dx, r.dy] : f;
        r && (n = t = i(t).replace(/\.{3}|\u2026/g, this._.transform || f)), e._extractTransform(this, s + t);
        var a, o = this.matrix.clone(), l = this.skew, c = this.node, u = ~i(this.attrs.fill).indexOf("-"), d = !i(this.attrs.fill).indexOf("url(");
        if (o.translate(-.5, -.5), d || u || "image" == this.type)if (l.matrix = "1 0 0 1", l.offset = "0 0", a = o.split(), u && a.noRotation || !a.isSimple) {
            c.style.filter = o.toFilter();
            var h = this.getBBox(), g = this.getBBox(1), m = h.x - g.x, y = h.y - g.y;
            c.coordorigin = m * -x + p + y * -x, A(this, 1, 1, m, y, 0)
        } else c.style.filter = f, A(this, a.scalex, a.scaley, a.dx, a.dy, a.rotate); else c.style.filter = f, l.matrix = i(o), l.offset = o.offset();
        return n && (this._.transform = n), this
    }, N.rotate = function (e, t, r) {
        if (this.removed)return this;
        if (null != e) {
            if (e = i(e).split(u), e.length - 1 && (t = n(e[1]), r = n(e[2])), e = n(e[0]), null == r && (t = r), null == t || null == r) {
                var s = this.getBBox(1);
                t = s.x + s.width / 2, r = s.y + s.height / 2
            }
            return this._.dirtyT = 1, this.transform(this._.transform.concat([
                ["r", e, t, r]
            ])), this
        }
    }, N.translate = function (e, t) {
        return this.removed ? this : (e = i(e).split(u), e.length - 1 && (t = n(e[1])), e = n(e[0]) || 0, t = +t || 0, this._.bbox && (this._.bbox.x += e, this._.bbox.y += t), this.transform(this._.transform.concat([
            ["t", e, t]
        ])), this)
    }, N.scale = function (e, t, r, s) {
        if (this.removed)return this;
        if (e = i(e).split(u), e.length - 1 && (t = n(e[1]), r = n(e[2]), s = n(e[3]), isNaN(r) && (r = null), isNaN(s) && (s = null)), e = n(e[0]), null == t && (t = e), null == s && (r = s), null == r || null == s)var a = this.getBBox(1);
        return r = null == r ? a.x + a.width / 2 : r, s = null == s ? a.y + a.height / 2 : s, this.transform(this._.transform.concat([
            ["s", e, t, r, s]
        ])), this._.dirtyT = 1, this
    }, N.hide = function () {
        return!this.removed && (this.node.style.display = "none"), this
    }, N.show = function () {
        return!this.removed && (this.node.style.display = f), this
    }, N._getBBox = function () {
        return this.removed ? {} : {x: this.X + (this.bbx || 0) - this.W / 2, y: this.Y - this.H, width: this.W, height: this.H}
    }, N.remove = function () {
        if (!this.removed && this.node.parentNode) {
            this.paper.__set__ && this.paper.__set__.exclude(this), e.eve.unbind("raphael.*.*." + this.id), e._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
            for (var t in this)this[t] = "function" == typeof this[t] ? e._removedFactory(t) : null;
            this.removed = !0
        }
    }, N.attr = function (i, n) {
        if (this.removed)return this;
        if (null == i) {
            var r = {};
            for (var s in this.attrs)this.attrs[t](s) && (r[s] = this.attrs[s]);
            return r.gradient && "none" == r.fill && (r.fill = r.gradient) && delete r.gradient, r.transform = this._.transform, r
        }
        if (null == n && e.is(i, "string")) {
            if (i == c && "none" == this.attrs.fill && this.attrs.gradient)return this.attrs.gradient;
            for (var a = i.split(u), o = {}, l = 0, h = a.length; h > l; l++)i = a[l], o[i] = i in this.attrs ? this.attrs[i] : e.is(this.paper.customAttributes[i], "function") ? this.paper.customAttributes[i].def : e._availableAttrs[i];
            return h - 1 ? o : o[a[0]]
        }
        if (this.attrs && null == n && e.is(i, "array")) {
            for (o = {}, l = 0, h = i.length; h > l; l++)o[i[l]] = this.attr(i[l]);
            return o
        }
        var p;
        null != n && (p = {}, p[i] = n), null == n && e.is(i, "object") && (p = i);
        for (var f in p)d("raphael.attr." + f + "." + this.id, this, p[f]);
        if (p) {
            for (f in this.paper.customAttributes)if (this.paper.customAttributes[t](f) && p[t](f) && e.is(this.paper.customAttributes[f], "function")) {
                var g = this.paper.customAttributes[f].apply(this, [].concat(p[f]));
                this.attrs[f] = p[f];
                for (var m in g)g[t](m) && (p[m] = g[m])
            }
            p.text && "text" == this.type && (this.textpath.string = p.text), k(this, p)
        }
        return this
    }, N.toFront = function () {
        return!this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && e._tofront(this, this.paper), this
    }, N.toBack = function () {
        return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), e._toback(this, this.paper)), this)
    }, N.insertAfter = function (t) {
        return this.removed ? this : (t.constructor == e.st.constructor && (t = t[t.length - 1]), t.node.nextSibling ? t.node.parentNode.insertBefore(this.node, t.node.nextSibling) : t.node.parentNode.appendChild(this.node), e._insertafter(this, t, this.paper), this)
    }, N.insertBefore = function (t) {
        return this.removed ? this : (t.constructor == e.st.constructor && (t = t[0]), t.node.parentNode.insertBefore(this.node, t.node), e._insertbefore(this, t, this.paper), this)
    }, N.blur = function (t) {
        var i = this.node.runtimeStyle, n = i.filter;
        n = n.replace(y, f), 0 !== +t ? (this.attrs.blur = t, i.filter = n + p + h + ".Blur(pixelradius=" + (+t || 1.5) + ")", i.margin = e.format("-{0}px 0 0 -{0}px", s(+t || 1.5))) : (i.filter = n, i.margin = 0, delete this.attrs.blur)
    }, e._engine.path = function (e, t) {
        var i = E("shape");
        i.style.cssText = b, i.coordsize = x + p + x, i.coordorigin = t.coordorigin;
        var n = new D(i, t), r = {fill: "none", stroke: "#000"};
        e && (r.path = e), n.type = "path", n.path = [], n.Path = f, k(n, r), t.canvas.appendChild(i);
        var s = E("skew");
        return s.on = !0, i.appendChild(s), n.skew = s, n.transform(f), n
    }, e._engine.rect = function (t, i, n, r, s, a) {
        var o = e._rectPath(i, n, r, s, a), l = t.path(o), c = l.attrs;
        return l.X = c.x = i, l.Y = c.y = n, l.W = c.width = r, l.H = c.height = s, c.r = a, c.path = o, l.type = "rect", l
    }, e._engine.ellipse = function (e, t, i, n, r) {
        var s = e.path();
        return s.attrs, s.X = t - n, s.Y = i - r, s.W = 2 * n, s.H = 2 * r, s.type = "ellipse", k(s, {cx: t, cy: i, rx: n, ry: r}), s
    }, e._engine.circle = function (e, t, i, n) {
        var r = e.path();
        return r.attrs, r.X = t - n, r.Y = i - n, r.W = r.H = 2 * n, r.type = "circle", k(r, {cx: t, cy: i, r: n}), r
    }, e._engine.image = function (t, i, n, r, s, a) {
        var o = e._rectPath(n, r, s, a), l = t.path(o).attr({stroke: "none"}), u = l.attrs, d = l.node, h = d.getElementsByTagName(c)[0];
        return u.src = i, l.X = u.x = n, l.Y = u.y = r, l.W = u.width = s, l.H = u.height = a, u.path = o, l.type = "image", h.parentNode == d && d.removeChild(h), h.rotate = !0, h.src = i, h.type = "tile", l._.fillpos = [n, r], l._.fillsize = [s, a], d.appendChild(h), A(l, 1, 1, 0, 0, 0), l
    }, e._engine.text = function (t, n, r, a) {
        var o = E("shape"), l = E("path"), c = E("textpath");
        n = n || 0, r = r || 0, a = a || "", l.v = e.format("m{0},{1}l{2},{1}", s(n * x), s(r * x), s(n * x) + 1), l.textpathok = !0, c.string = i(a), c.on = !0, o.style.cssText = b, o.coordsize = x + p + x, o.coordorigin = "0 0";
        var u = new D(o, t), d = {fill: "#000", stroke: "none", font: e._availableAttrs.font, text: a};
        u.shape = o, u.path = l, u.textpath = c, u.type = "text", u.attrs.text = i(a), u.attrs.x = n, u.attrs.y = r, u.attrs.w = 1, u.attrs.h = 1, k(u, d), o.appendChild(c), o.appendChild(l), t.canvas.appendChild(o);
        var h = E("skew");
        return h.on = !0, o.appendChild(h), u.skew = h, u.transform(f), u
    }, e._engine.setSize = function (t, i) {
        var n = this.canvas.style;
        return this.width = t, this.height = i, t == +t && (t += "px"), i == +i && (i += "px"), n.width = t, n.height = i, n.clip = "rect(0 " + t + " " + i + " 0)", this._viewBox && e._engine.setViewBox.apply(this, this._viewBox), this
    }, e._engine.setViewBox = function (t, i, n, r, s) {
        e.eve("raphael.setViewBox", this, this._viewBox, [t, i, n, r, s]);
        var o, l, c = this.width, u = this.height, d = 1 / a(n / c, r / u);
        return s && (o = u / r, l = c / n, c > n * o && (t -= (c - n * o) / 2 / o), u > r * l && (i -= (u - r * l) / 2 / l)), this._viewBox = [t, i, n, r, !!s], this._viewBoxShift = {dx: -t, dy: -i, scale: d}, this.forEach(function (e) {
            e.transform("...")
        }), this
    };
    var E;
    e._engine.initWin = function (e) {
        var t = e.document;
        t.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
        try {
            !t.namespaces.rvml && t.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), E = function (e) {
                return t.createElement("<rvml:" + e + ' class="rvml">')
            }
        } catch (i) {
            E = function (e) {
                return t.createElement("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
            }
        }
    }, e._engine.initWin(e._g.win), e._engine.create = function () {
        var t = e._getContainer.apply(0, arguments), i = t.container, n = t.height, r = t.width, s = t.x, a = t.y;
        if (!i)throw Error("VML container not found.");
        var o = new e._Paper, l = o.canvas = e._g.doc.createElement("div"), c = l.style;
        return s = s || 0, a = a || 0, r = r || 512, n = n || 342, o.width = r, o.height = n, r == +r && (r += "px"), n == +n && (n += "px"), o.coordsize = 1e3 * x + p + 1e3 * x, o.coordorigin = "0 0", o.span = e._g.doc.createElement("span"), o.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", l.appendChild(o.span), c.cssText = e.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", r, n), 1 == i ? (e._g.doc.body.appendChild(l), c.left = s + "px", c.top = a + "px", c.position = "absolute") : i.firstChild ? i.insertBefore(l, i.firstChild) : i.appendChild(l), o.renderfix = function () {
        }, o
    }, e.prototype.clear = function () {
        e.eve("raphael.clear", this), this.canvas.innerHTML = f, this.span = e._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
    }, e.prototype.remove = function () {
        e.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
        for (var t in this)this[t] = "function" == typeof this[t] ? e._removedFactory(t) : null;
        return!0
    };
    var M = e.st;
    for (var P in N)N[t](P) && !M[t](P) && (M[P] = function (e) {
        return function () {
            var t = arguments;
            return this.forEach(function (i) {
                i[e].apply(i, t)
            })
        }
    }(P))
}(window.Raphael), function (e, t) {
    function i(t, i) {
        var r = t.nodeName.toLowerCase();
        if ("area" === r) {
            var s, a = t.parentNode, o = a.name;
            return t.href && o && "map" === a.nodeName.toLowerCase() ? (s = e("img[usemap=#" + o + "]")[0], !!s && n(s)) : !1
        }
        return(/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" == r ? t.href || i : i) && n(t)
    }

    function n(t) {
        return!e(t).parents().andSelf().filter(function () {
            return"hidden" === e.curCSS(this, "visibility") || e.expr.filters.hidden(this)
        }).length
    }

    e.ui = e.ui || {}, e.ui.version || (e.extend(e.ui, {version: "1.8.24", keyCode: {ALT: 18, BACKSPACE: 8, CAPS_LOCK: 20, COMMA: 188, COMMAND: 91, COMMAND_LEFT: 91, COMMAND_RIGHT: 93, CONTROL: 17, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, INSERT: 45, LEFT: 37, MENU: 93, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SHIFT: 16, SPACE: 32, TAB: 9, UP: 38, WINDOWS: 91}}), e.fn.extend({propAttr: e.fn.prop || e.fn.attr, _focus: e.fn.focus, focus: function (t, i) {
        return"number" == typeof t ? this.each(function () {
            var n = this;
            setTimeout(function () {
                e(n).focus(), i && i.call(n)
            }, t)
        }) : this._focus.apply(this, arguments)
    }, scrollParent: function () {
        var t;
        return t = e.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
            return/(relative|absolute|fixed)/.test(e.curCSS(this, "position", 1)) && /(auto|scroll)/.test(e.curCSS(this, "overflow", 1) + e.curCSS(this, "overflow-y", 1) + e.curCSS(this, "overflow-x", 1))
        }).eq(0) : this.parents().filter(function () {
            return/(auto|scroll)/.test(e.curCSS(this, "overflow", 1) + e.curCSS(this, "overflow-y", 1) + e.curCSS(this, "overflow-x", 1))
        }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
    }, zIndex: function (i) {
        if (i !== t)return this.css("zIndex", i);
        if (this.length)for (var n, r, s = e(this[0]); s.length && s[0] !== document;) {
            if (n = s.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (r = parseInt(s.css("zIndex"), 10), !isNaN(r) && 0 !== r))return r;
            s = s.parent()
        }
        return 0
    }, disableSelection: function () {
        return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
            e.preventDefault()
        })
    }, enableSelection: function () {
        return this.unbind(".ui-disableSelection")
    }}), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (i, n) {
        function r(t, i, n, r) {
            return e.each(s, function () {
                i -= parseFloat(e.curCSS(t, "padding" + this, !0)) || 0, n && (i -= parseFloat(e.curCSS(t, "border" + this + "Width", !0)) || 0), r && (i -= parseFloat(e.curCSS(t, "margin" + this, !0)) || 0)
            }), i
        }

        var s = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"], a = n.toLowerCase(), o = {innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight};
        e.fn["inner" + n] = function (i) {
            return i === t ? o["inner" + n].call(this) : this.each(function () {
                e(this).css(a, r(this, i) + "px")
            })
        }, e.fn["outer" + n] = function (t, i) {
            return"number" != typeof t ? o["outer" + n].call(this, t) : this.each(function () {
                e(this).css(a, r(this, t, !0, i) + "px")
            })
        }
    }), e.extend(e.expr[":"], {data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
        return function (i) {
            return!!e.data(i, t)
        }
    }) : function (t, i, n) {
        return!!e.data(t, n[3])
    }, focusable: function (t) {
        return i(t, !isNaN(e.attr(t, "tabindex")))
    }, tabbable: function (t) {
        var n = e.attr(t, "tabindex"), r = isNaN(n);
        return(r || n >= 0) && i(t, !r)
    }}), e(function () {
        var t = document.body, i = t.appendChild(i = document.createElement("div"));
        i.offsetHeight, e.extend(i.style, {minHeight: "100px", height: "auto", padding: 0, borderWidth: 0}), e.support.minHeight = 100 === i.offsetHeight, e.support.selectstart = "onselectstart"in i, t.removeChild(i).style.display = "none"
    }), e.curCSS || (e.curCSS = e.css), e.extend(e.ui, {plugin: {add: function (t, i, n) {
        var r = e.ui[t].prototype;
        for (var s in n)r.plugins[s] = r.plugins[s] || [], r.plugins[s].push([i, n[s]])
    }, call: function (e, t, i) {
        var n = e.plugins[t];
        if (n && e.element[0].parentNode)for (var r = 0; n.length > r; r++)e.options[n[r][0]] && n[r][1].apply(e.element, i)
    }}, contains: function (e, t) {
        return document.compareDocumentPosition ? 16 & e.compareDocumentPosition(t) : e !== t && e.contains(t)
    }, hasScroll: function (t, i) {
        if ("hidden" === e(t).css("overflow"))return!1;
        var n = i && "left" === i ? "scrollLeft" : "scrollTop", r = !1;
        return t[n] > 0 ? !0 : (t[n] = 1, r = t[n] > 0, t[n] = 0, r)
    }, isOverAxis: function (e, t, i) {
        return e > t && t + i > e
    }, isOver: function (t, i, n, r, s, a) {
        return e.ui.isOverAxis(t, n, s) && e.ui.isOverAxis(i, r, a)
    }}))
}(jQuery), function (e, t) {
    if (e.cleanData) {
        var i = e.cleanData;
        e.cleanData = function (t) {
            for (var n, r = 0; null != (n = t[r]); r++)try {
                e(n).triggerHandler("remove")
            } catch (s) {
            }
            i(t)
        }
    } else {
        var n = e.fn.remove;
        e.fn.remove = function (t, i) {
            return this.each(function () {
                return i || (!t || e.filter(t, [this]).length) && e("*", this).add([this]).each(function () {
                    try {
                        e(this).triggerHandler("remove")
                    } catch (t) {
                    }
                }), n.call(e(this), t, i)
            })
        }
    }
    e.widget = function (t, i, n) {
        var r, s = t.split(".")[0];
        t = t.split(".")[1], r = s + "-" + t, n || (n = i, i = e.Widget), e.expr[":"][r] = function (i) {
            return!!e.data(i, t)
        }, e[s] = e[s] || {}, e[s][t] = function (e, t) {
            arguments.length && this._createWidget(e, t)
        };
        var a = new i;
        a.options = e.extend(!0, {}, a.options), e[s][t].prototype = e.extend(!0, a, {namespace: s, widgetName: t, widgetEventPrefix: e[s][t].prototype.widgetEventPrefix || t, widgetBaseClass: r}, n), e.widget.bridge(t, e[s][t])
    }, e.widget.bridge = function (i, n) {
        e.fn[i] = function (r) {
            var s = "string" == typeof r, a = Array.prototype.slice.call(arguments, 1), o = this;
            return r = !s && a.length ? e.extend.apply(null, [!0, r].concat(a)) : r, s && "_" === r.charAt(0) ? o : (s ? this.each(function () {
                var n = e.data(this, i), s = n && e.isFunction(n[r]) ? n[r].apply(n, a) : n;
                return s !== n && s !== t ? (o = s, !1) : t
            }) : this.each(function () {
                var t = e.data(this, i);
                t ? t.option(r || {})._init() : e.data(this, i, new n(r, this))
            }), o)
        }
    }, e.Widget = function (e, t) {
        arguments.length && this._createWidget(e, t)
    }, e.Widget.prototype = {widgetName: "widget", widgetEventPrefix: "", options: {disabled: !1}, _createWidget: function (t, i) {
        e.data(i, this.widgetName, this), this.element = e(i), this.options = e.extend(!0, {}, this.options, this._getCreateOptions(), t);
        var n = this;
        this.element.bind("remove." + this.widgetName, function () {
            n.destroy()
        }), this._create(), this._trigger("create"), this._init()
    }, _getCreateOptions: function () {
        return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
    }, _create: function () {
    }, _init: function () {
    }, destroy: function () {
        this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled " + "ui-state-disabled")
    }, widget: function () {
        return this.element
    }, option: function (i, n) {
        var r = i;
        if (0 === arguments.length)return e.extend({}, this.options);
        if ("string" == typeof i) {
            if (n === t)return this.options[i];
            r = {}, r[i] = n
        }
        return this._setOptions(r), this
    }, _setOptions: function (t) {
        var i = this;
        return e.each(t, function (e, t) {
            i._setOption(e, t)
        }), this
    }, _setOption: function (e, t) {
        return this.options[e] = t, "disabled" === e && this.widget()[t ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled" + " " + "ui-state-disabled").attr("aria-disabled", t), this
    }, enable: function () {
        return this._setOption("disabled", !1)
    }, disable: function () {
        return this._setOption("disabled", !0)
    }, _trigger: function (t, i, n) {
        var r, s, a = this.options[t];
        if (n = n || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], s = i.originalEvent)for (r in s)r in i || (i[r] = s[r]);
        return this.element.trigger(i, n), !(e.isFunction(a) && a.call(this.element[0], i, n) === !1 || i.isDefaultPrevented())
    }}
}(jQuery), function (e) {
    var t = !1;
    e(document).mouseup(function () {
        t = !1
    }), e.widget("ui.mouse", {options: {cancel: ":input,option", distance: 1, delay: 0}, _mouseInit: function () {
        var t = this;
        this.element.bind("mousedown." + this.widgetName,function (e) {
            return t._mouseDown(e)
        }).bind("click." + this.widgetName, function (i) {
            return!0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined
        }), this.started = !1
    }, _mouseDestroy: function () {
        this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
    }, _mouseDown: function (i) {
        if (!t) {
            this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
            var n = this, r = 1 == i.which, s = "string" == typeof this.options.cancel && i.target.nodeName ? e(i.target).closest(this.options.cancel).length : !1;
            return r && !s && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                n.mouseDelayMet = !0
            }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === e.data(i.target, this.widgetName + ".preventClickEvent") && e.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
                return n._mouseMove(e)
            }, this._mouseUpDelegate = function (e) {
                return n._mouseUp(e)
            }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), t = !0, !0)) : !0
        }
    }, _mouseMove: function (t) {
        return!e.browser.msie || document.documentMode >= 9 || t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
    }, _mouseUp: function (t) {
        return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target == this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
    }, _mouseDistanceMet: function (e) {
        return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
    }, _mouseDelayMet: function () {
        return this.mouseDelayMet
    }, _mouseStart: function () {
    }, _mouseDrag: function () {
    }, _mouseStop: function () {
    }, _mouseCapture: function () {
        return!0
    }})
}(jQuery), function (e) {
    e.widget("ui.draggable", e.ui.mouse, {widgetEventPrefix: "drag", options: {addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1}, _create: function () {
        "original" != this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
    }, destroy: function () {
        return this.element.data("draggable") ? (this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy(), this) : undefined
    }, _mouseCapture: function (t) {
        var i = this.options;
        return this.helper || i.disabled || e(t.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(t), this.handle ? (i.iframeFix && e(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function () {
            e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width: this.offsetWidth + "px", height: this.offsetHeight + "px", position: "absolute", opacity: "0.001", zIndex: 1e3}).css(e(this).offset()).appendTo("body")
        }), !0) : !1)
    }, _mouseStart: function (t) {
        var i = this.options;
        return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left}, e.extend(this.offset, {click: {left: t.pageX - this.offset.left, top: t.pageY - this.offset.top}, parent: this._getParentOffset(), relative: this._getRelativeOffset()}), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), i.containment && this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
    }, _mouseDrag: function (t, i) {
        if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !i) {
            var n = this._uiHash();
            if (this._trigger("drag", t, n) === !1)return this._mouseUp({}), !1;
            this.position = n.position
        }
        return this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
    }, _mouseStop: function (t) {
        var i = !1;
        e.ui.ddmanager && !this.options.dropBehaviour && (i = e.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1);
        for (var n = this.element[0], r = !1; n && (n = n.parentNode);)n == document && (r = !0);
        if (!r && "original" === this.options.helper)return!1;
        if ("invalid" == this.options.revert && !i || "valid" == this.options.revert && i || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, i)) {
            var s = this;
            e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                s._trigger("stop", t) !== !1 && s._clear()
            })
        } else this._trigger("stop", t) !== !1 && this._clear();
        return!1
    }, _mouseUp: function (t) {
        return e("div.ui-draggable-iframeFix").each(function () {
            this.parentNode.removeChild(this)
        }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t)
    }, cancel: function () {
        return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
    }, _getHandle: function (t) {
        var i = this.options.handle && e(this.options.handle, this.element).length ? !1 : !0;
        return e(this.options.handle, this.element).find("*").andSelf().each(function () {
            this == t.target && (i = !0)
        }), i
    }, _createHelper: function (t) {
        var i = this.options, n = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t])) : "clone" == i.helper ? this.element.clone().removeAttr("id") : this.element;
        return n.parents("body").length || n.appendTo("parent" == i.appendTo ? this.element[0].parentNode : i.appendTo), n[0] == this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
    }, _adjustOffsetFromHelper: function (t) {
        "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {left: +t[0], top: +t[1] || 0}), "left"in t && (this.offset.click.left = t.left + this.margins.left), "right"in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top"in t && (this.offset.click.top = t.top + this.margins.top), "bottom"in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
    }, _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent();
        var t = this.offsetParent.offset();
        return"absolute" == this.cssPosition && this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && e.browser.msie) && (t = {top: 0, left: 0}), {top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
    }, _getRelativeOffset: function () {
        if ("relative" == this.cssPosition) {
            var e = this.element.position();
            return{top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
        }
        return{top: 0, left: 0}
    }, _cacheMargins: function () {
        this.margins = {left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0}
    }, _cacheHelperProportions: function () {
        this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
    }, _setContainment: function () {
        var t = this.options;
        if ("parent" == t.containment && (t.containment = this.helper[0].parentNode), ("document" == t.containment || "window" == t.containment) && (this.containment = ["document" == t.containment ? 0 : e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" == t.containment ? 0 : e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" == t.containment ? 0 : e(window).scrollLeft()) + e("document" == t.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" == t.containment ? 0 : e(window).scrollTop()) + (e("document" == t.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(t.containment) || t.containment.constructor == Array)t.containment.constructor == Array && (this.containment = t.containment); else {
            var i = e(t.containment), n = i[0];
            if (!n)return;
            i.offset();
            var r = "hidden" != e(n).css("overflow");
            this.containment = [(parseInt(e(n).css("borderLeftWidth"), 10) || 0) + (parseInt(e(n).css("paddingLeft"), 10) || 0), (parseInt(e(n).css("borderTopWidth"), 10) || 0) + (parseInt(e(n).css("paddingTop"), 10) || 0), (r ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(e(n).css("borderLeftWidth"), 10) || 0) - (parseInt(e(n).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (r ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(e(n).css("borderTopWidth"), 10) || 0) - (parseInt(e(n).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i
        }
    }, _convertPositionTo: function (t, i) {
        i || (i = this.position);
        var n = "absolute" == t ? 1 : -1, r = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent), s = /(html|body)/i.test(r[0].tagName);
        return{top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - (e.browser.safari && 526 > e.browser.version && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : r.scrollTop()) * n), left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - (e.browser.safari && 526 > e.browser.version && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : r.scrollLeft()) * n)}
    }, _generatePosition: function (t) {
        var i = this.options, n = "absolute" != this.cssPosition || this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, r = /(html|body)/i.test(n[0].tagName), s = t.pageX, a = t.pageY;
        if (this.originalPosition) {
            var o;
            if (this.containment) {
                if (this.relative_container) {
                    var l = this.relative_container.offset();
                    o = [this.containment[0] + l.left, this.containment[1] + l.top, this.containment[2] + l.left, this.containment[3] + l.top]
                } else o = this.containment;
                t.pageX - this.offset.click.left < o[0] && (s = o[0] + this.offset.click.left), t.pageY - this.offset.click.top < o[1] && (a = o[1] + this.offset.click.top), t.pageX - this.offset.click.left > o[2] && (s = o[2] + this.offset.click.left), t.pageY - this.offset.click.top > o[3] && (a = o[3] + this.offset.click.top)
            }
            if (i.grid) {
                var c = i.grid[1] ? this.originalPageY + Math.round((a - this.originalPageY) / i.grid[1]) * i.grid[1] : this.originalPageY;
                a = o ? c - this.offset.click.top < o[1] || c - this.offset.click.top > o[3] ? c - this.offset.click.top < o[1] ? c + i.grid[1] : c - i.grid[1] : c : c;
                var u = i.grid[0] ? this.originalPageX + Math.round((s - this.originalPageX) / i.grid[0]) * i.grid[0] : this.originalPageX;
                s = o ? u - this.offset.click.left < o[0] || u - this.offset.click.left > o[2] ? u - this.offset.click.left < o[0] ? u + i.grid[0] : u - i.grid[0] : u : u
            }
        }
        return{top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (e.browser.safari && 526 > e.browser.version && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : n.scrollTop()), left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (e.browser.safari && 526 > e.browser.version && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : n.scrollLeft())}
    }, _clear: function () {
        this.helper.removeClass("ui-draggable-dragging"), this.helper[0] == this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
    }, _trigger: function (t, i, n) {
        return n = n || this._uiHash(), e.ui.plugin.call(this, t, [i, n]), "drag" == t && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, i, n)
    }, plugins: {}, _uiHash: function () {
        return{helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs}
    }}), e.extend(e.ui.draggable, {version: "1.8.24"}), e.ui.plugin.add("draggable", "connectToSortable", {start: function (t, i) {
        var n = e(this).data("draggable"), r = n.options, s = e.extend({}, i, {item: n.element});
        n.sortables = [], e(r.connectToSortable).each(function () {
            var i = e.data(this, "sortable");
            i && !i.options.disabled && (n.sortables.push({instance: i, shouldRevert: i.options.revert}), i.refreshPositions(), i._trigger("activate", t, s))
        })
    }, stop: function (t, i) {
        var n = e(this).data("draggable"), r = e.extend({}, i, {item: n.element});
        e.each(n.sortables, function () {
            this.instance.isOver ? (this.instance.isOver = 0, n.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" == n.options.helper && this.instance.currentItem.css({top: "auto", left: "auto"})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, r))
        })
    }, drag: function (t, i) {
        var n = e(this).data("draggable"), r = this;
        e.each(n.sortables, function () {
            this.instance.positionAbs = n.positionAbs, this.instance.helperProportions = n.helperProportions, this.instance.offset.click = n.offset.click, this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(r).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                return i.helper[0]
            }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = n.offset.click.top, this.instance.offset.click.left = n.offset.click.left, this.instance.offset.parent.left -= n.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= n.offset.parent.top - this.instance.offset.parent.top, n._trigger("toSortable", t), n.dropped = this.instance.element, n.currentItem = n.element, this.instance.fromOutside = n), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), n._trigger("fromSortable", t), n.dropped = !1)
        })
    }}), e.ui.plugin.add("draggable", "cursor", {start: function () {
        var t = e("body"), i = e(this).data("draggable").options;
        t.css("cursor") && (i._cursor = t.css("cursor")), t.css("cursor", i.cursor)
    }, stop: function () {
        var t = e(this).data("draggable").options;
        t._cursor && e("body").css("cursor", t._cursor)
    }}), e.ui.plugin.add("draggable", "opacity", {start: function (t, i) {
        var n = e(i.helper), r = e(this).data("draggable").options;
        n.css("opacity") && (r._opacity = n.css("opacity")), n.css("opacity", r.opacity)
    }, stop: function (t, i) {
        var n = e(this).data("draggable").options;
        n._opacity && e(i.helper).css("opacity", n._opacity)
    }}), e.ui.plugin.add("draggable", "scroll", {start: function () {
        var t = e(this).data("draggable");
        t.scrollParent[0] != document && "HTML" != t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset())
    }, drag: function (t) {
        var i = e(this).data("draggable"), n = i.options, r = !1;
        i.scrollParent[0] != document && "HTML" != i.scrollParent[0].tagName ? (n.axis && "x" == n.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - t.pageY < n.scrollSensitivity ? i.scrollParent[0].scrollTop = r = i.scrollParent[0].scrollTop + n.scrollSpeed : t.pageY - i.overflowOffset.top < n.scrollSensitivity && (i.scrollParent[0].scrollTop = r = i.scrollParent[0].scrollTop - n.scrollSpeed)), n.axis && "y" == n.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - t.pageX < n.scrollSensitivity ? i.scrollParent[0].scrollLeft = r = i.scrollParent[0].scrollLeft + n.scrollSpeed : t.pageX - i.overflowOffset.left < n.scrollSensitivity && (i.scrollParent[0].scrollLeft = r = i.scrollParent[0].scrollLeft - n.scrollSpeed))) : (n.axis && "x" == n.axis || (t.pageY - e(document).scrollTop() < n.scrollSensitivity ? r = e(document).scrollTop(e(document).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < n.scrollSensitivity && (r = e(document).scrollTop(e(document).scrollTop() + n.scrollSpeed))), n.axis && "y" == n.axis || (t.pageX - e(document).scrollLeft() < n.scrollSensitivity ? r = e(document).scrollLeft(e(document).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < n.scrollSensitivity && (r = e(document).scrollLeft(e(document).scrollLeft() + n.scrollSpeed)))), r !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(i, t)
    }}), e.ui.plugin.add("draggable", "snap", {start: function () {
        var t = e(this).data("draggable"), i = t.options;
        t.snapElements = [], e(i.snap.constructor != String ? i.snap.items || ":data(draggable)" : i.snap).each(function () {
            var i = e(this), n = i.offset();
            this != t.element[0] && t.snapElements.push({item: this, width: i.outerWidth(), height: i.outerHeight(), top: n.top, left: n.left})
        })
    }, drag: function (t, i) {
        for (var n = e(this).data("draggable"), r = n.options, s = r.snapTolerance, a = i.offset.left, o = a + n.helperProportions.width, l = i.offset.top, c = l + n.helperProportions.height, u = n.snapElements.length - 1; u >= 0; u--) {
            var d = n.snapElements[u].left, h = d + n.snapElements[u].width, p = n.snapElements[u].top, f = p + n.snapElements[u].height;
            if (a > d - s && h + s > a && l > p - s && f + s > l || a > d - s && h + s > a && c > p - s && f + s > c || o > d - s && h + s > o && l > p - s && f + s > l || o > d - s && h + s > o && c > p - s && f + s > c) {
                if ("inner" != r.snapMode) {
                    var g = s >= Math.abs(p - c), m = s >= Math.abs(f - l), y = s >= Math.abs(d - o), v = s >= Math.abs(h - a);
                    g && (i.position.top = n._convertPositionTo("relative", {top: p - n.helperProportions.height, left: 0}).top - n.margins.top), m && (i.position.top = n._convertPositionTo("relative", {top: f, left: 0}).top - n.margins.top), y && (i.position.left = n._convertPositionTo("relative", {top: 0, left: d - n.helperProportions.width}).left - n.margins.left), v && (i.position.left = n._convertPositionTo("relative", {top: 0, left: h}).left - n.margins.left)
                }
                var b = g || m || y || v;
                if ("outer" != r.snapMode) {
                    var g = s >= Math.abs(p - l), m = s >= Math.abs(f - c), y = s >= Math.abs(d - a), v = s >= Math.abs(h - o);
                    g && (i.position.top = n._convertPositionTo("relative", {top: p, left: 0}).top - n.margins.top), m && (i.position.top = n._convertPositionTo("relative", {top: f - n.helperProportions.height, left: 0}).top - n.margins.top), y && (i.position.left = n._convertPositionTo("relative", {top: 0, left: d}).left - n.margins.left), v && (i.position.left = n._convertPositionTo("relative", {top: 0, left: h - n.helperProportions.width}).left - n.margins.left)
                }
                !n.snapElements[u].snapping && (g || m || y || v || b) && n.options.snap.snap && n.options.snap.snap.call(n.element, t, e.extend(n._uiHash(), {snapItem: n.snapElements[u].item})), n.snapElements[u].snapping = g || m || y || v || b
            } else n.snapElements[u].snapping && n.options.snap.release && n.options.snap.release.call(n.element, t, e.extend(n._uiHash(), {snapItem: n.snapElements[u].item})), n.snapElements[u].snapping = !1
        }
    }}), e.ui.plugin.add("draggable", "stack", {start: function () {
        var t = e(this).data("draggable").options, i = e.makeArray(e(t.stack)).sort(function (t, i) {
            return(parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
        });
        if (i.length) {
            var n = parseInt(i[0].style.zIndex) || 0;
            e(i).each(function (e) {
                this.style.zIndex = n + e
            }), this[0].style.zIndex = n + i.length
        }
    }}), e.ui.plugin.add("draggable", "zIndex", {start: function (t, i) {
        var n = e(i.helper), r = e(this).data("draggable").options;
        n.css("zIndex") && (r._zIndex = n.css("zIndex")), n.css("zIndex", r.zIndex)
    }, stop: function (t, i) {
        var n = e(this).data("draggable").options;
        n._zIndex && e(i.helper).css("zIndex", n._zIndex)
    }})
}(jQuery), function (e) {
    e.widget("ui.sortable", e.ui.mouse, {widgetEventPrefix: "sort", ready: !1, options: {appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3}, _create: function () {
        var e = this.options;
        this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === e.axis || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
    }, destroy: function () {
        e.Widget.prototype.destroy.call(this), this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
        for (var t = this.items.length - 1; t >= 0; t--)this.items[t].item.removeData(this.widgetName + "-item");
        return this
    }, _setOption: function (t, i) {
        "disabled" === t ? (this.options[t] = i, this.widget()[i ? "addClass" : "removeClass"]("ui-sortable-disabled")) : e.Widget.prototype._setOption.apply(this, arguments)
    }, _mouseCapture: function (t, i) {
        var n = this;
        if (this.reverting)return!1;
        if (this.options.disabled || "static" == this.options.type)return!1;
        this._refreshItems(t);
        var r = null, s = this;
        if (e(t.target).parents().each(function () {
            return e.data(this, n.widgetName + "-item") == s ? (r = e(this), !1) : undefined
        }), e.data(t.target, n.widgetName + "-item") == s && (r = e(t.target)), !r)return!1;
        if (this.options.handle && !i) {
            var a = !1;
            if (e(this.options.handle, r).find("*").andSelf().each(function () {
                this == t.target && (a = !0)
            }), !a)return!1
        }
        return this.currentItem = r, this._removeCurrentsFromItems(), !0
    }, _mouseStart: function (t, i, n) {
        var r = this.options, s = this;
        if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left}, e.extend(this.offset, {click: {left: t.pageX - this.offset.left, top: t.pageY - this.offset.top}, parent: this._getParentOffset(), relative: this._getRelativeOffset()}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), this.domPosition = {prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0]}, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), r.containment && this._setContainment(), r.cursor && (e("body").css("cursor") && (this._storedCursor = e("body").css("cursor")), e("body").css("cursor", r.cursor)), r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", r.opacity)), r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", r.zIndex)), this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)for (var a = this.containers.length - 1; a >= 0; a--)this.containers[a]._trigger("activate", t, s._uiHash(this));
        return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
    }, _mouseDrag: function (t) {
        if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll) {
            var i = this.options, n = !1;
            this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = n = this.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = n = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = n = this.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = n = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (t.pageY - e(document).scrollTop() < i.scrollSensitivity ? n = e(document).scrollTop(e(document).scrollTop() - i.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < i.scrollSensitivity && (n = e(document).scrollTop(e(document).scrollTop() + i.scrollSpeed)), t.pageX - e(document).scrollLeft() < i.scrollSensitivity ? n = e(document).scrollLeft(e(document).scrollLeft() - i.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < i.scrollSensitivity && (n = e(document).scrollLeft(e(document).scrollLeft() + i.scrollSpeed))), n !== !1 && e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)
        }
        this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px");
        for (var r = this.items.length - 1; r >= 0; r--) {
            var s = this.items[r], a = s.item[0], o = this._intersectsWithPointer(s);
            if (o && s.instance === this.currentContainer && a != this.currentItem[0] && this.placeholder[1 == o ? "next" : "prev"]()[0] != a && !e.ui.contains(this.placeholder[0], a) && ("semi-dynamic" == this.options.type ? !e.ui.contains(this.element[0], a) : !0)) {
                if (this.direction = 1 == o ? "down" : "up", "pointer" != this.options.tolerance && !this._intersectsWithSides(s))break;
                this._rearrange(t, s), this._trigger("change", t, this._uiHash());
                break
            }
        }
        return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
    }, _mouseStop: function (t, i) {
        if (t) {
            if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                var n = this, r = n.placeholder.offset();
                n.reverting = !0, e(this.helper).animate({left: r.left - this.offset.parent.left - n.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft), top: r.top - this.offset.parent.top - n.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)}, parseInt(this.options.revert, 10) || 500, function () {
                    n._clear(t)
                })
            } else this._clear(t, i);
            return!1
        }
    }, cancel: function () {
        var t = this;
        if (this.dragging) {
            this._mouseUp({target: null}), "original" == this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
            for (var i = this.containers.length - 1; i >= 0; i--)this.containers[i]._trigger("deactivate", null, t._uiHash(this)), this.containers[i].containerCache.over && (this.containers[i]._trigger("out", null, t._uiHash(this)), this.containers[i].containerCache.over = 0)
        }
        return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" != this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {helper: null, dragging: !1, reverting: !1, _noFinalSort: null}), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
    }, serialize: function (t) {
        var i = this._getItemsAsjQuery(t && t.connected), n = [];
        return t = t || {}, e(i).each(function () {
            var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[-=_](.+)/);
            i && n.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2]))
        }), !n.length && t.key && n.push(t.key + "="), n.join("&")
    }, toArray: function (t) {
        var i = this._getItemsAsjQuery(t && t.connected), n = [];
        return t = t || {}, i.each(function () {
            n.push(e(t.item || this).attr(t.attribute || "id") || "")
        }), n
    }, _intersectsWith: function (e) {
        var t = this.positionAbs.left, i = t + this.helperProportions.width, n = this.positionAbs.top, r = n + this.helperProportions.height, s = e.left, a = s + e.width, o = e.top, l = o + e.height, c = this.offset.click.top, u = this.offset.click.left, d = n + c > o && l > n + c && t + u > s && a > t + u;
        return"pointer" == this.options.tolerance || this.options.forcePointerForContainers || "pointer" != this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? d : t + this.helperProportions.width / 2 > s && a > i - this.helperProportions.width / 2 && n + this.helperProportions.height / 2 > o && l > r - this.helperProportions.height / 2
    }, _intersectsWithPointer: function (t) {
        var i = "x" === this.options.axis || e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height), n = "y" === this.options.axis || e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width), r = i && n, s = this._getDragVerticalDirection(), a = this._getDragHorizontalDirection();
        return r ? this.floating ? a && "right" == a || "down" == s ? 2 : 1 : s && ("down" == s ? 2 : 1) : !1
    }, _intersectsWithSides: function (t) {
        var i = e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height), n = e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width), r = this._getDragVerticalDirection(), s = this._getDragHorizontalDirection();
        return this.floating && s ? "right" == s && n || "left" == s && !n : r && ("down" == r && i || "up" == r && !i)
    }, _getDragVerticalDirection: function () {
        var e = this.positionAbs.top - this.lastPositionAbs.top;
        return 0 != e && (e > 0 ? "down" : "up")
    }, _getDragHorizontalDirection: function () {
        var e = this.positionAbs.left - this.lastPositionAbs.left;
        return 0 != e && (e > 0 ? "right" : "left")
    }, refresh: function (e) {
        return this._refreshItems(e), this.refreshPositions(), this
    }, _connectWith: function () {
        var e = this.options;
        return e.connectWith.constructor == String ? [e.connectWith] : e.connectWith
    }, _getItemsAsjQuery: function (t) {
        var i = [], n = [], r = this._connectWith();
        if (r && t)for (var s = r.length - 1; s >= 0; s--)for (var a = e(r[s]), o = a.length - 1; o >= 0; o--) {
            var l = e.data(a[o], this.widgetName);
            l && l != this && !l.options.disabled && n.push([e.isFunction(l.options.items) ? l.options.items.call(l.element) : e(l.options.items, l.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), l])
        }
        n.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {options: this.options, item: this.currentItem}) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
        for (var s = n.length - 1; s >= 0; s--)n[s][0].each(function () {
            i.push(this)
        });
        return e(i)
    }, _removeCurrentsFromItems: function () {
        for (var e = this.currentItem.find(":data(" + this.widgetName + "-item)"), t = 0; this.items.length > t; t++)for (var i = 0; e.length > i; i++)e[i] == this.items[t].item[0] && this.items.splice(t, 1)
    }, _refreshItems: function (t) {
        this.items = [], this.containers = [this];
        var i = this.items, n = [
            [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {item: this.currentItem}) : e(this.options.items, this.element), this]
        ], r = this._connectWith();
        if (r && this.ready)for (var s = r.length - 1; s >= 0; s--)for (var a = e(r[s]), o = a.length - 1; o >= 0; o--) {
            var l = e.data(a[o], this.widgetName);
            l && l != this && !l.options.disabled && (n.push([e.isFunction(l.options.items) ? l.options.items.call(l.element[0], t, {item: this.currentItem}) : e(l.options.items, l.element), l]), this.containers.push(l))
        }
        for (var s = n.length - 1; s >= 0; s--)for (var c = n[s][1], u = n[s][0], o = 0, d = u.length; d > o; o++) {
            var h = e(u[o]);
            h.data(this.widgetName + "-item", c), i.push({item: h, instance: c, width: 0, height: 0, left: 0, top: 0})
        }
    }, refreshPositions: function (t) {
        this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
        for (var i = this.items.length - 1; i >= 0; i--) {
            var n = this.items[i];
            if (n.instance == this.currentContainer || !this.currentContainer || n.item[0] == this.currentItem[0]) {
                var r = this.options.toleranceElement ? e(this.options.toleranceElement, n.item) : n.item;
                t || (n.width = r.outerWidth(), n.height = r.outerHeight());
                var s = r.offset();
                n.left = s.left, n.top = s.top
            }
        }
        if (this.options.custom && this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this); else for (var i = this.containers.length - 1; i >= 0; i--) {
            var s = this.containers[i].element.offset();
            this.containers[i].containerCache.left = s.left, this.containers[i].containerCache.top = s.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight()
        }
        return this
    }, _createPlaceholder: function (t) {
        var i = t || this, n = i.options;
        if (!n.placeholder || n.placeholder.constructor == String) {
            var r = n.placeholder;
            n.placeholder = {element: function () {
                var t = e(document.createElement(i.currentItem[0].nodeName)).addClass(r || i.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                return r || (t.style.visibility = "hidden"), t
            }, update: function (e, t) {
                (!r || n.forcePlaceholderSize) && (t.height() || t.height(i.currentItem.innerHeight() - parseInt(i.currentItem.css("paddingTop") || 0, 10) - parseInt(i.currentItem.css("paddingBottom") || 0, 10)), t.width() || t.width(i.currentItem.innerWidth() - parseInt(i.currentItem.css("paddingLeft") || 0, 10) - parseInt(i.currentItem.css("paddingRight") || 0, 10)))
            }}
        }
        i.placeholder = e(n.placeholder.element.call(i.element, i.currentItem)), i.currentItem.after(i.placeholder), n.placeholder.update(i, i.placeholder)
    }, _contactContainers: function (t) {
        for (var i = null, n = null, r = this.containers.length - 1; r >= 0; r--)if (!e.ui.contains(this.currentItem[0], this.containers[r].element[0]))if (this._intersectsWith(this.containers[r].containerCache)) {
            if (i && e.ui.contains(this.containers[r].element[0], i.element[0]))continue;
            i = this.containers[r], n = r
        } else this.containers[r].containerCache.over && (this.containers[r]._trigger("out", t, this._uiHash(this)), this.containers[r].containerCache.over = 0);
        if (i)if (1 === this.containers.length)this.containers[n]._trigger("over", t, this._uiHash(this)), this.containers[n].containerCache.over = 1; else if (this.currentContainer != this.containers[n]) {
            for (var s = 1e4, a = null, o = this.positionAbs[this.containers[n].floating ? "left" : "top"], l = this.items.length - 1; l >= 0; l--)if (e.ui.contains(this.containers[n].element[0], this.items[l].item[0])) {
                var c = this.containers[n].floating ? this.items[l].item.offset().left : this.items[l].item.offset().top;
                s > Math.abs(c - o) && (s = Math.abs(c - o), a = this.items[l], this.direction = c - o > 0 ? "down" : "up")
            }
            if (!a && !this.options.dropOnEmpty)return;
            this.currentContainer = this.containers[n], a ? this._rearrange(t, a, null, !0) : this._rearrange(t, null, this.containers[n].element, !0), this._trigger("change", t, this._uiHash()), this.containers[n]._trigger("change", t, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[n]._trigger("over", t, this._uiHash(this)), this.containers[n].containerCache.over = 1
        }
    }, _createHelper: function (t) {
        var i = this.options, n = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : "clone" == i.helper ? this.currentItem.clone() : this.currentItem;
        return n.parents("body").length || e("parent" != i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] == this.currentItem[0] && (this._storedCSS = {width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left")}), ("" == n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()), ("" == n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()), n
    }, _adjustOffsetFromHelper: function (t) {
        "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {left: +t[0], top: +t[1] || 0}), "left"in t && (this.offset.click.left = t.left + this.margins.left), "right"in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top"in t && (this.offset.click.top = t.top + this.margins.top), "bottom"in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
    }, _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent();
        var t = this.offsetParent.offset();
        return"absolute" == this.cssPosition && this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && e.browser.msie) && (t = {top: 0, left: 0}), {top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
    }, _getRelativeOffset: function () {
        if ("relative" == this.cssPosition) {
            var e = this.currentItem.position();
            return{top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
        }
        return{top: 0, left: 0}
    }, _cacheMargins: function () {
        this.margins = {left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0}
    }, _cacheHelperProportions: function () {
        this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
    }, _setContainment: function () {
        var t = this.options;
        if ("parent" == t.containment && (t.containment = this.helper[0].parentNode), ("document" == t.containment || "window" == t.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e("document" == t.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (e("document" == t.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), !/^(document|window|parent)$/.test(t.containment)) {
            var i = e(t.containment)[0], n = e(t.containment).offset(), r = "hidden" != e(i).css("overflow");
            this.containment = [n.left + (parseInt(e(i).css("borderLeftWidth"), 10) || 0) + (parseInt(e(i).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(e(i).css("borderTopWidth"), 10) || 0) + (parseInt(e(i).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (r ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(e(i).css("borderLeftWidth"), 10) || 0) - (parseInt(e(i).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (r ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(e(i).css("borderTopWidth"), 10) || 0) - (parseInt(e(i).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
        }
    }, _convertPositionTo: function (t, i) {
        i || (i = this.position);
        var n = "absolute" == t ? 1 : -1, r = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent), s = /(html|body)/i.test(r[0].tagName);
        return{top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - (e.browser.safari && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : r.scrollTop()) * n), left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - (e.browser.safari && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : r.scrollLeft()) * n)}
    }, _generatePosition: function (t) {
        var i = this.options, n = "absolute" != this.cssPosition || this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, r = /(html|body)/i.test(n[0].tagName);
        "relative" != this.cssPosition || this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset());
        var s = t.pageX, a = t.pageY;
        if (this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), i.grid)) {
            var o = this.originalPageY + Math.round((a - this.originalPageY) / i.grid[1]) * i.grid[1];
            a = this.containment ? o - this.offset.click.top < this.containment[1] || o - this.offset.click.top > this.containment[3] ? o - this.offset.click.top < this.containment[1] ? o + i.grid[1] : o - i.grid[1] : o : o;
            var l = this.originalPageX + Math.round((s - this.originalPageX) / i.grid[0]) * i.grid[0];
            s = this.containment ? l - this.offset.click.left < this.containment[0] || l - this.offset.click.left > this.containment[2] ? l - this.offset.click.left < this.containment[0] ? l + i.grid[0] : l - i.grid[0] : l : l
        }
        return{top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (e.browser.safari && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : n.scrollTop()), left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (e.browser.safari && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : n.scrollLeft())}
    }, _rearrange: function (e, t, i, n) {
        i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" == this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
        var r = this, s = this.counter;
        window.setTimeout(function () {
            s == r.counter && r.refreshPositions(!n)
        }, 0)
    }, _clear: function (t, i) {
        this.reverting = !1;
        var n = [];
        if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] == this.currentItem[0]) {
            for (var r in this._storedCSS)("auto" == this._storedCSS[r] || "static" == this._storedCSS[r]) && (this._storedCSS[r] = "");
            this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
        } else this.currentItem.show();
        this.fromOutside && !i && n.push(function (e) {
            this._trigger("receive", e, this._uiHash(this.fromOutside))
        }), !this.fromOutside && this.domPosition.prev == this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent == this.currentItem.parent()[0] || i || n.push(function (e) {
            this._trigger("update", e, this._uiHash())
        }), this !== this.currentContainer && (i || (n.push(function (e) {
            this._trigger("remove", e, this._uiHash())
        }), n.push(function (e) {
            return function (t) {
                e._trigger("receive", t, this._uiHash(this))
            }
        }.call(this, this.currentContainer)), n.push(function (e) {
            return function (t) {
                e._trigger("update", t, this._uiHash(this))
            }
        }.call(this, this.currentContainer))));
        for (var r = this.containers.length - 1; r >= 0; r--)i || n.push(function (e) {
            return function (t) {
                e._trigger("deactivate", t, this._uiHash(this))
            }
        }.call(this, this.containers[r])), this.containers[r].containerCache.over && (n.push(function (e) {
            return function (t) {
                e._trigger("out", t, this._uiHash(this))
            }
        }.call(this, this.containers[r])), this.containers[r].containerCache.over = 0);
        if (this._storedCursor && e("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" == this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
            if (!i) {
                this._trigger("beforeStop", t, this._uiHash());
                for (var r = 0; n.length > r; r++)n[r].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !1
        }
        if (i || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null, !i) {
            for (var r = 0; n.length > r; r++)n[r].call(this, t);
            this._trigger("stop", t, this._uiHash())
        }
        return this.fromOutside = !1, !0
    }, _trigger: function () {
        e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
    }, _uiHash: function (t) {
        var i = t || this;
        return{helper: i.helper, placeholder: i.placeholder || e([]), position: i.position, originalPosition: i.originalPosition, offset: i.positionAbs, item: i.currentItem, sender: t ? t.element : null}
    }}), e.extend(e.ui.sortable, {version: "1.8.24"})
}(jQuery), window.Raphael && (Raphael.shadow = function (e, t, i, n, r) {
    r = r || {};
    var s, a, o, l = jQuery(r.target), c = jQuery("<div/>", {"class": "aui-shadow"}), u = r.shadow || r.color || "#000", d = 10 * r.size || 0, h = r.offsetSize || 3, p = r.zindex || 0, f = r.radius || 0, g = "0.4", m = r.blur || 3;
    return i += d + 2 * m, n += d + 2 * m, Raphael.shadow.BOX_SHADOW_SUPPORT ? (l.addClass("aui-box-shadow"), c.addClass("hidden")) : (0 === e && 0 === t && l.length > 0 && (o = l.offset(), e = h - m + o.left, t = h - m + o.top), jQuery.browser.msie && "9" > jQuery.browser.version && (u = "#f0f0f0", g = "0.2"), c.css({position: "absolute", left: e, top: t, width: i, height: n, zIndex: p}), l.length > 0 ? (c.appendTo(document.body), s = Raphael(c[0], i, n, f)) : s = Raphael(e, t, i, n, f), s.canvas.style.position = "absolute", a = s.rect(m, m, i - 2 * m, n - 2 * m).attr({fill: u, stroke: u, blur: "" + m, opacity: g}), c)
}, Raphael.shadow.BOX_SHADOW_SUPPORT = function () {
    for (var e = document.documentElement.style, t = ["boxShadow", "MozBoxShadow", "WebkitBoxShadow", "msBoxShadow"], i = 0; t.length > i; i++)if (t[i]in e)return!0;
    return!1
}()), jQuery.os = {};
var jQueryOSplatform = navigator.platform.toLowerCase();
jQuery.os.windows = -1 != jQueryOSplatform.indexOf("win"), jQuery.os.mac = -1 != jQueryOSplatform.indexOf("mac"), jQuery.os.linux = -1 != jQueryOSplatform.indexOf("linux"), function (e) {
    function t(e) {
        this.num = 0, this.timer = e > 0 ? e : !1
    }

    function i(i) {
        if (e.isPlainObject(i.data) || e.isArray(i.data) || "string" == typeof i.data) {
            var r = i.handler, s = {timer: 700};
            (function (t) {
                "string" == typeof t ? s.combo = [t] : e.isArray(t) ? s.combo = t : e.extend(s, t), s.combo = e.map(s.combo, function (e) {
                    return e.toLowerCase()
                })
            })(i.data), i.index = new t(s.timer), i.handler = function (t) {
                if (this === t.target || !/textarea|select|input/i.test(t.target.nodeName)) {
                    var a = "keypress" !== t.type ? e.hotkeys.specialKeys[t.which] : null, o = String.fromCharCode(t.which).toLowerCase(), l = "", c = {};
                    t.altKey && "alt" !== a && (l += "alt+"), t.ctrlKey && "ctrl" !== a && (l += "ctrl+"), t.metaKey && !t.ctrlKey && "meta" !== a && (l += "meta+"), t.shiftKey && "shift" !== a && (l += "shift+"), a && (c[l + a] = !0), o && (c[l + o] = !0), /shift+/.test(l) && (c[l.replace("shift+", "") + e.hotkeys.shiftNums[a || o]] = !0);
                    var u = i.index, d = s.combo;
                    if (n(d[u.val()], c)) {
                        if (u.val() === d.length - 1)return u.reset(), r.apply(this, arguments);
                        u.inc()
                    } else u.reset(), n(d[0], c) && u.inc()
                }
            }
        }
    }

    function n(e, t) {
        for (var i = e.split(" "), n = 0, r = i.length; r > n; n++)if (t[i[n]])return!0;
        return!1
    }

    e.hotkeys = {version: "0.8", specialKeys: {8: "backspace", 9: "tab", 13: "return", 16: "shift", 17: "ctrl", 18: "alt", 19: "pause", 20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home", 37: "left", 38: "up", 39: "right", 40: "down", 45: "insert", 46: "del", 91: "meta", 96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7", 104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111: "/", 112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8", 120: "f9", 121: "f10", 122: "f11", 123: "f12", 144: "numlock", 145: "scroll", 188: ",", 190: ".", 191: "/", 224: "meta", 219: "[", 221: "]"}, keypressKeys: ["<", ">", "?"], shiftNums: {"`": "~", 1: "!", 2: "@", 3: "#", 4: "$", 5: "%", 6: "^", 7: "&", 8: "*", 9: "(", 0: ")", "-": "_", "=": "+", ";": ":", "'": '"', ",": "<", ".": ">", "/": "?", "\\": "|"}}, e.each(e.hotkeys.keypressKeys, function (t, i) {
        e.hotkeys.shiftNums[i] = i
    }), t.prototype.val = function () {
        return this.num
    }, t.prototype.inc = function () {
        this.timer && (clearTimeout(this.timeout), this.timeout = setTimeout(e.proxy(t.prototype.reset, this), this.timer)), this.num++
    }, t.prototype.reset = function () {
        this.timer && clearTimeout(this.timeout), this.num = 0
    }, e.each(["keydown", "keyup", "keypress"], function () {
        e.event.special[this] = {add: i}
    })
}(jQuery), jQuery.fn.moveTo = function (e) {
    var t, i = {transition: !1, scrollOffset: 35}, n = jQuery.extend(i, e), r = this, s = r.offset().top;
    if ((s > jQuery(window).scrollTop() + jQuery(window).height() - this.outerHeight() || jQuery(window).scrollTop() + n.scrollOffset > s) && jQuery(window).height() > n.scrollOffset) {
        if (t = jQuery(window).scrollTop() + n.scrollOffset > s ? s - (jQuery(window).height() - this.outerHeight()) + n.scrollOffset : s - n.scrollOffset, !jQuery.fn.moveTo.animating && n.transition)return jQuery(document).trigger("moveToStarted", this), jQuery.fn.moveTo.animating = !0, jQuery("html,body").animate({scrollTop: t}, 1e3, function () {
            jQuery(document).trigger("moveToFinished", r), delete jQuery.fn.moveTo.animating
        }), this;
        var a = jQuery("html, body");
        return a.is(":animated") && (a.stop(), delete jQuery.fn.moveTo.animating), jQuery(document).trigger("moveToStarted"), jQuery(window).scrollTop(t), setTimeout(function () {
            jQuery(document).trigger("moveToFinished", r)
        }, 100), this
    }
    return jQuery(document).trigger("moveToFinished", this), this
}, function ($, undefined) {
    function Datepicker() {
        this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: ""}, this._defaults = {showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1}, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
    }

    function bindHover(e) {
        var t = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.bind("mouseout",function (e) {
            var i = $(e.target).closest(t);
            i.length && i.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
        }).bind("mouseover", function (i) {
            var n = $(i.target).closest(t);
            !$.datepicker._isDisabledDatepicker(instActive.inline ? e.parent()[0] : instActive.input[0]) && n.length && (n.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), n.addClass("ui-state-hover"), n.hasClass("ui-datepicker-prev") && n.addClass("ui-datepicker-prev-hover"), n.hasClass("ui-datepicker-next") && n.addClass("ui-datepicker-next-hover"))
        })
    }

    function extendRemove(e, t) {
        $.extend(e, t);
        for (var i in t)(null == t[i] || t[i] == undefined) && (e[i] = t[i]);
        return e
    }

    function isArray(e) {
        return e && ($.browser.safari && "object" == typeof e && e.length || e.constructor && ("" + e.constructor).match(/\Array\(\)/))
    }

    $.extend($.ui, {datepicker: {version: "1.8.24"}});
    var PROP_NAME = "datepicker", dpuuid = (new Date).getTime(), instActive;
    $.extend(Datepicker.prototype, {markerClassName: "hasDatepicker", maxRows: 4, log: function () {
        this.debug && console.log.apply("", arguments)
    }, _widgetDatepicker: function () {
        return this.dpDiv
    }, setDefaults: function (e) {
        return extendRemove(this._defaults, e || {}), this
    }, _attachDatepicker: function (target, settings) {
        var inlineSettings = null;
        for (var attrName in this._defaults) {
            var attrValue = target.getAttribute("date:" + attrName);
            if (attrValue) {
                inlineSettings = inlineSettings || {};
                try {
                    inlineSettings[attrName] = eval(attrValue)
                } catch (err) {
                    inlineSettings[attrName] = attrValue
                }
            }
        }
        var nodeName = target.nodeName.toLowerCase(), inline = "div" == nodeName || "span" == nodeName;
        target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
        var inst = this._newInst($(target), inline);
        inst.settings = $.extend({}, settings || {}, inlineSettings || {}), "input" == nodeName ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
    }, _newInst: function (e, t) {
        var i = e[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
        return{id: i, input: e, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: t, dpDiv: t ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv}
    }, _connectDatepicker: function (e, t) {
        var i = $(e);
        t.append = $([]), t.trigger = $([]), i.hasClass(this.markerClassName) || (this._attachments(i, t), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function (e, i, n) {
            t.settings[i] = n
        }).bind("getData.datepicker", function (e, i) {
            return this._get(t, i)
        }), this._autoSize(t), $.data(e, PROP_NAME, t), t.settings.disabled && this._disableDatepicker(e))
    }, _attachments: function (e, t) {
        var i = this._get(t, "appendText"), n = this._get(t, "isRTL");
        t.append && t.append.remove(), i && (t.append = $('<span class="' + this._appendClass + '">' + i + "</span>"), e[n ? "before" : "after"](t.append)), e.unbind("focus", this._showDatepicker), t.trigger && t.trigger.remove();
        var r = this._get(t, "showOn");
        if (("focus" == r || "both" == r) && e.focus(this._showDatepicker), "button" == r || "both" == r) {
            var s = this._get(t, "buttonText"), a = this._get(t, "buttonImage");
            t.trigger = $(this._get(t, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({src: a, alt: s, title: s}) : $('<button type="button"></button>').addClass(this._triggerClass).html("" == a ? s : $("<img/>").attr({src: a, alt: s, title: s}))), e[n ? "before" : "after"](t.trigger), t.trigger.click(function () {
                return $.datepicker._datepickerShowing && $.datepicker._lastInput == e[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput != e[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(e[0])) : $.datepicker._showDatepicker(e[0]), !1
            })
        }
    }, _autoSize: function (e) {
        if (this._get(e, "autoSize") && !e.inline) {
            var t = new Date(2009, 11, 20), i = this._get(e, "dateFormat");
            if (i.match(/[DM]/)) {
                var n = function (e) {
                    for (var t = 0, i = 0, n = 0; e.length > n; n++)e[n].length > t && (t = e[n].length, i = n);
                    return i
                };
                t.setMonth(n(this._get(e, i.match(/MM/) ? "monthNames" : "monthNamesShort"))), t.setDate(n(this._get(e, i.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - t.getDay())
            }
            e.input.attr("size", this._formatDate(e, t).length)
        }
    }, _inlineDatepicker: function (e, t) {
        var i = $(e);
        i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(t.dpDiv).bind("setData.datepicker",function (e, i, n) {
            t.settings[i] = n
        }).bind("getData.datepicker", function (e, i) {
            return this._get(t, i)
        }), $.data(e, PROP_NAME, t), this._setDate(t, this._getDefaultDate(t), !0), this._updateDatepicker(t), this._updateAlternate(t), t.settings.disabled && this._disableDatepicker(e), t.dpDiv.css("display", "block"))
    }, _dialogDatepicker: function (e, t, i, n, r) {
        var s = this._dialogInst;
        if (!s) {
            this.uuid += 1;
            var a = "dp" + this.uuid;
            this._dialogInput = $('<input type="text" id="' + a + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), s = this._dialogInst = this._newInst(this._dialogInput, !1), s.settings = {}, $.data(this._dialogInput[0], PROP_NAME, s)
        }
        if (extendRemove(s.settings, n || {}), t = t && t.constructor == Date ? this._formatDate(s, t) : t, this._dialogInput.val(t), this._pos = r ? r.length ? r : [r.pageX, r.pageY] : null, !this._pos) {
            var o = document.documentElement.clientWidth, l = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop;
            this._pos = [o / 2 - 100 + c, l / 2 - 150 + u]
        }
        return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), s.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, s), this
    }, _destroyDatepicker: function (e) {
        var t = $(e), i = $.data(e, PROP_NAME);
        if (t.hasClass(this.markerClassName)) {
            var n = e.nodeName.toLowerCase();
            $.removeData(e, PROP_NAME), "input" == n ? (i.append.remove(), i.trigger.remove(), t.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" == n || "span" == n) && t.removeClass(this.markerClassName).empty()
        }
    }, _enableDatepicker: function (e) {
        var t = $(e), i = $.data(e, PROP_NAME);
        if (t.hasClass(this.markerClassName)) {
            var n = e.nodeName.toLowerCase();
            if ("input" == n)e.disabled = !1, i.trigger.filter("button").each(function () {
                this.disabled = !1
            }).end().filter("img").css({opacity: "1.0", cursor: ""}); else if ("div" == n || "span" == n) {
                var r = t.children("." + this._inlineClass);
                r.children().removeClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")
            }
            this._disabledInputs = $.map(this._disabledInputs, function (t) {
                return t == e ? null : t
            })
        }
    }, _disableDatepicker: function (e) {
        var t = $(e), i = $.data(e, PROP_NAME);
        if (t.hasClass(this.markerClassName)) {
            var n = e.nodeName.toLowerCase();
            if ("input" == n)e.disabled = !0, i.trigger.filter("button").each(function () {
                this.disabled = !0
            }).end().filter("img").css({opacity: "0.5", cursor: "default"}); else if ("div" == n || "span" == n) {
                var r = t.children("." + this._inlineClass);
                r.children().addClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled")
            }
            this._disabledInputs = $.map(this._disabledInputs, function (t) {
                return t == e ? null : t
            }), this._disabledInputs[this._disabledInputs.length] = e
        }
    }, _isDisabledDatepicker: function (e) {
        if (!e)return!1;
        for (var t = 0; this._disabledInputs.length > t; t++)if (this._disabledInputs[t] == e)return!0;
        return!1
    }, _getInst: function (e) {
        try {
            return $.data(e, PROP_NAME)
        } catch (t) {
            throw"Missing instance data for this datepicker"
        }
    }, _optionDatepicker: function (e, t, i) {
        var n = this._getInst(e);
        if (2 == arguments.length && "string" == typeof t)return"defaults" == t ? $.extend({}, $.datepicker._defaults) : n ? "all" == t ? $.extend({}, n.settings) : this._get(n, t) : null;
        var r = t || {};
        if ("string" == typeof t && (r = {}, r[t] = i), n) {
            this._curInst == n && this._hideDatepicker();
            var s = this._getDateDatepicker(e, !0), a = this._getMinMaxDate(n, "min"), o = this._getMinMaxDate(n, "max");
            extendRemove(n.settings, r), null !== a && r.dateFormat !== undefined && r.minDate === undefined && (n.settings.minDate = this._formatDate(n, a)), null !== o && r.dateFormat !== undefined && r.maxDate === undefined && (n.settings.maxDate = this._formatDate(n, o)), this._attachments($(e), n), this._autoSize(n), this._setDate(n, s), this._updateAlternate(n), this._updateDatepicker(n)
        }
    }, _changeDatepicker: function (e, t, i) {
        this._optionDatepicker(e, t, i)
    }, _refreshDatepicker: function (e) {
        var t = this._getInst(e);
        t && this._updateDatepicker(t)
    }, _setDateDatepicker: function (e, t) {
        var i = this._getInst(e);
        i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
    }, _getDateDatepicker: function (e, t) {
        var i = this._getInst(e);
        return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
    }, _doKeyDown: function (e) {
        var t = $.datepicker._getInst(e.target), i = !0, n = t.dpDiv.is(".ui-datepicker-rtl");
        if (t._keyEvent = !0, $.datepicker._datepickerShowing)switch (e.keyCode) {
            case 9:
                $.datepicker._hideDatepicker(), i = !1;
                break;
            case 13:
                var r = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", t.dpDiv);
                r[0] && $.datepicker._selectDay(e.target, t.selectedMonth, t.selectedYear, r[0]);
                var s = $.datepicker._get(t, "onSelect");
                if (s) {
                    var a = $.datepicker._formatDate(t);
                    s.apply(t.input ? t.input[0] : null, [a, t])
                } else $.datepicker._hideDatepicker();
                return!1;
            case 27:
                $.datepicker._hideDatepicker();
                break;
            case 33:
                $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
                break;
            case 34:
                $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
                break;
            case 35:
                (e.ctrlKey || e.metaKey) && $.datepicker._clearDate(e.target), i = e.ctrlKey || e.metaKey;
                break;
            case 36:
                (e.ctrlKey || e.metaKey) && $.datepicker._gotoToday(e.target), i = e.ctrlKey || e.metaKey;
                break;
            case 37:
                (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, n ? 1 : -1, "D"), i = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
                break;
            case 38:
                (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, -7, "D"), i = e.ctrlKey || e.metaKey;
                break;
            case 39:
                (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, n ? -1 : 1, "D"), i = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
                break;
            case 40:
                (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, 7, "D"), i = e.ctrlKey || e.metaKey;
                break;
            default:
                i = !1
        } else 36 == e.keyCode && e.ctrlKey ? $.datepicker._showDatepicker(this) : i = !1;
        i && (e.preventDefault(), e.stopPropagation())
    }, _doKeyPress: function (e) {
        var t = $.datepicker._getInst(e.target);
        if ($.datepicker._get(t, "constrainInput")) {
            var i = $.datepicker._possibleChars($.datepicker._get(t, "dateFormat")), n = String.fromCharCode(e.charCode == undefined ? e.keyCode : e.charCode);
            return e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1
        }
    }, _doKeyUp: function (e) {
        var t = $.datepicker._getInst(e.target);
        if (t.input.val() != t.lastVal)try {
            var i = $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), t.input ? t.input.val() : null, $.datepicker._getFormatConfig(t));
            i && ($.datepicker._setDateFromField(t), $.datepicker._updateAlternate(t), $.datepicker._updateDatepicker(t))
        } catch (n) {
            $.datepicker.log(n)
        }
        return!0
    }, _showDatepicker: function (e) {
        if (e = e.target || e, "input" != e.nodeName.toLowerCase() && (e = $("input", e.parentNode)[0]), !$.datepicker._isDisabledDatepicker(e) && $.datepicker._lastInput != e) {
            var t = $.datepicker._getInst(e);
            $.datepicker._curInst && $.datepicker._curInst != t && ($.datepicker._curInst.dpDiv.stop(!0, !0), t && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
            var i = $.datepicker._get(t, "beforeShow"), n = i ? i.apply(e, [e, t]) : {};
            if (n !== !1) {
                extendRemove(t.settings, n), t.lastVal = null, $.datepicker._lastInput = e, $.datepicker._setDateFromField(t), $.datepicker._inDialog && (e.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(e), $.datepicker._pos[1] += e.offsetHeight);
                var r = !1;
                $(e).parents().each(function () {
                    return r |= "fixed" == $(this).css("position"), !r
                }), r && $.browser.opera && ($.datepicker._pos[0] -= document.documentElement.scrollLeft, $.datepicker._pos[1] -= document.documentElement.scrollTop);
                var s = {left: $.datepicker._pos[0], top: $.datepicker._pos[1]};
                if ($.datepicker._pos = null, t.dpDiv.empty(), t.dpDiv.css({position: "absolute", display: "block", top: "-1000px"}), $.datepicker._updateDatepicker(t), s = $.datepicker._checkOffset(t, s, r), t.dpDiv.css({position: $.datepicker._inDialog && $.blockUI ? "static" : r ? "fixed" : "absolute", display: "none", left: s.left + "px", top: s.top + "px"}), !t.inline) {
                    var a = $.datepicker._get(t, "showAnim"), o = $.datepicker._get(t, "duration"), l = function () {
                        var e = t.dpDiv.find("iframe.ui-datepicker-cover");
                        if (e.length) {
                            var i = $.datepicker._getBorders(t.dpDiv);
                            e.css({left: -i[0], top: -i[1], width: t.dpDiv.outerWidth(), height: t.dpDiv.outerHeight()})
                        }
                    };
                    t.dpDiv.zIndex($(e).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && $.effects[a] ? t.dpDiv.show(a, $.datepicker._get(t, "showOptions"), o, l) : t.dpDiv[a || "show"](a ? o : null, l), a && o || l(), t.input.is(":visible") && !t.input.is(":disabled") && t.input.focus(), $.datepicker._curInst = t
                }
            }
        }
    }, _updateDatepicker: function (e) {
        var t = this;
        t.maxRows = 4;
        var i = $.datepicker._getBorders(e.dpDiv);
        instActive = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
        var n = e.dpDiv.find("iframe.ui-datepicker-cover");
        n.length && n.css({left: -i[0], top: -i[1], width: e.dpDiv.outerWidth(), height: e.dpDiv.outerHeight()}), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
        var r = this._getNumberOfMonths(e), s = r[1], a = 17;
        if (e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", a * s + "em"), e.dpDiv[(1 != r[0] || 1 != r[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e == $.datepicker._curInst && $.datepicker._datepickerShowing && e.input && e.input.is(":visible") && !e.input.is(":disabled") && e.input[0] != document.activeElement && e.input.focus(), e.yearshtml) {
            var o = e.yearshtml;
            setTimeout(function () {
                o === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), o = e.yearshtml = null
            }, 0)
        }
    }, _getBorders: function (e) {
        var t = function (e) {
            return{thin: 1, medium: 2, thick: 3}[e] || e
        };
        return[parseFloat(t(e.css("border-left-width"))), parseFloat(t(e.css("border-top-width")))]
    }, _checkOffset: function (e, t, i) {
        var n = e.dpDiv.outerWidth(), r = e.dpDiv.outerHeight(), s = e.input ? e.input.outerWidth() : 0, a = e.input ? e.input.outerHeight() : 0, o = document.documentElement.clientWidth + (i ? 0 : $(document).scrollLeft()), l = document.documentElement.clientHeight + (i ? 0 : $(document).scrollTop());
        return t.left -= this._get(e, "isRTL") ? n - s : 0, t.left -= i && t.left == e.input.offset().left ? $(document).scrollLeft() : 0, t.top -= i && t.top == e.input.offset().top + a ? $(document).scrollTop() : 0, t.left -= Math.min(t.left, t.left + n > o && o > n ? Math.abs(t.left + n - o) : 0), t.top -= Math.min(t.top, t.top + r > l && l > r ? Math.abs(r + a) : 0), t
    }, _findPos: function (e) {
        for (var t = this._getInst(e), i = this._get(t, "isRTL"); e && ("hidden" == e.type || 1 != e.nodeType || $.expr.filters.hidden(e));)e = e[i ? "previousSibling" : "nextSibling"];
        var n = $(e).offset();
        return[n.left, n.top]
    }, _hideDatepicker: function (e) {
        var t = this._curInst;
        if (t && (!e || t == $.data(e, PROP_NAME)) && this._datepickerShowing) {
            var i = this._get(t, "showAnim"), n = this._get(t, "duration"), r = function () {
                $.datepicker._tidyDialog(t)
            };
            $.effects && $.effects[i] ? t.dpDiv.hide(i, $.datepicker._get(t, "showOptions"), n, r) : t.dpDiv["slideDown" == i ? "slideUp" : "fadeIn" == i ? "fadeOut" : "hide"](i ? n : null, r), i || r(), this._datepickerShowing = !1;
            var s = this._get(t, "onClose");
            s && s.apply(t.input ? t.input[0] : null, [t.input ? t.input.val() : "", t]), this._lastInput = null, this._inDialog && (this._dialogInput.css({position: "absolute", left: "0", top: "-100px"}), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1
        }
    }, _tidyDialog: function (e) {
        e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
    }, _checkExternalClick: function (e) {
        if ($.datepicker._curInst) {
            var t = $(e.target), i = $.datepicker._getInst(t[0]);
            (t[0].id != $.datepicker._mainDivId && 0 == t.parents("#" + $.datepicker._mainDivId).length && !t.hasClass($.datepicker.markerClassName) && !t.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || t.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != i) && $.datepicker._hideDatepicker()
        }
    }, _adjustDate: function (e, t, i) {
        var n = $(e), r = this._getInst(n[0]);
        this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(r, t + ("M" == i ? this._get(r, "showCurrentAtPos") : 0), i), this._updateDatepicker(r))
    }, _gotoToday: function (e) {
        var t = $(e), i = this._getInst(t[0]);
        if (this._get(i, "gotoCurrent") && i.currentDay)i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear; else {
            var n = new Date;
            i.selectedDay = n.getDate(), i.drawMonth = i.selectedMonth = n.getMonth(), i.drawYear = i.selectedYear = n.getFullYear()
        }
        this._notifyChange(i), this._adjustDate(t)
    }, _selectMonthYear: function (e, t, i) {
        var n = $(e), r = this._getInst(n[0]);
        r["selected" + ("M" == i ? "Month" : "Year")] = r["draw" + ("M" == i ? "Month" : "Year")] = parseInt(t.options[t.selectedIndex].value, 10), this._notifyChange(r), this._adjustDate(n)
    }, _selectDay: function (e, t, i, n) {
        var r = $(e);
        if (!$(n).hasClass(this._unselectableClass) && !this._isDisabledDatepicker(r[0])) {
            var s = this._getInst(r[0]);
            s.selectedDay = s.currentDay = $("a", n).html(), s.selectedMonth = s.currentMonth = t, s.selectedYear = s.currentYear = i, this._selectDate(e, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear))
        }
    }, _clearDate: function (e) {
        var t = $(e);
        this._getInst(t[0]), this._selectDate(t, "")
    }, _selectDate: function (e, t) {
        var i = $(e), n = this._getInst(i[0]);
        t = null != t ? t : this._formatDate(n), n.input && n.input.val(t), this._updateAlternate(n);
        var r = this._get(n, "onSelect");
        r ? r.apply(n.input ? n.input[0] : null, [t, n]) : n.input && n.input.trigger("change"), n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], "object" != typeof n.input[0] && n.input.focus(), this._lastInput = null)
    }, _updateAlternate: function (e) {
        var t = this._get(e, "altField");
        if (t) {
            var i = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), r = this.formatDate(i, n, this._getFormatConfig(e));
            $(t).each(function () {
                $(this).val(r)
            })
        }
    }, noWeekends: function (e) {
        var t = e.getDay();
        return[t > 0 && 6 > t, ""]
    }, iso8601Week: function (e) {
        var t = new Date(e.getTime());
        t.setDate(t.getDate() + 4 - (t.getDay() || 7));
        var i = t.getTime();
        return t.setMonth(0), t.setDate(1), Math.floor(Math.round((i - t) / 864e5) / 7) + 1
    }, parseDate: function (e, t, i) {
        if (null == e || null == t)throw"Invalid arguments";
        if (t = "object" == typeof t ? "" + t : t + "", "" == t)return null;
        var n = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff;
        n = "string" != typeof n ? n : (new Date).getFullYear() % 100 + parseInt(n, 10);
        for (var r = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, s = (i ? i.dayNames : null) || this._defaults.dayNames, a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, o = (i ? i.monthNames : null) || this._defaults.monthNames, l = -1, c = -1, u = -1, d = -1, h = !1, p = function (t) {
            var i = e.length > v + 1 && e.charAt(v + 1) == t;
            return i && v++, i
        }, f = function (e) {
            var i = p(e), n = "@" == e ? 14 : "!" == e ? 20 : "y" == e && i ? 4 : "o" == e ? 3 : 2, r = RegExp("^\\d{1," + n + "}"), s = t.substring(y).match(r);
            if (!s)throw"Missing number at position " + y;
            return y += s[0].length, parseInt(s[0], 10)
        }, g = function (e, i, n) {
            var r = $.map(p(e) ? n : i,function (e, t) {
                return[
                    [t, e]
                ]
            }).sort(function (e, t) {
                return-(e[1].length - t[1].length)
            }), s = -1;
            if ($.each(r, function (e, i) {
                var n = i[1];
                return t.substr(y, n.length).toLowerCase() == n.toLowerCase() ? (s = i[0], y += n.length, !1) : undefined
            }), -1 != s)return s + 1;
            throw"Unknown name at position " + y
        }, m = function () {
            if (t.charAt(y) != e.charAt(v))throw"Unexpected literal at position " + y;
            y++
        }, y = 0, v = 0; e.length > v; v++)if (h)"'" != e.charAt(v) || p("'") ? m() : h = !1; else switch (e.charAt(v)) {
            case"d":
                u = f("d");
                break;
            case"D":
                g("D", r, s);
                break;
            case"o":
                d = f("o");
                break;
            case"m":
                c = f("m");
                break;
            case"M":
                c = g("M", a, o);
                break;
            case"y":
                l = f("y");
                break;
            case"@":
                var b = new Date(f("@"));
                l = b.getFullYear(), c = b.getMonth() + 1, u = b.getDate();
                break;
            case"!":
                var b = new Date((f("!") - this._ticksTo1970) / 1e4);
                l = b.getFullYear(), c = b.getMonth() + 1, u = b.getDate();
                break;
            case"'":
                p("'") ? m() : h = !0;
                break;
            default:
                m()
        }
        if (t.length > y)throw"Extra/unparsed characters found in date: " + t.substring(y);
        if (-1 == l ? l = (new Date).getFullYear() : 100 > l && (l += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (n >= l ? 0 : -100)), d > -1)for (c = 1, u = d; ;) {
            var x = this._getDaysInMonth(l, c - 1);
            if (x >= u)break;
            c++, u -= x
        }
        var b = this._daylightSavingAdjust(new Date(l, c - 1, u));
        if (b.getFullYear() != l || b.getMonth() + 1 != c || b.getDate() != u)throw"Invalid date";
        return b
    }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)), formatDate: function (e, t, i) {
        if (!t)return"";
        var n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, r = (i ? i.dayNames : null) || this._defaults.dayNames, s = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, a = (i ? i.monthNames : null) || this._defaults.monthNames, o = function (t) {
            var i = e.length > h + 1 && e.charAt(h + 1) == t;
            return i && h++, i
        }, l = function (e, t, i) {
            var n = "" + t;
            if (o(e))for (; i > n.length;)n = "0" + n;
            return n
        }, c = function (e, t, i, n) {
            return o(e) ? n[t] : i[t]
        }, u = "", d = !1;
        if (t)for (var h = 0; e.length > h; h++)if (d)"'" != e.charAt(h) || o("'") ? u += e.charAt(h) : d = !1; else switch (e.charAt(h)) {
            case"d":
                u += l("d", t.getDate(), 2);
                break;
            case"D":
                u += c("D", t.getDay(), n, r);
                break;
            case"o":
                u += l("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                break;
            case"m":
                u += l("m", t.getMonth() + 1, 2);
                break;
            case"M":
                u += c("M", t.getMonth(), s, a);
                break;
            case"y":
                u += o("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                break;
            case"@":
                u += t.getTime();
                break;
            case"!":
                u += 1e4 * t.getTime() + this._ticksTo1970;
                break;
            case"'":
                o("'") ? u += "'" : d = !0;
                break;
            default:
                u += e.charAt(h)
        }
        return u
    }, _possibleChars: function (e) {
        for (var t = "", i = !1, n = function (t) {
            var i = e.length > r + 1 && e.charAt(r + 1) == t;
            return i && r++, i
        }, r = 0; e.length > r; r++)if (i)"'" != e.charAt(r) || n("'") ? t += e.charAt(r) : i = !1; else switch (e.charAt(r)) {
            case"d":
            case"m":
            case"y":
            case"@":
                t += "0123456789";
                break;
            case"D":
            case"M":
                return null;
            case"'":
                n("'") ? t += "'" : i = !0;
                break;
            default:
                t += e.charAt(r)
        }
        return t
    }, _get: function (e, t) {
        return e.settings[t] !== undefined ? e.settings[t] : this._defaults[t]
    }, _setDateFromField: function (e, t) {
        if (e.input.val() != e.lastVal) {
            var i, n, r = this._get(e, "dateFormat"), s = e.lastVal = e.input ? e.input.val() : null;
            i = n = this._getDefaultDate(e);
            var a = this._getFormatConfig(e);
            try {
                i = this.parseDate(r, s, a) || n
            } catch (o) {
                this.log(o), s = t ? "" : s
            }
            e.selectedDay = i.getDate(), e.drawMonth = e.selectedMonth = i.getMonth(), e.drawYear = e.selectedYear = i.getFullYear(), e.currentDay = s ? i.getDate() : 0, e.currentMonth = s ? i.getMonth() : 0, e.currentYear = s ? i.getFullYear() : 0, this._adjustInstDate(e)
        }
    }, _getDefaultDate: function (e) {
        return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
    }, _determineDate: function (e, t, i) {
        var n = function (e) {
            var t = new Date;
            return t.setDate(t.getDate() + e), t
        }, r = function (t) {
            try {
                return $.datepicker.parseDate($.datepicker._get(e, "dateFormat"), t, $.datepicker._getFormatConfig(e))
            } catch (i) {
            }
            for (var n = (t.toLowerCase().match(/^c/) ? $.datepicker._getDate(e) : null) || new Date, r = n.getFullYear(), s = n.getMonth(), a = n.getDate(), o = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = o.exec(t); l;) {
                switch (l[2] || "d") {
                    case"d":
                    case"D":
                        a += parseInt(l[1], 10);
                        break;
                    case"w":
                    case"W":
                        a += 7 * parseInt(l[1], 10);
                        break;
                    case"m":
                    case"M":
                        s += parseInt(l[1], 10), a = Math.min(a, $.datepicker._getDaysInMonth(r, s));
                        break;
                    case"y":
                    case"Y":
                        r += parseInt(l[1], 10), a = Math.min(a, $.datepicker._getDaysInMonth(r, s))
                }
                l = o.exec(t)
            }
            return new Date(r, s, a)
        }, s = null == t || "" === t ? i : "string" == typeof t ? r(t) : "number" == typeof t ? isNaN(t) ? i : n(t) : new Date(t.getTime());
        return s = s && "Invalid Date" == "" + s ? i : s, s && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)), this._daylightSavingAdjust(s)
    }, _daylightSavingAdjust: function (e) {
        return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
    }, _setDate: function (e, t, i) {
        var n = !t, r = e.selectedMonth, s = e.selectedYear, a = this._restrictMinMax(e, this._determineDate(e, t, new Date));
        e.selectedDay = e.currentDay = a.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = a.getMonth(), e.drawYear = e.selectedYear = e.currentYear = a.getFullYear(), r == e.selectedMonth && s == e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(n ? "" : this._formatDate(e))
    }, _getDate: function (e) {
        var t = !e.currentYear || e.input && "" == e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
        return t
    }, _attachHandlers: function (e) {
        var t = this._get(e, "stepMonths"), i = "#" + e.id.replace(/\\\\/g, "\\");
        e.dpDiv.find("[data-handler]").map(function () {
            var e = {prev: function () {
                window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, -t, "M")
            }, next: function () {
                window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, +t, "M")
            }, hide: function () {
                window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker()
            }, today: function () {
                window["DP_jQuery_" + dpuuid].datepicker._gotoToday(i)
            }, selectDay: function () {
                return window["DP_jQuery_" + dpuuid].datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
            }, selectMonth: function () {
                return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "M"), !1
            }, selectYear: function () {
                return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "Y"), !1
            }};
            $(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
        })
    }, _generateHTML: function (e) {
        var t = new Date;
        t = this._daylightSavingAdjust(new Date(t.getFullYear(), t.getMonth(), t.getDate()));
        var i = this._get(e, "isRTL"), n = this._get(e, "showButtonPanel"), r = this._get(e, "hideIfNoPrevNext"), s = this._get(e, "navigationAsDateFormat"), a = this._getNumberOfMonths(e), o = this._get(e, "showCurrentAtPos"), l = this._get(e, "stepMonths"), c = 1 != a[0] || 1 != a[1], u = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)), d = this._getMinMaxDate(e, "min"), h = this._getMinMaxDate(e, "max"), p = e.drawMonth - o, f = e.drawYear;
        if (0 > p && (p += 12, f--), h) {
            var g = this._daylightSavingAdjust(new Date(h.getFullYear(), h.getMonth() - a[0] * a[1] + 1, h.getDate()));
            for (g = d && d > g ? d : g; this._daylightSavingAdjust(new Date(f, p, 1)) > g;)p--, 0 > p && (p = 11, f--)
        }
        e.drawMonth = p, e.drawYear = f;
        var m = this._get(e, "prevText");
        m = s ? this.formatDate(m, this._daylightSavingAdjust(new Date(f, p - l, 1)), this._getFormatConfig(e)) : m;
        var y = this._canAdjustMonth(e, -1, f, p) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + m + "</span></a>" : r ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + m + "</span></a>", v = this._get(e, "nextText");
        v = s ? this.formatDate(v, this._daylightSavingAdjust(new Date(f, p + l, 1)), this._getFormatConfig(e)) : v;
        var b = this._canAdjustMonth(e, 1, f, p) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + v + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + v + "</span></a>" : r ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + v + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + v + "</span></a>", x = this._get(e, "currentText"), w = this._get(e, "gotoCurrent") && e.currentDay ? u : t;
        x = s ? this.formatDate(x, w, this._getFormatConfig(e)) : x;
        var _ = e.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(e, "closeText") + "</button>", S = n ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (i ? _ : "") + (this._isInRange(e, w) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + x + "</button>" : "") + (i ? "" : _) + "</div>" : "", C = parseInt(this._get(e, "firstDay"), 10);
        C = isNaN(C) ? 0 : C;
        var A = this._get(e, "showWeek"), k = this._get(e, "dayNames");
        this._get(e, "dayNamesShort");
        var T = this._get(e, "dayNamesMin"), D = this._get(e, "monthNames"), N = this._get(e, "monthNamesShort"), E = this._get(e, "beforeShowDay"), M = this._get(e, "showOtherMonths"), P = this._get(e, "selectOtherMonths");
        this._get(e, "calculateWeek") || this.iso8601Week;
        for (var I = this._getDefaultDate(e), H = "", R = 0; a[0] > R; R++) {
            var L = "";
            this.maxRows = 4;
            for (var O = 0; a[1] > O; O++) {
                var J = this._daylightSavingAdjust(new Date(f, p, e.selectedDay)), F = " ui-corner-all", B = "";
                if (c) {
                    if (B += '<div class="ui-datepicker-group', a[1] > 1)switch (O) {
                        case 0:
                            B += " ui-datepicker-group-first", F = " ui-corner-" + (i ? "right" : "left");
                            break;
                        case a[1] - 1:
                            B += " ui-datepicker-group-last", F = " ui-corner-" + (i ? "left" : "right");
                            break;
                        default:
                            B += " ui-datepicker-group-middle", F = ""
                    }
                    B += '">'
                }
                B += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + F + '">' + (/all|left/.test(F) && 0 == R ? i ? b : y : "") + (/all|right/.test(F) && 0 == R ? i ? y : b : "") + this._generateMonthYearHeader(e, p, f, d, h, R > 0 || O > 0, D, N) + '</div><table class="ui-datepicker-calendar"><thead>' + "<tr>";
                for (var j = A ? '<th class="ui-datepicker-week-col">' + this._get(e, "weekHeader") + "</th>" : "", z = 0; 7 > z; z++) {
                    var W = (z + C) % 7;
                    j += "<th" + ((z + C + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + ">" + '<span title="' + k[W] + '">' + T[W] + "</span></th>"
                }
                B += j + "</tr></thead><tbody>";
                var Y = this._getDaysInMonth(f, p);
                f == e.selectedYear && p == e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, Y));
                var U = (this._getFirstDayOfMonth(f, p) - C + 7) % 7, q = Math.ceil((U + Y) / 7), K = c ? this.maxRows > q ? this.maxRows : q : q;
                this.maxRows = K;
                for (var V = this._daylightSavingAdjust(new Date(f, p, 1 - U)), G = 0; K > G; G++) {
                    B += "<tr>";
                    for (var X = A ? '<td class="ui-datepicker-week-col">' + this._get(e, "calculateWeek")(V) + "</td>" : "", z = 0; 7 > z; z++) {
                        var Q = E ? E.apply(e.input ? e.input[0] : null, [V]) : [!0, ""], Z = V.getMonth() != p, et = Z && !P || !Q[0] || d && d > V || h && V > h;
                        X += '<td class="' + ((z + C + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (Z ? " ui-datepicker-other-month" : "") + (V.getTime() == J.getTime() && p == e.selectedMonth && e._keyEvent || I.getTime() == V.getTime() && I.getTime() == J.getTime() ? " " + this._dayOverClass : "") + (et ? " " + this._unselectableClass + " ui-state-disabled" : "") + (Z && !M ? "" : " " + Q[1] + (V.getTime() == u.getTime() ? " " + this._currentClass : "") + (V.getTime() == t.getTime() ? " ui-datepicker-today" : "")) + '"' + (Z && !M || !Q[2] ? "" : ' title="' + Q[2] + '"') + (et ? "" : ' data-handler="selectDay" data-event="click" data-month="' + V.getMonth() + '" data-year="' + V.getFullYear() + '"') + ">" + (Z && !M ? "&#xa0;" : et ? '<span class="ui-state-default">' + V.getDate() + "</span>" : '<a class="ui-state-default' + (V.getTime() == t.getTime() ? " ui-state-highlight" : "") + (V.getTime() == u.getTime() ? " ui-state-active" : "") + (Z ? " ui-priority-secondary" : "") + '" href="#">' + V.getDate() + "</a>") + "</td>", V.setDate(V.getDate() + 1), V = this._daylightSavingAdjust(V)
                    }
                    B += X + "</tr>"
                }
                p++, p > 11 && (p = 0, f++), B += "</tbody></table>" + (c ? "</div>" + (a[0] > 0 && O == a[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), L += B
            }
            H += L
        }
        return H += S + ($.browser.msie && 7 > parseInt($.browser.version, 10) && !e.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), e._keyEvent = !1, H
    }, _generateMonthYearHeader: function (e, t, i, n, r, s, a, o) {
        var l = this._get(e, "changeMonth"), c = this._get(e, "changeYear"), u = this._get(e, "showMonthAfterYear"), d = '<div class="ui-datepicker-title">', h = "";
        if (s || !l)h += '<span class="ui-datepicker-month">' + a[t] + "</span>"; else {
            var p = n && n.getFullYear() == i, f = r && r.getFullYear() == i;
            h += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
            for (var g = 0; 12 > g; g++)(!p || g >= n.getMonth()) && (!f || r.getMonth() >= g) && (h += '<option value="' + g + '"' + (g == t ? ' selected="selected"' : "") + ">" + o[g] + "</option>");
            h += "</select>"
        }
        if (u || (d += h + (!s && l && c ? "" : "&#xa0;")), !e.yearshtml)if (e.yearshtml = "", s || !c)d += '<span class="ui-datepicker-year">' + i + "</span>"; else {
            var m = this._get(e, "yearRange").split(":"), y = (new Date).getFullYear(), v = function (e) {
                var t = e.match(/c[+-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+-].*/) ? y + parseInt(e, 10) : parseInt(e, 10);
                return isNaN(t) ? y : t
            }, b = v(m[0]), x = Math.max(b, v(m[1] || ""));
            for (b = n ? Math.max(b, n.getFullYear()) : b, x = r ? Math.min(x, r.getFullYear()) : x, e.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">'; x >= b; b++)e.yearshtml += '<option value="' + b + '"' + (b == i ? ' selected="selected"' : "") + ">" + b + "</option>";
            e.yearshtml += "</select>", d += e.yearshtml, e.yearshtml = null
        }
        return d += this._get(e, "yearSuffix"), u && (d += (!s && l && c ? "" : "&#xa0;") + h), d += "</div>"
    }, _adjustInstDate: function (e, t, i) {
        var n = e.drawYear + ("Y" == i ? t : 0), r = e.drawMonth + ("M" == i ? t : 0), s = Math.min(e.selectedDay, this._getDaysInMonth(n, r)) + ("D" == i ? t : 0), a = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(n, r, s)));
        e.selectedDay = a.getDate(), e.drawMonth = e.selectedMonth = a.getMonth(), e.drawYear = e.selectedYear = a.getFullYear(), ("M" == i || "Y" == i) && this._notifyChange(e)
    }, _restrictMinMax: function (e, t) {
        var i = this._getMinMaxDate(e, "min"), n = this._getMinMaxDate(e, "max"), r = i && i > t ? i : t;
        return r = n && r > n ? n : r
    }, _notifyChange: function (e) {
        var t = this._get(e, "onChangeMonthYear");
        t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
    }, _getNumberOfMonths: function (e) {
        var t = this._get(e, "numberOfMonths");
        return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
    }, _getMinMaxDate: function (e, t) {
        return this._determineDate(e, this._get(e, t + "Date"), null)
    }, _getDaysInMonth: function (e, t) {
        return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
    }, _getFirstDayOfMonth: function (e, t) {
        return new Date(e, t, 1).getDay()
    }, _canAdjustMonth: function (e, t, i, n) {
        var r = this._getNumberOfMonths(e), s = this._daylightSavingAdjust(new Date(i, n + (0 > t ? t : r[0] * r[1]), 1));
        return 0 > t && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(e, s)
    }, _isInRange: function (e, t) {
        var i = this._getMinMaxDate(e, "min"), n = this._getMinMaxDate(e, "max");
        return(!i || t.getTime() >= i.getTime()) && (!n || t.getTime() <= n.getTime())
    }, _getFormatConfig: function (e) {
        var t = this._get(e, "shortYearCutoff");
        return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {shortYearCutoff: t, dayNamesShort: this._get(e, "dayNamesShort"), dayNames: this._get(e, "dayNames"), monthNamesShort: this._get(e, "monthNamesShort"), monthNames: this._get(e, "monthNames")}
    }, _formatDate: function (e, t, i, n) {
        t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
        var r = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(n, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
        return this.formatDate(this._get(e, "dateFormat"), r, this._getFormatConfig(e))
    }}), $.fn.datepicker = function (e) {
        if (!this.length)return this;
        $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv), $.datepicker.initialized = !0);
        var t = Array.prototype.slice.call(arguments, 1);
        return"string" != typeof e || "isDisabled" != e && "getDate" != e && "widget" != e ? "option" == e && 2 == arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t)) : this.each(function () {
            "string" == typeof e ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this].concat(t)) : $.datepicker._attachDatepicker(this, e)
        }) : $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t))
    }, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.8.24", window["DP_jQuery_" + dpuuid] = $
}(jQuery), function () {
    "use strict";
    if ("undefined" == typeof jQuery)throw Error("jQuery is required for AJS to function.");
    window.console === void 0 ? window.console = {messages: [], log: function (e) {
        this.messages.push(e)
    }, show: function () {
        alert(this.messages.join("\n")), this.messages = []
    }} : console.show = function () {
    }, window.AJS = function () {
        function e(e) {
            var t = {"<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&#39;", "`": "&#96;"};
            return"string" == typeof t[e] ? t[e] : "&quot;"
        }

        var t, i, n = [], r = 0, s = /[&"'<>`]/g, a = {version: "5.4.3", params: {}, $: jQuery, log: function () {
            "undefined" != typeof console && console.log && Function.prototype.apply.apply(console.log, [console, arguments])
        }, warn: function () {
            "undefined" != typeof console && console.warn && Function.prototype.apply.apply(console.warn, [console, arguments])
        }, error: function () {
            "undefined" != typeof console && console.error && Function.prototype.apply.apply(console.error, [console, arguments])
        }, preventDefault: function (e) {
            e.preventDefault()
        }, stopEvent: function (e) {
            return e.stopPropagation(), !1
        }, include: function (e) {
            if (!this.contains(n, e)) {
                n.push(e);
                var t = document.createElement("script");
                t.src = e, this.$("body").append(t)
            }
        }, toggleClassName: function (e, t) {
            (e = this.$(e)) && e.toggleClass(t)
        }, setVisible: function (e, t) {
            if (e = this.$(e)) {
                var i = this.$;
                i(e).each(function () {
                    var e = i(this).hasClass("hidden");
                    e && t ? i(this).removeClass("hidden") : e || t || i(this).addClass("hidden")
                })
            }
        }, setCurrent: function (e, t) {
            (e = this.$(e)) && (t ? e.addClass("current") : e.removeClass("current"))
        }, isVisible: function (e) {
            return!this.$(e).hasClass("hidden")
        }, isClipped: function (e) {
            return e = AJS.$(e), e.prop("scrollWidth") > e.prop("clientWidth")
        }, populateParameters: function (e) {
            e || (e = this.params);
            var t = this;
            this.$(".parameters input").each(function () {
                var i = this.value, n = this.title || this.id;
                t.$(this).hasClass("list") ? e[n] ? e[n].push(i) : e[n] = [i] : e[n] = i.match(/^(tru|fals)e$/i) ? "true" === i.toLowerCase() : i
            })
        }, toInit: function (e) {
            var t = this;
            return this.$(function () {
                try {
                    e.apply(this, arguments)
                } catch (i) {
                    t.log("Failed to run init function: " + i + "\n" + ("" + e))
                }
            }), this
        }, indexOf: function (e, t, i) {
            var n = e.length;
            null === i ? i = 0 : 0 > i && (i = Math.max(0, n + i));
            for (var r = i; n > r; r++)if (e[r] === t)return r;
            return-1
        }, contains: function (e, t) {
            return this.indexOf(e, t) > -1
        }, firebug: function () {
            AJS.log("DEPRECATED: AJS.firebug should no longer be used.");
            var e = this.$(document.createElement("script"));
            e.attr("src", "https://getfirebug.com/releases/lite/1.2/firebug-lite-compressed.js"), this.$("head").append(e), function () {
                window.firebug ? firebug.init() : setTimeout(AJS.firebug, 0)
            }()
        }, clone: function (e) {
            return AJS.$(e).clone().removeAttr("id")
        }, alphanum: function (e, t) {
            e = (e + "").toLowerCase(), t = (t + "").toLowerCase();
            for (var i = /(\d+|\D+)/g, n = e.match(i), r = t.match(i), s = Math.max(n.length, r.length), a = 0; s > a; a++) {
                if (a === n.length)return-1;
                if (a === r.length)return 1;
                var o = parseInt(n[a], 10) + "", l = parseInt(r[a], 10) + "";
                if (o === n[a] && l === r[a] && o !== l)return(o - l) / Math.abs(o - l);
                if ((o !== n[a] || l !== r[a]) && n[a] !== r[a])return n[a] < r[a] ? -1 : 1
            }
            return 0
        }, onTextResize: function (e) {
            if ("function" == typeof e)if (AJS.onTextResize["on-text-resize"])AJS.onTextResize["on-text-resize"].push(function (t) {
                e(t)
            }); else {
                var t = AJS("div");
                t.css({width: "1em", height: "1em", position: "absolute", top: "-9999em", left: "-9999em"}), this.$("body").append(t), t.size = t.width(), setInterval(function () {
                    if (t.size !== t.width()) {
                        t.size = t.width();
                        for (var e = 0, i = AJS.onTextResize["on-text-resize"].length; i > e; e++)AJS.onTextResize["on-text-resize"][e](t.size)
                    }
                }, 0), AJS.onTextResize.em = t, AJS.onTextResize["on-text-resize"] = [function (t) {
                    e(t)
                }]
            }
        }, unbindTextResize: function (e) {
            for (var t = 0, i = AJS.onTextResize["on-text-resize"].length; i > t; t++)if (AJS.onTextResize["on-text-resize"][t] === e)return AJS.onTextResize["on-text-resize"].splice(t, 1)
        }, escape: function (e) {
            return escape(e).replace(/%u\w{4}/gi, function (e) {
                return unescape(e)
            })
        }, escapeHtml: function (t) {
            return t.replace(s, e)
        }, filterBySearch: function (e, t, i) {
            if (!t)return[];
            var n = this.$, r = i && i.keywordsField || "keywords", s = i && i.ignoreForCamelCase ? "i" : "", a = i && i.matchBoundary ? "\\b" : "", o = i && i.splitRegex || /\s+/, l = t.split(o), c = [];
            n.each(l, function () {
                var e = [RegExp(a + this, "i")];
                if (/^([A-Z][a-z]*) {2,}$/.test(this)) {
                    var t = this.replace(/([A-Z][a-z]*)/g, "\\b$1[^,]*");
                    e.push(RegExp(t, s))
                }
                c.push(e)
            });
            var u = [];
            return n.each(e, function () {
                for (var e = 0; c.length > e; e++) {
                    for (var t = !1, i = 0; c[e].length > i; i++)if (c[e][i].test(this[r])) {
                        t = !0;
                        break
                    }
                    if (!t)return
                }
                u.push(this)
            }), u
        }, drawLogo: function (e) {
            AJS.log("DEPRECATED: AJS.drawLogo should no longer be used.");
            var t = e.scaleFactor || 1, i = e.fill || "#fff", n = e.stroke || "#000", r = 400 * t, s = 40 * t, a = e.strokeWidth || 1, o = e.containerID || ".aui-logo";
            AJS.$(".aui-logo").length || AJS.$("body").append('<div id="aui-logo" class="aui-logo"><div>');
            var l = Raphael(o, r + 50 * t, s + 100 * t), c = l.path("M 0,0 c 3.5433333,-4.7243333 7.0866667,-9.4486667 10.63,-14.173 -14.173,0 -28.346,0 -42.519,0 C -35.432667,-9.4486667 -38.976333,-4.7243333 -42.52,0 -28.346667,0 -14.173333,0 0,0 z m 277.031,28.346 c -14.17367,0 -28.34733,0 -42.521,0 C 245.14,14.173 255.77,0 266.4,-14.173 c -14.17267,0 -28.34533,0 -42.518,0 C 213.25167,0 202.62133,14.173 191.991,28.346 c -14.17333,0 -28.34667,0 -42.52,0 14.17333,-18.8976667 28.34667,-37.7953333 42.52,-56.693 -7.08667,-9.448667 -14.17333,-18.897333 -21.26,-28.346 -14.173,0 -28.346,0 -42.519,0 7.08667,9.448667 14.17333,18.897333 21.26,28.346 -14.17333,18.8976667 -28.34667,37.7953333 -42.52,56.693 -14.173333,0 -28.346667,0 -42.52,0 10.63,-14.173 21.26,-28.346 31.89,-42.519 -14.390333,0 -28.780667,0 -43.171,0 C 42.520733,1.330715e-4 31.889933,14.174867 21.26,28.347 c -42.520624,6.24e-4 -85.039187,-8.13e-4 -127.559,-0.001 11.220667,-14.961 22.441333,-29.922 33.662,-44.883 -6.496,-8.661 -12.992,-17.322 -19.488,-25.983 5.905333,0 11.810667,0 17.716,0 -10.63,-14.173333 -21.26,-28.346667 -31.89,-42.52 14.173333,0 28.346667,0 42.52,0 10.63,14.173333 21.26,28.346667 31.89,42.52 14.173333,0 28.3466667,0 42.52,0 -10.63,-14.173333 -21.26,-28.346667 -31.89,-42.52 14.1733333,0 28.3466667,0 42.52,0 10.63,14.173333 21.26,28.346667 31.89,42.52 14.390333,0 28.780667,0 43.171,0 -10.63,-14.173333 -21.26,-28.346667 -31.89,-42.52 42.51967,0 85.03933,0 127.559,0 10.63033,14.173333 21.26067,28.346667 31.891,42.52 14.17267,0 28.34533,0 42.518,0 -10.63,-14.173333 -21.26,-28.346667 -31.89,-42.52 14.17367,0 28.34733,0 42.521,0 14.17333,18.897667 28.34667,37.795333 42.52,56.693 -14.17333,18.8976667 -28.34667,37.7953333 -42.52,56.693 z");
            c.scale(t, -t, 0, 0), c.translate(120 * t, s), c.attr("fill", i), c.attr("stroke", n), c.attr("stroke-width", a)
        }, debounce: function (e, t) {
            var i, n;
            return function () {
                var r = arguments, s = this, a = function () {
                    n = e.apply(s, r)
                };
                return clearTimeout(i), i = setTimeout(a, t), n
            }
        }, id: function (e) {
            if (t = r++ + "", i = e ? e + t : "aui-uid-" + t, document.getElementById(i)) {
                if (i = i + "-" + (new Date).getTime(), document.getElementById(i))throw Error("ERROR: timestamped fallback ID " + i + " exists. AJS.id stopped.");
                return i
            }
            return i
        }, _addID: function (e, t) {
            var i = AJS.$(e), n = t || !1;
            i.each(function () {
                var e = AJS.$(this);
                e.attr("id") || e.attr("id", AJS.id(n))
            })
        }, enable: function (e, t) {
            var i = AJS.$(e);
            return t === void 0 && (t = !0), i.each(function () {
                this.disabled = !t
            })
        }};
        if ("undefined" != typeof AJS)for (var o in AJS)a[o] = AJS[o];
        var l = function () {
            var e = null;
            return arguments.length && "string" == typeof arguments[0] && (e = AJS.$(document.createElement(arguments[0])), 2 === arguments.length && e.html(arguments[1])), e
        };
        for (var c in a)l[c] = a[c];
        return l
    }(), AJS.$(function () {
        var e = AJS.$("body");
        e.data("auiVersion") || e.attr("data-aui-version", AJS.version), AJS.populateParameters()
    }), AJS.$.ajaxSettings.traditional = !0
}(), AJS.format = function () {
    var e = /'(?!')/g, t = /^\d+$/, i = /^(\d+),number$/, n = /^(\d+)\,choice\,(.+)/, r = /^(\d+)([#<])(.+)/, s = function (e, s) {
        var a, o = "";
        if (a = e.match(t))o = s.length > ++e ? s[e] : ""; else if (a = e.match(i))o = s.length > ++a[1] ? s[a[1]] : ""; else if (a = e.match(n)) {
            var l = s.length > ++a[1] ? s[a[1]] : null;
            if (null !== l) {
                for (var c = a[2].split("|"), u = null, d = 0; c.length > d; d++) {
                    var h = c[d].match(r), p = parseInt(h[1], 10);
                    if (p > l) {
                        if (u) {
                            o = u;
                            break
                        }
                        o = h[3];
                        break
                    }
                    if (l == p && "#" == h[2]) {
                        o = h[3];
                        break
                    }
                    d == c.length - 1 && (o = h[3]), u = h[3]
                }
                var f = [o].concat(Array.prototype.slice.call(s, 1));
                o = AJS.format.apply(AJS, f)
            }
        }
        return o
    }, a = function (e) {
        for (var t = !1, i = -1, n = 0, r = 0; e.length > r; r++) {
            var s = e.charAt(r);
            if ("'" == s && (t = !t), !t)if ("{" === s)0 === n && (i = r), n++; else if ("}" === s && n > 0 && (n--, 0 === n)) {
                var a = [];
                return a.push(e.substring(0, r + 1)), a.push(e.substring(0, i)), a.push(e.substring(i + 1, r)), a
            }
        }
        return null
    }, o = function (t) {
        for (var i = arguments, n = "", r = a(t); r;)t = t.substring(r[0].length), n += r[1].replace(e, ""), n += s(r[2], i), r = a(t);
        return n += t.replace(e, "")
    };
    return o.apply(AJS, arguments)
}, AJS.I18n = {getText: function (e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return AJS.I18n.keys && Object.prototype.hasOwnProperty.call(AJS.I18n.keys, e) ? AJS.format.apply(null, [AJS.I18n.keys[e]].concat(t)) : e
}}, AJS._internal || (AJS._internal = {}), function (e) {
    AJS._internal.browser = {};
    var t = null;
    AJS._internal.browser.supportsCalc = function () {
        if (null === t) {
            var i = e('<div style="height: 10px; height: -webkit-calc(20px + 0); height: calc(20px);"></div>');
            t = 20 === i.appendTo(document.documentElement).height(), i.remove()
        }
        return t
    }
}(AJS.$), function (e) {
    AJS._internal = AJS._internal || {}, AJS._internal.widget = function (t, i) {
        var n = "_aui-widget-" + t;
        return function (t, r) {
            var s, a;
            e.isPlainObject(t) ? a = t : (s = t, a = r);
            var o, l = s && e(s);
            return l && l.data(n) ? o = l.data(n) : (o = new i(l, a || {}), l = o.$el, l.data(n, o)), o
        }
    }
}(AJS.$), function () {
    function e(e, t) {
        for (var i = e.length; i--;)if (t(e[i]))return i;
        return-1
    }

    function t(t, i) {
        return e(t, function (e) {
            return e[0] === i[0]
        })
    }

    function i(t) {
        return e(t, function (e) {
            return AJS.layer(e).isBlanketed()
        })
    }

    function n(e) {
        var t;
        if (e.length) {
            var i = e[e.length - 1], n = parseInt(i.css("z-index"), 10);
            t = (isNaN(n) ? 0 : n) + 100
        } else t = 0;
        return Math.max(3e3, t)
    }

    function r() {
        this._stack = []
    }

    r.prototype.push = function (e) {
        if (t(this._stack, e) >= 0)throw Error("The given element is already an active layer");
        var r = AJS.layer(e), s = n(this._stack);
        r._showLayer(s), r.isBlanketed() && (i(this._stack) >= 0 && AJS.undim(), AJS.dim(!1, s - 20)), this._stack.push(e)
    }, r.prototype.popUntil = function (e) {
        var n = t(this._stack, e);
        if (0 > n)return null;
        var r = this._stack.slice(n);
        this._stack = this._stack.slice(0, n);
        var s = i(r);
        if (s >= 0) {
            AJS.undim();
            var a = i(this._stack);
            a >= 0 && AJS.dim(!1, this._stack[a].css("z-index") - 20)
        }
        for (var o; r.length;)o = r.pop(), AJS.layer(o)._hideLayer();
        return o
    }, r.prototype.popTop = function () {
        if (!this._stack.length)return null;
        var e = this._stack[this._stack.length - 1];
        return AJS.layer(e).isModal() ? null : this.popUntil(e)
    }, r.prototype.popUntilTopBlanketed = function () {
        var e = i(this._stack);
        if (0 > e)return null;
        var t = this._stack[e];
        return AJS.layer(t).isModal() ? null : this.popUntil(t)
    }, AJS.LayerManager = r
}(AJS.$), function (e) {
    AJS.LayerManager.global = new AJS.LayerManager, e(document).on("keydown",function (e) {
        if (e.keyCode === AJS.keyCode.ESCAPE) {
            var t = AJS.LayerManager.global.popTop();
            t && e.preventDefault()
        }
    }).on("click", ".aui-blanket", function (e) {
        var t = AJS.LayerManager.global.popUntilTopBlanketed();
        t && e.preventDefault()
    })
}(AJS.$), AJS.FocusManager = function (e) {
    function t() {
    }

    return t.defaultFocusSelector = ":input:visible:enabled", t.prototype.enter = function (e) {
        var i = e.attr("data-aui-focus-selector"), n = i || t.defaultFocusSelector, r = e.is(n) ? e : e.find(n);
        r.first().focus()
    }, t.prototype.exit = function (t) {
        var i = document.activeElement;
        (t[0] === i || t.has(i).length) && e(i).blur()
    }, t.global = new t, t
}(AJS.$), AJS = AJS || {}, function () {
    var e = "%CONTEXT_PATH%";
    e = 0 === e.indexOf("%_CONTEXT_PATH") ? !1 : e, AJS.contextPath = function () {
        for (var t = null, i = [e, window.contextPath, window.Confluence && Confluence.getContextPath(), window.BAMBOO && BAMBOO.contextPath, window.FECRU && FECRU.pageContext], n = 0; i.length > n; n++)if ("string" == typeof i[n]) {
            t = i[n];
            break
        }
        return t
    }
}(), function () {
    function e(e, t) {
        t = t || "";
        var i = RegExp(s(e) + "=([^|]+)"), n = t.match(i);
        return n && n[1]
    }

    function t(e, t, i) {
        var n = RegExp("(\\s|\\|)*\\b" + s(e) + "=[^|]*[|]*");
        if (i = i || "", i = i.replace(n, "|"), "" !== t) {
            var r = e + "=" + t;
            4020 > i.length + r.length && (i += "|" + r)
        }
        return i.replace(l, "|")
    }

    function i(e) {
        return e.replace(o, "")
    }

    function n(e) {
        var t = RegExp("\\b" + s(e) + "=((?:[^\\\\;]+|\\\\.)*)(?:;|$)"), n = document.cookie.match(t);
        return n && i(n[1])
    }

    function r(e, t, i) {
        var n, r = "", s = '"' + t.replace(c, '\\"') + '"';
        i && (n = new Date, n.setTime(+n + 1e3 * 60 * 60 * 24 * i), r = "; expires=" + n.toGMTString()), document.cookie = e + "=" + s + r + ";path=/"
    }

    function s(e) {
        return e.replace(u, "\\$&")
    }

    var a = "AJS.conglomerate.cookie", o = /(\\|^"|"$)/g, l = /\|\|+/g, c = /"/g, u = /[.*+?|^$()[\]{\\]/g;
    AJS.Cookie = {save: function (e, i, s) {
        var o = n(a);
        o = t(e, i, o), r(a, o, s || 365)
    }, read: function (t, i) {
        var r = n(a), s = e(t, r);
        return null != s ? s : i
    }, erase: function (e) {
        this.save(e, "")
    }}
}(), function (e) {
    var t;
    AJS.dim = function (i, n) {
        return t || (t = e.browser.msie && 8 > parseInt(e.browser.version, 10) ? e("html") : e(document.body)), AJS.dim.$dim || (AJS.dim.$dim = AJS("div").addClass("aui-blanket"), n && AJS.dim.$dim.css({zIndex: n}), e.browser.msie && AJS.dim.$dim.css({width: "200%", height: Math.max(e(document).height(), e(window).height()) + "px"}), e("body").append(AJS.dim.$dim), e.browser.msie && i !== !1 && (AJS.dim.$shim = e('<iframe frameBorder="0" class="aui-blanket-shim" src="about:blank"/>'), AJS.dim.$shim.css({height: Math.max(e(document).height(), e(window).height()) + "px"}), n && AJS.dim.$shim.css({zIndex: n - 1}), e("body").append(AJS.dim.$shim), AJS.dim.shim = AJS.dim.$shim), AJS.dim.cachedOverflow = t.css("overflow"), t.css("overflow", "hidden")), AJS.dim.$dim
    }, AJS.undim = function () {
        if (AJS.dim.$dim && (AJS.dim.$dim.remove(), AJS.dim.$dim = null, AJS.dim.$shim && (AJS.dim.$shim.remove(), AJS.dim.$shim = null), t && t.css("overflow", AJS.dim.cachedOverflow), e.browser.safari)) {
            var i = e(window).scrollTop();
            e(window).scrollTop(10 + 5 * (10 == i)).scrollTop(i)
        }
    }
}(AJS.$), function (e) {
    function t(t) {
        this.$el = e(t || '<div class="aui-layer" aria-hidden="true"></div>')
    }

    var i = "_aui-internal-layer-", n = "_aui-internal-layer-global-";
    t.prototype.changeSize = function (e, t) {
        return this.$el.css("width", e), this.$el.css("height", "content" === t ? "" : t), this
    }, t.prototype.on = function (e, t) {
        return this.$el.on(i + e, t), this
    }, t.prototype.show = function () {
        return this.$el.is(":visible") ? this : (AJS.LayerManager.global.push(this.$el), this)
    }, t.prototype.hide = function () {
        return this.$el.is(":visible") ? (AJS.LayerManager.global.popUntil(this.$el), this) : this
    }, t.prototype.remove = function () {
        this.hide(), this.$el.remove(), this.$el = null
    }, t.prototype._showLayer = function (t) {
        this.$el.parent().is("body") || this.$el.appendTo(document.body), this.$el.data("_aui-layer-cached-z-index", this.$el.css("z-index")), this.$el.css("z-index", t), this.$el.attr("aria-hidden", "false"), AJS.FocusManager.global.enter(this.$el), this.$el.trigger(i + "show"), e(document).trigger(n + "show", [this.$el])
    }, t.prototype._hideLayer = function () {
        AJS.FocusManager.global.exit(this.$el), this.$el.attr("aria-hidden", "true"), this.$el.css("z-index", this.$el.data("_aui-layer-cached-z-index") || ""), this.$el.data("_aui-layer-cached-z-index", ""), this.$el.trigger(i + "hide"), e(document).trigger(n + "hide", [this.$el])
    }, t.prototype.isBlanketed = function () {
        return"true" === this.$el.attr("data-aui-blanketed")
    }, t.prototype.isModal = function () {
        return"true" === this.$el.attr("data-aui-modal")
    }, AJS.layer = AJS._internal.widget("layer", t), AJS.layer.on = function (t, i) {
        return e(document).on(n + t, i), this
    }
}(AJS.$), AJS.popup = function (e) {
    var t = {width: 800, height: 600, closeOnOutsideClick: !1, keypressListener: function (e) {
        27 === e.keyCode && i.is(":visible") && l.hide()
    }};
    "object" != typeof e && (e = {width: arguments[0], height: arguments[1], id: arguments[2]}, e = AJS.$.extend({}, e, arguments[3])), e = AJS.$.extend({}, t, e);
    var i = AJS("div").addClass("aui-popup");
    e.id && i.attr("id", e.id);
    var n = 3e3;
    AJS.$(".aui-dialog").each(function () {
        var e = AJS.$(this);
        n = e.css("z-index") > n ? e.css("z-index") : n
    });
    var r = function (t, r) {
        return e.width = t = t || e.width, e.height = r = r || e.height, i.css({marginTop: -Math.round(r / 2) + "px", marginLeft: -Math.round(t / 2) + "px", width: t, height: r, "z-index": parseInt(n, 10) + 2}), arguments.callee
    }(e.width, e.height);
    AJS.$("body").append(i), i.hide(), AJS.enable(i);
    var s = AJS.$(".aui-blanket"), a = function (e, t) {
        var i = AJS.$(e, t);
        return i.length ? (i.focus(), !0) : !1
    }, o = function (t) {
        if (0 === AJS.$(".dialog-page-body", t).find(":focus").length) {
            if (e.focusSelector)return a(e.focusSelector, t);
            var i = ":input:visible:enabled:first";
            a(i, AJS.$(".dialog-page-body", t)) || a(i, AJS.$(".dialog-button-panel", t)) || a(i, AJS.$(".dialog-page-menu", t))
        }
    }, l = {changeSize: function (t, i) {
        (t && t != e.width || i && i != e.height) && r(t, i), this.show()
    }, show: function () {
        var t = function () {
            AJS.$(document).off("keydown", e.keypressListener).on("keydown", e.keypressListener), AJS.dim(), s = AJS.$(".aui-blanket"), 0 != s.size() && e.closeOnOutsideClick && s.click(function () {
                i.is(":visible") && l.hide()
            }), i.show(), AJS.popup.current = this, o(i), AJS.$(document).trigger("showLayer", ["popup", this])
        };
        t.call(this), this.show = t
    }, hide: function () {
        AJS.$(document).unbind("keydown", e.keypressListener), s.unbind(), this.element.hide(), 0 == AJS.$(".aui-dialog:visible").size() && AJS.undim();
        var t = document.activeElement;
        this.element.has(t).length && t.blur(), AJS.$(document).trigger("hideLayer", ["popup", this]), AJS.popup.current = null, this.enable()
    }, element: i, remove: function () {
        i.remove(), this.element = null
    }, disable: function () {
        this.disabled || (this.popupBlanket = AJS.$("<div class='dialog-blanket'> </div>").css({height: i.height(), width: i.width()}), i.append(this.popupBlanket), this.disabled = !0)
    }, enable: function () {
        this.disabled && (this.disabled = !1, this.popupBlanket.remove(), this.popupBlanket = null)
    }};
    return l
}, function () {
    function e(e, t, i, n) {
        e.buttonpanel || e.addButtonPanel(), this.page = e, this.onclick = i, this._onclick = function () {
            return i.call(this, e.dialog, e) === !0
        }, this.item = AJS("button", t).addClass("button-panel-button"), n && this.item.addClass(n), "function" == typeof i && this.item.click(this._onclick), e.buttonpanel.append(this.item), this.id = e.button.length, e.button[this.id] = this
    }

    function t(e, t, i, n, r) {
        e.buttonpanel || e.addButtonPanel(), r || (r = "#"), this.page = e, this.onclick = i, this._onclick = function () {
            return i.call(this, e.dialog, e) === !0
        }, this.item = AJS("a", t).attr("href", r).addClass("button-panel-link"), n && this.item.addClass(n), "function" == typeof i && this.item.click(this._onclick), e.buttonpanel.append(this.item), this.id = e.button.length, e.button[this.id] = this
    }

    function i(e, t) {
        var i = "left" == e ? -1 : 1;
        return function (e) {
            var n = this.page[t];
            if (this.id != (1 == i ? n.length - 1 : 0)) {
                i *= e || 1, n[this.id + i].item[0 > i ? "before" : "after"](this.item), n.splice(this.id, 1), n.splice(this.id + i, 0, this);
                for (var r = 0, s = n.length; s > r; r++)"panel" == t && this.page.curtab == n[r].id && (this.page.curtab = r), n[r].id = r
            }
            return this
        }
    }

    function n(e) {
        return function () {
            this.page[e].splice(this.id, 1);
            for (var t = 0, i = this.page[e].length; i > t; t++)this.page[e][t].id = t;
            this.item.remove()
        }
    }

    e.prototype.moveUp = e.prototype.moveLeft = i("left", "button"), e.prototype.moveDown = e.prototype.moveRight = i("right", "button"), e.prototype.remove = n("button"), e.prototype.html = function (e) {
        return this.item.html(e)
    }, e.prototype.onclick = function (e) {
        return e === void 0 ? this.onclick : (this.item.unbind("click", this._onclick), this._onclick = function () {
            return e.call(this, page.dialog, page) === !0
        }, "function" == typeof e && this.item.click(this._onclick), void 0)
    };
    var r = 20, s = function (e, t, i, n, s) {
        i instanceof AJS.$ || (i = AJS.$(i)), this.dialog = e.dialog, this.page = e, this.id = e.panel.length, this.button = AJS("button").html(t).addClass("item-button"), s && (this.button[0].id = s), this.item = AJS("li").append(this.button).addClass("page-menu-item"), this.body = AJS("div").append(i).addClass("dialog-panel-body").css("height", e.dialog.height + "px"), this.padding = r, n && this.body.addClass(n);
        var a = e.panel.length, o = this;
        e.menu.append(this.item), e.body.append(this.body), e.panel[a] = this;
        var l = function () {
            var t;
            e.curtab + 1 && (t = e.panel[e.curtab], t.body.hide(), t.item.removeClass("selected"), "function" == typeof t.onblur && t.onblur()), e.curtab = o.id, o.body.show(), o.item.addClass("selected"), "function" == typeof o.onselect && o.onselect(), "function" == typeof e.ontabchange && e.ontabchange(o, t)
        };
        this.button.click ? this.button.click(l) : (AJS.log("atlassian-dialog:Panel:constructor - this.button.click false"), this.button.onclick = l), l(), 0 == a ? e.menu.css("display", "none") : e.menu.show()
    };
    s.prototype.select = function () {
        this.button.click()
    }, s.prototype.moveUp = s.prototype.moveLeft = i("left", "panel"), s.prototype.moveDown = s.prototype.moveRight = i("right", "panel"), s.prototype.remove = n("panel"), s.prototype.html = function (e) {
        return e ? (this.body.html(e), this) : this.body.html()
    }, s.prototype.setPadding = function (e) {
        return isNaN(+e) || (this.body.css("padding", +e), this.padding = +e, this.page.recalcSize()), this
    };
    var a = 56, o = 51, l = 50, c = function (e, t) {
        this.dialog = e, this.id = e.page.length, this.element = AJS("div").addClass("dialog-components"), this.body = AJS("div").addClass("dialog-page-body"), this.menu = AJS("ul").addClass("dialog-page-menu").css("height", e.height + "px"), this.body.append(this.menu), this.curtab, this.panel = [], this.button = [], t && this.body.addClass(t), e.popup.element.append(this.element.append(this.menu).append(this.body)), e.page[e.page.length] = this
    };
    c.prototype.recalcSize = function () {
        for (var e = this.header ? a : 0, t = this.buttonpanel ? o : 0, i = this.panel.length; i--;) {
            var n = this.dialog.height - e - t;
            this.panel[i].body.css("height", n), this.menu.css("height", n)
        }
    }, c.prototype.addButtonPanel = function () {
        this.buttonpanel = AJS("div").addClass("dialog-button-panel"), this.element.append(this.buttonpanel)
    }, c.prototype.addPanel = function (e, t, i, n) {
        return new s(this, e, t, i, n), this.recalcSize(), this
    }, c.prototype.addHeader = function (e, t) {
        return this.header && this.header.remove(), this.header = AJS("h2").text(e || "").addClass("dialog-title"), t && this.header.addClass(t), this.element.prepend(this.header), this.recalcSize(), this
    }, c.prototype.addButton = function (t, i, n) {
        return new e(this, t, i, n), this.recalcSize(), this
    }, c.prototype.addLink = function (e, i, n, r) {
        return new t(this, e, i, n, r), this.recalcSize(), this
    }, c.prototype.gotoPanel = function (e) {
        this.panel[e.id || e].select()
    }, c.prototype.getCurrentPanel = function () {
        return this.panel[this.curtab]
    }, c.prototype.hide = function () {
        this.element.hide()
    }, c.prototype.show = function () {
        this.element.show()
    }, c.prototype.remove = function () {
        this.element.remove()
    }, AJS.Dialog = function (e, t, i) {
        var n = {};
        +e || (n = Object(e), e = n.width, t = n.height, i = n.id), this.height = t || 480, this.width = e || 640, this.id = i, n = AJS.$.extend({}, n, {width: this.width, height: this.height, id: this.id}), this.popup = AJS.popup(n), this.popup.element.addClass("aui-dialog"), this.page = [], this.curpage = 0, new c(this)
    }, AJS.Dialog.prototype.addHeader = function (e, t) {
        return this.page[this.curpage].addHeader(e, t), this
    }, AJS.Dialog.prototype.addButton = function (e, t, i) {
        return this.page[this.curpage].addButton(e, t, i), this
    }, AJS.Dialog.prototype.addLink = function (e, t, i, n) {
        return this.page[this.curpage].addLink(e, t, i, n), this
    }, AJS.Dialog.prototype.addSubmit = function (e, t) {
        return this.page[this.curpage].addButton(e, t, "button-panel-submit-button"), this
    }, AJS.Dialog.prototype.addCancel = function (e, t) {
        return this.page[this.curpage].addLink(e, t, "button-panel-cancel-link"), this
    }, AJS.Dialog.prototype.addButtonPanel = function () {
        return this.page[this.curpage].addButtonPanel(), this
    }, AJS.Dialog.prototype.addPanel = function (e, t, i, n) {
        return this.page[this.curpage].addPanel(e, t, i, n), this
    }, AJS.Dialog.prototype.addPage = function (e) {
        return new c(this, e), this.page[this.curpage].hide(), this.curpage = this.page.length - 1, this
    }, AJS.Dialog.prototype.nextPage = function () {
        return this.page[this.curpage++].hide(), this.curpage >= this.page.length && (this.curpage = 0), this.page[this.curpage].show(), this
    }, AJS.Dialog.prototype.prevPage = function () {
        return this.page[this.curpage--].hide(), 0 > this.curpage && (this.curpage = this.page.length - 1), this.page[this.curpage].show(), this
    }, AJS.Dialog.prototype.gotoPage = function (e) {
        return this.page[this.curpage].hide(), this.curpage = e, 0 > this.curpage ? this.curpage = this.page.length - 1 : this.curpage >= this.page.length && (this.curpage = 0), this.page[this.curpage].show(), this
    }, AJS.Dialog.prototype.getPanel = function (e, t) {
        var i = null == t ? this.curpage : e;
        return null == t && (t = e), this.page[i].panel[t]
    }, AJS.Dialog.prototype.getPage = function (e) {
        return this.page[e]
    }, AJS.Dialog.prototype.getCurrentPanel = function () {
        return this.page[this.curpage].getCurrentPanel()
    }, AJS.Dialog.prototype.gotoPanel = function (e, t) {
        if (null != t) {
            var i = e.id || e;
            this.gotoPage(i)
        }
        this.page[this.curpage].gotoPanel(t === void 0 ? e : t)
    }, AJS.Dialog.prototype.show = function () {
        return this.popup.show(), AJS.trigger("show.dialog", {dialog: this}), this
    }, AJS.Dialog.prototype.hide = function () {
        return this.popup.hide(), AJS.trigger("hide.dialog", {dialog: this}), this
    }, AJS.Dialog.prototype.remove = function () {
        this.popup.hide(), this.popup.remove(), AJS.trigger("remove.dialog", {dialog: this})
    }, AJS.Dialog.prototype.disable = function () {
        return this.popup.disable(), this
    }, AJS.Dialog.prototype.enable = function () {
        return this.popup.enable(), this
    }, AJS.Dialog.prototype.get = function (e) {
        var t = [], i = this, n = '#([^"][^ ]*|"[^"]*")', r = ":(\\d+)", s = "page|panel|button|header", a = "(?:(" + s + ")(?:" + n + "|" + r + ")?" + "|" + n + ")", o = RegExp("(?:^|,)\\s*" + a + "(?:\\s+" + a + ")?" + "\\s*(?=,|$)", "ig");
        (e + "").replace(o, function (e, n, r, s, a, o, l, c, u) {
            n = n && n.toLowerCase();
            var d = [];
            if ("page" == n && i.page[s] ? (d.push(i.page[s]), n = o, n = n && n.toLowerCase(), r = l, s = c, a = u) : d = i.page, r = r && (r + "").replace(/"/g, ""), l = l && (l + "").replace(/"/g, ""), a = a && (a + "").replace(/"/g, ""), u = u && (u + "").replace(/"/g, ""), n || a)for (var h = d.length; h--;) {
                if (a || "panel" == n && (r || !r && null == s))for (var p = d[h].panel.length; p--;)(d[h].panel[p].button.html() == a || d[h].panel[p].button.html() == r || "panel" == n && !r && null == s) && t.push(d[h].panel[p]);
                if (a || "button" == n && (r || !r && null == s))for (var p = d[h].button.length; p--;)(d[h].button[p].item.html() == a || d[h].button[p].item.html() == r || "button" == n && !r && null == s) && t.push(d[h].button[p]);
                d[h][n] && d[h][n][s] && t.push(d[h][n][s]), "header" == n && d[h].header && t.push(d[h].header)
            } else t = t.concat(d)
        });
        for (var l = {length: t.length}, c = t.length; c--;) {
            l[c] = t[c];
            for (var u in t[c])u in l || function (e) {
                l[e] = function () {
                    for (var t = this.length; t--;)"function" == typeof this[t][e] && this[t][e].apply(this[t], arguments)
                }
            }(u)
        }
        return l
    }, AJS.Dialog.prototype.updateHeight = function () {
        for (var e = 0, t = AJS.$(window).height() - a - o - 2 * l, i = 0; this.getPanel(i); i++)this.getPanel(i).body.css({height: "auto", display: "block"}).outerHeight() > e && (e = Math.min(t, this.getPanel(i).body.outerHeight())), i !== this.page[this.curpage].curtab && this.getPanel(i).body.css({display: "none"});
        for (i = 0; this.getPanel(i); i++)this.getPanel(i).body.css({height: e || this.height});
        this.page[0].menu.height(e), this.height = e + a + o + 1, this.popup.changeSize(void 0, this.height)
    }, AJS.Dialog.prototype.isMaximised = function () {
        return this.popup.element.outerHeight() >= AJS.$(window).height() - 2 * l
    }, AJS.Dialog.prototype.getCurPanel = function () {
        return this.getPanel(this.page[this.curpage].curtab)
    }, AJS.Dialog.prototype.getCurPanelButton = function () {
        return this.getCurPanel().button
    }
}(), function (e) {
    function t() {
        var t, i, n = [], r = e(window), s = function (e) {
            function n(e) {
                return a.indexOf(" " + e + " ") >= 0
            }

            var r, s, a = " " + e.$el[0].className + " ", o = n("aui-dialog2-small") ? "small" : n("aui-dialog2-medium") ? "medium" : n("aui-dialog2-large") ? "large" : n("aui-dialog2-xlarge") ? "xlarge" : "custom";
            switch (o) {
                case"small":
                    r = i > 420, s = t > 500;
                    break;
                case"medium":
                    r = i > 620, s = t > 500;
                    break;
                case"large":
                    r = i > 820, s = t > 700;
                    break;
                case"xlarge":
                    r = i > 1e3, s = t > 700;
                    break;
                default:
                    r = !0, s = !0
            }
            e.$el.toggleClass("aui-dialog2-fullscreen", !r).css("height", t - 107 - (r ? 200 : 0)), e.$el.find(".aui-dialog2-content").css("min-height", s ? "" : t > 500 ? "193px" : "93px")
        }, a = function () {
            t = r.height(), i = r.width();
            for (var e = 0, a = n.length; a > e; e++)s(n[e])
        }, o = function (e) {
            n.length || (t = r.height(), i = r.width(), r.on("resize", a)), s(e), n.push(e)
        }, l = function (t) {
            n = e.grep(n, function (e) {
                return t !== e
            }), n.length || r.off("resize", a)
        };
        return{show: o, hide: l}
    }

    function i(e, i) {
        s || (s = AJS._internal.browser.supportsCalc() ? {} : t()), s[i] && s[i](e)
    }

    function n(e) {
        jQuery.each(a, function (t, i) {
            var n = "data-" + t;
            e[0].hasAttribute(n) || e.attr(n, i)
        })
    }

    function r(t) {
        this.$el = t ? e(t) : e(AJS.parseHtml(e(aui.dialog.dialog2({})))), n(this.$el)
    }

    var s, a = {"aui-focus-selector": ".aui-dialog2-content :input:visible:enabled", "aui-blanketed": "true"};
    r.prototype.on = function (e, t) {
        return AJS.layer(this.$el).on(e, t), this
    }, r.prototype.show = function () {
        return i(this, "show"), AJS.layer(this.$el).show(), this
    }, r.prototype.hide = function () {
        return i(this, "hide"), AJS.layer(this.$el).hide(), this.$el.data("aui-remove-on-hide") && AJS.layer(this.$el).remove(), this
    }, r.prototype.remove = function () {
        return i(this, "hide"), AJS.layer(this.$el).remove(), this
    }, AJS.dialog2 = AJS._internal.widget("dialog2", r), AJS.dialog2.on = function (e, t) {
        AJS.layer.on(e, function (e, i) {
            i.is(".aui-dialog2") && t.apply(this, arguments)
        })
    }, e(document).on("click", ".aui-dialog2-header-close", function (t) {
        t.preventDefault(), AJS.dialog2(e(this).closest(".aui-dialog2")).hide()
    })
}(AJS.$), function (e) {
    "use strict";
    var t = 0;
    AJS.DatePicker = function (i, n) {
        var r, s, a, o;
        return r = {}, o = t++, a = e(i), a.attr("data-aui-dp-uuid", o), n = e.extend(void 0, AJS.DatePicker.prototype.defaultOptions, n), r.getField = function () {
            return a
        }, r.getOptions = function () {
            return n
        }, s = function () {
            var t, i, s, l, c, u, d, h, p, f, g;
            r.hide = function () {
                d = !0, f.hide(), d = !1
            }, r.show = function () {
                f.show()
            }, u = function () {
                g.off(), t = e("<div/>"), t.attr("data-aui-dp-popup-uuid", o), g.append(t);
                var i = {dateFormat: e.datepicker.W3C, defaultDate: a.val(), maxDate: a.attr("max"), minDate: a.attr("min"), nextText: ">", onSelect: function (e) {
                    a.val(e), a.change(), r.hide(), h = !0, a.focus()
                }, prevText: "<"};
                n.languageCode in AJS.DatePicker.prototype.localisations || (n.languageCode = ""), e.extend(i, AJS.DatePicker.prototype.localisations[n.languageCode]), n.firstDay > -1 && (i.firstDay = n.firstDay), a.attr("step") !== void 0 && AJS.log("WARNING: The AJS date picker polyfill currently does not support the step attribute!"), t.datepicker(i), a.on("focusout", s), a.on("propertychange keyup input paste", c)
            }, i = function (t) {
                var i = e(t.target);
                t.preventDefault(), i.closest(g).length || i.is(a) || i.closest("body").length && r.hide()
            }, s = function () {
                p || (e("body").on("focus blur click mousedown", "*", i), p = !0)
            }, l = function () {
                h ? h = !1 : r.show()
            }, c = function () {
                t.datepicker("setDate", a.val()), t.datepicker("option", {maxDate: a.attr("max"), minDate: a.attr("min")})
            }, r.destroyPolyfill = function () {
                r.hide(), a.attr("placeholder", null), a.off("propertychange keyup input paste", c), a.off("focus click", l), a.off("focusout", s), a.attr("type", "date"), t !== void 0 && t.datepicker("destroy"), delete r.destroyPolyfill, delete r.show, delete r.hide
            }, d = !1, h = !1, p = !1, f = AJS.InlineDialog(a, void 0, function (e, i, n) {
                t === void 0 && (g = e, u()), n()
            }, {hideCallback: function () {
                e("body").off("focus blur click mousedown", "*", i), p = !1
            }, hideDelay: null, noBind: !0, preHideCallback: function () {
                return d
            }, width: 300}), a.on("focus click", l), a.attr("placeholder", "YYYY-MM-DD"), n.overrideBrowserDefault && AJS.DatePicker.prototype.browserSupportsDateField && (a[0].type = "text")
        }, r.reset = function () {
            "function" == typeof r.destroyPolyfill && r.destroyPolyfill(), (!AJS.DatePicker.prototype.browserSupportsDateField || n.overrideBrowserDefault) && s()
        }, r.reset(), r
    }, AJS.DatePicker.prototype.browserSupportsDateField = "date" === e('<input type="date" />')[0].type, AJS.DatePicker.prototype.defaultOptions = {overrideBrowserDefault: !1, firstDay: -1, languageCode: AJS.$("html").attr("lang") || "en-AU"}, AJS.DatePicker.prototype.localisations = {"": {dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], firstDay: 0, isRTL: !1, monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], showMonthAfterYear: !1, yearSuffix: ""}, af: {dayNames: ["Sondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrydag", "Saterdag"], dayNamesMin: ["Son", "Maa", "Din", "Woe", "Don", "Vry", "Sat"], firstDay: 1, isRTL: !1, monthNames: ["Januarie", "Februarie", "Maart", "April", "Mei", "Junie", "Julie", "Augustus", "September", "Oktober", "November", "Desember"], showMonthAfterYear: !1, yearSuffix: ""}, "ar-DZ": {dayNames: ["\u00d8\u00a7\u00d9\u201e\u00d8\u00a3\u00d8\u00ad\u00d8\u00af", "\u00d8\u00a7\u00d9\u201e\u00d8\u00a7\u00d8\u00ab\u00d9\u2020\u00d9\u0160\u00d9\u2020", "\u00d8\u00a7\u00d9\u201e\u00d8\u00ab\u00d9\u201e\u00d8\u00a7\u00d8\u00ab\u00d8\u00a7\u00d8\u00a1", "\u00d8\u00a7\u00d9\u201e\u00d8\u00a3\u00d8\u00b1\u00d8\u00a8\u00d8\u00b9\u00d8\u00a7\u00d8\u00a1", "\u00d8\u00a7\u00d9\u201e\u00d8\u00ae\u00d9\u2026\u00d9\u0160\u00d8\u00b3", "\u00d8\u00a7\u00d9\u201e\u00d8\u00ac\u00d9\u2026\u00d8\u00b9\u00d8\u00a9", "\u00d8\u00a7\u00d9\u201e\u00d8\u00b3\u00d8\u00a8\u00d8\u00aa"], dayNamesMin: ["\u00d8\u00a7\u00d9\u201e\u00d8\u00a3\u00d8\u00ad\u00d8\u00af", "\u00d8\u00a7\u00d9\u201e\u00d8\u00a7\u00d8\u00ab\u00d9\u2020\u00d9\u0160\u00d9\u2020", "\u00d8\u00a7\u00d9\u201e\u00d8\u00ab\u00d9\u201e\u00d8\u00a7\u00d8\u00ab\u00d8\u00a7\u00d8\u00a1", "\u00d8\u00a7\u00d9\u201e\u00d8\u00a3\u00d8\u00b1\u00d8\u00a8\u00d8\u00b9\u00d8\u00a7\u00d8\u00a1", "\u00d8\u00a7\u00d9\u201e\u00d8\u00ae\u00d9\u2026\u00d9\u0160\u00d8\u00b3", "\u00d8\u00a7\u00d9\u201e\u00d8\u00ac\u00d9\u2026\u00d8\u00b9\u00d8\u00a9", "\u00d8\u00a7\u00d9\u201e\u00d8\u00b3\u00d8\u00a8\u00d8\u00aa"], firstDay: 6, isRTL: !0, monthNames: ["\u00d8\u00ac\u00d8\u00a7\u00d9\u2020\u00d9\u0081\u00d9\u0160", "\u00d9\u0081\u00d9\u0160\u00d9\u0081\u00d8\u00b1\u00d9\u0160", "\u00d9\u2026\u00d8\u00a7\u00d8\u00b1\u00d8\u00b3", "\u00d8\u00a3\u00d9\u0081\u00d8\u00b1\u00d9\u0160\u00d9\u201e", "\u00d9\u2026\u00d8\u00a7\u00d9\u0160", "\u00d8\u00ac\u00d9\u02c6\u00d8\u00a7\u00d9\u2020", "\u00d8\u00ac\u00d9\u02c6\u00d9\u0160\u00d9\u201e\u00d9\u0160\u00d8\u00a9", "\u00d8\u00a3\u00d9\u02c6\u00d8\u00aa", "\u00d8\u00b3\u00d8\u00a8\u00d8\u00aa\u00d9\u2026\u00d8\u00a8\u00d8\u00b1", "\u00d8\u00a3\u00d9\u0192\u00d8\u00aa\u00d9\u02c6\u00d8\u00a8\u00d8\u00b1", "\u00d9\u2020\u00d9\u02c6\u00d9\u0081\u00d9\u2026\u00d8\u00a8\u00d8\u00b1", "\u00d8\u00af\u00d9\u0160\u00d8\u00b3\u00d9\u2026\u00d8\u00a8\u00d8\u00b1"], showMonthAfterYear: !1, yearSuffix: ""}, ar: {dayNames: ["\u00d8\u00a7\u00d9\u201e\u00d8\u00a3\u00d8\u00ad\u00d8\u00af", "\u00d8\u00a7\u00d9\u201e\u00d8\u00a7\u00d8\u00ab\u00d9\u2020\u00d9\u0160\u00d9\u2020", "\u00d8\u00a7\u00d9\u201e\u00d8\u00ab\u00d9\u201e\u00d8\u00a7\u00d8\u00ab\u00d8\u00a7\u00d8\u00a1", "\u00d8\u00a7\u00d9\u201e\u00d8\u00a3\u00d8\u00b1\u00d8\u00a8\u00d8\u00b9\u00d8\u00a7\u00d8\u00a1", "\u00d8\u00a7\u00d9\u201e\u00d8\u00ae\u00d9\u2026\u00d9\u0160\u00d8\u00b3", "\u00d8\u00a7\u00d9\u201e\u00d8\u00ac\u00d9\u2026\u00d8\u00b9\u00d8\u00a9", "\u00d8\u00a7\u00d9\u201e\u00d8\u00b3\u00d8\u00a8\u00d8\u00aa"], dayNamesMin: ["\u00d8\u00a7\u00d9\u201e\u00d8\u00a3\u00d8\u00ad\u00d8\u00af", "\u00d8\u00a7\u00d9\u201e\u00d8\u00a7\u00d8\u00ab\u00d9\u2020\u00d9\u0160\u00d9\u2020", "\u00d8\u00a7\u00d9\u201e\u00d8\u00ab\u00d9\u201e\u00d8\u00a7\u00d8\u00ab\u00d8\u00a7\u00d8\u00a1", "\u00d8\u00a7\u00d9\u201e\u00d8\u00a3\u00d8\u00b1\u00d8\u00a8\u00d8\u00b9\u00d8\u00a7\u00d8\u00a1", "\u00d8\u00a7\u00d9\u201e\u00d8\u00ae\u00d9\u2026\u00d9\u0160\u00d8\u00b3", "\u00d8\u00a7\u00d9\u201e\u00d8\u00ac\u00d9\u2026\u00d8\u00b9\u00d8\u00a9", "\u00d8\u00a7\u00d9\u201e\u00d8\u00b3\u00d8\u00a8\u00d8\u00aa"], firstDay: 6, isRTL: !0, monthNames: ["\u00d9\u0192\u00d8\u00a7\u00d9\u2020\u00d9\u02c6\u00d9\u2020 \u00d8\u00a7\u00d9\u201e\u00d8\u00ab\u00d8\u00a7\u00d9\u2020\u00d9\u0160", "\u00d8\u00b4\u00d8\u00a8\u00d8\u00a7\u00d8\u00b7", "\u00d8\u00a2\u00d8\u00b0\u00d8\u00a7\u00d8\u00b1", "\u00d9\u2020\u00d9\u0160\u00d8\u00b3\u00d8\u00a7\u00d9\u2020", "\u00d9\u2026\u00d8\u00a7\u00d9\u0160\u00d9\u02c6", "\u00d8\u00ad\u00d8\u00b2\u00d9\u0160\u00d8\u00b1\u00d8\u00a7\u00d9\u2020", "\u00d8\u00aa\u00d9\u2026\u00d9\u02c6\u00d8\u00b2", "\u00d8\u00a2\u00d8\u00a8", "\u00d8\u00a3\u00d9\u0160\u00d9\u201e\u00d9\u02c6\u00d9\u201e", "\u00d8\u00aa\u00d8\u00b4\u00d8\u00b1\u00d9\u0160\u00d9\u2020 \u00d8\u00a7\u00d9\u201e\u00d8\u00a3\u00d9\u02c6\u00d9\u201e", "\u00d8\u00aa\u00d8\u00b4\u00d8\u00b1\u00d9\u0160\u00d9\u2020 \u00d8\u00a7\u00d9\u201e\u00d8\u00ab\u00d8\u00a7\u00d9\u2020\u00d9\u0160", "\u00d9\u0192\u00d8\u00a7\u00d9\u2020\u00d9\u02c6\u00d9\u2020 \u00d8\u00a7\u00d9\u201e\u00d8\u00a3\u00d9\u02c6\u00d9\u201e"], showMonthAfterYear: !1, yearSuffix: ""}, az: {dayNames: ["Bazar", "Bazar ert\u00c9\u2122si", "\u00c3\u2021\u00c9\u2122r\u00c5\u0178\u00c9\u2122nb\u00c9\u2122 ax\u00c5\u0178am\u00c4\u00b1", "\u00c3\u2021\u00c9\u2122r\u00c5\u0178\u00c9\u2122nb\u00c9\u2122", "C\u00c3\u00bcm\u00c9\u2122 ax\u00c5\u0178am\u00c4\u00b1", "C\u00c3\u00bcm\u00c9\u2122", "\u00c5\u017e\u00c9\u2122nb\u00c9\u2122"], dayNamesMin: ["B", "Be", "\u00c3\u2021a", "\u00c3\u2021", "Ca", "C", "\u00c5\u017e"], firstDay: 1, isRTL: !1, monthNames: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "\u00c4\u00b0yun", "\u00c4\u00b0yul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"], showMonthAfterYear: !1, yearSuffix: ""}, bg: {dayNames: ["\u00d0\u009d\u00d0\u00b5\u00d0\u00b4\u00d0\u00b5\u00d0\u00bb\u00d1\u008f", "\u00d0\u0178\u00d0\u00be\u00d0\u00bd\u00d0\u00b5\u00d0\u00b4\u00d0\u00b5\u00d0\u00bb\u00d0\u00bd\u00d0\u00b8\u00d0\u00ba", "\u00d0\u2019\u00d1\u201a\u00d0\u00be\u00d1\u20ac\u00d0\u00bd\u00d0\u00b8\u00d0\u00ba", "\u00d0\u00a1\u00d1\u20ac\u00d1\u008f\u00d0\u00b4\u00d0\u00b0", "\u00d0\u00a7\u00d0\u00b5\u00d1\u201a\u00d0\u00b2\u00d1\u0160\u00d1\u20ac\u00d1\u201a\u00d1\u0160\u00d0\u00ba", "\u00d0\u0178\u00d0\u00b5\u00d1\u201a\u00d1\u0160\u00d0\u00ba", "\u00d0\u00a1\u00d1\u0160\u00d0\u00b1\u00d0\u00be\u00d1\u201a\u00d0\u00b0"], dayNamesMin: ["\u00d0\u009d\u00d0\u00b5\u00d0\u00b4", "\u00d0\u0178\u00d0\u00be\u00d0\u00bd", "\u00d0\u2019\u00d1\u201a\u00d0\u00be", "\u00d0\u00a1\u00d1\u20ac\u00d1\u008f", "\u00d0\u00a7\u00d0\u00b5\u00d1\u201a", "\u00d0\u0178\u00d0\u00b5\u00d1\u201a", "\u00d0\u00a1\u00d1\u0160\u00d0\u00b1"], firstDay: 1, isRTL: !1, monthNames: ["\u00d0\u00af\u00d0\u00bd\u00d1\u0192\u00d0\u00b0\u00d1\u20ac\u00d0\u00b8", "\u00d0\u00a4\u00d0\u00b5\u00d0\u00b2\u00d1\u20ac\u00d1\u0192\u00d0\u00b0\u00d1\u20ac\u00d0\u00b8", "\u00d0\u0153\u00d0\u00b0\u00d1\u20ac\u00d1\u201a", "\u00d0\u0090\u00d0\u00bf\u00d1\u20ac\u00d0\u00b8\u00d0\u00bb", "\u00d0\u0153\u00d0\u00b0\u00d0\u00b9", "\u00d0\u00ae\u00d0\u00bd\u00d0\u00b8", "\u00d0\u00ae\u00d0\u00bb\u00d0\u00b8", "\u00d0\u0090\u00d0\u00b2\u00d0\u00b3\u00d1\u0192\u00d1\u0081\u00d1\u201a", "\u00d0\u00a1\u00d0\u00b5\u00d0\u00bf\u00d1\u201a\u00d0\u00b5\u00d0\u00bc\u00d0\u00b2\u00d1\u20ac\u00d0\u00b8", "\u00d0\u017e\u00d0\u00ba\u00d1\u201a\u00d0\u00be\u00d0\u00bc\u00d0\u00b2\u00d1\u20ac\u00d0\u00b8", "\u00d0\u009d\u00d0\u00be\u00d0\u00b5\u00d0\u00bc\u00d0\u00b2\u00d1\u20ac\u00d0\u00b8", "\u00d0\u201d\u00d0\u00b5\u00d0\u00ba\u00d0\u00b5\u00d0\u00bc\u00d0\u00b2\u00d1\u20ac\u00d0\u00b8"], showMonthAfterYear: !1, yearSuffix: ""}, bs: {dayNames: ["Nedelja", "Ponedeljak", "Utorak", "Srijeda", "\u00c4\u0152etvrtak", "Petak", "Subota"], dayNamesMin: ["Ned", "Pon", "Uto", "Sri", "\u00c4\u0152et", "Pet", "Sub"], firstDay: 1, isRTL: !1, monthNames: ["Januar", "Februar", "Mart", "April", "Maj", "Juni", "Juli", "August", "Septembar", "Oktobar", "Novembar", "Decembar"], showMonthAfterYear: !1, yearSuffix: ""}, ca: {dayNames: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"], dayNamesMin: ["Dug", "Dln", "Dmt", "Dmc", "Djs", "Dvn", "Dsb"], firstDay: 1, isRTL: !1, monthNames: ["Gener", "Febrer", "Mar&ccedil;", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"], showMonthAfterYear: !1, yearSuffix: ""}, cs: {dayNames: ["ned\u00c4\u203ale", "pond\u00c4\u203al\u00c3\u00ad", "\u00c3\u00bater\u00c3\u00bd", "st\u00c5\u2122eda", "\u00c4\u008dtvrtek", "p\u00c3\u00a1tek", "sobota"], dayNamesMin: ["ne", "po", "\u00c3\u00bat", "st", "\u00c4\u008dt", "p\u00c3\u00a1", "so"], firstDay: 1, isRTL: !1, monthNames: ["leden", "\u00c3\u00banor", "b\u00c5\u2122ezen", "duben", "kv\u00c4\u203aten", "\u00c4\u008derven", "\u00c4\u008dervenec", "srpen", "z\u00c3\u00a1\u00c5\u2122\u00c3\u00ad", "\u00c5\u2122\u00c3\u00adjen", "listopad", "prosinec"], showMonthAfterYear: !1, yearSuffix: ""}, "cy-GB": {dayNames: ["Dydd Sul", "Dydd Llun", "Dydd Mawrth", "Dydd Mercher", "Dydd Iau", "Dydd Gwener", "Dydd Sadwrn"], dayNamesMin: ["Sul", "Llu", "Maw", "Mer", "Iau", "Gwe", "Sad"], firstDay: 1, isRTL: !1, monthNames: ["Ionawr", "Chwefror", "Mawrth", "Ebrill", "Mai", "Mehefin", "Gorffennaf", "Awst", "Medi", "Hydref", "Tachwedd", "Rhagfyr"], showMonthAfterYear: !1, yearSuffix: ""}, da: {dayNames: ["S\u00c3\u00b8ndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "L\u00c3\u00b8rdag"], dayNamesMin: ["S\u00c3\u00b8n", "Man", "Tir", "Ons", "Tor", "Fre", "L\u00c3\u00b8r"], firstDay: 1, isRTL: !1, monthNames: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"], showMonthAfterYear: !1, yearSuffix: ""}, de: {dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], dayNamesMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], firstDay: 1, isRTL: !1, monthNames: ["Januar", "Februar", "M\u00c3\u00a4rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"], showMonthAfterYear: !1, yearSuffix: ""}, el: {dayNames: ["\u00ce\u0161\u00cf\u2026\u00cf\u0081\u00ce\u00b9\u00ce\u00b1\u00ce\u00ba\u00ce\u00ae", "\u00ce\u201d\u00ce\u00b5\u00cf\u2026\u00cf\u201e\u00ce\u00ad\u00cf\u0081\u00ce\u00b1", "\u00ce\u00a4\u00cf\u0081\u00ce\u00af\u00cf\u201e\u00ce\u00b7", "\u00ce\u00a4\u00ce\u00b5\u00cf\u201e\u00ce\u00ac\u00cf\u0081\u00cf\u201e\u00ce\u00b7", "\u00ce \u00ce\u00ad\u00ce\u00bc\u00cf\u20ac\u00cf\u201e\u00ce\u00b7", "\u00ce \u00ce\u00b1\u00cf\u0081\u00ce\u00b1\u00cf\u0192\u00ce\u00ba\u00ce\u00b5\u00cf\u2026\u00ce\u00ae", "\u00ce\u00a3\u00ce\u00ac\u00ce\u00b2\u00ce\u00b2\u00ce\u00b1\u00cf\u201e\u00ce\u00bf"], dayNamesMin: ["\u00ce\u0161\u00cf\u2026\u00cf\u0081", "\u00ce\u201d\u00ce\u00b5\u00cf\u2026", "\u00ce\u00a4\u00cf\u0081\u00ce\u00b9", "\u00ce\u00a4\u00ce\u00b5\u00cf\u201e", "\u00ce \u00ce\u00b5\u00ce\u00bc", "\u00ce \u00ce\u00b1\u00cf\u0081", "\u00ce\u00a3\u00ce\u00b1\u00ce\u00b2"], firstDay: 1, isRTL: !1, monthNames: ["\u00ce\u2122\u00ce\u00b1\u00ce\u00bd\u00ce\u00bf\u00cf\u2026\u00ce\u00ac\u00cf\u0081\u00ce\u00b9\u00ce\u00bf\u00cf\u201a", "\u00ce\u00a6\u00ce\u00b5\u00ce\u00b2\u00cf\u0081\u00ce\u00bf\u00cf\u2026\u00ce\u00ac\u00cf\u0081\u00ce\u00b9\u00ce\u00bf\u00cf\u201a", "\u00ce\u0153\u00ce\u00ac\u00cf\u0081\u00cf\u201e\u00ce\u00b9\u00ce\u00bf\u00cf\u201a", "\u00ce\u2018\u00cf\u20ac\u00cf\u0081\u00ce\u00af\u00ce\u00bb\u00ce\u00b9\u00ce\u00bf\u00cf\u201a", "\u00ce\u0153\u00ce\u00ac\u00ce\u00b9\u00ce\u00bf\u00cf\u201a", "\u00ce\u2122\u00ce\u00bf\u00cf\u008d\u00ce\u00bd\u00ce\u00b9\u00ce\u00bf\u00cf\u201a", "\u00ce\u2122\u00ce\u00bf\u00cf\u008d\u00ce\u00bb\u00ce\u00b9\u00ce\u00bf\u00cf\u201a", "\u00ce\u2018\u00cf\u008d\u00ce\u00b3\u00ce\u00bf\u00cf\u2026\u00cf\u0192\u00cf\u201e\u00ce\u00bf\u00cf\u201a", "\u00ce\u00a3\u00ce\u00b5\u00cf\u20ac\u00cf\u201e\u00ce\u00ad\u00ce\u00bc\u00ce\u00b2\u00cf\u0081\u00ce\u00b9\u00ce\u00bf\u00cf\u201a", "\u00ce\u0178\u00ce\u00ba\u00cf\u201e\u00cf\u017d\u00ce\u00b2\u00cf\u0081\u00ce\u00b9\u00ce\u00bf\u00cf\u201a", "\u00ce\u009d\u00ce\u00bf\u00ce\u00ad\u00ce\u00bc\u00ce\u00b2\u00cf\u0081\u00ce\u00b9\u00ce\u00bf\u00cf\u201a", "\u00ce\u201d\u00ce\u00b5\u00ce\u00ba\u00ce\u00ad\u00ce\u00bc\u00ce\u00b2\u00cf\u0081\u00ce\u00b9\u00ce\u00bf\u00cf\u201a"], showMonthAfterYear: !1, yearSuffix: ""}, "en-AU": {dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], firstDay: 1, isRTL: !1, monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], showMonthAfterYear: !1, yearSuffix: ""}, "en-GB": {dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], firstDay: 1, isRTL: !1, monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], showMonthAfterYear: !1, yearSuffix: ""}, "en-NZ": {dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], firstDay: 1, isRTL: !1, monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], showMonthAfterYear: !1, yearSuffix: ""}, eo: {dayNames: ["Diman\u00c4\u2030o", "Lundo", "Mardo", "Merkredo", "\u00c4\u00b4a\u00c5\u00addo", "Vendredo", "Sabato"], dayNamesMin: ["Dim", "Lun", "Mar", "Mer", "\u00c4\u00b4a\u00c5\u00ad", "Ven", "Sab"], firstDay: 0, isRTL: !1, monthNames: ["Januaro", "Februaro", "Marto", "Aprilo", "Majo", "Junio", "Julio", "A\u00c5\u00adgusto", "Septembro", "Oktobro", "Novembro", "Decembro"], showMonthAfterYear: !1, yearSuffix: ""}, es: {dayNames: ["Domingo", "Lunes", "Martes", "Mi&eacute;rcoles", "Jueves", "Viernes", "S&aacute;bado"], dayNamesMin: ["Dom", "Lun", "Mar", "Mi&eacute;", "Juv", "Vie", "S&aacute;b"], firstDay: 1, isRTL: !1, monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], showMonthAfterYear: !1, yearSuffix: ""}, et: {dayNames: ["P\u00c3\u00bchap\u00c3\u00a4ev", "Esmasp\u00c3\u00a4ev", "Teisip\u00c3\u00a4ev", "Kolmap\u00c3\u00a4ev", "Neljap\u00c3\u00a4ev", "Reede", "Laup\u00c3\u00a4ev"], dayNamesMin: ["P\u00c3\u00bchap", "Esmasp", "Teisip", "Kolmap", "Neljap", "Reede", "Laup"], firstDay: 1, isRTL: !1, monthNames: ["Jaanuar", "Veebruar", "M\u00c3\u00a4rts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"], showMonthAfterYear: !1, yearSuffix: ""}, eu: {dayNames: ["Igandea", "Astelehena", "Asteartea", "Asteazkena", "Osteguna", "Ostirala", "Larunbata"], dayNamesMin: ["Iga", "Ast", "Ast", "Ast", "Ost", "Ost", "Lar"], firstDay: 1, isRTL: !1, monthNames: ["Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"], showMonthAfterYear: !1, yearSuffix: ""}, fa: {dayNames: ["\u00d9\u0160\u00da\u00a9\u00d8\u00b4\u00d9\u2020\u00d8\u00a8\u00d9\u2021", "\u00d8\u00af\u00d9\u02c6\u00d8\u00b4\u00d9\u2020\u00d8\u00a8\u00d9\u2021", "\u00d8\u00b3\u00d9\u2021\u00e2\u20ac\u0152\u00d8\u00b4\u00d9\u2020\u00d8\u00a8\u00d9\u2021", "\u00da\u2020\u00d9\u2021\u00d8\u00a7\u00d8\u00b1\u00d8\u00b4\u00d9\u2020\u00d8\u00a8\u00d9\u2021", "\u00d9\u00be\u00d9\u2020\u00d8\u00ac\u00d8\u00b4\u00d9\u2020\u00d8\u00a8\u00d9\u2021", "\u00d8\u00ac\u00d9\u2026\u00d8\u00b9\u00d9\u2021", "\u00d8\u00b4\u00d9\u2020\u00d8\u00a8\u00d9\u2021"], dayNamesMin: ["\u00d9\u0160", "\u00d8\u00af", "\u00d8\u00b3", "\u00da\u2020", "\u00d9\u00be", "\u00d8\u00ac", "\u00d8\u00b4"], firstDay: 6, isRTL: !0, monthNames: ["\u00d9\u0081\u00d8\u00b1\u00d9\u02c6\u00d8\u00b1\u00d8\u00af\u00d9\u0160\u00d9\u2020", "\u00d8\u00a7\u00d8\u00b1\u00d8\u00af\u00d9\u0160\u00d8\u00a8\u00d9\u2021\u00d8\u00b4\u00d8\u00aa", "\u00d8\u00ae\u00d8\u00b1\u00d8\u00af\u00d8\u00a7\u00d8\u00af", "\u00d8\u00aa\u00d9\u0160\u00d8\u00b1", "\u00d9\u2026\u00d8\u00b1\u00d8\u00af\u00d8\u00a7\u00d8\u00af", "\u00d8\u00b4\u00d9\u2021\u00d8\u00b1\u00d9\u0160\u00d9\u02c6\u00d8\u00b1", "\u00d9\u2026\u00d9\u2021\u00d8\u00b1", "\u00d8\u00a2\u00d8\u00a8\u00d8\u00a7\u00d9\u2020", "\u00d8\u00a2\u00d8\u00b0\u00d8\u00b1", "\u00d8\u00af\u00d9\u0160", "\u00d8\u00a8\u00d9\u2021\u00d9\u2026\u00d9\u2020", "\u00d8\u00a7\u00d8\u00b3\u00d9\u0081\u00d9\u2020\u00d8\u00af"], showMonthAfterYear: !1, yearSuffix: ""}, fi: {dayNames: ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"], dayNamesMin: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "Su"], firstDay: 1, isRTL: !1, monthNames: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kes&auml;kuu", "Hein&auml;kuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"], showMonthAfterYear: !1, yearSuffix: ""}, fo: {dayNames: ["Sunnudagur", "M\u00c3\u00a1nadagur", "T\u00c3\u00bdsdagur", "Mikudagur", "H\u00c3\u00b3sdagur", "Fr\u00c3\u00adggjadagur", "Leyardagur"], dayNamesMin: ["Sun", "M\u00c3\u00a1n", "T\u00c3\u00bds", "Mik", "H\u00c3\u00b3s", "Fr\u00c3\u00ad", "Ley"], firstDay: 0, isRTL: !1, monthNames: ["Januar", "Februar", "Mars", "Apr\u00c3\u00adl", "Mei", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"], showMonthAfterYear: !1, yearSuffix: ""}, "fr-CH": {dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"], dayNamesMin: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"], firstDay: 1, isRTL: !1, monthNames: ["Janvier", "F\u00c3\u00a9vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Ao\u00c3\u00bbt", "Septembre", "Octobre", "Novembre", "D\u00c3\u00a9cembre"], showMonthAfterYear: !1, yearSuffix: ""}, fr: {dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"], dayNamesMin: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."], firstDay: 1, isRTL: !1, monthNames: ["Janvier", "F\u00c3\u00a9vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Ao\u00c3\u00bbt", "Septembre", "Octobre", "Novembre", "D\u00c3\u00a9cembre"], showMonthAfterYear: !1, yearSuffix: ""}, gl: {dayNames: ["Domingo", "Luns", "Martes", "M&eacute;rcores", "Xoves", "Venres", "S&aacute;bado"], dayNamesMin: ["Dom", "Lun", "Mar", "M&eacute;r", "Xov", "Ven", "S&aacute;b"], firstDay: 1, isRTL: !1, monthNames: ["Xaneiro", "Febreiro", "Marzo", "Abril", "Maio", "Xu\u00c3\u00b1o", "Xullo", "Agosto", "Setembro", "Outubro", "Novembro", "Decembro"], showMonthAfterYear: !1, yearSuffix: ""}, he: {dayNames: ["\u00d7\u00a8\u00d7\u0090\u00d7\u00a9\u00d7\u2022\u00d7\u0178", "\u00d7\u00a9\u00d7 \u00d7\u2122", "\u00d7\u00a9\u00d7\u0153\u00d7\u2122\u00d7\u00a9\u00d7\u2122", "\u00d7\u00a8\u00d7\u2018\u00d7\u2122\u00d7\u00a2\u00d7\u2122", "\u00d7\u2014\u00d7\u017e\u00d7\u2122\u00d7\u00a9\u00d7\u2122", "\u00d7\u00a9\u00d7\u2122\u00d7\u00a9\u00d7\u2122", "\u00d7\u00a9\u00d7\u2018\u00d7\u00aa"], dayNamesMin: ["\u00d7\u0090'", "\u00d7\u2018'", "\u00d7\u2019'", "\u00d7\u201c'", "\u00d7\u201d'", "\u00d7\u2022'", "\u00d7\u00a9\u00d7\u2018\u00d7\u00aa"], firstDay: 0, isRTL: !0, monthNames: ["\u00d7\u2122\u00d7 \u00d7\u2022\u00d7\u0090\u00d7\u00a8", "\u00d7\u00a4\u00d7\u2018\u00d7\u00a8\u00d7\u2022\u00d7\u0090\u00d7\u00a8", "\u00d7\u017e\u00d7\u00a8\u00d7\u00a5", "\u00d7\u0090\u00d7\u00a4\u00d7\u00a8\u00d7\u2122\u00d7\u0153", "\u00d7\u017e\u00d7\u0090\u00d7\u2122", "\u00d7\u2122\u00d7\u2022\u00d7 \u00d7\u2122", "\u00d7\u2122\u00d7\u2022\u00d7\u0153\u00d7\u2122", "\u00d7\u0090\u00d7\u2022\u00d7\u2019\u00d7\u2022\u00d7\u00a1\u00d7\u02dc", "\u00d7\u00a1\u00d7\u00a4\u00d7\u02dc\u00d7\u017e\u00d7\u2018\u00d7\u00a8", "\u00d7\u0090\u00d7\u2022\u00d7\u00a7\u00d7\u02dc\u00d7\u2022\u00d7\u2018\u00d7\u00a8", "\u00d7 \u00d7\u2022\u00d7\u2018\u00d7\u017e\u00d7\u2018\u00d7\u00a8", "\u00d7\u201c\u00d7\u00a6\u00d7\u017e\u00d7\u2018\u00d7\u00a8"], showMonthAfterYear: !1, yearSuffix: ""}, hr: {dayNames: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "\u00c4\u0152etvrtak", "Petak", "Subota"], dayNamesMin: ["Ned", "Pon", "Uto", "Sri", "\u00c4\u0152et", "Pet", "Sub"], firstDay: 1, isRTL: !1, monthNames: ["Sije\u00c4\u008danj", "Velja\u00c4\u008da", "O\u00c5\u00beujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"], showMonthAfterYear: !1, yearSuffix: ""}, hu: {dayNames: ["Vas\u00c3\u00a1rnap", "H\u00c3\u00a9tf\u00c5\u2018", "Kedd", "Szerda", "Cs\u00c3\u00bct\u00c3\u00b6rt\u00c3\u00b6k", "P\u00c3\u00a9ntek", "Szombat"], dayNamesMin: ["Vas", "H\u00c3\u00a9t", "Ked", "Sze", "Cs\u00c3\u00bc", "P\u00c3\u00a9n", "Szo"], firstDay: 1, isRTL: !1, monthNames: ["Janu\u00c3\u00a1r", "Febru\u00c3\u00a1r", "M\u00c3\u00a1rcius", "\u00c3\u0081prilis", "M\u00c3\u00a1jus", "J\u00c3\u00banius", "J\u00c3\u00balius", "Augusztus", "Szeptember", "Okt\u00c3\u00b3ber", "November", "December"], showMonthAfterYear: !0, yearSuffix: ""}, hy: {dayNames: ["\u00d5\u00af\u00d5\u00ab\u00d6\u20ac\u00d5\u00a1\u00d5\u00af\u00d5\u00ab", "\u00d5\u00a5\u00d5\u00af\u00d5\u00b8\u00d6\u201a\u00d5\u00b7\u00d5\u00a1\u00d5\u00a2\u00d5\u00a9\u00d5\u00ab", "\u00d5\u00a5\u00d6\u20ac\u00d5\u00a5\u00d6\u201e\u00d5\u00b7\u00d5\u00a1\u00d5\u00a2\u00d5\u00a9\u00d5\u00ab", "\u00d5\u00b9\u00d5\u00b8\u00d6\u20ac\u00d5\u00a5\u00d6\u201e\u00d5\u00b7\u00d5\u00a1\u00d5\u00a2\u00d5\u00a9\u00d5\u00ab", "\u00d5\u00b0\u00d5\u00ab\u00d5\u00b6\u00d5\u00a3\u00d5\u00b7\u00d5\u00a1\u00d5\u00a2\u00d5\u00a9\u00d5\u00ab", "\u00d5\u00b8\u00d6\u201a\u00d6\u20ac\u00d5\u00a2\u00d5\u00a1\u00d5\u00a9", "\u00d5\u00b7\u00d5\u00a1\u00d5\u00a2\u00d5\u00a1\u00d5\u00a9"], dayNamesMin: ["\u00d5\u00af\u00d5\u00ab\u00d6\u20ac", "\u00d5\u00a5\u00d6\u20ac\u00d5\u00af", "\u00d5\u00a5\u00d6\u20ac\u00d6\u201e", "\u00d5\u00b9\u00d6\u20ac\u00d6\u201e", "\u00d5\u00b0\u00d5\u00b6\u00d5\u00a3", "\u00d5\u00b8\u00d6\u201a\u00d6\u20ac\u00d5\u00a2", "\u00d5\u00b7\u00d5\u00a2\u00d5\u00a9"], firstDay: 1, isRTL: !1, monthNames: ["\u00d5\u20ac\u00d5\u00b8\u00d6\u201a\u00d5\u00b6\u00d5\u00be\u00d5\u00a1\u00d6\u20ac", "\u00d5\u201c\u00d5\u00a5\u00d5\u00bf\u00d6\u20ac\u00d5\u00be\u00d5\u00a1\u00d6\u20ac", "\u00d5\u201e\u00d5\u00a1\u00d6\u20ac\u00d5\u00bf", "\u00d4\u00b1\u00d5\u00ba\u00d6\u20ac\u00d5\u00ab\u00d5\u00ac", "\u00d5\u201e\u00d5\u00a1\u00d5\u00b5\u00d5\u00ab\u00d5\u00bd", "\u00d5\u20ac\u00d5\u00b8\u00d6\u201a\u00d5\u00b6\u00d5\u00ab\u00d5\u00bd", "\u00d5\u20ac\u00d5\u00b8\u00d6\u201a\u00d5\u00ac\u00d5\u00ab\u00d5\u00bd", "\u00d5\u2022\u00d5\u00a3\u00d5\u00b8\u00d5\u00bd\u00d5\u00bf\u00d5\u00b8\u00d5\u00bd", "\u00d5\u008d\u00d5\u00a5\u00d5\u00ba\u00d5\u00bf\u00d5\u00a5\u00d5\u00b4\u00d5\u00a2\u00d5\u00a5\u00d6\u20ac", "\u00d5\u20ac\u00d5\u00b8\u00d5\u00af\u00d5\u00bf\u00d5\u00a5\u00d5\u00b4\u00d5\u00a2\u00d5\u00a5\u00d6\u20ac", "\u00d5\u2020\u00d5\u00b8\u00d5\u00b5\u00d5\u00a5\u00d5\u00b4\u00d5\u00a2\u00d5\u00a5\u00d6\u20ac", "\u00d4\u00b4\u00d5\u00a5\u00d5\u00af\u00d5\u00bf\u00d5\u00a5\u00d5\u00b4\u00d5\u00a2\u00d5\u00a5\u00d6\u20ac"], showMonthAfterYear: !1, yearSuffix: ""}, id: {dayNames: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"], dayNamesMin: ["Min", "Sen", "Sel", "Rab", "kam", "Jum", "Sab"], firstDay: 0, isRTL: !1, monthNames: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember"], showMonthAfterYear: !1, yearSuffix: ""}, is: {dayNames: ["Sunnudagur", "M&aacute;nudagur", "&THORN;ri&eth;judagur", "Mi&eth;vikudagur", "Fimmtudagur", "F&ouml;studagur", "Laugardagur"], dayNamesMin: ["Sun", "M&aacute;n", "&THORN;ri", "Mi&eth;", "Fim", "F&ouml;s", "Lau"], firstDay: 0, isRTL: !1, monthNames: ["Jan&uacute;ar", "Febr&uacute;ar", "Mars", "Apr&iacute;l", "Ma&iacute", "J&uacute;n&iacute;", "J&uacute;l&iacute;", "&Aacute;g&uacute;st", "September", "Okt&oacute;ber", "N&oacute;vember", "Desember"], showMonthAfterYear: !1, yearSuffix: ""}, it: {dayNames: ["Domenica", "Luned&#236", "Marted&#236", "Mercoled&#236", "Gioved&#236", "Venerd&#236", "Sabato"], dayNamesMin: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"], firstDay: 1, isRTL: !1, monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"], showMonthAfterYear: !1, yearSuffix: ""}, ja: {dayNames: ["\u00e6\u2014\u00a5\u00e6\u203a\u0153\u00e6\u2014\u00a5", "\u00e6\u0153\u02c6\u00e6\u203a\u0153\u00e6\u2014\u00a5", "\u00e7\u0081\u00ab\u00e6\u203a\u0153\u00e6\u2014\u00a5", "\u00e6\u00b0\u00b4\u00e6\u203a\u0153\u00e6\u2014\u00a5", "\u00e6\u0153\u00a8\u00e6\u203a\u0153\u00e6\u2014\u00a5", "\u00e9\u2021\u2018\u00e6\u203a\u0153\u00e6\u2014\u00a5", "\u00e5\u0153\u0178\u00e6\u203a\u0153\u00e6\u2014\u00a5"], dayNamesMin: ["\u00e6\u2014\u00a5", "\u00e6\u0153\u02c6", "\u00e7\u0081\u00ab", "\u00e6\u00b0\u00b4", "\u00e6\u0153\u00a8", "\u00e9\u2021\u2018", "\u00e5\u0153\u0178"], firstDay: 0, isRTL: !1, monthNames: ["1\u00e6\u0153\u02c6", "2\u00e6\u0153\u02c6", "3\u00e6\u0153\u02c6", "4\u00e6\u0153\u02c6", "5\u00e6\u0153\u02c6", "6\u00e6\u0153\u02c6", "7\u00e6\u0153\u02c6", "8\u00e6\u0153\u02c6", "9\u00e6\u0153\u02c6", "10\u00e6\u0153\u02c6", "11\u00e6\u0153\u02c6", "12\u00e6\u0153\u02c6"], showMonthAfterYear: !0, yearSuffix: "\u00e5\u00b9\u00b4"}, kk: {dayNames: ["\u00d0\u2013\u00d0\u00b5\u00d0\u00ba\u00d1\u0081\u00d0\u00b5\u00d0\u00bd\u00d0\u00b1\u00d1\u2013", "\u00d0\u201d\u00d2\u00af\u00d0\u00b9\u00d1\u0081\u00d0\u00b5\u00d0\u00bd\u00d0\u00b1\u00d1\u2013", "\u00d0\u00a1\u00d0\u00b5\u00d0\u00b9\u00d1\u0081\u00d0\u00b5\u00d0\u00bd\u00d0\u00b1\u00d1\u2013", "\u00d0\u00a1\u00d3\u2122\u00d1\u20ac\u00d1\u0081\u00d0\u00b5\u00d0\u00bd\u00d0\u00b1\u00d1\u2013", "\u00d0\u2018\u00d0\u00b5\u00d0\u00b9\u00d1\u0081\u00d0\u00b5\u00d0\u00bd\u00d0\u00b1\u00d1\u2013", "\u00d0\u2013\u00d2\u00b1\u00d0\u00bc\u00d0\u00b0", "\u00d0\u00a1\u00d0\u00b5\u00d0\u00bd\u00d0\u00b1\u00d1\u2013"], dayNamesMin: ["\u00d0\u00b6\u00d0\u00ba\u00d1\u0081", "\u00d0\u00b4\u00d1\u0081\u00d0\u00bd", "\u00d1\u0081\u00d1\u0081\u00d0\u00bd", "\u00d1\u0081\u00d1\u20ac\u00d1\u0081", "\u00d0\u00b1\u00d1\u0081\u00d0\u00bd", "\u00d0\u00b6\u00d0\u00bc\u00d0\u00b0", "\u00d1\u0081\u00d0\u00bd\u00d0\u00b1"], firstDay: 1, isRTL: !1, monthNames: ["\u00d2\u0161\u00d0\u00b0\u00d2\u00a3\u00d1\u201a\u00d0\u00b0\u00d1\u20ac", "\u00d0\u0090\u00d2\u203a\u00d0\u00bf\u00d0\u00b0\u00d0\u00bd", "\u00d0\u009d\u00d0\u00b0\u00d1\u0192\u00d1\u20ac\u00d1\u2039\u00d0\u00b7", "\u00d0\u00a1\u00d3\u2122\u00d1\u0192\u00d1\u2013\u00d1\u20ac", "\u00d0\u0153\u00d0\u00b0\u00d0\u00bc\u00d1\u2039\u00d1\u20ac", "\u00d0\u0153\u00d0\u00b0\u00d1\u0192\u00d1\u0081\u00d1\u2039\u00d0\u00bc", "\u00d0\u00a8\u00d1\u2013\u00d0\u00bb\u00d0\u00b4\u00d0\u00b5", "\u00d0\u00a2\u00d0\u00b0\u00d0\u00bc\u00d1\u2039\u00d0\u00b7", "\u00d2\u0161\u00d1\u2039\u00d1\u20ac\u00d0\u00ba\u00d2\u00af\u00d0\u00b9\u00d0\u00b5\u00d0\u00ba", "\u00d2\u0161\u00d0\u00b0\u00d0\u00b7\u00d0\u00b0\u00d0\u00bd", "\u00d2\u0161\u00d0\u00b0\u00d1\u20ac\u00d0\u00b0\u00d1\u02c6\u00d0\u00b0", "\u00d0\u2013\u00d0\u00b5\u00d0\u00bb\u00d1\u201a\u00d0\u00be\u00d2\u203a\u00d1\u0081\u00d0\u00b0\u00d0\u00bd"], showMonthAfterYear: !1, yearSuffix: ""}, ko: {dayNames: ["\u00ec\u009d\u00bc", "\u00ec\u203a\u201d", "\u00ed\u2122\u201d", "\u00ec\u02c6\u02dc", "\u00eb\u00aa\u00a9", "\u00ea\u00b8\u02c6", "\u00ed\u2020 "], dayNamesMin: ["\u00ec\u009d\u00bc", "\u00ec\u203a\u201d", "\u00ed\u2122\u201d", "\u00ec\u02c6\u02dc", "\u00eb\u00aa\u00a9", "\u00ea\u00b8\u02c6", "\u00ed\u2020 "], firstDay: 0, isRTL: !1, monthNames: ["1\u00ec\u203a\u201d(JAN)", "2\u00ec\u203a\u201d(FEB)", "3\u00ec\u203a\u201d(MAR)", "4\u00ec\u203a\u201d(APR)", "5\u00ec\u203a\u201d(MAY)", "6\u00ec\u203a\u201d(JUN)", "7\u00ec\u203a\u201d(JUL)", "8\u00ec\u203a\u201d(AUG)", "9\u00ec\u203a\u201d(SEP)", "10\u00ec\u203a\u201d(OCT)", "11\u00ec\u203a\u201d(NOV)", "12\u00ec\u203a\u201d(DEC)"], showMonthAfterYear: !1, yearSuffix: "\u00eb\u2026\u201e"}, lb: {dayNames: ["Sonndeg", "M\u00c3\u00a9indeg", "D\u00c3\u00abnschdeg", "M\u00c3\u00abttwoch", "Donneschdeg", "Freideg", "Samschdeg"], dayNamesMin: ["Son", "M\u00c3\u00a9i", "D\u00c3\u00abn", "M\u00c3\u00abt", "Don", "Fre", "Sam"], firstDay: 1, isRTL: !1, monthNames: ["Januar", "Februar", "M\u00c3\u00a4erz", "Abr\u00c3\u00abll", "Mee", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"], showMonthAfterYear: !1, yearSuffix: ""}, lt: {dayNames: ["sekmadienis", "pirmadienis", "antradienis", "tre\u00c4\u008diadienis", "ketvirtadienis", "penktadienis", "\u00c5\u00a1e\u00c5\u00a1tadienis"], dayNamesMin: ["sek", "pir", "ant", "tre", "ket", "pen", "\u00c5\u00a1e\u00c5\u00a1"], firstDay: 1, isRTL: !1, monthNames: ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegu\u00c5\u00be\u00c4\u2014", "Bir\u00c5\u00beelis", "Liepa", "Rugpj\u00c5\u00abtis", "Rugs\u00c4\u2014jis", "Spalis", "Lapkritis", "Gruodis"], showMonthAfterYear: !1, yearSuffix: ""}, lv: {dayNames: ["sv\u00c4\u201ctdiena", "pirmdiena", "otrdiena", "tre\u00c5\u00a1diena", "ceturtdiena", "piektdiena", "sestdiena"], dayNamesMin: ["svt", "prm", "otr", "tre", "ctr", "pkt", "sst"], firstDay: 1, isRTL: !1, monthNames: ["Janv\u00c4\u0081ris", "Febru\u00c4\u0081ris", "Marts", "Apr\u00c4\u00ablis", "Maijs", "J\u00c5\u00abnijs", "J\u00c5\u00ablijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"], showMonthAfterYear: !1, yearSuffix: ""}, mk: {dayNames: ["\u00d0\u009d\u00d0\u00b5\u00d0\u00b4\u00d0\u00b5\u00d0\u00bb\u00d0\u00b0", "\u00d0\u0178\u00d0\u00be\u00d0\u00bd\u00d0\u00b5\u00d0\u00b4\u00d0\u00b5\u00d0\u00bb\u00d0\u00bd\u00d0\u00b8\u00d0\u00ba", "\u00d0\u2019\u00d1\u201a\u00d0\u00be\u00d1\u20ac\u00d0\u00bd\u00d0\u00b8\u00d0\u00ba", "\u00d0\u00a1\u00d1\u20ac\u00d0\u00b5\u00d0\u00b4\u00d0\u00b0", "\u00d0\u00a7\u00d0\u00b5\u00d1\u201a\u00d0\u00b2\u00d1\u20ac\u00d1\u201a\u00d0\u00be\u00d0\u00ba", "\u00d0\u0178\u00d0\u00b5\u00d1\u201a\u00d0\u00be\u00d0\u00ba", "\u00d0\u00a1\u00d0\u00b0\u00d0\u00b1\u00d0\u00be\u00d1\u201a\u00d0\u00b0"], dayNamesMin: ["\u00d0\u009d\u00d0\u00b5\u00d0\u00b4", "\u00d0\u0178\u00d0\u00be\u00d0\u00bd", "\u00d0\u2019\u00d1\u201a\u00d0\u00be", "\u00d0\u00a1\u00d1\u20ac\u00d0\u00b5", "\u00d0\u00a7\u00d0\u00b5\u00d1\u201a", "\u00d0\u0178\u00d0\u00b5\u00d1\u201a", "\u00d0\u00a1\u00d0\u00b0\u00d0\u00b1"], firstDay: 1, isRTL: !1, monthNames: ["\u00d0\u02c6\u00d0\u00b0\u00d0\u00bd\u00d1\u0192\u00d0\u00b0\u00d1\u20ac\u00d0\u00b8", "\u00d0\u00a4\u00d0\u00b5\u00d0\u00b1\u00d1\u20ac\u00d1\u0192\u00d0\u00b0\u00d1\u20ac\u00d0\u00b8", "\u00d0\u0153\u00d0\u00b0\u00d1\u20ac\u00d1\u201a", "\u00d0\u0090\u00d0\u00bf\u00d1\u20ac\u00d0\u00b8\u00d0\u00bb", "\u00d0\u0153\u00d0\u00b0\u00d1\u02dc", "\u00d0\u02c6\u00d1\u0192\u00d0\u00bd\u00d0\u00b8", "\u00d0\u02c6\u00d1\u0192\u00d0\u00bb\u00d0\u00b8", "\u00d0\u0090\u00d0\u00b2\u00d0\u00b3\u00d1\u0192\u00d1\u0081\u00d1\u201a", "\u00d0\u00a1\u00d0\u00b5\u00d0\u00bf\u00d1\u201a\u00d0\u00b5\u00d0\u00bc\u00d0\u00b2\u00d1\u20ac\u00d0\u00b8", "\u00d0\u017e\u00d0\u00ba\u00d1\u201a\u00d0\u00be\u00d0\u00bc\u00d0\u00b2\u00d1\u20ac\u00d0\u00b8", "\u00d0\u009d\u00d0\u00be\u00d0\u00b5\u00d0\u00bc\u00d0\u00b2\u00d1\u20ac\u00d0\u00b8", "\u00d0\u201d\u00d0\u00b5\u00d0\u00ba\u00d0\u00b5\u00d0\u00bc\u00d0\u00b2\u00d1\u20ac\u00d0\u00b8"], showMonthAfterYear: !1, yearSuffix: ""}, ml: {dayNames: ["\u00e0\u00b4\u017e\u00e0\u00b4\u00be\u00e0\u00b4\u00af\u00e0\u00b4\u00b0\u00e0\u00b5\u008d\u00e2\u20ac\u008d", "\u00e0\u00b4\u00a4\u00e0\u00b4\u00bf\u00e0\u00b4\u2122\u00e0\u00b5\u008d\u00e0\u00b4\u2022\u00e0\u00b4\u00b3\u00e0\u00b5\u008d\u00e2\u20ac\u008d", "\u00e0\u00b4\u0161\u00e0\u00b5\u0160\u00e0\u00b4\u00b5\u00e0\u00b5\u008d\u00e0\u00b4\u00b5", "\u00e0\u00b4\u00ac\u00e0\u00b5\u0081\u00e0\u00b4\u00a7\u00e0\u00b4\u00a8\u00e0\u00b5\u008d\u00e2\u20ac\u008d", "\u00e0\u00b4\u00b5\u00e0\u00b5\u008d\u00e0\u00b4\u00af\u00e0\u00b4\u00be\u00e0\u00b4\u00b4\u00e0\u00b4\u201a", "\u00e0\u00b4\u00b5\u00e0\u00b5\u2020\u00e0\u00b4\u00b3\u00e0\u00b5\u008d\u00e0\u00b4\u00b3\u00e0\u00b4\u00bf", "\u00e0\u00b4\u00b6\u00e0\u00b4\u00a8\u00e0\u00b4\u00bf"], dayNamesMin: ["\u00e0\u00b4\u017e\u00e0\u00b4\u00be\u00e0\u00b4\u00af", "\u00e0\u00b4\u00a4\u00e0\u00b4\u00bf\u00e0\u00b4\u2122\u00e0\u00b5\u008d\u00e0\u00b4\u2022", "\u00e0\u00b4\u0161\u00e0\u00b5\u0160\u00e0\u00b4\u00b5\u00e0\u00b5\u008d\u00e0\u00b4\u00b5", "\u00e0\u00b4\u00ac\u00e0\u00b5\u0081\u00e0\u00b4\u00a7", "\u00e0\u00b4\u00b5\u00e0\u00b5\u008d\u00e0\u00b4\u00af\u00e0\u00b4\u00be\u00e0\u00b4\u00b4\u00e0\u00b4\u201a", "\u00e0\u00b4\u00b5\u00e0\u00b5\u2020\u00e0\u00b4\u00b3\u00e0\u00b5\u008d\u00e0\u00b4\u00b3\u00e0\u00b4\u00bf", "\u00e0\u00b4\u00b6\u00e0\u00b4\u00a8\u00e0\u00b4\u00bf"], firstDay: 1, isRTL: !1, monthNames: ["\u00e0\u00b4\u0153\u00e0\u00b4\u00a8\u00e0\u00b5\u0081\u00e0\u00b4\u00b5\u00e0\u00b4\u00b0\u00e0\u00b4\u00bf", "\u00e0\u00b4\u00ab\u00e0\u00b5\u2020\u00e0\u00b4\u00ac\u00e0\u00b5\u008d\u00e0\u00b4\u00b0\u00e0\u00b5\u0081\u00e0\u00b4\u00b5\u00e0\u00b4\u00b0\u00e0\u00b4\u00bf", "\u00e0\u00b4\u00ae\u00e0\u00b4\u00be\u00e0\u00b4\u00b0\u00e0\u00b5\u008d\u00e2\u20ac\u008d\u00e0\u00b4\u0161\u00e0\u00b5\u008d\u00e0\u00b4\u0161\u00e0\u00b5\u008d", "\u00e0\u00b4\u008f\u00e0\u00b4\u00aa\u00e0\u00b5\u008d\u00e0\u00b4\u00b0\u00e0\u00b4\u00bf\u00e0\u00b4\u00b2\u00e0\u00b5\u008d\u00e2\u20ac\u008d", "\u00e0\u00b4\u00ae\u00e0\u00b5\u2021\u00e0\u00b4\u00af\u00e0\u00b5\u008d", "\u00e0\u00b4\u0153\u00e0\u00b5\u201a\u00e0\u00b4\u00a3\u00e0\u00b5\u008d\u00e2\u20ac\u008d", "\u00e0\u00b4\u0153\u00e0\u00b5\u201a\u00e0\u00b4\u00b2\u00e0\u00b5\u02c6", "\u00e0\u00b4\u2020\u00e0\u00b4\u2014\u00e0\u00b4\u00b8\u00e0\u00b5\u008d\u00e0\u00b4\u00b1\u00e0\u00b5\u008d\u00e0\u00b4\u00b1\u00e0\u00b5\u008d", "\u00e0\u00b4\u00b8\u00e0\u00b5\u2020\u00e0\u00b4\u00aa\u00e0\u00b5\u008d\u00e0\u00b4\u00b1\u00e0\u00b5\u008d\u00e0\u00b4\u00b1\u00e0\u00b4\u201a\u00e0\u00b4\u00ac\u00e0\u00b4\u00b0\u00e0\u00b5\u008d\u00e2\u20ac\u008d", "\u00e0\u00b4\u2019\u00e0\u00b4\u2022\u00e0\u00b5\u008d\u00e0\u00b4\u0178\u00e0\u00b5\u2039\u00e0\u00b4\u00ac\u00e0\u00b4\u00b0\u00e0\u00b5\u008d\u00e2\u20ac\u008d", "\u00e0\u00b4\u00a8\u00e0\u00b4\u00b5\u00e0\u00b4\u201a\u00e0\u00b4\u00ac\u00e0\u00b4\u00b0\u00e0\u00b5\u008d\u00e2\u20ac\u008d", "\u00e0\u00b4\u00a1\u00e0\u00b4\u00bf\u00e0\u00b4\u00b8\u00e0\u00b4\u201a\u00e0\u00b4\u00ac\u00e0\u00b4\u00b0\u00e0\u00b5\u008d\u00e2\u20ac\u008d"], showMonthAfterYear: !1, yearSuffix: ""}, ms: {dayNames: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"], dayNamesMin: ["Aha", "Isn", "Sel", "Rab", "kha", "Jum", "Sab"], firstDay: 0, isRTL: !1, monthNames: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"], showMonthAfterYear: !1, yearSuffix: ""}, "nl-BE": {dayNames: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"], dayNamesMin: ["zon", "maa", "din", "woe", "don", "vri", "zat"], firstDay: 1, isRTL: !1, monthNames: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"], showMonthAfterYear: !1, yearSuffix: ""}, nl: {dayNames: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"], dayNamesMin: ["zon", "maa", "din", "woe", "don", "vri", "zat"], firstDay: 1, isRTL: !1, monthNames: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"], showMonthAfterYear: !1, yearSuffix: ""}, no: {dayNames: ["s\u00c3\u00b8ndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "l\u00c3\u00b8rdag"], dayNamesMin: ["s\u00c3\u00b8n", "man", "tir", "ons", "tor", "fre", "l\u00c3\u00b8r"], firstDay: 1, isRTL: !1, monthNames: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"], showMonthAfterYear: !1, yearSuffix: ""}, pl: {dayNames: ["Niedziela", "Poniedzia\u00c5\u201aek", "Wtorek", "\u00c5\u0161roda", "Czwartek", "Pi\u00c4\u2026tek", "Sobota"], dayNamesMin: ["Nie", "Pn", "Wt", "\u00c5\u0161r", "Czw", "Pt", "So"], firstDay: 1, isRTL: !1, monthNames: ["Stycze\u00c5\u201e", "Luty", "Marzec", "Kwiecie\u00c5\u201e", "Maj", "Czerwiec", "Lipiec", "Sierpie\u00c5\u201e", "Wrzesie\u00c5\u201e", "Pa\u00c5\u00badziernik", "Listopad", "Grudzie\u00c5\u201e"], showMonthAfterYear: !1, yearSuffix: ""}, "pt-BR": {dayNames: ["Domingo", "Segunda-feira", "Ter&ccedil;a-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "S&aacute;bado"], dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S&aacute;b"], firstDay: 0, isRTL: !1, monthNames: ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], showMonthAfterYear: !1, yearSuffix: ""}, pt: {dayNames: ["Domingo", "Segunda-feira", "Ter&ccedil;a-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "S&aacute;bado"], dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S&aacute;b"], firstDay: 0, isRTL: !1, monthNames: ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], showMonthAfterYear: !1, yearSuffix: ""}, rm: {dayNames: ["Dumengia", "Glindesdi", "Mardi", "Mesemna", "Gievgia", "Venderdi", "Sonda"], dayNamesMin: ["Dum", "Gli", "Mar", "Mes", "Gie", "Ven", "Som"], firstDay: 1, isRTL: !1, monthNames: ["Schaner", "Favrer", "Mars", "Avrigl", "Matg", "Zercladur", "Fanadur", "Avust", "Settember", "October", "November", "December"], showMonthAfterYear: !1, yearSuffix: ""}, ro: {dayNames: ["Duminic\u00c4\u0192", "Luni", "Mar\u00c5\u00a3i", "Miercuri", "Joi", "Vineri", "S\u00c3\u00a2mb\u00c4\u0192t\u00c4\u0192"], dayNamesMin: ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "S\u00c3\u00a2m"], firstDay: 1, isRTL: !1, monthNames: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"], showMonthAfterYear: !1, yearSuffix: ""}, ru: {dayNames: ["\u00d0\u00b2\u00d0\u00be\u00d1\u0081\u00d0\u00ba\u00d1\u20ac\u00d0\u00b5\u00d1\u0081\u00d0\u00b5\u00d0\u00bd\u00d1\u0152\u00d0\u00b5", "\u00d0\u00bf\u00d0\u00be\u00d0\u00bd\u00d0\u00b5\u00d0\u00b4\u00d0\u00b5\u00d0\u00bb\u00d1\u0152\u00d0\u00bd\u00d0\u00b8\u00d0\u00ba", "\u00d0\u00b2\u00d1\u201a\u00d0\u00be\u00d1\u20ac\u00d0\u00bd\u00d0\u00b8\u00d0\u00ba", "\u00d1\u0081\u00d1\u20ac\u00d0\u00b5\u00d0\u00b4\u00d0\u00b0", "\u00d1\u2021\u00d0\u00b5\u00d1\u201a\u00d0\u00b2\u00d0\u00b5\u00d1\u20ac\u00d0\u00b3", "\u00d0\u00bf\u00d1\u008f\u00d1\u201a\u00d0\u00bd\u00d0\u00b8\u00d1\u2020\u00d0\u00b0", "\u00d1\u0081\u00d1\u0192\u00d0\u00b1\u00d0\u00b1\u00d0\u00be\u00d1\u201a\u00d0\u00b0"], dayNamesMin: ["\u00d0\u00b2\u00d1\u0081\u00d0\u00ba", "\u00d0\u00bf\u00d0\u00bd\u00d0\u00b4", "\u00d0\u00b2\u00d1\u201a\u00d1\u20ac", "\u00d1\u0081\u00d1\u20ac\u00d0\u00b4", "\u00d1\u2021\u00d1\u201a\u00d0\u00b2", "\u00d0\u00bf\u00d1\u201a\u00d0\u00bd", "\u00d1\u0081\u00d0\u00b1\u00d1\u201a"], firstDay: 1, isRTL: !1, monthNames: ["\u00d0\u00af\u00d0\u00bd\u00d0\u00b2\u00d0\u00b0\u00d1\u20ac\u00d1\u0152", "\u00d0\u00a4\u00d0\u00b5\u00d0\u00b2\u00d1\u20ac\u00d0\u00b0\u00d0\u00bb\u00d1\u0152", "\u00d0\u0153\u00d0\u00b0\u00d1\u20ac\u00d1\u201a", "\u00d0\u0090\u00d0\u00bf\u00d1\u20ac\u00d0\u00b5\u00d0\u00bb\u00d1\u0152", "\u00d0\u0153\u00d0\u00b0\u00d0\u00b9", "\u00d0\u02dc\u00d1\u017d\u00d0\u00bd\u00d1\u0152", "\u00d0\u02dc\u00d1\u017d\u00d0\u00bb\u00d1\u0152", "\u00d0\u0090\u00d0\u00b2\u00d0\u00b3\u00d1\u0192\u00d1\u0081\u00d1\u201a", "\u00d0\u00a1\u00d0\u00b5\u00d0\u00bd\u00d1\u201a\u00d1\u008f\u00d0\u00b1\u00d1\u20ac\u00d1\u0152", "\u00d0\u017e\u00d0\u00ba\u00d1\u201a\u00d1\u008f\u00d0\u00b1\u00d1\u20ac\u00d1\u0152", "\u00d0\u009d\u00d0\u00be\u00d1\u008f\u00d0\u00b1\u00d1\u20ac\u00d1\u0152", "\u00d0\u201d\u00d0\u00b5\u00d0\u00ba\u00d0\u00b0\u00d0\u00b1\u00d1\u20ac\u00d1\u0152"], showMonthAfterYear: !1, yearSuffix: ""}, sk: {dayNames: ["Nede\u00c4\u00bea", "Pondelok", "Utorok", "Streda", "\u00c5 tvrtok", "Piatok", "Sobota"], dayNamesMin: ["Ned", "Pon", "Uto", "Str", "\u00c5 tv", "Pia", "Sob"], firstDay: 1, isRTL: !1, monthNames: ["Janu\u00c3\u00a1r", "Febru\u00c3\u00a1r", "Marec", "Apr\u00c3\u00adl", "M\u00c3\u00a1j", "J\u00c3\u00ban", "J\u00c3\u00bal", "August", "September", "Okt\u00c3\u00b3ber", "November", "December"], showMonthAfterYear: !1, yearSuffix: ""}, sl: {dayNames: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "&#x10C;etrtek", "Petek", "Sobota"], dayNamesMin: ["Ned", "Pon", "Tor", "Sre", "&#x10C;et", "Pet", "Sob"], firstDay: 1, isRTL: !1, monthNames: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"], showMonthAfterYear: !1, yearSuffix: ""}, sq: {dayNames: ["E Diel", "E H\u00c3\u00abn\u00c3\u00ab", "E Mart\u00c3\u00ab", "E M\u00c3\u00abrkur\u00c3\u00ab", "E Enjte", "E Premte", "E Shtune"], dayNamesMin: ["Di", "H\u00c3\u00ab", "Ma", "M\u00c3\u00ab", "En", "Pr", "Sh"], firstDay: 1, isRTL: !1, monthNames: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "N\u00c3\u00abntor", "Dhjetor"], showMonthAfterYear: !1, yearSuffix: ""}, "sr-SR": {dayNames: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "\u00c4\u0152etvrtak", "Petak", "Subota"], dayNamesMin: ["Ned", "Pon", "Uto", "Sre", "\u00c4\u0152et", "Pet", "Sub"], firstDay: 1, isRTL: !1, monthNames: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"], showMonthAfterYear: !1, yearSuffix: ""}, sr: {dayNames: ["\u00d0\u009d\u00d0\u00b5\u00d0\u00b4\u00d0\u00b5\u00d1\u2122\u00d0\u00b0", "\u00d0\u0178\u00d0\u00be\u00d0\u00bd\u00d0\u00b5\u00d0\u00b4\u00d0\u00b5\u00d1\u2122\u00d0\u00b0\u00d0\u00ba", "\u00d0\u00a3\u00d1\u201a\u00d0\u00be\u00d1\u20ac\u00d0\u00b0\u00d0\u00ba", "\u00d0\u00a1\u00d1\u20ac\u00d0\u00b5\u00d0\u00b4\u00d0\u00b0", "\u00d0\u00a7\u00d0\u00b5\u00d1\u201a\u00d0\u00b2\u00d1\u20ac\u00d1\u201a\u00d0\u00b0\u00d0\u00ba", "\u00d0\u0178\u00d0\u00b5\u00d1\u201a\u00d0\u00b0\u00d0\u00ba", "\u00d0\u00a1\u00d1\u0192\u00d0\u00b1\u00d0\u00be\u00d1\u201a\u00d0\u00b0"], dayNamesMin: ["\u00d0\u009d\u00d0\u00b5\u00d0\u00b4", "\u00d0\u0178\u00d0\u00be\u00d0\u00bd", "\u00d0\u00a3\u00d1\u201a\u00d0\u00be", "\u00d0\u00a1\u00d1\u20ac\u00d0\u00b5", "\u00d0\u00a7\u00d0\u00b5\u00d1\u201a", "\u00d0\u0178\u00d0\u00b5\u00d1\u201a", "\u00d0\u00a1\u00d1\u0192\u00d0\u00b1"], firstDay: 1, isRTL: !1, monthNames: ["\u00d0\u02c6\u00d0\u00b0\u00d0\u00bd\u00d1\u0192\u00d0\u00b0\u00d1\u20ac", "\u00d0\u00a4\u00d0\u00b5\u00d0\u00b1\u00d1\u20ac\u00d1\u0192\u00d0\u00b0\u00d1\u20ac", "\u00d0\u0153\u00d0\u00b0\u00d1\u20ac\u00d1\u201a", "\u00d0\u0090\u00d0\u00bf\u00d1\u20ac\u00d0\u00b8\u00d0\u00bb", "\u00d0\u0153\u00d0\u00b0\u00d1\u02dc", "\u00d0\u02c6\u00d1\u0192\u00d0\u00bd", "\u00d0\u02c6\u00d1\u0192\u00d0\u00bb", "\u00d0\u0090\u00d0\u00b2\u00d0\u00b3\u00d1\u0192\u00d1\u0081\u00d1\u201a", "\u00d0\u00a1\u00d0\u00b5\u00d0\u00bf\u00d1\u201a\u00d0\u00b5\u00d0\u00bc\u00d0\u00b1\u00d0\u00b0\u00d1\u20ac", "\u00d0\u017e\u00d0\u00ba\u00d1\u201a\u00d0\u00be\u00d0\u00b1\u00d0\u00b0\u00d1\u20ac", "\u00d0\u009d\u00d0\u00be\u00d0\u00b2\u00d0\u00b5\u00d0\u00bc\u00d0\u00b1\u00d0\u00b0\u00d1\u20ac", "\u00d0\u201d\u00d0\u00b5\u00d1\u2020\u00d0\u00b5\u00d0\u00bc\u00d0\u00b1\u00d0\u00b0\u00d1\u20ac"], showMonthAfterYear: !1, yearSuffix: ""}, sv: {dayNames: ["S\u00c3\u00b6ndag", "M\u00c3\u00a5ndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "L\u00c3\u00b6rdag"], dayNamesMin: ["S\u00c3\u00b6n", "M\u00c3\u00a5n", "Tis", "Ons", "Tor", "Fre", "L\u00c3\u00b6r"], firstDay: 1, isRTL: !1, monthNames: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], showMonthAfterYear: !1, yearSuffix: ""}, ta: {dayNames: ["\u00e0\u00ae\u017e\u00e0\u00ae\u00be\u00e0\u00ae\u00af\u00e0\u00ae\u00bf\u00e0\u00ae\u00b1\u00e0\u00af\u008d\u00e0\u00ae\u00b1\u00e0\u00af\u0081\u00e0\u00ae\u2022\u00e0\u00af\u008d\u00e0\u00ae\u2022\u00e0\u00ae\u00bf\u00e0\u00ae\u00b4\u00e0\u00ae\u00ae\u00e0\u00af\u02c6", "\u00e0\u00ae\u00a4\u00e0\u00ae\u00bf\u00e0\u00ae\u2122\u00e0\u00af\u008d\u00e0\u00ae\u2022\u00e0\u00ae\u0178\u00e0\u00af\u008d\u00e0\u00ae\u2022\u00e0\u00ae\u00bf\u00e0\u00ae\u00b4\u00e0\u00ae\u00ae\u00e0\u00af\u02c6", "\u00e0\u00ae\u0161\u00e0\u00af\u2020\u00e0\u00ae\u00b5\u00e0\u00af\u008d\u00e0\u00ae\u00b5\u00e0\u00ae\u00be\u00e0\u00ae\u00af\u00e0\u00af\u008d\u00e0\u00ae\u2022\u00e0\u00af\u008d\u00e0\u00ae\u2022\u00e0\u00ae\u00bf\u00e0\u00ae\u00b4\u00e0\u00ae\u00ae\u00e0\u00af\u02c6", "\u00e0\u00ae\u00aa\u00e0\u00af\u0081\u00e0\u00ae\u00a4\u00e0\u00ae\u00a9\u00e0\u00af\u008d\u00e0\u00ae\u2022\u00e0\u00ae\u00bf\u00e0\u00ae\u00b4\u00e0\u00ae\u00ae\u00e0\u00af\u02c6", "\u00e0\u00ae\u00b5\u00e0\u00ae\u00bf\u00e0\u00ae\u00af\u00e0\u00ae\u00be\u00e0\u00ae\u00b4\u00e0\u00ae\u2022\u00e0\u00af\u008d\u00e0\u00ae\u2022\u00e0\u00ae\u00bf\u00e0\u00ae\u00b4\u00e0\u00ae\u00ae\u00e0\u00af\u02c6", "\u00e0\u00ae\u00b5\u00e0\u00af\u2020\u00e0\u00ae\u00b3\u00e0\u00af\u008d\u00e0\u00ae\u00b3\u00e0\u00ae\u00bf\u00e0\u00ae\u2022\u00e0\u00af\u008d\u00e0\u00ae\u2022\u00e0\u00ae\u00bf\u00e0\u00ae\u00b4\u00e0\u00ae\u00ae\u00e0\u00af\u02c6", "\u00e0\u00ae\u0161\u00e0\u00ae\u00a9\u00e0\u00ae\u00bf\u00e0\u00ae\u2022\u00e0\u00af\u008d\u00e0\u00ae\u2022\u00e0\u00ae\u00bf\u00e0\u00ae\u00b4\u00e0\u00ae\u00ae\u00e0\u00af\u02c6"], dayNamesMin: ["\u00e0\u00ae\u017e\u00e0\u00ae\u00be\u00e0\u00ae\u00af\u00e0\u00ae\u00bf\u00e0\u00ae\u00b1\u00e0\u00af\u0081", "\u00e0\u00ae\u00a4\u00e0\u00ae\u00bf\u00e0\u00ae\u2122\u00e0\u00af\u008d\u00e0\u00ae\u2022\u00e0\u00ae\u00b3\u00e0\u00af\u008d", "\u00e0\u00ae\u0161\u00e0\u00af\u2020\u00e0\u00ae\u00b5\u00e0\u00af\u008d\u00e0\u00ae\u00b5\u00e0\u00ae\u00be\u00e0\u00ae\u00af\u00e0\u00af\u008d", "\u00e0\u00ae\u00aa\u00e0\u00af\u0081\u00e0\u00ae\u00a4\u00e0\u00ae\u00a9\u00e0\u00af\u008d", "\u00e0\u00ae\u00b5\u00e0\u00ae\u00bf\u00e0\u00ae\u00af\u00e0\u00ae\u00be\u00e0\u00ae\u00b4\u00e0\u00ae\u00a9\u00e0\u00af\u008d", "\u00e0\u00ae\u00b5\u00e0\u00af\u2020\u00e0\u00ae\u00b3\u00e0\u00af\u008d\u00e0\u00ae\u00b3\u00e0\u00ae\u00bf", "\u00e0\u00ae\u0161\u00e0\u00ae\u00a9\u00e0\u00ae\u00bf"], firstDay: 1, isRTL: !1, monthNames: ["\u00e0\u00ae\u00a4\u00e0\u00af\u02c6", "\u00e0\u00ae\u00ae\u00e0\u00ae\u00be\u00e0\u00ae\u0161\u00e0\u00ae\u00bf", "\u00e0\u00ae\u00aa\u00e0\u00ae\u2122\u00e0\u00af\u008d\u00e0\u00ae\u2022\u00e0\u00af\u0081\u00e0\u00ae\u00a9\u00e0\u00ae\u00bf", "\u00e0\u00ae\u0161\u00e0\u00ae\u00bf\u00e0\u00ae\u00a4\u00e0\u00af\u008d\u00e0\u00ae\u00a4\u00e0\u00ae\u00bf\u00e0\u00ae\u00b0\u00e0\u00af\u02c6", "\u00e0\u00ae\u00b5\u00e0\u00af\u02c6\u00e0\u00ae\u2022\u00e0\u00ae\u00be\u00e0\u00ae\u0161\u00e0\u00ae\u00bf", "\u00e0\u00ae\u2020\u00e0\u00ae\u00a9\u00e0\u00ae\u00bf", "\u00e0\u00ae\u2020\u00e0\u00ae\u0178\u00e0\u00ae\u00bf", "\u00e0\u00ae\u2020\u00e0\u00ae\u00b5\u00e0\u00ae\u00a3\u00e0\u00ae\u00bf", "\u00e0\u00ae\u00aa\u00e0\u00af\u0081\u00e0\u00ae\u00b0\u00e0\u00ae\u0178\u00e0\u00af\u008d\u00e0\u00ae\u0178\u00e0\u00ae\u00be\u00e0\u00ae\u0161\u00e0\u00ae\u00bf", "\u00e0\u00ae\u0090\u00e0\u00ae\u00aa\u00e0\u00af\u008d\u00e0\u00ae\u00aa\u00e0\u00ae\u0161\u00e0\u00ae\u00bf", "\u00e0\u00ae\u2022\u00e0\u00ae\u00be\u00e0\u00ae\u00b0\u00e0\u00af\u008d\u00e0\u00ae\u00a4\u00e0\u00af\u008d\u00e0\u00ae\u00a4\u00e0\u00ae\u00bf\u00e0\u00ae\u2022\u00e0\u00af\u02c6", "\u00e0\u00ae\u00ae\u00e0\u00ae\u00be\u00e0\u00ae\u00b0\u00e0\u00af\u008d\u00e0\u00ae\u2022\u00e0\u00ae\u00b4\u00e0\u00ae\u00bf"], showMonthAfterYear: !1, yearSuffix: ""}, th: {dayNames: ["\u00e0\u00b8\u00ad\u00e0\u00b8\u00b2\u00e0\u00b8\u2014\u00e0\u00b8\u00b4\u00e0\u00b8\u2022\u00e0\u00b8\u00a2\u00e0\u00b9\u0152", "\u00e0\u00b8\u02c6\u00e0\u00b8\u00b1\u00e0\u00b8\u2122\u00e0\u00b8\u2014\u00e0\u00b8\u00a3\u00e0\u00b9\u0152", "\u00e0\u00b8\u00ad\u00e0\u00b8\u00b1\u00e0\u00b8\u2021\u00e0\u00b8\u201e\u00e0\u00b8\u00b2\u00e0\u00b8\u00a3", "\u00e0\u00b8\u017e\u00e0\u00b8\u00b8\u00e0\u00b8\u02dc", "\u00e0\u00b8\u017e\u00e0\u00b8\u00a4\u00e0\u00b8\u00ab\u00e0\u00b8\u00b1\u00e0\u00b8\u00aa\u00e0\u00b8\u0161\u00e0\u00b8\u201d\u00e0\u00b8\u00b5", "\u00e0\u00b8\u00a8\u00e0\u00b8\u00b8\u00e0\u00b8\u0081\u00e0\u00b8\u00a3\u00e0\u00b9\u0152", "\u00e0\u00b9\u20ac\u00e0\u00b8\u00aa\u00e0\u00b8\u00b2\u00e0\u00b8\u00a3\u00e0\u00b9\u0152"], dayNamesMin: ["\u00e0\u00b8\u00ad\u00e0\u00b8\u00b2.", "\u00e0\u00b8\u02c6.", "\u00e0\u00b8\u00ad.", "\u00e0\u00b8\u017e.", "\u00e0\u00b8\u017e\u00e0\u00b8\u00a4.", "\u00e0\u00b8\u00a8.", "\u00e0\u00b8\u00aa."], firstDay: 0, isRTL: !1, monthNames: ["\u00e0\u00b8\u00a1\u00e0\u00b8\u0081\u00e0\u00b8\u00a3\u00e0\u00b8\u00b2\u00e0\u00b8\u201e\u00e0\u00b8\u00a1", "\u00e0\u00b8\u0081\u00e0\u00b8\u00b8\u00e0\u00b8\u00a1\u00e0\u00b8 \u00e0\u00b8\u00b2\u00e0\u00b8\u017e\u00e0\u00b8\u00b1\u00e0\u00b8\u2122\u00e0\u00b8\u02dc\u00e0\u00b9\u0152", "\u00e0\u00b8\u00a1\u00e0\u00b8\u00b5\u00e0\u00b8\u2122\u00e0\u00b8\u00b2\u00e0\u00b8\u201e\u00e0\u00b8\u00a1", "\u00e0\u00b9\u20ac\u00e0\u00b8\u00a1\u00e0\u00b8\u00a9\u00e0\u00b8\u00b2\u00e0\u00b8\u00a2\u00e0\u00b8\u2122", "\u00e0\u00b8\u017e\u00e0\u00b8\u00a4\u00e0\u00b8\u00a9\u00e0\u00b8 \u00e0\u00b8\u00b2\u00e0\u00b8\u201e\u00e0\u00b8\u00a1", "\u00e0\u00b8\u00a1\u00e0\u00b8\u00b4\u00e0\u00b8\u2013\u00e0\u00b8\u00b8\u00e0\u00b8\u2122\u00e0\u00b8\u00b2\u00e0\u00b8\u00a2\u00e0\u00b8\u2122", "\u00e0\u00b8\u0081\u00e0\u00b8\u00a3\u00e0\u00b8\u0081\u00e0\u00b8\u017d\u00e0\u00b8\u00b2\u00e0\u00b8\u201e\u00e0\u00b8\u00a1", "\u00e0\u00b8\u00aa\u00e0\u00b8\u00b4\u00e0\u00b8\u2021\u00e0\u00b8\u00ab\u00e0\u00b8\u00b2\u00e0\u00b8\u201e\u00e0\u00b8\u00a1", "\u00e0\u00b8\u0081\u00e0\u00b8\u00b1\u00e0\u00b8\u2122\u00e0\u00b8\u00a2\u00e0\u00b8\u00b2\u00e0\u00b8\u00a2\u00e0\u00b8\u2122", "\u00e0\u00b8\u2022\u00e0\u00b8\u00b8\u00e0\u00b8\u00a5\u00e0\u00b8\u00b2\u00e0\u00b8\u201e\u00e0\u00b8\u00a1", "\u00e0\u00b8\u017e\u00e0\u00b8\u00a4\u00e0\u00b8\u00a8\u00e0\u00b8\u02c6\u00e0\u00b8\u00b4\u00e0\u00b8\u0081\u00e0\u00b8\u00b2\u00e0\u00b8\u00a2\u00e0\u00b8\u2122", "\u00e0\u00b8\u02dc\u00e0\u00b8\u00b1\u00e0\u00b8\u2122\u00e0\u00b8\u00a7\u00e0\u00b8\u00b2\u00e0\u00b8\u201e\u00e0\u00b8\u00a1"], showMonthAfterYear: !1, yearSuffix: ""}, tj: {dayNames: ["\u00d1\u008f\u00d0\u00ba\u00d1\u02c6\u00d0\u00b0\u00d0\u00bd\u00d0\u00b1\u00d0\u00b5", "\u00d0\u00b4\u00d1\u0192\u00d1\u02c6\u00d0\u00b0\u00d0\u00bd\u00d0\u00b1\u00d0\u00b5", "\u00d1\u0081\u00d0\u00b5\u00d1\u02c6\u00d0\u00b0\u00d0\u00bd\u00d0\u00b1\u00d0\u00b5", "\u00d1\u2021\u00d0\u00be\u00d1\u20ac\u00d1\u02c6\u00d0\u00b0\u00d0\u00bd\u00d0\u00b1\u00d0\u00b5", "\u00d0\u00bf\u00d0\u00b0\u00d0\u00bd\u00d2\u00b7\u00d1\u02c6\u00d0\u00b0\u00d0\u00bd\u00d0\u00b1\u00d0\u00b5", "\u00d2\u00b7\u00d1\u0192\u00d0\u00bc\u00d1\u0160\u00d0\u00b0", "\u00d1\u02c6\u00d0\u00b0\u00d0\u00bd\u00d0\u00b1\u00d0\u00b5"], dayNamesMin: ["\u00d1\u008f\u00d0\u00ba\u00d1\u02c6", "\u00d0\u00b4\u00d1\u0192\u00d1\u02c6", "\u00d1\u0081\u00d0\u00b5\u00d1\u02c6", "\u00d1\u2021\u00d0\u00be\u00d1\u20ac", "\u00d0\u00bf\u00d0\u00b0\u00d0\u00bd", "\u00d2\u00b7\u00d1\u0192\u00d0\u00bc", "\u00d1\u02c6\u00d0\u00b0\u00d0\u00bd"], firstDay: 1, isRTL: !1, monthNames: ["\u00d0\u00af\u00d0\u00bd\u00d0\u00b2\u00d0\u00b0\u00d1\u20ac", "\u00d0\u00a4\u00d0\u00b5\u00d0\u00b2\u00d1\u20ac\u00d0\u00b0\u00d0\u00bb", "\u00d0\u0153\u00d0\u00b0\u00d1\u20ac\u00d1\u201a", "\u00d0\u0090\u00d0\u00bf\u00d1\u20ac\u00d0\u00b5\u00d0\u00bb", "\u00d0\u0153\u00d0\u00b0\u00d0\u00b9", "\u00d0\u02dc\u00d1\u017d\u00d0\u00bd", "\u00d0\u02dc\u00d1\u017d\u00d0\u00bb", "\u00d0\u0090\u00d0\u00b2\u00d0\u00b3\u00d1\u0192\u00d1\u0081\u00d1\u201a", "\u00d0\u00a1\u00d0\u00b5\u00d0\u00bd\u00d1\u201a\u00d1\u008f\u00d0\u00b1\u00d1\u20ac", "\u00d0\u017e\u00d0\u00ba\u00d1\u201a\u00d1\u008f\u00d0\u00b1\u00d1\u20ac", "\u00d0\u009d\u00d0\u00be\u00d1\u008f\u00d0\u00b1\u00d1\u20ac", "\u00d0\u201d\u00d0\u00b5\u00d0\u00ba\u00d0\u00b0\u00d0\u00b1\u00d1\u20ac"], showMonthAfterYear: !1, yearSuffix: ""}, tr: {dayNames: ["Pazar", "Pazartesi", "Sal\u00c4\u00b1", "\u00c3\u2021ar\u00c5\u0178amba", "Per\u00c5\u0178embe", "Cuma", "Cumartesi"], dayNamesMin: ["Pz", "Pt", "Sa", "\u00c3\u2021a", "Pe", "Cu", "Ct"], firstDay: 1, isRTL: !1, monthNames: ["Ocak", "\u00c5\u017eubat", "Mart", "Nisan", "May\u00c4\u00b1s", "Haziran", "Temmuz", "A\u00c4\u0178ustos", "Eyl\u00c3\u00bcl", "Ekim", "Kas\u00c4\u00b1m", "Aral\u00c4\u00b1k"], showMonthAfterYear: !1, yearSuffix: ""}, uk: {dayNames: ["\u00d0\u00bd\u00d0\u00b5\u00d0\u00b4\u00d1\u2013\u00d0\u00bb\u00d1\u008f", "\u00d0\u00bf\u00d0\u00be\u00d0\u00bd\u00d0\u00b5\u00d0\u00b4\u00d1\u2013\u00d0\u00bb\u00d0\u00be\u00d0\u00ba", "\u00d0\u00b2\u00d1\u2013\u00d0\u00b2\u00d1\u201a\u00d0\u00be\u00d1\u20ac\u00d0\u00be\u00d0\u00ba", "\u00d1\u0081\u00d0\u00b5\u00d1\u20ac\u00d0\u00b5\u00d0\u00b4\u00d0\u00b0", "\u00d1\u2021\u00d0\u00b5\u00d1\u201a\u00d0\u00b2\u00d0\u00b5\u00d1\u20ac", "\u00d0\u00bf\u00e2\u20ac\u2122\u00d1\u008f\u00d1\u201a\u00d0\u00bd\u00d0\u00b8\u00d1\u2020\u00d1\u008f", "\u00d1\u0081\u00d1\u0192\u00d0\u00b1\u00d0\u00be\u00d1\u201a\u00d0\u00b0"], dayNamesMin: ["\u00d0\u00bd\u00d0\u00b5\u00d0\u00b4", "\u00d0\u00bf\u00d0\u00bd\u00d0\u00b4", "\u00d0\u00b2\u00d1\u2013\u00d0\u00b2", "\u00d1\u0081\u00d1\u20ac\u00d0\u00b4", "\u00d1\u2021\u00d1\u201a\u00d0\u00b2", "\u00d0\u00bf\u00d1\u201a\u00d0\u00bd", "\u00d1\u0081\u00d0\u00b1\u00d1\u201a"], firstDay: 1, isRTL: !1, monthNames: ["\u00d0\u00a1\u00d1\u2013\u00d1\u2021\u00d0\u00b5\u00d0\u00bd\u00d1\u0152", "\u00d0\u203a\u00d1\u017d\u00d1\u201a\u00d0\u00b8\u00d0\u00b9", "\u00d0\u2018\u00d0\u00b5\u00d1\u20ac\u00d0\u00b5\u00d0\u00b7\u00d0\u00b5\u00d0\u00bd\u00d1\u0152", "\u00d0\u0161\u00d0\u00b2\u00d1\u2013\u00d1\u201a\u00d0\u00b5\u00d0\u00bd\u00d1\u0152", "\u00d0\u00a2\u00d1\u20ac\u00d0\u00b0\u00d0\u00b2\u00d0\u00b5\u00d0\u00bd\u00d1\u0152", "\u00d0\u00a7\u00d0\u00b5\u00d1\u20ac\u00d0\u00b2\u00d0\u00b5\u00d0\u00bd\u00d1\u0152", "\u00d0\u203a\u00d0\u00b8\u00d0\u00bf\u00d0\u00b5\u00d0\u00bd\u00d1\u0152", "\u00d0\u00a1\u00d0\u00b5\u00d1\u20ac\u00d0\u00bf\u00d0\u00b5\u00d0\u00bd\u00d1\u0152", "\u00d0\u2019\u00d0\u00b5\u00d1\u20ac\u00d0\u00b5\u00d1\u0081\u00d0\u00b5\u00d0\u00bd\u00d1\u0152", "\u00d0\u2013\u00d0\u00be\u00d0\u00b2\u00d1\u201a\u00d0\u00b5\u00d0\u00bd\u00d1\u0152", "\u00d0\u203a\u00d0\u00b8\u00d1\u0081\u00d1\u201a\u00d0\u00be\u00d0\u00bf\u00d0\u00b0\u00d0\u00b4", "\u00d0\u201c\u00d1\u20ac\u00d1\u0192\u00d0\u00b4\u00d0\u00b5\u00d0\u00bd\u00d1\u0152"], showMonthAfterYear: !1, yearSuffix: ""}, vi: {dayNames: ["Ch\u00e1\u00bb\u00a7 Nh\u00e1\u00ba\u00adt", "Th\u00e1\u00bb\u00a9 Hai", "Th\u00e1\u00bb\u00a9 Ba", "Th\u00e1\u00bb\u00a9 T\u00c6\u00b0", "Th\u00e1\u00bb\u00a9 N\u00c4\u0192m", "Th\u00e1\u00bb\u00a9 S\u00c3\u00a1u", "Th\u00e1\u00bb\u00a9 B\u00e1\u00ba\u00a3y"], dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"], firstDay: 0, isRTL: !1, monthNames: ["Th\u00c3\u00a1ng M\u00e1\u00bb\u2122t", "Th\u00c3\u00a1ng Hai", "Th\u00c3\u00a1ng Ba", "Th\u00c3\u00a1ng T\u00c6\u00b0", "Th\u00c3\u00a1ng N\u00c4\u0192m", "Th\u00c3\u00a1ng S\u00c3\u00a1u", "Th\u00c3\u00a1ng B\u00e1\u00ba\u00a3y", "Th\u00c3\u00a1ng T\u00c3\u00a1m", "Th\u00c3\u00a1ng Ch\u00c3\u00adn", "Th\u00c3\u00a1ng M\u00c6\u00b0\u00e1\u00bb\u009di", "Th\u00c3\u00a1ng M\u00c6\u00b0\u00e1\u00bb\u009di M\u00e1\u00bb\u2122t", "Th\u00c3\u00a1ng M\u00c6\u00b0\u00e1\u00bb\u009di Hai"], showMonthAfterYear: !1, yearSuffix: ""}, "zh-CN": {dayNames: ["\u00e6\u02dc\u0178\u00e6\u0153\u0178\u00e6\u2014\u00a5", "\u00e6\u02dc\u0178\u00e6\u0153\u0178\u00e4\u00b8\u20ac", "\u00e6\u02dc\u0178\u00e6\u0153\u0178\u00e4\u00ba\u0152", "\u00e6\u02dc\u0178\u00e6\u0153\u0178\u00e4\u00b8\u2030", "\u00e6\u02dc\u0178\u00e6\u0153\u0178\u00e5\u203a\u203a", "\u00e6\u02dc\u0178\u00e6\u0153\u0178\u00e4\u00ba\u201d", "\u00e6\u02dc\u0178\u00e6\u0153\u0178\u00e5\u2026\u00ad"], dayNamesMin: ["\u00e5\u2018\u00a8\u00e6\u2014\u00a5", "\u00e5\u2018\u00a8\u00e4\u00b8\u20ac", "\u00e5\u2018\u00a8\u00e4\u00ba\u0152", "\u00e5\u2018\u00a8\u00e4\u00b8\u2030", "\u00e5\u2018\u00a8\u00e5\u203a\u203a", "\u00e5\u2018\u00a8\u00e4\u00ba\u201d", "\u00e5\u2018\u00a8\u00e5\u2026\u00ad"], firstDay: 1, isRTL: !1, monthNames: ["\u00e4\u00b8\u20ac\u00e6\u0153\u02c6", "\u00e4\u00ba\u0152\u00e6\u0153\u02c6", "\u00e4\u00b8\u2030\u00e6\u0153\u02c6", "\u00e5\u203a\u203a\u00e6\u0153\u02c6", "\u00e4\u00ba\u201d\u00e6\u0153\u02c6", "\u00e5\u2026\u00ad\u00e6\u0153\u02c6", "\u00e4\u00b8\u0192\u00e6\u0153\u02c6", "\u00e5\u2026\u00ab\u00e6\u0153\u02c6", "\u00e4\u00b9\u009d\u00e6\u0153\u02c6", "\u00e5\u008d\u0081\u00e6\u0153\u02c6", "\u00e5\u008d\u0081\u00e4\u00b8\u20ac\u00e6\u0153\u02c6", "\u00e5\u008d\u0081\u00e4\u00ba\u0152\u00e6\u0153\u02c6"], showMonthAfterYear: !0, yearSuffix: "\u00e5\u00b9\u00b4"}, "zh-HK": {dayNames: ["\u00e6\u02dc\u0178\u00e6\u0153\u0178\u00e6\u2014\u00a5", "\u00e6\u02dc\u0178\u00e6\u0153\u0178\u00e4\u00b8\u20ac", "\u00e6\u02dc\u0178\u00e6\u0153\u0178\u00e4\u00ba\u0152", "\u00e6\u02dc\u0178\u00e6\u0153\u0178\u00e4\u00b8\u2030", "\u00e6\u02dc\u0178\u00e6\u0153\u0178\u00e5\u203a\u203a", "\u00e6\u02dc\u0178\u00e6\u0153\u0178\u00e4\u00ba\u201d", "\u00e6\u02dc\u0178\u00e6\u0153\u0178\u00e5\u2026\u00ad"], dayNamesMin: ["\u00e5\u2018\u00a8\u00e6\u2014\u00a5", "\u00e5\u2018\u00a8\u00e4\u00b8\u20ac", "\u00e5\u2018\u00a8\u00e4\u00ba\u0152", "\u00e5\u2018\u00a8\u00e4\u00b8\u2030", "\u00e5\u2018\u00a8\u00e5\u203a\u203a", "\u00e5\u2018\u00a8\u00e4\u00ba\u201d", "\u00e5\u2018\u00a8\u00e5\u2026\u00ad"], firstDay: 0, isRTL: !1, monthNames: ["\u00e4\u00b8\u20ac\u00e6\u0153\u02c6", "\u00e4\u00ba\u0152\u00e6\u0153\u02c6", "\u00e4\u00b8\u2030\u00e6\u0153\u02c6", "\u00e5\u203a\u203a\u00e6\u0153\u02c6", "\u00e4\u00ba\u201d\u00e6\u0153\u02c6", "\u00e5\u2026\u00ad\u00e6\u0153\u02c6", "\u00e4\u00b8\u0192\u00e6\u0153\u02c6", "\u00e5\u2026\u00ab\u00e6\u0153\u02c6", "\u00e4\u00b9\u009d\u00e6\u0153\u02c6", "\u00e5\u008d\u0081\u00e6\u0153\u02c6", "\u00e5\u008d\u0081\u00e4\u00b8\u20ac\u00e6\u0153\u02c6", "\u00e5\u008d\u0081\u00e4\u00ba\u0152\u00e6\u0153\u02c6"], showMonthAfterYear: !0, yearSuffix: "\u00e5\u00b9\u00b4"}, "zh-TW": {dayNames: ["\u00e6\u02dc\u0178\u00e6\u0153\u0178\u00e6\u2014\u00a5", "\u00e6\u02dc\u0178\u00e6\u0153\u0178\u00e4\u00b8\u20ac", "\u00e6\u02dc\u0178\u00e6\u0153\u0178\u00e4\u00ba\u0152", "\u00e6\u02dc\u0178\u00e6\u0153\u0178\u00e4\u00b8\u2030", "\u00e6\u02dc\u0178\u00e6\u0153\u0178\u00e5\u203a\u203a", "\u00e6\u02dc\u0178\u00e6\u0153\u0178\u00e4\u00ba\u201d", "\u00e6\u02dc\u0178\u00e6\u0153\u0178\u00e5\u2026\u00ad"], dayNamesMin: ["\u00e5\u2018\u00a8\u00e6\u2014\u00a5", "\u00e5\u2018\u00a8\u00e4\u00b8\u20ac", "\u00e5\u2018\u00a8\u00e4\u00ba\u0152", "\u00e5\u2018\u00a8\u00e4\u00b8\u2030", "\u00e5\u2018\u00a8\u00e5\u203a\u203a", "\u00e5\u2018\u00a8\u00e4\u00ba\u201d", "\u00e5\u2018\u00a8\u00e5\u2026\u00ad"], firstDay: 1, isRTL: !1, monthNames: ["\u00e4\u00b8\u20ac\u00e6\u0153\u02c6", "\u00e4\u00ba\u0152\u00e6\u0153\u02c6", "\u00e4\u00b8\u2030\u00e6\u0153\u02c6", "\u00e5\u203a\u203a\u00e6\u0153\u02c6", "\u00e4\u00ba\u201d\u00e6\u0153\u02c6", "\u00e5\u2026\u00ad\u00e6\u0153\u02c6", "\u00e4\u00b8\u0192\u00e6\u0153\u02c6", "\u00e5\u2026\u00ab\u00e6\u0153\u02c6", "\u00e4\u00b9\u009d\u00e6\u0153\u02c6", "\u00e5\u008d\u0081\u00e6\u0153\u02c6", "\u00e5\u008d\u0081\u00e4\u00b8\u20ac\u00e6\u0153\u02c6", "\u00e5\u008d\u0081\u00e4\u00ba\u0152\u00e6\u0153\u02c6"], showMonthAfterYear: !0, yearSuffix: "\u00e5\u00b9\u00b4"}}, e.fn.datePicker = function (e) {
        return new AJS.DatePicker(this, e)
    }
}(jQuery), AJS.dropDown = function (e, t) {
    var i = null, n = [], r = !1, s = AJS.$(document), a = {item: "li:has(a)", activeClass: "active", alignment: "right", displayHandler: function (e) {
        return e.name
    }, escapeHandler: function () {
        return this.hide("escape"), !1
    }, hideHandler: function () {
    }, moveHandler: function () {
    }, useDisabled: !1};
    if (AJS.$.extend(a, t), a.alignment = {left: "left", right: "right"}[a.alignment.toLowerCase()] || "left", e && e.jquery)i = e; else if ("string" == typeof e)i = AJS.$(e); else {
        if (!e || e.constructor != Array)throw Error("AJS.dropDown function was called with illegal parameter. Should be AJS.$ object, AJS.$ selector or array.");
        i = AJS("div").addClass("aui-dropdown").toggleClass("hidden", !!a.isHiddenByDefault);
        for (var o = 0, l = e.length; l > o; o++) {
            for (var c = AJS("ol"), u = 0, d = e[o].length; d > u; u++) {
                var h = AJS("li"), p = e[o][u];
                p.href ? (h.append(AJS("a").html("<span>" + a.displayHandler(p) + "</span>").attr({href: p.href}).addClass(p.className)), AJS.$.data(AJS.$("a > span", h)[0], "properties", p)) : h.html(p.html).addClass(p.className), p.icon && h.prepend(AJS("img").attr("src", p.icon)), p.insideSpanIcon && h.children("a").prepend(AJS("span").attr("class", "icon")), AJS.$.data(h[0], "properties", p), c.append(h)
            }
            o == l - 1 && c.addClass("last"), i.append(c)
        }
        AJS.$("body").append(i)
    }
    var f = function () {
        m(1)
    }, g = function () {
        m(-1)
    }, m = function (e) {
        var t = !r, i = AJS.dropDown.current.$[0], n = AJS.dropDown.current.links, s = i.focused;
        if (r = !0, 0 !== n.length) {
            if (i.focused = "number" == typeof s ? s : -1, !AJS.dropDown.current)return AJS.log("move - not current, aborting"), !0;
            i.focused += e, 0 > i.focused ? i.focused = n.length - 1 : i.focused >= n.length && (i.focused = 0), a.moveHandler(AJS.$(n[i.focused]), 0 > e ? "up" : "down"), t && n.length ? (AJS.$(n[i.focused]).addClass(a.activeClass), r = !1) : n.length || (r = !1)
        }
    }, y = function (e) {
        if (!AJS.dropDown.current)return!0;
        var t = e.which, i = AJS.dropDown.current.$[0], n = AJS.dropDown.current.links;
        switch (AJS.dropDown.current.cleanActive(), t) {
            case 40:
                f();
                break;
            case 38:
                g();
                break;
            case 27:
                return a.escapeHandler.call(AJS.dropDown.current, e);
            case 13:
                return i.focused >= 0 ? a.selectionHandler ? a.selectionHandler.call(AJS.dropDown.current, e, AJS.$(n[i.focused])) : "a" != AJS.$(n[i.focused]).attr("nodeName") ? AJS.$("a", n[i.focused]).trigger("focus") : AJS.$(n[i.focused]).trigger("focus") : !0;
            default:
                return n.length && AJS.$(n[i.focused]).addClass(a.activeClass), !0
        }
        return e.stopPropagation(), e.preventDefault(), !1
    }, v = function (e) {
        e && e.which && 3 == e.which || e && e.button && 2 == e.button || AJS.dropDown.current && AJS.dropDown.current.hide("click")
    }, b = function (e) {
        return function () {
            AJS.dropDown.current && (AJS.dropDown.current.cleanFocus(), this.originalClass = this.className, AJS.$(this).addClass(a.activeClass), AJS.dropDown.current.$[0].focused = e)
        }
    }, x = function (e) {
        return e.button || e.metaKey || e.ctrlKey || e.shiftKey ? !0 : (AJS.dropDown.current && a.selectionHandler && a.selectionHandler.call(AJS.dropDown.current, e, AJS.$(this)), void 0)
    }, w = function (e) {
        var t = !1;
        return e.data("events") && AJS.$.each(e.data("events"), function (e, i) {
            AJS.$.each(i, function (e, i) {
                return x === i ? (t = !0, !1) : void 0
            })
        }), t
    };
    return i.each(function () {
        var e = this, t = AJS.$(this), i = {}, r = {reset: function () {
            i = AJS.$.extend(i, {$: t, links: AJS.$(a.item || "li:has(a)", e), cleanActive: function () {
                e.focused + 1 && i.links.length && AJS.$(i.links[e.focused]).removeClass(a.activeClass)
            }, cleanFocus: function () {
                i.cleanActive(), e.focused = -1
            }, moveDown: f, moveUp: g, moveFocus: y, getFocusIndex: function () {
                return"number" == typeof e.focused ? e.focused : -1
            }}), i.links.each(function (e) {
                var t = AJS.$(this);
                w(t) || (t.hover(b(e), i.cleanFocus), t.click(x))
            })
        }, appear: function (e) {
            e ? (t.removeClass("hidden"), t.addClass("aui-dropdown-" + a.alignment)) : t.addClass("hidden")
        }, fade: function (e) {
            e ? t.fadeIn("fast") : t.fadeOut("fast")
        }, scroll: function (e) {
            e ? t.slideDown("fast") : t.slideUp("fast")
        }};
        i.reset = r.reset, i.reset(), i.addControlProcess = function (e, t) {
            AJS.$.aop.around({target: this, method: e}, t)
        }, i.addCallback = function (e, t) {
            return AJS.$.aop.after({target: this, method: e}, t)
        }, i.show = function (t) {
            a.useDisabled && this.$.closest(".aui-dd-parent").hasClass("disabled") || (this.alignment = a.alignment, v(), AJS.dropDown.current = this, this.method = t || this.method || "appear", this.timer = setTimeout(function () {
                s.click(v)
            }, 0), s.keydown(y), a.firstSelected && this.links[0] && b(0).call(this.links[0]), AJS.$(e.offsetParent).css({zIndex: 2e3}), r[this.method](!0), AJS.$(document).trigger("showLayer", ["dropdown", AJS.dropDown.current]))
        }, i.hide = function (e) {
            return this.method = this.method || "appear", AJS.$(t.get(0).offsetParent).css({zIndex: ""}), this.cleanFocus(), r[this.method](!1), s.unbind("click", v).unbind("keydown", y), AJS.$(document).trigger("hideLayer", ["dropdown", AJS.dropDown.current]), AJS.dropDown.current = null, e
        }, i.addCallback("reset", function () {
            a.firstSelected && this.links[0] && b(0).call(this.links[0])
        }), AJS.dropDown.iframes || (AJS.dropDown.iframes = []), AJS.dropDown.createShims = function () {
            return AJS.$("iframe").each(function () {
                var e = this;
                e.shim || (e.shim = AJS.$("<div />").addClass("shim hidden").appendTo("body"), AJS.dropDown.iframes.push(e))
            }), arguments.callee
        }(), i.addCallback("show", function () {
            AJS.$(AJS.dropDown.iframes).each(function () {
                var e = AJS.$(this);
                if (e.is(":visible")) {
                    var t = e.offset();
                    t.height = e.height(), t.width = e.width(), this.shim.css({left: t.left + "px", top: t.top + "px", height: t.height + "px", width: t.width + "px"}).removeClass("hidden")
                }
            })
        }), i.addCallback("hide", function () {
            AJS.$(AJS.dropDown.iframes).each(function () {
                this.shim.addClass("hidden")
            }), a.hideHandler()
        }), AJS.$.browser.msie && 9 > ~~AJS.$.browser.version && function () {
            var e = function () {
                this.$.is(":visible") && (this.iframeShim || (this.iframeShim = AJS.$('<iframe class="dropdown-shim" src="javascript:false;" frameBorder="0" />').insertBefore(this.$)), this.iframeShim.css({display: "block", top: this.$.css("top"), width: this.$.outerWidth() + "px", height: this.$.outerHeight() + "px"}), "left" == a.alignment ? this.iframeShim.css({left: "0px"}) : this.iframeShim.css({right: "0px"}))
            };
            i.addCallback("reset", e), i.addCallback("show", e), i.addCallback("hide", function () {
                this.iframeShim && this.iframeShim.css({display: "none"})
            })
        }(), n.push(i)
    }), n
}, AJS.dropDown.getAdditionalPropertyValue = function (e, t) {
    var i = e[0];
    i && "string" == typeof i.tagName && "li" == i.tagName.toLowerCase() || AJS.log("AJS.dropDown.getAdditionalPropertyValue : item passed in should be an LI element wrapped by jQuery");
    var n = AJS.$.data(i, "properties");
    return n ? n[t] : null
}, AJS.dropDown.removeAllAdditionalProperties = function () {
}, AJS.dropDown.Standard = function (e) {
    var t, i = [], n = {selector: ".aui-dd-parent", dropDown: ".aui-dropdown", trigger: ".aui-dd-trigger"};
    AJS.$.extend(n, e);
    var r = function (e, t, i, r) {
        AJS.$.extend(r, {trigger: e}), t.addClass("dd-allocated"), i.addClass("hidden"), 0 == n.isHiddenByDefault && r.show(), r.addCallback("show", function () {
            t.addClass("active")
        }), r.addCallback("hide", function () {
            t.removeClass("active")
        })
    }, s = function (e, t, i, n) {
        n != AJS.dropDown.current && (i.css({top: t.outerHeight()}), n.show(), e.stopImmediatePropagation()), e.preventDefault()
    };
    if (n.useLiveEvents) {
        var a = [], o = [];
        AJS.$(n.trigger).live("click", function (e) {
            var t, i, l, c, u = AJS.$(this);
            if ((c = AJS.$.inArray(this, a)) >= 0) {
                var d = o[c];
                t = d.parent, i = d.dropdown, l = d.ddcontrol
            } else {
                if (t = u.closest(n.selector), i = t.find(n.dropDown), 0 === i.length)return;
                if (l = AJS.dropDown(i, n)[0], !l)return;
                a.push(this), d = {parent: t, dropdown: i, ddcontrol: l}, r(u, t, i, l), o.push(d)
            }
            s(e, u, i, l)
        })
    } else t = this instanceof AJS.$ ? this : AJS.$(n.selector), t = t.not(".dd-allocated").filter(":has(" + n.dropDown + ")").filter(":has(" + n.trigger + ")"), t.each(function () {
        var e = AJS.$(this), t = AJS.$(n.dropDown, this), a = AJS.$(n.trigger, this), o = AJS.dropDown(t, n)[0];
        AJS.$.extend(o, {trigger: a}), r(a, e, t, o), a.click(function (e) {
            s(e, a, t, o)
        }), i.push(o)
    });
    return i
}, AJS.dropDown.Ajax = function (e) {
    var t, i = {cache: !0};
    return AJS.$.extend(i, e || {}), t = AJS.dropDown.Standard.call(this, i), AJS.$(t).each(function () {
        var e = this;
        AJS.$.extend(e, {getAjaxOptions: function (t) {
            var n = function (t) {
                i.formatResults && (t = i.formatResults(t)), i.cache && e.cache.set(e.getAjaxOptions(), t), e.refreshSuccess(t)
            };
            return i.ajaxOptions ? AJS.$.isFunction(i.ajaxOptions) ? AJS.$.extend(i.ajaxOptions.call(e), {success: n}) : AJS.$.extend(i.ajaxOptions, {success: n}) : AJS.$.extend(t, {success: n})
        }, refreshSuccess: function (e) {
            this.$.html(e)
        }, cache: function () {
            var e = {};
            return{get: function (t) {
                var i = t.data || "";
                return e[(t.url + i).replace(/[\?\&]/gi, "")]
            }, set: function (t, i) {
                var n = t.data || "";
                e[(t.url + n).replace(/[\?\&]/gi, "")] = i
            }, reset: function () {
                e = {}
            }}
        }(), show: function (t) {
            return function () {
                i.cache && e.cache.get(e.getAjaxOptions()) ? (e.refreshSuccess(e.cache.get(e.getAjaxOptions())), t.call(e)) : (AJS.$(AJS.$.ajax(e.getAjaxOptions())).throbber({target: e.$, end: function () {
                    e.reset()
                }}), t.call(e), e.iframeShim && e.iframeShim.hide())
            }
        }(e.show), resetCache: function () {
            e.cache.reset()
        }}), e.addCallback("refreshSuccess", function () {
            e.reset()
        })
    }), t
}, AJS.$.fn.dropDown = function (e, t) {
    return e = (e || "Standard").replace(/^([a-z])/, function (e) {
        return e.toUpperCase()
    }), AJS.dropDown[e].call(this, t)
}, function (e) {
    function t(e) {
        e.preventDefault()
    }

    function i(e) {
        if (e.click)e.click(); else {
            var t = document.createEvent("MouseEvents");
            t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(t)
        }
    }

    function n(t, i) {
        return t === i || e.contains(i, t)
    }

    function r(t) {
        t instanceof AJS.$ || (t = e(t));
        var i = t.attr("aria-owns"), n = t.attr("aria-haspopup"), r = document.getElementById(i);
        if (r)return e(r);
        if (!i)throw Error("Dropdown 2 trigger required attribute not set: aria-owns");
        if (!n)throw Error("Dropdown 2 trigger required attribute not set: aria-haspopup");
        if (!r)throw Error("Dropdown 2 trigger aria-owns attr set to nonexistent id: " + i);
        throw Error("Dropdown 2 trigger unknown error. I don't know what you did, but there's smoke everywhere. Consult the documentation.")
    }

    var s = e(document), a = AJS.$.browser.msie && 8 == parseInt(AJS.$.browser.version, 10), o = null, l = function () {
        function i(t) {
            a || 1 !== t.which || (a = !0, s.bind("mouseup mouseleave", n), e(this).trigger("aui-button-invoke"))
        }

        function n() {
            s.unbind("mouseup mouseleave", n), setTimeout(function () {
                a = !1
            }, 0)
        }

        function r() {
            a || e(this).trigger("aui-button-invoke")
        }

        var a = !1;
        return document.addEventListener === void 0 ? {click: r, "click selectstart": t, mousedown: function (e) {
            function t(e) {
                switch (e.toElement) {
                    case null:
                    case n:
                    case document.body:
                    case document.documentElement:
                        e.returnValue = !1
                }
            }

            var n = this, r = document.activeElement;
            i.call(this, e), null !== r && (r.attachEvent("onbeforedeactivate", t), setTimeout(function () {
                r.detachEvent("onbeforedeactivate", t)
            }, 0))
        }} : {click: r, "click mousedown": t, mousedown: i}
    }(), c = {"aui-button-invoke": function (l, c) {
        function u(t, i) {
            t.each(function () {
                var t = e(this);
                t.attr("role", i), t.hasClass("checked") ? (t.attr("aria-checked", "true"), "radio" == i && t.closest("ul").attr("role", "radiogroup")) : t.attr("aria-checked", "false")
            })
        }

        function d() {
            var t = N.offset(), i = N.outerWidth();
            D.css({left: 0, top: 0});
            var n, r = D.outerWidth(), s = e("body").outerWidth(!0), o = Math.max(parseInt(D.css("min-width"), 10), i), l = N.data("container") || !1, c = "left";
            a && (n = parseInt(D.css("border-left-width"), 10) + parseInt(D.css("border-right-width"), 10), r -= n, o -= n), E || D.css("min-width", o + "px");
            var u = t.left, d = t.top + N.outerHeight();
            if (E) {
                var h = 3;
                u = t.left + L.outerWidth() - h, d = t.top
            }
            if (u + r > s && u + i >= r && (u = t.left + i - r, E && (u = t.left - r), c = "right"), l) {
                var p = (N.closest(l), N.offset().left + N.outerWidth()), f = p + r;
                o >= r && (r = o), f > p && (u = p - r, c = "right"), a && (u -= n)
            }
            D.attr({"data-dropdown2-alignment": c, "aria-hidden": "false"}).css({display: "block", left: u + "px", top: d + "px"}), D.appendTo(document.body)
        }

        function h() {
            $(), T("off"), setTimeout(function () {
                D.css("display", "none").css("min-width", "").insertAfter(N).attr("aria-hidden", "true"), E || N.removeClass("active"), v().removeClass("active"), D.removeClass("aui-dropdown2-in-toolbar"), D.removeClass("aui-dropdown2-in-buttons"), P ? D.insertBefore(P) : D.appendTo(M), D.trigger("aui-dropdown2-hide")
            }, 0)
        }

        function p() {
            h(), E && L.trigger("aui-dropdown2-hide-all")
        }

        function f(e) {
            E && e.target === L[0] && h()
        }

        function g(e) {
            return!e.is(".disabled, [aria-disabled=true]")
        }

        function m(e) {
            return e.hasClass("aui-dropdown2-sub-trigger")
        }

        function y(t, i) {
            if (m(t)) {
                i = e.extend({}, i, {$menu: R});
                var n = r(t);
                n.is(":visible") ? n.trigger("aui-dropdown2-select-first") : t.trigger("aui-button-invoke", i)
            }
        }

        function v() {
            return D.find("a.active")
        }

        function b(e) {
            return F && F[0] === e[0] ? !1 : (F = e, v().removeClass("active"), g(e) && e.addClass("active"), D.trigger("aui-dropdown2-item-selected"), k(), !0)
        }

        function x() {
            b(D.find("a:not(.disabled)").first())
        }

        function w(e) {
            var t = D.find("> ul > li > a, > .aui-dropdown2-section > ul > li > a").not(".disabled");
            b(C(t, e, !0))
        }

        function _(e) {
            e.length > 0 && (p(), e.trigger("aui-button-invoke"))
        }

        function S(e) {
            _(C(R.find(".aui-dropdown2-trigger").not(".disabled, [aria-disabled=true], .aui-dropdown2-sub-trigger"), e, !1))
        }

        function C(e, t, i) {
            var n = e.index(e.filter(".active"));
            return n += 0 > n && 0 > t ? 1 : 0, n += t, i ? n %= e.length : 0 > n && (n = e.length), e.eq(n)
        }

        function A() {
            _(e(this))
        }

        function $() {
            o === J && (s.unbind(J), o = null)
        }

        function k() {
            o !== J && (s.unbind(o), s.bind(J), o = J)
        }

        function T(e) {
            var t = "bind", i = "delegate";
            "on" !== e && (t = "unbind", i = "undelegate"), E ? L[t]("aui-dropdown2-hide aui-dropdown2-item-selected aui-dropdown2-step-out", f) : (R[i](".aui-dropdown2-trigger:not(.active)", "mousemove", A), N[t]("aui-button-invoke", h)), D[t]("aui-dropdown2-hide-all", p), D[i]("a", O), D[t]("aui-dropdown2-hide", k), D[t]("aui-dropdown2-select-first", x)
        }

        c = e.extend({selectFirst: !0}, c);
        var D = r(this), N = e(this).addClass("active"), E = N.hasClass("aui-dropdown2-sub-trigger"), M = D.parent()[0], P = D.next()[0], I = e(this).attr("data-dropdown2-hide-location");
        if (I) {
            var H = document.getElementById(I);
            if (!H)throw Error("The specified data-dropdown2-hide-location id doesn't exist");
            M = e(H), P = void 0
        }
        var R = c.$menu || N.closest(".aui-dropdown2-trigger-group");
        if (E) {
            var L = N.closest(".aui-dropdown2");
            D.addClass(L.attr("class")).addClass("aui-dropdown2-sub-menu")
        }
        var O = {click: function (i) {
            var n = e(this);
            g(n) && (n.hasClass("interactive") || p(), m(n) && (y(n, {selectFirst: !1}), t(i)))
        }, mousemove: function () {
            var t = e(this), i = b(t);
            i && y(t, {selectFirst: !1})
        }}, J = {"click focusin mousedown": function (e) {
            var t = e.target;
            (document !== t || "focusin" !== e.type) && (n(t, D[0]) || n(t, N[0]) || p())
        }, keydown: function (e) {
            var n;
            if (e.shiftKey && 9 == e.keyCode)w(-1); else switch (e.keyCode) {
                case 13:
                    n = v(), m(n) ? y(n) : i(n[0]);
                    break;
                case 27:
                    h();
                    break;
                case 37:
                    if (n = v(), m(n)) {
                        var s = r(n);
                        if (s.is(":visible"))return D.trigger("aui-dropdown2-step-out"), void 0
                    }
                    E ? h() : S(-1);
                    break;
                case 38:
                    w(-1);
                    break;
                case 39:
                    n = v(), m(n) ? y(n) : S(1);
                    break;
                case 40:
                    w(1);
                    break;
                case 9:
                    w(1);
                    break;
                default:
                    return
            }
            t(e)
        }};
        N.attr("aria-controls", N.attr("aria-owns")), a && D.removeClass("aui-dropdown2-tailed"), D.find(".disabled").attr("aria-disabled", "true"), D.find("li.hidden > a").addClass("disabled").attr("aria-disabled", "true"), u(D.find(".aui-dropdown2-checkbox"), "checkbox"), u(D.find(".aui-dropdown2-radio"), "radio"), d(), N.hasClass("toolbar-trigger") && D.addClass("aui-dropdown2-in-toolbar"), N.parent().hasClass("aui-buttons") && D.addClass("aui-dropdown2-in-buttons"), N.parents().hasClass("aui-header") && D.addClass("aui-dropdown2-in-header"), D.trigger("aui-dropdown2-show", c), c.selectFirst && x(), T("on");
        var F = null
    }, mousedown: function (t) {
        1 === t.which && e(this).bind(u)
    }}, u = {mouseleave: function () {
        s.bind(d)
    }, "mouseup mouseleave": function () {
        e(this).unbind(u)
    }}, d = {mouseup: function (t) {
        var n = e(t.target).closest(".aui-dropdown2 a, .aui-dropdown2-trigger")[0];
        n && setTimeout(function () {
            i(n)
        }, 0)
    }, "mouseup mouseleave": function () {
        e(this).unbind(d)
    }};
    s.delegate(".aui-dropdown2-trigger", l), s.delegate(".aui-dropdown2-trigger:not(.active):not([aria-disabled=true]),.aui-dropdown2-sub-trigger:not([aria-disabled=true])", c), s.delegate(".aui-dropdown2-checkbox:not(.disabled)", "click", function () {
        var t = e(this);
        t.hasClass("checked") ? (t.removeClass("checked").attr("aria-checked", "false"), t.trigger("aui-dropdown2-item-uncheck")) : (t.addClass("checked").attr("aria-checked", "true"), t.trigger("aui-dropdown2-item-check"))
    }), s.delegate(".aui-dropdown2-radio:not(.checked):not(.disabled)", "click", function () {
        var t = e(this), i = t.closest("ul").find(".checked");
        i.removeClass("checked").attr("aria-checked", "false").trigger("aui-dropdown2-item-uncheck"), t.addClass("checked").attr("aria-checked", "true").trigger("aui-dropdown2-item-check")
    }), s.delegate(".aui-dropdown2 a.disabled", "click", function (e) {
        t(e)
    })
}(AJS.$), AJS.bind = function (e, t, i) {
    try {
        return"function" == typeof i ? AJS.$(window).bind(e, t, i) : AJS.$(window).bind(e, t)
    } catch (n) {
        AJS.log("error while binding: " + n.message)
    }
}, AJS.unbind = function (e, t) {
    try {
        return AJS.$(window).unbind(e, t)
    } catch (i) {
        AJS.log("error while unbinding: " + i.message)
    }
}, AJS.trigger = function (e, t) {
    try {
        return AJS.$(window).trigger(e, t)
    } catch (i) {
        AJS.log("error while triggering: " + i.message)
    }
}, AJS.warnAboutFirebug = function () {
    AJS.log("DEPRECATED: please remove all uses of AJS.warnAboutFirebug")
}, AJS.inlineHelp = function () {
    AJS.$(".icon-inline-help").click(function () {
        var e = AJS.$(this).siblings(".field-help");
        e.hasClass("hidden") ? e.removeClass("hidden") : e.addClass("hidden")
    })
}, function (e) {
    function t(t) {
        var i = e(t), n = e.extend({left: 0, top: 0}, i.offset());
        return{left: n.left, top: n.top, width: i.outerWidth(), height: i.outerHeight()}
    }

    AJS.InlineDialog = function (t, i, n, r) {
        if (r && r.getArrowAttributes && AJS.log("DEPRECATED: getArrowAttributes - See https://ecosystem.atlassian.net/browse/AUI-1362"), r && r.getArrowPath && AJS.log("DEPRECATED: getArrowPath - See https://ecosystem.atlassian.net/browse/AUI-1362"), i === void 0 && (i = (Math.random() + "").replace(".", ""), e("#inline-dialog-" + i + ", #arrow-" + i + ", #inline-dialog-shim-" + i).length))throw"GENERATED_IDENTIFIER_NOT_UNIQUE";
        var s, a, o, l, c, u = e.extend(!1, AJS.InlineDialog.opts, r), d = function () {
            return window.Raphael && r && (r.getArrowPath || r.getArrowAttributes)
        }, h = !1, p = !1, f = !1, g = e('<div id="inline-dialog-' + i + '" class="aui-inline-dialog"><div class="contents"></div><div id="arrow-' + i + '" class="arrow"></div></div>'), m = e("#arrow-" + i, g), y = g.find(".contents");
        d() || g.find(".arrow").addClass("aui-css-arrow"), y.css("width", u.width + "px"), y.mouseover(function () {
            clearTimeout(a), g.unbind("mouseover")
        }).mouseout(function () {
            x()
        });
        var v = function () {
            return s || (s = {popup: g, hide: function () {
                x(0)
            }, id: i, show: function () {
                b()
            }, persistent: u.persistent ? !0 : !1, reset: function () {
                function t(t, n) {
                    if (t.css(n.popupCss), d()) {
                        n.displayAbove && (n.arrowCss.top -= e.browser.msie ? 10 : 9), t.arrowCanvas || (t.arrowCanvas = Raphael("arrow-" + i, 16, 16));
                        var r = u.getArrowPath, s = e.isFunction(r) ? r(n) : r;
                        t.arrowCanvas.path(s).attr(u.getArrowAttributes())
                    } else n.displayAbove && !m.hasClass("aui-bottom-arrow") ? m.addClass("aui-bottom-arrow") : n.displayAbove || m.removeClass("aui-bottom-arrow");
                    m.css(n.arrowCss)
                }

                var n = u.calculatePositions(g, c, l, u);
                if (t(g, n), g.fadeIn(u.fadeTime, function () {
                }), e.browser.msie && 10 > ~~e.browser.version) {
                    var r = e("#inline-dialog-shim-" + i);
                    r.length || e(g).prepend(e('<iframe class = "inline-dialog-shim" id="inline-dialog-shim-' + i + '" frameBorder="0" src="javascript:false;"></iframe>')), r.css({width: y.outerWidth(), height: y.outerHeight()})
                }
            }}), s
        }, b = function () {
            g.is(":visible") || (o = setTimeout(function () {
                f && p && (u.addActiveClass && e(t).addClass("active"), h = !0, u.persistent || $(), AJS.InlineDialog.current = v(), e(document).trigger("showLayer", ["inlineDialog", v()]), v().reset())
            }, u.showDelay))
        }, x = function (i) {
            void 0 === i && u.persistent || (p = !1, h && u.preHideCallback.call(g[0].popup) && (i = null == i ? u.hideDelay : i, clearTimeout(a), clearTimeout(o), null != i && (a = setTimeout(function () {
                k(), u.addActiveClass && e(t).removeClass("active"), g.fadeOut(u.fadeTime, function () {
                    u.hideCallback.call(g[0].popup)
                }), g.arrowCanvas && (g.arrowCanvas.remove(), g.arrowCanvas = null), h = !1, p = !1, e(document).trigger("hideLayer", ["inlineDialog", v()]), AJS.InlineDialog.current = null, u.cacheContent || (f = !1, _ = !1)
            }, i))))
        }, w = function (t, r) {
            var s = e(r);
            u.upfrontCallback.call({popup: g, hide: function () {
                x(0)
            }, id: i, show: function () {
                b()
            }}), g.each(function () {
                this.popup !== void 0 && this.popup.hide()
            }), u.closeOthers && e(".aui-inline-dialog").each(function () {
                !this.popup.persistent && this.popup.hide()
            }), c = {target: s}, l = t ? {x: t.pageX, y: t.pageY} : {x: s.offset().left, y: s.offset().top}, h || clearTimeout(o), p = !0;
            var d = function () {
                _ = !1, f = !0, u.initCallback.call({popup: g, hide: function () {
                    x(0)
                }, id: i, show: function () {
                    b()
                }}), b()
            };
            return _ || (_ = !0, e.isFunction(n) ? n(y, r, d) : e.get(n, function (e, t, n) {
                y.html(u.responseHandler(e, t, n)), f = !0, u.initCallback.call({popup: g, hide: function () {
                    x(0)
                }, id: i, show: function () {
                    b()
                }}), b()
            })), clearTimeout(a), h || b(), !1
        };
        g[0].popup = v();
        var _ = !1, S = !1, C = function () {
            S || (e(u.container).append(g), S = !0)
        }, A = e(t);
        u.onHover ? u.useLiveEvents ? A.selector ? e(document).on("mousemove", A.selector,function (e) {
            C(), w(e, this)
        }).on("mouseout", A.selector, function () {
            x()
        }) : AJS.log("Warning: inline dialog trigger elements must have a jQuery selector when the useLiveEvents option is enabled.") : A.mousemove(function (e) {
            C(), w(e, this)
        }).mouseout(function () {
            x()
        }) : u.noBind || (u.useLiveEvents ? A.selector ? e(document).on("click", A.selector,function (e) {
            return C(), w(e, this), !1
        }).on("mouseout", A.selector, function () {
            x()
        }) : AJS.log("Warning: inline dialog trigger elements must have a jQuery selector when the useLiveEvents option is enabled.") : A.click(function (e) {
            return C(), w(e, this), !1
        }).mouseout(function () {
            x()
        }));
        var $ = function () {
            N(), P()
        }, k = function () {
            E(), I()
        }, T = !1, D = i + ".inline-dialog-check", N = function () {
            T || (e("body").bind("click." + D, function (t) {
                var n = e(t.target);
                0 === n.closest("#inline-dialog-" + i + " .contents").length && x(0)
            }), T = !0)
        }, E = function () {
            T && e("body").unbind("click." + D), T = !1
        }, M = function (e) {
            27 === e.keyCode && x(0)
        }, P = function () {
            e(document).on("keydown", M)
        }, I = function () {
            e(document).off("keydown", M)
        };
        return g.show = function (e) {
            e && e.stopPropagation(), C(), w(null, t)
        }, g.hide = function () {
            x(0)
        }, g.refresh = function () {
            h && v().reset()
        }, g.getOptions = function () {
            return u
        }, g
    }, AJS.InlineDialog.opts = {onTop: !1, responseHandler: function (e) {
        return e
    }, closeOthers: !0, isRelativeToMouse: !1, addActiveClass: !0, onHover: !1, useLiveEvents: !1, noBind: !1, fadeTime: 100, persistent: !1, hideDelay: 1e4, showDelay: 0, width: 300, offsetX: 0, offsetY: 10, arrowOffsetX: 0, container: "body", cacheContent: !0, displayShadow: !0, preHideCallback: function () {
        return!0
    }, hideCallback: function () {
    }, initCallback: function () {
    }, upfrontCallback: function () {
    }, calculatePositions: function (e, i, n, r) {
        r = r || {};
        var s = t(window), a = t(i.target), o = t(e), l = t(e.find(".arrow")), c = a.left + a.width / 2, u = (window.pageYOffset || document.documentElement.scrollTop) + s.height, d = 10;
        o.top = a.top + a.height + ~~r.offsetY, o.left = a.left + ~~r.offsetX;
        var h = s.width - (o.left + o.width + d);
        l.left = c - o.left + ~~r.arrowOffsetX, l.top = -(l.height / 2);
        var p = a.top > o.height, f = u > o.top + o.height, g = !f && p || p && r.onTop;
        if (g && (o.top = a.top - o.height - l.height / 2, l.top = o.height), r.isRelativeToMouse)0 > h ? (o.right = d, o.left = "auto", l.left = n.x - (s.width - o.width)) : (o.left = n.x - 20, l.left = n.x - o.left); else if (0 > h) {
            o.right = d, o.left = "auto";
            var m = s.width - o.right, y = m - o.width;
            l.right = "auto", l.left = c - y - l.width / 2
        } else o.width <= a.width / 2 && (l.left = o.width / 2, o.left = c - o.width / 2);
        return{displayAbove: g, popupCss: {left: o.left, top: o.top, right: o.right}, arrowCss: {left: l.left, top: l.top, right: l.right}}
    }, getArrowPath: function (e) {
        return e.displayAbove ? "M0,8L8,16,16,8" : "M0,8L8,0,16,8"
    }, getArrowAttributes: function () {
        return{fill: "#fff", stroke: "#ccc"}
    }}
}(AJS.$), function () {
    AJS.keyCode = {ALT: 18, BACKSPACE: 8, CAPS_LOCK: 20, COMMA: 188, COMMAND: 91, COMMAND_LEFT: 91, COMMAND_RIGHT: 93, CONTROL: 17, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, INSERT: 45, LEFT: 37, MENU: 93, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SHIFT: 16, SPACE: 32, TAB: 9, UP: 38, WINDOWS: 91}
}(AJS.$), function () {
    var e = 500, t = 5e3, i = 100;
    AJS.messages = {setup: function () {
        AJS.messages.createMessage("generic"), AJS.messages.createMessage("error"), AJS.messages.createMessage("warning"), AJS.messages.createMessage("info"), AJS.messages.createMessage("success"), AJS.messages.createMessage("hint"), AJS.messages.makeCloseable(), AJS.messages.makeFadeout()
    }, makeCloseable: function (e) {
        AJS.$(e || "div.aui-message.closeable").each(function () {
            var e = AJS.$(this), t = AJS.$('<span class="aui-icon icon-close" role="button" tabindex="0"></span>').click(function () {
                e.closeMessage()
            }).keypress(function (t) {
                (t.which === AJS.keyCode.ENTER || t.which === AJS.keyCode.SPACE) && (e.closeMessage(), t.preventDefault())
            });
            e.append(t)
        })
    }, makeFadeout: function (n, r, s) {
        r = r !== void 0 ? r : t, s = s !== void 0 ? s : e, AJS.$(n || "div.aui-message.fadeout").each(function () {
            function e() {
                a.stop(!0, !1).delay(r).fadeOut(s, function () {
                    a.closeMessage()
                })
            }

            function t() {
                a.stop(!0, !1).fadeTo(i, 1)
            }

            function n() {
                return!o && !l
            }

            var a = AJS.$(this), o = !1, l = !1;
            a.focusin(function () {
                o = !0, t()
            }).focusout(function () {
                o = !1, n() && e()
            }).hover(function () {
                l = !0, t()
            }, function () {
                l = !1, n() && e()
            }), e()
        })
    }, template: '<div class="aui-message {type} {closeable} {shadowed} {fadeout}"><p class="title"><span class="aui-icon icon-{type}"></span><strong>{title}</strong></p>{body}<!-- .aui-message --></div>', createMessage: function (e) {
        AJS.messages[e] = function (t, i) {
            var n, r, s = this.template;
            return i || (i = t, t = "#aui-message-bar"), i.closeable = i.closeable !== !1, i.shadowed = i.shadowed !== !1, n = AJS.$("" + AJS.template(s).fill({type: e, closeable: i.closeable ? "closeable" : "", shadowed: i.shadowed ? "shadowed" : "", fadeout: i.fadeout ? "fadeout" : "", title: i.title || "", "body:html": i.body || ""})), i.id && (/[#\'\"\.\s]/g.test(i.id) ? AJS.log("AJS.Messages error: ID rejected, must not include spaces, hashes, dots or quotes.") : n.attr("id", i.id)), r = i.insert || "append", "prepend" === r ? n.prependTo(t) : n.appendTo(t), i.closeable && AJS.messages.makeCloseable(n), i.fadeout && AJS.messages.makeFadeout(n, i.delay, i.duration), n
        }
    }}, AJS.$.fn.closeMessage = function () {
        var e = AJS.$(this);
        e.hasClass("aui-message", "closeable") && (e.stop(!0), e.trigger("messageClose", [this]).remove(), AJS.$(document).trigger("aui-message-close", [this]))
    }, AJS.$(function () {
        AJS.messages.setup()
    })
}(), function () {
    function e() {
        var e = AJS.$(this);
        AJS._addID(e), e.attr("role", "tab");
        var t = e.attr("href");
        AJS.$(t).attr("aria-labelledby", e.attr("id")), e.parent().hasClass(n) ? e.attr(s, "true") : e.attr(s, "false")
    }

    function t(e) {
        AJS.tabs.change(AJS.$(this), e), e && e.preventDefault()
    }

    var i = /#.*/, n = "active-tab", r = "active-pane", s = "aria-selected", a = "aria-hidden";
    AJS.tabs = {setup: function () {
        var i = AJS.$(".aui-tabs:not(.aui-tabs-disabled)");
        i.attr("role", "application"), i.find(".tabs-pane").each(function () {
            var e = AJS.$(this);
            e.attr("role", "tabpanel"), e.hasClass(r) ? e.attr(a, "false") : e.attr(a, "true")
        });
        for (var n = 0, s = i.length; s > n; n++) {
            var o = i.eq(n);
            if (!o.data("aui-tab-events-bound")) {
                var l = o.children("ul.tabs-menu");
                l.attr("role", "tablist"), l.children("li").attr("role", "presentation"), l.find("> .menu-item a").each(e), l.delegate("a", "click", t), o.data("aui-tab-events-bound", !0)
            }
        }
        AJS.$(".aui-tabs.vertical-tabs").find("a").each(function () {
            var e = AJS.$(this);
            if (!e.attr("title")) {
                var t = e.children("strong:first");
                AJS.isClipped(t) && e.attr("title", e.text())
            }
        })
    }, change: function (e) {
        var t = AJS.$(e.attr("href").match(i)[0]);
        t.addClass(r).attr(a, "false").siblings(".tabs-pane").removeClass(r).attr(a, "true"), e.parent("li.menu-item").addClass(n).siblings(".menu-item").removeClass(n), e.closest(".tabs-menu").find("a").attr(s, "false"), e.attr(s, "true"), e.trigger("tabSelect", {tab: e, pane: t})
    }}, AJS.$(AJS.tabs.setup)
}(), AJS.template = function (e) {
    var t = /\{([^\}]+)\}/g, i = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, n = /([^\\])'/g, r = function (e, t, n, r) {
        var s = n;
        return t.replace(i, function (e, t, i, n, a) {
            t = t || n, s && (t + ":html"in s ? (s = s[t + ":html"], r = !0) : t in s && (s = s[t]), a && "function" == typeof s && (s = s()))
        }), (null == s || s == n) && (s = e), s += "", r || (s = l.escape(s)), s
    }, s = function (e) {
        return this.template = this.template.replace(t, function (t, i) {
            return r(t, i, e, !0)
        }), this
    }, a = function (e) {
        return this.template = this.template.replace(t, function (t, i) {
            return r(t, i, e)
        }), this
    }, o = function () {
        return this.template
    }, l = function (e) {
        function t() {
            return t.template
        }

        return t.template = e + "", t.toString = t.valueOf = o, t.fill = a, t.fillHtml = s, t
    }, c = {}, u = [];
    return l.load = function (t) {
        return t += "", c.hasOwnProperty(t) || (u.length >= 1e3 && delete c[u.shift()], u.push(t), c[t] = e("script[title='" + t.replace(n, "$1\\'") + "']")[0].text), this(c[t])
    }, l.escape = AJS.escapeHtml, l
}(AJS.$), function (e, t) {
    var i = -1 !== navigator.platform.indexOf("Mac"), n = /^(backspace|tab|r(ight|eturn)|s(hift|pace|croll)|c(trl|apslock)|alt|pa(use|ge(up|down))|e(sc|nd)|home|left|up|d(el|own)|insert|f\d\d?|numlock|meta)/i;
    e.whenIType = function (r) {
        function s(e) {
            !AJS.popup.current && g && g.fire(e)
        }

        function a(e) {
            e.preventDefault()
        }

        function o(e) {
            var i = e && e.split ? t.trim(e).split(" ") : [e];
            t.each(i, function () {
                c(this)
            })
        }

        function l(e) {
            for (var t = e.length; t--;)if (e[t].length > 1 && "space" !== e[t])return!0;
            return!1
        }

        function c(e) {
            var i = e instanceof Array ? e : u("" + e), n = l(i) ? "keydown" : "keypress";
            f.push(i), t(document).bind(n, i, s), t(document).bind(n + " keyup", i, a)
        }

        function u(e) {
            for (var t, i, r = [], s = ""; e.length;)(t = e.match(/^(ctrl|meta|shift|alt)\+/i)) ? (s += t[0], e = e.substring(t[0].length)) : (i = e.match(n)) ? (r.push(s + i[0]), e = e.substring(i[0].length), s = "") : (r.push(s + e[0]), e = e.substring(1), s = "");
            return r
        }

        function d(e) {
            for (var n = t(e), r = n.attr("title") || "", s = f.slice(), a = n.data("kbShortcutAppended") || "", o = !a, l = o ? r : r.substring(0, r.length - a.length); s.length;)a = p(s.shift().slice(), a, o), o = !1;
            i && (a = a.replace(/Meta/gi, "\u2318").replace(/Shift/gi, "\u21e7")), n.attr("title", l + a), n.data("kbShortcutAppended", a)
        }

        function h(e) {
            var i = t(e), n = i.data("kbShortcutAppended");
            if (n) {
                var r = i.attr("title");
                i.attr("title", r.replace(n, "")), i.removeData("kbShortcutAppended")
            }
        }

        function p(e, i, n) {
            return n ? i += " (" + AJS.I18n.getText("aui.keyboard.shortcut.type.x", e.shift()) : (i = i.replace(/\)$/, ""), i += AJS.I18n.getText("aui.keyboard.shortcut.or.x", e.shift())), t.each(e, function () {
                i += " " + AJS.I18n.getText("aui.keyboard.shortcut.then.x", this)
            }), i += ")"
        }

        var f = [], g = t.Callbacks();
        return o(r), e.whenIType.makeShortcut({executor: g, bindKeys: o, addShortcutsToTitle: d, removeShortcutsFromTitle: h, keypressHandler: s, defaultPreventionHandler: a})
    }, e.whenIType.makeShortcut = function (e) {
        function i(e) {
            return function (i, r) {
                r = r || {};
                var s = r.focusedClass || "focused", a = r.hasOwnProperty("wrapAround") ? r.wrapAround : !0, o = r.hasOwnProperty("escToCancel") ? r.escToCancel : !0;
                return n.add(function () {
                    var n = t(i), r = n.filter("." + s), l = 0 === r.length ? void 0 : {transition: !0};
                    o && t(document).one("keydown", function (e) {
                        e.keyCode === AJS.keyCode.ESCAPE && r && r.removeClass(s)
                    }), r.length && r.removeClass(s), r = e(r, n, a), r && r.length > 0 && (r.addClass(s), r.moveTo(l), r.is("a") ? r.focus() : r.find("a:first").focus())
                }), this
            }
        }

        var n = e.executor, r = e.bindKeys, s = e.addShortcutsToTitle, a = e.removeShortcutsFromTitle, o = e.keypressHandler, l = e.defaultPreventionHandler, c = [];
        return{moveToNextItem: i(function (e, i, n) {
            var r;
            return n && 0 === e.length ? i.eq(0) : (r = t.inArray(e.get(0), i), i.length - 1 > r ? (r += 1, i.eq(r)) : n ? i.eq(0) : e)
        }), moveToPrevItem: i(function (e, i, n) {
            var r;
            return n && 0 === e.length ? i.filter(":last") : (r = t.inArray(e.get(0), i), r > 0 ? (r -= 1, i.eq(r)) : n ? i.filter(":last") : e)
        }), click: function (e) {
            return c.push(e), s(e), n.add(function () {
                var i = t(e);
                i.length > 0 && i.click()
            }), this
        }, goTo: function (e) {
            return n.add(function () {
                window.location.href = e
            }), this
        }, followLink: function (e) {
            return c.push(e), s(e), n.add(function () {
                var i = t(e)[0];
                i && {a: !0, link: !0}[i.nodeName.toLowerCase()] && (window.location.href = i.href)
            }), this
        }, execute: function (e) {
            var t = this;
            return n.add(function () {
                e.apply(t, arguments)
            }), this
        }, evaluate: function (e) {
            e.call(this)
        }, moveToAndClick: function (e) {
            return c.push(e), s(e), n.add(function () {
                var i = t(e);
                i.length > 0 && (i.click(), i.moveTo())
            }), this
        }, moveToAndFocus: function (e) {
            return c.push(e), s(e), n.add(function (t) {
                var i = AJS.$(e);
                i.length > 0 && (i.focus(), i.moveTo && i.moveTo(), i.is(":input") && t.preventDefault())
            }), this
        }, or: function (e) {
            return r(e), this
        }, unbind: function () {
            t(document).unbind("keydown keypress", o).unbind("keydown keypress keyup", l);
            for (var e = 0, i = c.length; i > e; e++)a(c[e]);
            c = []
        }}
    }, e.whenIType.fromJSON = function (e, n) {
        var r = [];
        return e && t.each(e, function (e, s) {
            var a, o = s.op, l = s.param;
            if ("execute" === o || "evaluate" === o)a = [Function(l)]; else if (/^\[[^\]\[]*,[^\]\[]*\]$/.test(l)) {
                try {
                    a = JSON.parse(l)
                } catch (c) {
                    AJS.error("When using a parameter array, array must be in strict JSON format: " + l)
                }
                t.isArray(a) || AJS.error("Badly formatted shortcut parameter. String or JSON Array of parameters required: " + l)
            } else a = [l];
            t.each(s.keys, function () {
                var e = this;
                n && i && (e = t.map(this, function (e) {
                    return e.replace(/ctrl/i, "meta")
                }));
                var s = AJS.whenIType(e);
                s[o].apply(s, a), r.push(s)
            })
        }), r
    }, t(document).bind("iframeAppended", function (e, i) {
        t(i).load(function () {
            var e = t(i).contents();
            e.bind("keyup keydown keypress", function (e) {
                t.browser.safari && "keypress" === e.type || t(e.target).is(":input") || t.event.trigger(e, arguments, document, !0)
            })
        })
    })
}(AJS, AJS.$), function (e) {
    AJS.responsiveheader = {}, AJS.responsiveheader.setup = function () {
        function t(t, i) {
            function n(e) {
                var t;
                if (r(), !(p > f)) {
                    u.show(), t = p - m;
                    for (var i = 0; t >= 0; i++)t -= h[i].itemWidth;
                    return i -= 1, o(i, e), a(i, d, e), i
                }
                l(e)
            }

            function r() {
                var t = 0 !== c.length ? c.position().left : e(window).width(), i = g.position().left + g.outerWidth(!0) + v;
                p = t - i
            }

            function s(t) {
                var i = e("<li>" + aui.dropdown2.trigger({menu: {id: "aui-responsive-header-dropdown-content-" + t}, text: AJS.I18n.getText("aui.words.more"), extraAttributes: {href: "#"}, id: "aui-responsive-header-dropdown-trigger-" + t}) + "</li>");
                i.append(aui.dropdown2.contents({id: "aui-responsive-header-dropdown-content-" + t, extraClasses: "aui-style-default", content: aui.dropdown2.section({content: "<ul id='aui-responsive-header-dropdown-list-" + t + "'></ul>"})})), 0 === v ? i.appendTo(y(".aui-nav")) : i.insertBefore(y(".aui-nav > li > .aui-button").first().parent()), u = i, m = u.outerWidth(!0)
            }

            function a(t, i, n) {
                if (!(0 > t || 0 > i || t === i)) {
                    var r, s, a = e("#aui-responsive-header-dropdown-trigger-" + n), o = a.parent();
                    a.hasClass("active") && a.trigger("aui-button-invoke");
                    for (var l = y(".aui-nav > li > a:not(.aui-button):not(#aui-responsive-header-dropdown-trigger-" + n + ")").length; t > i;)r = h[i], r && r.itemElement && (s = r.itemElement, 0 === l ? s.prependTo(y(".aui-nav")) : s.insertBefore(o), s.children("a").removeClass("aui-dropdown2-sub-trigger active"), i += 1, l += 1)
                }
            }

            function o(t, i) {
                if (!(0 > t))for (var n = e("#aui-responsive-header-dropdown-list-" + i), r = t; h.length > r; r++) {
                    h[r].itemElement.appendTo(n);
                    var s = h[r].itemElement.children("a");
                    s.hasClass("aui-dropdown2-trigger") && s.addClass("aui-dropdown2-sub-trigger")
                }
            }

            function l(e) {
                u.hide(), a(h.length, d, e)
            }

            var c = t.find(".aui-header-secondary .aui-nav").first();
            e(".aui-header").attr("data-aui-responsive", "true");
            var u, d, h = [], p = 0, f = 0, g = t.find("#logo"), m = 0, y = function () {
                var e = t.find(".aui-header-primary").first();
                return function (t) {
                    return e.find(t)
                }
            }(), v = 0;
            y(".aui-button").parent().each(function (t, i) {
                v += e(i).outerWidth(!0)
            }), y(".aui-nav > li > a:not(.aui-button)").each(function (t, i) {
                var n = e(i).parent(), r = n.outerWidth(!0);
                h.push({itemElement: n, itemWidth: r}), f += r
            }), d = h.length, e(window).resize(function () {
                d = n(i)
            }), s(i);
            var b = g.find("img");
            0 !== b.length && (b.attr("data-aui-responsive-header-index", i), b.load(function () {
                d = n(i)
            })), d = n(i), y(".aui-nav").css("width", "auto")
        }

        var i = e(".aui-header");
        i.length && i.each(function (i, n) {
            t(e(n), i)
        })
    }
}(AJS.$), AJS.$(AJS.responsiveheader.setup), function (e) {
    function t(e, t) {
        return"function" == typeof e ? e.call(t) : e
    }

    function i(e) {
        for (; e = e.parentNode;)if (e == document)return!0;
        return!1
    }

    function n() {
        var e = s++;
        return"tipsyuid" + e
    }

    function r(t, i) {
        this.$element = e(t), this.options = i, this.enabled = !0, this.fixTitle()
    }

    var s = 0;
    r.prototype = {show: function () {
        function i() {
            o.hoverTooltip = !0
        }

        function r() {
            if ("in" != o.hoverState && (o.hoverTooltip = !1, "manual" != o.options.trigger)) {
                var e = "hover" == o.options.trigger ? "mouseleave.tipsy" : "blur.tipsy";
                o.$element.trigger(e)
            }
        }

        var s = this.getTitle();
        if (s && this.enabled) {
            var a = this.tip();
            a.find(".tipsy-inner")[this.options.html ? "html" : "text"](s), a[0].className = "tipsy", a.remove().css({top: 0, left: 0, visibility: "hidden", display: "block"}).prependTo(document.body);
            var o = this;
            this.options.hoverable && a.hover(i, r);
            var l, c = e.extend({}, this.$element.offset(), {width: this.$element[0].offsetWidth, height: this.$element[0].offsetHeight}), u = a[0].offsetWidth, d = a[0].offsetHeight, h = t(this.options.gravity, this.$element[0]);
            switch (h.charAt(0)) {
                case"n":
                    l = {top: c.top + c.height + this.options.offset, left: c.left + c.width / 2 - u / 2};
                    break;
                case"s":
                    l = {top: c.top - d - this.options.offset, left: c.left + c.width / 2 - u / 2};
                    break;
                case"e":
                    l = {top: c.top + c.height / 2 - d / 2, left: c.left - u - this.options.offset};
                    break;
                case"w":
                    l = {top: c.top + c.height / 2 - d / 2, left: c.left + c.width + this.options.offset}
            }
            if (2 == h.length && (l.left = "w" == h.charAt(1) ? c.left + c.width / 2 - 15 : c.left + c.width / 2 - u + 15), a.css(l).addClass("tipsy-" + h), a.find(".tipsy-arrow")[0].className = "tipsy-arrow tipsy-arrow-" + h.charAt(0), this.options.className && a.addClass(t(this.options.className, this.$element[0])), this.options.fade ? a.stop().css({opacity: 0, display: "block", visibility: "visible"}).animate({opacity: this.options.opacity}) : a.css({visibility: "visible", opacity: this.options.opacity}), this.options.aria) {
                var p = n();
                a.attr("id", p), this.$element.attr("aria-describedby", p)
            }
        }
    }, hide: function () {
        this.options.fade ? this.tip().stop().fadeOut(function () {
            e(this).remove()
        }) : this.tip().remove(), this.options.aria && this.$element.removeAttr("aria-describedby")
    }, fixTitle: function () {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("original-title")) && e.attr("original-title", e.attr("title") || "").removeAttr("title")
    }, getTitle: function () {
        var e, t = this.$element, i = this.options;
        this.fixTitle();
        var e, i = this.options;
        return"string" == typeof i.title ? e = t.attr("title" == i.title ? "original-title" : i.title) : "function" == typeof i.title && (e = i.title.call(t[0])), e = ("" + e).replace(/(^\s*|\s*$)/, ""), e || i.fallback
    }, tip: function () {
        return this.$tip || (this.$tip = e('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>').attr("role", "tooltip"), this.$tip.data("tipsy-pointee", this.$element[0])), this.$tip
    }, validate: function () {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, enable: function () {
        this.enabled = !0
    }, disable: function () {
        this.enabled = !1
    }, toggleEnabled: function () {
        this.enabled = !this.enabled
    }}, e.fn.tipsy = function (t) {
        function i(i) {
            var n = e.data(i, "tipsy");
            return n || (n = new r(i, e.fn.tipsy.elementOptions(i, t)), e.data(i, "tipsy", n)), n
        }

        function n() {
            var e = i(this);
            e.hoverState = "in", 0 == t.delayIn ? e.show() : (e.fixTitle(), setTimeout(function () {
                "in" == e.hoverState && e.show()
            }, t.delayIn))
        }

        function s() {
            var e = i(this);
            e.hoverState = "out", 0 == t.delayOut ? e.hide() : setTimeout(function () {
                "out" != e.hoverState || e.hoverTooltip || e.hide()
            }, t.delayOut)
        }

        if (t === !0)return this.data("tipsy");
        if ("string" == typeof t) {
            var a = this.data("tipsy");
            return a && a[t](), this
        }
        if (t = e.extend({}, e.fn.tipsy.defaults, t), t.hoverable && (t.delayOut = t.delayOut || 20), t.live || this.each(function () {
            i(this)
        }), "manual" != t.trigger) {
            var o = "hover" == t.trigger ? "mouseenter.tipsy" : "focus.tipsy", l = "hover" == t.trigger ? "mouseleave.tipsy" : "blur.tipsy";
            t.live ? e(this.context).on(o, this.selector, n).on(l, this.selector, s) : this.bind(o, n).bind(l, s)
        }
        return this
    }, e.fn.tipsy.defaults = {aria: !1, className: null, delayIn: 0, delayOut: 0, fade: !1, fallback: "", gravity: "n", html: !1, live: !1, hoverable: !1, offset: 0, opacity: .8, title: "title", trigger: "hover"}, e.fn.tipsy.revalidate = function () {
        e(".tipsy").each(function () {
            var t = e.data(this, "tipsy-pointee");
            t && i(t) || e(this).remove()
        })
    }, e.fn.tipsy.elementOptions = function (t, i) {
        return e.metadata ? e.extend({}, i, e(t).metadata()) : i
    }, e.fn.tipsy.autoNS = function () {
        return e(this).offset().top > e(document).scrollTop() + e(window).height() / 2 ? "s" : "n"
    }, e.fn.tipsy.autoWE = function () {
        return e(this).offset().left > e(document).scrollLeft() + e(window).width() / 2 ? "e" : "w"
    }, e.fn.tipsy.autoBounds = function (t, i) {
        return function () {
            var n = {ns: i[0], ew: i.length > 1 ? i[1] : !1}, r = e(document).scrollTop() + t, s = e(document).scrollLeft() + t, a = e(this);
            return r > a.offset().top && (n.ns = "n"), s > a.offset().left && (n.ew = "w"), t > e(window).width() + e(document).scrollLeft() - a.offset().left && (n.ew = "e"), t > e(window).height() + e(document).scrollTop() - a.offset().top && (n.ns = "s"), n.ns + (n.ew ? n.ew : "")
        }
    }
}(jQuery), !function (e) {
    "use strict";
    e.extend({tablesorter: new function () {
        function t(e) {
            "undefined" != typeof console && console.log !== void 0 ? console.log(e) : alert(e)
        }

        function i(e, i) {
            t(e + " (" + ((new Date).getTime() - i.getTime()) + "ms)")
        }

        function n(t, i, n) {
            if (!i)return"";
            var r = t.config, s = r.textExtraction, a = "";
            return a = "simple" === s ? r.supportsTextContent ? i.textContent : e(i).text() : "function" == typeof s ? s(i, t, n) : "object" == typeof s && s.hasOwnProperty(n) ? s[n](i, t, n) : r.supportsTextContent ? i.textContent : e(i).text(), e.trim(a)
        }

        function r(e, i, r, s) {
            for (var a, o = _.parsers.length, l = !1, c = "", u = !0; "" === c && u;)r++, i[r] ? (l = i[r].cells[s], c = n(e, l, s), e.config.debug && t("Checking if value was empty on row " + r + ", column: " + s + ': "' + c + '"')) : u = !1;
            for (; --o >= 0;)if (a = _.parsers[o], a && "text" !== a.id && a.is && a.is(c, e, l))return a;
            return _.getParserById("text")
        }

        function s(e) {
            var i, n, s, a, o, l, c, u = e.config, d = u.$tbodies = u.$table.children("tbody:not(." + u.cssInfoBlock + ")"), h = "";
            if (0 === d.length)return u.debug ? t("*Empty table!* Not building a parser cache") : "";
            if (i = d[0].rows, i[0])for (n = [], s = i[0].cells.length, a = 0; s > a; a++)o = u.$headers.filter(":not([colspan])"), o = o.add(u.$headers.filter('[colspan="1"]')).filter('[data-column="' + a + '"]:last'), l = u.headers[a], c = _.getParserById(_.getData(o, l, "sorter")), u.empties[a] = _.getData(o, l, "empty") || u.emptyTo || (u.emptyToBottom ? "bottom" : "top"), u.strings[a] = _.getData(o, l, "string") || u.stringTo || "max", c || (c = r(e, i, -1, a)), u.debug && (h += "column:" + a + "; parser:" + c.id + "; string:" + u.strings[a] + "; empty: " + u.empties[a] + "\n"), n.push(c);
            u.debug && t(h), u.parsers = n
        }

        function a(r) {
            var s, a, o, l, c, u, d, h, p, f, g = r.tBodies, m = r.config, y = m.parsers, v = [];
            if (m.cache = {}, !y)return m.debug ? t("*Empty table!* Not building a cache") : "";
            for (m.debug && (f = new Date), m.showProcessing && _.isProcessing(r, !0), d = 0; g.length > d; d++)if (m.cache[d] = {row: [], normalized: []}, !e(g[d]).hasClass(m.cssInfoBlock)) {
                for (s = g[d] && g[d].rows.length || 0, a = g[d].rows[0] && g[d].rows[0].cells.length || 0, c = 0; s > c; ++c)if (h = e(g[d].rows[c]), p = [], h.hasClass(m.cssChildRow))m.cache[d].row[m.cache[d].row.length - 1] = m.cache[d].row[m.cache[d].row.length - 1].add(h); else {
                    for (m.cache[d].row.push(h), u = 0; a > u; ++u)o = n(r, h[0].cells[u], u), l = y[u].format(o, r, h[0].cells[u], u), p.push(l), "numeric" === (y[u].type || "").toLowerCase() && (v[u] = Math.max(Math.abs(l) || 0, v[u] || 0));
                    p.push(m.cache[d].normalized.length), m.cache[d].normalized.push(p)
                }
                m.cache[d].colMax = v
            }
            m.showProcessing && _.isProcessing(r), m.debug && i("Building cache for " + s + " rows", f)
        }

        function o(t, n) {
            var r, s, a, o, l, c, u, d, h, p, f, g, m = t.config, y = t.tBodies, v = [], b = m.cache;
            if (b[0]) {
                for (m.debug && (g = new Date), h = 0; y.length > h; h++)if (l = e(y[h]), l.length && !l.hasClass(m.cssInfoBlock)) {
                    for (c = _.processTbody(t, l, !0), r = b[h].row, s = b[h].normalized, a = s.length, o = a ? s[0].length - 1 : 0, u = 0; a > u; u++)if (f = s[u][o], v.push(r[f]), !m.appender || !m.removeRows)for (p = r[f].length, d = 0; p > d; d++)c.append(r[f][d]);
                    _.processTbody(t, c, !1)
                }
                m.appender && m.appender(t, v), m.debug && i("Rebuilt table", g), n || _.applyWidget(t), e(t).trigger("sortEnd", t)
            }
        }

        function l(t) {
            var i, n, r, s, a, o, l, c, u, d, h, p, f = [], g = {}, m = 0, y = e(t).find("thead:eq(0), tfoot").children("tr");
            for (i = 0; y.length > i; i++)for (o = y[i].cells, n = 0; o.length > n; n++) {
                for (a = o[n], l = a.parentNode.rowIndex, c = l + "-" + a.cellIndex, u = a.rowSpan || 1, d = a.colSpan || 1, f[l] === void 0 && (f[l] = []), r = 0; f[l].length + 1 > r; r++)if (f[l][r] === void 0) {
                    h = r;
                    break
                }
                for (g[c] = h, m = Math.max(h, m), e(a).attr({"data-column": h}), r = l; l + u > r; r++)for (f[r] === void 0 && (f[r] = []), p = f[r], s = h; h + d > s; s++)p[s] = "x"
            }
            return t.config.columns = m, g
        }

        function c(e) {
            return/^d/i.test(e) || 1 === e
        }

        function u(n) {
            var r, s, a, o, u, d, p, f = l(n), g = n.config;
            g.headerList = [], g.headerContent = [], g.debug && (p = new Date), o = g.cssIcon ? '<i class="' + g.cssIcon + '"></i>' : "", g.$headers = e(n).find(g.selectorHeaders).each(function (t) {
                s = e(this), r = g.headers[t], g.headerContent[t] = this.innerHTML, u = g.headerTemplate.replace(/\{content\}/g, this.innerHTML).replace(/\{icon\}/g, o), g.onRenderTemplate && (a = g.onRenderTemplate.apply(s, [t, u]), a && "string" == typeof a && (u = a)), this.innerHTML = '<div class="tablesorter-header-inner">' + u + "</div>", g.onRenderHeader && g.onRenderHeader.apply(s, [t]), this.column = f[this.parentNode.rowIndex + "-" + this.cellIndex], this.order = c(_.getData(s, r, "sortInitialOrder") || g.sortInitialOrder) ? [1, 0, 2] : [0, 1, 2], this.count = -1, this.lockedOrder = !1, d = _.getData(s, r, "lockedOrder") || !1, d !== void 0 && d !== !1 && (this.order = this.lockedOrder = c(d) ? [1, 1, 1] : [0, 0, 0]), s.addClass(g.cssHeader), g.headerList[t] = this, s.parent().addClass(g.cssHeaderRow), s.attr("tabindex", 0)
            }), h(n), g.debug && (i("Built headers:", p), t(g.$headers))
        }

        function d(e, t, i) {
            var n = e.config;
            n.$table.find(n.selectorRemove).remove(), s(e), a(e), x(n.$table, t, i)
        }

        function h(t) {
            var i, n = t.config;
            n.$headers.each(function (t, r) {
                i = "false" === _.getData(r, n.headers[t], "sorter"), r.sortDisabled = i, e(r)[i ? "addClass" : "removeClass"]("sorter-false")
            })
        }

        function p(t) {
            var i, n, r, s, a = t.config, o = a.sortList, l = [a.cssAsc, a.cssDesc], c = e(t).find("tfoot tr").children().removeClass(l.join(" "));
            for (a.$headers.removeClass(l.join(" ")), s = o.length, n = 0; s > n; n++)if (2 !== o[n][1] && (i = a.$headers.not(".sorter-false").filter('[data-column="' + o[n][0] + '"]' + (1 === s ? ":last" : "")), i.length))for (r = 0; i.length > r; r++)i[r].sortDisabled || (i.eq(r).addClass(l[o[n][1]]), c.length && c.filter('[data-column="' + o[n][0] + '"]').eq(r).addClass(l[o[n][1]]))
        }

        function f(t) {
            if (t.config.widthFixed && 0 === e(t).find("colgroup").length) {
                var i = e("<colgroup>"), n = e(t).width();
                e(t.tBodies[0]).find("tr:first").children("td").each(function () {
                    i.append(e("<col>").css("width", parseInt(1e3 * (e(this).width() / n), 10) / 10 + "%"))
                }), e(t).prepend(i)
            }
        }

        function g(t, i) {
            var n, r, s, a = t.config, o = i || a.sortList;
            a.sortList = [], e.each(o, function (t, i) {
                n = [parseInt(i[0], 10), parseInt(i[1], 10)], s = a.headerList[n[0]], s && (a.sortList.push(n), r = e.inArray(n[1], s.order), s.count = r >= 0 ? r : n[1] % (a.sortReset ? 3 : 2))
            })
        }

        function m(e, t) {
            return e && e[t] ? e[t].type || "" : ""
        }

        function y(t, i, n) {
            var r, s, a, l, c, u = t.config, d = !n[u.sortMultiSortKey], h = e(t);
            if (h.trigger("sortStart", t), i.count = n[u.sortResetKey] ? 2 : (i.count + 1) % (u.sortReset ? 3 : 2), u.sortRestart && (s = i, u.$headers.each(function () {
                this === s || !d && e(this).is("." + u.cssDesc + ",." + u.cssAsc) || (this.count = -1)
            })), s = i.column, d) {
                if (u.sortList = [], null !== u.sortForce)for (r = u.sortForce, a = 0; r.length > a; a++)r[a][0] !== s && u.sortList.push(r[a]);
                if (l = i.order[i.count], 2 > l && (u.sortList.push([s, l]), i.colSpan > 1))for (a = 1; i.colSpan > a; a++)u.sortList.push([s + a, l])
            } else if (u.sortAppend && u.sortList.length > 1 && _.isValueInArray(u.sortAppend[0][0], u.sortList) && u.sortList.pop(), _.isValueInArray(s, u.sortList))for (a = 0; u.sortList.length > a; a++)c = u.sortList[a], l = u.headerList[c[0]], c[0] === s && (c[1] = l.order[l.count], 2 === c[1] && (u.sortList.splice(a, 1), l.count = -1)); else if (l = i.order[i.count], 2 > l && (u.sortList.push([s, l]), i.colSpan > 1))for (a = 1; i.colSpan > a; a++)u.sortList.push([s + a, l]);
            if (null !== u.sortAppend)for (r = u.sortAppend, a = 0; r.length > a; a++)r[a][0] !== s && u.sortList.push(r[a]);
            h.trigger("sortBegin", t), setTimeout(function () {
                p(t), v(t), o(t)
            }, 1)
        }

        function v(t) {
            var n, r, s, a, o, l, c, u, d, h, p = 0, f = t.config, g = f.sortList, y = g.length, v = t.tBodies.length;
            if (!f.serverSideSorting && f.cache[0]) {
                for (f.debug && (n = new Date), s = 0; v > s; s++)o = f.cache[s].colMax, l = f.cache[s].normalized, c = l.length, h = l && l[0] ? l[0].length - 1 : 0, l.sort(function (i, n) {
                    for (r = 0; y > r; r++) {
                        a = g[r][0], d = g[r][1], u = /n/i.test(m(f.parsers, a)) ? "Numeric" : "Text", u += 0 === d ? "" : "Desc", /Numeric/.test(u) && f.strings[a] && (p = "boolean" == typeof f.string[f.strings[a]] ? (0 === d ? 1 : -1) * (f.string[f.strings[a]] ? -1 : 1) : f.strings[a] ? f.string[f.strings[a]] || 0 : 0);
                        var s = e.tablesorter["sort" + u](t, i[a], n[a], a, o[a], p);
                        if (s)return s
                    }
                    return i[h] - n[h]
                });
                f.debug && i("Sorting on " + ("" + g) + " and dir " + d + " time", n)
            }
        }

        function b(e, t) {
            e.trigger("updateComplete"), "function" == typeof t && t(e[0])
        }

        function x(e, t, i) {
            t === !1 || e[0].isProcessing ? b(e, i) : e.trigger("sorton", [e[0].config.sortList, function () {
                b(e, i)
            }])
        }

        function w(t) {
            var i, r, l = t.config, c = l.$table;
            l.$headers.find(l.selectorSort).add(l.$headers.filter(l.selectorSort)).unbind("mousedown.tablesorter mouseup.tablesorter sort.tablesorter keypress.tablesorter").bind("mousedown.tablesorter mouseup.tablesorter sort.tablesorter keypress.tablesorter", function (i, n) {
                if (1 !== (i.which || i.button) && !/sort|keypress/.test(i.type) || "keypress" === i.type && 13 !== i.which)return!1;
                if ("mouseup" === i.type && n !== !0 && (new Date).getTime() - r > 250)return!1;
                if ("mousedown" === i.type)return r = (new Date).getTime(), "INPUT" === i.target.tagName ? "" : !l.cancelSelection;
                l.delayInit && !l.cache && a(t);
                var s = /TH|TD/.test(this.tagName) ? e(this) : e(this).parents("th, td").filter(":first"), o = s[0];
                o.sortDisabled || y(t, o, i)
            }), l.cancelSelection && l.$headers.attr("unselectable", "on").bind("selectstart", !1).css({"user-select": "none", MozUserSelect: "none"}), c.unbind("sortReset update updateRows updateCell updateAll addRows sorton appendCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave ".split(" ").join(".tablesorter ")).bind("sortReset.tablesorter",function (e) {
                e.stopPropagation(), l.sortList = [], p(t), v(t), o(t)
            }).bind("updateAll.tablesorter",function (e, i, n) {
                e.stopPropagation(), _.refreshWidgets(t, !0, !0), _.restoreHeaders(t), u(t), w(t), d(t, i, n)
            }).bind("update.tablesorter updateRows.tablesorter",function (e, i, n) {
                e.stopPropagation(), h(t), d(t, i, n)
            }).bind("updateCell.tablesorter",function (i, r, s, a) {
                i.stopPropagation(), c.find(l.selectorRemove).remove();
                var o, u, d, h = c.find("tbody"), p = h.index(e(r).parents("tbody").filter(":first")), f = e(r).parents("tr").filter(":first");
                r = e(r)[0], h.length && p >= 0 && (u = h.eq(p).find("tr").index(f), d = r.cellIndex, o = l.cache[p].normalized[u].length - 1, l.cache[p].row[t.config.cache[p].normalized[u][o]] = f, l.cache[p].normalized[u][d] = l.parsers[d].format(n(t, r, d), t, r, d), x(c, s, a))
            }).bind("addRows.tablesorter",function (e, r, a, o) {
                e.stopPropagation();
                var u, d = r.filter("tr").length, h = [], p = r[0].cells.length, f = c.find("tbody").index(r.parents("tbody").filter(":first"));
                for (l.parsers || s(t), u = 0; d > u; u++) {
                    for (i = 0; p > i; i++)h[i] = l.parsers[i].format(n(t, r[u].cells[i], i), t, r[u].cells[i], i);
                    h.push(l.cache[f].row.length), l.cache[f].row.push([r[u]]), l.cache[f].normalized.push(h), h = []
                }
                x(c, a, o)
            }).bind("sorton.tablesorter",function (e, i, n, r) {
                e.stopPropagation(), c.trigger("sortStart", this), g(t, i), p(t), c.trigger("sortBegin", this), v(t), o(t, r), "function" == typeof n && n(t)
            }).bind("appendCache.tablesorter",function (e, i, n) {
                e.stopPropagation(), o(t, n), "function" == typeof i && i(t)
            }).bind("applyWidgetId.tablesorter",function (e, i) {
                e.stopPropagation(), _.getWidgetById(i).format(t, l, l.widgetOptions)
            }).bind("applyWidgets.tablesorter",function (e, i) {
                e.stopPropagation(), _.applyWidget(t, i)
            }).bind("refreshWidgets.tablesorter",function (e, i, n) {
                e.stopPropagation(), _.refreshWidgets(t, i, n)
            }).bind("destroy.tablesorter", function (e, i, n) {
                e.stopPropagation(), _.destroy(t, i, n)
            })
        }

        var _ = this;
        _.version = "2.10.8", _.parsers = [], _.widgets = [], _.defaults = {theme: "default", widthFixed: !1, showProcessing: !1, headerTemplate: "{content}", onRenderTemplate: null, onRenderHeader: null, cancelSelection: !0, dateFormat: "mmddyyyy", sortMultiSortKey: "shiftKey", sortResetKey: "ctrlKey", usNumberFormat: !0, delayInit: !1, serverSideSorting: !1, headers: {}, ignoreCase: !0, sortForce: null, sortList: [], sortAppend: null, sortInitialOrder: "asc", sortLocaleCompare: !1, sortReset: !1, sortRestart: !1, emptyTo: "bottom", stringTo: "max", textExtraction: "simple", textSorter: null, widgets: [], widgetOptions: {zebra: ["even", "odd"]}, initWidgets: !0, initialized: null, tableClass: "tablesorter", cssAsc: "tablesorter-headerAsc", cssChildRow: "tablesorter-childRow", cssDesc: "tablesorter-headerDesc", cssHeader: "tablesorter-header", cssHeaderRow: "tablesorter-headerRow", cssIcon: "tablesorter-icon", cssInfoBlock: "tablesorter-infoOnly", cssProcessing: "tablesorter-processing", selectorHeaders: "> thead th, > thead td", selectorSort: "th, td", selectorRemove: ".remove-me", debug: !1, headerList: [], empties: {}, strings: {}, parsers: []}, _.log = t, _.benchmark = i, _.construct = function (i) {
            return this.each(function () {
                if (!this.tHead || 0 === this.tBodies.length || this.hasInitialized === !0)return this.config && this.config.debug ? t("stopping initialization! No thead, tbody or tablesorter has already been initialized") : "";
                var n, r = e(this), o = this, l = "", c = e.metadata;
                o.hasInitialized = !1, o.isProcessing = !0, o.config = {}, n = e.extend(!0, o.config, _.defaults, i), e.data(o, "tablesorter", n), n.debug && e.data(o, "startoveralltimer", new Date), n.supportsTextContent = "x" === e("<span>x</span>")[0].textContent, n.supportsDataObject = parseFloat(e.fn.jquery) >= 1.4, n.string = {max: 1, min: -1, "max+": 1, "max-": -1, zero: 0, none: 0, "null": 0, top: !0, bottom: !1}, /tablesorter\-/.test(r.attr("class")) || (l = "" !== n.theme ? " tablesorter-" + n.theme : ""), n.$table = r.addClass(n.tableClass + l), n.$tbodies = r.children("tbody:not(." + n.cssInfoBlock + ")"), u(o), f(o), s(o), n.delayInit || a(o), w(o), n.supportsDataObject && r.data().sortlist !== void 0 ? n.sortList = r.data().sortlist : c && r.metadata() && r.metadata().sortlist && (n.sortList = r.metadata().sortlist), _.applyWidget(o, !0), n.sortList.length > 0 ? r.trigger("sorton", [n.sortList, {}, !n.initWidgets]) : n.initWidgets && _.applyWidget(o), n.showProcessing && r.unbind("sortBegin.tablesorter sortEnd.tablesorter").bind("sortBegin.tablesorter sortEnd.tablesorter", function (e) {
                    _.isProcessing(o, "sortBegin" === e.type)
                }), o.hasInitialized = !0, o.isProcessing = !1, n.debug && _.benchmark("Overall initialization time", e.data(o, "startoveralltimer")), r.trigger("tablesorter-initialized", o), "function" == typeof n.initialized && n.initialized(o)
            })
        }, _.isProcessing = function (t, i, n) {
            t = e(t);
            var r = t[0].config, s = n || t.find("." + r.cssHeader);
            i ? (r.sortList.length > 0 && (s = s.filter(function () {
                return this.sortDisabled ? !1 : _.isValueInArray(parseFloat(e(this).attr("data-column")), r.sortList)
            })), s.addClass(r.cssProcessing)) : s.removeClass(r.cssProcessing)
        }, _.processTbody = function (t, i, n) {
            var r;
            return n ? (t.isProcessing = !0, i.before('<span class="tablesorter-savemyplace"/>'), r = e.fn.detach ? i.detach() : i.remove()) : (r = e(t).find("span.tablesorter-savemyplace"), i.insertAfter(r), r.remove(), t.isProcessing = !1, void 0)
        }, _.clearTableBody = function (t) {
            e(t)[0].config.$tbodies.empty()
        }, _.restoreHeaders = function (t) {
            var i = t.config;
            i.$table.find(i.selectorHeaders).each(function (t) {
                e(this).find(".tablesorter-header-inner").length && e(this).html(i.headerContent[t])
            })
        }, _.destroy = function (t, i, n) {
            if (t = e(t)[0], t.hasInitialized) {
                _.refreshWidgets(t, !0, !0);
                var r = e(t), s = t.config, a = r.find("thead:first"), o = a.find("tr." + s.cssHeaderRow).removeClass(s.cssHeaderRow), l = r.find("tfoot:first > tr").children("th, td");
                a.find("tr").not(o).remove(), r.removeData("tablesorter").unbind("sortReset update updateAll updateRows updateCell addRows sorton appendCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave keypress sortBegin sortEnd ".split(" ").join(".tablesorter ")), s.$headers.add(l).removeClass(s.cssHeader + " " + s.cssAsc + " " + s.cssDesc).removeAttr("data-column"), o.find(s.selectorSort).unbind("mousedown.tablesorter mouseup.tablesorter keypress.tablesorter"), _.restoreHeaders(t), i !== !1 && r.removeClass(s.tableClass + " tablesorter-" + s.theme), t.hasInitialized = !1, "function" == typeof n && n(t)
            }
        }, _.regex = [/(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi, /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/, /^0x[0-9a-f]+$/i], _.sortText = function (e, t, i, n) {
            if (t === i)return 0;
            var r, s, a, o, l, c, u, d, h = e.config, p = h.string[h.empties[n] || h.emptyTo], f = _.regex;
            if ("" === t && 0 !== p)return"boolean" == typeof p ? p ? -1 : 1 : -p || -1;
            if ("" === i && 0 !== p)return"boolean" == typeof p ? p ? 1 : -1 : p || 1;
            if ("function" == typeof h.textSorter)return h.textSorter(t, i, e, n);
            if (r = t.replace(f[0], "\\0$1\\0").replace(/\\0$/, "").replace(/^\\0/, "").split("\\0"), a = i.replace(f[0], "\\0$1\\0").replace(/\\0$/, "").replace(/^\\0/, "").split("\\0"), s = parseInt(t.match(f[2]), 16) || 1 !== r.length && t.match(f[1]) && Date.parse(t), o = parseInt(i.match(f[2]), 16) || s && i.match(f[1]) && Date.parse(i) || null) {
                if (o > s)return-1;
                if (s > o)return 1
            }
            for (d = Math.max(r.length, a.length), u = 0; d > u; u++) {
                if (l = isNaN(r[u]) ? r[u] || 0 : parseFloat(r[u]) || 0, c = isNaN(a[u]) ? a[u] || 0 : parseFloat(a[u]) || 0, isNaN(l) !== isNaN(c))return isNaN(l) ? 1 : -1;
                if (typeof l != typeof c && (l += "", c += ""), c > l)return-1;
                if (l > c)return 1
            }
            return 0
        }, _.sortTextDesc = function (e, t, i, n) {
            if (t === i)return 0;
            var r = e.config, s = r.string[r.empties[n] || r.emptyTo];
            return"" === t && 0 !== s ? "boolean" == typeof s ? s ? -1 : 1 : s || 1 : "" === i && 0 !== s ? "boolean" == typeof s ? s ? 1 : -1 : -s || -1 : "function" == typeof r.textSorter ? r.textSorter(i, t, e, n) : _.sortText(e, i, t)
        }, _.getTextValue = function (e, t, i) {
            if (t) {
                var n, r = e ? e.length : 0, s = t + i;
                for (n = 0; r > n; n++)s += e.charCodeAt(n);
                return i * s
            }
            return 0
        }, _.sortNumeric = function (e, t, i, n, r, s) {
            if (t === i)return 0;
            var a = e.config, o = a.string[a.empties[n] || a.emptyTo];
            return"" === t && 0 !== o ? "boolean" == typeof o ? o ? -1 : 1 : -o || -1 : "" === i && 0 !== o ? "boolean" == typeof o ? o ? 1 : -1 : o || 1 : (isNaN(t) && (t = _.getTextValue(t, r, s)), isNaN(i) && (i = _.getTextValue(i, r, s)), t - i)
        }, _.sortNumericDesc = function (e, t, i, n, r, s) {
            if (t === i)return 0;
            var a = e.config, o = a.string[a.empties[n] || a.emptyTo];
            return"" === t && 0 !== o ? "boolean" == typeof o ? o ? -1 : 1 : o || 1 : "" === i && 0 !== o ? "boolean" == typeof o ? o ? 1 : -1 : -o || -1 : (isNaN(t) && (t = _.getTextValue(t, r, s)), isNaN(i) && (i = _.getTextValue(i, r, s)), i - t)
        }, _.characterEquivalents = {a: "\u00e1\u00e0\u00e2\u00e3\u00e4\u0105\u00e5", A: "\u00c1\u00c0\u00c2\u00c3\u00c4\u0104\u00c5", c: "\u00e7\u0107\u010d", C: "\u00c7\u0106\u010c", e: "\u00e9\u00e8\u00ea\u00eb\u011b\u0119", E: "\u00c9\u00c8\u00ca\u00cb\u011a\u0118", i: "\u00ed\u00ec\u0130\u00ee\u00ef\u0131", I: "\u00cd\u00cc\u0130\u00ce\u00cf", o: "\u00f3\u00f2\u00f4\u00f5\u00f6", O: "\u00d3\u00d2\u00d4\u00d5\u00d6", ss: "\u00df", SS: "\u1e9e", u: "\u00fa\u00f9\u00fb\u00fc\u016f", U: "\u00da\u00d9\u00db\u00dc\u016e"}, _.replaceAccents = function (e) {
            var t, i = "[", n = _.characterEquivalents;
            if (!_.characterRegex) {
                _.characterRegexArray = {};
                for (t in n)"string" == typeof t && (i += n[t], _.characterRegexArray[t] = RegExp("[" + n[t] + "]", "g"));
                _.characterRegex = RegExp(i + "]")
            }
            if (_.characterRegex.test(e))for (t in n)"string" == typeof t && (e = e.replace(_.characterRegexArray[t], t));
            return e
        }, _.isValueInArray = function (e, t) {
            var i, n = t.length;
            for (i = 0; n > i; i++)if (t[i][0] === e)return!0;
            return!1
        }, _.addParser = function (e) {
            var t, i = _.parsers.length, n = !0;
            for (t = 0; i > t; t++)_.parsers[t].id.toLowerCase() === e.id.toLowerCase() && (n = !1);
            n && _.parsers.push(e)
        }, _.getParserById = function (e) {
            var t, i = _.parsers.length;
            for (t = 0; i > t; t++)if (_.parsers[t].id.toLowerCase() === ("" + e).toLowerCase())return _.parsers[t];
            return!1
        }, _.addWidget = function (e) {
            _.widgets.push(e)
        }, _.getWidgetById = function (e) {
            var t, i, n = _.widgets.length;
            for (t = 0; n > t; t++)if (i = _.widgets[t], i && i.hasOwnProperty("id") && i.id.toLowerCase() === e.toLowerCase())return i
        }, _.applyWidget = function (t, n) {
            t = e(t)[0];
            var r, s, a, o = t.config, l = o.widgetOptions, c = [];
            o.debug && (r = new Date), o.widgets.length && (o.widgets = e.grep(o.widgets, function (t, i) {
                return e.inArray(t, o.widgets) === i
            }), e.each(o.widgets || [], function (e, t) {
                a = _.getWidgetById(t), a && a.id && (a.priority || (a.priority = 10), c[e] = a)
            }), c.sort(function (e, t) {
                return e.priority < t.priority ? -1 : e.priority === t.priority ? 0 : 1
            }), e.each(c, function (i, r) {
                r && (n ? (r.hasOwnProperty("options") && (l = t.config.widgetOptions = e.extend(!0, {}, r.options, l)), r.hasOwnProperty("init") && r.init(t, r, o, l)) : !n && r.hasOwnProperty("format") && r.format(t, o, l, !1))
            })), o.debug && (s = o.widgets.length, i("Completed " + (n === !0 ? "initializing " : "applying ") + s + " widget" + (1 !== s ? "s" : ""), r))
        }, _.refreshWidgets = function (i, n, r) {
            i = e(i)[0];
            var s, a = i.config, o = a.widgets, l = _.widgets, c = l.length;
            for (s = 0; c > s; s++)l[s] && l[s].id && (n || 0 > e.inArray(l[s].id, o)) && (a.debug && t("Refeshing widgets: Removing " + l[s].id), l[s].hasOwnProperty("remove") && l[s].remove(i, a, a.widgetOptions));
            r !== !0 && _.applyWidget(i, n)
        }, _.getData = function (t, i, n) {
            var r, s, a = "", o = e(t);
            return o.length ? (r = e.metadata ? o.metadata() : !1, s = " " + (o.attr("class") || ""), o.data(n) !== void 0 || o.data(n.toLowerCase()) !== void 0 ? a += o.data(n) || o.data(n.toLowerCase()) : r && r[n] !== void 0 ? a += r[n] : i && i[n] !== void 0 ? a += i[n] : " " !== s && s.match(" " + n + "-") && (a = s.match(RegExp("\\s" + n + "-([\\w-]+)"))[1] || ""), e.trim(a)) : ""
        }, _.formatFloat = function (t, i) {
            if ("string" != typeof t || "" === t)return t;
            var n, r = i && i.config ? i.config.usNumberFormat !== !1 : i !== void 0 ? i : !0;
            return t = r ? t.replace(/,/g, "") : t.replace(/[\s|\.]/g, "").replace(/,/g, "."), /^\s*\([.\d]+\)/.test(t) && (t = t.replace(/^\s*\(/, "-").replace(/\)/, "")), n = parseFloat(t), isNaN(n) ? e.trim(t) : n
        }, _.isDigit = function (e) {
            return isNaN(e) ? /^[\-+(]?\d+[)]?$/.test(("" + e).replace(/[,.'"\s]/g, "")) : !0
        }
    }});
    var t = e.tablesorter;
    e.fn.extend({tablesorter: t.construct}), t.addParser({id: "text", is: function () {
        return!0
    }, format: function (i, n) {
        var r = n.config;
        return i && (i = e.trim(r.ignoreCase ? i.toLocaleLowerCase() : i), i = r.sortLocaleCompare ? t.replaceAccents(i) : i), i
    }, type: "text"}), t.addParser({id: "digit", is: function (e) {
        return t.isDigit(e)
    }, format: function (i, n) {
        var r = t.formatFloat((i || "").replace(/[^\w,. \-()]/g, ""), n);
        return i && "number" == typeof r ? r : i ? e.trim(i && n.config.ignoreCase ? i.toLocaleLowerCase() : i) : i
    }, type: "numeric"}), t.addParser({id: "currency", is: function (e) {
        return/^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/.test((e || "").replace(/[,. ]/g, ""))
    }, format: function (i, n) {
        var r = t.formatFloat((i || "").replace(/[^\w,. \-()]/g, ""), n);
        return i && "number" == typeof r ? r : i ? e.trim(i && n.config.ignoreCase ? i.toLocaleLowerCase() : i) : i
    }, type: "numeric"}), t.addParser({id: "ipAddress", is: function (e) {
        return/^\d{1,3}[\.]\d{1,3}[\.]\d{1,3}[\.]\d{1,3}$/.test(e)
    }, format: function (e, i) {
        var n, r = e ? e.split(".") : "", s = "", a = r.length;
        for (n = 0; a > n; n++)s += ("00" + r[n]).slice(-3);
        return e ? t.formatFloat(s, i) : e
    }, type: "numeric"}), t.addParser({id: "url", is: function (e) {
        return/^(https?|ftp|file):\/\//.test(e)
    }, format: function (t) {
        return t ? e.trim(t.replace(/(https?|ftp|file):\/\//, "")) : t
    }, type: "text"}), t.addParser({id: "isoDate", is: function (e) {
        return/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/.test(e)
    }, format: function (e, i) {
        return e ? t.formatFloat("" !== e ? new Date(e.replace(/-/g, "/")).getTime() || "" : "", i) : e
    }, type: "numeric"}), t.addParser({id: "percent", is: function (e) {
        return/(\d\s*?%|%\s*?\d)/.test(e) && 15 > e.length
    }, format: function (e, i) {
        return e ? t.formatFloat(e.replace(/%/g, ""), i) : e
    }, type: "numeric"}), t.addParser({id: "usLongDate", is: function (e) {
        return/^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i.test(e) || /^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i.test(e)
    }, format: function (e, i) {
        return e ? t.formatFloat(new Date(e.replace(/(\S)([AP]M)$/i, "$1 $2")).getTime() || "", i) : e
    }, type: "numeric"}), t.addParser({id: "shortDate", is: function (e) {
        return/(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/.test((e || "").replace(/\s+/g, " ").replace(/[\-.,]/g, "/"))
    }, format: function (e, i, n, r) {
        if (e) {
            var s = i.config, a = s.headerList[r], o = a.dateFormat || t.getData(a, s.headers[r], "dateFormat") || s.dateFormat;
            e = e.replace(/\s+/g, " ").replace(/[\-.,]/g, "/"), "mmddyyyy" === o ? e = e.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/, "$3/$1/$2") : "ddmmyyyy" === o ? e = e.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/, "$3/$2/$1") : "yyyymmdd" === o && (e = e.replace(/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/, "$1/$2/$3"))
        }
        return e ? t.formatFloat(new Date(e).getTime() || "", i) : e
    }, type: "numeric"}), t.addParser({id: "time", is: function (e) {
        return/^(([0-2]?\d:[0-5]\d)|([0-1]?\d:[0-5]\d\s?([AP]M)))$/i.test(e)
    }, format: function (e, i) {
        return e ? t.formatFloat(new Date("2000/01/01 " + e.replace(/(\S)([AP]M)$/i, "$1 $2")).getTime() || "", i) : e
    }, type: "numeric"}), t.addParser({id: "metadata", is: function () {
        return!1
    }, format: function (t, i, n) {
        var r = i.config, s = r.parserMetadataName ? r.parserMetadataName : "sortValue";
        return e(n).metadata()[s]
    }, type: "numeric"}), t.addWidget({id: "zebra", priority: 90, format: function (i, n, r) {
        var s, a, o, l, c, u, d, h, p = RegExp(n.cssChildRow, "i"), f = n.$tbodies;
        for (n.debug && (u = new Date), d = 0; f.length > d; d++)s = f.eq(d), h = s.children("tr").length, h > 1 && (l = 0, a = s.children("tr:visible"), a.each(function () {
            o = e(this), p.test(this.className) || l++, c = 0 === l % 2, o.removeClass(r.zebra[c ? 1 : 0]).addClass(r.zebra[c ? 0 : 1])
        }));
        n.debug && t.benchmark("Applying Zebra widget", u)
    }, remove: function (t, i, n) {
        var r, s, a = i.$tbodies, o = (n.zebra || ["even", "odd"]).join(" ");
        for (r = 0; a.length > r; r++)s = e.tablesorter.processTbody(t, a.eq(r), !0), s.children().removeClass(o), e.tablesorter.processTbody(t, s, !1)
    }})
}(jQuery), !function (e, t, i) {
    function n(e, i) {
        var n, r = t.createElement(e || "div");
        for (n in i)r[n] = i[n];
        return r
    }

    function r(e) {
        for (var t = 1, i = arguments.length; i > t; t++)e.appendChild(arguments[t]);
        return e
    }

    function s(e, t, i, n) {
        var r = ["opacity", t, ~~(100 * e), i, n].join("-"), s = .01 + 100 * (i / n), a = Math.max(1 - (1 - e) / t * (100 - s), e), o = u.substring(0, u.indexOf("Animation")).toLowerCase(), l = o && "-" + o + "-" || "";
        return h[r] || (p.insertRule("@" + l + "keyframes " + r + "{" + "0%{opacity:" + a + "}" + s + "%{opacity:" + e + "}" + (s + .01) + "%{opacity:1}" + (s + t) % 100 + "%{opacity:" + e + "}" + "100%{opacity:" + a + "}" + "}", p.cssRules.length), h[r] = 1), r
    }

    function a(e, t) {
        var n, r, s = e.style;
        if (s[t] !== i)return t;
        for (t = t.charAt(0).toUpperCase() + t.slice(1), r = 0; d.length > r; r++)if (n = d[r] + t, s[n] !== i)return n
    }

    function o(e, t) {
        for (var i in t)e.style[a(e, i) || i] = t[i];
        return e
    }

    function l(e) {
        for (var t = 1; arguments.length > t; t++) {
            var n = arguments[t];
            for (var r in n)e[r] === i && (e[r] = n[r])
        }
        return e
    }

    function c(e) {
        for (var t = {x: e.offsetLeft, y: e.offsetTop}; e = e.offsetParent;)t.x += e.offsetLeft, t.y += e.offsetTop;
        return t
    }

    var u, d = ["webkit", "Moz", "ms", "O"], h = {}, p = function () {
        var e = n("style", {type: "text/css"});
        return r(t.getElementsByTagName("head")[0], e), e.sheet || e.styleSheet
    }(), f = {lines: 12, length: 7, width: 5, radius: 10, rotate: 0, corners: 1, color: "#000", speed: 1, trail: 100, opacity: .25, fps: 20, zIndex: 2e9, className: "spinner", top: "auto", left: "auto", position: "relative"}, g = function g(e) {
        return this.spin ? (this.opts = l(e || {}, g.defaults, f), i) : new g(e)
    };
    g.defaults = {}, l(g.prototype, {spin: function (e) {
        this.stop();
        var t, i, r = this, s = r.opts, a = r.el = o(n(0, {className: s.className}), {position: s.position, width: 0, zIndex: s.zIndex}), l = s.radius + s.length + s.width;
        if (e && (e.insertBefore(a, e.firstChild || null), i = c(e), t = c(a), o(a, {left: ("auto" == s.left ? i.x - t.x + (e.offsetWidth >> 1) : parseInt(s.left, 10) + l) + "px", top: ("auto" == s.top ? i.y - t.y + (e.offsetHeight >> 1) : parseInt(s.top, 10) + l) + "px"})), a.setAttribute("aria-role", "progressbar"), r.lines(a, r.opts), !u) {
            var d = 0, h = s.fps, p = h / s.speed, f = (1 - s.opacity) / (p * s.trail / 100), g = p / s.lines;
            (function m() {
                d++;
                for (var e = s.lines; e; e--) {
                    var t = Math.max(1 - (d + e * g) % p * f, s.opacity);
                    r.opacity(a, s.lines - e, t, s)
                }
                r.timeout = r.el && setTimeout(m, ~~(1e3 / h))
            })()
        }
        return r
    }, stop: function () {
        var e = this.el;
        return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el = i), this
    }, lines: function (e, t) {
        function i(e, i) {
            return o(n(), {position: "absolute", width: t.length + t.width + "px", height: t.width + "px", background: e, boxShadow: i, transformOrigin: "left", transform: "rotate(" + ~~(360 / t.lines * l + t.rotate) + "deg) translate(" + t.radius + "px" + ",0)", borderRadius: (t.corners * t.width >> 1) + "px"})
        }

        for (var a, l = 0; t.lines > l; l++)a = o(n(), {position: "absolute", top: 1 + ~(t.width / 2) + "px", transform: t.hwaccel ? "translate3d(0,0,0)" : "", opacity: t.opacity, animation: u && s(t.opacity, t.trail, l, t.lines) + " " + 1 / t.speed + "s linear infinite"}), t.shadow && r(a, o(i("#000", "0 0 4px #000"), {top: "2px"})), r(e, r(a, i(t.color, "0 0 1px rgba(0,0,0,.1)")));
        return e
    }, opacity: function (e, t, i) {
        e.childNodes.length > t && (e.childNodes[t].style.opacity = i)
    }}), function () {
        function e(e, t) {
            return n("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', t)
        }

        var t = o(n("group"), {behavior: "url(#default#VML)"});
        !a(t, "transform") && t.adj ? (p.addRule(".spin-vml", "behavior:url(#default#VML)"), g.prototype.lines = function (t, i) {
            function n() {
                return o(e("group", {coordsize: c + " " + c, coordorigin: -l + " " + -l}), {width: c, height: c})
            }

            function s(t, s, a) {
                r(d, r(o(n(), {rotation: 360 / i.lines * t + "deg", left: ~~s}), r(o(e("roundrect", {arcsize: i.corners}), {width: l, height: i.width, left: i.radius, top: -i.width >> 1, filter: a}), e("fill", {color: i.color, opacity: i.opacity}), e("stroke", {opacity: 0}))))
            }

            var a, l = i.length + i.width, c = 2 * l, u = 2 * -(i.width + i.length) + "px", d = o(n(), {position: "absolute", top: u, left: u});
            if (i.shadow)for (a = 1; i.lines >= a; a++)s(a, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (a = 1; i.lines >= a; a++)s(a);
            return r(t, d)
        }, g.prototype.opacity = function (e, t, i, n) {
            var r = e.firstChild;
            n = n.shadow && n.lines || 0, r && r.childNodes.length > t + n && (r = r.childNodes[t + n], r = r && r.firstChild, r = r && r.firstChild, r && (r.opacity = i))
        }) : u = a(t, "animation")
    }(), "function" == typeof define && define.amd ? define(function () {
        return g
    }) : e.Spinner = g
}(window, document), function (e) {
    e.fn.spin = function (t, i) {
        var n, r;
        if ("string" == typeof t) {
            if (!t in e.fn.spin.presets)throw Error("Preset '" + t + "' isn't defined");
            n = e.fn.spin.presets[t], r = i || {}
        } else {
            if (i)throw Error("Invalid arguments. Accepted arguments:\n$.spin([String preset[, Object options]]),\n$.spin(Object options),\n$.spin(Boolean shouldSpin)");
            n = e.fn.spin.presets.small, r = e.isPlainObject(t) ? t : {}
        }
        if (window.Spinner)return this.each(function () {
            var i = e(this), s = i.data();
            s.spinner && (s.spinner.stop(), delete s.spinner), t !== !1 && (r = e.extend({color: i.css("color")}, n, r), s.spinner = new Spinner(r).spin(this))
        });
        throw"Spinner class not available."
    }, e.fn.spin.presets = {small: {lines: 12, length: 3, width: 2, radius: 3, trail: 60, speed: 1.5}, medium: {lines: 12, length: 5, width: 3, radius: 8, trail: 60, speed: 1.5}, large: {lines: 12, length: 8, width: 4, radius: 10, trail: 60, speed: 1.5}}, e.fn.spinStop = function () {
        if (window.Spinner)return this.each(function () {
            var t = e(this), i = t.data();
            i.spinner && (i.spinner.stop(), delete i.spinner)
        });
        throw"Spinner class not available."
    }
}(jQuery), function (e) {
    e.fn.each2 === void 0 && e.extend(e.fn, {each2: function (t) {
        for (var i = e([0]), n = -1, r = this.length; r > ++n && (i.context = i[0] = this[n]) && t.call(i[0], n, i) !== !1;);
        return this
    }})
}(jQuery), function (e, t) {
    "use strict";
    function i(e) {
        var t, i, n, r;
        if (!e || 1 > e.length)return e;
        for (t = "", i = 0, n = e.length; n > i; i++)r = e.charAt(i), t += J[r] || r;
        return t
    }

    function n(e, t) {
        for (var i = 0, n = t.length; n > i; i += 1)if (s(e, t[i]))return i;
        return-1
    }

    function r() {
        var t = e(O);
        t.appendTo("body");
        var i = {width: t.width() - t[0].clientWidth, height: t.height() - t[0].clientHeight};
        return t.remove(), i
    }

    function s(e, i) {
        return e === i ? !0 : e === t || i === t ? !1 : null === e || null === i ? !1 : e.constructor === String ? e + "" == i + "" : i.constructor === String ? i + "" == e + "" : !1
    }

    function a(t, i) {
        var n, r, s;
        if (null === t || 1 > t.length)return[];
        for (n = t.split(i), r = 0, s = n.length; s > r; r += 1)n[r] = e.trim(n[r]);
        return n
    }

    function o(e) {
        return e.outerWidth(!1) - e.width()
    }

    function l(i) {
        var n = "keyup-change-value";
        i.on("keydown", function () {
            e.data(i, n) === t && e.data(i, n, i.val())
        }), i.on("keyup", function () {
            var r = e.data(i, n);
            r !== t && i.val() !== r && (e.removeData(i, n), i.trigger("keyup-change"))
        })
    }

    function c(i) {
        i.on("mousemove", function (i) {
            var n = L;
            (n === t || n.x !== i.pageX || n.y !== i.pageY) && e(i.target).trigger("mousemove-filtered", i)
        })
    }

    function u(e, i, n) {
        n = n || t;
        var r;
        return function () {
            var t = arguments;
            window.clearTimeout(r), r = window.setTimeout(function () {
                i.apply(n, t)
            }, e)
        }
    }

    function d(e) {
        var t, i = !1;
        return function () {
            return i === !1 && (t = e(), i = !0), t
        }
    }

    function h(e, t) {
        var i = u(e, function (e) {
            t.trigger("scroll-debounced", e)
        });
        t.on("scroll", function (e) {
            n(e.target, t.get()) >= 0 && i(e)
        })
    }

    function p(e) {
        e[0] !== document.activeElement && window.setTimeout(function () {
            var t, i = e[0], n = e.val().length;
            e.focus(), e.is(":visible") && i === document.activeElement && (i.setSelectionRange ? i.setSelectionRange(n, n) : i.createTextRange && (t = i.createTextRange(), t.collapse(!1), t.select()))
        }, 0)
    }

    function f(t) {
        t = e(t)[0];
        var i = 0, n = 0;
        if ("selectionStart"in t)i = t.selectionStart, n = t.selectionEnd - i; else if ("selection"in document) {
            t.focus();
            var r = document.selection.createRange();
            n = document.selection.createRange().text.length, r.moveStart("character", -t.value.length), i = r.text.length - n
        }
        return{offset: i, length: n}
    }

    function g(e) {
        e.preventDefault(), e.stopPropagation()
    }

    function m(e) {
        e.preventDefault(), e.stopImmediatePropagation()
    }

    function y(t) {
        if (!I) {
            var i = t[0].currentStyle || window.getComputedStyle(t[0], null);
            I = e(document.createElement("div")).css({position: "absolute", left: "-10000px", top: "-10000px", display: "none", fontSize: i.fontSize, fontFamily: i.fontFamily, fontStyle: i.fontStyle, fontWeight: i.fontWeight, letterSpacing: i.letterSpacing, textTransform: i.textTransform, whiteSpace: "nowrap"}), I.attr("class", "select2-sizer"), e("body").append(I)
        }
        return I.text(t.val()), I.width()
    }

    function v(t, i, n) {
        var r, s, a = [];
        r = t.attr("class"), r && (r = "" + r, e(r.split(" ")).each2(function () {
            0 === this.indexOf("select2-") && a.push(this)
        })), r = i.attr("class"), r && (r = "" + r, e(r.split(" ")).each2(function () {
            0 !== this.indexOf("select2-") && (s = n(this), s && a.push(s))
        })), t.attr("class", a.join(" "))
    }

    function b(e, n, r, s) {
        var a = i(e.toUpperCase()).indexOf(i(n.toUpperCase())), o = n.length;
        return 0 > a ? (r.push(s(e)), t) : (r.push(s(e.substring(0, a))), r.push("<span class='select2-match'>"), r.push(s(e.substring(a, a + o))), r.push("</span>"), r.push(s(e.substring(a + o, e.length))), t)
    }

    function x(e) {
        var t = {"\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;"};
        return(e + "").replace(/[&<>"'\/\\]/g, function (e) {
            return t[e]
        })
    }

    function w(i) {
        var n, r = null, s = i.quietMillis || 100, a = i.url, o = this;
        return function (l) {
            window.clearTimeout(n), n = window.setTimeout(function () {
                var n = i.data, s = a, c = i.transport || e.fn.select2.ajaxDefaults.transport, u = {type: i.type || "GET", cache: i.cache || !1, jsonpCallback: i.jsonpCallback || t, dataType: i.dataType || "json"}, d = e.extend({}, e.fn.select2.ajaxDefaults.params, u);
                n = n ? n.call(o, l.term, l.page, l.context) : null, s = "function" == typeof s ? s.call(o, l.term, l.page, l.context) : s, r && r.abort(), i.params && (e.isFunction(i.params) ? e.extend(d, i.params.call(o)) : e.extend(d, i.params)), e.extend(d, {url: s, dataType: i.dataType, data: n, success: function (e) {
                    var t = i.results(e, l.page);
                    l.callback(t)
                }}), r = c.call(o, d)
            }, s)
        }
    }

    function _(i) {
        var n, r, s = i, a = function (e) {
            return"" + e.text
        };
        e.isArray(s) && (r = s, s = {results: r}), e.isFunction(s) === !1 && (r = s, s = function () {
            return r
        });
        var o = s();
        return o.text && (a = o.text, e.isFunction(a) || (n = o.text, a = function (e) {
            return e[n]
        })), function (i) {
            var n, r = i.term, o = {results: []};
            return"" === r ? (i.callback(s()), t) : (n = function (t, s) {
                var o, l;
                if (t = t[0], t.children) {
                    o = {};
                    for (l in t)t.hasOwnProperty(l) && (o[l] = t[l]);
                    o.children = [], e(t.children).each2(function (e, t) {
                        n(t, o.children)
                    }), (o.children.length || i.matcher(r, a(o), t)) && s.push(o)
                } else i.matcher(r, a(t), t) && s.push(t)
            }, e(s().results).each2(function (e, t) {
                n(t, o.results)
            }), i.callback(o), t)
        }
    }

    function S(i) {
        var n = e.isFunction(i);
        return function (r) {
            var s = r.term, a = {results: []};
            e(n ? i() : i).each(function () {
                var e = this.text !== t, i = e ? this.text : this;
                ("" === s || r.matcher(s, i)) && a.results.push(e ? this : {id: this, text: this})
            }), r.callback(a)
        }
    }

    function C(t, i) {
        if (e.isFunction(t))return!0;
        if (!t)return!1;
        throw Error(i + " must be a function or a falsy value")
    }

    function A(t) {
        return e.isFunction(t) ? t() : t
    }

    function $(t) {
        var i = 0;
        return e.each(t, function (e, t) {
            t.children ? i += $(t.children) : i++
        }), i
    }

    function k(e, i, n, r) {
        var a, o, l, c, u, d = e, h = !1;
        if (!r.createSearchChoice || !r.tokenSeparators || 1 > r.tokenSeparators.length)return t;
        for (; ;) {
            for (o = -1, l = 0, c = r.tokenSeparators.length; c > l && (u = r.tokenSeparators[l], o = e.indexOf(u), !(o >= 0)); l++);
            if (0 > o)break;
            if (a = e.substring(0, o), e = e.substring(o + u.length), a.length > 0 && (a = r.createSearchChoice.call(this, a, i), a !== t && null !== a && r.id(a) !== t && null !== r.id(a))) {
                for (h = !1, l = 0, c = i.length; c > l; l++)if (s(r.id(a), r.id(i[l]))) {
                    h = !0;
                    break
                }
                h || n(a)
            }
        }
        return d !== e ? e : t
    }

    function T(t, i) {
        var n = function () {
        };
        return n.prototype = new t, n.prototype.constructor = n, n.prototype.parent = t.prototype, n.prototype = e.extend(n.prototype, i), n
    }

    if (window.Select2 === t) {
        var D, N, E, M, P, I, H, R, L = {x: 0, y: 0}, D = {TAB: 9, ENTER: 13, ESC: 27, SPACE: 32, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, SHIFT: 16, CTRL: 17, ALT: 18, PAGE_UP: 33, PAGE_DOWN: 34, HOME: 36, END: 35, BACKSPACE: 8, DELETE: 46, isArrow: function (e) {
            switch (e = e.which ? e.which : e) {
                case D.LEFT:
                case D.RIGHT:
                case D.UP:
                case D.DOWN:
                    return!0
            }
            return!1
        }, isControl: function (e) {
            var t = e.which;
            switch (t) {
                case D.SHIFT:
                case D.CTRL:
                case D.ALT:
                    return!0
            }
            return e.metaKey ? !0 : !1
        }, isFunctionKey: function (e) {
            return e = e.which ? e.which : e, e >= 112 && 123 >= e
        }}, O = "<div class='select2-measure-scrollbar'></div>", J = {"\u24b6": "A", "\uff21": "A", "\u00c0": "A", "\u00c1": "A", "\u00c2": "A", "\u1ea6": "A", "\u1ea4": "A", "\u1eaa": "A", "\u1ea8": "A", "\u00c3": "A", "\u0100": "A", "\u0102": "A", "\u1eb0": "A", "\u1eae": "A", "\u1eb4": "A", "\u1eb2": "A", "\u0226": "A", "\u01e0": "A", "\u00c4": "A", "\u01de": "A", "\u1ea2": "A", "\u00c5": "A", "\u01fa": "A", "\u01cd": "A", "\u0200": "A", "\u0202": "A", "\u1ea0": "A", "\u1eac": "A", "\u1eb6": "A", "\u1e00": "A", "\u0104": "A", "\u023a": "A", "\u2c6f": "A", "\ua732": "AA", "\u00c6": "AE", "\u01fc": "AE", "\u01e2": "AE", "\ua734": "AO", "\ua736": "AU", "\ua738": "AV", "\ua73a": "AV", "\ua73c": "AY", "\u24b7": "B", "\uff22": "B", "\u1e02": "B", "\u1e04": "B", "\u1e06": "B", "\u0243": "B", "\u0182": "B", "\u0181": "B", "\u24b8": "C", "\uff23": "C", "\u0106": "C", "\u0108": "C", "\u010a": "C", "\u010c": "C", "\u00c7": "C", "\u1e08": "C", "\u0187": "C", "\u023b": "C", "\ua73e": "C", "\u24b9": "D", "\uff24": "D", "\u1e0a": "D", "\u010e": "D", "\u1e0c": "D", "\u1e10": "D", "\u1e12": "D", "\u1e0e": "D", "\u0110": "D", "\u018b": "D", "\u018a": "D", "\u0189": "D", "\ua779": "D", "\u01f1": "DZ", "\u01c4": "DZ", "\u01f2": "Dz", "\u01c5": "Dz", "\u24ba": "E", "\uff25": "E", "\u00c8": "E", "\u00c9": "E", "\u00ca": "E", "\u1ec0": "E", "\u1ebe": "E", "\u1ec4": "E", "\u1ec2": "E", "\u1ebc": "E", "\u0112": "E", "\u1e14": "E", "\u1e16": "E", "\u0114": "E", "\u0116": "E", "\u00cb": "E", "\u1eba": "E", "\u011a": "E", "\u0204": "E", "\u0206": "E", "\u1eb8": "E", "\u1ec6": "E", "\u0228": "E", "\u1e1c": "E", "\u0118": "E", "\u1e18": "E", "\u1e1a": "E", "\u0190": "E", "\u018e": "E", "\u24bb": "F", "\uff26": "F", "\u1e1e": "F", "\u0191": "F", "\ua77b": "F", "\u24bc": "G", "\uff27": "G", "\u01f4": "G", "\u011c": "G", "\u1e20": "G", "\u011e": "G", "\u0120": "G", "\u01e6": "G", "\u0122": "G", "\u01e4": "G", "\u0193": "G", "\ua7a0": "G", "\ua77d": "G", "\ua77e": "G", "\u24bd": "H", "\uff28": "H", "\u0124": "H", "\u1e22": "H", "\u1e26": "H", "\u021e": "H", "\u1e24": "H", "\u1e28": "H", "\u1e2a": "H", "\u0126": "H", "\u2c67": "H", "\u2c75": "H", "\ua78d": "H", "\u24be": "I", "\uff29": "I", "\u00cc": "I", "\u00cd": "I", "\u00ce": "I", "\u0128": "I", "\u012a": "I", "\u012c": "I", "\u0130": "I", "\u00cf": "I", "\u1e2e": "I", "\u1ec8": "I", "\u01cf": "I", "\u0208": "I", "\u020a": "I", "\u1eca": "I", "\u012e": "I", "\u1e2c": "I", "\u0197": "I", "\u24bf": "J", "\uff2a": "J", "\u0134": "J", "\u0248": "J", "\u24c0": "K", "\uff2b": "K", "\u1e30": "K", "\u01e8": "K", "\u1e32": "K", "\u0136": "K", "\u1e34": "K", "\u0198": "K", "\u2c69": "K", "\ua740": "K", "\ua742": "K", "\ua744": "K", "\ua7a2": "K", "\u24c1": "L", "\uff2c": "L", "\u013f": "L", "\u0139": "L", "\u013d": "L", "\u1e36": "L", "\u1e38": "L", "\u013b": "L", "\u1e3c": "L", "\u1e3a": "L", "\u0141": "L", "\u023d": "L", "\u2c62": "L", "\u2c60": "L", "\ua748": "L", "\ua746": "L", "\ua780": "L", "\u01c7": "LJ", "\u01c8": "Lj", "\u24c2": "M", "\uff2d": "M", "\u1e3e": "M", "\u1e40": "M", "\u1e42": "M", "\u2c6e": "M", "\u019c": "M", "\u24c3": "N", "\uff2e": "N", "\u01f8": "N", "\u0143": "N", "\u00d1": "N", "\u1e44": "N", "\u0147": "N", "\u1e46": "N", "\u0145": "N", "\u1e4a": "N", "\u1e48": "N", "\u0220": "N", "\u019d": "N", "\ua790": "N", "\ua7a4": "N", "\u01ca": "NJ", "\u01cb": "Nj", "\u24c4": "O", "\uff2f": "O", "\u00d2": "O", "\u00d3": "O", "\u00d4": "O", "\u1ed2": "O", "\u1ed0": "O", "\u1ed6": "O", "\u1ed4": "O", "\u00d5": "O", "\u1e4c": "O", "\u022c": "O", "\u1e4e": "O", "\u014c": "O", "\u1e50": "O", "\u1e52": "O", "\u014e": "O", "\u022e": "O", "\u0230": "O", "\u00d6": "O", "\u022a": "O", "\u1ece": "O", "\u0150": "O", "\u01d1": "O", "\u020c": "O", "\u020e": "O", "\u01a0": "O", "\u1edc": "O", "\u1eda": "O", "\u1ee0": "O", "\u1ede": "O", "\u1ee2": "O", "\u1ecc": "O", "\u1ed8": "O", "\u01ea": "O", "\u01ec": "O", "\u00d8": "O", "\u01fe": "O", "\u0186": "O", "\u019f": "O", "\ua74a": "O", "\ua74c": "O", "\u01a2": "OI", "\ua74e": "OO", "\u0222": "OU", "\u24c5": "P", "\uff30": "P", "\u1e54": "P", "\u1e56": "P", "\u01a4": "P", "\u2c63": "P", "\ua750": "P", "\ua752": "P", "\ua754": "P", "\u24c6": "Q", "\uff31": "Q", "\ua756": "Q", "\ua758": "Q", "\u024a": "Q", "\u24c7": "R", "\uff32": "R", "\u0154": "R", "\u1e58": "R", "\u0158": "R", "\u0210": "R", "\u0212": "R", "\u1e5a": "R", "\u1e5c": "R", "\u0156": "R", "\u1e5e": "R", "\u024c": "R", "\u2c64": "R", "\ua75a": "R", "\ua7a6": "R", "\ua782": "R", "\u24c8": "S", "\uff33": "S", "\u1e9e": "S", "\u015a": "S", "\u1e64": "S", "\u015c": "S", "\u1e60": "S", "\u0160": "S", "\u1e66": "S", "\u1e62": "S", "\u1e68": "S", "\u0218": "S", "\u015e": "S", "\u2c7e": "S", "\ua7a8": "S", "\ua784": "S", "\u24c9": "T", "\uff34": "T", "\u1e6a": "T", "\u0164": "T", "\u1e6c": "T", "\u021a": "T", "\u0162": "T", "\u1e70": "T", "\u1e6e": "T", "\u0166": "T", "\u01ac": "T", "\u01ae": "T", "\u023e": "T", "\ua786": "T", "\ua728": "TZ", "\u24ca": "U", "\uff35": "U", "\u00d9": "U", "\u00da": "U", "\u00db": "U", "\u0168": "U", "\u1e78": "U", "\u016a": "U", "\u1e7a": "U", "\u016c": "U", "\u00dc": "U", "\u01db": "U", "\u01d7": "U", "\u01d5": "U", "\u01d9": "U", "\u1ee6": "U", "\u016e": "U", "\u0170": "U", "\u01d3": "U", "\u0214": "U", "\u0216": "U", "\u01af": "U", "\u1eea": "U", "\u1ee8": "U", "\u1eee": "U", "\u1eec": "U", "\u1ef0": "U", "\u1ee4": "U", "\u1e72": "U", "\u0172": "U", "\u1e76": "U", "\u1e74": "U", "\u0244": "U", "\u24cb": "V", "\uff36": "V", "\u1e7c": "V", "\u1e7e": "V", "\u01b2": "V", "\ua75e": "V", "\u0245": "V", "\ua760": "VY", "\u24cc": "W", "\uff37": "W", "\u1e80": "W", "\u1e82": "W", "\u0174": "W", "\u1e86": "W", "\u1e84": "W", "\u1e88": "W", "\u2c72": "W", "\u24cd": "X", "\uff38": "X", "\u1e8a": "X", "\u1e8c": "X", "\u24ce": "Y", "\uff39": "Y", "\u1ef2": "Y", "\u00dd": "Y", "\u0176": "Y", "\u1ef8": "Y", "\u0232": "Y", "\u1e8e": "Y", "\u0178": "Y", "\u1ef6": "Y", "\u1ef4": "Y", "\u01b3": "Y", "\u024e": "Y", "\u1efe": "Y", "\u24cf": "Z", "\uff3a": "Z", "\u0179": "Z", "\u1e90": "Z", "\u017b": "Z", "\u017d": "Z", "\u1e92": "Z", "\u1e94": "Z", "\u01b5": "Z", "\u0224": "Z", "\u2c7f": "Z", "\u2c6b": "Z", "\ua762": "Z", "\u24d0": "a", "\uff41": "a", "\u1e9a": "a", "\u00e0": "a", "\u00e1": "a", "\u00e2": "a", "\u1ea7": "a", "\u1ea5": "a", "\u1eab": "a", "\u1ea9": "a", "\u00e3": "a", "\u0101": "a", "\u0103": "a", "\u1eb1": "a", "\u1eaf": "a", "\u1eb5": "a", "\u1eb3": "a", "\u0227": "a", "\u01e1": "a", "\u00e4": "a", "\u01df": "a", "\u1ea3": "a", "\u00e5": "a", "\u01fb": "a", "\u01ce": "a", "\u0201": "a", "\u0203": "a", "\u1ea1": "a", "\u1ead": "a", "\u1eb7": "a", "\u1e01": "a", "\u0105": "a", "\u2c65": "a", "\u0250": "a", "\ua733": "aa", "\u00e6": "ae", "\u01fd": "ae", "\u01e3": "ae", "\ua735": "ao", "\ua737": "au", "\ua739": "av", "\ua73b": "av", "\ua73d": "ay", "\u24d1": "b", "\uff42": "b", "\u1e03": "b", "\u1e05": "b", "\u1e07": "b", "\u0180": "b", "\u0183": "b", "\u0253": "b", "\u24d2": "c", "\uff43": "c", "\u0107": "c", "\u0109": "c", "\u010b": "c", "\u010d": "c", "\u00e7": "c", "\u1e09": "c", "\u0188": "c", "\u023c": "c", "\ua73f": "c", "\u2184": "c", "\u24d3": "d", "\uff44": "d", "\u1e0b": "d", "\u010f": "d", "\u1e0d": "d", "\u1e11": "d", "\u1e13": "d", "\u1e0f": "d", "\u0111": "d", "\u018c": "d", "\u0256": "d", "\u0257": "d", "\ua77a": "d", "\u01f3": "dz", "\u01c6": "dz", "\u24d4": "e", "\uff45": "e", "\u00e8": "e", "\u00e9": "e", "\u00ea": "e", "\u1ec1": "e", "\u1ebf": "e", "\u1ec5": "e", "\u1ec3": "e", "\u1ebd": "e", "\u0113": "e", "\u1e15": "e", "\u1e17": "e", "\u0115": "e", "\u0117": "e", "\u00eb": "e", "\u1ebb": "e", "\u011b": "e", "\u0205": "e", "\u0207": "e", "\u1eb9": "e", "\u1ec7": "e", "\u0229": "e", "\u1e1d": "e", "\u0119": "e", "\u1e19": "e", "\u1e1b": "e", "\u0247": "e", "\u025b": "e", "\u01dd": "e", "\u24d5": "f", "\uff46": "f", "\u1e1f": "f", "\u0192": "f", "\ua77c": "f", "\u24d6": "g", "\uff47": "g", "\u01f5": "g", "\u011d": "g", "\u1e21": "g", "\u011f": "g", "\u0121": "g", "\u01e7": "g", "\u0123": "g", "\u01e5": "g", "\u0260": "g", "\ua7a1": "g", "\u1d79": "g", "\ua77f": "g", "\u24d7": "h", "\uff48": "h", "\u0125": "h", "\u1e23": "h", "\u1e27": "h", "\u021f": "h", "\u1e25": "h", "\u1e29": "h", "\u1e2b": "h", "\u1e96": "h", "\u0127": "h", "\u2c68": "h", "\u2c76": "h", "\u0265": "h", "\u0195": "hv", "\u24d8": "i", "\uff49": "i", "\u00ec": "i", "\u00ed": "i", "\u00ee": "i", "\u0129": "i", "\u012b": "i", "\u012d": "i", "\u00ef": "i", "\u1e2f": "i", "\u1ec9": "i", "\u01d0": "i", "\u0209": "i", "\u020b": "i", "\u1ecb": "i", "\u012f": "i", "\u1e2d": "i", "\u0268": "i", "\u0131": "i", "\u24d9": "j", "\uff4a": "j", "\u0135": "j", "\u01f0": "j", "\u0249": "j", "\u24da": "k", "\uff4b": "k", "\u1e31": "k", "\u01e9": "k", "\u1e33": "k", "\u0137": "k", "\u1e35": "k", "\u0199": "k", "\u2c6a": "k", "\ua741": "k", "\ua743": "k", "\ua745": "k", "\ua7a3": "k", "\u24db": "l", "\uff4c": "l", "\u0140": "l", "\u013a": "l", "\u013e": "l", "\u1e37": "l", "\u1e39": "l", "\u013c": "l", "\u1e3d": "l", "\u1e3b": "l", "\u017f": "l", "\u0142": "l", "\u019a": "l", "\u026b": "l", "\u2c61": "l", "\ua749": "l", "\ua781": "l", "\ua747": "l", "\u01c9": "lj", "\u24dc": "m", "\uff4d": "m", "\u1e3f": "m", "\u1e41": "m", "\u1e43": "m", "\u0271": "m", "\u026f": "m", "\u24dd": "n", "\uff4e": "n", "\u01f9": "n", "\u0144": "n", "\u00f1": "n", "\u1e45": "n", "\u0148": "n", "\u1e47": "n", "\u0146": "n", "\u1e4b": "n", "\u1e49": "n", "\u019e": "n", "\u0272": "n", "\u0149": "n", "\ua791": "n", "\ua7a5": "n", "\u01cc": "nj", "\u24de": "o", "\uff4f": "o", "\u00f2": "o", "\u00f3": "o", "\u00f4": "o", "\u1ed3": "o", "\u1ed1": "o", "\u1ed7": "o", "\u1ed5": "o", "\u00f5": "o", "\u1e4d": "o", "\u022d": "o", "\u1e4f": "o", "\u014d": "o", "\u1e51": "o", "\u1e53": "o", "\u014f": "o", "\u022f": "o", "\u0231": "o", "\u00f6": "o", "\u022b": "o", "\u1ecf": "o", "\u0151": "o", "\u01d2": "o", "\u020d": "o", "\u020f": "o", "\u01a1": "o", "\u1edd": "o", "\u1edb": "o", "\u1ee1": "o", "\u1edf": "o", "\u1ee3": "o", "\u1ecd": "o", "\u1ed9": "o", "\u01eb": "o", "\u01ed": "o", "\u00f8": "o", "\u01ff": "o", "\u0254": "o", "\ua74b": "o", "\ua74d": "o", "\u0275": "o", "\u01a3": "oi", "\u0223": "ou", "\ua74f": "oo", "\u24df": "p", "\uff50": "p", "\u1e55": "p", "\u1e57": "p", "\u01a5": "p", "\u1d7d": "p", "\ua751": "p", "\ua753": "p", "\ua755": "p", "\u24e0": "q", "\uff51": "q", "\u024b": "q", "\ua757": "q", "\ua759": "q", "\u24e1": "r", "\uff52": "r", "\u0155": "r", "\u1e59": "r", "\u0159": "r", "\u0211": "r", "\u0213": "r", "\u1e5b": "r", "\u1e5d": "r", "\u0157": "r", "\u1e5f": "r", "\u024d": "r", "\u027d": "r", "\ua75b": "r", "\ua7a7": "r", "\ua783": "r", "\u24e2": "s", "\uff53": "s", "\u00df": "s", "\u015b": "s", "\u1e65": "s", "\u015d": "s", "\u1e61": "s", "\u0161": "s", "\u1e67": "s", "\u1e63": "s", "\u1e69": "s", "\u0219": "s", "\u015f": "s", "\u023f": "s", "\ua7a9": "s", "\ua785": "s", "\u1e9b": "s", "\u24e3": "t", "\uff54": "t", "\u1e6b": "t", "\u1e97": "t", "\u0165": "t", "\u1e6d": "t", "\u021b": "t", "\u0163": "t", "\u1e71": "t", "\u1e6f": "t", "\u0167": "t", "\u01ad": "t", "\u0288": "t", "\u2c66": "t", "\ua787": "t", "\ua729": "tz", "\u24e4": "u", "\uff55": "u", "\u00f9": "u", "\u00fa": "u", "\u00fb": "u", "\u0169": "u", "\u1e79": "u", "\u016b": "u", "\u1e7b": "u", "\u016d": "u", "\u00fc": "u", "\u01dc": "u", "\u01d8": "u", "\u01d6": "u", "\u01da": "u", "\u1ee7": "u", "\u016f": "u", "\u0171": "u", "\u01d4": "u", "\u0215": "u", "\u0217": "u", "\u01b0": "u", "\u1eeb": "u", "\u1ee9": "u", "\u1eef": "u", "\u1eed": "u", "\u1ef1": "u", "\u1ee5": "u", "\u1e73": "u", "\u0173": "u", "\u1e77": "u", "\u1e75": "u", "\u0289": "u", "\u24e5": "v", "\uff56": "v", "\u1e7d": "v", "\u1e7f": "v", "\u028b": "v", "\ua75f": "v", "\u028c": "v", "\ua761": "vy", "\u24e6": "w", "\uff57": "w", "\u1e81": "w", "\u1e83": "w", "\u0175": "w", "\u1e87": "w", "\u1e85": "w", "\u1e98": "w", "\u1e89": "w", "\u2c73": "w", "\u24e7": "x", "\uff58": "x", "\u1e8b": "x", "\u1e8d": "x", "\u24e8": "y", "\uff59": "y", "\u1ef3": "y", "\u00fd": "y", "\u0177": "y", "\u1ef9": "y", "\u0233": "y", "\u1e8f": "y", "\u00ff": "y", "\u1ef7": "y", "\u1e99": "y", "\u1ef5": "y", "\u01b4": "y", "\u024f": "y", "\u1eff": "y", "\u24e9": "z", "\uff5a": "z", "\u017a": "z", "\u1e91": "z", "\u017c": "z", "\u017e": "z", "\u1e93": "z", "\u1e95": "z", "\u01b6": "z", "\u0225": "z", "\u0240": "z", "\u2c6c": "z", "\ua763": "z"};
        H = e(document), P = function () {
            var e = 1;
            return function () {
                return e++
            }
        }(), H.on("mousemove", function (e) {
            L.x = e.pageX, L.y = e.pageY
        }), N = T(Object, {bind: function (e) {
            var t = this;
            return function () {
                e.apply(t, arguments)
            }
        }, init: function (i) {
            var n, s, a = ".select2-results";
            this.opts = i = this.prepareOpts(i), this.id = i.id, i.element.data("select2") !== t && null !== i.element.data("select2") && i.element.data("select2").destroy(), this.container = this.createContainer(), this.containerId = "s2id_" + (i.element.attr("id") || "autogen" + P()), this.containerSelector = "#" + this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"), this.container.attr("id", this.containerId), this.body = d(function () {
                return i.element.closest("body")
            }), v(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.attr("style", i.element.attr("style")), this.container.css(A(i.containerCss)), this.container.addClass(A(i.containerCssClass)), this.elementTabIndex = this.opts.element.attr("tabindex"), this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", g), this.container.data("select2", this), this.dropdown = this.container.find(".select2-drop"), v(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(A(i.dropdownCssClass)), this.dropdown.data("select2", this), this.dropdown.on("click", g), this.results = n = this.container.find(a), this.search = s = this.container.find("input.select2-input"), this.queryCount = 0, this.resultsPage = 0, this.context = null, this.initContainer(), this.container.on("click", g), c(this.results), this.dropdown.on("mousemove-filtered touchstart touchmove touchend", a, this.bind(this.highlightUnderEvent)), h(80, this.results), this.dropdown.on("scroll-debounced", a, this.bind(this.loadMoreIfNeeded)), e(this.container).on("change", ".select2-input", function (e) {
                e.stopPropagation()
            }), e(this.dropdown).on("change", ".select2-input", function (e) {
                e.stopPropagation()
            }), e.fn.mousewheel && n.mousewheel(function (e, t, i, r) {
                var s = n.scrollTop();
                r > 0 && 0 >= s - r ? (n.scrollTop(0), g(e)) : 0 > r && n.get(0).scrollHeight - n.scrollTop() + r <= n.height() && (n.scrollTop(n.get(0).scrollHeight - n.height()), g(e))
            }), l(s), s.on("keyup-change input paste", this.bind(this.updateResults)), s.on("focus", function () {
                s.addClass("select2-focused")
            }), s.on("blur", function () {
                s.removeClass("select2-focused")
            }), this.dropdown.on("mouseup", a, this.bind(function (t) {
                e(t.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(t), this.selectHighlighted(t))
            })), this.dropdown.on("click mouseup mousedown", function (e) {
                e.stopPropagation()
            }), e.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource()), null !== i.maximumInputLength && this.search.attr("maxlength", i.maximumInputLength);
            var o = i.element.prop("disabled");
            o === t && (o = !1), this.enable(!o);
            var u = i.element.prop("readonly");
            u === t && (u = !1), this.readonly(u), R = R || r(), this.autofocus = i.element.prop("autofocus"), i.element.prop("autofocus", !1), this.autofocus && this.focus(), this.nextSearchTerm = t
        }, destroy: function () {
            var e = this.opts.element, i = e.data("select2");
            this.close(), this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), i !== t && (i.container.remove(), i.dropdown.remove(), e.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus", this.autofocus || !1), this.elementTabIndex ? e.attr({tabindex: this.elementTabIndex}) : e.removeAttr("tabindex"), e.show())
        }, optionToData: function (e) {
            return e.is("option") ? {id: e.prop("value"), text: e.text(), element: e.get(), css: e.attr("class"), disabled: e.prop("disabled"), locked: s(e.attr("locked"), "locked") || s(e.data("locked"), !0)} : e.is("optgroup") ? {text: e.attr("label"), children: [], element: e.get(), css: e.attr("class")} : t
        }, prepareOpts: function (i) {
            var n, r, o, l, c = this;
            if (n = i.element, "select" === n.get(0).tagName.toLowerCase() && (this.select = r = i.element), r && e.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function () {
                if (this in i)throw Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.")
            }), i = e.extend({}, {populateResults: function (n, r, s) {
                var a, o = this.opts.id;
                a = function (n, r, l) {
                    var u, d, h, p, f, g, m, y, v, b;
                    for (n = i.sortResults(n, r, s), u = 0, d = n.length; d > u; u += 1)h = n[u], f = h.disabled === !0, p = !f && o(h) !== t, g = h.children && h.children.length > 0, m = e("<li></li>"), m.addClass("select2-results-dept-" + l), m.addClass("select2-result"), m.addClass(p ? "select2-result-selectable" : "select2-result-unselectable"), f && m.addClass("select2-disabled"), g && m.addClass("select2-result-with-children"), m.addClass(c.opts.formatResultCssClass(h)), y = e(document.createElement("div")), y.addClass("select2-result-label"), b = i.formatResult(h, y, s, c.opts.escapeMarkup), b !== t && y.html(b), m.append(y), g && (v = e("<ul></ul>"), v.addClass("select2-result-sub"), a(h.children, v, l + 1), m.append(v)), m.data("select2-data", h), r.append(m)
                }, a(r, n, 0)
            }}, e.fn.select2.defaults, i), "function" != typeof i.id && (o = i.id, i.id = function (e) {
                return e[o]
            }), e.isArray(i.element.data("select2Tags"))) {
                if ("tags"in i)throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + i.element.attr("id");
                i.tags = i.element.data("select2Tags")
            }
            if (r ? (i.query = this.bind(function (e) {
                var i, r, s, a = {results: [], more: !1}, o = e.term;
                s = function (t, i) {
                    var n;
                    t.is("option") ? e.matcher(o, t.text(), t) && i.push(c.optionToData(t)) : t.is("optgroup") && (n = c.optionToData(t), t.children().each2(function (e, t) {
                        s(t, n.children)
                    }), n.children.length > 0 && i.push(n))
                }, i = n.children(), this.getPlaceholder() !== t && i.length > 0 && (r = this.getPlaceholderOption(), r && (i = i.not(r))), i.each2(function (e, t) {
                    s(t, a.results)
                }), e.callback(a)
            }), i.id = function (e) {
                return e.id
            }, i.formatResultCssClass = function (e) {
                return e.css
            }) : "query"in i || ("ajax"in i ? (l = i.element.data("ajax-url"), l && l.length > 0 && (i.ajax.url = l), i.query = w.call(i.element, i.ajax)) : "data"in i ? i.query = _(i.data) : "tags"in i && (i.query = S(i.tags), i.createSearchChoice === t && (i.createSearchChoice = function (t) {
                return{id: e.trim(t), text: e.trim(t)}
            }), i.initSelection === t && (i.initSelection = function (n, r) {
                var o = [];
                e(a(n.val(), i.separator)).each(function () {
                    var n = {id: this, text: this}, r = i.tags;
                    e.isFunction(r) && (r = r()), e(r).each(function () {
                        return s(this.id, n.id) ? (n = this, !1) : t
                    }), o.push(n)
                }), r(o)
            }))), "function" != typeof i.query)throw"query function not defined for Select2 " + i.element.attr("id");
            return i
        }, monitorSource: function () {
            var e, i, n = this.opts.element;
            n.on("change.select2", this.bind(function () {
                this.opts.element.data("select2-change-triggered") !== !0 && this.initSelection()
            })), e = this.bind(function () {
                var e = n.prop("disabled");
                e === t && (e = !1), this.enable(!e);
                var i = n.prop("readonly");
                i === t && (i = !1), this.readonly(i), v(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.addClass(A(this.opts.containerCssClass)), v(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(A(this.opts.dropdownCssClass))
            }), n.on("propertychange.select2", e), this.mutationCallback === t && (this.mutationCallback = function (t) {
                t.forEach(e)
            }), i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, i !== t && (this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), this.propertyObserver = new i(this.mutationCallback), this.propertyObserver.observe(n.get(0), {attributes: !0, subtree: !1}))
        }, triggerSelect: function (t) {
            var i = e.Event("select2-selecting", {val: this.id(t), object: t});
            return this.opts.element.trigger(i), !i.isDefaultPrevented()
        }, triggerChange: function (t) {
            t = t || {}, t = e.extend({}, t, {type: "change", val: this.val()}), this.opts.element.data("select2-change-triggered", !0), this.opts.element.trigger(t), this.opts.element.data("select2-change-triggered", !1), this.opts.element.click(), this.opts.blurOnChange && this.opts.element.blur()
        }, isInterfaceEnabled: function () {
            return this.enabledInterface === !0
        }, enableInterface: function () {
            var e = this._enabled && !this._readonly, t = !e;
            return e === this.enabledInterface ? !1 : (this.container.toggleClass("select2-container-disabled", t), this.close(), this.enabledInterface = e, !0)
        }, enable: function (e) {
            e === t && (e = !0), this._enabled !== e && (this._enabled = e, this.opts.element.prop("disabled", !e), this.enableInterface())
        }, disable: function () {
            this.enable(!1)
        }, readonly: function (e) {
            return e === t && (e = !1), this._readonly === e ? !1 : (this._readonly = e, this.opts.element.prop("readonly", e), this.enableInterface(), !0)
        }, opened: function () {
            return this.container.hasClass("select2-dropdown-open")
        }, positionDropdown: function () {
            var t, i, n, r, s, a = this.dropdown, o = this.container.offset(), l = this.container.outerHeight(!1), c = this.container.outerWidth(!1), u = a.outerHeight(!1), d = e(window), h = d.width(), p = d.height(), f = d.scrollLeft() + h, g = d.scrollTop() + p, m = o.top + l, y = o.left, v = g >= m + u, b = o.top - u >= this.body().scrollTop(), x = a.outerWidth(!1), w = f >= y + x, _ = a.hasClass("select2-drop-above");
            _ ? (i = !0, !b && v && (n = !0, i = !1)) : (i = !1, !v && b && (n = !0, i = !0)), n && (a.hide(), o = this.container.offset(), l = this.container.outerHeight(!1), c = this.container.outerWidth(!1), u = a.outerHeight(!1), f = d.scrollLeft() + h, g = d.scrollTop() + p, m = o.top + l, y = o.left, x = a.outerWidth(!1), w = f >= y + x, a.show()), this.opts.dropdownAutoWidth ? (s = e(".select2-results", a)[0], a.addClass("select2-drop-auto-width"), a.css("width", ""), x = a.outerWidth(!1) + (s.scrollHeight === s.clientHeight ? 0 : R.width), x > c ? c = x : x = c, w = f >= y + x) : this.container.removeClass("select2-drop-auto-width"), "static" !== this.body().css("position") && (t = this.body().offset(), m -= t.top, y -= t.left), w || (y = o.left + c - x), r = {left: y, width: c}, i ? (r.bottom = p - o.top, r.top = "auto", this.container.addClass("select2-drop-above"), a.addClass("select2-drop-above")) : (r.top = m, r.bottom = "auto", this.container.removeClass("select2-drop-above"), a.removeClass("select2-drop-above")), r = e.extend(r, A(this.opts.dropdownCss)), a.css(r)
        }, shouldOpen: function () {
            var t;
            return this.opened() ? !1 : this._enabled === !1 || this._readonly === !0 ? !1 : (t = e.Event("select2-opening"), this.opts.element.trigger(t), !t.isDefaultPrevented())
        }, clearDropdownAlignmentPreference: function () {
            this.container.removeClass("select2-drop-above"), this.dropdown.removeClass("select2-drop-above")
        }, open: function () {
            return this.shouldOpen() ? (this.opening(), !0) : !1
        }, opening: function () {
            var t, i = this.containerId, n = "scroll." + i, r = "resize." + i, s = "orientationchange." + i;
            this.container.addClass("select2-dropdown-open").addClass("select2-container-active"), this.clearDropdownAlignmentPreference(), this.dropdown[0] !== this.body().children().last()[0] && this.dropdown.detach().appendTo(this.body()), t = e("#select2-drop-mask"), 0 == t.length && (t = e(document.createElement("div")), t.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"), t.hide(), t.appendTo(this.body()), t.on("mousedown touchstart click", function (t) {
                var i, n = e("#select2-drop");
                n.length > 0 && (i = n.data("select2"), i.opts.selectOnBlur && i.selectHighlighted({noFocus: !0}), i.close({focus: !0}), t.preventDefault(), t.stopPropagation())
            })), this.dropdown.prev()[0] !== t[0] && this.dropdown.before(t), e("#select2-drop").removeAttr("id"), this.dropdown.attr("id", "select2-drop"), t.show(), this.positionDropdown(), this.dropdown.show(), this.positionDropdown(), this.dropdown.addClass("select2-drop-active");
            var a = this;
            this.container.parents().add(window).each(function () {
                e(this).on(r + " " + n + " " + s, function () {
                    a.positionDropdown()
                })
            })
        }, close: function () {
            if (this.opened()) {
                var t = this.containerId, i = "scroll." + t, n = "resize." + t, r = "orientationchange." + t;
                this.container.parents().add(window).each(function () {
                    e(this).off(i).off(n).off(r)
                }), this.clearDropdownAlignmentPreference(), e("#select2-drop-mask").hide(), this.dropdown.removeAttr("id"), this.dropdown.hide(), this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"), this.results.empty(), this.clearSearch(), this.search.removeClass("select2-active"), this.opts.element.trigger(e.Event("select2-close"))
            }
        }, externalSearch: function (e) {
            this.open(), this.search.val(e), this.updateResults(!1)
        }, clearSearch: function () {
        }, getMaximumSelectionSize: function () {
            return A(this.opts.maximumSelectionSize)
        }, ensureHighlightVisible: function () {
            var i, n, r, s, a, o, l, c = this.results;
            if (n = this.highlight(), !(0 > n)) {
                if (0 == n)return c.scrollTop(0), t;
                i = this.findHighlightableChoices().find(".select2-result-label"), r = e(i[n]), s = r.offset().top + r.outerHeight(!0), n === i.length - 1 && (l = c.find("li.select2-more-results"), l.length > 0 && (s = l.offset().top + l.outerHeight(!0))), a = c.offset().top + c.outerHeight(!0), s > a && c.scrollTop(c.scrollTop() + (s - a)), o = r.offset().top - c.offset().top, 0 > o && "none" != r.css("display") && c.scrollTop(c.scrollTop() + o)
            }
        }, findHighlightableChoices: function () {
            return this.results.find(".select2-result-selectable:not(.select2-disabled, .select2-selected)")
        }, moveHighlight: function (t) {
            for (var i = this.findHighlightableChoices(), n = this.highlight(); n > -1 && i.length > n;) {
                n += t;
                var r = e(i[n]);
                if (r.hasClass("select2-result-selectable") && !r.hasClass("select2-disabled") && !r.hasClass("select2-selected")) {
                    this.highlight(n);
                    break
                }
            }
        }, highlight: function (i) {
            var r, s, a = this.findHighlightableChoices();
            return 0 === arguments.length ? n(a.filter(".select2-highlighted")[0], a.get()) : (i >= a.length && (i = a.length - 1), 0 > i && (i = 0), this.removeHighlight(), r = e(a[i]), r.addClass("select2-highlighted"), this.ensureHighlightVisible(), s = r.data("select2-data"), s && this.opts.element.trigger({type: "select2-highlight", val: this.id(s), choice: s}), t)
        }, removeHighlight: function () {
            this.results.find(".select2-highlighted").removeClass("select2-highlighted")
        }, countSelectableResults: function () {
            return this.findHighlightableChoices().length
        }, highlightUnderEvent: function (t) {
            var i = e(t.target).closest(".select2-result-selectable");
            if (i.length > 0 && !i.is(".select2-highlighted")) {
                var n = this.findHighlightableChoices();
                this.highlight(n.index(i))
            } else 0 == i.length && this.removeHighlight()
        }, loadMoreIfNeeded: function () {
            var e, t = this.results, i = t.find("li.select2-more-results"), n = this.resultsPage + 1, r = this, s = this.search.val(), a = this.context;
            0 !== i.length && (e = i.offset().top - t.offset().top - t.height(), this.opts.loadMorePadding >= e && (i.addClass("select2-active"), this.opts.query({element: this.opts.element, term: s, page: n, context: a, matcher: this.opts.matcher, callback: this.bind(function (e) {
                r.opened() && (r.opts.populateResults.call(this, t, e.results, {term: s, page: n, context: a}), r.postprocessResults(e, !1, !1), e.more === !0 ? (i.detach().appendTo(t).text(r.opts.formatLoadMore(n + 1)), window.setTimeout(function () {
                    r.loadMoreIfNeeded()
                }, 10)) : i.remove(), r.positionDropdown(), r.resultsPage = n, r.context = e.context, this.opts.element.trigger({type: "select2-loaded", items: e}))
            })})))
        }, tokenize: function () {
        }, updateResults: function (i) {
            function n() {
                c.removeClass("select2-active"), h.positionDropdown()
            }

            function r(e) {
                u.html(e), n()
            }

            var a, o, l, c = this.search, u = this.results, d = this.opts, h = this, p = c.val(), f = e.data(this.container, "select2-last-term");
            if ((i === !0 || !f || !s(p, f)) && (e.data(this.container, "select2-last-term", p), i === !0 || this.showSearchInput !== !1 && this.opened())) {
                l = ++this.queryCount;
                var g = this.getMaximumSelectionSize();
                if (g >= 1 && (a = this.data(), e.isArray(a) && a.length >= g && C(d.formatSelectionTooBig, "formatSelectionTooBig")))return r("<li class='select2-selection-limit'>" + d.formatSelectionTooBig(g) + "</li>"), t;
                if (c.val().length < d.minimumInputLength)return C(d.formatInputTooShort, "formatInputTooShort") ? r("<li class='select2-no-results'>" + d.formatInputTooShort(c.val(), d.minimumInputLength) + "</li>") : r(""), i && this.showSearch && this.showSearch(!0), t;
                if (d.maximumInputLength && c.val().length > d.maximumInputLength)return C(d.formatInputTooLong, "formatInputTooLong") ? r("<li class='select2-no-results'>" + d.formatInputTooLong(c.val(), d.maximumInputLength) + "</li>") : r(""), t;
                d.formatSearching && 0 === this.findHighlightableChoices().length && r("<li class='select2-searching'>" + d.formatSearching() + "</li>"), c.addClass("select2-active"), this.removeHighlight(), o = this.tokenize(), o != t && null != o && c.val(o), this.resultsPage = 1, d.query({element: d.element, term: c.val(), page: this.resultsPage, context: null, matcher: d.matcher, callback: this.bind(function (a) {
                    var o;
                    if (l == this.queryCount) {
                        if (!this.opened())return this.search.removeClass("select2-active"), t;
                        if (this.context = a.context === t ? null : a.context, this.opts.createSearchChoice && "" !== c.val() && (o = this.opts.createSearchChoice.call(h, c.val(), a.results), o !== t && null !== o && h.id(o) !== t && null !== h.id(o) && 0 === e(a.results).filter(function () {
                            return s(h.id(this), h.id(o))
                        }).length && a.results.unshift(o)), 0 === a.results.length && C(d.formatNoMatches, "formatNoMatches"))return r("<li class='select2-no-results'>" + d.formatNoMatches(c.val()) + "</li>"), t;
                        u.empty(), h.opts.populateResults.call(this, u, a.results, {term: c.val(), page: this.resultsPage, context: null}), a.more === !0 && C(d.formatLoadMore, "formatLoadMore") && (u.append("<li class='select2-more-results'>" + h.opts.escapeMarkup(d.formatLoadMore(this.resultsPage)) + "</li>"), window.setTimeout(function () {
                            h.loadMoreIfNeeded()
                        }, 10)), this.postprocessResults(a, i), n(), this.opts.element.trigger({type: "select2-loaded", items: a})
                    }
                })})
            }
        }, cancel: function () {
            this.close()
        }, blur: function () {
            this.opts.selectOnBlur && this.selectHighlighted({noFocus: !0}), this.close(), this.container.removeClass("select2-container-active"), this.search[0] === document.activeElement && this.search.blur(), this.clearSearch(), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
        }, focusSearch: function () {
            p(this.search)
        }, selectHighlighted: function (e) {
            var t = this.highlight(), i = this.results.find(".select2-highlighted"), n = i.closest(".select2-result").data("select2-data");
            n ? (this.highlight(t), this.onSelect(n, e)) : e && e.noFocus && this.close()
        }, getPlaceholder: function () {
            var e;
            return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((e = this.getPlaceholderOption()) !== t ? e.text() : t)
        }, getPlaceholderOption: function () {
            if (this.select) {
                var e = this.select.children("option").first();
                if (this.opts.placeholderOption !== t)return"first" === this.opts.placeholderOption && e || "function" == typeof this.opts.placeholderOption && this.opts.placeholderOption(this.select);
                if ("" === e.text() && "" === e.val())return e
            }
        }, initContainerWidth: function () {
            function i() {
                var i, n, r, s, a, o;
                if ("off" === this.opts.width)return null;
                if ("element" === this.opts.width)return 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px";
                if ("copy" === this.opts.width || "resolve" === this.opts.width) {
                    if (i = this.opts.element.attr("style"), i !== t)for (n = i.split(";"), s = 0, a = n.length; a > s; s += 1)if (o = n[s].replace(/\s/g, ""), r = o.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== r && r.length >= 1)return r[1];
                    return"resolve" === this.opts.width ? (i = this.opts.element.css("width"), i.indexOf("%") > 0 ? i : 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px") : null
                }
                return e.isFunction(this.opts.width) ? this.opts.width() : this.opts.width
            }

            var n = i.call(this);
            null !== n && this.container.css("width", n)
        }}), E = T(N, {createContainer: function () {
            var t = e(document.createElement("div")).attr({"class": "select2-container"}).html(["<a href='javascript:void(0)' onclick='return false;' class='select2-choice' tabindex='-1'>", "   <span class='select2-chosen'>&nbsp;</span><abbr class='select2-search-choice-close'></abbr>", "   <span class='select2-arrow'><b></b></span>", "</a>", "<input class='select2-focusser select2-offscreen' type='text'/>", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'/>", "   </div>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
            return t
        }, enableInterface: function () {
            this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled())
        }, opening: function () {
            var i, n, r;
            this.opts.minimumResultsForSearch >= 0 && this.showSearch(!0), this.parent.opening.apply(this, arguments), this.showSearchInput !== !1 && this.search.val(this.focusser.val()), this.search.focus(), i = this.search.get(0), i.createTextRange ? (n = i.createTextRange(), n.collapse(!1), n.select()) : i.setSelectionRange && (r = this.search.val().length, i.setSelectionRange(r, r)), "" === this.search.val() && this.nextSearchTerm != t && (this.search.val(this.nextSearchTerm), this.search.select()), this.focusser.prop("disabled", !0).val(""), this.updateResults(!0), this.opts.element.trigger(e.Event("select2-open"))
        }, close: function (e) {
            this.opened() && (this.parent.close.apply(this, arguments), e = e || {focus: !0}, this.focusser.removeAttr("disabled"), e.focus && this.focusser.focus())
        }, focus: function () {
            this.opened() ? this.close() : (this.focusser.removeAttr("disabled"), this.focusser.focus())
        }, isFocused: function () {
            return this.container.hasClass("select2-container-active")
        }, cancel: function () {
            this.parent.cancel.apply(this, arguments), this.focusser.removeAttr("disabled"), this.focusser.focus()
        }, destroy: function () {
            e("label[for='" + this.focusser.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments)
        }, initContainer: function () {
            var i, n = this.container, r = this.dropdown;
            0 > this.opts.minimumResultsForSearch ? this.showSearch(!1) : this.showSearch(!0), this.selection = i = n.find(".select2-choice"), this.focusser = n.find(".select2-focusser"), this.focusser.attr("id", "s2id_autogen" + P()), e("label[for='" + this.opts.element.attr("id") + "']").attr("for", this.focusser.attr("id")), this.focusser.attr("tabindex", this.elementTabIndex), this.search.on("keydown", this.bind(function (e) {
                if (this.isInterfaceEnabled()) {
                    if (e.which === D.PAGE_UP || e.which === D.PAGE_DOWN)return g(e), t;
                    switch (e.which) {
                        case D.UP:
                        case D.DOWN:
                            return this.moveHighlight(e.which === D.UP ? -1 : 1), g(e), t;
                        case D.ENTER:
                            return this.selectHighlighted(), g(e), t;
                        case D.TAB:
                            return this.selectHighlighted({noFocus: !0}), t;
                        case D.ESC:
                            return this.cancel(e), g(e), t
                    }
                }
            })), this.search.on("blur", this.bind(function () {
                document.activeElement === this.body().get(0) && window.setTimeout(this.bind(function () {
                    this.search.focus()
                }), 0)
            })), this.focusser.on("keydown", this.bind(function (e) {
                if (this.isInterfaceEnabled() && e.which !== D.TAB && !D.isControl(e) && !D.isFunctionKey(e) && e.which !== D.ESC) {
                    if (this.opts.openOnEnter === !1 && e.which === D.ENTER)return g(e), t;
                    if (e.which == D.DOWN || e.which == D.UP || e.which == D.ENTER && this.opts.openOnEnter) {
                        if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey)return;
                        return this.open(), g(e), t
                    }
                    return e.which == D.DELETE || e.which == D.BACKSPACE ? (this.opts.allowClear && this.clear(), g(e), t) : t
                }
            })), l(this.focusser), this.focusser.on("keyup-change input", this.bind(function (e) {
                if (this.opts.minimumResultsForSearch >= 0) {
                    if (e.stopPropagation(), this.opened())return;
                    this.open()
                }
            })), i.on("mousedown", "abbr", this.bind(function (e) {
                this.isInterfaceEnabled() && (this.clear(), m(e), this.close(), this.selection.focus())
            })), i.on("mousedown", this.bind(function (t) {
                this.container.hasClass("select2-container-active") || this.opts.element.trigger(e.Event("select2-focus")), this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(), g(t)
            })), r.on("mousedown", this.bind(function () {
                this.search.focus()
            })), i.on("focus", this.bind(function (e) {
                g(e)
            })), this.focusser.on("focus", this.bind(function () {
                this.container.hasClass("select2-container-active") || this.opts.element.trigger(e.Event("select2-focus")), this.container.addClass("select2-container-active")
            })).on("blur", this.bind(function () {
                this.opened() || (this.container.removeClass("select2-container-active"), this.opts.element.trigger(e.Event("select2-blur")))
            })), this.search.on("focus", this.bind(function () {
                this.container.hasClass("select2-container-active") || this.opts.element.trigger(e.Event("select2-focus")), this.container.addClass("select2-container-active")
            })), this.initContainerWidth(), this.opts.element.addClass("select2-offscreen"), this.setPlaceholder()
        }, clear: function (t) {
            var i = this.selection.data("select2-data");
            if (i) {
                var n = e.Event("select2-clearing");
                if (this.opts.element.trigger(n), n.isDefaultPrevented())return;
                var r = this.getPlaceholderOption();
                this.opts.element.val(r ? r.val() : ""), this.selection.find(".select2-chosen").empty(), this.selection.removeData("select2-data"), this.setPlaceholder(), t !== !1 && (this.opts.element.trigger({type: "select2-removed", val: this.id(i), choice: i}), this.triggerChange({removed: i}))
            }
        }, initSelection: function () {
            if (this.isPlaceholderOptionSelected())this.updateSelection(null), this.close(), this.setPlaceholder(); else {
                var e = this;
                this.opts.initSelection.call(null, this.opts.element, function (i) {
                    i !== t && null !== i && (e.updateSelection(i), e.close(), e.setPlaceholder())
                })
            }
        }, isPlaceholderOptionSelected: function () {
            var e;
            return this.getPlaceholder() ? (e = this.getPlaceholderOption()) !== t && e.prop("selected") || "" === this.opts.element.val() || this.opts.element.val() === t || null === this.opts.element.val() : !1
        }, prepareOpts: function () {
            var t = this.parent.prepareOpts.apply(this, arguments), i = this;
            return"select" === t.element.get(0).tagName.toLowerCase() ? t.initSelection = function (e, t) {
                var n = e.find("option").filter(function () {
                    return this.selected
                });
                t(i.optionToData(n))
            } : "data"in t && (t.initSelection = t.initSelection || function (i, n) {
                var r = i.val(), a = null;
                t.query({matcher: function (e, i, n) {
                    var o = s(r, t.id(n));
                    return o && (a = n), o
                }, callback: e.isFunction(n) ? function () {
                    n(a)
                } : e.noop})
            }), t
        }, getPlaceholder: function () {
            return this.select && this.getPlaceholderOption() === t ? t : this.parent.getPlaceholder.apply(this, arguments)
        }, setPlaceholder: function () {
            var e = this.getPlaceholder();
            if (this.isPlaceholderOptionSelected() && e !== t) {
                if (this.select && this.getPlaceholderOption() === t)return;
                this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(e)), this.selection.addClass("select2-default"), this.container.removeClass("select2-allowclear")
            }
        }, postprocessResults: function (e, i, n) {
            var r = 0, a = this;
            if (this.findHighlightableChoices().each2(function (e, i) {
                return s(a.id(i.data("select2-data")), a.opts.element.val()) ? (r = e, !1) : t
            }), n !== !1 && (i === !0 && r >= 0 ? this.highlight(r) : this.highlight(0)), i === !0) {
                var o = this.opts.minimumResultsForSearch;
                o >= 0 && this.showSearch($(e.results) >= o)
            }
        }, showSearch: function (t) {
            this.showSearchInput !== t && (this.showSearchInput = t, this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !t), this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !t), e(this.dropdown, this.container).toggleClass("select2-with-searchbox", t))
        }, onSelect: function (e, t) {
            if (this.triggerSelect(e)) {
                var i = this.opts.element.val(), n = this.data();
                this.opts.element.val(this.id(e)), this.updateSelection(e), this.opts.element.trigger({type: "select2-selected", val: this.id(e), choice: e}), this.nextSearchTerm = this.opts.nextSearchTerm(e, this.search.val()), this.close(), t && t.noFocus || this.focusser.focus(), s(i, this.id(e)) || this.triggerChange({added: e, removed: n})
            }
        }, updateSelection: function (e) {
            var i, n, r = this.selection.find(".select2-chosen");
            this.selection.data("select2-data", e), r.empty(), null !== e && (i = this.opts.formatSelection(e, r, this.opts.escapeMarkup)), i !== t && r.append(i), n = this.opts.formatSelectionCssClass(e, r), n !== t && r.addClass(n), this.selection.removeClass("select2-default"), this.opts.allowClear && this.getPlaceholder() !== t && this.container.addClass("select2-allowclear")
        }, val: function () {
            var e, i = !1, n = null, r = this, s = this.data();
            if (0 === arguments.length)return this.opts.element.val();
            if (e = arguments[0], arguments.length > 1 && (i = arguments[1]), this.select)this.select.val(e).find("option").filter(function () {
                return this.selected
            }).each2(function (e, t) {
                return n = r.optionToData(t), !1
            }), this.updateSelection(n), this.setPlaceholder(), i && this.triggerChange({added: n, removed: s}); else {
                if (!e && 0 !== e)return this.clear(i), t;
                if (this.opts.initSelection === t)throw Error("cannot call val() if initSelection() is not defined");
                this.opts.element.val(e), this.opts.initSelection(this.opts.element, function (e) {
                    r.opts.element.val(e ? r.id(e) : ""), r.updateSelection(e), r.setPlaceholder(), i && r.triggerChange({added: e, removed: s})
                })
            }
        }, clearSearch: function () {
            this.search.val(""), this.focusser.val("")
        }, data: function (e) {
            var i, n = !1;
            return 0 === arguments.length ? (i = this.selection.data("select2-data"), i == t && (i = null), i) : (arguments.length > 1 && (n = arguments[1]), e ? (i = this.data(), this.opts.element.val(e ? this.id(e) : ""), this.updateSelection(e), n && this.triggerChange({added: e, removed: i})) : this.clear(n), t)
        }}), M = T(N, {createContainer: function () {
            var t = e(document.createElement("div")).attr({"class": "select2-container select2-container-multi"}).html(["<ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
            return t
        }, prepareOpts: function () {
            var t = this.parent.prepareOpts.apply(this, arguments), i = this;
            return"select" === t.element.get(0).tagName.toLowerCase() ? t.initSelection = function (e, t) {
                var n = [];
                e.find("option").filter(function () {
                    return this.selected
                }).each2(function (e, t) {
                    n.push(i.optionToData(t))
                }), t(n)
            } : "data"in t && (t.initSelection = t.initSelection || function (i, n) {
                var r = a(i.val(), t.separator), o = [];
                t.query({matcher: function (i, n, a) {
                    var l = e.grep(r,function (e) {
                        return s(e, t.id(a))
                    }).length;
                    return l && o.push(a), l
                }, callback: e.isFunction(n) ? function () {
                    for (var e = [], i = 0; r.length > i; i++)for (var a = r[i], l = 0; o.length > l; l++) {
                        var c = o[l];
                        if (s(a, t.id(c))) {
                            e.push(c), o.splice(l, 1);
                            break
                        }
                    }
                    n(e)
                } : e.noop})
            }), t
        }, selectChoice: function (e) {
            var t = this.container.find(".select2-search-choice-focus");
            t.length && e && e[0] == t[0] || (t.length && this.opts.element.trigger("choice-deselected", t), t.removeClass("select2-search-choice-focus"), e && e.length && (this.close(), e.addClass("select2-search-choice-focus"), this.opts.element.trigger("choice-selected", e)))
        }, destroy: function () {
            e("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments)
        }, initContainer: function () {
            var i, n = ".select2-choices";
            this.searchContainer = this.container.find(".select2-search-field"), this.selection = i = this.container.find(n);
            var r = this;
            this.selection.on("click", ".select2-search-choice:not(.select2-locked)", function () {
                r.search[0].focus(), r.selectChoice(e(this))
            }), this.search.attr("id", "s2id_autogen" + P()), e("label[for='" + this.opts.element.attr("id") + "']").attr("for", this.search.attr("id")), this.search.on("input paste", this.bind(function () {
                this.isInterfaceEnabled() && (this.opened() || this.open())
            })), this.search.attr("tabindex", this.elementTabIndex), this.keydowns = 0, this.search.on("keydown", this.bind(function (e) {
                if (this.isInterfaceEnabled()) {
                    ++this.keydowns;
                    var n = i.find(".select2-search-choice-focus"), r = n.prev(".select2-search-choice:not(.select2-locked)"), s = n.next(".select2-search-choice:not(.select2-locked)"), a = f(this.search);
                    if (n.length && (e.which == D.LEFT || e.which == D.RIGHT || e.which == D.BACKSPACE || e.which == D.DELETE || e.which == D.ENTER)) {
                        var o = n;
                        return e.which == D.LEFT && r.length ? o = r : e.which == D.RIGHT ? o = s.length ? s : null : e.which === D.BACKSPACE ? (this.unselect(n.first()), this.search.width(10), o = r.length ? r : s) : e.which == D.DELETE ? (this.unselect(n.first()), this.search.width(10), o = s.length ? s : null) : e.which == D.ENTER && (o = null), this.selectChoice(o), g(e), o && o.length || this.open(), t
                    }
                    if ((e.which === D.BACKSPACE && 1 == this.keydowns || e.which == D.LEFT) && 0 == a.offset && !a.length)return this.selectChoice(i.find(".select2-search-choice:not(.select2-locked)").last()), g(e), t;
                    if (this.selectChoice(null), this.opened())switch (e.which) {
                        case D.UP:
                        case D.DOWN:
                            return this.moveHighlight(e.which === D.UP ? -1 : 1), g(e), t;
                        case D.ENTER:
                            return this.selectHighlighted(), g(e), t;
                        case D.TAB:
                            return this.selectHighlighted({noFocus: !0}), this.close(), t;
                        case D.ESC:
                            return this.cancel(e), g(e), t
                    }
                    if (e.which !== D.TAB && !D.isControl(e) && !D.isFunctionKey(e) && e.which !== D.BACKSPACE && e.which !== D.ESC) {
                        if (e.which === D.ENTER) {
                            if (this.opts.openOnEnter === !1)return;
                            if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey)return
                        }
                        this.open(), (e.which === D.PAGE_UP || e.which === D.PAGE_DOWN) && g(e), e.which === D.ENTER && g(e)
                    }
                }
            })), this.search.on("keyup", this.bind(function () {
                this.keydowns = 0, this.resizeSearch()
            })), this.search.on("blur", this.bind(function (t) {
                this.container.removeClass("select2-container-active"), this.search.removeClass("select2-focused"), this.selectChoice(null), this.opened() || this.clearSearch(), t.stopImmediatePropagation(), this.opts.element.trigger(e.Event("select2-blur"))
            })), this.container.on("click", n, this.bind(function (t) {
                this.isInterfaceEnabled() && (e(t.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null), this.clearPlaceholder(), this.container.hasClass("select2-container-active") || this.opts.element.trigger(e.Event("select2-focus")), this.open(), this.focusSearch(), t.preventDefault()))
            })), this.container.on("focus", n, this.bind(function () {
                this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(e.Event("select2-focus")), this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"), this.clearPlaceholder())
            })), this.initContainerWidth(), this.opts.element.addClass("select2-offscreen"), this.clearSearch()
        }, enableInterface: function () {
            this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled())
        }, initSelection: function () {
            if ("" === this.opts.element.val() && "" === this.opts.element.text() && (this.updateSelection([]), this.close(), this.clearSearch()), this.select || "" !== this.opts.element.val()) {
                var e = this;
                this.opts.initSelection.call(null, this.opts.element, function (i) {
                    i !== t && null !== i && (e.updateSelection(i), e.close(), e.clearSearch())
                })
            }
        }, clearSearch: function () {
            var e = this.getPlaceholder(), i = this.getMaxSearchWidth();
            e !== t && 0 === this.getVal().length && this.search.hasClass("select2-focused") === !1 ? (this.search.val(e).addClass("select2-default"), this.search.width(i > 0 ? i : this.container.css("width"))) : this.search.val("").width(10)
        }, clearPlaceholder: function () {
            this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default")
        }, opening: function () {
            this.clearPlaceholder(), this.resizeSearch(), this.parent.opening.apply(this, arguments), this.focusSearch(), this.updateResults(!0), this.search.focus(), this.opts.element.trigger(e.Event("select2-open"))
        }, close: function () {
            this.opened() && this.parent.close.apply(this, arguments)
        }, focus: function () {
            this.close(), this.search.focus()
        }, isFocused: function () {
            return this.search.hasClass("select2-focused")
        }, updateSelection: function (t) {
            var i = [], r = [], s = this;
            e(t).each(function () {
                0 > n(s.id(this), i) && (i.push(s.id(this)), r.push(this))
            }), t = r, this.selection.find(".select2-search-choice").remove(), e(t).each(function () {
                s.addSelectedChoice(this)
            }), s.postprocessResults()
        }, tokenize: function () {
            var e = this.search.val();
            e = this.opts.tokenizer.call(this, e, this.data(), this.bind(this.onSelect), this.opts), null != e && e != t && (this.search.val(e), e.length > 0 && this.open())
        }, onSelect: function (e, t) {
            this.triggerSelect(e) && (this.addSelectedChoice(e), this.opts.element.trigger({type: "selected", val: this.id(e), choice: e}), (this.select || !this.opts.closeOnSelect) && this.postprocessResults(e, !1, this.opts.closeOnSelect === !0), this.opts.closeOnSelect ? (this.close(), this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10), this.resizeSearch(), this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() && this.updateResults(!0), this.positionDropdown()) : (this.close(), this.search.width(10)), this.triggerChange({added: e}), t && t.noFocus || this.focusSearch())
        }, cancel: function () {
            this.close(), this.focusSearch()
        }, addSelectedChoice: function (i) {
            var n, r, s = !i.locked, a = e("<li class='select2-search-choice'>    <div></div>    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a></li>"), o = e("<li class='select2-search-choice select2-locked'><div></div></li>"), l = s ? a : o, c = this.id(i), u = this.getVal();
            n = this.opts.formatSelection(i, l.find("div"), this.opts.escapeMarkup), n != t && l.find("div").replaceWith("<div>" + n + "</div>"), r = this.opts.formatSelectionCssClass(i, l.find("div")), r != t && l.addClass(r), s && l.find(".select2-search-choice-close").on("mousedown", g).on("click dblclick", this.bind(function (t) {
                this.isInterfaceEnabled() && (e(t.target).closest(".select2-search-choice").fadeOut("fast", this.bind(function () {
                    this.unselect(e(t.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), this.close(), this.focusSearch()
                })).dequeue(), g(t))
            })).on("focus", this.bind(function () {
                this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"))
            })), l.data("select2-data", i), l.insertBefore(this.searchContainer), u.push(c), this.setVal(u)
        }, unselect: function (t) {
            var i, r, s = this.getVal();
            if (t = t.closest(".select2-search-choice"), 0 === t.length)throw"Invalid argument: " + t + ". Must be .select2-search-choice";
            if (i = t.data("select2-data")) {
                for (; (r = n(this.id(i), s)) >= 0;)s.splice(r, 1), this.setVal(s), this.select && this.postprocessResults();
                var a = e.Event("select2-removing");
                a.val = this.id(i), a.choice = i, this.opts.element.trigger(a), a.isDefaultPrevented() || (t.remove(), this.opts.element.trigger({type: "select2-removed", val: this.id(i), choice: i}), this.triggerChange({removed: i}))
            }
        }, postprocessResults: function (e, t, i) {
            var r = this.getVal(), s = this.results.find(".select2-result"), a = this.results.find(".select2-result-with-children"), o = this;
            s.each2(function (e, t) {
                var i = o.id(t.data("select2-data"));
                n(i, r) >= 0 && (t.addClass("select2-selected"), t.find(".select2-result-selectable").addClass("select2-selected"))
            }), a.each2(function (e, t) {
                t.is(".select2-result-selectable") || 0 !== t.find(".select2-result-selectable:not(.select2-selected)").length || t.addClass("select2-selected")
            }), -1 == this.highlight() && i !== !1 && o.highlight(0), !this.opts.createSearchChoice && !s.filter(".select2-result:not(.select2-selected)").length > 0 && (!e || e && !e.more && 0 === this.results.find(".select2-no-results").length) && C(o.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + o.opts.formatNoMatches(o.search.val()) + "</li>")
        }, getMaxSearchWidth: function () {
            return this.selection.width() - o(this.search)
        }, resizeSearch: function () {
            var e, t, i, n, r, s = o(this.search);
            e = y(this.search) + 10, t = this.search.offset().left, i = this.selection.width(), n = this.selection.offset().left, r = i - (t - n) - s, e > r && (r = i - s), 40 > r && (r = i - s), 0 >= r && (r = e), this.search.width(Math.floor(r))
        }, getVal: function () {
            var e;
            return this.select ? (e = this.select.val(), null === e ? [] : e) : (e = this.opts.element.val(), a(e, this.opts.separator))
        }, setVal: function (t) {
            var i;
            this.select ? this.select.val(t) : (i = [], e(t).each(function () {
                0 > n(this, i) && i.push(this)
            }), this.opts.element.val(0 === i.length ? "" : i.join(this.opts.separator)))
        }, buildChangeDetails: function (e, t) {
            for (var t = t.slice(0), e = e.slice(0), i = 0; t.length > i; i++)for (var n = 0; e.length > n; n++)s(this.opts.id(t[i]), this.opts.id(e[n])) && (t.splice(i, 1), i > 0 && i--, e.splice(n, 1), n--);
            return{added: t, removed: e}
        }, val: function (i, n) {
            var r, s = this;
            if (0 === arguments.length)return this.getVal();
            if (r = this.data(), r.length || (r = []), !i && 0 !== i)return this.opts.element.val(""), this.updateSelection([]), this.clearSearch(), n && this.triggerChange({added: this.data(), removed: r}), t;
            if (this.setVal(i), this.select)this.opts.initSelection(this.select, this.bind(this.updateSelection)), n && this.triggerChange(this.buildChangeDetails(r, this.data())); else {
                if (this.opts.initSelection === t)throw Error("val() cannot be called if initSelection() is not defined");
                this.opts.initSelection(this.opts.element, function (t) {
                    var i = e.map(t, s.id);
                    s.setVal(i), s.updateSelection(t), s.clearSearch(), n && s.triggerChange(s.buildChangeDetails(r, s.data()))
                })
            }
            this.clearSearch()
        }, onSortStart: function () {
            if (this.select)throw Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
            this.search.width(0), this.searchContainer.hide()
        }, onSortEnd: function () {
            var t = [], i = this;
            this.searchContainer.show(), this.searchContainer.appendTo(this.searchContainer.parent()), this.resizeSearch(), this.selection.find(".select2-search-choice").each(function () {
                t.push(i.opts.id(e(this).data("select2-data")))
            }), this.setVal(t), this.triggerChange()
        }, data: function (i, n) {
            var r, s, a = this;
            return 0 === arguments.length ? this.selection.find(".select2-search-choice").map(function () {
                return e(this).data("select2-data")
            }).get() : (s = this.data(), i || (i = []), r = e.map(i, function (e) {
                return a.opts.id(e)
            }), this.setVal(r), this.updateSelection(i), this.clearSearch(), n && this.triggerChange(this.buildChangeDetails(s, this.data())), t)
        }}), e.fn.select2 = function () {
            var i, r, s, a, o, l = Array.prototype.slice.call(arguments, 0), c = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"], u = ["opened", "isFocused", "container", "dropdown"], d = ["val", "data"], h = {search: "externalSearch"};
            return this.each(function () {
                if (0 === l.length || "object" == typeof l[0])i = 0 === l.length ? {} : e.extend({}, l[0]), i.element = e(this), "select" === i.element.get(0).tagName.toLowerCase() ? o = i.element.prop("multiple") : (o = i.multiple || !1, "tags"in i && (i.multiple = o = !0)), r = o ? new M : new E, r.init(i); else {
                    if ("string" != typeof l[0])throw"Invalid arguments to select2 plugin: " + l;
                    if (0 > n(l[0], c))throw"Unknown method: " + l[0];
                    if (a = t, r = e(this).data("select2"), r === t)return;
                    if (s = l[0], "container" === s ? a = r.container : "dropdown" === s ? a = r.dropdown : (h[s] && (s = h[s]), a = r[s].apply(r, l.slice(1))), n(l[0], u) >= 0 || n(l[0], d) && 1 == l.length)return!1
                }
            }), a === t ? this : a
        }, e.fn.select2.defaults = {width: "copy", loadMorePadding: 0, closeOnSelect: !0, openOnEnter: !0, containerCss: {}, dropdownCss: {}, containerCssClass: "", dropdownCssClass: "", formatResult: function (e, t, i, n) {
            var r = [];
            return b(e.text, i.term, r, n), r.join("")
        }, formatSelection: function (e, i, n) {
            return e ? n(e.text) : t
        }, sortResults: function (e) {
            return e
        }, formatResultCssClass: function () {
            return t
        }, formatSelectionCssClass: function () {
            return t
        }, formatNoMatches: function () {
            return"No matches found"
        }, formatInputTooShort: function (e, t) {
            var i = t - e.length;
            return"Please enter " + i + " more character" + (1 == i ? "" : "s")
        }, formatInputTooLong: function (e, t) {
            var i = e.length - t;
            return"Please delete " + i + " character" + (1 == i ? "" : "s")
        }, formatSelectionTooBig: function (e) {
            return"You can only select " + e + " item" + (1 == e ? "" : "s")
        }, formatLoadMore: function () {
            return"Loading more results..."
        }, formatSearching: function () {
            return"Searching..."
        }, minimumResultsForSearch: 0, minimumInputLength: 0, maximumInputLength: null, maximumSelectionSize: 0, id: function (e) {
            return e.id
        }, matcher: function (e, t) {
            return i("" + t).toUpperCase().indexOf(i("" + e).toUpperCase()) >= 0
        }, separator: ",", tokenSeparators: [], tokenizer: k, escapeMarkup: x, blurOnChange: !1, selectOnBlur: !1, adaptContainerCssClass: function (e) {
            return e
        }, adaptDropdownCssClass: function () {
            return null
        }, nextSearchTerm: function () {
            return t
        }}, e.fn.select2.ajaxDefaults = {transport: e.ajax, params: {type: "GET", cache: !1, dataType: "json"}}, window.Select2 = {query: {ajax: w, local: _, tags: S}, util: {debounce: u, markMatch: b, escapeMarkup: x, stripDiacritics: i}, "class": {"abstract": N, single: E, multi: M}}
    }
}(jQuery), function (e) {
    "use strict";
    e.fn.tooltip = function (t) {
        var i = e.extend({}, e.fn.tooltip.defaults, t), n = this.tipsy(i);
        if (i.hideOnClick && ("hover" == i.trigger || !i.trigger && "hover" == this.tipsy.defaults.trigger)) {
            var r = function () {
                e(this).tipsy("hide")
            };
            i.live ? e(this.context).on("click.tipsy", this.selector, r) : this.bind("click.tipsy", r)
        }
        return n
    }, e.fn.tooltip.defaults = {opacity: 1, offset: 1, delayIn: 500, hoverable: !0, hideOnClick: !0}
}(AJS.$), function () {
    function e(e) {
        var i = t;
        e.find("th").each(function (e, t) {
            var n = AJS.$(t);
            i.headers[e] = {}, n.hasClass("aui-table-column-unsortable") ? i.headers[e].sorter = !1 : (n.attr("tabindex", "0"), n.wrapInner("<span class='aui-table-header-content'/>"), n.hasClass("aui-table-column-issue-key") && (i.headers[e].sorter = "issue-key"))
        }), e.tablesorter(i)
    }

    var t = {sortMultiSortKey: "", headers: {}, debug: !1};
    AJS.tablessortable = {setup: function () {
        AJS.$.tablesorter.addParser({id: "issue-key", is: function () {
            return!1
        }, format: function (e) {
            var t = e.split("-"), i = t[0], n = t[1], r = "..........", s = "000000", a = (i + r).slice(0, r.length);
            return a += (s + n).slice(-s.length)
        }, type: "text"}), AJS.$(".aui-table-sortable").each(function () {
            e(AJS.$(this))
        })
    }, setTableSortable: function (t) {
        e(t)
    }}, AJS.$(AJS.tablessortable.setup)
}(), function (e) {
    var t = e(document), i = function (i) {
        var n = {};
        return n.$trigger = e(i.currentTarget), n.$content = t.find("#" + n.$trigger.attr("aria-controls")), n.triggerIsParent = 0 !== n.$content.parent().filter(n.$trigger).length, n.$shortContent = n.triggerIsParent ? n.$trigger.find(".aui-expander-short-content") : null, n.height = n.$content.css("min-height"), n.isCollapsible = n.$trigger.data("collapsible") !== !1, n.replaceText = n.$trigger.attr("data-replace-text"), n.replaceSelector = n.$trigger.data("replace-selector"), n
    }, n = function (e) {
        if (e.replaceText) {
            var t = e.replaceSelector ? e.$trigger.find(e.replaceSelector) : e.$trigger;
            e.$trigger.attr("data-replace-text", t.text()), t.text(e.replaceText)
        }
    }, r = {"aui-expander-invoke": function (i) {
        var n = e(i.currentTarget), r = t.find("#" + n.attr("aria-controls")), s = n.data("collapsible") !== !1;
        "true" == r.attr("aria-expanded") && s ? n.trigger("aui-expander-collapse") : n.trigger("aui-expander-expand")
    }, "aui-expander-expand": function (e) {
        var t = i(e);
        t.$content.attr("aria-expanded", "true"), "0px" != t.height ? t.$content.css("height", "auto") : t.$content.attr("aria-hidden", "false"), n(t), t.triggerIsParent && t.$shortContent.hide(), t.$trigger.trigger("aui-expander-expanded")
    }, "aui-expander-collapse": function (e) {
        var t = i(e);
        parseInt(t.$content.css("line-height"), 10), t.$content.children().first().height(), "0px" != t.height ? t.$content.css("height", 0) : t.$content.attr("aria-hidden", "true"), n(t), t.$content.attr("aria-expanded", "false"), t.triggerIsParent && t.$shortContent.show(), t.$trigger.trigger("aui-expander-collapsed")
    }, "click.aui-expander": function (t) {
        var i = e(t.currentTarget);
        i.trigger("aui-expander-invoke", t.currentTarget)
    }};
    t.on(r, ".aui-expander-trigger")
}(jQuery), function () {
    function e(e, t, i) {
        window.setTimeout(function () {
            e.css("width", 100 * i + "%"), t.attr("data-value", i)
        }, 0)
    }

    AJS.progressBars = {update: function (t, i) {
        var n = AJS.$(t).first(), r = n.children(".aui-progress-indicator-value"), s = r.attr("data-value") || 0, a = "aui-progress-indicator-after-update", o = "aui-progress-indicator-before-update", l = "transitionend webkitTransitionEnd", c = !n.attr("data-value");
        if (c && r.detach().css("width", 0).appendTo(n), "number" == typeof i && 1 >= i && i >= 0) {
            n.trigger(o, [s, i]);
            var u = document.body || document.documentElement, d = u.style;
            "string" == typeof d.transition || "string" == typeof d.WebkitTransition ? (r.one(l, function () {
                n.trigger(a, [s, i])
            }), e(r, n, i)) : (e(r, n, i), n.trigger(a, [s, i]))
        }
        return n
    }, setIndeterminate: function (e) {
        var t = AJS.$(e).first(), i = t.children(".aui-progress-indicator-value");
        t.removeAttr("data-value"), i.css("width", "100%")
    }}
}(), function (e) {
    var t = e.fn.select2, i = "aui-select2-container", n = "aui-select2-drop aui-dropdown2 aui-style-default", r = "aui-has-avatar";
    e.fn.auiSelect2 = function (s) {
        var a;
        if (e.isPlainObject(s)) {
            var o = e.extend({}, s), l = o.hasAvatar ? " " + r : "";
            o.containerCssClass = i + l + (o.containerCssClass ? " " + o.containerCssClass : ""), o.dropdownCssClass = n + l + (o.dropdownCssClass ? " " + o.dropdownCssClass : ""), a = Array.prototype.slice.call(arguments, 1), a.unshift(o)
        } else a = arguments.length ? arguments : [
            {containerCssClass: i, dropdownCssClass: n}
        ];
        return t.apply(this, a)
    }
}(AJS.$);
var goog = goog || {};
goog.inherits = function (e, t) {
    function i() {
    }

    i.prototype = t.prototype, e.superClass_ = t.prototype, e.prototype = new i, e.prototype.constructor = e
}, goog.userAgent || (goog.userAgent = function () {
    var e = "";
    "undefined" != typeof navigator && navigator && "string" == typeof navigator.userAgent && (e = navigator.userAgent);
    var t = 0 == e.indexOf("Opera");
    return{HAS_JSCRIPT: "string"in this, IS_OPERA: t, IS_IE: !t && -1 != e.indexOf("MSIE"), IS_WEBKIT: !t && -1 != e.indexOf("WebKit")}
}()), goog.asserts || (goog.asserts = {fail: function () {
}}), goog.dom || (goog.dom = {}, goog.dom.DomHelper = function (e) {
    this.document_ = e || document
}, goog.dom.DomHelper.prototype.getDocument = function () {
    return this.document_
}, goog.dom.DomHelper.prototype.createElement = function (e) {
    return this.document_.createElement(e)
}, goog.dom.DomHelper.prototype.createDocumentFragment = function () {
    return this.document_.createDocumentFragment()
}), goog.format || (goog.format = {insertWordBreaks: function (e, t) {
    e += "";
    for (var i = [], n = 0, r = !1, s = !1, a = 0, o = 0, l = 0, c = e.length; c > l; ++l) {
        var u = e.charCodeAt(l);
        if (a >= t && 32 != u && (i[n++] = e.substring(o, l), o = l, i[n++] = goog.format.WORD_BREAK, a = 0), r)62 == u && (r = !1); else if (s)switch (u) {
            case 59:
                s = !1, ++a;
                break;
            case 60:
                s = !1, r = !0;
                break;
            case 32:
                s = !1, a = 0
        } else switch (u) {
            case 60:
                r = !0;
                break;
            case 38:
                s = !0;
                break;
            case 32:
                a = 0;
                break;
            default:
                ++a
        }
    }
    return i[n++] = e.substring(o), i.join("")
}, WORD_BREAK: goog.userAgent.IS_WEBKIT ? "<wbr></wbr>" : goog.userAgent.IS_OPERA ? "&shy;" : "<wbr>"}), goog.i18n || (goog.i18n = {bidi: {detectRtlDirectionality: function (e, t) {
    return e = soyshim.$$bidiStripHtmlIfNecessary_(e, t), soyshim.$$bidiRtlWordRatio_(e) > soyshim.$$bidiRtlDetectionThreshold_
}}}), goog.i18n.bidi.Dir = {RTL: -1, UNKNOWN: 0, LTR: 1}, goog.i18n.bidi.toDir = function (e) {
    return"number" == typeof e ? e > 0 ? goog.i18n.bidi.Dir.LTR : 0 > e ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.UNKNOWN : e ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR
}, goog.i18n.BidiFormatter = function (e) {
    this.dir_ = goog.i18n.bidi.toDir(e)
}, goog.i18n.BidiFormatter.prototype.dirAttr = function (e, t) {
    var i = soy.$$bidiTextDir(e, t);
    return i && i != this.dir_ ? 0 > i ? "dir=rtl" : "dir=ltr" : ""
}, goog.i18n.BidiFormatter.prototype.endEdge = function () {
    return 0 > this.dir_ ? "left" : "right"
}, goog.i18n.BidiFormatter.prototype.mark = function () {
    return this.dir_ > 0 ? "\u200e" : 0 > this.dir_ ? "\u200f" : ""
}, goog.i18n.BidiFormatter.prototype.markAfter = function (e, t) {
    var i = soy.$$bidiTextDir(e, t);
    return soyshim.$$bidiMarkAfterKnownDir_(this.dir_, i, e, t)
}, goog.i18n.BidiFormatter.prototype.spanWrap = function (e) {
    e += "";
    var t = soy.$$bidiTextDir(e, !0), i = soyshim.$$bidiMarkAfterKnownDir_(this.dir_, t, e, !0);
    return t > 0 && 0 >= this.dir_ ? e = "<span dir=ltr>" + e + "</span>" : 0 > t && this.dir_ >= 0 && (e = "<span dir=rtl>" + e + "</span>"), e + i
}, goog.i18n.BidiFormatter.prototype.startEdge = function () {
    return 0 > this.dir_ ? "right" : "left"
}, goog.i18n.BidiFormatter.prototype.unicodeWrap = function (e) {
    e += "";
    var t = soy.$$bidiTextDir(e, !0), i = soyshim.$$bidiMarkAfterKnownDir_(this.dir_, t, e, !0);
    return t > 0 && 0 >= this.dir_ ? e = "\u202a" + e + "\u202c" : 0 > t && this.dir_ >= 0 && (e = "\u202b" + e + "\u202c"), e + i
}, goog.string = {newLineToBr: function (e, t) {
    return e += "", goog.string.NEWLINE_TO_BR_RE_.test(e) ? e.replace(/(\r\n|\r|\n)/g, t ? "<br />" : "<br>") : e
}, urlEncode: encodeURIComponent, NEWLINE_TO_BR_RE_: /[\r\n]/}, goog.string.StringBuffer = function (e) {
    this.buffer_ = goog.userAgent.HAS_JSCRIPT ? [] : "", null != e && this.append.apply(this, arguments)
}, goog.string.StringBuffer.prototype.bufferLength_ = 0, goog.string.StringBuffer.prototype.append = function (e, t) {
    if (goog.userAgent.HAS_JSCRIPT)if (null == t)this.buffer_[this.bufferLength_++] = e; else {
        var i = this.buffer_;
        i.push.apply(i, arguments), this.bufferLength_ = this.buffer_.length
    } else if (this.buffer_ += e, null != t)for (var n = 1; arguments.length > n; n++)this.buffer_ += arguments[n];
    return this
}, goog.string.StringBuffer.prototype.clear = function () {
    goog.userAgent.HAS_JSCRIPT ? (this.buffer_.length = 0, this.bufferLength_ = 0) : this.buffer_ = ""
}, goog.string.StringBuffer.prototype.toString = function () {
    if (goog.userAgent.HAS_JSCRIPT) {
        var e = this.buffer_.join("");
        return this.clear(), e && this.append(e), e
    }
    return this.buffer_
}, goog.soy || (goog.soy = {renderAsElement: function (e, t, i, n) {
    return soyshim.$$renderWithWrapper_(e, t, n, !0, i)
}, renderAsFragment: function (e, t, i, n) {
    return soyshim.$$renderWithWrapper_(e, t, n, !1, i)
}, renderElement: function (e, t, i, n) {
    e.innerHTML = t(i, null, n)
}});
var soy = {esc: {}}, soydata = {}, soyshim = {$$DEFAULT_TEMPLATE_DATA_: {}};
if (soyshim.$$renderWithWrapper_ = function (e, t, i, n, r) {
    var s = i || document, a = s.createElement("div");
    if (a.innerHTML = e(t || soyshim.$$DEFAULT_TEMPLATE_DATA_, void 0, r), 1 == a.childNodes.length) {
        var o = a.firstChild;
        if (!n || 1 == o.nodeType)return o
    }
    if (n)return a;
    for (var l = s.createDocumentFragment(); a.firstChild;)l.appendChild(a.firstChild);
    return l
}, soyshim.$$bidiMarkAfterKnownDir_ = function (e, t, i, n) {
    return e > 0 && (0 > t || soyshim.$$bidiIsRtlExitText_(i, n)) ? "\u200e" : 0 > e && (t > 0 || soyshim.$$bidiIsLtrExitText_(i, n)) ? "\u200f" : ""
}, soyshim.$$bidiStripHtmlIfNecessary_ = function (e, t) {
    return t ? e.replace(soyshim.$$BIDI_HTML_SKIP_RE_, " ") : e
}, soyshim.$$BIDI_HTML_SKIP_RE_ = /<[^>]*>|&[^;]+;/g, soyshim.$$bidiLtrChars_ = "A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff", soyshim.$$bidiNeutralChars_ = "\0- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff", soyshim.$$bidiRtlChars_ = "\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc", soyshim.$$bidiRtlDirCheckRe_ = RegExp("^[^" + soyshim.$$bidiLtrChars_ + "]*[" + soyshim.$$bidiRtlChars_ + "]"), soyshim.$$bidiNeutralDirCheckRe_ = RegExp("^[" + soyshim.$$bidiNeutralChars_ + "]*$|^http://"), soyshim.$$bidiIsRtlText_ = function (e) {
    return soyshim.$$bidiRtlDirCheckRe_.test(e)
}, soyshim.$$bidiIsNeutralText_ = function (e) {
    return soyshim.$$bidiNeutralDirCheckRe_.test(e)
}, soyshim.$$bidiRtlDetectionThreshold_ = .4, soyshim.$$bidiRtlWordRatio_ = function (e) {
    for (var t = 0, i = 0, n = e.split(" "), r = 0; n.length > r; r++)soyshim.$$bidiIsRtlText_(n[r]) ? (t++, i++) : soyshim.$$bidiIsNeutralText_(n[r]) || i++;
    return 0 == i ? 0 : t / i
}, soyshim.$$bidiLtrExitDirCheckRe_ = RegExp("[" + soyshim.$$bidiLtrChars_ + "][^" + soyshim.$$bidiRtlChars_ + "]*$"), soyshim.$$bidiRtlExitDirCheckRe_ = RegExp("[" + soyshim.$$bidiRtlChars_ + "][^" + soyshim.$$bidiLtrChars_ + "]*$"), soyshim.$$bidiIsLtrExitText_ = function (e, t) {
    return e = soyshim.$$bidiStripHtmlIfNecessary_(e, t), soyshim.$$bidiLtrExitDirCheckRe_.test(e)
}, soyshim.$$bidiIsRtlExitText_ = function (e, t) {
    return e = soyshim.$$bidiStripHtmlIfNecessary_(e, t), soyshim.$$bidiRtlExitDirCheckRe_.test(e)
}, soy.StringBuilder = goog.string.StringBuffer, soydata.SanitizedContentKind = {HTML: 0, JS_STR_CHARS: 1, URI: 2, HTML_ATTRIBUTE: 3}, soydata.SanitizedContent = function (e) {
    this.content = e
}, soydata.SanitizedContent.prototype.contentKind, soydata.SanitizedContent.prototype.toString = function () {
    return this.content
}, soydata.SanitizedHtml = function (e) {
    soydata.SanitizedContent.call(this, e)
}, goog.inherits(soydata.SanitizedHtml, soydata.SanitizedContent), soydata.SanitizedHtml.prototype.contentKind = soydata.SanitizedContentKind.HTML, soydata.SanitizedJsStrChars = function (e) {
    soydata.SanitizedContent.call(this, e)
}, goog.inherits(soydata.SanitizedJsStrChars, soydata.SanitizedContent), soydata.SanitizedJsStrChars.prototype.contentKind = soydata.SanitizedContentKind.JS_STR_CHARS, soydata.SanitizedUri = function (e) {
    soydata.SanitizedContent.call(this, e)
}, goog.inherits(soydata.SanitizedUri, soydata.SanitizedContent), soydata.SanitizedUri.prototype.contentKind = soydata.SanitizedContentKind.URI, soydata.SanitizedHtmlAttribute = function (e) {
    soydata.SanitizedContent.call(this, e)
}, goog.inherits(soydata.SanitizedHtmlAttribute, soydata.SanitizedContent), soydata.SanitizedHtmlAttribute.prototype.contentKind = soydata.SanitizedContentKind.HTML_ATTRIBUTE, soy.renderElement = goog.soy.renderElement, soy.renderAsFragment = function (e, t, i, n) {
    return goog.soy.renderAsFragment(e, t, n, new goog.dom.DomHelper(i))
}, soy.renderAsElement = function (e, t, i, n) {
    return goog.soy.renderAsElement(e, t, n, new goog.dom.DomHelper(i))
}, soy.$$augmentData = function (e, t) {
    function i() {
    }

    i.prototype = e;
    var n = new i;
    for (var r in t)n[r] = t[r];
    return n
}, soy.$$getMapKeys = function (e) {
    var t = [];
    for (var i in e)t.push(i);
    return t
}, soy.$$getDelegateId = function (e) {
    return e
}, soy.$$DELEGATE_REGISTRY_PRIORITIES_ = {}, soy.$$DELEGATE_REGISTRY_FUNCTIONS_ = {}, soy.$$registerDelegateFn = function (e, t, i) {
    var n = "key_" + e, r = soy.$$DELEGATE_REGISTRY_PRIORITIES_[n];
    if (void 0 === r || t > r)soy.$$DELEGATE_REGISTRY_PRIORITIES_[n] = t, soy.$$DELEGATE_REGISTRY_FUNCTIONS_[n] = i; else if (t == r)throw Error('Encountered two active delegates with same priority (id/name "' + e + '").')
}, soy.$$getDelegateFn = function (e) {
    var t = soy.$$DELEGATE_REGISTRY_FUNCTIONS_["key_" + e];
    return t ? t : soy.$$EMPTY_TEMPLATE_FN_
}, soy.$$EMPTY_TEMPLATE_FN_ = function () {
    return""
}, soy.$$escapeHtml = function (e) {
    return"object" == typeof e && e && e.contentKind === soydata.SanitizedContentKind.HTML ? e.content : soy.esc.$$escapeHtmlHelper(e)
}, soy.$$escapeHtmlRcdata = function (e) {
    return"object" == typeof e && e && e.contentKind === soydata.SanitizedContentKind.HTML ? soy.esc.$$normalizeHtmlHelper(e.content) : soy.esc.$$escapeHtmlHelper(e)
}, soy.$$stripHtmlTags = function (e) {
    return(e + "").replace(soy.esc.$$HTML_TAG_REGEX_, "")
}, soy.$$escapeHtmlAttribute = function (e) {
    return"object" == typeof e && e && e.contentKind === soydata.SanitizedContentKind.HTML ? soy.esc.$$normalizeHtmlHelper(soy.$$stripHtmlTags(e.content)) : soy.esc.$$escapeHtmlHelper(e)
}, soy.$$escapeHtmlAttributeNospace = function (e) {
    return"object" == typeof e && e && e.contentKind === soydata.SanitizedContentKind.HTML ? soy.esc.$$normalizeHtmlNospaceHelper(soy.$$stripHtmlTags(e.content)) : soy.esc.$$escapeHtmlNospaceHelper(e)
}, soy.$$filterHtmlAttribute = function (e) {
    return"object" == typeof e && e && e.contentKind === soydata.SanitizedContentKind.HTML_ATTRIBUTE ? e.content.replace(/=([^"']*)$/, '="$1"') : soy.esc.$$filterHtmlAttributeHelper(e)
}, soy.$$filterHtmlElementName = function (e) {
    return soy.esc.$$filterHtmlElementNameHelper(e)
}, soy.$$escapeJs = function (e) {
    return soy.$$escapeJsString(e)
}, soy.$$escapeJsString = function (e) {
    return"object" == typeof e && e.contentKind === soydata.SanitizedContentKind.JS_STR_CHARS ? e.content : soy.esc.$$escapeJsStringHelper(e)
}, soy.$$escapeJsValue = function (e) {
    if (null == e)return" null ";
    switch (typeof e) {
        case"boolean":
        case"number":
            return" " + e + " ";
        default:
            return"'" + soy.esc.$$escapeJsStringHelper(e + "") + "'"
    }
}, soy.$$escapeJsRegex = function (e) {
    return soy.esc.$$escapeJsRegexHelper(e)
}, soy.$$problematicUriMarks_ = /['()]/g, soy.$$pctEncode_ = function (e) {
    return"%" + e.charCodeAt(0).toString(16)
}, soy.$$escapeUri = function (e) {
    if ("object" == typeof e && e.contentKind === soydata.SanitizedContentKind.URI)return soy.$$normalizeUri(e);
    var t = soy.esc.$$escapeUriHelper(e);
    return soy.$$problematicUriMarks_.lastIndex = 0, soy.$$problematicUriMarks_.test(t) ? t.replace(soy.$$problematicUriMarks_, soy.$$pctEncode_) : t
}, soy.$$normalizeUri = function (e) {
    return soy.esc.$$normalizeUriHelper(e)
}, soy.$$filterNormalizeUri = function (e) {
    return soy.esc.$$filterNormalizeUriHelper(e)
}, soy.$$escapeCssString = function (e) {
    return soy.esc.$$escapeCssStringHelper(e)
}, soy.$$filterCssValue = function (e) {
    return null == e ? "" : soy.esc.$$filterCssValueHelper(e)
}, soy.$$changeNewlineToBr = function (e) {
    return goog.string.newLineToBr(e + "", !1)
}, soy.$$insertWordBreaks = function (e, t) {
    return goog.format.insertWordBreaks(e + "", t)
}, soy.$$truncate = function (e, t, i) {
    return e += "", t >= e.length ? e : (i && (t > 3 ? t -= 3 : i = !1), soy.$$isHighSurrogate_(e.charAt(t - 1)) && soy.$$isLowSurrogate_(e.charAt(t)) && (t -= 1), e = e.substring(0, t), i && (e += "..."), e)
}, soy.$$isHighSurrogate_ = function (e) {
    return e >= 55296 && 56319 >= e
}, soy.$$isLowSurrogate_ = function (e) {
    return e >= 56320 && 57343 >= e
}, soy.$$bidiFormatterCache_ = {}, soy.$$getBidiFormatterInstance_ = function (e) {
    return soy.$$bidiFormatterCache_[e] || (soy.$$bidiFormatterCache_[e] = new goog.i18n.BidiFormatter(e))
}, soy.$$bidiTextDir = function (e, t) {
    return e ? goog.i18n.bidi.detectRtlDirectionality(e, t) ? -1 : 1 : 0
}, soy.$$bidiDirAttr = function (e, t, i) {
    return new soydata.SanitizedHtmlAttribute(soy.$$getBidiFormatterInstance_(e).dirAttr(t, i))
}, soy.$$bidiMarkAfter = function (e, t, i) {
    var n = soy.$$getBidiFormatterInstance_(e);
    return n.markAfter(t, i)
}, soy.$$bidiSpanWrap = function (e, t) {
    var i = soy.$$getBidiFormatterInstance_(e);
    return i.spanWrap(t + "", !0)
}, soy.$$bidiUnicodeWrap = function (e, t) {
    var i = soy.$$getBidiFormatterInstance_(e);
    return i.unicodeWrap(t + "", !0)
}, soy.esc.$$escapeUriHelper = function (e) {
    return encodeURIComponent(e + "")
}, soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_ = {"\0": "&#0;", '"': "&quot;", "&": "&amp;", "'": "&#39;", "<": "&lt;", ">": "&gt;", "	": "&#9;", "\n": "&#10;", "": "&#11;", "\f": "&#12;", "\r": "&#13;", " ": "&#32;", "-": "&#45;", "/": "&#47;", "=": "&#61;", "`": "&#96;", "\u0085": "&#133;", "\u00a0": "&#160;", "\u2028": "&#8232;", "\u2029": "&#8233;"}, soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_ = function (e) {
    return soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_[e]
}, soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_ = {"\0": "\\x00", "\b": "\\x08", "	": "\\t", "\n": "\\n", "": "\\x0b", "\f": "\\f", "\r": "\\r", '"': "\\x22", "&": "\\x26", "'": "\\x27", "/": "\\/", "<": "\\x3c", "=": "\\x3d", ">": "\\x3e", "\\": "\\\\", "\u0085": "\\x85", "\u2028": "\\u2028", "\u2029": "\\u2029", $: "\\x24", "(": "\\x28", ")": "\\x29", "*": "\\x2a", "+": "\\x2b", ",": "\\x2c", "-": "\\x2d", ".": "\\x2e", ":": "\\x3a", "?": "\\x3f", "[": "\\x5b", "]": "\\x5d", "^": "\\x5e", "{": "\\x7b", "|": "\\x7c", "}": "\\x7d"}, soy.esc.$$REPLACER_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_ = function (e) {
    return soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_[e]
}, soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_CSS_STRING_ = {"\0": "\\0 ", "\b": "\\8 ", "	": "\\9 ", "\n": "\\a ", "": "\\b ", "\f": "\\c ", "\r": "\\d ", '"': "\\22 ", "&": "\\26 ", "'": "\\27 ", "(": "\\28 ", ")": "\\29 ", "*": "\\2a ", "/": "\\2f ", ":": "\\3a ", ";": "\\3b ", "<": "\\3c ", "=": "\\3d ", ">": "\\3e ", "@": "\\40 ", "\\": "\\5c ", "{": "\\7b ", "}": "\\7d ", "\u0085": "\\85 ", "\u00a0": "\\a0 ", "\u2028": "\\2028 ", "\u2029": "\\2029 "}, soy.esc.$$REPLACER_FOR_ESCAPE_CSS_STRING_ = function (e) {
    return soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_CSS_STRING_[e]
}, soy.esc.$$ESCAPE_MAP_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_ = {"\0": "%00", "": "%01", "": "%02", "": "%03", "": "%04", "": "%05", "": "%06", "": "%07", "\b": "%08", "	": "%09", "\n": "%0A", "": "%0B", "\f": "%0C", "\r": "%0D", "": "%0E", "": "%0F", "": "%10", "": "%11", "": "%12", "": "%13", "": "%14", "": "%15", "": "%16", "": "%17", "": "%18", "": "%19", "": "%1A", "": "%1B", "": "%1C", "": "%1D", "": "%1E", "": "%1F", " ": "%20", '"': "%22", "'": "%27", "(": "%28", ")": "%29", "<": "%3C", ">": "%3E", "\\": "%5C", "{": "%7B", "}": "%7D", "": "%7F", "\u0085": "%C2%85", "\u00a0": "%C2%A0", "\u2028": "%E2%80%A8", "\u2029": "%E2%80%A9", "\uff01": "%EF%BC%81", "\uff03": "%EF%BC%83", "\uff04": "%EF%BC%84", "\uff06": "%EF%BC%86", "\uff07": "%EF%BC%87", "\uff08": "%EF%BC%88", "\uff09": "%EF%BC%89", "\uff0a": "%EF%BC%8A", "\uff0b": "%EF%BC%8B", "\uff0c": "%EF%BC%8C", "\uff0f": "%EF%BC%8F", "\uff1a": "%EF%BC%9A", "\uff1b": "%EF%BC%9B", "\uff1d": "%EF%BC%9D", "\uff1f": "%EF%BC%9F", "\uff20": "%EF%BC%A0", "\uff3b": "%EF%BC%BB", "\uff3d": "%EF%BC%BD"}, soy.esc.$$REPLACER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_ = function (e) {
    return soy.esc.$$ESCAPE_MAP_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_[e]
}, soy.esc.$$MATCHER_FOR_ESCAPE_HTML_ = /[\x00\x22\x26\x27\x3c\x3e]/g, soy.esc.$$MATCHER_FOR_NORMALIZE_HTML_ = /[\x00\x22\x27\x3c\x3e]/g, soy.esc.$$MATCHER_FOR_ESCAPE_HTML_NOSPACE_ = /[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g, soy.esc.$$MATCHER_FOR_NORMALIZE_HTML_NOSPACE_ = /[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g, soy.esc.$$MATCHER_FOR_ESCAPE_JS_STRING_ = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g, soy.esc.$$MATCHER_FOR_ESCAPE_JS_REGEX_ = /[\x00\x08-\x0d\x22\x24\x26-\/\x3a\x3c-\x3f\x5b-\x5e\x7b-\x7d\x85\u2028\u2029]/g, soy.esc.$$MATCHER_FOR_ESCAPE_CSS_STRING_ = /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g, soy.esc.$$MATCHER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_ = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g, soy.esc.$$FILTER_FOR_FILTER_CSS_VALUE_ = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i, soy.esc.$$FILTER_FOR_FILTER_NORMALIZE_URI_ = /^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i, soy.esc.$$FILTER_FOR_FILTER_HTML_ATTRIBUTE_ = /^(?!style|on|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|src|usemap)(?:[a-z0-9_$:-]*)$/i, soy.esc.$$FILTER_FOR_FILTER_HTML_ELEMENT_NAME_ = /^(?!script|style|title|textarea|xmp|no)[a-z0-9_$:-]*$/i, soy.esc.$$escapeHtmlHelper = function (e) {
    var t = e + "";
    return t.replace(soy.esc.$$MATCHER_FOR_ESCAPE_HTML_, soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)
}, soy.esc.$$normalizeHtmlHelper = function (e) {
    var t = e + "";
    return t.replace(soy.esc.$$MATCHER_FOR_NORMALIZE_HTML_, soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)
}, soy.esc.$$escapeHtmlNospaceHelper = function (e) {
    var t = e + "";
    return t.replace(soy.esc.$$MATCHER_FOR_ESCAPE_HTML_NOSPACE_, soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)
}, soy.esc.$$normalizeHtmlNospaceHelper = function (e) {
    var t = e + "";
    return t.replace(soy.esc.$$MATCHER_FOR_NORMALIZE_HTML_NOSPACE_, soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)
}, soy.esc.$$escapeJsStringHelper = function (e) {
    var t = e + "";
    return t.replace(soy.esc.$$MATCHER_FOR_ESCAPE_JS_STRING_, soy.esc.$$REPLACER_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_)
}, soy.esc.$$escapeJsRegexHelper = function (e) {
    var t = e + "";
    return t.replace(soy.esc.$$MATCHER_FOR_ESCAPE_JS_REGEX_, soy.esc.$$REPLACER_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_)
}, soy.esc.$$escapeCssStringHelper = function (e) {
    var t = e + "";
    return t.replace(soy.esc.$$MATCHER_FOR_ESCAPE_CSS_STRING_, soy.esc.$$REPLACER_FOR_ESCAPE_CSS_STRING_)
}, soy.esc.$$filterCssValueHelper = function (e) {
    var t = e + "";
    return soy.esc.$$FILTER_FOR_FILTER_CSS_VALUE_.test(t) ? t : "zSoyz"
}, soy.esc.$$normalizeUriHelper = function (e) {
    var t = e + "";
    return t.replace(soy.esc.$$MATCHER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_, soy.esc.$$REPLACER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_)
}, soy.esc.$$filterNormalizeUriHelper = function (e) {
    var t = e + "";
    return soy.esc.$$FILTER_FOR_FILTER_NORMALIZE_URI_.test(t) ? t.replace(soy.esc.$$MATCHER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_, soy.esc.$$REPLACER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_) : "zSoyz"
}, soy.esc.$$filterHtmlAttributeHelper = function (e) {
    var t = e + "";
    return soy.esc.$$FILTER_FOR_FILTER_HTML_ATTRIBUTE_.test(t) ? t : "zSoyz"
}, soy.esc.$$filterHtmlElementNameHelper = function (e) {
    var t = e + "";
    return soy.esc.$$FILTER_FOR_FILTER_HTML_ELEMENT_NAME_.test(t) ? t : "zSoyz"
}, soy.esc.$$HTML_TAG_REGEX_ = /<(?:!|\/?[a-zA-Z])(?:[^>'"]|"[^"]*"|'[^']*')*>/g, aui === void 0)var aui = {};
if (aui.renderExtraAttributes = function (e, t) {
    var i = t || new soy.StringBuilder;
    if (null != e && e.extraAttributes)if ("[object Object]" === Object.prototype.toString.call(e.extraAttributes))for (var n = soy.$$getMapKeys(e.extraAttributes), r = n.length, s = 0; r > s; s++) {
        var a = n[s];
        i.append(" ", soy.$$escapeHtml(a), '="', soy.$$escapeHtml(e.extraAttributes[a]), '"')
    } else i.append(" ", e.extraAttributes);
    return t ? "" : "" + i
}, aui.renderExtraClasses = function (e, t) {
    var i = t || new soy.StringBuilder;
    if (null != e && e.extraClasses)if (e.extraClasses instanceof Array)for (var n = e.extraClasses, r = n.length, s = 0; r > s; s++) {
        var a = n[s];
        i.append(" ", soy.$$escapeHtml(a))
    } else i.append(" ", soy.$$escapeHtml(e.extraClasses));
    return t ? "" : "" + i
}, aui === void 0)var aui = {};
if (aui.avatar === void 0 && (aui.avatar = {}), aui.avatar.avatar = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<", soy.$$escapeHtml(e.tagName ? e.tagName : "span"), e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui-avatar aui-avatar-', soy.$$escapeHtml(e.size), soy.$$escapeHtml(e.isProject ? " aui-avatar-project" : ""), soy.$$escapeHtml(e.badgeContent ? " aui-avatar-badged" : "")), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append('><span class="aui-avatar-inner"><img src="', soy.$$escapeHtml(e.avatarImageUrl), '"', e.accessibilityText ? ' alt="' + soy.$$escapeHtml(e.accessibilityText) + '"' : "", e.title ? ' title="' + soy.$$escapeHtml(e.title) + '"' : "", e.imageClasses ? ' class="' + soy.$$escapeHtml(e.imageClasses) + '"' : "", " /></span>", e.badgeContent ? e.badgeContent : "", "</", soy.$$escapeHtml(e.tagName ? e.tagName : "span"), ">"), t ? "" : "" + n
}, aui === void 0)var aui = {};
if (aui.badges === void 0 && (aui.badges = {}), aui.badges.badge = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<", soy.$$escapeHtml(e.tagName ? e.tagName : "span"), e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui-badge'), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(">", soy.$$escapeHtml(e.text), "</", soy.$$escapeHtml(e.tagName ? e.tagName : "span"), ">"), t ? "" : "" + n
}, aui === void 0)var aui = {};
if (aui.buttons === void 0 && (aui.buttons = {}), aui.buttons.button = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return e.href ? (n.append('<a href="', soy.$$escapeHtml(e.href), '"'), aui.buttons.buttonAttributes(e, n, i), n.append(">"), aui.buttons.buttonIcon(e, n, i), n.append(soy.$$escapeHtml(e.text), "</a>")) : "input" == e.tagName ? (n.append('<input type="', soy.$$escapeHtml(e.inputType ? e.inputType : "button"), '" '), aui.buttons.buttonAttributes(e, n, i), n.append(' value="', soy.$$escapeHtml(e.text), '" />')) : (n.append("<", soy.$$escapeHtml(e.tagName ? e.tagName : "button")), aui.buttons.buttonAttributes(e, n, i), n.append(">"), aui.buttons.buttonIcon(e, n, i), n.append(soy.$$escapeHtml(e.text), "</", soy.$$escapeHtml(e.tagName ? e.tagName : "button"), ">")), t ? "" : "" + n
}, aui.buttons.buttons = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<div", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui-buttons'), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(">", e.content, "</div>"), t ? "" : "" + n
}, aui.buttons.buttonAttributes = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    switch (n.append(e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui-button', "main" == e.splitButtonType ? " aui-button-split-main" : "", e.dropdown2Target ? " aui-dropdown2-trigger" + ("more" == e.splitButtonType ? " aui-button-split-more" : "") : ""), e.type) {
        case"primary":
            n.append(" aui-button-primary");
            break;
        case"link":
            n.append(" aui-button-link");
            break;
        case"subtle":
            n.append(" aui-button-subtle")
    }
    return aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(e.isPressed ? ' aria-pressed="' + soy.$$escapeHtml(e.isPressed) + '"' : "", e.isDisabled ? ' aria-disabled="' + soy.$$escapeHtml(e.isDisabled) + '"' + (1 == e.isDisabled ? "button" == e.tagName || "input" == e.tagName ? ' disabled="disabled" ' : "" : "") : "", e.dropdown2Target ? ' aria-owns="' + soy.$$escapeHtml(e.dropdown2Target) + '" aria-haspopup="true"' : "", "a" == e.tagName ? ' tabindex="0"' : ""), t ? "" : "" + n
}, aui.buttons.buttonIcon = function (e, t) {
    var i = t || new soy.StringBuilder;
    return i.append(e.iconType ? '<span class="' + ("aui" == e.iconType ? "aui-icon" : "") + (e.iconClass ? " " + soy.$$escapeHtml(e.iconClass) : "") + '">' + (e.iconText ? soy.$$escapeHtml(e.iconText) + " " : "") + "</span>" : ""), t ? "" : "" + i
}, aui.buttons.splitButton = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return aui.buttons.button(soy.$$augmentData(e.splitButtonMain, {splitButtonType: "main"}), n, i), aui.buttons.button(soy.$$augmentData(e.splitButtonMore, {splitButtonType: "more"}), n, i), t ? "" : "" + n
}, aui === void 0)var aui = {};
if (aui.dialog === void 0 && (aui.dialog = {}), aui.dialog.dialog2 = function (e, t, i) {
    var n = t || new soy.StringBuilder, r = new soy.StringBuilder;
    return aui.dialog.dialog2Content(e, r, i), aui.dialog.dialog2Chrome({id: e.id, titleId: e.id ? e.id + "-dialog-title" : null, modal: e.modal, removeOnHide: e.removeOnHide, visible: e.visible, size: e.size, extraClasses: e.extraClasses, extraAttributes: e.extraAttributes, content: "" + r}, n, i), t ? "" : "" + n
}, aui.dialog.dialog2Chrome = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<section", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", e.titleId ? ' aria-labelledby="' + soy.$$escapeHtml(e.titleId) + '"' : "", ' role="dialog" class=" aui-layer aui-dialog2 aui-dialog2-', soy.$$escapeHtml(e.size ? e.size : "medium")), aui.renderExtraClasses(e, n, i), n.append('"', e.modal ? 'data-aui-modal="true"' : "", e.removeOnHide ? 'data-aui-remove-on-hide="true"' : "", 1 != e.visible ? 'aria-hidden="true"' : ""), aui.renderExtraAttributes(e, n, i), n.append(">", e.content ? e.content : "", "</section>"), t ? "" : "" + n
}, aui.dialog.dialog2Content = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return aui.dialog.dialog2Header({titleId: e.id ? e.id + "-dialog-title" : null, titleText: e.titleText, titleContent: e.titleContent, actionContent: e.headerActionContent, secondaryContent: e.headerSecondaryContent, modal: e.modal}, n, i), aui.dialog.dialog2Panel(e, n, i), aui.dialog.dialog2Footer({hintText: e.footerHintText, hintContent: e.footerHintContent, actionContent: e.footerActionContent}, n, i), t ? "" : "" + n
}, aui.dialog.dialog2Header = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<header", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui-dialog2-header'), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append("><h1 ", e.titleId ? ' id="' + soy.$$escapeHtml(e.titleId) + '"' : "", ' class="aui-dialog2-header-main">', e.titleText ? soy.$$escapeHtml(e.titleText) : "", e.titleContent ? e.titleContent : "", "</h1>", e.actionContent ? '<div class="aui-dialog2-header-actions">' + e.actionContent + "</div>" : "", e.secondaryContent ? '<div class="aui-dialog2-header-secondary">' + e.secondaryContent + "</div>" : "", 1 != e.modal ? '<a class="aui-dialog2-header-close"><span class="aui-icon aui-icon-small aui-iconfont-close-dialog">' + soy.$$escapeHtml("Close") + "</span></a>" : "", "</header>"), t ? "" : "" + n
}, aui.dialog.dialog2Footer = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<footer", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui-dialog2-footer'), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(">", e.actionContent ? '<div class="aui-dialog2-footer-actions">' + e.actionContent + "</div>" : "", e.hintText || e.hintContent ? '<div class="aui-dialog2-footer-hint">' + (e.hintText ? soy.$$escapeHtml(e.hintText) : "") + (e.hintContent ? e.hintContent : "") + "</div>" : "", "</footer>"), t ? "" : "" + n
}, aui.dialog.dialog2Panel = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<div", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui-dialog2-content'), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(">", e.content ? e.content : "", "</div>"), t ? "" : "" + n
}, aui === void 0)var aui = {};
if (aui.dropdown === void 0 && (aui.dropdown = {}), aui.dropdown.trigger = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<a", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui-dd-trigger'), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append('><span class="dropdown-text">', e.accessibilityText ? soy.$$escapeHtml(e.accessibilityText) : "", "</span>", 0 != e.showIcon ? '<span class="icon icon-dropdown"></span>' : "", "</a>"), t ? "" : "" + n
}, aui.dropdown.menu = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<", soy.$$escapeHtml(e.tagName ? e.tagName : "ul"), e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui-dropdown hidden'), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(">", e.content, "</", soy.$$escapeHtml(e.tagName ? e.tagName : "ul"), ">"), t ? "" : "" + n
}, aui.dropdown.parent = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<", soy.$$escapeHtml(e.tagName ? e.tagName : "div"), e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui-dd-parent'), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(">", e.content, "</", soy.$$escapeHtml(e.tagName ? e.tagName : "div"), ">"), t ? "" : "" + n
}, aui.dropdown.item = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<", soy.$$escapeHtml(e.tagName ? e.tagName : "li"), e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="dropdown-item'), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append('><a href="', soy.$$escapeHtml(e.url ? e.url : "#"), '">', soy.$$escapeHtml(e.text), "</a></", soy.$$escapeHtml(e.tagName ? e.tagName : "li"), ">"), t ? "" : "" + n
}, aui === void 0)var aui = {};
if (aui.dropdown2 === void 0 && (aui.dropdown2 = {}), aui.dropdown2.dropdown2 = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return aui.dropdown2.trigger(soy.$$augmentData(e.trigger, {menu: e.menu}), n, i), aui.dropdown2.contents(e.menu, n, i), t ? "" : "" + n
}, aui.dropdown2.trigger = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<", soy.$$escapeHtml(e.tagName ? e.tagName : "a"), e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui-dropdown2-trigger'), aui.renderExtraClasses(e, n, i), n.append('" aria-owns="', soy.$$escapeHtml(e.menu.id), '" aria-haspopup="true"', e.title ? ' title="' + soy.$$escapeHtml(e.title) + '"' : "", e.container ? ' data-container="' + soy.$$escapeHtml(e.container) + '"' : "", e.tagName && "a" != e.tagName || e.extraAttributes && ("[object Object]" !== Object.prototype.toString.call(e.extraAttributes) || e.extraAttributes.href || e.extraAttributes.tabindex) ? "" : ' tabindex="0"'), aui.renderExtraAttributes(e, n, i), n.append(">", e.content ? e.content : "", e.text ? soy.$$escapeHtml(e.text) : "", 0 != e.showIcon ? '<span class="icon ' + soy.$$escapeHtml(e.iconClasses ? e.iconClasses : "aui-icon-dropdown") + '">' + (e.iconText ? soy.$$escapeHtml(e.iconText) : "") + "</span>" : "", "</", soy.$$escapeHtml(e.tagName ? e.tagName : "a"), ">"), t ? "" : "" + n
}, aui.dropdown2.contents = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append('<div id="', soy.$$escapeHtml(e.id), '" class="aui-dropdown2'), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(">", e.content ? e.content : "", "</div>"), t ? "" : "" + n
}, aui.dropdown2.section = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<div", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui-dropdown2-section'), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(">", e.label ? "<strong>" + soy.$$escapeHtml(e.label) + "</strong>" : "", e.content, "</div>"), t ? "" : "" + n
}, aui === void 0)var aui = {};
if (aui.expander === void 0 && (aui.expander = {}), aui.expander.content = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<div", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui-expander-content'), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(e.initiallyExpanded ? ' aria-expanded="' + soy.$$escapeHtml(e.initiallyExpanded) + '"' : "", ">", e.content ? e.content : "", "</div>"), t ? "" : "" + n
}, aui.expander.trigger = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<", soy.$$escapeHtml(e.tag ? e.tag : "div"), e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", e.replaceText ? ' data-replace-text="' + soy.$$escapeHtml(e.replaceText) + '"' : "", e.replaceSelector ? ' data-replace-selector="' + soy.$$escapeHtml(e.replaceSelector) + '"' : "", ' class="aui-expander-trigger'), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(' aria-controls="', soy.$$escapeHtml(e.contentId), '"', e.collapsible ? ' data-collapsible="' + soy.$$escapeHtml(e.collapsible) + '"' : "", ">", e.content ? e.content : "", "</", soy.$$escapeHtml(e.tag ? e.tag : "div"), ">"), t ? "" : "" + n
}, aui.expander.revealText = function (e, t, i) {
    var n = t || new soy.StringBuilder, r = new soy.StringBuilder(soy.$$escapeHtml(e.contentContent));
    return aui.expander.trigger({id: e.triggerId, contentId: e.contentId, tag: "a", content: "<span class='reveal-text-trigger-text'>Show more</span>", replaceSelector: ".reveal-text-trigger-text", replaceText: "Show less", extraAttributes: e.triggerExtraAttributes, extraClasses: (e.triggerExtraClasses ? soy.$$escapeHtml(e.triggerExtraClasses) + "  " : "") + " aui-expander-reveal-text"}, r, i), aui.expander.content({id: e.contentId, content: "" + r, extraAttributes: e.contentExtraAttributes, extraClasses: e.contentExtraClasses}, n, i), t ? "" : "" + n
}, aui === void 0)var aui = {};
if (aui.form === void 0 && (aui.form = {}), aui.form.form = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<form", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui', e.isUnsectioned ? " unsectioned" : "", e.isLongLabels ? " long-label" : "", e.isTopLabels ? " top-label" : ""), aui.renderExtraClasses(e, n, i), n.append('" action="', soy.$$escapeHtml(e.action), '" method="', soy.$$escapeHtml(e.method ? e.method : "post"), '"', e.enctype ? 'enctype="' + soy.$$escapeHtml(e.enctype) + '"' : ""), aui.renderExtraAttributes(e, n, i), n.append(">", e.content, "</form>"), t ? "" : "" + n
}, aui.form.formDescription = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<div", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="field-group'), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(">", e.content, "</div>"), t ? "" : "" + n
}, aui.form.fieldset = function (e, t, i) {
    var n = t || new soy.StringBuilder, r = e.isInline || e.isDateSelect || e.isGroup || e.extraClasses;
    return n.append("<fieldset", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : ""), r && (n.append(' class="', soy.$$escapeHtml(e.isInline ? "inline" : e.isDateSelect ? "date-select" : e.isGroup ? "group" : "")), aui.renderExtraClasses(e, n, i), n.append('"')), aui.renderExtraAttributes(e, n, i), n.append("><legend><span>", e.legendContent, "</span></legend>", e.content, "</fieldset>"), t ? "" : "" + n
}, aui.form.fieldGroup = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<div", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="field-group'), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(">", e.content, "</div>"), t ? "" : "" + n
}, aui.form.buttons = function (e, t) {
    var i = t || new soy.StringBuilder;
    return i.append('<div class="buttons-container', e.alignment ? " " + soy.$$escapeHtml(e.alignment) : "", '"><div class="buttons">', e.content, "</div></div>"), t ? "" : "" + i
}, aui.form.label = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<label", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' for="', soy.$$escapeHtml(e.forField), '"'), e.extraClasses && (n.append(' class="'), aui.renderExtraClasses(e, n, i), n.append('"')), aui.renderExtraAttributes(e, n, i), n.append(">", e.content, e.isRequired ? '<span class="aui-icon icon-required"></span>' : "", "</label>"), t ? "" : "" + n
}, aui.form.input = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<input", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="', soy.$$escapeHtml("password" == e.type ? "text" : "submit" == e.type ? "button" : e.type)), aui.renderExtraClasses(e, n, i), n.append('" type="', soy.$$escapeHtml(e.type), '" name="', e.name ? soy.$$escapeHtml(e.name) : soy.$$escapeHtml(e.id), '"', e.value ? ' value="' + soy.$$escapeHtml(e.value) + '"' : "", "checkbox" != e.type && "radio" != e.type || !e.isChecked ? "" : ' checked="checked"', "text" == e.type && e.maxLength ? ' maxlength="' + soy.$$escapeHtml(e.maxLength) + '"' : "", "text" == e.type && e.size ? ' size="' + soy.$$escapeHtml(e.size) + '"' : "", "text" != e.type && "password" != e.type || !e.autocomplete ? "" : ' autocomplete="' + soy.$$escapeHtml(e.autocomplete) + '"', e.isDisabled ? " disabled" : "", e.isAutofocus ? " autofocus" : ""), aui.renderExtraAttributes(e, n, i), n.append("/>"), t ? "" : "" + n
}, aui.form.submit = function (e, t, i) {
    var n = t || new soy.StringBuilder, r = new soy.StringBuilder(e.name ? 'name="' + soy.$$escapeHtml(e.name) + '"' : "");
    return aui.renderExtraAttributes(e, r, i), aui.buttons.button({id: e.id, tagName: "input", inputType: "submit", text: e.text, type: e.type, href: e.href, isDisabled: e.isDisabled, isPressed: e.isPressed, iconType: e.iconType, iconText: e.iconText, iconClass: e.iconClass, dropdown2Target: e.dropdown2Target, splitButtonType: e.splitButtonType, extraClasses: e.extraClasses, extraAttributes: "" + r}, n, i), t ? "" : "" + n
}, aui.form.button = function (e, t, i) {
    var n = t || new soy.StringBuilder, r = new soy.StringBuilder(e.name ? 'name="' + soy.$$escapeHtml(e.name) + '"' : "");
    return aui.renderExtraAttributes(e, r, i), aui.buttons.button({id: e.id, tagName: e.tagName, inputType: e.inputType, text: e.text, type: e.type, href: e.href, isDisabled: e.isDisabled, isPressed: e.isPressed, iconType: e.iconType, iconText: e.iconText, iconClass: e.iconClass, dropdown2Target: e.dropdown2Target, splitButtonType: e.splitButtonType, extraClasses: e.extraClasses, extraAttributes: "" + r}, n, i), t ? "" : "" + n
}, aui.form.linkButton = function (e, t, i) {
    var n = t || new soy.StringBuilder, r = new soy.StringBuilder("cancel");
    aui.renderExtraClasses(e, r, i);
    var s = new soy.StringBuilder(e.name ? 'name="' + soy.$$escapeHtml(e.name) + '"' : "");
    return aui.renderExtraAttributes(e, s, i), aui.buttons.button({id: e.id, tagName: "a", inputType: e.inputType, text: e.text, type: "link", href: e.href ? e.href : e.url, isDisabled: e.isDisabled, isPressed: e.isPressed, iconType: e.iconType, iconText: e.iconText, iconClass: e.iconClass, dropdown2Target: e.dropdown2Target, splitButtonType: e.splitButtonType, extraClasses: "" + r, extraAttributes: "" + s}, n, i), t ? "" : "" + n
}, aui.form.textarea = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<textarea", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' name="', e.name ? soy.$$escapeHtml(e.name) : soy.$$escapeHtml(e.id), '" class="textarea'), aui.renderExtraClasses(e, n, i), n.append('"', e.rows ? ' rows="' + soy.$$escapeHtml(e.rows) + '"' : "", e.cols ? ' cols="' + soy.$$escapeHtml(e.cols) + '"' : "", e.autocomplete ? ' autocomplete="' + soy.$$escapeHtml(e.autocomplete) + '"' : "", e.isDisabled ? " disabled" : "", e.isAutofocus ? " autofocus" : ""), aui.renderExtraAttributes(e, n, i), n.append(">", e.value ? soy.$$escapeHtml(e.value) : "", "</textarea>"), t ? "" : "" + n
}, aui.form.select = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    n.append("<select", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' name="', e.name ? soy.$$escapeHtml(e.name) : soy.$$escapeHtml(e.id), '" class="', soy.$$escapeHtml(e.isMultiple ? "multi-select" : "select")), aui.renderExtraClasses(e, n, i), n.append('"', e.size ? ' size="' + soy.$$escapeHtml(e.size) + '"' : "", e.isDisabled ? " disabled" : "", e.isAutofocus ? " autofocus" : "", e.isMultiple ? " multiple" : ""), aui.renderExtraAttributes(e, n, i), n.append(">");
    for (var r = e.options, s = r.length, a = 0; s > a; a++) {
        var o = r[a];
        aui.form.optionOrOptgroup(o, n, i)
    }
    return n.append("</select>"), t ? "" : "" + n
}, aui.form.optionOrOptgroup = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    if (e.options) {
        n.append('<optgroup label="', soy.$$escapeHtml(e.text), '">');
        for (var r = e.options, s = r.length, a = 0; s > a; a++) {
            var o = r[a];
            aui.form.optionOrOptgroup(o, n, i)
        }
        n.append("</optgroup>")
    } else n.append('<option value="', soy.$$escapeHtml(e.value), '" ', e.selected ? "selected" : "", ">", soy.$$escapeHtml(e.text), "</option>");
    return t ? "" : "" + n
}, aui.form.value = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<span", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="field-value'), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(">", e.content, "</span>"), t ? "" : "" + n
}, aui.form.field = function (e, t, i) {
    var n = t || new soy.StringBuilder, r = "checkbox" == e.type || "radio" == e.type, s = e.fieldWidth ? e.fieldWidth + "-field" : "";
    switch (n.append('<div class="', r ? soy.$$escapeHtml(e.type) : "field-group"), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(">"), e.labelContent && !r && aui.form.label({forField: e.id, isRequired: e.isRequired, content: e.labelContent}, n, i), e.type) {
        case"textarea":
            aui.form.textarea({id: e.id, name: e.name, value: e.value, rows: e.rows, cols: e.cols, autocomplete: e.autocomplete, isDisabled: e.isDisabled ? !0 : !1, isAutofocus: e.isAutofocus, extraClasses: s}, n, i);
            break;
        case"select":
            aui.form.select({id: e.id, name: e.name, options: e.options, isMultiple: e.isMultiple, size: e.size, isDisabled: e.isDisabled ? !0 : !1, isAutofocus: e.isAutofocus, extraClasses: s}, n, i);
            break;
        case"value":
            aui.form.value({id: e.id, content: soy.$$escapeHtml(e.value)}, n, i);
            break;
        case"text":
        case"password":
        case"file":
        case"radio":
        case"checkbox":
        case"button":
        case"submit":
        case"reset":
            aui.form.input({id: e.id, name: e.name, type: e.type, value: e.value, maxLength: e.maxLength, size: e.size, autocomplete: e.autocomplete, isChecked: e.isChecked, isDisabled: e.isDisabled ? !0 : !1, isAutofocus: e.isAutofocus, extraClasses: s}, n, i)
    }
    if (e.labelContent && r && aui.form.label({forField: e.id, isRequired: e.isRequired, content: e.labelContent}, n, i), e.descriptionText && aui.form.fieldDescription({message: e.descriptionText}, n, i), e.errorTexts)for (var a = e.errorTexts, o = a.length, l = 0; o > l; l++) {
        var c = a[l];
        aui.form.fieldError({message: c}, n, i)
    }
    return n.append("</div>"), t ? "" : "" + n
}, aui.form.fieldError = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append('<div class="error'), aui.renderExtraClasses(e, n, i), n.append('">', soy.$$escapeHtml(e.message), "</div>"), t ? "" : "" + n
}, aui.form.fieldDescription = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append('<div class="description'), aui.renderExtraClasses(e, n, i), n.append('">', soy.$$escapeHtml(e.message), "</div>"), t ? "" : "" + n
}, aui.form.textField = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return aui.form.field({id: e.id, name: e.name, type: "text", labelContent: e.labelContent, value: e.value, maxLength: e.maxLength, size: e.size, autocomplete: e.autocomplete, isRequired: e.isRequired, isDisabled: e.isDisabled, isAutofocus: e.isAutofocus, descriptionText: e.descriptionText, errorTexts: e.errorTexts, extraClasses: e.extraClasses, extraAttributes: e.extraAttributes, fieldWidth: e.fieldWidth}, n, i), t ? "" : "" + n
}, aui.form.textareaField = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return aui.form.field({id: e.id, name: e.name, type: "textarea", labelContent: e.labelContent, value: e.value, rows: e.rows, cols: e.cols, autocomplete: e.autocomplete, isRequired: e.isRequired, isDisabled: e.isDisabled, isAutofocus: e.isAutofocus, descriptionText: e.descriptionText, errorTexts: e.errorTexts, extraClasses: e.extraClasses, extraAttributes: e.extraAttributes, fieldWidth: e.fieldWidth}, n, i), t ? "" : "" + n
}, aui.form.passwordField = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return aui.form.field({id: e.id, name: e.name, type: "password", labelContent: e.labelContent, value: e.value, autocomplete: e.autocomplete, isRequired: e.isRequired, isDisabled: e.isDisabled, isAutofocus: e.isAutofocus, descriptionText: e.descriptionText, errorTexts: e.errorTexts, extraClasses: e.extraClasses, extraAttributes: e.extraAttributes, fieldWidth: e.fieldWidth}, n, i), t ? "" : "" + n
}, aui.form.fileField = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return aui.form.field({id: e.id, name: e.name, type: "file", labelContent: e.labelContent, value: e.value, isRequired: e.isRequired, isDisabled: e.isDisabled, isAutofocus: e.isAutofocus, descriptionText: e.descriptionText, errorTexts: e.errorTexts, extraClasses: e.extraClasses, extraAttributes: e.extraAttributes}, n, i), t ? "" : "" + n
}, aui.form.selectField = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return aui.form.field({id: e.id, name: e.name, type: "select", labelContent: e.labelContent, options: e.options, isMultiple: e.isMultiple, size: e.size, isRequired: e.isRequired, isDisabled: e.isDisabled, isAutofocus: e.isAutofocus, descriptionText: e.descriptionText, errorTexts: e.errorTexts, extraClasses: e.extraClasses, extraAttributes: e.extraAttributes, fieldWidth: e.fieldWidth}, n, i), t ? "" : "" + n
}, aui.form.checkboxField = function (e, t, i) {
    for (var n = t || new soy.StringBuilder, r = new soy.StringBuilder(e.isMatrix ? '<div class="matrix">' : ""), s = e.fields, a = s.length, o = 0; a > o; o++) {
        var l = s[o];
        aui.form.field(soy.$$augmentData(l, {type: "checkbox", id: l.id, name: l.name, labelContent: soy.$$escapeHtml(l.labelText), isChecked: l.isChecked, isDisabled: l.isDisabled, isAutofocus: l.isAutofocus, descriptionText: l.descriptionText, errorTexts: l.errorTexts, extraClasses: l.extraClasses, extraAttributes: l.extraAttributes}), r, i)
    }
    return r.append(e.isMatrix ? "</div>" : ""), (e.descriptionText || e.errorTexts && e.errorTexts.length) && aui.form.field({descriptionText: e.descriptionText, errorTexts: e.errorTexts, isDisabled: !1}, r, i), aui.form.fieldset({legendContent: e.legendContent + (e.isRequired ? '<span class="aui-icon icon-required"></span>' : ""), isGroup: !0, id: e.id, extraClasses: e.extraClasses, extraAttributes: e.extraAttributes, content: "" + r}, n, i), t ? "" : "" + n
}, aui.form.radioField = function (e, t, i) {
    for (var n = t || new soy.StringBuilder, r = new soy.StringBuilder(e.isMatrix ? '<div class="matrix">' : ""), s = e.fields, a = s.length, o = 0; a > o; o++) {
        var l = s[o];
        aui.form.field(soy.$$augmentData(l, {type: "radio", name: e.name ? e.name : e.id, value: l.value, id: l.id, labelContent: soy.$$escapeHtml(l.labelText), isChecked: l.isChecked, isDisabled: l.isDisabled, isAutofocus: l.isAutofocus, descriptionText: l.descriptionText, errorTexts: l.errorTexts, extraClasses: l.extraClasses, extraAttributes: l.extraAttributes}), r, i)
    }
    return r.append(e.isMatrix ? "</div>" : ""), (e.descriptionText || e.errorTexts && e.errorTexts.length) && aui.form.field({descriptionText: e.descriptionText, errorTexts: e.errorTexts, isDisabled: !1}, r, i), aui.form.fieldset({legendContent: e.legendContent + (e.isRequired ? '<span class="aui-icon icon-required"></span>' : ""), isGroup: !0, id: e.id, extraClasses: e.extraClasses, extraAttributes: e.extraAttributes, content: "" + r}, n, i), t ? "" : "" + n
}, aui.form.valueField = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return aui.form.field({id: e.id, type: "value", value: e.value, labelContent: e.labelContent, isRequired: e.isRequired, descriptionText: e.descriptionText, errorTexts: e.errorTexts, extraClasses: e.extraClasses, extraAttributes: e.extraAttributes}, n, i), t ? "" : "" + n
}, aui === void 0)var aui = {};
if (aui.group === void 0 && (aui.group = {}), aui.group.group = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<", soy.$$escapeHtml(e.tagName ? e.tagName : "div"), e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui-group', e.isSplit ? " aui-group-split" : ""), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(">", e.content, "</", soy.$$escapeHtml(e.tagName ? e.tagName : "div"), ">"), t ? "" : "" + n
}, aui.group.item = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<", soy.$$escapeHtml(e.tagName ? e.tagName : "div"), e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui-item'), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(">", e.content, "</", soy.$$escapeHtml(e.tagName ? e.tagName : "div"), ">"), t ? "" : "" + n
}, aui === void 0)var aui = {};
if (aui.icons === void 0 && (aui.icons = {}), aui.icons.icon = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<", soy.$$escapeHtml(e.tagName ? e.tagName : "span"), e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui-icon', e.useIconFont ? " aui-icon-" + soy.$$escapeHtml(e.size ? e.size : "small") : "", " aui", soy.$$escapeHtml(e.useIconFont ? "-iconfont" : "-icon"), soy.$$escapeHtml(e.iconFontSet ? "-" + e.iconFontSet : ""), "-", soy.$$escapeHtml(e.icon)), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(">", e.accessibilityText ? soy.$$escapeHtml(e.accessibilityText) : "", "</", soy.$$escapeHtml(e.tagName ? e.tagName : "span"), ">"), t ? "" : "" + n
}, aui === void 0)var aui = {};
if (aui.labels === void 0 && (aui.labels = {}), aui.labels.label = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return e.url && 1 == e.isCloseable ? (n.append("<span", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui-label aui-label-closeable aui-label-split'), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append('><a class="aui-label-split-main" href="', soy.$$escapeHtml(e.url), '">', soy.$$escapeHtml(e.text), '</a><span class="aui-label-split-close" >'), aui.labels.closeIcon(e, n, i), n.append("</span></span>")) : (n.append("<", soy.$$escapeHtml(e.url ? "a" : "span"), e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui-label', e.isCloseable ? " aui-label-closeable" : ""), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(e.url ? ' href="' + soy.$$escapeHtml(e.url) + '"' : "", ">", soy.$$escapeHtml(e.text)), e.isCloseable && aui.labels.closeIcon(e, n, i), n.append("</", soy.$$escapeHtml(e.url ? "a" : "span"), ">")), t ? "" : "" + n
}, aui.labels.closeIcon = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append('<span tabindex="0" class="aui-icon aui-icon-close"'), 0 != e.hasTitle && (n.append(' title="'), aui.labels.closeIconText(e, n, i), n.append('"')), n.append(">"), aui.labels.closeIconText(e, n, i), n.append("</span>"), t ? "" : "" + n
}, aui.labels.closeIconText = function (e, t) {
    var i = t || new soy.StringBuilder;
    return i.append(e.closeIconText ? soy.$$escapeHtml(e.closeIconText) : "(" + soy.$$escapeHtml("Remove") + " " + soy.$$escapeHtml(e.text) + ")"), t ? "" : "" + i
}, aui === void 0)var aui = {};
if (aui.message === void 0 && (aui.message = {}), aui.message.info = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return aui.message.message(soy.$$augmentData(e, {type: "info"}), n, i), t ? "" : "" + n
}, aui.message.warning = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return aui.message.message(soy.$$augmentData(e, {type: "warning"}), n, i), t ? "" : "" + n
}, aui.message.error = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return aui.message.message(soy.$$augmentData(e, {type: "error"}), n, i), t ? "" : "" + n
}, aui.message.success = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return aui.message.message(soy.$$augmentData(e, {type: "success"}), n, i), t ? "" : "" + n
}, aui.message.hint = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return aui.message.message(soy.$$augmentData(e, {type: "hint"}), n, i), t ? "" : "" + n
}, aui.message.generic = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return aui.message.message(soy.$$augmentData(e, {type: "generic"}), n, i), t ? "" : "" + n
}, aui.message.message = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<", soy.$$escapeHtml(e.tagName ? e.tagName : "div"), e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui-message ', soy.$$escapeHtml(e.type ? e.type : "generic"), e.isCloseable ? " closeable" : "", e.isShadowed ? " shadowed" : ""), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(">", e.titleContent ? '<p class="title"><strong>' + e.titleContent + "</strong></p>" : "", e.content, '<span class="aui-icon icon-', soy.$$escapeHtml(e.type ? e.type : "generic"), '"></span>', e.isCloseable ? '<span class="aui-icon icon-close" role="button" tabindex="0"></span>' : "", "</", soy.$$escapeHtml(e.tagName ? e.tagName : "div"), ">"), t ? "" : "" + n
}, aui === void 0)var aui = {};
if (aui.page === void 0 && (aui.page = {}), aui.page.document = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append('<!DOCTYPE html><html lang="', soy.$$escapeHtml(i.language ? i.language : "en"), '"><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><title>', soy.$$escapeHtml(e.windowTitle), "</title>", e.headContent ? e.headContent : "", "</head><body"), e.pageType ? "generic" == e.pageType ? e.extraClasses && (n.append(' class="'), aui.renderExtraClasses(e, n, i), n.append('"')) : "focused" == e.pageType ? (n.append(' class="aui-page-focused aui-page-focused-', soy.$$escapeHtml(e.focusedPageSize ? e.focusedPageSize : "xlarge")), aui.renderExtraClasses(e, n, i), n.append('"')) : (n.append(' class="aui-page-', soy.$$escapeHtml(e.pageType)), aui.renderExtraClasses(e, n, i), n.append('"')) : (n.append(' class="'), aui.renderExtraClasses(e, n, i), n.append('"')), aui.renderExtraAttributes(e, n, i), n.append(">", e.content, "</body></html>"), t ? "" : "" + n
}, aui.page.page = function (e, t) {
    var i = t || new soy.StringBuilder;
    return i.append('<div id="page"><header id="header" role="banner">', e.headerContent, '</header><!-- #header --><section id="content" role="main">', e.contentContent, '</section><!-- #content --><footer id="footer" role="contentinfo">', e.footerContent, "</footer><!-- #footer --></div><!-- #page -->"), t ? "" : "" + i
}, aui.page.header = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<nav", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui-header aui-dropdown2-trigger-group'), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(' role="navigation"><div class="aui-header-inner">', e.headerBeforeContent ? '<div class="aui-header-before">' + e.headerBeforeContent + "</div>" : "", '<div class="aui-header-primary"><h1 id="logo" class="aui-header-logo', e.headerLogoImageUrl ? " aui-header-logo-custom" : e.logo ? " aui-header-logo-" + soy.$$escapeHtml(e.logo) : "", '"><a href="', soy.$$escapeHtml(e.headerLink ? e.headerLink : "/"), '">', e.headerLogoImageUrl ? '<img src="' + soy.$$escapeHtml(e.headerLogoImageUrl) + '" alt="' + soy.$$escapeHtml(e.headerLogoText) + '" />' : '<span class="aui-header-logo-device">' + soy.$$escapeHtml(e.headerLogoText ? e.headerLogoText : "") + "</span>", e.headerText ? '<span class="aui-header-logo-text">' + soy.$$escapeHtml(e.headerText) + "</span>" : "", "</a></h1>", e.primaryNavContent ? e.primaryNavContent : "", "</div>", e.secondaryNavContent ? '<div class="aui-header-secondary">' + e.secondaryNavContent + "</div>" : "", e.headerAfterContent ? '<div class="aui-header-after">' + e.headerAfterContent + "</div>" : "", "</div><!-- .aui-header-inner--></nav><!-- .aui-header -->"), t ? "" : "" + n
}, aui.page.pagePanel = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<", soy.$$escapeHtml(e.tagName ? e.tagName : "div"), ' class="aui-page-panel'), aui.renderExtraClasses(e, n, i), n.append('"', e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : ""), aui.renderExtraAttributes(e, n, i), n.append('><div class="aui-page-panel-inner">', e.content, "</div><!-- .aui-page-panel-inner --></", soy.$$escapeHtml(e.tagName ? e.tagName : "div"), "><!-- .aui-page-panel -->"), t ? "" : "" + n
}, aui.page.pagePanelNav = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<", soy.$$escapeHtml(e.tagName ? e.tagName : "div"), ' class="aui-page-panel-nav'), aui.renderExtraClasses(e, n, i), n.append('"', e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : ""), aui.renderExtraAttributes(e, n, i), n.append(">", e.content, "</", soy.$$escapeHtml(e.tagName ? e.tagName : "div"), "><!-- .aui-page-panel-nav -->"), t ? "" : "" + n
}, aui.page.pagePanelContent = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<", soy.$$escapeHtml(e.tagName ? e.tagName : "section"), ' class="aui-page-panel-content'), aui.renderExtraClasses(e, n, i), n.append('"', e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : ""), aui.renderExtraAttributes(e, n, i), n.append(">", e.content, "</", soy.$$escapeHtml(e.tagName ? e.tagName : "section"), "><!-- .aui-page-panel-content -->"), t ? "" : "" + n
}, aui.page.pagePanelSidebar = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<", soy.$$escapeHtml(e.tagName ? e.tagName : "aside"), ' class="aui-page-panel-sidebar'), aui.renderExtraClasses(e, n, i), n.append('"', e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : ""), aui.renderExtraAttributes(e, n, i), n.append(">", e.content, "</", soy.$$escapeHtml(e.tagName ? e.tagName : "aside"), "><!-- .aui-page-panel-sidebar -->"), t ? "" : "" + n
}, aui.page.pagePanelItem = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<", soy.$$escapeHtml(e.tagName ? e.tagName : "section"), ' class="aui-page-panel-item'), aui.renderExtraClasses(e, n, i), n.append('"', e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : ""), aui.renderExtraAttributes(e, n, i), n.append(">", e.content, "</", soy.$$escapeHtml(e.tagName ? e.tagName : "section"), "><!-- .aui-page-panel-item -->"), t ? "" : "" + n
}, aui.page.pageHeader = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append('<header class="aui-page-header'), aui.renderExtraClasses(e, n, i), n.append('"', e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : ""), aui.renderExtraAttributes(e, n, i), n.append('><div class="aui-page-header-inner">', e.content, "</div><!-- .aui-page-header-inner --></header><!-- .aui-page-header -->"), t ? "" : "" + n
}, aui.page.pageHeaderImage = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append('<div class="aui-page-header-image'), aui.renderExtraClasses(e, n, i), n.append('"', e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : ""), aui.renderExtraAttributes(e, n, i), n.append(">", e.content, "</div><!-- .aui-page-header-image -->"), t ? "" : "" + n
}, aui.page.pageHeaderMain = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append('<div class="aui-page-header-main'), aui.renderExtraClasses(e, n, i), n.append('"', e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : ""), aui.renderExtraAttributes(e, n, i), n.append(">", e.content, "</div><!-- .aui-page-header-main -->"), t ? "" : "" + n
}, aui.page.pageHeaderActions = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append('<div class="aui-page-header-actions'), aui.renderExtraClasses(e, n, i), n.append('"', e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : ""), aui.renderExtraAttributes(e, n, i), n.append(">", e.content, "</div><!-- .aui-page-header-actions -->"), t ? "" : "" + n
}, aui === void 0)var aui = {};
if (aui.panel = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<", soy.$$escapeHtml(e.tagName ? e.tagName : "div"), e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui-panel'), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(">", e.content, "</", soy.$$escapeHtml(e.tagName ? e.tagName : "div"), ">"), t ? "" : "" + n
}, aui === void 0)var aui = {};
if (aui.progressTracker === void 0 && (aui.progressTracker = {}), aui.progressTracker.progressTracker = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    n.append("<ol", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui-progress-tracker', e.isInverted ? " aui-progress-tracker-inverted" : ""), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(">");
    for (var r = new soy.StringBuilder, s = e.steps, a = s.length, o = 0; a > o; o++) {
        var l = s[o];
        if (l.isCurrent)for (var c = e.steps, u = c.length, d = 0; u > d; d++) {
            var h = c[d];
            aui.progressTracker.step(soy.$$augmentData(h, {width: Math.round(1e4 * (100 / e.steps.length)) / 1e4, href: o > d ? h.href : null}), r, i)
        }
    }
    return aui.progressTracker.content({steps: e.steps, content: "" + r}, n, i), n.append("</ol>"), t ? "" : "" + n
}, aui.progressTracker.content = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    if ("" != e.content)n.append(e.content); else for (var r = e.steps, s = r.length, a = 0; s > a; a++) {
        var o = r[a];
        aui.progressTracker.step(soy.$$augmentData(o, {isCurrent: 0 == a, width: Math.round(1e4 * (100 / e.steps.length)) / 1e4, href: null}), n, i)
    }
    return t ? "" : "" + n
}, aui.progressTracker.step = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<li", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui-progress-tracker-step', e.isCurrent ? " aui-progress-tracker-step-current" : ""), aui.renderExtraClasses(e, n, i), n.append('" style="width: ', soy.$$escapeHtml(e.width), '%;"'), aui.renderExtraAttributes(e, n, i), n.append("><", soy.$$escapeHtml(e.href ? "a" : "span"), e.href ? ' href="' + soy.$$escapeHtml(e.href) + '"' : "", ">", soy.$$escapeHtml(e.text), "</", soy.$$escapeHtml(e.href ? "a" : "span"), "></li>"), t ? "" : "" + n
}, aui === void 0)var aui = {};
if (aui.table = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<table", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui'), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(">", e.columnsContent ? e.columnsContent : "", e.captionContent ? "<caption>" + e.captionContent + "</caption>" : "", e.theadContent ? "<thead>" + e.theadContent + "</thead>" : "", e.tfootContent ? "<tfoot>" + e.tfootContent + "</tfoot>" : "", e.contentIncludesTbody ? "" : "<tbody>", e.content, e.contentIncludesTbody ? "" : "</tbody>", "</table>"), t ? "" : "" + n
}, aui === void 0)var aui = {};
if (aui.tabs = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    n.append("<", soy.$$escapeHtml(e.tagName ? e.tagName : "div"), e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui-tabs ', soy.$$escapeHtml(e.isVertical ? "vertical-tabs" : "horizontal-tabs"), e.isDisabled ? " aui-tabs-disabled" : ""), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append('><ul class="tabs-menu">');
    for (var r = e.menuItems, s = r.length, a = 0; s > a; a++) {
        var o = r[a];
        aui.tabMenuItem(o, n, i)
    }
    return n.append("</ul>", e.paneContent, "</", soy.$$escapeHtml(e.tagName ? e.tagName : "div"), ">"), t ? "" : "" + n
}, aui.tabMenuItem = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<li", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="menu-item', e.isActive ? " active-tab" : ""), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append('><a href="', soy.$$escapeHtml(e.url), '"><strong>', soy.$$escapeHtml(e.text), "</strong></a></li>"), t ? "" : "" + n
}, aui.tabPane = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<", soy.$$escapeHtml(e.tagName ? e.tagName : "div"), e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="tabs-pane', e.isActive ? " active-pane" : ""), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(">", e.content, "</", soy.$$escapeHtml(e.tagName ? e.tagName : "div"), ">"), t ? "" : "" + n
}, aui === void 0)var aui = {};
if (aui.toolbar === void 0 && (aui.toolbar = {}), aui.toolbar.toolbar = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<", soy.$$escapeHtml(e.tagName ? e.tagName : "div"), e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui-toolbar'), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(">", e.content, "</", soy.$$escapeHtml(e.tagName ? e.tagName : "div"), ">"), t ? "" : "" + n
}, aui.toolbar.split = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<", soy.$$escapeHtml(e.tagName ? e.tagName : "div"), e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="toolbar-split toolbar-split-', soy.$$escapeHtml(e.split)), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(">", e.content, "</", soy.$$escapeHtml(e.tagName ? e.tagName : "div"), ">"), t ? "" : "" + n
}, aui.toolbar.group = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<ul", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="toolbar-group'), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(">", e.content, "</ul>"), t ? "" : "" + n
}, aui.toolbar.item = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<li ", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="toolbar-item', e.isPrimary ? " primary" : "", e.isActive ? " active" : ""), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(">", e.content, "</li>"), t ? "" : "" + n
}, aui.toolbar.trigger = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<a", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="toolbar-trigger'), aui.renderExtraClasses(e, n, i), n.append('" href="', soy.$$escapeHtml(e.url ? e.url : "#"), '"', e.title ? ' title="' + soy.$$escapeHtml(e.title) + '"' : ""), aui.renderExtraAttributes(e, n, i), n.append(">", e.content, "</a>"), t ? "" : "" + n
}, aui.toolbar.button = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    if (null == e)n.append("Either $text or both $title and $iconClass must be provided."); else {
        var r = new soy.StringBuilder;
        aui.toolbar.trigger({url: e.url, title: e.title, content: (e.iconClass ? '<span class="icon ' + soy.$$escapeHtml(e.iconClass) + '"></span>' : "") + (e.text ? '<span class="trigger-text">' + soy.$$escapeHtml(e.text) + "</span>" : "")}, r, i), aui.toolbar.item({isActive: e.isActive, isPrimary: e.isPrimary, id: e.id, extraClasses: e.extraClasses, extraAttributes: e.extraAttributes, content: "" + r}, n, i)
    }
    return t ? "" : "" + n
}, aui.toolbar.link = function (e, t, i) {
    var n = t || new soy.StringBuilder, r = new soy.StringBuilder("toolbar-item-link");
    aui.renderExtraClasses(e, r, i);
    var s = new soy.StringBuilder;
    return aui.toolbar.trigger({url: e.url, content: soy.$$escapeHtml(e.text)}, s, i), aui.toolbar.item({id: e.id, extraClasses: "" + r, extraAttributes: e.extraAttributes, content: "" + s}, n, i), t ? "" : "" + n
}, aui.toolbar.dropdownInternal = function (e, t, i) {
    var n = t || new soy.StringBuilder, r = new soy.StringBuilder(e.itemClass);
    aui.renderExtraClasses(e, r, i);
    var s = new soy.StringBuilder(e.splitButtonContent ? e.splitButtonContent : ""), a = new soy.StringBuilder;
    return aui.dropdown.trigger({extraClasses: "toolbar-trigger", accessibilityText: e.text}, a, i), aui.dropdown.menu({content: e.dropdownItemsContent}, a, i), aui.dropdown.parent({content: "" + a}, s, i), aui.toolbar.item({isPrimary: e.isPrimary, id: e.id, extraClasses: "" + r, extraAttributes: e.extraAttributes, content: "" + s}, n, i), t ? "" : "" + n
}, aui.toolbar.dropdown = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return aui.toolbar.dropdownInternal({isPrimary: e.isPrimary, id: e.id, itemClass: "toolbar-dropdown", extraClasses: e.extraClasses, extraAttributes: e.extraAttributes, text: e.text, dropdownItemsContent: e.dropdownItemsContent}, n, i), t ? "" : "" + n
}, aui.toolbar.splitButton = function (e, t, i) {
    var n = t || new soy.StringBuilder, r = new soy.StringBuilder;
    return aui.toolbar.trigger({url: e.url, content: soy.$$escapeHtml(e.text)}, r, i), aui.toolbar.dropdownInternal({isPrimary: e.isPrimary, id: e.id, itemClass: "toolbar-splitbutton", extraClasses: e.extraClasses, extraAttributes: e.extraAttributes, dropdownItemsContent: e.dropdownItemsContent, splitButtonContent: "" + r}, n, i), t ? "" : "" + n
}, aui === void 0)var aui = {};
aui.toolbar2 === void 0 && (aui.toolbar2 = {}), aui.toolbar2.toolbar2 = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<div", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui-toolbar2'), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(' role="toolbar"><div class="aui-toolbar2-inner">', e.content, "</div></div>"), t ? "" : "" + n
}, aui.toolbar2.item = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<div", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui-toolbar2-', soy.$$escapeHtml(e.item)), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(">", e.content, "</div>"), t ? "" : "" + n
}, aui.toolbar2.group = function (e, t, i) {
    var n = t || new soy.StringBuilder;
    return n.append("<div", e.id ? ' id="' + soy.$$escapeHtml(e.id) + '"' : "", ' class="aui-toolbar2-group'), aui.renderExtraClasses(e, n, i), n.append('"'), aui.renderExtraAttributes(e, n, i), n.append(">", e.content, "</div>"), t ? "" : "" + n
};