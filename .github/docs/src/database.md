# Database `database.js`

- `#database = {}` - criado como um objeto para possibilitar a criação de mais tipos de dados.
- o `#` que acompanha `database` confere privacidade a propriedade `database` da classe. Desse modo, classes externas ou outros arquivos não poderão assesar propriedades e métodos.
- `Database.select()` - caso a tabela não exista, a lógica não permitirá o retorno de um elemento `undefined`. Logo, o ideal é retornar um array vazio
- `Database.insert()` - se já existe um array, será adicionado um novo item na tabela (parâmentro). Se não, será criado um novo array (tabela) com o item especificado

> Voltar para o [`index`](../index.md)
