function calcularFrete(preco){
    if(preco < 50){
      console.log("Frete não disponível!")
    }
    if(preco >= 50 && preco < 200){
      console.log("Frete com custo adiconal!")
    }
    if(preco >= 200){
      console.log("Frete grátis!")
    }
}

calcularFrete(10);  //Frete não disponível!
calcularFrete(50);  //Frete com custo adiconal!
calcularFrete(100); //Frete com custo adiconal!
calcularFrete(200); //Frete grátis!
calcularFrete(250); //Frete grátis!