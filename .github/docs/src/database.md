# Database `database.js`

- `#database = {}` - criado como um objeto para possibilitar a criação de mais tipos de dados.
- o `#` que acompanha `database` confere privacidade a propriedade `database` da classe. Desse modo, classes externas ou outros arquivos não poderão assesar propriedades e métodos.
- `Database.select()` - caso a tabela não exista, a lógica não permitirá o retorno de um elemento `undefined`. Logo, o ideal é retornar um array vazio
- `Database.insert()` - se já existe um array, será adicionado um novo item na tabela (parâmentro). Se não, será criado um novo array (tabela) com o item especificado
- `const databasePath = new URL()` - evita-se a criação de arquivos `db.json` fora da pasta pricipal onde se executa o servidor em ambiente de desenvolvimento. O parâmetro `import.meta.url` informa o caminho absoluto, representado por `databasePath.pathname`
- `constructor() (class Database)` - será executado assim que o banco de dados for instanciado. Quando a leitura dos dados terminar, por ser um `<Promise>`, os dados serão salvos dentro do arquivo `db.json`. o `catch()` irá persistir na recriação do arquivo em caso de delação do banco de dados.
- `Database.#persist()` - contem o método `fs.writeFile` do módulo `node:fs/promises` nativo do node. o primeiro parâmetro é próprio alias do database e o segundo é o tipo de aquivo, no caso JSON com o método `JSON.stringify` que irá converter o dados para uma string dentro do objeto Json.

> Voltar para o [`index`](../index.md)
