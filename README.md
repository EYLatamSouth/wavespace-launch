# wavespace launch

Aplicação que será utilizada para inauguração do wavespace de São Paulo. Consiste na ativação por autenticação através do reconhecimento de face.

## Deploy

Esse repositório contém toda a estrutura da camada de front-end (que é executada no client).

Para fazer um novo deploy, é necessário gerar um build do projeto e subir no Azure como um ZipDeploy. Os passos são os seguintes:

### 1. Geração do build

Rodar ```npm run build``` na raiz do projeto.

### 2. Geração do zip

Rodar os seguintes comandos:
  
```cd build``` 

```zip -r build.zip .```

### 3. Fazer upload do zip no azure

Acessar no endereço https://wavespacelaunch.scm.azurewebsites.net/ZipDeploy/ utilizando o browser e arrastar o zip gerado lá dentro.

## Rotas da aplicação

```/``` ```/holder``` ```/qrcode``` ```/starter``` ```/welcome``` ```/welcome-sp``` ```/welcome-las```

## Pacotes utilizados na aplicação

* react-icons - https://github.com/react-icons/react-icons
* react-magic - https://github.com/lit-forest/react-magic