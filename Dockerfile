# Qual image vai usar?
FROM node:latest

# Qual diretorio destinado para os arquivos
WORKDIR /usr/app

# Qual arquivo vou copiar
COPY package.json ./

# instação e download das dependencias
RUN npm install

# Depois de baixa as dependencias Copiar todo o projeto
COPY . .

# Qual porta a aplicação irar utilizar
EXPOSE 8080

# Startar o projeto
CMD [ "npm", "run", "dev" ]
