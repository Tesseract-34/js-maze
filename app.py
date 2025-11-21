import os
from flask import Flask, send_from_directory

app = Flask(__name__)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

@app.route('/')
def home():
    return send_from_directory(BASE_DIR, 'index.html')

@app.route('/styles.css')
def styles():
    return send_from_directory(BASE_DIR, 'styles.css')

@app.route('/script.js')
def maze_js():
    return send_from_directory(BASE_DIR, 'script.js', mimetype='application/javascript')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)