'use strict';

// const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
	context: __dirname + '/frontend',

	entry: './main',

	output: {
		path: __dirname + '/public/',
		publicPath: '/',
		filename: '[name].js'
	},

	// watch: NODE_ENV == 'development',

	// watchOption: {
	// 	aggregateTimeout: 100
	// },

	// devtool: (NODE_ENV == 'development') ? 'cheap-inline-source-map' : null,

	// resolve: {
	// 	root: __dirname + '/vendor',
	// 	alias: {
	// 		old: 'old/dist/old'
	// 	},
	// 	modulesDirectories: ['node_modules'],
	// 	extensions: ['', '.js']
	// },

	// resolveLoader:{
	// 	modulesDirectories: ['node_modules'],
	// 	moduleTemplates: ['*-loader', '*'],
	// 	extensions: ['', '.js']
	// },

	module: {
		loaders: [{
			test: /\.js$/,
			// include: __dirname + '/frontend',
			loader: 'babel'
		}, {
			test: /\.jade$/,
			loader: 'jade'
		}, {
			test: /\.css$/,
			loader: 'style!css!autoprefixer?browsers=last 2 versions'
		}, {
			test: /\.(png|svg|jpg|ttf|eot|woff|woff2)$/,
			loader: 'url?name=[path][name].[ext]?limit=4096'
		}]
	},

	noParse: /angular\/angular.js/
};

// if (NODE_ENV == 'production') {
// 	module.exports.plugins.push(
// 		new webpack.optimize.UglifyJsPlugin({
// 				compress: {
// 					warnings: false,
// 					drop_console: true,
// 					unsafe: true
// 				}
// 		})
// 	);
// }