/*! Tripetto Collector 1.7.0 - Copyright (C) 2019 Tripetto B.V. - All Rights Reserved */
!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("TripettoCollector", [], t) : "object" == typeof exports ? exports.TripettoCollector = t() : e.TripettoCollector = t()
}(window, (function () {
    return function (e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var i = t[r] = {i: r, l: !1, exports: {}};
            return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }

        return n.m = e, n.c = t, n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
        }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function (t) {
                return e[t]
            }.bind(null, i));
            return r
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 64)
    }([function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), n(1).__exportStar(n(9), t);
        var r = n(68);
        t.Console = r.Console;
        var i = n(69);
        t.Environment = i.Environment;
        var o = n(31);
        t.Num = o.Num;
        var s = n(20);
        t.Str = s.Str;
        var a = n(14);
        t.DateTime = a.DateTime;
        var u = n(70);
        t.Flags = u.Flags;
        var c = n(32);
        t.Enumerator = c.Enumerator;
        var l = n(71);
        t.Limiter = l.Limiter, t.Throttle = l.Throttle, t.Debounce = l.Debounce;
        var h = n(72);
        t.Stack = h.Stack, t.DEBUG = !1, t.enableDebugging = function () {
            t.DEBUG = !0
        }, t.disableDebugging = function () {
            t.DEBUG = !1
        }
    }, function (e, t, n) {
        (function (n) {
            var r, i, o, s, a, u, c, l, h, p, f, m, d, g, b, y, _, v, S, k, P;
            !function (O) {
                var M = "object" == typeof n ? n : "object" == typeof self ? self : "object" == typeof this ? this : {};

                function C(e, t) {
                    return e !== M && ("function" == typeof Object.create ? Object.defineProperty(e, "__esModule", {value: !0}) : e.__esModule = !0), function (n, r) {
                        return e[n] = t ? t(n, r) : r
                    }
                }

                void 0 === (r = function (e) {
                    var t, n;
                    t = C(M, C(e)), n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    }, i = function (e, t) {
                        function r() {
                            this.constructor = e
                        }

                        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                    }, o = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, s = function (e, t) {
                        var n = {};
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var i = 0;
                            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                        }
                        return n
                    }, a = function (e, t, n, r) {
                        var i, o = arguments.length,
                            s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
                        return o > 3 && s && Object.defineProperty(t, n, s), s
                    }, u = function (e, t) {
                        return function (n, r) {
                            t(n, r, e)
                        }
                    }, c = function (e, t) {
                        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                    }, l = function (e, t, n, r) {
                        return new (n || (n = Promise))((function (i, o) {
                            function s(e) {
                                try {
                                    u(r.next(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function a(e) {
                                try {
                                    u(r.throw(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function u(e) {
                                e.done ? i(e.value) : new n((function (t) {
                                    t(e.value)
                                })).then(s, a)
                            }

                            u((r = r.apply(e, t || [])).next())
                        }))
                    }, h = function (e, t) {
                        var n, r, i, o, s = {
                            label: 0, sent: function () {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            }, trys: [], ops: []
                        };
                        return o = {
                            next: a(0),
                            throw: a(1),
                            return: a(2)
                        }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                            return this
                        }), o;

                        function a(o) {
                            return function (a) {
                                return function (o) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; s;) try {
                                        if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                        switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                            case 0:
                                            case 1:
                                                i = o;
                                                break;
                                            case 4:
                                                return s.label++, {value: o[1], done: !1};
                                            case 5:
                                                s.label++, r = o[1], o = [0];
                                                continue;
                                            case 7:
                                                o = s.ops.pop(), s.trys.pop();
                                                continue;
                                            default:
                                                if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                    s = 0;
                                                    continue
                                                }
                                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                    s.label = o[1];
                                                    break
                                                }
                                                if (6 === o[0] && s.label < i[1]) {
                                                    s.label = i[1], i = o;
                                                    break
                                                }
                                                if (i && s.label < i[2]) {
                                                    s.label = i[2], s.ops.push(o);
                                                    break
                                                }
                                                i[2] && s.ops.pop(), s.trys.pop();
                                                continue
                                        }
                                        o = t.call(e, s)
                                    } catch (e) {
                                        o = [6, e], r = 0
                                    } finally {
                                        n = i = 0
                                    }
                                    if (5 & o[0]) throw o[1];
                                    return {value: o[0] ? o[1] : void 0, done: !0}
                                }([o, a])
                            }
                        }
                    }, p = function (e, t) {
                        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
                    }, f = function (e) {
                        var t = "function" == typeof Symbol && e[Symbol.iterator], n = 0;
                        return t ? t.call(e) : {
                            next: function () {
                                return e && n >= e.length && (e = void 0), {value: e && e[n++], done: !e}
                            }
                        }
                    }, m = function (e, t) {
                        var n = "function" == typeof Symbol && e[Symbol.iterator];
                        if (!n) return e;
                        var r, i, o = n.call(e), s = [];
                        try {
                            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
                        } catch (e) {
                            i = {error: e}
                        } finally {
                            try {
                                r && !r.done && (n = o.return) && n.call(o)
                            } finally {
                                if (i) throw i.error
                            }
                        }
                        return s
                    }, d = function () {
                        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(m(arguments[t]));
                        return e
                    }, g = function () {
                        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                        var r = Array(e), i = 0;
                        for (t = 0; t < n; t++) for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++) r[i] = o[s];
                        return r
                    }, b = function (e) {
                        return this instanceof b ? (this.v = e, this) : new b(e)
                    }, y = function (e, t, n) {
                        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                        var r, i = n.apply(e, t || []), o = [];
                        return r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function () {
                            return this
                        }, r;

                        function s(e) {
                            i[e] && (r[e] = function (t) {
                                return new Promise((function (n, r) {
                                    o.push([e, t, n, r]) > 1 || a(e, t)
                                }))
                            })
                        }

                        function a(e, t) {
                            try {
                                (n = i[e](t)).value instanceof b ? Promise.resolve(n.value.v).then(u, c) : l(o[0][2], n)
                            } catch (e) {
                                l(o[0][3], e)
                            }
                            var n
                        }

                        function u(e) {
                            a("next", e)
                        }

                        function c(e) {
                            a("throw", e)
                        }

                        function l(e, t) {
                            e(t), o.shift(), o.length && a(o[0][0], o[0][1])
                        }
                    }, _ = function (e) {
                        var t, n;
                        return t = {}, r("next"), r("throw", (function (e) {
                            throw e
                        })), r("return"), t[Symbol.iterator] = function () {
                            return this
                        }, t;

                        function r(r, i) {
                            t[r] = e[r] ? function (t) {
                                return (n = !n) ? {value: b(e[r](t)), done: "return" === r} : i ? i(t) : t
                            } : i
                        }
                    }, v = function (e) {
                        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                        var t, n = e[Symbol.asyncIterator];
                        return n ? n.call(e) : (e = f(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function () {
                            return this
                        }, t);

                        function r(n) {
                            t[n] = e[n] && function (t) {
                                return new Promise((function (r, i) {
                                    !function (e, t, n, r) {
                                        Promise.resolve(r).then((function (t) {
                                            e({value: t, done: n})
                                        }), t)
                                    }(r, i, (t = e[n](t)).done, t.value)
                                }))
                            }
                        }
                    }, S = function (e, t) {
                        return Object.defineProperty ? Object.defineProperty(e, "raw", {value: t}) : e.raw = t, e
                    }, k = function (e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e) for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    }, P = function (e) {
                        return e && e.__esModule ? e : {default: e}
                    }, t("__extends", i), t("__assign", o), t("__rest", s), t("__decorate", a), t("__param", u), t("__metadata", c), t("__awaiter", l), t("__generator", h), t("__exportStar", p), t("__values", f), t("__read", m), t("__spread", d), t("__spreadArrays", g), t("__await", b), t("__asyncGenerator", y), t("__asyncDelegator", _), t("__asyncValues", v), t("__makeTemplateObject", S), t("__importStar", k), t("__importDefault", P)
                }.apply(t, [t])) || (e.exports = r)
            }()
        }).call(this, n(65))
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(33);
        t.Matrix = r.Matrix;
        var i = n(34);
        t.Item = i.Item;
        var o = n(35);
        t.StrictMatrix = o.StrictMatrix;
        var s = n(36);
        t.StrictItem = s.StrictItem;
        var a = n(79);
        t.Model = a.Model;
        var u = n(37);
        t.ModelItem = u.ModelItem;
        var c = n(80);
        t.Orientations = c.Orientations;
        var l = n(81);
        t.Reasons = l.Reasons;
        var h = n(82);
        t.Types = h.Types
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(78);
        t.SHA2_224 = r.SHA2_224, t.SHA2_256 = r.SHA2_256, t.SHA2_384 = r.SHA2_384, t.SHA2_512 = r.SHA2_512, t.SHA2_512_224 = r.SHA2_512_224, t.SHA2_512_256 = r.SHA2_512_256
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(30);
        t.Slots = r.Slots;
        var i = n(5);
        t.Slot = i.Slot;
        var o = n(6);
        t.slot = o.slot, t.property = o.property;
        var s = n(90);
        t.Boolean = s.BooleanSlot;
        var a = n(91);
        t.Date = a.DateSlot;
        var u = n(92);
        t.Number = u.NumberSlot;
        var c = n(93);
        t.Numeric = c.Numeric;
        var l = n(94);
        t.String = l.StringSlot;
        var h = n(95);
        t.Text = h.Text
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(0), o = n(2), s = n(12), a = n(6), u = n(3), c = function (e) {
            function t(t, n, r, o) {
                var s = e.call(this) || this;
                if (!i.isFilledString(r)) throw new Error("Invalid slot reference supplied to slot constructor.");
                return s.m_pType = t, s.m_sKind = n, s.m_sReference = r, s.m_nSequence = o, s
            }

            return r.__extends(t, e), Object.defineProperty(t.prototype, "slots", {
                get: function () {
                    return this.parent
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "id", {
                get: function () {
                    return this.hash
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "type", {
                get: function () {
                    return this.m_pType.type
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "kind", {
                get: function () {
                    return this.m_sKind
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "sequence", {
                get: function () {
                    return this.m_nSequence
                }, set: function (e) {
                    this.m_nSequence = e, this.slots && this.slots.sort()
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "reference", {
                get: function () {
                    return this.m_sReference
                }, enumerable: !0, configurable: !0
            }), t.prototype.propertyChange = function (e) {
                var t = this.slots;
                if (t && !t.isDeserializing) switch (this.emitHook("OnSlotProperty", {
                    slot: this,
                    property: e
                }), t.emitHook("OnSlotProperty", {slot: this, property: e}), e) {
                    case"label":
                    case"name":
                    case"alias":
                    case"placeholder":
                        this.emitHook("OnSlotRename", {slot: this}), t.emitHook("OnSlotRename", {slot: this});
                        break;
                    case"required":
                        this.emitHook("OnSlotRequired", {slot: this}), t.emitHook("OnSlotRequired", {slot: this})
                }
            }, t.prototype.serialize = function () {
                return s.serializeTo(this, {
                    id: this.id,
                    type: this.type,
                    kind: this.kind,
                    reference: this.reference,
                    sequence: this.sequence,
                    label: this.label,
                    name: this.name,
                    placeholder: this.placeholder,
                    alias: this.alias,
                    required: this.required,
                    pipable: this.pipable,
                    default: this.default,
                    exportable: this.exportable
                })
            }, t.prototype.deserialize = function (e) {
                return s.deserializeFrom(this, e), this.hash = e.id, this.sequence = e.sequence, this.label = e.label, this.name = e.name, this.placeholder = e.placeholder, this.alias = e.alias, this.required = e.required, this.pipable = e.pipable, this.default = e.default, this.exportable = e.exportable, this
            }, t.prototype.deprecate = function () {
                return this.pop(), this
            }, t.prototype.delete = function () {
                return this.pop(), this
            }, t.prototype.groupIdentifier = function (e) {
                return e && this.pipable && !i.isBoolean(this.pipable) && this.pipable.group ? u.SHA2_256(e + ":" + this.pipable.group) : ""
            }, r.__decorate([a.property], t.prototype, "label", void 0), r.__decorate([a.property], t.prototype, "name", void 0), r.__decorate([a.property], t.prototype, "placeholder", void 0), r.__decorate([a.property], t.prototype, "alias", void 0), r.__decorate([a.property], t.prototype, "required", void 0), r.__decorate([a.property], t.prototype, "pipable", void 0), r.__decorate([a.property], t.prototype, "default", void 0), r.__decorate([a.property], t.prototype, "exportable", void 0), r.__decorate([a.property], t.prototype, "sequence", null), r.__decorate([s.serializer], t.prototype, "serialize", null), r.__decorate([s.deserializer], t.prototype, "deserialize", null), t
        }(o.Item);
        t.Slot = c
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(8), i = n(30);
        t.slot = function (e) {
            return function (t) {
                i.Slots.register(t, e)
            }
        }, t.property = function (e, t, n) {
            r.observable("property", e, t, n, (function (e) {
                return e.target.propertyChange(e.property)
            }))
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(38);
        t.Conditions = r.Conditions;
        var i = n(23);
        t.Condition = i.Condition;
        var o = n(39);
        t.Branches = o.Branches;
        var s = n(40);
        t.Branch = s.Branch;
        var a = n(41);
        t.States = a.States;
        var u = n(13);
        t.State = u.State;
        var c = n(43);
        t.Transducers = c.Transducers;
        var l = n(44);
        t.Transducer = l.Transducer;
        var h = n(45);
        t.ImmutableValue = h.ImmutableValue;
        var p = n(46);
        t.Instance = p.Instance;
        var f = n(16);
        t.Context = f.Context;
        var m = n(47);
        t.Data = m.Data;
        var d = n(99);
        t.Ontology = d.Ontology;
        var g = n(49);
        t.Value = g.Value;
        var b = n(48);
        t.Values = b.Values;
        var y = n(25);
        t.Errors = y.Errors;
        var _ = n(101);
        t.ontology = _.ontology
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(75);
        t.defineMarker = r.defineMarker, t.invokeMarker = r.invokeMarker;
        var i = n(76);
        t.observable = i.observable
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(14), i = n(21);

        function o(e) {
            return void 0 === e
        }

        function s(e) {
            return !o(e)
        }

        function a(e) {
            return o(e) || "object" == typeof e && null === e
        }

        function u(e) {
            return "object" == typeof e && null !== e && !d(e)
        }

        function c(e) {
            return "function" == typeof e
        }

        function l(e) {
            return "string" == typeof e
        }

        function h(e) {
            return l(e) ? e.length : 0
        }

        function p(e) {
            return h(e) > 0
        }

        function f(e, t, n) {
            return "number" == typeof e && isFinite(e) && ("number" != typeof t || e >= t) && ("number" != typeof n || e <= n)
        }

        function m(e) {
            return "boolean" == typeof e
        }

        function d(e) {
            return Array.isArray(e)
        }

        function g(e) {
            return (u(e) || d(e) || c(e)) && "number" == typeof e.length && "function" == typeof e.item
        }

        function b(e) {
            return d(e) || g(e) ? e.length : u(e) ? b(Object.keys(e)) : 0
        }

        function y(e, t) {
            return l(e) ? e : s(e) && !a(e) && c(e.toString) ? e.toString() : l(t) ? t : ""
        }

        function _(e, t) {
            if (f(e)) return Math.round(e);
            if (m(e)) return e ? 1 : 0;
            if (s(e) && !a(e) && c(e.toString)) {
                var n = parseFloat(e.toString().replace(/[^-\d.]/g, ""));
                if (f(n)) return Math.round(n)
            }
            return f(t) ? Math.round(t) : 0
        }

        function v(e, t) {
            if (f(e)) return parseFloat("" + e);
            if (m(e)) return e ? 1 : 0;
            if (s(e) && !a(e) && c(e.toString)) {
                var n = parseFloat(e.toString().replace(/[^-\d.]/g, ""));
                if (f(n)) return n
            }
            return f(t) ? t : 0
        }

        function S(e, t) {
            if (m(e)) return e;
            if (f(e)) return !!e;
            if (s(e) && !a(e) && c(e.toString)) {
                var n = e.toString();
                return !("0" === n || "false" === n.toLowerCase())
            }
            return !!t
        }

        function k(e, t, n) {
            if (e && t) {
                var r, i = n && n.arguments ? n.arguments : void 0, o = !(!n || !n.replace);
                if (r = n && n.keys ? i ? function (e, n) {
                    return t.apply(void 0, [e, n].concat(i))
                } : function (e, n) {
                    return t(e, n)
                } : i ? function (e) {
                    return t.apply(void 0, [e].concat(i))
                } : function (e) {
                    return t(e)
                }, d(e)) e.forEach((function (t, n) {
                    var i = r(t, n);
                    o && (e[n] = i)
                })); else if (g(e)) for (var s = e, a = s.length, u = 0; u < a; u++) r(s.item(u), u); else {
                    Object.keys(e).forEach((function (t) {
                        var n = r(e[t], t);
                        o && (e[t] = n)
                    }))
                }
            }
            return e
        }

        function P(e, t, n) {
            if (void 0 === n && (n = !1), e) {
                var r = void 0, i = void 0;
                g(e) ? r = e : d(e) || (i = Object.keys(e));
                for (var o = (i || r || e).length, s = 0; s < o; s++) {
                    if (n === S(M(t, i ? e[i[s]] : r ? r.item(s) : e[s]))) return n
                }
                return !n
            }
            return !1
        }

        function O(e, t, n) {
            var r, i, o, s = !(!n || "first" !== n.return), a = !(!n || "last" !== n.return);
            if (n && n.return && "matches" !== n.return || (r = []), e) {
                var u, h = void 0;
                g(e) ? u = e : d(e) || (h = Object.keys(e));
                for (var p = (h || u || e).length, f = a ? p - 1 : 0; a && f >= 0 || !a && f < p; a ? f-- : f++) {
                    if (S(M(t, h ? e[h[f]] : u ? u.item(f) : e[f]))) {
                        if (n && c(n.do)) {
                            var m = M.apply(void 0, [n.do].concat((i = h ? h[f] : f, o = n && n.arguments ? n.arguments.slice(0) : [], l(i) ? o.unshift(e[i]) : u ? o.unshift(u.item(i)) : o.unshift(e[i]), o)));
                            n && n.replace && !u && (h ? e[h[f]] = m : e[f] = m)
                        }
                        if (s || a) return h ? e[h[f]] : u ? u.item(f) : e[f];
                        r && (h ? r.push(e[h[f]]) : u ? r.push(u.item(f)) : r.push(e[f]))
                    }
                }
            }
            return r
        }

        function M(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            if (e) return e.apply(void 0, t)
        }

        function C(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            i.TICKS.schedule.apply(i.TICKS, [e].concat(t))
        }

        function w(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            return i.TICKS.schedule.apply(i.TICKS, [e].concat(t))
        }

        function x(e) {
            return i.TICKS.cancel(e), 0
        }

        function T(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            return i.PROMISES.schedule.apply(i.PROMISES, [e].concat(t))
        }

        function I(e) {
            return i.PROMISES.cancel(e), 0
        }

        function E(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            return i.FRAMES.schedule.apply(i.FRAMES, [e].concat(t))
        }

        function F(e) {
            return i.FRAMES.cancel(e), 0
        }

        function j(e, t) {
            for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
            e && (t > 0 ? E((function () {
                return j.apply(void 0, [e, --t].concat(n))
            })) : e.apply(void 0, n))
        }

        function A(e, t) {
            if (e && p(t)) return e[t]
        }

        function L(e, t) {
            return !!(e && p(t) && s(e[t])) && delete e[t]
        }

        t.noop = function () {
        }, t.isUndefined = o, t.isDefined = s, t.isNull = a, t.isObject = u, t.isFunction = c, t.isString = l, t.stringLength = h, t.isFilledString = p, t.isNumber = function (e) {
            return "number" == typeof e && !isNaN(e)
        }, t.isNumberFinite = f, t.isFloat = function (e, t, n) {
            return "number" == typeof e && isFinite(e) && e % 1 != 0 && ("number" != typeof t || e >= t) && ("number" != typeof n || e <= n)
        }, t.isBoolean = m, t.isArray = d, t.isCollection = g, t.isArrayOrCollection = function (e) {
            return d(e) || g(e)
        }, t.arraySize = b, t.arrayItem = function (e, t, n) {
            if (t = _(t), e) if (d(e)) {
                if (t >= 0 && t < b(e)) return e[t]
            } else if (g(e)) {
                if (t >= 0 && t < b(e)) return e.item(t)
            } else if (u(e)) {
                var r = Object.keys(e);
                if (t >= 0 && t < b(r)) return e[r[t]]
            }
            return s(n) ? n : void 0
        }, t.firstArrayItem = function (e, t) {
            if (e) if (d(e)) {
                if (b(e) > 0) return e[0]
            } else if (g(e)) {
                if (b(e) > 0) return e.item(0)
            } else if (u(e)) {
                var n = Object.keys(e);
                if (b(n) > 0) return e[n[0]]
            }
            return s(t) ? t : void 0
        }, t.lastArrayItem = function (e, t) {
            if (e) if (d(e)) {
                if ((n = b(e)) > 0) return e[n - 1]
            } else if (g(e)) {
                if ((n = b(e)) > 0) return e.item(n - 1)
            } else if (u(e)) {
                var n, r = Object.keys(e);
                if ((n = b(r)) > 0) return e[r[n - 1]]
            }
            return s(t) ? t : void 0
        }, t.isDate = function (e) {
            return u(e) && "[object Date]" === Object.prototype.toString.call(e)
        }, t.isRegEx = function (e) {
            return u(e) && "[object RegExp]" === Object.prototype.toString.call(e)
        }, t.isError = function (e) {
            return e instanceof Error
        }, t.assert = function (e, t) {
            if (a(e)) throw new Error(t || "Assert failed!");
            return e
        }, t.cast = function (e) {
            return e
        }, t.castToString = y, t.castToNumber = _, t.castToFloat = v, t.castToBoolean = S, t.clone = function (e) {
            return Object.create(e)
        }, t.extend = function e(t) {
            for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
            var i = t;
            return k(n, (function (t) {
                k(t, (function (t, n) {
                    u(t) && u(i[n]) ? e(i[n], t) : i[n] = t
                }), {keys: !0})
            })), i
        }, t.extendImmutable = function e() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            var r = {};
            return k(t, (function (t) {
                k(t, (function (t, n) {
                    u(t) && u(r[n]) ? r[n] = e(r[n], t) : r[n] = t
                }), {keys: !0})
            })), r
        }, t.compare = function e(t, n, r) {
            if (u(t) || d(t)) {
                var i = void 0, o = void 0, s = !1, c = !1;
                if (u(t) !== u(n) || d(t) !== d(n)) return !1;
                if (g(t) ? s = !0 : d(t) || (i = Object.keys(t)), g(n) ? c = !0 : d(n) || (o = Object.keys(n)), s !== c || d(i) !== d(o) || (i || t).length !== (o || n).length) return !1;
                for (var l = (i || t).length, h = 0; h < l; h++) {
                    var p = i ? i[h] : h, f = o ? o[h] : h;
                    if (p !== f || !e(s ? t.item(p) : t[p], c ? n.item(f) : n[f], r)) return !1
                }
                return !0
            }
            return !(typeof t != typeof n || a(t) !== a(n) || r && t !== n)
        }, t.each = k, t.eachReverse = function (e, t, n) {
            if (e) {
                var r, i = void 0;
                g(e) ? r = e : d(e) || (i = Object.keys(e));
                for (var o = (i || r || e).length - 1; o >= 0; o--) {
                    var s = M.apply(void 0, [t].concat((a = i ? i[o] : o, u = n && n.arguments ? n.arguments.slice(0) : [], n && n.keys && u.unshift(a), l(a) ? u.unshift(e[a]) : r ? u.unshift(r.item(a)) : u.unshift(e[a]), u)));
                    n && n.replace && !r && (i ? e[i[o]] = s : e[o] = s)
                }
            }
            var a, u;
            return e
        }, t.map = function (e, t) {
            for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
            var i, o, s = [];
            if (e) {
                var a, u = void 0;
                g(e) ? a = e : d(e) || (u = Object.keys(e));
                for (var c = (u || a || e).length, h = 0; h < c; h++) s.push(M.apply(void 0, [t].concat((i = u ? u[h] : h, o = n.slice(0), l(i) ? o.unshift(e[i]) : a ? o.unshift(a.item(i)) : o.unshift(e[i]), o))))
            }
            return s
        }, t.reduce = function (e, t, n) {
            for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
            if (e) {
                var a, u = void 0;
                g(e) ? a = e : d(e) || (u = Object.keys(e));
                for (var c = (u || a || e).length, h = 0; h < c; h++) n = M.apply(void 0, [t].concat((r = u ? u[h] : h, i = o.slice(0), l(r) ? i.unshift(e[r]) : a ? i.unshift(a.item(r)) : i.unshift(e[r]), i.unshift(n), i)))
            }
            return n
        }, t.has = P, t.hasOnly = function (e, t) {
            return P(e, t, !1)
        }, t.hasOneOrMore = function (e, t) {
            return P(e, t, !0)
        }, t.count = function (e, t) {
            var n = 0;
            if (e) {
                var r = void 0, i = void 0;
                g(e) ? r = e : d(e) || (i = Object.keys(e));
                for (var o = (i || r || e).length, s = 0; s < o; s++) {
                    var a = !0;
                    c(t) && (a = S(M(t, i ? e[i[s]] : r ? r.item(s) : e[s]))), a && n++
                }
            }
            return n
        }, t.forEach = O, t.filter = function (e, t) {
            return O(e, t)
        }, t.findFirst = function (e, t) {
            return O(e, t, {return: "first"})
        }, t.findLast = function (e, t) {
            return O(e, t, {return: "last"})
        }, t.find = function (e, t) {
            if (e) {
                var n = void 0, r = void 0;
                g(e) ? n = e : d(e) || (r = Object.keys(e));
                for (var i = (r || n || e).length, o = 0; o < i; o++) {
                    if (S(M(t, r ? e[r[o]] : n ? n.item(o) : e[o]))) return r ? r[o] : o
                }
            }
        }, t.call = M, t.callAsync = C, t.callPromise = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            i.PROMISES.schedule.apply(i.PROMISES, [e].concat(t))
        }, t.callEx = function (e, t) {
            for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
            t ? M.apply(void 0, [e].concat(n)) : C.apply(void 0, [e].concat(n))
        }, t.callBind = function (e, t) {
            for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
            if (e && t) return e.bind(t).apply(void 0, n)
        }, t.callFunction = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            if (c(e)) return e.apply(void 0, t)
        }, t.scheduleTick = w, t.scheduleAndCancelTick = function (e, t) {
            for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
            return x(t), w.apply(void 0, [e].concat(n))
        }, t.cancelTick = x, t.schedulePromise = T, t.scheduleAndCancelPromise = function (e, t) {
            for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
            return I(t), T.apply(void 0, [e].concat(n))
        }, t.cancelPromise = I, t.scheduleFrame = E, t.scheduleAndCancelFrame = function (e, t) {
            for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
            return F(t), E.apply(void 0, [e].concat(n))
        }, t.cancelFrame = F, t.scheduleTimeout = function (e, t) {
            for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
            return i.FUNCTION_TIMEOUT((function () {
                return e.apply(void 0, n)
            }), t)
        }, t.cancelTimeout = function (e) {
            return 0 !== e && clearTimeout(e), 0
        }, t.scheduleUITimeout = function (e, t) {
            for (var n = [], o = 2; o < arguments.length; o++) n[o - 2] = arguments[o];
            var s = i.ENUMERATOR.n + 1, a = y(s), u = r.DateTime.precise, c = function () {
                i.UI[a] && (r.DateTime.elapsed(u, !0) >= t ? (i.UI[a].apply(i.UI, n), L(i.UI, a)) : E(c))
            };
            return i.UI[a] = e, E(c), s
        }, t.cancelUITimeout = function (e) {
            return 0 !== e && L(i.UI, y(e)), 0
        }, t.scheduleInterval = function (e, t) {
            for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
            return i.FUNCTION_INTERVAL((function () {
                return e.apply(void 0, n)
            }), t)
        }, t.cancelInterval = function (e) {
            return 0 !== e && clearInterval(e), 0
        }, t.scheduleUIInterval = function (e, t) {
            for (var n = [], o = 2; o < arguments.length; o++) n[o - 2] = arguments[o];
            var s = i.ENUMERATOR.n + 1, a = y(s), u = r.DateTime.precise, c = function () {
                i.UI[a] && (r.DateTime.elapsed(u, !0) >= t && (i.UI[a].apply(i.UI, n), u = r.DateTime.precise), E(c))
            };
            return i.UI[a] = e, E(c), s
        }, t.cancelUIInterval = function (e) {
            return 0 !== e && L(i.UI, y(e)), 0
        }, t.scheduleNumberOfFrames = j, t.scheduleAnimation = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            j.apply(void 0, [e, 2].concat(t))
        }, t.scheduleEvent = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            j.apply(void 0, [e, 2].concat(t))
        }, t.scheduleAction = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            j.apply(void 0, [e, 5].concat(t))
        }, t.set = function (e, t, n) {
            return e[t] = n
        }, t.setAny = function (e, t, n) {
            return (u(e) || c(e)) && p(t) ? e[t] = n : n
        }, t.get = function (e, t) {
            return e[t]
        }, t.getAny = A, t.getBoolean = function (e, t, n) {
            return void 0 === n && (n = !1), S(A(e, t), n)
        }, t.getString = function (e, t, n) {
            return void 0 === n && (n = ""), y(A(e, t), n)
        }, t.getNumber = function (e, t, n) {
            return void 0 === n && (n = 0), _(A(e, t), n)
        }, t.getFloat = function (e, t, n) {
            return void 0 === n && (n = 0), v(A(e, t), n)
        }, t.destroy = L, t.createInstanceOf = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            return new (e.bind.apply(e, [void 0].concat(t)))
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.SERIALIZE = "@serializer #properties", t.SERIALIZER = "@serializer #proc", t.DESERIALIZE = "@deserializer #properties", t.DESERIALIZER = "@deserializer #proc"
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(96);
        t.Await = r.Await;
        var i = n(42);
        t.Callback = i.Callback
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(84);
        t.serializeTo = r.serializeTo;
        var i = n(85);
        t.deserializeFrom = i.deserializeFrom;
        var o = n(86);
        t.deserialize = o.deserialize;
        var s = n(87);
        t.deserializer = s.deserializer;
        var a = n(88);
        t.serializer = a.serializer;
        var u = n(89);
        t.serialize = u.serialize
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(11), o = n(15), s = n(39), a = n(43), u = n(24), c = function (e) {
            function t(t, n) {
                var r = e.call(this, t, n.id) || this;
                return r.m_nEvaluate = 0, r.enumerator = 0, r.m_pTransducers = new a.Transducers(r), r.m_pBranches = new s.Branches(r), r.m_pProps = n, r
            }

            return r.__extends(t, e), Object.defineProperty(t.prototype, "states", {
                get: function () {
                    return this.parent
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "ontology", {
                get: function () {
                    return this.states.ontology
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "transducers", {
                get: function () {
                    return this.m_pTransducers
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "branches", {
                get: function () {
                    return this.m_pBranches
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isMain", {
                get: function () {
                    return this instanceof u.Main
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "props", {
                get: function () {
                    return this.m_pProps
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isEvaluating", {
                get: function () {
                    return this.m_nEvaluate > 0
                }, enumerable: !0, configurable: !0
            }), t.prototype.evaluate = function (e, t, n) {
                var r = this.m_nEvaluate, o = !0;
                e instanceof i.Callback ? e.isAlive && this.m_nEvaluate++ : (o = n(e), e.isAsynchronous && this.m_nEvaluate > 0 && this.m_nEvaluate--), o && (0 === this.m_nEvaluate && r > 0 || this.m_nEvaluate > 0 && 0 === r) && this.onEvaluate(t, this.m_nEvaluate > 0)
            }, t.prototype.onSkip = function (e) {
                this.emitHook("OnSkip", {state: this, context: e})
            }, t.prototype.onLeave = function (e) {
                this.emitHook("OnLeave", {state: this, context: e})
            }, t.prototype.onLeaveError = function (e, t) {
            }, t.prototype.onCancel = function (e) {
                this.emitHook("OnCancel", {state: this, context: e})
            }, t.prototype.onValidated = function (e, t, n) {
                this.emitHook("OnValidated", {state: this, context: e, result: t, type: n})
            }, t.prototype.onEvaluate = function (e, t) {
                this.emitHook("OnEvaluate", {state: this, context: e, evaluating: t})
            }, t
        }(o.Factory);
        t.State = c
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(9), i = n(31), o = n(20), s = n(21), a = function () {
            function e(t) {
                void 0 === t && (t = new Date), t instanceof e ? this.m_pDate = new Date(t.time) : r.isDate(t) ? this.m_pDate = new Date(t.getTime()) : this.m_pDate = new Date(t)
            }

            return Object.defineProperty(e, "now", {
                get: function () {
                    return Date.now()
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "precise", {
                get: function () {
                    return s.FUNCTION_PRECISE()
                }, enumerable: !0, configurable: !0
            }), e.isFuture = function (e) {
                return this.now < e
            }, e.isPast = function (e) {
                return this.now >= e
            }, e.elapsed = function (e, t) {
                return void 0 === t && (t = !1), (r.castToBoolean(t) ? this.precise : this.now) - e
            }, e.timerReset = function () {
                var e = this.m_nStamp;
                return this.m_nStamp = this.precise, e
            }, Object.defineProperty(e, "timerElapsed", {
                get: function () {
                    return this.precise - this.timerReset()
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "timerStamp", {
                get: function () {
                    return this.formatElapsed()
                }, enumerable: !0, configurable: !0
            }), e.format = function (e, t, n, i) {
                void 0 === e && (e = "dd-MM-yyyy HH:mm:ss.SSS"), void 0 === t && (t = this.now), void 0 === n && (n = !1);
                var s = new Date(t);
                return o.Str.sanitize(e.replace(/('[^']+')|('')|(HH)|(H)|(hh)|(h)|(mm)|(m)|(ss)|(s)|(SSS)|(S)|(zzzz)|(z)|(dd)|(d)|(MMMMM)|(MMMM)|(MMM)|(MM)|(M)|(LLLLL)|(LLLL)|(LLL)|(EEEEE)|(EEEE)|(EEE)|(EE)|(E)|(ccccc)|(cccc)|(ccc)|(cc)|(yyyy)|(yy)|(y)|(a)/g, (function (e) {
                    switch (e) {
                        case"HH":
                            return o.Str.padLeft(r.castToString(n ? s.getUTCHours() : s.getHours()), "0", 2);
                        case"H":
                            return r.castToString(n ? s.getUTCHours() : s.getHours());
                        case"hh":
                            return o.Str.padLeft(r.castToString(((n ? s.getUTCHours() : s.getHours()) + 11) % 12 + 1), "0", 2);
                        case"h":
                            return r.castToString(((n ? s.getUTCHours() : s.getHours()) + 11) % 12 + 1);
                        case"a":
                            return i ? r.castToString((n ? s.getUTCHours() : s.getHours()) >= 12 ? i.PM : i.AM) : "";
                        case"mm":
                            return o.Str.padLeft(r.castToString(n ? s.getUTCMinutes() : s.getMinutes()), "0", 2);
                        case"m":
                            return r.castToString(n ? s.getUTCMinutes() : s.getMinutes());
                        case"ss":
                            return o.Str.padLeft(r.castToString(n ? s.getUTCSeconds() : s.getSeconds()), "0", 2);
                        case"s":
                            return r.castToString(n ? s.getUTCSeconds() : s.getSeconds());
                        case"SSS":
                            return o.Str.padLeft(r.castToString(n ? s.getUTCMilliseconds() : s.getMilliseconds()), "0", 3);
                        case"S":
                            return r.castToString(n ? s.getUTCMilliseconds() : s.getMilliseconds());
                        case"z":
                        case"zzzz":
                            return "";
                        case"dd":
                            return o.Str.padLeft(r.castToString(n ? s.getUTCDate() : s.getDate()), "0", 2);
                        case"d":
                            return r.castToString(n ? s.getUTCDate() : s.getDate());
                        case"yyyy":
                            return r.castToString(n ? s.getUTCFullYear() : s.getFullYear());
                        case"yy":
                            return o.Str.padLeft(r.castToString(n ? s.getUTCFullYear() : s.getFullYear()), "0", 2, !0);
                        case"y":
                            return r.castToString(n ? s.getUTCFullYear() : s.getFullYear());
                        case"MMMMM":
                            return r.castToString(r.arrayItem(i ? i.monthsFormattedNarrow : void 0, n ? s.getUTCMonth() : s.getMonth(), "?"));
                        case"MMMM":
                            return r.castToString(r.arrayItem(i ? i.monthsFormattedWide : void 0, n ? s.getUTCMonth() : s.getMonth(), "?"));
                        case"MMM":
                            return r.castToString(r.arrayItem(i ? i.monthsFormattedAbbreviated : void 0, n ? s.getUTCMonth() : s.getMonth(), "?"));
                        case"MM":
                            return o.Str.padLeft(r.castToString((n ? s.getUTCMonth() : s.getMonth()) + 1), "0", 2);
                        case"M":
                            return r.castToString((n ? s.getUTCMonth() : s.getMonth()) + 1);
                        case"LLLLL":
                            return r.castToString(r.arrayItem(i ? i.monthsNominativeNarrow : void 0, n ? s.getUTCMonth() : s.getMonth(), "?"));
                        case"LLLL":
                            return r.castToString(r.arrayItem(i ? i.monthsNominativeWide : void 0, n ? s.getUTCMonth() : s.getMonth(), "?"));
                        case"LLL":
                            return r.castToString(r.arrayItem(i ? i.monthsNominativeAbbreviated : void 0, n ? s.getUTCMonth() : s.getMonth(), "?"));
                        case"EEEEE":
                            return r.castToString(r.arrayItem(i ? i.weekdaysFormattedNarrow : void 0, n ? s.getUTCDay() : s.getDay(), "?"));
                        case"EEEE":
                            return r.castToString(r.arrayItem(i ? i.weekdaysFormattedWide : void 0, n ? s.getUTCDay() : s.getDay(), "?"));
                        case"EEE":
                            return r.castToString(r.arrayItem(i ? i.weekdaysFormattedAbbreviated : void 0, n ? s.getUTCDay() : s.getDay(), "?"));
                        case"EE":
                            return r.castToString(r.arrayItem(i ? i.weekdaysFormattedShort : void 0, n ? s.getUTCDay() : s.getDay(), "?"));
                        case"E":
                            return r.castToString(n ? s.getUTCDay() : s.getDay());
                        case"ccccc":
                            return r.castToString(r.arrayItem(i ? i.weekdaysNominativeNarrow : void 0, n ? s.getUTCDay() : s.getDay(), "?"));
                        case"cccc":
                            return r.castToString(r.arrayItem(i ? i.weekdaysNominativeWide : void 0, n ? s.getUTCDay() : s.getDay(), "?"));
                        case"ccc":
                            return r.castToString(r.arrayItem(i ? i.weekdaysNominativeAbbreviated : void 0, n ? s.getUTCDay() : s.getDay(), "?"));
                        case"cc":
                            return r.castToString(r.arrayItem(i ? i.weekdaysNominativeShort : void 0, n ? s.getUTCDay() : s.getDay(), "?"));
                        case"''":
                            return "'"
                    }
                    return e.replace(/'/g, "")
                })))
            }, e.formatElapsed = function (e, t, n, s) {
                var a, u, c, l, h, p;
                return void 0 === e && (e = "H'h':mm'm':ss's'.SSS'ms'.uuu'µs'"), t = i.Num.conform(r.castToFloat(t, this.timerElapsed), 3), a = Math.floor(t / 36e5), u = Math.floor(t % 36e5 / 6e4), c = Math.floor(t % 36e5 % 6e4 / 1e3), p = r.castToString(i.Num.conform(t % 36e5 % 6e4 % 1e3, 3)).split("."), l = p[0], h = r.arraySize(p) >= 2 ? p[1] : "0", o.Str.sanitize(e.replace(/('[^']+')|('')|(HH)|(H)|(hh)|(h)|(mm)|(m)|(ss)|(s)|(SSS)|(S)|(uuu)|(u)|(zzzz)|(z)|(dd)|(d)|(MMMMM)|(MMMM)|(MMM)|(MM)|(M)|(LLLLL)|(LLLL)|(LLL)|(EEEEE)|(EEEE)|(EEE)|(EE)|(E)|(ccccc)|(cccc)|(ccc)|(cc)|(yyyy)|(yy)|(y)|(a)/g, (function (e) {
                    switch (e) {
                        case"HH":
                            return o.Str.padLeft(r.castToString(a), "0", 2);
                        case"H":
                            return r.castToString(a);
                        case"hh":
                            return o.Str.padLeft(r.castToString((a + 11) % 12 + 1), "0", 2);
                        case"h":
                            return r.castToString((a + 11) % 12 + 1);
                        case"a":
                            return r.castToString(a >= 12 ? s : n);
                        case"mm":
                            return o.Str.padLeft(r.castToString(u), "0", 2);
                        case"m":
                            return r.castToString(u);
                        case"ss":
                            return o.Str.padLeft(r.castToString(c), "0", 2);
                        case"s":
                            return r.castToString(c);
                        case"SSS":
                            return o.Str.padLeft(l, "0", 3);
                        case"S":
                            return l;
                        case"uuu":
                            return o.Str.padLeft(h, "0", 3);
                        case"u":
                            return h;
                        case"z":
                        case"zzzz":
                            return "";
                        case"''":
                            return "'"
                    }
                    return e.replace(/'/g, "")
                })))
            }, Object.defineProperty(e, "log", {
                get: function () {
                    return this.format("dd-MM-yyyy HH:mm:ss.SSS")
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "logTime", {
                get: function () {
                    return this.format("HH:mm:ss.SSS")
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "date", {
                get: function () {
                    return this.m_pDate
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "time", {
                get: function () {
                    return this.date.getTime()
                }, set: function (e) {
                    this.m_pDate = new Date(e)
                }, enumerable: !0, configurable: !0
            }), e.m_nStamp = 0, e
        }();
        t.DateTime = a
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = function (e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                return r.m_pSuccessors = {live: {}, preview: {}}, r.hash = n, r
            }

            return r.__extends(t, e), Object.defineProperty(t.prototype, "id", {
                get: function () {
                    return this.hash
                }, enumerable: !0, configurable: !0
            }), t.prototype.selectSuccessor = function (e) {
                return this.m_pSuccessors[e]
            }, t.prototype.setSuccessor = function (e, t) {
                var n = this.selectSuccessor(e);
                n.state = t, n.isSet = !0
            }, t.prototype.successor = function (e) {
                var t = this.selectSuccessor(e);
                if (!t.isSet) {
                    var n = this.branch || this.ancestor;
                    n && (t.state = n.successor(e), t.isSet = !0)
                }
                return t.state
            }, t
        }(n(2).StrictItem);
        t.Factory = i
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(3), i = n(4), o = n(0), s = function () {
            function e(e, t) {
                this.m_pMutables = {}, this.m_pImmutables = {}, this.m_pStack = e, this.m_pChain = t
            }

            return Object.defineProperty(e.prototype, "instance", {
                get: function () {
                    return this.m_pStack.instance
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "key", {
                get: function () {
                    if (!this.m_sKey) {
                        for (var e = this.m_pStack, t = "" + this.instance.uniqueId; e;) {
                            var n = e.mutableContext;
                            n && (t += n.context), e = e.ancestor
                        }
                        this.m_sKey = r.SHA2_256(t)
                    }
                    return this.m_sKey
                }, enumerable: !0, configurable: !0
            }), e.prototype.validationOf = function (e) {
                return this.m_pStack.validationOf(e)
            }, e.prototype.isMutableContextOf = function (e) {
                return e.state === this.m_pStack.state && e.mutableContext === this.m_pStack.mutableContext
            }, e.prototype.mutableValueOf = function (e) {
                var t = e instanceof i.Slot ? e.id : e, n = this.m_pMutables[t];
                if (n) return n;
                var r = this.instance.data.forSlot(t);
                return r && o.set(this.m_pMutables, t, r.mutableValue(this.m_pStack))
            }, e.prototype.immutableValueOf = function (e) {
                var t = e instanceof i.Slot ? e.id : e, n = this.m_pImmutables[t];
                if (n && n.isSealed) return n;
                var r = this.instance.data.forSlot(e);
                return r && o.set(this.m_pImmutables, t, r.immutableValue(this.m_pStack))
            }, e.prototype.variableFor = function (e, t) {
                var n = this, r = this.m_pChain.slot(e instanceof i.Slot ? e.id : e);
                if (r instanceof i.Slot) {
                    var s = this.instance.data.forSlot(r);
                    if (s) {
                        var a, u = this, c = r, l = {
                            slot: r, get value() {
                                return (a = a || u.immutableValueOf(c)) ? a.value : void 0
                            }, get string() {
                                return (a = a || u.immutableValueOf(c)) && a.string || ""
                            }, subscribe: function (e, t) {
                                var r = function (t) {
                                    if (a && a.context === t.context) a = t.value, e(l); else {
                                        var r = n.immutableValueOf(c);
                                        !r || a && a.context === r.context || (a = r, e(l))
                                    }
                                };
                                s.groupedHook("OnValueChange", "synchronous", (function (e) {
                                    return r(e)
                                }), t), s.groupedHook("OnSealChange", "synchronous", (function (e) {
                                    return r(e)
                                }), t)
                            }, unsubscribe: function (e) {
                                return s.unhook("OnValueChange", e)
                            }
                        };
                        return l
                    }
                } else if (r && r.length > 0) {
                    var h = [];
                    if (t) for (var p = this.m_pStack, f = function () {
                        var e = p.immutableContext;
                        if (e) {
                            var n = t(e);
                            if (n) {
                                var i = o.findFirst(r, (function (e) {
                                    return e.id === n
                                }));
                                if (i && i.pipable && !o.isBoolean(i.pipable)) {
                                    var s = m.variableFor(i);
                                    if (s) {
                                        if ("name" === i.pipable.template || "label" === i.pipable.template) {
                                            var a = {
                                                slot: i,
                                                get value() {
                                                    return s.value
                                                },
                                                string: ("name" === i.pipable.template ? i.name : i.label) || "",
                                                subscribe: function (e, t) {
                                                    return s.subscribe((function () {
                                                        return e(a)
                                                    }), t)
                                                },
                                                unsubscribe: function (e) {
                                                    return s.unsubscribe(e)
                                                }
                                            };
                                            return {value: a}
                                        }
                                        return {value: s}
                                    }
                                }
                            }
                        }
                        p = p.ancestor
                    }, m = this; p;) {
                        var d = f();
                        if ("object" == typeof d) return d.value
                    }
                    o.each(r, (function (e) {
                        if (e.pipable && !o.isBoolean(e.pipable)) {
                            var t = n.variableFor(e);
                            t && h.push(t)
                        }
                    }));
                    var g = {
                        get string() {
                            var e = "";
                            return o.each(h, (function (t) {
                                if (t.slot) {
                                    var n = t.slot;
                                    if (n.pipable && !o.isBoolean(n.pipable)) if (t.slot instanceof i.Boolean ? t.value : t.string) {
                                        var r = "";
                                        "name" === n.pipable.template || "label" === n.pipable.template ? r = ("name" === n.pipable.template ? n.name : n.label) || "" : t && (r = t.string), r && (e += ("" === e ? "" : ", ") + r)
                                    }
                                }
                            })), e
                        }, subscribe: function (e, t) {
                            return o.each(h, (function (n) {
                                return n.subscribe((function () {
                                    return e(g)
                                }), t)
                            }))
                        }, unsubscribe: function (e) {
                            return o.each(h, (function (t) {
                                return t.unsubscribe(e)
                            }))
                        }
                    };
                    return g
                }
            }, e
        }();
        t.Context = s
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(7), o = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return r.__extends(t, e), Object.defineProperty(t.prototype, "id", {
                get: function () {
                    return this.hash
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "collector", {
                get: function () {
                    return this.cluster.collector
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "cluster", {
                get: function () {
                    return this.state
                }, enumerable: !0, configurable: !0
            }), t.prototype.onCondition = function () {
                return !0
            }, t = r.__decorate([i.ontology("branches")], t)
        }(i.Branch);
        t.Branch = o
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(7), o = n(0), s = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.m_pValidation = {}, t
            }

            return r.__extends(t, e), Object.defineProperty(t.prototype, "id", {
                get: function () {
                    return this.hash
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "collector", {
                get: function () {
                    return this.ontology
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "percentageInCollector", {
                get: function () {
                    var e = this.collector.metrics.states;
                    return e > 0 ? Math.floor(Math.min(this.enumerator - 1, e) / e * 100) : 0
                }, enumerable: !0, configurable: !0
            }), t.prototype.getValidation = function (e) {
                return this.m_pValidation[e.key] || "unknown"
            }, t.prototype.onEnterCondition = function () {
                return !0
            }, t.prototype.onEnter = function (e, t) {
                return this.collector.onInstanceCluster(e, this, t), this.collector.onInstanceProgress(e.instance, this.percentageInCollector), t
            }, t.prototype.onLeaveCondition = function () {
                return !0
            }, t.prototype.onLeave = function (t) {
                var n = this;
                t.instance.isRunning && "paginated" === this.collector.mode && (this.collector.onInstanceClusterLeave(t.instance, "forward", this), o.scheduleTick((function () {
                    return n.collector.onInstanceStep(t.instance, "forward")
                })), e.prototype.onLeave.call(this, t))
            }, t.prototype.onCancel = function (t) {
                var n = this;
                t.instance.isRunning && "paginated" === this.collector.mode && (this.collector.onInstanceClusterLeave(t.instance, "backward", this), o.scheduleTick((function () {
                    return n.collector.onInstanceStep(t.instance, "backward")
                })), e.prototype.onCancel.call(this, t))
            }, t.prototype.onValidate = function (e) {
                return o.set(this.m_pValidation, e.key, "unknown"), !0
            }, t.prototype.onValidated = function (t, n, r) {
                o.set(this.m_pValidation, t.key, n), this.collector.onInstanceValidated(t.instance, n, r), e.prototype.onValidated.call(this, t, n, r)
            }, t.prototype.onEvaluate = function (t, n) {
                this.collector.onInstanceClusterEvaluating(t.instance, this, n), e.prototype.onEvaluate.call(this, t, n)
            }, t = r.__decorate([i.ontology("clusters")], t)
        }(i.State);
        t.Cluster = s
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(11), o = n(7), s = n(8), a = n(0), u = n(27), c = n(28), l = function (e) {
            function t(t, n) {
                var r = e.call(this, t, n) || this;
                return r.m_pBlocks = {}, r
            }

            return r.__extends(t, e), Object.defineProperty(t.prototype, "id", {
                get: function () {
                    return this.hash
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "collector", {
                get: function () {
                    return this.cluster.collector
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "cluster", {
                get: function () {
                    return this.state
                }, enumerable: !0, configurable: !0
            }), t.prototype.block = function (e) {
                var t = this.m_pBlocks[e.key] || a.set(this.m_pBlocks, e.key, c.NodeBlocks.create(this, e));
                return t && a.set(t, "context", e), t
            }, t.prototype.onEnterCondition = function (e, t) {
                if (this.props.disabled) return !1;
                var n = this.block(e);
                if (n) {
                    var r = {callback: t}, o = s.invokeMarker("condition", n, r);
                    return !(a.isBoolean(o) || o instanceof i.Callback) || o
                }
                return !0
            }, t.prototype.onEnter = function (e, t) {
                var n = this, r = this.block(e);
                return this.collector.onInstanceNode(e, this, t), r && (e.instance.data.unhookContext(r), e.instance.data.hook("OnValueChange", "framed", (function (e) {
                    e.transducer === n && t.done()
                }), r), r instanceof u.HeadlessBlock ? r.do(t) : r.shouldAutoRender && e.instance.data.hook("OnValueChange", "synchronous", (function (e) {
                    e.transducer === n && r.rerender()
                }), r)), t
            }, t.prototype.onLeave = function (e) {
                if ("paginated" === this.collector.mode) {
                    var t = this.block(e);
                    if (t) {
                        e.instance.data.unhookContext(t), s.invokeMarker("destroy", t, {type: "left"})
                    }
                }
            }, t.prototype.onCancel = function (e) {
                if ("paginated" === this.collector.mode) {
                    var t = this.block(e);
                    if (t) {
                        e.instance.data.unhookContext(t), s.invokeMarker("destroy", t, {type: "canceled"})
                    }
                }
            }, t.prototype.onValidate = function (e, t, n) {
                var r = this.block(e);
                if (r) {
                    if (r.shouldAutoValidate && this.slots.each((function (t) {
                        if (t.required) {
                            var n = e.mutableValueOf(t);
                            if (!n || !n.hasValue) return !0;
                            if (!n.reference && a.isString(n.value) && "" === n.value) return !0
                        }
                        return !1
                    }))) return !1;
                    var o = {callback: n, current: t}, u = s.invokeMarker("validator", r, o);
                    return u instanceof i.Callback && r.rerender(), !(a.isBoolean(u) || u instanceof i.Callback) || u
                }
                return !0
            }, t.prototype.onValidated = function (t, n, r) {
                var i = this.block(t);
                i && i.rerender(), e.prototype.onValidated.call(this, t, n, r)
            }, t = r.__decorate([o.ontology("nodes")], t)
        }(o.Transducer);
        t.Node = l
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(9);
        !function (e) {
            function t(e) {
                return r.isFilledString(e) ? e.toLowerCase() : ""
            }

            function n(e) {
                return r.isFilledString(e) ? e.replace(/(^\s*)|(\s*$)/g, "") : ""
            }

            function i(e) {
                return r.isFilledString(e) ? e.replace(/(\s*$)/g, "") : ""
            }

            function o(e) {
                return r.isFilledString(e) ? e.replace(/[^\S\r\n\.]{2,}/g, " ").replace(/\n[^\S\r\n\.]/g, "\n") : ""
            }

            function s(e) {
                return o(n(e))
            }

            function a(e, t, n) {
                return void 0 === n && (n = ""), e = r.castToString(e), r.isNumberFinite(t) && t > 0 && t < r.stringLength(e) ? r.isFilledString(n) ? i(e.substr(0, t)) + n : e.substr(0, t) : e
            }

            function u(e, n, i, o) {
                void 0 === i && (i = ""), void 0 === o && (o = !1);
                var s = "", a = 0;
                return e = r.castToString(e), n = r.castToString(n), r.each(o ? t(e).split(t(n)) : e.split(n), (function (t) {
                    var o = r.stringLength(t);
                    s += (a > 0 ? i : "") + e.substr(a, o), a += o + r.stringLength(n)
                })), s
            }

            function c(e, t, n) {
                void 0 === t && (t = "");
                for (var i = [], o = 3; o < arguments.length; o++) i[o - 3] = arguments[o];
                var s, a, u = "";
                if (e) {
                    var c, l = void 0;
                    r.isCollection(e) ? c = e : r.isArray(e) || (l = Object.keys(e));
                    for (var h = (l || c || e).length, p = 0; p < h; p++) u += ("" === u ? "" : t) + r.castToString(n ? r.call.apply(void 0, [n].concat((s = l ? l[p] : p, a = i.slice(0), r.isString(s) ? a.unshift(e[s]) : c ? a.unshift(c.item(s)) : a.unshift(e[s]), a))) : l ? e[l[p]] : c ? c.item(p) : e[p])
                }
                return u
            }

            e.lowercase = t, e.uppercase = function (e) {
                return r.isFilledString(e) ? e.toUpperCase() : ""
            }, e.capitalize = function (e, n, i) {
                if (void 0 === n && (n = "first-character"), void 0 === i && (i = !1), i && (e = t(e)), r.isFilledString(e)) {
                    var o = "each-sentence" === n ? e.split(".") : [e];
                    return r.each(o, (function (e) {
                        var t = "";
                        if ("each-word" !== n) {
                            for (var i = e.toString(), o = 0; o < r.stringLength(i);) {
                                var s = i.charAt(o);
                                if (" " !== s && "\t" !== s && "\r" !== s && "\n" !== s && "." !== s) {
                                    i = i.substr(0, o) + i.substr(o, 1).toUpperCase() + i.substr(o + 1);
                                    break
                                }
                                o++
                            }
                            t += (0 === o ? " " : "") + i
                        } else t = e.replace(/\b[a-z]/g, (function (e) {
                            return e.toUpperCase()
                        }));
                        return t
                    }), {replace: !0}), s(c(o, "."))
                }
                return ""
            }, e.trim = n, e.trimLeft = function (e) {
                return r.isFilledString(e) ? e.replace(/(^\s*)/g, "") : ""
            }, e.trimRight = i, e.trimMultiple = o, e.sanitize = s, e.removeWhitespaces = function (e) {
                return r.isFilledString(e) ? e.replace(/\s/g, "") : ""
            }, e.limit = a, e.replace = u, e.replaceMultiple = function (e, t, n, i) {
                return e = r.castToString(e), r.each(t, (function (t) {
                    e = u(e, t, n, i)
                })), e
            }, e.makeHTMLSafe = function (e) {
                return r.castToString(e).replace(/[<>]/g, (function (e) {
                    return "<" === e ? "&lt;" : "&gt;"
                }))
            }, e.CRLFToHTML = function (e) {
                return r.castToString(e).replace(/(\r\n|[\r\n])/g, "<br />")
            }, e.iterateToString = c, e.extract = function (e, n) {
                var i = r.castToString(n.left);
                if (e = r.castToString(e), r.isFilledString(i)) {
                    var o = (n.ignoreCase ? t(e) : e).indexOf(n.ignoreCase ? t(i) : i);
                    if (-1 !== o && "" !== (e = e.substr(o + r.stringLength(i)))) {
                        var s = r.isFilledString(n.right) ? n.fromEnd ? (n.ignoreCase ? t(e) : e).lastIndexOf(n.ignoreCase ? t(n.right) : n.right) : (n.ignoreCase ? t(e) : e).indexOf(n.ignoreCase ? t(n.right) : n.right) : r.stringLength(e);
                        if (-1 !== s) return e.substr(0, s)
                    }
                }
                return ""
            }, e.fill = function (e, t) {
                var n = "";
                for (e = r.castToString(e), t = r.castToNumber(t); t > 0;) n += e, t--;
                return n
            }, e.padLeft = function (e, t, n, i, o) {
                var s = r.castToString(o || r.isNumberFinite(e) ? r.castToNumber(e) : e);
                if (r.isString(t) && r.isNumberFinite(n) && r.stringLength(t) >= 1) {
                    var a, u = "";
                    if (a = (o || r.isNumberFinite(e)) && "-" === s.charAt(0), i && r.stringLength(s) > n) return s.substr(r.stringLength(s) - n);
                    if (r.stringLength(s) >= n) return s;
                    a && (s = s.substr(1));
                    do {
                        u += t
                    } while (r.stringLength(u) < n);
                    return (a ? "-" : "") + (u + s).substr(r.stringLength(u + s) + (a ? 1 : 0) - n)
                }
                return s
            }, e.padRight = function (e, t, n, i) {
                var o = r.castToString(e);
                if (r.isString(t) && r.isNumberFinite(n) && r.stringLength(t) >= 1) {
                    if (o = r.castToString(o), i && r.stringLength(o) > n) return a(o, n);
                    if (r.stringLength(o) >= n) return o;
                    for (; r.stringLength(o) < n;) o = a(o + t, n)
                }
                return o
            }, e.djb2Hash = function (e, t) {
                void 0 === t && (t = "");
                for (var n = r.stringLength(e), i = 0, o = 5381; i < n;) o = 33 * o ^ e.charCodeAt(i), i++;
                return t + (o >>> 0).toString(36)
            }
        }(t.Str || (t.Str = {}))
    }, function (e, t, n) {
        "use strict";
        (function (e) {
            Object.defineProperty(t, "__esModule", {value: !0});
            var r = n(67), i = n(32), o = void 0 !== e && e && e.nextTick ? function (t) {
                e.nextTick(t)
            } : "undefined" != typeof Promise && Promise ? function (e) {
                Promise.resolve().then(e)
            } : function (e) {
                setTimeout(e, 0)
            }, s = "undefined" != typeof Promise && Promise ? function (e) {
                Promise.resolve().then(e)
            } : void 0 !== e && e && e.nextTick ? function (t) {
                e.nextTick(t)
            } : function (e) {
                setTimeout(e, 0)
            }, a = "undefined" != typeof requestAnimationFrame ? function (e) {
                return requestAnimationFrame(e) || 0
            } : function (e) {
                return setTimeout(e, 1e3 / 60) || 0
            };
            t.FUNCTION_TIMEOUT = function (e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t) || 0
            }, t.FUNCTION_INTERVAL = function (e, t) {
                return void 0 === t && (t = 0), setInterval(e, t) || 0
            }, t.FUNCTION_PRECISE = function () {
                return "undefined" != typeof performance && performance.now ? performance.now() : Date.now()
            }, t.IS_BROWSER = "undefined" != typeof window, t.IS_NODE = "undefined" == typeof window && void 0 !== e, t.IS_WEBWORKER = "undefined" != typeof self && "function" == typeof postMessage, t.TICKS = new r.Scheduler(o), t.FRAMES = new r.Scheduler(a), t.PROMISES = new r.Scheduler(s), t.UI = {}, t.ENUMERATOR = new i.Enumerator
        }).call(this, n(66))
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(73);
        t.Hooks = r.Hooks;
        var i = n(74);
        t.hookup = i.hookup
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(15), o = n(3), s = n(0), a = function (e) {
            function t(t, n) {
                var r = e.call(this, t, n.id) || this;
                return r.m_sContext = "", r.m_pProps = n, r
            }

            return r.__extends(t, e), t.getContext = function (e) {
                return o.SHA2_256(JSON.stringify(s.extendImmutable(e, {id: ""})))
            }, Object.defineProperty(t.prototype, "conditions", {
                get: function () {
                    return this.parent
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "branch", {
                get: function () {
                    return this.conditions.branch
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "state", {
                get: function () {
                    return this.branch.state
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "context", {
                get: function () {
                    return this.m_sContext || (this.m_sContext = t.getContext(this.m_pProps))
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "props", {
                get: function () {
                    return this.m_pProps
                }, enumerable: !0, configurable: !0
            }), t
        }(i.Factory);
        t.Condition = a
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(3), o = function (e) {
            function t(t) {
                return e.call(this, t, {id: i.SHA2_256("*")}) || this
            }

            return r.__extends(t, e), t.prototype.onEnterCondition = function () {
                return !0
            }, t.prototype.onEnter = function () {
            }, t.prototype.onLeaveCondition = function () {
                return !0
            }, t.prototype.onValidate = function () {
                return !0
            }, t
        }(n(13).State);
        t.Main = o
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            e[e.None = 0] = "None", e[e.OntologyInvalidState = 1] = "OntologyInvalidState", e[e.OntologyInvalidTransducer = 2] = "OntologyInvalidTransducer", e[e.OntologyInvalidBranch = 4] = "OntologyInvalidBranch", e[e.OntologyInvalidCondition = 8] = "OntologyInvalidCondition", e[e.OntologyInvalidJump = 16] = "OntologyInvalidJump", e[e.ResumeInvalidHash = 32] = "ResumeInvalidHash", e[e.ResumeInvalidData = 64] = "ResumeInvalidData", e[e.ResumeInvalidStack = 128] = "ResumeInvalidStack"
        }(t.Errors || (t.Errors = {}))
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(0), i = function () {
            function e() {
            }

            return e.ofType = function (e) {
                return this.m_pBlocks[e]
            }, e.register = function (e, t, n) {
                var i = this;
                if (this.m_pBlocks[t]) throw new Error("Duplicate block '" + t + "' registered.");
                r.each(n, (function (t) {
                    if (i.m_pBlocks[t]) throw new Error("Duplicate block '" + t + "' registered.");
                    r.set(i.m_pBlocks, t, e)
                })), r.set(e, "identifier", t), e.prototype.type = r.set(this.m_pBlocks, t, e)
            }, e.create = function (e, t) {
                if (e.props.block) {
                    var n = this.ofType(e.props.block.type);
                    if (n) return new n(e, t)
                }
            }, e.m_pBlocks = {}, e
        }();
        t.ConditionBlocks = i
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return r.__extends(t, e), t
        }(n(54).NodeBlock);
        t.HeadlessBlock = i
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(0), i = function () {
            function e() {
            }

            return e.ofType = function (e) {
                return this.m_pBlocks[e]
            }, e.register = function (e, t, n, i, o, s) {
                var a = this;
                if (this.m_pBlocks[t]) throw new Error("Duplicate block '" + t + "' registered.");
                r.each(n, (function (t) {
                    if (a.m_pBlocks[t]) throw new Error("Duplicate block '" + t + "' registered.");
                    r.set(a.m_pBlocks, t, e)
                })), r.set(e, "identifier", t), r.set(e, "ref", i), r.set(e, "autoRender", o), r.set(e, "autoValidate", s), e.prototype.type = r.set(this.m_pBlocks, t, e)
            }, e.create = function (e, t) {
                if (e.props.block) {
                    var n = this.ofType(e.props.block.type);
                    if (n) return new n(e, t)
                }
            }, e.m_pBlocks = {}, e
        }();
        t.NodeBlocks = i
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(104);
        t.MarkdownParser = r.MarkdownParser;
        var i = n(58);
        t.MarkdownFeatures = i.MarkdownFeatures
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(0), o = n(2), s = n(83), a = n(5), u = function (e) {
            function t() {
                var t = e.call(this) || this;
                return t.m_bDeserializing = !1, t
            }

            return r.__extends(t, e), t.register = function (e, t) {
                if (this.m_pTypes[t]) throw new Error("Duplicate slot type '" + t + "' registered using the '@slot' decorator.");
                this.m_pTypes[i.set(e, "type", t)] = e
            }, t.ofType = function (e) {
                return this.m_pTypes[e]
            }, Object.defineProperty(t.prototype, "isDeserializing", {
                get: function () {
                    return this.m_bDeserializing
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "hasMultiplePipable", {
                get: function () {
                    if (this.count > 1) {
                        var e, t = 0;
                        return this.each((function (n) {
                            var r = n.pipable && !i.isBoolean(n.pipable) ? n.pipable.group : void 0;
                            return (r && r !== e || !r && !1 !== n.pipable) && t++, e || (e = r), t > 1
                        }))
                    }
                    return !1
                }, enumerable: !0, configurable: !0
            }), t.prototype.create = function (e, t) {
                var n = this.select(t.reference, e);
                if (n && n.type === t.type.type) n.sequence !== t.sequence && (n.sequence = t.sequence); else {
                    var r = n;
                    n && n.delete(), n = this.pushToMatrix(new t.type(t.type, e, t.reference, t.sequence)), r && (n.hash = r.hash)
                }
                return i.each(t, (function (e, t) {
                    switch (t) {
                        case"type":
                        case"reference":
                        case"sequence":
                            break;
                        default:
                            i.set(n, t, e)
                    }
                }), {keys: !0}), n
            }, t.prototype.onDimensionChange = function (t) {
                e.prototype.onDimensionChange.call(this, t), this.isDeserializing || this.sort()
            }, t.prototype.meta = function (e) {
                return this.create("meta", e)
            }, t.prototype.static = function (e) {
                return this.create("static", e)
            }, t.prototype.dynamic = function (e) {
                return this.create("dynamic", e)
            }, t.prototype.feature = function (e) {
                return this.create("feature", e)
            }, t.prototype.select = function (e, t) {
                var n;
                return this.each((function (r) {
                    return !(t && t !== r.kind || r.reference !== e && r.id !== e) && (n = r, !0)
                })), n
            }, t.prototype.selectByIdentifier = function (e, t) {
                var n;
                if (void 0 === t && (t = ""), e) return this.each((function (r) {
                    return (r.id === e || r.groupIdentifier(t) === e) && (n = r, !0)
                })), n
            }, t.prototype.deprecate = function (e, t) {
                var n = this.select(e, t);
                if (n) return n.deprecate()
            }, t.prototype.delete = function (e, t) {
                var n = this.select(e, t);
                if (n) return n.delete()
            }, t.prototype.clean = function (e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                this.each((function (n) {
                    e && n.kind !== e || i.findFirst(t, (function (e) {
                        return e instanceof a.Slot && e.id === n.id
                    })) || n.pop()
                }))
            }, t.prototype.sort = function () {
                return !this.isDeserializing && e.prototype.sort.call(this, (function (e, t) {
                    return s.kindOrderIndexFor(e.kind) - s.kindOrderIndexFor(t.kind) || (e.sequence || 0) - (t.sequence || 0) || e.uniqueId - t.uniqueId
                }))
            }, t.prototype.serialize = function () {
                var e = [];
                return this.each((function (t) {
                    e.push(t.serialize())
                })), e
            }, t.prototype.deserialize = function (e) {
                var n = this;
                return this.m_bDeserializing = !0, i.each(e, (function (e) {
                    var r = t.ofType(e.type);
                    if (!r) throw new Error("No slot implementation found for type '" + e.type + "'");
                    var i = n.select(e.reference, e.kind);
                    i && i.type === r.type ? i.deserialize(e) : (i && i.pop(), n.pushToMatrix(new r(r, e.kind, e.reference, e.sequence)).deserialize(e))
                })), this.m_bDeserializing = !1, this.sort(), this
            }, t.prototype.destroy = function () {
                this.clear("dirty"), e.prototype.destroy.call(this)
            }, t.m_pTypes = {}, t
        }(o.Matrix);
        t.Slots = u
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(9);
        !function (e) {
            function t(e, t) {
                var n = Math.pow(10, t || 0);
                return r.isNumberFinite(e) ? Math.round(r.castToNumber((e * n).toFixed(1))) / n : 0
            }

            e.round = function (e) {
                return r.isNumberFinite(e) ? Math.round(e) : 0
            }, e.floor = function (e) {
                return r.isNumberFinite(e) ? Math.floor(e) : 0
            }, e.ceil = function (e) {
                return r.isNumberFinite(e) ? Math.ceil(e) : 0
            }, e.conform = t, e.positive = function (e) {
                return r.isNumberFinite(e) && e > 0 ? e : 0
            }, e.negative = function (e) {
                return r.isNumberFinite(e) && e < 0 ? e : 0
            }, e.max = function (e, t) {
                return r.isNumberFinite(e) && r.isNumberFinite(t) ? Math.max(e, t) : r.isNumberFinite(e) ? e : r.isNumberFinite(t) ? t : 0
            }, e.maxL = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = r.arraySize(e), i = NaN;
                if (n > 0) for (var o = 0; o < n; o++) {
                    var s = e[o];
                    r.isNumberFinite(s) && (!r.isNumberFinite(i) || s > i) && (i = s)
                }
                return r.isNumberFinite(i) ? i : 0
            }, e.min = function (e, t) {
                return r.isNumberFinite(e) && r.isNumberFinite(t) ? Math.min(e, t) : r.isNumberFinite(e) ? e : r.isNumberFinite(t) ? t : 0
            }, e.minL = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = r.arraySize(e), i = NaN;
                if (n > 0) for (var o = 0; o < n; o++) {
                    var s = e[o];
                    r.isNumberFinite(s) && (!r.isNumberFinite(i) || s < i) && (i = s)
                }
                return r.isNumberFinite(i) ? i : 0
            }, e.range = function (e, t, n) {
                return r.isNumberFinite(e) ? (r.isNumberFinite(n) && t > n && (t = n), r.isNumberFinite(t) && e < t ? t : r.isNumberFinite(n) && e > n ? n : e) : r.isNumberFinite(t) ? t : r.isNumberFinite(n) ? n : 0
            }, e.inRange = function (e, t, n, i, o) {
                return void 0 === i && (i = !0), void 0 === o && (o = !1), r.isNumberFinite(e) && (i ? e >= t : e > t) && (o ? e <= n : e < n)
            }, e.format = function (e, n, i, o, s) {
                var a, u, c;
                void 0 === n && (n = 0), void 0 === i && (i = ","), void 0 === o && (o = "."), void 0 === s && (s = "-");
                var l = "";
                if (e = t(r.castToFloat(e), n), u = (a = r.castToString(e).replace("-", s).split("."))[0], c = r.arraySize(a) >= 2 ? a[1] : "", r.isFilledString(i)) for (var h = r.stringLength(u) - 1, p = 0; h >= 0; h--) l = u.charAt(h) + (3 === p && u.charAt(h) !== s ? i : "") + l, 3 === p && (p = 0), p++; else l = u;
                if (n > 0) for (l += o + c, n -= r.stringLength(c); n > 0;) l += "0", n--;
                return l
            }
        }(t.Num || (t.Num = {}))
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function () {
            function e() {
                this.m_nEnumerator = 0
            }

            return Object.defineProperty(e, "n", {
                get: function () {
                    return this.m_nEnumerator === Number.MAX_VALUE && (this.m_nEnumerator = 0), ++this.m_nEnumerator
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "n", {
                get: function () {
                    return this.m_nEnumerator === Number.MAX_VALUE && (this.m_nEnumerator = 0), ++this.m_nEnumerator
                }, set: function (e) {
                    e > this.m_nEnumerator && e <= Number.MAX_VALUE && (this.m_nEnumerator = e)
                }, enumerable: !0, configurable: !0
            }), e.recycle = function () {
                this.m_nEnumerator = Number.MAX_VALUE
            }, e.prototype.recycle = function () {
                this.m_nEnumerator = Number.MAX_VALUE
            }, e.m_nEnumerator = 0, e
        }();
        t.Enumerator = r
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(0), o = n(22), s = n(77), a = function (e) {
            function t(n, r, i) {
                void 0 === n && (n = 0), void 0 === r && (r = 0), void 0 === i && (i = 1);
                var o = e.call(this) || this;
                return o.m_nCurrentCount = 0, o.m_pCursor = {
                    column: 0,
                    row: 0,
                    index: 0
                }, o.m_bSilent = !1, o.m_pItems = [], o.m_nUniqueId = t.enumerator.n, o.m_nType = n, o.m_nOrientation = r, o.m_nColumns = o.m_nCurrentColumns = 0 === o.type ? Math.max(i, 1) : 0, o.m_nRows = o.m_nCurrentRows = 1 === o.type ? Math.max(i, 1) : 0, o
            }

            return r.__extends(t, e), Object.defineProperty(t.prototype, "uniqueId", {
                get: function () {
                    return this.m_nUniqueId
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "type", {
                get: function () {
                    return this.m_nType
                }, set: function (e) {
                    this.m_nType !== e && (this.m_nType = e, this.recalculate(new s.Stack, 0, "change", -1, 32).flush())
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "orientation", {
                get: function () {
                    return this.m_nOrientation
                }, set: function (e) {
                    if (this.m_nOrientation !== e) {
                        var t = new s.Stack;
                        this.m_nOrientation = e, this.reindex(t, 0, -1, "change", -1, 32), t.flush()
                    }
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "columns", {
                get: function () {
                    return this.m_nColumns
                }, set: function (e) {
                    this.m_nType = 0, e !== this.m_nColumns && (this.m_nColumns = Math.max(e, 1), this.recalculate(new s.Stack, 0, "change", -1, 32).flush())
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "rows", {
                get: function () {
                    return this.m_nRows
                }, set: function (e) {
                    this.m_nType = 1, e !== this.m_nRows && (this.m_nRows = Math.max(e, 1), this.recalculate(new s.Stack, 0, "change", -1, 32).flush())
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "count", {
                get: function () {
                    return this.m_pItems.length
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "all", {
                get: function () {
                    return this.m_pItems
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "currentItem", {
                get: function () {
                    return this.itemAtIndex(this.safeCursor.index)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "firstItem", {
                get: function () {
                    return this.itemAtIndex(0)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "lastItem", {
                get: function () {
                    return this.itemAtIndex(this.count - 1)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "lastItemInFirstRow", {
                get: function () {
                    return this.lastItemInRow(0)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "lastItemInFirstColumn", {
                get: function () {
                    return this.lastItemInColumn(0)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "cursor", {
                get: function () {
                    return this.m_pCursor
                }, set: function (e) {
                    var t = this.m_pCursor.column, n = this.m_pCursor.row;
                    this.m_pCursor = this.getSafeCursor(e), this.m_pCursor.column === t && this.m_pCursor.row === n || this.isSilent || this.onCursorChange({
                        matrix: this,
                        cursor: this.cursor
                    })
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "safeCursor", {
                get: function () {
                    return this.m_pCursor
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isCursorAtFirstColumn", {
                get: function () {
                    return 0 === this.cursor.column
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isCursorAtLastColumn", {
                get: function () {
                    return this.cursor.column === this.columns - 1
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isCursorAtEndColumn", {
                get: function () {
                    return this.cursor.column === this.columns
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isCursorAtFirstRow", {
                get: function () {
                    return 0 === this.cursor.row
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isCursorAtLastRow", {
                get: function () {
                    return this.cursor.row === this.rows - 1
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isCursorAtEndRow", {
                get: function () {
                    return this.cursor.row === this.rows
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isCursorAtFirst", {
                get: function () {
                    return 0 === this.cursor.index
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isCursorAtLast", {
                get: function () {
                    return this.cursor.index === this.count - 1
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isCursorAtEnd", {
                get: function () {
                    return this.cursor.index === this.count
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isSilent", {
                get: function () {
                    return i.isFunction(this.m_bSilent) ? this.m_bSilent() : this.m_bSilent
                }, set: function (e) {
                    this.m_bSilent = e
                }, enumerable: !0, configurable: !0
            }), t.prototype.isValidIndex = function (e, t) {
                return void 0 === t && (t = !1), i.isNumberFinite(e) && e >= 0 && e < this.count + (t ? 1 : 0)
            }, t.prototype.reindex = function (e, t, n, r, o, s) {
                var a = !1;
                for (t = i.Num.max(t, 0), n = this.isValidIndex(n) ? n + 1 : this.count, o = this.isValidIndex(o) ? o : -1, this.isSilent && (r = "nothing"); t < n;) a = this.m_pItems[t].reindex(e, this, t, "nothing" !== r ? o === t ? r : "auto" : "nothing", s) || a, t++;
                return a
            }, t.prototype.recalculate = function (e, t, n, r, i) {
                var o = this, s = "nothing" !== n && !this.isSilent, a = this.count;
                switch (this.m_nType) {
                    case 0:
                        0 === this.m_nColumns && (this.m_nColumns = 1), this.m_nRows = Math.max(Math.ceil(a / this.m_nColumns), a > 0 ? 1 : 0);
                        break;
                    case 1:
                        0 === this.m_nRows && (this.m_nRows = 1), this.m_nColumns = Math.max(Math.ceil(a / this.m_nRows), a > 0 ? 1 : 0);
                        break;
                    case 2:
                        this.m_nColumns = this.m_nRows = Math.max(Math.ceil(Math.sqrt(a)), a > 0 ? 1 : 0);
                        break;
                    case 3:
                    case 4:
                        for (this.m_nColumns = this.m_nRows = Math.max(Math.floor(Math.sqrt(a)), a > 0 ? 1 : 0); this.m_nColumns * this.m_nRows < a;) for (3 === this.m_nType ? this.m_nColumns++ : this.m_nRows++; this.m_nColumns * this.m_nRows < a;) 4 === this.m_nType ? this.m_nColumns++ : this.m_nRows++
                }
                return s && (this.bufferHooks(), (1 === this.m_nOrientation && this.m_nColumns !== this.m_nCurrentColumns || 0 === this.m_nOrientation && this.m_nRows !== this.m_nCurrentRows) && (t = 0), this.isValidIndex(t) && this.reindex(e, t, a, n, r, i)), this.m_nColumns === this.m_nCurrentColumns && this.m_nRows === this.m_nCurrentRows || ((this.safeCursor.column > this.m_nColumns || this.safeCursor.row > this.m_nRows) && (this.cursor = {
                    column: Math.min(this.safeCursor.column, this.m_nColumns),
                    row: Math.min(this.safeCursor.row, this.m_nRows)
                }), s && e.push((function () {
                    o.onDimensionChange({
                        matrix: o,
                        difference: o.m_nColumns * o.m_nRows - o.m_nCurrentColumns * o.m_nCurrentRows,
                        columns: o.m_nColumns,
                        rows: o.m_nRows,
                        reason: i
                    })
                })), this.m_nCurrentColumns = this.m_nColumns, this.m_nCurrentRows = this.m_nRows), a !== this.m_nCurrentCount && (s && e.push((function () {
                    o.onCountChange({matrix: o, difference: a - o.m_nCurrentCount, count: a, reason: i})
                })), this.m_nCurrentCount = a), s && this.flushHooks(), e
            }, t.prototype.getSafeCursor = function (e) {
                if (!i.isNumberFinite(e.index) || e.index < 0) {
                    var t = Math.min(Math.max(i.isNumberFinite(e.column) ? e.column : this.columns, 0), this.columns),
                        n = Math.min(Math.max(i.isNumberFinite(e.row) ? e.row : this.rows, 0), this.rows);
                    return {column: t, row: n, index: this.indexFromColumnRow(t, n)}
                }
                return this.cursorFromIndex(e.index)
            }, t.prototype.onDimensionChange = function (e) {
                this.emitHook("OnDimensionChange", e)
            }, t.prototype.onCountChange = function (e) {
                this.emitHook("OnCountChange", e)
            }, t.prototype.onCursorChange = function (e) {
                this.emitHook("OnCursorChange", e)
            }, t.prototype.indexFromColumnRow = function (e, t) {
                var n = e >= 0 && e < this.columns && t >= 0 && t < this.rows ? 0 === this.orientation ? this.rows * e + t : this.columns * t + e : -1;
                return n >= 0 && n < this.count ? n : -1
            }, t.prototype.cursorFromIndex = function (e) {
                return {
                    column: (e = Math.min(Math.max(e || 0, 0), this.count)) < this.count ? 0 === this.orientation ? Math.floor(e / this.rows) : e % this.columns : this.columns,
                    row: e < this.count ? 0 === this.orientation ? e % this.rows : Math.floor(e / this.columns) : this.rows,
                    index: e
                }
            }, t.prototype.pushToMatrix = function (e, t) {
                void 0 === t && (t = {index: void 0, recalculate: !0, emit: "push"});
                var n, r, o = this.isSilent ? "nothing" : t.emit, a = i.castToBoolean(t.recalculate, !0),
                    u = new s.Stack;
                if (r = i.isNumberFinite(t.index) ? t.index : e.index, !e.isPopped && e.parent) {
                    if (this === e.parent) return this.isValidIndex(t.index, !0) && e.moveToIndex(t.index), e;
                    n = e.parent, e.popSilent()
                }
                if (this.isValidIndex(r) ? this.m_pItems.splice(r, 0, e) : r = this.m_pItems.push(e) - 1, "nothing" !== o && this.bufferHooks(), a && "nothing" !== o || e.reindex(u, this, r, o, 1), a && this.recalculate(u, r, o, r, 1), "nothing" !== o) {
                    if (e.isFirst) {
                        var c = e.successorSibling;
                        c && (c.dispatch(u, {
                            hook: "OnItemChange",
                            payload: {matrix: this, matrixPrevious: n, item: c, reason: 128}
                        }), this.emitHook("OnItemChange", {matrix: this, matrixPrevious: n, item: c, reason: 128}))
                    }
                    if (e.isLast) {
                        var l = e.predecessorSibling;
                        l && (l.dispatch(u, {
                            hook: "OnItemChange",
                            payload: {matrix: this, matrixPrevious: n, item: l, reason: 64}
                        }), this.emitHook("OnItemChange", {matrix: this, matrixPrevious: n, item: l, reason: 64}))
                    }
                }
                return u.flush(), "nothing" !== o && this.flushHooks(), e
            }, t.prototype.moveTo = function (e, t) {
                return this.moveToIndex(e, this.getSafeCursor(t).index)
            }, t.prototype.moveToIndex = function (e, t) {
                if (this.isValidIndex(t, !0) && e.index !== t) {
                    var n = new s.Stack;
                    return this.m_pItems.splice(t, 0, this.m_pItems.splice(e.index, 1)[0]), this.reindex(n, Math.min(e.index, t), Math.max(e.index, t), "change", -1, 4), n.flush(), !0
                }
                return !1
            }, t.prototype.moveToPosition = function (e, t, n) {
                return this.moveToIndex(e, this.indexFromColumnRow(t, n))
            }, t.prototype.moveToItem = function (e, t, n) {
                return this.moveToIndex(e, t.index + (n ? 0 : 1) - (e.index < t.index ? 1 : 0))
            }, t.prototype.moveUpOrDown = function (e, t) {
                if (t && !e.isFirstOfMatrix || !t && !e.isLastOfMatrix) {
                    var n = new s.Stack;
                    return this.m_pItems[e.index] = this.m_pItems[e.index + (t ? -1 : 1)], this.m_pItems[e.index + (t ? -1 : 1)] = e, this.reindex(n, e.index - (t ? 1 : 0), e.index + (t ? 0 : 1), "change", -1, 4), n.flush(), !0
                }
                return !1
            }, t.prototype.swap = function (e, t) {
                if (e.index !== t.index) {
                    var n = new s.Stack;
                    return this.m_pItems[e.index] = t, this.m_pItems[t.index] = e, this.reindex(n, i.Num.min(e.index, t.index), i.Num.max(e.index, t.index), "change", -1, 8), n.flush(), !0
                }
                return !1
            }, t.prototype.popFromMatrix = function (e, t) {
                void 0 === t && (t = !0);
                var n = [], r = !1, i = !1;
                if (e || (e = this.itemAtIndex(this.count - 1)), e && (r = e.isFirst, i = e.isLast, this.isValidIndex(e.index) && e === this.m_pItems[e.index] && (n = this.m_pItems.splice(e.index, 1))), 1 === n.length && n[0]) {
                    var o = new s.Stack, a = !!this.isSilent;
                    if (n[0].dispatch(o, "Pop"), a || (this.bufferHooks(), t && (n[0].dispatch(o, {
                        hook: "OnItemPop",
                        payload: {matrix: this, item: n[0]}
                    }), this.emitHook("OnItemPop", {
                        matrix: this,
                        item: n[0]
                    }))), this.recalculate(o, n[0].index, "change", -1, 2), !a) {
                        if (r) {
                            var u = this.firstItem;
                            u && (u.dispatch(o, {
                                hook: "OnItemChange",
                                payload: {matrix: this, matrixPrevious: void 0, item: u, reason: 128}
                            }), this.emitHook("OnItemChange", {
                                matrix: this,
                                matrixPrevious: void 0,
                                item: u,
                                reason: 128
                            }))
                        }
                        if (i) {
                            var c = this.lastItem;
                            c && (c.dispatch(o, {
                                hook: "OnItemChange",
                                payload: {matrix: this, matrixPrevious: void 0, item: c, reason: 64}
                            }), this.emitHook("OnItemChange", {
                                matrix: this,
                                matrixPrevious: void 0,
                                item: c,
                                reason: 64
                            }))
                        }
                    }
                    return o.flush(), a || this.flushHooks(), n[0]
                }
            }, t.prototype.sort = function (e) {
                void 0 === e && (e = function (e, t) {
                    return e.uniqueId - t.uniqueId
                }), this.m_pItems.sort(e);
                var t = new s.Stack, n = this.reindex(t, 0, -1, "change", -1, 16);
                return t.flush(), n
            }, t.prototype.clear = function (e) {
                void 0 === e && (e = "thorough");
                var t = new s.Stack;
                if ("dirty" !== e) for (var n = this.count, r = 0; r < n; r++) {
                    var i = this.m_pItems[r];
                    i.dispatch(t, "Pop"), this.isSilent || (i.dispatch(t, {
                        hook: "OnItemPop",
                        payload: {matrix: this, item: i}
                    }), "thorough" === e && this.emitHook("OnItemPop", {
                        matrix: this,
                        item: i
                    })), i.dispatch(t, "Detach")
                }
                this.m_pItems = [], "dirty" !== e && ("thorough" === e && this.recalculate(t, 0, "change", -1, 2), t.flush())
            }, t.prototype.invalidateMatrix = function () {
                this.onDimensionChange({
                    matrix: this,
                    difference: this.m_nColumns * this.m_nRows - this.m_nCurrentColumns * this.m_nCurrentRows,
                    columns: this.columns,
                    rows: this.rows,
                    reason: 32
                })
            }, t.prototype.recalculateMatrix = function () {
                this.recalculate(new s.Stack, 0, "change", -1, 32).flush()
            }, t.prototype.each = function (e, t, n) {
                for (var r = this.m_pItems.slice(t, i.isNumberFinite(n) && n >= 0 ? n + 1 : n), o = r.length, s = 0; s < o; s++) {
                    var a = e(r[s]);
                    if (i.isBoolean(a) && a) return !0
                }
                return !1
            }, t.prototype.reverseEach = function (e, t, n) {
                for (var r = this.m_pItems.slice(t, i.isNumberFinite(n) && n >= 0 ? n + 1 : n), o = r.length - 1; o >= 0; o--) {
                    var s = e(r[o]);
                    if (i.isBoolean(s) && s) return !0
                }
                return !1
            }, t.prototype.itemAtIndex = function (e) {
                return this.isValidIndex(e) ? this.m_pItems[e] : void 0
            }, t.prototype.itemAtPosition = function (e, t) {
                return this.itemAtIndex(this.indexFromColumnRow(e, t))
            }, t.prototype.itemAtCursor = function (e) {
                return this.itemAtIndex(this.getSafeCursor(e).index)
            }, t.prototype.itemFromId = function (e) {
                return i.findFirst(this.m_pItems, (function (t) {
                    return t.uniqueId === e
                }))
            }, t.prototype.lastItemInRow = function (e) {
                for (var t, n = this.columns; !t && n > 0;) t = this.itemAtPosition(--n, e);
                return t
            }, t.prototype.lastItemInColumn = function (e) {
                for (var t, n = this.rows; !t && n > 0;) t = this.itemAtPosition(e, --n);
                return t
            }, t.prototype.moveCursorToFirstColumn = function (e) {
                return void 0 === e && (e = !1), this.cursor = {column: 0, row: e ? 0 : this.safeCursor.row, index: -1}
            }, t.prototype.moveCursorToSuccessorColumn = function (e) {
                return void 0 === e && (e = !1), this.cursor = {
                    column: this.cursor.column + 1,
                    row: e ? 0 : this.safeCursor.row,
                    index: -1
                }
            }, t.prototype.moveCursorToPredecessorColumn = function (e) {
                return void 0 === e && (e = !1), this.cursor = {
                    column: this.cursor.column - 1,
                    row: e ? 0 : this.safeCursor.row,
                    index: -1
                }
            }, t.prototype.moveCursorToLastColumn = function (e) {
                return void 0 === e && (e = !1), this.cursor = {
                    column: this.columns - 1,
                    row: e ? 0 : this.safeCursor.row,
                    index: -1
                }
            }, t.prototype.moveCursorToFirstRow = function (e) {
                return void 0 === e && (e = !1), this.cursor = {
                    column: e ? 0 : this.safeCursor.column,
                    row: 0,
                    index: -1
                }
            }, t.prototype.moveCursorToSuccessorRow = function (e) {
                return void 0 === e && (e = !1), this.cursor = {
                    column: e ? 0 : this.safeCursor.column,
                    row: this.cursor.row + 1,
                    index: -1
                }
            }, t.prototype.moveCursorToPredecessorRow = function (e) {
                return void 0 === e && (e = !1), this.cursor = {
                    column: e ? 0 : this.safeCursor.column,
                    row: this.cursor.row - 1,
                    index: -1
                }
            }, t.prototype.moveCursorToLastRow = function (e) {
                return void 0 === e && (e = !1), this.cursor = {
                    column: e ? 0 : this.safeCursor.column,
                    row: this.rows - 1,
                    index: -1
                }
            }, t.prototype.moveCursorToFirst = function () {
                return this.cursor = {column: -1, row: -1, index: 0}
            }, t.prototype.moveCursorToSuccessor = function () {
                return this.cursor = {column: -1, row: -1, index: this.safeCursor.index + 1}
            }, t.prototype.moveCursorToPredecessor = function () {
                return this.cursor = {column: -1, row: -1, index: this.safeCursor.index - 1}
            }, t.prototype.moveCursorToLast = function () {
                return this.cursor = {column: -1, row: -1, index: this.count - 1}
            }, t.prototype.moveCursorToEnd = function () {
                return this.cursor = {column: -1, row: -1, index: this.count}
            }, t.enumerator = new i.Enumerator, t
        }(o.Hooks);
        t.Matrix = a
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(0), o = n(22), s = n(3), a = function (e) {
            function t(n) {
                var r = e.call(this) || this;
                return r.m_nIndex = -1, r.m_nColumn = -1, r.m_nRow = -1, r.m_bPopped = !0, r.m_nUniqueId = t.enumerator.n, r.m_pMatrix = n, r
            }

            return r.__extends(t, e), t.pushToMatrix = function (e, t) {
                return (t = t || e.parent) && t.pushToMatrix(e, {index: -1, recalculate: !0, emit: "push"}), e
            }, Object.defineProperty(t.prototype, "parent", {
                get: function () {
                    return this.matrix()
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "uniqueId", {
                get: function () {
                    return this.m_nUniqueId
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "hash", {
                get: function () {
                    return this.m_sHash || (this.m_sHash = s.SHA2_256("" + i.DateTime.now + Math.random() + "." + this.uniqueId))
                }, set: function (e) {
                    i.isFilledString(e) && /[A-Fa-f0-9]{64}/.test(e) && (this.m_sHash = e)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "index", {
                get: function () {
                    return this.m_nIndex
                }, set: function (e) {
                    this.moveToIndex(e)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "columnIndex", {
                get: function () {
                    return this.m_nColumn
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "rowIndex", {
                get: function () {
                    return this.m_nRow
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isPopped", {
                get: function () {
                    return this.m_bPopped
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isFirst", {
                get: function () {
                    return !!this.m_pMatrix && (0 === this.m_pMatrix.orientation ? 0 === this.rowIndex : 0 === this.columnIndex)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isLast", {
                get: function () {
                    return !!this.m_pMatrix && (this.isLastOfMatrix || (0 === this.m_pMatrix.orientation ? this.rowIndex === this.m_pMatrix.rows - 1 : this.columnIndex === this.m_pMatrix.columns - 1))
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isFirstColumn", {
                get: function () {
                    return 0 === this.columnIndex
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isLastColumn", {
                get: function () {
                    return !!this.m_pMatrix && (this.isLastOfMatrix || this.columnIndex === this.m_pMatrix.columns - 1)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isFirstRow", {
                get: function () {
                    return 0 === this.rowIndex
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isLastRow", {
                get: function () {
                    return !!this.m_pMatrix && (this.isLastOfMatrix || this.rowIndex === this.m_pMatrix.rows - 1)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isFirstOfMatrix", {
                get: function () {
                    return 0 === this.index
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isLastOfMatrix", {
                get: function () {
                    return !!this.m_pMatrix && this.index === this.m_pMatrix.count - (this.m_bPopped ? 0 : 1)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "predecessorSibling", {
                get: function () {
                    return this.m_pMatrix && !this.isFirstOfMatrix ? this.m_pMatrix.itemAtIndex(this.index - 1) : void 0
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "successorSibling", {
                get: function () {
                    return this.m_pMatrix && !this.isLastOfMatrix ? this.m_pMatrix.itemAtIndex(this.index + (this.m_bPopped ? 0 : 1)) : void 0
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "predecessorInColumn", {
                get: function () {
                    return this.m_pMatrix ? this.m_pMatrix.itemAtPosition(this.m_nColumn, this.m_nRow - 1) : void 0
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "successorInColumn", {
                get: function () {
                    return this.m_pMatrix ? this.m_pMatrix.itemAtPosition(this.m_nColumn, this.m_nRow + 1) : void 0
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "predecessorInRow", {
                get: function () {
                    return this.m_pMatrix ? this.m_pMatrix.itemAtPosition(this.m_nColumn - 1, this.m_nRow) : void 0
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "successorInRow", {
                get: function () {
                    return this.m_pMatrix ? this.m_pMatrix.itemAtPosition(this.m_nColumn + 1, this.m_nRow) : void 0
                }, enumerable: !0, configurable: !0
            }), t.prototype.matrix = function () {
                return this.m_pMatrix
            }, t.prototype.onPush = function (e) {
                this.emitHook("OnItemPush", e, "lifo")
            }, t.prototype.onChange = function (e) {
                this.emitHook("OnItemChange", e)
            }, t.prototype.onPop = function (e) {
                this.emitHook("OnItemPop", e)
            }, t.prototype.dispatch = function (e, t) {
                var n = this;
                if ("Pop" !== t) if ("Detach" !== t) switch (t.hook) {
                    case"OnItemChange":
                        e.push((function () {
                            n.onChange(t.payload)
                        }));
                        break;
                    case"OnItemPop":
                        e.push((function () {
                            n.onPop(t.payload)
                        }))
                } else this.m_pMatrix = void 0; else this.m_bPopped = !0
            }, t.prototype.reindex = function (e, t, n, r, i) {
                var o, s = this, a = this.m_nColumn, u = this.m_nRow, c = !1;
                if (this.m_pMatrix !== t && (o = this.m_pMatrix, this.m_pMatrix = t, c = !0), this.m_nIndex === n && "change" !== r && "push" !== r || (0 !== n && 0 !== this.m_nIndex || (i |= 128), n + 1 !== t.count && this.m_nIndex + 1 !== t.count || (i |= 64), this.m_nIndex = n, c = !0), this.m_nColumn = 0 === this.m_pMatrix.orientation ? Math.floor(this.m_nIndex / this.m_pMatrix.rows) : this.m_nIndex % this.m_pMatrix.columns, this.m_nRow = 0 === this.m_pMatrix.orientation ? this.m_nIndex % this.m_pMatrix.rows : Math.floor(this.m_nIndex / this.m_pMatrix.columns), this.isPopped) {
                    var l = this.m_pMatrix.itemAtIndex(n);
                    l && l === this && (this.m_bPopped = !1, c = !0)
                }
                return !(!c && this.m_nColumn === a && this.m_nRow === u) && ("nothing" !== r && ("push" === r ? (e.push((function () {
                    s.onPush({matrix: t, matrixPrevious: o, item: s, reason: i})
                })), this.m_pMatrix.emitHook("OnItemPush", {
                    matrix: this.m_pMatrix,
                    matrixPrevious: o,
                    item: this,
                    reason: i
                }, "lifo")) : (e.push((function () {
                    s.onChange({matrix: t, matrixPrevious: o, item: s, reason: i})
                })), this.m_pMatrix.emitHook("OnItemChange", {
                    matrix: this.m_pMatrix,
                    matrixPrevious: o,
                    item: this,
                    reason: i
                }))), !0)
            }, t.prototype.moveTo = function (e) {
                return !(!this.m_pMatrix || this.m_bPopped) && this.m_pMatrix.moveTo(this, e)
            }, t.prototype.moveToIndex = function (e) {
                return !(!this.m_pMatrix || this.m_bPopped) && this.m_pMatrix.moveToIndex(this, e)
            }, t.prototype.moveToPosition = function (e, t) {
                return !(!this.m_pMatrix || this.m_bPopped) && this.m_pMatrix.moveToPosition(this, e, t)
            }, t.prototype.moveToItem = function (e, t) {
                return !(!this.m_pMatrix || this.m_bPopped) && this.m_pMatrix.moveToItem(this, e, t)
            }, t.prototype.moveUpOrDown = function (e) {
                return !(!this.m_pMatrix || this.m_bPopped) && this.m_pMatrix.moveUpOrDown(this, e)
            }, t.prototype.swap = function (e) {
                return !(!this.m_pMatrix || this.m_bPopped) && this.m_pMatrix.swap(this, e)
            }, t.prototype.pop = function () {
                return !(this.m_pMatrix && !this.m_bPopped) || this.m_pMatrix.popFromMatrix(this, !0) instanceof t
            }, t.prototype.popSilent = function () {
                return !(this.m_pMatrix && !this.m_bPopped) || this.m_pMatrix.popFromMatrix(this, !1) instanceof t
            }, t.prototype.unpop = function (e, n) {
                return !(!this.m_bPopped || !e && !this.m_pMatrix) && (e || this.m_pMatrix).pushToMatrix(this, {
                    index: n,
                    recalculate: !0,
                    emit: "change"
                }) instanceof t
            }, t.prototype.unpopSilent = function (e, n) {
                return e = e || this.m_pMatrix, !(!this.m_bPopped || !e) && e.pushToMatrix(this, {
                    index: n,
                    recalculate: !0,
                    emit: "nothing"
                }) instanceof t
            }, t.enumerator = new i.Enumerator, t
        }(o.Hooks);
        t.Item = a
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(0), o = function (e) {
            function t(t, n, r, i) {
                void 0 === n && (n = 0), void 0 === r && (r = 0), void 0 === i && (i = 1);
                var o = e.call(this, n, r, i) || this;
                return o.m_pItemConstructor = t, o
            }

            return r.__extends(t, e), Object.defineProperty(t.prototype, "itemConstructor", {
                get: function () {
                    return this.m_pItemConstructor
                }, enumerable: !0, configurable: !0
            }), t.prototype.appendToMatrix = function (e) {
                return this.pushToMatrix(this.onItemInstance(e), {index: -1, recalculate: !0, emit: "push"})
            }, t.prototype.insertToMatrix = function (e) {
                return this.pushToMatrix(this.onItemInstance(e), {index: 0, recalculate: !0, emit: "push"})
            }, t.prototype.insertToMatrixAtCursor = function (e, t) {
                return this.pushToMatrix(this.onItemInstance(e), {
                    index: this.getSafeCursor(t).index,
                    recalculate: !0,
                    emit: "push"
                })
            }, t.prototype.insertToMatrixAtIndex = function (e, t) {
                return this.pushToMatrix(this.onItemInstance(e), {index: t, recalculate: !0, emit: "push"})
            }, t.prototype.insertToMatrixAtPosition = function (e, t, n) {
                return this.pushToMatrix(this.onItemInstance(e), {
                    index: this.indexFromColumnRow(t, n),
                    recalculate: !0,
                    emit: "push"
                })
            }, t.prototype.onItemInstance = function (e) {
                return new this.itemConstructor(i.cast(this), e)
            }, t
        }(n(33).Matrix);
        t.StrictMatrix = o
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = function (e) {
            function t(t) {
                return e.call(this, t) || this
            }

            return r.__extends(t, e), Object.defineProperty(t.prototype, "parent", {
                get: function () {
                    return this.matrix()
                }, enumerable: !0, configurable: !0
            }), t.prototype.matrix = function () {
                return e.prototype.matrix.call(this)
            }, t.prototype.insertBefore = function (e) {
                return this.parent.pushToMatrix(this.parent.onItemInstance(e), {
                    index: this.index,
                    recalculate: !0,
                    emit: "push"
                })
            }, t.prototype.insertAfter = function (e) {
                return this.parent.pushToMatrix(this.parent.onItemInstance(e), {
                    index: this.index + (this.isPopped ? 0 : 1),
                    recalculate: !0,
                    emit: "push"
                })
            }, t
        }(n(34).Item);
        t.StrictItem = i
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = function (e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                return r.m_pData = n, r
            }

            return r.__extends(t, e), Object.defineProperty(t.prototype, "data", {
                get: function () {
                    return this.m_pData
                }, set: function (e) {
                    this.m_pData !== e && (this.m_pData = e, this.emitHook("OnDataChange", {
                        model: this.parent,
                        item: this,
                        data: this.data
                    }), this.parent.emitHook("OnDataChange", {model: this.parent, item: this, data: this.data}))
                }, enumerable: !0, configurable: !0
            }), t.prototype.insertBefore = function (t) {
                return e.prototype.insertBefore.call(this, t)
            }, t.prototype.insertAfter = function (t) {
                return e.prototype.insertAfter.call(this, t)
            }, t
        }(n(36).StrictItem);
        t.ModelItem = i
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(23), o = function (e) {
            function t(t) {
                var n = e.call(this, t.state.ontology.constructors.condition) || this;
                return n.m_pBranch = t, n
            }

            return r.__extends(t, e), Object.defineProperty(t.prototype, "branch", {
                get: function () {
                    return this.m_pBranch
                }, enumerable: !0, configurable: !0
            }), t.prototype.create = function (e) {
                var t = i.Condition.getContext(e);
                if (!this.each((function (e) {
                    return e.context === t
                }))) return this.appendToMatrix(e)
            }, t
        }(n(2).StrictMatrix);
        t.Conditions = o
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(0), o = function (e) {
            function t(t) {
                var n = e.call(this, t.ontology.constructors.branch) || this;
                return n.m_pState = t, n
            }

            return r.__extends(t, e), Object.defineProperty(t.prototype, "state", {
                get: function () {
                    return this.m_pState
                }, enumerable: !0, configurable: !0
            }), t.prototype.create = function (e, t) {
                var n = this.appendToMatrix(e);
                return i.set(n, "ancestor", t), n
            }, t
        }(n(2).StrictMatrix);
        t.Branches = o
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(0), o = n(38), s = function (e) {
            function t(t, n) {
                var r = e.call(this, t, n.id) || this;
                return r.m_pStates = [], r.m_pConditions = new o.Conditions(r), r.m_pProps = n, r.m_sCulling = "each" === n.culling ? "each" : "first", r.m_bSpawn = i.castToBoolean(n.spawn), r
            }

            return r.__extends(t, e), Object.defineProperty(t.prototype, "branches", {
                get: function () {
                    return this.parent
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "states", {
                get: function () {
                    return this.m_pStates
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "state", {
                get: function () {
                    return this.branches.state
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "conditions", {
                get: function () {
                    return this.m_pConditions
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "props", {
                get: function () {
                    return this.m_pProps
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "culling", {
                get: function () {
                    return this.m_sCulling
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "spawn", {
                get: function () {
                    return this.m_bSpawn
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isMain", {
                get: function () {
                    return this.state.isMain
                }, enumerable: !0, configurable: !0
            }), t.prototype.entry = function (e) {
                return this.m_pStates.length > 0 ? this.m_pStates[0] : this.successor(e)
            }, t.prototype.onReady = function (e) {
                this.emitHook("OnReady", {branch: this, context: e})
            }, t.prototype.onEnter = function (e) {
                this.emitHook("OnEnter", {branch: this, context: e})
            }, t.prototype.onSkip = function (e) {
                this.emitHook("OnSkip", {branch: this, context: e})
            }, t.prototype.onLeave = function (e) {
                this.emitHook("OnLeave", {branch: this, context: e})
            }, t.prototype.onCancel = function (e) {
                this.emitHook("OnCancel", {branch: this, context: e})
            }, t
        }(n(15).Factory);
        t.Branch = s
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(24), o = n(0), s = function (e) {
            function t(t) {
                var n = e.call(this, t.constructors.state) || this;
                return n.m_pOntology = t, n
            }

            return r.__extends(t, e), Object.defineProperty(t.prototype, "ontology", {
                get: function () {
                    return this.m_pOntology
                }, enumerable: !0, configurable: !0
            }), t.prototype.main = function () {
                return this.pushToMatrix(new i.Main(this))
            }, t.prototype.create = function (e, t, n, r) {
                var i = this.appendToMatrix(e);
                return o.set(i, "ancestor", n), o.set(i, "branch", t), o.set(i, "enumerator", r), t.states.push(i), i
            }, t
        }(n(2).StrictMatrix);
        t.States = s
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(0), i = function () {
            function e(e) {
                var t;
                this.m_nPromises = 0, this.m_bAsynchronous = !1, this.m_bCanceled = !1, this.m_fnPromise = e.promise, this.m_bContinuous = r.castToBoolean(e.continuous), (t = e.await(this)) !== this && 0 === this.m_nPromises && this.return(t), this.m_bAsynchronous = !0, this.m_bCondition = r.castToBoolean(this.m_bCondition, !r.castToBoolean(e.conditional))
            }

            return e.of = function (t) {
                return new e(t)
            }, Object.defineProperty(e.prototype, "condition", {
                get: function () {
                    return r.castToBoolean(this.m_bCondition, !0)
                }, set: function (e) {
                    this.m_bCondition = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "isAlive", {
                get: function () {
                    return r.isFunction(this.m_fnPromise)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "promiseCount", {
                get: function () {
                    return this.m_nPromises
                }, enumerable: !0, configurable: !0
            }), e.prototype.terminate = function () {
                return this.return(void 0), this.condition
            }, e.prototype.cancel = function () {
                return this.m_bCanceled = !0, this.m_bCondition = !0, this.terminate()
            }, e.prototype.return = function (e) {
                return this.m_fnPromise && this.condition && (this.m_nPromises++, this.m_fnPromise({
                    isAsynchronous: this.m_bAsynchronous,
                    isCanceled: this.m_bCanceled,
                    payload: e
                }), this.m_bContinuous || (this.m_fnPromise = void 0)), e
            }, e
        }();
        t.Callback = i
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = function (e) {
            function t(t) {
                var n = e.call(this, t.ontology.constructors.transducer) || this;
                return n.m_pState = t, n
            }

            return r.__extends(t, e), Object.defineProperty(t.prototype, "state", {
                get: function () {
                    return this.m_pState
                }, enumerable: !0, configurable: !0
            }), t.prototype.create = function (e) {
                return this.appendToMatrix(e)
            }, t
        }(n(2).StrictMatrix);
        t.Transducers = i
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(4), o = function (e) {
            function t(t, n) {
                var r = e.call(this, t, n.id) || this;
                return r.m_pProps = n, r.m_pSlots = new i.Slots, r
            }

            return r.__extends(t, e), Object.defineProperty(t.prototype, "transducers", {
                get: function () {
                    return this.parent
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "state", {
                get: function () {
                    return this.transducers.state
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "slots", {
                get: function () {
                    return this.m_pSlots
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "props", {
                get: function () {
                    return this.m_pProps
                }, enumerable: !0, configurable: !0
            }), t.prototype.seal = function (e, t) {
                this.slots.each((function (n) {
                    var r = e.mutableValueOf(n);
                    r && (r.isSealed = t)
                }))
            }, t.prototype.shouldVerifySeal = function (e) {
                var t = !1;
                return this.slots.each((function (n) {
                    var r = e.mutableValueOf(n);
                    r && r.shouldVerifySeal && (t = !0)
                })), t
            }, t.prototype.onSkip = function (e) {
                this.emitHook("OnSkip", {transducer: this, context: e})
            }, t.prototype.onLeave = function (e) {
                this.emitHook("OnLeave", {transducer: this, context: e})
            }, t.prototype.onCancel = function (e) {
                this.emitHook("OnCancel", {transducer: this, context: e})
            }, t.prototype.onValidated = function (e, t, n) {
                this.emitHook("OnValidated", {transducer: this, context: e, result: t, type: n})
            }, t
        }(n(15).Factory);
        t.Transducer = o
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function () {
            function e(e) {
                this.m_pValue = e
            }

            return Object.defineProperty(e.prototype, "key", {
                get: function () {
                    return this.m_pValue.key
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "context", {
                get: function () {
                    return this.m_pValue.context
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "slot", {
                get: function () {
                    return this.m_pValue.slot
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "value", {
                get: function () {
                    return this.m_pValue.value
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "string", {
                get: function () {
                    return this.m_pValue.string
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "reference", {
                get: function () {
                    return this.m_pValue.reference
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "time", {
                get: function () {
                    return this.m_pValue.time
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "hasValue", {
                get: function () {
                    return this.m_pValue.hasValue
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "isModified", {
                get: function () {
                    return this.m_pValue.isModified
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "isSealed", {
                get: function () {
                    return this.m_pValue.isSealed
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "isLocked", {
                get: function () {
                    return this.m_pValue.isLocked
                }, enumerable: !0, configurable: !0
            }), e.prototype.subscribe = function (e, t) {
                var n = this;
                return this.m_pValue.subscribe((function () {
                    return e(n)
                }), t), this
            }, e.prototype.unsubscribe = function (e) {
                return this.m_pValue.unsubscribe(e), this
            }, e
        }();
        t.ImmutableValue = r
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(16), o = n(47), s = n(0), a = n(25), u = n(2), c = n(3), l = n(50), h = n(52), p = n(98),
            f = n(13), m = function (e) {
                function t(n, r, i, u, c) {
                    var m = e.call(this) || this;
                    if (m.m_pStack = new h.StackDispatcher, m.m_pMoments = {}, m.m_pChecksums = {}, m.m_pCache = {}, m.m_nChecksum = 0, m.m_pSnapshots = [], m.m_pHistory = [], m.m_pAutoPushForward = new s.Debounce((function () {
                        if (!m.isAtFinish && (m.orchestrator.autoPushForward || m.orchestrator.preview)) {
                            var e = m.presentMoment;
                            m.orchestrator.events.onInstanceProcessing(m, !1), e && e.state.await && e.state.await.done()
                        }
                    }), "promise"), m.m_bCreated = !1, m.m_bRunning = !1, m.m_bIsAtFinish = !1, m.m_bStopped = !0, m.m_bPaused = !1, m.m_nErrors = a.Errors.None, m.m_pOrchestrator = n, m.m_bAllowConcurrency = "multi" === r, m.m_bAutoPushForward = n.autoPushForward, m.m_bPreview = n.preview, m.m_pStackOrchestrator = {
                        instance: m,
                        get preview() {
                            return n.preview
                        },
                        spawn: function (e) {
                            return n.spawn(new t(n, "multi", e), m.index + (m.isPopped ? 0 : 1)).start()
                        },
                        validated: function (e) {
                            "pass" === e && (n.autoPushForward || n.preview) && (m.orchestrator.events.onInstanceProcessing(m, !0), m.m_pAutoPushForward.invoke())
                        },
                        cycle: function (e) {
                            m.orchestrator.events.onInstanceProcessing(m, e)
                        },
                        cancel: function () {
                            !m.isRunning || n.autoPushForward || n.preview || m.stepBackward() || m.stop()
                        },
                        snapshot: {
                            push: function () {
                                m.m_pSnapshot && (m.m_pSnapshots.push(m.m_pSnapshot), m.m_pSnapshot = void 0, m.map(!0))
                            }, make: function () {
                                m.m_pSnapshot = {a: m.stackSnapshots()}, m.pointer && s.set(m.m_pSnapshot, "b", m.pointer.id)
                            }
                        },
                        pointer: {
                            get: function () {
                                return m.pointer
                            }, assure: function (e) {
                                return m.m_pPointer || m.bind(e), m.pointer
                            }, release: function () {
                                return m.release()
                            }
                        },
                        chain: n.chain,
                        logger: function (e, t, n, r, i, o) {
                            if (t) {
                                var a = o instanceof f.State ? s.Str.padLeft(o.uniqueId, "0", 4) : o ? "End" : "-";
                                m.logger("Return<" + a + "> to Stack<" + s.Str.padLeft(t.uniqueId, "0", 4) + ">", n, r, i, e)
                            }
                        }
                    }, m.m_pData = new o.Data(n.states).hook("OnValueChange", "synchronous", (function (e) {
                        return m.goto(e.id, e.transducer)
                    })), m.m_pStack.hook("OnItemPush", "synchronous", (function (e) {
                        m.m_bIsAtFinish = !1, m.m_bCreated || (m.m_bCreated = !0, c && c(m), m.emitHook("OnCreate", {instance: m}), m.orchestrator.events.onInstanceCreate(m), m.logger("Created")), m.logger("Push", e.item.state, e.item.branch, e.item.condition, e.item)
                    })), m.m_pStack.hook("OnItemPop", "synchronous", (function (e) {
                        var t;
                        (m.logger("Pop", e.item.state, e.item.branch, e.item.condition, e.item), e.item.destroy(), m.m_pStack.isParsing) || (m.m_pStack.count > 0 ? m.m_pPointer === e.item && m.isRunning && (m.release(), m.m_pStack.reverseEach((function (e) {
                            return t && t !== e.ancestor || (t = e.ancestor, e.isScheduled && m.bind(e).step()), m.m_pPointer instanceof l.Stack
                        }))) : n.autoPushForward || n.preview ? m.m_bIsAtFinish = !0 : m.pop())
                    })), m.hook("OnItemPop", "synchronous", (function () {
                        if (m.m_bRunning) {
                            var e = m.presentMoment, t = m.isPaused ? "paused" : m.isStopped ? "stopped" : "finished";
                            m.m_bRunning = !1, "finished" !== t && e && e.state.await && e.state.await.cancel(), m.release(), m.m_pStack.clear(), m.m_pSnapshot = void 0, m.m_pSnapshots = [], m.m_pHistory = [], m.isPaused ? (m.emitHook("OnPause", {instance: m}), m.orchestrator.events.onInstancePause(m), m.logger("Pause")) : m.isStopped ? (m.emitHook("OnStop", {instance: m}), m.orchestrator.events.onInstanceStop(m), m.logger("Stop")) : (m.emitHook("OnFinish", {instance: m}), m.orchestrator.events.onInstanceFinish(m), m.logger("Finish")), m.emitHook("OnEnd", {
                                instance: m,
                                type: t
                            }), m.orchestrator.events.onInstanceEnd(m, t), m.logger("End")
                        }
                    })), i && (l.Stack.create(m.m_pStack, m.m_pStackOrchestrator, i), m.m_pInitial = {a: m.stackSnapshots()}, u)) if (u.a === m.fingerprint) {
                        var d = s.arraySize(u.b);
                        if (d > 0) {
                            var g = s.Num.range(s.castToNumber(u.d, d - 1), 0, d - 1), b = 0;
                            s.each(u.c, (function (e) {
                                var t = m.data.forSlot(e.a);
                                t ? t.restore(e) : m.m_nErrors |= a.Errors.ResumeInvalidData
                            })), s.each(u.b, (function (e) {
                                var t = new p.StackParser(m.m_pStackOrchestrator, e), n = t.state, r = t.context;
                                n && r && m.addMoment(m.m_pHistory, e, n, t.transducers, r, b < g ? "past" : b > g ? "future" : "present"), b++
                            })), m.revert(g)
                        } else m.m_nErrors |= a.Errors.ResumeInvalidStack
                    } else m.m_nErrors |= a.Errors.ResumeInvalidHash;
                    return m
                }

                return r.__extends(t, e), Object.defineProperty(t.prototype, "orchestrator", {
                    get: function () {
                        return this.m_pOrchestrator
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "pointer", {
                    get: function () {
                        return this.m_pPointer
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "successorMode", {
                    get: function () {
                        return this.isPreview ? "preview" : "live"
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "id", {
                    get: function () {
                        return this.hash
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "fingerprint", {
                    get: function () {
                        return this.orchestrator.fingerprint
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "allowConcurrency", {
                    get: function () {
                        return this.m_bAllowConcurrency
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "isPreview", {
                    get: function () {
                        return this.orchestrator.preview
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "isRunning", {
                    get: function () {
                        return this.m_bRunning
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "isStopped", {
                    get: function () {
                        return this.m_bStopped
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "isPaused", {
                    get: function () {
                        return this.m_bPaused
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "isFinished", {
                    get: function () {
                        return !this.isRunning && !this.isPaused && !this.isStopped
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "isAtStart", {
                    get: function () {
                        return 0 === s.arraySize(this.m_pSnapshots)
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "isAtHead", {
                    get: function () {
                        var e = this.history, t = s.arrayItem(e, e.length - 1);
                        return t && "present" === t.tense || !1
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "isAtFinish", {
                    get: function () {
                        var e = this;
                        return this.orchestrator.autoPushForward || this.orchestrator.preview ? this.m_bIsAtFinish : this.pointer instanceof l.Stack && (!this.pointer.state || !this.pointer.state.successor(this.successorMode) && !this.pointer.state.branches.each((function (t) {
                            return t.entry(e.successorMode) instanceof f.State
                        }))) && !this.m_pStack.reverseEach((function (t) {
                            return e.pointer !== t && (t.isBranch || !t.isAtFinish)
                        }))
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "isFinishable", {
                    get: function () {
                        return !this.isPreview && this.isRunning && this.isAtFinish && this.data.hasSealedValues
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "lookup", {
                    get: function () {
                        return this.orchestrator.chain
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "data", {
                    get: function () {
                        return this.m_pData
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "slots", {
                    get: function () {
                        return this.data.slots
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "history", {
                    get: function () {
                        return this.map(!1)
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "checksum", {
                    get: function () {
                        var e = this.m_nChecksum + "/" + this.m_pStack.checksum;
                        return this.m_pChecksums[e] || (this.m_pChecksums[e] = c.SHA2_256(e))
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "presentMoment", {
                    get: function () {
                        return s.findLast(this.history, (function (e) {
                            return "present" === e.tense
                        }))
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "snapshot", {
                    get: function () {
                        var e = this.history, t = {a: this.fingerprint, b: []};
                        if (s.each(e, (function (n) {
                            "present" === n.tense && t.b.length + 1 < e.length && s.set(t, "d", t.b.length), t.b.push(n.snapshot)
                        })), this.data.count > 0) {
                            var n = [];
                            this.data.each((function (e) {
                                var t = e.snapshot();
                                t && n.push(t)
                            })), n.length > 0 && s.set(t, "c", n)
                        }
                        return this.allowConcurrency && s.set(t, "e", !0), t
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "errors", {
                    get: function () {
                        return this.m_nErrors
                    }, enumerable: !0, configurable: !0
                }), t.prototype.logger = function (e, t, n, r, i) {
                    if (this.orchestrator.logger) {
                        var o = t ? s.Str.padLeft(t.uniqueId, "0", 4) : "----",
                            a = n ? s.Str.padLeft(n.uniqueId, "0", 4) : "----",
                            u = r ? s.Str.padLeft(r.uniqueId, "0", 4) : "----",
                            c = i ? s.Str.padLeft(i.uniqueId, "0", 4) : "----";
                        this.orchestrator.logger("Instance<" + s.Str.padLeft(this.uniqueId, "0", 4) + "> | State<" + o + "> Branch<" + a + "> Condition<" + u + "> | Stack<" + c + "> | " + e)
                    }
                }, t.prototype.bind = function (e) {
                    return this.m_pPointer = e, this.m_pPointer
                }, t.prototype.release = function () {
                    this.m_pPointer = void 0
                }, t.prototype.restore = function (e, t) {
                    this.m_pSnapshot = void 0;
                    var n = new p.StackParser(this.m_pStackOrchestrator, e, this.m_pStack);
                    return this.pointer && this.pointer.cancel(), n.pointer ? (this.bind(n.pointer), t && n.pointer.invalidate(t), this.isRunning && n.pointer.step(), !0) : (this.release(), this.isRunning && this.pop(), !1)
                }, t.prototype.revert = function (e, t) {
                    if (0 !== this.m_pHistory.length) {
                        var n = s.Num.range(e, 0, this.m_pHistory.length - 1), r = this.m_pHistory.slice(0, n),
                            i = this.m_pHistory[n].snapshot;
                        this.m_pSnapshots = s.map(r, (function (e) {
                            return e.snapshot
                        })), t && this.invalidateMoments(this.m_pHistory.splice(n)), this.restore(i, t) && this.addPointer(r)
                    }
                }, t.prototype.goto = function (e, t) {
                    var n = this.m_pMoments[e];
                    if (n && this.isRunning) {
                        var r = "present" === n.tense && this.pointer && !n.context.isMutableContextOf(this.pointer) && this.pointer.isEvaluating;
                        if (!r) if ("present" !== n.tense) {
                            var i = s.findLast(this.m_pHistory, (function (e) {
                                return "present" === e.tense
                            }));
                            (!i || n.index < i.index) && (r = !0)
                        } else r = this.m_bIsAtFinish;
                        r ? this.revert(n.index, t) : n.index + 1 < this.m_pHistory.length && (this.m_nChecksum++, this.invalidateMoments(this.m_pHistory.splice(n.index + 1)))
                    }
                }, t.prototype.map = function (e) {
                    var t, n = this, r = [];
                    if (!this.isRunning) return [];
                    if (s.each(this.m_pSnapshots, (function (e) {
                        var t = new p.StackParser(n.m_pStackOrchestrator, e), i = t.state, o = t.context;
                        i && o && n.addMoment(r, e, i, t.transducers, o, "past")
                    })), this.m_pSnapshot) {
                        var i = new p.StackParser(this.m_pStackOrchestrator, this.m_pSnapshot), o = i.state, a = i.context;
                        o && a && this.addMoment(r, this.m_pSnapshot, o, i.transducers, a, "past")
                    }
                    this.m_bIsAtFinish ? r.length > 0 && s.set(r[r.length - 1], "tense", "present") : this.addPointer(r), (t = this.m_pHistory).splice.apply(t, [0, r.length].concat(r));
                    var u = this.m_pHistory.splice(r.length);
                    return !e && r.length > 0 ? s.each(u, (function (e) {
                        e.transducers.length > 0 && (s.set(e, "tense", "future"), n.m_pHistory.push(e))
                    })) : this.invalidateMoments(u), this.m_pHistory
                }, t.prototype.addPointer = function (e) {
                    if (this.pointer) {
                        var t = this.pointer;
                        t.state && this.addMoment(e, {
                            a: this.stackSnapshots(),
                            b: t.id
                        }, t.state, t.transducers, new i.Context(t, this.orchestrator.chain), "present")
                    }
                }, t.prototype.addMoment = function (e, t, n, r, i, o) {
                    var a = this, u = e.length, l = {
                        get checksum() {
                            return s.getAny(this, "$checksum") || s.setAny(this, "$checksum", c.SHA2_256(u + "/" + n.hash + "/" + i.key))
                        }, index: u, snapshot: t, state: n, transducers: r, context: i, tense: o, restore: function () {
                            return a.isRunning && a.revert(u)
                        }
                    };
                    n.transducers.each((function (e) {
                        e.slots.each((function (e) {
                            var t = i.mutableValueOf(e);
                            t && s.set(a.m_pMoments, t.id, l)
                        }))
                    })), e.push(l)
                }, t.prototype.invalidateMoments = function (e) {
                    s.each(e, (function (e) {
                        e.state.transducers.each((function (t) {
                            return t.seal(e.context, !1)
                        }))
                    }))
                }, t.prototype.stackSnapshots = function () {
                    var e = [];
                    return this.m_pStack.each((function (t) {
                        e.push(t.snapshot())
                    })), e
                }, t.prototype.readFromCache = function (e) {
                    return this.m_pCache[e]
                }, t.prototype.writeToCache = function (e, t) {
                    return this.m_pCache[e] = t, t
                }, t.prototype.start = function () {
                    if (this.m_pAutoPushForward.cancel(), !this.isRunning) {
                        var e = this.m_pPointer || this.m_pStack.firstItem;
                        if (this.errors === a.Errors.None && e) return this.m_bRunning = !0, this.m_bStopped = !1, this.m_bPaused = !1, this.emitHook("OnStart", {instance: this}), this.orchestrator.events.onInstanceStart(this), this.logger("Start"), e.step(), !0;
                        this.pop()
                    }
                    return !1
                }, t.prototype.restart = function () {
                    var e = this.m_bAutoPushForward !== this.orchestrator.autoPushForward,
                        t = this.m_bPreview !== this.orchestrator.preview;
                    this.m_pAutoPushForward.cancel(), e || t ? (this.m_nChecksum++, e && (this.m_bAutoPushForward = this.orchestrator.autoPushForward, (this.orchestrator.autoPushForward || this.m_bIsAtFinish) && this.stepToHead()), t && (this.m_bPreview = this.orchestrator.preview, this.isRunning && this.m_pInitial && (this.m_pSnapshots = [], this.m_pHistory = [], this.restore(this.m_pInitial)))) : this.start() || this.stepToStart()
                }, t.prototype.stop = function () {
                    return this.m_pAutoPushForward.cancel(), !this.m_bStopped && (this.m_bStopped = !0, this.pop())
                }, t.prototype.pause = function () {
                    if (this.isPreview) throw new Error("Cannot pause instances that run in preview mode.");
                    var e = this.snapshot;
                    return this.m_bPaused || (this.m_bPaused = !0, this.pop()), e
                }, t.prototype.stepForward = function () {
                    if (this.isRunning) {
                        if (this.isFinishable) return this.pop();
                        var e = this.presentMoment;
                        if (e && e.state.await) return e.state.await.done()
                    }
                    return !1
                }, t.prototype.stepBackward = function () {
                    if (this.isRunning) {
                        var e = this.history, t = this.presentMoment;
                        if (t && t.index > 0) return e[t.index - 1].restore(), !0
                    }
                    return !1
                }, t.prototype.stepToStart = function () {
                    if (this.isRunning) {
                        var e = s.arrayItem(this.history, 0);
                        if (e) return e.restore(), !0
                    }
                    return !1
                }, t.prototype.stepToHead = function () {
                    if (this.isRunning) {
                        var e = this.history, t = s.arrayItem(e, e.length - 1);
                        if (t) return t.restore(), !0
                    }
                    return !1
                }, t.prototype.finish = function () {
                    return !!this.isFinishable && this.pop()
                }, t.prototype.transducers = function (e) {
                    this.orchestrator.transducers(e)
                }, t
            }(u.Item);
        t.Instance = m
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(0), o = n(2), s = n(4), a = n(48), u = function (e) {
            function t(t) {
                var n = e.call(this) || this;
                return n.m_pValues = {}, t.each((function (e) {
                    e.transducers.each((function (e) {
                        e.slots.each((function (t) {
                            n.forSlot(t) || a.Values.pushToMatrix(new a.Values(e, t), n)
                        }))
                    }))
                })), n
            }

            return r.__extends(t, e), Object.defineProperty(t.prototype, "slots", {
                get: function () {
                    var e = this;
                    return this.m_pSlots || (this.m_pSlots = [], this.each((function (t) {
                        i.castToBoolean(t.slot.exportable, !0) && e.m_pSlots.push(t.slot)
                    }))), this.m_pSlots
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "all", {
                get: function () {
                    var e = this;
                    return this.m_pAll || (this.m_pAll = [], this.each((function (t) {
                        i.castToBoolean(t.slot.exportable, !0) && e.m_pAll.push(t)
                    }))), this.m_pAll
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "hasSealedValues", {
                get: function () {
                    return !!i.findFirst(this.all, (function (e) {
                        return e.hasSealedValues
                    }))
                }, enumerable: !0, configurable: !0
            }), t.prototype.forSlot = function (e) {
                var t = e instanceof s.Slot ? e.id : e;
                if (t) {
                    var n = this.m_pValues[t];
                    return n || (this.each((function (e) {
                        return e.slot.id === t && (n = e, !0)
                    })), i.set(this.m_pValues, t, n)), n
                }
            }, t
        }(o.Matrix);
        t.Data = u
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(0), o = n(2), s = n(3), a = n(13), u = n(49), c = function (e) {
            function t(t, n) {
                var r = e.call(this) || this;
                return r.m_pContexts = {}, r.m_pValues = {}, r.m_pSlot = n, r.m_pTransducer = t, r
            }

            return r.__extends(t, e), Object.defineProperty(t.prototype, "data", {
                get: function () {
                    return this.parent
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "transducer", {
                get: function () {
                    return this.m_pTransducer
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "slot", {
                get: function () {
                    return this.m_pSlot
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "values", {
                get: function () {
                    var e = {};
                    return i.each(this.m_pValues, (function (t, n) {
                        t && !t.isDirty && i.set(e, n, {value: t.value, reference: t.reference, time: t.time || 0})
                    }), {keys: !0}), e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "hasSealedValues", {
                get: function () {
                    return !!i.findFirst(this.m_pValues, (function (e) {
                        return e && e.isSealed || !1
                    }))
                }, enumerable: !0, configurable: !0
            }), t.prototype.isSlotInBranch = function (e) {
                var t = this;
                return i.findFirst(e.states, (function (e) {
                    return e.transducers.each((function (e) {
                        return e.slots.each((function (e) {
                            return e.id === t.m_pSlot.id
                        }))
                    })) || e.branches.each((function (e) {
                        return t.isSlotInBranch(e)
                    }))
                })) instanceof a.State
            }, t.prototype.create = function (e, t) {
                var n = this;
                return i.set(this.m_pValues, e, new u.Value(this.slot, e, (function (e, t) {
                    var r = {
                        transducer: n.transducer,
                        slot: n.slot,
                        data: n.data,
                        id: e.id,
                        context: e.context,
                        get value() {
                            return e.immutable
                        }
                    };
                    switch (t) {
                        case"value":
                            n.emitHook("OnValueChange", r), n.data.emitHook("OnValueChange", r);
                            break;
                        case"seal":
                            n.emitHook("OnSealChange", r)
                    }
                }), t && t.b, t && t.c, t && t.e, i.Flags.has(t && t.d || 0, 1), i.Flags.has(t && t.d || 0, 2)))
            }, t.prototype.assert = function (e) {
                return this.m_pValues[e] || this.create(e)
            }, t.prototype.mutableContext = function (e) {
                for (var t = this, n = [], r = !1; e;) {
                    var o = e.mutableContext;
                    o && (r = r || this.isSlotInBranch(o.branch)) && n.push({
                        condition: o,
                        context: o.context
                    }), e = e.ancestor
                }
                if (n.length > 1) {
                    var a = "";
                    i.eachReverse(n, (function (e) {
                        a += e.context, i.set(e, "context", t.m_pContexts[a] || (t.m_pContexts[a] = s.SHA2_256(a)))
                    }))
                }
                return n
            }, t.prototype.immutableContext = function (e) {
                for (var t = []; e;) {
                    (c = e.immutableContext) && t.push(c), e = e.ancestor
                }
                var n = t.length;
                if (1 === n) return [{condition: t[0], context: t[0].context}];
                if (n > 1) {
                    for (var r = [], i = n - 1; i >= 0; i--) for (var o = 0, a = "", u = i; u >= 0; u--) {
                        var c;
                        a += (c = t[u]).context, r.push({
                            condition: c,
                            context: u === i ? c.context : s.SHA2_256(a),
                            relevance: o++
                        })
                    }
                    return r.sort((function (e, t) {
                        return t.relevance - e.relevance
                    })), r
                }
                return []
            }, t.prototype.mutableValue = function (e) {
                var t = this.mutableContext(e), n = t.length;
                if (0 === n) return this.assert("*");
                for (var r = 0; r < n; r++) {
                    var i = this.m_pValues[t[r].context];
                    if (i) return i
                }
                return this.create(t[0].context)
            }, t.prototype.immutableValue = function (e) {
                for (var t = this.immutableContext(e), n = t.length, r = 0; r < n; r++) {
                    var i = this.m_pValues[t[r].context];
                    if (i) return i.isSealed && i.immutable || void 0
                }
                var o = this.m_pValues["*"];
                return o && o.isSealed && o.immutable || void 0
            }, t.prototype.isModified = function (e) {
                var t = this.m_pValues[e];
                return t && t.isModified || !1
            }, t.prototype.snapshot = function () {
                var e = [];
                if (i.each(this.m_pValues, (function (t) {
                    if (t) {
                        var n = !1, r = i.Flags.convert(t.isSealed, t.isLocked), o = {a: t.context};
                        i.isDefined(t.pristine) && (i.set(o, "b", t.pristine), n = !0), i.isString(t.reference) && (i.set(o, "c", t.reference), n = !0), r > 0 && (i.set(o, "d", r), n = !0), i.isNumberFinite(t.time) && (i.set(o, "e", t.time), n = !0), n && e.push(o)
                    }
                })), e.length > 0) return {a: this.slot.id, b: e}
            }, t.prototype.restore = function (e) {
                var t = this;
                e.a === this.slot.id && i.each(e.b, (function (e) {
                    t.create(e.a, e)
                }))
            }, t.prototype.importValue = function (e, t) {
                this.assert(e).import(t.value, t.reference, t.time)
            }, t.prototype.import = function (e) {
                var t = this;
                i.each(e, (function (e, n) {
                    return t.importValue(n, e)
                }), {keys: !0})
            }, t
        }(o.Item);
        t.Values = c
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(0), i = n(22), o = n(45), s = n(3), a = function () {
            function e(t, n, r, o, s, a, u, c) {
                void 0 === u && (u = !1), void 0 === c && (c = !1), this.m_pSubscriptions = new i.Hooks, this.m_bVerifySeal = !1, this.m_nId = e.m_pEnumerator.n, this.m_pSlot = t, this.m_sContext = n, this.m_fnChange = r, this.m_pValue = o, this.m_sReference = s, this.m_bSealed = u, this.setTime(a), this.isLocked = c
            }

            return Object.defineProperty(e.prototype, "id", {
                get: function () {
                    return this.m_nId
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "key", {
                get: function () {
                    return this.m_sKey || (this.m_sKey = "_" + s.SHA2_256(this.slot.id + "/" + this.id))
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "context", {
                get: function () {
                    return this.m_sContext
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "slot", {
                get: function () {
                    return this.m_pSlot
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "pristine", {
                get: function () {
                    return this.m_pValue
                }, set: function (e) {
                    this.isLocked || e === this.m_pValue || (this.m_pValue = e, this.m_bVerifySeal = !0, this.setTime(), this.emitChange("value"))
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "value", {
                get: function () {
                    return this.slot.toValue(this.pristine)
                }, set: function (e) {
                    this.pristine = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "string", {
                get: function () {
                    return this.slot.toString(this.value)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "reference", {
                get: function () {
                    return this.m_sReference
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "hasValue", {
                get: function () {
                    return !!r.isNumberFinite(this.m_nTime)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "isModified", {
                get: function () {
                    return r.isUndefined(this.m_pImport) ? !this.isDirty && !r.isUndefined(this.m_pValue) : this.isDirty || this.m_pImport !== this.m_pValue
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "isSealed", {
                get: function () {
                    return this.m_bSealed
                }, set: function (e) {
                    this.m_bSealed !== e && (this.m_bSealed = e, e || (this.isLocked = !1), this.emitChange("seal"))
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "isDirty", {
                get: function () {
                    return !this.isSealed || !this.hasValue
                }, set: function (e) {
                    this.isLocked || (e ? this.m_nTime = void 0 : this.hasValue || (this.m_nTime = r.DateTime.now))
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "shouldVerifySeal", {
                get: function () {
                    return !!this.m_bVerifySeal && (this.m_bVerifySeal = !1, !0)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "time", {
                get: function () {
                    return this.m_nTime
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "immutable", {
                get: function () {
                    return new o.ImmutableValue(this)
                }, enumerable: !0, configurable: !0
            }), e.prototype.emitChange = function (e) {
                this.m_fnChange(this, e), this.m_pSubscriptions.emitHook("OnChange", {})
            }, e.prototype.setTime = function (e) {
                this.m_nTime = r.isUndefined(this.m_pValue) ? void 0 : r.isNumberFinite(e) ? e : r.DateTime.now
            }, e.prototype.set = function (e, t) {
                return this.isLocked || e === this.m_pValue && this.m_sReference === t || (this.m_pValue = e, this.m_sReference = t, this.m_bVerifySeal = !0, this.setTime(), this.emitChange("value")), this.value
            }, e.prototype.import = function (e, t, n) {
                return this.isLocked || r.isUndefined(e) || (this.m_pImport = e, e === this.m_pValue && t === this.m_sReference || (this.m_pValue = e, this.m_sReference = t, this.m_bVerifySeal = !0, this.setTime(n), this.emitChange("value"))), this.value
            }, e.prototype.confirm = function () {
                return this.isDirty = !1, this
            }, e.prototype.dirty = function () {
                return this.isDirty = !0, this
            }, e.prototype.subscribe = function (e, t) {
                var n = this;
                return this.m_pSubscriptions.hook("OnChange", "synchronous", (function () {
                    return e(n)
                }), t), this
            }, e.prototype.unsubscribe = function (e) {
                return this.m_pSubscriptions.unhook("OnChange", e), this
            }, e.m_pEnumerator = new r.Enumerator, e
        }();
        t.Value = a
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(11), o = n(16), s = n(0), a = n(2), u = n(51), c = function (e) {
            function t(t, n, r, i, o, a, c, l, h, p, f, m, d) {
                var g = e.call(this) || this;
                return g.m_pChecksum = new s.Enumerator, g.m_nChecksum = 0, g.m_bCanceled = !1, g.m_pOrchestrator = t, g.m_pAncestor = n, g.m_pState = r, g.m_pBranch = i, g.m_pBranched = a, g.m_bBranching = d, g.m_pCondition = o, g.m_pValidators = c || new u.Validators, g.m_nOpcode = l, g.m_nCounter = h, g.m_nSize = 0, g.m_bReturn = p, g.m_bReturnOverride = f, g.m_pReturn = m, g.m_bValidated = !1, g.m_nValidates = 0, g.m_bPass = !1, g.m_bEntered = !1, g.m_sChecksum = r && r.id || "", g
            }

            return r.__extends(t, e), t.create = function (e, n, r, i, o, s, a, u, c, l, h, p, f, m) {
                return void 0 === i && (i = void 0), void 0 === o && (o = void 0), void 0 === s && (s = void 0), void 0 === a && (a = void 0), void 0 === u && (u = void 0), void 0 === c && (c = 0), void 0 === l && (l = 0), void 0 === h && (h = !1), void 0 === p && (p = !1), void 0 === f && (f = void 0), void 0 === m && (m = !1), e.pushToMatrix(new t(n, i, r, o, s, a, u, c, l, h, p, f, m))
            }, Object.defineProperty(t.prototype, "orchestrator", {
                get: function () {
                    return this.m_pOrchestrator
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "assertPromise", {
                get: function () {
                    var e = this;
                    return function (t) {
                        return e.assert(t)
                    }
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "stack", {
                get: function () {
                    return this.matrix()
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "successorMode", {
                get: function () {
                    return this.orchestrator.preview ? "preview" : "live"
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "id", {
                get: function () {
                    return this.hash
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "instance", {
                get: function () {
                    return this.orchestrator.instance
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "ancestor", {
                get: function () {
                    return this.m_pAncestor
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "state", {
                get: function () {
                    return this.m_pState
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "transducers", {
                get: function () {
                    return this.m_pValidators.transducers
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "branch", {
                get: function () {
                    return this.m_pBranch
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "condition", {
                get: function () {
                    return this.m_pCondition
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "mutableContext", {
                get: function () {
                    return this.condition && "each" === this.condition.branch.culling && this.condition.branch.conditions.count > 1 && this.condition || void 0
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "immutableContext", {
                get: function () {
                    return this.condition
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "checksum", {
                get: function () {
                    return this.m_sChecksum + this.m_nChecksum
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isBranch", {
                get: function () {
                    return this.m_bBranching
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isScheduled", {
                get: function () {
                    return 9 === this.m_nOpcode
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isAtFinish", {
                get: function () {
                    return this.isPopped || 9 === this.m_nOpcode && this.m_bReturn && !this.m_pReturn
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isEvaluating", {
                get: function () {
                    return 2 === this.m_nOpcode || 5 === this.m_nOpcode || (3 === this.m_nOpcode || 9 === this.m_nOpcode) && this.m_nCounter > 0 || 8 === this.m_nOpcode
                }, enumerable: !0, configurable: !0
            }), t.prototype.create = function (e, n, r, i) {
                return this.stack.pushToMatrix(new t(this.orchestrator, e, n, r, i, void 0, void 0, 0, 0, !1, !1, void 0, !1), {
                    index: this.index + (this.isPopped ? 0 : 1),
                    recalculate: !0,
                    emit: "push"
                })
            }, t.prototype.assert = function (e) {
                return e.isAsynchronous && (this.m_nSize = 0), !this.isPopped && !this.m_bCanceled
            }, t.prototype.validate = function (e) {
                var t = this, n = ++this.m_nValidates;
                if (e || this.m_pValidators.clear(), this.state) {
                    var r = this.state, s = new o.Context(this, this.orchestrator.chain);
                    if (this.m_pValidators.isPassed) r.evaluate(i.Callback.of({
                        await: function (e) {
                            return t.orchestrator.preview || r.onValidate(s, t.m_bValidated ? t.m_bPass ? "pass" : "fail" : "unknown", e)
                        }, promise: function (i) {
                            if (n === t.m_nValidates && t.assert(i)) {
                                var o = i.payload || !1, a = !t.m_bValidated || t.m_bPass !== o, u = t.m_bValidated;
                                t.m_bValidated = !0, t.m_bPass = o, e && e(o), a && t.state && (t.state.onValidated(s, o ? "pass" : "fail", u ? "revalidate" : "initial"), t.orchestrator.validated(o ? "pass" : "fail")), e || t.step(o ? 7 : 3)
                            }
                            r.evaluate(i, s, t.assertPromise)
                        }
                    }), s, this.assertPromise); else {
                        var a = !this.m_bValidated || this.m_bPass, u = this.m_bValidated;
                        this.m_bValidated = !0, this.m_bPass = !1, e && e(!1), a && (this.state.onValidated(s, "fail", u ? "revalidate" : "initial"), this.orchestrator.validated("fail"))
                    }
                }
            }, t.prototype.return = function (e, t) {
                this.m_nCounter--, !e || this.m_bReturnOverride && !this.m_bReturn || (this.m_bReturn = !this.m_bReturnOverride || t === this.m_pReturn, this.m_pReturn = t, this.m_bReturnOverride = !0), this.step()
            }, t.prototype.step = function (e) {
                var t = this;
                if (!this.isPopped) {
                    var n = new o.Context(this, this.orchestrator.chain);
                    if (this.m_nSize > 1024) return this.m_nSize = 0, this.orchestrator.cycle(!0), void s.callPromise((function () {
                        t.orchestrator.cycle(!1), t.step(e)
                    }));
                    switch (this.m_nSize++, this.m_nChecksum = this.m_pChecksum.n, this.m_nOpcode = s.isNumber(e) ? e : this.m_nOpcode, this.m_nOpcode) {
                        case 0:
                            if (this.m_bReturnOverride = !1, this.branch) {
                                var r = this.branch, a = this.state, u = function (e) {
                                    a && a.evaluate(e, n, t.assertPromise)
                                };
                                this.m_nOpcode = 1, u(i.Callback.of({
                                    await: function (e) {
                                        return t.orchestrator.preview || r.onCondition(n, e)
                                    }, promise: function (e) {
                                        if (t.assert(e)) if (t.m_nOpcode = 2, t.m_nCounter = 0, e.payload) if (t.m_nCounter = "each" !== r.culling ? r.conditions.count : t.condition ? 1 : 0, 1 === t.m_nCounter && "each" === r.culling && t.condition) {
                                            var o = t.condition;
                                            u(i.Callback.of({
                                                await: function (e) {
                                                    return t.orchestrator.preview || o.onCondition(n, e)
                                                }, promise: function (e) {
                                                    t.assert(e) && (t.m_nCounter = 0, t.m_bReturn = t.m_bReturn || e.payload || !1, e.payload && r.onReady(n), t.step()), u(e)
                                                }
                                            }))
                                        } else t.m_nCounter > 0 ? r.conditions.each((function (e) {
                                            return u(i.Callback.of({
                                                await: function (r) {
                                                    return t.orchestrator.preview || e.onCondition(n, r)
                                                }, promise: function (i) {
                                                    t.assert(i) && t.m_nCounter > 0 && (i.payload ? (t.m_pCondition = e, t.m_bReturn = !0, t.m_nCounter = 0, r.onReady(n)) : t.m_nCounter--, t.step()), u(i)
                                                }
                                            })), 0 === t.m_nCounter
                                        })) : (r.onReady(n), t.m_bReturn = !0, t.step()); else t.step();
                                        u(e)
                                    }
                                }))
                            } else this.state ? this.step(4) : this.step(10);
                            break;
                        case 1:
                            break;
                        case 2:
                            if (0 === this.m_nCounter) {
                                if (this.branch) if (this.m_bReturn) {
                                    if (this.m_pReturn = this.branch.entry(this.successorMode), !this.branch.spawn) {
                                        this.step(9);
                                        break
                                    }
                                    this.m_bReturn = !1, this.m_pReturn && this.orchestrator.spawn(this.m_pReturn)
                                } else this.branch.onSkip(n);
                                this.step(10)
                            }
                            break;
                        case 4:
                            if (this.state) {
                                var c = this.state;
                                this.m_nOpcode = 5, this.m_pReturn = this.state.successor(this.successorMode), this.m_bReturn = !0, c.transducers.each((function (e) {
                                    return e.seal(n, !1)
                                })), c.evaluate(i.Callback.of({
                                    await: function (e) {
                                        return t.orchestrator.preview || c.onEnterCondition(n, e)
                                    }, promise: function (e) {
                                        t.assert(e) && (e.payload ? (t.m_nOpcode = 3, t.m_nCounter = c.transducers.count, t.m_pValidators.clear(), t.m_nCounter > 0 ? c.transducers.each((function (e) {
                                            c.evaluate(i.Callback.of({
                                                await: function (r) {
                                                    return t.orchestrator.preview || e.onEnterCondition(n, r)
                                                }, promise: function (r) {
                                                    t.assert(r) && (t.m_pValidators.create(e, n, r.payload || !1), t.m_nCounter--, t.step()), c.evaluate(r, n, t.assertPromise)
                                                }
                                            }), n, t.assertPromise)
                                        })) : t.step()) : (c.onSkip(n), t.step(9))), c.evaluate(e, n, t.assertPromise)
                                    }
                                }), n, this.assertPromise)
                            } else this.step(10);
                            break;
                        case 5:
                            break;
                        case 3:
                            if (this.state) {
                                if (0 === this.m_nCounter) if (this.m_nOpcode = 6, this.state.isMain) this.step(7); else {
                                    var l = !1;
                                    this.m_bValidated = !1, this.m_bPass = !1, this.m_bEntered = !0;
                                    var h = i.Await.for({
                                        await: function (e) {
                                            if (t.state) return t.orchestrator.snapshot.push(), t.state.await = e, t.state.emitHook("OnEnter", {
                                                state: t.state,
                                                context: n
                                            }), t.state.onEnter(n, e)
                                        }, promise: function (e) {
                                            t.assert(e) && (t.state && (t.state.await = void 0), e.isCanceled ? (t.m_nValidates++, t.m_pValidators.each((function (e) {
                                                return e.cancel()
                                            })), t.orchestrator.cancel()) : l ? t.step(7) : t.validate())
                                        }, conditional: !0
                                    });
                                    h.isAlive && (this.m_pValidators.each((function (e) {
                                        e.isEnabled ? (i.Await.for({
                                            await: function (t) {
                                                return e.transducer.emitHook("OnEnter", {
                                                    transducer: e.transducer,
                                                    context: n
                                                }), e.transducer.await = t, e.transducer.onEnter(n, t)
                                            }, promise: function (n) {
                                                t.assert(n) && n.isAsynchronous && e.validate(t.state, "revalidate", t.orchestrator.preview, t.assertPromise, (function () {
                                                    return t.validate((function (e) {
                                                        return h.condition = e
                                                    }))
                                                }))
                                            }, continuous: !0
                                        }), l = e.validate(t.state, "initial", t.orchestrator.preview, t.assertPromise, (function () {
                                            return t.validate((function (e) {
                                                return h.condition = e
                                            }))
                                        })) || l) : e.transducer.onSkip(n)
                                    })), l || (this.validate((function (e) {
                                        return h.condition = e
                                    })), l = !0))
                                }
                            } else this.step(10);
                            break;
                        case 6:
                            break;
                        case 7:
                            if (this.state) {
                                var p = this.state;
                                this.m_nOpcode = 8, p.evaluate(i.Callback.of({
                                    await: function (e) {
                                        return !!p.isMain || p.onLeaveCondition(n, e)
                                    }, promise: function (e) {
                                        if (t.assert(e)) if (e.payload) if (p.isMain || (t.m_pValidators.count > 0 && t.orchestrator.snapshot.make(), t.m_bEntered = !1, t.m_pValidators.each((function (e) {
                                            e.isEnabled && e.transducer.onLeave(n)
                                        })), p.onLeave(n)), t.m_nOpcode = 9, p.branches.count > 0) {
                                            if (p.branches.each((function (e) {
                                                t.m_nCounter += "each" === e.culling && e.conditions.count > 0 ? e.conditions.count : 1
                                            })), t.m_nCounter > 0) {
                                                var r = t.orchestrator.pointer.get();
                                                p.branches.each((function (e) {
                                                    if (t.m_bBranching = !e.isLast, r && r === t.orchestrator.pointer.get() && t.orchestrator.pointer.release(), "each" === e.culling && e.conditions.count > 0) {
                                                        var n = [];
                                                        e.conditions.each((function (r) {
                                                            n.push(t.create(t, t.state, e, r))
                                                        })), s.each(n, (function (e) {
                                                            return e.step()
                                                        }))
                                                    } else t.create(t, t.state, e).step()
                                                }))
                                            }
                                        } else t.step(); else t.m_nOpcode = 6, i.Await.for({
                                            await: function (e) {
                                                return t.state && t.state.onLeaveError(n, e)
                                            }, promise: function (e) {
                                                t.assert(e) && t.step(7)
                                            }
                                        });
                                        p.evaluate(e, n, t.assertPromise)
                                    }
                                }), n, this.assertPromise)
                            } else this.step(10);
                            break;
                        case 8:
                            break;
                        case 9:
                            if (0 === this.m_nCounter && this.orchestrator.pointer.assure(this) === this) {
                                if (this.branch && (this.m_pBranched = this.branch, this.branch.onEnter(n)), this.m_pReturn) {
                                    var f = this.ancestor && this.ancestor.state,
                                        m = f && f.successor(this.successorMode);
                                    if (!f || this.m_pReturn.uniqueId > f.uniqueId && (!m || this.m_pReturn.uniqueId < m.uniqueId)) {
                                        this.m_pState = this.m_pReturn, this.m_pBranch = void 0, this.m_sChecksum += this.m_pReturn.id, this.step(0);
                                        break
                                    }
                                }
                                this.step(10)
                            }
                            break;
                        case 10:
                            this.m_pBranched && (this.m_pBranched.onLeave(n), this.m_pBranched = void 0), this.orchestrator.logger(this, this.ancestor, this.state, this.branch, this.condition, this.m_bReturn ? this.m_pReturn || !0 : void 0), this.pop(), this.orchestrator.pointer.get() === this && this.orchestrator.pointer.release(), this.ancestor && this.ancestor.return(this.m_bReturn, this.m_pReturn)
                    }
                }
            }, t.prototype.invalidate = function (e) {
                var t = this.m_pValidators.forTransducer(e);
                t && t.invalidate()
            }, t.prototype.validationOf = function (e) {
                var t = this.m_pValidators.forTransducer(e);
                if (t) {
                    if (t.isPassed) return "pass";
                    if (t.isFailed) return "fail"
                }
                return "unknown"
            }, t.prototype.cancel = function () {
                this.m_bCanceled = !0
            }, t.prototype.destroy = function () {
                if (this.isPopped && this.state && !this.state.isMain) {
                    var e = new o.Context(this, this.orchestrator.chain);
                    this.m_bEntered && (this.m_pValidators.each((function (t) {
                        t.isEnabled && t.transducer.onCancel(e)
                    })), this.state && this.state.onCancel(e)), this.m_pBranched && this.m_pBranched.onCancel(e)
                }
            }, t.prototype.snapshot = function () {
                var e = {a: this.id}, t = s.Flags.convert(this.m_bReturn, this.m_bReturnOverride, this.m_bBranching),
                    n = 0;
                switch (this.m_nOpcode) {
                    case 2:
                        0 === this.m_nCounter && (n = 2);
                        break;
                    case 4:
                    case 5:
                        n = 4;
                        break;
                    case 3:
                        n = 0 === this.m_nCounter ? 3 : 4;
                        break;
                    case 6:
                    case 7:
                    case 8:
                        n = 3;
                        break;
                    case 9:
                        n = 9, this.m_nCounter > 0 && s.set(e, "b", this.m_nCounter);
                        break;
                    case 10:
                        n = 10
                }
                if (n > 0 && s.set(e, "c", n), t > 0 && s.set(e, "d", t), this.ancestor && s.set(e, "e", this.ancestor.id), this.state && s.set(e, "f", this.state.id), this.branch && s.set(e, "g", this.branch.id), this.m_pBranched && s.set(e, "h", this.m_pBranched.id), this.condition && s.set(e, "i", this.condition.id), this.m_pReturn && s.set(e, "j", this.m_pReturn.id), this.m_pValidators.count > 0) {
                    var r = [];
                    this.m_pValidators.each((function (e) {
                        var t = e.snapshot();
                        t && r.push(t)
                    })), r.length > 0 && s.set(e, "k", r)
                }
                return e
            }, t
        }(a.Item);
        t.Stack = c
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(0), o = n(2), s = n(97), a = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.m_pCache = [], t
            }

            return r.__extends(t, e), Object.defineProperty(t.prototype, "transducers", {
                get: function () {
                    var e = [];
                    return this.each((function (t) {
                        t.isEnabled && e.push(t.transducer)
                    })), e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isEnabled", {
                get: function () {
                    return this.each((function (e) {
                        return e.isEnabled
                    }))
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isPassed", {
                get: function () {
                    return !this.each((function (e) {
                        return e.isEnabled && !e.isPassed
                    }))
                }, enumerable: !0, configurable: !0
            }), t.prototype.create = function (e, t, n) {
                return this.pushToMatrix(new s.Validator(e, t, n))
            }, t.prototype.resume = function (e, t, n) {
                return this.pushToMatrix(new s.Validator(e, t, i.Flags.has(n.b, 1), i.Flags.has(n.b, 2) ? i.Flags.has(n.b, 3) : void 0))
            }, t.prototype.forTransducer = function (e) {
                var t;
                return this.each((function (n) {
                    return n.transducer === e && (t = n, !0)
                })), t || i.findLast(this.m_pCache, (function (t) {
                    return t.transducer === e
                }))
            }, t.prototype.clear = function () {
                var t = this;
                this.each((function (e) {
                    t.m_pCache.push(e)
                })), e.prototype.clear.call(this)
            }, t
        }(o.Matrix);
        t.Validators = a
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = function (e) {
            function t() {
                var t = e.call(this) || this;
                return t.m_sChecksum = "0", t.isParsing = !1, t.hook("OnItemPop", "synchronous", (function (e) {
                    var n = e.item;
                    t.m_sChecksum += "/" + n.checksum, n.destroy()
                })), t
            }

            return r.__extends(t, e), Object.defineProperty(t.prototype, "checksum", {
                get: function () {
                    var e = this.m_sChecksum;
                    return this.each((function (t) {
                        e += "/" + t.checksum
                    })), e
                }, enumerable: !0, configurable: !0
            }), t.prototype.clear = function () {
                e.prototype.clear.call(this), this.m_sChecksum = ""
            }, t
        }(n(2).Matrix);
        t.StackDispatcher = i
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(7), o = n(11), s = n(26), a = n(8), u = n(0), c = function (e) {
            function t(t, n) {
                return e.call(this, t, n) || this
            }

            return r.__extends(t, e), Object.defineProperty(t.prototype, "id", {
                get: function () {
                    return this.hash
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "collector", {
                get: function () {
                    return this.branch.collector
                }, enumerable: !0, configurable: !0
            }), t.prototype.onCondition = function (e, t) {
                if (!this.props.disabled) {
                    var n = s.ConditionBlocks.create(this, e);
                    if (n) {
                        var r = (this.props.block ? this.props.block.slot : "") || "";
                        if (r && !e.mutableValueOf(r)) return !1;
                        var i = {callback: t}, c = a.invokeMarker("condition", n, i);
                        return !(u.isBoolean(c) || c instanceof o.Callback) || c
                    }
                }
                return !1
            }, t = r.__decorate([i.ontology("conditions")], t)
        }(i.Condition);
        t.Condition = c
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(0), i = n(4), o = n(3), s = function () {
            function e(e, t) {
                this.m_pKeys = {}, this.m_pNode = e, this.context = t
            }

            return Object.defineProperty(e.prototype, "validation", {
                get: function () {
                    return this.context.validationOf(this.m_pNode)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "node", {
                get: function () {
                    return this.m_pNode.props
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "props", {
                get: function () {
                    return this.node.block
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "shouldAutoRender", {
                get: function () {
                    return this.type.autoRender || !1
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "shouldAutoValidate", {
                get: function () {
                    return r.castToBoolean(this.type.autoValidate, !0)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "isFailed", {
                get: function () {
                    return "fail" === this.validation
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "isPassed", {
                get: function () {
                    return "pass" === this.validation
                }, enumerable: !0, configurable: !0
            }), e.prototype.slotOf = function (e, t) {
                return this.m_pNode.slots.select(e, t)
            }, e.prototype.valueOf = function (e, t) {
                var n = e instanceof i.Slot ? e.slots === this.m_pNode.slots && e : this.slotOf(e, t);
                return n && this.context.mutableValueOf(n) || void 0
            }, e.prototype.immutableValueOf = function (e) {
                return this.context.immutableValueOf(e)
            }, e.prototype.variableFor = function (e) {
                return this.context.variableFor(e, (function (e) {
                    return e.props.block && e.props.block.slot
                }))
            }, e.prototype.key = function (e) {
                return void 0 === e && (e = "default"), this.m_pKeys[e] || (this.m_pKeys[e] = "_" + o.SHA2_256(this.m_pNode.id + "/" + this.context.key + "/" + e))
            }, e.prototype.rerender = function () {
                this.m_pNode.collector.rerender(this.context.instance)
            }, e
        }();
        t.NodeBlock = s
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(7), i = n(3), o = n(56), s = n(57), a = n(0);
        !function (e) {
            function t(e) {
                return {
                    fingerprint: e.fingerprint, fields: a.Str.iterateToString(e.fields, ",", (function (e) {
                        return '"' + a.Str.replace(e.name, '"', '""') + '"'
                    })), record: a.Str.iterateToString(e.fields, ",", (function (e) {
                        return '"' + a.Str.replace(e.string, '"', '""') + '"'
                    }))
                }
            }

            function n(e, t, n) {
                void 0 === n && (n = " / ");
                var s = e instanceof r.Context ? e.instance : e;
                return {
                    fingerprint: s.fingerprint, fields: a.map(o.populateSlots(s, t, n), (function (e) {
                        return {
                            name: e.name,
                            type: e.block.type,
                            version: e.block.version,
                            get node() {
                                return i.SHA2_256(e.node.id + "/" + e.context)
                            },
                            slot: e.slot.reference,
                            string: e.value && e.slot.toString(e.value.value) || "",
                            value: e.value && e.value.value,
                            modified: e.values.isModified(e.key),
                            reference: e.value && e.value.reference,
                            time: e.value && e.value.time,
                            key: e.key
                        }
                    }))
                }
            }

            function u(e, t, i) {
                void 0 === i && (i = " / ");
                var o = e instanceof r.Context ? e.instance : e, s = n(o, t, i);
                return {
                    fingerprint: o.fingerprint, fields: a.filter(s.fields, (function (e) {
                        return a.isNumberFinite(e.time)
                    }))
                }
            }

            function c(e, t, i) {
                void 0 === i && (i = " / ");
                var o = e instanceof r.Context ? e.instance : e, s = n(o, t, i);
                return {
                    fingerprint: o.fingerprint, fields: a.filter(s.fields, (function (e) {
                        return e.modified
                    }))
                }
            }

            e.values = function (e, t) {
                var n = e instanceof r.Context ? e.instance : e, i = {};
                return a.each(n.data.all, (function (e) {
                    var r = e.transducer, o = r.props.block;
                    !o || t && !a.findFirst(t, (function (t) {
                        return e.slot.id === t
                    })) || a.set(i, e.slot.id, {
                        fingerprint: n.fingerprint,
                        node: {
                            id: r.id,
                            name: s.markdownToPlainText(r.props.name || "") || s.markdownToPlainText(r.props.placeholder || "")
                        },
                        block: {type: o.type, version: o.version},
                        slot: {
                            id: e.slot.id,
                            reference: e.slot.reference,
                            name: e.slot.alias || e.slot.name || "",
                            label: e.slot.label || ""
                        },
                        values: e.values
                    })
                })), i
            }, e.fields = n, e.fieldsFilled = u, e.fieldsDiff = c, e.CSV = function (e, i, o) {
                return void 0 === o && (o = " / "), t(n(e instanceof r.Context ? e.instance : e, i, o))
            }, e.CSVFilled = function (e, n, i) {
                return void 0 === i && (i = " / "), t(u(e instanceof r.Context ? e.instance : e, n, i))
            }, e.CSVDiff = function (e, n, i) {
                return void 0 === i && (i = " / "), t(c(e instanceof r.Context ? e.instance : e, n, i))
            }
        }(t.Export || (t.Export = {}))
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(17), i = n(18), o = n(57), s = n(19), a = n(3), u = n(4), c = n(0);
        t.populateSlots = function (e, t, n) {
            void 0 === n && (n = " / ");
            var l = [];
            return e.transducers((function (h, p) {
                h.props.block && h.slots.each((function (f) {
                    var m;
                    if (c.castToBoolean(f.exportable, !0) && !t || c.findFirst(t, (function (e) {
                        return f.id === e
                    }))) {
                        var d = e.data.forSlot(f);
                        if (d) {
                            var g = 0 === p.length ? "*" : 1 === p.length ? p[0].context : a.SHA2_256(c.Str.iterateToString(p, "", (function (e) {
                                return e.context
                            }))), b = [f.alias || f.name || ""];
                            b[0] || (b[0] = o.markdownToPlainText(h.props.name || "") || o.markdownToPlainText(h.props.placeholder || ""), b[0] && h.slots.count > 1 && f.label && b.push(f.label), !b[0] && f.label && (b[0] = f.label)), p.length > 0 && (b = (m = c.filter(c.map(p, (function (t) {
                                if (t.props.block) {
                                    var n = t.props.block;
                                    if (n.slot) {
                                        var o = e.lookup.slot(n.slot);
                                        if (o instanceof u.Slot) if (l = o.alias || o.name || "") return l
                                    }
                                    if (n.node) {
                                        var a = e.lookup.transducer(n.node);
                                        if (a instanceof s.Node) if (l = a.props.name || a.props.placeholder) return l
                                    }
                                    if (n.cluster) {
                                        var c = e.lookup.state(n.cluster);
                                        if (c instanceof i.Cluster) if (l = c.props.name) return l
                                    }
                                    if (n.branch) {
                                        var l, h = e.lookup.branch(n.branch);
                                        if (h instanceof r.Branch) if (l = h.props.name) return l
                                    }
                                }
                                return ""
                            })), (function (e) {
                                return !!e
                            }))).concat.apply(m, b)), l.push({
                                node: h,
                                block: {type: h.props.block.type, version: h.props.block.version},
                                slot: f,
                                name: c.Str.iterateToString(b, n),
                                context: g,
                                key: a.SHA2_256(f.id + "/" + g),
                                values: d,
                                value: d.values[g]
                            })
                        }
                    }
                }))
            })), l
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(29);
        t.markdownToPlainText = function (e, t) {
            return void 0 === t && (t = "___"), r.MarkdownParser.parse(e, {
                features: r.MarkdownFeatures.Formatting | r.MarkdownFeatures.Hyperlinks,
                mentions: {
                    numberOfChars: 64, parser: function (e) {
                        if (/[A-Fa-f0-9]{64}/.test(e)) return {shift: 64, text: t}
                    }
                }
            }).text
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            e[e.None = 0] = "None", e[e.Formatting = 1] = "Formatting", e[e.Paragraphs = 2] = "Paragraphs", e[e.Breaks = 4] = "Breaks", e[e.Hyperlinks = 8] = "Hyperlinks", e[e.Headings = 16] = "Headings", e[e.Blockquotes = 32] = "Blockquotes", e[e.Code = 64] = "Code", e[e.InlineCode = 128] = "InlineCode", e[e.Images = 256] = "Images", e[e.All = 511] = "All"
        }(t.MarkdownFeatures || (t.MarkdownFeatures = {}))
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(7), i = n(0), o = n(56);
        !function (e) {
            e.values = function (e, t, n) {
                var o = e instanceof r.Context ? e.instance : e, s = !1;
                return i.each(t, (function (e, t) {
                    var r = o.data.forSlot(t);
                    r && i.castToBoolean(r.slot.exportable, !0) && (!n || i.findFirst(n, (function (e) {
                        return r.slot.id === e
                    }))) ? r.import(e.values) : s = !0
                }), {keys: !0}), o.stepToHead(), !s
            }, e.fields = function (e, t, n, s) {
                void 0 === s && (s = " / ");
                var a = e instanceof r.Context ? e.instance : e, u = o.populateSlots(a, n, s), c = !1;
                return i.each(t, (function (e) {
                    var t = i.findFirst(u, (function (t) {
                        return t.key === e.key || t.name === e.name
                    }));
                    t ? t.values.importValue(t.context, {value: e.value, reference: e.reference, time: e.time}) : c = !0
                })), !c
            }, e.CSV = function (e, t, n) {
                for (var s = e instanceof r.Context ? e.instance : e, a = o.populateSlots(s, n), u = i.stringLength(t), c = [], l = !0, h = !1, p = "", f = 0; f < u; f++) {
                    var m = t.charAt(f), d = '"' === m;
                    h ? d ? f + 1 < u && '"' === t.charAt(f + 1) ? (p += '"', f++) : (c.push(p || void 0), h = !1, p = "") : p += m : l && d ? (l = !1, h = !0) : "," === m && (l = !0)
                }
                if (h && c.push(p), c.length === a.length) {
                    var g = 0;
                    return i.each(a, (function (e) {
                        return e.values.importValue(e.context, {value: c[g++]})
                    })), !0
                }
                return !1
            }
        }(t.Import || (t.Import = {}))
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(0), i = n(61), o = function () {
            function e(e) {
                this.m_pMomentsCache = {}, this.m_nMoments = 0, this.m_nMoment = 0, this.m_pOrchestrator = e
            }

            return Object.defineProperty(e.prototype, "immutable", {
                get: function () {
                    var e, t, n = this, i = this.moments, o = [], s = !1, a = !0, u = 0, c = 0;
                    return r.each(i, (function (n) {
                        o.push.apply(o, n.nodes), u += n.count, c += n.enumerators, !e && n.isPresent && (e = n, t = n.cluster), !s && n.isEvaluating && (s = !0), a && n.nodes.length > 0 && (a = !1)
                    })), {
                        moments: i,
                        pages: this.pages,
                        presentMoment: e,
                        presentCluster: t,
                        presentNodes: e && e.nodes || [],
                        activeNodes: o,
                        isEvaluating: s,
                        isEmpty: a,
                        isAtStart: this.isAtStart,
                        isAtHead: this.isAtHead,
                        isAtFinish: this.isAtFinish,
                        isFinishable: this.isFinishable,
                        isFailed: e && e.isFailed || !1,
                        isPassed: e && e.isPassed || !1,
                        mode: this.mode,
                        direction: this.direction,
                        count: u,
                        enumerators: c,
                        percentage: this.presentCluster && this.presentCluster.percentageInCollector || 0,
                        map: function (e) {
                            var t = 0;
                            return r.map(i, (function (n) {
                                return e(n, t++)
                            }))
                        },
                        stepForward: function () {
                            return n.stepForward()
                        },
                        stepBackward: function () {
                            return n.stepBackward()
                        },
                        stepToStart: function () {
                            return n.stepToStart()
                        },
                        stepToHead: function () {
                            return n.stepToHead()
                        },
                        stepToPage: function (e) {
                            return n.stepToPage(e)
                        },
                        finish: function () {
                            return n.finish()
                        }
                    }
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "instance", {
                get: function () {
                    return this.m_pOrchestrator.instance
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "moments", {
                get: function () {
                    return this.parseMoments()
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "pages", {
                get: function () {
                    var e = this, t = [];
                    if ("paginated" === this.mode) {
                        this.parseMoments();
                        for (var n = function (n) {
                            t.push({
                                number: n, active: n === r.m_nMoment, activate: function () {
                                    return e.stepToPage(n)
                                }
                            })
                        }, r = this, i = 1; i <= this.m_nMoments; i++) n(i)
                    }
                    return t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "presentMoment", {
                get: function () {
                    return r.findFirst(this.moments, (function (e) {
                        return e.isPresent
                    }))
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "presentCluster", {
                get: function () {
                    var e = this.presentMoment;
                    return e && e.cluster
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "presentNodes", {
                get: function () {
                    var e = this.presentMoment;
                    return e && e.nodes || []
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "activeNodes", {
                get: function () {
                    var e = [];
                    return r.each(this.moments, (function (t) {
                        e.push.apply(e, t.nodes)
                    })), e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "isEvaluating", {
                get: function () {
                    for (var e = this.moments, t = e.length, n = 0; n < t; n++) if (e[n].isEvaluating) return !0;
                    return !1
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "isEmpty", {
                get: function () {
                    return !r.findFirst(this.moments, (function (e) {
                        return e.nodes.length > 0
                    }))
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "isAtStart", {
                get: function () {
                    return this.instance.isAtStart
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "isAtHead", {
                get: function () {
                    return this.instance.isAtHead
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "isAtFinish", {
                get: function () {
                    return this.instance.isAtFinish
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "isFinishable", {
                get: function () {
                    return this.instance.isFinishable
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "isFailed", {
                get: function () {
                    var e = this.presentMoment;
                    return e && e.isFailed || !1
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "isPassed", {
                get: function () {
                    var e = this.presentMoment;
                    return e && e.isPassed || !1
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "mode", {
                get: function () {
                    return this.instance.isPreview ? "progressive" : this.m_pOrchestrator.mode
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "direction", {
                get: function () {
                    return this.m_pOrchestrator.direction
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "count", {
                get: function () {
                    var e = 0;
                    return r.each(this.moments, (function (t) {
                        e += t.count
                    })), e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "enumerators", {
                get: function () {
                    var e = 0;
                    return r.each(this.moments, (function (t) {
                        e += t.enumerators
                    })), e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "percentage", {
                get: function () {
                    return this.presentCluster && this.presentCluster.percentageInCollector || 0
                }, enumerable: !0, configurable: !0
            }), e.prototype.parseMoments = function () {
                var e = this.m_pOrchestrator.checksum;
                if (this.instance.isRunning) {
                    if (!this.m_pMoments || this.m_sChecksum !== e) {
                        var t = [], n = this.instance.history, r = !1, o = 0;
                        this.m_nMoments = n.length, this.m_nMoment = 0;
                        for (var s = 0; s < this.m_nMoments; s++) {
                            var a = n[s];
                            if (r && "progressive" !== this.mode) break;
                            var u = this.m_pMomentsCache[a.checksum] || (this.m_pMomentsCache[a.checksum] = new i.Moment(a, o));
                            u.count > 0 && (o += u.enumerators, "present" !== a.tense && "paginated" === this.mode || t.push(u)), (r = r || "present" === a.tense) && 0 === this.m_nMoment && (this.m_nMoment = s + 1)
                        }
                        this.m_pMoments = t, this.m_sChecksum = e
                    }
                } else this.m_sChecksum = void 0, this.invalidate();
                return this.m_pMoments || []
            }, e.prototype.invalidate = function () {
                this.m_pMoments = void 0, this.m_nMoments = 0, this.m_nMoment = 0
            }, e.prototype.reset = function () {
                this.m_pMomentsCache = {}
            }, e.prototype.map = function (e) {
                var t = 0;
                return r.map(this.moments, (function (n) {
                    return e(n, t++)
                }))
            }, e.prototype.stepForward = function () {
                return this.instance.stepForward()
            }, e.prototype.stepBackward = function () {
                return this.instance.stepBackward()
            }, e.prototype.stepToStart = function () {
                return this.instance.stepToStart()
            }, e.prototype.stepToHead = function () {
                return this.instance.stepToHead()
            }, e.prototype.stepToPage = function (e) {
                var t = this.instance.history;
                return e > 0 && e <= t.length && (t[e - 1].restore(), !0)
            }, e.prototype.finish = function () {
                return this.instance.finish()
            }, e.prototype.getNodeByKey = function (e) {
                var t;
                return r.findFirst(this.moments, (function (n) {
                    return !!(t = r.findFirst(n.nodes, (function (t) {
                        return t.key === e
                    })))
                })), t
            }, e.prototype.getKeyByNodeId = function (e) {
                var t;
                return r.findFirst(this.moments, (function (n) {
                    return !!(t = r.findFirst(n.nodes, (function (t) {
                        return t.id === e
                    })))
                })), t ? t.key : void 0
            }, e
        }();
        t.Storyline = o
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(0), i = n(3), o = n(27), s = function () {
            function e(t, n) {
                var i = this;
                this.m_pNodes = [], this.m_nEnumerators = 0, this.m_pMoment = t, r.each(t.transducers, (function (s) {
                    var a = s.block(t.context), u = r.castToBoolean(s.props.nameVisible, !0);
                    a instanceof o.HeadlessBlock || (a || s.props.description || s.props.name && u) && i.nodes.push({
                        id: s.id,
                        get key() {
                            return e.key(t, s)
                        },
                        node: s,
                        props: s.props,
                        block: a,
                        context: t.context,
                        enumerator: function () {
                            if (a && s.slots.count > 0 && u) return i.m_nEnumerators++, ++n
                        }(),
                        get validation() {
                            return a ? a.validation : "pass"
                        },
                        get isFailed() {
                            return !!a && a.isFailed
                        },
                        get isPassed() {
                            return !a || a.isPassed
                        },
                        observer: "present" === t.tense && s.await || void 0
                    })
                }))
            }

            return e.key = function (e, t) {
                var n = e.index + "/" + t.id;
                return this.m_pKeys[n] || (this.m_pKeys[n] = "_" + i.SHA2_256(n))
            }, Object.defineProperty(e.prototype, "cluster", {
                get: function () {
                    return this.m_pMoment.state
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "nodes", {
                get: function () {
                    return this.m_pNodes
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "tense", {
                get: function () {
                    return this.m_pMoment.tense
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "isPast", {
                get: function () {
                    return "past" === this.tense
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "isPresent", {
                get: function () {
                    return "present" === this.tense
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "isFuture", {
                get: function () {
                    return "future" === this.tense
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "isEvaluating", {
                get: function () {
                    return this.m_pMoment.state.isEvaluating
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "isFailed", {
                get: function () {
                    return !this.isEvaluating && "fail" === this.cluster.getValidation(this.m_pMoment.context)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "isPassed", {
                get: function () {
                    return !this.isEvaluating && "pass" === this.cluster.getValidation(this.m_pMoment.context)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "count", {
                get: function () {
                    return this.nodes.length
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "enumerators", {
                get: function () {
                    return this.m_nEnumerators
                }, enumerable: !0, configurable: !0
            }), e.prototype.restore = function () {
                this.m_pMoment.restore()
            }, e.m_pKeys = {}, e
        }();
        t.Moment = s
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(0), i = function () {
            function e(e) {
                this.m_nPlurals = 1;
                var t = (this.m_pTranslation = e)[""];
                if (r.isObject(t)) {
                    var n = r.castToString(t["plural-forms"]);
                    if (r.isFilledString(n)) {
                        var i, o = /nplurals\=(\d+);/;
                        n = n.replace(/^\s\s*/, "").replace(/\s\s*$/, ""), /;\s*$/.test(n) || (n = n.concat(";")), (i = r.castToNumber(r.arrayItem(n.match(o), 1))) > 1 && (n = n.replace(o, ""), n = r.castToString(r.arrayItem(n.match(/plural\=(.*);/), 1)), r.isFilledString(n) && /^[0-9n\u002b\u002d\u002a\u002f\u0025\u003e\u003c\u003d\u0021\u007e\u007c\u0026\u005e\u0028\u0029\u003a\u003b\u003f\s]+$/.test(n) && (this.m_nPlurals = i, this.m_fnPlural = new Function("n", "return " + n)))
                    }
                }
            }

            return e.isLoaded = function (t) {
                return this.m_pDomains[t] instanceof e
            }, Object.defineProperty(e, "domains", {
                get: function () {
                    var e = [];
                    return r.each(this.m_pDomains, (function (t, n) {
                        e.push(n)
                    }), {keys: !0}), e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "default", {
                get: function () {
                    return this.m_sDomain
                }, set: function (e) {
                    this.isLoaded(e) && (this.m_sDomain = e)
                }, enumerable: !0, configurable: !0
            }), e.load = function (t, n, i) {
                var o = this;
                void 0 === n && (n = !0), void 0 === i && (i = !1);
                var s = !1, a = "";
                return r.each(r.isArray(t) ? t : [t], (function (t) {
                    if (r.isObject(t)) {
                        var n = t[""];
                        if (r.isObject(n) && r.isFilledString(n.language)) {
                            var u = i ? void 0 : o.m_pDomains[n.language];
                            u ? u.enrich(t) : o.m_pDomains[n.language] = new e(t), "" === a && (a = n.language), s = !0
                        }
                    }
                })), n && r.isFilledString(a) && (this.default = a), s
            }, e.translate = function (e, t, n, i, o, s) {
                void 0 === i && (i = !1), void 0 === o && (o = ""), void 0 === s && (s = 0);
                for (var a = [], u = 6; u < arguments.length; u++) a[u - 6] = arguments[u];
                var c = this.m_pDomains[e], l = "";
                if (c) {
                    var h = (r.isFilledString(t) ? t + "" : "") + n;
                    l = r.arrayItem(c.translation(h), 1 + (i ? c.plural(s) : 0), "")
                }
                return r.isFilledString(l) || (l = i && 1 !== s ? o : n), a.length > 0 ? l.replace(/%(\d+)/g, (function (e, t) {
                    return r.castToString(r.arrayItem(a, r.castToNumber(t) - 1, e))
                })) : l
            }, Object.defineProperty(e.prototype, "plurals", {
                get: function () {
                    return this.m_nPlurals
                }, enumerable: !0, configurable: !0
            }), e.prototype.enrich = function (e) {
                var t = this;
                r.each(e, (function (e, n) {
                    t.m_pTranslation[n] || (t.m_pTranslation[n] = e)
                }), {keys: !0})
            }, e.prototype.plural = function (e) {
                return r.Num.range(r.castToNumber(r.callFunction(this.m_fnPlural || function (e) {
                    return 1 !== e
                }, e)), 0, this.plurals - 1)
            }, e.prototype.translation = function (e) {
                return this.m_pTranslation[e]
            }, e.m_pDomains = {}, e.m_sDomain = "", e
        }();
        t.Domain = i
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(0), i = n(111);
        t.DEFAULTS = {
            locale: "en",
            domain: "en",
            countryCode: "",
            country: "",
            countryNative: "",
            language: "English",
            languageNative: "English",
            translations: {
                months: {
                    formatted: {
                        abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                        wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                    },
                    nominative: {
                        abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                        wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                    }
                },
                days: {
                    formatted: {
                        abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        narrow: ["S", "M", "T", "W", "T", "F", "S"],
                        short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                        wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                    },
                    nominative: {
                        abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        narrow: ["S", "M", "T", "W", "T", "F", "S"],
                        short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                        wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                    }
                },
                time: {AM: "AM", PM: "PM"}
            },
            formats: {
                date: {full: "EEEE, MMMM d, y", long: "MMMM d, y", medium: "MMM d, y", short: "M/d/yy"},
                time: {full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a"},
                dateTime: {full: "{1} 'at' {0}", long: "{1} 'at' {0}", medium: "{1}, {0}", short: "{1}, {0}"},
                numbers: {decimals: ".", grouping: ",", minus: "-"}
            }
        };
        var o = function () {
            function e() {
            }

            return Object.defineProperty(e, "locale", {
                get: function () {
                    return this.m_pLocale || t.DEFAULTS
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "domain", {
                get: function () {
                    return this.locale.domain
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "countryCode", {
                get: function () {
                    return this.locale.countryCode
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "country", {
                get: function () {
                    return this.locale.country
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "countryNative", {
                get: function () {
                    return this.locale.countryNative
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "language", {
                get: function () {
                    return this.locale.language
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "languageNative", {
                get: function () {
                    return this.locale.languageNative
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "locales", {
                get: function () {
                    var e = [];
                    return r.each(i.DOMAINS, (function (t, n) {
                        e.push(n)
                    }), {keys: !0}), e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "domains", {
                get: function () {
                    var e = [];
                    return r.each(i.DOMAINS, (function (t, n) {
                        e.push({locale: n, language: t[0], native: t[1]})
                    }), {keys: !0}), e
                }, enumerable: !0, configurable: !0
            }), e.isLoaded = function (e) {
                return r.isFilledString(e) && r.isObject(this.m_pLocales[e])
            }, e.load = function (e, n) {
                var i = this;
                void 0 === n && (n = !0);
                var o = !1;
                return r.each(r.isArray(e) ? e : [e], (function (e) {
                    r.compare(e, t.DEFAULTS, !1) && (i.isLoaded(e.locale) || (i.m_pLocales[e.locale] = e), o = !0)
                })), o && n && !r.isArray(e) && this.set(e.locale), o
            }, e.get = function (e) {
                return (r.isFilledString(e) ? this.m_pLocales[e] : void 0) || this.locale
            }, e.set = function (e) {
                return r.isObject(this.m_pLocale = this.isLoaded(e) && this.m_pLocales[e].locale === e ? this.m_pLocales[e] : void 0)
            }, e.number = function (e, t, n, i) {
                return void 0 === t && (t = 0), void 0 === n && (n = !0), r.Num.format(e, t, n ? this.get(i).formats.numbers.grouping : "", this.get(i).formats.numbers.decimals, this.get(i).formats.numbers.minus)
            }, e.dateTime = function (e, t, n, i) {
                return void 0 === t && (t = r.DateTime.now), void 0 === n && (n = !1), r.DateTime.format(e, t, n, {
                    monthsFormattedAbbreviated: this.get(i).translations.months.formatted.abbreviated,
                    monthsFormattedNarrow: this.get(i).translations.months.formatted.narrow,
                    monthsFormattedWide: this.get(i).translations.months.formatted.wide,
                    monthsNominativeAbbreviated: this.get(i).translations.months.nominative.abbreviated,
                    monthsNominativeNarrow: this.get(i).translations.months.nominative.narrow,
                    monthsNominativeWide: this.get(i).translations.months.nominative.wide,
                    weekdaysFormattedAbbreviated: this.get(i).translations.days.formatted.abbreviated,
                    weekdaysFormattedNarrow: this.get(i).translations.days.formatted.narrow,
                    weekdaysFormattedShort: this.get(i).translations.days.formatted.short,
                    weekdaysFormattedWide: this.get(i).translations.days.formatted.wide,
                    weekdaysNominativeAbbreviated: this.get(i).translations.days.nominative.abbreviated,
                    weekdaysNominativeNarrow: this.get(i).translations.days.nominative.narrow,
                    weekdaysNominativeShort: this.get(i).translations.days.nominative.short,
                    weekdaysNominativeWide: this.get(i).translations.days.nominative.wide,
                    AM: this.get(i).translations.time.AM,
                    PM: this.get(i).translations.time.PM
                })
            }, e.dateFull = function (e, t, n) {
                return void 0 === e && (e = r.DateTime.now), void 0 === t && (t = !1), this.dateTime(this.get(n).formats.date.full, e, t, n)
            }, e.dateLong = function (e, t, n) {
                return void 0 === e && (e = r.DateTime.now), void 0 === t && (t = !1), this.dateTime(this.get(n).formats.date.long, e, t, n)
            }, e.dateMedium = function (e, t, n) {
                return void 0 === e && (e = r.DateTime.now), void 0 === t && (t = !1), this.dateTime(this.get(n).formats.date.medium, e, t, n)
            }, e.dateShort = function (e, t, n) {
                return void 0 === e && (e = r.DateTime.now), void 0 === t && (t = !1), this.dateTime(this.get(n).formats.date.short, e, t, n)
            }, e.timeFull = function (e, t, n) {
                return void 0 === e && (e = r.DateTime.now), void 0 === t && (t = !1), this.dateTime(this.get(n).formats.time.full, e, t, n)
            }, e.timeLong = function (e, t, n) {
                return void 0 === e && (e = r.DateTime.now), void 0 === t && (t = !1), this.dateTime(this.get(n).formats.time.long, e, t, n)
            }, e.timeMedium = function (e, t, n) {
                return void 0 === e && (e = r.DateTime.now), void 0 === t && (t = !1), this.dateTime(this.get(n).formats.time.medium, e, t, n)
            }, e.timeShort = function (e, t, n) {
                return void 0 === e && (e = r.DateTime.now), void 0 === t && (t = !1), this.dateTime(this.get(n).formats.time.short, e, t, n)
            }, e.dateTimeFull = function (e, t, n) {
                return void 0 === e && (e = r.DateTime.now), void 0 === t && (t = !1), this.dateTime(r.Str.replace(r.Str.replace(this.get(n).formats.dateTime.full, "{0}", this.get(n).formats.time.full), "{1}", this.get(n).formats.date.full), e, t, n)
            }, e.dateTimeLong = function (e, t, n) {
                return void 0 === e && (e = r.DateTime.now), void 0 === t && (t = !1), this.dateTime(r.Str.replace(r.Str.replace(this.get(n).formats.dateTime.long, "{0}", this.get(n).formats.time.long), "{1}", this.get(n).formats.date.long), e, t, n)
            }, e.dateTimeMedium = function (e, t, n) {
                return void 0 === e && (e = r.DateTime.now), void 0 === t && (t = !1), this.dateTime(r.Str.replace(r.Str.replace(this.get(n).formats.dateTime.medium, "{0}", this.get(n).formats.time.medium), "{1}", this.get(n).formats.date.medium), e, t, n)
            }, e.dateTimeShort = function (e, t, n) {
                return void 0 === e && (e = r.DateTime.now), void 0 === t && (t = !1), this.dateTime(r.Str.replace(r.Str.replace(this.get(n).formats.dateTime.short, "{0}", this.get(n).formats.time.short), "{1}", this.get(n).formats.date.short), e, t, n)
            }, e.m_pLocales = {}, e
        }();
        t.Locales = o
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(4);
        t.NAME = "tripetto-collector", t.VERSION = "1.7.0";
        var o = n(7);
        t.Context = o.Context, t.Data = o.Data, t.Errors = o.Errors, t.Instance = o.Instance, t.Value = o.Value;
        var s = n(4);
        t.Slot = s.Slot;
        var a = n(53);
        t.Condition = a.Condition;
        var u = n(102);
        t.ConditionBlock = u.ConditionBlock;
        var c = n(26);
        t.ConditionBlocks = c.ConditionBlocks;
        var l = n(17);
        t.Branch = l.Branch;
        var h = n(18);
        t.Cluster = h.Cluster;
        var p = n(103);
        t.Collector = p.Collector;
        var f = n(19);
        t.Node = f.Node;
        var m = n(54);
        t.NodeBlock = m.NodeBlock;
        var d = n(27);
        t.HeadlessBlock = d.HeadlessBlock;
        var g = n(28);
        t.NodeBlocks = g.NodeBlocks;
        var b = n(105);
        t.markdownify = b.markdownify, t.markdownifyTo = b.markdownifyTo, t.markdownifyToString = b.markdownifyToString;
        var y = n(29);
        t.MarkdownFeatures = y.MarkdownFeatures;
        var _ = n(60);
        t.Storyline = _.Storyline;
        var v = n(61);
        t.Moment = v.Moment;
        var S = n(59);
        t.Import = S.Import;
        var k = n(55);
        t.Export = k.Export;
        var P = n(106);
        t.tripetto = P.tripetto, t.block = P.tripetto;
        var O = n(107);
        t.condition = O.condition;
        var M = n(108);
        t.validator = M.validator;
        var C = n(109);
        t.destroy = C.destroy, t.Slots = i, r.__exportStar(n(11), t), r.__exportStar(n(0), t), r.__exportStar(n(3), t), r.__exportStar(n(110), t)
    }, function (e, t) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, function (e, t) {
        var n, r, i = e.exports = {};

        function o() {
            throw new Error("setTimeout has not been defined")
        }

        function s() {
            throw new Error("clearTimeout has not been defined")
        }

        function a(e) {
            if (n === setTimeout) return setTimeout(e, 0);
            if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }

        !function () {
            try {
                n = "function" == typeof setTimeout ? setTimeout : o
            } catch (e) {
                n = o
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (e) {
                r = s
            }
        }();
        var u, c = [], l = !1, h = -1;

        function p() {
            l && u && (l = !1, u.length ? c = u.concat(c) : h = -1, c.length && f())
        }

        function f() {
            if (!l) {
                var e = a(p);
                l = !0;
                for (var t = c.length; t;) {
                    for (u = c, c = []; ++h < t;) u && u[h].run();
                    h = -1, t = c.length
                }
                u = null, l = !1, function (e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
            }
        }

        function m(e, t) {
            this.fun = e, this.array = t
        }

        function d() {
        }

        i.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            c.push(new m(e, t)), 1 !== c.length || l || a(f)
        }, m.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = d, i.addListener = d, i.once = d, i.off = d, i.removeListener = d, i.removeAllListeners = d, i.emit = d, i.prependListener = d, i.prependOnceListener = d, i.listeners = function (e) {
            return []
        }, i.binding = function (e) {
            throw new Error("process.binding is not supported")
        }, i.cwd = function () {
            return "/"
        }, i.chdir = function (e) {
            throw new Error("process.chdir is not supported")
        }, i.umask = function () {
            return 0
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function () {
            function e(e) {
                this.m_fnScheduler = e, this.m_pStack = [], this.m_nCall = 0, this.m_nOffset = 0
            }

            return e.prototype.call = function () {
                for (var e = this, t = this.m_pStack.length, n = 0; n < t; n++) {
                    var r = this.m_pStack[n];
                    r && r.callee && r.callee.apply(r, r.arguments)
                }
                this.m_pStack.splice(0, t), this.m_pStack.length > 0 ? (this.m_nOffset = this.m_nCall - this.m_pStack.length + 1, this.m_fnScheduler((function () {
                    return e.call()
                }))) : this.m_nOffset = 0
            }, e.prototype.schedule = function (e) {
                for (var t = this, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                return e ? (this.m_nCall++, this.m_pStack.push({
                    callee: e,
                    arguments: n
                }), 0 === this.m_nOffset && (this.m_nOffset = this.m_nCall, this.m_fnScheduler((function () {
                    return t.call()
                }))), this.m_nCall) : 0
            }, e.prototype.cancel = function (e) {
                this.m_nOffset > 0 && e >= this.m_nOffset && e <= this.m_nCall && (this.m_pStack[e - this.m_nOffset] = void 0)
            }, e
        }();
        t.Scheduler = r
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(20), i = n(14), o = 16, s = 23;
        !function (e) {
            function t() {
                return r.Str.padRight(i.DateTime.logTime, " ", o, !0)
            }

            function n(e) {
                return r.Str.padRight(e, " ", s, !0)
            }

            e.time = t, e.module = n, e.log = function (e, r) {
                return t() + n(e) + r
            }
        }(t.Console || (t.Console = {}))
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(21);
        !function (e) {
            e.isBrowser = r.IS_BROWSER, e.isNode = r.IS_NODE, e.isWebWorker = r.IS_WEBWORKER
        }(t.Environment || (t.Environment = {}))
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(9), i = function () {
            function e() {
                this.m_nFlag = 1
            }

            return Object.defineProperty(e.prototype, "flag", {
                get: function () {
                    var e = this.m_nFlag;
                    return this.m_nFlag = this.m_nFlag << 1, e
                }, enumerable: !0, configurable: !0
            }), e.convert = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = 1;
                return r.reduce(e, (function (e, t) {
                    return e |= t ? n : 0, n *= 2, e
                }), 0) || 0
            }, e.has = function (e, t) {
                var n = 1;
                if (t > 0) for (; --t;) n *= 2;
                return r.castToBoolean(e & n)
            }, e
        }();
        t.Flags = i
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(9), o = n(14), s = function () {
            function e(e, t, n) {
                this.m_pArguments = [], this.m_nTime = 0, this.m_nHandle = 0, this.m_bPromise = !1, this.m_bFrame = !1, this.m_bDoubleFrame = !1, this.m_sHold = !1, this.m_bThrottle = "debounce" !== e, this.m_bDelay = "throttle-delay" === e, this.m_fnCallback = t, this.m_nTimeout = "tick" !== n && "promise" !== n && "frame" !== n && "double-frame" !== n && n || 0, this.m_bPromise = "promise" === n, this.m_bFrame = "frame" === n || "double-frame" === n, this.m_bDoubleFrame = "double-frame" === n
            }

            return e.prototype.call = function () {
                this.m_nHandle = 0, this.m_fnCallback.apply(this, this.m_pArguments)
            }, e.prototype.invoke = function () {
                for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                if (!this.m_sHold && this.m_bThrottle && this.m_nTimeout > 0) {
                    if (!this.m_bDelay) return void (o.DateTime.elapsed(this.m_nTime, !0) >= this.m_nTimeout && (this.m_pArguments = t, this.m_nTime = o.DateTime.precise, this.call()));
                    0 !== this.m_nHandle && o.DateTime.elapsed(this.m_nTime, !0) >= this.m_nTimeout && (this.cancel(), this.call())
                }
                this.m_pArguments = t, this.m_bThrottle || this.cancel(), this.m_sHold ? this.m_sHold = "hold" : 0 === this.m_nHandle && (this.m_nTime = o.DateTime.precise, this.m_nTimeout > 0 ? this.m_nHandle = i.scheduleTimeout((function () {
                    return e.call()
                }), this.m_nTimeout) : this.m_bPromise ? this.m_nHandle = i.schedulePromise((function () {
                    return e.call()
                })) : this.m_bFrame ? this.m_nHandle = i.scheduleFrame((function () {
                    e.m_bDoubleFrame ? e.m_nHandle = i.scheduleFrame((function () {
                        return e.call()
                    })) : e.call()
                })) : this.m_nHandle = i.scheduleTick((function () {
                    return e.call()
                })))
            }, e.prototype.cancel = function () {
                var e = this.m_nTimeout > 0 ? i.cancelTimeout : this.m_bPromise ? i.cancelPromise : this.m_bFrame ? i.cancelFrame : i.cancelTick;
                this.m_nHandle = e(this.m_nHandle)
            }, e.prototype.hold = function () {
                this.m_sHold = this.m_sHold || (0 === this.m_nHandle ? "catch" : "hold"), this.cancel()
            }, e.prototype.release = function (e) {
                if (void 0 === e && (e = !1), this.m_sHold) {
                    var t = "hold" === this.m_sHold;
                    this.m_sHold = !1, t && (e ? this.call() : this.invoke.apply(this, this.m_pArguments))
                }
            }, e
        }();
        t.Limiter = s;
        var a = function (e) {
            function t(t, n, r) {
                return void 0 === n && (n = "frame"), void 0 === r && (r = !0), e.call(this, r ? "throttle-delay" : "throttle", t, n) || this
            }

            return r.__extends(t, e), t
        }(s);
        t.Throttle = a;
        var u = function (e) {
            function t(t, n) {
                return void 0 === n && (n = "frame"), e.call(this, "debounce", t, n) || this
            }

            return r.__extends(t, e), t
        }(s);
        t.Debounce = u
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function () {
            function e() {
                this.m_pStack = []
            }

            return e.prototype.add = function (e) {
                this.m_pStack.push(e)
            }, e.prototype.flush = function () {
                for (var e = this.m_pStack.length, t = 0; t < e; t++) this.m_pStack[t]()
            }, e.prototype.clear = function () {
                this.m_pStack = []
            }, e.prototype.flushAndClear = function () {
                this.flush(), this.clear()
            }, e
        }();
        t.Stack = r
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(0), i = function () {
            function e() {
                this.m_pHooks = {}, this.m_nHookTimeout = 0, this.m_nHookFrame = 0, this.m_nHookBuffer = 0
            }

            return Object.defineProperty(e.prototype, "isHookBufferEnabled", {
                get: function () {
                    return this.m_nHookBuffer > 0
                }, enumerable: !0, configurable: !0
            }), e.prototype.getHooks = function (e) {
                var t = this.m_pHooks[e];
                if (t) return r.cast(t)
            }, e.prototype.prepareHookPayload = function (e, t, n) {
                return e.hook = {name: t, type: n}, e
            }, e.prototype.scheduleHook = function (e) {
                var t = this;
                "framed" === e ? this.m_nHookFrame = r.scheduleAndCancelFrame((function () {
                    return t.invokeHook(e)
                }), this.m_nHookFrame) : this.m_nHookTimeout = r.scheduleAndCancelTick((function () {
                    return t.invokeHook(e)
                }), this.m_nHookTimeout)
            }, e.prototype.invokeHook = function (e) {
                var t = this, n = new r.Stack;
                r.each(this.m_pHooks, (function (i, o) {
                    r.each(i, (function (i) {
                        i.type === e && r.each(i.payloads.splice(0, i.payloads.length), (function (e) {
                            n.add((function () {
                                return i.hook(t.prepareHookPayload(e, o, i.type))
                            }))
                        }))
                    }))
                }), {keys: !0}), n.flush()
            }, e.prototype.attachHook = function (e, t, n, r, i) {
                (this.getHooks(e) || (this.m_pHooks[e] = [])).push({
                    hook: n,
                    payloads: [],
                    type: t,
                    group: r,
                    context: i
                })
            }, e.prototype.hook = function (e, t, n, r) {
                return this.attachHook(e, t, n, !1, r), this
            }, e.prototype.groupedHook = function (e, t, n, r) {
                return this.attachHook(e, t, n, !0, r), this
            }, e.prototype.emitHook = function (e, t, n) {
                var i = this;
                void 0 === n && (n = "fifo");
                var o = this.getHooks(e);
                if (o) {
                    var s = new r.Stack;
                    return r.each(o, (function (r) {
                        "synchronous" !== r.type || i.isHookBufferEnabled ? (r.group && r.payloads.length > 0 ? r.payloads[0] = t : "lifo" === n ? r.payloads.splice(0, 0, t) : r.payloads.push(t), "synchronous" === r.type || i.isHookBufferEnabled || i.scheduleHook(r.type)) : s.add((function () {
                            return r.hook(i.prepareHookPayload(t, e, "synchronous"))
                        }))
                    })), s.flush(), !0
                }
                return !1
            }, e.prototype.bufferHooks = function () {
                this.m_nHookTimeout = r.cancelTick(this.m_nHookTimeout), this.m_nHookFrame = r.cancelFrame(this.m_nHookFrame), this.m_nHookBuffer++
            }, e.prototype.flushHooks = function () {
                var e = this;
                if (this.m_nHookBuffer > 0 && (this.m_nHookBuffer--, 0 === this.m_nHookBuffer)) {
                    var t = new r.Stack;
                    r.each(this.m_pHooks, (function (n, i) {
                        r.each(n, (function (n) {
                            "synchronous" === n.type ? r.each(n.payloads.splice(0, n.payloads.length), (function (r) {
                                t.add((function () {
                                    return n.hook(e.prepareHookPayload(r, i, n.type))
                                }))
                            })) : e.scheduleHook(n.type)
                        }))
                    }), {keys: !0}), t.flush()
                }
            }, e.prototype.unhook = function (e, t) {
                var n = this.getHooks(e);
                if (n) {
                    var i = !1;
                    if (t) for (var o = n.length; o--;) {
                        var s = n[o];
                        s.context !== t && s.hook !== t || (n.splice(o, 1), i = !0)
                    }
                    return t && 0 !== n.length ? i : (r.destroy(this.m_pHooks, e), !0)
                }
                return !1
            }, e.prototype.unhookContext = function (e) {
                var t = this, n = !1;
                return r.each(this.m_pHooks, (function (i, o) {
                    for (var s = i.length; s--;) {
                        i[s].context === e && (i.splice(s, 1), n = !0)
                    }
                    0 === i.length && r.destroy(t.m_pHooks, o)
                }), {keys: !0}), n
            }, e.prototype.destroy = function () {
                var e = this, t = new r.Stack;
                this.m_nHookTimeout = r.cancelTick(this.m_nHookTimeout), this.m_nHookFrame = r.cancelFrame(this.m_nHookFrame), this.m_nHookBuffer = 0, r.each(this.m_pHooks, (function (n, i) {
                    r.each(n, (function (n) {
                        r.each(n.payloads.splice(0, n.payloads.length), (function (r) {
                            t.add((function () {
                                return n.hook(e.prepareHookPayload(r, i, n.type))
                            }))
                        }))
                    }))
                }), {keys: !0}), this.m_pHooks = {}, t.flush()
            }, e
        }();
        t.Hooks = i
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(8);
        t.hookup = function (e) {
            return function (t, n, i) {
                r.observable("hookup", t, n, i, (function (t) {
                    t.target.emitHook(e, {property: t.property, value: t.newValue})
                }))
            }
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(0);
        t.defineMarker = function (e, t, n, i, o) {
            if (void 0 === o && (o = "multiple"), !i || !r.isFunction(i.value)) throw new Error("The '@" + e + "' decorator can only be applied to a method but '" + n + "' seems to be a property.");
            var s = "@marker @" + e, a = "@marker @" + e + " #" + n, u = Object.getOwnPropertyDescriptor(t, s);
            if (Object.getOwnPropertyDescriptor(t, a)) throw new Error("Decorator '@" + e + "' is already applied to the method '" + n + "'.");
            if ("single" === o && u) throw new Error("Decorator '@" + e + "' is already used in this class, but can only be applied once.");
            Object.defineProperty(t, a, {
                value: !0,
                writable: !1,
                enumerable: !1,
                configurable: !1
            }), u ? u.value.push(i.value) : Object.defineProperty(t, s, {
                value: [i.value],
                writable: !1,
                enumerable: !1,
                configurable: !1
            })
        }, t.invokeMarker = function (e, t) {
            for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
            var o = r.getAny(t, "@marker @" + e);
            if (o) {
                var s = o.length;
                if (1 === s) return r.callBind.apply(void 0, [o[0], t].concat(n));
                for (var a = 0; a < s; a++) r.callBind.apply(void 0, [o[a], t].concat(n))
            }
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(0);

        function i(e, t, n, i, o) {
            var s = {target: t, property: n, oldValue: i, newValue: o};
            r.each(r.getAny(t, e), (function (e) {
                r.callBind(e, t, s)
            }))
        }

        t.observable = function (e, t, n, o, s) {
            var a = "@observers #" + n, u = Object.getOwnPropertyDescriptor(t, a), c = "@observers @" + e + " #" + n;
            if (Object.getOwnPropertyDescriptor(t, c)) throw new Error("Decorator '@" + e + "' is already applied to the property '" + n + "'.");
            if (Object.defineProperty(t, c, {
                value: !0,
                writable: !1,
                enumerable: !1,
                configurable: !1
            }), u && r.isArray(u.value)) u.value.push(s); else {
                if (o) {
                    if (o.configurable = !1, !o.set) throw new Error("Decorator '@" + e + "' can only be used on writable properties, but '" + n + "' seems to be a readonly property or a method.");
                    var l = o.set;
                    o.set = function (e) {
                        var t = r.getAny(this, n);
                        t !== e && (l.call(this, e), i(a, this, n, t, e))
                    }
                } else {
                    var h = "@observable #" + n;
                    Object.defineProperty(t, n, {
                        get: function () {
                            return r.getAny(this, h)
                        }, set: function (e) {
                            var t = r.getAny(this, h);
                            t !== e && (r.setAny(this, h, e), i(a, this, n, t, e))
                        }, enumerable: !0, configurable: !1
                    })
                }
                Object.defineProperty(t, a, {value: [s], writable: !1, enumerable: !1, configurable: !1})
            }
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function () {
            function e() {
                this.m_pStack = []
            }

            return e.prototype.push = function (e) {
                this.m_pStack.push(e)
            }, e.prototype.flush = function () {
                for (var e = this.m_pStack.shift(); e;) e(), e = this.m_pStack.shift()
            }, e
        }();
        t.Stack = r
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428],
            i = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
            o = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428],
            s = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209],
            a = [2352822216, 424955298, 1944164710, 2312950998, 502970286, 855612546, 1738396948, 1479516111, 258812777, 2077511080, 2011393907, 79989058, 1067287976, 1780299464, 286451373, 2446758561],
            u = [573645204, 4230739756, 2673172387, 3360449730, 596883563, 1867755857, 2520282905, 1497426621, 2519219938, 2827943907, 3193839141, 1401305490, 721525244, 746961066, 246885852, 2177182882],
            c = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
            l = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
            h = "0123456789abcdef";

        function p(e, t) {
            return e >>> t | e << 32 - t
        }

        function f(e, t, n, r) {
            return p(e, t) ^ p(e, n) ^ e >>> r
        }

        function m(e, t) {
            return e[15 & t] += f(e[t + 14 & 15], 17, 19, 10) + e[t + 9 & 15] + f(e[t + 1 & 15], 7, 18, 3)
        }

        function d(e, t) {
            var n = (65535 & e) + (65535 & t);
            return (t = (e >> 16) + (t >> 16) + (n >> 16)) << 16 | 65535 & n
        }

        function g(e, t) {
            for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
            for (var i = 0, o = 0, s = 0, a = 0; i < n.length / 2; i++) s += 65535 & (o = n[i]), a += o >>> 16;
            for (a += s >>> 16, e[t + 1] = a << 16 | 65535 & s, s = a >>> 16, a = 0; i < n.length; i++) s += 65535 & (o = n[i]), a += o >>> 16;
            a += s >>> 16, e[t] = a << 16 | 65535 & s
        }

        function b(e, t) {
            for (var n = 0, r = [], i = [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]]; n < 16;) r[n] = t[3 + (n << 2)] | t[2 + (n << 2)] << 8 | t[1 + (n << 2)] << 16 | t[n << 2] << 24, n++;
            for (n = 0; n < 64; n++) for (var o = i[0], s = i[1], a = i[2], u = i[4], l = i[7] + (p(u, 6) ^ p(u, 11) ^ p(u, 25)) + (u & i[5] ^ ~u & i[6]) + c[n] + (n < 16 ? r[n] : m(r, n)), h = 7; h >= 0; h--) i[h] = 4 === h ? d(i[3], l) : 0 === h ? d(l, (p(o, 2) ^ p(o, 13) ^ p(o, 22)) + (o & s ^ o & a ^ s & a)) : i[h - 1];
            for (n = 0; n < 8; n++) e[n] += i[n]
        }

        function y(e, t, n) {
            var c, p, f = (t ? 224 === n ? a : 256 === n ? u : 384 === n ? o : s : 224 === n ? r : i).slice(),
                m = e.length, d = [], y = "", _ = 0, v = !0, S = 0, k = 0, P = 0, O = 0, M = 0;
            if (t) {
                var C = [0, 0, 0, 0, 0, 0, 0, 0], w = [24, 16, 8, 0], x = void 0;
                do {
                    for (d[0] = _, c = 1; c <= 32; c++) d[c] = 0;
                    for (c = P; S < m && c < 128; ++S) {
                        var T = e.charCodeAt(S);
                        T < 128 ? d[c >> 2] |= T << w[3 & c++] : T < 2048 ? (d[c >> 2] |= (192 | T >> 6) << w[3 & c++], d[c >> 2] |= (128 | 63 & T) << w[3 & c++]) : T < 55296 || T >= 57344 ? (d[c >> 2] |= (224 | T >> 12) << w[3 & c++], d[c >> 2] |= (128 | T >> 6 & 63) << w[3 & c++], d[c >> 2] |= (128 | 63 & T) << w[3 & c++]) : (T = 65536 + ((1023 & T) << 10 | 1023 & e.charCodeAt(++S)), d[c >> 2] |= (240 | T >> 18) << w[3 & c++], d[c >> 2] |= (128 | T >> 12 & 63) << w[3 & c++], d[c >> 2] |= (128 | T >> 6 & 63) << w[3 & c++], d[c >> 2] |= (128 | 63 & T) << w[3 & c++])
                    }
                    for (k += c - P, P = c - 128, S === m && (d[c >> 2] |= [-2147483648, 8388608, 32768, 128][3 & c], ++S), _ = d[32], S > m && c < 112 && (d[31] = k << 3, v = !1), p = 32; p < 160; p += 2) {
                        var I = d[p - 30], E = d[p - 29], F = d[p - 4], j = d[p - 3];
                        g(d, p, d[p - 13], d[p - 31], (E >>> 1 | I << 31) ^ (E >>> 8 | I << 24) ^ (E >>> 7 | I << 25), (j >>> 19 | F << 13) ^ (F >>> 29 | j << 3) ^ (j >>> 6 | F << 26), d[p - 14], d[p - 32], (I >>> 1 | E << 31) ^ (I >>> 8 | E << 24) ^ I >>> 7, (F >>> 19 | j << 13) ^ (j >>> 29 | F << 3) ^ F >>> 6)
                    }
                    for (x = f.slice(), C[6] = x[2] & x[4], C[7] = x[3] & x[5], c = 0; c < 160; c += 8) for (p = 0; p < 8; p += 2) {
                        var A = p > 0 ? 8 - p : 0, L = [0, 0, 0, 0];
                        g(L, 0, l[c + p + 1], d[c + p + 1], x[9 + A] & x[2 === p ? 9 : 11 + A] ^ ~x[9 + A] & x[6 === p ? 15 : 13 - p], (x[9 + A] >>> 14 | x[8 + A] << 18) ^ (x[9 + A] >>> 18 | x[8 + A] << 14) ^ (x[8 + A] >>> 9 | x[9 + A] << 23), x[15 - p], l[c + p], d[c + p], x[8 + A] & x[2 === p ? 8 : 10 + A] ^ ~x[8 + A] & x[6 === p ? 14 : 12 - p], (x[8 + A] >>> 14 | x[9 + A] << 18) ^ (x[8 + A] >>> 18 | x[9 + A] << 14) ^ (x[9 + A] >>> 9 | x[8 + A] << 23), x[14 - p]), g(L, 2, (C[p + 1] = x[1 + A] & x[2 === p ? 1 : 3 + A]) ^ x[1 + A] & x[(6 === p ? p : 4 - p) + 1] ^ C[7 - A], (x[1 + A] >>> 28 | x[A] << 4) ^ (x[A] >>> 2 | x[1 + A] << 30) ^ (x[A] >>> 7 | x[1 + A] << 25), (C[p] = x[A] & x[2 === p ? 0 : 2 + A]) ^ x[A] & x[6 === p ? p : 4 - p] ^ C[6 - A], (x[A] >>> 28 | x[1 + A] << 4) ^ (x[1 + A] >>> 2 | x[A] << 30) ^ (x[1 + A] >>> 7 | x[A] << 25)), g(x, 14 - p, x[7 - p], L[1], x[6 - p], L[0]), g(x, 6 - p, L[3], L[1], L[2], L[0])
                    }
                    for (c = 0; c < 16; c += 2) g(f, c, f[c + 1], x[c + 1], f[c], x[c])
                } while (v)
            } else {
                for (P = 63 & m, O = m << 3, M = m >> 29, c = 0; c + 63 < m; c += 64) {
                    for (p = S; p < 64; p++) d[p] = e.charCodeAt(k++);
                    b(f, d), S = 0
                }
                for (c = 0; c < P; c++) d[c] = e.charCodeAt(k++);
                for (S = O >> 3 & 63, d[S++] = 128, c = S; c < (S > 56 ? 64 : 56); c++) d[c] = 0;
                if (S > 56) for (b(f, d), c = 0; c < 56; c++) d[c] = 0;
                for (; c < 64;) for (p = 24; p >= 0; p -= 8, c++) d[c] = (c >= 60 ? O : M) >>> p & 255;
                b(f, d)
            }
            for (c = 0; c < (512 === n ? 16 : 384 === n ? 12 : 256 === n ? 8 : 7); c++) for (p = 28; p >= 0; p -= 4) y += h.charAt(f[c] >>> p & 15);
            return y
        }

        t.SHA2_224 = function (e) {
            return y(e, !1, 224)
        }, t.SHA2_256 = function (e) {
            return y(e, !1, 256)
        }, t.SHA2_384 = function (e) {
            return y(e, !0, 384)
        }, t.SHA2_512 = function (e) {
            return y(e, !0, 512)
        }, t.SHA2_512_224 = function (e) {
            return y(e, !0, 224)
        }, t.SHA2_512_256 = function (e) {
            return y(e, !0, 256)
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(0), o = n(35), s = n(37), a = function (e) {
            function t(t, n, r, o) {
                void 0 === t && (t = 0), void 0 === n && (n = 0), void 0 === r && (r = 1);
                var a = e.call(this, s.ModelItem, t, n, r) || this;
                if (o) {
                    var u = i.arraySize(o);
                    i.each(o, (function (e) {
                        u--, a.pushToMatrix(a.onItemInstance(e), {index: -1, recalculate: 0 === u, emit: "nothing"})
                    }))
                }
                return a
            }

            return r.__extends(t, e), t.prototype.append = function (e) {
                return this.appendToMatrix(e)
            }, t.prototype.insert = function (e) {
                return this.insertToMatrix(e)
            }, t.prototype.insertAtCursor = function (e, t) {
                return this.insertToMatrixAtCursor(e, t)
            }, t.prototype.insertAtIndex = function (e, t) {
                return this.insertToMatrixAtIndex(e, t)
            }, t.prototype.insertAtPosition = function (e, t, n) {
                return this.insertToMatrixAtPosition(e, t, n)
            }, t
        }(o.StrictMatrix);
        t.Model = a
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            e[e.Vertical = 0] = "Vertical", e[e.Horizontal = 1] = "Horizontal"
        }(t.Orientations || (t.Orientations = {}))
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            e[e.Push = 1] = "Push", e[e.Pop = 2] = "Pop", e[e.Move = 4] = "Move", e[e.Swap = 8] = "Swap", e[e.Sort = 16] = "Sort", e[e.Recalculation = 32] = "Recalculation", e[e.Last = 64] = "Last", e[e.First = 128] = "First"
        }(t.Reasons || (t.Reasons = {}))
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            e[e.Vertical = 0] = "Vertical", e[e.Horizontal = 1] = "Horizontal", e[e.Square = 2] = "Square", e[e.SquareHorizontal = 3] = "SquareHorizontal", e[e.SquareVertical = 4] = "SquareVertical"
        }(t.Types || (t.Types = {}))
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.kindOrderIndexFor = function (e) {
            switch (e) {
                case"meta":
                    return 0;
                case"static":
                    return 1;
                case"dynamic":
                    return 2;
                case"feature":
                    return 3
            }
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(0), i = n(10);
        t.serializeTo = function (e, t) {
            var n = {};
            return r.each(t, (function (e, t) {
                r.isDefined(e) && r.setAny(n, t, e)
            }), {keys: !0}), r.each(r.getAny(e, i.SERIALIZE), (function (t) {
                var o = r.getAny(e, t);
                if (r.isDefined(o)) {
                    var s = r.getAny(o, i.SERIALIZER);
                    r.setAny(n, t, r.isFilledString(s) ? r.callBind(r.getAny(o, s), o) : o)
                }
            })), n
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(0), i = n(10);
        t.deserializeFrom = function (e, t, n) {
            var o = n || new r.Stack;
            return r.each(r.getAny(e, i.DESERIALIZE), (function (n) {
                var s = t[n];
                if (r.isDefined(s)) {
                    var a = r.getAny(e, n), u = r.getAny(a, i.DESERIALIZER);
                    if (a && r.isFilledString(u)) return void r.callBind(r.getAny(a, u), a, s, o);
                    r.setAny(e, n, s)
                }
            })), n || o.flush(), e
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(0), i = n(10);
        t.deserialize = function (e, t, n) {
            var o = Object.getOwnPropertyDescriptor(e, i.DESERIALIZE);
            if (n && !n.set) throw new Error("Decorator '@deserialize' can only be used on writable properties, but '" + t + "' seems to be a readonly property or a method.");
            o && r.isArray(o.value) ? o.value.push(t) : Object.defineProperty(e, i.DESERIALIZE, {
                value: [t],
                writable: !1,
                enumerable: !1,
                configurable: !1
            })
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(0), i = n(10);
        t.deserializer = function (e, t, n) {
            if (!n || !r.isFunction(n.value)) throw new Error("Decorator '@deserializer' needs to be applied to a function, but '" + t + "' seems to be a property.");
            if (Object.getOwnPropertyDescriptor(e, i.DESERIALIZER)) throw new Error("Decorator '@deserializer' is applied multiple times, but can only be used once in a class.");
            Object.defineProperty(e, i.DESERIALIZER, {value: t, writable: !1, enumerable: !1, configurable: !1})
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(0), i = n(10);
        t.serializer = function (e, t, n) {
            if (!n || !r.isFunction(n.value)) throw new Error("Decorator '@serializer' needs to be applied to a function, but '" + t + "' seems to be a property.");
            if (Object.getOwnPropertyDescriptor(e, i.SERIALIZER)) throw new Error("Decorator '@serializer' is applied multiple times, but can only be used once in a class.");
            Object.defineProperty(e, i.SERIALIZER, {value: t, writable: !1, enumerable: !1, configurable: !1})
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(0), i = n(10);
        t.serialize = function (e, t, n) {
            var o = Object.getOwnPropertyDescriptor(e, i.SERIALIZE);
            if (n && !n.get) throw new Error("Decorator '@serialize' can only be used on readable properties, but '" + t + "' is not a property.");
            o && r.isArray(o.value) ? o.value.push(t) : Object.defineProperty(e, i.SERIALIZE, {
                value: [t],
                writable: !1,
                enumerable: !1,
                configurable: !1
            })
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(0), o = n(12), s = n(5), a = n(6), u = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return r.__extends(t, e), t.prototype.toValue = function (e) {
                return i.castToBoolean(e, this.default)
            }, t.prototype.toString = function (e) {
                var t = this.toValue(e);
                return !t && i.isString(this.labelForFalse) ? this.labelForFalse : t && i.isString(this.labelForTrue) ? this.labelForTrue : i.castToString(t)
            }, r.__decorate([a.property, o.serialize, o.deserialize], t.prototype, "labelForFalse", void 0), r.__decorate([a.property, o.serialize, o.deserialize], t.prototype, "labelForTrue", void 0), t = r.__decorate([a.slot("boolean")], t)
        }(s.Slot);
        t.BooleanSlot = u
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(0), o = n(12), s = n(5), a = n(6), u = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return r.__extends(t, e), t.prototype.toValue = function (e) {
                var t = i.castToNumber(e instanceof Date ? e.getTime() : e, this.default);
                if (i.isDate(this.minimum) || i.isNumberFinite(this.minimum)) {
                    var n = i.isDate(this.minimum) ? this.minimum.getTime() : this.minimum;
                    t < n && (t = n)
                }
                if (i.isDate(this.maximum) || i.isNumberFinite(this.maximum)) {
                    var r = i.isDate(this.maximum) ? this.maximum.getTime() : this.maximum;
                    t > r && (t = r)
                }
                return t
            }, t.prototype.toDate = function (e) {
                return new Date(this.toValue(e))
            }, t.prototype.toString = function (e) {
                var t = this.toDate(e);
                return 0 !== t.getTime() ? t.toISOString() : ""
            }, r.__decorate([a.property, o.serialize, o.deserialize], t.prototype, "minimum", void 0), r.__decorate([a.property, o.serialize, o.deserialize], t.prototype, "maximum", void 0), t = r.__decorate([a.slot("date")], t)
        }(s.Slot);
        t.DateSlot = u
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(0), o = n(5), s = n(6), a = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return r.__extends(t, e), t.prototype.toValue = function (e) {
                return i.castToNumber(e, this.default)
            }, t.prototype.toString = function (e) {
                return i.castToString(this.toValue(e))
            }, t = r.__decorate([s.slot("number")], t)
        }(o.Slot);
        t.NumberSlot = a
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(0), o = n(12), s = n(5), a = n(6), u = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return r.__extends(t, e), Object.defineProperty(t.prototype, "precision", {
                get: function () {
                    return this.m_nPrecision
                }, set: function (e) {
                    this.m_nPrecision = i.isNumberFinite(e) ? i.Num.max(0, e) : void 0
                }, enumerable: !0, configurable: !0
            }), t.prototype.toValue = function (e) {
                var t;
                return t = i.isNumberFinite(this.precision) && this.precision > 0 ? i.Num.conform(i.castToFloat(e, this.default), this.precision) : i.castToNumber(e, this.default), i.isNumberFinite(this.minimum) && t < this.minimum && (t = this.minimum), i.isNumberFinite(this.maximum) && t > this.maximum && (t = this.maximum), t
            }, t.prototype.toString = function (e) {
                var t = i.Num.format(this.toValue(e), this.precision, this.separator || "", this.decimal, this.minus);
                return (this.prefix || "") + (this.digits ? i.Str.padLeft(t, "0", this.digits, !0, !0) : t) + (this.suffix || "")
            }, r.__decorate([a.property, o.serialize, o.deserialize], t.prototype, "minimum", void 0), r.__decorate([a.property, o.serialize, o.deserialize], t.prototype, "maximum", void 0), r.__decorate([a.property, o.serialize, o.deserialize], t.prototype, "separator", void 0), r.__decorate([a.property, o.serialize, o.deserialize], t.prototype, "decimal", void 0), r.__decorate([a.property, o.serialize, o.deserialize], t.prototype, "minus", void 0), r.__decorate([a.property, o.serialize, o.deserialize], t.prototype, "prefix", void 0), r.__decorate([a.property, o.serialize, o.deserialize], t.prototype, "suffix", void 0), r.__decorate([a.property, o.serialize, o.deserialize], t.prototype, "digits", void 0), r.__decorate([a.property, o.serialize, o.deserialize], t.prototype, "precision", null), t = r.__decorate([a.slot("numeric")], t)
        }(s.Slot);
        t.Numeric = u
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(0), o = n(5), s = n(6), a = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return r.__extends(t, e), t.prototype.toValue = function (e) {
                return i.castToString(e, this.default)
            }, t.prototype.toString = function (e) {
                return i.castToString(this.toValue(e))
            }, t = r.__decorate([s.slot("string")], t)
        }(o.Slot);
        t.StringSlot = a
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(0), o = n(12), s = n(5), a = n(6), u = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return r.__extends(t, e), Object.defineProperty(t.prototype, "maxLength", {
                get: function () {
                    return this.m_nMaxLength
                }, set: function (e) {
                    this.m_nMaxLength = i.isNumberFinite(e) ? i.Num.max(0, e) : void 0
                }, enumerable: !0, configurable: !0
            }), t.prototype.toValue = function (e) {
                var t = i.Str.sanitize(i.castToString(e, this.default)).substr(0, this.maxLength);
                switch (this.transformation) {
                    case"capitalize":
                        return i.Str.capitalize(t, "first-character");
                    case"capitalize-words":
                        return i.Str.capitalize(t, "each-word");
                    case"capitalize-sentences":
                        return i.Str.capitalize(t, "each-sentence");
                    case"uppercase":
                        return i.Str.uppercase(t);
                    case"lowercase":
                        return i.Str.lowercase(t)
                }
                return t
            }, t.prototype.toString = function (e) {
                return i.castToString(this.toValue(e))
            }, r.__decorate([a.property, o.serialize, o.deserialize], t.prototype, "maxLength", null), r.__decorate([a.property, o.serialize, o.deserialize], t.prototype, "transformation", void 0), t = r.__decorate([a.slot("text")], t)
        }(s.Slot);
        t.Text = u
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = function (e) {
            function t(t) {
                return e.call(this, {
                    await: t.await,
                    promise: t.promise,
                    conditional: t.conditional,
                    continuous: t.continuous
                }) || this
            }

            return r.__extends(t, e), t.for = function (e) {
                return new t(e)
            }, t.prototype.done = function () {
                return this.terminate()
            }, t
        }(n(42).Callback);
        t.Await = i
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(11), o = n(0), s = function (e) {
            function t(t, n, r, i) {
                var o = e.call(this) || this;
                return o.m_pTransducer = t, o.m_pContext = n, o.m_bEnabled = r, o.m_nValidates = 0, o.m_bPass = i, o
            }

            return r.__extends(t, e), Object.defineProperty(t.prototype, "transducer", {
                get: function () {
                    return this.m_pTransducer
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isEnabled", {
                get: function () {
                    return this.m_bEnabled
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isPassed", {
                get: function () {
                    return !0 === this.m_bPass
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "isFailed", {
                get: function () {
                    return !1 === this.m_bPass
                }, enumerable: !0, configurable: !0
            }), t.prototype.validate = function (e, t, n, r, s) {
                var a = this, u = ++this.m_nValidates;
                if (e && this.isEnabled) {
                    var c = o.isBoolean(this.m_bPass), l = this.transducer.shouldVerifySeal(this.m_pContext);
                    if (!c || l) return e.evaluate(i.Callback.of({
                        await: function (e) {
                            var t = n || a.transducer.onValidate(a.m_pContext, !0 === a.m_bPass ? "pass" : !1 === a.m_bPass ? "fail" : "unknown", e);
                            return t instanceof i.Callback && t.isAlive && a.transducer.seal(a.m_pContext, !1), t
                        }, promise: function (n) {
                            u === a.m_nValidates && r(n) && (a.m_bPass = o.castToBoolean(n.payload), a.transducer.seal(a.m_pContext, a.m_bPass), a.transducer.onValidated(a.m_pContext, a.m_bPass ? "pass" : "fail", c ? "revalidate" : t), s()), e.evaluate(n, a.m_pContext, r)
                        }
                    }), this.m_pContext, r), !0;
                    this.transducer.seal(this.m_pContext, this.m_bPass || !1)
                }
                return !1
            }, t.prototype.invalidate = function () {
                this.m_bPass = void 0, this.transducer.seal(this.m_pContext, !1)
            }, t.prototype.cancel = function () {
                this.m_nValidates++, this.transducer.await = void 0, this.transducer.seal(this.m_pContext, !1)
            }, t.prototype.snapshot = function () {
                var e = o.Flags.convert(this.isEnabled, o.isBoolean(this.m_bPass), this.m_bPass || !1);
                if (e > 0) return {a: this.transducer.id, b: e}
            }, t
        }(n(2).Item);
        t.Validator = s
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(16), i = n(0), o = n(50), s = n(52), a = n(51), u = function () {
            function e(e, t, n) {
                var u = this;
                this.m_pTransducers = [];
                var c = n || new s.StackDispatcher, l = {}, h = !1;
                this.m_pOrchestrator = e, i.set(c, "isParsing", !0), c.clear(), i.each(t.a, (function (t) {
                    var n, s = new a.Validators, p = e.chain.state(t.f || ""), f = e.chain.branch(t.g || ""),
                        m = e.chain.branch(t.h || ""), d = e.chain.condition(t.i || ""), g = e.chain.state(t.j || "");
                    t.e && (n = l[t.e], h = h || !(n instanceof o.Stack));
                    var b = t.d || 0,
                        y = new r.Context(i.set(l, t.a, o.Stack.create(c, e, p, n, f, d, m, s, t.c, t.b, i.Flags.has(b, 1), i.Flags.has(b, 2), g, i.Flags.has(b, 3))), e.chain);
                    i.each(t.k, (function (t) {
                        var n = e.chain.transducer(t.a);
                        n && s.resume(n, y, t).isEnabled && u.m_pTransducers.push(n)
                    })), h = h || s.count !== i.arraySize(t.k)
                })), i.set(c, "isParsing", !1), h || (t.b ? this.m_pPointer = l[t.b] : this.m_pPointer = c.firstItem)
            }

            return Object.defineProperty(e.prototype, "pointer", {
                get: function () {
                    return this.m_pPointer
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "context", {
                get: function () {
                    return this.pointer && new r.Context(this.pointer, this.m_pOrchestrator.chain)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "state", {
                get: function () {
                    return this.pointer && this.pointer.state
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "transducers", {
                get: function () {
                    var e = this.state;
                    return e ? i.filter(this.m_pTransducers, (function (t) {
                        return t.state.id === e.id
                    })) : []
                }, enumerable: !0, configurable: !0
            }), e
        }();
        t.StackParser = u
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(0), o = n(40), s = n(23), a = n(25), u = n(2), c = n(46), l = n(100), h = n(24), p = n(3),
            f = n(13), m = n(41), d = n(44), g = function (e) {
                function t(t, n, r, i, o, s, a, u) {
                    void 0 === s && (s = !1), void 0 === a && (a = !1), void 0 === u && (u = !1);
                    var c = e.call(this) || this;
                    return c.m_pChain = {
                        states: {},
                        transducers: {},
                        branches: {},
                        conditions: {},
                        slots: {}
                    }, c.m_pState = t, c.m_pStates = new m.States(c), c.m_pTransducer = n, c.m_pBranch = r, c.m_pCondition = i, c.m_bAutoPushForward = s, c.m_bPreview = a, c.m_bPaused = !1, c.m_bStopped = !0, c.m_sFingerprint = p.SHA2_256(""), c.m_pLog = [], c.m_bVerbose = u, c.m_fnLogger = function (e) {
                        return console.log(e)
                    }, c.hook("OnItemPush", "synchronous", (function () {
                        c.m_bPaused = !1, c.m_bStopped = !1, 1 === c.count && (c.emitHook("OnStart", {ontology: c}), c.isVerbose && c.logMessage("Start (" + c.fingerprint + ")")), c.invokeNextInstance()
                    })), c.hook("OnItemPop", "synchronous", (function (e) {
                        c.invokeNextInstance(), 0 === c.count && (c.m_bPaused = e.item.isPaused, c.m_bStopped = e.item.isStopped, c.m_bPaused ? (c.emitHook("OnPause", {ontology: c}), c.isVerbose && c.logMessage("Pause (" + c.fingerprint + ")")) : c.m_bStopped ? (c.emitHook("OnStop", {ontology: c}), c.isVerbose && c.logMessage("Stop (" + c.fingerprint + ")")) : (c.emitHook("OnFinish", {ontology: c}), c.isVerbose && c.logMessage("Finish (" + c.fingerprint + ")")), c.emitHook("OnEnd", {
                            ontology: c,
                            type: c.isStopped ? "stopped" : c.isPaused ? "paused" : "finished"
                        }), c.isVerbose && c.logMessage("End (" + c.fingerprint + ")"))
                    })), o && c.load(o), c
                }

                return r.__extends(t, e), t.prototype.chain = function (e, t) {
                    if (this.m_sFingerprint = p.SHA2_256(this.m_sFingerprint + e.id), e instanceof f.State) i.set(this.m_pChain.states, e.id, e); else if (e instanceof d.Transducer) i.set(this.m_pChain.transducers, e.id, e); else if (e instanceof o.Branch) i.set(this.m_pChain.branches, e.id, e); else if (e instanceof s.Condition) i.set(this.m_pChain.conditions, e.id, e), this.m_sFingerprint = p.SHA2_256(this.m_sFingerprint + e.context); else if (i.set(this.m_pChain.slots, e.id, e), t) {
                        var n = e.groupIdentifier(t.id);
                        if (n) {
                            var r = this.m_pChain.slots[n];
                            i.isArray(r) || (r = i.set(this.m_pChain.slots, n, [])), r.push(e)
                        }
                    }
                }, Object.defineProperty(t.prototype, "constructors", {
                    get: function () {
                        return {
                            state: this.m_pState,
                            transducer: this.m_pTransducer,
                            branch: this.m_pBranch,
                            condition: this.m_pCondition
                        }
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "ontology", {
                    get: function () {
                        return this.m_pOntology
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "fingerprint", {
                    get: function () {
                        return this.m_sFingerprint
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "snapshot", {
                    get: function () {
                        var e = [];
                        return this.each((function (t) {
                            e.push(t.snapshot)
                        })), {a: e}
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "states", {
                    get: function () {
                        return this.m_pStates
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "main", {
                    get: function () {
                        return this.m_pMain
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "isLoaded", {
                    get: function () {
                        return this.states.count > 0 && this.main instanceof h.Main
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "isRunning", {
                    get: function () {
                        return this.count > 0
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "isStopped", {
                    get: function () {
                        return this.m_bStopped
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "isFinished", {
                    get: function () {
                        return !this.isRunning && !this.isPaused && !this.isStopped
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "isPaused", {
                    get: function () {
                        return this.m_bPaused
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "isPreview", {
                    get: function () {
                        return this.m_bPreview
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "isVerbose", {
                    get: function () {
                        return this.m_bVerbose
                    }, set: function (e) {
                        this.m_bVerbose = e
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "autoPushForward", {
                    get: function () {
                        return this.m_bAutoPushForward
                    }, set: function (e) {
                        this.m_bAutoPushForward !== e && (this.m_bAutoPushForward = e, this.each((function (e) {
                            return e.restart()
                        })))
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "metrics", {
                    get: function () {
                        return this.m_pMetrics || {states: 0, transducers: 0, branches: 0, conditions: 0, slots: 0}
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "log", {
                    get: function () {
                        return this.m_pLog
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "logger", {
                    get: function () {
                        return this.m_fnLogger
                    }, set: function (e) {
                        this.m_fnLogger = e
                    }, enumerable: !0, configurable: !0
                }), t.prototype.logMessage = function (e) {
                    this.m_pLog.push(i.DateTime.log + ": " + e), this.isVerbose && this.m_fnLogger(i.DateTime.log + ": " + e)
                }, t.prototype.parse = function (e, t, n, r) {
                    var o = this;
                    void 0 === r && (r = 0);
                    var s = {states: 0, transducers: 0, branches: 0, conditions: 0, slots: 0},
                        u = {conditions: [], transducers: []}, c = a.Errors.None;
                    if (e && i.isFilledString(e.id)) {
                        var h, p = t.branches.create(e, t), f = i.castToString(e.jump);
                        this.chain(p), this.m_pMain && e.id === this.m_pMain.id || s.branches++, i.isFilledString(f) && (p.setSuccessor("live", void 0), "abort" !== f && l.Reference(n, f, p)), i.each(e[this.m_pCondition.property], (function (t) {
                            if (t && i.isFilledString(t.id)) {
                                var n = p.conditions.create(t);
                                n && (o.chain(n), "each" === e.culling && u.conditions.push(n), s.conditions++)
                            } else c |= a.Errors.OntologyInvalidCondition, o.logMessage("Invalid condition data in ontology: " + JSON.stringify(t))
                        })), t.isMain && this.logMessage("Constructing main branch"), i.each(e[this.m_pState.property], (function (e) {
                            if (e && i.isFilledString(e.id)) {
                                var l = o.states.create(e, p, t, ++r);
                                o.chain(l), s.states++, h && (h.setSuccessor("live", l), h.setSuccessor("preview", l)), h = l, i.each(e[o.m_pTransducer.property], (function (e) {
                                    if (e && i.isFilledString(e.id)) {
                                        var t = l.transducers.create(e);
                                        o.chain(t), u.transducers.push(t), s.transducers++, t.slots.deserialize(e.slots || []).each((function (e) {
                                            o.chain(e, t), s.slots++
                                        }))
                                    } else c |= a.Errors.OntologyInvalidTransducer, o.logMessage("Invalid transducer data in ontology: " + JSON.stringify(e))
                                })), i.each(e[o.m_pBranch.property], (function (e) {
                                    var t = o.parse(e, l, n, r);
                                    r = t.enumerator, c |= t.errors, s.states += t.metrics.states, s.transducers += t.metrics.transducers, s.branches += t.metrics.branches, s.conditions += t.metrics.conditions, s.slots += t.metrics.slots, u.transducers.push(t.transducers)
                                }))
                            } else c |= a.Errors.OntologyInvalidState, o.logMessage("Invalid state data in ontology: " + JSON.stringify(e))
                        }))
                    } else c |= a.Errors.OntologyInvalidBranch, this.logMessage("Invalid branch data in ontology: " + JSON.stringify(e));
                    return {errors: c, metrics: s, transducers: u, enumerator: r}
                }, t.prototype.getFromChain = function (e, t) {
                    if (t) switch (e) {
                        case"state":
                            return this.m_pChain.states[t];
                        case"transducer":
                            return this.m_pChain.transducers[t];
                        case"branch":
                            return this.m_pChain.branches[t];
                        case"condition":
                            return this.m_pChain.conditions[t];
                        case"slot":
                            return this.m_pChain.slots[t]
                    }
                }, t.prototype.invokeNextInstance = function () {
                    if (!this.isStopped && !this.isPaused && this.count > 0) {
                        var e = this.each((function (e) {
                            return e.isRunning
                        }));
                        this.each((function (t) {
                            t.isRunning || e && !t.allowConcurrency || (e = !0, t.start())
                        }))
                    }
                }, t.prototype.onInstanceCreate = function (e) {
                    this.emitHook("OnInstanceCreate", {ontology: this, instance: e})
                }, t.prototype.onInstanceStart = function (e) {
                    this.emitHook("OnInstanceStart", {ontology: this, instance: e})
                }, t.prototype.onInstanceProcessing = function (e, t) {
                    this.emitHook("OnInstanceProcessing", {ontology: this, instance: e, processing: t})
                }, t.prototype.onInstanceEnd = function (e, t) {
                    this.emitHook("OnInstanceEnd", {ontology: this, instance: e, type: t})
                }, t.prototype.onInstanceFinish = function (e) {
                    this.emitHook("OnInstanceFinish", {ontology: this, instance: e})
                }, t.prototype.onInstancePause = function (e) {
                    this.emitHook("OnInstancePause", {ontology: this, instance: e})
                }, t.prototype.onInstanceStop = function (e) {
                    this.emitHook("OnInstanceStop", {ontology: this, instance: e})
                }, t.prototype.spawn = function (e, t, n) {
                    var r = this;
                    if (void 0 === e && (e = "single"), !this.isLoaded) throw new Error("Cannot start the state machine, because no ontology is loaded.");
                    var o = this;
                    return this.pushToMatrix(new c.Instance({
                        fingerprint: this.fingerprint, states: this.states, get preview() {
                            return o.isPreview
                        }, get autoPushForward() {
                            return o.autoPushForward
                        }, chain: {
                            state: function (e) {
                                return r.getFromChain("state", e)
                            }, transducer: function (e) {
                                return r.getFromChain("transducer", e)
                            }, branch: function (e) {
                                return r.getFromChain("branch", e)
                            }, condition: function (e) {
                                return r.getFromChain("condition", e)
                            }, slot: function (e) {
                                return r.getFromChain("slot", e)
                            }
                        }, events: {
                            onInstanceCreate: function (e) {
                                return r.onInstanceCreate(e)
                            }, onInstanceStart: function (e) {
                                return r.onInstanceStart(e)
                            }, onInstanceProcessing: function (e, t) {
                                return r.onInstanceProcessing(e, t)
                            }, onInstanceEnd: function (e, t) {
                                return r.onInstanceEnd(e, t)
                            }, onInstanceFinish: function (e) {
                                return r.onInstanceFinish(e)
                            }, onInstancePause: function (e) {
                                return r.onInstancePause(e)
                            }, onInstanceStop: function (e) {
                                return r.onInstanceStop(e)
                            }
                        }, spawn: function (e, t) {
                            return r.pushToMatrix(e, {index: t, recalculate: !0, emit: "push"})
                        }, transducers: function (e) {
                            if (r.m_pTransducers) {
                                var t = function (n) {
                                    for (var r = [], o = 1; o < arguments.length; o++) r[o - 1] = arguments[o];
                                    i.each(n.conditions.length > 1 ? n.conditions : [void 0], (function (o) {
                                        var s = r.concat.apply(r, o ? [o] : []);
                                        i.each(n.transducers, (function (n) {
                                            n instanceof d.Transducer ? e(n, s) : t.apply(void 0, [n].concat(s))
                                        }))
                                    }))
                                };
                                t(r.m_pTransducers)
                            }
                        }, get logger() {
                            return o.isVerbose ? function (e) {
                                return o.logger(e)
                            } : void 0
                        }
                    }, e, this.main, t, n))
                }, t.prototype.load = function (e) {
                    var t = this;
                    if (i.isString(e)) return this.load(JSON.parse(e));
                    this.m_pLog = [], this.unload(), this.logMessage("Start loading ontology"), this.m_pOntology = e, this.m_pMain = this.states.main(), this.chain(this.m_pMain);
                    var n = {}, r = this.parse(i.extendImmutable(e, {id: this.m_pMain.id}), this.m_pMain, n);
                    return this.m_pTransducers = r.transducers, this.states.each((function (e) {
                        i.each(n[e.id], (function (t) {
                            t.setSuccessor("live", e)
                        })), i.destroy(n, e.id)
                    })), i.each(n, (function (e, n) {
                        var s = "";
                        i.each(e, (function (e) {
                            s += ("" === s ? "" : ", ") + " " + (e instanceof o.Branch ? "branch" : "state") + " '" + e.id + "'"
                        })), r.errors |= a.Errors.OntologyInvalidJump, t.logMessage("Jump reference '" + n + "' not found (reference used in the following states/branches: " + s + ")")
                    }), {keys: !0}), r.errors === a.Errors.None && this.m_pMain ? (this.m_pMetrics = r.metrics, this.logMessage("Ontology loaded (" + r.metrics.states + " state" + (1 === r.metrics.states ? "" : "s") + ", " + r.metrics.transducers + " transducer" + (1 === r.metrics.transducers ? "" : "s") + ", " + r.metrics.branches + " branch" + (1 === r.metrics.branches ? "" : "es") + ", " + r.metrics.conditions + " condition" + (1 === r.metrics.conditions ? "" : "s") + " and " + r.metrics.slots + " slot" + (1 === r.metrics.slots ? "" : "s") + ")"), this.emitHook("OnLoad", {ontology: this})) : (this.logMessage("Ontology not loaded, an error occurred."), this.unload()), r.errors
                }, t.prototype.unload = function () {
                    this.stop(), this.isLoaded && (this.m_pStates.clear(), this.logMessage("Ontology unloaded"), this.emitHook("OnUnload", {ontology: this})), this.m_pChain = {
                        states: {},
                        transducers: {},
                        branches: {},
                        conditions: {},
                        slots: {}
                    }, this.m_pOntology = void 0, this.m_pMain = void 0, this.m_pMetrics = void 0, this.m_sFingerprint = p.SHA2_256("")
                }, t.prototype.start = function (e, t) {
                    return this.spawn("single", e, t)
                }, t.prototype.stop = function () {
                    return !!this.isRunning && (this.m_bStopped = !0, this.reverseEach((function (e) {
                        e.stop()
                    })), !0)
                }, t.prototype.pause = function (e) {
                    if (this.isRunning) {
                        var t = {a: []};
                        return this.m_bPaused = !0, this.reverseEach((function (e) {
                            t.a.splice(0, 0, e.pause())
                        })), i.isDefined(e) && i.set(t, "b", e), t
                    }
                }, t.prototype.resume = function (e) {
                    var t = this;
                    return this.stop(), i.arraySize(e.a) > 0 && (i.each(e.a, (function (e) {
                        t.spawn(e.e ? "multi" : "single", e)
                    })), i.schedulePromise((function () {
                        t.isRunning && t.emitHook("OnResume", {ontology: t, data: e.b})
                    })), this.isRunning)
                }, t.prototype.previewMode = function (e, t) {
                    void 0 === t && (t = !0), this.m_bPreview !== e && (this.m_bPreview = e, this.each((function (e) {
                        return e.restart()
                    })))
                }, t.prototype.forEach = function (e, t, n) {
                    return void 0 === t && (t = "all"), this.states.each((function (r) {
                        return r !== n && (!("states" !== t && "all" !== t || !e(r)) || (!!r.transducers.each((function (r) {
                            return r !== n && !("transducers" !== t && "all" !== t || !e(r))
                        })) || !!r.branches.each((function (r) {
                            return r !== n && (!("branches" !== t && "all" !== t || !e(r)) || r.conditions.each((function (r) {
                                return r !== n && !("conditions" !== t && "all" !== t || !e(r))
                            })))
                        }))))
                    }))
                }, t.prototype.destroy = function () {
                    this.unload(), e.prototype.destroy.call(this)
                }, t
            }(u.Matrix);
        t.Ontology = g
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(0);
        t.Reference = function (e, t, n) {
            (e[t] || r.set(e, t, [])).push(n)
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(0);
        t.ontology = function (e) {
            return function (t) {
                r.set(t, "property", e)
            }
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(17), i = n(18), o = n(19), s = n(4), a = function () {
            function e(e, t) {
                this.m_pCondition = e, this.m_pContext = t
            }

            return Object.defineProperty(e.prototype, "nodeRef", {
                get: function () {
                    var e = this;
                    return !this.m_pNode && this.props.node && this.m_pCondition.collector.forEach((function (t) {
                        return t.props.id === e.props.node && (e.m_pNode = t), e.m_pNode instanceof o.Node
                    }), "transducers"), this.m_pNode
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "clusterRef", {
                get: function () {
                    var e = this;
                    return !this.m_pCluster && this.props.cluster && this.m_pCondition.collector.forEach((function (t) {
                        return t.props.id === e.props.cluster && (e.m_pCluster = t), e.m_pCluster instanceof i.Cluster
                    }), "states"), this.m_pCluster
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "branchRef", {
                get: function () {
                    var e = this;
                    return !this.m_pBranch && this.props.branch && this.m_pCondition.collector.forEach((function (t) {
                        return t.props.id === e.props.branch && (e.m_pBranch = t), e.m_pBranch instanceof r.Branch
                    }), "branches"), this.m_pBranch
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "condition", {
                get: function () {
                    return this.m_pCondition.props
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "props", {
                get: function () {
                    return this.condition.block
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "node", {
                get: function () {
                    return this.nodeRef && this.nodeRef.props
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "cluster", {
                get: function () {
                    return this.clusterRef && this.clusterRef.props
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "branch", {
                get: function () {
                    return this.branchRef && this.branchRef.props
                }, enumerable: !0, configurable: !0
            }), e.prototype.slotOf = function (e) {
                var t = this.m_pContext.instance.data.forSlot(e || this.props.slot || "");
                return t && t.slot
            }, e.prototype.valueOf = function (e, t) {
                if (this.nodeRef) {
                    var n = e instanceof s.Slot ? e : this.nodeRef.slots.select(e || this.props.slot || "", t);
                    return n && n.slots === this.nodeRef.slots && this.m_pContext.immutableValueOf(n) || void 0
                }
            }, e.prototype.immutableValueOf = function (e) {
                return this.m_pContext.immutableValueOf(e || this.props.slot || "")
            }, e.prototype.variableFor = function (e) {
                return this.m_pContext.variableFor(e, (function (e) {
                    return e.props.block && e.props.block.slot
                }))
            }, e
        }();
        t.ConditionBlock = a
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(18), o = n(53), s = n(7), a = n(0), u = n(55), c = n(17), l = n(59), h = n(19), p = n(60),
            f = function (e) {
                function t(n, r, s, u) {
                    void 0 === r && (r = "paginated"), void 0 === s && (s = !0), void 0 === u && (u = !1);
                    var l = e.call(this, i.Cluster, h.Node, c.Branch, o.Condition, n, "progressive" === r, u) || this;
                    return l.m_pStories = {}, l.m_nClusters = 0, l.m_nNodes = 0, l.m_sMode = r, l.m_pChange = new a.Debounce((function (e, n, r) {
                        if ("started" === n || "finished" === n || "stopped" === n || "paused" === n || "mode" === n || !e || e.isRunning) {
                            var i = l.mode;
                            l.emitHook("OnChange", {
                                collector: l, instance: e, change: n, get storyline() {
                                    return r && r.immutable || t.getInitialStoryline(i)
                                }
                            }), e && l.onInstanceChange(e, n, r)
                        }
                    }), "promise"), l.hook("OnChange", "synchronous", (function (e) {
                        l.onChange && l.onChange(e)
                    })), l.hook("OnRestart", "framed", (function (e) {
                        l.onRestart && l.onRestart(e.instance)
                    })), l.isLoaded && s && (l.isPreview || a.isBoolean(s) || !l.restore(s)) && l.start(), l
                }

                return r.__extends(t, e), t.getInitialStoryline = function (e) {
                    return {
                        moments: [],
                        pages: [],
                        presentMoment: void 0,
                        presentCluster: void 0,
                        presentNodes: [],
                        activeNodes: [],
                        isEvaluating: !1,
                        isEmpty: !1,
                        isAtStart: !1,
                        isAtHead: !1,
                        isAtFinish: !1,
                        isFinishable: !1,
                        isFailed: !1,
                        isPassed: !1,
                        mode: e,
                        direction: "forward",
                        count: 0,
                        enumerators: 0,
                        percentage: 0,
                        map: function () {
                            return []
                        },
                        stepForward: function () {
                            return !1
                        },
                        stepBackward: function () {
                            return !1
                        },
                        stepToStart: function () {
                            return !1
                        },
                        stepToHead: function () {
                            return !1
                        },
                        stepToPage: function () {
                            return !1
                        },
                        finish: function () {
                            return !1
                        }
                    }
                }, Object.defineProperty(t.prototype, "definition", {
                    get: function () {
                        return this.ontology
                    }, set: function (e) {
                        e && this.reload(e)
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "instance", {
                    get: function () {
                        return this.m_pInstance
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "storyline", {
                    get: function () {
                        if (this.instance) {
                            var e = this.story(this.instance);
                            return e && e.storyline
                        }
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "name", {
                    get: function () {
                        return this.definition && this.definition.name || ""
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "mode", {
                    get: function () {
                        return this.m_sMode
                    }, set: function (e) {
                        if (e !== this.m_sMode) {
                            var t = "progressive" === e, n = this.storyline;
                            n && n.reset(), this.m_sMode = e, t === this.autoPushForward ? n && n.invalidate() : this.autoPushForward = t, this.change(this.instance, "mode", !1)
                        }
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "preview", {
                    get: function () {
                        return this.isPreview
                    }, set: function (e) {
                        if (e !== this.isPreview) {
                            var t = this.storyline;
                            t && t.reset(), this.previewMode(e), e && !this.isRunning ? this.start() : this.change(this.instance, "preview", !1)
                        }
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "status", {
                    get: function () {
                        return this.isPreview ? "preview" : this.isEmpty ? "empty" : this.isFinished ? "finished" : this.isStopped ? "stopped" : this.isPaused ? "paused" : this.isRunning ? "running" : "idle"
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "isEmpty", {
                    get: function () {
                        if (this.isFinished && 0 === this.m_nNodes && 0 === this.m_nClusters) return !0;
                        var e = this.storyline;
                        return e && e.isEmpty || !1
                    }, enumerable: !0, configurable: !0
                }), t.prototype.story = function (e) {
                    var t = this.m_pStories;
                    if (e.isRunning) {
                        var n = this, r = t[e.id] || a.set(t, e.id, {
                            storyline: new p.Storyline({
                                instance: e, get mode() {
                                    return n.mode
                                }, get checksum() {
                                    return a.getAny(t[e.id] || {}, "checksum")
                                }, get direction() {
                                    return a.getAny(t[e.id] || {}, "direction") || "forward"
                                }
                            })
                        });
                        if (r) return r.checksum = e.checksum, r
                    } else a.destroy(t, e.id)
                }, t.prototype.change = function (e, t, n) {
                    if (!n || e && e.isRunning) {
                        var r = e && this.story(e);
                        if (r) switch (t) {
                            case"forward":
                            case"backward":
                                if ("progressive" === this.mode || this.isPreview) return;
                                r.direction = t;
                                break;
                            case"started":
                                r.storyline.invalidate()
                        }
                        this.m_pChange.invoke(e, t, r && r.storyline)
                    }
                }, t.prototype.onInstanceChange = function (e, t, n) {
                }, t.prototype.onInstanceStart = function (t) {
                    this.m_pInstance = t, this.m_nClusters = 0, this.m_nNodes = 0, this.change(t, "started", !1), e.prototype.onInstanceStart.call(this, t)
                }, t.prototype.onInstanceProcessing = function (t, n) {
                    n ? this.m_pChange.hold() : this.m_pChange.release(), e.prototype.onInstanceProcessing.call(this, t, n)
                }, t.prototype.onInstanceEnd = function (t, n) {
                    this.change(t, n, !1), "finished" === n && this.onFinish && this.onFinish(t), e.prototype.onInstanceEnd.call(this, t, n)
                }, t.prototype.onInstanceCluster = function (e, t, n) {
                    this.m_nClusters++, this.change(e.instance, "render", !0)
                }, t.prototype.onInstanceClusterEvaluating = function (e, t, n) {
                    this.change(e, "evaluating", !0)
                }, t.prototype.onInstanceClusterLeave = function (e, t, n) {
                }, t.prototype.onInstanceNode = function (e, t, n) {
                    this.m_nNodes++, this.change(e.instance, "render", !0)
                }, t.prototype.onInstanceProgress = function (e, t) {
                    this.change(e, "progress", !0)
                }, t.prototype.onInstanceStep = function (e, t) {
                    this.change(e, t, !0)
                }, t.prototype.onInstanceValidated = function (e, t, n) {
                    this.change(e, "validated", !0)
                }, t.prototype.restore = function (e) {
                    if (!a.isNull(e) && this.resume(e)) return this.firstItem
                }, t.prototype.reload = function (e, t) {
                    if (void 0 === t && (t = !1), JSON.stringify(e) !== JSON.stringify(this.definition)) {
                        var n = this.instance && this.instance.isRunning && u.Export.values(this.instance);
                        if (this.load(e), !t || n) return this.start(void 0, n && function (e) {
                            return l.Import.values(e, n)
                        } || void 0)
                    }
                    return this.isRunning || t ? this.instance : this.start()
                }, t.prototype.restart = function (e) {
                    void 0 === e && (e = !1);
                    var t = e && this.instance && this.instance.isRunning && u.Export.values(this.instance);
                    this.stop();
                    var n = this.start();
                    return t && l.Import.values(n, t), this.emitHook("OnRestart", {collector: this, instance: n}), n
                }, t.prototype.rerender = function (e) {
                    this.change(e, "render", !0)
                }, t.prototype.stepForward = function () {
                    var e = this.storyline;
                    return e && e.stepForward() || !1
                }, t.prototype.stepBackward = function () {
                    var e = this.storyline;
                    return e && e.stepBackward() || !1
                }, t.prototype.stepToStart = function () {
                    var e = this.storyline;
                    return e && e.stepToStart() || !1
                }, t.prototype.stepToHead = function () {
                    var e = this.storyline;
                    return e && e.stepToHead() || !1
                }, t.prototype.finish = function () {
                    var e = this.storyline;
                    return e && e.finish() || !1
                }, t
            }(s.Ontology);
        t.Collector = f
    }, function (e, t, n) {
        "use strict";
        var r = this && this.__spreadArrays || function () {
            for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
            var r = Array(e), i = 0;
            for (t = 0; t < n; t++) for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++) r[i] = o[s];
            return r
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        var i, o = n(58);
        !function (e) {
            e[e.Text = 1] = "Text", e[e.Content = 2] = "Content", e[e.Newline = 4] = "Newline", e[e.Space = 8] = "Space", e[e.Heading = 16] = "Heading", e[e.Quote = 32] = "Quote", e[e.Code = 64] = "Code", e[e.InlineCode = 128] = "InlineCode"
        }(i || (i = {}));
        var s = function () {
            function e(e, t) {
                if (this.m_nFeatures = o.MarkdownFeatures.All, this.m_bMentions = !1, this.m_bReferences = !1, this.m_pBlocks = [], this.m_nOpcode = i.Newline, this.m_nIndex = 0, this.m_sBuffer = "", this.m_pTags = [], this.m_nStopIndex = -1, this.m_sMarkdown = e.replace(/(\r\n|[\r\n])/, "\n"), this.m_nLength = this.m_sMarkdown.length, /[\n\\\*_~`#>\[!@]/g.test(this.m_sMarkdown)) t && ("number" == typeof t.features && (this.m_nFeatures = t.features), this.m_pMentions = t.mentions, this.m_pReferences = t.references, this.m_sStopWord = t.stopWord, this.m_sStopWord && (this.m_sStopChar = this.m_sStopWord.charAt(0))), this.parse(); else {
                    if (t && t.stopWord) {
                        var n = this.m_sMarkdown.indexOf(t.stopWord);
                        -1 !== n && (this.m_sMarkdown = this.m_sMarkdown.substr(0, n), this.m_nStopIndex = n)
                    }
                    this.m_pBlocks.push({content: this.m_sMarkdown.replace(/\s\s+/g, " ")})
                }
            }

            return e.parse = function (t, n) {
                return new e(t, n)
            }, Object.defineProperty(e.prototype, "features", {
                get: function () {
                    return this.m_nFeatures
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "abstractSyntaxTree", {
                get: function () {
                    var e = this.m_pBlocks.length;
                    if (1 === e) {
                        var t = {content: this.m_pBlocks[0].content, value: this.m_pBlocks[0].value};
                        return "paragraph" !== this.m_pBlocks[0].type && (t.type = this.m_pBlocks[0].type), t
                    }
                    return {content: 0 === e ? "" : this.m_pBlocks}
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "text", {
                get: function () {
                    var e = "";
                    return this.map((function (t, n) {
                        switch (t) {
                            case"break":
                            case"h1":
                            case"h2":
                            case"h3":
                            case"h4":
                            case"h5":
                            case"h6":
                            case"quote":
                            case"codeline":
                                return void (e += ("" === e ? "" : "\n") + n);
                            case"paragraph":
                                return void (e += ("" === e ? "" : "\n\n") + n);
                            case"codeblock":
                            case"image":
                                return;
                            default:
                                return void (e += n)
                        }
                    })), e.replace(/(^\s*)|(\s*$)/g, "").replace(/[^\S\r\n\.]{2,}/g, " ").replace(/\n[^\S\r\n\.]/g, "\n")
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "hasMentions", {
                get: function () {
                    return this.m_bMentions
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "hasReferences", {
                get: function () {
                    return this.m_bReferences
                }, enumerable: !0, configurable: !0
            }), e.prototype.parse = function () {
                for (var e = this; this.m_nIndex < this.m_nLength; this.m_nIndex++) {
                    if (this.m_sBuffer = this.m_sMarkdown.charAt(this.m_nIndex), this.m_nOpcode & i.Code) {
                        if ("\n" === this.m_sBuffer) {
                            this.m_nOpcode & i.Newline && this.m_pTag && "codeblock" === this.m_pTag.type && "string" != typeof this.m_pTag.content && (!Array.isArray(this.m_pTag.content) || this.m_pTag.content.length > 0) && (this.m_pTag.content = r(Array.isArray(this.m_pTag.content) ? this.m_pTag.content : [this.m_pTag.content], [{
                                parent: this.m_pTag,
                                type: "codeline",
                                content: ""
                            }])), this.m_nOpcode |= i.Newline, this.m_pText = void 0;
                            continue
                        }
                    } else {
                        if ("\n" === this.m_sBuffer) {
                            this.features & o.MarkdownFeatures.Paragraphs ? this.m_nOpcode & i.Newline && this.m_pText && (this.m_nOpcode &= ~i.Quote, this.block("paragraph")) : this.features & o.MarkdownFeatures.Breaks && this.m_nOpcode & i.Text && (this.m_nOpcode &= ~i.Content, this.m_pTags.push("break")), this.m_nOpcode |= i.Newline, this.m_nOpcode & i.Heading && (this.m_nOpcode &= ~i.Heading, this.block("paragraph"));
                            continue
                        }
                        if (this.parseLinebreak()) continue;
                        if (this.m_nIndex > 0 && (this.m_nOpcode & i.Newline || this.m_nOpcode & i.Space) && " " === this.m_sBuffer) continue;
                        if (this.m_nIndex > 0 && (this.m_nOpcode & i.Newline || this.m_nOpcode & i.Space) && "\t" === this.m_sBuffer) continue
                    }
                    this.parseStopWord() || (!(this.parseEscapeCharacters() || this.parseCodeBlock() || this.parseBuffer("mention", this.m_pMentions, "@", (function () {
                        return e.m_bMentions = !0
                    })) || this.parseBuffer("reference", this.m_pReferences, "#", (function () {
                        return e.m_bReferences = !0
                    })) || this.parseCode()) && (this.parseHeading() || this.parseBlockquotes() || this.parseImage() || this.parseHyperlinks() || this.features & o.MarkdownFeatures.Formatting && (this.parseTag("bold+italic", "*", "triple") || this.parseTag("bold", "*", "double") || this.parseTag("italic", "*", "single") || this.parseTag("underline", "_", "single-or-double") || this.parseTag("strikethrough", "~", "single-or-double"))) || this.flush(), 0 === this.m_pTags.length && (this.m_nOpcode &= ~i.Newline, " " !== this.m_sBuffer && "\t" !== this.m_sBuffer || (this.m_nOpcode |= i.Space)))
                }
            }, e.prototype.pushBlock = function (e, t) {
                var n = {parent: void 0, type: e, content: "", value: t};
                return this.m_pBlocks.push(n), this.m_nOpcode &= ~i.Content, n
            }, e.prototype.block = function (e, t) {
                this.m_pBlock = {type: e, value: t}, this.m_pTags = [], this.m_nOpcode &= ~i.InlineCode
            }, e.prototype.pushTag = function (e) {
                this.m_pTags.push(e)
            }, e.prototype.popTag = function (e) {
                var t = this.m_pTags.length, n = this.m_pTag;
                if (t > 0) for (var r = t - 1; r >= 0; r--) if (this.m_pTags[r] === e) return this.m_pTags.splice(r, this.m_pTags.length - r), !0;
                for (; n;) {
                    if (n.type === e) return this.m_pTag = this.m_pText = n.parent, !0;
                    n = n.parent
                }
                return !1
            }, e.prototype.isTagActive = function (e) {
                var t = this.m_pTags.length, n = this.m_pTag;
                if (t > 0) for (var r = t - 1; r >= 0; r--) if (this.m_pTags[r] === e) return !0;
                for (; n;) {
                    if (n.type === e) return !0;
                    n = n.parent
                }
                return !1
            }, e.prototype.tag = function (e) {
                return !this.popTag(e) && (this.pushTag(e), !0)
            }, e.prototype.flush = function (e) {
                if (void 0 === e && (e = !1), !this.m_sBuffer && !e) return {content: ""};
                this.m_pBlock ? (this.m_pTag = this.m_pText = this.pushBlock(this.m_pBlock.type, this.m_pBlock.value), this.m_pBlock = void 0, this.m_nOpcode & i.Code && (this.m_pTag.content = this.m_pText = {
                    parent: this.m_pTag,
                    type: "codeline",
                    content: ""
                })) : this.m_pTag || (this.m_pTag = this.m_pText = this.pushBlock("paragraph"));
                for (var t = this.m_pTags.shift(); t;) this.m_pText = {
                    parent: this.m_pTag,
                    type: t,
                    content: ""
                }, "string" == typeof this.m_pTag.content && this.m_pTag.content && (this.m_pTag.content = {
                    parent: this.m_pTag,
                    content: this.m_pTag.content
                }), this.m_pTag.content = "string" == typeof this.m_pTag.content ? this.m_pText : r(Array.isArray(this.m_pTag.content) ? this.m_pTag.content : [this.m_pTag.content], [this.m_pText]), "break" === t ? this.m_pText = this.m_pTag : this.m_pTag = this.m_pText, t = this.m_pTags.shift();
                return this.m_pText && "string" == typeof this.m_pText.content || (this.m_pText = {
                    parent: this.m_pTag,
                    content: ""
                }, this.m_pTag.content = r(Array.isArray(this.m_pTag.content) ? this.m_pTag.content : [this.m_pTag.content], [this.m_pText]), "codeblock" === this.m_pTag.type && (this.m_pText.type = "codeline")), "\t" === this.m_sBuffer ? (this.m_pText.content += "codeline" === this.m_pText.type ? "  " : " ", {content: ""}) : (this.m_nOpcode & i.Newline && this.m_nOpcode & i.Content && (e || " " !== this.m_sBuffer) && (this.m_pText.content += " "), this.m_pText.content += this.m_sBuffer, this.m_nOpcode |= i.Text, this.m_nOpcode |= i.Content, this.m_nOpcode &= ~i.Space, e && (this.m_sBuffer = ""), this.m_pText)
            }, e.prototype.parseLinebreak = function () {
                return !!(this.features & o.MarkdownFeatures.Paragraphs && this.features & o.MarkdownFeatures.Breaks && this.m_nOpcode & i.Content && " " === this.m_sBuffer && this.m_nIndex + 2 < this.m_nLength && " " === this.m_sMarkdown.charAt(this.m_nIndex + 1) && "\n" === this.m_sMarkdown.charAt(this.m_nIndex + 2)) && (this.m_nIndex++, this.m_nOpcode &= ~i.Space, this.m_nOpcode &= ~i.Content, this.m_pTags.push("break"), !0)
            }, e.prototype.parseEscapeCharacters = function () {
                if ("\\" === this.m_sBuffer && this.m_nIndex + 1 < this.m_nLength) {
                    var e = this.m_sMarkdown.charAt(this.m_nIndex + 1);
                    if ("\\" === e || "*" === e || "_" === e || "~" === e || "`" === e || "#" === e || ">" === e || "[" === e || "]" === e || "(" === e || ")" === e || "!" === e || "@" === e) return this.m_sBuffer = e, this.m_nIndex++, !0
                }
                return !1
            }, e.prototype.parseTag = function (e, t, n) {
                if (this.m_sBuffer === t) {
                    if ("single" !== n && this.m_nIndex + ("triple" === n ? 2 : 1) < this.m_nLength && this.m_sMarkdown.charAt(this.m_nIndex + 1) === t && ("triple" !== n || this.m_sMarkdown.charAt(this.m_nIndex + 2) === t)) this.m_nIndex += "triple" === n ? 2 : 1; else if ("double" === n || "triple" === n) return !1;
                    if ("bold" === e || "italic" === e) {
                        if (this.popTag("bold+italic")) return this.tag("bold" === e ? "italic" : "bold"), !0
                    } else if ("bold+italic" === e) {
                        var r = this.isTagActive("bold"), i = this.isTagActive("italic");
                        if (this.popTag("bold"), this.popTag("italic"), r && i) return !0;
                        (r || i) && (this.popTag(r ? "bold" : "italic"), e = r ? "italic" : "bold")
                    }
                    return this.tag(e), !0
                }
                return !1
            }, e.prototype.parseBuffer = function (t, n, r, i) {
                if (n && this.m_sBuffer === r && this.m_nIndex + 1 < this.m_nLength) {
                    var s = n.parser(this.m_sMarkdown.substr(this.m_nIndex + 1, n.numberOfChars || void 0));
                    if (s && s.shift > 0) {
                        this.m_nIndex += s.shift, this.m_sBuffer = "", this.pushTag(t);
                        var a = this.flush(!0);
                        return s.markdown ? a.parent && "code" === a.parent.type ? a.content = s.markdown : a.content = e.parse(s.markdown, {
                            features: this.features & o.MarkdownFeatures.Formatting | this.features & o.MarkdownFeatures.InlineCode | this.features & o.MarkdownFeatures.Hyperlinks | this.features & o.MarkdownFeatures.Images,
                            mentions: this.m_pMentions,
                            references: this.m_pReferences
                        }).abstractSyntaxTree.content : s.text && (a.content = s.text), a.value = s.value, a.value && i(), this.popTag(t), !0
                    }
                }
                return !1
            }, e.prototype.parseStopWord = function () {
                return !(this.m_nOpcode & i.InlineCode || this.m_nOpcode & i.Code || this.m_sBuffer !== this.m_sStopChar || !this.m_sStopWord || this.m_sMarkdown.substr(this.m_nIndex, this.m_sStopWord.length) !== this.m_sStopWord) && (this.m_nStopIndex = this.m_nIndex, this.m_nIndex = this.m_nLength, !0)
            }, e.prototype.parseHeading = function () {
                if (this.features & o.MarkdownFeatures.Paragraphs && this.features & o.MarkdownFeatures.Headings && this.m_nOpcode & i.Newline && "#" === this.m_sBuffer) {
                    for (var e = 1, t = this.m_nIndex + 1; t < this.m_nLength && e >= 1 && e <= 6;) {
                        var n = this.m_sMarkdown.charAt(t);
                        if ("#" !== n) {
                            " " !== n && (e = 0);
                            break
                        }
                        e++, t++
                    }
                    switch (e) {
                        case 1:
                            this.block("h1");
                            break;
                        case 2:
                            this.block("h2");
                            break;
                        case 3:
                            this.block("h3");
                            break;
                        case 4:
                            this.block("h4");
                            break;
                        case 5:
                            this.block("h5");
                            break;
                        case 6:
                            this.block("h6");
                            break;
                        default:
                            return !1
                    }
                    return this.m_nIndex += e, this.m_nOpcode |= i.Heading, !0
                }
                return !1
            }, e.prototype.parseBlockquotes = function () {
                return !!(this.features & o.MarkdownFeatures.Paragraphs && this.features & o.MarkdownFeatures.Blockquotes && this.m_nOpcode & i.Newline && ">" === this.m_sBuffer) && (this.m_nIndex + 1 < this.m_nLength && " " === this.m_sMarkdown.charAt(this.m_nIndex + 1) && this.m_nIndex++, this.m_nOpcode & i.Quote ? (this.m_sBuffer = " ", !1) : (this.m_nOpcode |= i.Quote, this.block("quote"), !0))
            }, e.prototype.parseImage = function () {
                if (this.features & o.MarkdownFeatures.Images && "!" === this.m_sBuffer && this.m_nIndex + 4 < this.m_nLength && "[" === this.m_sMarkdown.charAt(this.m_nIndex + 1)) {
                    for (var e = "", t = "", n = !1, r = this.m_nIndex++; ++this.m_nIndex < this.m_nLength;) {
                        if (this.m_sBuffer = this.m_sMarkdown.charAt(this.m_nIndex), !this.parseEscapeCharacters()) if (n) {
                            if (")" === this.m_sBuffer) {
                                if ("" !== t) {
                                    this.pushTag("image");
                                    var i = this.flush(!0);
                                    i.content = e, i.value = t, this.popTag("image")
                                }
                                return !0
                            }
                        } else if ("]" === this.m_sBuffer && this.m_nIndex + 1 < this.m_nLength && "(" === this.m_sMarkdown.charAt(this.m_nIndex + 1)) {
                            n = !0, this.m_nIndex++;
                            continue
                        }
                        n ? t += this.m_sBuffer : e += this.m_sBuffer
                    }
                    return this.m_nIndex = r, this.m_sBuffer = "!", !1
                }
                return !1
            }, e.prototype.parseHyperlinks = function () {
                if (this.features & o.MarkdownFeatures.Hyperlinks && "[" === this.m_sBuffer && this.m_nIndex + 3 < this.m_nLength) {
                    var t = e.parse(this.m_sMarkdown.substr(this.m_nIndex + 1), {
                        features: this.features & o.MarkdownFeatures.Formatting | this.features & o.MarkdownFeatures.InlineCode | this.features & o.MarkdownFeatures.Images,
                        mentions: this.m_pMentions,
                        references: this.m_pReferences,
                        stopWord: "]("
                    });
                    if (-1 !== t.m_nStopIndex) {
                        var n = this.m_nIndex, r = "";
                        for (this.m_nIndex += t.m_nStopIndex + 2; ++this.m_nIndex < this.m_nLength;) {
                            if (this.m_sBuffer = this.m_sMarkdown.charAt(this.m_nIndex), !this.parseEscapeCharacters() && ")" === this.m_sBuffer) {
                                if ("" !== r) {
                                    this.pushTag("hyperlink");
                                    var i = this.flush(!0);
                                    i.content = t.abstractSyntaxTree.content || r, i.value = r, this.popTag("hyperlink")
                                }
                                return !0
                            }
                            r += this.m_sBuffer
                        }
                        this.m_nIndex = n, this.m_sBuffer = "["
                    }
                }
                return !1
            }, e.prototype.parseCode = function () {
                return this.features & o.MarkdownFeatures.InlineCode && "`" === this.m_sBuffer && (this.m_sBuffer = "", this.m_nOpcode = this.m_nOpcode ^ i.InlineCode, this.tag("code")), !!(this.m_nOpcode & i.InlineCode)
            }, e.prototype.parseCodeBlock = function () {
                if (this.features & o.MarkdownFeatures.Paragraphs && this.features & o.MarkdownFeatures.Code && this.m_nOpcode & i.Newline && "`" === this.m_sBuffer && this.m_nIndex + 2 < this.m_nLength && "`" === this.m_sMarkdown.charAt(this.m_nIndex + 1) && "`" === this.m_sMarkdown.charAt(this.m_nIndex + 2)) {
                    var e = "", t = !0;
                    for (this.m_nOpcode = this.m_nOpcode ^ i.Code, this.m_nIndex += 3, this.m_sBuffer = ""; this.m_nIndex < this.m_nLength;) {
                        var n = this.m_sMarkdown.charAt(this.m_nIndex);
                        if ("\n" === n) {
                            this.m_nIndex--;
                            break
                        }
                        " " === n || "\t" === n ? t = !1 : t && (e += n), this.m_nIndex++
                    }
                    return this.m_nOpcode & i.Code ? this.block("codeblock", e || void 0) : this.block("paragraph"), !0
                }
                return !!(this.m_nOpcode & i.Code)
            }, e.prototype.mapHelper = function (e, t, n, r) {
                var i = this;
                void 0 === n && (n = !0);
                var o = "string" == typeof e.content, s = e.value;
                if (s && s.ref && "string" == typeof s.string) return t(e.type, s.string, s.ref, r, "node");
                var a = t(e.type, o ? e.content : "", e.value, r, n && !e.type ? o ? "text" : "root" : "node");
                return o || (Array.isArray(e.content) ? e.content.forEach((function (e) {
                    return i.mapHelper(e, t, !1, a)
                })) : this.mapHelper(e.content, t, !1, a)), a
            }, e.prototype.reduceHelper = function (e, t) {
                var n = this, r = e.value;
                if (r && r.ref && "string" == typeof r.string) return t(e.type, r.string, r.ref);
                if ("string" != typeof e.content) {
                    var i = [];
                    return Array.isArray(e.content) ? e.content.forEach((function (e) {
                        return i.push(n.reduceHelper(e, t))
                    })) : i.push(this.reduceHelper(e.content, t)), t(e.type, i, e.value)
                }
                return t(e.type, e.content, e.value)
            }, e.prototype.map = function (e) {
                return this.mapHelper(this.abstractSyntaxTree, e)
            }, e.prototype.reduce = function (e) {
                return this.reduceHelper(this.abstractSyntaxTree, e)
            }, e
        }();
        t.MarkdownParser = s
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(29), i = n(0);

        function o(e, t, n, i) {
            return r.MarkdownParser.parse(e, {
                features: n, mentions: {
                    numberOfChars: 64, parser: function (e) {
                        if (/[A-Fa-f0-9]{64}/.test(e)) {
                            var n = t.variableFor(e, (function (e) {
                                return e.props.block && e.props.block.slot
                            }));
                            if (n) {
                                var r = n;
                                return {
                                    shift: 64, value: {
                                        ref: r, get string() {
                                            return r.string || i
                                        }
                                    }
                                }
                            }
                            return {shift: 64, text: i}
                        }
                    }
                }
            })
        }

        t.markdownify = function (e, t, n) {
            var s = n && n.placeholder || "",
                a = n && !i.isUndefined(n.features) ? n.features : r.MarkdownFeatures.Formatting | r.MarkdownFeatures.Hyperlinks;
            n && n.lineBreaks && (a |= r.MarkdownFeatures.Breaks);
            var u = t.key + "/" + e + "/" + a + "/" + s;
            return t.instance.readFromCache(u) || t.instance.writeToCache(u, o(e, t, a, s))
        }, t.markdownifyToString = function (e, t, n, s) {
            void 0 === s && (s = !1);
            var a = t.key + "/" + e + "/" + n + "/" + s, u = t.instance.readFromCache(a);
            if (i.isString(u)) return u;
            var c = u || t.instance.writeToCache(a, o(e, t, s ? r.MarkdownFeatures.Breaks : r.MarkdownFeatures.None, n));
            return c.hasMentions ? c.text : t.instance.writeToCache(a, c.text)
        }, t.markdownifyTo = function (e, t, n) {
            var s = n && !i.isUndefined(n.features) ? n.features : r.MarkdownFeatures.Formatting | r.MarkdownFeatures.Hyperlinks;
            n && n.lineBreaks && (s |= r.MarkdownFeatures.Breaks);
            var a = n && n.placeholder || "",
                u = t.key + "/" + ("reduce" in n ? "reduce" : "map") + "/" + e + "/" + s + "/" + a,
                c = t.instance.readFromCache(u);
            if (!c || c instanceof r.MarkdownParser) {
                var l = c || t.instance.writeToCache(u, o(e, t, s, a)), h = void 0;
                if ("reduce" in n) h = l.reduce(n.reduce); else {
                    if (!("map" in n)) throw new Error("You need to specify a reduce or map function.");
                    h = l.map(n.map)
                }
                return l.hasMentions ? h : t.instance.writeToCache(u, h)
            }
            return c
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(0), i = n(26), o = n(28);
        t.tripetto = function (e) {
            switch (e.type) {
                case"node":
                    return function (t) {
                        o.NodeBlocks.register(t, e.identifier, r.isString(e.alias) ? [e.alias] : e.alias || [], e.ref, e.autoRender, e.autoValidate)
                    };
                case"headless":
                    return function (t) {
                        o.NodeBlocks.register(t, e.identifier, r.isString(e.alias) ? [e.alias] : e.alias || [])
                    };
                case"condition":
                    return function (t) {
                        i.ConditionBlocks.register(t, e.identifier, r.isString(e.alias) ? [e.alias] : e.alias || [])
                    }
            }
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(8);
        t.condition = function (e, t, n) {
            r.defineMarker("condition", e, t, n, "single")
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(8);
        t.validator = function (e, t, n) {
            r.defineMarker("validator", e, t, n, "single")
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(8);
        t.destroy = function (e, t, n) {
            r.defineMarker("destroy", e, t, n)
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(62);
        t.Domain = r.Domain;
        var i = n(63);
        t.LOCALE_DEFAULTS = i.DEFAULTS, t.Locales = i.Locales;
        var o = n(112);
        t.gettext = o.gettext, t.dgettext = o.dgettext, t.ngettext = o.ngettext, t.dngettext = o.dngettext, t.pgettext = o.pgettext, t.dpgettext = o.dpgettext, t.npgettext = o.npgettext, t.dnpgettext = o.dnpgettext, t._ = o._, t._n = o._n
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.DOMAINS = {
            af: ["Afrikaans", "Afrikaans"],
            "af-NA": ["Afrikaans (Namibia)", "Afrikaans (Namibië)"],
            agq: ["Aghem", "Aghem"],
            ak: ["Akan", "Akan"],
            am: ["Amharic", "አማርኛ"],
            ar: ["Arabic", "العربية"],
            "ar-AE": ["Arabic (United Arab Emirates)", "العربية (الإمارات العربية المتحدة)"],
            "ar-BH": ["Arabic (Bahrain)", "العربية (البحرين)"],
            "ar-DJ": ["Arabic (Djibouti)", "العربية (جيبوتي)"],
            "ar-DZ": ["Arabic (Algeria)", "العربية (الجزائر)"],
            "ar-EG": ["Arabic (Egypt)", "العربية (مصر)"],
            "ar-EH": ["Arabic (Western Sahara)", "العربية (الصحراء الغربية)"],
            "ar-ER": ["Arabic (Eritrea)", "العربية (إريتريا)"],
            "ar-IL": ["Arabic (Israel)", "العربية (إسرائيل)"],
            "ar-IQ": ["Arabic (Iraq)", "العربية (العراق)"],
            "ar-JO": ["Arabic (Jordan)", "العربية (الأردن)"],
            "ar-KM": ["Arabic (Comoros)", "العربية (جزر القمر)"],
            "ar-KW": ["Arabic (Kuwait)", "العربية (الكويت)"],
            "ar-LB": ["Arabic (Lebanon)", "العربية (لبنان)"],
            "ar-LY": ["Arabic (Libya)", "العربية (ليبيا)"],
            "ar-MA": ["Arabic (Morocco)", "العربية (المغرب)"],
            "ar-MR": ["Arabic (Mauritania)", "العربية (موريتانيا)"],
            "ar-OM": ["Arabic (Oman)", "العربية (عُمان)"],
            "ar-PS": ["Arabic (Palestinian Territories)", "العربية (الأراضي الفلسطينية)"],
            "ar-QA": ["Arabic (Qatar)", "العربية (قطر)"],
            "ar-SA": ["Arabic (Saudi Arabia)", "العربية (المملكة العربية السعودية)"],
            "ar-SD": ["Arabic (Sudan)", "العربية (السودان)"],
            "ar-SO": ["Arabic (Somalia)", "العربية (الصومال)"],
            "ar-SS": ["Arabic (South Sudan)", "العربية (جنوب السودان)"],
            "ar-SY": ["Arabic (Syria)", "العربية (سوريا)"],
            "ar-TD": ["Arabic (Chad)", "العربية (تشاد)"],
            "ar-TN": ["Arabic (Tunisia)", "العربية (تونس)"],
            "ar-YE": ["Arabic (Yemen)", "العربية (اليمن)"],
            as: ["Assamese", "অসমীয়া"],
            asa: ["Asu", "Kipare"],
            ast: ["Asturian", "asturianu"],
            az: ["Azerbaijani", "azərbaycan"],
            "az-Cyrl": ["Azerbaijani (Cyrillic)", "азәрбајҹан (Кирил)"],
            "az-Latn": ["Azerbaijani (Latin)", "azərbaycan (latın)"],
            bas: ["Basaa", "Ɓàsàa"],
            be: ["Belarusian", "беларуская"],
            bem: ["Bemba", "Ichibemba"],
            bez: ["Bena", "Hibena"],
            bg: ["Bulgarian", "български"],
            bm: ["Bambara", "bamanakan"],
            bn: ["Bangla", "বাংলা"],
            "bn-IN": ["Bangla (India)", "বাংলা (ভারত)"],
            bo: ["Tibetan", "བོད་སྐད་"],
            "bo-IN": ["Tibetan (India)", "བོད་སྐད་ (རྒྱ་གར་)"],
            br: ["Breton", "brezhoneg"],
            brx: ["Bodo", "बड़ो"],
            bs: ["Bosnian", "bosanski"],
            "bs-Cyrl": ["Bosnian (Cyrillic)", "босански (ћирилица)"],
            "bs-Latn": ["Bosnian (Latin)", "bosanski (latinica)"],
            ca: ["Catalan", "català"],
            "ca-AD": ["Catalan (Andorra)", "català (Andorra)"],
            "ca-ES-VALENCIA": ["Catalan (Spain, Valencian)", "català (Espanya, valencià)"],
            "ca-FR": ["Catalan (France)", "català (França)"],
            "ca-IT": ["Catalan (Italy)", "català (Itàlia)"],
            ccp: ["Chakma", "𑄌𑄋𑄴𑄟𑄳𑄦"],
            "ccp-IN": ["Chakma (India)", "𑄌𑄋𑄴𑄟𑄳𑄦 (𑄞𑄢𑄧𑄖𑄴)"],
            ce: ["Chechen", "нохчийн"],
            ceb: ["Cebuano", "Cebuano"],
            cgg: ["Chiga", "Rukiga"],
            chr: ["Cherokee", "ᏣᎳᎩ"],
            ckb: ["Central Kurdish", "کوردیی ناوەندی"],
            "ckb-IR": ["Central Kurdish (Iran)", "کوردیی ناوەندی (ئێران)"],
            cs: ["Czech", "čeština"],
            cu: ["Church Slavic", "cu"],
            cy: ["Welsh", "Cymraeg"],
            da: ["Danish", "dansk"],
            "da-GL": ["Danish (Greenland)", "dansk (Grønland)"],
            dav: ["Taita", "Kitaita"],
            de: ["German", "Deutsch"],
            "de-AT": ["German (Austria)", "Deutsch (Österreich)"],
            "de-BE": ["German (Belgium)", "Deutsch (Belgien)"],
            "de-CH": ["German (Switzerland)", "Deutsch (Schweiz)"],
            "de-IT": ["German (Italy)", "Deutsch (Italien)"],
            "de-LI": ["German (Liechtenstein)", "Deutsch (Liechtenstein)"],
            "de-LU": ["German (Luxembourg)", "Deutsch (Luxemburg)"],
            dje: ["Zarma", "Zarmaciine"],
            dsb: ["Lower Sorbian", "dolnoserbšćina"],
            dua: ["Duala", "duálá"],
            dyo: ["Jola-Fonyi", "joola"],
            dz: ["Dzongkha", "རྫོང་ཁ"],
            ebu: ["Embu", "Kĩembu"],
            ee: ["Ewe", "Eʋegbe"],
            "ee-TG": ["Ewe (Togo)", "Eʋegbe (Togo nutome)"],
            el: ["Greek", "Ελληνικά"],
            "el-CY": ["Greek (Cyprus)", "Ελληνικά (Κύπρος)"],
            en: ["English", "English"],
            "en-001": ["English (World)", "English (World)"],
            "en-150": ["English (Europe)", "English (Europe)"],
            "en-AE": ["English (United Arab Emirates)", "English (United Arab Emirates)"],
            "en-AG": ["English (Antigua & Barbuda)", "English (Antigua & Barbuda)"],
            "en-AI": ["English (Anguilla)", "English (Anguilla)"],
            "en-AS": ["English (American Samoa)", "English (American Samoa)"],
            "en-AT": ["English (Austria)", "English (Austria)"],
            "en-AU": ["English (Australia)", "English (Australia)"],
            "en-BB": ["English (Barbados)", "English (Barbados)"],
            "en-BE": ["English (Belgium)", "English (Belgium)"],
            "en-BI": ["English (Burundi)", "English (Burundi)"],
            "en-BM": ["English (Bermuda)", "English (Bermuda)"],
            "en-BS": ["English (Bahamas)", "English (Bahamas)"],
            "en-BW": ["English (Botswana)", "English (Botswana)"],
            "en-BZ": ["English (Belize)", "English (Belize)"],
            "en-CA": ["English (Canada)", "English (Canada)"],
            "en-CC": ["English (Cocos (Keeling) Islands)", "English (Cocos (Keeling) Islands)"],
            "en-CH": ["English (Switzerland)", "English (Switzerland)"],
            "en-CK": ["English (Cook Islands)", "English (Cook Islands)"],
            "en-CM": ["English (Cameroon)", "English (Cameroon)"],
            "en-CX": ["English (Christmas Island)", "English (Christmas Island)"],
            "en-CY": ["English (Cyprus)", "English (Cyprus)"],
            "en-DE": ["English (Germany)", "English (Germany)"],
            "en-DG": ["English (Diego Garcia)", "English (Diego Garcia)"],
            "en-DK": ["English (Denmark)", "English (Denmark)"],
            "en-DM": ["English (Dominica)", "English (Dominica)"],
            "en-ER": ["English (Eritrea)", "English (Eritrea)"],
            "en-FI": ["English (Finland)", "English (Finland)"],
            "en-FJ": ["English (Fiji)", "English (Fiji)"],
            "en-FK": ["English (Falkland Islands)", "English (Falkland Islands)"],
            "en-FM": ["English (Micronesia)", "English (Micronesia)"],
            "en-GB": ["English (United Kingdom)", "English (United Kingdom)"],
            "en-GD": ["English (Grenada)", "English (Grenada)"],
            "en-GG": ["English (Guernsey)", "English (Guernsey)"],
            "en-GH": ["English (Ghana)", "English (Ghana)"],
            "en-GI": ["English (Gibraltar)", "English (Gibraltar)"],
            "en-GM": ["English (Gambia)", "English (Gambia)"],
            "en-GU": ["English (Guam)", "English (Guam)"],
            "en-GY": ["English (Guyana)", "English (Guyana)"],
            "en-HK": ["English (Hong Kong SAR China)", "English (Hong Kong SAR China)"],
            "en-IE": ["English (Ireland)", "English (Ireland)"],
            "en-IL": ["English (Israel)", "English (Israel)"],
            "en-IM": ["English (Isle of Man)", "English (Isle of Man)"],
            "en-IN": ["English (India)", "English (India)"],
            "en-IO": ["English (British Indian Ocean Territory)", "English (British Indian Ocean Territory)"],
            "en-JE": ["English (Jersey)", "English (Jersey)"],
            "en-JM": ["English (Jamaica)", "English (Jamaica)"],
            "en-KE": ["English (Kenya)", "English (Kenya)"],
            "en-KI": ["English (Kiribati)", "English (Kiribati)"],
            "en-KN": ["English (St. Kitts & Nevis)", "English (St. Kitts & Nevis)"],
            "en-KY": ["English (Cayman Islands)", "English (Cayman Islands)"],
            "en-LC": ["English (St. Lucia)", "English (St. Lucia)"],
            "en-LR": ["English (Liberia)", "English (Liberia)"],
            "en-LS": ["English (Lesotho)", "English (Lesotho)"],
            "en-MG": ["English (Madagascar)", "English (Madagascar)"],
            "en-MH": ["English (Marshall Islands)", "English (Marshall Islands)"],
            "en-MO": ["English (Macao SAR China)", "English (Macao SAR China)"],
            "en-MP": ["English (Northern Mariana Islands)", "English (Northern Mariana Islands)"],
            "en-MS": ["English (Montserrat)", "English (Montserrat)"],
            "en-MT": ["English (Malta)", "English (Malta)"],
            "en-MU": ["English (Mauritius)", "English (Mauritius)"],
            "en-MW": ["English (Malawi)", "English (Malawi)"],
            "en-MY": ["English (Malaysia)", "English (Malaysia)"],
            "en-NA": ["English (Namibia)", "English (Namibia)"],
            "en-NF": ["English (Norfolk Island)", "English (Norfolk Island)"],
            "en-NG": ["English (Nigeria)", "English (Nigeria)"],
            "en-NL": ["English (Netherlands)", "English (Netherlands)"],
            "en-NR": ["English (Nauru)", "English (Nauru)"],
            "en-NU": ["English (Niue)", "English (Niue)"],
            "en-NZ": ["English (New Zealand)", "English (New Zealand)"],
            "en-PG": ["English (Papua New Guinea)", "English (Papua New Guinea)"],
            "en-PH": ["English (Philippines)", "English (Philippines)"],
            "en-PK": ["English (Pakistan)", "English (Pakistan)"],
            "en-PN": ["English (Pitcairn Islands)", "English (Pitcairn Islands)"],
            "en-PR": ["English (Puerto Rico)", "English (Puerto Rico)"],
            "en-PW": ["English (Palau)", "English (Palau)"],
            "en-RW": ["English (Rwanda)", "English (Rwanda)"],
            "en-SB": ["English (Solomon Islands)", "English (Solomon Islands)"],
            "en-SC": ["English (Seychelles)", "English (Seychelles)"],
            "en-SD": ["English (Sudan)", "English (Sudan)"],
            "en-SE": ["English (Sweden)", "English (Sweden)"],
            "en-SG": ["English (Singapore)", "English (Singapore)"],
            "en-SH": ["English (St. Helena)", "English (St. Helena)"],
            "en-SI": ["English (Slovenia)", "English (Slovenia)"],
            "en-SL": ["English (Sierra Leone)", "English (Sierra Leone)"],
            "en-SS": ["English (South Sudan)", "English (South Sudan)"],
            "en-SX": ["English (Sint Maarten)", "English (Sint Maarten)"],
            "en-SZ": ["English (Eswatini)", "English (Eswatini)"],
            "en-TC": ["English (Turks & Caicos Islands)", "English (Turks & Caicos Islands)"],
            "en-TK": ["English (Tokelau)", "English (Tokelau)"],
            "en-TO": ["English (Tonga)", "English (Tonga)"],
            "en-TT": ["English (Trinidad & Tobago)", "English (Trinidad & Tobago)"],
            "en-TV": ["English (Tuvalu)", "English (Tuvalu)"],
            "en-TZ": ["English (Tanzania)", "English (Tanzania)"],
            "en-UG": ["English (Uganda)", "English (Uganda)"],
            "en-UM": ["English (U.S. Outlying Islands)", "English (U.S. Outlying Islands)"],
            "en-US-POSIX": ["English (United States, Computer)", "English (United States, Computer)"],
            "en-VC": ["English (St. Vincent & Grenadines)", "English (St. Vincent & Grenadines)"],
            "en-VG": ["English (British Virgin Islands)", "English (British Virgin Islands)"],
            "en-VI": ["English (U.S. Virgin Islands)", "English (U.S. Virgin Islands)"],
            "en-VU": ["English (Vanuatu)", "English (Vanuatu)"],
            "en-WS": ["English (Samoa)", "English (Samoa)"],
            "en-ZA": ["English (South Africa)", "English (South Africa)"],
            "en-ZM": ["English (Zambia)", "English (Zambia)"],
            "en-ZW": ["English (Zimbabwe)", "English (Zimbabwe)"],
            eo: ["Esperanto", "esperanto"],
            es: ["Spanish", "español"],
            "es-419": ["Spanish (Latin America)", "español (Latinoamérica)"],
            "es-AR": ["Spanish (Argentina)", "español (Argentina)"],
            "es-BO": ["Spanish (Bolivia)", "español (Bolivia)"],
            "es-BR": ["Spanish (Brazil)", "español (Brasil)"],
            "es-BZ": ["Spanish (Belize)", "español (Belice)"],
            "es-CL": ["Spanish (Chile)", "español (Chile)"],
            "es-CO": ["Spanish (Colombia)", "español (Colombia)"],
            "es-CR": ["Spanish (Costa Rica)", "español (Costa Rica)"],
            "es-CU": ["Spanish (Cuba)", "español (Cuba)"],
            "es-DO": ["Spanish (Dominican Republic)", "español (República Dominicana)"],
            "es-EA": ["Spanish (Ceuta & Melilla)", "español (Ceuta y Melilla)"],
            "es-EC": ["Spanish (Ecuador)", "español (Ecuador)"],
            "es-GQ": ["Spanish (Equatorial Guinea)", "español (Guinea Ecuatorial)"],
            "es-GT": ["Spanish (Guatemala)", "español (Guatemala)"],
            "es-HN": ["Spanish (Honduras)", "español (Honduras)"],
            "es-IC": ["Spanish (Canary Islands)", "español (Canarias)"],
            "es-MX": ["Spanish (Mexico)", "español (México)"],
            "es-NI": ["Spanish (Nicaragua)", "español (Nicaragua)"],
            "es-PA": ["Spanish (Panama)", "español (Panamá)"],
            "es-PE": ["Spanish (Peru)", "español (Perú)"],
            "es-PH": ["Spanish (Philippines)", "español (Filipinas)"],
            "es-PR": ["Spanish (Puerto Rico)", "español (Puerto Rico)"],
            "es-PY": ["Spanish (Paraguay)", "español (Paraguay)"],
            "es-SV": ["Spanish (El Salvador)", "español (El Salvador)"],
            "es-US": ["Spanish (United States)", "español (Estados Unidos)"],
            "es-UY": ["Spanish (Uruguay)", "español (Uruguay)"],
            "es-VE": ["Spanish (Venezuela)", "español (Venezuela)"],
            et: ["Estonian", "eesti"],
            eu: ["Basque", "euskara"],
            ewo: ["Ewondo", "ewondo"],
            fa: ["Persian", "فارسی"],
            "fa-AF": ["Persian (Afghanistan)", "فارسی (افغانستان)"],
            ff: ["Fulah", "Pulaar"],
            "ff-Latn": ["Fulah (Latin)", "Pulaar (Latn)"],
            "ff-Latn-BF": ["Fulah (Latin, Burkina Faso)", "Pulaar (Latn, Burkibaa Faaso)"],
            "ff-Latn-CM": ["Fulah (Latin, Cameroon)", "Pulaar (Latn, Kameruun)"],
            "ff-Latn-GH": ["Fulah (Latin, Ghana)", "Pulaar (Latn, Ganaa)"],
            "ff-Latn-GM": ["Fulah (Latin, Gambia)", "Pulaar (Latn, Gammbi)"],
            "ff-Latn-GN": ["Fulah (Latin, Guinea)", "Pulaar (Latn, Gine)"],
            "ff-Latn-GW": ["Fulah (Latin, Guinea-Bissau)", "Pulaar (Latn, Gine-Bisaawo)"],
            "ff-Latn-LR": ["Fulah (Latin, Liberia)", "Pulaar (Latn, Liberiyaa)"],
            "ff-Latn-MR": ["Fulah (Latin, Mauritania)", "Pulaar (Latn, Muritani)"],
            "ff-Latn-NE": ["Fulah (Latin, Niger)", "Pulaar (Latn, Nijeer)"],
            "ff-Latn-NG": ["Fulah (Latin, Nigeria)", "Pulaar (Latn, Nijeriyaa)"],
            "ff-Latn-SL": ["Fulah (Latin, Sierra Leone)", "Pulaar (Latn, Seraa liyon)"],
            fi: ["Finnish", "suomi"],
            fil: ["Filipino", "Filipino"],
            fo: ["Faroese", "føroyskt"],
            "fo-DK": ["Faroese (Denmark)", "føroyskt (Danmark)"],
            fr: ["French", "français"],
            "fr-BE": ["French (Belgium)", "français (Belgique)"],
            "fr-BF": ["French (Burkina Faso)", "français (Burkina Faso)"],
            "fr-BI": ["French (Burundi)", "français (Burundi)"],
            "fr-BJ": ["French (Benin)", "français (Bénin)"],
            "fr-BL": ["French (St. Barthélemy)", "français (Saint-Barthélemy)"],
            "fr-CA": ["French (Canada)", "français (Canada)"],
            "fr-CD": ["French (Congo - Kinshasa)", "français (Congo-Kinshasa)"],
            "fr-CF": ["French (Central African Republic)", "français (République centrafricaine)"],
            "fr-CG": ["French (Congo - Brazzaville)", "français (Congo-Brazzaville)"],
            "fr-CH": ["French (Switzerland)", "français (Suisse)"],
            "fr-CI": ["French (Côte d’Ivoire)", "français (Côte d’Ivoire)"],
            "fr-CM": ["French (Cameroon)", "français (Cameroun)"],
            "fr-DJ": ["French (Djibouti)", "français (Djibouti)"],
            "fr-DZ": ["French (Algeria)", "français (Algérie)"],
            "fr-GA": ["French (Gabon)", "français (Gabon)"],
            "fr-GF": ["French (French Guiana)", "français (Guyane française)"],
            "fr-GN": ["French (Guinea)", "français (Guinée)"],
            "fr-GP": ["French (Guadeloupe)", "français (Guadeloupe)"],
            "fr-GQ": ["French (Equatorial Guinea)", "français (Guinée équatoriale)"],
            "fr-HT": ["French (Haiti)", "français (Haïti)"],
            "fr-KM": ["French (Comoros)", "français (Comores)"],
            "fr-LU": ["French (Luxembourg)", "français (Luxembourg)"],
            "fr-MA": ["French (Morocco)", "français (Maroc)"],
            "fr-MC": ["French (Monaco)", "français (Monaco)"],
            "fr-MF": ["French (St. Martin)", "français (Saint-Martin)"],
            "fr-MG": ["French (Madagascar)", "français (Madagascar)"],
            "fr-ML": ["French (Mali)", "français (Mali)"],
            "fr-MQ": ["French (Martinique)", "français (Martinique)"],
            "fr-MR": ["French (Mauritania)", "français (Mauritanie)"],
            "fr-MU": ["French (Mauritius)", "français (Maurice)"],
            "fr-NC": ["French (New Caledonia)", "français (Nouvelle-Calédonie)"],
            "fr-NE": ["French (Niger)", "français (Niger)"],
            "fr-PF": ["French (French Polynesia)", "français (Polynésie française)"],
            "fr-PM": ["French (St. Pierre & Miquelon)", "français (Saint-Pierre-et-Miquelon)"],
            "fr-RE": ["French (Réunion)", "français (La Réunion)"],
            "fr-RW": ["French (Rwanda)", "français (Rwanda)"],
            "fr-SC": ["French (Seychelles)", "français (Seychelles)"],
            "fr-SN": ["French (Senegal)", "français (Sénégal)"],
            "fr-SY": ["French (Syria)", "français (Syrie)"],
            "fr-TD": ["French (Chad)", "français (Tchad)"],
            "fr-TG": ["French (Togo)", "français (Togo)"],
            "fr-TN": ["French (Tunisia)", "français (Tunisie)"],
            "fr-VU": ["French (Vanuatu)", "français (Vanuatu)"],
            "fr-WF": ["French (Wallis & Futuna)", "français (Wallis-et-Futuna)"],
            "fr-YT": ["French (Mayotte)", "français (Mayotte)"],
            fur: ["Friulian", "furlan"],
            fy: ["Western Frisian", "Frysk"],
            ga: ["Irish", "Gaeilge"],
            gd: ["Scottish Gaelic", "Gàidhlig"],
            gl: ["Galician", "galego"],
            gsw: ["Swiss German", "Schwiizertüütsch"],
            "gsw-FR": ["Swiss German (France)", "Schwiizertüütsch (Frankriich)"],
            "gsw-LI": ["Swiss German (Liechtenstein)", "Schwiizertüütsch (Liächteschtäi)"],
            gu: ["Gujarati", "ગુજરાતી"],
            guz: ["Gusii", "Ekegusii"],
            gv: ["Manx", "Gaelg"],
            ha: ["Hausa", "Hausa"],
            "ha-GH": ["Hausa (Ghana)", "Hausa (Gana)"],
            "ha-NE": ["Hausa (Niger)", "Hausa (Nijar)"],
            haw: ["Hawaiian", "ʻŌlelo Hawaiʻi"],
            he: ["Hebrew", "עברית"],
            hi: ["Hindi", "हिन्दी"],
            hr: ["Croatian", "hrvatski"],
            "hr-BA": ["Croatian (Bosnia & Herzegovina)", "hrvatski (Bosna i Hercegovina)"],
            hsb: ["Upper Sorbian", "hornjoserbšćina"],
            hu: ["Hungarian", "magyar"],
            hy: ["Armenian", "հայերեն"],
            ia: ["Interlingua", "interlingua"],
            id: ["Indonesian", "Indonesia"],
            ig: ["Igbo", "Asụsụ Igbo"],
            ii: ["Sichuan Yi", "ꆈꌠꉙ"],
            is: ["Icelandic", "íslenska"],
            it: ["Italian", "italiano"],
            "it-CH": ["Italian (Switzerland)", "italiano (Svizzera)"],
            "it-SM": ["Italian (San Marino)", "italiano (San Marino)"],
            "it-VA": ["Italian (Vatican City)", "italiano (Città del Vaticano)"],
            ja: ["Japanese", "日本語"],
            jgo: ["Ngomba", "Ndaꞌa"],
            jmc: ["Machame", "Kimachame"],
            jv: ["Javanese", "Jawa"],
            ka: ["Georgian", "ქართული"],
            kab: ["Kabyle", "Taqbaylit"],
            kam: ["Kamba", "Kikamba"],
            kde: ["Makonde", "Chimakonde"],
            kea: ["Kabuverdianu", "kabuverdianu"],
            khq: ["Koyra Chiini", "Koyra ciini"],
            ki: ["Kikuyu", "Gikuyu"],
            kk: ["Kazakh", "қазақ тілі"],
            kkj: ["Kako", "kakɔ"],
            kl: ["Kalaallisut", "kalaallisut"],
            kln: ["Kalenjin", "Kalenjin"],
            km: ["Khmer", "ខ្មែរ"],
            kn: ["Kannada", "ಕನ್ನಡ"],
            ko: ["Korean", "한국어"],
            "ko-KP": ["Korean (North Korea)", "한국어(조선민주주의인민공화국)"],
            kok: ["Konkani", "कोंकणी"],
            ks: ["Kashmiri", "کٲشُر"],
            ksb: ["Shambala", "Kishambaa"],
            ksf: ["Bafia", "rikpa"],
            ksh: ["Colognian", "Kölsch"],
            ku: ["Kurdish", "kurdî"],
            kw: ["Cornish", "kernewek"],
            ky: ["Kyrgyz", "кыргызча"],
            lag: ["Langi", "Kɨlaangi"],
            lb: ["Luxembourgish", "Lëtzebuergesch"],
            lg: ["Ganda", "Luganda"],
            lkt: ["Lakota", "Lakȟólʼiyapi"],
            ln: ["Lingala", "lingála"],
            "ln-AO": ["Lingala (Angola)", "lingála (Angóla)"],
            "ln-CF": ["Lingala (Central African Republic)", "lingála (Repibiki ya Afríka ya Káti)"],
            "ln-CG": ["Lingala (Congo - Brazzaville)", "lingála (Kongo)"],
            lo: ["Lao", "ລາວ"],
            lrc: ["Northern Luri", "لۊری شومالی"],
            "lrc-IQ": ["Northern Luri (Iraq)", "لۊری شومالی (IQ)"],
            lt: ["Lithuanian", "lietuvių"],
            lu: ["Luba-Katanga", "Tshiluba"],
            luo: ["Luo", "Dholuo"],
            luy: ["Luyia", "Luluhia"],
            lv: ["Latvian", "latviešu"],
            mas: ["Masai", "Maa"],
            "mas-TZ": ["Masai (Tanzania)", "Maa (Tansania)"],
            mer: ["Meru", "Kĩmĩrũ"],
            mfe: ["Morisyen", "kreol morisien"],
            mg: ["Malagasy", "Malagasy"],
            mgh: ["Makhuwa-Meetto", "Makua"],
            mgo: ["Metaʼ", "metaʼ"],
            mi: ["Maori", "Māori"],
            mk: ["Macedonian", "македонски"],
            ml: ["Malayalam", "മലയാളം"],
            mn: ["Mongolian", "монгол"],
            mr: ["Marathi", "मराठी"],
            ms: ["Malay", "Melayu"],
            "ms-BN": ["Malay (Brunei)", "Melayu (Brunei)"],
            "ms-SG": ["Malay (Singapore)", "Melayu (Singapura)"],
            mt: ["Maltese", "Malti"],
            mua: ["Mundang", "MUNDAŊ"],
            my: ["Burmese", "မြန်မာ"],
            mzn: ["Mazanderani", "مازرونی"],
            naq: ["Nama", "Khoekhoegowab"],
            nb: ["Norwegian Bokmål", "norsk bokmål"],
            "nb-SJ": ["Norwegian Bokmål (Svalbard & Jan Mayen)", "norsk bokmål (Svalbard og Jan Mayen)"],
            nd: ["North Ndebele", "isiNdebele"],
            nds: ["Low German", "nds"],
            "nds-NL": ["Low German (Netherlands)", "nds (NL)"],
            ne: ["Nepali", "नेपाली"],
            "ne-IN": ["Nepali (India)", "नेपाली (भारत)"],
            nl: ["Dutch", "Nederlands"],
            "nl-AW": ["Dutch (Aruba)", "Nederlands (Aruba)"],
            "nl-BE": ["Dutch (Belgium)", "Nederlands (België)"],
            "nl-BQ": ["Dutch (Caribbean Netherlands)", "Nederlands (Caribisch Nederland)"],
            "nl-CW": ["Dutch (Curaçao)", "Nederlands (Curaçao)"],
            "nl-SR": ["Dutch (Suriname)", "Nederlands (Suriname)"],
            "nl-SX": ["Dutch (Sint Maarten)", "Nederlands (Sint-Maarten)"],
            nmg: ["Kwasio", "nmg"],
            nn: ["Norwegian Nynorsk", "nynorsk"],
            nnh: ["Ngiemboon", "Shwóŋò ngiembɔɔn"],
            nus: ["Nuer", "Thok Nath"],
            nyn: ["Nyankole", "Runyankore"],
            om: ["Oromo", "Oromoo"],
            "om-KE": ["Oromo (Kenya)", "Oromoo (Keeniyaa)"],
            or: ["Odia", "ଓଡ଼ିଆ"],
            os: ["Ossetic", "ирон"],
            "os-RU": ["Ossetic (Russia)", "ирон (Уӕрӕсе)"],
            pa: ["Punjabi", "ਪੰਜਾਬੀ"],
            "pa-Arab": ["Punjabi (Arabic)", "پنجابی (عربی)"],
            "pa-Guru": ["Punjabi (Gurmukhi)", "ਪੰਜਾਬੀ (ਗੁਰਮੁਖੀ)"],
            pl: ["Polish", "polski"],
            prg: ["Prussian", "prūsiskan"],
            ps: ["Pashto", "پښتو"],
            "ps-PK": ["Pashto (Pakistan)", "پښتو (پاکستان)"],
            pt: ["Portuguese", "português"],
            "pt-AO": ["Portuguese (Angola)", "português (Angola)"],
            "pt-CH": ["Portuguese (Switzerland)", "português (Suíça)"],
            "pt-CV": ["Portuguese (Cape Verde)", "português (Cabo Verde)"],
            "pt-GQ": ["Portuguese (Equatorial Guinea)", "português (Guiné Equatorial)"],
            "pt-GW": ["Portuguese (Guinea-Bissau)", "português (Guiné-Bissau)"],
            "pt-LU": ["Portuguese (Luxembourg)", "português (Luxemburgo)"],
            "pt-MO": ["Portuguese (Macao SAR China)", "português (Macau, RAE da China)"],
            "pt-MZ": ["Portuguese (Mozambique)", "português (Moçambique)"],
            "pt-PT": ["Portuguese (Portugal)", "português (Portugal)"],
            "pt-ST": ["Portuguese (São Tomé & Príncipe)", "português (São Tomé e Príncipe)"],
            "pt-TL": ["Portuguese (Timor-Leste)", "português (Timor-Leste)"],
            qu: ["Quechua", "Runasimi"],
            "qu-BO": ["Quechua (Bolivia)", "Runasimi (Bolivia)"],
            "qu-EC": ["Quechua (Ecuador)", "Runasimi (Ecuador)"],
            rm: ["Romansh", "rumantsch"],
            rn: ["Rundi", "Ikirundi"],
            ro: ["Romanian", "română"],
            "ro-MD": ["Romanian (Moldova)", "română (Republica Moldova)"],
            rof: ["Rombo", "Kihorombo"],
            ru: ["Russian", "русский"],
            "ru-BY": ["Russian (Belarus)", "русский (Беларусь)"],
            "ru-KG": ["Russian (Kyrgyzstan)", "русский (Киргизия)"],
            "ru-KZ": ["Russian (Kazakhstan)", "русский (Казахстан)"],
            "ru-MD": ["Russian (Moldova)", "русский (Молдова)"],
            "ru-UA": ["Russian (Ukraine)", "русский (Украина)"],
            rw: ["Kinyarwanda", "Kinyarwanda"],
            rwk: ["Rwa", "Kiruwa"],
            sah: ["Sakha", "саха тыла"],
            saq: ["Samburu", "Kisampur"],
            sbp: ["Sangu", "Ishisangu"],
            sd: ["Sindhi", "سنڌي"],
            se: ["Northern Sami", "davvisámegiella"],
            "se-FI": ["Northern Sami (Finland)", "davvisámegiella (Suopma)"],
            "se-SE": ["Northern Sami (Sweden)", "davvisámegiella (Ruoŧŧa)"],
            seh: ["Sena", "sena"],
            ses: ["Koyraboro Senni", "Koyraboro senni"],
            sg: ["Sango", "Sängö"],
            shi: ["Tachelhit", "ⵜⴰⵛⵍⵃⵉⵜ"],
            "shi-Latn": ["Tachelhit (Latin)", "Tashelḥiyt (Latn)"],
            "shi-Tfng": ["Tachelhit (Tifinagh)", "ⵜⴰⵛⵍⵃⵉⵜ (Tfng)"],
            si: ["Sinhala", "සිංහල"],
            sk: ["Slovak", "slovenčina"],
            sl: ["Slovenian", "slovenščina"],
            smn: ["Inari Sami", "anarâškielâ"],
            sn: ["Shona", "chiShona"],
            so: ["Somali", "Soomaali"],
            "so-DJ": ["Somali (Djibouti)", "Soomaali (Jabuuti)"],
            "so-ET": ["Somali (Ethiopia)", "Soomaali (Itoobiya)"],
            "so-KE": ["Somali (Kenya)", "Soomaali (Kenya)"],
            sq: ["Albanian", "shqip"],
            "sq-MK": ["Albanian (North Macedonia)", "shqip (Maqedonia e Veriut)"],
            "sq-XK": ["Albanian (Kosovo)", "shqip (Kosovë)"],
            sr: ["Serbian", "српски"],
            "sr-Cyrl": ["Serbian (Cyrillic)", "српски (ћирилица)"],
            "sr-Cyrl-BA": ["Serbian (Cyrillic, Bosnia & Herzegovina)", "српски (ћирилица, Босна и Херцеговина)"],
            "sr-Cyrl-ME": ["Serbian (Cyrillic, Montenegro)", "српски (ћирилица, Црна Гора)"],
            "sr-Cyrl-XK": ["Serbian (Cyrillic, Kosovo)", "српски (ћирилица, Косово)"],
            "sr-Latn": ["Serbian (Latin)", "srpski (latinica)"],
            "sr-Latn-BA": ["Serbian (Latin, Bosnia & Herzegovina)", "srpski (latinica, Bosna i Hercegovina)"],
            "sr-Latn-ME": ["Serbian (Latin, Montenegro)", "srpski (latinica, Crna Gora)"],
            "sr-Latn-XK": ["Serbian (Latin, Kosovo)", "srpski (latinica, Kosovo)"],
            sv: ["Swedish", "svenska"],
            "sv-AX": ["Swedish (Åland Islands)", "svenska (Åland)"],
            "sv-FI": ["Swedish (Finland)", "svenska (Finland)"],
            sw: ["Swahili", "Kiswahili"],
            "sw-CD": ["Swahili (Congo - Kinshasa)", "Kiswahili (Jamhuri ya Kidemokrasia ya Kongo)"],
            "sw-KE": ["Swahili (Kenya)", "Kiswahili (Kenya)"],
            "sw-UG": ["Swahili (Uganda)", "Kiswahili (Uganda)"],
            ta: ["Tamil", "தமிழ்"],
            "ta-LK": ["Tamil (Sri Lanka)", "தமிழ் (இலங்கை)"],
            "ta-MY": ["Tamil (Malaysia)", "தமிழ் (மலேசியா)"],
            "ta-SG": ["Tamil (Singapore)", "தமிழ் (சிங்கப்பூர்)"],
            te: ["Telugu", "తెలుగు"],
            teo: ["Teso", "Kiteso"],
            "teo-KE": ["Teso (Kenya)", "Kiteso (Kenia)"],
            tg: ["Tajik", "тоҷикӣ"],
            th: ["Thai", "ไทย"],
            ti: ["Tigrinya", "ትግርኛ"],
            "ti-ER": ["Tigrinya (Eritrea)", "ትግርኛ (ኤርትራ)"],
            tk: ["Turkmen", "türkmen dili"],
            to: ["Tongan", "lea fakatonga"],
            tr: ["Turkish", "Türkçe"],
            "tr-CY": ["Turkish (Cyprus)", "Türkçe (Kıbrıs)"],
            tt: ["Tatar", "татар"],
            twq: ["Tasawaq", "Tasawaq senni"],
            tzm: ["Central Atlas Tamazight", "Tamaziɣt n laṭlaṣ"],
            ug: ["Uyghur", "ئۇيغۇرچە"],
            uk: ["Ukrainian", "українська"],
            ur: ["Urdu", "اردو"],
            "ur-IN": ["Urdu (India)", "اردو (بھارت)"],
            uz: ["Uzbek", "o‘zbek"],
            "uz-Arab": ["Uzbek (Arabic)", "اوزبیک (عربی)"],
            "uz-Cyrl": ["Uzbek (Cyrillic)", "ўзбекча (Кирил)"],
            "uz-Latn": ["Uzbek (Latin)", "o‘zbek (lotin)"],
            vai: ["Vai", "ꕙꔤ"],
            "vai-Latn": ["Vai (Latin)", "Vai (Latn)"],
            "vai-Vaii": ["Vai (Vai)", "ꕙꔤ (Vaii)"],
            vi: ["Vietnamese", "Tiếng Việt"],
            vo: ["Volapük", "vo"],
            vun: ["Vunjo", "Kyivunjo"],
            wae: ["Walser", "Walser"],
            wo: ["Wolof", "Wolof"],
            xh: ["Xhosa", "isiXhosa"],
            xog: ["Soga", "Olusoga"],
            yav: ["Yangben", "nuasue"],
            yi: ["Yiddish", "ייִדיש"],
            yo: ["Yoruba", "Èdè Yorùbá"],
            "yo-BJ": ["Yoruba (Benin)", "Èdè Yorùbá (Orílɛ́ède Bɛ̀nɛ̀)"],
            yue: ["Cantonese", "粵語"],
            "yue-Hans": ["Cantonese (Simplified)", "粤语 (简体)"],
            "yue-Hant": ["Cantonese (Traditional)", "粵語 (繁體)"],
            zgh: ["Standard Moroccan Tamazight", "ⵜⴰⵎⴰⵣⵉⵖⵜ"],
            zh: ["Chinese", "中文"],
            "zh-Hans": ["Chinese (Simplified)", "中文（简体）"],
            "zh-Hans-HK": ["Chinese (Simplified, Hong Kong SAR China)", "中文（简体，中国香港特别行政区）"],
            "zh-Hans-MO": ["Chinese (Simplified, Macao SAR China)", "中文（简体，中国澳门特别行政区）"],
            "zh-Hans-SG": ["Chinese (Simplified, Singapore)", "中文（简体，新加坡）"],
            "zh-Hant": ["Chinese (Traditional)", "中文（繁體）"],
            "zh-Hant-HK": ["Chinese (Traditional, Hong Kong SAR China)", "中文（繁體字，中國香港特別行政區）"],
            "zh-Hant-MO": ["Chinese (Traditional, Macao SAR China)", "中文（繁體字，中國澳門特別行政區）"],
            zu: ["Zulu", "isiZulu"]
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(62), i = n(63);
        t.gettext = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            return r.Domain.translate.apply(r.Domain, [r.Domain.default, "", e, !1, "", 0].concat(t))
        }, t.dgettext = function (e, t) {
            for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
            return r.Domain.translate.apply(r.Domain, [e, "", t, !1, "", 0].concat(n))
        }, t.ngettext = function (e, t, n) {
            for (var o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
            return r.Domain.translate.apply(r.Domain, [r.Domain.default, "", e, !0, t, n, i.Locales.number(n)].concat(o))
        }, t.dngettext = function (e, t, n, o) {
            for (var s = [], a = 4; a < arguments.length; a++) s[a - 4] = arguments[a];
            return r.Domain.translate.apply(r.Domain, [e, "", t, !0, n, o, i.Locales.number(o, 0, !0, e)].concat(s))
        }, t.pgettext = function (e, t) {
            for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
            return r.Domain.translate.apply(r.Domain, [r.Domain.default, e, t, !1, "", 0].concat(n))
        }, t.dpgettext = function (e, t, n) {
            for (var i = [], o = 3; o < arguments.length; o++) i[o - 3] = arguments[o];
            return r.Domain.translate.apply(r.Domain, [e, t, n, !1, "", 0].concat(i))
        }, t.npgettext = function (e, t, n, o) {
            for (var s = [], a = 4; a < arguments.length; a++) s[a - 4] = arguments[a];
            return r.Domain.translate.apply(r.Domain, [r.Domain.default, e, t, !0, n, o, i.Locales.number(o)].concat(s))
        }, t.dnpgettext = function (e, t, n, o, s) {
            for (var a = [], u = 5; u < arguments.length; u++) a[u - 5] = arguments[u];
            return r.Domain.translate.apply(r.Domain, [e, t, n, !0, o, s, i.Locales.number(s, 0, !0, e)].concat(a))
        }, t._ = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            return r.Domain.translate.apply(r.Domain, [r.Domain.default, "", e, !1, "", 0].concat(t))
        }, t._n = function (e, t, n) {
            for (var o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
            return r.Domain.translate.apply(r.Domain, [r.Domain.default, "", e, !0, t, n, i.Locales.number(n)].concat(o))
        }
    }])
}));
