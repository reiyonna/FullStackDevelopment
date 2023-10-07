from flask import Flask, render_template, redirect, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///posts.db'
db = SQLAlchemy(app)

class LavasaBlog(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False, unique=True)
    content = db.Column(db.Text, nullable=False)
    posted_by = db.Column(db.String(20), nullable=False, default='N/A')
    posted_on = db.Column(db.DateTime, nullable=False, default=datetime.utcnow())

    def __repr__(self):
        return self.title

with app.app_context():
    db.create_all()

@app.route('/')
@app.route('/home')
@app.route('/Lavasa')
def welcome():
    return render_template('index.html')

@app.route('/posts', methods=['GET', 'POST'])
def posts():
    if request.method == 'POST':
        post_title = request.form['title']
        post_content = request.form['post']
        post_author = request.form['author']

        with app.app_context():
            new_post = LavasaBlog(title=post_title,
                                      content=post_content, posted_by=post_author)
            db.session.add(new_post)
            db.session.commit()

        return redirect('/posts')
    else:
        with app.app_context():
            all_posts = LavasaBlog.query.order_by(LavasaBlog.posted_on).all()
        return render_template('posts.html', posts=all_posts)

@app.route('/posts/delete/<int:id>')
def delete(id):
    with app.app_context():
        to_delete = LavasaBlog.query.get_or_404(id)
        db.session.delete(to_delete)
        db.session.commit()
    return redirect('/posts')     

@app.route('/posts/edit/<int:id>', methods=['GET', 'POST'])
def edit(id):
    with app.app_context():
        to_edit = LavasaBlog.query.get_or_404(id)
        if request.method == 'POST':
            to_edit.title = request.form['title']
            to_edit.posted_by = request.form['author']
            to_edit.content = request.form['post']
            db.session.commit()
            return redirect('/posts')
        else:
            return render_template('edit.html', post=to_edit)

@app.route('/posts/new', methods=['GET', 'POST'])
def new_post():
    if request.method == 'POST':
        post_title = request.form['title']
        post_content = request.form['post']
        post_author = request.form['author']

        with app.app_context():
            new_post = LavasaBlog(title=post_title,
                                      content=post_content, posted_by=post_author)
            db.session.add(new_post)
            db.session.commit()

        return redirect('/posts')
    else:
        return render_template('new_post.html')

if __name__ == "__main__":
    app.run(debug=True)
