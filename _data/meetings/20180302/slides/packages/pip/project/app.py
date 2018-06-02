from flask import Flask, render_template, request
from iscowalive import check
app = Flask(__name__)


@app.route("/", methods=['GET', 'POST'])
def index():
    ica = False
    if request.method == 'POST' and request.form['url']:

        # Call to iscowalive.check() method
        if check(request.form['url']):
            ica = "OK"
        else:
            ica = "KO"

    return render_template('index.html', ica=ica)
