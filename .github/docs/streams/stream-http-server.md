# Stream `stream-http-server.js`

- relações de propriedades do `createServer()` - `req` => ReadableStream / `res` => WritableStream

- `const buffers = []` - array de buffers. Junta os pedações dos recursos lidos

- `for await (const chunk of req) {buffers.push(chunk) }` - percorre cada parte da requisição e após a captação completa (depois de ler todo o recurso), o código abaixo será executado. Essa sintaxe e lógica é utilizada quando o recurso precisa ser lido por completo antes de ser utilizado.

> Voltar para o [`index`](../index.md)
