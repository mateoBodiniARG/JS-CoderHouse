class Notebook {
  constructor(id, marca, modelo, precio, stock) {
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.stock = stock;
  }
}

const notebook0 = new Notebook(0, "Lenovo", "LE8391", 200, 10);
const notebook1 = new Notebook(1, "Samsung", "SA900", 100, 5);
const notebook2 = new Notebook(2, "Apple", "AP190", 700, 3);
const notebook3 = new Notebook(3, "Hp", "HP673", 450, 30);
const notebook4 = new Notebook(4, "Asus", "AS490", 320, 15);

const misNotebooks = [notebook0, notebook1, notebook2, notebook3, notebook4];

let screenText = "Productos disponibles, seleccione el numero que desea: \n";
for (notebook of misNotebooks) {
  screenText += `${notebook.id} - ${notebook.marca} ${notebook.modelo}  a un precio de $ ${notebook.precio} \n`;
}
let opcionUser = parseInt(prompt(screenText));

const notebookElegida = misNotebooks.find(
  (notebook) => notebook.id === opcionUser
);

if (opcionUser = notebookElegida) {
  alert(`La notebook selecionada de la marca ${notebookElegida.marca} con el modelo ${notebookElegida.modelo} y un precio de $ ${notebookElegida.precio} fue agregada al carrito exitosamente!`);
} else
{
  alert(
    "  😞 Lamentamos las molestias, pero el dato ingresado no corresponde a un id de las notebooks anteriormente mostradas"
  );
}
