module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        exec: {
            run_server: 'start npm start',
            stop_server: 'taskkill /FI "WINDOWTITLE eq npm"',
        },

        // concat: {
        //     options: {
        //         separator: ';',
        //         process: false,
        //         stripBanners: {
        //             block: true
        //         }
        //     },
        //     app: {
        //         src: [
        //             'bower_components/jquery/dist/jquery.js',
        //             'bower_components/bootstrap/dist/js/bootstrap.js',
        //             'bower_components/moment/moment.js',
        //             'bower_components/angular/angular.js',
        //             'bower_components/angular-route/angular-route.js',
        //             'bower_components/angular-sanitize/angular-sanitize.js',
        //             'public/scripts/**/*.js',
        //             'public/scripts/*.js'
        //         ],
        //         dest: 'public/dist/app.js'
        //     },
        //     style: {
        //         options: {
        //             separator: '\n',
        //             process: false,
        //             stripBanners: {
        //                 block: true
        //             }
        //         },
        //         src: [
        //             'public/dist/styles/golden.css',
        //             'public/dist/styles/style.css'
        //         ],
        //         dest: 'public/dist/style.css'
        //     }
        // },

        // uglify: {
        //     options: {
        //         sourceMap: true
        //     },
        //     built: {
        //         files: {
        //             'public/dist/app.min.js': ['public/dist/app.js']
        //         }
        //     }
        // },

        // less: {
        //     build: {
        //         files: {
        //             "public/dist/styles/style.css": "bower_components/bootstrap/less/bootstrap.less",
        //         }
        //     }
        // },

        watch: {
            js: {
                files: ['app.js', 'bin/*.js', 'routes/*.js', 'models/*.js'],
                tasks: ['exec:stop_server', 'exec:run_server']
            }
        }

    });

    // plugins
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    // default task(s).
    grunt.registerTask('default', ['exec:run_server', 'watch']);
    // grunt.registerTask('default', ['less', 'concat', 'watch']);
    // grunt.registerTask('prod', ['less', 'concat', 'uglify']);

};