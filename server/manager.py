from app.api import api
from flask import Flask

entry = Flask(__name__)
entry.config['JSONIFY_PRETTYPRINT_REGULAR'] = False
entry.register_blueprint(api)

if __name__ == '__main__':
    entry.run(debug=True)
