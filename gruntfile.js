module.exports = function(grunt) {

  require('./autoload.js')

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      dist: {
        files: [
          { src: 'main.js', dest: 'assets/scripts/app.js' }
        ]
      }
    },

    ngmin: {
      dist: {
        files: [
          { src: 'assets/scripts/app.js', dest: 'assets/scripts/app.min.js' }
        ]
      }
    },
    
    uglify: {
      dist: {
        files: [
          { src: 'assets/scripts/app.min.js', dest: 'assets/scripts/app.min.js' }
        ]
      }
    },
    
    sass: {
      dist: {
        files: [
          { src: 'src/sass/*.scss', dest: 'assets/styles/main.css' }
        ]
      }
    },
    
    cssmin: {
      css: {
        files: [
          { src: 'assets/styles/main.css', dest: 'assets/styles/main.min.css' }
        ]
      }
    },
    
    watch: {
      sass: {
        files: ['src/sass/*.scss', 'src/js/**/*'],
        tasks: ['exec:autoload', 'sass', 'browserify', 'cssmin', 'ngmin', 'uglify']
      }
    }
  })
  grunt.loadNpmTasks('grunt-exec')
  grunt.loadNpmTasks('grunt-sass')
  grunt.loadNpmTasks('grunt-ngmin')
  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.registerTask('default', [
    'watch','sass:dist','cssmin','browserify:dist','ngmin:dist','uglify'
  ])
}
