# useMemo vs useCallbak

## useMemo`:`

É usado quando a gente fez um calculo é quer guardar a REFERÊNCIA para o RESULTADO daquele calculo;

O useMemo() é um hook do React que permite otimizar o desempenho de componentes funcionais, evitando cálculos desnecessários ou repetidos. Ele memoriza o valor de retorno de uma função e só o recalcula quando as dependências especificadas mudam.

Ao utilizar o useMemo(), você pode evitar que uma função seja executada toda vez que o componente for renderizado, economizando tempo de processamento. Isso é especialmente útil quando você possui cálculos complexos ou chamadas de API que não precisam ser feitas novamente, a menos que as dependências mudem.

Em resumo, o useMemo() é uma ferramenta poderosa para melhorar o desempenho de componentes funcionais, permitindo que você controle quando uma função deve ser recalculada com base em suas dependências.

## useCallback`:`

No useCallback estou guardando uma REFERÊNCIA para uma FUNÇÃO. A gente tem uma fórmula e queremos guardar a refencia da fórmula

O useCallback() é um hook do React que permite otimizar o desempenho de componentes funcionais, especialmente quando se trata de passar funções como propriedades para componentes filhos.

Quando uma função é passada como propriedade para um componente filho, ela é recriada sempre que o componente pai é renderizado. Isso pode causar problemas de desempenho, pois os componentes filhos podem ser renderizados novamente desnecessariamente.

Com o useCallback(), você pode memorizar a função e garantir que ela seja recriada apenas quando suas dependências mudarem. Isso significa que a função será a mesma em várias renderizações, evitando que os componentes filhos sejam renderizados novamente sem necessidade.

Além disso, o useCallback() também é útil quando você precisa passar uma função como dependência para outros hooks, como o useEffect(). Ao usar o useCallback(), você pode garantir que a função seja a mesma em cada renderização, evitando efeitos colaterais indesejados.

Em resumo, o useCallback() é uma ferramenta essencial para otimizar o desempenho de componentes funcionais, permitindo que você memorize funções e evite renderizações desnecessárias de componentes filhos.
