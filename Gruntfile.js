module.exports = function(grunt) {



	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		'http-server': {

			'dev': {

				// the server root directory
				root: '/Applications/MAMP/htdocs/POC/libsass',

				port: 8100,
				// port: function() { return 8282; }

				host: '127.0.0.1',

				cache: 5000,
				showDir : true,
				autoIndex: true,

				// server default file extension
				ext: 'html',

				// run in parallel with other tasks
				runInBackground: true

			}

		},
		open: {
			dev : {
			  path: 'http://<%= pkg.host %>:<%= pkg.port %>'
			},
			file: {
			  path: '<%= pkg.path %>'
			}
		},
		// grunt-contrib-sass
		contribsass: {
			dist: {
				options: {
					loadPath: 'bower_components/foundation/scss'
				},
				files: [{
					expand: true,
					cwd: 'sass',
					src: ['*.scss'],
					dest: 'css',
					ext: '.css'
				}]
			}
		},
		// grunt-sass for node-sass/libsass
		sass: {
			dist : {
				options: {
				  includePaths: ['bower_components/foundation/scss']
				},
				files: [{
					expand: true,
					cwd: 'sass',
					src: ['*.scss'],
					dest: 'css',
					ext: '.css'
				}]
			}
		},
		watch: {
			sass: {
				files: ['sass/*.scss'],
				tasks: ['sass']
			},
			contribsass: {
				files: ['sass/*.scss'],
				tasks: ['contribsass']
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.renameTask('sass', 'libsass');
	grunt.loadNpmTasks('grunt-http-server');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.renameTask('sass', 'contribsass');
	grunt.renameTask('libsass', 'sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-open');

	// Default task(s).
	grunt.registerTask('default', ['http-server:dev', 'open']);
	grunt.registerTask('libsass', ['sass', 'watch:sass']); // same as 'default'
	grunt.registerTask('rubysass', ['contribsass', 'watch:contribsass']);
};