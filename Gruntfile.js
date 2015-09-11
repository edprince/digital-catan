module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      src: {
        files: ['**/*.js'],
        options: {
          livereload: true
        }
      }
    },
    connect: {
      server: {
        options: { port: '5000', base: '.' }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect', 'watch']);
};