import flask
app=flask.Flask(__name__)

@app.route('/x')
def x():
    return str(eval(flask.request.args.get('q','0')))
