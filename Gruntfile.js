/* jshint indent: 2 */
module.exports = function (grunt) {

  var SERVER_PORT = 3000;

  /* CONFIGURATION =-=-=-=-=-=-=-=-=-=-=- */
  
  grunt.initConfig({
    // package file
    pkg: grunt.file.readJSON('package.json'),

    // generate pages from handlebar templates
    assemble: {
      options: {
        data: ['src/data/assemble/*.{json,yml}'],
        flatten: true,
        layout: 'site.hbs',
        layoutdir: 'src/templates/layouts',
        partials: ['src/templates/partials/*.hbs']
      },
      dev: {
        options: {
          dev: true,
          prod: false
        },
        files: {
          'dist/': ['src/templates/pages/*.hbs']
        }
      },
      prod: {
        options: {
          dev: false,
          prod: true
        },
        files: {
          'dist/': ['src/templates/pages/*.hbs']
        }
      },
      readme: {
        options: {
          data: ['package.json'],
          ext: '',
          layout: ''
        },
        src: 'src/templates/misc/readme.md.hbs',
        dest: './'
      }
    },

    // automatically add prefixes
    autoprefixer: {
      options: {
        browsers: ['last 2 version', '> 1%', 'ff 17', 'ie 8', 'ie 7']
      },
      all: {
        files: [{
          expand: true,
          src: ['*/**.css'],
          cwd: 'src/',
          dest: 'src/',
          ext: '.css'
        }]
      }
    },

    // clear a directory before build
    clean: {
      all: ['src/css', 'dist']
    },

    // create a local server
    connect: {
      dev: {
        options: {
          port: SERVER_PORT,
          base: 'dist/'
        }
      }
    },

    // copy files
    copy: {
      options: {
        processContentExclude: ['.DS_Store', '.gitignore', '.sass-cache', 'node_modules', 'src/tests/**']
      },
      images: {
        files: [
          {
            cwd: 'src/',
            dest: 'dist/',
            src: ['img/**/*.gif'],
            expand: true,
            filter: 'isFile'
          }
        ]
      },
      json: {
        files: [
          {
            cwd: 'src/',
            dest: 'dist/',
            src: ['**/*.json', '!**/assemble/*.json'],
            expand: true,
            filter: 'isFile'
          }
        ]
      },
      scripts: {
        files: [
          {
            cwd: 'src/',
            dest: 'dist/',
            src: ['js/**/*.js'],
            expand: true,
            filter: 'isFile'
          }
        ]
      },
      styles: {
        files: [
          {
            cwd: 'src/',
            dest: 'dist/',
            src: ['css/**', 'sass/**'],
            expand: true,
            filter: 'isFile'
          }
        ]
      }
    },

    // minify images
    imagemin: {
      build: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['img/**/*.{gif,jpg,png}'],
          dest: 'dist/'
        }]
      }
    },

    jshint: {
      options: {
        browser: true,
        curly: true,
        devel: true,
        eqeqeq: true,
        evil: true,
        immed: true,
        indent: 2,
        regexdash: true,
        sub: true,
        trailing: true,
        unused: true,
        white: true,
        globals: {
          jQuery: true,
          modernizr: true
        },
        force: true // allow build to continue with errors
      },
      dev: {
        src: ['src/js/**/*.js', '!src/js/libs/**/*.js']
      },
      gruntfile: {
        src: ['Gruntfile.js']
      }
    },

    jsonlint: {
      dev: {
        src: [ 'src/**/*.json' ]
      }
    },

    sass: {
      options: {
        //sourcemap: true // this breaks!
      },
      dev: {
        options: {
          style: 'expanded'
        },
        files: [{
          expand: true,
          src: ['*.scss', '!_*.scss'],
          cwd: 'src/sass',
          dest: 'src/css',
          ext: '.css'
        }]
      },
      prod: {
        options: {
          style: 'compressed'
        },
        files: [{
          expand: true,
          src: ['**/*.scss', '!**/_*.scss'],
          cwd: 'src/sass',
          dest: 'src/css',
          ext: '.min.css'
        }]
      }
    },

    // minify our javascript
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        sourceMap: 'dist/js/script.min.js.map'
      },
      prod: {
        files: [{
          expand: true,
          src: ['js/**/*.js', '!js/libs/**/*.js'],
          cwd: 'src/',
          dest: 'dist/',
          ext: '.min.js'
        }]
      }
    },

    // verify lowercase filenames
    verifylowercase: {
      all: {
        src: ["src/**"]
      }
    },

    // update the version number of our package file
    version: {
      dev: {
        options: {
          release: 'patch'
        },
        src: [
          'package.json'
        ]
      },
      prod: {
        options: {
          release: 'minor'
        },
        src: [
          'package.json'
        ]
      }
    },

    // different watch options trigger different tasks
    watch: {
      options: {
        livereload: true
      },
      assemble: {
        files: ['src/**/*.hbs', '!src/templates/misc/readme.md.hbs', 'src/data/*.assemble.json'],
        tasks: ['assemble:dev']
      },
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint:gruntfile']
      },
      images: {
        files: ['src/img/**'],
        tasks: ['images']
      },
      json: {
        files: ['src/data/*.json', '!src/data/*.assemble.json'],
        tasks: ['json']
      },
      readme: {
        files: ['src/templates/misc/readme.md.hbs'],
        tasks: ['assemble:readme']
      },
      sass: {
        files: ['src/sass/**/*.scss'],
        tasks: ['styles:dev']
      },
      scripts: {
        files: ['src/js/**/*.js'],
        tasks: ['scripts:dev']
      }
    }
  });

  /* MODULES =-=-=-=-=-=-=-=-=-=-=-=-=-=- */

  // load every plugin in package.json
  grunt.loadNpmTasks('assemble');
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  /* TASKS =-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

  // tasks for images, scripts and styles
  grunt.registerTask('images', ['imagemin:build']);

  grunt.registerTask('scripts:dev', ['jshint:dev', 'copy:scripts', 'uglify:prod']);
  grunt.registerTask('scripts:prod', ['jshint:dev', 'copy:scripts']);
  
  grunt.registerTask('json', ['jsonlint', 'copy:json']);
  
  grunt.registerTask('styles:dev', ['sass:dev', 'autoprefixer', 'copy:styles']);
  grunt.registerTask('styles:prod', ['sass:prod', 'autoprefixer', 'copy:styles']);

  // tasks to run a complete build
  grunt.registerTask('build:dev', ['version:dev', 'verifylowercase', 'clean', 'assemble:readme', 'assemble:dev', 'images', 'json', 'scripts:dev', 'styles:dev']);
  grunt.registerTask('build:prod', ['version:prod', 'verifylowercase', 'clean', 'assemble:readme', 'assemble:prod', 'images', 'json', 'scripts:prod', 'styles:prod']);

  // main tasks
  grunt.registerTask('default', ['build:dev', 'connect', 'watch']);
  grunt.registerTask('dev', ['build:dev']);
  grunt.registerTask('prod', ['build:prod']);

};