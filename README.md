# My CV

## Build

Firstly, to create a build it requires to install NodeJS,  
if you have not yet.
You can simply do it by clicking the link
[**NodeJS**](https://nodejs.org/en/).

It is a very useful cross-platform, back-end JavaScript runtime environment,  
which allows us to use **npm**.

>**npm** is a package manager for the JavaScript programming language. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website. The package manager and the registry are managed by npm, Inc.

Another words, npm is a collection of programms written by developers all  
round the world to do *dirty* job for you.

#### To use npm open terminal/command line and type npm to get all the options of commands and help.

If you use any IDE you can use integrated terminal or install an extention for this purpose.

***

### Let's Get Started
#### Pug files

Define path to sourse and build folders to execute initial files to the build and store it in order.


Install all needed npm-packages and define veriables to them to start using it:  

**Firstly we need to install Gulp globaly to be able to use it within  
terminal/command line:**  

```npm install --global gulp-cli```  

More info you can get [here, Gulp](https://gulpjs.com/docs/en/getting-started/quick-start/)  

And also install gulp to devDependencies:  

```npm install -D```

Then we'll need Pug:  

```npm install pug -D```

More info you can get [here, Pug](https://pugjs.org/api/getting-started.html)  

Next step is to install gulp-pug pacakage:  

```npm i gulp-pug -D```  

>Gulp plugin for compiling Pug templates. Enabling you to compile your Pug templates into HTML or JS, with support for template locals, custom Pug filters, AMD wrapping, and others.

More info you can get [here, Gulp-Pug](https://www.npmjs.com/package/gulp-pug)  

With these packages we may create *.pug* file and easily compile it into HTML.

***

#### CSS  
  
  

To work with CSS (SCSS) we use following packages:  

Gulp-Sass helps us to render our SASS/SCSS to CSS, we install it with:  

```npm install sass gulp-sass -D```  

More info you can get [here, gulp-sass](https://www.npmjs.com/package/gulp-sass)  


Next one is gulp-css-clean, it is a siple helper to minify our *.css* files:

```npm install gulp-clean-css -D```  

More info you can get [here, gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css)  

So, we use gulp-rename to have both minify and not-minify *.css* in the build folder:

```npm i gulp-rename -D```


#### Deal with images

To optimise the images we use gulp-imagemin:  

```npm i gulp-imagemin -D```

More info you can get [here, gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)  

To convert images to WebP we install gulp-webp:

```npm i gulp-webp -D```

More info you can get [here, gulp-webp](https://www.npmjs.com/package/gulp-webp)  

## Note! WebP is not supported by old versions in browsers!  

To avoid unpredictable problems with WebP images we install **gulp-webp-html** by:

```npm i gulp-webp-html -D```  

If WebP is not supported by browser it will substitute with a regular HTML \<img> tag.  

More info you can get [here, gulp-webp-html](https://www.npmjs.com/package/gulp-webp-html)  


### Ps
I did not use watch function in this scenario, so all my pages are linked and I easily can get compile *.pug* into *.html* using installed beforehand **Pug** in VScode. 
Then this *.html* we can open on localhost with LiveServer extention by a click.

#### PS
    Thanks for reading,  
    God bless you!



