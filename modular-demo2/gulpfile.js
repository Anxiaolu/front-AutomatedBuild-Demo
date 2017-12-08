var gulp = require('gulp');
var browserify = require('browserify');
var sequence = require('run-sequence');
var watchify = require('watchify');
var fs = require('fs');
gulp.task('default',function(){
	1.
	//shelljs.exec('browserify assets/js/* -o js/main.js');

	2.
	//browserify().add('assets/js/index.js').bundle().pipe(fs.createWriteStream('js/main.js'));

	3.
	//sequence('mainjs','watch');

	4.
	sequence('mainjs');
});

3.
/*gulp.task('mainjs',function(){
	browserify().add('assets/js/index.js').bundle().pipe(fs.createWriteStream('js/main.js'));
})
gulp.task('watch',function(){
	gulp.watch(['assets/js/*.js'],function(){
		sequence('mainjs');
	})
})*/


//4.watchify function

gulp.task('mainjs',function(){
	var b = browserify({
		entries: ['assets/js/index.js'],
		cache: {},
		packageCache: {},
		plugin: [watchify]
	});
	var bundle = function(){
		b.bundle().pipe(fs.createWriteStream('js/main.js'));
	}
	bundle();
	b.on('update',bundle);
})
