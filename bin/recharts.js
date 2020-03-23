#!/usr/bin/env node

const fs = require("fs");

const stdin = fs.readFileSync(process.stdin.fd, "utf8");

const lib = require("../index");

(async () => {
	const res = await lib.generateSvg(stdin);
	console.log(res);
})();
