"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var sitemap_1 = require("sitemap");
var fs_1 = require("fs");
var stream_1 = require("stream");
var axios_1 = require("../src/lib/axios");
var BASE_URL = 'https://www.pitchdeck.design';
var staticRoutes = [
    '/',
    '/pitchdecks',
    '/make-deck',
    '/blog',
    '/template',
    '/generate-terms',
    '/generate-policy'
];
function loadPitches() {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get('/pitch/filter?tag=All')];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data.map(function (pitch) { return "/pitch/".concat(pitch.title); })];
            }
        });
    });
}
function loadTemplates() {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get('/templates/getTemplates')];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data.map(function (template) { return "/template/".concat(template.name); })];
            }
        });
    });
}
function loadTags() {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get('/pitch/tags')];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data.map(function (tag) { return "/tag/".concat(tag); })];
            }
        });
    });
}
function loadCategories() {
    return __awaiter(this, void 0, void 0, function () {
        var categories;
        return __generator(this, function (_a) {
            categories = [
                'seed-round-pitch-deck',
                'series-a-deck',
                'pre-seed-pitch-deck'
            ];
            return [2 /*return*/, categories.map(function (cat) { return "/category/".concat(cat); })];
        });
    });
}
function generateSitemap() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, pitches, templates, tags, categories, allRoutes, links, sitemapStream, xml, writeStream;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, Promise.all([
                        loadPitches(),
                        loadTemplates(),
                        loadTags(),
                        loadCategories()
                    ])];
                case 1:
                    _a = _b.sent(), pitches = _a[0], templates = _a[1], tags = _a[2], categories = _a[3];
                    allRoutes = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], staticRoutes, true), pitches, true), templates, true), tags, true), categories, true);
                    links = allRoutes.map(function (url) { return ({
                        url: url,
                        changefreq: 'weekly',
                        priority: url === '/' ? 1.0 : 0.8
                    }); });
                    sitemapStream = new sitemap_1.SitemapStream({ hostname: BASE_URL });
                    return [4 /*yield*/, (0, sitemap_1.streamToPromise)(stream_1.Readable.from(links).pipe(sitemapStream)).then(function (data) { return data.toString(); })];
                case 2:
                    xml = _b.sent();
                    writeStream = (0, fs_1.createWriteStream)('public/sitemap.xml');
                    writeStream.write(xml);
                    writeStream.end();
                    console.log('✅ Sitemap generated: public/sitemap.xml');
                    return [2 /*return*/];
            }
        });
    });
}
generateSitemap().catch(console.error);
