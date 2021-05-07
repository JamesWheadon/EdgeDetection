from controllers import edges
from flask import Flask, jsonify, send_file, request
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

app.config['UPLOAD_FOLDER'] = '/images'

@app.route('/')
def home():
    return jsonify({"message": "Waiting for images"}), 200

@app.route('/edges', methods=['GET', 'POST'])
def edges_handler():
    fns = {
        'GET': edges.welcome,
        'POST': edges.image,
    }
    resp, code = fns[request.method](request)
    return jsonify(resp), code

if __name__ == "__main__":
    app.run(debug=True)