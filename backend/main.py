from flask import Flask, jsonify, request
from dijkstra import *
app = Flask(__name__)

@app.route('/find_path', methods=['GET'])
def pathing():
    start = request.args.get('start')
    end = request.args.get('end')
    return jsonify({'path': dijkstra(start, end)})

if __name__ == 'main':
   app.run()

#fetch(http://localhost:5000/find_path?start=${start}&end={end})