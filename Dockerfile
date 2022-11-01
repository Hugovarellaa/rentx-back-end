# Qual image baixa para o container
# https://hub.docker.com/search
FROM node

# Diretorio do projeto
WORKDIR /usr/app

# Dependencias do projeto
COPY package.json ./

# instalação das dependencias
RUN npm install

# copia tudo para a pasta raiz
COPY . .

# porta que irei utilizada
EXPOSE 3333

# Script para inicia a aplicação
CMD ["npm", "run", "dev"]
