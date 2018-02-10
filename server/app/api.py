from flask import Blueprint, jsonify, request

api = Blueprint('api', __name__, url_prefix='/api')

@api.route('/')
def hello():
    if 'HTTP_CF_CONNECTING_IP' in request.environ:
        remote_addr = request.environ['HTTP_CF_CONNECTING_IP']
    elif 'HTTP_X_FORWARDED_FOR' in request.environ:
        remote_addr = request.environ['HTTP_X_FORWARDED_FOR']
    else:
        remote_addr = request.remote_addr or ''

    entity = {'client_ip': remote_addr}
    return jsonify(code=0, message='under construction.', entity=entity)
