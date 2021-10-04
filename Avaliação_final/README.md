# Avaliação final de Programação Imperativa

## Funcionalidade

- `aluno.js`: é a classe Aluno, usada para criar os alunos distintos. Pode-se adicionar notas, incrementar faltas e calcular a média do aluno. Recebe o nome do aluno.
- `estudantes.js`: é a lista de estudantes utilizada, uma array de objetos do tipo Aluno. Ela é gerada através de um loop for, onde 3 notas randômicas, de 0 a 10, são adicionadas a cada aluno, bem como uma quantidade randômica de faltas, de 0 a 3. É possível manipular a quantidade de estudantes gerada alterando o valor da constante NUM_ALUNOS.
- `atividade-final.js`: é o arquivo principal do projeto. Define o objeto curso, que utilizada a lista de estudantes importada de `estudantes.js`, e possui métodos para adicionar alunos, verificar se um aluno foi aprovado e verificar se todos os alunos foram aprovados.

Por padrão, o código lista no console a lista completa de estudantes e uma array de booleans indicando quais alunos foram aprovados ou reprovados. Pode-se modificar o que é imprimido no console apenas adicionando ou removendo `console.log()` após a definição do objeto literal curso, em `estudantes.js`.

## Como executar:

- Clone esse repositório em algum local de sua escolha.
  - `git clone https://github.com/tiago98751/Programa-o-Imperativa---CTD.git`
- Entre na pasta `avaliação_final`.
  - `cd ./Avaliação_final/`
- Execute o arquivo `atividade-final.js` utilizando o Node.
  - `node atividade-final.js`

Obs: usuários do Windows devem ter node definido nas variáveis de ambiente. Se não marcou essa opção durante a instalação, deve passar o caminho completo até o executável node.
