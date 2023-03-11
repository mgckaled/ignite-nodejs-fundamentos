# Stream `fundamentals.js`

propriedades de `_read()` e `_write()`- _chunck_: pedaço do recurso lido na stream de leitura, que está sendo enviado pelo método push(); _enconding_: como a informação está codificada => `type BufferEncoding = "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "base64url" | "latin1" | "binary" | "hex"`; _callback_: função que a stream chama quando ela termina o que tem de fazer com o recurso.

propriedades de `callback()` - param 1: gerenciamento de erros; param 2: dado trasformado

`new OneToHundredStream().pipi(...).pipe(...)` - os dados lidos de segundo em segundo estão sendo escritos de segundo a segundo já alterados pelas classes de escrita e transformação.

> Voltar para o [`index`](../index.md)
