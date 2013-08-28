//how to create an express project

//1-help options
$ express --help
  Usage: express [options]

  Options:

    -h, --help          output usage information
    -V, --version       output the version number
    -s, --sessions      add session support
    -e, --ejs           add ejs engine support (defaults to jade)
    -J, --jshtml        add jshtml engine support (defaults to jade)
    -H, --hogan         add hogan.js engine support
    -c, --css <engine>  add stylesheet <engine> support (less|stylus) (defaults to plain css)
    -f, --force         force on non-empty directory

//we can choose a template engine
//the default is to use jade

//2-create your project
$ express helloExpress -c less

//here we are using the less css framework (http://lesscss.org)

//3-cd to your project file and run npm install
$ cd helloExpress/
$ npm install

npm WARN package.json application-name@0.0.1 No description
npm WARN package.json application-name@0.0.1 No repository field.
npm WARN package.json application-name@0.0.1 No README data
npm http GET https://registry.npmjs.org/express/3.3.4
npm http GET https://registry.npmjs.org/less-middleware
npm http GET https://registry.npmjs.org/jade
... ... ...

jade@0.34.1 node_modules/jade
├── character-parser@1.0.2
├── mkdirp@0.3.5
├── commander@1.3.2 (keypress@0.1.0)
├── with@1.1.0 (uglify-js@2.3.6)
├── transformers@2.1.0 (promise@2.0.0, css@1.0.8, uglify-js@2.2.5)
├── constantinople@1.0.1 (uglify-js@2.3.6)
└── monocle@0.1.50 (readdirp@0.2.5)

less-middleware@0.1.12 node_modules/less-middleware
├── mkdirp@0.3.5
└── less@1.4.2 (mime@1.2.10, ycssmin@1.0.1, request@2.26.0)

//4-run the app.js
$ node app.js 
Express server listening on port 3000

//go to your browswer and type localhost:3000
//'welcome to express'