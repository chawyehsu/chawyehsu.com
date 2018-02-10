import multiprocessing

bind = 'unix:/tmp/h404bi.com.server.sock'
workers = multiprocessing.cpu_count() * 1
worker_class = 'gevent'
accesslog = '/tmp/h404bi.com.server-access.log'
errorlog = '/tmp/h404bi.com.server-error.log'
loglevel = 'info'
