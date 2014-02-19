module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      dist: {
        files: [
          { src: 'src/js/*.js', dest: 'assets/scripts/app.js' }
        ]
      }
    },
    ngmin : {
      dist: {
        files: [
          { src: 'assets/scripts/app.js', dest: 'assets/scripts/app.min.js' }
        ]
      }
    },
    sass: {
      dist: {
        files: [
          { src: 'assets/styles/main.css', dest: 'src/sass/*.scss' }
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
        tasks: ['sass', 'browserify', 'cssmin', 'ngmin']
      }
    }
  })
  grunt.loadNpmTasks('grunt-sass')
  grunt.loadNpmTasks('grunt-ngmin')
  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.registerTask('default', ['sass:dist', 'cssmin', 'watch', 'browserify:dist', 'ngmin:dist'])
}
