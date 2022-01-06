/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const withSvgr = require("@newhighsco/next-plugin-svgr");

module.exports = withPWA(withSvgr({
    distDir: 'dist',
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        buildExcludes: [/middleware-manifest.jeson$/]
    }
}));
