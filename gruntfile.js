module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'assets/styles/style.css': 'src/sass/*.scss',
        }
      }
    },
    browserify: {
      dist: {
        files: {
          'assets/scripts/app.js': 'src/js/*.js'
        }
      }
    },
    watch: {
      sass: {
        files: ['src/sass/*.scss', 'src/js/*.js'],
        tasks: ['sass', 'browserify']
      }
    }
  })
  grunt.loadNpmTasks('grunt-sass')
  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.registerTask('default', ['sass:dist', 'watch', 'browserify:dist'])
}
