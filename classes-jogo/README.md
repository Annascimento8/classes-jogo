# ⚔️ Escrevendo as Classes de um Jogo

Desafio da [DIO](https://www.dio.me/) usando **variáveis, operadores, laços de repetição, estruturas de decisão, funções, classes e objetos**.

## 📌 Objetivo
Classe `Heroi` com as propriedades `nome`, `idade` e `tipo`, e o método `atacar()`, que exibe `o {tipo} atacou usando {ataque}`.

| Tipo | Ataque |
|---|---|
| mago | magia |
| guerreiro | espada |
| monge | artes marciais |
| ninja | shuriken |

Tipos fora da tabela usam "um ataque desconhecido".

## ▶️ Como executar
```bash
node index.js
```

## 🖨️ Saída
```
o mago atacou usando magia
o guerreiro atacou usando espada
o monge atacou usando artes marciais
o ninja atacou usando shuriken
```

## 📁 Estrutura
- `Heroi.js`: classe `Heroi` com o método `atacar`
- `index.js`: cria vários heróis e percorre a lista com um `for`
