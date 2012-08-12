<?php

$context = new ZMQContext(1);
$client = new ZMQSocket($context, ZMQ::SOCKET_REQ);
$client->connect('tcp://localhost:8787');

$client->send('getPosition');
$values = explode(' ', $client->recv());

echo json_encode(array(
    'x' => $values[0],
    'y' => $values[1],
)), "\n";
