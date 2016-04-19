var gulp   = require( 'gulp' ),
    print  = require( 'gulp-util'   ),
    notify = require( 'gulp-notify' ),
    plumber= require( 'gulp-plumber'),
    autopre= require( 'gulp-autoprefixer'),
    server = require( 'browser-sync').create(),
    clean  = require( 'gulp-clean'  ),
    htmlmin= require( 'gulp-htmlmin'),
    uglify = require( 'gulp-uglify' ),
    minicss= require( 'gulp-minify-css'),
    runsyn = require( 'run-sequence'),
    message= function( type, file ) {
         if (type.success) return false;
         return file.relative + " ( " + type.results.length + " errors )";
    },
    root   = '_book/',
    paths  = {
        dest : 'doc/',
        port : 8888,
        html : root  + '**/*.html',
        css  : root  + '**/*.css',
        js   : root  + '**/*.js',
        fonts: [root + '**/*.otf',root + '**/*.woff',root + '**/*.ttf',root + '**/*.svg'],
        image: [root + '**/*.ico',root + '**/*.png'],
        files: [root  + '**/sitemap.xml', root  + '**/search_index.json'],
        theme: "theme/"
    };

gulp.task( 'srv:deploy', function() {
    server.init({
        server: { baseDir: paths.dest },
        port: paths.port
    });
});

gulp.task( 'clean', function() {
    return gulp.src( paths.dest ).pipe( clean() );
});

gulp.task( 'copy', function( cb ) {
    gulp.src( paths.fonts ).pipe( gulp.dest( paths.dest ));
    gulp.src( paths.image ).pipe( gulp.dest( paths.dest ));
    gulp.src( paths.files ).pipe( gulp.dest( paths.dest ));
    gulp.src( paths.theme + '**/*'    ).pipe( gulp.dest( paths.dest + paths.theme ));
    cb();
});

gulp.task( 'html', function() {
    gulp.src( paths.html )
        .pipe( plumber() )
        .pipe( htmlmin({collapseWhitespace: true}) )
        .pipe( gulp.dest( paths.dest ) );
});

gulp.task( 'css', function() {
    gulp.src( paths.css ).
    pipe(autopre({
        browsers: ['last 2 versions'],
        cascade:  true,
        remove:   true
    }))
    .pipe( minicss() )
    .pipe( gulp.dest( paths.dest ) );
});

gulp.task( 'js', function() {
    gulp.src( paths.js )
        .pipe( uglify() )
        .pipe( gulp.dest( paths.dest ));
});

gulp.task( 'publish', [ 'clean' ], function() {
    gulp.start( 'html', 'css', 'js', 'copy' );
});

gulp.task( 'deploy', function( cb ) {
    runsyn(
        'clean',
        'copy',
        [ 'html', 'css', 'js' ],
        'srv:deploy',
        cb
    )
});
