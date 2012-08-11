#include <cstdio>
#include <cstdlib>
#include <math.h>
#include <zmq.h>
#include <pthread.h>

#include "zhelpers.h"

volatile double X;
volatile double Y;

/**
 * Thread de communication
 */
void *comThread(void *data)
{
    char response[128];
    void *context = zmq_init(1);
    void *server = zmq_socket(context, ZMQ_REP);
    zmq_bind(server, "tcp://*:8787");

    while (1) {
        char *command = s_recv(server);

        if (strcmp(command, "getPosition") == 0) {
            sprintf(response, "%g %g", X, Y);
        } else {
            sprintf(response, "Unknown command");
        }

        s_send(server, response);

        free(command);
    }
}


/**
 * Thread de "calcul"
 */
void calculate()
{
    double t = 0;

    while (1) {
        t += 0.03;
        X = cos(t) * 10;
        Y = sin(t) * 10;
        usleep(50000);
    }
}

int main()
{
    pthread_t thread;
    pthread_create(&thread, NULL, comThread, NULL);
    calculate();
}
