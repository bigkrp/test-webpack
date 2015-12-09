'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const AssetsPlugin = require('assets-webpack-plugin');
const rimraf = require('rimraf');

module.exports = {
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

	resolve: {
		extensions: ['', '.js', '.styl']
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel?presets[]=es2015'
		}, {
			test: /\.jade$/,
			loader: 'jade'
		}, {
			test: /\.styl$/,
			loader: 'style!css!stylus?resolve url'
		}, {
			test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
			loader: 'file?name=[path][name].[ext]?[hash]'
		}]
	},

	plugins: [
		{
			apply: (compiler) => {
				rimraf.sync(compiler.options.output.path);
			}
		},
		// new ExtractTextPlugin('[name].css', {allChunks: true}),
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'common'
		// }),
		// new AssetsPlugin({
		// 	filename: 'assets.json',
		// 	path:     __dirname + '/public/assets'
		// })
	],

	devServer: {
		host: 'localhost',
		port: 3000,
		proxy: [{
			path: /.*/,
			target: 'http://localhost:4000'
		}]		
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