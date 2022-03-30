var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
init_react();
var import_express = __toESM(require("express"));
var import_compression = __toESM(require("compression"));
var import_morgan = __toESM(require("morgan"));
var import_express2 = require("@remix-run/express");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:C:\Users\Phury\Documents\dev\test-remix-router\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route:C:\Users\Phury\Documents\dev\test-remix-router\app\routes\playlist\$collection.$page.tsx
var collection_page_exports = {};
__export(collection_page_exports, {
  default: () => Index,
  loader: () => loader
});
init_react();
var import_node = require("@remix-run/node");
var import_remix3 = __toESM(require_remix());
var loader = ({ params }) => {
  const { collection, page } = params;
  if (collection) {
    return (0, import_node.json)({ collection, page });
  }
  return (0, import_remix3.redirect)("/");
};
function Index() {
  const { collection, page } = (0, import_remix3.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "It's the playlist page route /playlist/", collection, "/", page));
}

// route:C:\Users\Phury\Documents\dev\test-remix-router\app\routes\$country.topic.$xid.$page.tsx
var country_topic_xid_page_exports = {};
__export(country_topic_xid_page_exports, {
  default: () => Index2,
  loader: () => loader2
});
init_react();
var import_node2 = require("@remix-run/node");
var import_remix4 = __toESM(require_remix());
var loader2 = ({ params }) => {
  const { xid, country, page } = params;
  if (xid && country && page) {
    return (0, import_node2.json)({ xid, country, page });
  }
  return (0, import_remix4.redirect)("/");
};
function Index2() {
  const { xid, country, page } = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "It's the topic page route ", country, "/topic/", xid, "/", page));
}

// route:C:\Users\Phury\Documents\dev\test-remix-router\app\routes\search\$query.$searchPage.tsx
var query_searchPage_exports = {};
__export(query_searchPage_exports, {
  default: () => Index3,
  loader: () => loader3
});
init_react();
var import_remix5 = __toESM(require_remix());
var loader3 = ({ params }) => {
  return (0, import_remix5.json)({ query: params.query, searchPage: params.searchPage });
};
function Index3() {
  const loaderData = (0, import_remix5.useLoaderData)();
  const query = loaderData == null ? void 0 : loaderData.query;
  const searchPage = loaderData == null ? void 0 : loaderData.searchPage;
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "It's the search query route /search/", query, "/", searchPage));
}

// route:C:\Users\Phury\Documents\dev\test-remix-router\app\routes\register\validation_code.tsx
var validation_code_exports = {};
__export(validation_code_exports, {
  default: () => Index4,
  loader: () => loader4
});
init_react();
var import_node3 = require("@remix-run/node");
var import_remix6 = __toESM(require_remix());
var loader4 = ({ request }) => {
  if (request.url.includes("authenticated")) {
    return (0, import_remix6.redirect)("/fr");
  }
  return (0, import_node3.json)({});
};
function Index4() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "It's the register validation code route /register/validation_code"));
}

// route:C:\Users\Phury\Documents\dev\test-remix-router\app\routes\legal\usprivacy.notice.tsx
var usprivacy_notice_exports = {};
__export(usprivacy_notice_exports, {
  default: () => Index5,
  loader: () => loader5
});
init_react();
var import_node4 = require("@remix-run/node");
var import_remix7 = __toESM(require_remix());
var loader5 = ({ request }) => {
  if (!request.url.includes("ccpa")) {
    return (0, import_remix7.redirect)("/fr");
  }
  return (0, import_node4.json)({});
};
function Index5() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "It's the usprivacy notice route /legal/usprivacy/notice"));
}

// route:C:\Users\Phury\Documents\dev\test-remix-router\app\routes\playlist\$collection.tsx
var collection_exports = {};
__export(collection_exports, {
  default: () => Index6,
  loader: () => loader6
});
init_react();
var import_node5 = require("@remix-run/node");
var import_remix8 = __toESM(require_remix());
var loader6 = ({ params }) => {
  const { collection } = params;
  if (collection) {
    return (0, import_node5.json)({ collection });
  }
  return (0, import_remix8.redirect)("/");
};
function Index6() {
  const { collection } = (0, import_remix8.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "It's the playlist page route /playlist/", collection));
}

// route:C:\Users\Phury\Documents\dev\test-remix-router\app\routes\$country.topic.$xid.tsx
var country_topic_xid_exports = {};
__export(country_topic_xid_exports, {
  default: () => Index7,
  loader: () => loader7
});
init_react();
var import_node6 = require("@remix-run/node");
var import_remix9 = __toESM(require_remix());
var loader7 = ({ params }) => {
  const { xid, country } = params;
  if (xid && country) {
    return (0, import_node6.json)({ xid, country });
  }
  return (0, import_remix9.redirect)("/");
};
function Index7() {
  const { xid, country } = (0, import_remix9.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "It's the topic page route ", country, "/topic/", xid));
}

// route:C:\Users\Phury\Documents\dev\test-remix-router\app\routes\password\reinforce.tsx
var reinforce_exports = {};
__export(reinforce_exports, {
  default: () => Index8,
  loader: () => loader8
});
init_react();
var import_node7 = require("@remix-run/node");
var import_remix10 = __toESM(require_remix());
var loader8 = ({ request }) => {
  if (request.url.includes("authenticated")) {
    return (0, import_remix10.redirect)("/fr");
  }
  return (0, import_node7.json)({});
};
function Index8() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "It's the password reinforce code route /password/reinforce"));
}

// route:C:\Users\Phury\Documents\dev\test-remix-router\app\routes\register\activate.tsx
var activate_exports = {};
__export(activate_exports, {
  default: () => Index9,
  loader: () => loader9
});
init_react();
var import_remix11 = __toESM(require_remix());
var loader9 = ({ request }) => {
  const query = request.url.split("?")[1];
  const searchParams = new URLSearchParams(query);
  const redirectUri = searchParams.get("redirect_uri");
  if (redirectUri) {
    return (0, import_remix11.redirect)(redirectUri);
  }
  return (0, import_remix11.redirect)("/");
};
function Index9() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "It's the register activate route /register/activate"));
}

// route:C:\Users\Phury\Documents\dev\test-remix-router\app\routes\password\recover.tsx
var recover_exports = {};
__export(recover_exports, {
  default: () => Index10,
  loader: () => loader10
});
init_react();
var import_node8 = require("@remix-run/node");
var import_remix12 = __toESM(require_remix());
var loader10 = ({ request }) => {
  if (request.url.includes("authenticated")) {
    return (0, import_remix12.redirect)("/fr");
  }
  return (0, import_node8.json)({});
};
function Index10() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "It's the password recover code route /password/recover"));
}

// route:C:\Users\Phury\Documents\dev\test-remix-router\app\routes\legal\usprivacy.tsx
var usprivacy_exports = {};
__export(usprivacy_exports, {
  default: () => Index11,
  loader: () => loader11
});
init_react();
var import_node9 = require("@remix-run/node");
var import_remix13 = __toESM(require_remix());
var loader11 = ({ request }) => {
  if (!request.url.includes("ccpa")) {
    return (0, import_remix13.redirect)("/fr");
  }
  return (0, import_node9.json)({});
};
function Index11() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "It's the usprivacy route /legal/usprivacy"));
}

// route:C:\Users\Phury\Documents\dev\test-remix-router\app\routes\password\reset.tsx
var reset_exports = {};
__export(reset_exports, {
  default: () => Index12,
  loader: () => loader12
});
init_react();
var import_node10 = require("@remix-run/node");
var import_remix14 = __toESM(require_remix());
var loader12 = ({ request }) => {
  if (request.url.includes("authenticated")) {
    return (0, import_remix14.redirect)("/fr");
  }
  return (0, import_node10.json)({});
};
function Index12() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "It's the password reset code route /password/reset"));
}

// route:C:\Users\Phury\Documents\dev\test-remix-router\app\routes\search\$query.tsx
var query_exports = {};
__export(query_exports, {
  default: () => query_default,
  loader: () => loader13
});
init_react();
var import_remix16 = __toESM(require_remix());

// app/routes/search/$query.$searchPage.tsx
init_react();
var import_remix15 = __toESM(require_remix());
function Index13() {
  const loaderData = (0, import_remix15.useLoaderData)();
  const query = loaderData == null ? void 0 : loaderData.query;
  const searchPage = loaderData == null ? void 0 : loaderData.searchPage;
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "It's the search query route /search/", query, "/", searchPage));
}

// route:C:\Users\Phury\Documents\dev\test-remix-router\app\routes\search\$query.tsx
var loader13 = ({ params }) => {
  return (0, import_remix16.json)({ query: params.query });
};
var query_default = Index13;

// route:C:\Users\Phury\Documents\dev\test-remix-router\app\routes\search\index.tsx
var search_exports = {};
__export(search_exports, {
  default: () => search_default
});
init_react();
var search_default = Index13;

// route:C:\Users\Phury\Documents\dev\test-remix-router\app\routes\signin\email.tsx
var email_exports = {};
__export(email_exports, {
  default: () => Index14,
  loader: () => loader14
});
init_react();
var import_node11 = require("@remix-run/node");
var import_remix17 = __toESM(require_remix());
var loader14 = ({ request }) => {
  if (request.url.includes("authenticated")) {
    return (0, import_remix17.redirect)("/fr");
  }
  return (0, import_node11.json)({});
};
function Index14() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "It's the signin email route /signin/email"));
}

// route:C:\Users\Phury\Documents\dev\test-remix-router\app\routes\signin\index.tsx
var signin_exports = {};
__export(signin_exports, {
  default: () => Index15,
  loader: () => loader15
});
init_react();
var import_node12 = require("@remix-run/node");
var import_remix18 = __toESM(require_remix());
var loader15 = ({ request }) => {
  if (request.url.includes("authenticated")) {
    return (0, import_remix18.redirect)("/fr");
  }
  return (0, import_node12.json)({});
};
function Index15() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "It's the sign in route /signin"));
}

// route:C:\Users\Phury\Documents\dev\test-remix-router\app\routes\video\$xid.tsx
var xid_exports = {};
__export(xid_exports, {
  default: () => Index16,
  loader: () => loader16
});
init_react();
var import_node13 = require("@remix-run/node");
var import_remix19 = __toESM(require_remix());
var loader16 = ({ params }) => {
  const { xid } = params;
  if (xid) {
    return (0, import_node13.json)({ xid });
  }
  return (0, import_remix19.redirect)("/");
};
function Index16() {
  const { xid } = (0, import_remix19.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "It's the watching page route yo /video/", xid));
}

// route:C:\Users\Phury\Documents\dev\test-remix-router\app\routes\$country.tsx
var country_exports = {};
__export(country_exports, {
  Channel: () => Channel,
  default: () => Index18,
  loader: () => loader17
});
init_react();
var import_remix21 = __toESM(require_remix());

// app/routes/index.tsx
init_react();
var import_remix20 = __toESM(require_remix());
function Index17() {
  const loaderData = (0, import_remix20.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "It's the index route /", loaderData == null ? void 0 : loaderData.country));
}

// route:C:\Users\Phury\Documents\dev\test-remix-router\app\routes\$country.tsx
var loader17 = ({ params }) => {
  if (params.country && params.country.length < 3) {
    return (0, import_remix21.json)({ page: "home", country: params.country });
  }
  return (0, import_remix21.json)({ page: "channel", channel: params.country });
};
function Channel() {
  const loaderData = (0, import_remix21.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "It's the channel route /", loaderData == null ? void 0 : loaderData.channel));
}
function Index18() {
  const { page } = (0, import_remix21.useLoaderData)();
  switch (page) {
    case "home":
      return /* @__PURE__ */ React.createElement(Index17, null);
    default:
      return /* @__PURE__ */ React.createElement(Channel, null);
  }
}

// route:C:\Users\Phury\Documents\dev\test-remix-router\app\routes\notfound.tsx
var notfound_exports = {};
__export(notfound_exports, {
  default: () => Index19,
  loader: () => loader18
});
init_react();
var import_remix22 = __toESM(require_remix());
var loader18 = () => {
  return (0, import_remix22.redirect)("/fr");
};
function Index19() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "It's the not found route /notfound"));
}

// route:C:\Users\Phury\Documents\dev\test-remix-router\app\routes\signup.tsx
var signup_exports = {};
__export(signup_exports, {
  default: () => Index20,
  loader: () => loader19
});
init_react();
var import_node14 = require("@remix-run/node");
var import_remix23 = __toESM(require_remix());
var loader19 = ({ request }) => {
  if (request.url.includes("authenticated")) {
    return (0, import_remix23.redirect)("/fr");
  }
  return (0, import_node14.json)({});
};
function Index20() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "It's the sign up route /signup"));
}

// route:C:\Users\Phury\Documents\dev\test-remix-router\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index21,
  loader: () => loader20
});
init_react();
var import_remix24 = __toESM(require_remix());
var loader20 = () => {
  return (0, import_remix24.redirect)("/fr");
};
function Index21() {
  const loaderData = (0, import_remix24.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "It's the index route /", loaderData == null ? void 0 : loaderData.country));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "e89ebc35", "entry": { "module": "/build/entry.client-XWCZ7IZ7.js", "imports": ["/build/_shared/chunk-T4WJZQBR.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-YB7MCJLZ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$country": { "id": "routes/$country", "parentId": "root", "path": ":country", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$country-PMNTR5WP.js", "imports": ["/build/_shared/chunk-CSV7WKB3.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$country.topic.$xid": { "id": "routes/$country.topic.$xid", "parentId": "root", "path": ":country/topic/:xid", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$country.topic.$xid-W5FL7K4H.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$country.topic.$xid.$page": { "id": "routes/$country.topic.$xid.$page", "parentId": "root", "path": ":country/topic/:xid/:page", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$country.topic.$xid.$page-LKAYCJD2.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-BZVDBLUJ.js", "imports": ["/build/_shared/chunk-CSV7WKB3.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/legal/usprivacy": { "id": "routes/legal/usprivacy", "parentId": "root", "path": "legal/usprivacy", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/legal/usprivacy-DO3MGSAS.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/legal/usprivacy.notice": { "id": "routes/legal/usprivacy.notice", "parentId": "root", "path": "legal/usprivacy/notice", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/legal/usprivacy.notice-WAQQIDBN.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/notfound": { "id": "routes/notfound", "parentId": "root", "path": "notfound", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/notfound-4ENSLUDF.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/password/recover": { "id": "routes/password/recover", "parentId": "root", "path": "password/recover", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/password/recover-P4SKHJPD.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/password/reinforce": { "id": "routes/password/reinforce", "parentId": "root", "path": "password/reinforce", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/password/reinforce-2PWUMUSO.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/password/reset": { "id": "routes/password/reset", "parentId": "root", "path": "password/reset", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/password/reset-WYN3BANN.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/playlist/$collection": { "id": "routes/playlist/$collection", "parentId": "root", "path": "playlist/:collection", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/playlist/$collection-6EKW3DH7.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/playlist/$collection.$page": { "id": "routes/playlist/$collection.$page", "parentId": "root", "path": "playlist/:collection/:page", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/playlist/$collection.$page-KHZP6Y3N.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/register/activate": { "id": "routes/register/activate", "parentId": "root", "path": "register/activate", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/register/activate-V5DGJBV2.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/register/validation_code": { "id": "routes/register/validation_code", "parentId": "root", "path": "register/validation_code", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/register/validation_code-ZVN44EOJ.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/search/$query": { "id": "routes/search/$query", "parentId": "root", "path": "search/:query", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/search/$query-W4M6OK7P.js", "imports": ["/build/_shared/chunk-WIDGUSSG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/search/$query.$searchPage": { "id": "routes/search/$query.$searchPage", "parentId": "root", "path": "search/:query/:searchPage", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/search/$query.$searchPage-A56WFAP3.js", "imports": ["/build/_shared/chunk-WIDGUSSG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/search/index": { "id": "routes/search/index", "parentId": "root", "path": "search", "index": true, "caseSensitive": void 0, "module": "/build/routes/search/index-GR6Z5ACE.js", "imports": ["/build/_shared/chunk-WIDGUSSG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/signin/email": { "id": "routes/signin/email", "parentId": "root", "path": "signin/email", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/signin/email-IMAXDQWP.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/signin/index": { "id": "routes/signin/index", "parentId": "root", "path": "signin", "index": true, "caseSensitive": void 0, "module": "/build/routes/signin/index-CDETEQLI.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/signup": { "id": "routes/signup", "parentId": "root", "path": "signup", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/signup-ALXSMUM3.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/video/$xid": { "id": "routes/video/$xid", "parentId": "root", "path": "video/:xid", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/video/$xid-LTNP73HA.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-E89EBC35.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/playlist/$collection.$page": {
    id: "routes/playlist/$collection.$page",
    parentId: "root",
    path: "playlist/:collection/:page",
    index: void 0,
    caseSensitive: void 0,
    module: collection_page_exports
  },
  "routes/$country.topic.$xid.$page": {
    id: "routes/$country.topic.$xid.$page",
    parentId: "root",
    path: ":country/topic/:xid/:page",
    index: void 0,
    caseSensitive: void 0,
    module: country_topic_xid_page_exports
  },
  "routes/search/$query.$searchPage": {
    id: "routes/search/$query.$searchPage",
    parentId: "root",
    path: "search/:query/:searchPage",
    index: void 0,
    caseSensitive: void 0,
    module: query_searchPage_exports
  },
  "routes/register/validation_code": {
    id: "routes/register/validation_code",
    parentId: "root",
    path: "register/validation_code",
    index: void 0,
    caseSensitive: void 0,
    module: validation_code_exports
  },
  "routes/legal/usprivacy.notice": {
    id: "routes/legal/usprivacy.notice",
    parentId: "root",
    path: "legal/usprivacy/notice",
    index: void 0,
    caseSensitive: void 0,
    module: usprivacy_notice_exports
  },
  "routes/playlist/$collection": {
    id: "routes/playlist/$collection",
    parentId: "root",
    path: "playlist/:collection",
    index: void 0,
    caseSensitive: void 0,
    module: collection_exports
  },
  "routes/$country.topic.$xid": {
    id: "routes/$country.topic.$xid",
    parentId: "root",
    path: ":country/topic/:xid",
    index: void 0,
    caseSensitive: void 0,
    module: country_topic_xid_exports
  },
  "routes/password/reinforce": {
    id: "routes/password/reinforce",
    parentId: "root",
    path: "password/reinforce",
    index: void 0,
    caseSensitive: void 0,
    module: reinforce_exports
  },
  "routes/register/activate": {
    id: "routes/register/activate",
    parentId: "root",
    path: "register/activate",
    index: void 0,
    caseSensitive: void 0,
    module: activate_exports
  },
  "routes/password/recover": {
    id: "routes/password/recover",
    parentId: "root",
    path: "password/recover",
    index: void 0,
    caseSensitive: void 0,
    module: recover_exports
  },
  "routes/legal/usprivacy": {
    id: "routes/legal/usprivacy",
    parentId: "root",
    path: "legal/usprivacy",
    index: void 0,
    caseSensitive: void 0,
    module: usprivacy_exports
  },
  "routes/password/reset": {
    id: "routes/password/reset",
    parentId: "root",
    path: "password/reset",
    index: void 0,
    caseSensitive: void 0,
    module: reset_exports
  },
  "routes/search/$query": {
    id: "routes/search/$query",
    parentId: "root",
    path: "search/:query",
    index: void 0,
    caseSensitive: void 0,
    module: query_exports
  },
  "routes/search/index": {
    id: "routes/search/index",
    parentId: "root",
    path: "search",
    index: true,
    caseSensitive: void 0,
    module: search_exports
  },
  "routes/signin/email": {
    id: "routes/signin/email",
    parentId: "root",
    path: "signin/email",
    index: void 0,
    caseSensitive: void 0,
    module: email_exports
  },
  "routes/signin/index": {
    id: "routes/signin/index",
    parentId: "root",
    path: "signin",
    index: true,
    caseSensitive: void 0,
    module: signin_exports
  },
  "routes/video/$xid": {
    id: "routes/video/$xid",
    parentId: "root",
    path: "video/:xid",
    index: void 0,
    caseSensitive: void 0,
    module: xid_exports
  },
  "routes/$country": {
    id: "routes/$country",
    parentId: "root",
    path: ":country",
    index: void 0,
    caseSensitive: void 0,
    module: country_exports
  },
  "routes/notfound": {
    id: "routes/notfound",
    parentId: "root",
    path: "notfound",
    index: void 0,
    caseSensitive: void 0,
    module: notfound_exports
  },
  "routes/signup": {
    id: "routes/signup",
    parentId: "root",
    path: "signup",
    index: void 0,
    caseSensitive: void 0,
    module: signup_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
var app = (0, import_express.default)();
app.use((0, import_compression.default)());
app.disable("x-powered-by");
app.use("/build", import_express.default.static("public/build", { immutable: true, maxAge: "1y" }));
app.use(import_express.default.static("public", { maxAge: "1h" }));
app.use((0, import_morgan.default)("tiny"));
app.all("*", (0, import_express2.createRequestHandler)({
  build: server_build_exports,
  mode: "development"
}));
var port = process.env.PORT || 3e3;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
/**
 * @remix-run/node v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6QzpcXFVzZXJzXFxQaHVyeVxcRG9jdW1lbnRzXFxkZXZcXHRlc3QtcmVtaXgtcm91dGVyXFxhcHBcXHJvb3QudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcUGh1cnlcXERvY3VtZW50c1xcZGV2XFx0ZXN0LXJlbWl4LXJvdXRlclxcYXBwXFxyb3V0ZXNcXHBsYXlsaXN0XFwkY29sbGVjdGlvbi4kcGFnZS50c3giLCAicm91dGU6QzpcXFVzZXJzXFxQaHVyeVxcRG9jdW1lbnRzXFxkZXZcXHRlc3QtcmVtaXgtcm91dGVyXFxhcHBcXHJvdXRlc1xcJGNvdW50cnkudG9waWMuJHhpZC4kcGFnZS50c3giLCAicm91dGU6QzpcXFVzZXJzXFxQaHVyeVxcRG9jdW1lbnRzXFxkZXZcXHRlc3QtcmVtaXgtcm91dGVyXFxhcHBcXHJvdXRlc1xcc2VhcmNoXFwkcXVlcnkuJHNlYXJjaFBhZ2UudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcUGh1cnlcXERvY3VtZW50c1xcZGV2XFx0ZXN0LXJlbWl4LXJvdXRlclxcYXBwXFxyb3V0ZXNcXHJlZ2lzdGVyXFx2YWxpZGF0aW9uX2NvZGUudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcUGh1cnlcXERvY3VtZW50c1xcZGV2XFx0ZXN0LXJlbWl4LXJvdXRlclxcYXBwXFxyb3V0ZXNcXGxlZ2FsXFx1c3ByaXZhY3kubm90aWNlLnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXFBodXJ5XFxEb2N1bWVudHNcXGRldlxcdGVzdC1yZW1peC1yb3V0ZXJcXGFwcFxccm91dGVzXFxwbGF5bGlzdFxcJGNvbGxlY3Rpb24udHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcUGh1cnlcXERvY3VtZW50c1xcZGV2XFx0ZXN0LXJlbWl4LXJvdXRlclxcYXBwXFxyb3V0ZXNcXCRjb3VudHJ5LnRvcGljLiR4aWQudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcUGh1cnlcXERvY3VtZW50c1xcZGV2XFx0ZXN0LXJlbWl4LXJvdXRlclxcYXBwXFxyb3V0ZXNcXHBhc3N3b3JkXFxyZWluZm9yY2UudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcUGh1cnlcXERvY3VtZW50c1xcZGV2XFx0ZXN0LXJlbWl4LXJvdXRlclxcYXBwXFxyb3V0ZXNcXHJlZ2lzdGVyXFxhY3RpdmF0ZS50c3giLCAicm91dGU6QzpcXFVzZXJzXFxQaHVyeVxcRG9jdW1lbnRzXFxkZXZcXHRlc3QtcmVtaXgtcm91dGVyXFxhcHBcXHJvdXRlc1xccGFzc3dvcmRcXHJlY292ZXIudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcUGh1cnlcXERvY3VtZW50c1xcZGV2XFx0ZXN0LXJlbWl4LXJvdXRlclxcYXBwXFxyb3V0ZXNcXGxlZ2FsXFx1c3ByaXZhY3kudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcUGh1cnlcXERvY3VtZW50c1xcZGV2XFx0ZXN0LXJlbWl4LXJvdXRlclxcYXBwXFxyb3V0ZXNcXHBhc3N3b3JkXFxyZXNldC50c3giLCAicm91dGU6QzpcXFVzZXJzXFxQaHVyeVxcRG9jdW1lbnRzXFxkZXZcXHRlc3QtcmVtaXgtcm91dGVyXFxhcHBcXHJvdXRlc1xcc2VhcmNoXFwkcXVlcnkudHN4IiwgIi4uL2FwcC9yb3V0ZXMvc2VhcmNoLyRxdWVyeS4kc2VhcmNoUGFnZS50c3giLCAicm91dGU6QzpcXFVzZXJzXFxQaHVyeVxcRG9jdW1lbnRzXFxkZXZcXHRlc3QtcmVtaXgtcm91dGVyXFxhcHBcXHJvdXRlc1xcc2VhcmNoXFxpbmRleC50c3giLCAicm91dGU6QzpcXFVzZXJzXFxQaHVyeVxcRG9jdW1lbnRzXFxkZXZcXHRlc3QtcmVtaXgtcm91dGVyXFxhcHBcXHJvdXRlc1xcc2lnbmluXFxlbWFpbC50c3giLCAicm91dGU6QzpcXFVzZXJzXFxQaHVyeVxcRG9jdW1lbnRzXFxkZXZcXHRlc3QtcmVtaXgtcm91dGVyXFxhcHBcXHJvdXRlc1xcc2lnbmluXFxpbmRleC50c3giLCAicm91dGU6QzpcXFVzZXJzXFxQaHVyeVxcRG9jdW1lbnRzXFxkZXZcXHRlc3QtcmVtaXgtcm91dGVyXFxhcHBcXHJvdXRlc1xcdmlkZW9cXCR4aWQudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcUGh1cnlcXERvY3VtZW50c1xcZGV2XFx0ZXN0LXJlbWl4LXJvdXRlclxcYXBwXFxyb3V0ZXNcXCRjb3VudHJ5LnRzeCIsICIuLi9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXFBodXJ5XFxEb2N1bWVudHNcXGRldlxcdGVzdC1yZW1peC1yb3V0ZXJcXGFwcFxccm91dGVzXFxub3Rmb3VuZC50c3giLCAicm91dGU6QzpcXFVzZXJzXFxQaHVyeVxcRG9jdW1lbnRzXFxkZXZcXHRlc3QtcmVtaXgtcm91dGVyXFxhcHBcXHJvdXRlc1xcc2lnbnVwLnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXFBodXJ5XFxEb2N1bWVudHNcXGRldlxcdGVzdC1yZW1peC1yb3V0ZXJcXGFwcFxccm91dGVzXFxpbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4zLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4zLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjMuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwiY29tcHJlc3Npb25cIjtcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9leHByZXNzXCI7XG5pbXBvcnQgKiBhcyBzZXJ2ZXJCdWlsZCBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcblxuLy8gaHR0cDovL2V4cHJlc3Nqcy5jb20vZW4vYWR2YW5jZWQvYmVzdC1wcmFjdGljZS1zZWN1cml0eS5odG1sI2F0LWEtbWluaW11bS1kaXNhYmxlLXgtcG93ZXJlZC1ieS1oZWFkZXJcbmFwcC5kaXNhYmxlKFwieC1wb3dlcmVkLWJ5XCIpO1xuXG4vLyBSZW1peCBmaW5nZXJwcmludHMgaXRzIGFzc2V0cyBzbyB3ZSBjYW4gY2FjaGUgZm9yZXZlci5cbmFwcC51c2UoXG4gIFwiL2J1aWxkXCIsXG4gIGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgaW1tdXRhYmxlOiB0cnVlLCBtYXhBZ2U6IFwiMXlcIiB9KVxuKTtcblxuLy8gRXZlcnl0aGluZyBlbHNlIChsaWtlIGZhdmljb24uaWNvKSBpcyBjYWNoZWQgZm9yIGFuIGhvdXIuIFlvdSBtYXkgd2FudCB0byBiZVxuLy8gbW9yZSBhZ2dyZXNzaXZlIHdpdGggdGhpcyBjYWNoaW5nLlxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhcInB1YmxpY1wiLCB7IG1heEFnZTogXCIxaFwiIH0pKTtcblxuYXBwLnVzZShtb3JnYW4oXCJ0aW55XCIpKTtcblxuYXBwLmFsbChcbiAgXCIqXCIsXG4gIGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcbiAgICBidWlsZDogc2VydmVyQnVpbGQsXG4gICAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG4gIH0pXG4pO1xuXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYEV4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFBodXJ5XFxcXERvY3VtZW50c1xcXFxkZXZcXFxcdGVzdC1yZW1peC1yb3V0ZXJcXFxcYXBwXFxcXGVudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcUGh1cnlcXFxcRG9jdW1lbnRzXFxcXGRldlxcXFx0ZXN0LXJlbWl4LXJvdXRlclxcXFxhcHBcXFxccm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcUGh1cnlcXFxcRG9jdW1lbnRzXFxcXGRldlxcXFx0ZXN0LXJlbWl4LXJvdXRlclxcXFxhcHBcXFxccm91dGVzXFxcXHBsYXlsaXN0XFxcXCRjb2xsZWN0aW9uLiRwYWdlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxQaHVyeVxcXFxEb2N1bWVudHNcXFxcZGV2XFxcXHRlc3QtcmVtaXgtcm91dGVyXFxcXGFwcFxcXFxyb3V0ZXNcXFxcJGNvdW50cnkudG9waWMuJHhpZC4kcGFnZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcUGh1cnlcXFxcRG9jdW1lbnRzXFxcXGRldlxcXFx0ZXN0LXJlbWl4LXJvdXRlclxcXFxhcHBcXFxccm91dGVzXFxcXHNlYXJjaFxcXFwkcXVlcnkuJHNlYXJjaFBhZ2UudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFBodXJ5XFxcXERvY3VtZW50c1xcXFxkZXZcXFxcdGVzdC1yZW1peC1yb3V0ZXJcXFxcYXBwXFxcXHJvdXRlc1xcXFxyZWdpc3RlclxcXFx2YWxpZGF0aW9uX2NvZGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFBodXJ5XFxcXERvY3VtZW50c1xcXFxkZXZcXFxcdGVzdC1yZW1peC1yb3V0ZXJcXFxcYXBwXFxcXHJvdXRlc1xcXFxsZWdhbFxcXFx1c3ByaXZhY3kubm90aWNlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxQaHVyeVxcXFxEb2N1bWVudHNcXFxcZGV2XFxcXHRlc3QtcmVtaXgtcm91dGVyXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGxheWxpc3RcXFxcJGNvbGxlY3Rpb24udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFBodXJ5XFxcXERvY3VtZW50c1xcXFxkZXZcXFxcdGVzdC1yZW1peC1yb3V0ZXJcXFxcYXBwXFxcXHJvdXRlc1xcXFwkY291bnRyeS50b3BpYy4keGlkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxQaHVyeVxcXFxEb2N1bWVudHNcXFxcZGV2XFxcXHRlc3QtcmVtaXgtcm91dGVyXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFzc3dvcmRcXFxccmVpbmZvcmNlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxQaHVyeVxcXFxEb2N1bWVudHNcXFxcZGV2XFxcXHRlc3QtcmVtaXgtcm91dGVyXFxcXGFwcFxcXFxyb3V0ZXNcXFxccmVnaXN0ZXJcXFxcYWN0aXZhdGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxQaHVyeVxcXFxEb2N1bWVudHNcXFxcZGV2XFxcXHRlc3QtcmVtaXgtcm91dGVyXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFzc3dvcmRcXFxccmVjb3Zlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFBodXJ5XFxcXERvY3VtZW50c1xcXFxkZXZcXFxcdGVzdC1yZW1peC1yb3V0ZXJcXFxcYXBwXFxcXHJvdXRlc1xcXFxsZWdhbFxcXFx1c3ByaXZhY3kudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxQaHVyeVxcXFxEb2N1bWVudHNcXFxcZGV2XFxcXHRlc3QtcmVtaXgtcm91dGVyXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFzc3dvcmRcXFxccmVzZXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEzIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxQaHVyeVxcXFxEb2N1bWVudHNcXFxcZGV2XFxcXHRlc3QtcmVtaXgtcm91dGVyXFxcXGFwcFxcXFxyb3V0ZXNcXFxcc2VhcmNoXFxcXCRxdWVyeS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFBodXJ5XFxcXERvY3VtZW50c1xcXFxkZXZcXFxcdGVzdC1yZW1peC1yb3V0ZXJcXFxcYXBwXFxcXHJvdXRlc1xcXFxzZWFyY2hcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE1IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxQaHVyeVxcXFxEb2N1bWVudHNcXFxcZGV2XFxcXHRlc3QtcmVtaXgtcm91dGVyXFxcXGFwcFxcXFxyb3V0ZXNcXFxcc2lnbmluXFxcXGVtYWlsLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcUGh1cnlcXFxcRG9jdW1lbnRzXFxcXGRldlxcXFx0ZXN0LXJlbWl4LXJvdXRlclxcXFxhcHBcXFxccm91dGVzXFxcXHNpZ25pblxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTcgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFBodXJ5XFxcXERvY3VtZW50c1xcXFxkZXZcXFxcdGVzdC1yZW1peC1yb3V0ZXJcXFxcYXBwXFxcXHJvdXRlc1xcXFx2aWRlb1xcXFwkeGlkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxOCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcUGh1cnlcXFxcRG9jdW1lbnRzXFxcXGRldlxcXFx0ZXN0LXJlbWl4LXJvdXRlclxcXFxhcHBcXFxccm91dGVzXFxcXCRjb3VudHJ5LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxOSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcUGh1cnlcXFxcRG9jdW1lbnRzXFxcXGRldlxcXFx0ZXN0LXJlbWl4LXJvdXRlclxcXFxhcHBcXFxccm91dGVzXFxcXG5vdGZvdW5kLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyMCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcUGh1cnlcXFxcRG9jdW1lbnRzXFxcXGRldlxcXFx0ZXN0LXJlbWl4LXJvdXRlclxcXFxhcHBcXFxccm91dGVzXFxcXHNpZ251cC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjEgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFBodXJ5XFxcXERvY3VtZW50c1xcXFxkZXZcXFxcdGVzdC1yZW1peC1yb3V0ZXJcXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL3BsYXlsaXN0LyRjb2xsZWN0aW9uLiRwYWdlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wbGF5bGlzdC8kY29sbGVjdGlvbi4kcGFnZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwbGF5bGlzdC86Y29sbGVjdGlvbi86cGFnZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvJGNvdW50cnkudG9waWMuJHhpZC4kcGFnZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvJGNvdW50cnkudG9waWMuJHhpZC4kcGFnZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCI6Y291bnRyeS90b3BpYy86eGlkLzpwYWdlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9zZWFyY2gvJHF1ZXJ5LiRzZWFyY2hQYWdlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zZWFyY2gvJHF1ZXJ5LiRzZWFyY2hQYWdlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNlYXJjaC86cXVlcnkvOnNlYXJjaFBhZ2VcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL3JlZ2lzdGVyL3ZhbGlkYXRpb25fY29kZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcmVnaXN0ZXIvdmFsaWRhdGlvbl9jb2RlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInJlZ2lzdGVyL3ZhbGlkYXRpb25fY29kZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvbGVnYWwvdXNwcml2YWN5Lm5vdGljZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbGVnYWwvdXNwcml2YWN5Lm5vdGljZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsZWdhbC91c3ByaXZhY3kvbm90aWNlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9wbGF5bGlzdC8kY29sbGVjdGlvblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcGxheWxpc3QvJGNvbGxlY3Rpb25cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicGxheWxpc3QvOmNvbGxlY3Rpb25cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzLyRjb3VudHJ5LnRvcGljLiR4aWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzLyRjb3VudHJ5LnRvcGljLiR4aWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiOmNvdW50cnkvdG9waWMvOnhpZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvcGFzc3dvcmQvcmVpbmZvcmNlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wYXNzd29yZC9yZWluZm9yY2VcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicGFzc3dvcmQvcmVpbmZvcmNlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9LFxuICBcInJvdXRlcy9yZWdpc3Rlci9hY3RpdmF0ZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcmVnaXN0ZXIvYWN0aXZhdGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicmVnaXN0ZXIvYWN0aXZhdGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH0sXG4gIFwicm91dGVzL3Bhc3N3b3JkL3JlY292ZXJcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Bhc3N3b3JkL3JlY292ZXJcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicGFzc3dvcmQvcmVjb3ZlclwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMFxuICAgIH0sXG4gIFwicm91dGVzL2xlZ2FsL3VzcHJpdmFjeVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbGVnYWwvdXNwcml2YWN5XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxlZ2FsL3VzcHJpdmFjeVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMVxuICAgIH0sXG4gIFwicm91dGVzL3Bhc3N3b3JkL3Jlc2V0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wYXNzd29yZC9yZXNldFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwYXNzd29yZC9yZXNldFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMlxuICAgIH0sXG4gIFwicm91dGVzL3NlYXJjaC8kcXVlcnlcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NlYXJjaC8kcXVlcnlcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2VhcmNoLzpxdWVyeVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxM1xuICAgIH0sXG4gIFwicm91dGVzL3NlYXJjaC9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2VhcmNoL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNlYXJjaFwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTRcbiAgICB9LFxuICBcInJvdXRlcy9zaWduaW4vZW1haWxcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NpZ25pbi9lbWFpbFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzaWduaW4vZW1haWxcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTVcbiAgICB9LFxuICBcInJvdXRlcy9zaWduaW4vaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NpZ25pbi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzaWduaW5cIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE2XG4gICAgfSxcbiAgXCJyb3V0ZXMvdmlkZW8vJHhpZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvdmlkZW8vJHhpZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ2aWRlby86eGlkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE3XG4gICAgfSxcbiAgXCJyb3V0ZXMvJGNvdW50cnlcIjoge1xuICAgICAgaWQ6IFwicm91dGVzLyRjb3VudHJ5XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIjpjb3VudHJ5XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE4XG4gICAgfSxcbiAgXCJyb3V0ZXMvbm90Zm91bmRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL25vdGZvdW5kXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm5vdGZvdW5kXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE5XG4gICAgfSxcbiAgXCJyb3V0ZXMvc2lnbnVwXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaWdudXBcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2lnbnVwXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTIwXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyMVxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgbGV0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiAoe1xuICBjaGFyc2V0OiBcInV0Zi04XCIsXG4gIHRpdGxlOiBcIk5ldyBSZW1peCBBcHBcIixcbiAgdmlld3BvcnQ6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBqc29uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcclxuaW1wb3J0IHsgcmVkaXJlY3QsIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCB7IGNvbGxlY3Rpb24sIHBhZ2UgfSA9IHBhcmFtcztcclxuXHJcbiAgaWYgKGNvbGxlY3Rpb24pIHtcclxuICAgIHJldHVybiBqc29uKHsgY29sbGVjdGlvbiwgcGFnZSB9KTtcclxuICB9XHJcbiAgcmV0dXJuIHJlZGlyZWN0KFwiL1wiKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIGNvbnN0IHsgY29sbGVjdGlvbiwgcGFnZSB9ID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwic3lzdGVtLXVpLCBzYW5zLXNlcmlmXCIsIGxpbmVIZWlnaHQ6IFwiMS40XCIgfX0+XHJcbiAgICAgIDxoMT5cclxuICAgICAgICBJdCdzIHRoZSBwbGF5bGlzdCBwYWdlIHJvdXRlIC9wbGF5bGlzdC97Y29sbGVjdGlvbn0ve3BhZ2V9XHJcbiAgICAgIDwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBqc29uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcclxuaW1wb3J0IHsgcmVkaXJlY3QsIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCB7IHhpZCwgY291bnRyeSwgcGFnZSB9ID0gcGFyYW1zO1xyXG5cclxuICBpZiAoeGlkICYmIGNvdW50cnkgJiYgcGFnZSkge1xyXG4gICAgcmV0dXJuIGpzb24oeyB4aWQsIGNvdW50cnksIHBhZ2UgfSk7XHJcbiAgfVxyXG4gIHJldHVybiByZWRpcmVjdChcIi9cIik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcclxuICBjb25zdCB7IHhpZCwgY291bnRyeSwgcGFnZSB9ID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwic3lzdGVtLXVpLCBzYW5zLXNlcmlmXCIsIGxpbmVIZWlnaHQ6IFwiMS40XCIgfX0+XHJcbiAgICAgIDxoMT5cclxuICAgICAgICBJdCdzIHRoZSB0b3BpYyBwYWdlIHJvdXRlIHtjb3VudHJ5fS90b3BpYy97eGlkfS97cGFnZX1cclxuICAgICAgPC9oMT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IGpzb24sIExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgcmV0dXJuIGpzb24oeyBxdWVyeTogcGFyYW1zLnF1ZXJ5LCBzZWFyY2hQYWdlOiBwYXJhbXMuc2VhcmNoUGFnZSB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIGNvbnN0IGxvYWRlckRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgcXVlcnkgPSBsb2FkZXJEYXRhPy5xdWVyeTtcclxuICBjb25zdCBzZWFyY2hQYWdlID0gbG9hZGVyRGF0YT8uc2VhcmNoUGFnZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgZm9udEZhbWlseTogXCJzeXN0ZW0tdWksIHNhbnMtc2VyaWZcIiwgbGluZUhlaWdodDogXCIxLjRcIiB9fT5cclxuICAgICAgPGgxPlxyXG4gICAgICAgIEl0J3MgdGhlIHNlYXJjaCBxdWVyeSByb3V0ZSAvc2VhcmNoL3txdWVyeX0ve3NlYXJjaFBhZ2V9XHJcbiAgICAgIDwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBqc29uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcclxuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgaWYgKHJlcXVlc3QudXJsLmluY2x1ZGVzKFwiYXV0aGVudGljYXRlZFwiKSkge1xyXG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL2ZyXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGpzb24oe30pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgZm9udEZhbWlseTogXCJzeXN0ZW0tdWksIHNhbnMtc2VyaWZcIiwgbGluZUhlaWdodDogXCIxLjRcIiB9fT5cclxuICAgICAgPGgxPkl0J3MgdGhlIHJlZ2lzdGVyIHZhbGlkYXRpb24gY29kZSByb3V0ZSAvcmVnaXN0ZXIvdmFsaWRhdGlvbl9jb2RlPC9oMT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IGpzb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xyXG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBpZiAoIXJlcXVlc3QudXJsLmluY2x1ZGVzKFwiY2NwYVwiKSkge1xyXG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL2ZyXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGpzb24oe30pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgZm9udEZhbWlseTogXCJzeXN0ZW0tdWksIHNhbnMtc2VyaWZcIiwgbGluZUhlaWdodDogXCIxLjRcIiB9fT5cclxuICAgICAgPGgxPkl0J3MgdGhlIHVzcHJpdmFjeSBub3RpY2Ugcm91dGUgL2xlZ2FsL3VzcHJpdmFjeS9ub3RpY2U8L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsganNvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XHJcbmltcG9ydCB7IHJlZGlyZWN0LCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc3QgeyBjb2xsZWN0aW9uIH0gPSBwYXJhbXM7XHJcblxyXG4gIGlmIChjb2xsZWN0aW9uKSB7XHJcbiAgICByZXR1cm4ganNvbih7IGNvbGxlY3Rpb24gfSk7XHJcbiAgfVxyXG4gIHJldHVybiByZWRpcmVjdChcIi9cIik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcclxuICBjb25zdCB7IGNvbGxlY3Rpb24gfSA9IHVzZUxvYWRlckRhdGEoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBmb250RmFtaWx5OiBcInN5c3RlbS11aSwgc2Fucy1zZXJpZlwiLCBsaW5lSGVpZ2h0OiBcIjEuNFwiIH19PlxyXG4gICAgICA8aDE+SXQncyB0aGUgcGxheWxpc3QgcGFnZSByb3V0ZSAvcGxheWxpc3Qve2NvbGxlY3Rpb259PC9oMT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IGpzb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xyXG5pbXBvcnQgeyByZWRpcmVjdCwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IHsgeGlkLCBjb3VudHJ5IH0gPSBwYXJhbXM7XHJcblxyXG4gIGlmICh4aWQgJiYgY291bnRyeSkge1xyXG4gICAgcmV0dXJuIGpzb24oeyB4aWQsIGNvdW50cnkgfSk7XHJcbiAgfVxyXG4gIHJldHVybiByZWRpcmVjdChcIi9cIik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcclxuICBjb25zdCB7IHhpZCwgY291bnRyeSB9ID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwic3lzdGVtLXVpLCBzYW5zLXNlcmlmXCIsIGxpbmVIZWlnaHQ6IFwiMS40XCIgfX0+XHJcbiAgICAgIDxoMT5cclxuICAgICAgICBJdCdzIHRoZSB0b3BpYyBwYWdlIHJvdXRlIHtjb3VudHJ5fS90b3BpYy97eGlkfVxyXG4gICAgICA8L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsganNvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XHJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGlmIChyZXF1ZXN0LnVybC5pbmNsdWRlcyhcImF1dGhlbnRpY2F0ZWRcIikpIHtcclxuICAgIHJldHVybiByZWRpcmVjdChcIi9mclwiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBqc29uKHt9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwic3lzdGVtLXVpLCBzYW5zLXNlcmlmXCIsIGxpbmVIZWlnaHQ6IFwiMS40XCIgfX0+XHJcbiAgICAgIDxoMT5JdCdzIHRoZSBwYXNzd29yZCByZWluZm9yY2UgY29kZSByb3V0ZSAvcGFzc3dvcmQvcmVpbmZvcmNlPC9oMT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xyXG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCBxdWVyeSA9IHJlcXVlc3QudXJsLnNwbGl0KFwiP1wiKVsxXTtcclxuICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5KTtcclxuXHJcbiAgY29uc3QgcmVkaXJlY3RVcmkgPSBzZWFyY2hQYXJhbXMuZ2V0KFwicmVkaXJlY3RfdXJpXCIpO1xyXG4gIGlmIChyZWRpcmVjdFVyaSkge1xyXG4gICAgcmV0dXJuIHJlZGlyZWN0KHJlZGlyZWN0VXJpKTtcclxuICB9XHJcbiAgcmV0dXJuIHJlZGlyZWN0KFwiL1wiKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwic3lzdGVtLXVpLCBzYW5zLXNlcmlmXCIsIGxpbmVIZWlnaHQ6IFwiMS40XCIgfX0+XHJcbiAgICAgIDxoMT5JdCdzIHRoZSByZWdpc3RlciBhY3RpdmF0ZSByb3V0ZSAvcmVnaXN0ZXIvYWN0aXZhdGU8L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsganNvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XHJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGlmIChyZXF1ZXN0LnVybC5pbmNsdWRlcyhcImF1dGhlbnRpY2F0ZWRcIikpIHtcclxuICAgIHJldHVybiByZWRpcmVjdChcIi9mclwiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBqc29uKHt9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwic3lzdGVtLXVpLCBzYW5zLXNlcmlmXCIsIGxpbmVIZWlnaHQ6IFwiMS40XCIgfX0+XHJcbiAgICAgIDxoMT5JdCdzIHRoZSBwYXNzd29yZCByZWNvdmVyIGNvZGUgcm91dGUgL3Bhc3N3b3JkL3JlY292ZXI8L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsganNvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XHJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGlmICghcmVxdWVzdC51cmwuaW5jbHVkZXMoXCJjY3BhXCIpKSB7XHJcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvZnJcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ganNvbih7fSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBmb250RmFtaWx5OiBcInN5c3RlbS11aSwgc2Fucy1zZXJpZlwiLCBsaW5lSGVpZ2h0OiBcIjEuNFwiIH19PlxyXG4gICAgICA8aDE+SXQncyB0aGUgdXNwcml2YWN5IHJvdXRlIC9sZWdhbC91c3ByaXZhY3k8L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsganNvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XHJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGlmIChyZXF1ZXN0LnVybC5pbmNsdWRlcyhcImF1dGhlbnRpY2F0ZWRcIikpIHtcclxuICAgIHJldHVybiByZWRpcmVjdChcIi9mclwiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBqc29uKHt9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwic3lzdGVtLXVpLCBzYW5zLXNlcmlmXCIsIGxpbmVIZWlnaHQ6IFwiMS40XCIgfX0+XHJcbiAgICAgIDxoMT5JdCdzIHRoZSBwYXNzd29yZCByZXNldCBjb2RlIHJvdXRlIC9wYXNzd29yZC9yZXNldDwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBqc29uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLyRxdWVyeS4kc2VhcmNoUGFnZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIHJldHVybiBqc29uKHsgcXVlcnk6IHBhcmFtcy5xdWVyeSB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcclxuIiwgImltcG9ydCB7IGpzb24sIExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgcmV0dXJuIGpzb24oeyBxdWVyeTogcGFyYW1zLnF1ZXJ5LCBzZWFyY2hQYWdlOiBwYXJhbXMuc2VhcmNoUGFnZSB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIGNvbnN0IGxvYWRlckRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgcXVlcnkgPSBsb2FkZXJEYXRhPy5xdWVyeTtcclxuICBjb25zdCBzZWFyY2hQYWdlID0gbG9hZGVyRGF0YT8uc2VhcmNoUGFnZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgZm9udEZhbWlseTogXCJzeXN0ZW0tdWksIHNhbnMtc2VyaWZcIiwgbGluZUhlaWdodDogXCIxLjRcIiB9fT5cclxuICAgICAgPGgxPlxyXG4gICAgICAgIEl0J3MgdGhlIHNlYXJjaCBxdWVyeSByb3V0ZSAvc2VhcmNoL3txdWVyeX0ve3NlYXJjaFBhZ2V9XHJcbiAgICAgIDwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgU2VhcmNoIGZyb20gXCIuLyRxdWVyeS4kc2VhcmNoUGFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xyXG4iLCAiaW1wb3J0IHsganNvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XHJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGlmIChyZXF1ZXN0LnVybC5pbmNsdWRlcyhcImF1dGhlbnRpY2F0ZWRcIikpIHtcclxuICAgIHJldHVybiByZWRpcmVjdChcIi9mclwiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBqc29uKHt9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwic3lzdGVtLXVpLCBzYW5zLXNlcmlmXCIsIGxpbmVIZWlnaHQ6IFwiMS40XCIgfX0+XHJcbiAgICAgIDxoMT5JdCdzIHRoZSBzaWduaW4gZW1haWwgcm91dGUgL3NpZ25pbi9lbWFpbDwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBqc29uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcclxuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgaWYgKHJlcXVlc3QudXJsLmluY2x1ZGVzKFwiYXV0aGVudGljYXRlZFwiKSkge1xyXG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL2ZyXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGpzb24oe30pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgZm9udEZhbWlseTogXCJzeXN0ZW0tdWksIHNhbnMtc2VyaWZcIiwgbGluZUhlaWdodDogXCIxLjRcIiB9fT5cclxuICAgICAgPGgxPkl0J3MgdGhlIHNpZ24gaW4gcm91dGUgL3NpZ25pbjwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBqc29uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcclxuaW1wb3J0IHsgcmVkaXJlY3QsIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCB7IHhpZCB9ID0gcGFyYW1zO1xyXG5cclxuICBpZiAoeGlkKSB7XHJcbiAgICByZXR1cm4ganNvbih7IHhpZCB9KTtcclxuICB9XHJcbiAgcmV0dXJuIHJlZGlyZWN0KFwiL1wiKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIGNvbnN0IHsgeGlkIH0gPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgZm9udEZhbWlseTogXCJzeXN0ZW0tdWksIHNhbnMtc2VyaWZcIiwgbGluZUhlaWdodDogXCIxLjRcIiB9fT5cclxuICAgICAgPGgxPkl0J3MgdGhlIHdhdGNoaW5nIHBhZ2Ugcm91dGUgeW8gL3ZpZGVvL3t4aWR9PC9oMT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IGpzb24sIExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBIb21lQ29tcG9uZW50IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgaWYgKHBhcmFtcy5jb3VudHJ5ICYmIHBhcmFtcy5jb3VudHJ5Lmxlbmd0aCA8IDMpIHtcclxuICAgIHJldHVybiBqc29uKHsgcGFnZTogXCJob21lXCIsIGNvdW50cnk6IHBhcmFtcy5jb3VudHJ5IH0pO1xyXG4gIH1cclxuICByZXR1cm4ganNvbih7IHBhZ2U6IFwiY2hhbm5lbFwiLCBjaGFubmVsOiBwYXJhbXMuY291bnRyeSB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGFubmVsKCkge1xyXG4gIGNvbnN0IGxvYWRlckRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgZm9udEZhbWlseTogXCJzeXN0ZW0tdWksIHNhbnMtc2VyaWZcIiwgbGluZUhlaWdodDogXCIxLjRcIiB9fT5cclxuICAgICAgPGgxPkl0J3MgdGhlIGNoYW5uZWwgcm91dGUgL3tsb2FkZXJEYXRhPy5jaGFubmVsfTwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcclxuICBjb25zdCB7IHBhZ2UgfSA9IHVzZUxvYWRlckRhdGEoKTtcclxuXHJcbiAgc3dpdGNoIChwYWdlKSB7XHJcbiAgICBjYXNlIFwiaG9tZVwiOlxyXG4gICAgICByZXR1cm4gPEhvbWVDb21wb25lbnQgLz47XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gPENoYW5uZWwgLz47XHJcbiAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IHJlZGlyZWN0LCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKCkgPT4ge1xuICAvLyBkbyBjb3VudHJ5IGhlcmVcbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2ZyXCIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IGxvYWRlckRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBmb250RmFtaWx5OiBcInN5c3RlbS11aSwgc2Fucy1zZXJpZlwiLCBsaW5lSGVpZ2h0OiBcIjEuNFwiIH19PlxuICAgICAgPGgxPkl0J3MgdGhlIGluZGV4IHJvdXRlIC97bG9hZGVyRGF0YT8uY291bnRyeX08L2gxPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xyXG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgLy8gZG8gY291bnRyeSBoZXJlXHJcbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2ZyXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgZm9udEZhbWlseTogXCJzeXN0ZW0tdWksIHNhbnMtc2VyaWZcIiwgbGluZUhlaWdodDogXCIxLjRcIiB9fT5cclxuICAgICAgPGgxPkl0J3MgdGhlIG5vdCBmb3VuZCByb3V0ZSAvbm90Zm91bmQ8L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsganNvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XHJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGlmIChyZXF1ZXN0LnVybC5pbmNsdWRlcyhcImF1dGhlbnRpY2F0ZWRcIikpIHtcclxuICAgIHJldHVybiByZWRpcmVjdChcIi9mclwiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBqc29uKHt9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwic3lzdGVtLXVpLCBzYW5zLXNlcmlmXCIsIGxpbmVIZWlnaHQ6IFwiMS40XCIgfX0+XHJcbiAgICAgIDxoMT5JdCdzIHRoZSBzaWduIHVwIHJvdXRlIC9zaWdudXA8L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyByZWRpcmVjdCwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICgpID0+IHtcbiAgLy8gZG8gY291bnRyeSBoZXJlXG4gIHJldHVybiByZWRpcmVjdChcIi9mclwiKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBsb2FkZXJEYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgZm9udEZhbWlseTogXCJzeXN0ZW0tdWksIHNhbnMtc2VyaWZcIiwgbGluZUhlaWdodDogXCIxLjRcIiB9fT5cbiAgICAgIDxoMT5JdCdzIHRoZSBpbmRleCByb3V0ZSAve2xvYWRlckRhdGE/LmNvdW50cnl9PC9oMT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOidlODllYmMzNScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtWFdDWjdJWjcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVQ0V0paUUJSLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1ZQjdNQ0pMWi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzLyRjb3VudHJ5Jzp7J2lkJzoncm91dGVzLyRjb3VudHJ5JywncGFyZW50SWQnOidyb290JywncGF0aCc6Jzpjb3VudHJ5JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzLyRjb3VudHJ5LVBNTlRSNVdQLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1DU1Y3V0tCMy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy8kY291bnRyeS50b3BpYy4keGlkJzp7J2lkJzoncm91dGVzLyRjb3VudHJ5LnRvcGljLiR4aWQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonOmNvdW50cnkvdG9waWMvOnhpZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy8kY291bnRyeS50b3BpYy4keGlkLVc1Rkw3SzRILmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy8kY291bnRyeS50b3BpYy4keGlkLiRwYWdlJzp7J2lkJzoncm91dGVzLyRjb3VudHJ5LnRvcGljLiR4aWQuJHBhZ2UnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonOmNvdW50cnkvdG9waWMvOnhpZC86cGFnZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy8kY291bnRyeS50b3BpYy4keGlkLiRwYWdlLUxLQVlDSkQyLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1CWlZEQkxVSi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQ1NWN1dLQjMuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbGVnYWwvdXNwcml2YWN5Jzp7J2lkJzoncm91dGVzL2xlZ2FsL3VzcHJpdmFjeScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsZWdhbC91c3ByaXZhY3knLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbGVnYWwvdXNwcml2YWN5LURPM01HU0FTLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sZWdhbC91c3ByaXZhY3kubm90aWNlJzp7J2lkJzoncm91dGVzL2xlZ2FsL3VzcHJpdmFjeS5ub3RpY2UnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbGVnYWwvdXNwcml2YWN5L25vdGljZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sZWdhbC91c3ByaXZhY3kubm90aWNlLVdBUVFJREJOLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ub3Rmb3VuZCc6eydpZCc6J3JvdXRlcy9ub3Rmb3VuZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidub3Rmb3VuZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ub3Rmb3VuZC00RU5TTFVERi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcGFzc3dvcmQvcmVjb3Zlcic6eydpZCc6J3JvdXRlcy9wYXNzd29yZC9yZWNvdmVyJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Bhc3N3b3JkL3JlY292ZXInLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcGFzc3dvcmQvcmVjb3Zlci1QNFNLSEpQRC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcGFzc3dvcmQvcmVpbmZvcmNlJzp7J2lkJzoncm91dGVzL3Bhc3N3b3JkL3JlaW5mb3JjZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwYXNzd29yZC9yZWluZm9yY2UnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcGFzc3dvcmQvcmVpbmZvcmNlLTJQV1VNVVNPLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wYXNzd29yZC9yZXNldCc6eydpZCc6J3JvdXRlcy9wYXNzd29yZC9yZXNldCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwYXNzd29yZC9yZXNldCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wYXNzd29yZC9yZXNldC1XWU4zQkFOTi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcGxheWxpc3QvJGNvbGxlY3Rpb24nOnsnaWQnOidyb3V0ZXMvcGxheWxpc3QvJGNvbGxlY3Rpb24nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncGxheWxpc3QvOmNvbGxlY3Rpb24nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcGxheWxpc3QvJGNvbGxlY3Rpb24tNkVLVzNESDcuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3BsYXlsaXN0LyRjb2xsZWN0aW9uLiRwYWdlJzp7J2lkJzoncm91dGVzL3BsYXlsaXN0LyRjb2xsZWN0aW9uLiRwYWdlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3BsYXlsaXN0Lzpjb2xsZWN0aW9uLzpwYWdlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3BsYXlsaXN0LyRjb2xsZWN0aW9uLiRwYWdlLUtIWlA2WTNOLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9yZWdpc3Rlci9hY3RpdmF0ZSc6eydpZCc6J3JvdXRlcy9yZWdpc3Rlci9hY3RpdmF0ZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidyZWdpc3Rlci9hY3RpdmF0ZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9yZWdpc3Rlci9hY3RpdmF0ZS1WNURHSkJWMi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcmVnaXN0ZXIvdmFsaWRhdGlvbl9jb2RlJzp7J2lkJzoncm91dGVzL3JlZ2lzdGVyL3ZhbGlkYXRpb25fY29kZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidyZWdpc3Rlci92YWxpZGF0aW9uX2NvZGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcmVnaXN0ZXIvdmFsaWRhdGlvbl9jb2RlLVpWTjQ0RU9KLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zZWFyY2gvJHF1ZXJ5Jzp7J2lkJzoncm91dGVzL3NlYXJjaC8kcXVlcnknLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2VhcmNoLzpxdWVyeScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zZWFyY2gvJHF1ZXJ5LVc0TTZPSzdQLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1XSURHVVNTRy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zZWFyY2gvJHF1ZXJ5LiRzZWFyY2hQYWdlJzp7J2lkJzoncm91dGVzL3NlYXJjaC8kcXVlcnkuJHNlYXJjaFBhZ2UnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2VhcmNoLzpxdWVyeS86c2VhcmNoUGFnZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zZWFyY2gvJHF1ZXJ5LiRzZWFyY2hQYWdlLUE1NldGQVAzLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1XSURHVVNTRy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zZWFyY2gvaW5kZXgnOnsnaWQnOidyb3V0ZXMvc2VhcmNoL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NlYXJjaCcsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2VhcmNoL2luZGV4LUdSNlo1QUNFLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1XSURHVVNTRy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2lnbmluL2VtYWlsJzp7J2lkJzoncm91dGVzL3NpZ25pbi9lbWFpbCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzaWduaW4vZW1haWwnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2lnbmluL2VtYWlsLUlNQVhEUVdQLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaWduaW4vaW5kZXgnOnsnaWQnOidyb3V0ZXMvc2lnbmluL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NpZ25pbicsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2lnbmluL2luZGV4LUNERVRFUUxJLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaWdudXAnOnsnaWQnOidyb3V0ZXMvc2lnbnVwJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NpZ251cCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaWdudXAtQUxYU01VTTMuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3ZpZGVvLyR4aWQnOnsnaWQnOidyb3V0ZXMvdmlkZW8vJHhpZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOid2aWRlby86eGlkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3ZpZGVvLyR4aWQtTFROUDczSEEuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1FODlFQkMzNS5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyx3QkFBd0I7QUFBQSxNQUNyRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUs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
