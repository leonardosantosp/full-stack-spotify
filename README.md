# full-stack-spotify

![Status](https://img.shields.io/badge/status-completo-green)
![License](https://img.shields.io/badge/license-MIT-blue)

Este é um projeto full stack que simula funcionalidades básicas do Spotify, com autenticação, exibição de músicas, artistas e reprodução de áudio.

## 🚀 Deploy

- 🔗 Frontend: [Acesse aqui](https://full-stack-spotify-frontend-production.up.railway.app/)
- 🔗 Backend: [Acesse aqui](https://full-stack-spotify-api-production.up.railway.app/)

## <br> 📝 Descrição

Projeto full-stack que simula uma interface do Spotify, permitindo explorar artistas e músicas. O backend foi desenvolvido em Node.js com Express e utiliza um banco de dados mongodb para armazenar informações sobre músicas e artistas. O frontend, feito em React, exibe as músicas e permite sua reprodução através de um player integrado.
<br>

## <br> 🛠️ Técnologias utilizadas

**Front-end:** React, Vite, html, css
<br><br>**Back-end:** Node.js, Express, MongoDB
<br><br>**Outros:** axios, cors, react-router-dom, dotenv
<br><br>

## 🛠️ Pré-requisitos

Antes de instalar e executar o projeto, certifique-se de que você tem:

- Node.js instalado (usei a versão v18.14.1)
- Uma conta no MongoDB Atlas com um cluster e uma coleção configurada
  <br>

## 📌 Instalação do Node.js

Se ainda não tem o Node.js instalado, baixe e instale a versão mais recente:
[Instalar NodeJs](https://nodejs.org/pt)
<br><br>

## 🚀 Instalação do Projeto

1. Clone o repositório:

```bash
git clone https://github.com/leonardosantosp/full-stack-spotify
```

```bash
cd full-stack-spotify
```

<br>2. Entre na pasta `back-end` e instale as dependências:

```bash
cd back-end
```

```bash
npm install
```

<br>3. Entre na pasta `front-end` e instale as dependências:

```bash
cd front-end
```

```bash
npm install
```

OBS: para funcionar na máquina local entre em `front-end/api/api.js` e troque a URL para o seu localhost da API
<br>

## 🗄️ Configuração do Banco de Dados (MongoDB Atlas)

1. Crie uma conta no [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database)
2. Crie um cluster gratuito e selecione a opção Shared
3. Crie um banco de dados chamado `spotifyBd`
4. Crie uma coleção chamada `songs`
5. Crie uma coleção chamada `artists`
6. Adicione um usuário ao banco com permissões de leitura e escrita (Na aba na esquerda vá em SECURITY -> Database Access, e crie seu user)
7. Adicione a opção de aceitar qualquer edenreço IP (Na aba na esquerda vá em SECURITY -> Network Access -> ADD IP ADDRESS, e clica na opção de aceitar qualquer IP)
8. Pegue a string de conexão no MongoDB Atlas e adicione ao arquivo `./backend/api/connect.js` (Na aba esquerda vá em Clusters -> Connect -> Drivers -> e copia a string presente na seção `3. Add your connection string into your application code`
   )
9. Adicione as suas credenciais a essa string de conexão

## <br> 📥 Populando o Banco de Dados

Para que a aplicação funcione corretamente, é necessário preencher o banco de dados com informações sobre os artistas e músicas. O projeto já inclui um conjunto de dados pré-definidos, mas, por padrão, o código busca esses dados diretamente do banco de dados. Como o banco inicia vazio, siga os passos abaixo para inseri-los corretamente.
<br>

### <br> 1️⃣ Ajustando os Arquivos de Dados

Antes de executar o script de inserção de dados, é necessário modificar temporariamente os arquivos artists.js e songs.js para fornecer os dados diretamente do código, em vez de buscar na API.

1. Abra o arquivo `artists.js` (localizado em front-end/src/assets/database/) e faça as seguintes alterações:
   - Comente a linha que exporta artistArray normalmente.
   - Descomente as linhas que contêm o array de artistas.
2. Repita o mesmo processo para o arquivo `songs.js`.

### <br> 2️⃣ Executando o Script de Inserção

Agora, insira os dados no banco de dados:

1. No terminal, acesse a pasta do back-end:

```bash
cd back-end

```

2. Execute o script de inserção de dados:

```bash
node ./api/insertMany.js
```

Isso irá inserir os artistas e músicas no banco de dados MongoDB. Após a execução, você verá mensagens no console confirmando a inserção dos dados.

### <br> 3️⃣ Restaurando os Arquivos

Após a inserção dos dados, reverta as mudanças feitas nos arquivos `artists.js` e `songs.js`:

1. Comente novamente as linhas que contêm os arrays de dados.
2. Descomente a linha original que exporta os dados da API.

## <br><br> ▶️ Modo de execução

Abra o terminal na pasta `back-end` e digite o comando:

```bash
node ./api/server.js
```

isso irá ativar a api que se comunica com a base de dados na porta `:3001` .
<br><br>Para abrir a página principal abra o terminal na pasta `front-end` e digite o comando:

```bash
npm run dev
```

A aplicação estará presente no endereço `http://localhost:5173/`

## <br><br>Home

![image](https://github.com/user-attachments/assets/6de7aa1d-784b-4b25-b7d2-0fe3a64d6701)

## <br><br>Página de Artista

![image](https://github.com/user-attachments/assets/94619f72-968a-4ae6-b598-291d7fafa490)

## <br><br>Página da Música

![image](https://github.com/user-attachments/assets/2d4432ae-64f6-4204-853c-0510ede3165b)

## <br><br>Observações

- As músicas foram obtidas do Spotify via Top Musics Brasil.
- Somente 20 músicas estão na base de dados, 1 para cada artista, então as músicas são todas iguais para um dado artista.
- O player pode levar alguns segundos para iniciar.
