function metaMarvo(nombreUsuario) {
  alert(`hola ${nombreUsuario} como estas ?`);
  let marca = prompt(
    `${nombreUsuario} que marca de celulares desea comprar? Tenemos disponible Samsung, Xiaomi y Iphone`
  );
  while (marca != "ESC") {
    switch (marca) {
      case "samsung":
        let celular1 = parseInt(
          prompt(`
            1-Samsung Galaxy A50 
            2-Samsung galaxy A70  
            3-Samsung galaxy fold 4 `)
        );
        while (celular1 != "ESC") {
          while (celular1 == 1 || 2 || 3)
            switch (celular1) {
              case 1:
                alert("Tu samsung galaxy A50 fue comprado exitosamente! ");
                break;
              case 2:
                alert("Tu Samsung galaxy A70 fue comprado exitosamente!");
                break;
              case 3:
                alert("Tu Samsung galaxy fold 4 fue comprado exitosamente!");
                break;
              default:
                alert("No tenemos ese modelo de celular");
                celular1 = prompt("Ingrese nuevamente el modelo de celular");
                break;
            }
        }

      case "xiaomi":
        let celular2 = parseInt(
          prompt(`
            1-Xiomi redmi note 11
            2-Xiomi redmi note 12
            3-Xiomi redmi note 13`)
        );
        while (celular2 != "ESC") {
          switch (celular2) {
            case 1:
              alert("Tu xiomi redmi note 11 fue comprado exitosamente");
              break;
            case 2:
              alert("Tu xiomi redmi note 12 fue comprado exitosamente");
              break;
            case 3:
              alert("Tu xiomi redmi note 13 fue comprado exitosamente");
              break;
            default:
              alert("No tenemos ese modelo de celular");
              break;
          }
          break;
        }
        break;
      case "iphone":
        let celular3 = parseInt(
          prompt(`
            1-Iphone 12
            2-Iphone 13
            3-iphone 14`)
        );
        while (celular3 != "ESC") {
          switch (celular3) {
            case 1:
              alert("Tu iphone 12 fue comprado exitosamente");
              break;
            case 2:
              alert("Tu iPhone 13 fue comprado exitosamente");
              break;
            case 3:
              alert("Tu iPhone 14 fue comprado exitosamente");
              break;
            default:
              alert("No tenemos ese modelo de celular");
              break;
          }

          break;
        }
      default:
        alert("No tenemos esa marca de celular");
        marca = prompt("Ingrese nuevamente la marca");
    }

    break;
  }
}

nombreUsuario = prompt("Ingrese su nombre");

metaMarvo(nombreUsuario);
