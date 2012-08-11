cmake_minimum_required (VERSION 2.6)
project (App)
find_package (Threads)

set (EXTRA_LIBS zmq m)

add_executable (App calculate.cpp)
target_link_libraries(App ${CMAKE_THREAD_LIBS_INIT} ${EXTRA_LIBS})

