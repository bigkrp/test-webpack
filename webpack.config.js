'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
	context: __dirname + '/frontend',

	entry: {
		app: './app'
	},

	output: {
		path: __dirname + '/public/js',
		publicPath: '/js/',
		filename: '[name].js'
	},

	watch: NODE_ENV == 'development',

	watchOption: {
		aggregateTimeout: 100
	},

	devtool: (NODE_ENV == 'development') ? 'cheap-inline-source-map' : null,

	plugins: [
		new webpack.ContextReplacementPlugin(/node_modules\/moment\/locale/, /ru|en-gb/)
	],

	resolve: {
		modulesDirectories: ['node_modules'],
		extensions: ['', '.js']
	},

	resolveLoader:{
		modulesDirectories: ['node_modules'],
		moduleTemplates: ['*-loader', '*'],
		extensions: ['', '.js']
	},

	// module: {
	// 	loaders: [{
	// 		test: /\.js$/,
	// 		loader: 'babel?optional[]=runtime'
	// 	}]
	// }
};

if (NODE_ENV == 'production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false,
					drop_console: true,
					unsafe: true
				}
		})
	);
}