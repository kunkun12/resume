module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                mangle: false,
                report: "gzip",
                banner: '/*by kunkun   <%= grunt.template.today("dd-mm-yyyy,, h:MM:ss TT") %>   */ '
            },
            files: {
                expand: true,
                src: 'src/*.js',
                dest: 'lib/js',
                flatten: true
            }
        },
         concat : {
            css : {
                src: ['css/*.css','!css/style.min.css'],
                dest: 'css/style.css'
            }
        },
        cssmin: {
            options: {
                banner: '/*by kunkun   <%= grunt.template.today("dd-mm-yyyy,, h:MM:ss TT") %>   */ ',
                report:'min'
            },
            files: {               
                src: "css/style.css", 
                dest: "css/style.min.css" 
                }          
        },
        less: {
            files: {
                expand: true,
                flatten: true,
                ext:'.css',
                src: 'less/*.less',
                dest: "css"
            }
        },
        watch: {
            script: {
                files: ['src/*.js', 'src/mywidgets/*.js'],
                tasks: ['uglify']
            },
            less:{
                files:['less/*.less'],
                tasks:['less',"concat",'cssmin']
            }
        }
    });
    grunt.registerTask('default', ["watch"]);
};