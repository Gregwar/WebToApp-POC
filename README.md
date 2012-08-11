Web to application proof-of-concept
===================================

This is a proof-of-concept of how an "calculation" application could communicate with a
web application involving ZeroMQ sockets, 

Installation
============

Requirements
------------

First, get the ZeroMQ library for both C/C++ and PHP :

* http://www.zeromq.org/intro:get-the-software
* http://www.zeromq.org/bindings:php

You'll need to setup a web server (for instance Apache) which can executes PHP scripts

Compiling and running the app
-----------------------------

To compile and run the app, simply use `cmake` :

```
cd app/
mkdir build
cd build/
cmake ../.
make
./App
```

Testing the thing
-----------------

Then, run a web server and go to `web/index.htm`, you should see a dot spinning around. This
is a representation of what is calculated in the application, PHP is here used as a proxy to
get data from the app.
