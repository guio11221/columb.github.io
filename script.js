

function calcular() {
    

    const k = 9 * Math.pow(10, 9); // Constante de Coulomb
    const e0 = 8.85 * Math.pow(10, -12); // Permissividade do vácuo
    const q1 = parseFloat(document.getElementById("q1").value);
    const q2 = parseFloat(document.getElementById("q2").value);
    const r = parseFloat(document.getElementById("r").value);
    const F = k * (q1 * q2) / (e0 * Math.pow(r, 2));
    //canvas

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const largura = 400;
    const altura = 200;
  

    if(!q1 || !q2){
      return  Swal.fire({
            title: "Resultado",
            html: `Dados invalidos..!!</b>.`,
            icon: "error",
            confirmButtonText: "OK",
          });
    }else
    
        Swal.fire({
          title: "Resultado",
          html: `A força elétrica entre as cargas é de <b>${F.toFixed(2)} Newtons</b>.`,
          icon: "success",
          confirmButtonText: "OK",
        });
    
            canvas.width = largura;
            canvas.height = altura;
          
            // Desenhe um retângulo azul na imagem
            ctx.fillStyle = "blue";
            ctx.fillRect(0, 0, largura, altura);
          
            // Desenhe o texto na imagem
            ctx.fillStyle = "white";
            ctx.font = "bold 24px Arial";
            ctx.fillText("Resultado da operação:", 20, 50);
            ctx.fillText(`${F.toFixed(2)} `, 20, 100);
          
            // Converta a imagem para PNG e exiba-a na tela
            const img = new Image();
            img.src = canvas.toDataURL("image/png");
            document.body.appendChild(img);
      
  }
  