let e, t;
function n(e, t, n, r) {
  Object.defineProperty(e, t, {
    get: n,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
function r(e) {
  return e && e.__esModule ? e.default : e;
}
var a,
  o,
  l,
  i,
  u,
  s,
  c,
  d,
  f,
  p,
  h,
  m,
  v,
  g,
  y,
  b,
  w,
  S,
  k,
  _,
  x,
  E,
  R,
  T =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof self
      ? self
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : {},
  C = {},
  N = {},
  L = T.parcelRequire5526;
null == L &&
  (((L = function (e) {
    if (e in C) return C[e].exports;
    if (e in N) {
      var t = N[e];
      delete N[e];
      var n = { id: e, exports: {} };
      return (C[e] = n), t.call(n.exports, n, n.exports), n.exports;
    }
    var r = Error("Cannot find module '" + e + "'");
    throw ((r.code = 'MODULE_NOT_FOUND'), r);
  }).register = function (e, t) {
    N[e] = t;
  }),
  (T.parcelRequire5526 = L)),
  L.register('1b2ls', function (e, t) {
    n(
      e.exports,
      'Fragment',
      () => r,
      (e) => (r = e)
    ),
      n(
        e.exports,
        'jsx',
        () => a,
        (e) => (a = e)
      ),
      n(
        e.exports,
        'jsxs',
        () => o,
        (e) => (o = e)
      );
    var r,
      a,
      o,
      l = L('acw62'),
      i = Symbol.for('react.element'),
      u = Symbol.for('react.fragment'),
      s = Object.prototype.hasOwnProperty,
      c =
        l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      d = { key: !0, ref: !0, __self: !0, __source: !0 };
    function f(e, t, n) {
      var r,
        a = {},
        o = null,
        l = null;
      for (r in (void 0 !== n && (o = '' + n),
      void 0 !== t.key && (o = '' + t.key),
      void 0 !== t.ref && (l = t.ref),
      t))
        s.call(t, r) && !d.hasOwnProperty(r) && (a[r] = t[r]);
      if (e && e.defaultProps)
        for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
      return {
        $$typeof: i,
        type: e,
        key: o,
        ref: l,
        props: a,
        _owner: c.current,
      };
    }
    (r = u), (a = f), (o = f);
  }),
  L.register('acw62', function (e, t) {
    e.exports = L('2pUnB');
  }),
  L.register('2pUnB', function (e, t) {
    n(
      e.exports,
      'Children',
      () => r,
      (e) => (r = e)
    ),
      n(
        e.exports,
        'Component',
        () => a,
        (e) => (a = e)
      ),
      n(
        e.exports,
        'Fragment',
        () => o,
        (e) => (o = e)
      ),
      n(
        e.exports,
        'Profiler',
        () => l,
        (e) => (l = e)
      ),
      n(
        e.exports,
        'PureComponent',
        () => i,
        (e) => (i = e)
      ),
      n(
        e.exports,
        'StrictMode',
        () => u,
        (e) => (u = e)
      ),
      n(
        e.exports,
        'Suspense',
        () => s,
        (e) => (s = e)
      ),
      n(
        e.exports,
        '__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED',
        () => c,
        (e) => (c = e)
      ),
      n(
        e.exports,
        'cloneElement',
        () => d,
        (e) => (d = e)
      ),
      n(
        e.exports,
        'createContext',
        () => f,
        (e) => (f = e)
      ),
      n(
        e.exports,
        'createElement',
        () => p,
        (e) => (p = e)
      ),
      n(
        e.exports,
        'createFactory',
        () => h,
        (e) => (h = e)
      ),
      n(
        e.exports,
        'createRef',
        () => m,
        (e) => (m = e)
      ),
      n(
        e.exports,
        'forwardRef',
        () => v,
        (e) => (v = e)
      ),
      n(
        e.exports,
        'isValidElement',
        () => g,
        (e) => (g = e)
      ),
      n(
        e.exports,
        'lazy',
        () => y,
        (e) => (y = e)
      ),
      n(
        e.exports,
        'memo',
        () => b,
        (e) => (b = e)
      ),
      n(
        e.exports,
        'startTransition',
        () => w,
        (e) => (w = e)
      ),
      n(
        e.exports,
        'unstable_act',
        () => S,
        (e) => (S = e)
      ),
      n(
        e.exports,
        'useCallback',
        () => k,
        (e) => (k = e)
      ),
      n(
        e.exports,
        'useContext',
        () => _,
        (e) => (_ = e)
      ),
      n(
        e.exports,
        'useDebugValue',
        () => x,
        (e) => (x = e)
      ),
      n(
        e.exports,
        'useDeferredValue',
        () => E,
        (e) => (E = e)
      ),
      n(
        e.exports,
        'useEffect',
        () => R,
        (e) => (R = e)
      ),
      n(
        e.exports,
        'useId',
        () => T,
        (e) => (T = e)
      ),
      n(
        e.exports,
        'useImperativeHandle',
        () => C,
        (e) => (C = e)
      ),
      n(
        e.exports,
        'useInsertionEffect',
        () => N,
        (e) => (N = e)
      ),
      n(
        e.exports,
        'useLayoutEffect',
        () => L,
        (e) => (L = e)
      ),
      n(
        e.exports,
        'useMemo',
        () => A,
        (e) => (A = e)
      ),
      n(
        e.exports,
        'useReducer',
        () => P,
        (e) => (P = e)
      ),
      n(
        e.exports,
        'useRef',
        () => M,
        (e) => (M = e)
      ),
      n(
        e.exports,
        'useState',
        () => D,
        (e) => (D = e)
      ),
      n(
        e.exports,
        'useSyncExternalStore',
        () => z,
        (e) => (z = e)
      ),
      n(
        e.exports,
        'useTransition',
        () => U,
        (e) => (U = e)
      ),
      n(
        e.exports,
        'version',
        () => O,
        (e) => (O = e)
      );
    var r,
      a,
      o,
      l,
      i,
      u,
      s,
      c,
      d,
      f,
      p,
      h,
      m,
      v,
      g,
      y,
      b,
      w,
      S,
      k,
      _,
      x,
      E,
      R,
      T,
      C,
      N,
      L,
      A,
      P,
      M,
      D,
      z,
      U,
      O,
      I = Symbol.for('react.element'),
      V = Symbol.for('react.portal'),
      j = Symbol.for('react.fragment'),
      B = Symbol.for('react.strict_mode'),
      F = Symbol.for('react.profiler'),
      $ = Symbol.for('react.provider'),
      W = Symbol.for('react.context'),
      H = Symbol.for('react.forward_ref'),
      q = Symbol.for('react.suspense'),
      K = Symbol.for('react.memo'),
      Q = Symbol.for('react.lazy'),
      G = Symbol.iterator,
      Y = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      Z = Object.assign,
      X = {};
    function J(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = X),
        (this.updater = n || Y);
    }
    function ee() {}
    function et(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = X),
        (this.updater = n || Y);
    }
    (J.prototype.isReactComponent = {}),
      (J.prototype.setState = function (e, t) {
        if ('object' != typeof e && 'function' != typeof e && null != e)
          throw Error(
            'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
          );
        this.updater.enqueueSetState(this, e, t, 'setState');
      }),
      (J.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
      }),
      (ee.prototype = J.prototype);
    var en = (et.prototype = new ee());
    (en.constructor = et), Z(en, J.prototype), (en.isPureReactComponent = !0);
    var er = Array.isArray,
      ea = Object.prototype.hasOwnProperty,
      eo = { current: null },
      el = { key: !0, ref: !0, __self: !0, __source: !0 };
    function ei(e, t, n) {
      var r,
        a = {},
        o = null,
        l = null;
      if (null != t)
        for (r in (void 0 !== t.ref && (l = t.ref),
        void 0 !== t.key && (o = '' + t.key),
        t))
          ea.call(t, r) && !el.hasOwnProperty(r) && (a[r] = t[r]);
      var i = arguments.length - 2;
      if (1 === i) a.children = n;
      else if (1 < i) {
        for (var u = Array(i), s = 0; s < i; s++) u[s] = arguments[s + 2];
        a.children = u;
      }
      if (e && e.defaultProps)
        for (r in (i = e.defaultProps)) void 0 === a[r] && (a[r] = i[r]);
      return {
        $$typeof: I,
        type: e,
        key: o,
        ref: l,
        props: a,
        _owner: eo.current,
      };
    }
    function eu(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === I;
    }
    var es = /\/+/g;
    function ec(e, t) {
      var n, r;
      return 'object' == typeof e && null !== e && null != e.key
        ? ((n = '' + e.key),
          (r = { '=': '=0', ':': '=2' }),
          '$' +
            n.replace(/[=:]/g, function (e) {
              return r[e];
            }))
        : t.toString(36);
    }
    function ed(e, t, n) {
      if (null == e) return e;
      var r = [],
        a = 0;
      return (
        (function e(t, n, r, a, o) {
          var l,
            i,
            u,
            s = typeof t;
          ('undefined' === s || 'boolean' === s) && (t = null);
          var c = !1;
          if (null === t) c = !0;
          else
            switch (s) {
              case 'string':
              case 'number':
                c = !0;
                break;
              case 'object':
                switch (t.$$typeof) {
                  case I:
                  case V:
                    c = !0;
                }
            }
          if (c)
            return (
              (o = o((c = t))),
              (t = '' === a ? '.' + ec(c, 0) : a),
              er(o)
                ? ((r = ''),
                  null != t && (r = t.replace(es, '$&/') + '/'),
                  e(o, n, r, '', function (e) {
                    return e;
                  }))
                : null != o &&
                  (eu(o) &&
                    ((l = o),
                    (i =
                      r +
                      (!o.key || (c && c.key === o.key)
                        ? ''
                        : ('' + o.key).replace(es, '$&/') + '/') +
                      t),
                    (o = {
                      $$typeof: I,
                      type: l.type,
                      key: i,
                      ref: l.ref,
                      props: l.props,
                      _owner: l._owner,
                    })),
                  n.push(o)),
              1
            );
          if (((c = 0), (a = '' === a ? '.' : a + ':'), er(t)))
            for (var d = 0; d < t.length; d++) {
              var f = a + ec((s = t[d]), d);
              c += e(s, n, r, f, o);
            }
          else if (
            'function' ==
            typeof (f =
              null === (u = t) || 'object' != typeof u
                ? null
                : 'function' == typeof (u = (G && u[G]) || u['@@iterator'])
                ? u
                : null)
          )
            for (t = f.call(t), d = 0; !(s = t.next()).done; )
              (f = a + ec((s = s.value), d++)), (c += e(s, n, r, f, o));
          else if ('object' === s)
            throw Error(
              'Objects are not valid as a React child (found: ' +
                ('[object Object]' === (n = String(t))
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : n) +
                '). If you meant to render a collection of children, use an array instead.'
            );
          return c;
        })(e, r, '', '', function (e) {
          return t.call(n, e, a++);
        }),
        r
      );
    }
    function ef(e) {
      if (-1 === e._status) {
        var t = e._result;
        (t = t()).then(
          function (t) {
            (0 === e._status || -1 === e._status) &&
              ((e._status = 1), (e._result = t));
          },
          function (t) {
            (0 === e._status || -1 === e._status) &&
              ((e._status = 2), (e._result = t));
          }
        ),
          -1 === e._status && ((e._status = 0), (e._result = t));
      }
      if (1 === e._status) return e._result.default;
      throw e._result;
    }
    var ep = { current: null },
      eh = { transition: null };
    (r = {
      map: ed,
      forEach: function (e, t, n) {
        ed(
          e,
          function () {
            t.apply(this, arguments);
          },
          n
        );
      },
      count: function (e) {
        var t = 0;
        return (
          ed(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          ed(e, function (e) {
            return e;
          }) || []
        );
      },
      only: function (e) {
        if (!eu(e))
          throw Error(
            'React.Children.only expected to receive a single React element child.'
          );
        return e;
      },
    }),
      (a = J),
      (o = j),
      (l = F),
      (i = et),
      (u = B),
      (s = q),
      (c = {
        ReactCurrentDispatcher: ep,
        ReactCurrentBatchConfig: eh,
        ReactCurrentOwner: eo,
      }),
      (d = function (e, t, n) {
        if (null == e)
          throw Error(
            'React.cloneElement(...): The argument must be a React element, but you passed ' +
              e +
              '.'
          );
        var r = Z({}, e.props),
          a = e.key,
          o = e.ref,
          l = e._owner;
        if (null != t) {
          if (
            (void 0 !== t.ref && ((o = t.ref), (l = eo.current)),
            void 0 !== t.key && (a = '' + t.key),
            e.type && e.type.defaultProps)
          )
            var i = e.type.defaultProps;
          for (u in t)
            ea.call(t, u) &&
              !el.hasOwnProperty(u) &&
              (r[u] = void 0 === t[u] && void 0 !== i ? i[u] : t[u]);
        }
        var u = arguments.length - 2;
        if (1 === u) r.children = n;
        else if (1 < u) {
          i = Array(u);
          for (var s = 0; s < u; s++) i[s] = arguments[s + 2];
          r.children = i;
        }
        return {
          $$typeof: I,
          type: e.type,
          key: a,
          ref: o,
          props: r,
          _owner: l,
        };
      }),
      (f = function (e) {
        return (
          ((e = {
            $$typeof: W,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
          }).Provider = { $$typeof: $, _context: e }),
          (e.Consumer = e)
        );
      }),
      (p = ei),
      (h = function (e) {
        var t = ei.bind(null, e);
        return (t.type = e), t;
      }),
      (m = function () {
        return { current: null };
      }),
      (v = function (e) {
        return { $$typeof: H, render: e };
      }),
      (g = eu),
      (y = function (e) {
        return {
          $$typeof: Q,
          _payload: { _status: -1, _result: e },
          _init: ef,
        };
      }),
      (b = function (e, t) {
        return { $$typeof: K, type: e, compare: void 0 === t ? null : t };
      }),
      (w = function (e) {
        var t = eh.transition;
        eh.transition = {};
        try {
          e();
        } finally {
          eh.transition = t;
        }
      }),
      (S = function () {
        throw Error('act(...) is not supported in production builds of React.');
      }),
      (k = function (e, t) {
        return ep.current.useCallback(e, t);
      }),
      (_ = function (e) {
        return ep.current.useContext(e);
      }),
      (x = function () {}),
      (E = function (e) {
        return ep.current.useDeferredValue(e);
      }),
      (R = function (e, t) {
        return ep.current.useEffect(e, t);
      }),
      (T = function () {
        return ep.current.useId();
      }),
      (C = function (e, t, n) {
        return ep.current.useImperativeHandle(e, t, n);
      }),
      (N = function (e, t) {
        return ep.current.useInsertionEffect(e, t);
      }),
      (L = function (e, t) {
        return ep.current.useLayoutEffect(e, t);
      }),
      (A = function (e, t) {
        return ep.current.useMemo(e, t);
      }),
      (P = function (e, t, n) {
        return ep.current.useReducer(e, t, n);
      }),
      (M = function (e) {
        return ep.current.useRef(e);
      }),
      (D = function (e) {
        return ep.current.useState(e);
      }),
      (z = function (e, t, n) {
        return ep.current.useSyncExternalStore(e, t, n);
      }),
      (U = function () {
        return ep.current.useTransition();
      }),
      (O = '18.2.0');
  }),
  L.register('Xw6Mv', function (e, t) {
    n(
      e.exports,
      '__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED',
      () => $,
      (e) => ($ = e)
    ),
      n(
        e.exports,
        'createPortal',
        () => W,
        (e) => (W = e)
      ),
      n(
        e.exports,
        'createRoot',
        () => H,
        (e) => (H = e)
      ),
      n(
        e.exports,
        'findDOMNode',
        () => q,
        (e) => (q = e)
      ),
      n(
        e.exports,
        'flushSync',
        () => K,
        (e) => (K = e)
      ),
      n(
        e.exports,
        'hydrate',
        () => Q,
        (e) => (Q = e)
      ),
      n(
        e.exports,
        'hydrateRoot',
        () => G,
        (e) => (G = e)
      ),
      n(
        e.exports,
        'render',
        () => Y,
        (e) => (Y = e)
      ),
      n(
        e.exports,
        'unmountComponentAtNode',
        () => Z,
        (e) => (Z = e)
      ),
      n(
        e.exports,
        'unstable_batchedUpdates',
        () => X,
        (e) => (X = e)
      ),
      n(
        e.exports,
        'unstable_renderSubtreeIntoContainer',
        () => J,
        (e) => (J = e)
      ),
      n(
        e.exports,
        'version',
        () => ee,
        (e) => (ee = e)
      );
    var r,
      a,
      o,
      l,
      i,
      u,
      s = L('acw62'),
      c = L('fO90s');
    function d(e) {
      for (
        var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
          n = 1;
        n < arguments.length;
        n++
      )
        t += '&args[]=' + encodeURIComponent(arguments[n]);
      return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
      );
    }
    var f = new Set(),
      p = {};
    function h(e, t) {
      m(e, t), m(e + 'Capture', t);
    }
    function m(e, t) {
      for (p[e] = t, e = 0; e < t.length; e++) f.add(t[e]);
    }
    var v = !(
        'undefined' == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
      ),
      g = Object.prototype.hasOwnProperty,
      y =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      b = {},
      w = {};
    function S(e, t, n, r, a, o, l) {
      (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = a),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = o),
        (this.removeEmptyString = l);
    }
    var k = {};
    'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
      .split(' ')
      .forEach(function (e) {
        k[e] = new S(e, 0, !1, e, null, !1, !1);
      }),
      [
        ['acceptCharset', 'accept-charset'],
        ['className', 'class'],
        ['htmlFor', 'for'],
        ['httpEquiv', 'http-equiv'],
      ].forEach(function (e) {
        var t = e[0];
        k[t] = new S(t, 1, !1, e[1], null, !1, !1);
      }),
      ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
        function (e) {
          k[e] = new S(e, 2, !1, e.toLowerCase(), null, !1, !1);
        }
      ),
      [
        'autoReverse',
        'externalResourcesRequired',
        'focusable',
        'preserveAlpha',
      ].forEach(function (e) {
        k[e] = new S(e, 2, !1, e, null, !1, !1);
      }),
      'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
        .split(' ')
        .forEach(function (e) {
          k[e] = new S(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
        k[e] = new S(e, 3, !0, e, null, !1, !1);
      }),
      ['capture', 'download'].forEach(function (e) {
        k[e] = new S(e, 4, !1, e, null, !1, !1);
      }),
      ['cols', 'rows', 'size', 'span'].forEach(function (e) {
        k[e] = new S(e, 6, !1, e, null, !1, !1);
      }),
      ['rowSpan', 'start'].forEach(function (e) {
        k[e] = new S(e, 5, !1, e.toLowerCase(), null, !1, !1);
      });
    var _ = /[\-:]([a-z])/g;
    function x(e) {
      return e[1].toUpperCase();
    }
    function E(e, t, n, r) {
      var a,
        o = k.hasOwnProperty(t) ? k[t] : null;
      (null !== o
        ? 0 !== o.type
        : r ||
          !(2 < t.length) ||
          ('o' !== t[0] && 'O' !== t[0]) ||
          ('n' !== t[1] && 'N' !== t[1])) &&
        ((function (e, t, n, r) {
          if (
            null == t ||
            (function (e, t, n, r) {
              if (null !== n && 0 === n.type) return !1;
              switch (typeof t) {
                case 'function':
                case 'symbol':
                  return !0;
                case 'boolean':
                  if (r) return !1;
                  if (null !== n) return !n.acceptsBooleans;
                  return (
                    'data-' !== (e = e.toLowerCase().slice(0, 5)) &&
                    'aria-' !== e
                  );
                default:
                  return !1;
              }
            })(e, t, n, r)
          )
            return !0;
          if (r) return !1;
          if (null !== n)
            switch (n.type) {
              case 3:
                return !t;
              case 4:
                return !1 === t;
              case 5:
                return isNaN(t);
              case 6:
                return isNaN(t) || 1 > t;
            }
          return !1;
        })(t, n, o, r) && (n = null),
        r || null === o
          ? ((a = t),
            (!!g.call(w, a) ||
              (!g.call(b, a) &&
                (y.test(a) ? (w[a] = !0) : ((b[a] = !0), !1)))) &&
              (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n)))
          : o.mustUseProperty
          ? (e[o.propertyName] = null === n ? 3 !== o.type && '' : n)
          : ((t = o.attributeName),
            (r = o.attributeNamespace),
            null === n
              ? e.removeAttribute(t)
              : ((n =
                  3 === (o = o.type) || (4 === o && !0 === n) ? '' : '' + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(_, x);
        k[t] = new S(t, 1, !1, e, null, !1, !1);
      }),
      'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
        .split(' ')
        .forEach(function (e) {
          var t = e.replace(_, x);
          k[t] = new S(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
        }),
      ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
        var t = e.replace(_, x);
        k[t] = new S(
          t,
          1,
          !1,
          e,
          'http://www.w3.org/XML/1998/namespace',
          !1,
          !1
        );
      }),
      ['tabIndex', 'crossOrigin'].forEach(function (e) {
        k[e] = new S(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (k.xlinkHref = new S(
        'xlinkHref',
        1,
        !1,
        'xlink:href',
        'http://www.w3.org/1999/xlink',
        !0,
        !1
      )),
      ['src', 'href', 'action', 'formAction'].forEach(function (e) {
        k[e] = new S(e, 1, !1, e.toLowerCase(), null, !0, !0);
      });
    var R = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      T = Symbol.for('react.element'),
      C = Symbol.for('react.portal'),
      N = Symbol.for('react.fragment'),
      A = Symbol.for('react.strict_mode'),
      P = Symbol.for('react.profiler'),
      M = Symbol.for('react.provider'),
      D = Symbol.for('react.context'),
      z = Symbol.for('react.forward_ref'),
      U = Symbol.for('react.suspense'),
      O = Symbol.for('react.suspense_list'),
      I = Symbol.for('react.memo'),
      V = Symbol.for('react.lazy');
    Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode');
    var j = Symbol.for('react.offscreen');
    Symbol.for('react.legacy_hidden'),
      Symbol.for('react.cache'),
      Symbol.for('react.tracing_marker');
    var B = Symbol.iterator;
    function F(e) {
      return null === e || 'object' != typeof e
        ? null
        : 'function' == typeof (e = (B && e[B]) || e['@@iterator'])
        ? e
        : null;
    }
    var $,
      W,
      H,
      q,
      K,
      Q,
      G,
      Y,
      Z,
      X,
      J,
      ee,
      et,
      en = Object.assign;
    function er(e) {
      if (void 0 === et)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          et = (t && t[1]) || '';
        }
      return '\n' + et + e;
    }
    var ea = !1;
    function eo(e, t) {
      if (!e || ea) return '';
      ea = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (t) {
          if (
            ((t = function () {
              throw Error();
            }),
            Object.defineProperty(t.prototype, 'props', {
              set: function () {
                throw Error();
              },
            }),
            'object' == typeof Reflect && Reflect.construct)
          ) {
            try {
              Reflect.construct(t, []);
            } catch (e) {
              var r = e;
            }
            Reflect.construct(e, [], t);
          } else {
            try {
              t.call();
            } catch (e) {
              r = e;
            }
            e.call(t.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (e) {
            r = e;
          }
          e();
        }
      } catch (t) {
        if (t && r && 'string' == typeof t.stack) {
          for (
            var a = t.stack.split('\n'),
              o = r.stack.split('\n'),
              l = a.length - 1,
              i = o.length - 1;
            1 <= l && 0 <= i && a[l] !== o[i];

          )
            i--;
          for (; 1 <= l && 0 <= i; l--, i--)
            if (a[l] !== o[i]) {
              if (1 !== l || 1 !== i)
                do
                  if ((l--, 0 > --i || a[l] !== o[i])) {
                    var u = '\n' + a[l].replace(' at new ', ' at ');
                    return (
                      e.displayName &&
                        u.includes('<anonymous>') &&
                        (u = u.replace('<anonymous>', e.displayName)),
                      u
                    );
                  }
                while (1 <= l && 0 <= i);
              break;
            }
        }
      } finally {
        (ea = !1), (Error.prepareStackTrace = n);
      }
      return (e = e ? e.displayName || e.name : '') ? er(e) : '';
    }
    function el(e) {
      switch (typeof e) {
        case 'boolean':
        case 'number':
        case 'string':
        case 'undefined':
        case 'object':
          return e;
        default:
          return '';
      }
    }
    function ei(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        'input' === e.toLowerCase() &&
        ('checkbox' === t || 'radio' === t)
      );
    }
    function eu(e) {
      e._valueTracker ||
        (e._valueTracker = (function (e) {
          var t = ei(e) ? 'checked' : 'value',
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = '' + e[t];
          if (
            !e.hasOwnProperty(t) &&
            void 0 !== n &&
            'function' == typeof n.get &&
            'function' == typeof n.set
          ) {
            var a = n.get,
              o = n.set;
            return (
              Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                  return a.call(this);
                },
                set: function (e) {
                  (r = '' + e), o.call(this, e);
                },
              }),
              Object.defineProperty(e, t, { enumerable: n.enumerable }),
              {
                getValue: function () {
                  return r;
                },
                setValue: function (e) {
                  r = '' + e;
                },
                stopTracking: function () {
                  (e._valueTracker = null), delete e[t];
                },
              }
            );
          }
        })(e));
    }
    function es(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = '';
      return (
        e && (r = ei(e) ? (e.checked ? 'true' : 'false') : e.value),
        (e = r) !== n && (t.setValue(e), !0)
      );
    }
    function ec(e) {
      if (
        void 0 ===
        (e = e || ('undefined' != typeof document ? document : void 0))
      )
        return null;
      try {
        return e.activeElement || e.body;
      } catch (t) {
        return e.body;
      }
    }
    function ed(e, t) {
      var n = t.checked;
      return en({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked,
      });
    }
    function ef(e, t) {
      var n = null == t.defaultValue ? '' : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
      (n = el(null != t.value ? t.value : n)),
        (e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled:
            'checkbox' === t.type || 'radio' === t.type
              ? null != t.checked
              : null != t.value,
        });
    }
    function ep(e, t) {
      null != (t = t.checked) && E(e, 'checked', t, !1);
    }
    function eh(e, t) {
      ep(e, t);
      var n = el(t.value),
        r = t.type;
      if (null != n)
        'number' === r
          ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
          : e.value !== '' + n && (e.value = '' + n);
      else if ('submit' === r || 'reset' === r) {
        e.removeAttribute('value');
        return;
      }
      t.hasOwnProperty('value')
        ? ev(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && ev(e, t.type, el(t.defaultValue)),
        null == t.checked &&
          null != t.defaultChecked &&
          (e.defaultChecked = !!t.defaultChecked);
    }
    function em(e, t, n) {
      if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var r = t.type;
        if (
          !(
            ('submit' !== r && 'reset' !== r) ||
            (void 0 !== t.value && null !== t.value)
          )
        )
          return;
        (t = '' + e._wrapperState.initialValue),
          n || t === e.value || (e.value = t),
          (e.defaultValue = t);
      }
      '' !== (n = e.name) && (e.name = ''),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        '' !== n && (e.name = n);
    }
    function ev(e, t, n) {
      ('number' !== t || ec(e.ownerDocument) !== e) &&
        (null == n
          ? (e.defaultValue = '' + e._wrapperState.initialValue)
          : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
    }
    var eg = Array.isArray;
    function ey(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
        for (n = 0; n < e.length; n++)
          (a = t.hasOwnProperty('$' + e[n].value)),
            e[n].selected !== a && (e[n].selected = a),
            a && r && (e[n].defaultSelected = !0);
      } else {
        for (a = 0, n = '' + el(n), t = null; a < e.length; a++) {
          if (e[a].value === n) {
            (e[a].selected = !0), r && (e[a].defaultSelected = !0);
            return;
          }
          null !== t || e[a].disabled || (t = e[a]);
        }
        null !== t && (t.selected = !0);
      }
    }
    function eb(e, t) {
      if (null != t.dangerouslySetInnerHTML) throw Error(d(91));
      return en({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: '' + e._wrapperState.initialValue,
      });
    }
    function ew(e, t) {
      var n = t.value;
      if (null == n) {
        if (((n = t.children), (t = t.defaultValue), null != n)) {
          if (null != t) throw Error(d(92));
          if (eg(n)) {
            if (1 < n.length) throw Error(d(93));
            n = n[0];
          }
          t = n;
        }
        null == t && (t = ''), (n = t);
      }
      e._wrapperState = { initialValue: el(n) };
    }
    function eS(e, t) {
      var n = el(t.value),
        r = el(t.defaultValue);
      null != n &&
        ((n = '' + n) !== e.value && (e.value = n),
        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = '' + r);
    }
    function ek(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue &&
        '' !== t &&
        null !== t &&
        (e.value = t);
    }
    function e_(e) {
      switch (e) {
        case 'svg':
          return 'http://www.w3.org/2000/svg';
        case 'math':
          return 'http://www.w3.org/1998/Math/MathML';
        default:
          return 'http://www.w3.org/1999/xhtml';
      }
    }
    function ex(e, t) {
      return null == e || 'http://www.w3.org/1999/xhtml' === e
        ? e_(t)
        : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
        ? 'http://www.w3.org/1999/xhtml'
        : e;
    }
    var eE,
      eR,
      eT =
        ((eE = function (e, t) {
          if (
            'http://www.w3.org/2000/svg' !== e.namespaceURI ||
            'innerHTML' in e
          )
            e.innerHTML = t;
          else {
            for (
              (eR = eR || document.createElement('div')).innerHTML =
                '<svg>' + t.valueOf().toString() + '</svg>',
                t = eR.firstChild;
              e.firstChild;

            )
              e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
          }
        }),
        'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function (e, t, n, r) {
              MSApp.execUnsafeLocalFunction(function () {
                return eE(e, t, n, r);
              });
            }
          : eE);
    function eC(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var eN = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      eL = ['Webkit', 'ms', 'Moz', 'O'];
    function eA(e, t, n) {
      return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : n ||
          'number' != typeof t ||
          0 === t ||
          (eN.hasOwnProperty(e) && eN[e])
        ? ('' + t).trim()
        : t + 'px';
    }
    function eP(e, t) {
      for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
          var r = 0 === n.indexOf('--'),
            a = eA(n, t[n], r);
          'float' === n && (n = 'cssFloat'),
            r ? e.setProperty(n, a) : (e[n] = a);
        }
    }
    Object.keys(eN).forEach(function (e) {
      eL.forEach(function (t) {
        eN[(t = t + e.charAt(0).toUpperCase() + e.substring(1))] = eN[e];
      });
    });
    var eM = en(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      }
    );
    function eD(e, t) {
      if (t) {
        if (eM[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
          throw Error(d(137, e));
        if (null != t.dangerouslySetInnerHTML) {
          if (null != t.children) throw Error(d(60));
          if (
            'object' != typeof t.dangerouslySetInnerHTML ||
            !('__html' in t.dangerouslySetInnerHTML)
          )
            throw Error(d(61));
        }
        if (null != t.style && 'object' != typeof t.style) throw Error(d(62));
      }
    }
    function ez(e, t) {
      if (-1 === e.indexOf('-')) return 'string' == typeof t.is;
      switch (e) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
          return !1;
        default:
          return !0;
      }
    }
    var eU = null;
    function eO(e) {
      return (
        (e = e.target || e.srcElement || window).correspondingUseElement &&
          (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
      );
    }
    var eI = null,
      eV = null,
      ej = null;
    function eB(e) {
      if ((e = rG(e))) {
        if ('function' != typeof eI) throw Error(d(280));
        var t = e.stateNode;
        t && ((t = rZ(t)), eI(e.stateNode, e.type, t));
      }
    }
    function eF(e) {
      eV ? (ej ? ej.push(e) : (ej = [e])) : (eV = e);
    }
    function e$() {
      if (eV) {
        var e = eV,
          t = ej;
        if (((ej = eV = null), eB(e), t))
          for (e = 0; e < t.length; e++) eB(t[e]);
      }
    }
    function eW(e, t) {
      return e(t);
    }
    function eH() {}
    var eq = !1;
    function eK(e, t, n) {
      if (eq) return e(t, n);
      eq = !0;
      try {
        return eW(e, t, n);
      } finally {
        (eq = !1), (null !== eV || null !== ej) && (eH(), e$());
      }
    }
    function eQ(e, t) {
      var n = e.stateNode;
      if (null === n) return null;
      var r = rZ(n);
      if (null === r) return null;
      switch (((n = r[t]), t)) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
        case 'onMouseEnter':
          (r = !r.disabled) ||
            (r = !(
              'button' === (e = e.type) ||
              'input' === e ||
              'select' === e ||
              'textarea' === e
            )),
            (e = !r);
          break;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && 'function' != typeof n) throw Error(d(231, t, typeof n));
      return n;
    }
    var eG = !1;
    if (v)
      try {
        var eY = {};
        Object.defineProperty(eY, 'passive', {
          get: function () {
            eG = !0;
          },
        }),
          window.addEventListener('test', eY, eY),
          window.removeEventListener('test', eY, eY);
      } catch (e) {
        eG = !1;
      }
    function eZ(e, t, n, r, a, o, l, i, u) {
      var s = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(n, s);
      } catch (e) {
        this.onError(e);
      }
    }
    var eX = !1,
      eJ = null,
      e0 = !1,
      e1 = null,
      e2 = {
        onError: function (e) {
          (eX = !0), (eJ = e);
        },
      };
    function e4(e, t, n, r, a, o, l, i, u) {
      (eX = !1), (eJ = null), eZ.apply(e2, arguments);
    }
    function e3(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do 0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return);
        while (e);
      }
      return 3 === t.tag ? n : null;
    }
    function e5(e) {
      if (13 === e.tag) {
        var t = e.memoizedState;
        if (
          (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
          null !== t)
        )
          return t.dehydrated;
      }
      return null;
    }
    function e6(e) {
      if (e3(e) !== e) throw Error(d(188));
    }
    function e8(e) {
      return null !==
        (e = (function (e) {
          var t = e.alternate;
          if (!t) {
            if (null === (t = e3(e))) throw Error(d(188));
            return t !== e ? null : e;
          }
          for (var n = e, r = t; ; ) {
            var a = n.return;
            if (null === a) break;
            var o = a.alternate;
            if (null === o) {
              if (null !== (r = a.return)) {
                n = r;
                continue;
              }
              break;
            }
            if (a.child === o.child) {
              for (o = a.child; o; ) {
                if (o === n) return e6(a), e;
                if (o === r) return e6(a), t;
                o = o.sibling;
              }
              throw Error(d(188));
            }
            if (n.return !== r.return) (n = a), (r = o);
            else {
              for (var l = !1, i = a.child; i; ) {
                if (i === n) {
                  (l = !0), (n = a), (r = o);
                  break;
                }
                if (i === r) {
                  (l = !0), (r = a), (n = o);
                  break;
                }
                i = i.sibling;
              }
              if (!l) {
                for (i = o.child; i; ) {
                  if (i === n) {
                    (l = !0), (n = o), (r = a);
                    break;
                  }
                  if (i === r) {
                    (l = !0), (r = o), (n = a);
                    break;
                  }
                  i = i.sibling;
                }
                if (!l) throw Error(d(189));
              }
            }
            if (n.alternate !== r) throw Error(d(190));
          }
          if (3 !== n.tag) throw Error(d(188));
          return n.stateNode.current === n ? e : t;
        })(e))
        ? (function e(t) {
            if (5 === t.tag || 6 === t.tag) return t;
            for (t = t.child; null !== t; ) {
              var n = e(t);
              if (null !== n) return n;
              t = t.sibling;
            }
            return null;
          })(e)
        : null;
    }
    var e9 = c.unstable_scheduleCallback,
      e7 = c.unstable_cancelCallback,
      te = c.unstable_shouldYield,
      tt = c.unstable_requestPaint,
      tn = c.unstable_now,
      tr = c.unstable_getCurrentPriorityLevel,
      ta = c.unstable_ImmediatePriority,
      to = c.unstable_UserBlockingPriority,
      tl = c.unstable_NormalPriority,
      ti = c.unstable_LowPriority,
      tu = c.unstable_IdlePriority,
      ts = null,
      tc = null,
      td = Math.clz32
        ? Math.clz32
        : function (e) {
            return 0 == (e >>>= 0) ? 32 : (31 - ((tf(e) / tp) | 0)) | 0;
          },
      tf = Math.log,
      tp = Math.LN2,
      th = 64,
      tm = 4194304;
    function tv(e) {
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return 4194240 & e;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return 130023424 & e;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return e;
      }
    }
    function tg(e, t) {
      var n = e.pendingLanes;
      if (0 === n) return 0;
      var r = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes,
        l = 268435455 & n;
      if (0 !== l) {
        var i = l & ~a;
        0 !== i ? (r = tv(i)) : 0 != (o &= l) && (r = tv(o));
      } else 0 != (l = n & ~a) ? (r = tv(l)) : 0 !== o && (r = tv(o));
      if (0 === r) return 0;
      if (
        0 !== t &&
        t !== r &&
        0 == (t & a) &&
        ((a = r & -r) >= (o = t & -t) || (16 === a && 0 != (4194240 & o)))
      )
        return t;
      if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
        for (e = e.entanglements, t &= r; 0 < t; )
          (a = 1 << (n = 31 - td(t))), (r |= e[n]), (t &= ~a);
      return r;
    }
    function ty(e) {
      return 0 != (e = -1073741825 & e.pendingLanes)
        ? e
        : 1073741824 & e
        ? 1073741824
        : 0;
    }
    function tb() {
      var e = th;
      return 0 == (4194240 & (th <<= 1)) && (th = 64), e;
    }
    function tw(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function tS(e, t, n) {
      (e.pendingLanes |= t),
        536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        ((e = e.eventTimes)[(t = 31 - td(t))] = n);
    }
    function tk(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n; ) {
        var r = 31 - td(n),
          a = 1 << r;
        (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
      }
    }
    var t_ = 0;
    function tx(e) {
      return 1 < (e &= -e)
        ? 4 < e
          ? 0 != (268435455 & e)
            ? 16
            : 536870912
          : 4
        : 1;
    }
    var tE,
      tR,
      tT,
      tC,
      tN,
      tL = !1,
      tA = [],
      tP = null,
      tM = null,
      tD = null,
      tz = new Map(),
      tU = new Map(),
      tO = [],
      tI =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
          ' '
        );
    function tV(e, t) {
      switch (e) {
        case 'focusin':
        case 'focusout':
          tP = null;
          break;
        case 'dragenter':
        case 'dragleave':
          tM = null;
          break;
        case 'mouseover':
        case 'mouseout':
          tD = null;
          break;
        case 'pointerover':
        case 'pointerout':
          tz.delete(t.pointerId);
          break;
        case 'gotpointercapture':
        case 'lostpointercapture':
          tU.delete(t.pointerId);
      }
    }
    function tj(e, t, n, r, a, o) {
      return (
        null === e || e.nativeEvent !== o
          ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: o,
              targetContainers: [a],
            }),
            null !== t && null !== (t = rG(t)) && tR(t))
          : ((e.eventSystemFlags |= r),
            (t = e.targetContainers),
            null !== a && -1 === t.indexOf(a) && t.push(a)),
        e
      );
    }
    function tB(e) {
      var t = rQ(e.target);
      if (null !== t) {
        var n = e3(t);
        if (null !== n) {
          if (13 === (t = n.tag)) {
            if (null !== (t = e5(n))) {
              (e.blockedOn = t),
                tN(e.priority, function () {
                  tT(n);
                });
              return;
            }
          } else if (
            3 === t &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function tF(e) {
      if (null !== e.blockedOn) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = tJ(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (null !== n)
          return null !== (t = rG(n)) && tR(t), (e.blockedOn = n), !1;
        var r = new (n = e.nativeEvent).constructor(n.type, n);
        (eU = r), n.target.dispatchEvent(r), (eU = null), t.shift();
      }
      return !0;
    }
    function t$(e, t, n) {
      tF(e) && n.delete(t);
    }
    function tW() {
      (tL = !1),
        null !== tP && tF(tP) && (tP = null),
        null !== tM && tF(tM) && (tM = null),
        null !== tD && tF(tD) && (tD = null),
        tz.forEach(t$),
        tU.forEach(t$);
    }
    function tH(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        tL ||
          ((tL = !0),
          c.unstable_scheduleCallback(c.unstable_NormalPriority, tW)));
    }
    function tq(e) {
      function t(t) {
        return tH(t, e);
      }
      if (0 < tA.length) {
        tH(tA[0], e);
        for (var n = 1; n < tA.length; n++) {
          var r = tA[n];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      for (
        null !== tP && tH(tP, e),
          null !== tM && tH(tM, e),
          null !== tD && tH(tD, e),
          tz.forEach(t),
          tU.forEach(t),
          n = 0;
        n < tO.length;
        n++
      )
        (r = tO[n]).blockedOn === e && (r.blockedOn = null);
      for (; 0 < tO.length && null === (n = tO[0]).blockedOn; )
        tB(n), null === n.blockedOn && tO.shift();
    }
    var tK = R.ReactCurrentBatchConfig,
      tQ = !0;
    function tG(e, t, n, r) {
      var a = t_,
        o = tK.transition;
      tK.transition = null;
      try {
        (t_ = 1), tZ(e, t, n, r);
      } finally {
        (t_ = a), (tK.transition = o);
      }
    }
    function tY(e, t, n, r) {
      var a = t_,
        o = tK.transition;
      tK.transition = null;
      try {
        (t_ = 4), tZ(e, t, n, r);
      } finally {
        (t_ = a), (tK.transition = o);
      }
    }
    function tZ(e, t, n, r) {
      if (tQ) {
        var a = tJ(e, t, n, r);
        if (null === a) rw(e, t, r, tX, n), tV(e, r);
        else if (
          (function (e, t, n, r, a) {
            switch (t) {
              case 'focusin':
                return (tP = tj(tP, e, t, n, r, a)), !0;
              case 'dragenter':
                return (tM = tj(tM, e, t, n, r, a)), !0;
              case 'mouseover':
                return (tD = tj(tD, e, t, n, r, a)), !0;
              case 'pointerover':
                var o = a.pointerId;
                return tz.set(o, tj(tz.get(o) || null, e, t, n, r, a)), !0;
              case 'gotpointercapture':
                return (
                  (o = a.pointerId),
                  tU.set(o, tj(tU.get(o) || null, e, t, n, r, a)),
                  !0
                );
            }
            return !1;
          })(a, e, t, n, r)
        )
          r.stopPropagation();
        else if ((tV(e, r), 4 & t && -1 < tI.indexOf(e))) {
          for (; null !== a; ) {
            var o = rG(a);
            if (
              (null !== o && tE(o),
              null === (o = tJ(e, t, n, r)) && rw(e, t, r, tX, n),
              o === a)
            )
              break;
            a = o;
          }
          null !== a && r.stopPropagation();
        } else rw(e, t, r, null, n);
      }
    }
    var tX = null;
    function tJ(e, t, n, r) {
      if (((tX = null), null !== (e = rQ((e = eO(r)))))) {
        if (null === (t = e3(e))) e = null;
        else if (13 === (n = t.tag)) {
          if (null !== (e = e5(t))) return e;
          e = null;
        } else if (3 === n) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return 3 === t.tag ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
      return (tX = e), null;
    }
    function t0(e) {
      switch (e) {
        case 'cancel':
        case 'click':
        case 'close':
        case 'contextmenu':
        case 'copy':
        case 'cut':
        case 'auxclick':
        case 'dblclick':
        case 'dragend':
        case 'dragstart':
        case 'drop':
        case 'focusin':
        case 'focusout':
        case 'input':
        case 'invalid':
        case 'keydown':
        case 'keypress':
        case 'keyup':
        case 'mousedown':
        case 'mouseup':
        case 'paste':
        case 'pause':
        case 'play':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointerup':
        case 'ratechange':
        case 'reset':
        case 'resize':
        case 'seeked':
        case 'submit':
        case 'touchcancel':
        case 'touchend':
        case 'touchstart':
        case 'volumechange':
        case 'change':
        case 'selectionchange':
        case 'textInput':
        case 'compositionstart':
        case 'compositionend':
        case 'compositionupdate':
        case 'beforeblur':
        case 'afterblur':
        case 'beforeinput':
        case 'blur':
        case 'fullscreenchange':
        case 'focus':
        case 'hashchange':
        case 'popstate':
        case 'select':
        case 'selectstart':
          return 1;
        case 'drag':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'mousemove':
        case 'mouseout':
        case 'mouseover':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'scroll':
        case 'toggle':
        case 'touchmove':
        case 'wheel':
        case 'mouseenter':
        case 'mouseleave':
        case 'pointerenter':
        case 'pointerleave':
          return 4;
        case 'message':
          switch (tr()) {
            case ta:
              return 1;
            case to:
              return 4;
            case tl:
            case ti:
              return 16;
            case tu:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var t1 = null,
      t2 = null,
      t4 = null;
    function t3() {
      if (t4) return t4;
      var e,
        t,
        n = t2,
        r = n.length,
        a = 'value' in t1 ? t1.value : t1.textContent,
        o = a.length;
      for (e = 0; e < r && n[e] === a[e]; e++);
      var l = r - e;
      for (t = 1; t <= l && n[r - t] === a[o - t]; t++);
      return (t4 = a.slice(e, 1 < t ? 1 - t : void 0));
    }
    function t5(e) {
      var t = e.keyCode;
      return (
        'charCode' in e
          ? 0 === (e = e.charCode) && 13 === t && (e = 13)
          : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
      );
    }
    function t6() {
      return !0;
    }
    function t8() {
      return !1;
    }
    function t9(e) {
      function t(t, n, r, a, o) {
        for (var l in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = a),
        (this.target = o),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(a) : a[l]));
        return (
          (this.isDefaultPrevented = (
            null != a.defaultPrevented
              ? a.defaultPrevented
              : !1 === a.returnValue
          )
            ? t6
            : t8),
          (this.isPropagationStopped = t8),
          this
        );
      }
      return (
        en(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
              (this.isDefaultPrevented = t6));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
              (this.isPropagationStopped = t6));
          },
          persist: function () {},
          isPersistent: t6,
        }),
        t
      );
    }
    var t7,
      ne,
      nt,
      nn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      nr = t9(nn),
      na = en({}, nn, { view: 0, detail: 0 }),
      no = t9(na),
      nl = en({}, na, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: ng,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return void 0 === e.relatedTarget
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return 'movementX' in e
            ? e.movementX
            : (e !== nt &&
                (nt && 'mousemove' === e.type
                  ? ((t7 = e.screenX - nt.screenX),
                    (ne = e.screenY - nt.screenY))
                  : (ne = t7 = 0),
                (nt = e)),
              t7);
        },
        movementY: function (e) {
          return 'movementY' in e ? e.movementY : ne;
        },
      }),
      ni = t9(nl),
      nu = t9(en({}, nl, { dataTransfer: 0 })),
      ns = t9(en({}, na, { relatedTarget: 0 })),
      nc = t9(
        en({}, nn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
      ),
      nd = t9(
        en({}, nn, {
          clipboardData: function (e) {
            return 'clipboardData' in e
              ? e.clipboardData
              : window.clipboardData;
          },
        })
      ),
      nf = t9(en({}, nn, { data: 0 })),
      np = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
      },
      nh = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
      },
      nm = {
        Alt: 'altKey',
        Control: 'ctrlKey',
        Meta: 'metaKey',
        Shift: 'shiftKey',
      };
    function nv(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : !!(e = nm[e]) && !!t[e];
    }
    function ng() {
      return nv;
    }
    var ny = t9(
        en({}, na, {
          key: function (e) {
            if (e.key) {
              var t = np[e.key] || e.key;
              if ('Unidentified' !== t) return t;
            }
            return 'keypress' === e.type
              ? 13 === (e = t5(e))
                ? 'Enter'
                : String.fromCharCode(e)
              : 'keydown' === e.type || 'keyup' === e.type
              ? nh[e.keyCode] || 'Unidentified'
              : '';
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: ng,
          charCode: function (e) {
            return 'keypress' === e.type ? t5(e) : 0;
          },
          keyCode: function (e) {
            return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
          },
          which: function (e) {
            return 'keypress' === e.type
              ? t5(e)
              : 'keydown' === e.type || 'keyup' === e.type
              ? e.keyCode
              : 0;
          },
        })
      ),
      nb = t9(
        en({}, nl, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        })
      ),
      nw = t9(
        en({}, na, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: ng,
        })
      ),
      nS = t9(
        en({}, nn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
      ),
      nk = t9(
        en({}, nl, {
          deltaX: function (e) {
            return 'deltaX' in e
              ? e.deltaX
              : 'wheelDeltaX' in e
              ? -e.wheelDeltaX
              : 0;
          },
          deltaY: function (e) {
            return 'deltaY' in e
              ? e.deltaY
              : 'wheelDeltaY' in e
              ? -e.wheelDeltaY
              : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        })
      ),
      n_ = [9, 13, 27, 32],
      nx = v && 'CompositionEvent' in window,
      nE = null;
    v && 'documentMode' in document && (nE = document.documentMode);
    var nR = v && 'TextEvent' in window && !nE,
      nT = v && (!nx || (nE && 8 < nE && 11 >= nE)),
      nC = !1;
    function nN(e, t) {
      switch (e) {
        case 'keyup':
          return -1 !== n_.indexOf(t.keyCode);
        case 'keydown':
          return 229 !== t.keyCode;
        case 'keypress':
        case 'mousedown':
        case 'focusout':
          return !0;
        default:
          return !1;
      }
    }
    function nL(e) {
      return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
    }
    var nA = !1,
      nP = {
        color: !0,
        date: !0,
        datetime: !0,
        'datetime-local': !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      };
    function nM(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return 'input' === t ? !!nP[e.type] : 'textarea' === t;
    }
    function nD(e, t, n, r) {
      eF(r),
        0 < (t = rk(t, 'onChange')).length &&
          ((n = new nr('onChange', 'change', null, n, r)),
          e.push({ event: n, listeners: t }));
    }
    var nz = null,
      nU = null;
    function nO(e) {
      rh(e, 0);
    }
    function nI(e) {
      if (es(rY(e))) return e;
    }
    function nV(e, t) {
      if ('change' === e) return t;
    }
    var nj = !1;
    if (v) {
      if (v) {
        var nB = 'oninput' in document;
        if (!nB) {
          var nF = document.createElement('div');
          nF.setAttribute('oninput', 'return;'),
            (nB = 'function' == typeof nF.oninput);
        }
        r = nB;
      } else r = !1;
      nj = r && (!document.documentMode || 9 < document.documentMode);
    }
    function n$() {
      nz && (nz.detachEvent('onpropertychange', nW), (nU = nz = null));
    }
    function nW(e) {
      if ('value' === e.propertyName && nI(nU)) {
        var t = [];
        nD(t, nU, e, eO(e)), eK(nO, t);
      }
    }
    function nH(e, t, n) {
      'focusin' === e
        ? (n$(), (nz = t), (nU = n), nz.attachEvent('onpropertychange', nW))
        : 'focusout' === e && n$();
    }
    function nq(e) {
      if ('selectionchange' === e || 'keyup' === e || 'keydown' === e)
        return nI(nU);
    }
    function nK(e, t) {
      if ('click' === e) return nI(t);
    }
    function nQ(e, t) {
      if ('input' === e || 'change' === e) return nI(t);
    }
    var nG =
      'function' == typeof Object.is
        ? Object.is
        : function (e, t) {
            return (
              (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
            );
          };
    function nY(e, t) {
      if (nG(e, t)) return !0;
      if (
        'object' != typeof e ||
        null === e ||
        'object' != typeof t ||
        null === t
      )
        return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var a = n[r];
        if (!g.call(t, a) || !nG(e[a], t[a])) return !1;
      }
      return !0;
    }
    function nZ(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function nX(e, t) {
      var n,
        r = nZ(e);
      for (e = 0; r; ) {
        if (3 === r.nodeType) {
          if (((n = e + r.textContent.length), e <= t && n >= t))
            return { node: r, offset: t - e };
          e = n;
        }
        e: {
          for (; r; ) {
            if (r.nextSibling) {
              r = r.nextSibling;
              break e;
            }
            r = r.parentNode;
          }
          r = void 0;
        }
        r = nZ(r);
      }
    }
    function nJ() {
      for (var e = window, t = ec(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = 'string' == typeof t.contentWindow.location.href;
        } catch (e) {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = ec(e.document);
      }
      return t;
    }
    function n0(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        (('input' === t &&
          ('text' === e.type ||
            'search' === e.type ||
            'tel' === e.type ||
            'url' === e.type ||
            'password' === e.type)) ||
          'textarea' === t ||
          'true' === e.contentEditable)
      );
    }
    var n1 = v && 'documentMode' in document && 11 >= document.documentMode,
      n2 = null,
      n4 = null,
      n3 = null,
      n5 = !1;
    function n6(e, t, n) {
      var r =
        n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
      n5 ||
        null == n2 ||
        n2 !== ec(r) ||
        ((r =
          'selectionStart' in (r = n2) && n0(r)
            ? { start: r.selectionStart, end: r.selectionEnd }
            : {
                anchorNode: (r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
                ).getSelection()).anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset,
              }),
        (n3 && nY(n3, r)) ||
          ((n3 = r),
          0 < (r = rk(n4, 'onSelect')).length &&
            ((t = new nr('onSelect', 'select', null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = n2))));
    }
    function n8(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n['Webkit' + e] = 'webkit' + t),
        (n['Moz' + e] = 'moz' + t),
        n
      );
    }
    var n9 = {
        animationend: n8('Animation', 'AnimationEnd'),
        animationiteration: n8('Animation', 'AnimationIteration'),
        animationstart: n8('Animation', 'AnimationStart'),
        transitionend: n8('Transition', 'TransitionEnd'),
      },
      n7 = {},
      re = {};
    function rt(e) {
      if (n7[e]) return n7[e];
      if (!n9[e]) return e;
      var t,
        n = n9[e];
      for (t in n) if (n.hasOwnProperty(t) && t in re) return (n7[e] = n[t]);
      return e;
    }
    v &&
      ((re = document.createElement('div').style),
      'AnimationEvent' in window ||
        (delete n9.animationend.animation,
        delete n9.animationiteration.animation,
        delete n9.animationstart.animation),
      'TransitionEvent' in window || delete n9.transitionend.transition);
    var rn = rt('animationend'),
      rr = rt('animationiteration'),
      ra = rt('animationstart'),
      ro = rt('transitionend'),
      rl = new Map(),
      ri =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
          ' '
        );
    function ru(e, t) {
      rl.set(e, t), h(t, [e]);
    }
    for (var rs = 0; rs < ri.length; rs++) {
      var rc = ri[rs];
      ru(rc.toLowerCase(), 'on' + (rc[0].toUpperCase() + rc.slice(1)));
    }
    ru(rn, 'onAnimationEnd'),
      ru(rr, 'onAnimationIteration'),
      ru(ra, 'onAnimationStart'),
      ru('dblclick', 'onDoubleClick'),
      ru('focusin', 'onFocus'),
      ru('focusout', 'onBlur'),
      ru(ro, 'onTransitionEnd'),
      m('onMouseEnter', ['mouseout', 'mouseover']),
      m('onMouseLeave', ['mouseout', 'mouseover']),
      m('onPointerEnter', ['pointerout', 'pointerover']),
      m('onPointerLeave', ['pointerout', 'pointerover']),
      h(
        'onChange',
        'change click focusin focusout input keydown keyup selectionchange'.split(
          ' '
        )
      ),
      h(
        'onSelect',
        'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
          ' '
        )
      ),
      h('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
      h(
        'onCompositionEnd',
        'compositionend focusout keydown keypress keyup mousedown'.split(' ')
      ),
      h(
        'onCompositionStart',
        'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
      ),
      h(
        'onCompositionUpdate',
        'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
      );
    var rd =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
          ' '
        ),
      rf = new Set(
        'cancel close invalid load scroll toggle'.split(' ').concat(rd)
      );
    function rp(e, t, n) {
      var r = e.type || 'unknown-event';
      (e.currentTarget = n),
        (function (e, t, n, r, a, o, l, i, u) {
          if ((e4.apply(this, arguments), eX)) {
            if (eX) {
              var s = eJ;
              (eX = !1), (eJ = null);
            } else throw Error(d(198));
            e0 || ((e0 = !0), (e1 = s));
          }
        })(r, t, void 0, e),
        (e.currentTarget = null);
    }
    function rh(e, t) {
      t = 0 != (4 & t);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          a = r.event;
        r = r.listeners;
        e: {
          var o = void 0;
          if (t)
            for (var l = r.length - 1; 0 <= l; l--) {
              var i = r[l],
                u = i.instance,
                s = i.currentTarget;
              if (((i = i.listener), u !== o && a.isPropagationStopped()))
                break e;
              rp(a, i, s), (o = u);
            }
          else
            for (l = 0; l < r.length; l++) {
              if (
                ((u = (i = r[l]).instance),
                (s = i.currentTarget),
                (i = i.listener),
                u !== o && a.isPropagationStopped())
              )
                break e;
              rp(a, i, s), (o = u);
            }
        }
      }
      if (e0) throw ((e = e1), (e0 = !1), (e1 = null), e);
    }
    function rm(e, t) {
      var n = t[rH];
      void 0 === n && (n = t[rH] = new Set());
      var r = e + '__bubble';
      n.has(r) || (rb(t, e, 2, !1), n.add(r));
    }
    function rv(e, t, n) {
      var r = 0;
      t && (r |= 4), rb(n, e, r, t);
    }
    var rg = '_reactListening' + Math.random().toString(36).slice(2);
    function ry(e) {
      if (!e[rg]) {
        (e[rg] = !0),
          f.forEach(function (t) {
            'selectionchange' !== t &&
              (rf.has(t) || rv(t, !1, e), rv(t, !0, e));
          });
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[rg] || ((t[rg] = !0), rv('selectionchange', !1, t));
      }
    }
    function rb(e, t, n, r) {
      switch (t0(t)) {
        case 1:
          var a = tG;
          break;
        case 4:
          a = tY;
          break;
        default:
          a = tZ;
      }
      (n = a.bind(null, t, n, e)),
        (a = void 0),
        eG &&
          ('touchstart' === t || 'touchmove' === t || 'wheel' === t) &&
          (a = !0),
        r
          ? void 0 !== a
            ? e.addEventListener(t, n, { capture: !0, passive: a })
            : e.addEventListener(t, n, !0)
          : void 0 !== a
          ? e.addEventListener(t, n, { passive: a })
          : e.addEventListener(t, n, !1);
    }
    function rw(e, t, n, r, a) {
      var o = r;
      if (0 == (1 & t) && 0 == (2 & t) && null !== r)
        e: for (;;) {
          if (null === r) return;
          var l = r.tag;
          if (3 === l || 4 === l) {
            var i = r.stateNode.containerInfo;
            if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
            if (4 === l)
              for (l = r.return; null !== l; ) {
                var u = l.tag;
                if (
                  (3 === u || 4 === u) &&
                  ((u = l.stateNode.containerInfo) === a ||
                    (8 === u.nodeType && u.parentNode === a))
                )
                  return;
                l = l.return;
              }
            for (; null !== i; ) {
              if (null === (l = rQ(i))) return;
              if (5 === (u = l.tag) || 6 === u) {
                r = o = l;
                continue e;
              }
              i = i.parentNode;
            }
          }
          r = r.return;
        }
      eK(function () {
        var r = o,
          a = eO(n),
          l = [];
        e: {
          var i = rl.get(e);
          if (void 0 !== i) {
            var u = nr,
              s = e;
            switch (e) {
              case 'keypress':
                if (0 === t5(n)) break e;
              case 'keydown':
              case 'keyup':
                u = ny;
                break;
              case 'focusin':
                (s = 'focus'), (u = ns);
                break;
              case 'focusout':
                (s = 'blur'), (u = ns);
                break;
              case 'beforeblur':
              case 'afterblur':
                u = ns;
                break;
              case 'click':
                if (2 === n.button) break e;
              case 'auxclick':
              case 'dblclick':
              case 'mousedown':
              case 'mousemove':
              case 'mouseup':
              case 'mouseout':
              case 'mouseover':
              case 'contextmenu':
                u = ni;
                break;
              case 'drag':
              case 'dragend':
              case 'dragenter':
              case 'dragexit':
              case 'dragleave':
              case 'dragover':
              case 'dragstart':
              case 'drop':
                u = nu;
                break;
              case 'touchcancel':
              case 'touchend':
              case 'touchmove':
              case 'touchstart':
                u = nw;
                break;
              case rn:
              case rr:
              case ra:
                u = nc;
                break;
              case ro:
                u = nS;
                break;
              case 'scroll':
                u = no;
                break;
              case 'wheel':
                u = nk;
                break;
              case 'copy':
              case 'cut':
              case 'paste':
                u = nd;
                break;
              case 'gotpointercapture':
              case 'lostpointercapture':
              case 'pointercancel':
              case 'pointerdown':
              case 'pointermove':
              case 'pointerout':
              case 'pointerover':
              case 'pointerup':
                u = nb;
            }
            var c = 0 != (4 & t),
              d = !c && 'scroll' === e,
              f = c ? (null !== i ? i + 'Capture' : null) : i;
            c = [];
            for (var p, h = r; null !== h; ) {
              var m = (p = h).stateNode;
              if (
                (5 === p.tag &&
                  null !== m &&
                  ((p = m),
                  null !== f && null != (m = eQ(h, f)) && c.push(rS(h, m, p))),
                d)
              )
                break;
              h = h.return;
            }
            0 < c.length &&
              ((i = new u(i, s, null, n, a)),
              l.push({ event: i, listeners: c }));
          }
        }
        if (0 == (7 & t)) {
          if (
            ((i = 'mouseover' === e || 'pointerover' === e),
            (u = 'mouseout' === e || 'pointerout' === e),
            !(
              i &&
              n !== eU &&
              (s = n.relatedTarget || n.fromElement) &&
              (rQ(s) || s[rW])
            ) &&
              (u || i) &&
              ((i =
                a.window === a
                  ? a
                  : (i = a.ownerDocument)
                  ? i.defaultView || i.parentWindow
                  : window),
              u
                ? ((s = n.relatedTarget || n.toElement),
                  (u = r),
                  null !== (s = s ? rQ(s) : null) &&
                    ((d = e3(s)), s !== d || (5 !== s.tag && 6 !== s.tag)) &&
                    (s = null))
                : ((u = null), (s = r)),
              u !== s))
          ) {
            if (
              ((c = ni),
              (m = 'onMouseLeave'),
              (f = 'onMouseEnter'),
              (h = 'mouse'),
              ('pointerout' === e || 'pointerover' === e) &&
                ((c = nb),
                (m = 'onPointerLeave'),
                (f = 'onPointerEnter'),
                (h = 'pointer')),
              (d = null == u ? i : rY(u)),
              (p = null == s ? i : rY(s)),
              ((i = new c(m, h + 'leave', u, n, a)).target = d),
              (i.relatedTarget = p),
              (m = null),
              rQ(a) === r &&
                (((c = new c(f, h + 'enter', s, n, a)).target = p),
                (c.relatedTarget = d),
                (m = c)),
              (d = m),
              u && s)
            )
              t: {
                for (c = u, f = s, h = 0, p = c; p; p = r_(p)) h++;
                for (p = 0, m = f; m; m = r_(m)) p++;
                for (; 0 < h - p; ) (c = r_(c)), h--;
                for (; 0 < p - h; ) (f = r_(f)), p--;
                for (; h--; ) {
                  if (c === f || (null !== f && c === f.alternate)) break t;
                  (c = r_(c)), (f = r_(f));
                }
                c = null;
              }
            else c = null;
            null !== u && rx(l, i, u, c, !1),
              null !== s && null !== d && rx(l, d, s, c, !0);
          }
          e: {
            if (
              'select' ===
                (u =
                  (i = r ? rY(r) : window).nodeName &&
                  i.nodeName.toLowerCase()) ||
              ('input' === u && 'file' === i.type)
            )
              var v,
                g = nV;
            else if (nM(i)) {
              if (nj) g = nQ;
              else {
                g = nq;
                var y = nH;
              }
            } else
              (u = i.nodeName) &&
                'input' === u.toLowerCase() &&
                ('checkbox' === i.type || 'radio' === i.type) &&
                (g = nK);
            if (g && (g = g(e, r))) {
              nD(l, g, n, a);
              break e;
            }
            y && y(e, i, r),
              'focusout' === e &&
                (y = i._wrapperState) &&
                y.controlled &&
                'number' === i.type &&
                ev(i, 'number', i.value);
          }
          switch (((y = r ? rY(r) : window), e)) {
            case 'focusin':
              (nM(y) || 'true' === y.contentEditable) &&
                ((n2 = y), (n4 = r), (n3 = null));
              break;
            case 'focusout':
              n3 = n4 = n2 = null;
              break;
            case 'mousedown':
              n5 = !0;
              break;
            case 'contextmenu':
            case 'mouseup':
            case 'dragend':
              (n5 = !1), n6(l, n, a);
              break;
            case 'selectionchange':
              if (n1) break;
            case 'keydown':
            case 'keyup':
              n6(l, n, a);
          }
          if (nx)
            t: {
              switch (e) {
                case 'compositionstart':
                  var b = 'onCompositionStart';
                  break t;
                case 'compositionend':
                  b = 'onCompositionEnd';
                  break t;
                case 'compositionupdate':
                  b = 'onCompositionUpdate';
                  break t;
              }
              b = void 0;
            }
          else
            nA
              ? nN(e, n) && (b = 'onCompositionEnd')
              : 'keydown' === e &&
                229 === n.keyCode &&
                (b = 'onCompositionStart');
          b &&
            (nT &&
              'ko' !== n.locale &&
              (nA || 'onCompositionStart' !== b
                ? 'onCompositionEnd' === b && nA && (v = t3())
                : ((t2 = 'value' in (t1 = a) ? t1.value : t1.textContent),
                  (nA = !0))),
            0 < (y = rk(r, b)).length &&
              ((b = new nf(b, e, null, n, a)),
              l.push({ event: b, listeners: y }),
              v ? (b.data = v) : null !== (v = nL(n)) && (b.data = v))),
            (v = nR
              ? (function (e, t) {
                  switch (e) {
                    case 'compositionend':
                      return nL(t);
                    case 'keypress':
                      if (32 !== t.which) return null;
                      return (nC = !0), ' ';
                    case 'textInput':
                      return ' ' === (e = t.data) && nC ? null : e;
                    default:
                      return null;
                  }
                })(e, n)
              : (function (e, t) {
                  if (nA)
                    return 'compositionend' === e || (!nx && nN(e, t))
                      ? ((e = t3()), (t4 = t2 = t1 = null), (nA = !1), e)
                      : null;
                  switch (e) {
                    case 'paste':
                    default:
                      return null;
                    case 'keypress':
                      if (
                        !(t.ctrlKey || t.altKey || t.metaKey) ||
                        (t.ctrlKey && t.altKey)
                      ) {
                        if (t.char && 1 < t.char.length) return t.char;
                        if (t.which) return String.fromCharCode(t.which);
                      }
                      return null;
                    case 'compositionend':
                      return nT && 'ko' !== t.locale ? null : t.data;
                  }
                })(e, n)) &&
              0 < (r = rk(r, 'onBeforeInput')).length &&
              ((a = new nf('onBeforeInput', 'beforeinput', null, n, a)),
              l.push({ event: a, listeners: r }),
              (a.data = v));
        }
        rh(l, t);
      });
    }
    function rS(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function rk(e, t) {
      for (var n = t + 'Capture', r = []; null !== e; ) {
        var a = e,
          o = a.stateNode;
        5 === a.tag &&
          null !== o &&
          ((a = o),
          null != (o = eQ(e, n)) && r.unshift(rS(e, o, a)),
          null != (o = eQ(e, t)) && r.push(rS(e, o, a))),
          (e = e.return);
      }
      return r;
    }
    function r_(e) {
      if (null === e) return null;
      do e = e.return;
      while (e && 5 !== e.tag);
      return e || null;
    }
    function rx(e, t, n, r, a) {
      for (var o = t._reactName, l = []; null !== n && n !== r; ) {
        var i = n,
          u = i.alternate,
          s = i.stateNode;
        if (null !== u && u === r) break;
        5 === i.tag &&
          null !== s &&
          ((i = s),
          a
            ? null != (u = eQ(n, o)) && l.unshift(rS(n, u, i))
            : a || (null != (u = eQ(n, o)) && l.push(rS(n, u, i)))),
          (n = n.return);
      }
      0 !== l.length && e.push({ event: t, listeners: l });
    }
    var rE = /\r\n?/g,
      rR = /\u0000|\uFFFD/g;
    function rT(e) {
      return ('string' == typeof e ? e : '' + e)
        .replace(rE, '\n')
        .replace(rR, '');
    }
    function rC(e, t, n) {
      if (((t = rT(t)), rT(e) !== t && n)) throw Error(d(425));
    }
    function rN() {}
    var rL = null,
      rA = null;
    function rP(e, t) {
      return (
        'textarea' === e ||
        'noscript' === e ||
        'string' == typeof t.children ||
        'number' == typeof t.children ||
        ('object' == typeof t.dangerouslySetInnerHTML &&
          null !== t.dangerouslySetInnerHTML &&
          null != t.dangerouslySetInnerHTML.__html)
      );
    }
    var rM = 'function' == typeof setTimeout ? setTimeout : void 0,
      rD = 'function' == typeof clearTimeout ? clearTimeout : void 0,
      rz = 'function' == typeof Promise ? Promise : void 0,
      rU =
        'function' == typeof queueMicrotask
          ? queueMicrotask
          : void 0 !== rz
          ? function (e) {
              return rz.resolve(null).then(e).catch(rO);
            }
          : rM;
    function rO(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function rI(e, t) {
      var n = t,
        r = 0;
      do {
        var a = n.nextSibling;
        if ((e.removeChild(n), a && 8 === a.nodeType)) {
          if ('/$' === (n = a.data)) {
            if (0 === r) {
              e.removeChild(a), tq(t);
              return;
            }
            r--;
          } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
        }
        n = a;
      } while (n);
      tq(t);
    }
    function rV(e) {
      for (; null != e; e = e.nextSibling) {
        var t = e.nodeType;
        if (1 === t || 3 === t) break;
        if (8 === t) {
          if ('$' === (t = e.data) || '$!' === t || '$?' === t) break;
          if ('/$' === t) return null;
        }
      }
      return e;
    }
    function rj(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (8 === e.nodeType) {
          var n = e.data;
          if ('$' === n || '$!' === n || '$?' === n) {
            if (0 === t) return e;
            t--;
          } else '/$' === n && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var rB = Math.random().toString(36).slice(2),
      rF = '__reactFiber$' + rB,
      r$ = '__reactProps$' + rB,
      rW = '__reactContainer$' + rB,
      rH = '__reactEvents$' + rB,
      rq = '__reactListeners$' + rB,
      rK = '__reactHandles$' + rB;
    function rQ(e) {
      var t = e[rF];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[rW] || n[rF])) {
          if (
            ((n = t.alternate),
            null !== t.child || (null !== n && null !== n.child))
          )
            for (e = rj(e); null !== e; ) {
              if ((n = e[rF])) return n;
              e = rj(e);
            }
          return t;
        }
        n = (e = n).parentNode;
      }
      return null;
    }
    function rG(e) {
      return (e = e[rF] || e[rW]) &&
        (5 === e.tag || 6 === e.tag || 13 === e.tag || 3 === e.tag)
        ? e
        : null;
    }
    function rY(e) {
      if (5 === e.tag || 6 === e.tag) return e.stateNode;
      throw Error(d(33));
    }
    function rZ(e) {
      return e[r$] || null;
    }
    var rX = [],
      rJ = -1;
    function r0(e) {
      return { current: e };
    }
    function r1(e) {
      0 > rJ || ((e.current = rX[rJ]), (rX[rJ] = null), rJ--);
    }
    function r2(e, t) {
      (rX[++rJ] = e.current), (e.current = t);
    }
    var r4 = {},
      r3 = r0(r4),
      r5 = r0(!1),
      r6 = r4;
    function r8(e, t) {
      var n = e.type.contextTypes;
      if (!n) return r4;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
      var a,
        o = {};
      for (a in n) o[a] = t[a];
      return (
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = o)),
        o
      );
    }
    function r9(e) {
      return null != (e = e.childContextTypes);
    }
    function r7() {
      r1(r5), r1(r3);
    }
    function ae(e, t, n) {
      if (r3.current !== r4) throw Error(d(168));
      r2(r3, t), r2(r5, n);
    }
    function at(e, t, n) {
      var r = e.stateNode;
      if (((t = t.childContextTypes), 'function' != typeof r.getChildContext))
        return n;
      for (var a in (r = r.getChildContext()))
        if (!(a in t))
          throw Error(
            d(
              108,
              (function (e) {
                var t = e.type;
                switch (e.tag) {
                  case 24:
                    return 'Cache';
                  case 9:
                    return (t.displayName || 'Context') + '.Consumer';
                  case 10:
                    return (t._context.displayName || 'Context') + '.Provider';
                  case 18:
                    return 'DehydratedFragment';
                  case 11:
                    return (
                      (e = (e = t.render).displayName || e.name || ''),
                      t.displayName ||
                        ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
                    );
                  case 7:
                    return 'Fragment';
                  case 5:
                    return t;
                  case 4:
                    return 'Portal';
                  case 3:
                    return 'Root';
                  case 6:
                    return 'Text';
                  case 16:
                    return (function e(t) {
                      if (null == t) return null;
                      if ('function' == typeof t)
                        return t.displayName || t.name || null;
                      if ('string' == typeof t) return t;
                      switch (t) {
                        case N:
                          return 'Fragment';
                        case C:
                          return 'Portal';
                        case P:
                          return 'Profiler';
                        case A:
                          return 'StrictMode';
                        case U:
                          return 'Suspense';
                        case O:
                          return 'SuspenseList';
                      }
                      if ('object' == typeof t)
                        switch (t.$$typeof) {
                          case D:
                            return (t.displayName || 'Context') + '.Consumer';
                          case M:
                            return (
                              (t._context.displayName || 'Context') +
                              '.Provider'
                            );
                          case z:
                            var n = t.render;
                            return (
                              (t = t.displayName) ||
                                (t =
                                  '' !== (t = n.displayName || n.name || '')
                                    ? 'ForwardRef(' + t + ')'
                                    : 'ForwardRef'),
                              t
                            );
                          case I:
                            return null !== (n = t.displayName || null)
                              ? n
                              : e(t.type) || 'Memo';
                          case V:
                            (n = t._payload), (t = t._init);
                            try {
                              return e(t(n));
                            } catch (e) {}
                        }
                      return null;
                    })(t);
                  case 8:
                    return t === A ? 'StrictMode' : 'Mode';
                  case 22:
                    return 'Offscreen';
                  case 12:
                    return 'Profiler';
                  case 21:
                    return 'Scope';
                  case 13:
                    return 'Suspense';
                  case 19:
                    return 'SuspenseList';
                  case 25:
                    return 'TracingMarker';
                  case 1:
                  case 0:
                  case 17:
                  case 2:
                  case 14:
                  case 15:
                    if ('function' == typeof t)
                      return t.displayName || t.name || null;
                    if ('string' == typeof t) return t;
                }
                return null;
              })(e) || 'Unknown',
              a
            )
          );
      return en({}, n, r);
    }
    function an(e) {
      return (
        (e =
          ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
          r4),
        (r6 = r3.current),
        r2(r3, e),
        r2(r5, r5.current),
        !0
      );
    }
    function ar(e, t, n) {
      var r = e.stateNode;
      if (!r) throw Error(d(169));
      n
        ? ((e = at(e, t, r6)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          r1(r5),
          r1(r3),
          r2(r3, e))
        : r1(r5),
        r2(r5, n);
    }
    var aa = null,
      ao = !1,
      al = !1;
    function ai(e) {
      null === aa ? (aa = [e]) : aa.push(e);
    }
    function au() {
      if (!al && null !== aa) {
        al = !0;
        var e = 0,
          t = t_;
        try {
          var n = aa;
          for (t_ = 1; e < n.length; e++) {
            var r = n[e];
            do r = r(!0);
            while (null !== r);
          }
          (aa = null), (ao = !1);
        } catch (t) {
          throw (null !== aa && (aa = aa.slice(e + 1)), e9(ta, au), t);
        } finally {
          (t_ = t), (al = !1);
        }
      }
      return null;
    }
    var as = [],
      ac = 0,
      ad = null,
      af = 0,
      ap = [],
      ah = 0,
      am = null,
      av = 1,
      ag = '';
    function ay(e, t) {
      (as[ac++] = af), (as[ac++] = ad), (ad = e), (af = t);
    }
    function ab(e, t, n) {
      (ap[ah++] = av), (ap[ah++] = ag), (ap[ah++] = am), (am = e);
      var r = av;
      e = ag;
      var a = 32 - td(r) - 1;
      (r &= ~(1 << a)), (n += 1);
      var o = 32 - td(t) + a;
      if (30 < o) {
        var l = a - (a % 5);
        (o = (r & ((1 << l) - 1)).toString(32)),
          (r >>= l),
          (a -= l),
          (av = (1 << (32 - td(t) + a)) | (n << a) | r),
          (ag = o + e);
      } else (av = (1 << o) | (n << a) | r), (ag = e);
    }
    function aw(e) {
      null !== e.return && (ay(e, 1), ab(e, 1, 0));
    }
    function aS(e) {
      for (; e === ad; )
        (ad = as[--ac]), (as[ac] = null), (af = as[--ac]), (as[ac] = null);
      for (; e === am; )
        (am = ap[--ah]),
          (ap[ah] = null),
          (ag = ap[--ah]),
          (ap[ah] = null),
          (av = ap[--ah]),
          (ap[ah] = null);
    }
    var ak = null,
      a_ = null,
      ax = !1,
      aE = null;
    function aR(e, t) {
      var n = i9(5, null, null, 0);
      (n.elementType = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        null === (t = e.deletions)
          ? ((e.deletions = [n]), (e.flags |= 16))
          : t.push(n);
    }
    function aT(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type;
          return (
            null !==
              (t =
                1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
                  ? null
                  : t) &&
            ((e.stateNode = t), (ak = e), (a_ = rV(t.firstChild)), !0)
          );
        case 6:
          return (
            null !==
              (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
            ((e.stateNode = t), (ak = e), (a_ = null), !0)
          );
        case 13:
          return (
            null !== (t = 8 !== t.nodeType ? null : t) &&
            ((n = null !== am ? { id: av, overflow: ag } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            ((n = i9(18, null, null, 0)).stateNode = t),
            (n.return = e),
            (e.child = n),
            (ak = e),
            (a_ = null),
            !0)
          );
        default:
          return !1;
      }
    }
    function aC(e) {
      return 0 != (1 & e.mode) && 0 == (128 & e.flags);
    }
    function aN(e) {
      if (ax) {
        var t = a_;
        if (t) {
          var n = t;
          if (!aT(e, t)) {
            if (aC(e)) throw Error(d(418));
            t = rV(n.nextSibling);
            var r = ak;
            t && aT(e, t)
              ? aR(r, n)
              : ((e.flags = (-4097 & e.flags) | 2), (ax = !1), (ak = e));
          }
        } else {
          if (aC(e)) throw Error(d(418));
          (e.flags = (-4097 & e.flags) | 2), (ax = !1), (ak = e);
        }
      }
    }
    function aL(e) {
      for (
        e = e.return;
        null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

      )
        e = e.return;
      ak = e;
    }
    function aA(e) {
      if (e !== ak) return !1;
      if (!ax) return aL(e), (ax = !0), !1;
      if (
        ((t = 3 !== e.tag) &&
          !(t = 5 !== e.tag) &&
          (t =
            'head' !== (t = e.type) &&
            'body' !== t &&
            !rP(e.type, e.memoizedProps)),
        t && (t = a_))
      ) {
        if (aC(e)) throw (aP(), Error(d(418)));
        for (; t; ) aR(e, t), (t = rV(t.nextSibling));
      }
      if ((aL(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
          throw Error(d(317));
        e: {
          for (t = 0, e = e.nextSibling; e; ) {
            if (8 === e.nodeType) {
              var t,
                n = e.data;
              if ('/$' === n) {
                if (0 === t) {
                  a_ = rV(e.nextSibling);
                  break e;
                }
                t--;
              } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
            }
            e = e.nextSibling;
          }
          a_ = null;
        }
      } else a_ = ak ? rV(e.stateNode.nextSibling) : null;
      return !0;
    }
    function aP() {
      for (var e = a_; e; ) e = rV(e.nextSibling);
    }
    function aM() {
      (a_ = ak = null), (ax = !1);
    }
    function aD(e) {
      null === aE ? (aE = [e]) : aE.push(e);
    }
    var az = R.ReactCurrentBatchConfig;
    function aU(e, t) {
      if (e && e.defaultProps)
        for (var n in ((t = en({}, t)), (e = e.defaultProps)))
          void 0 === t[n] && (t[n] = e[n]);
      return t;
    }
    var aO = r0(null),
      aI = null,
      aV = null,
      aj = null;
    function aB() {
      aj = aV = aI = null;
    }
    function aF(e) {
      var t = aO.current;
      r1(aO), (e._currentValue = t);
    }
    function a$(e, t, n) {
      for (; null !== e; ) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) !== t
            ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
            : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function aW(e, t) {
      (aI = e),
        (aj = aV = null),
        null !== (e = e.dependencies) &&
          null !== e.firstContext &&
          (0 != (e.lanes & t) && (lb = !0), (e.firstContext = null));
    }
    function aH(e) {
      var t = e._currentValue;
      if (aj !== e) {
        if (((e = { context: e, memoizedValue: t, next: null }), null === aV)) {
          if (null === aI) throw Error(d(308));
          (aV = e), (aI.dependencies = { lanes: 0, firstContext: e });
        } else aV = aV.next = e;
      }
      return t;
    }
    var aq = null;
    function aK(e) {
      null === aq ? (aq = [e]) : aq.push(e);
    }
    function aQ(e, t, n, r) {
      var a = t.interleaved;
      return (
        null === a ? ((n.next = n), aK(t)) : ((n.next = a.next), (a.next = n)),
        (t.interleaved = n),
        aG(e, r)
      );
    }
    function aG(e, t) {
      e.lanes |= t;
      var n = e.alternate;
      for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
        (e.childLanes |= t),
          null !== (n = e.alternate) && (n.childLanes |= t),
          (n = e),
          (e = e.return);
      return 3 === n.tag ? n.stateNode : null;
    }
    var aY = !1;
    function aZ(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
      };
    }
    function aX(e, t) {
      (e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
          });
    }
    function aJ(e, t) {
      return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      };
    }
    function a0(e, t, n) {
      var r = e.updateQueue;
      if (null === r) return null;
      if (((r = r.shared), 0 != (2 & ii))) {
        var a = r.pending;
        return (
          null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
          (r.pending = t),
          aG(e, n)
        );
      }
      return (
        null === (a = r.interleaved)
          ? ((t.next = t), aK(r))
          : ((t.next = a.next), (a.next = t)),
        (r.interleaved = t),
        aG(e, n)
      );
    }
    function a1(e, t, n) {
      if (
        null !== (t = t.updateQueue) &&
        ((t = t.shared), 0 != (4194240 & n))
      ) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), tk(e, n);
      }
    }
    function a2(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (null !== r && n === (r = r.updateQueue)) {
        var a = null,
          o = null;
        if (null !== (n = n.firstBaseUpdate)) {
          do {
            var l = {
              eventTime: n.eventTime,
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: n.callback,
              next: null,
            };
            null === o ? (a = o = l) : (o = o.next = l), (n = n.next);
          } while (null !== n);
          null === o ? (a = o = t) : (o = o.next = t);
        } else a = o = t;
        (n = {
          baseState: r.baseState,
          firstBaseUpdate: a,
          lastBaseUpdate: o,
          shared: r.shared,
          effects: r.effects,
        }),
          (e.updateQueue = n);
        return;
      }
      null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
    }
    function a4(e, t, n, r) {
      var a = e.updateQueue;
      aY = !1;
      var o = a.firstBaseUpdate,
        l = a.lastBaseUpdate,
        i = a.shared.pending;
      if (null !== i) {
        a.shared.pending = null;
        var u = i,
          s = u.next;
        (u.next = null), null === l ? (o = s) : (l.next = s), (l = u);
        var c = e.alternate;
        null !== c &&
          (i = (c = c.updateQueue).lastBaseUpdate) !== l &&
          (null === i ? (c.firstBaseUpdate = s) : (i.next = s),
          (c.lastBaseUpdate = u));
      }
      if (null !== o) {
        var d = a.baseState;
        for (l = 0, c = s = u = null, i = o; ; ) {
          var f = i.lane,
            p = i.eventTime;
          if ((r & f) === f) {
            null !== c &&
              (c = c.next =
                {
                  eventTime: p,
                  lane: 0,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                });
            e: {
              var h = e,
                m = i;
              switch (((f = t), (p = n), m.tag)) {
                case 1:
                  if ('function' == typeof (h = m.payload)) {
                    d = h.call(p, d, f);
                    break e;
                  }
                  d = h;
                  break e;
                case 3:
                  h.flags = (-65537 & h.flags) | 128;
                case 0:
                  if (
                    null ==
                    (f =
                      'function' == typeof (h = m.payload)
                        ? h.call(p, d, f)
                        : h)
                  )
                    break e;
                  d = en({}, d, f);
                  break e;
                case 2:
                  aY = !0;
              }
            }
            null !== i.callback &&
              0 !== i.lane &&
              ((e.flags |= 64),
              null === (f = a.effects) ? (a.effects = [i]) : f.push(i));
          } else
            (p = {
              eventTime: p,
              lane: f,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            }),
              null === c ? ((s = c = p), (u = d)) : (c = c.next = p),
              (l |= f);
          if (null === (i = i.next)) {
            if (null === (i = a.shared.pending)) break;
            (i = (f = i).next),
              (f.next = null),
              (a.lastBaseUpdate = f),
              (a.shared.pending = null);
          }
        }
        if (
          (null === c && (u = d),
          (a.baseState = u),
          (a.firstBaseUpdate = s),
          (a.lastBaseUpdate = c),
          null !== (t = a.shared.interleaved))
        ) {
          a = t;
          do (l |= a.lane), (a = a.next);
          while (a !== t);
        } else null === o && (a.shared.lanes = 0);
        (iv |= l), (e.lanes = l), (e.memoizedState = d);
      }
    }
    function a3(e, t, n) {
      if (((e = t.effects), (t.effects = null), null !== e))
        for (t = 0; t < e.length; t++) {
          var r = e[t],
            a = r.callback;
          if (null !== a) {
            if (((r.callback = null), (r = n), 'function' != typeof a))
              throw Error(d(191, a));
            a.call(r);
          }
        }
    }
    var a5 = new s.Component().refs;
    function a6(e, t, n, r) {
      (n = null == (n = n(r, (t = e.memoizedState))) ? t : en({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n);
    }
    var a8 = {
      isMounted: function (e) {
        return !!(e = e._reactInternals) && e3(e) === e;
      },
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = iD(),
          a = iz(e),
          o = aJ(r, a);
        (o.payload = t),
          null != n && (o.callback = n),
          null !== (t = a0(e, o, a)) && (iU(t, e, a, r), a1(t, e, a));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = iD(),
          a = iz(e),
          o = aJ(r, a);
        (o.tag = 1),
          (o.payload = t),
          null != n && (o.callback = n),
          null !== (t = a0(e, o, a)) && (iU(t, e, a, r), a1(t, e, a));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = iD(),
          r = iz(e),
          a = aJ(n, r);
        (a.tag = 2),
          null != t && (a.callback = t),
          null !== (t = a0(e, a, r)) && (iU(t, e, r, n), a1(t, e, r));
      },
    };
    function a9(e, t, n, r, a, o, l) {
      return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, o, l)
        : !t.prototype ||
            !t.prototype.isPureReactComponent ||
            !nY(n, r) ||
            !nY(a, o);
    }
    function a7(e, t, n) {
      var r = !1,
        a = r4,
        o = t.contextType;
      return (
        'object' == typeof o && null !== o
          ? (o = aH(o))
          : ((a = r9(t) ? r6 : r3.current),
            (o = (r = null != (r = t.contextTypes)) ? r8(e, a) : r4)),
        (t = new t(n, o)),
        (e.memoizedState =
          null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = a8),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
          (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
      );
    }
    function oe(e, t, n, r) {
      (e = t.state),
        'function' == typeof t.componentWillReceiveProps &&
          t.componentWillReceiveProps(n, r),
        'function' == typeof t.UNSAFE_componentWillReceiveProps &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && a8.enqueueReplaceState(t, t.state, null);
    }
    function ot(e, t, n, r) {
      var a = e.stateNode;
      (a.props = n), (a.state = e.memoizedState), (a.refs = a5), aZ(e);
      var o = t.contextType;
      'object' == typeof o && null !== o
        ? (a.context = aH(o))
        : ((o = r9(t) ? r6 : r3.current), (a.context = r8(e, o))),
        (a.state = e.memoizedState),
        'function' == typeof (o = t.getDerivedStateFromProps) &&
          (a6(e, t, o, n), (a.state = e.memoizedState)),
        'function' == typeof t.getDerivedStateFromProps ||
          'function' == typeof a.getSnapshotBeforeUpdate ||
          ('function' != typeof a.UNSAFE_componentWillMount &&
            'function' != typeof a.componentWillMount) ||
          ((t = a.state),
          'function' == typeof a.componentWillMount && a.componentWillMount(),
          'function' == typeof a.UNSAFE_componentWillMount &&
            a.UNSAFE_componentWillMount(),
          t !== a.state && a8.enqueueReplaceState(a, a.state, null),
          a4(e, n, a, r),
          (a.state = e.memoizedState)),
        'function' == typeof a.componentDidMount && (e.flags |= 4194308);
    }
    function on(e, t, n) {
      if (
        null !== (e = n.ref) &&
        'function' != typeof e &&
        'object' != typeof e
      ) {
        if (n._owner) {
          if ((n = n._owner)) {
            if (1 !== n.tag) throw Error(d(309));
            var r = n.stateNode;
          }
          if (!r) throw Error(d(147, e));
          var a = r,
            o = '' + e;
          return null !== t &&
            null !== t.ref &&
            'function' == typeof t.ref &&
            t.ref._stringRef === o
            ? t.ref
            : (((t = function (e) {
                var t = a.refs;
                t === a5 && (t = a.refs = {}),
                  null === e ? delete t[o] : (t[o] = e);
              })._stringRef = o),
              t);
        }
        if ('string' != typeof e) throw Error(d(284));
        if (!n._owner) throw Error(d(290, e));
      }
      return e;
    }
    function or(e, t) {
      throw Error(
        d(
          31,
          '[object Object]' === (e = Object.prototype.toString.call(t))
            ? 'object with keys {' + Object.keys(t).join(', ') + '}'
            : e
        )
      );
    }
    function oa(e) {
      return (0, e._init)(e._payload);
    }
    function oo(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; null !== r; ) t(n, r), (r = r.sibling);
        return null;
      }
      function r(e, t) {
        for (e = new Map(); null !== t; )
          null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
        return e;
      }
      function a(e, t) {
        return ((e = ue(e, t)).index = 0), (e.sibling = null), e;
      }
      function o(t, n, r) {
        return ((t.index = r), e)
          ? null !== (r = t.alternate)
            ? (r = r.index) < n
              ? ((t.flags |= 2), n)
              : r
            : ((t.flags |= 2), n)
          : ((t.flags |= 1048576), n);
      }
      function l(t) {
        return e && null === t.alternate && (t.flags |= 2), t;
      }
      function i(e, t, n, r) {
        return (
          null === t || 6 !== t.tag
            ? ((t = ua(n, e.mode, r)).return = e)
            : ((t = a(t, n)).return = e),
          t
        );
      }
      function u(e, t, n, r) {
        var o = n.type;
        return o === N
          ? c(e, t, n.props.children, r, n.key)
          : (null !== t &&
            (t.elementType === o ||
              ('object' == typeof o &&
                null !== o &&
                o.$$typeof === V &&
                oa(o) === t.type))
              ? ((r = a(t, n.props)).ref = on(e, t, n))
              : ((r = ut(n.type, n.key, n.props, null, e.mode, r)).ref = on(
                  e,
                  t,
                  n
                )),
            (r.return = e),
            r);
      }
      function s(e, t, n, r) {
        return (
          null === t ||
          4 !== t.tag ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
            ? ((t = uo(n, e.mode, r)).return = e)
            : ((t = a(t, n.children || [])).return = e),
          t
        );
      }
      function c(e, t, n, r, o) {
        return (
          null === t || 7 !== t.tag
            ? ((t = un(n, e.mode, r, o)).return = e)
            : ((t = a(t, n)).return = e),
          t
        );
      }
      function f(e, t, n) {
        if (('string' == typeof t && '' !== t) || 'number' == typeof t)
          return ((t = ua('' + t, e.mode, n)).return = e), t;
        if ('object' == typeof t && null !== t) {
          switch (t.$$typeof) {
            case T:
              return (
                ((n = ut(t.type, t.key, t.props, null, e.mode, n)).ref = on(
                  e,
                  null,
                  t
                )),
                (n.return = e),
                n
              );
            case C:
              return ((t = uo(t, e.mode, n)).return = e), t;
            case V:
              return f(e, (0, t._init)(t._payload), n);
          }
          if (eg(t) || F(t))
            return ((t = un(t, e.mode, n, null)).return = e), t;
          or(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var a = null !== t ? t.key : null;
        if (('string' == typeof n && '' !== n) || 'number' == typeof n)
          return null !== a ? null : i(e, t, '' + n, r);
        if ('object' == typeof n && null !== n) {
          switch (n.$$typeof) {
            case T:
              return n.key === a ? u(e, t, n, r) : null;
            case C:
              return n.key === a ? s(e, t, n, r) : null;
            case V:
              return p(e, t, (a = n._init)(n._payload), r);
          }
          if (eg(n) || F(n)) return null !== a ? null : c(e, t, n, r, null);
          or(e, n);
        }
        return null;
      }
      function h(e, t, n, r, a) {
        if (('string' == typeof r && '' !== r) || 'number' == typeof r)
          return i(t, (e = e.get(n) || null), '' + r, a);
        if ('object' == typeof r && null !== r) {
          switch (r.$$typeof) {
            case T:
              return u(
                t,
                (e = e.get(null === r.key ? n : r.key) || null),
                r,
                a
              );
            case C:
              return s(
                t,
                (e = e.get(null === r.key ? n : r.key) || null),
                r,
                a
              );
            case V:
              return h(e, t, n, (0, r._init)(r._payload), a);
          }
          if (eg(r) || F(r)) return c(t, (e = e.get(n) || null), r, a, null);
          or(t, r);
        }
        return null;
      }
      return function i(u, s, c, m) {
        if (
          ('object' == typeof c &&
            null !== c &&
            c.type === N &&
            null === c.key &&
            (c = c.props.children),
          'object' == typeof c && null !== c)
        ) {
          switch (c.$$typeof) {
            case T:
              e: {
                for (var v = c.key, g = s; null !== g; ) {
                  if (g.key === v) {
                    if ((v = c.type) === N) {
                      if (7 === g.tag) {
                        n(u, g.sibling),
                          ((s = a(g, c.props.children)).return = u),
                          (u = s);
                        break e;
                      }
                    } else if (
                      g.elementType === v ||
                      ('object' == typeof v &&
                        null !== v &&
                        v.$$typeof === V &&
                        oa(v) === g.type)
                    ) {
                      n(u, g.sibling),
                        ((s = a(g, c.props)).ref = on(u, g, c)),
                        (s.return = u),
                        (u = s);
                      break e;
                    }
                    n(u, g);
                    break;
                  }
                  t(u, g), (g = g.sibling);
                }
                c.type === N
                  ? (((s = un(c.props.children, u.mode, m, c.key)).return = u),
                    (u = s))
                  : (((m = ut(c.type, c.key, c.props, null, u.mode, m)).ref =
                      on(u, s, c)),
                    (m.return = u),
                    (u = m));
              }
              return l(u);
            case C:
              e: {
                for (g = c.key; null !== s; ) {
                  if (s.key === g) {
                    if (
                      4 === s.tag &&
                      s.stateNode.containerInfo === c.containerInfo &&
                      s.stateNode.implementation === c.implementation
                    ) {
                      n(u, s.sibling),
                        ((s = a(s, c.children || [])).return = u),
                        (u = s);
                      break e;
                    }
                    n(u, s);
                    break;
                  }
                  t(u, s), (s = s.sibling);
                }
                ((s = uo(c, u.mode, m)).return = u), (u = s);
              }
              return l(u);
            case V:
              return i(u, s, (g = c._init)(c._payload), m);
          }
          if (eg(c))
            return (function (a, l, i, u) {
              for (
                var s = null, c = null, d = l, m = (l = 0), v = null;
                null !== d && m < i.length;
                m++
              ) {
                d.index > m ? ((v = d), (d = null)) : (v = d.sibling);
                var g = p(a, d, i[m], u);
                if (null === g) {
                  null === d && (d = v);
                  break;
                }
                e && d && null === g.alternate && t(a, d),
                  (l = o(g, l, m)),
                  null === c ? (s = g) : (c.sibling = g),
                  (c = g),
                  (d = v);
              }
              if (m === i.length) return n(a, d), ax && ay(a, m), s;
              if (null === d) {
                for (; m < i.length; m++)
                  null !== (d = f(a, i[m], u)) &&
                    ((l = o(d, l, m)),
                    null === c ? (s = d) : (c.sibling = d),
                    (c = d));
                return ax && ay(a, m), s;
              }
              for (d = r(a, d); m < i.length; m++)
                null !== (v = h(d, a, m, i[m], u)) &&
                  (e &&
                    null !== v.alternate &&
                    d.delete(null === v.key ? m : v.key),
                  (l = o(v, l, m)),
                  null === c ? (s = v) : (c.sibling = v),
                  (c = v));
              return (
                e &&
                  d.forEach(function (e) {
                    return t(a, e);
                  }),
                ax && ay(a, m),
                s
              );
            })(u, s, c, m);
          if (F(c))
            return (function (a, l, i, u) {
              var s = F(i);
              if ('function' != typeof s) throw Error(d(150));
              if (null == (i = s.call(i))) throw Error(d(151));
              for (
                var c = (s = null), m = l, v = (l = 0), g = null, y = i.next();
                null !== m && !y.done;
                v++, y = i.next()
              ) {
                m.index > v ? ((g = m), (m = null)) : (g = m.sibling);
                var b = p(a, m, y.value, u);
                if (null === b) {
                  null === m && (m = g);
                  break;
                }
                e && m && null === b.alternate && t(a, m),
                  (l = o(b, l, v)),
                  null === c ? (s = b) : (c.sibling = b),
                  (c = b),
                  (m = g);
              }
              if (y.done) return n(a, m), ax && ay(a, v), s;
              if (null === m) {
                for (; !y.done; v++, y = i.next())
                  null !== (y = f(a, y.value, u)) &&
                    ((l = o(y, l, v)),
                    null === c ? (s = y) : (c.sibling = y),
                    (c = y));
                return ax && ay(a, v), s;
              }
              for (m = r(a, m); !y.done; v++, y = i.next())
                null !== (y = h(m, a, v, y.value, u)) &&
                  (e &&
                    null !== y.alternate &&
                    m.delete(null === y.key ? v : y.key),
                  (l = o(y, l, v)),
                  null === c ? (s = y) : (c.sibling = y),
                  (c = y));
              return (
                e &&
                  m.forEach(function (e) {
                    return t(a, e);
                  }),
                ax && ay(a, v),
                s
              );
            })(u, s, c, m);
          or(u, c);
        }
        return ('string' == typeof c && '' !== c) || 'number' == typeof c
          ? ((c = '' + c),
            null !== s && 6 === s.tag
              ? (n(u, s.sibling), ((s = a(s, c)).return = u))
              : (n(u, s), ((s = ua(c, u.mode, m)).return = u)),
            l((u = s)))
          : n(u, s);
      };
    }
    var ol = oo(!0),
      oi = oo(!1),
      ou = {},
      os = r0(ou),
      oc = r0(ou),
      od = r0(ou);
    function of(e) {
      if (e === ou) throw Error(d(174));
      return e;
    }
    function op(e, t) {
      switch ((r2(od, t), r2(oc, e), r2(os, ou), (e = t.nodeType))) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : ex(null, '');
          break;
        default:
          t = ex(
            (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
            (e = e.tagName)
          );
      }
      r1(os), r2(os, t);
    }
    function oh() {
      r1(os), r1(oc), r1(od);
    }
    function om(e) {
      of(od.current);
      var t = of(os.current),
        n = ex(t, e.type);
      t !== n && (r2(oc, e), r2(os, n));
    }
    function ov(e) {
      oc.current === e && (r1(os), r1(oc));
    }
    var og = r0(0);
    function oy(e) {
      for (var t = e; null !== t; ) {
        if (13 === t.tag) {
          var n = t.memoizedState;
          if (
            null !== n &&
            (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data)
          )
            return t;
        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
          if (0 != (128 & t.flags)) return t;
        } else if (null !== t.child) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break;
        for (; null === t.sibling; ) {
          if (null === t.return || t.return === e) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    var ob = [];
    function ow() {
      for (var e = 0; e < ob.length; e++)
        ob[e]._workInProgressVersionPrimary = null;
      ob.length = 0;
    }
    var oS = R.ReactCurrentDispatcher,
      ok = R.ReactCurrentBatchConfig,
      o_ = 0,
      ox = null,
      oE = null,
      oR = null,
      oT = !1,
      oC = !1,
      oN = 0,
      oL = 0;
    function oA() {
      throw Error(d(321));
    }
    function oP(e, t) {
      if (null === t) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!nG(e[n], t[n])) return !1;
      return !0;
    }
    function oM(e, t, n, r, a, o) {
      if (
        ((o_ = o),
        (ox = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (oS.current = null === e || null === e.memoizedState ? ll : li),
        (e = n(r, a)),
        oC)
      ) {
        o = 0;
        do {
          if (((oC = !1), (oN = 0), 25 <= o)) throw Error(d(301));
          (o += 1),
            (oR = oE = null),
            (t.updateQueue = null),
            (oS.current = lu),
            (e = n(r, a));
        } while (oC);
      }
      if (
        ((oS.current = lo),
        (t = null !== oE && null !== oE.next),
        (o_ = 0),
        (oR = oE = ox = null),
        (oT = !1),
        t)
      )
        throw Error(d(300));
      return e;
    }
    function oD() {
      var e = 0 !== oN;
      return (oN = 0), e;
    }
    function oz() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return null === oR ? (ox.memoizedState = oR = e) : (oR = oR.next = e), oR;
    }
    function oU() {
      if (null === oE) {
        var e = ox.alternate;
        e = null !== e ? e.memoizedState : null;
      } else e = oE.next;
      var t = null === oR ? ox.memoizedState : oR.next;
      if (null !== t) (oR = t), (oE = e);
      else {
        if (null === e) throw Error(d(310));
        (e = {
          memoizedState: (oE = e).memoizedState,
          baseState: oE.baseState,
          baseQueue: oE.baseQueue,
          queue: oE.queue,
          next: null,
        }),
          null === oR ? (ox.memoizedState = oR = e) : (oR = oR.next = e);
      }
      return oR;
    }
    function oO(e, t) {
      return 'function' == typeof t ? t(e) : t;
    }
    function oI(e) {
      var t = oU(),
        n = t.queue;
      if (null === n) throw Error(d(311));
      n.lastRenderedReducer = e;
      var r = oE,
        a = r.baseQueue,
        o = n.pending;
      if (null !== o) {
        if (null !== a) {
          var l = a.next;
          (a.next = o.next), (o.next = l);
        }
        (r.baseQueue = a = o), (n.pending = null);
      }
      if (null !== a) {
        (o = a.next), (r = r.baseState);
        var i = (l = null),
          u = null,
          s = o;
        do {
          var c = s.lane;
          if ((o_ & c) === c)
            null !== u &&
              (u = u.next =
                {
                  lane: 0,
                  action: s.action,
                  hasEagerState: s.hasEagerState,
                  eagerState: s.eagerState,
                  next: null,
                }),
              (r = s.hasEagerState ? s.eagerState : e(r, s.action));
          else {
            var f = {
              lane: c,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            };
            null === u ? ((i = u = f), (l = r)) : (u = u.next = f),
              (ox.lanes |= c),
              (iv |= c);
          }
          s = s.next;
        } while (null !== s && s !== o);
        null === u ? (l = r) : (u.next = i),
          nG(r, t.memoizedState) || (lb = !0),
          (t.memoizedState = r),
          (t.baseState = l),
          (t.baseQueue = u),
          (n.lastRenderedState = r);
      }
      if (null !== (e = n.interleaved)) {
        a = e;
        do (o = a.lane), (ox.lanes |= o), (iv |= o), (a = a.next);
        while (a !== e);
      } else null === a && (n.lanes = 0);
      return [t.memoizedState, n.dispatch];
    }
    function oV(e) {
      var t = oU(),
        n = t.queue;
      if (null === n) throw Error(d(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
      if (null !== a) {
        n.pending = null;
        var l = (a = a.next);
        do (o = e(o, l.action)), (l = l.next);
        while (l !== a);
        nG(o, t.memoizedState) || (lb = !0),
          (t.memoizedState = o),
          null === t.baseQueue && (t.baseState = o),
          (n.lastRenderedState = o);
      }
      return [o, r];
    }
    function oj() {}
    function oB(e, t) {
      var n = ox,
        r = oU(),
        a = t(),
        o = !nG(r.memoizedState, a);
      if (
        (o && ((r.memoizedState = a), (lb = !0)),
        (r = r.queue),
        oJ(oW.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || o || (null !== oR && 1 & oR.memoizedState.tag))
      ) {
        if (
          ((n.flags |= 2048),
          oQ(9, o$.bind(null, n, r, a, t), void 0, null),
          null === iu)
        )
          throw Error(d(349));
        0 != (30 & o_) || oF(n, t, a);
      }
      return a;
    }
    function oF(e, t, n) {
      (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        null === (t = ox.updateQueue)
          ? ((t = { lastEffect: null, stores: null }),
            (ox.updateQueue = t),
            (t.stores = [e]))
          : null === (n = t.stores)
          ? (t.stores = [e])
          : n.push(e);
    }
    function o$(e, t, n, r) {
      (t.value = n), (t.getSnapshot = r), oH(t) && oq(e);
    }
    function oW(e, t, n) {
      return n(function () {
        oH(t) && oq(e);
      });
    }
    function oH(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !nG(e, n);
      } catch (e) {
        return !0;
      }
    }
    function oq(e) {
      var t = aG(e, 1);
      null !== t && iU(t, e, 1, -1);
    }
    function oK(e) {
      var t = oz();
      return (
        'function' == typeof e && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: oO,
          lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = lt.bind(null, ox, e)),
        [t.memoizedState, e]
      );
    }
    function oQ(e, t, n, r) {
      return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        null === (t = ox.updateQueue)
          ? ((t = { lastEffect: null, stores: null }),
            (ox.updateQueue = t),
            (t.lastEffect = e.next = e))
          : null === (n = t.lastEffect)
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function oG() {
      return oU().memoizedState;
    }
    function oY(e, t, n, r) {
      var a = oz();
      (ox.flags |= e),
        (a.memoizedState = oQ(1 | t, n, void 0, void 0 === r ? null : r));
    }
    function oZ(e, t, n, r) {
      var a = oU();
      r = void 0 === r ? null : r;
      var o = void 0;
      if (null !== oE) {
        var l = oE.memoizedState;
        if (((o = l.destroy), null !== r && oP(r, l.deps))) {
          a.memoizedState = oQ(t, n, o, r);
          return;
        }
      }
      (ox.flags |= e), (a.memoizedState = oQ(1 | t, n, o, r));
    }
    function oX(e, t) {
      return oY(8390656, 8, e, t);
    }
    function oJ(e, t) {
      return oZ(2048, 8, e, t);
    }
    function o0(e, t) {
      return oZ(4, 2, e, t);
    }
    function o1(e, t) {
      return oZ(4, 4, e, t);
    }
    function o2(e, t) {
      return 'function' == typeof t
        ? (t((e = e())),
          function () {
            t(null);
          })
        : null != t
        ? ((e = e()),
          (t.current = e),
          function () {
            t.current = null;
          })
        : void 0;
    }
    function o4(e, t, n) {
      return (
        (n = null != n ? n.concat([e]) : null), oZ(4, 4, o2.bind(null, t, e), n)
      );
    }
    function o3() {}
    function o5(e, t) {
      var n = oU();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      return null !== r && null !== t && oP(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
    }
    function o6(e, t) {
      var n = oU();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      return null !== r && null !== t && oP(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
    }
    function o8(e, t, n) {
      return 0 == (21 & o_)
        ? (e.baseState && ((e.baseState = !1), (lb = !0)),
          (e.memoizedState = n))
        : (nG(n, t) ||
            ((n = tb()), (ox.lanes |= n), (iv |= n), (e.baseState = !0)),
          t);
    }
    function o9(e, t) {
      var n = t_;
      (t_ = 0 !== n && 4 > n ? n : 4), e(!0);
      var r = ok.transition;
      ok.transition = {};
      try {
        e(!1), t();
      } finally {
        (t_ = n), (ok.transition = r);
      }
    }
    function o7() {
      return oU().memoizedState;
    }
    function le(e, t, n) {
      var r = iz(e);
      (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        ln(e)
          ? lr(t, n)
          : null !== (n = aQ(e, t, n, r)) && (iU(n, e, r, iD()), la(n, t, r));
    }
    function lt(e, t, n) {
      var r = iz(e),
        a = {
          lane: r,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
      if (ln(e)) lr(t, a);
      else {
        var o = e.alternate;
        if (
          0 === e.lanes &&
          (null === o || 0 === o.lanes) &&
          null !== (o = t.lastRenderedReducer)
        )
          try {
            var l = t.lastRenderedState,
              i = o(l, n);
            if (((a.hasEagerState = !0), (a.eagerState = i), nG(i, l))) {
              var u = t.interleaved;
              null === u
                ? ((a.next = a), aK(t))
                : ((a.next = u.next), (u.next = a)),
                (t.interleaved = a);
              return;
            }
          } catch (e) {
          } finally {
          }
        null !== (n = aQ(e, t, a, r)) && (iU(n, e, r, (a = iD())), la(n, t, r));
      }
    }
    function ln(e) {
      var t = e.alternate;
      return e === ox || (null !== t && t === ox);
    }
    function lr(e, t) {
      oC = oT = !0;
      var n = e.pending;
      null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
    }
    function la(e, t, n) {
      if (0 != (4194240 & n)) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), tk(e, n);
      }
    }
    var lo = {
        readContext: aH,
        useCallback: oA,
        useContext: oA,
        useEffect: oA,
        useImperativeHandle: oA,
        useInsertionEffect: oA,
        useLayoutEffect: oA,
        useMemo: oA,
        useReducer: oA,
        useRef: oA,
        useState: oA,
        useDebugValue: oA,
        useDeferredValue: oA,
        useTransition: oA,
        useMutableSource: oA,
        useSyncExternalStore: oA,
        useId: oA,
        unstable_isNewReconciler: !1,
      },
      ll = {
        readContext: aH,
        useCallback: function (e, t) {
          return (oz().memoizedState = [e, void 0 === t ? null : t]), e;
        },
        useContext: aH,
        useEffect: oX,
        useImperativeHandle: function (e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            oY(4194308, 4, o2.bind(null, t, e), n)
          );
        },
        useLayoutEffect: function (e, t) {
          return oY(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          return oY(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = oz();
          return (
            (t = void 0 === t ? null : t),
            (e = e()),
            (n.memoizedState = [e, t]),
            e
          );
        },
        useReducer: function (e, t, n) {
          var r = oz();
          return (
            (t = void 0 !== n ? n(t) : t),
            (r.memoizedState = r.baseState = t),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t,
            }),
            (r.queue = e),
            (e = e.dispatch = le.bind(null, ox, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          return (e = { current: e }), (oz().memoizedState = e);
        },
        useState: oK,
        useDebugValue: o3,
        useDeferredValue: function (e) {
          return (oz().memoizedState = e);
        },
        useTransition: function () {
          var e = oK(!1),
            t = e[0];
          return (e = o9.bind(null, e[1])), (oz().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
          var r = ox,
            a = oz();
          if (ax) {
            if (void 0 === n) throw Error(d(407));
            n = n();
          } else {
            if (((n = t()), null === iu)) throw Error(d(349));
            0 != (30 & o_) || oF(r, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            oX(oW.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            oQ(9, o$.bind(null, r, o, n, t), void 0, null),
            n
          );
        },
        useId: function () {
          var e = oz(),
            t = iu.identifierPrefix;
          if (ax) {
            var n = ag,
              r = av;
            (t =
              ':' +
              t +
              'R' +
              (n = (r & ~(1 << (32 - td(r) - 1))).toString(32) + n)),
              0 < (n = oN++) && (t += 'H' + n.toString(32)),
              (t += ':');
          } else t = ':' + t + 'r' + (n = oL++).toString(32) + ':';
          return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
      },
      li = {
        readContext: aH,
        useCallback: o5,
        useContext: aH,
        useEffect: oJ,
        useImperativeHandle: o4,
        useInsertionEffect: o0,
        useLayoutEffect: o1,
        useMemo: o6,
        useReducer: oI,
        useRef: oG,
        useState: function () {
          return oI(oO);
        },
        useDebugValue: o3,
        useDeferredValue: function (e) {
          return o8(oU(), oE.memoizedState, e);
        },
        useTransition: function () {
          return [oI(oO)[0], oU().memoizedState];
        },
        useMutableSource: oj,
        useSyncExternalStore: oB,
        useId: o7,
        unstable_isNewReconciler: !1,
      },
      lu = {
        readContext: aH,
        useCallback: o5,
        useContext: aH,
        useEffect: oJ,
        useImperativeHandle: o4,
        useInsertionEffect: o0,
        useLayoutEffect: o1,
        useMemo: o6,
        useReducer: oV,
        useRef: oG,
        useState: function () {
          return oV(oO);
        },
        useDebugValue: o3,
        useDeferredValue: function (e) {
          var t = oU();
          return null === oE
            ? (t.memoizedState = e)
            : o8(t, oE.memoizedState, e);
        },
        useTransition: function () {
          return [oV(oO)[0], oU().memoizedState];
        },
        useMutableSource: oj,
        useSyncExternalStore: oB,
        useId: o7,
        unstable_isNewReconciler: !1,
      };
    function ls(e, t) {
      try {
        var n = '',
          r = t;
        do
          (n += (function (e) {
            switch (e.tag) {
              case 5:
                return er(e.type);
              case 16:
                return er('Lazy');
              case 13:
                return er('Suspense');
              case 19:
                return er('SuspenseList');
              case 0:
              case 2:
              case 15:
                return (e = eo(e.type, !1));
              case 11:
                return (e = eo(e.type.render, !1));
              case 1:
                return (e = eo(e.type, !0));
              default:
                return '';
            }
          })(r)),
            (r = r.return);
        while (r);
        var a = n;
      } catch (e) {
        a = '\nError generating stack: ' + e.message + '\n' + e.stack;
      }
      return { value: e, source: t, stack: a, digest: null };
    }
    function lc(e, t, n) {
      return {
        value: e,
        source: null,
        stack: null != n ? n : null,
        digest: null != t ? t : null,
      };
    }
    function ld(e, t) {
      try {
        console.error(t.value);
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    var lf = 'function' == typeof WeakMap ? WeakMap : Map;
    function lp(e, t, n) {
      ((n = aJ(-1, n)).tag = 3), (n.payload = { element: null });
      var r = t.value;
      return (
        (n.callback = function () {
          ix || ((ix = !0), (iE = r)), ld(e, t);
        }),
        n
      );
    }
    function lh(e, t, n) {
      (n = aJ(-1, n)).tag = 3;
      var r = e.type.getDerivedStateFromError;
      if ('function' == typeof r) {
        var a = t.value;
        (n.payload = function () {
          return r(a);
        }),
          (n.callback = function () {
            ld(e, t);
          });
      }
      var o = e.stateNode;
      return (
        null !== o &&
          'function' == typeof o.componentDidCatch &&
          (n.callback = function () {
            ld(e, t),
              'function' != typeof r &&
                (null === iR ? (iR = new Set([this])) : iR.add(this));
            var n = t.stack;
            this.componentDidCatch(t.value, {
              componentStack: null !== n ? n : '',
            });
          }),
        n
      );
    }
    function lm(e, t, n) {
      var r = e.pingCache;
      if (null === r) {
        r = e.pingCache = new lf();
        var a = new Set();
        r.set(t, a);
      } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
      a.has(n) || (a.add(n), (e = i4.bind(null, e, t, n)), t.then(e, e));
    }
    function lv(e) {
      do {
        var t;
        if (
          ((t = 13 === e.tag) &&
            (t = null === (t = e.memoizedState) || null !== t.dehydrated),
          t)
        )
          return e;
        e = e.return;
      } while (null !== e);
      return null;
    }
    function lg(e, t, n, r, a) {
      return (
        0 == (1 & e.mode)
          ? e === t
            ? (e.flags |= 65536)
            : ((e.flags |= 128),
              (n.flags |= 131072),
              (n.flags &= -52805),
              1 === n.tag &&
                (null === n.alternate
                  ? (n.tag = 17)
                  : (((t = aJ(-1, 1)).tag = 2), a0(n, t, 1))),
              (n.lanes |= 1))
          : ((e.flags |= 65536), (e.lanes = a)),
        e
      );
    }
    var ly = R.ReactCurrentOwner,
      lb = !1;
    function lw(e, t, n, r) {
      t.child = null === e ? oi(t, null, n, r) : ol(t, e.child, n, r);
    }
    function lS(e, t, n, r, a) {
      n = n.render;
      var o = t.ref;
      return (aW(t, a),
      (r = oM(e, t, n, r, o, a)),
      (n = oD()),
      null === e || lb)
        ? (ax && n && aw(t), (t.flags |= 1), lw(e, t, r, a), t.child)
        : ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          lj(e, t, a));
    }
    function lk(e, t, n, r, a) {
      if (null === e) {
        var o = n.type;
        return 'function' != typeof o ||
          i7(o) ||
          void 0 !== o.defaultProps ||
          null !== n.compare ||
          void 0 !== n.defaultProps
          ? (((e = ut(n.type, null, r, t, t.mode, a)).ref = t.ref),
            (e.return = t),
            (t.child = e))
          : ((t.tag = 15), (t.type = o), l_(e, t, o, r, a));
      }
      if (((o = e.child), 0 == (e.lanes & a))) {
        var l = o.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : nY)(l, r) && e.ref === t.ref)
          return lj(e, t, a);
      }
      return (
        (t.flags |= 1),
        ((e = ue(o, r)).ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function l_(e, t, n, r, a) {
      if (null !== e) {
        var o = e.memoizedProps;
        if (nY(o, r) && e.ref === t.ref) {
          if (((lb = !1), (t.pendingProps = r = o), 0 == (e.lanes & a)))
            return (t.lanes = e.lanes), lj(e, t, a);
          0 != (131072 & e.flags) && (lb = !0);
        }
      }
      return lR(e, t, n, r, a);
    }
    function lx(e, t, n) {
      var r = t.pendingProps,
        a = r.children,
        o = null !== e ? e.memoizedState : null;
      if ('hidden' === r.mode) {
        if (0 == (1 & t.mode))
          (t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            r2(ip, id),
            (id |= n);
        else {
          if (0 == (1073741824 & n))
            return (
              (e = null !== o ? o.baseLanes | n : n),
              (t.lanes = t.childLanes = 1073741824),
              (t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null,
              }),
              (t.updateQueue = null),
              r2(ip, id),
              (id |= e),
              null
            );
          (t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            (r = null !== o ? o.baseLanes : n),
            r2(ip, id),
            (id |= r);
        }
      } else
        null !== o
          ? ((r = o.baseLanes | n), (t.memoizedState = null))
          : (r = n),
          r2(ip, id),
          (id |= r);
      return lw(e, t, a, n), t.child;
    }
    function lE(e, t) {
      var n = t.ref;
      ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
    }
    function lR(e, t, n, r, a) {
      var o = r9(n) ? r6 : r3.current;
      return ((o = r8(t, o)),
      aW(t, a),
      (n = oM(e, t, n, r, o, a)),
      (r = oD()),
      null === e || lb)
        ? (ax && r && aw(t), (t.flags |= 1), lw(e, t, n, a), t.child)
        : ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          lj(e, t, a));
    }
    function lT(e, t, n, r, a) {
      if (r9(n)) {
        var o = !0;
        an(t);
      } else o = !1;
      if ((aW(t, a), null === t.stateNode))
        lV(e, t), a7(t, n, r), ot(t, n, r, a), (r = !0);
      else if (null === e) {
        var l = t.stateNode,
          i = t.memoizedProps;
        l.props = i;
        var u = l.context,
          s = n.contextType;
        s =
          'object' == typeof s && null !== s
            ? aH(s)
            : r8(t, (s = r9(n) ? r6 : r3.current));
        var c = n.getDerivedStateFromProps,
          d =
            'function' == typeof c ||
            'function' == typeof l.getSnapshotBeforeUpdate;
        d ||
          ('function' != typeof l.UNSAFE_componentWillReceiveProps &&
            'function' != typeof l.componentWillReceiveProps) ||
          ((i !== r || u !== s) && oe(t, l, r, s)),
          (aY = !1);
        var f = t.memoizedState;
        (l.state = f),
          a4(t, r, l, a),
          (u = t.memoizedState),
          i !== r || f !== u || r5.current || aY
            ? ('function' == typeof c &&
                (a6(t, n, c, r), (u = t.memoizedState)),
              (i = aY || a9(t, n, i, r, f, u, s))
                ? (d ||
                    ('function' != typeof l.UNSAFE_componentWillMount &&
                      'function' != typeof l.componentWillMount) ||
                    ('function' == typeof l.componentWillMount &&
                      l.componentWillMount(),
                    'function' == typeof l.UNSAFE_componentWillMount &&
                      l.UNSAFE_componentWillMount()),
                  'function' == typeof l.componentDidMount &&
                    (t.flags |= 4194308))
                : ('function' == typeof l.componentDidMount &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = u)),
              (l.props = r),
              (l.state = u),
              (l.context = s),
              (r = i))
            : ('function' == typeof l.componentDidMount && (t.flags |= 4194308),
              (r = !1));
      } else {
        (l = t.stateNode),
          aX(e, t),
          (i = t.memoizedProps),
          (s = t.type === t.elementType ? i : aU(t.type, i)),
          (l.props = s),
          (d = t.pendingProps),
          (f = l.context),
          (u =
            'object' == typeof (u = n.contextType) && null !== u
              ? aH(u)
              : r8(t, (u = r9(n) ? r6 : r3.current)));
        var p = n.getDerivedStateFromProps;
        (c =
          'function' == typeof p ||
          'function' == typeof l.getSnapshotBeforeUpdate) ||
          ('function' != typeof l.UNSAFE_componentWillReceiveProps &&
            'function' != typeof l.componentWillReceiveProps) ||
          ((i !== d || f !== u) && oe(t, l, r, u)),
          (aY = !1),
          (f = t.memoizedState),
          (l.state = f),
          a4(t, r, l, a);
        var h = t.memoizedState;
        i !== d || f !== h || r5.current || aY
          ? ('function' == typeof p && (a6(t, n, p, r), (h = t.memoizedState)),
            (s = aY || a9(t, n, s, r, f, h, u) || !1)
              ? (c ||
                  ('function' != typeof l.UNSAFE_componentWillUpdate &&
                    'function' != typeof l.componentWillUpdate) ||
                  ('function' == typeof l.componentWillUpdate &&
                    l.componentWillUpdate(r, h, u),
                  'function' == typeof l.UNSAFE_componentWillUpdate &&
                    l.UNSAFE_componentWillUpdate(r, h, u)),
                'function' == typeof l.componentDidUpdate && (t.flags |= 4),
                'function' == typeof l.getSnapshotBeforeUpdate &&
                  (t.flags |= 1024))
              : ('function' != typeof l.componentDidUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                'function' != typeof l.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = h)),
            (l.props = r),
            (l.state = h),
            (l.context = u),
            (r = s))
          : ('function' != typeof l.componentDidUpdate ||
              (i === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            'function' != typeof l.getSnapshotBeforeUpdate ||
              (i === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return lC(e, t, n, r, o, a);
    }
    function lC(e, t, n, r, a, o) {
      lE(e, t);
      var l = 0 != (128 & t.flags);
      if (!r && !l) return a && ar(t, n, !1), lj(e, t, o);
      (r = t.stateNode), (ly.current = t);
      var i =
        l && 'function' != typeof n.getDerivedStateFromError
          ? null
          : r.render();
      return (
        (t.flags |= 1),
        null !== e && l
          ? ((t.child = ol(t, e.child, null, o)), (t.child = ol(t, null, i, o)))
          : lw(e, t, i, o),
        (t.memoizedState = r.state),
        a && ar(t, n, !0),
        t.child
      );
    }
    function lN(e) {
      var t = e.stateNode;
      t.pendingContext
        ? ae(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && ae(e, t.context, !1),
        op(e, t.containerInfo);
    }
    function lL(e, t, n, r, a) {
      return aM(), aD(a), (t.flags |= 256), lw(e, t, n, r), t.child;
    }
    var lA = { dehydrated: null, treeContext: null, retryLane: 0 };
    function lP(e) {
      return { baseLanes: e, cachePool: null, transitions: null };
    }
    function lM(e, t, n) {
      var r,
        a = t.pendingProps,
        o = og.current,
        l = !1,
        i = 0 != (128 & t.flags);
      if (
        ((r = i) ||
          (r = (null === e || null !== e.memoizedState) && 0 != (2 & o)),
        r
          ? ((l = !0), (t.flags &= -129))
          : (null === e || null !== e.memoizedState) && (o |= 1),
        r2(og, 1 & o),
        null === e)
      )
        return (aN(t),
        null !== (e = t.memoizedState) && null !== (e = e.dehydrated))
          ? (0 == (1 & t.mode)
              ? (t.lanes = 1)
              : '$!' === e.data
              ? (t.lanes = 8)
              : (t.lanes = 1073741824),
            null)
          : ((i = a.children),
            (e = a.fallback),
            l
              ? ((a = t.mode),
                (l = t.child),
                (i = { mode: 'hidden', children: i }),
                0 == (1 & a) && null !== l
                  ? ((l.childLanes = 0), (l.pendingProps = i))
                  : (l = ur(i, a, 0, null)),
                (e = un(e, a, n, null)),
                (l.return = t),
                (e.return = t),
                (l.sibling = e),
                (t.child = l),
                (t.child.memoizedState = lP(n)),
                (t.memoizedState = lA),
                e)
              : lD(t, i));
      if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
        return (function (e, t, n, r, a, o, l) {
          if (n)
            return 256 & t.flags
              ? ((t.flags &= -257), lz(e, t, l, (r = lc(Error(d(422))))))
              : null !== t.memoizedState
              ? ((t.child = e.child), (t.flags |= 128), null)
              : ((o = r.fallback),
                (a = t.mode),
                (r = ur({ mode: 'visible', children: r.children }, a, 0, null)),
                (o = un(o, a, l, null)),
                (o.flags |= 2),
                (r.return = t),
                (o.return = t),
                (r.sibling = o),
                (t.child = r),
                0 != (1 & t.mode) && ol(t, e.child, null, l),
                (t.child.memoizedState = lP(l)),
                (t.memoizedState = lA),
                o);
          if (0 == (1 & t.mode)) return lz(e, t, l, null);
          if ('$!' === a.data) {
            if ((r = a.nextSibling && a.nextSibling.dataset)) var i = r.dgst;
            return (
              (r = i), lz(e, t, l, (r = lc((o = Error(d(419))), r, void 0)))
            );
          }
          if (((i = 0 != (l & e.childLanes)), lb || i)) {
            if (null !== (r = iu)) {
              switch (l & -l) {
                case 4:
                  a = 2;
                  break;
                case 16:
                  a = 8;
                  break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                  a = 32;
                  break;
                case 536870912:
                  a = 268435456;
                  break;
                default:
                  a = 0;
              }
              0 !== (a = 0 != (a & (r.suspendedLanes | l)) ? 0 : a) &&
                a !== o.retryLane &&
                ((o.retryLane = a), aG(e, a), iU(r, e, a, -1));
            }
            return iG(), lz(e, t, l, (r = lc(Error(d(421)))));
          }
          return '$?' === a.data
            ? ((t.flags |= 128),
              (t.child = e.child),
              (t = i5.bind(null, e)),
              (a._reactRetry = t),
              null)
            : ((e = o.treeContext),
              (a_ = rV(a.nextSibling)),
              (ak = t),
              (ax = !0),
              (aE = null),
              null !== e &&
                ((ap[ah++] = av),
                (ap[ah++] = ag),
                (ap[ah++] = am),
                (av = e.id),
                (ag = e.overflow),
                (am = t)),
              (t = lD(t, r.children)),
              (t.flags |= 4096),
              t);
        })(e, t, i, a, r, o, n);
      if (l) {
        (l = a.fallback), (i = t.mode), (r = (o = e.child).sibling);
        var u = { mode: 'hidden', children: a.children };
        return (
          0 == (1 & i) && t.child !== o
            ? (((a = t.child).childLanes = 0),
              (a.pendingProps = u),
              (t.deletions = null))
            : ((a = ue(o, u)).subtreeFlags = 14680064 & o.subtreeFlags),
          null !== r
            ? (l = ue(r, l))
            : ((l = un(l, i, n, null)), (l.flags |= 2)),
          (l.return = t),
          (a.return = t),
          (a.sibling = l),
          (t.child = a),
          (a = l),
          (l = t.child),
          (i =
            null === (i = e.child.memoizedState)
              ? lP(n)
              : {
                  baseLanes: i.baseLanes | n,
                  cachePool: null,
                  transitions: i.transitions,
                }),
          (l.memoizedState = i),
          (l.childLanes = e.childLanes & ~n),
          (t.memoizedState = lA),
          a
        );
      }
      return (
        (e = (l = e.child).sibling),
        (a = ue(l, { mode: 'visible', children: a.children })),
        0 == (1 & t.mode) && (a.lanes = n),
        (a.return = t),
        (a.sibling = null),
        null !== e &&
          (null === (n = t.deletions)
            ? ((t.deletions = [e]), (t.flags |= 16))
            : n.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a
      );
    }
    function lD(e, t) {
      return (
        ((t = ur({ mode: 'visible', children: t }, e.mode, 0, null)).return =
          e),
        (e.child = t)
      );
    }
    function lz(e, t, n, r) {
      return (
        null !== r && aD(r),
        ol(t, e.child, null, n),
        (e = lD(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function lU(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      null !== r && (r.lanes |= t), a$(e.return, t, n);
    }
    function lO(e, t, n, r, a) {
      var o = e.memoizedState;
      null === o
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = a));
    }
    function lI(e, t, n) {
      var r = t.pendingProps,
        a = r.revealOrder,
        o = r.tail;
      if ((lw(e, t, r.children, n), 0 != (2 & (r = og.current))))
        (r = (1 & r) | 2), (t.flags |= 128);
      else {
        if (null !== e && 0 != (128 & e.flags))
          e: for (e = t.child; null !== e; ) {
            if (13 === e.tag) null !== e.memoizedState && lU(e, n, t);
            else if (19 === e.tag) lU(e, n, t);
            else if (null !== e.child) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === t) break e;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
        r &= 1;
      }
      if ((r2(og, r), 0 == (1 & t.mode))) t.memoizedState = null;
      else
        switch (a) {
          case 'forwards':
            for (a = null, n = t.child; null !== n; )
              null !== (e = n.alternate) && null === oy(e) && (a = n),
                (n = n.sibling);
            null === (n = a)
              ? ((a = t.child), (t.child = null))
              : ((a = n.sibling), (n.sibling = null)),
              lO(t, !1, a, n, o);
            break;
          case 'backwards':
            for (n = null, a = t.child, t.child = null; null !== a; ) {
              if (null !== (e = a.alternate) && null === oy(e)) {
                t.child = a;
                break;
              }
              (e = a.sibling), (a.sibling = n), (n = a), (a = e);
            }
            lO(t, !0, n, null, o);
            break;
          case 'together':
            lO(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function lV(e, t) {
      0 == (1 & t.mode) &&
        null !== e &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
    }
    function lj(e, t, n) {
      if (
        (null !== e && (t.dependencies = e.dependencies),
        (iv |= t.lanes),
        0 == (n & t.childLanes))
      )
        return null;
      if (null !== e && t.child !== e.child) throw Error(d(153));
      if (null !== t.child) {
        for (
          n = ue((e = t.child), e.pendingProps), t.child = n, n.return = t;
          null !== e.sibling;

        )
          (e = e.sibling), ((n = n.sibling = ue(e, e.pendingProps)).return = t);
        n.sibling = null;
      }
      return t.child;
    }
    function lB(e, t) {
      if (!ax)
        switch (e.tailMode) {
          case 'hidden':
            t = e.tail;
            for (var n = null; null !== t; )
              null !== t.alternate && (n = t), (t = t.sibling);
            null === n ? (e.tail = null) : (n.sibling = null);
            break;
          case 'collapsed':
            n = e.tail;
            for (var r = null; null !== n; )
              null !== n.alternate && (r = n), (n = n.sibling);
            null === r
              ? t || null === e.tail
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function lF(e) {
      var t = null !== e.alternate && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var a = e.child; null !== a; )
          (n |= a.lanes | a.childLanes),
            (r |= 14680064 & a.subtreeFlags),
            (r |= 14680064 & a.flags),
            (a.return = e),
            (a = a.sibling);
      else
        for (a = e.child; null !== a; )
          (n |= a.lanes | a.childLanes),
            (r |= a.subtreeFlags),
            (r |= a.flags),
            (a.return = e),
            (a = a.sibling);
      return (e.subtreeFlags |= r), (e.childLanes = n), t;
    }
    (a = function (e, t) {
      for (var n = t.child; null !== n; ) {
        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
        else if (4 !== n.tag && null !== n.child) {
          (n.child.return = n), (n = n.child);
          continue;
        }
        if (n === t) break;
        for (; null === n.sibling; ) {
          if (null === n.return || n.return === t) return;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }),
      (o = function () {}),
      (l = function (e, t, n, r) {
        var a = e.memoizedProps;
        if (a !== r) {
          (e = t.stateNode), of(os.current);
          var o,
            l = null;
          switch (n) {
            case 'input':
              (a = ed(e, a)), (r = ed(e, r)), (l = []);
              break;
            case 'select':
              (a = en({}, a, { value: void 0 })),
                (r = en({}, r, { value: void 0 })),
                (l = []);
              break;
            case 'textarea':
              (a = eb(e, a)), (r = eb(e, r)), (l = []);
              break;
            default:
              'function' != typeof a.onClick &&
                'function' == typeof r.onClick &&
                (e.onclick = rN);
          }
          for (s in (eD(n, r), (n = null), a))
            if (!r.hasOwnProperty(s) && a.hasOwnProperty(s) && null != a[s]) {
              if ('style' === s) {
                var i = a[s];
                for (o in i)
                  i.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
              } else
                'dangerouslySetInnerHTML' !== s &&
                  'children' !== s &&
                  'suppressContentEditableWarning' !== s &&
                  'suppressHydrationWarning' !== s &&
                  'autoFocus' !== s &&
                  (p.hasOwnProperty(s)
                    ? l || (l = [])
                    : (l = l || []).push(s, null));
            }
          for (s in r) {
            var u = r[s];
            if (
              ((i = null != a ? a[s] : void 0),
              r.hasOwnProperty(s) && u !== i && (null != u || null != i))
            ) {
              if ('style' === s) {
                if (i) {
                  for (o in i)
                    !i.hasOwnProperty(o) ||
                      (u && u.hasOwnProperty(o)) ||
                      (n || (n = {}), (n[o] = ''));
                  for (o in u)
                    u.hasOwnProperty(o) &&
                      i[o] !== u[o] &&
                      (n || (n = {}), (n[o] = u[o]));
                } else n || (l || (l = []), l.push(s, n)), (n = u);
              } else
                'dangerouslySetInnerHTML' === s
                  ? ((u = u ? u.__html : void 0),
                    (i = i ? i.__html : void 0),
                    null != u && i !== u && (l = l || []).push(s, u))
                  : 'children' === s
                  ? ('string' != typeof u && 'number' != typeof u) ||
                    (l = l || []).push(s, '' + u)
                  : 'suppressContentEditableWarning' !== s &&
                    'suppressHydrationWarning' !== s &&
                    (p.hasOwnProperty(s)
                      ? (null != u && 'onScroll' === s && rm('scroll', e),
                        l || i === u || (l = []))
                      : (l = l || []).push(s, u));
            }
          }
          n && (l = l || []).push('style', n);
          var s = l;
          (t.updateQueue = s) && (t.flags |= 4);
        }
      }),
      (i = function (e, t, n, r) {
        n !== r && (t.flags |= 4);
      });
    var l$ = !1,
      lW = !1,
      lH = 'function' == typeof WeakSet ? WeakSet : Set,
      lq = null;
    function lK(e, t) {
      var n = e.ref;
      if (null !== n) {
        if ('function' == typeof n)
          try {
            n(null);
          } catch (n) {
            i2(e, t, n);
          }
        else n.current = null;
      }
    }
    function lQ(e, t, n) {
      try {
        n();
      } catch (n) {
        i2(e, t, n);
      }
    }
    var lG = !1;
    function lY(e, t, n) {
      var r = t.updateQueue;
      if (null !== (r = null !== r ? r.lastEffect : null)) {
        var a = (r = r.next);
        do {
          if ((a.tag & e) === e) {
            var o = a.destroy;
            (a.destroy = void 0), void 0 !== o && lQ(t, n, o);
          }
          a = a.next;
        } while (a !== r);
      }
    }
    function lZ(e, t) {
      if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
        var n = (t = t.next);
        do {
          if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
          }
          n = n.next;
        } while (n !== t);
      }
    }
    function lX(e) {
      var t = e.ref;
      if (null !== t) {
        var n = e.stateNode;
        e.tag, (e = n), 'function' == typeof t ? t(e) : (t.current = e);
      }
    }
    function lJ(e) {
      return 5 === e.tag || 3 === e.tag || 4 === e.tag;
    }
    function l0(e) {
      e: for (;;) {
        for (; null === e.sibling; ) {
          if (null === e.return || lJ(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

        ) {
          if (2 & e.flags || null === e.child || 4 === e.tag) continue e;
          (e.child.return = e), (e = e.child);
        }
        if (!(2 & e.flags)) return e.stateNode;
      }
    }
    var l1 = null,
      l2 = !1;
    function l4(e, t, n) {
      for (n = n.child; null !== n; ) l3(e, t, n), (n = n.sibling);
    }
    function l3(e, t, n) {
      if (tc && 'function' == typeof tc.onCommitFiberUnmount)
        try {
          tc.onCommitFiberUnmount(ts, n);
        } catch (e) {}
      switch (n.tag) {
        case 5:
          lW || lK(n, t);
        case 6:
          var r = l1,
            a = l2;
          (l1 = null),
            l4(e, t, n),
            (l1 = r),
            (l2 = a),
            null !== l1 &&
              (l2
                ? ((e = l1),
                  (n = n.stateNode),
                  8 === e.nodeType
                    ? e.parentNode.removeChild(n)
                    : e.removeChild(n))
                : l1.removeChild(n.stateNode));
          break;
        case 18:
          null !== l1 &&
            (l2
              ? ((e = l1),
                (n = n.stateNode),
                8 === e.nodeType
                  ? rI(e.parentNode, n)
                  : 1 === e.nodeType && rI(e, n),
                tq(e))
              : rI(l1, n.stateNode));
          break;
        case 4:
          (r = l1),
            (a = l2),
            (l1 = n.stateNode.containerInfo),
            (l2 = !0),
            l4(e, t, n),
            (l1 = r),
            (l2 = a);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (
            !lW &&
            null !== (r = n.updateQueue) &&
            null !== (r = r.lastEffect)
          ) {
            a = r = r.next;
            do {
              var o = a,
                l = o.destroy;
              (o = o.tag),
                void 0 !== l &&
                  (0 != (2 & o) ? lQ(n, t, l) : 0 != (4 & o) && lQ(n, t, l)),
                (a = a.next);
            } while (a !== r);
          }
          l4(e, t, n);
          break;
        case 1:
          if (
            !lW &&
            (lK(n, t),
            'function' == typeof (r = n.stateNode).componentWillUnmount)
          )
            try {
              (r.props = n.memoizedProps),
                (r.state = n.memoizedState),
                r.componentWillUnmount();
            } catch (e) {
              i2(n, t, e);
            }
          l4(e, t, n);
          break;
        case 21:
        default:
          l4(e, t, n);
          break;
        case 22:
          1 & n.mode
            ? ((lW = (r = lW) || null !== n.memoizedState),
              l4(e, t, n),
              (lW = r))
            : l4(e, t, n);
      }
    }
    function l5(e) {
      var t = e.updateQueue;
      if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        null === n && (n = e.stateNode = new lH()),
          t.forEach(function (t) {
            var r = i6.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          });
      }
    }
    function l6(e, t) {
      var n = t.deletions;
      if (null !== n)
        for (var r = 0; r < n.length; r++) {
          var a = n[r];
          try {
            var o = t,
              l = o;
            e: for (; null !== l; ) {
              switch (l.tag) {
                case 5:
                  (l1 = l.stateNode), (l2 = !1);
                  break e;
                case 3:
                case 4:
                  (l1 = l.stateNode.containerInfo), (l2 = !0);
                  break e;
              }
              l = l.return;
            }
            if (null === l1) throw Error(d(160));
            l3(e, o, a), (l1 = null), (l2 = !1);
            var i = a.alternate;
            null !== i && (i.return = null), (a.return = null);
          } catch (e) {
            i2(a, t, e);
          }
        }
      if (12854 & t.subtreeFlags)
        for (t = t.child; null !== t; ) l8(t, e), (t = t.sibling);
    }
    function l8(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ((l6(t, e), l9(e), 4 & r)) {
            try {
              lY(3, e, e.return), lZ(3, e);
            } catch (t) {
              i2(e, e.return, t);
            }
            try {
              lY(5, e, e.return);
            } catch (t) {
              i2(e, e.return, t);
            }
          }
          break;
        case 1:
          l6(t, e), l9(e), 512 & r && null !== n && lK(n, n.return);
          break;
        case 5:
          if (
            (l6(t, e),
            l9(e),
            512 & r && null !== n && lK(n, n.return),
            32 & e.flags)
          ) {
            var a = e.stateNode;
            try {
              eC(a, '');
            } catch (t) {
              i2(e, e.return, t);
            }
          }
          if (4 & r && null != (a = e.stateNode)) {
            var o = e.memoizedProps,
              l = null !== n ? n.memoizedProps : o,
              i = e.type,
              u = e.updateQueue;
            if (((e.updateQueue = null), null !== u))
              try {
                'input' === i &&
                  'radio' === o.type &&
                  null != o.name &&
                  ep(a, o),
                  ez(i, l);
                var s = ez(i, o);
                for (l = 0; l < u.length; l += 2) {
                  var c = u[l],
                    f = u[l + 1];
                  'style' === c
                    ? eP(a, f)
                    : 'dangerouslySetInnerHTML' === c
                    ? eT(a, f)
                    : 'children' === c
                    ? eC(a, f)
                    : E(a, c, f, s);
                }
                switch (i) {
                  case 'input':
                    eh(a, o);
                    break;
                  case 'textarea':
                    eS(a, o);
                    break;
                  case 'select':
                    var p = a._wrapperState.wasMultiple;
                    a._wrapperState.wasMultiple = !!o.multiple;
                    var h = o.value;
                    null != h
                      ? ey(a, !!o.multiple, h, !1)
                      : !!o.multiple !== p &&
                        (null != o.defaultValue
                          ? ey(a, !!o.multiple, o.defaultValue, !0)
                          : ey(a, !!o.multiple, o.multiple ? [] : '', !1));
                }
                a[r$] = o;
              } catch (t) {
                i2(e, e.return, t);
              }
          }
          break;
        case 6:
          if ((l6(t, e), l9(e), 4 & r)) {
            if (null === e.stateNode) throw Error(d(162));
            (a = e.stateNode), (o = e.memoizedProps);
            try {
              a.nodeValue = o;
            } catch (t) {
              i2(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            (l6(t, e),
            l9(e),
            4 & r && null !== n && n.memoizedState.isDehydrated)
          )
            try {
              tq(t.containerInfo);
            } catch (t) {
              i2(e, e.return, t);
            }
          break;
        case 4:
        default:
          l6(t, e), l9(e);
          break;
        case 13:
          l6(t, e),
            l9(e),
            8192 & (a = e.child).flags &&
              ((o = null !== a.memoizedState),
              (a.stateNode.isHidden = o),
              o &&
                (null === a.alternate || null === a.alternate.memoizedState) &&
                (iS = tn())),
            4 & r && l5(e);
          break;
        case 22:
          if (
            ((c = null !== n && null !== n.memoizedState),
            1 & e.mode ? ((lW = (s = lW) || c), l6(t, e), (lW = s)) : l6(t, e),
            l9(e),
            8192 & r)
          ) {
            if (
              ((s = null !== e.memoizedState),
              (e.stateNode.isHidden = s) && !c && 0 != (1 & e.mode))
            )
              for (lq = e, c = e.child; null !== c; ) {
                for (f = lq = c; null !== lq; ) {
                  switch (((h = (p = lq).child), p.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      lY(4, p, p.return);
                      break;
                    case 1:
                      lK(p, p.return);
                      var m = p.stateNode;
                      if ('function' == typeof m.componentWillUnmount) {
                        (r = p), (n = p.return);
                        try {
                          (t = r),
                            (m.props = t.memoizedProps),
                            (m.state = t.memoizedState),
                            m.componentWillUnmount();
                        } catch (e) {
                          i2(r, n, e);
                        }
                      }
                      break;
                    case 5:
                      lK(p, p.return);
                      break;
                    case 22:
                      if (null !== p.memoizedState) {
                        ie(f);
                        continue;
                      }
                  }
                  null !== h ? ((h.return = p), (lq = h)) : ie(f);
                }
                c = c.sibling;
              }
            e: for (c = null, f = e; ; ) {
              if (5 === f.tag) {
                if (null === c) {
                  c = f;
                  try {
                    (a = f.stateNode),
                      s
                        ? ((o = a.style),
                          'function' == typeof o.setProperty
                            ? o.setProperty('display', 'none', 'important')
                            : (o.display = 'none'))
                        : ((i = f.stateNode),
                          (l =
                            null != (u = f.memoizedProps.style) &&
                            u.hasOwnProperty('display')
                              ? u.display
                              : null),
                          (i.style.display = eA('display', l)));
                  } catch (t) {
                    i2(e, e.return, t);
                  }
                }
              } else if (6 === f.tag) {
                if (null === c)
                  try {
                    f.stateNode.nodeValue = s ? '' : f.memoizedProps;
                  } catch (t) {
                    i2(e, e.return, t);
                  }
              } else if (
                ((22 !== f.tag && 23 !== f.tag) ||
                  null === f.memoizedState ||
                  f === e) &&
                null !== f.child
              ) {
                (f.child.return = f), (f = f.child);
                continue;
              }
              if (f === e) break;
              for (; null === f.sibling; ) {
                if (null === f.return || f.return === e) break e;
                c === f && (c = null), (f = f.return);
              }
              c === f && (c = null),
                (f.sibling.return = f.return),
                (f = f.sibling);
            }
          }
          break;
        case 19:
          l6(t, e), l9(e), 4 & r && l5(e);
        case 21:
      }
    }
    function l9(e) {
      var t = e.flags;
      if (2 & t) {
        try {
          e: {
            for (var n = e.return; null !== n; ) {
              if (lJ(n)) {
                var r = n;
                break e;
              }
              n = n.return;
            }
            throw Error(d(160));
          }
          switch (r.tag) {
            case 5:
              var a = r.stateNode;
              32 & r.flags && (eC(a, ''), (r.flags &= -33));
              var o = l0(e);
              !(function e(t, n, r) {
                var a = t.tag;
                if (5 === a || 6 === a)
                  (t = t.stateNode),
                    n ? r.insertBefore(t, n) : r.appendChild(t);
                else if (4 !== a && null !== (t = t.child))
                  for (e(t, n, r), t = t.sibling; null !== t; )
                    e(t, n, r), (t = t.sibling);
              })(e, o, a);
              break;
            case 3:
            case 4:
              var l = r.stateNode.containerInfo,
                i = l0(e);
              !(function e(t, n, r) {
                var a = t.tag;
                if (5 === a || 6 === a)
                  (t = t.stateNode),
                    n
                      ? 8 === r.nodeType
                        ? r.parentNode.insertBefore(t, n)
                        : r.insertBefore(t, n)
                      : (8 === r.nodeType
                          ? (n = r.parentNode).insertBefore(t, r)
                          : (n = r).appendChild(t),
                        null != (r = r._reactRootContainer) ||
                          null !== n.onclick ||
                          (n.onclick = rN));
                else if (4 !== a && null !== (t = t.child))
                  for (e(t, n, r), t = t.sibling; null !== t; )
                    e(t, n, r), (t = t.sibling);
              })(e, i, l);
              break;
            default:
              throw Error(d(161));
          }
        } catch (t) {
          i2(e, e.return, t);
        }
        e.flags &= -3;
      }
      4096 & t && (e.flags &= -4097);
    }
    function l7(e) {
      for (; null !== lq; ) {
        var t = lq;
        if (0 != (8772 & t.flags)) {
          var n = t.alternate;
          try {
            if (0 != (8772 & t.flags))
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  lW || lZ(5, t);
                  break;
                case 1:
                  var r = t.stateNode;
                  if (4 & t.flags && !lW) {
                    if (null === n) r.componentDidMount();
                    else {
                      var a =
                        t.elementType === t.type
                          ? n.memoizedProps
                          : aU(t.type, n.memoizedProps);
                      r.componentDidUpdate(
                        a,
                        n.memoizedState,
                        r.__reactInternalSnapshotBeforeUpdate
                      );
                    }
                  }
                  var o = t.updateQueue;
                  null !== o && a3(t, o, r);
                  break;
                case 3:
                  var l = t.updateQueue;
                  if (null !== l) {
                    if (((n = null), null !== t.child))
                      switch (t.child.tag) {
                        case 5:
                        case 1:
                          n = t.child.stateNode;
                      }
                    a3(t, l, n);
                  }
                  break;
                case 5:
                  var i = t.stateNode;
                  if (null === n && 4 & t.flags) {
                    n = i;
                    var u = t.memoizedProps;
                    switch (t.type) {
                      case 'button':
                      case 'input':
                      case 'select':
                      case 'textarea':
                        u.autoFocus && n.focus();
                        break;
                      case 'img':
                        u.src && (n.src = u.src);
                    }
                  }
                  break;
                case 6:
                case 4:
                case 12:
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                case 13:
                  if (null === t.memoizedState) {
                    var s = t.alternate;
                    if (null !== s) {
                      var c = s.memoizedState;
                      if (null !== c) {
                        var f = c.dehydrated;
                        null !== f && tq(f);
                      }
                    }
                  }
                  break;
                default:
                  throw Error(d(163));
              }
            lW || (512 & t.flags && lX(t));
          } catch (e) {
            i2(t, t.return, e);
          }
        }
        if (t === e) {
          lq = null;
          break;
        }
        if (null !== (n = t.sibling)) {
          (n.return = t.return), (lq = n);
          break;
        }
        lq = t.return;
      }
    }
    function ie(e) {
      for (; null !== lq; ) {
        var t = lq;
        if (t === e) {
          lq = null;
          break;
        }
        var n = t.sibling;
        if (null !== n) {
          (n.return = t.return), (lq = n);
          break;
        }
        lq = t.return;
      }
    }
    function it(e) {
      for (; null !== lq; ) {
        var t = lq;
        try {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var n = t.return;
              try {
                lZ(4, t);
              } catch (e) {
                i2(t, n, e);
              }
              break;
            case 1:
              var r = t.stateNode;
              if ('function' == typeof r.componentDidMount) {
                var a = t.return;
                try {
                  r.componentDidMount();
                } catch (e) {
                  i2(t, a, e);
                }
              }
              var o = t.return;
              try {
                lX(t);
              } catch (e) {
                i2(t, o, e);
              }
              break;
            case 5:
              var l = t.return;
              try {
                lX(t);
              } catch (e) {
                i2(t, l, e);
              }
          }
        } catch (e) {
          i2(t, t.return, e);
        }
        if (t === e) {
          lq = null;
          break;
        }
        var i = t.sibling;
        if (null !== i) {
          (i.return = t.return), (lq = i);
          break;
        }
        lq = t.return;
      }
    }
    var ir = Math.ceil,
      ia = R.ReactCurrentDispatcher,
      io = R.ReactCurrentOwner,
      il = R.ReactCurrentBatchConfig,
      ii = 0,
      iu = null,
      is = null,
      ic = 0,
      id = 0,
      ip = r0(0),
      ih = 0,
      im = null,
      iv = 0,
      ig = 0,
      iy = 0,
      ib = null,
      iw = null,
      iS = 0,
      ik = 1 / 0,
      i_ = null,
      ix = !1,
      iE = null,
      iR = null,
      iT = !1,
      iC = null,
      iN = 0,
      iL = 0,
      iA = null,
      iP = -1,
      iM = 0;
    function iD() {
      return 0 != (6 & ii) ? tn() : -1 !== iP ? iP : (iP = tn());
    }
    function iz(e) {
      return 0 == (1 & e.mode)
        ? 1
        : 0 != (2 & ii) && 0 !== ic
        ? ic & -ic
        : null !== az.transition
        ? (0 === iM && (iM = tb()), iM)
        : 0 !== (e = t_)
        ? e
        : (e = void 0 === (e = window.event) ? 16 : t0(e.type));
    }
    function iU(e, t, n, r) {
      if (50 < iL) throw ((iL = 0), (iA = null), Error(d(185)));
      tS(e, n, r),
        (0 == (2 & ii) || e !== iu) &&
          (e === iu && (0 == (2 & ii) && (ig |= n), 4 === ih && iB(e, ic)),
          iO(e, r),
          1 === n &&
            0 === ii &&
            0 == (1 & t.mode) &&
            ((ik = tn() + 500), ao && au()));
    }
    function iO(e, t) {
      var n,
        r,
        a,
        o = e.callbackNode;
      !(function (e, t) {
        for (
          var n = e.suspendedLanes,
            r = e.pingedLanes,
            a = e.expirationTimes,
            o = e.pendingLanes;
          0 < o;

        ) {
          var l = 31 - td(o),
            i = 1 << l,
            u = a[l];
          -1 === u
            ? (0 == (i & n) || 0 != (i & r)) &&
              (a[l] = (function (e, t) {
                switch (e) {
                  case 1:
                  case 2:
                  case 4:
                    return t + 250;
                  case 8:
                  case 16:
                  case 32:
                  case 64:
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                    return t + 5e3;
                  default:
                    return -1;
                }
              })(i, t))
            : u <= t && (e.expiredLanes |= i),
            (o &= ~i);
        }
      })(e, t);
      var l = tg(e, e === iu ? ic : 0);
      if (0 === l)
        null !== o && e7(o), (e.callbackNode = null), (e.callbackPriority = 0);
      else if (((t = l & -l), e.callbackPriority !== t)) {
        if ((null != o && e7(o), 1 === t))
          0 === e.tag
            ? ((a = iF.bind(null, e)), (ao = !0), ai(a))
            : ai(iF.bind(null, e)),
            rU(function () {
              0 == (6 & ii) && au();
            }),
            (o = null);
        else {
          switch (tx(l)) {
            case 1:
              o = ta;
              break;
            case 4:
              o = to;
              break;
            case 16:
            default:
              o = tl;
              break;
            case 536870912:
              o = tu;
          }
          o = e9(o, iI.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = o);
      }
    }
    function iI(e, t) {
      if (((iP = -1), (iM = 0), 0 != (6 & ii))) throw Error(d(327));
      var n = e.callbackNode;
      if (i0() && e.callbackNode !== n) return null;
      var r = tg(e, e === iu ? ic : 0);
      if (0 === r) return null;
      if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = iY(e, r);
      else {
        t = r;
        var a = ii;
        ii |= 2;
        var o = iQ();
        for (
          (iu !== e || ic !== t) && ((i_ = null), (ik = tn() + 500), iq(e, t));
          ;

        )
          try {
            (function () {
              for (; null !== is && !te(); ) iZ(is);
            })();
            break;
          } catch (t) {
            iK(e, t);
          }
        aB(),
          (ia.current = o),
          (ii = a),
          null !== is ? (t = 0) : ((iu = null), (ic = 0), (t = ih));
      }
      if (0 !== t) {
        if (
          (2 === t && 0 !== (a = ty(e)) && ((r = a), (t = iV(e, a))), 1 === t)
        )
          throw ((n = im), iq(e, 0), iB(e, r), iO(e, tn()), n);
        if (6 === t) iB(e, r);
        else {
          if (
            ((a = e.current.alternate),
            0 == (30 & r) &&
              !(function (e) {
                for (var t = e; ; ) {
                  if (16384 & t.flags) {
                    var n = t.updateQueue;
                    if (null !== n && null !== (n = n.stores))
                      for (var r = 0; r < n.length; r++) {
                        var a = n[r],
                          o = a.getSnapshot;
                        a = a.value;
                        try {
                          if (!nG(o(), a)) return !1;
                        } catch (e) {
                          return !1;
                        }
                      }
                  }
                  if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                    (n.return = t), (t = n);
                  else {
                    if (t === e) break;
                    for (; null === t.sibling; ) {
                      if (null === t.return || t.return === e) return !0;
                      t = t.return;
                    }
                    (t.sibling.return = t.return), (t = t.sibling);
                  }
                }
                return !0;
              })(a) &&
              (2 === (t = iY(e, r)) &&
                0 !== (o = ty(e)) &&
                ((r = o), (t = iV(e, o))),
              1 === t))
          )
            throw ((n = im), iq(e, 0), iB(e, r), iO(e, tn()), n);
          switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
            case 0:
            case 1:
              throw Error(d(345));
            case 2:
            case 5:
              iJ(e, iw, i_);
              break;
            case 3:
              if (
                (iB(e, r), (130023424 & r) === r && 10 < (t = iS + 500 - tn()))
              ) {
                if (0 !== tg(e, 0)) break;
                if (((a = e.suspendedLanes) & r) !== r) {
                  iD(), (e.pingedLanes |= e.suspendedLanes & a);
                  break;
                }
                e.timeoutHandle = rM(iJ.bind(null, e, iw, i_), t);
                break;
              }
              iJ(e, iw, i_);
              break;
            case 4:
              if ((iB(e, r), (4194240 & r) === r)) break;
              for (a = -1, t = e.eventTimes; 0 < r; ) {
                var l = 31 - td(r);
                (o = 1 << l), (l = t[l]) > a && (a = l), (r &= ~o);
              }
              if (
                ((r = a),
                10 <
                  (r =
                    (120 > (r = tn() - r)
                      ? 120
                      : 480 > r
                      ? 480
                      : 1080 > r
                      ? 1080
                      : 1920 > r
                      ? 1920
                      : 3e3 > r
                      ? 3e3
                      : 4320 > r
                      ? 4320
                      : 1960 * ir(r / 1960)) - r))
              ) {
                e.timeoutHandle = rM(iJ.bind(null, e, iw, i_), r);
                break;
              }
              iJ(e, iw, i_);
              break;
            default:
              throw Error(d(329));
          }
        }
      }
      return iO(e, tn()), e.callbackNode === n ? iI.bind(null, e) : null;
    }
    function iV(e, t) {
      var n = ib;
      return (
        e.current.memoizedState.isDehydrated && (iq(e, t).flags |= 256),
        2 !== (e = iY(e, t)) && ((t = iw), (iw = n), null !== t && ij(t)),
        e
      );
    }
    function ij(e) {
      null === iw ? (iw = e) : iw.push.apply(iw, e);
    }
    function iB(e, t) {
      for (
        t &= ~iy,
          t &= ~ig,
          e.suspendedLanes |= t,
          e.pingedLanes &= ~t,
          e = e.expirationTimes;
        0 < t;

      ) {
        var n = 31 - td(t),
          r = 1 << n;
        (e[n] = -1), (t &= ~r);
      }
    }
    function iF(e) {
      if (0 != (6 & ii)) throw Error(d(327));
      i0();
      var t = tg(e, 0);
      if (0 == (1 & t)) return iO(e, tn()), null;
      var n = iY(e, t);
      if (0 !== e.tag && 2 === n) {
        var r = ty(e);
        0 !== r && ((t = r), (n = iV(e, r)));
      }
      if (1 === n) throw ((n = im), iq(e, 0), iB(e, t), iO(e, tn()), n);
      if (6 === n) throw Error(d(345));
      return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        iJ(e, iw, i_),
        iO(e, tn()),
        null
      );
    }
    function i$(e, t) {
      var n = ii;
      ii |= 1;
      try {
        return e(t);
      } finally {
        0 === (ii = n) && ((ik = tn() + 500), ao && au());
      }
    }
    function iW(e) {
      null !== iC && 0 === iC.tag && 0 == (6 & ii) && i0();
      var t = ii;
      ii |= 1;
      var n = il.transition,
        r = t_;
      try {
        if (((il.transition = null), (t_ = 1), e)) return e();
      } finally {
        (t_ = r), (il.transition = n), 0 == (6 & (ii = t)) && au();
      }
    }
    function iH() {
      (id = ip.current), r1(ip);
    }
    function iq(e, t) {
      (e.finishedWork = null), (e.finishedLanes = 0);
      var n = e.timeoutHandle;
      if ((-1 !== n && ((e.timeoutHandle = -1), rD(n)), null !== is))
        for (n = is.return; null !== n; ) {
          var r = n;
          switch ((aS(r), r.tag)) {
            case 1:
              null != (r = r.type.childContextTypes) && r7();
              break;
            case 3:
              oh(), r1(r5), r1(r3), ow();
              break;
            case 5:
              ov(r);
              break;
            case 4:
              oh();
              break;
            case 13:
            case 19:
              r1(og);
              break;
            case 10:
              aF(r.type._context);
              break;
            case 22:
            case 23:
              iH();
          }
          n = n.return;
        }
      if (
        ((iu = e),
        (is = e = ue(e.current, null)),
        (ic = id = t),
        (ih = 0),
        (im = null),
        (iy = ig = iv = 0),
        (iw = ib = null),
        null !== aq)
      ) {
        for (t = 0; t < aq.length; t++)
          if (null !== (r = (n = aq[t]).interleaved)) {
            n.interleaved = null;
            var a = r.next,
              o = n.pending;
            if (null !== o) {
              var l = o.next;
              (o.next = a), (r.next = l);
            }
            n.pending = r;
          }
        aq = null;
      }
      return e;
    }
    function iK(e, t) {
      for (;;) {
        var n = is;
        try {
          if ((aB(), (oS.current = lo), oT)) {
            for (var r = ox.memoizedState; null !== r; ) {
              var a = r.queue;
              null !== a && (a.pending = null), (r = r.next);
            }
            oT = !1;
          }
          if (
            ((o_ = 0),
            (oR = oE = ox = null),
            (oC = !1),
            (oN = 0),
            (io.current = null),
            null === n || null === n.return)
          ) {
            (ih = 1), (im = t), (is = null);
            break;
          }
          e: {
            var o = e,
              l = n.return,
              i = n,
              u = t;
            if (
              ((t = ic),
              (i.flags |= 32768),
              null !== u && 'object' == typeof u && 'function' == typeof u.then)
            ) {
              var s = u,
                c = i,
                f = c.tag;
              if (0 == (1 & c.mode) && (0 === f || 11 === f || 15 === f)) {
                var p = c.alternate;
                p
                  ? ((c.updateQueue = p.updateQueue),
                    (c.memoizedState = p.memoizedState),
                    (c.lanes = p.lanes))
                  : ((c.updateQueue = null), (c.memoizedState = null));
              }
              var h = lv(l);
              if (null !== h) {
                (h.flags &= -257),
                  lg(h, l, i, o, t),
                  1 & h.mode && lm(o, s, t),
                  (t = h),
                  (u = s);
                var m = t.updateQueue;
                if (null === m) {
                  var v = new Set();
                  v.add(u), (t.updateQueue = v);
                } else m.add(u);
                break e;
              }
              if (0 == (1 & t)) {
                lm(o, s, t), iG();
                break e;
              }
              u = Error(d(426));
            } else if (ax && 1 & i.mode) {
              var g = lv(l);
              if (null !== g) {
                0 == (65536 & g.flags) && (g.flags |= 256),
                  lg(g, l, i, o, t),
                  aD(ls(u, i));
                break e;
              }
            }
            (o = u = ls(u, i)),
              4 !== ih && (ih = 2),
              null === ib ? (ib = [o]) : ib.push(o),
              (o = l);
            do {
              switch (o.tag) {
                case 3:
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var y = lp(o, u, t);
                  a2(o, y);
                  break e;
                case 1:
                  i = u;
                  var b = o.type,
                    w = o.stateNode;
                  if (
                    0 == (128 & o.flags) &&
                    ('function' == typeof b.getDerivedStateFromError ||
                      (null !== w &&
                        'function' == typeof w.componentDidCatch &&
                        (null === iR || !iR.has(w))))
                  ) {
                    (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                    var S = lh(o, i, t);
                    a2(o, S);
                    break e;
                  }
              }
              o = o.return;
            } while (null !== o);
          }
          iX(n);
        } catch (e) {
          (t = e), is === n && null !== n && (is = n = n.return);
          continue;
        }
        break;
      }
    }
    function iQ() {
      var e = ia.current;
      return (ia.current = lo), null === e ? lo : e;
    }
    function iG() {
      (0 === ih || 3 === ih || 2 === ih) && (ih = 4),
        null === iu ||
          (0 == (268435455 & iv) && 0 == (268435455 & ig)) ||
          iB(iu, ic);
    }
    function iY(e, t) {
      var n = ii;
      ii |= 2;
      var r = iQ();
      for ((iu !== e || ic !== t) && ((i_ = null), iq(e, t)); ; )
        try {
          (function () {
            for (; null !== is; ) iZ(is);
          })();
          break;
        } catch (t) {
          iK(e, t);
        }
      if ((aB(), (ii = n), (ia.current = r), null !== is)) throw Error(d(261));
      return (iu = null), (ic = 0), ih;
    }
    function iZ(e) {
      var t = u(e.alternate, e, id);
      (e.memoizedProps = e.pendingProps),
        null === t ? iX(e) : (is = t),
        (io.current = null);
    }
    function iX(e) {
      var t = e;
      do {
        var n = t.alternate;
        if (((e = t.return), 0 == (32768 & t.flags))) {
          if (
            null !==
            (n = (function (e, t, n) {
              var r = t.pendingProps;
              switch ((aS(t), t.tag)) {
                case 2:
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                  return lF(t), null;
                case 1:
                case 17:
                  return r9(t.type) && r7(), lF(t), null;
                case 3:
                  return (
                    (r = t.stateNode),
                    oh(),
                    r1(r5),
                    r1(r3),
                    ow(),
                    r.pendingContext &&
                      ((r.context = r.pendingContext),
                      (r.pendingContext = null)),
                    (null === e || null === e.child) &&
                      (aA(t)
                        ? (t.flags |= 4)
                        : null === e ||
                          (e.memoizedState.isDehydrated &&
                            0 == (256 & t.flags)) ||
                          ((t.flags |= 1024),
                          null !== aE && (ij(aE), (aE = null)))),
                    o(e, t),
                    lF(t),
                    null
                  );
                case 5:
                  ov(t);
                  var u = of(od.current);
                  if (((n = t.type), null !== e && null != t.stateNode))
                    l(e, t, n, r, u),
                      e.ref !== t.ref &&
                        ((t.flags |= 512), (t.flags |= 2097152));
                  else {
                    if (!r) {
                      if (null === t.stateNode) throw Error(d(166));
                      return lF(t), null;
                    }
                    if (((e = of(os.current)), aA(t))) {
                      (r = t.stateNode), (n = t.type);
                      var s = t.memoizedProps;
                      switch (
                        ((r[rF] = t), (r[r$] = s), (e = 0 != (1 & t.mode)), n)
                      ) {
                        case 'dialog':
                          rm('cancel', r), rm('close', r);
                          break;
                        case 'iframe':
                        case 'object':
                        case 'embed':
                          rm('load', r);
                          break;
                        case 'video':
                        case 'audio':
                          for (u = 0; u < rd.length; u++) rm(rd[u], r);
                          break;
                        case 'source':
                          rm('error', r);
                          break;
                        case 'img':
                        case 'image':
                        case 'link':
                          rm('error', r), rm('load', r);
                          break;
                        case 'details':
                          rm('toggle', r);
                          break;
                        case 'input':
                          ef(r, s), rm('invalid', r);
                          break;
                        case 'select':
                          (r._wrapperState = { wasMultiple: !!s.multiple }),
                            rm('invalid', r);
                          break;
                        case 'textarea':
                          ew(r, s), rm('invalid', r);
                      }
                      for (var c in (eD(n, s), (u = null), s))
                        if (s.hasOwnProperty(c)) {
                          var f = s[c];
                          'children' === c
                            ? 'string' == typeof f
                              ? r.textContent !== f &&
                                (!0 !== s.suppressHydrationWarning &&
                                  rC(r.textContent, f, e),
                                (u = ['children', f]))
                              : 'number' == typeof f &&
                                r.textContent !== '' + f &&
                                (!0 !== s.suppressHydrationWarning &&
                                  rC(r.textContent, f, e),
                                (u = ['children', '' + f]))
                            : p.hasOwnProperty(c) &&
                              null != f &&
                              'onScroll' === c &&
                              rm('scroll', r);
                        }
                      switch (n) {
                        case 'input':
                          eu(r), em(r, s, !0);
                          break;
                        case 'textarea':
                          eu(r), ek(r);
                          break;
                        case 'select':
                        case 'option':
                          break;
                        default:
                          'function' == typeof s.onClick && (r.onclick = rN);
                      }
                      (r = u),
                        (t.updateQueue = r),
                        null !== r && (t.flags |= 4);
                    } else {
                      (c = 9 === u.nodeType ? u : u.ownerDocument),
                        'http://www.w3.org/1999/xhtml' === e && (e = e_(n)),
                        'http://www.w3.org/1999/xhtml' === e
                          ? 'script' === n
                            ? (((e = c.createElement('div')).innerHTML =
                                '<script></script>'),
                              (e = e.removeChild(e.firstChild)))
                            : 'string' == typeof r.is
                            ? (e = c.createElement(n, { is: r.is }))
                            : ((e = c.createElement(n)),
                              'select' === n &&
                                ((c = e),
                                r.multiple
                                  ? (c.multiple = !0)
                                  : r.size && (c.size = r.size)))
                          : (e = c.createElementNS(e, n)),
                        (e[rF] = t),
                        (e[r$] = r),
                        a(e, t, !1, !1),
                        (t.stateNode = e);
                      e: {
                        switch (((c = ez(n, r)), n)) {
                          case 'dialog':
                            rm('cancel', e), rm('close', e), (u = r);
                            break;
                          case 'iframe':
                          case 'object':
                          case 'embed':
                            rm('load', e), (u = r);
                            break;
                          case 'video':
                          case 'audio':
                            for (u = 0; u < rd.length; u++) rm(rd[u], e);
                            u = r;
                            break;
                          case 'source':
                            rm('error', e), (u = r);
                            break;
                          case 'img':
                          case 'image':
                          case 'link':
                            rm('error', e), rm('load', e), (u = r);
                            break;
                          case 'details':
                            rm('toggle', e), (u = r);
                            break;
                          case 'input':
                            ef(e, r), (u = ed(e, r)), rm('invalid', e);
                            break;
                          case 'option':
                          default:
                            u = r;
                            break;
                          case 'select':
                            (e._wrapperState = { wasMultiple: !!r.multiple }),
                              (u = en({}, r, { value: void 0 })),
                              rm('invalid', e);
                            break;
                          case 'textarea':
                            ew(e, r), (u = eb(e, r)), rm('invalid', e);
                        }
                        for (s in (eD(n, u), (f = u)))
                          if (f.hasOwnProperty(s)) {
                            var h = f[s];
                            'style' === s
                              ? eP(e, h)
                              : 'dangerouslySetInnerHTML' === s
                              ? null != (h = h ? h.__html : void 0) && eT(e, h)
                              : 'children' === s
                              ? 'string' == typeof h
                                ? ('textarea' !== n || '' !== h) && eC(e, h)
                                : 'number' == typeof h && eC(e, '' + h)
                              : 'suppressContentEditableWarning' !== s &&
                                'suppressHydrationWarning' !== s &&
                                'autoFocus' !== s &&
                                (p.hasOwnProperty(s)
                                  ? null != h &&
                                    'onScroll' === s &&
                                    rm('scroll', e)
                                  : null != h && E(e, s, h, c));
                          }
                        switch (n) {
                          case 'input':
                            eu(e), em(e, r, !1);
                            break;
                          case 'textarea':
                            eu(e), ek(e);
                            break;
                          case 'option':
                            null != r.value &&
                              e.setAttribute('value', '' + el(r.value));
                            break;
                          case 'select':
                            (e.multiple = !!r.multiple),
                              null != (s = r.value)
                                ? ey(e, !!r.multiple, s, !1)
                                : null != r.defaultValue &&
                                  ey(e, !!r.multiple, r.defaultValue, !0);
                            break;
                          default:
                            'function' == typeof u.onClick && (e.onclick = rN);
                        }
                        switch (n) {
                          case 'button':
                          case 'input':
                          case 'select':
                          case 'textarea':
                            r = !!r.autoFocus;
                            break e;
                          case 'img':
                            r = !0;
                            break e;
                          default:
                            r = !1;
                        }
                      }
                      r && (t.flags |= 4);
                    }
                    null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
                  }
                  return lF(t), null;
                case 6:
                  if (e && null != t.stateNode) i(e, t, e.memoizedProps, r);
                  else {
                    if ('string' != typeof r && null === t.stateNode)
                      throw Error(d(166));
                    if (((n = of(od.current)), of(os.current), aA(t))) {
                      if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[rF] = t),
                        (s = r.nodeValue !== n) && null !== (e = ak))
                      )
                        switch (e.tag) {
                          case 3:
                            rC(r.nodeValue, n, 0 != (1 & e.mode));
                            break;
                          case 5:
                            !0 !== e.memoizedProps.suppressHydrationWarning &&
                              rC(r.nodeValue, n, 0 != (1 & e.mode));
                        }
                      s && (t.flags |= 4);
                    } else
                      ((r = (
                        9 === n.nodeType ? n : n.ownerDocument
                      ).createTextNode(r))[rF] = t),
                        (t.stateNode = r);
                  }
                  return lF(t), null;
                case 13:
                  if (
                    (r1(og),
                    (r = t.memoizedState),
                    null === e ||
                      (null !== e.memoizedState &&
                        null !== e.memoizedState.dehydrated))
                  ) {
                    if (
                      ax &&
                      null !== a_ &&
                      0 != (1 & t.mode) &&
                      0 == (128 & t.flags)
                    )
                      aP(), aM(), (t.flags |= 98560), (s = !1);
                    else if (
                      ((s = aA(t)), null !== r && null !== r.dehydrated)
                    ) {
                      if (null === e) {
                        if (!s) throw Error(d(318));
                        if (
                          !(s =
                            null !== (s = t.memoizedState)
                              ? s.dehydrated
                              : null)
                        )
                          throw Error(d(317));
                        s[rF] = t;
                      } else
                        aM(),
                          0 == (128 & t.flags) && (t.memoizedState = null),
                          (t.flags |= 4);
                      lF(t), (s = !1);
                    } else null !== aE && (ij(aE), (aE = null)), (s = !0);
                    if (!s) return 65536 & t.flags ? t : null;
                  }
                  if (0 != (128 & t.flags)) return (t.lanes = n), t;
                  return (
                    (r = null !== r) !=
                      (null !== e && null !== e.memoizedState) &&
                      r &&
                      ((t.child.flags |= 8192),
                      0 != (1 & t.mode) &&
                        (null === e || 0 != (1 & og.current)
                          ? 0 === ih && (ih = 3)
                          : iG())),
                    null !== t.updateQueue && (t.flags |= 4),
                    lF(t),
                    null
                  );
                case 4:
                  return (
                    oh(),
                    o(e, t),
                    null === e && ry(t.stateNode.containerInfo),
                    lF(t),
                    null
                  );
                case 10:
                  return aF(t.type._context), lF(t), null;
                case 19:
                  if ((r1(og), null === (s = t.memoizedState)))
                    return lF(t), null;
                  if (
                    ((r = 0 != (128 & t.flags)), null === (c = s.rendering))
                  ) {
                    if (r) lB(s, !1);
                    else {
                      if (0 !== ih || (null !== e && 0 != (128 & e.flags)))
                        for (e = t.child; null !== e; ) {
                          if (null !== (c = oy(e))) {
                            for (
                              t.flags |= 128,
                                lB(s, !1),
                                null !== (r = c.updateQueue) &&
                                  ((t.updateQueue = r), (t.flags |= 4)),
                                t.subtreeFlags = 0,
                                r = n,
                                n = t.child;
                              null !== n;

                            )
                              (s = n),
                                (e = r),
                                (s.flags &= 14680066),
                                null === (c = s.alternate)
                                  ? ((s.childLanes = 0),
                                    (s.lanes = e),
                                    (s.child = null),
                                    (s.subtreeFlags = 0),
                                    (s.memoizedProps = null),
                                    (s.memoizedState = null),
                                    (s.updateQueue = null),
                                    (s.dependencies = null),
                                    (s.stateNode = null))
                                  : ((s.childLanes = c.childLanes),
                                    (s.lanes = c.lanes),
                                    (s.child = c.child),
                                    (s.subtreeFlags = 0),
                                    (s.deletions = null),
                                    (s.memoizedProps = c.memoizedProps),
                                    (s.memoizedState = c.memoizedState),
                                    (s.updateQueue = c.updateQueue),
                                    (s.type = c.type),
                                    (e = c.dependencies),
                                    (s.dependencies =
                                      null === e
                                        ? null
                                        : {
                                            lanes: e.lanes,
                                            firstContext: e.firstContext,
                                          })),
                                (n = n.sibling);
                            return r2(og, (1 & og.current) | 2), t.child;
                          }
                          e = e.sibling;
                        }
                      null !== s.tail &&
                        tn() > ik &&
                        ((t.flags |= 128),
                        (r = !0),
                        lB(s, !1),
                        (t.lanes = 4194304));
                    }
                  } else {
                    if (!r) {
                      if (null !== (e = oy(c))) {
                        if (
                          ((t.flags |= 128),
                          (r = !0),
                          null !== (n = e.updateQueue) &&
                            ((t.updateQueue = n), (t.flags |= 4)),
                          lB(s, !0),
                          null === s.tail &&
                            'hidden' === s.tailMode &&
                            !c.alternate &&
                            !ax)
                        )
                          return lF(t), null;
                      } else
                        2 * tn() - s.renderingStartTime > ik &&
                          1073741824 !== n &&
                          ((t.flags |= 128),
                          (r = !0),
                          lB(s, !1),
                          (t.lanes = 4194304));
                    }
                    s.isBackwards
                      ? ((c.sibling = t.child), (t.child = c))
                      : (null !== (n = s.last)
                          ? (n.sibling = c)
                          : (t.child = c),
                        (s.last = c));
                  }
                  if (null !== s.tail)
                    return (
                      (t = s.tail),
                      (s.rendering = t),
                      (s.tail = t.sibling),
                      (s.renderingStartTime = tn()),
                      (t.sibling = null),
                      (n = og.current),
                      r2(og, r ? (1 & n) | 2 : 1 & n),
                      t
                    );
                  return lF(t), null;
                case 22:
                case 23:
                  return (
                    iH(),
                    (r = null !== t.memoizedState),
                    null !== e &&
                      (null !== e.memoizedState) !== r &&
                      (t.flags |= 8192),
                    r && 0 != (1 & t.mode)
                      ? 0 != (1073741824 & id) &&
                        (lF(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                      : lF(t),
                    null
                  );
                case 24:
                case 25:
                  return null;
              }
              throw Error(d(156, t.tag));
            })(n, t, id))
          ) {
            is = n;
            return;
          }
        } else {
          if (
            null !==
            (n = (function (e, t) {
              switch ((aS(t), t.tag)) {
                case 1:
                  return (
                    r9(t.type) && r7(),
                    65536 & (e = t.flags)
                      ? ((t.flags = (-65537 & e) | 128), t)
                      : null
                  );
                case 3:
                  return (
                    oh(),
                    r1(r5),
                    r1(r3),
                    ow(),
                    0 != (65536 & (e = t.flags)) && 0 == (128 & e)
                      ? ((t.flags = (-65537 & e) | 128), t)
                      : null
                  );
                case 5:
                  return ov(t), null;
                case 13:
                  if (
                    (r1(og),
                    null !== (e = t.memoizedState) && null !== e.dehydrated)
                  ) {
                    if (null === t.alternate) throw Error(d(340));
                    aM();
                  }
                  return 65536 & (e = t.flags)
                    ? ((t.flags = (-65537 & e) | 128), t)
                    : null;
                case 19:
                  return r1(og), null;
                case 4:
                  return oh(), null;
                case 10:
                  return aF(t.type._context), null;
                case 22:
                case 23:
                  return iH(), null;
                default:
                  return null;
              }
            })(n, t))
          ) {
            (n.flags &= 32767), (is = n);
            return;
          }
          if (null !== e)
            (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
          else {
            (ih = 6), (is = null);
            return;
          }
        }
        if (null !== (t = t.sibling)) {
          is = t;
          return;
        }
        is = t = e;
      } while (null !== t);
      0 === ih && (ih = 5);
    }
    function iJ(e, t, n) {
      var r = t_,
        a = il.transition;
      try {
        (il.transition = null),
          (t_ = 1),
          (function (e, t, n, r) {
            do i0();
            while (null !== iC);
            if (0 != (6 & ii)) throw Error(d(327));
            n = e.finishedWork;
            var a = e.finishedLanes;
            if (null !== n) {
              if (
                ((e.finishedWork = null),
                (e.finishedLanes = 0),
                n === e.current)
              )
                throw Error(d(177));
              (e.callbackNode = null), (e.callbackPriority = 0);
              var o = n.lanes | n.childLanes;
              if (
                ((function (e, t) {
                  var n = e.pendingLanes & ~t;
                  (e.pendingLanes = t),
                    (e.suspendedLanes = 0),
                    (e.pingedLanes = 0),
                    (e.expiredLanes &= t),
                    (e.mutableReadLanes &= t),
                    (e.entangledLanes &= t),
                    (t = e.entanglements);
                  var r = e.eventTimes;
                  for (e = e.expirationTimes; 0 < n; ) {
                    var a = 31 - td(n),
                      o = 1 << a;
                    (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                  }
                })(e, o),
                e === iu && ((is = iu = null), (ic = 0)),
                (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                  iT ||
                  ((iT = !0),
                  (l = tl),
                  (i = function () {
                    return i0(), null;
                  }),
                  e9(l, i)),
                (o = 0 != (15990 & n.flags)),
                0 != (15990 & n.subtreeFlags) || o)
              ) {
                (o = il.transition), (il.transition = null);
                var l,
                  i,
                  u,
                  s,
                  c,
                  f = t_;
                t_ = 1;
                var p = ii;
                (ii |= 4),
                  (io.current = null),
                  (function (e, t) {
                    if (((rL = tQ), n0((e = nJ())))) {
                      if ('selectionStart' in e)
                        var n = {
                          start: e.selectionStart,
                          end: e.selectionEnd,
                        };
                      else
                        e: {
                          var r =
                            (n =
                              ((n = e.ownerDocument) && n.defaultView) ||
                              window).getSelection && n.getSelection();
                          if (r && 0 !== r.rangeCount) {
                            n = r.anchorNode;
                            var a,
                              o = r.anchorOffset,
                              l = r.focusNode;
                            r = r.focusOffset;
                            try {
                              n.nodeType, l.nodeType;
                            } catch (e) {
                              n = null;
                              break e;
                            }
                            var i = 0,
                              u = -1,
                              s = -1,
                              c = 0,
                              f = 0,
                              p = e,
                              h = null;
                            t: for (;;) {
                              for (
                                ;
                                p !== n ||
                                  (0 !== o && 3 !== p.nodeType) ||
                                  (u = i + o),
                                  p !== l ||
                                    (0 !== r && 3 !== p.nodeType) ||
                                    (s = i + r),
                                  3 === p.nodeType && (i += p.nodeValue.length),
                                  null !== (a = p.firstChild);

                              )
                                (h = p), (p = a);
                              for (;;) {
                                if (p === e) break t;
                                if (
                                  (h === n && ++c === o && (u = i),
                                  h === l && ++f === r && (s = i),
                                  null !== (a = p.nextSibling))
                                )
                                  break;
                                h = (p = h).parentNode;
                              }
                              p = a;
                            }
                            n =
                              -1 === u || -1 === s
                                ? null
                                : { start: u, end: s };
                          } else n = null;
                        }
                      n = n || { start: 0, end: 0 };
                    } else n = null;
                    for (
                      rA = { focusedElem: e, selectionRange: n },
                        tQ = !1,
                        lq = t;
                      null !== lq;

                    )
                      if (
                        ((e = (t = lq).child),
                        0 != (1028 & t.subtreeFlags) && null !== e)
                      )
                        (e.return = t), (lq = e);
                      else
                        for (; null !== lq; ) {
                          t = lq;
                          try {
                            var m = t.alternate;
                            if (0 != (1024 & t.flags))
                              switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                case 5:
                                case 6:
                                case 4:
                                case 17:
                                  break;
                                case 1:
                                  if (null !== m) {
                                    var v = m.memoizedProps,
                                      g = m.memoizedState,
                                      y = t.stateNode,
                                      b = y.getSnapshotBeforeUpdate(
                                        t.elementType === t.type
                                          ? v
                                          : aU(t.type, v),
                                        g
                                      );
                                    y.__reactInternalSnapshotBeforeUpdate = b;
                                  }
                                  break;
                                case 3:
                                  var w = t.stateNode.containerInfo;
                                  1 === w.nodeType
                                    ? (w.textContent = '')
                                    : 9 === w.nodeType &&
                                      w.documentElement &&
                                      w.removeChild(w.documentElement);
                                  break;
                                default:
                                  throw Error(d(163));
                              }
                          } catch (e) {
                            i2(t, t.return, e);
                          }
                          if (null !== (e = t.sibling)) {
                            (e.return = t.return), (lq = e);
                            break;
                          }
                          lq = t.return;
                        }
                    (m = lG), (lG = !1);
                  })(e, n),
                  l8(n, e),
                  (function (e) {
                    var t = nJ(),
                      n = e.focusedElem,
                      r = e.selectionRange;
                    if (
                      t !== n &&
                      n &&
                      n.ownerDocument &&
                      (function e(t, n) {
                        return (
                          !!t &&
                          !!n &&
                          (t === n ||
                            ((!t || 3 !== t.nodeType) &&
                              (n && 3 === n.nodeType
                                ? e(t, n.parentNode)
                                : 'contains' in t
                                ? t.contains(n)
                                : !!t.compareDocumentPosition &&
                                  !!(16 & t.compareDocumentPosition(n)))))
                        );
                      })(n.ownerDocument.documentElement, n)
                    ) {
                      if (null !== r && n0(n)) {
                        if (
                          ((t = r.start),
                          void 0 === (e = r.end) && (e = t),
                          'selectionStart' in n)
                        )
                          (n.selectionStart = t),
                            (n.selectionEnd = Math.min(e, n.value.length));
                        else if (
                          (e =
                            ((t = n.ownerDocument || document) &&
                              t.defaultView) ||
                            window).getSelection
                        ) {
                          e = e.getSelection();
                          var a = n.textContent.length,
                            o = Math.min(r.start, a);
                          (r = void 0 === r.end ? o : Math.min(r.end, a)),
                            !e.extend && o > r && ((a = r), (r = o), (o = a)),
                            (a = nX(n, o));
                          var l = nX(n, r);
                          a &&
                            l &&
                            (1 !== e.rangeCount ||
                              e.anchorNode !== a.node ||
                              e.anchorOffset !== a.offset ||
                              e.focusNode !== l.node ||
                              e.focusOffset !== l.offset) &&
                            ((t = t.createRange()).setStart(a.node, a.offset),
                            e.removeAllRanges(),
                            o > r
                              ? (e.addRange(t), e.extend(l.node, l.offset))
                              : (t.setEnd(l.node, l.offset), e.addRange(t)));
                        }
                      }
                      for (t = [], e = n; (e = e.parentNode); )
                        1 === e.nodeType &&
                          t.push({
                            element: e,
                            left: e.scrollLeft,
                            top: e.scrollTop,
                          });
                      for (
                        'function' == typeof n.focus && n.focus(), n = 0;
                        n < t.length;
                        n++
                      )
                        ((e = t[n]).element.scrollLeft = e.left),
                          (e.element.scrollTop = e.top);
                    }
                  })(rA),
                  (tQ = !!rL),
                  (rA = rL = null),
                  (e.current = n),
                  (u = n),
                  (s = e),
                  (c = a),
                  (lq = u),
                  (function e(t, n, r) {
                    for (var a = 0 != (1 & t.mode); null !== lq; ) {
                      var o = lq,
                        l = o.child;
                      if (22 === o.tag && a) {
                        var i = null !== o.memoizedState || l$;
                        if (!i) {
                          var u = o.alternate,
                            s = (null !== u && null !== u.memoizedState) || lW;
                          u = l$;
                          var c = lW;
                          if (((l$ = i), (lW = s) && !c))
                            for (lq = o; null !== lq; )
                              (s = (i = lq).child),
                                22 === i.tag && null !== i.memoizedState
                                  ? it(o)
                                  : null !== s
                                  ? ((s.return = i), (lq = s))
                                  : it(o);
                          for (; null !== l; )
                            (lq = l), e(l, n, r), (l = l.sibling);
                          (lq = o), (l$ = u), (lW = c);
                        }
                        l7(t, n, r);
                      } else
                        0 != (8772 & o.subtreeFlags) && null !== l
                          ? ((l.return = o), (lq = l))
                          : l7(t, n, r);
                    }
                  })(u, s, c),
                  tt(),
                  (ii = p),
                  (t_ = f),
                  (il.transition = o);
              } else e.current = n;
              if (
                (iT && ((iT = !1), (iC = e), (iN = a)),
                0 === (o = e.pendingLanes) && (iR = null),
                (function (e) {
                  if (tc && 'function' == typeof tc.onCommitFiberRoot)
                    try {
                      tc.onCommitFiberRoot(
                        ts,
                        e,
                        void 0,
                        128 == (128 & e.current.flags)
                      );
                    } catch (e) {}
                })(n.stateNode, r),
                iO(e, tn()),
                null !== t)
              )
                for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                  r((a = t[n]).value, {
                    componentStack: a.stack,
                    digest: a.digest,
                  });
              if (ix) throw ((ix = !1), (e = iE), (iE = null), e);
              0 != (1 & iN) && 0 !== e.tag && i0(),
                0 != (1 & (o = e.pendingLanes))
                  ? e === iA
                    ? iL++
                    : ((iL = 0), (iA = e))
                  : (iL = 0),
                au();
            }
          })(e, t, n, r);
      } finally {
        (il.transition = a), (t_ = r);
      }
      return null;
    }
    function i0() {
      if (null !== iC) {
        var e = tx(iN),
          t = il.transition,
          n = t_;
        try {
          if (((il.transition = null), (t_ = 16 > e ? 16 : e), null === iC))
            var r = !1;
          else {
            if (((e = iC), (iC = null), (iN = 0), 0 != (6 & ii)))
              throw Error(d(331));
            var a = ii;
            for (ii |= 4, lq = e.current; null !== lq; ) {
              var o = lq,
                l = o.child;
              if (0 != (16 & lq.flags)) {
                var i = o.deletions;
                if (null !== i) {
                  for (var u = 0; u < i.length; u++) {
                    var s = i[u];
                    for (lq = s; null !== lq; ) {
                      var c = lq;
                      switch (c.tag) {
                        case 0:
                        case 11:
                        case 15:
                          lY(8, c, o);
                      }
                      var f = c.child;
                      if (null !== f) (f.return = c), (lq = f);
                      else
                        for (; null !== lq; ) {
                          var p = (c = lq).sibling,
                            h = c.return;
                          if (
                            ((function e(t) {
                              var n = t.alternate;
                              null !== n && ((t.alternate = null), e(n)),
                                (t.child = null),
                                (t.deletions = null),
                                (t.sibling = null),
                                5 === t.tag &&
                                  null !== (n = t.stateNode) &&
                                  (delete n[rF],
                                  delete n[r$],
                                  delete n[rH],
                                  delete n[rq],
                                  delete n[rK]),
                                (t.stateNode = null),
                                (t.return = null),
                                (t.dependencies = null),
                                (t.memoizedProps = null),
                                (t.memoizedState = null),
                                (t.pendingProps = null),
                                (t.stateNode = null),
                                (t.updateQueue = null);
                            })(c),
                            c === s)
                          ) {
                            lq = null;
                            break;
                          }
                          if (null !== p) {
                            (p.return = h), (lq = p);
                            break;
                          }
                          lq = h;
                        }
                    }
                  }
                  var m = o.alternate;
                  if (null !== m) {
                    var v = m.child;
                    if (null !== v) {
                      m.child = null;
                      do {
                        var g = v.sibling;
                        (v.sibling = null), (v = g);
                      } while (null !== v);
                    }
                  }
                  lq = o;
                }
              }
              if (0 != (2064 & o.subtreeFlags) && null !== l)
                (l.return = o), (lq = l);
              else
                for (; null !== lq; ) {
                  if (((o = lq), 0 != (2048 & o.flags)))
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        lY(9, o, o.return);
                    }
                  var y = o.sibling;
                  if (null !== y) {
                    (y.return = o.return), (lq = y);
                    break;
                  }
                  lq = o.return;
                }
            }
            var b = e.current;
            for (lq = b; null !== lq; ) {
              var w = (l = lq).child;
              if (0 != (2064 & l.subtreeFlags) && null !== w)
                (w.return = l), (lq = w);
              else
                for (l = b; null !== lq; ) {
                  if (((i = lq), 0 != (2048 & i.flags)))
                    try {
                      switch (i.tag) {
                        case 0:
                        case 11:
                        case 15:
                          lZ(9, i);
                      }
                    } catch (e) {
                      i2(i, i.return, e);
                    }
                  if (i === l) {
                    lq = null;
                    break;
                  }
                  var S = i.sibling;
                  if (null !== S) {
                    (S.return = i.return), (lq = S);
                    break;
                  }
                  lq = i.return;
                }
            }
            if (
              ((ii = a),
              au(),
              tc && 'function' == typeof tc.onPostCommitFiberRoot)
            )
              try {
                tc.onPostCommitFiberRoot(ts, e);
              } catch (e) {}
            r = !0;
          }
          return r;
        } finally {
          (t_ = n), (il.transition = t);
        }
      }
      return !1;
    }
    function i1(e, t, n) {
      (t = lp(e, (t = ls(n, t)), 1)),
        (e = a0(e, t, 1)),
        (t = iD()),
        null !== e && (tS(e, 1, t), iO(e, t));
    }
    function i2(e, t, n) {
      if (3 === e.tag) i1(e, e, n);
      else
        for (; null !== t; ) {
          if (3 === t.tag) {
            i1(t, e, n);
            break;
          }
          if (1 === t.tag) {
            var r = t.stateNode;
            if (
              'function' == typeof t.type.getDerivedStateFromError ||
              ('function' == typeof r.componentDidCatch &&
                (null === iR || !iR.has(r)))
            ) {
              (e = lh(t, (e = ls(n, e)), 1)),
                (t = a0(t, e, 1)),
                (e = iD()),
                null !== t && (tS(t, 1, e), iO(t, e));
              break;
            }
          }
          t = t.return;
        }
    }
    function i4(e, t, n) {
      var r = e.pingCache;
      null !== r && r.delete(t),
        (t = iD()),
        (e.pingedLanes |= e.suspendedLanes & n),
        iu === e &&
          (ic & n) === n &&
          (4 === ih || (3 === ih && (130023424 & ic) === ic && 500 > tn() - iS)
            ? iq(e, 0)
            : (iy |= n)),
        iO(e, t);
    }
    function i3(e, t) {
      0 === t &&
        (0 == (1 & e.mode)
          ? (t = 1)
          : ((t = tm), 0 == (130023424 & (tm <<= 1)) && (tm = 4194304)));
      var n = iD();
      null !== (e = aG(e, t)) && (tS(e, t, n), iO(e, n));
    }
    function i5(e) {
      var t = e.memoizedState,
        n = 0;
      null !== t && (n = t.retryLane), i3(e, n);
    }
    function i6(e, t) {
      var n = 0;
      switch (e.tag) {
        case 13:
          var r = e.stateNode,
            a = e.memoizedState;
          null !== a && (n = a.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        default:
          throw Error(d(314));
      }
      null !== r && r.delete(t), i3(e, n);
    }
    function i8(e, t, n, r) {
      (this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }
    function i9(e, t, n, r) {
      return new i8(e, t, n, r);
    }
    function i7(e) {
      return !(!(e = e.prototype) || !e.isReactComponent);
    }
    function ue(e, t) {
      var n = e.alternate;
      return (
        null === n
          ? (((n = i9(e.tag, t, e.key, e.mode)).elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = 14680064 & e.flags),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
      );
    }
    function ut(e, t, n, r, a, o) {
      var l = 2;
      if (((r = e), 'function' == typeof e)) i7(e) && (l = 1);
      else if ('string' == typeof e) l = 5;
      else
        e: switch (e) {
          case N:
            return un(n.children, a, o, t);
          case A:
            (l = 8), (a |= 8);
            break;
          case P:
            return (
              ((e = i9(12, n, t, 2 | a)).elementType = P), (e.lanes = o), e
            );
          case U:
            return ((e = i9(13, n, t, a)).elementType = U), (e.lanes = o), e;
          case O:
            return ((e = i9(19, n, t, a)).elementType = O), (e.lanes = o), e;
          case j:
            return ur(n, a, o, t);
          default:
            if ('object' == typeof e && null !== e)
              switch (e.$$typeof) {
                case M:
                  l = 10;
                  break e;
                case D:
                  l = 9;
                  break e;
                case z:
                  l = 11;
                  break e;
                case I:
                  l = 14;
                  break e;
                case V:
                  (l = 16), (r = null);
                  break e;
              }
            throw Error(d(130, null == e ? e : typeof e, ''));
        }
      return (
        ((t = i9(l, n, t, a)).elementType = e), (t.type = r), (t.lanes = o), t
      );
    }
    function un(e, t, n, r) {
      return ((e = i9(7, e, r, t)).lanes = n), e;
    }
    function ur(e, t, n, r) {
      return (
        ((e = i9(22, e, r, t)).elementType = j),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
      );
    }
    function ua(e, t, n) {
      return ((e = i9(6, e, null, t)).lanes = n), e;
    }
    function uo(e, t, n) {
      return (
        ((t = i9(4, null !== e.children ? e.children : [], e.key, t)).lanes =
          n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    function ul(e, t, n, r, a) {
      (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
          this.pingCache =
          this.current =
          this.pendingChildren =
            null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = tw(0)),
        (this.expirationTimes = tw(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = tw(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = a),
        (this.mutableSourceEagerHydrationData = null);
    }
    function ui(e, t, n, r, a, o, l, i, u) {
      return (
        (e = new ul(e, t, n, i, u)),
        1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
        (o = i9(3, null, null, t)),
        (e.current = o),
        (o.stateNode = e),
        (o.memoizedState = {
          element: r,
          isDehydrated: n,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        aZ(o),
        e
      );
    }
    function uu(e) {
      if (!e) return r4;
      e = e._reactInternals;
      e: {
        if (e3(e) !== e || 1 !== e.tag) throw Error(d(170));
        var t = e;
        do {
          switch (t.tag) {
            case 3:
              t = t.stateNode.context;
              break e;
            case 1:
              if (r9(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          t = t.return;
        } while (null !== t);
        throw Error(d(171));
      }
      if (1 === e.tag) {
        var n = e.type;
        if (r9(n)) return at(e, n, t);
      }
      return t;
    }
    function us(e, t, n, r, a, o, l, i, u) {
      return (
        ((e = ui(n, r, !0, e, a, o, l, i, u)).context = uu(null)),
        (n = e.current),
        ((o = aJ((r = iD()), (a = iz(n)))).callback = null != t ? t : null),
        a0(n, o, a),
        (e.current.lanes = a),
        tS(e, a, r),
        iO(e, r),
        e
      );
    }
    function uc(e, t, n, r) {
      var a = t.current,
        o = iD(),
        l = iz(a);
      return (
        (n = uu(n)),
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = aJ(o, l)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        null !== (e = a0(a, t, l)) && (iU(e, a, l, o), a1(e, a, l)),
        l
      );
    }
    function ud(e) {
      return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
    }
    function uf(e, t) {
      if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t;
      }
    }
    function up(e, t) {
      uf(e, t), (e = e.alternate) && uf(e, t);
    }
    u = function (e, t, n) {
      if (null !== e) {
        if (e.memoizedProps !== t.pendingProps || r5.current) lb = !0;
        else {
          if (0 == (e.lanes & n) && 0 == (128 & t.flags))
            return (
              (lb = !1),
              (function (e, t, n) {
                switch (t.tag) {
                  case 3:
                    lN(t), aM();
                    break;
                  case 5:
                    om(t);
                    break;
                  case 1:
                    r9(t.type) && an(t);
                    break;
                  case 4:
                    op(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    var r = t.type._context,
                      a = t.memoizedProps.value;
                    r2(aO, r._currentValue), (r._currentValue = a);
                    break;
                  case 13:
                    if (null !== (r = t.memoizedState)) {
                      if (null !== r.dehydrated)
                        return r2(og, 1 & og.current), (t.flags |= 128), null;
                      if (0 != (n & t.child.childLanes)) return lM(e, t, n);
                      return (
                        r2(og, 1 & og.current),
                        null !== (e = lj(e, t, n)) ? e.sibling : null
                      );
                    }
                    r2(og, 1 & og.current);
                    break;
                  case 19:
                    if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                      if (r) return lI(e, t, n);
                      t.flags |= 128;
                    }
                    if (
                      (null !== (a = t.memoizedState) &&
                        ((a.rendering = null),
                        (a.tail = null),
                        (a.lastEffect = null)),
                      r2(og, og.current),
                      !r)
                    )
                      return null;
                    break;
                  case 22:
                  case 23:
                    return (t.lanes = 0), lx(e, t, n);
                }
                return lj(e, t, n);
              })(e, t, n)
            );
          lb = 0 != (131072 & e.flags);
        }
      } else (lb = !1), ax && 0 != (1048576 & t.flags) && ab(t, af, t.index);
      switch (((t.lanes = 0), t.tag)) {
        case 2:
          var r = t.type;
          lV(e, t), (e = t.pendingProps);
          var a = r8(t, r3.current);
          aW(t, n), (a = oM(null, t, r, e, a, n));
          var o = oD();
          return (
            (t.flags |= 1),
            'object' == typeof a &&
            null !== a &&
            'function' == typeof a.render &&
            void 0 === a.$$typeof
              ? ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                r9(r) ? ((o = !0), an(t)) : (o = !1),
                (t.memoizedState =
                  null !== a.state && void 0 !== a.state ? a.state : null),
                aZ(t),
                (a.updater = a8),
                (t.stateNode = a),
                (a._reactInternals = t),
                ot(t, r, e, n),
                (t = lC(null, t, r, !0, o, n)))
              : ((t.tag = 0),
                ax && o && aw(t),
                lw(null, t, a, n),
                (t = t.child)),
            t
          );
        case 16:
          r = t.elementType;
          e: {
            switch (
              (lV(e, t),
              (e = t.pendingProps),
              (r = (a = r._init)(r._payload)),
              (t.type = r),
              (a = t.tag =
                (function (e) {
                  if ('function' == typeof e) return i7(e) ? 1 : 0;
                  if (null != e) {
                    if ((e = e.$$typeof) === z) return 11;
                    if (e === I) return 14;
                  }
                  return 2;
                })(r)),
              (e = aU(r, e)),
              a)
            ) {
              case 0:
                t = lR(null, t, r, e, n);
                break e;
              case 1:
                t = lT(null, t, r, e, n);
                break e;
              case 11:
                t = lS(null, t, r, e, n);
                break e;
              case 14:
                t = lk(null, t, r, aU(r.type, e), n);
                break e;
            }
            throw Error(d(306, r, ''));
          }
          return t;
        case 0:
          return (
            (r = t.type),
            (a = t.pendingProps),
            (a = t.elementType === r ? a : aU(r, a)),
            lR(e, t, r, a, n)
          );
        case 1:
          return (
            (r = t.type),
            (a = t.pendingProps),
            (a = t.elementType === r ? a : aU(r, a)),
            lT(e, t, r, a, n)
          );
        case 3:
          e: {
            if ((lN(t), null === e)) throw Error(d(387));
            (r = t.pendingProps),
              (a = (o = t.memoizedState).element),
              aX(e, t),
              a4(t, r, null, n);
            var l = t.memoizedState;
            if (((r = l.element), o.isDehydrated)) {
              if (
                ((o = {
                  element: r,
                  isDehydrated: !1,
                  cache: l.cache,
                  pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                  transitions: l.transitions,
                }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                256 & t.flags)
              ) {
                (a = ls(Error(d(423)), t)), (t = lL(e, t, r, n, a));
                break e;
              }
              if (r !== a) {
                (a = ls(Error(d(424)), t)), (t = lL(e, t, r, n, a));
                break e;
              }
              for (
                a_ = rV(t.stateNode.containerInfo.firstChild),
                  ak = t,
                  ax = !0,
                  aE = null,
                  n = oi(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
            } else {
              if ((aM(), r === a)) {
                t = lj(e, t, n);
                break e;
              }
              lw(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 5:
          return (
            om(t),
            null === e && aN(t),
            (r = t.type),
            (a = t.pendingProps),
            (o = null !== e ? e.memoizedProps : null),
            (l = a.children),
            rP(r, a) ? (l = null) : null !== o && rP(r, o) && (t.flags |= 32),
            lE(e, t),
            lw(e, t, l, n),
            t.child
          );
        case 6:
          return null === e && aN(t), null;
        case 13:
          return lM(e, t, n);
        case 4:
          return (
            op(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            null === e ? (t.child = ol(t, null, r, n)) : lw(e, t, r, n),
            t.child
          );
        case 11:
          return (
            (r = t.type),
            (a = t.pendingProps),
            (a = t.elementType === r ? a : aU(r, a)),
            lS(e, t, r, a, n)
          );
        case 7:
          return lw(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
          return lw(e, t, t.pendingProps.children, n), t.child;
        case 10:
          e: {
            if (
              ((r = t.type._context),
              (a = t.pendingProps),
              (o = t.memoizedProps),
              (l = a.value),
              r2(aO, r._currentValue),
              (r._currentValue = l),
              null !== o)
            ) {
              if (nG(o.value, l)) {
                if (o.children === a.children && !r5.current) {
                  t = lj(e, t, n);
                  break e;
                }
              } else
                for (null !== (o = t.child) && (o.return = t); null !== o; ) {
                  var i = o.dependencies;
                  if (null !== i) {
                    l = o.child;
                    for (var u = i.firstContext; null !== u; ) {
                      if (u.context === r) {
                        if (1 === o.tag) {
                          (u = aJ(-1, n & -n)).tag = 2;
                          var s = o.updateQueue;
                          if (null !== s) {
                            var c = (s = s.shared).pending;
                            null === c
                              ? (u.next = u)
                              : ((u.next = c.next), (c.next = u)),
                              (s.pending = u);
                          }
                        }
                        (o.lanes |= n),
                          null !== (u = o.alternate) && (u.lanes |= n),
                          a$(o.return, n, t),
                          (i.lanes |= n);
                        break;
                      }
                      u = u.next;
                    }
                  } else if (10 === o.tag)
                    l = o.type === t.type ? null : o.child;
                  else if (18 === o.tag) {
                    if (null === (l = o.return)) throw Error(d(341));
                    (l.lanes |= n),
                      null !== (i = l.alternate) && (i.lanes |= n),
                      a$(l, n, t),
                      (l = o.sibling);
                  } else l = o.child;
                  if (null !== l) l.return = o;
                  else
                    for (l = o; null !== l; ) {
                      if (l === t) {
                        l = null;
                        break;
                      }
                      if (null !== (o = l.sibling)) {
                        (o.return = l.return), (l = o);
                        break;
                      }
                      l = l.return;
                    }
                  o = l;
                }
            }
            lw(e, t, a.children, n), (t = t.child);
          }
          return t;
        case 9:
          return (
            (a = t.type),
            (r = t.pendingProps.children),
            aW(t, n),
            (r = r((a = aH(a)))),
            (t.flags |= 1),
            lw(e, t, r, n),
            t.child
          );
        case 14:
          return (
            (a = aU((r = t.type), t.pendingProps)),
            (a = aU(r.type, a)),
            lk(e, t, r, a, n)
          );
        case 15:
          return l_(e, t, t.type, t.pendingProps, n);
        case 17:
          return (
            (r = t.type),
            (a = t.pendingProps),
            (a = t.elementType === r ? a : aU(r, a)),
            lV(e, t),
            (t.tag = 1),
            r9(r) ? ((e = !0), an(t)) : (e = !1),
            aW(t, n),
            a7(t, r, a),
            ot(t, r, a, n),
            lC(null, t, r, !0, e, n)
          );
        case 19:
          return lI(e, t, n);
        case 22:
          return lx(e, t, n);
      }
      throw Error(d(156, t.tag));
    };
    var uh =
      'function' == typeof reportError
        ? reportError
        : function (e) {
            console.error(e);
          };
    function um(e) {
      this._internalRoot = e;
    }
    function uv(e) {
      this._internalRoot = e;
    }
    function ug(e) {
      return !(
        !e ||
        (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
      );
    }
    function uy(e) {
      return !(
        !e ||
        (1 !== e.nodeType &&
          9 !== e.nodeType &&
          11 !== e.nodeType &&
          (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
      );
    }
    function ub() {}
    function uw(e, t, n, r, a) {
      var o = n._reactRootContainer;
      if (o) {
        var l = o;
        if ('function' == typeof a) {
          var i = a;
          a = function () {
            var e = ud(l);
            i.call(e);
          };
        }
        uc(t, l, e, a);
      } else
        l = (function (e, t, n, r, a) {
          if (a) {
            if ('function' == typeof r) {
              var o = r;
              r = function () {
                var e = ud(l);
                o.call(e);
              };
            }
            var l = us(t, r, e, 0, null, !1, !1, '', ub);
            return (
              (e._reactRootContainer = l),
              (e[rW] = l.current),
              ry(8 === e.nodeType ? e.parentNode : e),
              iW(),
              l
            );
          }
          for (; (a = e.lastChild); ) e.removeChild(a);
          if ('function' == typeof r) {
            var i = r;
            r = function () {
              var e = ud(u);
              i.call(e);
            };
          }
          var u = ui(e, 0, !1, null, null, !1, !1, '', ub);
          return (
            (e._reactRootContainer = u),
            (e[rW] = u.current),
            ry(8 === e.nodeType ? e.parentNode : e),
            iW(function () {
              uc(t, u, n, r);
            }),
            u
          );
        })(n, t, e, a, r);
      return ud(l);
    }
    (uv.prototype.render = um.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (null === t) throw Error(d(409));
        uc(e, t, null, null);
      }),
      (uv.prototype.unmount = um.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (null !== e) {
            this._internalRoot = null;
            var t = e.containerInfo;
            iW(function () {
              uc(null, e, null, null);
            }),
              (t[rW] = null);
          }
        }),
      (uv.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
          var t = tC();
          e = { blockedOn: null, target: e, priority: t };
          for (var n = 0; n < tO.length && 0 !== t && t < tO[n].priority; n++);
          tO.splice(n, 0, e), 0 === n && tB(e);
        }
      }),
      (tE = function (e) {
        switch (e.tag) {
          case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
              var n = tv(t.pendingLanes);
              0 !== n &&
                (tk(t, 1 | n),
                iO(t, tn()),
                0 == (6 & ii) && ((ik = tn() + 500), au()));
            }
            break;
          case 13:
            iW(function () {
              var t = aG(e, 1);
              null !== t && iU(t, e, 1, iD());
            }),
              up(e, 1);
        }
      }),
      (tR = function (e) {
        if (13 === e.tag) {
          var t = aG(e, 134217728);
          null !== t && iU(t, e, 134217728, iD()), up(e, 134217728);
        }
      }),
      (tT = function (e) {
        if (13 === e.tag) {
          var t = iz(e),
            n = aG(e, t);
          null !== n && iU(n, e, t, iD()), up(e, t);
        }
      }),
      (tC = function () {
        return t_;
      }),
      (tN = function (e, t) {
        var n = t_;
        try {
          return (t_ = e), t();
        } finally {
          t_ = n;
        }
      }),
      (eI = function (e, t, n) {
        switch (t) {
          case 'input':
            if ((eh(e, n), (t = n.name), 'radio' === n.type && null != t)) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = rZ(r);
                  if (!a) throw Error(d(90));
                  es(r), eh(r, a);
                }
              }
            }
            break;
          case 'textarea':
            eS(e, n);
            break;
          case 'select':
            null != (t = n.value) && ey(e, !!n.multiple, t, !1);
        }
      }),
      (eW = i$),
      (eH = iW);
    var uS = {
        findFiberByHostInstance: rQ,
        bundleType: 0,
        version: '18.2.0',
        rendererPackageName: 'react-dom',
      },
      uk = {
        bundleType: uS.bundleType,
        version: uS.version,
        rendererPackageName: uS.rendererPackageName,
        rendererConfig: uS.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: R.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return null === (e = e8(e)) ? null : e.stateNode;
        },
        findFiberByHostInstance:
          uS.findFiberByHostInstance ||
          function () {
            return null;
          },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
      };
    if ('undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      var u_ = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!u_.isDisabled && u_.supportsFiber)
        try {
          (ts = u_.inject(uk)), (tc = u_);
        } catch (e) {}
    }
    ($ = { usingClientEntryPoint: !1, Events: [rG, rY, rZ, eF, e$, i$] }),
      (W = function (e, t) {
        var n =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!ug(t)) throw Error(d(200));
        return (function (e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: C,
            key: null == r ? null : '' + r,
            children: e,
            containerInfo: t,
            implementation: null,
          };
        })(e, t, null, n);
      }),
      (H = function (e, t) {
        if (!ug(e)) throw Error(d(299));
        var n = !1,
          r = '',
          a = uh;
        return (
          null != t &&
            (!0 === t.unstable_strictMode && (n = !0),
            void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
            void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
          (t = ui(e, 1, !1, null, null, n, !1, r, a)),
          (e[rW] = t.current),
          ry(8 === e.nodeType ? e.parentNode : e),
          new um(t)
        );
      }),
      (q = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
          if ('function' == typeof e.render) throw Error(d(188));
          throw Error(d(268, (e = Object.keys(e).join(','))));
        }
        return (e = null === (e = e8(t)) ? null : e.stateNode);
      }),
      (K = function (e) {
        return iW(e);
      }),
      (Q = function (e, t, n) {
        if (!uy(t)) throw Error(d(200));
        return uw(null, e, t, !0, n);
      }),
      (G = function (e, t, n) {
        if (!ug(e)) throw Error(d(405));
        var r = (null != n && n.hydratedSources) || null,
          a = !1,
          o = '',
          l = uh;
        if (
          (null != n &&
            (!0 === n.unstable_strictMode && (a = !0),
            void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
            void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
          (t = us(t, null, e, 1, null != n ? n : null, a, !1, o, l)),
          (e[rW] = t.current),
          ry(e),
          r)
        )
          for (e = 0; e < r.length; e++)
            (a = (a = (n = r[e])._getVersion)(n._source)),
              null == t.mutableSourceEagerHydrationData
                ? (t.mutableSourceEagerHydrationData = [n, a])
                : t.mutableSourceEagerHydrationData.push(n, a);
        return new uv(t);
      }),
      (Y = function (e, t, n) {
        if (!uy(t)) throw Error(d(200));
        return uw(null, e, t, !1, n);
      }),
      (Z = function (e) {
        if (!uy(e)) throw Error(d(40));
        return (
          !!e._reactRootContainer &&
          (iW(function () {
            uw(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[rW] = null);
            });
          }),
          !0)
        );
      }),
      (X = i$),
      (J = function (e, t, n, r) {
        if (!uy(n)) throw Error(d(200));
        if (null == e || void 0 === e._reactInternals) throw Error(d(38));
        return uw(e, t, n, !1, r);
      }),
      (ee = '18.2.0-next-9e3b772b8-20220608');
  }),
  L.register('fO90s', function (e, t) {
    e.exports = L('gcnCG');
  }),
  L.register('gcnCG', function (e, t) {
    function r(e, t) {
      var n = e.length;
      for (e.push(t); 0 < n; ) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < l(a, t)) (e[r] = t), (e[n] = a), (n = r);
        else break;
      }
    }
    function a(e) {
      return 0 === e.length ? null : e[0];
    }
    function o(e) {
      if (0 === e.length) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
          var i = 2 * (r + 1) - 1,
            u = e[i],
            s = i + 1,
            c = e[s];
          if (0 > l(u, n))
            s < a && 0 > l(c, u)
              ? ((e[r] = c), (e[s] = n), (r = s))
              : ((e[r] = u), (e[i] = n), (r = i));
          else if (s < a && 0 > l(c, n)) (e[r] = c), (e[s] = n), (r = s);
          else break;
        }
      }
      return t;
    }
    function l(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return 0 !== n ? n : e.id - t.id;
    }
    if (
      (n(
        e.exports,
        'unstable_now',
        () => i,
        (e) => (i = e)
      ),
      n(
        e.exports,
        'unstable_IdlePriority',
        () => u,
        (e) => (u = e)
      ),
      n(
        e.exports,
        'unstable_ImmediatePriority',
        () => s,
        (e) => (s = e)
      ),
      n(
        e.exports,
        'unstable_LowPriority',
        () => c,
        (e) => (c = e)
      ),
      n(
        e.exports,
        'unstable_NormalPriority',
        () => d,
        (e) => (d = e)
      ),
      n(
        e.exports,
        'unstable_Profiling',
        () => f,
        (e) => (f = e)
      ),
      n(
        e.exports,
        'unstable_UserBlockingPriority',
        () => p,
        (e) => (p = e)
      ),
      n(
        e.exports,
        'unstable_cancelCallback',
        () => h,
        (e) => (h = e)
      ),
      n(
        e.exports,
        'unstable_continueExecution',
        () => m,
        (e) => (m = e)
      ),
      n(
        e.exports,
        'unstable_forceFrameRate',
        () => v,
        (e) => (v = e)
      ),
      n(
        e.exports,
        'unstable_getCurrentPriorityLevel',
        () => g,
        (e) => (g = e)
      ),
      n(
        e.exports,
        'unstable_getFirstCallbackNode',
        () => y,
        (e) => (y = e)
      ),
      n(
        e.exports,
        'unstable_next',
        () => b,
        (e) => (b = e)
      ),
      n(
        e.exports,
        'unstable_pauseExecution',
        () => w,
        (e) => (w = e)
      ),
      n(
        e.exports,
        'unstable_requestPaint',
        () => S,
        (e) => (S = e)
      ),
      n(
        e.exports,
        'unstable_runWithPriority',
        () => k,
        (e) => (k = e)
      ),
      n(
        e.exports,
        'unstable_scheduleCallback',
        () => _,
        (e) => (_ = e)
      ),
      n(
        e.exports,
        'unstable_shouldYield',
        () => x,
        (e) => (x = e)
      ),
      n(
        e.exports,
        'unstable_wrapCallback',
        () => E,
        (e) => (E = e)
      ),
      'object' == typeof performance && 'function' == typeof performance.now)
    ) {
      var i,
        u,
        s,
        c,
        d,
        f,
        p,
        h,
        m,
        v,
        g,
        y,
        b,
        w,
        S,
        k,
        _,
        x,
        E,
        R,
        T = performance;
      i = function () {
        return T.now();
      };
    } else {
      var C = Date,
        N = C.now();
      i = function () {
        return C.now() - N;
      };
    }
    var L = [],
      A = [],
      P = 1,
      M = null,
      D = 3,
      z = !1,
      U = !1,
      O = !1,
      I = 'function' == typeof setTimeout ? setTimeout : null,
      V = 'function' == typeof clearTimeout ? clearTimeout : null,
      j = 'undefined' != typeof setImmediate ? setImmediate : null;
    function B(e) {
      for (var t = a(A); null !== t; ) {
        if (null === t.callback) o(A);
        else if (t.startTime <= e)
          o(A), (t.sortIndex = t.expirationTime), r(L, t);
        else break;
        t = a(A);
      }
    }
    function F(e) {
      if (((O = !1), B(e), !U)) {
        if (null !== a(L)) (U = !0), J($);
        else {
          var t = a(A);
          null !== t && ee(F, t.startTime - e);
        }
      }
    }
    function $(e, t) {
      (U = !1), O && ((O = !1), V(q), (q = -1)), (z = !0);
      var n = D;
      try {
        for (
          B(t), M = a(L);
          null !== M && (!(M.expirationTime > t) || (e && !G()));

        ) {
          var r = M.callback;
          if ('function' == typeof r) {
            (M.callback = null), (D = M.priorityLevel);
            var l = r(M.expirationTime <= t);
            (t = i()),
              'function' == typeof l ? (M.callback = l) : M === a(L) && o(L),
              B(t);
          } else o(L);
          M = a(L);
        }
        if (null !== M) var u = !0;
        else {
          var s = a(A);
          null !== s && ee(F, s.startTime - t), (u = !1);
        }
        return u;
      } finally {
        (M = null), (D = n), (z = !1);
      }
    }
    'undefined' != typeof navigator &&
      void 0 !== navigator.scheduling &&
      void 0 !== navigator.scheduling.isInputPending &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    var W = !1,
      H = null,
      q = -1,
      K = 5,
      Q = -1;
    function G() {
      return !(i() - Q < K);
    }
    function Y() {
      if (null !== H) {
        var e = i();
        Q = e;
        var t = !0;
        try {
          t = H(!0, e);
        } finally {
          t ? R() : ((W = !1), (H = null));
        }
      } else W = !1;
    }
    if ('function' == typeof j)
      R = function () {
        j(Y);
      };
    else if ('undefined' != typeof MessageChannel) {
      var Z = new MessageChannel(),
        X = Z.port2;
      (Z.port1.onmessage = Y),
        (R = function () {
          X.postMessage(null);
        });
    } else
      R = function () {
        I(Y, 0);
      };
    function J(e) {
      (H = e), W || ((W = !0), R());
    }
    function ee(e, t) {
      q = I(function () {
        e(i());
      }, t);
    }
    (u = 5),
      (s = 1),
      (c = 4),
      (d = 3),
      (f = null),
      (p = 2),
      (h = function (e) {
        e.callback = null;
      }),
      (m = function () {
        U || z || ((U = !0), J($));
      }),
      (v = function (e) {
        0 > e || 125 < e
          ? console.error(
              'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
            )
          : (K = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (g = function () {
        return D;
      }),
      (y = function () {
        return a(L);
      }),
      (b = function (e) {
        switch (D) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = D;
        }
        var n = D;
        D = t;
        try {
          return e();
        } finally {
          D = n;
        }
      }),
      (w = function () {}),
      (S = function () {}),
      (k = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = D;
        D = e;
        try {
          return t();
        } finally {
          D = n;
        }
      }),
      (_ = function (e, t, n) {
        var o = i();
        switch (
          ((n =
            'object' == typeof n &&
            null !== n &&
            'number' == typeof (n = n.delay) &&
            0 < n
              ? o + n
              : o),
          e)
        ) {
          case 1:
            var l = -1;
            break;
          case 2:
            l = 250;
            break;
          case 5:
            l = 1073741823;
            break;
          case 4:
            l = 1e4;
            break;
          default:
            l = 5e3;
        }
        return (
          (l = n + l),
          (e = {
            id: P++,
            callback: t,
            priorityLevel: e,
            startTime: n,
            expirationTime: l,
            sortIndex: -1,
          }),
          n > o
            ? ((e.sortIndex = n),
              r(A, e),
              null === a(L) &&
                e === a(A) &&
                (O ? (V(q), (q = -1)) : (O = !0), ee(F, n - o)))
            : ((e.sortIndex = l), r(L, e), U || z || ((U = !0), J($))),
          e
        );
      }),
      (x = G),
      (E = function (e) {
        var t = D;
        return function () {
          var n = D;
          D = t;
          try {
            return e.apply(this, arguments);
          } finally {
            D = n;
          }
        };
      });
  });
var A = {};
A = L('1b2ls');
var P = L('acw62'),
  M = {};
!(
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  (function e() {
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (
      'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
    )
      try {
        // Verify that the code above has been dead code eliminated (DCE'd).
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (e) {
        // DevTools shouldn't crash React, no matter what.
        // We should still report in case we break this code.
        console.error(e);
      }
  })()
),
  (v = (M = L('Xw6Mv')).createRoot),
  M.hydrateRoot;
/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var P = L('acw62');
/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function D() {
  return (D = Object.assign
    ? Object.assign.bind()
    : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
}
/**
 * A POP indicates a change to an arbitrary index in the history stack, such
 * as a back or forward navigation. It does not describe the direction of the
 * navigation, only that the current index changed.
 *
 * Note: This is the default action for newly created history objects.
 */ ((l = g || (g = {})).Pop = 'POP'),
  /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */ (l.Push = 'PUSH'),
  /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */ (l.Replace = 'REPLACE');
const z = 'popstate';
function U(e, t) {
  if (!1 === e || null == e) throw Error(t);
}
function O(e, t) {
  if (!e) {
    // eslint-disable-next-line no-console
    'undefined' != typeof console && console.warn(t);
    try {
      // Welcome to debugging history!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw Error(t); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}
/**
 * For browser-based histories, we combine the state and key into an object
 */ function I(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
/**
 * Creates a Location object with a unique key from the given Path
 */ function V(e, t, n, r) {
  return (
    void 0 === n && (n = null),
    D(
      { pathname: 'string' == typeof e ? e : e.pathname, search: '', hash: '' },
      'string' == typeof t ? B(t) : t,
      {
        state: n, // TODO: This could be cleaned up.  push/replace should probably just take
        // full Locations now and avoid the need to run through this flow at all
        // But that's a pretty big refactor to the current test suite so going to
        // keep as is for the time being and just let any incoming keys take precedence
        key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
      }
    )
  );
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */ function j(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && '?' !== n && (t += '?' === n.charAt(0) ? n : '?' + n),
    r && '#' !== r && (t += '#' === r.charAt(0) ? r : '#' + r),
    t
  );
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */ function B(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
((i = y || (y = {})).data = 'data'),
  (i.deferred = 'deferred'),
  (i.redirect = 'redirect'),
  (i.error = 'error');
const F = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']); // Walk the route tree generating unique IDs where necessary so we are working
// solely with AgnosticDataRouteObject's within the Router
function $(e, t, n, r) {
  return (
    void 0 === n && (n = []),
    void 0 === r && (r = {}),
    e.map((e, a) => {
      let o = [...n, a],
        l = 'string' == typeof e.id ? e.id : o.join('-');
      if (
        (U(
          !0 !== e.index || !e.children,
          'Cannot specify children on an index route'
        ),
        U(
          !r[l],
          'Found a route id collision on id "' +
            l +
            '".  Route id\'s must be globally unique within Data Router usages'
        ),
        !0 === e.index)
      ) {
        let n = D({}, e, t(e), { id: l });
        return (r[l] = n), n;
      }
      {
        let n = D({}, e, t(e), { id: l, children: void 0 });
        return (
          (r[l] = n), e.children && (n.children = $(e.children, t, o, r)), n
        );
      }
    })
  );
}
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */ function W(e, t, n) {
  void 0 === n && (n = '/');
  let r = K(('string' == typeof t ? B(t) : t).pathname || '/', n);
  if (null == r) return null;
  let a = (function e(t, n, r, a) {
    void 0 === n && (n = []),
      void 0 === r && (r = []),
      void 0 === a && (a = '');
    let o = (t, o, l) => {
      var i;
      let u,
        s,
        c = {
          relativePath: void 0 === l ? t.path || '' : l,
          caseSensitive: !0 === t.caseSensitive,
          childrenIndex: o,
          route: t,
        };
      c.relativePath.startsWith('/') &&
        (U(
          c.relativePath.startsWith(a),
          'Absolute route path "' +
            c.relativePath +
            '" nested under path "' +
            a +
            '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
        ),
        (c.relativePath = c.relativePath.slice(a.length)));
      let d = Z([a, c.relativePath]),
        f = r.concat(c);
      t.children &&
        t.children.length > 0 &&
        (U(
          // @ts-expect-error
          !0 !== t.index,
          'Index routes must not have child routes. Please remove all child routes from route path "' +
            d +
            '".'
        ),
        e(t.children, n, f, d)),
        (null != t.path || t.index) &&
          n.push({
            path: d,
            score:
              ((i = t.index),
              (s = (u = d.split('/')).length),
              u.some(q) && (s += -2),
              i && (s += 2),
              u
                .filter((e) => !q(e))
                .reduce((e, t) => e + (H.test(t) ? 3 : '' === t ? 1 : 10), s)),
            routesMeta: f,
          });
    };
    return (
      t.forEach((e, t) => {
        var n; // coarse-grain check for optional params
        if ('' !== e.path && null != (n = e.path) && n.includes('?'))
          for (let n of /**
           * Computes all combinations of optional path segments for a given path,
           * excluding combinations that are ambiguous and of lower priority.
           *
           * For example, `/one/:two?/three/:four?/:five?` explodes to:
           * - `/one/three`
           * - `/one/:two/three`
           * - `/one/three/:four`
           * - `/one/three/:five`
           * - `/one/:two/three/:four`
           * - `/one/:two/three/:five`
           * - `/one/three/:four/:five`
           * - `/one/:two/three/:four/:five`
           */ (function e(t) {
            let n = t.split('/');
            if (0 === n.length) return [];
            let [r, ...a] = n,
              o = r.endsWith('?'),
              l = r.replace(/\?$/, '');
            if (0 === a.length)
              // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
              return o ? [l, ''] : [l];
            let i = e(a.join('/')),
              u = []; // for absolute paths, ensure `/` instead of empty segment
            return (
              // All child paths with the prefix.  Do this for all children before the
              // optional version for all children so we get consistent ordering where the
              // parent optional aspect is preferred as required.  Otherwise, we can get
              // child sections interspersed where deeper optional segments are higher than
              // parent optional segments, where for example, /:two would explodes _earlier_
              // then /:one.  By always including the parent as required _for all children_
              // first, we avoid this issue
              u.push(...i.map((e) => ('' === e ? l : [l, e].join('/')))),
              o && u.push(...i),
              u.map((e) => (t.startsWith('/') && '' === e ? '/' : e))
            );
          })(e.path))
            o(e, t, n);
        else o(e, t);
      }),
      n
    );
  })(e);
  !(function (e) {
    e.sort((e, t) => {
      var n, r;
      return e.score !== t.score
        ? t.score - e.score // Higher score first
        : ((n = e.routesMeta.map((e) => e.childrenIndex)),
          (r = t.routesMeta.map((e) => e.childrenIndex)),
          n.length === r.length && n.slice(0, -1).every((e, t) => e === r[t]) // first. This allows people to have fine-grained control over the matching
            ? // behavior by simply putting routes with identical paths in the order they
              // want them tried.
              n[n.length - 1] - r[r.length - 1] // so they sort equally.
            : 0);
    });
  })(a);
  let o = null;
  for (let e = 0; null == o && e < a.length; ++e)
    o = (function (e, t) {
      let { routesMeta: n } = e,
        r = {},
        a = '/',
        o = [];
      for (let e = 0; e < n.length; ++e) {
        let l = n[e],
          i = e === n.length - 1,
          u = '/' === a ? t : t.slice(a.length) || '/',
          s = /**
           * Performs pattern matching on a URL pathname and returns information about
           * the match.
           *
           * @see https://reactrouter.com/utils/match-path
           */ (function (e, t) {
            'string' == typeof e &&
              (e = { path: e, caseSensitive: !1, end: !0 });
            let [n, r] = (function (e, t, n) {
                void 0 === t && (t = !1),
                  void 0 === n && (n = !0),
                  O(
                    '*' === e || !e.endsWith('*') || e.endsWith('/*'),
                    'Route path "' +
                      e +
                      '" will be treated as if it were "' +
                      e.replace(/\*$/, '/*') +
                      '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                      e.replace(/\*$/, '/*') +
                      '".'
                  );
                let r = [],
                  a =
                    '^' +
                    e
                      .replace(/\/*\*?$/, '') // Ignore trailing / and /*, we'll handle it below
                      .replace(/^\/*/, '/') // Make sure it has a leading /
                      .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&') // Escape special regex chars
                      .replace(
                        /\/:(\w+)/g,
                        (e, t) => (r.push(t), '/([^\\/]+)')
                      );
                return (
                  e.endsWith('*')
                    ? (r.push('*'),
                      (a +=
                        '*' === e || '/*' === e
                          ? '(.*)$' // Already matched the initial /, just match the rest
                          : '(?:\\/(.+)|\\/*)$'))
                    : n
                    ? (a += '\\/*$')
                    : '' !== e &&
                      '/' !== e && // then we have _some_ form of path in our regex so we should expect to
                      // match only if we find the end of this path segment.  Look for an optional
                      // non-captured trailing slash (to match a portion of the URL) or the end
                      // of the path (if we've matched to the end).  We used to do this with a
                      // word boundary but that gives false positives on routes like
                      // /user-preferences since `-` counts as a word boundary.
                      (a += '(?:(?=\\/|$))'),
                  [new RegExp(a, t ? void 0 : 'i'), r]
                );
              })(e.path, e.caseSensitive, e.end),
              a = t.match(n);
            if (!a) return null;
            let o = a[0],
              l = o.replace(/(.)\/+$/, '$1'),
              i = a.slice(1);
            return {
              params: r.reduce((e, t, n) => {
                // We need to compute the pathnameBase here using the raw splat value
                // instead of using params["*"] later because it will be decoded then
                if ('*' === t) {
                  let e = i[n] || '';
                  l = o.slice(0, o.length - e.length).replace(/(.)\/+$/, '$1');
                }
                return (
                  (e[t] = (function (e, t) {
                    try {
                      return decodeURIComponent(e);
                    } catch (n) {
                      return (
                        O(
                          !1,
                          'The value for the URL param "' +
                            t +
                            '" will not be decoded because the string "' +
                            e +
                            '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                            n +
                            ').'
                        ),
                        e
                      );
                    }
                  })(i[n] || '', t)),
                  e
                );
              }, {}),
              pathname: o,
              pathnameBase: l,
              pattern: e,
            };
          })(
            { path: l.relativePath, caseSensitive: l.caseSensitive, end: i },
            u
          );
        if (!s) return null;
        Object.assign(r, s.params);
        let c = l.route;
        o.push({
          // TODO: Can this as be avoided?
          params: r,
          pathname: Z([a, s.pathname]),
          pathnameBase: X(Z([a, s.pathnameBase])),
          route: c,
        }),
          '/' !== s.pathnameBase && (a = Z([a, s.pathnameBase]));
      }
      return o;
    })(
      a[e], // or from router.navigate, but we want to match against the unencoded
      // paths in the route definitions.  Memory router locations won't be
      // encoded here but there also shouldn't be anything to decode so this
      // should be a safe operation.  This avoids needing matchRoutes to be
      // history-aware.
      (function (e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            O(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ').'
            ),
            e
          );
        }
      })(r)
    );
  return o;
}
const H = /^:\w+$/,
  q = (e) => '*' === e;
/**
 * @private
 */ function K(e, t) {
  if ('/' === t) return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null; // We want to leave trailing slash behavior in the user's control, so if they
  // specify a basename with a trailing slash, we should support it
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && '/' !== r ? null : e.slice(n) || '/';
}
function Q(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' + t) +
    '` field [' +
    JSON.stringify(r) +
    '].  Please separate it out to the `to.' +
    n +
    '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
  );
}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */ function G(e) {
  return e.filter(
    (e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
  );
}
/**
 * @private
 */ function Y(e, t, n, r) {
  let a, o;
  void 0 === r && (r = !1),
    'string' == typeof e
      ? (a = B(e))
      : (U(
          !(a = D({}, e)).pathname || !a.pathname.includes('?'),
          Q('?', 'pathname', 'search', a)
        ),
        U(
          !a.pathname || !a.pathname.includes('#'),
          Q('#', 'pathname', 'hash', a)
        ),
        U(!a.search || !a.search.includes('#'), Q('#', 'search', 'hash', a)));
  let l = '' === e || '' === a.pathname,
    i = l ? '/' : a.pathname; // Routing is relative to the current pathname if explicitly requested.
  //
  // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.
  if (r || null == i) o = n;
  else {
    let e = t.length - 1;
    if (i.startsWith('..')) {
      let t = i.split('/'); // Each leading .. segment means "go up one route" instead of "go up one
      // URL segment".  This is a key difference from how <a href> works and a
      // major reason we call this a "to" value instead of a "href".
      for (; '..' === t[0]; ) t.shift(), (e -= 1);
      a.pathname = t.join('/');
    } // If there are more ".." segments than parent routes, resolve relative to
    // the root / URL.
    o = e >= 0 ? t[e] : '/';
  }
  let u = /**
     * Returns a resolved path object relative to the given pathname.
     *
     * @see https://reactrouter.com/utils/resolve-path
     */ (function (e, t) {
      let n;
      void 0 === t && (t = '/');
      let {
        pathname: r,
        search: a = '',
        hash: o = '',
      } = 'string' == typeof e ? B(e) : e;
      return {
        pathname: r
          ? r.startsWith('/')
            ? r
            : ((n = t.replace(/\/+$/, '').split('/')),
              r.split('/').forEach((e) => {
                '..' === e ? n.length > 1 && n.pop() : '.' !== e && n.push(e);
              }),
              n.length > 1 ? n.join('/') : '/')
          : t,
        search: J(a),
        hash: ee(o),
      };
    })(a, o),
    s = i && '/' !== i && i.endsWith('/'),
    c = (l || '.' === i) && n.endsWith('/');
  return !u.pathname.endsWith('/') && (s || c) && (u.pathname += '/'), u;
}
/**
 * @private
 */ const Z = (e) => e.join('/').replace(/\/\/+/g, '/'),
  X = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  J = (e) => (e && '?' !== e ? (e.startsWith('?') ? e : '?' + e) : ''),
  ee = (e) => (e && '#' !== e ? (e.startsWith('#') ? e : '#' + e) : '');
/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 */ class et {
  constructor(e, t, n, r) {
    void 0 === r && (r = !1),
      (this.status = e),
      (this.statusText = t || ''),
      (this.internal = r),
      n instanceof Error
        ? ((this.data = n.toString()), (this.error = n))
        : (this.data = n);
  }
}
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */ function en(e) {
  return (
    null != e &&
    'number' == typeof e.status &&
    'string' == typeof e.statusText &&
    'boolean' == typeof e.internal &&
    'data' in e
  );
}
const er = ['post', 'put', 'patch', 'delete'],
  ea = new Set(er),
  eo = ['get', ...er],
  el = new Set(eo),
  ei = new Set([301, 302, 303, 307, 308]),
  eu = new Set([307, 308]),
  es = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  ec = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  ed = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  ef = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ep = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });
function eh(e, t, n, r, a, o, l) {
  let i, u;
  if (null != o && 'path' !== l) {
    // relative to the correct source route.  When using relative:path,
    // fromRouteId is ignored since that is always relative to the current
    // location path
    for (let e of ((i =
      // Grab matches up to the calling route so our route-relative logic is
      []),
    t))
      if ((i.push(e), e.route.id === o)) {
        u = e;
        break;
      }
  } else (i = t), (u = t[t.length - 1]); // Resolve the relative path
  let s = Y(
    a || '.',
    G(i).map((e) => e.pathnameBase),
    K(e.pathname, n) || e.pathname,
    'path' === l
  );
  return (
    null == a && ((s.search = e.search), (s.hash = e.hash)),
    (null == a || '' === a || '.' === a) &&
      u &&
      u.route.index &&
      !eO(s.search) &&
      (s.search = s.search ? s.search.replace(/^\?/, '?index&') : '?index'),
    r &&
      '/' !== n &&
      (s.pathname = '/' === s.pathname ? n : Z([n, s.pathname])),
    j(s)
  );
} // Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params
function em(e, t, n, r) {
  var a;
  let o, l; // Return location verbatim on non-submission navigations
  if (
    !r ||
    !(
      null != r &&
      (('formData' in r && null != r.formData) ||
        ('body' in r && void 0 !== r.body))
    )
  )
    return { path: n };
  if (r.formMethod && ((a = r.formMethod), !el.has(a.toLowerCase())))
    return { path: n, error: eC(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: eC(400, { type: 'invalid-body' }) }),
    u = r.formMethod || 'get',
    s = e ? u.toUpperCase() : u.toLowerCase(),
    c = eL(n);
  if (void 0 !== r.body) {
    if ('text/plain' === r.formEncType) {
      // text only support POST/PUT/PATCH/DELETE submissions
      if (!eD(s)) return i();
      let e =
        'string' == typeof r.body
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((e, t) => {
              let [n, r] = t;
              return '' + e + n + '=' + r + '\n';
            }, '')
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: s,
          formAction: c,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: e,
        },
      };
    }
    if ('application/json' === r.formEncType) {
      // json only supports POST/PUT/PATCH/DELETE submissions
      if (!eD(s)) return i();
      try {
        let e = 'string' == typeof r.body ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: s,
            formAction: c,
            formEncType: r.formEncType,
            formData: void 0,
            json: e,
            text: void 0,
          },
        };
      } catch (e) {
        return i();
      }
    }
  }
  if (
    (U(
      'function' == typeof FormData,
      'FormData is not available in this environment'
    ),
    r.formData)
  )
    (o = ek(r.formData)), (l = r.formData);
  else if (r.body instanceof FormData) (o = ek(r.body)), (l = r.body);
  else if (r.body instanceof URLSearchParams) l = e_((o = r.body));
  else if (null == r.body) (o = new URLSearchParams()), (l = new FormData());
  else
    try {
      (o = new URLSearchParams(r.body)), (l = e_(o));
    } catch (e) {
      return i();
    }
  let d = {
    formMethod: s,
    formAction: c,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: l,
    json: void 0,
    text: void 0,
  };
  if (eD(d.formMethod)) return { path: n, submission: d }; // Flatten submission onto URLSearchParams for GET submissions
  let f = B(n);
  return (
    t && f.search && eO(f.search) && o.append('index', ''),
    (f.search = '?' + o),
    { path: j(f), submission: d }
  );
}
function ev(e, t, n, r, a, o, l, i, u, s, c, d, f, p) {
  let h = p ? Object.values(p)[0] : f ? Object.values(f)[0] : void 0,
    m = e.createURL(t.location),
    v = e.createURL(a),
    g = // Filter out all routes below any caught error as they aren't going to
      // render so we don't need to load them
      (function (e, t) {
        let n = e;
        if (t) {
          let r = e.findIndex((e) => e.route.id === t);
          r >= 0 && (n = e.slice(0, r));
        }
        return n;
      })(n, p ? Object.keys(p)[0] : void 0).filter((e, n) => {
        var a, i;
        let u, s;
        if (e.route.lazy) return !0;
        if (null == e.route.loader) return !1; // Always call the loader on new route instances and pending defer cancellations
        if (
          ((a = t.loaderData),
          (u =
            !(i = t.matches[n]) || // [a, b] -> [a, c]
            e.route.id !== i.route.id),
          (s = void 0 === a[e.route.id]),
          u || s || l.some((t) => t === e.route.id))
        )
          return !0; // This is the default implementation for when we revalidate.  If the route
        // provides it's own implementation, then we give them full control but
        // provide this value so they can leverage it if needed after they check
        // their own specific use cases
        let c = t.matches[n];
        return ey(
          e,
          D(
            {
              currentUrl: m,
              currentParams: c.params,
              nextUrl: v,
              nextParams: e.params,
            },
            r,
            {
              actionResult: h,
              defaultShouldRevalidate:
                o || // Clicked the same link, resubmitted a GET form
                m.pathname + m.search === v.pathname + v.search || // Search params affect all loaders
                m.search !== v.search ||
                eg(c, e),
            }
          )
        );
      }),
    y = [];
  return (
    u.forEach((e, a) => {
      // Don't revalidate if fetcher won't be present in the subsequent render
      if (!n.some((t) => t.route.id === e.routeId)) return;
      let l = W(c, e.path, d); // If the fetcher path no longer matches, push it in with null matches so
      // we can trigger a 404 in callLoadersAndMaybeResolveData.  Note this is
      // currently only a use-case for Remix HMR where the route tree can change
      // at runtime and remove a route previously loaded via a fetcher
      if (!l) {
        y.push({
          key: a,
          routeId: e.routeId,
          path: e.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      } // Revalidating fetchers are decoupled from the route matches since they
      // load from a static href.  They revalidate based on explicit revalidation
      // (submission, useRevalidator, or X-Remix-Revalidate)
      let u = t.fetchers.get(a),
        f = eI(l, e.path);
      !s.has(a) &&
        (i.includes(a) ||
          (u && 'idle' !== u.state && void 0 === u.data
            ? o
            : ey(
                f,
                D(
                  {
                    currentUrl: m,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: v,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  { actionResult: h, defaultShouldRevalidate: o }
                )
              ))) &&
        y.push({
          key: a,
          routeId: e.routeId,
          path: e.path,
          matches: l,
          match: f,
          controller: new AbortController(),
        });
    }),
    [g, y]
  );
}
function eg(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    (null != n && n.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function ey(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if ('boolean' == typeof n) return n;
  }
  return t.defaultShouldRevalidate;
}
/**
 * Execute route.lazy() methods to lazily load route modules (loader, action,
 * shouldRevalidate) and update the routeManifest in place which shares objects
 * with dataRoutes so those get updated as well.
 */ async function eb(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy(); // If the lazy route function was executed and removed by another parallel
  // call then we can return - first lazy() to finish wins because the return
  // value of lazy is expected to be static
  if (!e.lazy) return;
  let a = n[e.id];
  U(a, 'No route found in manifest'); // Update the route in place.  This should be safe because there's no way
  // we could yet be sitting on this route as we can't get there without
  // resolving lazy() first.
  //
  // This is different than the HMR "update" use-case where we may actively be
  // on the route being updated.  The main concern boils down to "does this
  // mutation affect any ongoing navigations or any current state.matches
  // values?".  If not, it should be safe to update in place.
  let o = {};
  for (let e in r) {
    let t =
      void 0 !== a[e] && // This property isn't static since it should always be updated based
      // on the route updates
      'hasErrorBoundary' !== e;
    O(
      !t,
      'Route "' +
        a.id +
        '" has a static property "' +
        e +
        '" defined but its lazy function is also returning a value for this property. The lazy route property "' +
        e +
        '" will be ignored.'
    ),
      t || F.has(e) || (o[e] = r[e]);
  } // Mutate the route with the provided updates.  Do this first so we pass
  // the updated version to mapRouteProperties
  Object.assign(a, o), // Mutate the `hasErrorBoundary` property on the route based on the route
    // updates and remove the `lazy` function so we don't resolve the lazy
    // route again.
    Object.assign(a, D({}, t(a), { lazy: void 0 }));
}
async function ew(e, t, n, r, a, o, l, i) {
  var u, s, c, d;
  let f, p, h;
  void 0 === i && (i = {});
  let m = (e) => {
    let r;
    let a = new Promise((e, t) => (r = t));
    return (
      (h = () => r()),
      t.signal.addEventListener('abort', h),
      Promise.race([
        e({ request: t, params: n.params, context: i.requestContext }),
        a,
      ])
    );
  };
  try {
    let r = n.route[e];
    if (n.route.lazy) {
      if (r) p = (await Promise.all([m(r), eb(n.route, o, a)]))[0];
      else if (
        // Load lazy route module, then run any returned handler
        (await eb(n.route, o, a), (r = n.route[e]))
      )
        // with un-abortable behavior of handler execution on non-lazy or
        // previously-lazy-loaded routes
        p = await m(r);
      else {
        if ('action' !== e)
          // hit the invariant below that errors on returning undefined.
          return { type: y.data, data: void 0 };
        let r = new URL(t.url),
          a = r.pathname + r.search;
        throw eC(405, { method: t.method, pathname: a, routeId: n.route.id });
      }
    } else if (r) p = await m(r);
    else {
      let e = new URL(t.url),
        n = e.pathname + e.search;
      throw eC(404, { pathname: n });
    }
    U(
      void 0 !== p,
      'You defined ' +
        ('action' === e ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' + n.route.id) +
        '" but didn\'t return anything from your `' +
        e +
        '` function. Please return a value or `null`.'
    );
  } catch (e) {
    (f = y.error), (p = e);
  } finally {
    h && t.signal.removeEventListener('abort', h);
  }
  if (
    null != (u = p) &&
    'number' == typeof u.status &&
    'string' == typeof u.statusText &&
    'object' == typeof u.headers &&
    void 0 !== u.body
  ) {
    let e,
      a = p.status; // Process redirects
    if (ei.has(a)) {
      let e = p.headers.get('Location'); // Support relative routing in internal redirects
      if (
        (U(
          e,
          'Redirects returned/thrown from loaders/actions must have a Location header'
        ),
        ef.test(e))
      ) {
        if (!i.isStaticRequest) {
          // Strip off the protocol+origin for same-origin + same-basename absolute
          // redirects. If this is a static request, we can let it go back to the
          // browser as-is
          let n = new URL(t.url),
            r = new URL(e.startsWith('//') ? n.protocol + e : e),
            a = null != K(r.pathname, l);
          r.origin === n.origin && a && (e = r.pathname + r.search + r.hash);
        }
      } else e = eh(new URL(t.url), r.slice(0, r.indexOf(n) + 1), l, !0, e); // Don't process redirects in the router during static requests requests.
      // Instead, throw the Response and let the server handle it with an HTTP
      // redirect.  We also update the Location header in place in this flow so
      // basename and relative routing is taken into account
      if (i.isStaticRequest) throw (p.headers.set('Location', e), p);
      return {
        type: y.redirect,
        status: a,
        location: e,
        revalidate: null !== p.headers.get('X-Remix-Revalidate'),
        reloadDocument: null !== p.headers.get('X-Remix-Reload-Document'),
      };
    } // For SSR single-route requests, we want to hand Responses back directly
    // without unwrapping.  We do this with the QueryRouteResponse wrapper
    // interface so we can know whether it was returned or thrown
    if (i.isRouteRequest)
      throw { type: f === y.error ? y.error : y.data, response: p };
    let o = p.headers.get('Content-Type');
    return ((e =
      o && /\bapplication\/json\b/.test(o) ? await p.json() : await p.text()),
    f === y.error)
      ? { type: f, error: new et(a, p.statusText, e), headers: p.headers }
      : { type: y.data, data: e, statusCode: p.status, headers: p.headers };
  }
  return f === y.error
    ? { type: f, error: p }
    : (s = p) &&
      'object' == typeof s &&
      'object' == typeof s.data &&
      'function' == typeof s.subscribe &&
      'function' == typeof s.cancel &&
      'function' == typeof s.resolveData
    ? {
        type: y.deferred,
        deferredData: p,
        statusCode: null == (c = p.init) ? void 0 : c.status,
        headers:
          (null == (d = p.init) ? void 0 : d.headers) &&
          new Headers(p.init.headers),
      }
    : { type: y.data, data: p };
} // Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)
function eS(e, t, n, r) {
  let a = e.createURL(eL(t)).toString(),
    o = { signal: n };
  if (r && eD(r.formMethod)) {
    let { formMethod: e, formEncType: t } = r; // Didn't think we needed this but it turns out unlike other methods, patch
    // won't be properly normalized to uppercase and results in a 405 error.
    // See: https://fetch.spec.whatwg.org/#concept-method
    (o.method = e.toUpperCase()),
      'application/json' === t
        ? ((o.headers = new Headers({ 'Content-Type': t })),
          (o.body = JSON.stringify(r.json)))
        : 'text/plain' === t
        ? (o.body = r.text)
        : 'application/x-www-form-urlencoded' === t && r.formData
        ? (o.body = ek(r.formData))
        : (o.body = r.formData);
  }
  return new Request(a, o);
}
function ek(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, 'string' == typeof r ? r : r.name);
  return t;
}
function e_(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function ex(e, t, n, r, a, o, l, i) {
  var u;
  let s, c, d, f, p;
  let { loaderData: h, errors: m } =
    ((u = a),
    (c = {}),
    (d = null),
    (f = !1),
    (p = {}), // Process loader results into state.loaderData/state.errors
    r.forEach((e, r) => {
      let a = n[r].route.id;
      if (
        (U(!eM(e), 'Cannot handle redirect results in processLoaderData'),
        eP(e))
      ) {
        // Look upwards from the matched route for the closest ancestor
        // error boundary, defaulting to the root match
        let n = eR(t, a),
          r = e.error;
        u && ((r = Object.values(u)[0]), (u = void 0)),
          null == (d = d || {})[n.route.id] && (d[n.route.id] = r), // Clear our any prior loaderData for the throwing route
          (c[a] = void 0),
          f || ((f = !0), (s = en(e.error) ? e.error.status : 500)),
          e.headers && (p[a] = e.headers);
      } else
        eA(e)
          ? (i.set(a, e.deferredData), (c[a] = e.deferredData.data))
          : (c[a] = e.data),
          null == e.statusCode ||
            200 === e.statusCode ||
            f ||
            (s = e.statusCode),
          e.headers && (p[a] = e.headers);
    }),
    u && ((d = u), (c[Object.keys(u)[0]] = void 0)),
    { loaderData: c, errors: d, statusCode: s || 200, loaderHeaders: p }); // Process results from our revalidating fetchers
  for (let t = 0; t < o.length; t++) {
    let { key: n, match: r, controller: a } = o[t];
    U(
      void 0 !== l && void 0 !== l[t],
      'Did not find corresponding fetcher result'
    );
    let i = l[t]; // Process fetcher non-redirect errors
    if (!a || !a.signal.aborted) {
      if (eP(i)) {
        let t = eR(e.matches, null == r ? void 0 : r.route.id);
        (m && m[t.route.id]) || (m = D({}, m, { [t.route.id]: i.error })),
          e.fetchers.delete(n);
      } else if (eM(i))
        // keep this to type narrow to a success result in the else
        U(!1, 'Unhandled fetcher revalidation redirect');
      else if (eA(i))
        // in resolveDeferredResults
        U(!1, 'Unhandled fetcher deferred data');
      else {
        let t = eF(i.data);
        e.fetchers.set(n, t);
      }
    }
  }
  return { loaderData: h, errors: m };
}
function eE(e, t, n, r) {
  let a = D({}, t);
  for (let o of n) {
    let n = o.route.id;
    if (
      (t.hasOwnProperty(n)
        ? void 0 !== t[n] && (a[n] = t[n])
        : void 0 !== e[n] &&
          o.route.loader && // wasn't removed by HMR
          (a[n] = e[n]),
      r && r.hasOwnProperty(n))
    )
      break;
  }
  return a;
} // Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match
function eR(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((e) => e.route.id === t) + 1) : [...e])
      .reverse()
      .find((e) => !0 === e.route.hasErrorBoundary) || e[0]
  );
}
function eT(e) {
  // Prefer a root layout route if present, otherwise shim in a route object
  let t = e.find((e) => e.index || !e.path || '/' === e.path) || {
    id: '__shim-error-route__',
  };
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t,
  };
}
function eC(e, t) {
  let { pathname: n, routeId: r, method: a, type: o } = void 0 === t ? {} : t,
    l = 'Unknown Server Error',
    i = 'Unknown @remix-run/router error';
  return (
    400 === e
      ? ((l = 'Bad Request'),
        a && n && r
          ? (i =
              'You made a ' +
              a +
              ' request to "' +
              n +
              '" but did not provide a `loader` for route "' +
              r +
              '", so there is no way to handle the request.')
          : 'defer-action' === o
          ? (i = 'defer() is not supported in actions')
          : 'invalid-body' === o && (i = 'Unable to encode submission body'))
      : 403 === e
      ? ((l = 'Forbidden'),
        (i = 'Route "' + r + '" does not match URL "' + n + '"'))
      : 404 === e
      ? ((l = 'Not Found'), (i = 'No route matches URL "' + n + '"'))
      : 405 === e &&
        ((l = 'Method Not Allowed'),
        a && n && r
          ? (i =
              'You made a ' +
              a.toUpperCase() +
              ' request to "' +
              n +
              '" but did not provide an `action` for route "' +
              r +
              '", so there is no way to handle the request.')
          : a && (i = 'Invalid request method "' + a.toUpperCase() + '"')),
    new et(e || 500, l, Error(i), !0)
  );
} // Find any returned redirect errors, starting from the lowest match
function eN(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (eM(n)) return { result: n, idx: t };
  }
}
function eL(e) {
  let t = 'string' == typeof e ? B(e) : e;
  return j(D({}, t, { hash: '' }));
}
function eA(e) {
  return e.type === y.deferred;
}
function eP(e) {
  return e.type === y.error;
}
function eM(e) {
  return (e && e.type) === y.redirect;
}
function eD(e) {
  return ea.has(e.toLowerCase());
}
async function ez(e, t, n, r, a, o) {
  for (let l = 0; l < n.length; l++) {
    let i = n[l],
      u = t[l]; // If we don't have a match, then we can have a deferred result to do
    // anything with.  This is for revalidating fetchers where the route was
    // removed during HMR
    if (!u) continue;
    let s = e.find((e) => e.route.id === u.route.id),
      c = null != s && !eg(s, u) && (o && o[u.route.id]) !== void 0;
    if (eA(i) && (a || c)) {
      // Note: we do not have to touch activeDeferreds here since we race them
      // against the signal in resolveDeferredData and they'll get aborted
      // there if needed
      let e = r[l];
      U(e, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await eU(i, e, a).then((e) => {
          e && (n[l] = e || n[l]);
        });
    }
  }
}
async function eU(e, t, n) {
  if ((void 0 === n && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: y.data, data: e.deferredData.unwrappedData };
      } catch (e) {
        // Handle any TrackedPromise._error values encountered while unwrapping
        return { type: y.error, error: e };
      }
    return { type: y.data, data: e.deferredData.data };
  }
}
function eO(e) {
  return new URLSearchParams(e).getAll('index').some((e) => '' === e);
}
function eI(e, t) {
  let n = 'string' == typeof t ? B(t).search : t.search;
  if (e[e.length - 1].route.index && eO(n || '')) return e[e.length - 1]; // Otherwise grab the deepest "path contributing" match (ignoring index and
  // pathless layout routes)
  let r = G(e);
  return r[r.length - 1];
}
function eV(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: a,
    formData: o,
    json: l,
  } = e;
  if (t && n && r) {
    if (null != a)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: a,
      };
    if (null != o)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (void 0 !== l)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: l,
        text: void 0,
      };
  }
}
function ej(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function eB(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
        ' _hasFetcherDoneAnything ': !0,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
        ' _hasFetcherDoneAnything ': !0,
      };
}
function eF(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
    ' _hasFetcherDoneAnything ': !0,
  };
}
function e$() {
  return (e$ = Object.assign
    ? Object.assign.bind()
    : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
}
Symbol('deferred'); // Create react-specific types from the agnostic types in @remix-run/router to
// export from react-router
const eW = /*#__PURE__*/ P.createContext(null),
  eH = /*#__PURE__*/ P.createContext(null),
  eq = /*#__PURE__*/ P.createContext(null),
  eK = /*#__PURE__*/ P.createContext(null),
  eQ = /*#__PURE__*/ P.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1,
  }),
  eG = /*#__PURE__*/ P.createContext(null);
/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */ function eY() {
  return null != P.useContext(eK);
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */ function eZ() {
  return eY() || U(!1), P.useContext(eK).location;
} // Mute warnings for calls to useNavigate in SSR environments
function eX(e) {
  P.useContext(eq).static || // See: https://github.com/facebook/react/pull/26395
    // eslint-disable-next-line react-hooks/rules-of-hooks
    P.useLayoutEffect(e);
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */ function eJ(e, t) {
  let { relative: n } = void 0 === t ? {} : t,
    { matches: r } = P.useContext(eQ),
    { pathname: a } = eZ(),
    o = JSON.stringify(G(r).map((e) => e.pathnameBase));
  return P.useMemo(() => Y(e, JSON.parse(o), a, 'path' === n), [e, o, a, n]);
}
const e0 = /*#__PURE__*/ P.createElement(function () {
  var e;
  let t, n, r;
  let a =
      ((n = P.useContext(eG)),
      e3.UseRouteError,
      (t = P.useContext(eH)) || U(!1),
      (r = e5(e3.UseRouteError)), // If this was a render error, we put it in a RouteError context inside
      // of RenderErrorBoundary
      n || (null == (e = t.errors) ? void 0 : e[r])),
    o = en(a)
      ? a.status + ' ' + a.statusText
      : a instanceof Error
      ? a.message
      : JSON.stringify(a),
    l = a instanceof Error ? a.stack : null;
  return /*#__PURE__*/ P.createElement(
    P.Fragment,
    null,
    /*#__PURE__*/ P.createElement('h2', null, 'Unexpected Application Error!'),
    /*#__PURE__*/ P.createElement('h3', { style: { fontStyle: 'italic' } }, o),
    l
      ? /*#__PURE__*/ P.createElement(
          'pre',
          {
            style: {
              padding: '0.5rem',
              backgroundColor: 'rgba(200,200,200, 0.5)',
            },
          },
          l
        )
      : null,
    null
  );
}, null);
class e1 extends P.Component {
  constructor(e) {
    super(e),
      (this.state = {
        location: e.location,
        revalidation: e.revalidation,
        error: e.error,
      });
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return (
      // When we get into an error state, the user will likely click "back" to the
      // previous page that didn't have an error. Because this wraps the entire
      // application, that will have no effect--the error page continues to display.
      // This gives us a mechanism to recover from the error when the location changes.
      //
      // Whether we're in an error state or not, we update the location in state
      // so that when we are in an error state, it gets reset when a new location
      // comes in and the user recovers from the error.
      t.location !== e.location ||
        ('idle' !== t.revalidation && 'idle' === e.revalidation)
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error || t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          }
    );
  }
  componentDidCatch(e, t) {
    console.error(
      'React Router caught the following error during render',
      e,
      t
    );
  }
  render() {
    return this.state.error
      ? /*#__PURE__*/ P.createElement(
          eQ.Provider,
          { value: this.props.routeContext },
          /*#__PURE__*/ P.createElement(eG.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function e2(e) {
  let { routeContext: t, match: n, children: r } = e,
    a = P.useContext(eW);
  return (
    a &&
      a.static &&
      a.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (a.staticContext._deepestRenderedBoundaryId = n.route.id),
    /*#__PURE__*/ P.createElement(eQ.Provider, { value: t }, r)
  );
}
var e4 =
    (((u = e4 || {}).UseBlocker = 'useBlocker'),
    (u.UseRevalidator = 'useRevalidator'),
    (u.UseNavigateStable = 'useNavigate'),
    u),
  e3 =
    (((s = e3 || {}).UseBlocker = 'useBlocker'),
    (s.UseLoaderData = 'useLoaderData'),
    (s.UseActionData = 'useActionData'),
    (s.UseRouteError = 'useRouteError'),
    (s.UseNavigation = 'useNavigation'),
    (s.UseRouteLoaderData = 'useRouteLoaderData'),
    (s.UseMatches = 'useMatches'),
    (s.UseRevalidator = 'useRevalidator'),
    (s.UseNavigateStable = 'useNavigate'),
    (s.UseRouteId = 'useRouteId'),
    s); // Internal version with hookName-aware debugging
function e5(e) {
  let t;
  let n = ((t = P.useContext(eQ)) || U(!1), t),
    r = n.matches[n.matches.length - 1];
  return r.route.id || U(!1), r.route.id;
}
const e6 = P.startTransition;
/**
 * Given a Remix Router instance, render the appropriate UI
 */ function e8(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [a, o] = P.useState(n.state),
    { v7_startTransition: l } = r || {},
    i = P.useCallback(
      (e) => {
        l && e6 ? e6(() => o(e)) : o(e);
      },
      [o, l]
    );
  P.useLayoutEffect(() => n.subscribe(i), [n, i]);
  let u = P.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (e) => n.navigate(e),
        push: (e, t, r) =>
          n.navigate(e, {
            state: t,
            preventScrollReset: null == r ? void 0 : r.preventScrollReset,
          }),
        replace: (e, t, r) =>
          n.navigate(e, {
            replace: !0,
            state: t,
            preventScrollReset: null == r ? void 0 : r.preventScrollReset,
          }),
      }),
      [n]
    ),
    s = n.basename || '/',
    c = P.useMemo(
      () => ({ router: n, navigator: u, static: !1, basename: s }),
      [n, u, s]
    ); // The fragment and {null} here are important!  We need them to keep React 18's
  // useId happy when we are server-rendering since we may have a <script> here
  // containing the hydrated server-side staticContext (from StaticRouterProvider).
  // useId relies on the component tree structure to generate deterministic id's
  // so we need to ensure it remains the same on the client even though
  // we don't need the <script> tag
  return /*#__PURE__*/ P.createElement(
    P.Fragment,
    null,
    /*#__PURE__*/ P.createElement(
      eW.Provider,
      { value: c },
      /*#__PURE__*/ P.createElement(
        eH.Provider,
        { value: a },
        /*#__PURE__*/ P.createElement(
          e7,
          {
            basename: s,
            location: a.location,
            navigationType: a.historyAction,
            navigator: u,
          },
          a.initialized
            ? /*#__PURE__*/ P.createElement(e9, { routes: n.routes, state: a })
            : t
        )
      )
    ),
    null
  );
}
function e9(e) {
  let { routes: t, state: n } = e;
  return (
    // Internal implementation with accept optional param for RouterProvider usage
    (function (e, t, n) {
      let r;
      eY() || U(!1);
      let { navigator: a } = P.useContext(eq),
        { matches: o } = P.useContext(eQ),
        l = o[o.length - 1],
        i = l ? l.params : {};
      l && l.pathname;
      let u = l ? l.pathnameBase : '/';
      l && l.route;
      let s = eZ();
      if (t) {
        var c;
        let e = 'string' == typeof t ? B(t) : t;
        '/' === u ||
          (null == (c = e.pathname) ? void 0 : c.startsWith(u)) ||
          U(!1),
          (r = e);
      } else r = s;
      let d = r.pathname || '/',
        f = W(e, { pathname: '/' === u ? d : d.slice(u.length) || '/' }),
        p = (function (e, t, n) {
          var r, a;
          if (
            (void 0 === t && (t = []), void 0 === n && (n = null), null == e)
          ) {
            if (null == (a = n) || !a.errors) return null; // boundary.  Use the pre-matched (or shimmed) matches
            e = n.matches;
          }
          let o = e,
            l = null == (r = n) ? void 0 : r.errors;
          if (null != l) {
            let e = o.findIndex(
              (e) => e.route.id && (null == l ? void 0 : l[e.route.id])
            );
            e >= 0 || U(!1), (o = o.slice(0, Math.min(o.length, e + 1)));
          }
          return o.reduceRight((e, r, a) => {
            let i = r.route.id ? (null == l ? void 0 : l[r.route.id]) : null,
              u = null;
            n && (u = r.route.errorElement || e0);
            let s = t.concat(o.slice(0, a + 1)),
              c = () => {
                let t;
                return (
                  (t = i
                    ? u
                    : r.route.Component
                    ? /*#__PURE__*/ P.createElement(r.route.Component, null)
                    : r.route.element
                    ? r.route.element
                    : e),
                  /*#__PURE__*/ P.createElement(e2, {
                    match: r,
                    routeContext: {
                      outlet: e,
                      matches: s,
                      isDataRoute: null != n,
                    },
                    children: t,
                  })
                );
              }; // Only wrap in an error boundary within data router usages when we have an
            // ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
            // an ancestor ErrorBoundary/errorElement
            return n &&
              (r.route.ErrorBoundary || r.route.errorElement || 0 === a)
              ? /*#__PURE__*/ P.createElement(e1, {
                  location: n.location,
                  revalidation: n.revalidation,
                  component: u,
                  error: i,
                  children: c(),
                  routeContext: { outlet: null, matches: s, isDataRoute: !0 },
                })
              : c();
          }, null);
        })(
          f &&
            f.map((e) =>
              Object.assign({}, e, {
                params: Object.assign({}, i, e.params),
                pathname: Z([
                  u, // Re-encode pathnames that were decoded inside matchRoutes
                  a.encodeLocation
                    ? a.encodeLocation(e.pathname).pathname
                    : e.pathname,
                ]),
                pathnameBase:
                  '/' === e.pathnameBase
                    ? u
                    : Z([
                        u, // Re-encode pathnames that were decoded inside matchRoutes
                        a.encodeLocation
                          ? a.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              })
            ),
          o,
          n
        );
      return (
        // When a user passes in a `locationArg`, the associated routes need to
        // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
        // to use the scoped location instead of the global location.
        t && p
          ? /*#__PURE__*/ P.createElement(
              eK.Provider,
              {
                value: {
                  location: e$(
                    {
                      pathname: '/',
                      search: '',
                      hash: '',
                      state: null,
                      key: 'default',
                    },
                    r
                  ),
                  navigationType: g.Pop,
                },
              },
              p
            )
          : p
      );
    })(t, void 0, n)
  );
}
/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a <Router> directly. Instead, you'll render a
 * router that is more specific to your environment such as a <BrowserRouter>
 * in web browsers or a <StaticRouter> for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */ function e7(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: a = g.Pop,
    navigator: o,
    static: l = !1,
  } = e;
  eY() && U(!1); // Preserve trailing slashes on basename, so we can let the user control
  // the enforcement of trailing slashes throughout the app
  let i = t.replace(/^\/*/, '/'),
    u = P.useMemo(() => ({ basename: i, navigator: o, static: l }), [i, o, l]);
  'string' == typeof r && (r = B(r));
  let {
      pathname: s = '/',
      search: c = '',
      hash: d = '',
      state: f = null,
      key: p = 'default',
    } = r,
    h = P.useMemo(() => {
      let e = K(s, i);
      return null == e
        ? null
        : {
            location: { pathname: e, search: c, hash: d, state: f, key: p },
            navigationType: a,
          };
    }, [i, s, c, d, f, p, a]);
  return null == h
    ? null
    : /*#__PURE__*/ P.createElement(
        eq.Provider,
        { value: u },
        /*#__PURE__*/ P.createElement(eK.Provider, { children: n, value: h })
      );
}
var te =
  (((c = te || {})[(c.pending = 0)] = 'pending'),
  (c[(c.success = 1)] = 'success'),
  (c[(c.error = 2)] = 'error'),
  c);
new Promise(() => {}), L('acw62');
/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var P = L('acw62');
function tt() {
  return (tt = Object.assign
    ? Object.assign.bind()
    : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
}
function tn(e, t) {
  if (null == e) return {};
  var n,
    r,
    a = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
  return a;
}
const tr = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
  ],
  ta = [
    'reloadDocument',
    'replace',
    'state',
    'method',
    'action',
    'onSubmit',
    'submit',
    'relative',
    'preventScrollReset',
  ];
P.startTransition;
const to =
    'undefined' != typeof window &&
    void 0 !== window.document &&
    void 0 !== window.document.createElement,
  tl = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ti = /*#__PURE__*/ P.forwardRef(function (e, t) {
    let n,
      {
        onClick: r,
        relative: a,
        reloadDocument: o,
        replace: l,
        state: i,
        target: u,
        to: s,
        preventScrollReset: c,
      } = e,
      d = tn(e, tr),
      { basename: f } = P.useContext(eq),
      p = !1;
    if (
      'string' == typeof s &&
      tl.test(s) && // Render the absolute href server- and client-side
      ((n = s), to)
    )
      try {
        let e = new URL(window.location.href),
          t = new URL(s.startsWith('//') ? e.protocol + s : s),
          n = K(t.pathname, f);
        t.origin === e.origin && null != n
          ? (s = n + t.search + t.hash)
          : (p = !0);
      } catch (e) {} // Rendered into <a href> for relative URLs
    let h = /**
       * Returns the full href for the given "to" value. This is useful for building
       * custom links that are also accessible and preserve right-click behavior.
       *
       * @see https://reactrouter.com/hooks/use-href
       */ (function (e, t) {
        let { relative: n } = void 0 === t ? {} : t;
        eY() || U(!1);
        let { basename: r, navigator: a } = P.useContext(eq),
          { hash: o, pathname: l, search: i } = eJ(e, { relative: n }),
          u = l;
        return (
          '/' !== r && (u = '/' === l ? r : Z([r, l])),
          a.createHref({ pathname: u, search: i, hash: o })
        );
      })(s, { relative: a }),
      m = /**
       * Handles the click behavior for router `<Link>` components. This is useful if
       * you need to create custom `<Link>` components with the same click behavior we
       * use in our exported `<Link>`.
       */ (function (e, t) {
        let {
            target: n,
            replace: r,
            state: a,
            preventScrollReset: o,
            relative: l,
          } = void 0 === t ? {} : t,
          i = /**
           * Returns an imperative method for changing the location. Used by <Link>s, but
           * may also be used by other elements to change the location.
           *
           * @see https://reactrouter.com/hooks/use-navigate
           */ (function () {
            let { isDataRoute: e } = P.useContext(eQ); // Conditional usage is OK here because the usage of a data router is static
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return e
              ? /**
                 * Stable version of useNavigate that is used when we are in the context of
                 * a RouterProvider.
                 */ (function () {
                  let e;
                  let { router: t } =
                      (e4.UseNavigateStable,
                      (e = P.useContext(eW)) || U(!1),
                      e),
                    n = e5(e3.UseNavigateStable),
                    r = P.useRef(!1);
                  return (
                    eX(() => {
                      r.current = !0;
                    }),
                    P.useCallback(
                      function (e, a) {
                        void 0 === a && (a = {}),
                          r.current &&
                            ('number' == typeof e
                              ? t.navigate(e)
                              : t.navigate(e, e$({ fromRouteId: n }, a)));
                      },
                      [t, n]
                    )
                  );
                })()
              : (function () {
                  eY() || U(!1);
                  let e = P.useContext(eW),
                    { basename: t, navigator: n } = P.useContext(eq),
                    { matches: r } = P.useContext(eQ),
                    { pathname: a } = eZ(),
                    o = JSON.stringify(G(r).map((e) => e.pathnameBase)),
                    l = P.useRef(!1);
                  return (
                    eX(() => {
                      l.current = !0;
                    }),
                    P.useCallback(
                      function (r, i) {
                        // Short circuit here since if this happens on first render the navigate
                        // is useless because we haven't wired up our history listener yet
                        if ((void 0 === i && (i = {}), !l.current)) return;
                        if ('number' == typeof r) {
                          n.go(r);
                          return;
                        }
                        let u = Y(r, JSON.parse(o), a, 'path' === i.relative);
                        null == e &&
                          '/' !== t &&
                          (u.pathname =
                            '/' === u.pathname ? t : Z([t, u.pathname])),
                          (i.replace ? n.replace : n.push)(u, i.state, i);
                      },
                      [t, n, o, a, e]
                    )
                  );
                })();
          })(),
          u = eZ(),
          s = eJ(e, { relative: l });
        return P.useCallback(
          (t) => {
            0 !== t.button || // Ignore everything but left clicks
              (n && '_self' !== n) ||
              t.metaKey ||
              t.altKey ||
              t.ctrlKey ||
              t.shiftKey ||
              (t.preventDefault(),
              i(e, {
                replace: void 0 !== r ? r : j(u) === j(s),
                state: a,
                preventScrollReset: o,
                relative: l,
              }));
          },
          [u, i, s, r, a, n, e, o, l]
        );
      })(s, {
        replace: l,
        state: i,
        target: u,
        preventScrollReset: c,
        relative: a,
      });
    return /*#__PURE__*/ P.createElement(
      'a',
      tt({}, d, {
        href: n || h,
        onClick:
          p || o
            ? r
            : function (e) {
                r && r(e), e.defaultPrevented || m(e);
              },
        ref: t,
        target: u,
      })
    );
  });
((d = b || (b = {})).UseScrollRestoration = 'useScrollRestoration'),
  (d.UseSubmit = 'useSubmit'),
  (d.UseSubmitFetcher = 'useSubmitFetcher'),
  (d.UseFetcher = 'useFetcher'),
  ((f = w || (w = {})).UseFetchers = 'useFetchers'),
  (f.UseScrollRestoration = 'useScrollRestoration'),
  L('acw62');
var P = (L('acw62'), L('acw62')),
  tu = {},
  ts = (tu = {});
function tc() {
  throw Error('setTimeout has not been defined');
}
function td() {
  throw Error('clearTimeout has not been defined');
}
function tf(e) {
  if (S === setTimeout) return setTimeout(e, 0); // if setTimeout wasn't available but was latter defined
  if ((S === tc || !S) && setTimeout) return (S = setTimeout), setTimeout(e, 0);
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return S(e, 0);
  } catch (t) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return S.call(null, e, 0);
    } catch (t) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return S.call(this, e, 0);
    }
  }
}
!(function () {
  try {
    S = 'function' == typeof setTimeout ? setTimeout : tc;
  } catch (e) {
    S = tc;
  }
  try {
    k = 'function' == typeof clearTimeout ? clearTimeout : td;
  } catch (e) {
    k = td;
  }
})();
var tp = [],
  th = !1,
  tm = -1;
function tv() {
  th &&
    _ &&
    ((th = !1), _.length ? (tp = _.concat(tp)) : (tm = -1), tp.length && tg());
}
function tg() {
  if (!th) {
    var e = tf(tv);
    th = !0;
    for (var t = tp.length; t; ) {
      for (_ = tp, tp = []; ++tm < t; ) _ && _[tm].run();
      (tm = -1), (t = tp.length);
    }
    (_ = null),
      (th = !1),
      (function (e) {
        if (k === clearTimeout) return clearTimeout(e); // if clearTimeout wasn't available but was latter defined
        if ((k === td || !k) && clearTimeout)
          return (k = clearTimeout), clearTimeout(e);
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          k(e);
        } catch (t) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return k.call(null, e);
          } catch (t) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return k.call(this, e);
          }
        }
      })(e);
  }
} // v8 likes predictible objects
function ty(e, t) {
  (this.fun = e), (this.array = t);
}
function tb() {}
(ts.nextTick = function (e) {
  var t = Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  tp.push(new ty(e, t)), 1 !== tp.length || th || tf(tg);
}),
  (ty.prototype.run = function () {
    this.fun.apply(null, this.array);
  }),
  (ts.title = 'browser'),
  (ts.browser = !0),
  (ts.env = {}),
  (ts.argv = []),
  (ts.version = ''),
  (ts.versions = {}),
  (ts.on = tb),
  (ts.addListener = tb),
  (ts.once = tb),
  (ts.off = tb),
  (ts.removeListener = tb),
  (ts.removeAllListeners = tb),
  (ts.emit = tb),
  (ts.prependListener = tb),
  (ts.prependOnceListener = tb),
  (ts.listeners = function (e) {
    return [];
  }),
  (ts.binding = function (e) {
    throw Error('process.binding is not supported');
  }),
  (ts.cwd = function () {
    return '/';
  }),
  (ts.chdir = function (e) {
    throw Error('process.chdir is not supported');
  }),
  (ts.umask = function () {
    return 0;
  }); // @oss-only
var tw = /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *
   * @format
   * @oncall recoil
   */ function (e) {
    let t = Error(e); // In V8, Error objects keep the closure scope chain alive until the
    // err.stack property is accessed.
    if (void 0 === t.stack)
      try {
        throw t;
      } catch (e) {} // eslint-disable-line fb-www/no-unused-catch-bindings, no-empty
    return t;
  },
  tS = // Split declaration and implementation to allow this function to pretend to
    /**
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     *
     * @format
     * @oncall recoil
     */ // check for actual instance of Promise instead of something with a `then`
    // method.
    // eslint-disable-next-line no-redeclare
    function (e) {
      return !!e && 'function' == typeof e.then;
    },
  tk = function (e, t) {
    if (null != e) return e;
    throw tw(null != t ? t : 'Got unexpected null or undefined');
  };
function t_(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
class tx {
  getValue() {
    throw tw('BaseLoadable');
  }
  toPromise() {
    throw tw('BaseLoadable');
  }
  valueMaybe() {
    throw tw('BaseLoadable');
  }
  valueOrThrow() {
    // $FlowFixMe[prop-missing]
    throw tw(`Loadable expected value, but in "${this.state}" state`);
  }
  promiseMaybe() {
    throw tw('BaseLoadable');
  }
  promiseOrThrow() {
    // $FlowFixMe[prop-missing]
    throw tw(`Loadable expected promise, but in "${this.state}" state`);
  }
  errorMaybe() {
    throw tw('BaseLoadable');
  }
  errorOrThrow() {
    // $FlowFixMe[prop-missing]
    throw tw(`Loadable expected error, but in "${this.state}" state`);
  }
  is(e) {
    // $FlowFixMe[prop-missing]
    return e.state === this.state && e.contents === this.contents;
  }
  map(e) {
    throw tw('BaseLoadable');
  }
}
class tE extends tx {
  constructor(e) {
    super(),
      t_(this, 'state', 'hasValue'),
      t_(this, 'contents', void 0),
      (this.contents = e);
  }
  getValue() {
    return this.contents;
  }
  toPromise() {
    return Promise.resolve(this.contents);
  }
  valueMaybe() {
    return this.contents;
  }
  valueOrThrow() {
    return this.contents;
  }
  promiseMaybe() {}
  errorMaybe() {}
  map(e) {
    try {
      let t = e(this.contents);
      return tS(t) ? tL(t) : tM(t) ? t : tC(t);
    } catch (t) {
      return tS(t) // $FlowFixMe[prop-missing]
        ? tL(t.next(() => this.map(e)))
        : tN(t);
    }
  }
}
class tR extends tx {
  constructor(e) {
    super(),
      t_(this, 'state', 'hasError'),
      t_(this, 'contents', void 0),
      (this.contents = e);
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return Promise.reject(this.contents);
  }
  valueMaybe() {}
  promiseMaybe() {}
  errorMaybe() {
    return this.contents;
  }
  errorOrThrow() {
    return this.contents;
  }
  map(e) {
    // $FlowIssue[incompatible-return]
    return this;
  }
}
class tT extends tx {
  constructor(e) {
    super(),
      t_(this, 'state', 'loading'),
      t_(this, 'contents', void 0),
      (this.contents = e);
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return this.contents;
  }
  valueMaybe() {}
  promiseMaybe() {
    return this.contents;
  }
  promiseOrThrow() {
    return this.contents;
  }
  errorMaybe() {}
  map(e) {
    return tL(
      this.contents
        .then((t) => {
          let n = e(t);
          if (tM(n))
            switch (n.state) {
              case 'hasValue':
              case 'loading':
                return n.contents;
              case 'hasError':
                throw n.contents;
            } // $FlowIssue[incompatible-return]
          return n;
        }) // $FlowFixMe[incompatible-call]
        .catch((t) => {
          if (tS(t)) return t.then(() => this.map(e).contents);
          throw t;
        })
    );
  }
}
function tC(e) {
  return Object.freeze(new tE(e));
}
function tN(e) {
  return Object.freeze(new tR(e));
}
function tL(e) {
  return Object.freeze(new tT(e));
}
function tA() {
  return Object.freeze(new tT(new Promise(() => {})));
}
function tP(e) {
  let t = Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((t) => e[t]),
    n = t.map((e) => (tM(e) ? e : tS(e) ? tL(e) : tC(e))),
    r = n.every((e) => 'hasValue' === e.state)
      ? tC(n.map((e) => e.contents))
      : n.some((e) => 'hasError' === e.state)
      ? tN(
          tk(
            n.find((e) => 'hasError' === e.state),
            'Invalid loadable passed to loadableAll'
          ).contents
        )
      : tL(Promise.all(n.map((e) => e.contents)));
  return Array.isArray(e)
    ? r
    : r.map((t) =>
        Object.getOwnPropertyNames(e).reduce(
          (e, n, r) => ({ ...e, [n]: t[r] }),
          {}
        )
      );
}
function tM(e) {
  return e instanceof tx;
}
var tD = {
    loadableWithValue: tC,
    loadableWithError: tN,
    loadableWithPromise: tL,
    loadableLoading: tA,
    loadableAll: tP,
    isLoadable: tM,
    RecoilLoadable: {
      of: (e) => (tS(e) ? tL(e) : tM(e) ? e : tC(e)),
      error: (e) => tN(e), // $FlowIssue[incompatible-return]
      loading: () => tA(), // $FlowIssue[unclear-type]
      all: tP,
      isLoadable: tM,
    },
  },
  tz = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    loadableWithValue: tD.loadableWithValue,
    loadableWithError: tD.loadableWithError,
    loadableWithPromise: tD.loadableWithPromise,
    loadableLoading: tD.loadableLoading,
    loadableAll: tD.loadableAll,
    isLoadable: tD.isLoadable,
    RecoilLoadable: tD.RecoilLoadable,
  });
const tU = {
  RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: !0, // Note: RECOIL_GKS_ENABLED settings will only be honored in OSS builds of Recoil
  RECOIL_GKS_ENABLED: new Set([
    'recoil_hamt_2020',
    'recoil_sync_external_store',
    'recoil_suppress_rerender_in_callback',
    'recoil_memory_managament_2020',
  ]),
};
function tO(e) {
  return tU.RECOIL_GKS_ENABLED.has(e);
}
void 0 !== tu &&
  (null === (a = tu) || void 0 === a ? void 0 : a.env) != null &&
  ((function (e, t) {
    var n, r;
    let a =
      null === (n = tu.env[e]) || void 0 === n
        ? void 0
        : null === (r = n.toLowerCase()) || void 0 === r
        ? void 0
        : r.trim();
    if (null != a && '' !== a) {
      if (!['true', 'false'].includes(a))
        throw tw(
          `process.env.${e} value must be 'true', 'false', or empty: ${a}`
        );
      t('true' === a);
    }
  })('RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED', (e) => {
    tU.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = e;
  }),
  (function (e, t) {
    var n;
    let r = null === (n = tu.env[e]) || void 0 === n ? void 0 : n.trim();
    null != r && '' !== r && t(r.split(/\s*,\s*|\s+/));
  })('RECOIL_GKS_ENABLED', (e) => {
    e.forEach((e) => {
      tU.RECOIL_GKS_ENABLED.add(e);
    });
  })),
  (tO.setPass = (e) => {
    tU.RECOIL_GKS_ENABLED.add(e);
  }),
  (tO.setFail = (e) => {
    tU.RECOIL_GKS_ENABLED.delete(e);
  }),
  (tO.clear = () => {
    tU.RECOIL_GKS_ENABLED.clear();
  }); // @oss-only
var tI = /**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @format
 * @oncall recoil
 */ function (e, t, { error: n } = {}) {
  return null;
};
const tV =
    null !== (x = /*@__PURE__*/ r(P).createMutableSource) && void 0 !== x
      ? x
      : /*@__PURE__*/ r(P).unstable_createMutableSource,
  tj =
    null !== (E = /*@__PURE__*/ r(P).useMutableSource) && void 0 !== E
      ? E
      : /*@__PURE__*/ r(P).unstable_useMutableSource,
  tB =
    null !== (R = /*@__PURE__*/ r(P).useSyncExternalStore) && void 0 !== R
      ? R
      : /*@__PURE__*/ r(P).unstable_useSyncExternalStore;
let tF = !1; // Check if the current renderer supports `useSyncExternalStore()`.
var t$ = {
  createMutableSource: tV,
  useMutableSource: tj,
  useSyncExternalStore: tB,
  // Since React goes through a proxy dispatcher and the current renderer can
  currentRendererSupportsUseSyncExternalStore:
    // change we can't simply check if `React.useSyncExternalStore()` is defined.
    function () {
      var e; // $FlowFixMe[incompatible-use]
      let { ReactCurrentDispatcher: t, ReactCurrentOwner: n } =
          /*@__PURE__*/ r(P).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        a =
          null !== (e = null == t ? void 0 : t.current) && void 0 !== e
            ? e
            : n.currentDispatcher,
        o = null != a.useSyncExternalStore;
      return (
        !tB ||
          o ||
          tF ||
          ((tF = !0),
          tI(
            'A React renderer without React 18+ API support is being used with React 18+.'
          )),
        o
      );
    },
  reactMode: /**
   * mode: The React API and approach to use for syncing state with React
   * early: Re-renders from Recoil updates occur:
   *    1) earlier
   *    2) in sync with React updates in the same batch
   *    3) before transaction observers instead of after.
   * concurrent: Is the current mode compatible with Concurrent Mode and useTransition()
   */ function () {
    return (
      // NOTE: This mode is currently broken with some Suspense cases
      // see Recoil_selector-test.js
      tO('recoil_transition_support')
        ? { mode: 'TRANSITION_SUPPORT', early: !0, concurrent: !0 }
        : tO('recoil_sync_external_store') && null != tB
        ? { mode: 'SYNC_EXTERNAL_STORE', early: !0, concurrent: !1 }
        : tO('recoil_mutable_source') &&
          null != tj &&
          'undefined' != typeof window &&
          !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE
        ? tO('recoil_suppress_rerender_in_callback')
          ? { mode: 'MUTABLE_SOURCE', early: !0, concurrent: !0 }
          : { mode: 'MUTABLE_SOURCE', early: !1, concurrent: !1 }
        : tO('recoil_suppress_rerender_in_callback')
        ? { mode: 'LEGACY', early: !0, concurrent: !1 }
        : { mode: 'LEGACY', early: !1, concurrent: !1 }
    );
  }, // TODO Need to figure out if there is a standard/open-source equivalent to see if hot module replacement is happening:
  isFastRefreshEnabled: function () {
    // @fb-only: const {isAcceptingUpdate} = require('__debug');
    // @fb-only: return typeof isAcceptingUpdate === 'function' && isAcceptingUpdate();
    return !1; // @oss-only
  },
}; /**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @format
 * @oncall recoil
 */ // eslint-disable-next-line no-unused-vars
class tW {
  constructor(e) {
    t_(this, 'key', void 0), (this.key = e);
  }
  toJSON() {
    return { key: this.key };
  }
}
class tH extends tW {}
class tq extends tW {}
var tK = {
    AbstractRecoilValue: tW,
    RecoilState: tH,
    RecoilValueReadOnly: tq,
    isRecoilValue: function (e) {
      return e instanceof tH || e instanceof tq;
    },
  },
  tQ = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    AbstractRecoilValue: tK.AbstractRecoilValue,
    RecoilState: tK.RecoilState,
    RecoilValueReadOnly: tK.RecoilValueReadOnly,
    isRecoilValue: tK.isRecoilValue,
  }),
  tG = function (e, ...t) {},
  tY = /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *
   * @format
   * @oncall recoil
   *//**
   * Creates a new iterable whose output is generated by passing the input
   * iterable's values through the mapper function.
   */ function (e, t) {
    // Use generator to create iterable/iterator
    return (function* () {
      let n = 0;
      for (let r of e) yield t(r, n++);
    })();
  };
const { isFastRefreshEnabled: tZ } = t$;
class tX {}
const tJ = new tX(),
  t0 = new Map(),
  t1 = new Map();
/* eslint-enable no-redeclare */ class t2 extends Error {} // flowlint-next-line unclear-type:off
const t4 = new Map();
function t3(e) {
  return t4.get(e);
}
var t5 = {
    nodes: t0,
    recoilValues: t1,
    registerNode: function (e) {
      tU.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED &&
        (function (e) {
          if (t0.has(e)) {
            let t = `Duplicate atom key "${e}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`; // @fb-only: recoverableViolation(message, 'recoil');
            console.warn(t); // @oss-only
          }
        })(e.key),
        t0.set(e.key, e);
      let t =
        null == e.set
          ? new tQ.RecoilValueReadOnly(e.key)
          : new tQ.RecoilState(e.key);
      return t1.set(e.key, t), t;
    },
    getNode: function (e) {
      let t = t0.get(e);
      if (null == t)
        throw new t2(`Missing definition for RecoilValue: "${e}""`);
      return t;
    }, // flowlint-next-line unclear-type:off
    getNodeMaybe: function (e) {
      return t0.get(e);
    },
    deleteNodeConfigIfPossible: function (e) {
      var t, n;
      if (!tO('recoil_memory_managament_2020')) return;
      let r = t0.get(e);
      null != r &&
        null !== (t = r.shouldDeleteConfigOnRelease) &&
        void 0 !== t &&
        t.call(r) &&
        (t0.delete(e),
        null === (n = t3(e)) || void 0 === n || n(),
        t4.delete(e));
    },
    setConfigDeletionHandler: function (e, t) {
      tO('recoil_memory_managament_2020') &&
        (void 0 === t ? t4.delete(e) : t4.set(e, t));
    },
    getConfigDeletionHandler: t3,
    recoilValuesForKeys: /* eslint-disable no-redeclare */ function (e) {
      return tY(e, (e) => tk(t1.get(e)));
    },
    NodeMissingError: t2,
    DefaultValue: tX,
    DEFAULT_VALUE: tJ,
  },
  t6 =
    ((function (e) {
      var t =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              },
        n = {},
        r = {},
        a = function (e) {
          return function () {
            return e;
          };
        },
        o = (n.hash = function (e) {
          var n = void 0 === e ? 'undefined' : t(e);
          if ('number' === n) return e;
          'string' !== n && (e += '');
          for (var r = 0, a = 0, o = e.length; a < o; ++a)
            r = ((r << 5) - r + e.charCodeAt(a)) | 0;
          return r;
        }),
        l = function (e, t) {
          return (t >>> e) & 31;
        },
        i = function (e) {
          return 1 << e;
        },
        u = function (e, t) {
          var n;
          return (
            (n = e & (t - 1)),
            (n -= (n >> 1) & 1431655765),
            (n =
              ((n = (858993459 & n) + ((n >> 2) & 858993459)) + (n >> 4)) &
              252645135),
            (n += n >> 8),
            127 & (n += n >> 16)
          );
        },
        s = function (e, t, n, r) {
          var a = r;
          if (!e) {
            var o = r.length;
            a = Array(o);
            for (var l = 0; l < o; ++l) a[l] = r[l];
          }
          return (a[t] = n), a;
        },
        c = function (e, t, n) {
          var r = n.length - 1,
            a = 0,
            o = 0,
            l = n;
          if (e) a = o = t;
          else for (l = Array(r); a < t; ) l[o++] = n[a++];
          for (++a; a <= r; ) l[o++] = n[a++];
          return e && (l.length = r), l;
        },
        d = function (e, t, n, r) {
          var a = r.length;
          if (e) {
            for (var o = a; o >= t; ) r[o--] = r[o];
            return (r[t] = n), r;
          }
          for (var l = 0, i = 0, u = Array(a + 1); l < t; ) u[i++] = r[l++];
          for (u[t] = n; l < a; ) u[++i] = r[l++];
          return u;
        },
        f = { __hamt_isEmpty: !0 },
        p = function (e) {
          return e === f || (e && e.__hamt_isEmpty);
        },
        h = function (e, t, n, r) {
          return { type: 1, edit: e, hash: t, key: n, value: r, _modify: _ };
        },
        m = function (e, t, n) {
          return { type: 2, edit: e, hash: t, children: n, _modify: x };
        },
        v = function (e, t, n) {
          return { type: 3, edit: e, mask: t, children: n, _modify: E };
        },
        g = function (e, t, n) {
          return { type: 4, edit: e, size: t, children: n, _modify: R };
        },
        y = function (e, t, n, r, a) {
          for (var o = [], l = r, i = 0, u = 0; l; ++u)
            1 & l && (o[u] = a[i++]), (l >>>= 1);
          return (o[t] = n), g(e, i + 1, o);
        },
        b = function (e, t, n, r) {
          for (
            var a = Array(t - 1), o = 0, l = 0, i = 0, u = r.length;
            i < u;
            ++i
          )
            if (i !== n) {
              var s = r[i];
              s && !p(s) && ((a[o++] = s), (l |= 1 << i));
            }
          return v(e, l, a);
        },
        w = function e(t, n, r, a, o, u) {
          if (r === o) return m(t, r, [u, a]);
          var s = l(n, r),
            c = l(n, o);
          return v(
            t,
            i(s) | i(c),
            s === c ? [e(t, n + 5, r, a, o, u)] : s < c ? [a, u] : [u, a]
          );
        },
        S = function (e, t, n, a, o, l, i, u) {
          for (var d = o.length, f = 0; f < d; ++f) {
            var p = o[f];
            if (n(i, p.key)) {
              var m = p.value,
                v = l(m);
              if (v === m) return o;
              if (v === r) return --u.value, c(e, f, o);
              return s(e, f, h(t, a, i, v), o);
            }
          }
          var g = l();
          return g === r ? o : (++u.value, s(e, d, h(t, a, i, g), o));
        },
        k = function (e, t) {
          return e === t.edit;
        },
        _ = function (e, t, n, a, o, l, i) {
          if (t(l, this.key)) {
            var u = a(this.value);
            return u === this.value
              ? this
              : u === r
              ? (--i.value, f)
              : k(e, this)
              ? ((this.value = u), this)
              : h(e, o, l, u);
          }
          var s = a();
          return s === r
            ? this
            : (++i.value, w(e, n, this.hash, this, o, h(e, o, l, s)));
        },
        x = function (e, t, n, a, o, l, i) {
          if (o === this.hash) {
            var u = S(k(e, this), e, t, this.hash, this.children, a, l, i);
            return u === this.children
              ? this
              : u.length > 1
              ? m(e, this.hash, u)
              : u[0];
          }
          var s = a();
          return s === r
            ? this
            : (++i.value, w(e, n, this.hash, this, o, h(e, o, l, s)));
        },
        E = function (e, t, n, r, a, o, h) {
          var m,
            g = this.mask,
            b = this.children,
            w = l(n, a),
            S = i(w),
            _ = u(g, S),
            x = g & S,
            E = x ? b[_] : f,
            R = E._modify(e, t, n + 5, r, a, o, h);
          if (E === R) return this;
          var T = k(e, this),
            C = g,
            N = void 0;
          if (x && p(R)) {
            if (
              !(
                // remove
                (C &= ~S)
              )
            )
              return f;
            if (
              b.length <= 2 &&
              ((m = b[1 ^ _]) === f || 1 === m.type || 2 === m.type)
            )
              return b[1 ^ _]; // collapse
            N = c(T, _, b);
          } else if (x || p(R)) N = s(T, _, R, b);
          else {
            // add
            if (b.length >= 16) return y(e, w, R, g, b);
            (C |= S), (N = d(T, _, R, b));
          }
          return T ? ((this.mask = C), (this.children = N), this) : v(e, C, N);
        },
        R = function (e, t, n, r, a, o, i) {
          var u = this.size,
            c = this.children,
            d = l(n, a),
            h = c[d],
            m = (h || f)._modify(e, t, n + 5, r, a, o, i);
          if (h === m) return this;
          var v = k(e, this),
            y = void 0;
          if (p(h) && !p(m))
            // add
            ++u, (y = s(v, d, m, c));
          else if (!p(h) && p(m)) {
            if (--u <= 8) return b(e, u, d, c);
            y = s(v, d, f, c);
          } else y = s(v, d, m, c);
          return v ? ((this.size = u), (this.children = y), this) : g(e, u, y);
        };
      /*
       ******************************************************************************/ function T(
        e,
        t,
        n,
        r,
        a
      ) {
        (this._editable = e),
          (this._edit = t),
          (this._config = n),
          (this._root = r),
          (this._size = a);
      }
      (f._modify = function (e, t, n, a, o, l, i) {
        var u = a();
        return u === r ? f : (++i.value, h(e, o, l, u));
      }),
        (T.prototype.setTree = function (e, t) {
          return this._editable
            ? ((this._root = e), (this._size = t), this)
            : e === this._root
            ? this
            : new T(this._editable, this._edit, this._config, e, t);
        });
      /* Queries
       ******************************************************************************/ /**
    Lookup the value for `key` in `map` using a custom `hash`.

    Returns the value or `alt` if none.
*/ var C = (n.tryGetHash = function (e, t, n, r) {
        for (var a = r._root, o = 0, s = r._config.keyEq; ; )
          switch (a.type) {
            case 1:
              return s(n, a.key) ? a.value : e;
            case 2:
              if (t === a.hash)
                for (var c = a.children, d = 0, f = c.length; d < f; ++d) {
                  var p = c[d];
                  if (s(n, p.key)) return p.value;
                }
              return e;
            case 3:
              var h = i(l(o, t));
              if (a.mask & h) {
                (a = a.children[u(a.mask, h)]), (o += 5);
                break;
              }
              return e;
            case 4:
              if ((a = a.children[l(o, t)])) {
                o += 5;
                break;
              }
              return e;
            default:
              return e;
          }
      });
      T.prototype.tryGetHash = function (e, t, n) {
        return C(e, t, n, this);
      };
      /**
    Lookup the value for `key` in `map` using internal hash function.

    @see `tryGetHash`
*/ var N = (n.tryGet = function (e, t, n) {
        return C(e, n._config.hash(t), t, n);
      });
      T.prototype.tryGet = function (e, t) {
        return N(e, t, this);
      };
      /**
    Lookup the value for `key` in `map` using a custom `hash`.

    Returns the value or `undefined` if none.
*/ var L = (n.getHash = function (e, t, n) {
        return C(void 0, e, t, n);
      });
      (T.prototype.getHash = function (e, t) {
        return L(e, t, this);
      }),
        (n.get = function (e, t) {
          return C(void 0, t._config.hash(e), e, t);
        }),
        (T.prototype.get = function (e, t) {
          return N(t, e, this);
        });
      /**
    Does an entry exist for `key` in `map`? Uses custom `hash`.
*/ var A = (n.has = function (e, t, n) {
        return C(r, e, t, n) !== r;
      });
      T.prototype.hasHash = function (e, t) {
        return A(e, t, this);
      };
      /**
    Does an entry exist for `key` in `map`? Uses internal hash function.
*/ var P = (n.has = function (e, t) {
        return A(t._config.hash(e), e, t);
      });
      T.prototype.has = function (e) {
        return P(e, this);
      };
      var M = function (e, t) {
        return e === t;
      };
      /**
    Create an empty map.

    @param config Configuration.
*/ (n.make = function (e) {
        return new T(
          0,
          0,
          { keyEq: (e && e.keyEq) || M, hash: (e && e.hash) || o },
          f,
          0
        );
      }),
        /**
    Empty map.
*/ (n.empty = n.make());
      /**
    Does `map` contain any elements?
*/ var D = (n.isEmpty = function (e) {
        return e && !!p(e._root);
      });
      T.prototype.isEmpty = function () {
        return D(this);
      };
      /* Updates
       ******************************************************************************/ /**
    Alter the value stored for `key` in `map` using function `f` using
    custom hash.

    `f` is invoked with the current value for `k` if it exists,
    or no arguments if no such value exists. `modify` will always either
    update or insert a value into the map.

    Returns a map with the modified value. Does not alter `map`.
*/ var z = (n.modifyHash = function (e, t, n, r) {
        var a = { value: r._size },
          o = r._root._modify(
            r._editable ? r._edit : NaN,
            r._config.keyEq,
            0,
            e,
            t,
            n,
            a
          );
        return r.setTree(o, a.value);
      });
      T.prototype.modifyHash = function (e, t, n) {
        return z(n, e, t, this);
      };
      /**
    Alter the value stored for `key` in `map` using function `f` using
    internal hash function.

    @see `modifyHash`
*/ var U = (n.modify = function (e, t, n) {
        return z(e, n._config.hash(t), t, n);
      });
      T.prototype.modify = function (e, t) {
        return U(t, e, this);
      };
      /**
    Store `value` for `key` in `map` using custom `hash`.

    Returns a map with the modified value. Does not alter `map`.
*/ var O = (n.setHash = function (e, t, n, r) {
        return z(a(n), e, t, r);
      });
      T.prototype.setHash = function (e, t, n) {
        return O(e, t, n, this);
      };
      /**
    Store `value` for `key` in `map` using internal hash function.

    @see `setHash`
*/ var I = (n.set = function (e, t, n) {
        return O(n._config.hash(e), e, t, n);
      });
      T.prototype.set = function (e, t) {
        return I(e, t, this);
      };
      /**
    Remove the entry for `key` in `map`.

    Returns a map with the value removed. Does not alter `map`.
*/ var V = a(r),
        j = (n.removeHash = function (e, t, n) {
          return z(V, e, t, n);
        });
      T.prototype.removeHash = T.prototype.deleteHash = function (e, t) {
        return j(e, t, this);
      };
      /**
    Remove the entry for `key` in `map` using internal hash function.

    @see `removeHash`
*/ var B = (n.remove = function (e, t) {
        return j(t._config.hash(e), e, t);
      });
      T.prototype.remove = T.prototype.delete = function (e) {
        return B(e, this);
      };
      /* Mutation
       ******************************************************************************/ /**
    Mark `map` as mutable.
 */ var F = (n.beginMutation = function (e) {
        return new T(e._editable + 1, e._edit + 1, e._config, e._root, e._size);
      });
      T.prototype.beginMutation = function () {
        return F(this);
      };
      /**
    Mark `map` as immutable.
 */ var $ = (n.endMutation = function (e) {
        return (e._editable = e._editable && e._editable - 1), e;
      });
      T.prototype.endMutation = function () {
        return $(this);
      };
      /**
    Mutate `map` within the context of `f`.
    @param f
    @param map HAMT
*/ var W = (n.mutate = function (e, t) {
        var n = F(t);
        return e(n), $(n);
      });
      T.prototype.mutate = function (e) {
        return W(e, this);
      };
      /* Traversal
       ******************************************************************************/ /**
    Apply a continuation.
*/ var H = function (e) {
          return e && q(e[0], e[1], e[2], e[3], e[4]);
        },
        q = function (e, t, n, r, a) {
          for (; n < e; ) {
            var o = t[n++];
            if (o && !p(o)) return K(o, r, [e, t, n, r, a]);
          }
          return H(a);
        },
        K = function (e, t, n) {
          switch (e.type) {
            case 1:
              return { value: t(e), rest: n };
            case 2:
            case 4:
            case 3:
              var r = e.children;
              return q(r.length, r, 0, t, n);
            default:
              return H(n);
          }
        },
        Q = { done: !0 };
      /**
    Javascript iterator over a map.
*/ function G(e) {
        this.v = e;
      }
      (G.prototype.next = function () {
        if (!this.v) return Q;
        var e = this.v;
        return (this.v = H(e.rest)), e;
      }),
        (G.prototype[Symbol.iterator] = function () {
          return this;
        });
      /**
    Lazily visit each value in map with function `f`.
*/ var Y = function (e, t) {
          return new G(K(e._root, t));
        },
        Z = function (e) {
          return [e.key, e.value];
        },
        X = (n.entries = function (e) {
          return Y(e, Z);
        });
      T.prototype.entries = T.prototype[Symbol.iterator] = function () {
        return X(this);
      };
      /**
    Get array of all keys in `map`.

    Order is not guaranteed.
*/ var J = function (e) {
          return e.key;
        },
        ee = (n.keys = function (e) {
          return Y(e, J);
        });
      T.prototype.keys = function () {
        return ee(this);
      };
      /**
    Get array of all values in `map`.

    Order is not guaranteed, duplicates are preserved.
*/ var et = function (e) {
          return e.value;
        },
        en =
          (n.values =
          T.prototype.values =
            function (e) {
              return Y(e, et);
            });
      T.prototype.values = function () {
        return en(this);
      };
      /* Fold
       ******************************************************************************/ /**
    Visit every entry in the map, aggregating data.

    Order of nodes is not guaranteed.

    @param f Function mapping accumulated value, value, and key to new value.
    @param z Starting value.
    @param m HAMT
*/ var er = (n.fold = function (e, t, n) {
        var r = n._root;
        if (1 === r.type) return e(t, r.value, r.key);
        for (var a = [r.children], o = void 0; (o = a.pop()); )
          for (var l = 0, i = o.length; l < i; ) {
            var u = o[l++];
            u &&
              u.type &&
              (1 === u.type ? (t = e(t, u.value, u.key)) : a.push(u.children));
          }
        return t;
      });
      T.prototype.fold = function (e, t) {
        return er(e, t, this);
      };
      /**
    Visit every entry in the map, aggregating data.

    Order of nodes is not guaranteed.

    @param f Function invoked with value and key
    @param map HAMT
*/ var ea = (n.forEach = function (e, t) {
        return er(
          function (n, r, a) {
            return e(r, a, t);
          },
          null,
          t
        );
      });
      T.prototype.forEach = function (e) {
        return ea(e, this);
      };
      /* Aggregate
       ******************************************************************************/ /**
    Get the number of entries in `map`.
*/ var eo = (n.count = function (e) {
        return e._size;
      });
      (T.prototype.count = function () {
        return eo(this);
      }),
        Object.defineProperty(T.prototype, 'size', { get: T.prototype.count }),
        e.exports ? (e.exports = n) : (undefined.hamt = n);
    })((p = { exports: {} }), p.exports),
    p.exports);
class t8 {
  constructor(e) {
    t_(this, '_map', void 0),
      (this._map = new Map(null == e ? void 0 : e.entries()));
  }
  keys() {
    return this._map.keys();
  }
  entries() {
    return this._map.entries();
  }
  get(e) {
    return this._map.get(e);
  }
  has(e) {
    return this._map.has(e);
  }
  set(e, t) {
    return this._map.set(e, t), this;
  }
  delete(e) {
    return this._map.delete(e), this;
  }
  clone() {
    return t7(this);
  }
  toMap() {
    return new Map(this._map);
  }
}
class t9 {
  // Because hamt.empty is not a function there is no way to introduce type
  // parameters on it, so empty is typed as HAMTPlusMap<string, mixed>.
  // $FlowIssue
  constructor(e) {
    if ((t_(this, '_hamt', t6.empty.beginMutation()), e instanceof t9)) {
      let t = e._hamt.endMutation();
      (e._hamt = t.beginMutation()), (this._hamt = t.beginMutation());
    } else if (e) for (let [t, n] of e.entries()) this._hamt.set(t, n);
  }
  keys() {
    return this._hamt.keys();
  }
  entries() {
    return this._hamt.entries();
  }
  get(e) {
    return this._hamt.get(e);
  }
  has(e) {
    return this._hamt.has(e);
  }
  set(e, t) {
    return this._hamt.set(e, t), this;
  }
  delete(e) {
    return this._hamt.delete(e), this;
  }
  clone() {
    return t7(this);
  }
  toMap() {
    return new Map(this._hamt);
  }
}
function t7(e) {
  return tO('recoil_hamt_2020') ? new t9(e) : new t8(e);
}
var ne = /*#__PURE__*/ Object.freeze({ __proto__: null, persistentMap: t7 }),
  nt = /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *
   * @format
   * @oncall recoil
   *//**
   * Returns a set containing all of the values from the first set that are not
   * present in any of the subsequent sets.
   *
   * Note: this is written procedurally (i.e., without filterSet) for performant
   * use in tight loops.
   */ function (e, ...t) {
    let n = new Set();
    n: for (let r of e) {
      for (let e of t) if (e.has(r)) continue n;
      n.add(r);
    }
    return n;
  },
  nn = /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *
   * @format
   * @oncall recoil
   *//**
   * Returns a new Map object with the same keys as the original, but with the
   * values replaced with the output of the given callback function.
   */ function (e, t) {
    let n = new Map();
    return (
      e.forEach((e, r) => {
        n.set(r, t(e, r));
      }),
      n
    );
  }; // the new deps with the old deps.
function nr(e, t, n, r) {
  let { nodeDeps: a, nodeToNodeSubscriptions: o } = n,
    l = a.get(e);
  if (l && r && l !== r.nodeDeps.get(e)) return; // Update nodeDeps:
  a.set(e, t); // Add new deps to nodeToNodeSubscriptions:
  let i = null == l ? t : nt(t, l);
  for (let t of i) {
    o.has(t) || o.set(t, new Set());
    let n = tk(o.get(t));
    n.add(e);
  } // Remove removed deps from nodeToNodeSubscriptions:
  if (l) {
    let n = nt(l, t);
    for (let t of n) {
      if (!o.has(t)) return;
      let n = tk(o.get(t));
      n.delete(e), 0 === n.size && o.delete(t);
    }
  }
}
var na = {
  cloneGraph: function (e) {
    return {
      nodeDeps: nn(e.nodeDeps, (e) => new Set(e)),
      nodeToNodeSubscriptions: nn(e.nodeToNodeSubscriptions, (e) => new Set(e)),
    };
  }, // Note that this overwrites the deps of existing nodes, rather than unioning
  graph: function () {
    return { nodeDeps: new Map(), nodeToNodeSubscriptions: new Map() };
  },
  saveDepsToStore: function (e, t, n, r) {
    var a, o, l, i, u;
    let s = n.getState();
    r === s.currentTree.version ||
      r === (null === (a = s.nextTree) || void 0 === a ? void 0 : a.version) ||
      r ===
        (null === (o = s.previousTree) || void 0 === o ? void 0 : o.version) ||
      tI('Tried to save dependencies to a discarded tree'); // Merge the dependencies discovered into the store's dependency map
    // for the version that was read:
    let c = n.getGraph(r); // into later versions if they don't already have their own:
    if (
      (nr(e, t, c),
      r ===
        (null === (l = s.previousTree) || void 0 === l ? void 0 : l.version))
    ) {
      let r = n.getGraph(s.currentTree.version);
      nr(e, t, r, c);
    }
    if (
      r ===
        (null === (i = s.previousTree) || void 0 === i ? void 0 : i.version) ||
      r === s.currentTree.version
    ) {
      let r = null === (u = s.nextTree) || void 0 === u ? void 0 : u.version;
      if (void 0 !== r) {
        let a = n.getGraph(r);
        nr(e, t, a, c);
      }
    }
  },
};
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @format
 * @oncall recoil
 */ let no = 0,
  nl = 0,
  ni = 0;
var nu = {
  getNextTreeStateVersion: () => no++,
  getNextStoreID: () => nl++,
  getNextComponentID: () => ni++,
};
const { persistentMap: ns } = ne,
  { graph: nc } = na,
  { getNextTreeStateVersion: nd } = nu;
function nf() {
  let e = nd();
  return {
    version: e,
    stateID: e,
    transactionMetadata: {},
    dirtyAtoms: new Set(),
    atomValues: ns(),
    nonvalidatedAtoms: ns(),
  };
}
var np = {
  makeEmptyTreeState: nf,
  makeEmptyStoreState: function () {
    let e = nf();
    return {
      currentTree: e,
      nextTree: null,
      previousTree: null,
      commitDepth: 0,
      knownAtoms: new Set(),
      knownSelectors: new Set(),
      transactionSubscriptions: new Map(),
      nodeTransactionSubscriptions: new Map(),
      nodeToComponentSubscriptions: new Map(),
      queuedComponentCallbacks_DEPRECATED: [],
      suspendedComponentResolvers: new Set(),
      graphsByVersion: new Map().set(e.version, nc()),
      retention: {
        referenceCounts: new Map(),
        nodesRetainedByZone: new Map(),
        retainablesToCheckForRelease: new Set(),
      },
      nodeCleanupFunctions: new Map(),
    };
  },
  getNextTreeStateVersion: nd,
};
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @format
 * @oncall recoil
 */ class nh {}
var nm = {
    RetentionZone: nh,
    retentionZone: function () {
      return new nh();
    },
  },
  nv = {
    setByAddingToSet: /**
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     * Utilities for working with built-in Maps and Sets without mutating them.
     *
     *
     * @format
     * @oncall recoil
     */ function (e, t) {
      let n = new Set(e);
      return n.add(t), n;
    },
    setByDeletingFromSet: function (e, t) {
      let n = new Set(e);
      return n.delete(t), n;
    },
    mapBySettingInMap: function (e, t, n) {
      let r = new Map(e);
      return r.set(t, n), r;
    },
    mapByUpdatingInMap: function (e, t, n) {
      let r = new Map(e);
      return r.set(t, n(r.get(t))), r;
    },
    mapByDeletingFromMap: function (e, t) {
      let n = new Map(e);
      return n.delete(t), n;
    },
    mapByDeletingMultipleFromMap: function (e, t) {
      let n = new Map(e);
      return t.forEach((e) => n.delete(e)), n;
    },
  },
  ng = /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *
   * @format
   * @oncall recoil
   *//**
   * Creates a new iterable whose output is generated by passing the input
   * iterable's values through the filter function.
   */ function* (e, t) {
    // Use generator to create iterable/iterator
    let n = 0;
    for (let r of e) t(r, n++) && (yield r);
  },
  ny = // $FlowIssue[unclear-type]
    /**
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     *
     * @format
     * @oncall recoil
     *//**
     * Return a proxy object based on the provided base and factories objects.
     * The proxy will include all properties of the base object as-is.
     * The factories object contains callbacks to obtain the values of the properies
     * for its keys.
     *
     * This is useful for providing users an object where some properties may be
     * lazily computed only on first access.
     */ function (e, t) {
      let n = new Proxy(e, {
        // Compute and cache lazy property if not already done.
        get: (e, n) => (!(n in e) && n in t && (e[n] = t[n]()), e[n]), // This method allows user to iterate keys as normal
        ownKeys: (e) => Object.keys(e),
      }); // $FlowIssue[incompatible-return]
      return n;
    };
const { getNode: nb, getNodeMaybe: nw, recoilValuesForKeys: nS } = t5,
  { RetentionZone: nk } = nm,
  { setByAddingToSet: n_ } = nv,
  nx = Object.freeze(new Set());
class nE extends Error {}
function nR(e, t, n, r) {
  let a = e.getState();
  if (a.nodeCleanupFunctions.has(n)) return;
  let o = nb(n),
    l = (function (e, t, n) {
      if (!tO('recoil_memory_managament_2020')) return () => void 0;
      let { nodesRetainedByZone: r } = e.getState().retention;
      function a(e) {
        let n = r.get(e);
        n || r.set(e, (n = new Set())), n.add(t);
      }
      if (n instanceof nk) a(n);
      else if (Array.isArray(n)) for (let e of n) a(e);
      return () => {
        if (!tO('recoil_memory_managament_2020')) return;
        let { retention: r } = e.getState();
        function a(e) {
          let n = r.nodesRetainedByZone.get(e);
          null == n || n.delete(t),
            n && 0 === n.size && r.nodesRetainedByZone.delete(e);
        }
        if (n instanceof nk) a(n);
        else if (Array.isArray(n)) for (let e of n) a(e);
      };
    })(e, n, o.retainedBy),
    i = o.init(e, t, r);
  a.nodeCleanupFunctions.set(n, () => {
    i(), l();
  });
}
function nT(e, t, n) {
  return nb(n).peek(e, t);
} // Write value directly to state bypassing the Node interface as the node
function nC(e, t, n) {
  let r = new Set(),
    a = Array.from(n),
    o = e.getGraph(t.version);
  for (let e = a.pop(); e; e = a.pop()) {
    var l;
    r.add(e);
    let t =
      null !== (l = o.nodeToNodeSubscriptions.get(e)) && void 0 !== l ? l : nx;
    for (let e of t) r.has(e) || a.push(e);
  }
  return r;
}
var nN = {
  // Update dependencies and subscriptions for selectors.
  getNodeLoadable:
    // Update saved value validation for atoms.
    function (e, t, n) {
      return nR(e, t, n, 'get'), nb(n).get(e, t);
    }, // Peek at the current value loadable for a node without any evaluation or state change
  peekNodeLoadable: nT,
  // a node value. (Multiple values may be written due to selectors getting to
  setNodeValue:
    // set upstreams; deps may be discovered because of reads in updater functions.)
    function (e, t, n, r) {
      let a = nb(n);
      if (null == a.set)
        throw new nE(`Attempt to set read-only RecoilValue: ${n}`);
      let o = a.set; // so flow doesn't lose the above refinement.
      return nR(e, t, n, 'set'), o(e, t, r);
    },
  initializeNode: function (e, t, n) {
    nR(e, e.getState().currentTree, t, n);
  },
  cleanUpNode: function (e, t) {
    var n;
    let r = e.getState();
    null === (n = r.nodeCleanupFunctions.get(t)) || void 0 === n || n(),
      r.nodeCleanupFunctions.delete(t);
  }, // Get the current value loadable of a node and update the state.
  // definitions may not have been loaded yet when processing the initial snapshot.
  setUnvalidatedAtomValue_DEPRECATED: function (e, t, n) {
    var r;
    let a = nw(t);
    return (
      null == a || null === (r = a.invalidate) || void 0 === r || r.call(a, e),
      {
        ...e,
        atomValues: e.atomValues.clone().delete(t),
        nonvalidatedAtoms: e.nonvalidatedAtoms.clone().set(t, n),
        dirtyAtoms: n_(e.dirtyAtoms, t),
      }
    );
  }, // Return the discovered dependencies and values to be written by setting
  peekNodeInfo: function (e, t, n) {
    let r = e.getState(),
      a = e.getGraph(t.version),
      o = nb(n).nodeType;
    return ny(
      { type: o },
      {
        // $FlowFixMe[underconstrained-implicit-instantiation]
        loadable: () => nT(e, t, n),
        isActive: () => r.knownAtoms.has(n) || r.knownSelectors.has(n),
        isSet: () => 'selector' !== o && t.atomValues.has(n),
        isModified: () => t.dirtyAtoms.has(n), // Report current dependencies.  If the node hasn't been evaluated, then
        // dependencies may be missing based on the current state.
        deps: () => {
          var e;
          return nS(null !== (e = a.nodeDeps.get(n)) && void 0 !== e ? e : []);
        }, // Reports all "current" subscribers.  Evaluating other nodes or
        // previous in-progress async evaluations may introduce new subscribers.
        subscribers: () => {
          var a, o;
          return {
            nodes: nS(ng(nC(e, t, new Set([n])), (e) => e !== n)),
            components: tY(
              null !==
                (a =
                  null === (o = r.nodeToComponentSubscriptions.get(n)) ||
                  void 0 === o
                    ? void 0
                    : o.values()) && void 0 !== a
                ? a
                : [],
              ([e]) => ({ name: e })
            ),
          };
        },
      }
    );
  }, // Find all of the recursively dependent nodes
  getDownstreamNodes: nC,
};
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @format
 * @oncall recoil
 */ let nL = null;
var nA = {
  setInvalidateMemoizedSnapshot: function (e) {
    nL = e;
  },
  invalidateMemoizedSnapshot: function () {
    var e;
    null === (e = nL) || void 0 === e || e();
  },
};
const { getDownstreamNodes: nP, getNodeLoadable: nM, setNodeValue: nD } = nN,
  { getNextComponentID: nz } = nu,
  { getNode: nU, getNodeMaybe: nO } = t5,
  { DefaultValue: nI } = t5,
  { reactMode: nV } = t$,
  {
    AbstractRecoilValue: nj,
    RecoilState: nB,
    RecoilValueReadOnly: nF,
    isRecoilValue: n$,
  } = tQ,
  { invalidateMemoizedSnapshot: nW } = nA;
function nH(e, t, n) {
  'hasValue' === n.state && n.contents instanceof nI
    ? e.atomValues.delete(t)
    : e.atomValues.set(t, n),
    e.dirtyAtoms.add(t),
    e.nonvalidatedAtoms.delete(t);
}
function nq(e, t) {
  e.replaceState((n) => {
    let r = nG(n);
    for (let n of t)
      !(function (e, t, n) {
        if ('set' === n.type) {
          let { recoilValue: r, valueOrUpdater: a } = n,
            o = (function (e, t, { key: n }, r) {
              if ('function' != typeof r) return r;
              {
                // Updater form: pass in the current value. Throw if the current value
                // is unavailable (namely when updating an async selector that's
                // pending or errored):
                let a = nM(e, t, n);
                if ('loading' === a.state) {
                  let e = `Tried to set atom or selector "${n}" using an updater function while the current state is pending, this is not currently supported.`;
                  throw (tI(e), tw(e));
                }
                if ('hasError' === a.state) throw a.contents; // T itself may be a function, so our refinement is not sufficient:
                return r(a.contents); // flowlint-line unclear-type:off
              }
            })(e, t, r, a),
            l = nD(e, t, r.key, o);
          for (let [e, n] of l.entries()) nH(t, e, n);
        } else if ('setLoadable' === n.type) {
          let {
            recoilValue: { key: e },
            loadable: r,
          } = n;
          nH(t, e, r);
        } else if ('markModified' === n.type) {
          let {
            recoilValue: { key: e },
          } = n;
          t.dirtyAtoms.add(e);
        } else if ('setUnvalidated' === n.type) {
          var r; // Write value directly to state bypassing the Node interface as the node
          // definitions may not have been loaded yet when processing the initial snapshot.
          let {
              recoilValue: { key: e },
              unvalidatedValue: a,
            } = n,
            o = nO(e);
          null == o ||
            null === (r = o.invalidate) ||
            void 0 === r ||
            r.call(o, t),
            t.atomValues.delete(e),
            t.nonvalidatedAtoms.set(e, a),
            t.dirtyAtoms.add(e);
        } else tI(`Unknown action ${n.type}`);
      })(e, r, n);
    return nY(e, r), nW(), r;
  });
}
function nK(e, t) {
  if (nQ.length) {
    let n = nQ[nQ.length - 1],
      r = n.get(e);
    r || n.set(e, (r = [])), r.push(t);
  } else nq(e, [t]);
}
const nQ = [];
function nG(e) {
  return {
    ...e,
    atomValues: e.atomValues.clone(),
    nonvalidatedAtoms: e.nonvalidatedAtoms.clone(),
    dirtyAtoms: new Set(e.dirtyAtoms),
  };
}
function nY(e, t) {
  // Inform any nodes that were changed or downstream of changes so that they
  // can clear out any caches as needed due to the update:
  let n = nP(e, t, t.dirtyAtoms);
  for (let e of n) {
    var r, a;
    null === (r = nO(e)) ||
      void 0 === r ||
      null === (a = r.invalidate) ||
      void 0 === a ||
      a.call(r, t);
  }
}
function nZ(e, t, n) {
  nK(e, { type: 'set', recoilValue: t, valueOrUpdater: n });
}
var nX = {
    RecoilValueReadOnly: nF,
    AbstractRecoilValue: nj,
    RecoilState: nB,
    getRecoilValueAsLoadable: function (
      e,
      { key: t },
      n = e.getState().currentTree
    ) {
      var r, a; // Reading from an older tree can cause bugs because the dependencies that we
      // discover during the read are lost.
      let o = e.getState();
      n.version === o.currentTree.version ||
        n.version ===
          (null === (r = o.nextTree) || void 0 === r ? void 0 : r.version) ||
        n.version ===
          (null === (a = o.previousTree) || void 0 === a
            ? void 0
            : a.version) ||
        tI('Tried to read from a discarded tree');
      let l = nM(e, n, t);
      return 'loading' === l.state && l.contents.catch(() => {}), l;
    },
    setRecoilValue: nZ,
    setRecoilValueLoadable: function (e, t, n) {
      if (n instanceof nI) return nZ(e, t, n);
      nK(e, { type: 'setLoadable', recoilValue: t, loadable: n });
    },
    markRecoilValueModified: function (e, t) {
      nK(e, { type: 'markModified', recoilValue: t });
    },
    setUnvalidatedRecoilValue: function (e, t, n) {
      nK(e, { type: 'setUnvalidated', recoilValue: t, unvalidatedValue: n });
    },
    subscribeToRecoilValue: function (e, { key: t }, n, r = null) {
      let a = nz(),
        o = e.getState();
      o.nodeToComponentSubscriptions.has(t) ||
        o.nodeToComponentSubscriptions.set(t, new Map()),
        tk(o.nodeToComponentSubscriptions.get(t)).set(a, [
          null != r ? r : '<not captured>',
          n,
        ]); // has been updated by some effect handler. Otherwise we will miss the update.
      let l = nV();
      if (l.early && ('LEGACY' === l.mode || 'MUTABLE_SOURCE' === l.mode)) {
        let r = e.getState().nextTree;
        r && r.dirtyAtoms.has(t) && n(r);
      }
      return {
        release: () => {
          let n = e.getState(),
            r = n.nodeToComponentSubscriptions.get(t);
          if (void 0 === r || !r.has(a)) {
            tI(
              `Subscription missing at release time for atom ${t}. This is a bug in Recoil.`
            );
            return;
          }
          r.delete(a), 0 === r.size && n.nodeToComponentSubscriptions.delete(t);
        },
      };
    },
    isRecoilValue: n$,
    applyAtomValueWrites: function (e, t) {
      let n = e.clone();
      return (
        t.forEach((e, t) => {
          'hasValue' === e.state && e.contents instanceof nI
            ? n.delete(t)
            : n.set(t, e);
        }),
        n
      );
    },
    batchStart: function () {
      let e = new Map();
      return (
        nQ.push(e),
        () => {
          for (let [t, n] of e) nq(t, n);
          let t = nQ.pop();
          t !== e && tI('Incorrect order of batch popping');
        }
      );
    },
    writeLoadableToTreeState: nH,
    invalidateDownstreams: nY,
    copyTreeState: nG,
    refreshRecoilValue: function (e, t) {
      var n;
      let { currentTree: r } = e.getState(),
        a = nU(t.key);
      null === (n = a.clearCache) || void 0 === n || n.call(a, e, r);
    },
  },
  nJ = /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *
   * @format
   * @oncall recoil
   *//**
   * The someSet() method tests whether some elements in the given Set pass the
   * test implemented by the provided function.
   */ function (e, t, n) {
    let r = e.entries(),
      a = r.next();
    for (; !a.done; ) {
      let o = a.value;
      if (t.call(n, o[1], o[0], e)) return !0;
      a = r.next();
    }
    return !1;
  };
const { cleanUpNode: n0 } = nN,
  { deleteNodeConfigIfPossible: n1, getNode: n2 } = t5,
  { RetentionZone: n4 } = nm,
  n3 = new Set();
function n5(e, t) {
  let n = e.getState(),
    r = n.currentTree;
  if (n.nextTree) {
    tI(
      'releaseNodesNowOnCurrentTree should only be called at the end of a batch'
    );
    return; // leak memory rather than erase something that's about to be used.
  }
  let a = new Set();
  for (let e of t)
    if (e instanceof n4)
      for (let t of (function (e, t) {
        var n;
        return null !== (n = e.retention.nodesRetainedByZone.get(t)) &&
          void 0 !== n
          ? n
          : n3;
      })(n, e))
        a.add(t);
    else a.add(e);
  let o = (function (e, t) {
    let n = e.getState(),
      r = n.currentTree,
      a = e.getGraph(r.version),
      o = new Set(),
      l = new Set();
    return (
      (function t(i) {
        var u, s;
        let c = new Set(),
          d = (function (e, t, n, r, a) {
            let o = e.getGraph(t.version),
              l = [],
              i = new Set();
            for (; n.size > 0; )
              (function e(t) {
                if (r.has(t) || a.has(t)) {
                  n.delete(t);
                  return;
                }
                if (i.has(t)) return;
                let u = o.nodeToNodeSubscriptions.get(t);
                if (u) for (let t of u) e(t);
                i.add(t), n.delete(t), l.push(t);
              })(tk(n.values().next().value));
            return l;
          })(
            e,
            r,
            i,
            o,
            l // don't descend into these
          );
        for (let e of d) {
          // Not releasable if configured to be retained forever:
          if (
            'recoilRoot' === n2(e).retainedBy ||
            (null !== (u = n.retention.referenceCounts.get(e)) && void 0 !== u
              ? u
              : 0) > 0 ||
            n6(e).some((e) => n.retention.referenceCounts.get(e))
          ) {
            l.add(e);
            continue;
          } // Not releasable if retained directly by a component:
          // nonReleasableNodes because we are going in topological order):
          let t = a.nodeToNodeSubscriptions.get(e);
          if (t && nJ(t, (e) => l.has(e))) {
            l.add(e);
            continue;
          }
          o.add(e), c.add(e);
        } // If we found any releasable nodes, we need to walk UP from those nodes to
        // find whether their parents can now be released as well:
        let f = new Set();
        for (let e of c)
          for (let t of null !== (s = a.nodeDeps.get(e)) && void 0 !== s
            ? s
            : n3)
            o.has(t) || f.add(t);
        f.size && t(f);
      })(t),
      o
    );
  })(
    // Children before parents
    e,
    a
  );
  for (let t of o)
    !(function (e, t, n) {
      var r, a;
      if (!tO('recoil_memory_managament_2020')) return; // Atom effects, in-closure caches, etc.:
      n0(e, n);
      let o = e.getState();
      o.knownAtoms.delete(n),
        o.knownSelectors.delete(n),
        o.nodeTransactionSubscriptions.delete(n),
        o.retention.referenceCounts.delete(n);
      let l = n6(n);
      for (let e of l)
        null === (r = o.retention.nodesRetainedByZone.get(e)) ||
          void 0 === r ||
          r.delete(n); // Note that we DO NOT delete from nodeToComponentSubscriptions because this
      // already happens when the last component that was retaining the node unmounts,
      // and this could happen either before or after that.
      // Delete from TreeState and dep graph:
      t.atomValues.delete(n),
        t.dirtyAtoms.delete(n),
        t.nonvalidatedAtoms.delete(n);
      let i = o.graphsByVersion.get(t.version);
      if (i) {
        let e = i.nodeDeps.get(n);
        if (void 0 !== e)
          for (let t of (i.nodeDeps.delete(n), e))
            null === (a = i.nodeToNodeSubscriptions.get(t)) ||
              void 0 === a ||
              a.delete(n); // No need to delete sub's deps as there should be no subs at this point.
        // But an invariant would require deleting nodes in topological order.
        i.nodeToNodeSubscriptions.delete(n);
      } // Node config (for family members only as their configs can be recreated, and
      // only if they are not retained within any other Stores):
      n1(n);
    })(e, r, t);
}
function n6(e) {
  let t = n2(e).retainedBy;
  return void 0 === t || 'components' === t || 'recoilRoot' === t
    ? []
    : t instanceof n4
    ? [t]
    : t; // it's an array of zones
}
function n8(e, t) {
  if (!tO('recoil_memory_managament_2020')) return;
  let n = e.getState().retention.referenceCounts;
  n.delete(t),
    (function (e, t) {
      let n = e.getState();
      n.nextTree
        ? n.retention.retainablesToCheckForRelease.add(t)
        : n5(e, new Set([t]));
    })(e, t);
}
var n9 = {
  SUSPENSE_TIMEOUT_MS: 12e4,
  updateRetainCount: function (e, t, n) {
    var r;
    if (!tO('recoil_memory_managament_2020')) return;
    let a = e.getState().retention.referenceCounts,
      o = (null !== (r = a.get(t)) && void 0 !== r ? r : 0) + n;
    0 === o ? n8(e, t) : a.set(t, o);
  },
  updateRetainCountToZero: n8,
  releaseScheduledRetainablesNow: function (e) {
    if (!tO('recoil_memory_managament_2020')) return;
    let t = e.getState();
    n5(e, t.retention.retainablesToCheckForRelease),
      t.retention.retainablesToCheckForRelease.clear();
  },
  retainedByOptionWithDefault: function (e) {
    // The default will change from 'recoilRoot' to 'components' in the future.
    return void 0 === e ? 'recoilRoot' : e;
  },
};
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * This is to export esstiential functions from react-dom
 * for our web build
 *
 *
 * @format
 * @oncall recoil
 */ const { unstable_batchedUpdates: n7 } = /*@__PURE__*/ r(M),
  { unstable_batchedUpdates: re } = { unstable_batchedUpdates: n7 },
  { batchStart: rt } = nX,
  { unstable_batchedUpdates: rn } = { unstable_batchedUpdates: re };
/*
 * During SSR, unstable_batchedUpdates may be undefined so this
 * falls back to a basic function that executes the batch
 */ let rr = rn || ((e) => e());
var ra = {
    getBatcher: () => rr,
    setBatcher: (e) => {
      rr = e;
    },
    batchUpdates: (e) => {
      rr(() => {
        let t = () => void 0;
        try {
          (t = rt()), e();
        } finally {
          t();
        }
      });
    },
  },
  ro = /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *
   * @format
   * @oncall recoil
   *//**
   * Combines multiple Iterables into a single Iterable.
   * Traverses the input Iterables in the order provided and maintains the order
   * of their elements.
   *
   * Example:
   * ```
   * const r = Array.from(concatIterables(['a', 'b'], ['c'], ['d', 'e', 'f']));
   * r == ['a', 'b', 'c', 'd', 'e', 'f'];
   * ```
   */ function* (e) {
    for (let t of e) for (let e of t) yield e;
  };
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @format
 * @oncall recoil
 */ /* eslint-disable fb-www/typeof-undefined */ const rl =
    'undefined' == typeof Window || 'undefined' == typeof window,
  ri = 'undefined' != typeof navigator && 'ReactNative' === navigator.product;
var ru = {
  isSSR: rl,
  isReactNative: ri,
  isWindow: (e) => !rl && (e === window || e instanceof Window),
};
const { batchUpdates: rs } = ra,
  { initializeNode: rc, peekNodeInfo: rd } = nN,
  { graph: rf } = na,
  { getNextStoreID: rp } = nu,
  { DEFAULT_VALUE: rh, recoilValues: rm, recoilValuesForKeys: rv } = t5,
  {
    AbstractRecoilValue: rg,
    getRecoilValueAsLoadable: ry,
    setRecoilValue: rb,
    setUnvalidatedRecoilValue: rw,
  } = nX,
  { updateRetainCount: rS } = n9,
  { setInvalidateMemoizedSnapshot: rk } = nA,
  { getNextTreeStateVersion: r_, makeEmptyStoreState: rx } = np,
  { isSSR: rE } = ru,
  { memoizeOneWithArgsHashAndInvalidation: rR } = {
    memoizeWithArgsHash: /**
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     *
     * @format
     * @oncall recoil
     *//**
     * Caches a function's results based on the key returned by the passed
     * hashFunction.
     */ function (e, t) {
      let n;
      return (...r) => {
        n || (n = {});
        let a = t(...r);
        return Object.hasOwnProperty.call(n, a) || (n[a] = e(...r)), n[a];
      };
    },
    memoizeOneWithArgsHash: /**
     * Caches a function's results based on a comparison of the arguments.
     * Only caches the last return of the function.
     * Defaults to reference equality
     */ function (e, t) {
      let n, r;
      return (...a) => {
        let o = t(...a);
        return n === o ? r : ((n = o), (r = e(...a)));
      };
    },
    memoizeOneWithArgsHashAndInvalidation: /**
     * Caches a function's results based on a comparison of the arguments.
     * Only caches the last return of the function.
     * Defaults to reference equality
     */ function (e, t) {
      let n, r;
      return [
        (...a) => {
          let o = t(...a);
          return n === o ? r : ((n = o), (r = e(...a)));
        },
        () => {
          n = null;
        },
      ];
    },
  }; // However, the data-flow-graph and selector values may evolve as selector
// evaluation functions are executed and async selectors resolve.
class rT {
  // eslint-disable-next-line fb-www/no-uninitialized-properties
  constructor(e, t) {
    // this snapshot gets counted towards the node's live stores count).
    // TODO Optimize this when cloning snapshots for callbacks
    for (let n of (t_(this, '_store', void 0),
    t_(this, '_refCount', 1),
    t_(
      this,
      'getLoadable',
      (e) => (this.checkRefCount_INTERNAL(), ry(this._store, e))
    ),
    t_(
      this,
      'getPromise',
      (e) => (this.checkRefCount_INTERNAL(), this.getLoadable(e).toPromise())
    ),
    t_(this, 'getNodes_UNSTABLE', (e) => {
      if (
        (this.checkRefCount_INTERNAL(),
        (null == e ? void 0 : e.isModified) === !0)
      ) {
        if ((null == e ? void 0 : e.isInitialized) === !1) return [];
        let t = this._store.getState().currentTree;
        return rv(t.dirtyAtoms);
      }
      let t = this._store.getState().knownAtoms,
        n = this._store.getState().knownSelectors;
      return (null == e ? void 0 : e.isInitialized) == null
        ? rm.values()
        : !0 === e.isInitialized
        ? rv(ro([t, n]))
        : ng(rm.values(), ({ key: e }) => !t.has(e) && !n.has(e));
    }),
    t_(
      this,
      'getInfo_UNSTABLE',
      ({ key: e }) => (
        this.checkRefCount_INTERNAL(),
        rd(this._store, this._store.getState().currentTree, e)
      )
    ),
    t_(this, 'map', (e) => {
      this.checkRefCount_INTERNAL();
      let t = new rA(this, rs);
      return e(t), t;
    }),
    t_(this, 'asyncMap', async (e) => {
      this.checkRefCount_INTERNAL();
      let t = new rA(this, rs);
      return (
        t.retain(),
        await e(t), // after the next tick, the same as a new synchronous snapshot.
        t.autoRelease_INTERNAL(),
        t
      );
    }),
    (this._store = {
      storeID: rp(),
      parentStoreID: t,
      getState: () => e,
      replaceState: (t) => {
        // no batching, so nextTree is never active
        e.currentTree = t(e.currentTree);
      },
      getGraph: (t) => {
        let n = e.graphsByVersion;
        if (n.has(t)) return tk(n.get(t));
        let r = rf();
        return n.set(t, r), r;
      },
      subscribeToTransactions: () => ({ release: () => {} }),
      addTransactionMetadata: () => {
        throw tw('Cannot subscribe to Snapshots');
      },
    }),
    this._store.getState().knownAtoms))
      rc(this._store, n, 'get'), rS(this._store, n, 1);
    this.autoRelease_INTERNAL();
  }
  retain() {
    this._refCount <= 0 &&
      tI('Attempt to retain() Snapshot that was already released.'),
      this._refCount++;
    let e = !1;
    return () => {
      e || ((e = !0), this._release());
    };
  }
  /**
   * Release the snapshot on the next tick.  This means the snapshot is retained
   * during the execution of the current function using it.
   */ autoRelease_INTERNAL() {
    rE || window.setTimeout(() => this._release(), 10);
  }
  _release() {
    if ((this._refCount--, 0 === this._refCount)) {
      if (
        (this._store.getState().nodeCleanupFunctions.forEach((e) => e()),
        this._store.getState().nodeCleanupFunctions.clear(),
        !tO('recoil_memory_managament_2020'))
      )
        return;
    } else this._refCount;
  }
  isRetained() {
    return this._refCount > 0;
  }
  checkRefCount_INTERNAL() {
    tO('recoil_memory_managament_2020') && this._refCount;
  }
  getStore_INTERNAL() {
    return this.checkRefCount_INTERNAL(), this._store;
  }
  getID() {
    return (
      this.checkRefCount_INTERNAL(), this._store.getState().currentTree.stateID
    );
  }
  getStoreID() {
    return this.checkRefCount_INTERNAL(), this._store.storeID;
  }
}
function rC(e, t, n = !1) {
  let r = e.getState(),
    a = n ? r_() : t.version;
  return {
    // Always clone the TreeState to isolate stores from accidental mutations.
    // For example, reading a selector from a cloned snapshot shouldn't cache
    // in the original treestate which may cause the original to skip
    // initialization of upstream atoms.
    currentTree: {
      // TODO snapshots shouldn't really have versions because a new version number
      // is always assigned when the snapshot is gone to.
      version: n ? a : t.version,
      stateID: n ? a : t.stateID,
      transactionMetadata: { ...t.transactionMetadata },
      dirtyAtoms: new Set(t.dirtyAtoms),
      atomValues: t.atomValues.clone(),
      nonvalidatedAtoms: t.nonvalidatedAtoms.clone(),
    },
    commitDepth: 0,
    nextTree: null,
    previousTree: null,
    knownAtoms: new Set(r.knownAtoms), // FIXME here's a copy
    knownSelectors: new Set(r.knownSelectors), // FIXME here's a copy
    transactionSubscriptions: new Map(),
    nodeTransactionSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set(),
    graphsByVersion: new Map().set(a, e.getGraph(t.version)),
    retention: {
      referenceCounts: new Map(),
      nodesRetainedByZone: new Map(),
      retainablesToCheckForRelease: new Set(),
    }, // FIXME here's a copy
    // Create blank cleanup handlers for atoms so snapshots don't re-run
    // atom effects.
    nodeCleanupFunctions: new Map(
      tY(r.nodeCleanupFunctions.entries(), ([e]) => [e, () => {}])
    ),
  };
} // Factory to build a fresh snapshot
const [rN, rL] = rR(
  (e, t) => {
    var n;
    let r = e.getState(),
      a =
        'latest' === t
          ? null !== (n = r.nextTree) && void 0 !== n
            ? n
            : r.currentTree
          : tk(r.previousTree);
    return new rT(rC(e, a), e.storeID);
  },
  (e, t) => {
    var n, r;
    return (
      String(t) +
      String(e.storeID) +
      String(
        null === (n = e.getState().nextTree) || void 0 === n
          ? void 0
          : n.version
      ) +
      String(e.getState().currentTree.version) +
      String(
        null === (r = e.getState().previousTree) || void 0 === r
          ? void 0
          : r.version
      )
    );
  }
); // Avoid circular dependencies
rk(rL);
class rA extends rT {
  constructor(e, t) {
    super(
      rC(
        e.getStore_INTERNAL(),
        e.getStore_INTERNAL().getState().currentTree,
        !0
      ),
      e.getStoreID()
    ),
      t_(this, '_batch', void 0),
      t_(this, 'set', (e, t) => {
        this.checkRefCount_INTERNAL();
        let n = this.getStore_INTERNAL(); // This batchUpdates ensures this `set` is applied immediately and you can
        // read the written value after calling `set`. I would like to remove this
        // behavior and only batch in `Snapshot.map`, but this would be a breaking
        // change potentially.
        this._batch(() => {
          rS(n, e.key, 1), rb(this.getStore_INTERNAL(), e, t);
        });
      }),
      t_(this, 'reset', (e) => {
        this.checkRefCount_INTERNAL();
        let t = this.getStore_INTERNAL(); // See note at `set` about batched updates.
        this._batch(() => {
          rS(t, e.key, 1), rb(this.getStore_INTERNAL(), e, rh);
        });
      }),
      t_(this, 'setUnvalidatedAtomValues_DEPRECATED', (e) => {
        this.checkRefCount_INTERNAL();
        let t = this.getStore_INTERNAL(); // See note at `set` about batched updates.
        rs(() => {
          for (let [n, r] of e.entries()) rS(t, n, 1), rw(t, new rg(n), r);
        });
      }),
      (this._batch = t);
  }
}
var rP = {
    Snapshot: rT,
    MutableSnapshot: rA,
    freshSnapshot: function (e) {
      let t = new rT(rx());
      return null != e ? t.map(e) : t;
    }, // Factory to clone a snapshot state
    cloneSnapshot: function (e, t = 'latest') {
      let n = rN(e, t);
      return n.isRetained() ? n : (rL(), rN(e, t));
    },
  },
  rM = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    Snapshot: rP.Snapshot,
    MutableSnapshot: rP.MutableSnapshot,
    freshSnapshot: rP.freshSnapshot,
    cloneSnapshot: rP.cloneSnapshot,
  }),
  rD = /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *
   * @format
   * @oncall recoil
   */ function (...e) {
    let t = new Set();
    for (let n of e) for (let e of n) t.add(e);
    return t;
  };
const { useRef: rz } = /*@__PURE__*/ r(P);
var rU = /**
 * The same as `useRef()` except that if a function is specified then it will
 * call that function to get the value to initialize the reference with.
 * This is similar to how `useState()` behaves when given a function.  It allows
 * the user to avoid generating the initial value for subsequent renders.
 * The tradeoff is that to set the reference to a function itself you need to
 * nest it: useRefInitOnce(() => () => {...});
 */ function (e) {
  // $FlowExpectedError[incompatible-call]
  let t = rz(e);
  return t.current === e && 'function' == typeof e && (t.current = e()), t;
}; // @fb-only: const RecoilusagelogEvent = require('RecoilusagelogEvent');
// @fb-only: const RecoilUsageLogFalcoEvent = require('RecoilUsageLogFalcoEvent');
// @fb-only: const URI = require('URI');
const { getNextTreeStateVersion: rO, makeEmptyStoreState: rI } = np,
  {
    cleanUpNode: rV,
    getDownstreamNodes: rj,
    initializeNode: rB,
    setNodeValue: rF,
    setUnvalidatedAtomValue_DEPRECATED: r$,
  } = nN,
  { graph: rW } = na,
  { cloneGraph: rH } = na,
  { getNextStoreID: rq } = nu,
  { createMutableSource: rK, reactMode: rQ } = t$,
  { applyAtomValueWrites: rG } = nX,
  { releaseScheduledRetainablesNow: rY } = n9,
  { freshSnapshot: rZ } = rM,
  {
    useCallback: rX,
    useContext: rJ,
    useEffect: r0,
    useMemo: r1,
    useRef: r2,
    useState: r4,
  } = /*@__PURE__*/ r(P);
function r3() {
  throw tw('This component must be used inside a <RecoilRoot> component.');
}
const r5 = Object.freeze({
  storeID: rq(),
  getState: r3,
  replaceState: r3,
  getGraph: r3,
  subscribeToTransactions: r3,
  addTransactionMetadata: r3,
});
let r6 = !1;
function r8(e) {
  if (r6)
    throw tw(
      'An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.'
    );
  let t = e.getState();
  if (null === t.nextTree) {
    tO('recoil_memory_managament_2020') &&
      tO('recoil_release_on_cascading_update_killswitch_2021') &&
      t.commitDepth > 0 &&
      rY(e);
    let n = t.currentTree.version,
      r = rO();
    (t.nextTree = {
      ...t.currentTree,
      version: r,
      stateID: r,
      dirtyAtoms: new Set(),
      transactionMetadata: {},
    }),
      t.graphsByVersion.set(r, rH(tk(t.graphsByVersion.get(n))));
  }
}
const r9 = /*@__PURE__*/ r(P).createContext({ current: r5 }),
  r7 = () => rJ(r9),
  ae = /*@__PURE__*/ r(P).createContext(null);
function at(e, t, n) {
  let r = rj(e, n, n.dirtyAtoms);
  for (let e of r) {
    let r = t.nodeToComponentSubscriptions.get(e);
    if (r) for (let [e, [t, a]] of r) a(n);
  }
}
function an(e) {
  let t = e.getState(),
    n = t.currentTree,
    r = n.dirtyAtoms;
  if (r.size) {
    // Execute Node-specific subscribers before global subscribers
    for (let [n, a] of t.nodeTransactionSubscriptions)
      if (r.has(n)) for (let [t, n] of a) n(e);
    for (let [n, r] of t.transactionSubscriptions) r(e);
    (!rQ().early || t.suspendedComponentResolvers.size > 0) && // Notifying components is needed to wake from suspense, even when using
      // early rendering.
      (at(e, t, n), // We need to wake up components not just when some asynchronous selector
      // resolved, but also when changing synchronous values because this may cause
      // a selector to change from asynchronous to synchronous, in which case there
      // would be no follow-up asynchronous resolution to wake us up.
      // TODO OPTIMIZATION Only wake up related downstream components
      t.suspendedComponentResolvers.forEach((e) => e()),
      t.suspendedComponentResolvers.clear());
  } // Special behavior ONLY invoked by useInterface.
  // FIXME delete queuedComponentCallbacks_DEPRECATED when deleting useInterface.
  t.queuedComponentCallbacks_DEPRECATED.forEach((e) => e(n)),
    t.queuedComponentCallbacks_DEPRECATED.splice(
      0,
      t.queuedComponentCallbacks_DEPRECATED.length
    );
}
/*
 * The purpose of the Batcher is to observe when React batches end so that
 * Recoil state changes can be batched. Whenever Recoil state changes, we call
 * setState on the batcher. Then we wait for that change to be committed, which
 * signifies the end of the batch. That's when we respond to the Recoil change.
 */ function ar({ setNotifyBatcherOfChange: e }) {
  let t = r7(),
    [, n] = r4([]);
  return (
    e(() => n({})),
    r0(
      () =>
        (
          // $FlowFixMe[incompatible-call]
          e(() => n({})),
          () => {
            e(() => {});
          }
        ),
      [e]
    ),
    r0(() => {
      // enqueueExecution runs this function immediately; it is only used to
      // manipulate the order of useEffects during tests, since React seems to
      // call useEffect in an unpredictable order sometimes.
      (function (e) {
        let t = e.getState();
        t.commitDepth++;
        try {
          let { nextTree: n } = t; // Ignore commits that are not because of Recoil transactions -- namely,
          // because something above RecoilRoot re-rendered:
          if (null == n) return; // nextTree is now committed -- note that copying and reset occurs when
          // a transaction begins, in startNextTreeIfNeeded:
          (t.previousTree = t.currentTree),
            (t.currentTree = n),
            (t.nextTree = null),
            an(e),
            null != t.previousTree
              ? t.graphsByVersion.delete(t.previousTree.version)
              : tI(
                  'Ended batch with no previous state, which is unexpected',
                  'recoil'
                ),
            (t.previousTree = null),
            tO('recoil_memory_managament_2020') && null == n && rY(e);
        } finally {
          t.commitDepth--;
        }
      })(t.current);
    }),
    null
  );
}
let aa = 0;
function ao({
  initializeState_DEPRECATED: e,
  initializeState: t,
  store_INTERNAL: n,
  children: a,
}) {
  let o;
  let l = (e) => {
      let t = o.current.graphsByVersion;
      if (t.has(e)) return tk(t.get(e));
      let n = rW();
      return t.set(e, n), n;
    },
    i = (e, t) => {
      if (null == t) {
        // Global transaction subscriptions
        let { transactionSubscriptions: t } = f.current.getState(),
          n = aa++;
        return (
          t.set(n, e),
          {
            release: () => {
              t.delete(n);
            },
          }
        );
      }
      {
        // Node-specific transaction subscriptions:
        let { nodeTransactionSubscriptions: n } = f.current.getState();
        n.has(t) || n.set(t, new Map());
        let r = aa++;
        return (
          tk(n.get(t)).set(r, e),
          {
            release: () => {
              let e = n.get(t);
              e && (e.delete(r), 0 === e.size && n.delete(t));
            },
          }
        );
      }
    },
    u = (e) => {
      for (let t of (r8(f.current), Object.keys(e)))
        tk(f.current.getState().nextTree).transactionMetadata[t] = e[t];
    },
    s = (e) => {
      let t;
      r8(f.current); // Use replacer to get the next state:
      let n = tk(o.current.nextTree);
      try {
        (r6 = !0), (t = e(n));
      } finally {
        r6 = !1;
      }
      t !== n &&
        ((o.current.nextTree = t),
        rQ().early && at(f.current, o.current, t),
        tk(c.current)());
    },
    c = r2(null),
    d = rX(
      (e) => {
        c.current = e;
      },
      [c]
    ),
    f = rU(() =>
      null != n
        ? n
        : {
            storeID: rq(),
            getState: () => o.current,
            replaceState: s,
            getGraph: l,
            subscribeToTransactions: i,
            addTransactionMetadata: u,
          }
    );
  null != n && (f.current = n),
    (o = rU(() =>
      null != e // which will no longer be needed.
        ? (function (e, t) {
            let n = rI();
            return (
              t({
                set: (t, r) => {
                  let a = n.currentTree,
                    o = rF(e, a, t.key, r),
                    l = new Set(o.keys()),
                    i = a.nonvalidatedAtoms.clone();
                  for (let e of l) i.delete(e);
                  n.currentTree = {
                    ...a,
                    dirtyAtoms: rD(a.dirtyAtoms, l),
                    atomValues: rG(a.atomValues, o),
                    nonvalidatedAtoms: i,
                  };
                },
                setUnvalidatedAtomValues: (e) => {
                  // FIXME replace this with a mutative loop
                  e.forEach((e, t) => {
                    n.currentTree = r$(n.currentTree, t, e);
                  });
                },
              }),
              n
            );
          })(
            // Initialize state snapshot for <RecoilRoot> for the initializeState prop.
            f.current,
            e
          )
        : null != t // Atom effect initialization takes precedence over this prop.
        ? // Any atom effects will be run before initialization, but then cleaned up,
          // they are then re-run when used as part of rendering.  These semantics are
          // compatible with React StrictMode where effects may be re-run multiple times
          // but state initialization only happens once the first time.
          (function (e) {
            // Initialize a snapshot and get its store
            let t = rZ(e),
              n = t.getStore_INTERNAL().getState();
            return (
              t.retain(), // they will re-initialize if used during rendering.  This allows atom effect
              // initialization to take precedence over initializeState and be compatible
              // with StrictMode semantics.
              n.nodeCleanupFunctions.forEach((e) => e()),
              n.nodeCleanupFunctions.clear(),
              n
            );
          })(t)
        : rI()
    ));
  let p = r1(
    () => (null == rK ? void 0 : rK(o, () => o.current.currentTree.version)),
    [o]
  ); // Cleanup when the <RecoilRoot> is unmounted
  return (
    r0(() => {
      // React is free to call effect cleanup handlers and effects at will, the
      // deps array is only an optimization.  For example, React strict mode
      // will execute each effect twice for testing.  Therefore, we need symmetry
      // to re-initialize all known atoms after they were cleaned up.
      let e = f.current;
      for (let t of new Set(e.getState().knownAtoms)) rB(e, t, 'get');
      return () => {
        for (let t of e.getState().knownAtoms) rV(e, t);
      };
    }, [f]),
    /*@__PURE__*/ r(P).createElement(
      r9.Provider,
      { value: f },
      /*@__PURE__*/ r(P).createElement(
        ae.Provider,
        { value: p },
        /*@__PURE__*/ r(P).createElement(ar, { setNotifyBatcherOfChange: d }),
        a
      )
    )
  );
}
var al = {
    RecoilRoot: function (e) {
      let { override: t, ...n } = e,
        a = r7();
      return !1 === t && a.current !== r5
        ? e.children
        : /*@__PURE__*/ r(P).createElement(ao, n);
    },
    useStoreRef: r7,
    useRecoilMutableSource: function () {
      let e = rJ(ae);
      return (
        null == e &&
          tG(
            'Attempted to use a Recoil hook outside of a <RecoilRoot>. <RecoilRoot> must be an ancestor of any component that uses Recoil hooks.'
          ),
        e
      );
    },
    useRecoilStoreID: function () {
      return r7().current.storeID;
    },
    notifyComponents_FOR_TESTING: at,
    sendEndOfBatchNotifications_FOR_TESTING: an,
  },
  ai = /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *
   * @format
   * @oncall recoil
   */ function (e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
    return !0;
  };
const { useEffect: au, useRef: as } = /*@__PURE__*/ r(P);
var ac = function (e) {
  let t = as();
  return (
    au(() => {
      // $FlowFixMe[incompatible-type]
      t.current = e;
    }),
    t.current
  );
};
const { useStoreRef: ad } = al,
  { SUSPENSE_TIMEOUT_MS: af } = n9,
  { updateRetainCount: ap } = n9,
  { RetentionZone: ah } = nm,
  { useEffect: am, useRef: av } = /*@__PURE__*/ r(P),
  { isSSR: ag } = ru;
var ay = // I don't see a way to avoid the any type here because we want to accept readable
    // and writable values with any type parameter, but normally with writable ones
    // RecoilState<SomeT> is not a subtype of RecoilState<mixed>.
    // flowlint-line unclear-type:off
    function (e) {
      if (tO('recoil_memory_managament_2020'))
        // eslint-disable-next-line fb-www/react-hooks
        return (function (e) {
          let t = Array.isArray(e) ? e : [e],
            n = t.map((e) => (e instanceof ah ? e : e.key)),
            r = ad();
          am(() => {
            if (!tO('recoil_memory_managament_2020')) return;
            let e = r.current;
            if (a.current && !ag)
              // Already performed a temporary retain on render, simply cancel the release
              // of that temporary retain.
              window.clearTimeout(a.current), (a.current = null);
            else for (let t of n) ap(e, t, 1);
            return () => {
              for (let t of n) ap(e, t, -1);
            }; // eslint-disable-next-line fb-www/react-hooks-deps
          }, [r, ...n]); // We want to retain if the component suspends. This is terrible but the Suspense
          // API affords us no better option. If we suspend and never commit after some
          // seconds, then release. The 'actual' retain/release in the effect above
          // cancels this.
          let a = av(),
            o = ac(n);
          if (!ag && (void 0 === o || !ai(o, n))) {
            let e = r.current;
            for (let t of n) ap(e, t, 1);
            if (o) for (let t of o) ap(e, t, -1);
            a.current && window.clearTimeout(a.current),
              (a.current = window.setTimeout(() => {
                for (let t of ((a.current = null), n)) ap(e, t, -1);
              }, af));
          }
        })(e);
    },
  ab = // const {useRef} = require('react');
    /**
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     *
     * @format
     * @oncall recoil
     *//**
     * THIS CODE HAS BEEN COMMENTED OUT INTENTIONALLY
     *
     * This technique of getting the component name is imperfect, since it both only
     * works in a non-minified code base, and more importantly introduces performance
     * problems since it relies in throwing errors which is an expensive operation.
     *
     * At some point we may want to reevaluate this technique hence why we have commented
     * this code out, rather than delete it all together.
     */ // const gkx = require('recoil-shared/util/Recoil_gkx');
    // const stackTraceParser = require('recoil-shared/util/Recoil_stackTraceParser');
    function () {
      // const nameRef = useRef();
      // if (__DEV__) {
      //   if (gkx('recoil_infer_component_names')) {
      //     if (nameRef.current === undefined) {
      //       // There is no blessed way to determine the calling React component from
      //       // within a hook. This hack uses the fact that hooks must start with 'use'
      //       // and that hooks are either called by React Components or other hooks. It
      //       // follows therefore, that to find the calling component, you simply need
      //       // to look down the stack and find the first function which doesn't start
      //       // with 'use'. We are only enabling this in dev for now, since once the
      //       // codebase is minified, the naming assumptions no longer hold true.
      //       // eslint-disable-next-line fb-www/no-new-error
      //       const frames = stackTraceParser(new Error().stack);
      //       for (const {methodName} of frames) {
      //         // I observed cases where the frame was of the form 'Object.useXXX'
      //         // hence why I'm searching for hooks following a word boundary
      //         if (!methodName.match(/\buse[^\b]+$/)) {
      //           return (nameRef.current = methodName);
      //         }
      //       }
      //       nameRef.current = null;
      //     }
      //     return nameRef.current ?? '<unable to determine component name>';
      //   }
      // }
      // @fb-only: return "<component name only available when both in dev mode and when passing GK 'recoil_infer_component_names'>";
      return '<component name not available>'; // @oss-only
    };
const { batchUpdates: aw } = ra,
  { DEFAULT_VALUE: aS } = t5,
  {
    currentRendererSupportsUseSyncExternalStore: ak,
    reactMode: a_,
    useMutableSource: ax,
    useSyncExternalStore: aE,
  } = t$,
  { useRecoilMutableSource: aR, useStoreRef: aT } = al,
  { isRecoilValue: aC } = tQ,
  {
    AbstractRecoilValue: aN,
    getRecoilValueAsLoadable: aL,
    setRecoilValue: aA,
    setUnvalidatedRecoilValue: aP,
    subscribeToRecoilValue: aM,
  } = nX,
  {
    useCallback: aD,
    useEffect: az,
    useMemo: aU,
    useRef: aO,
    useState: aI,
  } = /*@__PURE__*/ r(P),
  { setByAddingToSet: aV } = nv,
  { isSSR: aj } = ru;
function aB(e, t, n) {
  // We can't just throw the promise we are waiting on to Suspense.  If the
  // upstream dependencies change it may produce a state in which the component
  // can render, but it would still be suspended on a Promise that may never resolve.
  if ('hasValue' === e.state) return e.contents;
  if ('loading' === e.state) {
    let t = new Promise((t) => {
      let r = n.current.getState().suspendedComponentResolvers;
      r.add(t),
        aj &&
          tS(e.contents) &&
          e.contents.finally(() => {
            r.delete(t);
          });
    }); // $FlowExpectedError Flow(prop-missing) for integrating with tools that inspect thrown promises @fb-only
    // @fb-only: promise.displayName = `Recoil State: ${recoilValue.key}`;
    throw t;
  }
  if ('hasError' === e.state) throw e.contents;
  throw tw(`Invalid value of loadable atom "${t.key}"`);
}
function aF(e) {
  let t = aT(),
    n = ab(),
    r = aD(() => {
      var n;
      let r = t.current,
        a = r.getState(),
        o =
          a_().early && null !== (n = a.nextTree) && void 0 !== n
            ? n
            : a.currentTree,
        l = aL(r, e, o);
      return { loadable: l, key: e.key };
    }, [t, e]),
    a = aD((e) => {
      let t;
      return () => {
        var n, r;
        let a = e();
        return null !== (n = t) &&
          void 0 !== n &&
          n.loadable.is(a.loadable) &&
          (null === (r = t) || void 0 === r ? void 0 : r.key) === a.key
          ? t
          : ((t = a), a);
      };
    }, []),
    o = aU(() => a(r), [r, a]),
    l = aD(
      (r) => {
        let a = t.current,
          o = aM(a, e, r, n);
        return o.release;
      },
      [t, e, n]
    );
  return aE(
    l,
    o,
    o // getServerSnapshot() for SSR support
  ).loadable;
}
function a$(e) {
  let t = aT(),
    n = aD(() => {
      var n;
      let r = t.current,
        a = r.getState(),
        o =
          a_().early && null !== (n = a.nextTree) && void 0 !== n
            ? n
            : a.currentTree;
      return aL(r, e, o);
    }, [t, e]),
    r = aD(() => n(), [n]),
    a = ab(),
    o = aD(
      (r, o) => {
        let l = t.current,
          i = aM(
            l,
            e,
            () => {
              if (!tO('recoil_suppress_rerender_in_callback')) return o(); // Only re-render if the value has changed.
              // This will evaluate the atom/selector now as well as when the
              // component renders, but that may help with prefetching.
              let e = n();
              u.current.is(e) || o(), // If the component is suspended then the effect setting prevLoadableRef
                // will not run.  So, set the previous value here when its subscription
                // is fired to wake it up.  We can't just rely on this, though, because
                // this only executes when an atom/selector is dirty and the atom/selector
                // passed to the hook can dynamically change.
                (u.current = e);
            },
            a
          );
        return i.release;
      },
      [t, e, a, n]
    ),
    l = aR();
  if (null == l)
    throw tw(
      'Recoil hooks must be used in components contained within a <RecoilRoot> component.'
    );
  let i = ax(l, r, o),
    u = aO(i);
  return (
    az(() => {
      u.current = i;
    }),
    i
  );
}
function aW(e) {
  let t = aT(),
    n = ab(),
    r = aD(() => {
      var n;
      let r = t.current,
        a = r.getState(),
        o =
          a_().early && null !== (n = a.nextTree) && void 0 !== n
            ? n
            : a.currentTree;
      return aL(r, e, o);
    }, [t, e]),
    a = aD(() => ({ loadable: r(), key: e.key }), [r, e.key]),
    o = aD(
      (e) => {
        let t = a();
        return e.loadable.is(t.loadable) && e.key === t.key ? e : t;
      },
      [a]
    );
  az(() => {
    let r = aM(
      t.current,
      e,
      (e) => {
        i(o);
      },
      n
    ); // Update state in case we are using a different key
    return i(o), r.release;
  }, [n, e, t, o]); // Get the current state
  let [l, i] = aI(a); // If we changed keys, then return the state for the new key.
  // This is important in case the old key would cause the component to suspend.
  // We don't have to set the new state here since the subscribing effect above
  // will do that.
  return l.key !== e.key ? a().loadable : l.loadable;
}
function aH(e) {
  let t = aT(),
    [, n] = aI([]),
    r = ab(),
    a = aD(() => {
      var n;
      let r = t.current,
        a = r.getState(),
        o =
          a_().early && null !== (n = a.nextTree) && void 0 !== n
            ? n
            : a.currentTree;
      return aL(r, e, o);
    }, [t, e]),
    o = a(),
    l = aO(o); // eslint-disable-next-line fb-www/react-no-unused-state-hook
  return (
    az(() => {
      l.current = o;
    }),
    az(() => {
      let o = t.current,
        i = o.getState(),
        u = aM(
          o,
          e,
          (e) => {
            var t;
            if (!tO('recoil_suppress_rerender_in_callback')) return n([]);
            let r = a();
            (null !== (t = l.current) && void 0 !== t && t.is(r)) || n(r),
              (l.current = r);
          },
          r
        );
      /**
       * Since we're subscribing in an effect we need to update to the latest
       * value of the atom since it may have changed since we rendered. We can
       * go ahead and do that now, unless we're in the middle of a batch --
       * in which case we should do it at the end of the batch, due to the
       * following edge case: Suppose an atom is updated in another useEffect
       * of this same component. Then the following sequence of events occur:
       * 1. Atom is updated and subs fired (but we may not be subscribed
       *    yet depending on order of effects, so we miss this) Updated value
       *    is now in nextTree, but not currentTree.
       * 2. This effect happens. We subscribe and update.
       * 3. From the update we re-render and read currentTree, with old value.
       * 4. Batcher's effect sets currentTree to nextTree.
       * In this sequence we miss the update. To avoid that, add the update
       * to queuedComponentCallback if a batch is in progress.
       */ if (i.nextTree)
        o.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
          // $FlowFixMe[incompatible-type]
          (l.current = null), n([]);
        });
      else {
        var s;
        if (!tO('recoil_suppress_rerender_in_callback')) return n([]);
        let e = a();
        (null !== (s = l.current) && void 0 !== s && s.is(e)) || n(e),
          (l.current = e);
      }
      return u.release;
    }, [r, a, e, t]),
    o
  );
}
/**
  Like useRecoilValue(), but either returns the value if available or
  just undefined if not available for any reason, such as pending or error.
*/ function aq(e) {
  return (
    tO('recoil_memory_managament_2020') && ay(e),
    {
      TRANSITION_SUPPORT: aW, // Recoil will attemp to detect if `useSyncExternalStore()` is supported with
      // `reactMode()` before calling it.  However, sometimes the host React
      // environment supports it but uses additional React renderers (such as with
      // `react-three-fiber`) which do not.  While this is technically a user issue
      // by using a renderer with React 18+ that doesn't fully support React 18 we
      // don't want to break users if it can be avoided. As the current renderer can
      // change at runtime, we need to dynamically check and fallback if necessary.
      SYNC_EXTERNAL_STORE: ak() ? aF : aW,
      MUTABLE_SOURCE: a$,
      LEGACY: aH,
    }[a_().mode](e)
  );
}
/**
  Returns the value represented by the RecoilValue.
  If the value is pending, it will throw a Promise to suspend the component,
  if the value is an error it will throw it for the nearest React error boundary.
  This will also subscribe the component for any updates in the value.
  */ function aK(e) {
  let t = aT(),
    n = aq(e);
  return aB(n, e, t);
}
/**
  Returns a function that allows the value of a RecoilState to be updated, but does
  not subscribe the component to changes to that RecoilState.
*/ function aQ(e) {
  let t = aT();
  return aD(
    (n) => {
      aA(t.current, e, n);
    },
    [t, e]
  );
}
/**
 * Experimental variants of hooks with support for useTransition()
 */ function aG(e) {
  return tO('recoil_memory_managament_2020') && ay(e), aW(e);
}
function aY(e) {
  let t = aT(),
    n = aG(e);
  return aB(n, e, t);
}
var aZ = /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *
   * @format
   * @oncall recoil
   *//**
   * Returns a map containing all of the keys + values from the original map where
   * the given callback returned true.
   */ function (e, t) {
    let n = new Map();
    for (let [r, a] of e) t(a, r) && n.set(r, a);
    return n;
  },
  aX = /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *
   * @format
   * @oncall recoil
   *//**
   * Returns a set containing all of the values from the original set where
   * the given callback returned true.
   */ function (e, t) {
    let n = new Set();
    for (let r of e) t(r) && n.add(r);
    return n;
  },
  aJ = /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *
   * @format
   * @oncall recoil
   */ function (...e) {
    let t = new Map();
    for (let n = 0; n < e.length; n++) {
      let r;
      let a = e[n].keys();
      for (; !(r = a.next()).done; ) t.set(r.value, e[n].get(r.value));
    }
    return t;
  };
const { batchUpdates: a0 } = ra,
  { DEFAULT_VALUE: a1, getNode: a2, nodes: a4 } = t5,
  { useStoreRef: a3 } = al,
  { AbstractRecoilValue: a5, setRecoilValueLoadable: a6 } = nX,
  { SUSPENSE_TIMEOUT_MS: a8 } = n9,
  { cloneSnapshot: a9 } = rM,
  {
    useCallback: a7,
    useEffect: oe,
    useRef: ot,
    useState: on,
  } = /*@__PURE__*/ r(P),
  { isSSR: or } = ru;
function oa(e) {
  let t = a3();
  oe(() => {
    let n = t.current.subscribeToTransactions(e);
    return n.release;
  }, [e, t]);
}
function oo(e) {
  let t = e.atomValues.toMap(),
    n = nn(
      aZ(t, (e, t) => {
        let n = a2(t),
          r = n.persistence_UNSTABLE;
        return null != r && 'none' !== r.type && 'hasValue' === e.state;
      }),
      (e) => e.contents
    ); // all have persistence on or they wouldn't be there in the first place.
  return aJ(e.nonvalidatedAtoms.toMap(), n);
}
function ol(e, t) {
  var n;
  let r = e.getState(),
    a = null !== (n = r.nextTree) && void 0 !== n ? n : r.currentTree,
    o = t.getStore_INTERNAL().getState().currentTree;
  a0(() => {
    let n = new Set();
    for (let e of [a.atomValues.keys(), o.atomValues.keys()])
      for (let t of e) {
        var r, l;
        (null === (r = a.atomValues.get(t)) || void 0 === r
          ? void 0
          : r.contents) !==
          (null === (l = o.atomValues.get(t)) || void 0 === l
            ? void 0
            : l.contents) &&
          a2(t).shouldRestoreFromSnapshots &&
          n.add(t);
      }
    n.forEach((t) => {
      a6(e, new a5(t), o.atomValues.has(t) ? tk(o.atomValues.get(t)) : a1);
    }),
      e.replaceState((e) => ({ ...e, stateID: t.getID() }));
  });
}
var oi = {
  useRecoilSnapshot: function () {
    let e = a3(),
      [t, n] = on(() => a9(e.current)),
      r = ac(t),
      a = ot(),
      o = ot(); // Release after a threshold in case component is suspended.
    if (
      (oa(a7((e) => n(a9(e)), [])),
      oe(() => {
        let e = t.retain(); // Release the retain from the rendering call
        if (a.current && !or) {
          var n;
          window.clearTimeout(a.current),
            (a.current = null),
            null === (n = o.current) || void 0 === n || n.call(o),
            (o.current = null);
        }
        return () => {
          // Defer the release.  If "Fast Refresh"" is used then the component may
          // re-render with the same state.  The previous cleanup will then run and
          // then the new effect will run. We don't want the snapshot to be released
          // by that cleanup before the new effect has a chance to retain it again.
          // Use timeout of 10 to workaround Firefox issue: https://github.com/facebookexperimental/Recoil/issues/1936
          window.setTimeout(e, 10);
        };
      }, [t]),
      r !== t && !or)
    ) {
      // Release the previous snapshot
      if (a.current) {
        var l;
        window.clearTimeout(a.current),
          (a.current = null),
          null === (l = o.current) || void 0 === l || l.call(o),
          (o.current = null);
      }
      (o.current = t.retain()),
        (a.current = window.setTimeout(() => {
          var e;
          (a.current = null),
            null === (e = o.current) || void 0 === e || e.call(o),
            (o.current = null);
        }, a8));
    }
    return t;
  },
  gotoSnapshot: ol,
  useGotoRecoilSnapshot: function () {
    let e = a3();
    return a7((t) => ol(e.current, t), [e]);
  },
  useRecoilTransactionObserver: function (e) {
    oa(
      a7(
        (t) => {
          let n = a9(t, 'latest'),
            r = a9(t, 'previous');
          e({ snapshot: n, previousSnapshot: r });
        },
        [e]
      )
    );
  }, // Return a snapshot of the current state and subscribe to all state changes
  useTransactionObservation_DEPRECATED: /**
  Calls the given callback after any atoms have been modified and the consequent
  component re-renders have been committed. This is intended for persisting
  the values of the atoms to storage. The stored values can then be restored
  using the useSetUnvalidatedAtomValues hook.

  The callback receives the following info:

  atomValues: The current value of every atom that is both persistable (persistence
              type not set to 'none') and whose value is available (not in an
              error or loading state).

  previousAtomValues: The value of every persistable and available atom before
               the transaction began.

  atomInfo: A map containing the persistence settings for each atom. Every key
            that exists in atomValues will also exist in atomInfo.

  modifiedAtoms: The set of atoms that were written to during the transaction.

  transactionMetadata: Arbitrary information that was added via the
          useSetUnvalidatedAtomValues hook. Useful for ignoring the useSetUnvalidatedAtomValues
          transaction, to avoid loops.
*/ function (e) {
    oa(
      a7(
        (t) => {
          let n = t.getState().previousTree,
            r = t.getState().currentTree;
          n ||
            (tI(
              'Transaction subscribers notified without a previous tree being present -- this is a bug in Recoil'
            ),
            (n = t.getState().currentTree));
          let a = oo(r),
            o = oo(n),
            l = nn(a4, (e) => {
              var t, n, r, a;
              return {
                persistence_UNSTABLE: {
                  type:
                    null !==
                      (t =
                        null === (n = e.persistence_UNSTABLE) || void 0 === n
                          ? void 0
                          : n.type) && void 0 !== t
                      ? t
                      : 'none',
                  backButton:
                    null !==
                      (r =
                        null === (a = e.persistence_UNSTABLE) || void 0 === a
                          ? void 0
                          : a.backButton) &&
                    void 0 !== r &&
                    r,
                },
              };
            }),
            i = aX(r.dirtyAtoms, (e) => a.has(e) || o.has(e));
          e({
            atomValues: a,
            previousAtomValues: o,
            atomInfo: l,
            modifiedAtoms: i,
            transactionMetadata: { ...r.transactionMetadata },
          });
        },
        [e]
      )
    );
  },
  useTransactionSubscription_DEPRECATED: oa,
};
const { peekNodeInfo: ou } = nN,
  { useStoreRef: os } = al,
  { reactMode: oc } = t$,
  { RecoilRoot: od, useStoreRef: of } = al,
  { useMemo: op } = /*@__PURE__*/ r(P),
  { loadableWithValue: oh } = tz,
  { initializeNode: om } = nN,
  { DEFAULT_VALUE: ov, getNode: og } = t5,
  {
    copyTreeState: oy,
    getRecoilValueAsLoadable: ob,
    invalidateDownstreams: ow,
    writeLoadableToTreeState: oS,
  } = nX;
function ok(e) {
  return 'atom' === og(e.key).nodeType;
}
class o_ {
  constructor(e, t) {
    t_(this, '_store', void 0),
      t_(this, '_treeState', void 0),
      t_(this, '_changes', void 0),
      t_(this, 'get', (e) => {
        if (this._changes.has(e.key)) return this._changes.get(e.key);
        if (!ok(e))
          throw tw('Reading selectors within atomicUpdate is not supported');
        let t = ob(this._store, e, this._treeState);
        if ('hasValue' === t.state) return t.contents;
        if ('hasError' === t.state) throw t.contents;
        throw tw(
          `Expected Recoil atom ${e.key} to have a value, but it is in a loading state.`
        );
      }),
      t_(this, 'set', (e, t) => {
        if (!ok(e))
          throw tw('Setting selectors within atomicUpdate is not supported');
        if ('function' == typeof t) {
          let n = this.get(e);
          this._changes.set(e.key, t(n)); // flowlint-line unclear-type:off
        } // Initialize atom and run effects if not initialized yet
        else om(this._store, e.key, 'set'), this._changes.set(e.key, t);
      }),
      t_(this, 'reset', (e) => {
        this.set(e, ov);
      }),
      (this._store = e),
      (this._treeState = t),
      (this._changes = new Map());
  } // eslint-disable-next-line fb-www/extra-arrow-initializer
  newTreeState_INTERNAL() {
    if (0 === this._changes.size) return this._treeState;
    let e = oy(this._treeState);
    for (let [t, n] of this._changes) oS(e, t, oh(n));
    return ow(this._store, e), e;
  }
}
var ox = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    atomicUpdater: function (e) {
      return (t) => {
        e.replaceState((n) => {
          let r = new o_(e, n);
          return t(r), r.newTreeState_INTERNAL();
        });
      };
    },
  }),
  oE = /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *
   * @format
   * @oncall recoil
   */ function (e, t) {
    if (!e) throw Error(t);
  };
const { atomicUpdater: oR } = ox,
  { batchUpdates: oT } = ra,
  { DEFAULT_VALUE: oC } = t5,
  { useStoreRef: oN } = al,
  { refreshRecoilValue: oL, setRecoilValue: oA } = nX,
  { cloneSnapshot: oP } = rM,
  { gotoSnapshot: oM } = oi,
  { useCallback: oD } = /*@__PURE__*/ r(P);
class oz {}
const oU = new oz();
function oO(e, t, n, r) {
  let a,
    o = oU;
  if (
    (oT(() => {
      let l =
        'useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.';
      if ('function' != typeof t) throw tw(l); // Clone the snapshot lazily to avoid overhead if the callback does not use it.
      // Note that this means the snapshot may represent later state from when
      // the callback was called if it first accesses the snapshot asynchronously.
      let i = ny(
          {
            ...(null != r ? r : {}), // flowlint-line unclear-type:off
            // $FlowFixMe[missing-local-annot]
            set: (t, n) => oA(e, t, n), // $FlowFixMe[missing-local-annot]
            reset: (t) => oA(e, t, oC), // $FlowFixMe[missing-local-annot]
            refresh: (t) => oL(e, t),
            gotoSnapshot: (t) => oM(e, t),
            transact_UNSTABLE: (t) => oR(e)(t),
          },
          {
            snapshot: () => {
              let t = oP(e);
              return (a = t.retain()), t;
            },
          }
        ),
        u = t(i);
      if ('function' != typeof u) throw tw(l);
      o = u(...n);
    }),
    o instanceof oz && oE(!1),
    tS(o))
  )
    o = o.finally(() => {
      var e;
      null === (e = a) || void 0 === e || e();
    });
  else {
    var l;
    null === (l = a) || void 0 === l || l();
  }
  return o;
}
var oI = {
  recoilCallback: oO,
  useRecoilCallback: function (e, t) {
    let n = oN();
    return oD(
      (...t) => oO(n.current, e, t),
      null != t ? [...t, n] : void 0 // eslint-disable-line fb-www/react-hooks-deps
    );
  },
};
const { useStoreRef: oV } = al,
  { refreshRecoilValue: oj } = nX,
  { useCallback: oB } = /*@__PURE__*/ r(P),
  { atomicUpdater: oF } = ox,
  { useStoreRef: o$ } = al,
  { useMemo: oW } = /*@__PURE__*/ r(P);
var oH = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  WrappedValue: {
    WrappedValue: /**
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     *
     * @format
     * @oncall recoil
     */ class {
      constructor(e) {
        t_(this, 'value', void 0), (this.value = e);
      }
    },
  }.WrappedValue,
});
const { isFastRefreshEnabled: oq } = t$;
class oK extends Error {}
var oQ = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    TreeCache: {
      TreeCache: class {
        // $FlowIssue[unclear-type]
        constructor(e) {
          var t, n, r;
          t_(this, '_name', void 0),
            t_(this, '_numLeafs', void 0),
            t_(this, '_root', void 0),
            t_(this, '_onHit', void 0),
            t_(this, '_onSet', void 0),
            t_(this, '_mapNodeValue', void 0),
            (this._name = null == e ? void 0 : e.name),
            (this._numLeafs = 0),
            (this._root = null),
            (this._onHit =
              null !== (t = null == e ? void 0 : e.onHit) && void 0 !== t
                ? t
                : () => {}),
            (this._onSet =
              null !== (n = null == e ? void 0 : e.onSet) && void 0 !== n
                ? n
                : () => {}),
            (this._mapNodeValue =
              null !== (r = null == e ? void 0 : e.mapNodeValue) && void 0 !== r
                ? r
                : (e) => e);
        }
        size() {
          return this._numLeafs;
        }
        root() {
          return this._root;
        }
        get(e, t) {
          var n;
          return null === (n = this.getLeafNode(e, t)) || void 0 === n
            ? void 0
            : n.value;
        }
        getLeafNode(e, t) {
          if (null == this._root) return; // Iterate down the tree based on the current node values until we hit a leaf
          // $FlowIssue[unclear-type]
          let n = this._root;
          for (; n; ) {
            if ((null == t || t.onNodeVisit(n), 'leaf' === n.type))
              return this._onHit(n), n;
            let r = this._mapNodeValue(e(n.nodeKey));
            n = n.branches.get(r);
          }
        }
        set(e, t, n) {
          let r = () => {
            var r, a, o, l, i, u, s;
            let c, d;
            for (let [t, r] of e) {
              // If the previous root was a leaf, while we not have a get(), it means
              // the selector has inconsistent values or implementation changed.
              let e = this._root;
              if ((null == e ? void 0 : e.type) === 'leaf')
                throw this.invalidCacheError(); // node now refers to the next node down in the tree
              let a = c; // $FlowFixMe[prop-missing]
              if (
                'branch' !== // $FlowFixMe[incompatible-type]
                  (c =
                    null !==
                      (i = // $FlowFixMe[incompatible-type]
                        c =
                          a ? a.branches.get(d) : e) && void 0 !== i
                      ? i
                      : {
                          type: 'branch',
                          nodeKey: t,
                          parent: a,
                          branches: new Map(),
                          branchKey: d,
                        }).type ||
                c.nodeKey !== t
              )
                throw this.invalidCacheError(); // Add the branch node to the tree
              null == a || a.branches.set(d, c),
                null == n ||
                  null === (u = n.onNodeVisit) ||
                  void 0 === u ||
                  u.call(n, c),
                (d = this._mapNodeValue(r)),
                (this._root =
                  null !== (s = this._root) && void 0 !== s ? s : c);
            } // Second, setup the leaf node:
            // If there is an existing leaf for this route confirm it is consistent
            let f = c
              ? null === (r = c) || void 0 === r
                ? void 0
                : r.branches.get(d)
              : this._root;
            if (null != f && ('leaf' !== f.type || f.branchKey !== d))
              throw this.invalidCacheError(); // Create a new or replacement leaf.
            let p = { type: 'leaf', value: t, parent: c, branchKey: d }; // Install the leaf and call handlers
            null === (a = c) || void 0 === a || a.branches.set(d, p),
              (this._root = null !== (o = this._root) && void 0 !== o ? o : p),
              this._numLeafs++,
              this._onSet(p),
              null == n ||
                null === (l = n.onNodeVisit) ||
                void 0 === l ||
                l.call(n, p);
          };
          try {
            r();
          } catch (e) {
            // If the cache was stale or observed inconsistent values, such as with
            // Fast Refresh, then clear it and rebuild with the new values.
            if (e instanceof oK) this.clear(), r();
            else throw e;
          }
        }
        delete(e) {
          let t = this.root();
          if (!t) return !1;
          if (e === t) return (this._root = null), (this._numLeafs = 0), !0; // Iterate up from the leaf deleteing it from it's parent's branches.
          let n = e.parent,
            r = e.branchKey;
          for (; n; ) {
            var a;
            if ((n.branches.delete(r), n === t))
              return (
                0 === n.branches.size
                  ? ((this._root = null), (this._numLeafs = 0))
                  : this._numLeafs--,
                !0
              ); // Stop iterating if there are other branches since we don't need to
            // remove any more nodes.
            if (n.branches.size > 0) break; // Iterate up to our parent
            (r = null === (a = n) || void 0 === a ? void 0 : a.branchKey),
              (n = n.parent);
          } // Confirm that the leaf we are deleting is actually attached to our tree
          for (; n !== t; n = n.parent) if (null == n) return !1;
          return this._numLeafs--, !0;
        }
        clear() {
          (this._numLeafs = 0), (this._root = null);
        }
        invalidCacheError() {
          let e = oq()
            ? 'Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache.'
            : 'Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.';
          throw (
            (tI(e + (null != this._name ? ` - ${this._name}` : '')), new oK())
          );
        }
      },
    }.TreeCache,
  }),
  oG = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    LRUCache: {
      LRUCache: class {
        constructor(e) {
          var t;
          t_(this, '_maxSize', void 0),
            t_(this, '_size', void 0),
            t_(this, '_head', void 0),
            t_(this, '_tail', void 0),
            t_(this, '_map', void 0),
            t_(this, '_keyMapper', void 0),
            (this._maxSize = e.maxSize),
            (this._size = 0),
            (this._head = null),
            (this._tail = null),
            (this._map = new Map()),
            (this._keyMapper =
              null !== (t = e.mapKey) && void 0 !== t ? t : (e) => e);
        }
        head() {
          return this._head;
        }
        tail() {
          return this._tail;
        }
        size() {
          return this._size;
        }
        maxSize() {
          return this._maxSize;
        }
        has(e) {
          return this._map.has(this._keyMapper(e));
        }
        get(e) {
          let t = this._keyMapper(e),
            n = this._map.get(t);
          if (n) return this.set(e, n.value), n.value;
        }
        set(e, t) {
          let n = this._keyMapper(e),
            r = this._map.get(n);
          r && this.delete(e);
          let a = this.head(),
            o = { key: e, right: a, left: null, value: t };
          a ? (a.left = o) : (this._tail = o),
            this._map.set(n, o),
            (this._head = o),
            this._size++,
            this._maybeDeleteLRU();
        }
        _maybeDeleteLRU() {
          this.size() > this.maxSize() && this.deleteLru();
        }
        deleteLru() {
          let e = this.tail();
          e && this.delete(e.key);
        }
        delete(e) {
          let t = this._keyMapper(e);
          if (!this._size || !this._map.has(t)) return;
          let n = tk(this._map.get(t)),
            r = n.right,
            a = n.left;
          r && (r.left = n.left),
            a && (a.right = n.right),
            n === this.head() && (this._head = r),
            n === this.tail() && (this._tail = a),
            this._map.delete(t),
            this._size--;
        }
        clear() {
          (this._size = 0),
            (this._head = null),
            (this._tail = null),
            (this._map = new Map());
        }
      },
    }.LRUCache,
  });
const { LRUCache: oY } = oG,
  { TreeCache: oZ } = oQ;
var oX = function ({ name: e, maxSize: t, mapNodeValue: n = (e) => e }) {
  let r = new oY({ maxSize: t }),
    a = new oZ({
      name: e,
      mapNodeValue: n,
      onHit: (e) => {
        r.set(e, !0);
      },
      onSet: (e) => {
        let n = r.tail();
        r.set(e, !0), n && a.size() > t && a.delete(n.key);
      },
    });
  return a;
};
function oJ(e, t, n) {
  // A optimization to avoid the more expensive JSON.stringify() for simple strings
  // This may lose protection for u2028 and u2029, though.
  if ('string' == typeof e && !e.includes('"') && !e.includes('\\'))
    return `"${e}"`; // Handle primitive types
  switch (typeof e) {
    case 'undefined':
      return ''; // JSON.stringify(undefined) returns undefined, but we always want to return a string
    case 'boolean':
      return e ? 'true' : 'false';
    case 'number':
    case 'symbol': // case 'bigint': // BigInt is not supported in www
      return String(e);
    case 'string': // Add surrounding quotes and escape internal quotes
      return JSON.stringify(e);
    case 'function':
      if ((null == t ? void 0 : t.allowFunctions) !== !0)
        throw tw('Attempt to serialize function in a Recoil cache key');
      return `__FUNCTION(${e.name})__`;
  }
  if (null === e) return 'null'; // Fallback case for unknown types
  if ('object' != typeof e) {
    var r;
    return null !== (r = JSON.stringify(e)) && void 0 !== r ? r : '';
  } // Deal with all promises as equivalent for now.
  if (tS(e)) return '__PROMISE__'; // Arrays handle recursive stringification
  if (Array.isArray(e)) return `[${e.map((e, n) => oJ(e, t, n.toString()))}]`; // If an object defines a toJSON() method, then use that to override the
  // serialization.  This matches the behavior of JSON.stringify().
  // Pass the key for compatibility.
  // Immutable.js collections define this method to allow us to serialize them.
  if ('function' == typeof e.toJSON) return oJ(e.toJSON(n), t, n); // For built-in Maps, sort the keys in a stable order instead of the
  // default insertion order.  Support non-string keys.
  if (e instanceof Map) {
    let r = {};
    for (let [n, a] of e) r['string' == typeof n ? n : oJ(n, t)] = a;
    return oJ(r, t, n);
  } // For built-in Sets, sort the keys in a stable order instead of the
  return (
    // default insertion order.
    e instanceof Set
      ? oJ(
          Array.from(e).sort((e, n) => oJ(e, t).localeCompare(oJ(n, t))),
          t,
          n
        )
      : void 0 !== Symbol &&
        null != e[Symbol.iterator] &&
        'function' == typeof e[Symbol.iterator]
      ? oJ(Array.from(e), t, n)
      : `{${Object.keys(e)
          .filter((t) => void 0 !== e[t])
          .sort() // stringify the key to add quotes and escape any nested slashes or quotes.
          .map((n) => `${oJ(n, t)}:${oJ(e[n], t, n)}`)
          .join(',')}}`
  );
} // Utility similar to JSON.stringify() except:
var o0 = // * Serialize built-in Sets as an Array
  // * Serialize built-in Maps as an Object.  Supports non-string keys.
  // * Serialize other iterables as arrays
  // * Sort the keys of Objects and Maps to have a stable order based on string conversion.
  //    This overrides their default insertion order.
  // * Still uses toJSON() of any object to override serialization
  // * Support Symbols (though don't guarantee uniqueness)
  // * We could support BigInt, but Flow doesn't seem to like it.
  // See Recoil_stableStringify-test.js for examples
  function (e, t = { allowFunctions: !1 }) {
    return oJ(e, t);
  };
const { TreeCache: o1 } = oQ,
  o2 = { equality: 'reference', eviction: 'keep-all', maxSize: 1 / 0 };
var o4 = function (
  {
    equality: e = o2.equality,
    eviction: t = o2.eviction,
    maxSize: n = o2.maxSize,
  } = o2,
  r
) {
  let a = (function (e) {
    switch (e) {
      case 'reference':
        return (e) => e;
      case 'value':
        return (e) => o0(e);
    }
    throw tw(`Unrecognized equality policy ${e}`);
  })(e);
  return (function (e, t, n, r) {
    switch (e) {
      case 'keep-all':
        return new o1({ name: r, mapNodeValue: n });
      case 'lru':
        return oX({ name: r, maxSize: tk(t), mapNodeValue: n });
      case 'most-recent':
        return oX({ name: r, maxSize: 1, mapNodeValue: n });
    }
    throw tw(`Unrecognized eviction policy ${e}`);
  })(t, n, a, r);
};
const { isReactNative: o3, isWindow: o5 } = ru,
  {
    isLoadable: o6,
    loadableWithError: o8,
    loadableWithPromise: o9,
    loadableWithValue: o7,
  } = tz,
  { WrappedValue: le } = oH,
  { getNodeLoadable: lt, peekNodeLoadable: ln, setNodeValue: lr } = nN,
  { saveDepsToStore: la } = na,
  {
    DEFAULT_VALUE: lo,
    getConfigDeletionHandler: ll,
    getNode: li,
    registerNode: lu,
  } = t5,
  { isRecoilValue: ls } = tQ,
  { markRecoilValueModified: lc } = nX,
  { retainedByOptionWithDefault: ld } = n9,
  { recoilCallback: lf } = oI,
  { startPerfBlock: lp } = {
    startPerfBlock: /**
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     * This is a stub for some integration into FB internal stuff
     *
     *
     * @format
     * @oncall recoil
     */ function (e) {
      return () => null;
    },
  };
class lh {}
const lm = new lh(),
  lv = [],
  lg = new Map(),
  ly = ((e = 0), () => e++);
/* eslint-disable no-redeclare */ function lb(e) {
  let t = null,
    { key: n, get: r, cachePolicy_UNSTABLE: a } = e,
    o = null != e.set ? e.set : void 0,
    l = new Set(),
    i = o4(null != a ? a : { equality: 'reference', eviction: 'keep-all' }, n),
    u = ld(e.retainedBy_UNSTABLE),
    s = new Map(),
    c = 0;
  function d() {
    return !tO('recoil_memory_managament_2020') || c > 0;
  }
  function f(e) {
    return (
      e.getState().knownSelectors.add(n),
      c++,
      () => {
        c--;
      }
    );
  }
  function p() {
    return void 0 !== ll(n) && !d();
  }
  function h(e, t) {
    x(e, t) && _(e), m(t, !0);
  }
  function m(e, n) {
    let r = lg.get(e);
    if (null != r) {
      for (let e of r) lc(e, tk(t));
      n && lg.delete(e);
    }
  }
  function v(e, t) {
    let n = lg.get(t);
    null == n && lg.set(t, (n = new Set())), n.add(e);
  }
  /**
   * This function attaches a then() and a catch() to a promise that was
   * thrown from a selector's get(). If a selector's get() throws a promise,
   * we have two possibilities:
   *
   * 1. The promise will resolve, meaning one of our selector's dependencies is
   *    now available and we should "retry" our get() by running it again. This
   *    is the case handled by the attached then() handler.
   *
   * 2. The promise will throw because something went wrong with the dependency
   *    promise (in other words a real error occurred). This case is handled by
   *    the attached catch() handler. If the dependency promise throws, it is
   *    _always_ a real error and not another dependency promise (any dependency
   *    promises would have been handled upstream).
   *
   * The then() branch will eventually resolve to the final result of the
   * selector (or an error if a real error occurs), and the catch() will always
   * resolve to an error because the dependency promise is a promise that was
   * wrapped upstream, meaning it will only resolve to its real value or to a
   * real error.
   *
   * The execution will run to completion even if it is stale, and its value
   * will be cached. But stale executions will not update global state or update
   * executionInfo as that is the responsibility of the 'latest' execution.
   *
   * Note this function should not be passed a promise that was returned from
   * get(). The intention is that this function is only passed promises that
   * were thrown due to a pending dependency. Promises returned by get() should
   * be passed to wrapResultPromise() instead.
   */ function g(e, t, n, r, a, o) {
    return t
      .then((r) => {
        if (!d())
          throw (
            // The selector was released since the request began; ignore the response.
            (_(e), lm)
          ); // Check if we are handling a pending Recoil dependency or if the user
        null != o.loadingDepKey && o.loadingDepPromise === t
          ? /**
             * Note for async atoms, this means we are changing the atom's value
             * in the store for the given version. This should be alright because
             * the version of state is now stale and a new version will have
             * already been triggered by the atom being resolved (see this logic
             * in Recoil_atom.js)
             */ n.atomValues.set(o.loadingDepKey, o7(r))
          : /**
             * If resolvedDepKey is not defined, the promise was a user-thrown
             * promise. User-thrown promises are an advanced feature and they
             * should be avoided in almost all cases. Using `loadable.map()` inside
             * of selectors for loading loadables and then throwing that mapped
             * loadable's promise is an example of a user-thrown promise.
             *
             * When we hit a user-thrown promise, we have to bail out of an optimization
             * where we bypass calculating selector cache keys for selectors that
             * have been previously seen for a given state (these selectors are saved in
             * state.atomValues) to avoid stale state as we have no way of knowing
             * what state changes happened (if any) in result to the promise resolving.
             *
             * Ideally we would only bail out selectors that are in the chain of
             * dependencies for this selector, but there's currently no way to get
             * a full list of a selector's downstream nodes because the state that
             * is executing may be a discarded tree (so store.getGraph(state.version)
             * will be empty), and the full dep tree may not be in the selector
             * caches in the case where the selector's cache was cleared. To solve
             * for this we would have to keep track of all running selector
             * executions and their downstream deps. Because this only covers edge
             * cases, that complexity might not be justifyable.
             */ e.getState().knownSelectors.forEach((e) => {
              n.atomValues.delete(e);
            });
        /**
         * Optimization: Now that the dependency has resolved, let's try hitting
         * the cache in case the dep resolved to a value we have previously seen.
         *
         * TODO:
         * Note this optimization is not perfect because it only prevents re-executions
         * _after_ the point where an async dependency is found. Any code leading
         * up to the async dependency may have run unnecessarily. The ideal case
         * would be to wait for the async dependency to resolve first, check the
         * cache, and prevent _any_ execution of the selector if the resulting
         * value of the dependency leads to a path that is found in the cache.
         * The ideal case is more difficult to implement as it would require that
         * we capture and wait for the the async dependency right after checking
         * the cache. The current approach takes advantage of the fact that running
         * the selector already has a code path that lets us exit early when
         * an async dep resolves.
         */ let l = w(e, n);
        if (l && 'loading' !== l.state) {
          if (((x(e, a) || null == k(e)) && h(e, a), 'hasValue' === l.state))
            return l.contents;
          throw l.contents;
        }
        /**
         * If this execution is stale, let's check to see if there is some in
         * progress execution with a matching state. If we find a match, then
         * we can take the value from that in-progress execution. Note this may
         * sound like an edge case, but may be very common in cases where a
         * loading dependency resolves from loading to having a value (thus
         * possibly triggering a re-render), and React re-renders before the
         * chained .then() functions run, thus starting a new execution as the
         * dep has changed value. Without this check we will run the selector
         * twice (once in the new execution and once again in this .then(), so
         * this check is necessary to keep unnecessary re-executions to a
         * minimum).
         *
         * Also note this code does not check across all executions that may be
         * running. It only optimizes for the _latest_ execution per store as
         * we currently do not maintain a list of all currently running executions.
         * This means in some cases we may run selectors more than strictly
         * necessary when there are multiple executions running for the same
         * selector. This may be a valid tradeoff as checking for dep changes
         * across all in-progress executions may take longer than just
         * re-running the selector. This will be app-dependent, and maybe in the
         * future we can make the behavior configurable. An ideal fix may be
         * to extend the tree cache to support caching loading states.
         */ if (!x(e, a)) {
          let t = S(e, n);
          if (null != t)
            /**
             * Returning promise here without wrapping as the wrapper logic was
             * already done upstream when this promise was generated.
             */ return t.loadingLoadable.contents;
        } // Retry the selector evaluation now that the dependency has resolved
        let [i, u] = b(e, n, a);
        if (
          ('loading' !== i.state && (E(n, i, u), h(e, a)),
          'hasError' === i.state)
        )
          throw i.contents;
        return i.contents;
      })
      .catch((t) => {
        // The selector was released since the request began; ignore the response.
        if (t instanceof lh) throw lm;
        if (!d()) throw (_(e), lm);
        let o = o8(t);
        throw (E(n, o, r), h(e, a), t);
      });
  }
  function y(e, t, r, a) {
    var o, i, u, s, c, d, f;
    for (let p of ((x(e, a) ||
      t.version ===
        (null === (o = e.getState()) || void 0 === o
          ? void 0
          : null === (i = o.currentTree) || void 0 === i
          ? void 0
          : i.version) ||
      t.version ===
        (null === (u = e.getState()) || void 0 === u
          ? void 0
          : null === (s = u.nextTree) || void 0 === s
          ? void 0
          : s.version)) &&
      la(
        n,
        r,
        e,
        null !==
          (c =
            null === (d = e.getState()) || void 0 === d
              ? void 0
              : null === (f = d.nextTree) || void 0 === f
              ? void 0
              : f.version) && void 0 !== c
          ? c
          : e.getState().currentTree.version
      ),
    r))
      l.add(p);
  }
  function b(e, a, o) {
    let l, i;
    let u = lp(n),
      s = !0,
      c = !0,
      f = () => {
        u(), (c = !1);
      },
      p = !1,
      v = { loadingDepKey: null, loadingDepPromise: null },
      b = new Map(); // TODO T63965866: use execution ID here
    function w({ key: t }) {
      let n = lt(e, a, t);
      switch (
        (b.set(t, n),
        s ||
          (y(e, a, new Set(b.keys()), o),
          /**
           * Notify stores to pull the selector again if a new async dep was discovered.
           * 1) Async selector adds a new dep but doesn't resolve yet.
           *    Note that deps for an async selector are based on the state when the
           *    evaluation started, in order to provide a consistent picture of state.
           * 2) But, new value of dep based on the current state might cause the selector
           *    to resolve or resolve differently.
           * 3) Therefore, this notification will pull the selector based on the current
           *    state for the components
           */ (function (e, t) {
            if (x(e, t)) {
              let n = tk(k(e));
              n.stateVersions.clear(), m(t, !1);
            }
          })(e, o)),
        n.state)
      ) {
        case 'hasValue':
          return n.contents;
        case 'hasError':
          throw n.contents;
        case 'loading':
          throw (
            ((v.loadingDepKey = t),
            (v.loadingDepPromise = n.contents),
            n.contents)
          );
      }
      throw tw('Invalid Loadable state');
    }
    try {
      ((l = r({
        get: w,
        getCallback:
          (n) =>
          (...r) => {
            if (c)
              throw tw(
                'Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription.'
              );
            return (
              null != t || oE(!1),
              lf(
                e,
                n,
                r,
                { node: t } // flowlint-line unclear-type:off
              )
            );
          },
      })),
      (l = ls(l) ? w(l) : l),
      o6(l) && ('hasError' === l.state && (p = !0), (l = l.contents)),
      tS(l))
        ? (l = l
            .then((t) => {
              if (!d())
                throw (
                  // The selector was released since the request began; ignore the response.
                  (_(e), lm)
                );
              let n = o7(t);
              return E(a, n, b), h(e, o), t;
            })
            .catch((t) => {
              if (!d())
                throw (
                  // The selector was released since the request began; ignore the response.
                  (_(e), lm)
                );
              if (tS(t)) return g(e, t, a, b, o, v);
              let n = o8(t);
              throw (E(a, n, b), h(e, o), t);
            })
            .finally(f))
        : f(),
        (l = l instanceof le ? l.value : l);
    } catch (t) {
      tS((l = t)) ? (l = g(e, l, a, b, o, v).finally(f)) : ((p = !0), f());
    }
    return (
      (i = p ? o8(l) : tS(l) ? o9(l) : o7(l)),
      (s = !1),
      (function (e, t, n) {
        // We only need to bother updating the deps for the latest execution because
        // that's all getInProgressExecutionInfo() will be looking for.
        if (x(e, t)) {
          let t = k(e);
          null != t && (t.depValuesDiscoveredSoFarDuringAsyncWork = n);
        }
      })(e, o, b),
      y(e, a, new Set(b.keys()), o),
      [i, b]
    );
  }
  function w(e, t) {
    // First, look up in the state cache
    // If it's here, then the deps in the store should already be valid.
    let r = t.atomValues.get(n);
    if (null != r) return r; // Second, look up in the selector cache and update the deps in the store
    let a = new Set();
    try {
      r = i.get((n) => ('string' != typeof n && oE(!1), lt(e, t, n).contents), {
        onNodeVisit: (e) => {
          'branch' === e.type && e.nodeKey !== n && a.add(e.nodeKey);
        },
      });
    } catch (e) {
      throw tw(`Problem with cache lookup for selector "${n}": ${e.message}`);
    }
    if (r) {
      var o; // Cache the results in the state to allow for cheaper lookup than
      // iterating the tree cache of dependencies.
      t.atomValues.set(n, r),
        /**
         * Ensure store contains correct dependencies if we hit the cache so that
         * the store deps and cache are in sync for a given state. This is important
         * because store deps are normally updated when new executions are created,
         * but cache hits don't trigger new executions but they still _may_ signify
         * a change in deps in the store if the store deps for this state are empty
         * or stale.
         */ y(
          e,
          t,
          a,
          null === (o = k(e)) || void 0 === o ? void 0 : o.executionID
        );
    }
    return r;
  }
  /**
   * Searches execution info across all stores to see if there is an in-progress
   * execution whose dependency values match the values of the requesting store.
   */ function S(e, t) {
    // Sort the pending executions so that our current store is checked first.
    let n = ro([
      s.has(e) ? [tk(s.get(e))] : [],
      tY(
        ng(s, ([t]) => t !== e),
        ([, e]) => e
      ),
    ]);
    for (let r of n)
      if (
        r.stateVersions.get(t.version) || // If the deps for the execution match our current state, then it's valid
        !(function (n) {
          for (let [r, a] of n) if (!lt(e, t, r).is(a)) return !0;
          return !1;
        })(r.depValuesDiscoveredSoFarDuringAsyncWork)
      )
        return r.stateVersions.set(t.version, !0), r;
      else r.stateVersions.set(t.version, !1);
  }
  function k(e) {
    return s.get(e);
  }
  function _(e) {
    s.delete(e);
  }
  function x(e, t) {
    var n;
    return t === (null === (n = k(e)) || void 0 === n ? void 0 : n.executionID);
  }
  function E(e, t, r) {
    e.atomValues.set(n, t);
    try {
      i.set(
        Array.from(r.entries()).map(([e, t]) => [e, t.contents]),
        t
      );
    } catch (e) {
      throw tw(`Problem with setting cache for selector "${n}": ${e.message}`);
    }
  }
  function R(e, t) {
    let r = t.atomValues.get(n);
    return null != r
      ? r
      : i.get((n) => {
          var r;
          return (
            'string' != typeof n && oE(!1),
            null === (r = ln(e, t, n)) || void 0 === r ? void 0 : r.contents
          );
        });
  }
  function T(e, t) {
    return (function (e) {
      if (lv.includes(n)) {
        let e = `Recoil selector has circular dependencies: ${lv
          .slice(lv.indexOf(n))
          .join(' → ')}`;
        return o8(tw(e));
      }
      lv.push(n);
      try {
        return e();
      } finally {
        lv.pop();
      }
    })(() =>
      /**
       * Given a tree state, this function returns a Loadable of the current state.
       *
       * The selector's get() function will only be re-evaluated if _both_ of the
       * following statements are true:
       *
       * 1. The current dep values from the given state produced a cache key that
       *    was not found in the cache.
       * 2. There is no currently running async execution OR there is an
       *    async execution that is running, but after comparing the dep values in
       *    the given state with the dep values that the execution has discovered so
       *    far we find that at least one dep value has changed, in which case we
       *    start a new execution (the previously running execution will continue to
       *    run to completion, but only the new execution will be deemed the
       *    'latest' execution, meaning it will be the only execution that will
       *    update global state when it is finished. Any non-latest executions will
       *    run to completion and update the selector cache but not global state).
       */ (function (e, t) {
        var n; // First, see if our current state is cached
        let r = w(e, t);
        if (null != r) return _(e), r; // Second, check if there is already an ongoing execution based on the current state
        let a = S(e, t);
        if (null != a)
          // FIXME: check after the fact to see if we made the right choice by waiting
          return (
            (null === (n = a.loadingLoadable) || void 0 === n
              ? void 0
              : n.state) === 'loading' && v(e, a.executionID),
            a.loadingLoadable
          ); // Third, start a new evaluation of the selector
        let o = ly(),
          [l, i] = b(e, t, o);
        return (
          'loading' === l.state
            ? (s.set(e, {
                depValuesDiscoveredSoFarDuringAsyncWork: i,
                executionID: o,
                loadingLoadable: l,
                stateVersions: new Map([[t.version, !0]]),
              }),
              v(e, o))
            : (_(e), E(t, l, i)),
          l
        );
      })(e, t)
    );
  }
  function C(e) {
    e.atomValues.delete(n);
  }
  function N(e, n) {
    for (let a of (null != t || oE(!1), l)) {
      var r;
      let t = li(a);
      null === (r = t.clearCache) || void 0 === r || r.call(t, e, n);
    }
    l.clear(), C(n), i.clear(), lc(e, t);
  }
  return (t =
    null != o
      ? lu({
          key: n,
          nodeType: 'selector',
          peek: R,
          get: T,
          set: (e, t, r) => {
            let a = !1,
              l = new Map();
            function i({ key: r }) {
              if (a)
                throw tw(
                  'Recoil: Async selector sets are not currently supported.'
                );
              let o = lt(e, t, r);
              if ('hasValue' === o.state) return o.contents;
              if ('loading' === o.state) {
                let e = `Getting value of asynchronous atom or selector "${r}" in a pending state while setting selector "${n}" is not yet supported.`;
                throw (tI(e), tw(e));
              }
              throw o.contents;
            }
            function u(
              n,
              r // $FlowFixMe[missing-local-annot]
            ) {
              if (a) {
                let e =
                  'Recoil: Async selector sets are not currently supported.';
                throw (tI(e), tw(e));
              }
              let o = 'function' == typeof r ? r(i(n)) : r,
                u = lr(e, t, n.key, o);
              u.forEach((e, t) => l.set(t, e));
            }
            let s = o(
              {
                set: u,
                get: i,
                reset: function (e) {
                  u(e, lo);
                },
              },
              r
            ); // set should be a void method, but if the user makes it `async`, then it
            // will return a Promise, which we don't currently support.
            if (void 0 !== s)
              throw tS(s)
                ? tw('Recoil: Async selector sets are not currently supported.')
                : tw('Recoil: selector set should be a void function.');
            return (a = !0), l;
          },
          init: f,
          invalidate: C,
          clearCache: N,
          shouldDeleteConfigOnRelease: p,
          dangerouslyAllowMutability: e.dangerouslyAllowMutability,
          shouldRestoreFromSnapshots: !1,
          retainedBy: u,
        })
      : lu({
          key: n,
          nodeType: 'selector',
          peek: R,
          get: T,
          init: f,
          invalidate: C,
          clearCache: N,
          shouldDeleteConfigOnRelease: p,
          dangerouslyAllowMutability: e.dangerouslyAllowMutability,
          shouldRestoreFromSnapshots: !1,
          retainedBy: u,
        }));
} /* eslint-enable no-redeclare */ // $FlowIssue[incompatible-use]
// $FlowFixMe[missing-local-annot]
lb.value = (e) => new le(e); // @fb-only: import type {ScopeRules} from 'Recoil_ScopedAtom';
// @fb-only: const {scopedAtom} = require('Recoil_ScopedAtom');
const {
    isLoadable: lw,
    loadableWithError: lS,
    loadableWithPromise: lk,
    loadableWithValue: l_,
  } = tz,
  { WrappedValue: lx } = oH,
  { peekNodeInfo: lE } = nN,
  {
    DEFAULT_VALUE: lR,
    DefaultValue: lT,
    getConfigDeletionHandler: lC,
    registerNode: lN,
    setConfigDeletionHandler: lL,
  } = t5,
  { isRecoilValue: lA } = tQ,
  {
    getRecoilValueAsLoadable: lP,
    markRecoilValueModified: lM,
    setRecoilValue: lD,
    setRecoilValueLoadable: lz,
  } = nX,
  { retainedByOptionWithDefault: lU } = n9,
  lO = (e) => (e instanceof lx ? e.value : e);
function lI(e) {
  let { ...t } = e,
    n = 'default' in e ? e.default : new Promise(() => {});
  return lA(n) // Continue to use atomWithFallback for promise defaults for scoped atoms
    ? (function (e) {
        let t = lI({
            ...e,
            default: lR,
            persistence_UNSTABLE:
              void 0 === e.persistence_UNSTABLE
                ? void 0
                : {
                    ...e.persistence_UNSTABLE,
                    validator: (t) =>
                      t instanceof lT
                        ? t
                        : tk(e.persistence_UNSTABLE).validator(t, lR),
                  }, // TODO Hack for now.
            effects: e.effects, // flowlint-line unclear-type: off
            effects_UNSTABLE: e.effects_UNSTABLE, // flowlint-line unclear-type: off
          }),
          n = lb({
            key: `${e.key}__withFallback`,
            get: ({ get: n }) => {
              let r = n(t);
              return r instanceof lT ? e.default : r;
            }, // $FlowFixMe[incompatible-call]
            set: ({ set: e }, n) => e(t, n), // This selector does not need to cache as it is a wrapper selector
            // and the selector within the wrapper selector will have a cache
            // option by default
            cachePolicy_UNSTABLE: { eviction: 'most-recent' },
            dangerouslyAllowMutability: e.dangerouslyAllowMutability,
          }); // $FlowFixMe[incompatible-call]
        return lL(n.key, lC(e.key)), n;
      })(
        // $FlowFixMe[missing-local-annot]
        {
          ...t,
          default: n, // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
        }
      )
    : (function (e) {
        var t;
        let n;
        let { key: r, persistence_UNSTABLE: a } = e,
          o = lU(e.retainedBy_UNSTABLE),
          l = 0;
        function i(e) {
          return lk(
            e
              .then((e) => ((u = l_(e)), e))
              .catch((e) => {
                throw ((u = lS(e)), e);
              })
          );
        }
        let u = tS(e.default)
          ? i(e.default)
          : lw(e.default)
          ? 'loading' === e.default.state
            ? i(e.default.contents)
            : e.default
          : l_(lO(e.default));
        u.contents; // Rely on stable reference equality of the store to use it as a key per <RecoilRoot>
        let s = new Map();
        function c(e, t) {
          var a, o;
          return null !==
            (a = null !== (o = t.atomValues.get(r)) && void 0 !== o ? o : n) &&
            void 0 !== a
            ? a
            : u;
        }
        let d = lN({
          key: r,
          nodeType: 'atom',
          peek: c,
          get: function (e, t) {
            if (t.atomValues.has(r)) return tk(t.atomValues.get(r));
            if (!t.nonvalidatedAtoms.has(r)) return u;
            {
              // Atom value is stored but needs validation before use.
              // We might have already validated it and have a cached validated value:
              if (null != n) return n;
              if (null == a)
                return (
                  tG(
                    `Tried to restore a persisted value for atom ${r} but it has no persistence settings.`
                  ),
                  u
                );
              let e = t.nonvalidatedAtoms.get(r),
                o = a.validator(e, lR),
                l = o instanceof lT ? u : l_(o);
              return (n = l);
            }
          },
          set: function (e, t, a) {
            // Bail out if we're being set to the existing value, or if we're being
            // reset but have no stored value (validated or unvalidated) to reset from:
            if (t.atomValues.has(r)) {
              let e = tk(t.atomValues.get(r));
              if ('hasValue' === e.state && a === e.contents) return new Map();
            } else if (!t.nonvalidatedAtoms.has(r) && a instanceof lT)
              return new Map();
            return (n = void 0), new Map().set(r, l_(a));
          },
          init: function (t, n, a) {
            var o, i, f;
            l++,
              t.getState().knownAtoms.add(r),
              'loading' === u.state &&
                u.contents.finally(() => {
                  var e;
                  let n =
                    null !== (e = t.getState().nextTree) && void 0 !== e
                      ? e
                      : t.getState().currentTree;
                  n.atomValues.has(r) || lM(t, d);
                }); // Run Atom Effects
            ///////////////////
            let p =
              null !== (o = e.effects) && void 0 !== o ? o : e.effects_UNSTABLE;
            if (null != p) {
              // This state is scoped by Store, since this is in the initAtom() closure
              let e = lR,
                o = !0,
                l = !1,
                g = null;
              function h(a) {
                // Normally we can just get the current value of another atom.
                // But for our own value we need to check if there is a pending
                // initialized value or get the fallback default value.
                if (o && a.key === r) {
                  // Cast T to S
                  let r = e; // flowlint-line unclear-type:off
                  return r instanceof lT
                    ? c(t, n) // flowlint-line unclear-type:off
                    : tS(r)
                    ? lk(
                        r.then((e) =>
                          e instanceof lT
                            ? u.toPromise() // flowlint-line unclear-type:off
                            : e
                        )
                      )
                    : l_(r);
                }
                return lP(t, a);
              }
              function m(e) {
                return h(e).toPromise();
              }
              function v(n) {
                var a;
                let l = lE(
                  t,
                  null !== (a = t.getState().nextTree) && void 0 !== a
                    ? a
                    : t.getState().currentTree,
                  n.key
                );
                return !o || n.key !== r || e instanceof lT
                  ? l
                  : { ...l, isSet: !0, loadable: h(n) };
              }
              let y = (n) => (r) => {
                  if (o) {
                    let t = h(d),
                      a = 'hasValue' === t.state ? t.contents : lR;
                    tS(
                      (e =
                        'function' == typeof r
                          ? r(a) // flowlint-line unclear-type:off
                          : r)
                    ) &&
                      (e = e.then(
                        (
                          e // Avoid calling onSet() when setSelf() initializes with a Promise
                        ) => ((g = { effect: n, value: e }), e)
                      ));
                  } else {
                    if (tS(r))
                      throw tw(
                        'Setting atoms to async values is not implemented.'
                      );
                    'function' != typeof r && (g = { effect: n, value: lO(r) }),
                      lD(
                        t,
                        d,
                        'function' == typeof r
                          ? (e) => {
                              let t = lO(
                                r(e) // flowlint-line unclear-type:off
                              ); // $FlowFixMe[incompatible-type]
                              return (g = { effect: n, value: t }), t;
                            }
                          : lO(r)
                      );
                  }
                },
                b = (e) => () => y(e)(lR),
                w = (e) => (n) => {
                  var a;
                  let { release: o } = t.subscribeToTransactions((t) => {
                    var a, o, l, i, s; // eslint-disable-next-line prefer-const
                    let { currentTree: c, previousTree: d } = t.getState();
                    d ||
                      (tI(
                        'Transaction subscribers notified without a next tree being present -- this is a bug in Recoil'
                      ),
                      (d = c));
                    let f =
                      null !== (a = c.atomValues.get(r)) && void 0 !== a
                        ? a
                        : u;
                    if ('hasValue' === f.state) {
                      let t = f.contents,
                        a =
                          null !== (o = d.atomValues.get(r)) && void 0 !== o
                            ? o
                            : u,
                        p = 'hasValue' === a.state ? a.contents : lR; // Ignore atom value changes that were set via setSelf() in the same effect.
                      // We will still properly call the handler if there was a subsequent
                      // set from something other than an atom effect which was batched
                      // with the `setSelf()` call.  However, we may incorrectly ignore
                      // the handler if the subsequent batched call happens to set the
                      // atom to the exact same value as the `setSelf()`.   But, in that
                      // case, it was kind of a noop, so the semantics are debatable..
                      (null === (l = g) || void 0 === l ? void 0 : l.effect) !==
                        e ||
                      (null === (i = g) || void 0 === i ? void 0 : i.value) !==
                        t
                        ? n(t, p, !c.atomValues.has(r))
                        : (null === (s = g) || void 0 === s
                            ? void 0
                            : s.effect) === e && (g = null);
                    }
                  }, r);
                  s.set(t, [
                    ...(null !== (a = s.get(t)) && void 0 !== a ? a : []),
                    o,
                  ]);
                };
              for (let n of p)
                try {
                  let e = n({
                    node: d,
                    storeID: t.storeID,
                    parentStoreID_UNSTABLE: t.parentStoreID,
                    trigger: a,
                    setSelf: y(n),
                    resetSelf: b(n),
                    onSet: w(n),
                    getPromise: m,
                    getLoadable: h,
                    getInfo_UNSTABLE: v,
                  });
                  null != e &&
                    s.set(t, [
                      ...(null !== (i = s.get(t)) && void 0 !== i ? i : []),
                      e,
                    ]);
                } catch (t) {
                  (e = t), (l = !0);
                } // since we are the ones initializing on first use.
              if (((o = !1), !(e instanceof lT))) {
                let a = l
                  ? lS(e)
                  : tS(e)
                  ? lk(
                      (function (e, t) {
                        let n = t
                          .then((t) => {
                            var a, o;
                            let l =
                              null !== (a = e.getState().nextTree) &&
                              void 0 !== a
                                ? a
                                : e.getState().currentTree;
                            return (
                              (null === (o = l.atomValues.get(r)) ||
                              void 0 === o
                                ? void 0
                                : o.contents) === n && lD(e, d, t),
                              t
                            );
                          })
                          .catch((t) => {
                            var a, o;
                            let l =
                              null !== (a = e.getState().nextTree) &&
                              void 0 !== a
                                ? a
                                : e.getState().currentTree;
                            throw (
                              ((null === (o = l.atomValues.get(r)) ||
                              void 0 === o
                                ? void 0
                                : o.contents) === n && lz(e, d, lS(t)),
                              t)
                            );
                          });
                        return n;
                      })(t, e)
                    )
                  : l_(lO(e));
                a.contents,
                  n.atomValues.set(r, a),
                  null === // This could happen if the atom was first initialized in an action that
                    // also updated some other atom's state.
                    (f = t.getState().nextTree) ||
                    void 0 === f ||
                    f.atomValues.set(r, a);
              }
            }
            return () => {
              var e;
              l--,
                null === (e = s.get(t)) ||
                  void 0 === e ||
                  e.forEach((e) => e()),
                s.delete(t);
            };
          },
          invalidate: function () {
            n = void 0;
          },
          shouldDeleteConfigOnRelease: function () {
            return void 0 !== lC(r) && l <= 0;
          },
          dangerouslyAllowMutability: e.dangerouslyAllowMutability,
          persistence_UNSTABLE: e.persistence_UNSTABLE
            ? {
                type: e.persistence_UNSTABLE.type,
                backButton: e.persistence_UNSTABLE.backButton,
              }
            : void 0,
          shouldRestoreFromSnapshots: !0,
          retainedBy: o,
        });
        return d;
      })(
        // prettier-ignore
        {...t,default:n}
      );
}
lI.value = (e) => new lx(e);
var lV = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  MapCache: {
    MapCache: /**
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     *
     * @format
     * @oncall recoil
     */ class {
      constructor(e) {
        var t;
        t_(this, '_map', void 0),
          t_(this, '_keyMapper', void 0),
          (this._map = new Map()),
          (this._keyMapper =
            null !== (t = null == e ? void 0 : e.mapKey) && void 0 !== t
              ? t
              : (e) => e);
      }
      size() {
        return this._map.size;
      }
      has(e) {
        return this._map.has(this._keyMapper(e));
      }
      get(e) {
        return this._map.get(this._keyMapper(e));
      }
      set(e, t) {
        this._map.set(this._keyMapper(e), t);
      }
      delete(e) {
        this._map.delete(this._keyMapper(e));
      }
      clear() {
        this._map.clear();
      }
    },
  }.MapCache,
});
const { LRUCache: lj } = oG,
  { MapCache: lB } = lV,
  lF = { equality: 'reference', eviction: 'none', maxSize: 1 / 0 };
var l$ = function ({
  equality: e = lF.equality,
  eviction: t = lF.eviction,
  maxSize: n = lF.maxSize,
} = lF) {
  let r = (function (e) {
      switch (e) {
        case 'reference':
          return (e) => e;
        case 'value':
          return (e) => o0(e);
      }
      throw tw(`Unrecognized equality policy ${e}`);
    })(e),
    a = (function (e, t, n) {
      switch (e) {
        case 'keep-all':
          return new lB({ mapKey: n });
        case 'lru':
          return new lj({ mapKey: n, maxSize: tk(t) });
        case 'most-recent':
          return new lj({ mapKey: n, maxSize: 1 });
      }
      throw tw(`Unrecognized eviction policy ${e}`);
    })(t, n, r);
  return a;
}; // @fb-only: import type {ScopeRules} from 'Recoil_ScopedAtom';
const { setConfigDeletionHandler: lW } = t5,
  { setConfigDeletionHandler: lH } = t5; // Keep in mind the parameter needs to be serializable as a cahche key
// using Recoil_stableStringify
// Add a unique index to each selector in case the cache implementation allows
// duplicate keys based on equivalent stringified parameters
let lq = 0;
/* eslint-enable no-redeclare */ var lK = // Return a function that returns members of a family of selectors of the same type
  /* eslint-disable no-redeclare */ // E.g.,
  //
  // const s = selectorFamily(...);
  // s({a: 1}) => a selector
  // s({a: 2}) => a different selector
  //
  // By default, the selectors are distinguished by distinct values of the
  // parameter based on value equality, not reference equality.  This allows using
  // object literals or other equivalent objects at callsites to not create
  // duplicate cache entries.  This behavior may be overridden with the
  // cacheImplementationForParams option.
  function (e) {
    var t, n;
    let r = l$({
      equality:
        null !==
          (t =
            null === (n = e.cachePolicyForParams_UNSTABLE) || void 0 === n
              ? void 0
              : n.equality) && void 0 !== t
          ? t
          : 'value',
      eviction: 'keep-all',
    });
    return (t) => {
      var n;
      let a, o;
      try {
        a = r.get(t);
      } catch (t) {
        throw tw(
          `Problem with cache lookup for selector ${e.key}: ${t.message}`
        );
      }
      if (null != a) return a;
      let l = `${e.key}__selectorFamily/${
          null !==
            (n = o0(t, {
              // It is possible to use functions in parameters if the user uses
              // a cache with reference equality thanks to the incrementing index.
              allowFunctions: !0,
            })) && void 0 !== n
            ? n
            : 'void'
        }/${lq++}`,
        i = (n) => e.get(t)(n),
        u = e.cachePolicy_UNSTABLE,
        s =
          'function' == typeof e.retainedBy_UNSTABLE
            ? e.retainedBy_UNSTABLE(t)
            : e.retainedBy_UNSTABLE; // Append index in case values serialize to the same key string
      if (null != e.set) {
        let n = e.set;
        o = lb({
          key: l,
          get: i,
          set: (e, r) => n(t)(e, r),
          cachePolicy_UNSTABLE: u,
          dangerouslyAllowMutability: e.dangerouslyAllowMutability,
          retainedBy_UNSTABLE: s,
        });
      } else
        o = lb({
          key: l,
          get: i,
          cachePolicy_UNSTABLE: u,
          dangerouslyAllowMutability: e.dangerouslyAllowMutability,
          retainedBy_UNSTABLE: s,
        });
      return (
        r.set(t, o),
        lH(o.key, () => {
          r.delete(t);
        }),
        o
      );
    };
  }; // flowlint-next-line unclear-type:off
const lQ = lK({
    key: '__constant',
    get: (e) => () => e,
    cachePolicyForParams_UNSTABLE: { equality: 'reference' },
  }),
  lG = lK({
    key: '__error',
    get: (e) => () => {
      throw tw(e);
    }, // TODO Why?
    cachePolicyForParams_UNSTABLE: { equality: 'reference' },
  }),
  {
    loadableWithError: lY,
    loadableWithPromise: lZ,
    loadableWithValue: lX,
  } = tz; // Function that returns a selector which always produces the
/////////////////
//  TRUTH TABLE
/////////////////
// Dependencies        waitForNone         waitForAny        waitForAll       waitForAllSettled
//  [loading, loading]  [Promise, Promise]  Promise           Promise         Promise
//  [value, loading]    [value, Promise]    [value, Promise]  Promise         Promise
//  [value, value]      [value, value]      [value, value]    [value, value]  [value, value]
//
//  [error, loading]    [Error, Promise]    [Error, Promise]  Error           Promise
//  [error, error]      [Error, Error]      [Error, Error]    Error           [error, error]
//  [value, error]      [value, Error]      [value, Error]    Error           [value, error]
// Issue parallel requests for all dependencies and return the current
// status if they have results, have some error, or are still pending.
function lJ(e, t) {
  let n = Array(t.length).fill(void 0),
    r = Array(t.length).fill(void 0);
  for (let [a, o] of t.entries())
    try {
      n[a] = e(o);
    } catch (e) {
      // exceptions can either be Promises of pending results or real errors
      r[a] = e;
    }
  return [n, r];
}
function l0(e) {
  return null != e && !tS(e);
}
function l1(e) {
  return Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((t) => e[t]);
}
function l2(
  e,
  /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
   * LTI update could not be added via codemod */ t
) {
  return Array.isArray(e)
    ? t
    : Object.getOwnPropertyNames(e).reduce(
        (e, n, r) => ({ ...e, [n]: t[r] }),
        {}
      );
}
function l4(e, t, n) {
  let r = n.map((e, n) => (null == e ? lX(t[n]) : tS(e) ? lZ(e) : lY(e)));
  return l2(e, r);
} // current results without waiting.
const l3 = lK({
    key: '__waitForNone',
    get:
      (e) =>
      ({ get: t }) => {
        // Issue requests for all dependencies in parallel.
        let n = l1(e),
          [r, a] = lJ(t, n);
        return l4(e, r, a);
      },
    dangerouslyAllowMutability: !0,
  }),
  l5 = lK({
    key: '__waitForAny',
    get:
      (e) =>
      ({ get: t }) => {
        // Issue requests for all dependencies in parallel.
        // Exceptions can either be Promises of pending results or real errors
        let n = l1(e),
          [r, a] = lJ(t, n);
        return a.some((e) => !tS(e))
          ? l4(e, r, a)
          : new Promise((t) => {
              for (let [n, o] of a.entries())
                tS(o) &&
                  o
                    .then((o) => {
                      (r[n] = o), (a[n] = void 0), t(l4(e, r, a));
                    })
                    .catch((o) => {
                      (a[n] = o), t(l4(e, r, a));
                    });
            });
      },
    dangerouslyAllowMutability: !0,
  }),
  l6 = lK({
    key: '__waitForAll',
    get:
      (e) =>
      ({ get: t }) => {
        // Issue requests for all dependencies in parallel.
        // Exceptions can either be Promises of pending results or real errors
        let n = l1(e),
          [r, a] = lJ(t, n);
        if (a.every((e) => null == e)) return l2(e, r); // If we have any errors, throw the first error
        let o = a.find(l0);
        if (null != o) throw o; // Otherwise, return a promise that will resolve when all results are available
        return Promise.all(a).then((t) =>
          l2(
            e,
            t.map((e, t) =>
              /**
               * it's important we use === undefined as opposed to == null, because the
               * resolved value of the async promise could be `null`, in which case we
               * don't want to use syncResults[idx], which would be undefined. If async
               * promise resolves to `undefined`, that's ok because `syncResults[idx]`
               * will also be `undefined`. That's a little hacky, but it works.
               */ void 0 === e ? r[t] : e
            )
          )
        );
      },
    dangerouslyAllowMutability: !0,
  }),
  l8 = lK({
    key: '__waitForAllSettled',
    get:
      (e) =>
      ({ get: t }) => {
        // Issue requests for all dependencies in parallel.
        // Exceptions can either be Promises of pending results or real errors
        let n = l1(e),
          [r, a] = lJ(t, n);
        return a.every((e) => !tS(e))
          ? l4(e, r, a)
          : Promise.all(
              a.map((e, t) =>
                tS(e)
                  ? e
                      .then((e) => {
                        (r[t] = e), (a[t] = void 0);
                      })
                      .catch((e) => {
                        (r[t] = void 0), (a[t] = e);
                      })
                  : null
              )
            ) // Then wrap them as loadables
              .then(() => l4(e, r, a));
      },
    dangerouslyAllowMutability: !0,
  }),
  l9 = lK({
    key: '__noWait',
    get:
      (e) =>
      ({ get: t }) => {
        try {
          return lb.value(lX(t(e)));
        } catch (e) {
          return lb.value(tS(e) ? lZ(e) : lY(e));
        }
      },
    dangerouslyAllowMutability: !0,
  }),
  { RecoilLoadable: l7 } = tz,
  { DefaultValue: ie } = t5,
  { RecoilRoot: it, useRecoilStoreID: ir } = al,
  { isRecoilValue: ia } = tQ,
  { retentionZone: io } = nm,
  { freshSnapshot: il } = rM,
  {
    useRecoilState: ii,
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: iu,
    useRecoilStateLoadable: is,
    useRecoilValue: ic,
    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: id,
    useRecoilValueLoadable: ip,
    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: ih,
    useResetRecoilState: im,
    useSetRecoilState: iv,
  } = {
    recoilComponentGetRecoilValueCount_FOR_TESTING: { current: 0 },
    useRecoilInterface: /**
     * Various things are broken with useRecoilInterface, particularly concurrent
     * mode, React strict mode, and memory management. They will not be fixed.
     * */ function () {
      let e = ab(),
        t = aT(),
        [, n] = aI([]),
        r = aO(new Set());
      r.current = new Set();
      let a = aO(new Set()),
        o = aO(new Map()),
        l = aD(
          (e) => {
            let t = o.current.get(e);
            t && (t.release(), o.current.delete(e));
          },
          [o]
        ),
        i = aD((e, t) => {
          o.current.has(t) && n([]);
        }, []);
      return (
        az(() => {
          let n = t.current;
          nt(r.current, a.current).forEach((t) => {
            if (o.current.has(t)) {
              tG(`Double subscription to RecoilValue "${t}"`);
              return;
            }
            let r = aM(n, new aN(t), (e) => i(e, t), e);
            o.current.set(t, r); /**
             * Since we're subscribing in an effect we need to update to the latest
             * value of the atom since it may have changed since we rendered. We can
             * go ahead and do that now, unless we're in the middle of a batch --
             * in which case we should do it at the end of the batch, due to the
             * following edge case: Suppose an atom is updated in another useEffect
             * of this same component. Then the following sequence of events occur:
             * 1. Atom is updated and subs fired (but we may not be subscribed
             *    yet depending on order of effects, so we miss this) Updated value
             *    is now in nextTree, but not currentTree.
             * 2. This effect happens. We subscribe and update.
             * 3. From the update we re-render and read currentTree, with old value.
             * 4. Batcher's effect sets currentTree to nextTree.
             * In this sequence we miss the update. To avoid that, add the update
             * to queuedComponentCallback if a batch is in progress.
             */ // FIXME delete queuedComponentCallbacks_DEPRECATED when deleting useInterface.
            let a = n.getState();
            a.nextTree
              ? n.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
                  i(n.getState(), t);
                })
              : i(n.getState(), t);
          }),
            nt(a.current, r.current).forEach((e) => {
              l(e);
            }),
            (a.current = r.current);
        }),
        az(() => {
          let n = o.current; // Restore subscriptions that were cleared due to StrictMode running this effect twice
          return (
            nt(r.current, new Set(n.keys())).forEach((r) => {
              let a = aM(t.current, new aN(r), (e) => i(e, r), e);
              n.set(r, a);
            }),
            () => n.forEach((e, t) => l(t))
          );
        }, [e, t, l, i]),
        aU(() => {
          // eslint-disable-next-line no-shadow
          function e(e) {
            return (n) => {
              aA(t.current, e, n);
            };
          } // eslint-disable-next-line no-shadow
          function n(e) {
            var n;
            r.current.has(e.key) || (r.current = aV(r.current, e.key)); // TODO Restore optimization to memoize lookup
            let a = t.current.getState();
            return aL(
              t.current,
              e,
              a_().early && null !== (n = a.nextTree) && void 0 !== n
                ? n
                : a.currentTree
            );
          } // eslint-disable-next-line no-shadow
          function a(e) {
            let r = n(e);
            return aB(r, e, t);
          } // eslint-disable-next-line no-shadow
          return {
            getRecoilValue: a,
            getRecoilValueLoadable: n,
            getRecoilState: function (t) {
              return [a(t), e(t)];
            }, // eslint-disable-next-line no-shadow
            getRecoilStateLoadable: function (t) {
              return [n(t), e(t)];
            },
            getSetRecoilState: e,
            getResetRecoilState: function (e) {
              return () => aA(t.current, e, aS);
            }, // eslint-disable-next-line no-shadow
          };
        }, [r, t])
      );
    },
    useRecoilState: /**
  Equivalent to useState(). Allows the value of the RecoilState to be read and written.
  Subsequent updates to the RecoilState will cause the component to re-render. If the
  RecoilState is pending, this will suspend the component and initiate the
  retrieval of the value. If evaluating the RecoilState resulted in an error, this will
  throw the error so that the nearest React error boundary can catch it.
*/ function (e) {
      return [aK(e), aQ(e)];
    },
    useRecoilStateLoadable: /**
  Like useRecoilState(), but does not cause Suspense or React error handling. Returns
  an object that indicates whether the RecoilState is available, pending, or
  unavailable due to an error.
*/ function (e) {
      return [aq(e), aQ(e)];
    },
    useRecoilValue: aK,
    useRecoilValueLoadable: aq,
    useResetRecoilState: /**
  Returns a function that will reset the value of a RecoilState to its default
*/ function (e) {
      let t = aT();
      return aD(() => {
        aA(t.current, e, aS);
      }, [t, e]);
    },
    useSetRecoilState: aQ,
    useSetUnvalidatedAtomValues: function () {
      let e = aT();
      return (t, n = {}) => {
        aw(() => {
          e.current.addTransactionMetadata(n),
            t.forEach((t, n) => aP(e.current, new aN(n), t));
        });
      };
    },
    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: aG,
    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: aY,
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: function (e) {
      return [aY(e), aQ(e)];
    },
  },
  {
    useGotoRecoilSnapshot: ig,
    useRecoilSnapshot: iy,
    useRecoilTransactionObserver: ib,
  } = oi,
  { useRecoilCallback: iw } = oI,
  {
    noWait: iS,
    waitForAll: ik,
    waitForAllSettled: i_,
    waitForAny: ix,
    waitForNone: iE,
  } = {
    waitForNone: l3,
    waitForAny: l5,
    waitForAll: l6,
    waitForAllSettled: l8,
    noWait: l9,
  }; // Selector that requests all dependencies in parallel and waits for at least
var iR = {
  // Types
  DefaultValue: ie,
  isRecoilValue: ia,
  RecoilLoadable: l7, // Global Recoil environment settiongs
  RecoilEnv: tU, // Recoil Root
  RecoilRoot: it,
  useRecoilStoreID: ir,
  useRecoilBridgeAcrossReactRoots_UNSTABLE: function () {
    // The test fails when using useMutableSource(), but only if act() is used
    // for the nested root.  So, this may only be a testing environment issue.
    'MUTABLE_SOURCE' === oc().mode &&
      console.warn(
        'Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode.'
      );
    let e = of().current;
    return op(
      () =>
        // eslint-disable-next-line no-shadow
        function ({ children: t }) {
          return /*@__PURE__*/ r(P).createElement(od, { store_INTERNAL: e }, t);
        },
      [e]
    );
  }, // Atoms/Selectors
  atom: lI,
  selector: lb, // Convenience Atoms/Selectors
  // Process scopeRules to handle any entries which are functions taking parameters
  atomFamily:
    // prettier-ignore
    // @fb-only: function mapScopeRules<P>(
    // @fb-only: scopeRules?: ParameterizedScopeRules<P>,
    // @fb-only: param: P,
    // @fb-only: ): ScopeRules | void {
    // @fb-only: return scopeRules?.map(rule =>
    // @fb-only: Array.isArray(rule)
    // @fb-only: ? rule.map(entry => (typeof entry === 'function' ? entry(param) : entry))
    // @fb-only: : rule,
    // @fb-only: );
    // @fb-only: }
    /*
A function which returns an atom based on the input parameter.

Each unique parameter returns a unique atom. E.g.,

  const f = atomFamily(...);
  f({a: 1}) => an atom
  f({a: 2}) => a different atom

This allows components to persist local, private state using atoms.  Each
instance of the component may have a different key, which it uses as the
parameter for a family of atoms; in this way, each component will have
its own atom not shared by other instances.  These state keys may be composed
into children's state keys as well.
*/ function(e){var t,n;let r=l$({equality:null!==(t=null===(n=e.cachePolicyForParams_UNSTABLE)||void 0===n?void 0:n.equality)&&void 0!==t?t:"value",eviction:"keep-all"});// Simple atomFamily implementation to cache individual atoms based
// on the parameter value equality.
return t=>{var n,a;let o=r.get(t);if(null!=o)return o;let{cachePolicyForParams_UNSTABLE:l,...i}=e,u="default"in e?e.default:new Promise(()=>{}),s=lI({...i,key:`${e.key}__${null!==(n=o0(t))&&void 0!==n?n:"void"}`,default:"function"==typeof u?// $FlowIssue[incompatible-use]
u(t):u,retainedBy_UNSTABLE:"function"==typeof e.retainedBy_UNSTABLE?e.retainedBy_UNSTABLE(t):e.retainedBy_UNSTABLE,effects:"function"==typeof e.effects?e.effects(t):"function"==typeof e.effects_UNSTABLE?e.effects_UNSTABLE(t):null!==(a=e.effects)&&void 0!==a?a:e.effects_UNSTABLE// prettier-ignore
});return r.set(t,s),lW(s.key,()=>{r.delete(t)}),s}},
  selectorFamily: lK,
  // same constant value.  It may be called multiple times with the
  constSelector:
    // same value, based on reference equality, and will provide the
    // same selector.
    function (e) {
      return lQ(e);
    },
  // with the provided message.
  errorSelector: function (e) {
    return lG(e);
  },
  readOnlySelector: /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * Wraps another recoil value and prevents writing to it.
   *
   *
   * @format
   * @oncall recoil
   */ function (e) {
    // flowlint-next-line unclear-type: off
    return e;
  }, // Concurrency Helpers for Atoms/Selectors
  noWait: iS,
  waitForNone: iE,
  waitForAny: ix,
  waitForAll: ik,
  waitForAllSettled: i_, // Hooks for Atoms/Selectors
  useRecoilValue: ic,
  useRecoilValueLoadable: ip,
  useRecoilState: ii,
  useRecoilStateLoadable: is,
  useSetRecoilState: iv,
  useResetRecoilState: im,
  useGetRecoilValueInfo_UNSTABLE: function () {
    let e = os(); // $FlowFixMe[incompatible-return]
    return ({ key: t }) => ou(e.current, e.current.getState().currentTree, t);
  },
  useRecoilRefresher_UNSTABLE: function (e) {
    let t = oV();
    return oB(() => {
      let n = t.current;
      oj(n, e);
    }, [e, t]);
  },
  useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: ih,
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: id,
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE: iu, // Hooks for complex operations
  useRecoilCallback: iw,
  useRecoilTransaction_UNSTABLE: function (e, t) {
    let n = o$();
    return oW(
      () =>
        (...t) => {
          let r = oF(n.current);
          r((n) => {
            e(n)(...t);
          });
        },
      null != t ? [...t, n] : void 0 // eslint-disable-line fb-www/react-hooks-deps
    );
  }, // Snapshots
  useGotoRecoilSnapshot: ig,
  useRecoilSnapshot: iy,
  useRecoilTransactionObserver_UNSTABLE: ib,
  snapshot_UNSTABLE: il, // Memory Management
  useRetain: ay,
  retentionZone: io,
};
iR.DefaultValue, iR.isRecoilValue, iR.RecoilLoadable, iR.RecoilEnv;
var iT = iR.RecoilRoot;
iR.useRecoilStoreID, iR.useRecoilBridgeAcrossReactRoots_UNSTABLE;
var iC = iR.atom;
iR.selector,
  iR.atomFamily,
  iR.selectorFamily,
  iR.constSelector,
  iR.errorSelector,
  iR.readOnlySelector,
  iR.noWait,
  iR.waitForNone,
  iR.waitForAny,
  iR.waitForAll,
  iR.waitForAllSettled;
var iN = iR.useRecoilValue;
iR.useRecoilValueLoadable;
var iL = iR.useRecoilState;
iR.useRecoilStateLoadable,
  iR.useSetRecoilState,
  iR.useResetRecoilState,
  iR.useGetRecoilValueInfo_UNSTABLE,
  iR.useRecoilRefresher_UNSTABLE,
  iR.useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE,
  iR.useRecoilValue_TRANSITION_SUPPORT_UNSTABLE,
  iR.useRecoilState_TRANSITION_SUPPORT_UNSTABLE,
  iR.useRecoilCallback,
  iR.useRecoilTransaction_UNSTABLE,
  iR.useGotoRecoilSnapshot,
  iR.useRecoilSnapshot,
  iR.useRecoilTransactionObserver_UNSTABLE,
  iR.snapshot_UNSTABLE,
  iR.useRetain,
  iR.retentionZone,
  L('acw62');
const iA = [
  'all',
  'starters',
  'mains',
  'pizzas',
  'drinks',
  'desserts',
  'extras',
];
var iP = ({ onSetCategory: e }) => {
  let t = () => {
    let e = document.activeElement;
    e && e?.blur();
  };
  return /*#__PURE__*/ (0, A.jsxs)('div', {
    className: 'dropdown',
    children: [
      /*#__PURE__*/ (0, A.jsx)('label', {
        tabIndex: 0,
        className: 'btn btn-ghost btn-circle',
        children: /*#__PURE__*/ (0, A.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          className: 'h-7 w-7',
          fill: 'none',
          viewBox: '0 0 24 24',
          stroke: 'currentColor',
          children: /*#__PURE__*/ (0, A.jsx)('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '2',
            d: 'M4 6h16M4 12h16M4 18h7',
          }),
        }),
      }),
      /*#__PURE__*/ (0, A.jsx)('ul', {
        tabIndex: 0,
        className:
          'dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52',
        children: iA.map((n) =>
          /*#__PURE__*/ (0, A.jsx)(
            'li',
            {
              children: /*#__PURE__*/ (0, A.jsx)('button', {
                onClick: () => {
                  e(n), t();
                },
                children: /*#__PURE__*/ (0, A.jsx)('p', {
                  className: 'text-base',
                  children: n,
                }),
              }),
            },
            n
          )
        ),
      }),
    ],
  });
};
L('acw62'), L('acw62');
var iM = {
  color: {
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    success: 'badge-success',
    danger: 'badge-danger',
    warning: 'badge-warning',
    info: 'badge-info',
    light: 'badge-light',
    dark: 'badge-dark',
    link: 'badge-link',
    accent: 'badge-accent',
  },
  size: { xs: 'badge-xs', sm: 'badge-sm', md: 'badge-md', lg: 'badge-lg' },
  variant: { outline: 'badge-outline', solid: 'badge-solid' },
};
const iD = ({
  label: e,
  size: t = 'md',
  variant: n = 'solid',
  color: r = 'primary',
}) =>
  /*#__PURE__*/ (0, A.jsx)('span', {
    className: `badge ${iM.color[r]} ${iM.variant[n]} ${iM.size[t]}`,
    children: e,
  });
L('acw62');
const iz = ({ title: e, description: t, Image: n, Actions: r }) =>
  /*#__PURE__*/ (0, A.jsxs)('div', {
    className: 'card card-compact bg-base-100 shadow-xl',
    children: [
      /*#__PURE__*/ (0, A.jsx)('figure', { children: n }),
      /*#__PURE__*/ (0, A.jsxs)('div', {
        className: 'card-body',
        children: [
          /*#__PURE__*/ (0, A.jsx)('h2', {
            className: 'card-title font-bold',
            children: e,
          }),
          /*#__PURE__*/ (0, A.jsx)('div', { children: t }),
          r,
        ],
      }),
    ],
  });
var iU = ({ name: e, image_url: t, category: n, price: r, onAdd: a }) =>
    /*#__PURE__*/ (0, A.jsx)('div', {
      className: 'cursor-pointer',
      onClick: a,
      children: /*#__PURE__*/ (0, A.jsx)(iz, {
        title: e,
        Image: /*#__PURE__*/ (0, A.jsx)('img', { src: t, alt: e }),
        description: /*#__PURE__*/ (0, A.jsxs)('div', {
          className: 'flex justify-between',
          children: [
            /*#__PURE__*/ (0, A.jsx)(iD, {
              label: n.name,
              variant: 'outline',
              color: 'accent',
              size: 'sm',
            }),
            /*#__PURE__*/ (0, A.jsxs)('div', {
              className: 'font-semibold',
              children: ['\xa3', r],
            }),
          ],
        }),
      }),
    }),
  P = L('acw62');
const iO = iC({ key: 'basketState', default: [] }),
  iI = iC({ key: 'ordersState', default: [] });
L('acw62');
var iV = {
  color: {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    success: 'btn-success',
    danger: 'btn-danger',
    warning: 'btn-warning',
    info: 'btn-info',
    light: 'btn-light',
    dark: 'btn-dark',
    link: 'btn-link',
    accent: 'btn-accent',
  },
  size: {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
    wide: 'btn-wide',
  },
  variant: {
    outline: 'btn-outline',
    ghost: 'btn-ghost',
    solid: 'btn-solid',
    circle: 'btn-circle',
    square: 'btn-square',
  },
};
const ij = ({
    title: e,
    size: t = 'md',
    color: n = 'primary',
    variant: r = 'solid',
    onClick: a,
  }) =>
    /*#__PURE__*/ (0, A.jsx)('button', {
      className: `btn ${iV.color[n]} ${iV.size[t]} ${iV.variant[r]}`,
      onClick: a,
      children: e,
    }),
  iB = (e, t) => t.find((t) => t.id === e),
  iF = ({
    item_id: e,
    img_url: t,
    name: n,
    category: r,
    description: a,
    price: o,
    onClose: l,
  }) => {
    let [i, u] = iL(iO),
      s = iB(e, i),
      [c, d] = (0, P.useState)(s?.quantity || 1);
    return /*#__PURE__*/ (0, A.jsx)('dialog', {
      id: 'ordr-modal',
      className: 'modal',
      open: !0,
      children: /*#__PURE__*/ (0, A.jsxs)('div', {
        className: 'modal-box',
        children: [
          /*#__PURE__*/ (0, A.jsx)('button', {
            className:
              'btn btn-circle btn-sm absolute right-2 top-2 focus:outline-none',
            onClick: l,
            children: '✕',
          }),
          /*#__PURE__*/ (0, A.jsx)('figure', {
            className: 'p-4',
            children: /*#__PURE__*/ (0, A.jsx)('img', {
              className: 'rounded-2xl object-cover',
              src: t,
              alt: '',
            }),
          }),
          /*#__PURE__*/ (0, A.jsxs)('div', {
            className: 'flex items-center',
            children: [
              /*#__PURE__*/ (0, A.jsx)('h2', {
                className: 'text-2xl font-bold pr-2',
                children: n,
              }),
              /*#__PURE__*/ (0, A.jsx)(iD, {
                label: r.name,
                variant: 'outline',
                color: 'accent',
                size: 'sm',
              }),
            ],
          }),
          /*#__PURE__*/ (0, A.jsx)('p', { className: 'py-4', children: a }),
          /*#__PURE__*/ (0, A.jsxs)('div', {
            className: 'flex justify-between items-center pb-4',
            children: [
              /*#__PURE__*/ (0, A.jsx)('input', {
                type: 'number',
                name: 'quantity',
                min: 0,
                value: c,
                onChange: (e) => d(+e.target.value),
                className: 'input input-bordered max-w-3 focus:outline-none',
              }),
              /*#__PURE__*/ (0, A.jsxs)('p', {
                className: 'text-lg',
                children: ['\xa3', o],
              }),
            ],
          }),
          /*#__PURE__*/ (0, A.jsx)('div', {
            className: 'card-actions justify-end',
            children: /*#__PURE__*/ (0, A.jsx)(ij, {
              title: `${s ? 'Update' : 'Add to'}  Order`,
              onClick: () => {
                let t; // if item already in order, update quantity
                if (s) {
                  var d;
                  let n = i.findIndex((t) => t.id === e);
                  0 === c
                    ? (t = [...i.slice(0, n), ...i.slice(n + 1)])
                    : ((d = { ...s, quantity: c }),
                      (t = [...i.slice(0, n), d, ...i.slice(n + 1)]));
                } else
                  t = [
                    ...i,
                    {
                      id: e,
                      quantity: c,
                      name: n,
                      price: o,
                      category: r,
                      description: a,
                    },
                  ];
                u(t), l();
              },
            }),
          }),
        ],
      }),
    });
  };
var P = L('acw62');
L('acw62');
const i$ = ({
  icon: e,
  title: t = 'title',
  navButton: n,
  onClickLogout: r,
  onClick: a,
}) =>
  /*#__PURE__*/ (0, A.jsxs)('div', {
    className: 'navbar p-0 flex-col gap-y-4 sm:flex-row mb-4',
    children: [
      /*#__PURE__*/ (0, A.jsxs)('div', {
        className: 'flex-1',
        children: [
          e,
          /*#__PURE__*/ (0, A.jsx)('h1', {
            className: 'text-3xl font-semibold pl-2',
            children: t,
          }),
        ],
      }),
      /*#__PURE__*/ (0, A.jsxs)('div', {
        className: 'flex-none gap-4',
        children: [
          /*#__PURE__*/ (0, A.jsx)(ij, {
            color: 'light',
            onClick: r,
            title: 'Log out',
            variant: 'outline',
          }),
          n &&
            /*#__PURE__*/ (0, A.jsx)(ij, {
              color: 'light',
              onClick: a,
              title: n,
            }),
        ],
      }),
    ],
  });
L('acw62');
const iW = () =>
  /*#__PURE__*/ (0, A.jsxs)('svg', {
    width: '48px',
    height: '48px',
    viewBox: '0 0 512 512',
    xmlns: 'http://www.w3.org/2000/svg',
    fill: '#e9e2e2',
    stroke: '#e9e2e2',
    strokeWidth: '6.144',
    children: [
      /*#__PURE__*/ (0, A.jsx)('g', {
        id: 'SVGRepo_bgCarrier',
        strokeWidth: '0',
      }),
      /*#__PURE__*/ (0, A.jsx)('g', {
        id: 'SVGRepo_tracerCarrier',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        stroke: '#b8adad',
        strokeWidth: '28.672000000000004',
        children: /*#__PURE__*/ (0, A.jsx)('path', {
          fill: '#4c4848',
          d: 'M255 22.31c-21.2 0-40.5 10.78-50.5 27.63l-4.4 7.42-7.6-4.08c-7.1-3.85-15.2-5.89-23.3-5.89-28.3 0-51.3 23.57-51.3 53.21 0 26.5 18.6 48.6 43.5 52.6l7.6 1.2v53.4c57.9-11.1 116-11.6 174 0v-69.7l4.8-2.6c15.7-8.3 26.1-26.1 26.1-46.15 0-28.8-20.7-51.12-45.4-51.12-6.5 0-13 1.61-18.9 4.72l-6.2 3.2-4.6-5.09C288 29.29 272 22.31 255 22.31zm1 194.79c-25.6 0-51.1 2.4-76.7 7-.9 6-1.3 12.2-1.3 18.6 0 29 9.2 55.2 23.6 73.7 14.4 18.5 33.5 29.3 54.4 29.3s40-10.8 54.4-29.3c14.4-18.5 23.6-44.7 23.6-73.7 0-6.4-.5-12.7-1.3-18.7-25.6-4.7-51.1-7-76.7-6.9zM208.7 348l-89.2 29.7-27.98 112H321.6L307.1 388l17.8-2.6 14.9 104.3h80.7l-28-112-89.2-29.7c-13.8 9.9-30 15.7-47.3 15.7-17.3 0-33.5-5.8-47.3-15.7zm69.3 52.7a9.999 9.999 0 0 1 10 10 9.999 9.999 0 0 1-10 10 9.999 9.999 0 0 1-10-10 9.999 9.999 0 0 1 10-10zm7 46a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10 10 10 0 0 1 10-10z',
        }),
      }),
      /*#__PURE__*/ (0, A.jsx)('g', {
        id: 'SVGRepo_iconCarrier',
        children: /*#__PURE__*/ (0, A.jsx)('path', {
          fill: '#4c4848',
          d: 'M255 22.31c-21.2 0-40.5 10.78-50.5 27.63l-4.4 7.42-7.6-4.08c-7.1-3.85-15.2-5.89-23.3-5.89-28.3 0-51.3 23.57-51.3 53.21 0 26.5 18.6 48.6 43.5 52.6l7.6 1.2v53.4c57.9-11.1 116-11.6 174 0v-69.7l4.8-2.6c15.7-8.3 26.1-26.1 26.1-46.15 0-28.8-20.7-51.12-45.4-51.12-6.5 0-13 1.61-18.9 4.72l-6.2 3.2-4.6-5.09C288 29.29 272 22.31 255 22.31zm1 194.79c-25.6 0-51.1 2.4-76.7 7-.9 6-1.3 12.2-1.3 18.6 0 29 9.2 55.2 23.6 73.7 14.4 18.5 33.5 29.3 54.4 29.3s40-10.8 54.4-29.3c14.4-18.5 23.6-44.7 23.6-73.7 0-6.4-.5-12.7-1.3-18.7-25.6-4.7-51.1-7-76.7-6.9zM208.7 348l-89.2 29.7-27.98 112H321.6L307.1 388l17.8-2.6 14.9 104.3h80.7l-28-112-89.2-29.7c-13.8 9.9-30 15.7-47.3 15.7-17.3 0-33.5-5.8-47.3-15.7zm69.3 52.7a9.999 9.999 0 0 1 10 10 9.999 9.999 0 0 1-10 10 9.999 9.999 0 0 1-10-10 9.999 9.999 0 0 1 10-10zm7 46a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10 10 10 0 0 1 10-10z',
        }),
      }),
    ],
  });
L('acw62'), L('acw62');
var iH = {
  background: { primary: 'bg-primary', secondary: 'bg-secondary', none: '' },
  align: {
    vertical: 'stats-vertical',
    horizontal: 'stats-horizontal',
    responsive: 'stats-vertical lg:stats-horizontal',
  },
  justify: { center: 'place-items-center', right: 'text-right' },
  titleColor: {
    primary: 'text-primary',
    secondary: 'text-secondary',
    none: '',
  },
  valueColor: {
    primary: 'text-primary',
    secondary: 'text-secondary',
    none: '',
  },
  descriptionColor: {
    primary: 'text-primary',
    secondary: 'text-secondary',
    none: '',
  },
  titleSize: { sm: 'stat-desc', md: 'stat-title', lg: 'stat-value' },
  valueSize: { sm: 'stat-desc', md: 'stat-title', lg: 'stat-value' },
  descriptionSize: { sm: 'stat-desc', md: 'stat-title', lg: 'stat-value' },
};
const iq = ({ background: e = 'none', align: t = 'horizontal', stats: n }) =>
  /*#__PURE__*/ (0, A.jsx)('div', {
    className: `stats shadow ${iH.background[e]} ${iH.align[t]}`,
    children: n.map((e, t) =>
      /*#__PURE__*/ (0, A.jsxs)(
        'div',
        {
          className: `stat ${e.justify ? iH.justify[e.justify] : ''}`,
          children: [
            e.figure && e.figure,
            /*#__PURE__*/ (0, A.jsx)('div', {
              className: `${
                e.titleColor ? iH.titleColor[e.titleColor] : iH.titleColor.none
              } ${e.titleSize ? iH.titleSize[e.titleSize] : iH.titleSize.md}`,
              children: e.title,
            }),
            /*#__PURE__*/ (0, A.jsx)('div', {
              className: `${
                e.valueColor ? iH.valueColor[e.valueColor] : iH.valueColor.none
              } ${e.valueSize ? iH.valueSize[e.valueSize] : iH.valueSize.lg}`,
              children: e.value,
            }),
            /*#__PURE__*/ (0, A.jsx)('div', {
              className: `${
                e.descriptionColor
                  ? iH.descriptionColor[e.descriptionColor]
                  : iH.descriptionColor.none
              } ${
                e.descriptionSize
                  ? iH.descriptionSize[e.descriptionSize]
                  : iH.descriptionSize.sm
              }`,
              children: e.description,
            }),
            /*#__PURE__*/ (0, A.jsx)('div', {
              className: 'stat-actions',
              children: e.actions && e.actions,
            }),
          ],
        },
        t
      )
    ),
  });
L('acw62');
const iK = ({ children: e, headers: t }) =>
  /*#__PURE__*/ (0, A.jsx)('div', {
    className: 'overflow-x-auto',
    children: /*#__PURE__*/ (0, A.jsxs)('table', {
      className: 'table table-zebra table-pin-rows table-pin-cols',
      children: [
        /*#__PURE__*/ (0, A.jsx)('thead', {
          children: /*#__PURE__*/ (0, A.jsx)('tr', {
            children: t.map((e, t) =>
              /*#__PURE__*/ (0, A.jsx)('th', { children: e }, t)
            ),
          }),
        }),
        /*#__PURE__*/ (0, A.jsx)('tbody', { children: e }),
      ],
    }),
  });
L('acw62');
const iQ = ({ rowClass: e, data: t }) =>
    /*#__PURE__*/ (0, A.jsx)('tr', {
      className: e,
      children: t.map(({ value: e }, t) =>
        /*#__PURE__*/ (0, A.jsx)('td', { children: e }, t)
      ),
    }),
  iG = ({ order_id: e, table: t, items: n, onClose: r }) => {
    let [a, o] = iL(iI),
      l = (t) => {
        let n = a.map((n) => (n._id === e ? { ...n, orderStatus: t } : n));
        o(n);
      };
    return /*#__PURE__*/ (0, A.jsx)('dialog', {
      id: 'ordr-modal',
      className: 'modal',
      open: !0,
      children: /*#__PURE__*/ (0, A.jsxs)('div', {
        className: 'modal-box',
        children: [
          /*#__PURE__*/ (0, A.jsx)('div', {
            className: 'absolute right-2 top-2',
            children: /*#__PURE__*/ (0, A.jsx)(ij, {
              color: 'light',
              title: 'x',
              size: 'sm',
              variant: 'circle',
              onClick: r,
            }),
          }),
          /*#__PURE__*/ (0, A.jsx)('div', {
            className: 'pb-4 flex gap-4 justify-center',
            children: /*#__PURE__*/ (0, A.jsx)(iq, {
              background: 'secondary',
              align: 'responsive',
              stats: [
                { title: 'Table', value: t, justify: 'center' },
                { title: 'Order', value: e },
              ],
            }),
          }),
          /*#__PURE__*/ (0, A.jsx)('div', {
            children: /*#__PURE__*/ (0, A.jsx)('div', {
              className: 'overflow-x-auto',
              children: /*#__PURE__*/ (0, A.jsx)(iK, {
                headers: ['Image', 'Item', 'Category', 'Quantity'],
                children: n.map((e) =>
                  /*#__PURE__*/ (0, A.jsx)(
                    iQ,
                    {
                      rowClass: 'select-none',
                      data: [
                        { value: '' },
                        { value: e.name },
                        { value: e.category },
                        { value: e.quantity },
                      ],
                    },
                    e.name
                  )
                ),
              }),
            }),
          }),
          /*#__PURE__*/ (0, A.jsx)('br', {}),
          /*#__PURE__*/ (0, A.jsxs)('div', {
            className: 'card-actions justify-end',
            children: [
              /*#__PURE__*/ (0, A.jsx)(ij, {
                variant: 'outline',
                size: 'sm',
                color: 'info',
                title: 'Preparing',
                onClick: () => {
                  l('preparing'), r();
                },
              }),
              /*#__PURE__*/ (0, A.jsx)(ij, {
                variant: 'outline',
                size: 'sm',
                color: 'accent',
                title: 'Ready',
                onClick: () => {
                  l('ready'), r();
                },
              }),
            ],
          }),
        ],
      }),
    });
  },
  iY = [
    {
      _id: 'df6',
      table: 3,
      items: [
        {
          name: 'Pepperoni',
          category: 'pizzas',
          quantity: 2,
          price: 14,
          subtotal: 28,
        },
        {
          name: 'Margherita',
          category: 'pizzas',
          quantity: 3,
          price: 12,
          subtotal: 36,
        },
      ],
      totalPrice: 64,
      orderStatus: 'ordered',
      createdAt: new Date().toString(),
    },
    {
      _id: 'dwetf6',
      table: 8,
      items: [
        {
          name: 'Londonetti',
          category: 'pizzas',
          quantity: 3,
          price: 8,
          subtotal: 24,
        },
        {
          name: 'PiriPiri',
          category: 'pizzas',
          quantity: 2,
          price: 15,
          subtotal: 30,
        },
      ],
      totalPrice: 54,
      orderStatus: 'ordered',
      createdAt: new Date().toString(),
    },
    {
      _id: 'dwrZZZf6',
      table: 15,
      items: [
        {
          name: 'Bulldozzer',
          category: 'heavy drinks',
          quantity: 3,
          price: 15,
          subtotal: 45,
        },
        {
          name: 'SledgeHammer',
          category: 'heavy drinks',
          quantity: 2,
          price: 15,
          subtotal: 30,
        },
        {
          name: 'Oatty',
          category: 'alternative milks',
          quantity: 2,
          price: 3,
          subtotal: 6,
        },
        {
          name: 'Spaghetti Bolognese',
          category: 'Pasta',
          quantity: 4,
          price: 12,
          subtotal: 48,
        },
        {
          name: 'Margherita Pizza',
          category: 'Pizza',
          quantity: 2,
          price: 10,
          subtotal: 20,
        },
        {
          name: 'Caesar Salad',
          category: 'Salads',
          quantity: 3,
          price: 8,
          subtotal: 24,
        },
        {
          name: 'Chicken Alfredo',
          category: 'Pasta',
          quantity: 1,
          price: 15,
          subtotal: 15,
        },
        {
          name: 'Lemonade',
          category: 'Beverages',
          quantity: 2,
          price: 4,
          subtotal: 8,
        },
        {
          name: 'Chocolate Cake',
          category: 'Desserts',
          quantity: 2,
          price: 6,
          subtotal: 12,
        },
        {
          name: 'Iced Tea',
          category: 'Beverages',
          quantity: 5,
          price: 3,
          subtotal: 15,
        },
        {
          name: 'Greek Salad',
          category: 'Salads',
          quantity: 3,
          price: 9,
          subtotal: 27,
        },
        {
          name: 'Beef Burger',
          category: 'Burgers',
          quantity: 2,
          price: 7,
          subtotal: 14,
        },
        {
          name: 'Cappuccino',
          category: 'Beverages',
          quantity: 1,
          price: 5,
          subtotal: 5,
        },
      ],
      totalPrice: 81,
      orderStatus: 'ordered',
      createdAt: new Date().toString(),
    },
    {
      _id: 'dwrZZerf6',
      table: 15,
      items: [
        {
          name: 'Bulldozzer',
          category: 'heavy drinks',
          quantity: 3,
          price: 15,
          subtotal: 45,
        },
        {
          name: 'SledgeHammer',
          category: 'heavy drinks',
          quantity: 2,
          price: 15,
          subtotal: 30,
        },
        {
          name: 'Oatty',
          category: 'alternative milks',
          quantity: 2,
          price: 3,
          subtotal: 6,
        },
      ],
      totalPrice: 81,
      orderStatus: 'ordered',
      createdAt: new Date().toString(),
    },
    {
      _id: 'dwrhjk6',
      table: 15,
      items: [
        {
          name: 'Bulldozzer',
          category: 'heavy drinks',
          quantity: 3,
          price: 15,
          subtotal: 45,
        },
        {
          name: 'SledgeHammer',
          category: 'heavy drinks',
          quantity: 2,
          price: 15,
          subtotal: 30,
        },
        {
          name: 'Oatty',
          category: 'alternative milks',
          quantity: 2,
          price: 3,
          subtotal: 6,
        },
      ],
      totalPrice: 81,
      orderStatus: 'ordered',
      createdAt: new Date().toString(),
    },
    {
      _id: 'dw45Zf6',
      table: 15,
      items: [
        {
          name: 'Bulldozzer',
          category: 'heavy drinks',
          quantity: 3,
          price: 15,
          subtotal: 45,
        },
        {
          name: 'SledgeHammer',
          category: 'heavy drinks',
          quantity: 2,
          price: 15,
          subtotal: 30,
        },
        {
          name: 'Oatty',
          category: 'alternative milks',
          quantity: 2,
          price: 3,
          subtotal: 6,
        },
      ],
      totalPrice: 81,
      orderStatus: 'ordered',
      createdAt: new Date().toString(),
    },
    {
      _id: 'dwrZZu6',
      table: 15,
      items: [
        {
          name: 'Bulldozzer',
          category: 'heavy drinks',
          quantity: 3,
          price: 15,
          subtotal: 45,
        },
        {
          name: 'SledgeHammer',
          category: 'heavy drinks',
          quantity: 2,
          price: 15,
          subtotal: 30,
        },
        {
          name: 'Oatty',
          category: 'alternative milks',
          quantity: 2,
          price: 3,
          subtotal: 6,
        },
      ],
      totalPrice: 81,
      orderStatus: 'ordered',
      createdAt: new Date().toString(),
    },
  ];
L('acw62');
const iZ = () =>
  /*#__PURE__*/ (0, A.jsx)('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    className: 'h-5 w-5',
    fill: 'none',
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    children: /*#__PURE__*/ (0, A.jsx)('path', {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2',
      d: 'M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0',
    }),
  });
L('acw62'), L('acw62');
const iX = {
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      success: 'text-success',
      danger: 'text-danger',
      warning: 'text-warning',
      info: 'text-info',
      light: 'text-light',
      dark: 'text-dark',
      link: 'text-link',
      accent: 'text-accent',
      neutral: 'text-neutral',
    },
    size: {
      xs: 'loading-xs',
      sm: 'loading-sm',
      md: 'loading-md',
      lg: 'loading-lg',
    },
  },
  iJ = ({ size: e = 'md', color: t = 'light' }) =>
    /*#__PURE__*/ (0, A.jsx)('span', {
      className: `loading loading-spinner ${iX.size[e]} ${iX.color[t]}`,
    }),
  i0 = [
    'Cooking up some good stuff...',
    'Loading...',
    'Just a sec...',
    'Hold on tight...',
    "We're almost there...",
    'Just a little bit more...',
    "We're getting there...",
    "We're almost done...",
    'Cooking up a storm...',
  ],
  i1 = () => i0[Math.floor(Math.random() * i0.length)],
  i2 =
    ((h = [
      {
        path: '/',
        element: /*#__PURE__*/ (0, A.jsx)(
          () =>
            /*#__PURE__*/ (0, A.jsx)('div', {
              className: 'h-screen w-screen flex justify-center',
              children: /*#__PURE__*/ (0, A.jsxs)('div', {
                className: 'flex flex-col items-center justify-center gap-4',
                children: [
                  /*#__PURE__*/ (0, A.jsx)('div', {
                    className: 'text-3xl font-bold text-center',
                    children: i1(),
                  }),
                  /*#__PURE__*/ (0, A.jsx)(iJ, {
                    size: 'lg',
                    color: 'primary',
                  }),
                ],
              }),
            }),
          {}
        ),
      },
      {
        path: '/menu',
        element: /*#__PURE__*/ (0, A.jsx)(() => {
          // const [category, SetCategory] = useState<(typeof categories)[number]>('all');
          let [e, t] = (0, P.useState)(),
            [n, r] = (0, P.useState)(),
            a = iN(iO),
            o = async () => {
              let e = await fetch(
                  'https://ordr-be.onrender.com/api/menu-items'
                ),
                t = await e.json();
              return t;
            };
          (0, P.useEffect)(() => {
            o().then(r).catch(console.error);
          }, []);
          let l = a.length > 0 ? a.reduce((e, t) => e + t.quantity, 0) : 0;
          return /*#__PURE__*/ (0, A.jsxs)('div', {
            children: [
              /*#__PURE__*/ (0, A.jsxs)('div', {
                className: 'navbar p-4',
                children: [
                  /*#__PURE__*/ (0, A.jsx)('div', {
                    className: 'navbar-start',
                    children: /*#__PURE__*/ (0, A.jsx)(iP, {
                      onSetCategory: () => {},
                    }),
                  }),
                  /*#__PURE__*/ (0, A.jsx)('div', {
                    className: 'navbar-center',
                    children: /*#__PURE__*/ (0, A.jsx)('h1', {
                      className: 'text-xl font-bold',
                      children: 'La mia Pizza',
                    }),
                  }),
                  /*#__PURE__*/ (0, A.jsxs)('div', {
                    className: 'navbar-end indicator',
                    children: [
                      /*#__PURE__*/ (0, A.jsx)('span', {
                        className: 'indicator-item badge badge-neutral',
                        children: a.length > 0 ? l : 0,
                      }),
                      /*#__PURE__*/ (0, A.jsx)(ti, {
                        role: 'button',
                        className: 'btn btn-accent',
                        to: 'https://profy.dev/#faq',
                        children: 'your order',
                      }),
                    ],
                  }),
                ],
              }),
              /*#__PURE__*/ (0, A.jsxs)('div', {
                className: 'grid grid-cols-2 md:grid-cols-4 gap-6 p-4',
                children: [
                  n &&
                    n.map((e) =>
                      /*#__PURE__*/ (0, A.jsx)(
                        iU,
                        {
                          name: e.name,
                          category: e.category,
                          price: e.price,
                          image_url: e.image_url,
                          item_id: e._id,
                          onAdd: () => {
                            t(e);
                          },
                        },
                        e._id
                      )
                    ),
                  e &&
                    /*#__PURE__*/ (0, A.jsx)(iF, {
                      item_id: e._id,
                      name: e.name,
                      img_url: e.image_url,
                      category: e.category,
                      description: e.description,
                      price: e.price,
                      onClose: () => t(void 0),
                    }),
                ],
              }),
            ],
          });
        }, {}),
      },
      {
        path: '/kitchen',
        element: /*#__PURE__*/ (0, A.jsx)(() => {
          let [e, t] = iL(iI),
            [n, r] = (0, P.useState)();
          (0, P.useEffect)(() => {
            t([...e, ...iY]);
          }, []);
          let a = {
              ordered: `badge ${iM.size.lg} px-8`,
              preparing: `badge ${iM.size.lg} ${iM.color.info} px-6`,
              ready: `badge ${iM.size.lg} ${iM.color.warning} px-10`,
            },
            o = [...e],
            l = o.sort((e, t) => (e.orderStatus > t.orderStatus ? 1 : -1)),
            i = l.map((e) => {
              let t = (function (e, t) {
                let n = Object.entries(
                  e.reduce(
                    (e, n) => ((e[n[t]] = (e[n[t]] || 0) + n.quantity), e),
                    {}
                  )
                );
                return n.map((e, t) =>
                  /*#__PURE__*/ (0, A.jsx)(
                    iD,
                    {
                      label: `${e[1]} x ${e[0]}`,
                      color: t % 2 > 0 ? 'primary' : 'secondary',
                    },
                    t
                  )
                );
              })(e.items, 'category');
              return /*#__PURE__*/ (0, A.jsx)(
                iQ,
                {
                  rowClass: 'select-none',
                  data: [
                    { value: '' },
                    { value: e.table },
                    { value: e._id },
                    {
                      value: /*#__PURE__*/ (0, A.jsx)('div', {
                        className: `cursor-pointer ${a[e.orderStatus]}`,
                        onClick: () => r(e),
                        children: e.orderStatus,
                      }),
                    },
                    { value: t },
                    {
                      value: /*#__PURE__*/ (0, A.jsx)('button', {
                        className: 'btn btn-ghost btn-circle',
                        onClick: () => console.log(e._id),
                        children: /*#__PURE__*/ (0, A.jsx)(iZ, {}),
                      }),
                    },
                  ],
                },
                e._id
              );
            });
          return /*#__PURE__*/ (0, A.jsxs)('div', {
            children: [
              /*#__PURE__*/ (0, A.jsx)(i$, {
                icon: /*#__PURE__*/ (0, A.jsx)(iW, {}),
                title: 'Kitchen',
                onClick: () => console.log('clicked'),
                onClickLogout: () => console.log('logged out'),
              }),
              /*#__PURE__*/ (0, A.jsx)('div', {
                className: 'overflow-x-auto',
                children: /*#__PURE__*/ (0, A.jsx)(iK, {
                  headers: ['', 'Table', 'Order', 'Status', 'Items', 'Delete'],
                  children: i,
                }),
              }),
              n &&
                /*#__PURE__*/ (0, A.jsx)(iG, {
                  order_id: n._id,
                  table: n.table,
                  items: n.items,
                  onClose: () => r(void 0),
                }),
            ],
          });
        }, {}),
      },
    ]), //#endregion
    ////////////////////////////////////////////////////////////////////////////////
    //#region createRouter
    ////////////////////////////////////////////////////////////////////////////////
    /**
     * Create a router and listen to history POP navigations
     */ (function (e) {
      let t, n, r, a;
      let o = e.window
          ? e.window
          : 'undefined' != typeof window
          ? window
          : void 0,
        l =
          void 0 !== o &&
          void 0 !== o.document &&
          void 0 !== o.document.createElement,
        i = !l;
      if (
        (U(
          e.routes.length > 0,
          'You must provide a non-empty routes array to createRouter'
        ),
        e.mapRouteProperties)
      )
        t = e.mapRouteProperties;
      else if (e.detectErrorBoundary) {
        // If they are still using the deprecated version, wrap it with the new API
        let n = e.detectErrorBoundary;
        t = (e) => ({ hasErrorBoundary: n(e) });
      } else t = ep; // Routes keyed by ID
      let u = {},
        s = $(e.routes, t, void 0, u),
        c = e.basename || '/',
        d = D({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
        f = null,
        p = new Set(),
        h = null,
        m = null,
        v = null,
        b = null != e.hydrationData,
        w = W(s, e.history.location, c),
        S = null;
      if (null == w) {
        // If we do not match a user-provided-route, fall back to the root
        // to allow the error boundary to take over
        let t = eC(404, { pathname: e.history.location.pathname }),
          { matches: n, route: r } = eT(s);
        (w = n), (S = { [r.id]: t });
      }
      let k = // functions around still then we'll need to run them in initialize()
          !w.some((e) => e.route.lazy) && // And we have to either have no loaders or have been provided hydrationData
          (!w.some((e) => e.route.loader) || null != e.hydrationData),
        _ = {
          historyAction: e.history.action,
          location: e.history.location,
          matches: w,
          initialized: k,
          navigation: es, // Don't restore on initial updateState() if we were SSR'd
          restoreScrollPosition: null == e.hydrationData && null,
          preventScrollReset: !1,
          revalidation: 'idle',
          loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
          actionData: (e.hydrationData && e.hydrationData.actionData) || null,
          errors: (e.hydrationData && e.hydrationData.errors) || S,
          fetchers: new Map(),
          blockers: new Map(),
        },
        x = g.Pop,
        E = !1,
        R = !1,
        T = !1,
        C = [],
        N = [],
        L = new Map(),
        A = 0,
        P = -1,
        M = new Map(),
        z = new Set(),
        I = new Map(),
        j = new Map(),
        B = new Map(),
        F = !1; // Update our state and notify the calling context of the change
      function H(e) {
        (_ = D({}, _, e)), p.forEach((e) => e(_));
      } // Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
      // and setting state.[historyAction/location/matches] to the new route.
      // - Location is a required param
      // - Navigation will always be set to IDLE_NAVIGATION
      // - Can pass any other state in newState
      function q(t, r) {
        var a, o;
        let l; // Deduce if we're in a loading/actionReload state:
        // - We have committed actionData in the store
        // - The current navigation was a mutation submission
        // - We're past the submitting state and into the loading state
        // - The location being loaded is not the result of a redirect
        let i =
          null != _.actionData &&
          null != _.navigation.formMethod &&
          eD(_.navigation.formMethod) &&
          'loading' === _.navigation.state &&
          (null == (a = t.state) ? void 0 : a._isRedirect) !== !0;
        l = r.actionData
          ? Object.keys(r.actionData).length > 0
            ? r.actionData
            : null
          : i
          ? _.actionData
          : null; // Always preserve any existing loaderData from re-used routes
        let u = r.loaderData
            ? eE(_.loaderData, r.loaderData, r.matches || [], r.errors)
            : _.loaderData,
          c = _.blockers;
        c.size > 0 && (c = new Map(c)).forEach((e, t) => c.set(t, ed)); // Always respect the user flag.  Otherwise don't reset on mutation
        // submission navigations unless they redirect
        let d =
          !0 === E ||
          (null != _.navigation.formMethod &&
            eD(_.navigation.formMethod) &&
            (null == (o = t.state) ? void 0 : o._isRedirect) !== !0);
        n && ((s = n), (n = void 0)),
          R ||
            x === g.Pop ||
            (x === g.Push
              ? e.history.push(t, t.state)
              : x === g.Replace && e.history.replace(t, t.state)),
          H(
            D({}, r, {
              actionData: l,
              loaderData: u,
              historyAction: x,
              location: t,
              initialized: !0,
              navigation: es,
              revalidation: 'idle',
              restoreScrollPosition: e$(t, r.matches || _.matches),
              preventScrollReset: d,
              blockers: c,
            })
          ), // Reset stateful navigation vars
          (x = g.Pop),
          (E = !1),
          (R = !1),
          (T = !1),
          (C = []),
          (N = []);
      } // Trigger a navigation event, which can either be a numerical POP or a PUSH
      // replace with an optional submission
      async function Q(t, n) {
        if ('number' == typeof t) {
          e.history.go(t);
          return;
        }
        let r = eh(
            _.location,
            _.matches,
            c,
            d.v7_prependBasename,
            t,
            null == n ? void 0 : n.fromRouteId,
            null == n ? void 0 : n.relative
          ),
          {
            path: a,
            submission: o,
            error: l,
          } = em(d.v7_normalizeFormMethod, !1, r, n),
          i = _.location,
          u = V(_.location, a, n && n.state); // When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
        // URL from window.location, so we need to encode it here so the behavior
        // remains the same as POP and non-data-router usages.  new URL() does all
        // the same encoding we'd get from a history.pushState/window.location read
        // without having to touch history
        u = D({}, u, e.history.encodeLocation(u));
        let s = n && null != n.replace ? n.replace : void 0,
          f = g.Push;
        !0 === s
          ? (f = g.Replace)
          : !1 === s ||
            (null != o &&
              eD(o.formMethod) &&
              o.formAction === _.location.pathname + _.location.search && // users don't have to double-click the back button to get to the prior
              // location.  If the user redirects to a different location from the
              // action/loader this will be ignored and the redirect will be a PUSH
              (f = g.Replace));
        let p =
            n && 'preventScrollReset' in n
              ? !0 === n.preventScrollReset
              : void 0,
          h = e_({ currentLocation: i, nextLocation: u, historyAction: f });
        if (h) {
          // Put the blocker into a blocked state
          ek(h, {
            state: 'blocked',
            location: u,
            proceed() {
              ek(h, {
                state: 'proceeding',
                proceed: void 0,
                reset: void 0,
                location: u,
              }), // Send the same navigation through
                Q(t, n);
            },
            reset() {
              let e = new Map(_.blockers);
              e.set(h, ed), H({ blockers: e });
            },
          });
          return;
        }
        return await G(f, u, {
          submission: o, // Send through the formData serialization error if we have one so we can
          // render at the right error boundary after we match routes
          pendingError: l,
          preventScrollReset: p,
          replace: n && n.replace,
        });
      } // Start a navigation to the given action/location.  Can optionally provide a
      // overrideNavigation which will override the normalLoad in the case of a redirect
      // navigation
      async function G(t, r, o) {
        var l, i, u;
        let d, f; // Abort any in-progress navigations and start a new one. Unset any ongoing
        // uninterrupted revalidations unless told otherwise, since we want this
        // new navigation to update history normally
        a && a.abort(),
          (a = null),
          (x = t),
          (R = !0 === (o && o.startUninterruptedRevalidation)),
          (l = _.location),
          (i = _.matches),
          h && v && (h[eO(l, i)] = v()),
          (E = !0 === (o && o.preventScrollReset));
        let p = n || s,
          m = o && o.overrideNavigation,
          g = W(p, r, c); // Short circuit with a 404 on the root error boundary if we match nothing
        if (!g) {
          let e = eC(404, { pathname: r.pathname }),
            { matches: t, route: n } = eT(p); // Cancel all pending deferred on 404s since we don't keep any routes
          eL(), q(r, { matches: t, loaderData: {}, errors: { [n.id]: e } });
          return;
        } // Short circuit if it's only a hash change and not a revalidation or
        // mutation submission.
        //
        // Ignore on initial page loads because since the initial load will always
        // be "same hash".  For example, on /page#hash and submit a <Form method="post">
        // which will default to a navigation to /page
        if (
          _.initialized &&
          !T &&
          (u = _.location).pathname === r.pathname &&
          u.search === r.search &&
          ('' === u.hash
            ? '' !== r.hash
            : u.hash === r.hash || '' !== r.hash) &&
          !(o && o.submission && eD(o.submission.formMethod))
        ) {
          q(r, { matches: g });
          return;
        } // Create a controller/Request for this navigation
        a = new AbortController();
        let y = eS(e.history, r, a.signal, o && o.submission);
        if (o && o.pendingError)
          // with binary FormData so assign here and skip to handleLoaders.  That
          // way we handle calling loaders above the boundary etc.  It's not really
          // different from an actionError in that sense.
          f = { [eR(g).route.id]: o.pendingError };
        else if (o && o.submission && eD(o.submission.formMethod)) {
          // Call action if we received an action submission
          let e = await Y(y, r, o.submission, g, { replace: o.replace });
          if (e.shortCircuited) return;
          (d = e.pendingActionData),
            (f = e.pendingActionError),
            (m = ej(r, o.submission)), // Create a GET request for the loaders
            (y = new Request(y.url, { signal: y.signal }));
        } // Call loaders
        let {
          shortCircuited: b,
          loaderData: w,
          errors: S,
        } = await Z(
          y,
          r,
          g,
          m,
          o && o.submission,
          o && o.fetcherSubmission,
          o && o.replace,
          d,
          f
        );
        b || // Clean up now that the action/loaders have completed.  Don't clean up if
          // we short circuited because pendingNavigationController will have already
          // been assigned to a new controller for the next navigation
          ((a = null),
          q(
            r,
            D({ matches: g }, d ? { actionData: d } : {}, {
              loaderData: w,
              errors: S,
            })
          ));
      } // Call the action matched by the leaf route for this navigation and handle
      // redirects/errors
      async function Y(e, n, r, a, o) {
        let l;
        void 0 === o && (o = {}),
          er(),
          H({
            navigation: {
              state: 'submitting',
              location: n,
              formMethod: r.formMethod,
              formAction: r.formAction,
              formEncType: r.formEncType,
              formData: r.formData,
              json: r.json,
              text: r.text,
            },
          });
        let i = eI(a, n);
        if (i.route.action || i.route.lazy) {
          if (((l = await ew('action', e, i, a, u, t, c)), e.signal.aborted))
            return { shortCircuited: !0 };
        } else
          l = {
            type: y.error,
            error: eC(405, {
              method: e.method,
              pathname: n.pathname,
              routeId: i.route.id,
            }),
          };
        if (eM(l)) {
          let e;
          return (
            (e =
              o && null != o.replace
                ? o.replace
                : l.location === _.location.pathname + _.location.search),
            await et(_, l, { submission: r, replace: e }),
            { shortCircuited: !0 }
          );
        }
        if (eP(l)) {
          // Store off the pending error - we use it to determine which loaders
          // to call and will commit it when we complete the navigation
          let e = eR(a, i.route.id);
          return (
            !0 !== (o && o.replace) && (x = g.Push),
            {
              // Send back an empty object we can use to clear out any prior actionData
              pendingActionData: {},
              pendingActionError: { [e.route.id]: l.error },
            }
          );
        }
        if (eA(l)) throw eC(400, { type: 'defer-action' });
        return { pendingActionData: { [i.route.id]: l.data } };
      } // Call all applicable loaders for the given matches, handling redirects,
      // errors, etc.
      async function Z(t, r, o, l, i, u, d, f, p) {
        // Figure out the right navigation we want to use for data loading
        let h = l || ej(r, i),
          m = i || u || eV(h),
          v = n || s,
          [g, y] = ev(e.history, _, o, m, r, T, C, N, I, z, v, c, f, p); // Short circuit if we have no loaders to run
        if (
          // Cancel pending deferreds for no-longer-matched routes or routes we're
          // about to reload.  Note that if this is an action reload we would have
          // already cancelled all pending deferreds so this would be a no-op
          (eL(
            (e) =>
              !(o && o.some((t) => t.route.id === e)) ||
              (g && g.some((t) => t.route.id === e))
          ),
          (P = ++A),
          0 === g.length && 0 === y.length)
        ) {
          let e = eg();
          return (
            q(
              r,
              D(
                {
                  matches: o,
                  loaderData: {}, // Commit pending error if we're short circuiting
                  errors: p || null,
                },
                f ? { actionData: f } : {},
                e ? { fetchers: new Map(_.fetchers) } : {}
              )
            ),
            { shortCircuited: !0 }
          );
        } // If this is an uninterrupted revalidation, we remain in our current idle
        // state.  If not, we need to switch to our loading state and load data,
        // preserving any new action data or existing action data (in the case of
        // a revalidation interrupting an actionReload)
        if (!R) {
          y.forEach((e) => {
            let t = _.fetchers.get(e.key),
              n = eB(void 0, t ? t.data : void 0);
            _.fetchers.set(e.key, n);
          });
          let e = f || _.actionData;
          H(
            D(
              { navigation: h },
              e
                ? 0 === Object.keys(e).length
                  ? { actionData: null }
                  : { actionData: e }
                : {},
              y.length > 0 ? { fetchers: new Map(_.fetchers) } : {}
            )
          );
        }
        y.forEach((e) => {
          L.has(e.key) && el(e.key),
            e.controller && // (via deleteFetcher) does not abort the triggering navigation that
              // triggered the revalidation
              L.set(e.key, e.controller);
        }); // Proxy navigation abort through to revalidation fetchers
        let b = () => y.forEach((e) => el(e.key));
        a && a.signal.addEventListener('abort', b);
        let {
          results: w,
          loaderResults: S,
          fetcherResults: k,
        } = await en(_.matches, o, g, y, t);
        if (t.signal.aborted) return { shortCircuited: !0 };
        a && a.signal.removeEventListener('abort', b),
          y.forEach((e) => L.delete(e.key)); // If any loaders returned a redirect Response, start a new REPLACE navigation
        let x = eN(w);
        if (x) {
          if (x.idx >= g.length) {
            // If this redirect came from a fetcher make sure we mark it in
            // fetchRedirectIds so it doesn't get revalidated on the next set of
            // loader executions
            let e = y[x.idx - g.length].key;
            z.add(e);
          }
          return await et(_, x.result, { replace: d }), { shortCircuited: !0 };
        } // Process and commit output from loaders
        let { loaderData: E, errors: M } = ex(_, o, g, S, p, y, k, j); // Wire up subscribers to update loaderData as promises settle
        j.forEach((e, t) => {
          e.subscribe((n) => {
            // Note: No need to updateState here since the TrackedPromise on
            // loaderData is stable across resolve/reject
            // Remove this instance if we were aborted or if promises have settled
            (n || e.done) && j.delete(t);
          });
        });
        let U = eg(),
          O = ey(P),
          V = U || O || y.length > 0;
        return D(
          { loaderData: E, errors: M },
          V ? { fetchers: new Map(_.fetchers) } : {}
        );
      }
      function X(e) {
        return _.fetchers.get(e) || ec;
      } // Call the action for the matched fetcher.submit(), and then handle redirects,
      // errors, and revalidation
      async function J(r, o, l, i, d, f) {
        var p;
        if ((er(), I.delete(r), !i.route.action && !i.route.lazy)) {
          let e = eC(405, { method: f.formMethod, pathname: l, routeId: o });
          ea(r, o, e);
          return;
        }
        let h =
          ((p = _.fetchers.get(r)),
          {
            state: 'submitting',
            formMethod: f.formMethod,
            formAction: f.formAction,
            formEncType: f.formEncType,
            formData: f.formData,
            json: f.json,
            text: f.text,
            data: p ? p.data : void 0,
            ' _hasFetcherDoneAnything ': !0,
          });
        _.fetchers.set(r, h), H({ fetchers: new Map(_.fetchers) }); // Call the action for the fetcher
        let m = new AbortController(),
          v = eS(e.history, l, m.signal, f);
        L.set(r, m);
        let g = A,
          y = await ew('action', v, i, d, u, t, c);
        if (v.signal.aborted) {
          // We can delete this so long as we weren't aborted by ou our own fetcher
          // re-submit which would have put _new_ controller is in fetchControllers
          L.get(r) === m && L.delete(r);
          return;
        }
        if (eM(y)) {
          if ((L.delete(r), P > g)) {
            // A new navigation was kicked off after our action started, so that
            // should take precedence over this redirect navigation.  We already
            // set isRevalidationRequired so all loaders for the new route should
            // fire unless opted out via shouldRevalidate
            let e = eF(void 0);
            _.fetchers.set(r, e), H({ fetchers: new Map(_.fetchers) });
            return;
          }
          {
            z.add(r);
            let e = eB(f);
            return (
              _.fetchers.set(r, e),
              H({ fetchers: new Map(_.fetchers) }),
              et(_, y, { submission: f, isFetchActionRedirect: !0 })
            );
          }
        } // Process any non-redirect errors thrown
        if (eP(y)) {
          ea(r, o, y.error);
          return;
        }
        if (eA(y)) throw eC(400, { type: 'defer-action' }); // Start the data load for current matches, or the next location if we're
        // in the middle of a navigation
        let b = _.navigation.location || _.location,
          w = eS(e.history, b, m.signal),
          S = n || s,
          k =
            'idle' !== _.navigation.state
              ? W(S, _.navigation.location, c)
              : _.matches;
        U(k, "Didn't find any matches after fetcher action");
        let E = ++A;
        M.set(r, E);
        let R = eB(f, y.data);
        _.fetchers.set(r, R);
        let [O, V] = ev(
          e.history,
          _,
          k,
          f,
          b,
          T,
          C,
          N,
          I,
          z,
          S,
          c,
          { [i.route.id]: y.data },
          void 0 // No need to send through errors since we short circuit above
        ); // Put all revalidating fetchers into the loading state, except for the
        // current fetcher which we want to keep in it's current loading state which
        // contains it's action submission info + action data
        V.filter((e) => e.key !== r).forEach((e) => {
          let t = e.key,
            n = _.fetchers.get(t),
            r = eB(void 0, n ? n.data : void 0);
          _.fetchers.set(t, r),
            L.has(t) && el(t),
            e.controller && L.set(t, e.controller);
        }),
          H({ fetchers: new Map(_.fetchers) });
        let B = () => V.forEach((e) => el(e.key));
        m.signal.addEventListener('abort', B);
        let {
          results: F,
          loaderResults: $,
          fetcherResults: K,
        } = await en(_.matches, k, O, V, w);
        if (m.signal.aborted) return;
        m.signal.removeEventListener('abort', B),
          M.delete(r),
          L.delete(r),
          V.forEach((e) => L.delete(e.key));
        let Q = eN(F);
        if (Q) {
          if (Q.idx >= O.length) {
            // If this redirect came from a fetcher make sure we mark it in
            // fetchRedirectIds so it doesn't get revalidated on the next set of
            // loader executions
            let e = V[Q.idx - O.length].key;
            z.add(e);
          }
          return et(_, Q.result);
        } // Process and commit output from loaders
        let { loaderData: G, errors: Y } = ex(
          _,
          _.matches,
          O,
          $,
          void 0,
          V,
          K,
          j
        ); // Since we let revalidations complete even if the submitting fetcher was
        // deleted, only put it back to idle if it hasn't been deleted
        if (_.fetchers.has(r)) {
          let e = eF(y.data);
          _.fetchers.set(r, e);
        }
        let Z = ey(E);
        'loading' === _.navigation.state && E > P
          ? (U(x, 'Expected pending action'),
            a && a.abort(),
            q(_.navigation.location, {
              matches: k,
              loaderData: G,
              errors: Y,
              fetchers: new Map(_.fetchers),
            })) // otherwise just update with the fetcher data, preserving any existing
          : // loaderData for loaders that did not need to reload.  We have to
            // manually merge here since we aren't going through completeNavigation
            (H(
              D(
                { errors: Y, loaderData: eE(_.loaderData, G, k, Y) },
                Z || V.length > 0 ? { fetchers: new Map(_.fetchers) } : {}
              )
            ),
            (T = !1));
      } // Call the matched loader for fetcher.load(), handling redirects, errors, etc.
      async function ee(n, r, a, o, l, i) {
        let s = _.fetchers.get(n),
          d = eB(i, s ? s.data : void 0);
        _.fetchers.set(n, d), H({ fetchers: new Map(_.fetchers) }); // Call the loader for this fetcher route match
        let f = new AbortController(),
          p = eS(e.history, a, f.signal);
        L.set(n, f);
        let h = A,
          m = await ew('loader', p, o, l, u, t, c);
        if (
          (eA(m) && (m = (await eU(m, p.signal, !0)) || m),
          L.get(n) === f && L.delete(n),
          p.signal.aborted)
        )
          return; // If the loader threw a redirect Response, start a new REPLACE navigation
        if (eM(m)) {
          if (P > h) {
            // A new navigation was kicked off after our loader started, so that
            // should take precedence over this redirect navigation
            let e = eF(void 0);
            _.fetchers.set(n, e), H({ fetchers: new Map(_.fetchers) });
            return;
          }
          z.add(n), await et(_, m);
          return;
        } // Process any non-redirect errors thrown
        if (eP(m)) {
          let e = eR(_.matches, r);
          _.fetchers.delete(n), // TODO: In remix, this would reset to IDLE_NAVIGATION if it was a catch -
            // do we need to behave any differently with our non-redirect errors?
            // What if it was a non-redirect Response?
            H({
              fetchers: new Map(_.fetchers),
              errors: { [e.route.id]: m.error },
            });
          return;
        }
        U(!eA(m), 'Unhandled fetcher deferred data'); // Put the fetcher back into an idle state
        let v = eF(m.data);
        _.fetchers.set(n, v), H({ fetchers: new Map(_.fetchers) });
      }
      /**
       * Utility function to handle redirects returned from an action or loader.
       * Normally, a redirect "replaces" the navigation that triggered it.  So, for
       * example:
       *
       *  - user is on /a
       *  - user clicks a link to /b
       *  - loader for /b redirects to /c
       *
       * In a non-JS app the browser would track the in-flight navigation to /b and
       * then replace it with /c when it encountered the redirect response.  In
       * the end it would only ever update the URL bar with /c.
       *
       * In client-side routing using pushState/replaceState, we aim to emulate
       * this behavior and we also do not update history until the end of the
       * navigation (including processed redirects).  This means that we never
       * actually touch history until we've processed redirects, so we just use
       * the history action from the original navigation (PUSH or REPLACE).
       */ async function et(t, n, r) {
        let {
          submission: i,
          replace: u,
          isFetchActionRedirect: s,
        } = void 0 === r ? {} : r;
        n.revalidate && (T = !0);
        let d = V(
          t.location,
          n.location,
          D({ _isRedirect: !0 }, s ? { _isFetchActionRedirect: !0 } : {})
        );
        if ((U(d, 'Expected a location on the redirect navigation'), l)) {
          let t = !1;
          if (n.reloadDocument) t = !0;
          else if (ef.test(n.location)) {
            let r = e.history.createURL(n.location);
            t =
              r.origin !== o.location.origin || // Hard reload if it's an absolute URL that does not match our basename
              null == K(r.pathname, c);
          }
          if (t) {
            u ? o.location.replace(n.location) : o.location.assign(n.location);
            return;
          }
        } // There's no need to abort on redirects, since we don't detect the
        // redirect until the action/loaders have settled
        a = null;
        let f = !0 === u ? g.Replace : g.Push,
          p = i || eV(t.navigation); // If this was a 307/308 submission we want to preserve the HTTP method and
        // re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
        // redirected location
        if (eu.has(n.status) && p && eD(p.formMethod))
          await G(f, d, {
            submission: D({}, p, { formAction: n.location }), // Preserve this flag across redirects
            preventScrollReset: E,
          });
        else if (s)
          // without the fetcher submission, but we send it along for shouldRevalidate
          await G(f, d, {
            overrideNavigation: ej(d),
            fetcherSubmission: p, // Preserve this flag across redirects
            preventScrollReset: E,
          });
        else {
          // If we have a submission, we will preserve it through the redirect navigation
          let e = ej(d, p);
          await G(f, d, {
            overrideNavigation: e, // Preserve this flag across redirects
            preventScrollReset: E,
          });
        }
      }
      async function en(n, r, a, o, l) {
        // Call all navigation loaders and revalidating fetcher loaders in parallel,
        // then slice off the results into separate arrays so we can handle them
        // accordingly
        let i = await Promise.all([
            ...a.map((e) => ew('loader', l, e, r, u, t, c)),
            ...o.map((n) =>
              n.matches && n.match && n.controller
                ? ew(
                    'loader',
                    eS(e.history, n.path, n.controller.signal),
                    n.match,
                    n.matches,
                    u,
                    t,
                    c
                  )
                : { type: y.error, error: eC(404, { pathname: n.path }) }
            ),
          ]),
          s = i.slice(0, a.length),
          d = i.slice(a.length);
        return (
          await Promise.all([
            ez(
              n,
              a,
              s,
              s.map(() => l.signal),
              !1,
              _.loaderData
            ),
            ez(
              n,
              o.map((e) => e.match),
              d,
              o.map((e) => (e.controller ? e.controller.signal : null)),
              !0
            ),
          ]),
          { results: i, loaderResults: s, fetcherResults: d }
        );
      }
      function er() {
        // Every interruption triggers a revalidation
        (T = !0), // Cancel pending route-level deferreds and mark cancelled routes for
          // revalidation
          C.push(...eL()), // Abort in-flight fetcher loads
          I.forEach((e, t) => {
            L.has(t) && (N.push(t), el(t));
          });
      }
      function ea(e, t, n) {
        let r = eR(_.matches, t);
        eo(e),
          H({ errors: { [r.route.id]: n }, fetchers: new Map(_.fetchers) });
      }
      function eo(e) {
        let t = _.fetchers.get(e);
        L.has(e) && !(t && 'loading' === t.state && M.has(e)) && el(e),
          I.delete(e),
          M.delete(e),
          z.delete(e),
          _.fetchers.delete(e);
      }
      function el(e) {
        let t = L.get(e);
        U(t, 'Expected fetch controller: ' + e), t.abort(), L.delete(e);
      }
      function ei(e) {
        for (let t of e) {
          let e = eF(X(t).data);
          _.fetchers.set(t, e);
        }
      }
      function eg() {
        let e = [],
          t = !1;
        for (let n of z) {
          let r = _.fetchers.get(n);
          U(r, 'Expected fetcher: ' + n),
            'loading' === r.state && (z.delete(n), e.push(n), (t = !0));
        }
        return ei(e), t;
      }
      function ey(e) {
        let t = [];
        for (let [n, r] of M)
          if (r < e) {
            let e = _.fetchers.get(n);
            U(e, 'Expected fetcher: ' + n),
              'loading' === e.state && (el(n), M.delete(n), t.push(n));
          }
        return ei(t), t.length > 0;
      }
      function eb(e) {
        _.blockers.delete(e), B.delete(e);
      } // Utility function to update blockers, ensuring valid state transitions
      function ek(e, t) {
        let n = _.blockers.get(e) || ed; // Poor mans state machine :)
        // https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM
        U(
          ('unblocked' === n.state && 'blocked' === t.state) ||
            ('blocked' === n.state && 'blocked' === t.state) ||
            ('blocked' === n.state && 'proceeding' === t.state) ||
            ('blocked' === n.state && 'unblocked' === t.state) ||
            ('proceeding' === n.state && 'unblocked' === t.state),
          'Invalid blocker state transition: ' + n.state + ' -> ' + t.state
        );
        let r = new Map(_.blockers);
        r.set(e, t), H({ blockers: r });
      }
      function e_(e) {
        let { currentLocation: t, nextLocation: n, historyAction: r } = e;
        if (0 === B.size) return; // We ony support a single active blocker at the moment since we don't have
        // any compelling use cases for multi-blocker yet
        B.size > 1 && O(!1, 'A router only supports one blocker at a time');
        let a = Array.from(B.entries()),
          [o, l] = a[a.length - 1],
          i = _.blockers.get(o);
        if (
          (!i || 'proceeding' !== i.state) &&
          l({ currentLocation: t, nextLocation: n, historyAction: r })
        )
          return o;
      }
      function eL(e) {
        let t = [];
        return (
          j.forEach((n, r) => {
            (!e || e(r)) && // Cancel the deferred - but do not remove from activeDeferreds here -
              // we rely on the subscribers to do that so our tests can assert proper
              // cleanup via _internalActiveDeferreds
              (n.cancel(), t.push(r), j.delete(r));
          }),
          t
        );
      }
      function eO(e, t) {
        return (
          (m &&
            m(
              e,
              t.map(
                (
                  e // Note: This should match the format exported by useMatches, so if you change
                ) =>
                  // this please also change that :)  Eventually we'll DRY this up
                  (function (e, t) {
                    let { route: n, pathname: r, params: a } = e;
                    return {
                      id: n.id,
                      pathname: r,
                      params: a,
                      data: t[n.id],
                      handle: n.handle,
                    };
                  })(e, _.loaderData)
              )
            )) ||
          e.key
        );
      }
      function e$(e, t) {
        if (h) {
          let n = h[eO(e, t)];
          if ('number' == typeof n) return n;
        }
        return null;
      }
      return (r = {
        get basename() {
          return c;
        },
        get state() {
          return _;
        },
        get routes() {
          return s;
        },
        // Initialize the router, all side effects should be kicked off from here.
        initialize:
          // Implemented as a Fluent API for ease of:
          //   let router = createRouter(init).initialize();
          function () {
            return (
              // If history informs us of a POP navigation, start the navigation but do not update
              // state.  We'll update our own state once the navigation completes
              (f = e.history.listen((t) => {
                let { action: n, location: r, delta: a } = t; // Ignore this event if it was just us resetting the URL from a
                // blocked POP navigation
                if (F) {
                  F = !1;
                  return;
                }
                O(
                  0 === B.size || null != a,
                  'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
                );
                let o = e_({
                  currentLocation: _.location,
                  nextLocation: r,
                  historyAction: n,
                });
                if (o && null != a) {
                  // Restore the URL to match the current UI, but don't update router state
                  (F = !0),
                    e.history.go(-1 * a), // Put the blocker into a blocked state
                    ek(o, {
                      state: 'blocked',
                      location: r,
                      proceed() {
                        ek(o, {
                          state: 'proceeding',
                          proceed: void 0,
                          reset: void 0,
                          location: r,
                        }), // Re-do the same POP navigation we just blocked
                          e.history.go(a);
                      },
                      reset() {
                        let e = new Map(_.blockers);
                        e.set(o, ed), H({ blockers: e });
                      },
                    });
                  return;
                }
                return G(n, r);
              })),
              _.initialized || G(g.Pop, _.location),
              r
            );
          },
        // Subscribe to state updates for the router
        subscribe: function (e) {
          return p.add(e), () => p.delete(e);
        },
        // Opt in to capturing and reporting scroll positions during navigations,
        enableScrollRestoration:
          // used by the <ScrollRestoration> component
          function (e, t, n) {
            // Perform initial hydration scroll restoration, since we miss the boat on
            // the initial updateState() because we've not yet rendered <ScrollRestoration/>
            // and therefore have no savedScrollPositions available
            if (
              ((h = e), (v = t), (m = n || null), !b && _.navigation === es)
            ) {
              b = !0;
              let e = e$(_.location, _.matches);
              null != e && H({ restoreScrollPosition: e });
            }
            return () => {
              (h = null), (v = null), (m = null);
            };
          },
        navigate: Q,
        // Trigger a fetcher load/submit for the given fetcher key
        fetch: function (e, t, r, a) {
          if (i)
            throw Error(
              "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
            );
          L.has(e) && el(e);
          let o = n || s,
            l = eh(
              _.location,
              _.matches,
              c,
              d.v7_prependBasename,
              r,
              t,
              null == a ? void 0 : a.relative
            ),
            u = W(o, l, c);
          if (!u) {
            ea(e, t, eC(404, { pathname: l }));
            return;
          }
          let {
            path: f,
            submission: p,
            error: h,
          } = em(d.v7_normalizeFormMethod, !0, l, a);
          if (h) {
            ea(e, t, h);
            return;
          }
          let m = eI(u, f);
          if (
            ((E = !0 === (a && a.preventScrollReset)), p && eD(p.formMethod))
          ) {
            J(e, t, f, m, u, p);
            return;
          } // Store off the match so we can call it's shouldRevalidate on subsequent
          // revalidations
          I.set(e, { routeId: t, path: f }), ee(e, t, f, m, u, p);
        },
        // Revalidate all current loaders.  If a navigation is in progress or if this
        revalidate:
          // is interrupted by a navigation, allow this to "succeed" by calling all
          // loaders during the next loader round
          function () {
            // If we're currently submitting an action, we don't need to start a new
            // navigation, we'll just let the follow up loader execution call all loaders
            if (
              (er(),
              H({ revalidation: 'loading' }),
              'submitting' !== _.navigation.state)
            ) {
              // If we're currently in an idle state, start a new navigation for the current
              // action/location and mark it as uninterrupted, which will skip the history
              // update in completeNavigation
              if ('idle' === _.navigation.state) {
                G(_.historyAction, _.location, {
                  startUninterruptedRevalidation: !0,
                });
                return;
              } // Otherwise, if we're currently in a loading state, just start a new
              // navigation to the navigation.location but do not trigger an uninterrupted
              // revalidation so that history correctly updates once the navigation completes
              G(x || _.historyAction, _.navigation.location, {
                overrideNavigation: _.navigation,
              });
            }
          }, // Passthrough to history-aware createHref used by useHref so we get proper
        // hash-aware URLs in DOM paths
        createHref: (t) => e.history.createHref(t),
        encodeLocation: (t) => e.history.encodeLocation(t),
        getFetcher: X,
        deleteFetcher: eo,
        // Clean up a router and it's side effects
        dispose: function () {
          f && f(),
            p.clear(),
            a && a.abort(),
            _.fetchers.forEach((e, t) => eo(t)),
            _.blockers.forEach((e, t) => eb(t));
        },
        getBlocker: function (e, t) {
          let n = _.blockers.get(e) || ed;
          return B.get(e) !== t && B.set(e, t), n;
        },
        deleteBlocker: eb,
        _internalFetchControllers: L,
        _internalActiveDeferreds: j,
        _internalSetRoutes: function (e) {
          n = $(e, t, void 0, (u = {}));
        },
      });
    })({
      basename: null == m ? void 0 : m.basename,
      future: tt({}, null == m ? void 0 : m.future, { v7_prependBasename: !0 }),
      history: (function (e, t, n, r) {
        void 0 === r && (r = {});
        let { window: a = document.defaultView, v5Compat: o = !1 } = r,
          l = a.history,
          i = g.Pop,
          u = null,
          s = c();
        function c() {
          return (l.state || { idx: null }).idx;
        }
        function d() {
          i = g.Pop;
          let e = c(),
            t = null == e ? null : e - s;
          (s = e), u && u({ action: i, location: p.location, delta: t });
        }
        function f(e) {
          // window.location.origin is "null" (the literal string value) in Firefox
          // under certain conditions, notably when serving from a local HTML file
          // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
          let t =
              'null' !== a.location.origin
                ? a.location.origin
                : a.location.href,
            n = 'string' == typeof e ? e : j(e);
          return (
            U(
              t,
              'No window.location.(origin|href) available to create URL for href: ' +
                n
            ),
            new URL(n, t)
          );
        }
        null == s && ((s = 0), l.replaceState(D({}, l.state, { idx: s }), ''));
        let p = {
          get action() {
            return i;
          },
          get location() {
            return e(a, l);
          },
          listen(e) {
            if (u) throw Error('A history only accepts one active listener');
            return (
              a.addEventListener(z, d),
              (u = e),
              () => {
                a.removeEventListener(z, d), (u = null);
              }
            );
          },
          createHref: (e) => t(a, e),
          createURL: f,
          encodeLocation(e) {
            // Encode a Location the same way window.location would
            let t = f(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (e, t) {
            i = g.Push;
            let r = V(p.location, e, t);
            n && n(r, e);
            let d = I(r, (s = c() + 1)),
              f = p.createHref(r); // try...catch because iOS limits us to 100 pushState calls :/
            try {
              l.pushState(d, '', f);
            } catch (e) {
              // If the exception is because `state` can't be serialized, let that throw
              // outwards just like a replace call would so the dev knows the cause
              // https://html.spec.whatwg.org/multipage/nav-history-apis.html#shared-history-push/replace-state-steps
              // https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal
              if (e instanceof DOMException && 'DataCloneError' === e.name)
                throw e; // They are going to lose state here, but there is no real
              // way to warn them about it since the page will refresh...
              a.location.assign(f);
            }
            o && u && u({ action: i, location: p.location, delta: 1 });
          },
          replace: function (e, t) {
            i = g.Replace;
            let r = V(p.location, e, t);
            n && n(r, e);
            let a = I(r, (s = c())),
              d = p.createHref(r);
            l.replaceState(a, '', d),
              o && u && u({ action: i, location: p.location, delta: 0 });
          },
          go: (e) => l.go(e),
        };
        return p;
      })(
        function (e, t) {
          let { pathname: n, search: r, hash: a } = e.location;
          return V(
            '',
            { pathname: n, search: r, hash: a },
            (t.state && t.state.usr) || null,
            (t.state && t.state.key) || 'default'
          );
        },
        function (e, t) {
          return 'string' == typeof t ? t : j(t);
        },
        null,
        { window: null == m ? void 0 : m.window }
      ),
      hydrationData:
        (null == m ? void 0 : m.hydrationData) ||
        ((t = null == (o = window) ? void 0 : o.__staticRouterHydrationData) &&
          t.errors &&
          (t = tt({}, t, {
            errors: (function (e) {
              if (!e) return null;
              let t = Object.entries(e),
                n = {};
              // serializeErrors in react-router-dom/server.tsx :)
              for (let [e, r] of t) // Hey you!  If you change this, please change the corresponding logic in
                if (r && 'RouteErrorResponse' === r.__type)
                  n[e] = new et(
                    r.status,
                    r.statusText,
                    r.data,
                    !0 === r.internal
                  );
                else if (r && 'Error' === r.__type) {
                  // Attempt to reconstruct the right type of Error (i.e., ReferenceError)
                  if (r.__subType) {
                    let t = window[r.__subType];
                    if ('function' == typeof t)
                      try {
                        // @ts-expect-error
                        let a = new t(r.message); // Wipe away the client-side stack trace.  Nothing to fill it in with
                        // because we don't serialize SSR stack traces for security reasons
                        (a.stack = ''), (n[e] = a);
                      } catch (e) {
                        // no-op - fall through and create a normal Error
                      }
                  }
                  if (null == n[e]) {
                    let t = Error(r.message); // Wipe away the client-side stack trace.  Nothing to fill it in with
                    // because we don't serialize SSR stack traces for security reasons
                    (t.stack = ''), (n[e] = t);
                  }
                } else n[e] = r;
              return n;
            })(t.errors),
          })),
        t),
      routes: h,
      mapRouteProperties: function (e) {
        let t = {
          // Note: this check also occurs in createRoutesFromChildren so update
          // there if you change this -- please and thank you!
          hasErrorBoundary: null != e.ErrorBoundary || null != e.errorElement,
        };
        return (
          e.Component &&
            Object.assign(t, {
              element: /*#__PURE__*/ P.createElement(e.Component),
              Component: void 0,
            }),
          e.ErrorBoundary &&
            Object.assign(t, {
              errorElement: /*#__PURE__*/ P.createElement(e.ErrorBoundary),
              ErrorBoundary: void 0,
            }),
          t
        );
      },
    }).initialize()),
  i4 = document.getElementById('root');
if (i4) {
  let e = v(i4);
  e.render(
    /*#__PURE__*/ (0, A.jsx)(
      () =>
        /*#__PURE__*/ (0, A.jsx)(/*@__PURE__*/ r(P).StrictMode, {
          children: /*#__PURE__*/ (0, A.jsx)(iT, {
            children: /*#__PURE__*/ (0, A.jsx)(e8, { router: i2 }),
          }),
        }),
      {}
    )
  );
} //# sourceMappingURL=index.3a058a3e.js.map

//# sourceMappingURL=index.3a058a3e.js.map
