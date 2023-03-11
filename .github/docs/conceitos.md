# Conceitos Importantes

**Rotas**: são meios de entrada e saídas que auxliam na execução de diferentes operações dentro do back- end

**Stream**: uma forma de representar uma sequencia de bits. Podem ser entendidas como coleções de dados, exatamente como Arrays ou objetos, mas a diferença é que os dados em uma stream podem não estar disponíveis todos de uma vez, além disso, eles também não precisam utilizar a memória, ou seja, não é necessário que esses bits sejam armazenados na RAM. Em outras palavras: é ler pequenas partes de recursos e já conseguir trabalhar com esses recursos antes de sua leitura completa. Toda porta de saída e entrada no Node são streams.

**Buffer**: Um buffer é um espaço de memória (tipicamente RAM) que armazena dados binários. No Node.js, podemos acessar esses espaços de memória com a classe Buffer integrada. Os buffers armazenam uma sequência de números inteiros, de maneira similar às matrizes em JavaScript.

**Middlewares:**: São interceptadores, que recebe a requisição que lida com essa requisição da melhor forma para a aplicação. Middlewares no Node.js são funções que são executadas entre o recebimento de uma requisição HTTP e o envio da resposta correspondente. Em outras palavras, um middleware é uma camada intermediária entre o servidor e o cliente que pode processar a requisição, fazer modificações nela, ou executar alguma ação antes de retornar a resposta. Os middlewares no Node.js são geralmente utilizados para realizar tarefas comuns, como a validação de dados, o gerenciamento de sessões, o controle de acesso, o log de requisições, entre outras. Eles permitem que o desenvolvedor separe a lógica de negócio do servidor web, tornando o código mais organizado e fácil de manter. Os middlewares no Node.js podem ser criados pelo próprio desenvolvedor, utilizando as funções nativas do Node.js, ou podem ser importados de bibliotecas externas, como o Express.js, que é uma das bibliotecas mais populares para o desenvolvimento de servidores web no Node.js.

Voltar para o [`index`](./index.md)
