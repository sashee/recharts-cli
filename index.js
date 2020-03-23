const babel = require("@babel/core");
const ReactDOMServer = require("react-dom/server");
const cheerio = require("cheerio");

exports.generateSvg = async (input) => {
	const transformedCode = (await babel.transformAsync(`
	const React = require("react");
	const {${Object.keys(require("recharts")).join(",")}} = require("recharts");
	${input}
	`, {presets: ["@babel/preset-react"]})).code;
	const res = ReactDOMServer.renderToString(eval(transformedCode));

	const $ = cheerio.load(res);
	$("*").removeAttr("class");


	return $.html("svg");
};