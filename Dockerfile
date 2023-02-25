# Image utilizada

FROM node:alpine

# Diretório de trabalho
WORKDIR /usr/app

# Copiar o package pro diretório de trabalho
COPY package.json .

# Use o comando para instalar os pacote
RUN npm install

# Copiar a instalação para o diretório de trabalho
COPY . .

# Porta do container utilizada
EXPOSE 8080

# Comando para iniciar a aplicação
CMD [ "npm", "run", "dev" ]

# Build  da image
# sudo docker build -t [nome da image] .
# ex: sudo docker build -t rentx .

# Inicia o container
# sudo docker run -p [porta localhost]:[porta do docker ou container] [image]
# ex: sudo docker run -p 8080:8080 rentx
