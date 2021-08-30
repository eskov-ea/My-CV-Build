const project_folder = "dist"
const sourse_folder = "src"



const path = {
    build: {
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        images: project_folder + "/images/",
    },
    src: {
        html: sourse_folder + "/*.html",
        pug: sourse_folder + "/*.pug",
        css: [sourse_folder + "/scss/*.scss", "!" + sourse_folder + "/scss/_*.scss"],
        js: sourse_folder + "/js/script.js",
        images: sourse_folder + "/images/**/*.{jpg, png, svg, gif, ico, webp}",
    },
    clean: "./" + project_folder + "/"
}



const { src, dest, series } = require('gulp')
const gulp = require('gulp')
const del = require('del')
const scss = require('gulp-sass')(require('sass'))
const gulppug = require('gulp-pug')
const imagemin = require('gulp-imagemin')
const webp = require('gulp-webp')
const webphtml = require('gulp-webp-html')
const clean_css = require('gulp-clean-css')
const rename = require('gulp-rename')
const deploy = require('gulp-gh-pages')



const pug = () => {
    return src(path.src.pug)
        .pipe(
            gulppug({
                pretty: true,
                basedir: __dirname
            }))
        // .pipe(webphtml())
        .pipe(dest(path.build.html))
}
const css = () => {
    return src(path.src.css)
        .pipe(
            scss({
                outputStyle: "expanded",
                allowEmpty: true
            })
        )
        .pipe(dest(path.build.css))
        .pipe(clean_css())
        .pipe(
            rename({
                extname: ".min.css"
            })
        )
        .pipe(dest(path.build.css))
}
const images = () => {
    return src(path.src.images)
        .pipe(
            webp({
                quality: 70
            })
        )
        .pipe(dest(path.build.images))
        .pipe(src(path.src.images))
        .pipe(
            imagemin({
                progressive: true,
                interlaced: true,
                optimizationLevel: 3
            })
        )
        .pipe(dest(path.build.images))
}
const clean = () => {
    return del(path.clean)
}
const deploy_project = () => {
    return src("./dist/**/*")
        .pipe(deploy())
}



const build = gulp.series(clean, gulp.parallel(css, pug, images))



exports.deploy_project = deploy_project
exports.images = images
exports.pug = pug
exports.css = css
exports.build = build