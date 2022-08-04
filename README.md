<h1> Marcha Express<br> 
Transportadora - entregas sustentáveis</h1>
<br>

<h3> Para atender a Transportadora Express-Express desenvolvemos uma API REST customizada para o gerenciamento de entregas sustentáveis pela transportadora, através da API Marcha Express. <br>
Marcha Express é o núcleo de entrega sustentável, considerando volumes em pesos e quantidades limitadas para entregas em veículos sustentáveis, como a bicicleta. 
</h3>
<br>

<h2> Status do projeto</h2>
<h4> 
	🚧  Em construção...  🚧
</h4>
<br>

<h2>Sobre o projeto</h2>
<p> Como projeto final do módulo4 do curso de Web FullStack, desenvolvemos uma API-REST no tema: Transportadora, a API possui como entidades disponíveis para acesso:</p>
<li>comerciante
<li>cliente
<li>carga
<li>envio
<p> 
<br>

<h2>Métodos</h2>

<p>As requisições para a API devem seguir os padrões:</p>
<p>Método</p>
<li>GET - Retorna informações de um ou mais registros.
<li>POST - Utilizado para criar um novo registro.
<li>PUT - Atualiza dados de um registro ou altera sua situação.
<li>DELETE - Remove um registro do sistema.
<br><br>

<h2>Como utilizar:</h2>

<p> Para que o clone do repositório rode você precisará <a href="https://git-scm.com/ target="_blank">Git</a>, <a href="https://nodejs.org/en/" target="_blank">Node.JS v16.16.0 or higher</a> + <a href="https://docs.npmjs.com/cli/v8/commands/npm-install" target="_blank">Npm v6.14.11</a>
instalados em seu computador. Você também precisará de uma plataforma para rodar a API, sugerimos o <a href="https://insomnia.rest/download"target="_blank">Insomnia</a> para conseguir testar as rotas. 
Você precisará também, utilizar as linhas de comando:</p>

```
# Clone este repositório
$ git clone git@github.com:gnlto/ExpressExpress-API.git

# Abra o repositório em seu editor de código
$ cd ExpressExpress-API

# Instale as dependências
$ npm install

# Inicie o banco de dados
$ npx sequelize-cli db:migrate

# Inicie o projeto
$ npm start

```
<br>	
<h2>Exemplo de rotas:</h2>


	GET - Todos os clientes http://localhost:3000/cliente
	GET - um cliente http://localhost:3000/cliente/:id
	POST - criar cliente http://localhost:3000/cliente
	PUT - atualizar cliente http://localhost:3000/cliente/:id
	DELETE -deletar cliente http://localhost:3000/cliente/:id
	
	<--! Para as demais entidades é só alterar na rota, com a entidade desejada-->
<br>

<h2>Informações importantes:
<p><i>json para as entidades:</i></p>
</h2>

```
Cliente 

    "Nome": "string",
    "CPF": "string",
    "E_mail": "string",
    "Estado": "string"

Comerciante

    "Razao_Social": "string",
    "CNPJ": "string",
    "E_Commerce": "string",
    "Contato": "string",
    "Estado": "string"

 Carga

    "Peso_KG": "string",
    "Numero_de_volume": "string",
    "Fragil": boolean,
    "Seguro": boolean

Envio

    "Meio_de_transporte": "string",
    "Prazo": integer,
    "ComercianteId": integer FK,
    "ClienteId": integer FK,
    "CargaId": integer FK
```
</h2>
<br>
<p><b>Para a entidade <i>Cliente</i></b>:
<li>o atributo Nome pode conter de 3 a 50 caracteres,
<li>o atributo CPF deve conter 11 caracteres numéricos, 
<li>o atributo email deve conter caracter "@",
<li>o atributo estado deve ser preenchido com o nome do estado por extenso;
</p>
<p><b>Para a entidade <i>Comerciante</i></b>:
<li>o atributo razão social pode conter de 3 a 50 caracteres,
<li>o atributo CNPJ deve conter 14 caracteres numéricos,
<li>o atributo e-commerce pode conter de 3 a 50 caracteres,
<li>o atributo estado deve ser preenchido com o nome do estado por extenso;
</p>
<p><b>Para a entidade <i>Carga</i></b>:
<li>os atributos "Frágil"e "Seguro" são booleanos e os valores passados devem ser true ou false, 
<li>a entidade Peso deve estar entre 0.1 e 50.0Kg,
<li>a entidade Volume deve ser entre 1 e 5;
</p>
<p><b>Para a entidade <i>Envio</i></b>:
<li>o atributo meio de transporte é limitado à: bicicleta, bicicleta elétrica e moto elétrica,
<li>para a entidade prazo a regra de negócio é de 1 a 48h, 
<li>para as entidades que são foreign key é necessário informar o ID que deseja relacionar, e o ID das entidades, comerciante, cliente e carga precisam ser existentes no banco de dados.
</p>
<br>
	
<h2>Desenvolvedores</h2>

<li><a href="https://github.com/biateisi">Beatriz Teixeira</i>
<li><a href="https://github.com/gnlto">Gustavo Pereira</i>
<li><a href="https://github.com/LucianoFreitas16">Luciano Freitas</i>
<li><a href="https://github.com/pedrotoni">Pedro de Toni</a></li>
<br><br>


<li> Utilizados no projeto:</li><br>

<p>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" height="40" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width="40" height="40" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width="40" height="40"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" width="40" height="40" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="40" height="40"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" width="40" height="40"/>
</p>