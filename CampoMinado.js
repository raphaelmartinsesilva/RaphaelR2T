//campo minado - 3 parâmetros (horizontal, vertical, número de bombas) - função;

//Função jogar - passar cordenadas (x e y de onde jogar), ;

//Avisar ao encontrar uma bomba ou vencedor;

//Printar quantas bombas faltam e tempo restante

//Math.floor(Math.random() * 100)//

let posicao = []

function areaTotal (linhas, colunas, bombas){
  for (let l = 0; l < linhas; l++){
    posicao[l] = []
    for (let c = 0; c < colunas; c++)
    posicao[l][c] = 0

    let bombas = Math.floor(Math.random(linhas * colunas) / 4)
      }
      console.log(posicao)

  }

  areaTotal(10, 10)