<?php

$context = new ZMQContext(1);
$client = new ZMQSocket($context, ZMQ::SOCKET_REQ);
$client->connect('tcp://localhost:8787');

$client->send('setCenter', ZMQ::MODE_SNDMORE);
$client->send(sprintf('%g %g', $_GET['lat'], $_GET['lng']));

echo $client->recv();
