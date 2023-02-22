import flask
from flask import render_template, send_file

app = flask.Flask(__name__)

compteur = 0

@app.route('/get')
def get():
    global compteur
    return str(compteur)

@app.route('/plus')
def plus():
    global compteur
    compteur += 1
    return str(compteur)

@app.route('/moins')
def moins():
    global compteur
    compteur -= 1
    return str(compteur)
    
@app.route('/')
def index():
    return render_template('./index.html')

@app.route('/index.js')
def js():
    return send_file('index.js', mimetype='text/javascript')

app.run(host="127.0.0.1", port=5000)
