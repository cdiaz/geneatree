module.exports = function(grunt) {
    grunt.initConfig({
        clean: {
            css: {
                src: './css/'
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    noCache: true
                },
                files: [{
                    expand: true,
                    cwd: './sass',
                    src: ['*.scss'],
                    dest: './css',
                    ext: '.css'
                }]
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('build-styles', ['clean:css', 'sass:dist']);
};
