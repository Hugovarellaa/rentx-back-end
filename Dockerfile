# FROM -> Qual imagem quero usa
# Sites das images Docker -> https://hub.docker.com/search
FROM node

# Diretorio aonde sera criado a imagem
WORKDIR /usr/app

# Aonde esta as dependencias a serem instaladas
COPY package.json ./

# Baixa as dependencias
RUN npm install

# Depois que instalou Copia tudo da raiz para a outra raiz
COPY . .

# Porta
EXPOSE 3333

# Comando para executar
CMD [ "npm","run","dev" ]
