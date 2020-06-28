from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def home():
    # return render_template('home.html',language1="X",language2="Y")

    return render_template('home.html')

@app.route('/kotlin_python')
def kotlin_python():
   pass

@app.route('/changelog')
def changelog():
   return render_template(
       "changelog.html"
   )
   
@app.route('/about')
def about():
   return render_template(
       "about.html"
   )

if __name__ == '__main__':
    app.run()