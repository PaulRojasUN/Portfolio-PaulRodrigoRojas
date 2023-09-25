import threading
import time

def counter(start, end, my_list):
    for i in range(start, end):
        my_list[i] = i;

def my_main():
    number_of_threads = 4;
    max_n = 100000;

    stride = max_n//number_of_threads;

    my_list = [0]*max_n;

    start_time = time.time();

    thread_list = [];
    for i in range(number_of_threads):
        min_val = stride*i;
        max_val = stride*(i + 1);
        
        print(f"I am thread # {i} and will operate from {min_val} to {max_val}");

        t = threading.Thread(target=counter, args=(stride*i, stride*(i+1), my_list));
        thread_list.append(t);
        t.start();

    for t in thread_list:
        t.join();

    print(my_list);

    end_time = time.time();

    print(f"Finished in {end_time - start_time} seconds");



#my_main()

t0 = time.time();
counter(0, 100000, [0]*100000)
t1 = time.time();
print(t1-t0)