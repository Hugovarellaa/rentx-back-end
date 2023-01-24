# FROM - Qual image quer baixa pro container
FROM node

# WORKDIR - Pasta / Diretorio da aplicação, quando executar
WORKDIR /usr/app

# Copiar a Pasta / Arquivo para o diretorio da aplicação no WORKDIR
COPY package.json .

# RUN - Executar
RUN npm install

# Copiar  Pasta / Arquivo para o diretorio da aplicação no WORK
COPY . .

# Porta do container
EXPOSE 8080

# Permiti que agente rode os comando que a aplicação precisar para startar
CMD [ "npm", "run", "dev" ]


# Comando para build (Criar a image)
# sudo docker build -t (Nome do container) (Aonde está o Dockerfile)
# ex.: sudo docker build rentx .

# Comando para iniciar o container (Roda a image)
# sudo docker run -p (Porta da aplicação na nossa maquina):(Porta do container) (Nome do container)
# ex.: sudo docker run -p 8080:8080 rentx
