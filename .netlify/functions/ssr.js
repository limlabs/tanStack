"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="vinxi/types/server" />
var server_1 = require("@tanstack/react-start/server");
var router_manifest_1 = require("@tanstack/react-start/router-manifest");
var router_1 = require("./router");
exports.default = (0, server_1.createStartHandler)({
    createRouter: router_1.createRouter,
    getRouterManifest: router_manifest_1.getRouterManifest,
})(server_1.defaultStreamHandler);
