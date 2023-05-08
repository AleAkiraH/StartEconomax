from flask import Flask
import threading
import time
import requests 

app = Flask(__name__)

def fazer_requisicao():
    while True:
        # URL da requisição/
        url = 'https://economax.onrender.com/login'

        # Corpo da requisição
        data = {
            "usuario": "aleakirah",
            "senha": "14191712"
        }

        # Realiza a requisição
        response = requests.post(url, json=data)

        # Verifica se a requisição foi bem-sucedida
        if response.status_code == 200:
            print('Requisição bem-sucedida! (fazer_requisicao)')
            # Registra o horário da requisição
            horario = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
            print(f'Requisição feita às {horario}')
        else:
            print('Erro na requisição. (fazer_requisicao)')
            # Registra o horário da requisição
            horario = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
            print(f'Requisição feita às {horario}')
        time.sleep(270)

def fazer_requisicao_dev():
    while True:
        # URL da requisição
        url = 'https://economax-dev.onrender.com/login'

        # Corpo da requisição
        data = {
            "usuario": "aleakirah",
            "senha": "14191712"
        }

        # Realiza a requisição
        response = requests.post(url, json=data)

        # Verifica se a requisição foi bem-sucedida
        if response.status_code == 200:
            print('Requisição bem-sucedida! (fazer_requisicao_dev)')
            # Registra o horário da requisição
            horario = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
            print(f'Requisição feita às {horario}')
        else:
            print('Erro na requisição. (fazer_requisicao_dev)')
            # Registra o horário da requisição
            horario = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
            print(f'Requisição feita às {horario}')
        time.sleep(270)
              
# Rota principal
@app.route('/')
def index():
    return 'API Flask em execução'

if __name__ == '__main__':
    print(1)
    # Inicia a thread em paralelo para imprimir a mensagem
    try:
        thread = threading.Thread(target=fazer_requisicao)
        thread.start()
    except:
        print('falha ao executar fazer_requisicao')
    
    # Inicia a thread em paralelo para imprimir a mensagem
    try:
        thread = threading.Thread(target=fazer_requisicao_dev)
        thread.start()
    except:
        print('falha ao executar fazer_requisicao_dev')
    
    # Executa a aplicação Flask
    app.run()