<?php

$context = new ZMQContext(1);
$client = new ZMQSocket($context, ZMQ::SOCKET_REQ);
$client->connect('tcp://localhost:8787');

$client->sendMulti(array(
    'setCenter',
    sprintf('%g %g', $_GET['x'], $_GET['y'])
));

echo $client->recv();
