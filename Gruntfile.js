module.exports = function(grunt) {
	// project configuration
	grunt.initConfig({
		critical: {
			my_critical: {
				options: {
					base: './',
					css: ['css/style.css',],
					dimensions: [{
						width: 320,
						height: 70
					}, {
						width: 1200,
						height: 900
					}]
				},
				src: 'index-test.html',
				dest: 'index.html'
			}
		}

	});

	grunt.loadNpmTasks('grunt-critical');
};