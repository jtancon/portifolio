from flask import render_template
from App import app

# Rota para a página inicial
@app.route("/")
def homepage():
    return render_template("index.html")

# Rota para a página "Sobre"
@app.route("/sobre")
def sobre():
    return render_template("sobre.html")

# Rota para a página "Carreira"
@app.route("/carreira")
def carreira():
    return render_template("carreira.html")

# Rota para a página "Habilidades"
@app.route("/habilidades")
def habilidades():
    return render_template("habilidades.html")

# Rota para a página "Currículo"
@app.route("/curriculo")
def curriculo():
    return render_template("curriculo.html")

# Rota para a página "Projetos"
@app.route("/projetos")
def projetos():
    return render_template("projetos.html")

# Rota para a página "Contato"
@app.route("/contato")
def contato():
    return render_template("contato.html")

# NOVA ROTA PARA A PÁGINA DE ADMIN
@app.route("/admin")
def admin():
    return render_template("admin.html")
