
module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      dist: {
        files: [
          { src: 'build/main.js', dest: 'assets/scripts/app.js' }
        ]
      }
    },

    ngmin: {
      dist: {
        files: [
          { src: 'assets/scripts/app.js', dest: 'assets/scripts/app.js' }
        ]
      }
    },
    
    uglify: {
      dist: {
        files: [
          { src: 'assets/scripts/app.js', dest: 'assets/scripts/app.js' }
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
        tasks: ['sass:dist','build:dev','browserify:dist']
      }
    }
  })
  grunt.loadNpmTasks('grunt-sass')
  grunt.loadNpmTasks('grunt-ngmin')
  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-uglify')

  grunt.registerTask('build', function(type){ require('./autoload.js')(type) })

  grunt.registerTask('default', ['watch'])
  
  grunt.registerTask('dev', [
    'sass:dist','build:dev','browserify:dist'
  ])
  grunt.registerTask('prod', [
    'sass:dist','cssmin','build:prod','browserify:dist','ngmin:dist','uglify'
  ])
}
