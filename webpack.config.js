'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = { // --inlne --hot
	context: __dirname + '/frontend',
	entry: {
		main: './main'
	},
	output: {
		path: __dirname + '/public',
		publicPath: '/',
		filename: '[name].js',
		// chunkFilename: '[id].js',
		// library: '[name]'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			include: __dirname + '/frontend',
			loader: 'babel?presets[]=es2015'
		}, {
			test: /\.jade$/,
			loader: 'jade'
		}, {
			test: /\.styl$/,
			loader: ExtractTextPlugin.extract('css!stylus?resolve url')
		}, {
			test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
			loader: 'file?name=[path][name].[ext]?[hash]'
		}]
	},

	plugins: [
		new ExtractTextPlugin('[name].css', {allChunks: true})
	],

	devServer: {
		contentBase: __dirname + '/backend',
		hot: true
	}
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