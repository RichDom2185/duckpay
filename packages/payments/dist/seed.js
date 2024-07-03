"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/cuid/lib/pad.js
var require_pad = __commonJS({
  "../../node_modules/cuid/lib/pad.js"(exports2, module2) {
    "use strict";
    module2.exports = function pad(num, size) {
      var s = "000000000" + num;
      return s.substr(s.length - size);
    };
  }
});

// ../../node_modules/cuid/lib/fingerprint.js
var require_fingerprint = __commonJS({
  "../../node_modules/cuid/lib/fingerprint.js"(exports2, module2) {
    "use strict";
    var pad = require_pad();
    var os = require("os");
    var padding = 2;
    var pid = pad(process.pid.toString(36), padding);
    var hostname = os.hostname();
    var length = hostname.length;
    var hostId = pad(
      hostname.split("").reduce(function(prev, char) {
        return +prev + char.charCodeAt(0);
      }, +length + 36).toString(36),
      padding
    );
    module2.exports = function fingerprint() {
      return pid + hostId;
    };
  }
});

// ../../node_modules/cuid/lib/getRandomValue.js
var require_getRandomValue = __commonJS({
  "../../node_modules/cuid/lib/getRandomValue.js"(exports2, module2) {
    "use strict";
    var crypto = require("crypto");
    var lim = Math.pow(2, 32) - 1;
    module2.exports = function random() {
      return Math.abs(crypto.randomBytes(4).readInt32BE() / lim);
    };
  }
});

// ../../node_modules/cuid/index.js
var require_cuid = __commonJS({
  "../../node_modules/cuid/index.js"(exports2, module2) {
    "use strict";
    var fingerprint = require_fingerprint();
    var pad = require_pad();
    var getRandomValue = require_getRandomValue();
    var c = 0;
    var blockSize = 4;
    var base = 36;
    var discreteValues = Math.pow(base, blockSize);
    function randomBlock() {
      return pad((getRandomValue() * discreteValues << 0).toString(base), blockSize);
    }
    function safeCounter() {
      c = c < discreteValues ? c : 0;
      c++;
      return c - 1;
    }
    function cuid2() {
      var letter = "c", timestamp = (/* @__PURE__ */ new Date()).getTime().toString(base), counter = pad(safeCounter().toString(base), blockSize), print = fingerprint(), random = randomBlock() + randomBlock();
      return letter + timestamp + counter + print + random;
    }
    cuid2.slug = function slug() {
      var date = (/* @__PURE__ */ new Date()).getTime().toString(36), counter = safeCounter().toString(36).slice(-4), print = fingerprint().slice(0, 1) + fingerprint().slice(-1), random = randomBlock().slice(-2);
      return date.slice(-2) + counter + print + random;
    };
    cuid2.isCuid = function isCuid(stringToCheck) {
      if (typeof stringToCheck !== "string") return false;
      if (stringToCheck.startsWith("c")) return true;
      return false;
    };
    cuid2.isSlug = function isSlug(stringToCheck) {
      if (typeof stringToCheck !== "string") return false;
      var stringLength = stringToCheck.length;
      if (stringLength >= 7 && stringLength <= 10) return true;
      return false;
    };
    cuid2.fingerprint = fingerprint;
    module2.exports = cuid2;
  }
});

// src/seed.ts
var import_cuid = __toESM(require_cuid());

// src/client.ts
var import_client = require("@prisma/client");
var prisma;
if (process.env.NODE_ENV === "production") {
  prisma = new import_client.PrismaClient();
} else {
  let globalWithPrisma = global;
  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new import_client.PrismaClient();
  }
  prisma = globalWithPrisma.prisma;
}
var client_default = prisma;

// src/seed.ts
var accountId = (0, import_cuid.default)();
var DEFAULT_TOKENS = [
  {
    id: (0, import_cuid.default)(),
    accountId,
    amount: 5,
    currency: "SGD"
  },
  {
    id: (0, import_cuid.default)(),
    accountId,
    amount: 10,
    currency: "SGD"
  }
];
(async () => {
  try {
    await Promise.all(
      DEFAULT_TOKENS.map(
        (token) => client_default.token.upsert({
          where: {
            id: token.id
          },
          update: {
            ...token
          },
          create: {
            ...token
          }
        })
      )
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await client_default.$disconnect();
  }
})();
