var gulp = require('gulp');
var server = require('gulp-webserver');

gulp.task('server',function() {
	return gulp.src('src')
	.pipe(server({
		port :　8585,
		open : true,
		livereload : true,
		proxies : [
			{source : '/api/list',target : 'http://localhost:3030/api/list'},
			{source : '/api/getPinlun',target : 'http://localhost:3030/api/getPinlun'},
			{source : '/api/addPinlun',target : 'http://localhost:3030/api/addPinlun'},
		]
	}))
})