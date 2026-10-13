# Validação

Data: 12/10/2026.

ZIP SHA-256: `4b9184e7a4730ce221b6504f50bb6a0fdc0cfa52d309217c6612d68b629259bc`.

EXE SHA-256: `bdb0d3a9491bd76953e6e807d15804debaa101f271d30bd5b29665641b7`. O executável extraído é idêntico ao T-Notas.exe indicado.

REA extraiu o pacote. Metadados, CIL e objetos serializados permitiram recuperar claves, fases, posições, pesos, teclado, prática, dificuldades e progressão. O executável original foi aberto e seu menu e configurações de treino observados. Foram recuperadas 114 texturas, 46 áudios e 10 TextAssets.

Dez testes automatizados passaram: notas de referência das claves, todas as posições e existência de seus arquivos de áudio, SVG simples/duplo, sorteio dos grupos de linhas/espaços, pesos e duplicações da prática, alternância de claves no piano, prevenção de repetição, 24 fases e quatro dificuldades, vitória por tempo, aplicação atrasada de erro e derrota/prática.

No navegador, a tecla 5 respondeu corretamente Sol e contabilizou um acerto. O relógio continuou até o fim da fase. Foram conferidos áudio original, pauta dupla, fundamentos, progresso e layout móvel.

A validação do áudio confirma carregamento e estado de reprodução; não é medição acústica. Não houve teste físico em todos os dispositivos. O layout web é adaptado e não foi comparado pixel a pixel com a tela nativa.
