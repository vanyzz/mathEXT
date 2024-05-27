from flask import Flask, render_template, request, jsonify
import math_formula

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/info')
def info():
    return render_template('info.html')

@app.route('/test')
def test():
    return render_template('test.html')


@app.route('/submit', methods=['POST'])
def submit():
    small_input = request.form.get('small_input')
    math_formula_result = math_formula.get_math_formula(small_input)
    return jsonify({'math_formula_result': math_formula_result})


if __name__ == '__main__':
    app.run(debug=True) 