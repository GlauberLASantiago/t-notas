# T-Notas para a web

Recriação do aplicativo educativo T-Notas a partir de `T-NotasDeploy4.zip`, com o jogo de leitura de notas, configurações e recursos recuperados do original com REA.

## Funcionalidades

- Exercícios nas claves de Sol, Fá, Dó e na pauta dupla de piano.
- Seis fases por clave: linhas, espaços, ambos, suplementares até o segundo espaço, até o quarto espaço e tudo.
- Quatro dificuldades: Elementar, Fácil, Médio e Difícil.
- Respostas por botões ou teclas **1–7**, correspondendo a **Dó, Ré, Mi, Fá, Sol, Lá, Si**.
- Prática com linhas, espaços e suplementares selecionáveis, sem limite de tempo.
- Perfis e progresso salvos localmente no navegador.
- Cinco capítulos originais de fundamentos, com partituras, diagramas e poemas.
- Amostras de notas e músicas recuperadas do original.

São somente notas naturais, como no aplicativo original; não foi acrescentado um modo de acidentes ou identificação auditiva sem pauta.

## Executar

Node.js 20 ou superior; não há dependências para instalar.

```sh
npm start
```

Abra http://127.0.0.1:4189. Testes:

```sh
npm test
```

Pode ser hospedado em qualquer servidor HTTP estático, incluindo GitHub Pages sob `/t-notas/`. Áudio exige interação do usuário. Perfis são específicos deste navegador; limpar os dados do site remove o progresso local.

## Regras preservadas

Acertos zeram a sequência de erros e contam imediatamente. Erros contam após a pausa do feedback. Atingir a meta não encerra antecipadamente; a vitória é avaliada quando o tempo acaba. O limite de erros consecutivos pode causar derrota antes do término. Trocar a dificuldade reinicia o progresso daquela clave.

O sorteio evita repetir imediatamente a mesma posição. A pauta dupla alterna entre Sol e Fá com igual probabilidade. As fases de suplementares conservam o peso de 50% entre os grupos recuperados. A prática preserva os espaços adjacentes e as duplicações de posições da lista original.

## Fidelidade e adaptações

Fundo, logotipo, botões, áudios e teoria são recursos recuperados. A pauta é SVG dinâmico e o layout adapta as telas a celulares e outros tamanhos. Não é uma exportação WebGL nem réplica pixel a pixel. O áudio das perguntas usa os arquivos originais nomeados de G1 a F6; caso a reprodução falhe, há síntese de emergência no navegador.

Veja [comportamento original](docs/original-behavior.md) e [validação](docs/validation.md).

## Créditos

Conceito e música: Glauber Santiago e Terence P. Santos. Programação original: Elias Ximenes. Arte: Emyr Ferrario. iMAX Games, MZO Interativa, UFSCar, UAB, SEaD e Licenciatura em Educação Musical.

Os recursos foram extraídos do pacote indicado pelo proprietário do repositório. Os créditos são mantidos; nenhuma licença de terceiros ausente do pacote foi presumida.
