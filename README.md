angular-grunt-protractor-starter
================================

AngularJS sample project with a grunt-based build system using Protractor and Karma. The AngularJS sample application itself is also using the AngularUI suite.

First of all, before anything else, you need **Node.js** and **NPM**. To install both, the easiest is to follow the instructions on the **[Node.js homepage](http://nodejs.org)**.

Afterwards, we need to install the following global dependencies:

    npm install -g bower
    npm install -g grunt-cli
    
    npm install -g karma-cli
    
    npm install –g protractor
    webdriver-manager update

All commands above may require superuser priviledges. Only run with *sudo* if required though. 

Then, we need to install the project-specific dependencies from inside the current folder:

    npm install

Finally, we need to run Bower first to install client-side dependencies:

    bower install

That's it for the installation. Now in order to run the protractor tests, we will first of all need a local webserver. A good choice for this is the node module **[http-server](https://www.npmjs.org/package/http-server)**. You may want to have it available anywhere in your system. If so, install it like this:

    npm install -g http-server

Now from inside this project run:

    http-server -a localhost -p 8000

Go check out that the project directory is served on **[http://localhost:8000](http://localhost:8000)**. Navigate to the **[src](http://localhost:8000/src)** directory to see the sample AngularJS application running. The ```-a localhost``` option ensures that we only open port 8000 on the localhost interface. No need to open it for the world in this scenario.

Now we can start up **webdriver / selenium** with the following command:

    webdriver-manager start

Finally, we can run our tests. We can either call protractor directly:

    protractor conf/protractor.conf.js 

Or we can let grunt handle the call to protractor. The following tasks include the protractor call:

    grunt test
    grunt dist