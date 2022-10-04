function metaMarvo(nombreUsuario) {
  alert(`hola ${nombreUsuario} como estas ?`);

  let marca = prompt(
    `${nombreUsuario} que marca de celulares desea comprar? Tenemos disponible Samsung, Xiaomi y Iphone`
  ).toLowerCase();
  //----------------------------------------------------------------SAMSUNG--------------------------------------------------------
  if (marca == "samsung") {
    let celular1 = parseInt(
      prompt(` (utilizar numero, ejemplo: 1) Nuestras opciones de SAMSUNG son: \n
      1-Samsung Galaxy A50 
      2-Samsung galaxy A70  
      3-Samsung galaxy fold 4 `)
    );
    if (celular1 === 1) {
      alert("Tu samsung galaxy A50 fue comprado exitosamente! ");
    } else if (celular1 === 2) {
      alert("Tu Samsung galaxy A70 fue comprado exitosamente!");
    } else if (celular1 === 3) {
      alert("Tu Samsung galaxy fold 4 fue comprado exitosamente!");
    } else {
      while (celular1 != 1 || celular1 != 2 || celular1 != 3) {
        celular1 = parseInt(
          prompt(`El numero ingresado no es valido para una de estas opciones. Nuestras opciones de samsung son:\n
        1-Samsung Galaxy A50 
        2-Samsung galaxy A70  
        3-Samsung galaxy fold 4 `)
        );
        if (celular1 === 1) {
          alert("Tu samsung galaxy A50 fue comprado exitosamente! ");
          break;
        } else if (celular1 === 2) {
          alert("Tu Samsung galaxy A70 fue comprado exitosamente!");
          break;
        } else if (celular1 === 3) {
          alert("Tu Samsung galaxy fold 4 fue comprado exitosamente!");
          break;
        }
      }
    }
  }
  // ----------------------------------------------------------------XIAOMI--------------------------------------------------------
  if (marca == "xiaomi") {
    let celular1 = parseInt(
      prompt(` (utilizar numero, ejemplo: 1) Nuestras opciones de XIAOMI son: \n
      1-Xiaomi redmi note 10 
      2-Xiaomi redmi note 15   
      3-Xiaomi pocophone 4  `)
    );
    if (celular1 === 1) {
      alert("Tu Xiaomi redmi note 10 fue comprado exitosamente! ");
    } else if (celular1 === 2) {
      alert("Tu Xiaomi redmi note 15 fue comprado exitosamente!");
    } else if (celular1 === 3) {
      alert("Tu Xiaomi pocophone 4 fue comprado exitosamente!");
    } else {
      while (celular1 != 1 || celular1 != 2 || celular1 != 3) {
        celular1 = parseInt(
          prompt(`El numero ingresado no es valido para una de estas opciones. Nuestras opciones de XIAOMI son:
    1-Xiaomi redmi note 10 
    2-Xiaomi redmi note 15   
    3-Xiaomi pocophone 4 `)
        );
        if (celular1 === 1) {
          alert("Tu Xiaomi redmi note 10 fue comprado exitosamente! ");
          break;
        } else if (celular1 === 2) {
          alert("Tu Xiaomi redmi note 15 fue comprado exitosamente!");
          break;
        } else if (celular1 === 3) {
          alert("Tu Xiaomi pocophone 4 fue comprado exitosamente!");
          break;
        }
      }
    }
  }

  if (marca == "iphone") {
    let celular1 = parseInt(
      prompt(` (utilizar numero, ejemplo: 1) Nuestras opciones de IPHONE son: \n
      1-Iphone 12 
      2-Iphone 13   
      3-Iphone 14   `)
    );
    if (celular1 === 1) {
      alert("Tu Iphone 12 fue comprado exitosamente! ");
    } else if (celular1 === 2) {
      alert("Tu Iphone 13 fue comprado exitosamente!");
    } else if (celular1 === 3) {
      alert("Tu Iphone 14 fue comprado exitosamente!");
    } else {
      while (celular1 != 1 || celular1 != 2 || celular1 != 3) {
        celular1 = parseInt(
          prompt(`El numero ingresado no es valido para una de estas opciones. Nuestras opciones de XIAOMI son:\n
          1-Iphone 12 
          2-Iphone 13   
          3-Iphone 14 `)
        );
        if (celular1 === 1) {
          alert("Tu Iphone 12 fue comprado exitosamente! ");
          break;
        } else if (celular1 === 2) {
          alert("Tu Iphone 13 fue comprado exitosamente!");
          break;
        } else if (celular1 === 3) {
          alert("Tu Iphone 14 fue comprado exitosamente!");
          break;
        }
      }
    }
  }
}

nombreUsuario = prompt("Ingrese su nombre");

metaMarvo(nombreUsuario);

//       case "xiaomiCel":
//         let celular2 = parseInt(
//           prompt(`
//             1-Xiomi redmi note 11
//             2-Xiomi redmi note 12
//             3-Xiomi redmi note 13`)
//         );
//         while (celular2 != "ESC") {
//           switch (celular2) {
//             case 1:
//               alert("Tu xiomi redmi note 11 fue comprado exitosamente");
//               break;
//             case 2:
//               alert("Tu xiomi redmi note 12 fue comprado exitosamente");
//               break;
//             case 3:
//               alert("Tu xiomi redmi note 13 fue comprado exitosamente");
//               break;
//             default:
//               alert("No tenemos ese modelo de celular");
//               break;
//           }
//           break;
//         }
//         break;
//       case "iphoneCel":
//         let celular3 = parseInt(
//           prompt(`
//             1-Iphone 12
//             2-Iphone 13
//             3-iphone 14`)
//         );
//         while (celular3 != "ESC") {
//           switch (celular3) {
//             case 1:
//               alert("Tu iphone 12 fue comprado exitosamente");
//               break;
//             case 2:
//               alert("Tu iPhone 13 fue comprado exitosamente");
//               break;
//             case 3:
//               alert("Tu iPhone 14 fue comprado exitosamente");
//               break;
//             default:
//               alert("No tenemos ese modelo de celular");
//               break;
//           }

//           break;
//         }
//       default:
//         alert("No tenemos esa marca de celular");
//         marca = prompt("Ingrese nuevamente la marca");
//     }

//     break;
//   }
// }
