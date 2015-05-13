/**
 * Numenta.org gulpfile.js build tooling
 */


// externals

var checkpages =  require('check-pages');
var gulp =        require('gulp');
var gwebserver =  require('gulp-webserver');
var spawn =       require('child_process').spawn;

// internals

var port = process.env.TEST_PORT || 8008;
var WebServer = null; // TODO: make not global


// Individual Tasks

/**
 * Gulp task to check web page links
 */
gulp.task('checkpages', function (callback) {
  var options, done, stream;

  options = {
    pageUrls:         [ 'http://localhost:' + port ],
    checkLinks:       true,
    onlySameDomain:   true,
    queryHashes:      true,
    noRedirects:      true,
    noLocalLinks:     false, // true for prod ?
    noEmptyFragments: true,
    linksToIgnore:    [],
    checkXhtml:       false,
    checkCaching:     true,
    checkCompression: false, // true for prod ?
    maxResponseTime:  200,
    userAgent:        'custom-user-agent/1.2.3',
    summary:          false
  };

  done = function (error) {
    WebServer.emit('kill');
    callback(error);
  };

  stream = checkpages(console, options, done);

  return stream;
});

/**
 * Gulp task to run mocha-casperjs web test suite
 */
gulp.task('mocha-casperjs', function (callback) {
  var stream = spawn('mocha-casperjs');
  console.log('Mocha-Casper: started. Output will follow soon...');

  stream.stdout.on('data', function (data) {
    process.stdout.write(data);
  });

  stream.on('close', function (code) {
    var success = code === 0; // Will be 1 in the event of failure

    WebServer.emit('kill');

    if(! success) {
      // fail
      callback(new Error('Mocha-Casper: failed!'));
      return;
    }

    // success
    console.log('Mocha-Casper: success!');
    callback();
  });

  return stream;
});

/**
 * Gulp task to serve site from the _site/ build dir
 */
gulp.task('serve', function () {
  var stream = gulp.src('_site/').pipe(gwebserver({ port: port }));
  WebServer = stream;
  return stream;
});


// Task Compositions

gulp.task('default', [], function () {});

gulp.task('linkcheck', [ 'serve', 'checkpages' ]);

gulp.task('webtest', [ 'serve', 'mocha-casperjs' ]);
