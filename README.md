angular-grunt-protractor-starter
================================

AngularJS sample project with a grunt-based build system using Protractor and Karma. The AngularJS sample application itself also uses the AngularUI suite.

## Installation
First and foremost, before anything else, you need **Node.js** and **NPM**. The easiest way to install both is to follow the instructions on the **[Node.js homepage](http://nodejs.org)**.

Afterwards, we need to install the following global dependencies:

    npm install -g bower
    npm install -g grunt-cli
    
    npm install -g karma-cli
    
    npm install -g protractor
    webdriver-manager update

All commands above may require superuser privileges. Only run with *sudo* if required though. 

Then, we need to install the project-specific dependencies from inside the current folder:

    npm install

Finally, we need to run Bower to install client-side dependencies:

    bower install

That's it for the installation. Now in order to run the **Protractor** tests, we will first of all need a local webserver. A good choice is the **[http-server](https://www.npmjs.org/package/http-server)** node module. You may want to have it available globally. To install it, simply run:

    npm install -g http-server

## Running the tests

Now from inside this project run:

    http-server -a localhost -p 8000

Check out that the project directory is served on **[http://localhost:8000](http://localhost:8000)**. Navigate to the **[src](http://localhost:8000/src)** directory to see the sample AngularJS application running. The ```-a localhost``` option ensures that we only open port 8000 on the localhost interface. Without this option, the page would also be accessible from the outside, which can be useful when trying to connect from a mobile device that is on the same network. 

Now we can start up **webdriver / selenium** with the following command:

    webdriver-manager start

Finally, we can run our tests. We can either call Protractor directly:

    protractor conf/protractor.conf.js 

Or we can let **grunt** handle the call to Protractor. The following tasks include the Protractor call:

    grunt test
    grunt dist

## iOS testing

You can also use Protractor for testing inside the iOS Simulator using Appium. First of all, we need to install Appium. You can either run:

    npm install -g appium

Or you can download the application from **[appium.io](http://appium.io)**. You will probably have to grant access to the mobile Safari application using the following command:

    sudo authorize_ios

Then either start the **appium** app or run ```appium``` from the command line. You're ready to run the test on mobile safari:

    protractor conf/protractor-ios.conf.js 

There also is a grunt task for running this test:

    grunt ios

Currently it is standalone but could also be integrated into the other test tasks.

## Android testing
Install Android SDK according to **[this tutorial](http://appium.io/slate/en/tutorial/android.html?ruby#bash-profile13)**. You also need **[hax](https://software.intel.com/en-us/android/articles/intel-hardware-accelerated-execution-manager)**.

Not working yet, can you help? Further instructions at **[https://github.com/angular/protractor/blob/master/docs/browser-setup.md](here)**.

## Further information
This project is part of an upcoming blog article. Please check **[matthiasnehlsen.com](http://matthiasnehlsen.com)** for updates.

## License

This project is licensed under the **MIT License**, like AngularJS itself

Copyright (c) 2014 Matthias Nehlsen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
