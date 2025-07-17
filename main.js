//espera a que el contenido del documento HTML se haya cargado completamente
document.addEventListener("DOMContentLoaded", () => {

  //busca el formulario que tiene el id="task-form" para poder detectar cuando se envia una nueva tarea
  const form = document.getElementById("task-form");

  //obtiene el campo de texto donde el usuario escribe la tarea
  const input = document.getElementById("task-input");

  //obtiene la lista donde se mostraran las tareas agregadas
  const list = document.getElementById("task-list");

  //agrega un evento al formulario que se activa cuando se envia
  form.addEventListener("submit", (e) => {
    e.preventDefault(); //evita que se recargue la pagina al enviar el formulario

    //obtiene el texto escrito por el usuario y le quita los espacios en blanco al principio y final
    const text = input.value.trim();

    //si el campo esta vacio no hace nada (se sale de la funcion)
    if (!text) return;

    //crea un boton para marcar una tarea como hecha
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Hecho"; //texto que se mostrara en el boton
    doneBtn.className = "done"; //le asigna una clase CSS para estilos

    //evento al hacer clic en el boton "hecho"
    doneBtn.addEventListener("click", () => {
      li.classList.toggle("done"); //agrega o quita la clase "done" al <li>

      //si la tarea esta marcada como hecha lanza confeti
      if (li.classList.contains("done")) {
        confetti({
          particleCount: 100, //cuantas particulas de confeti
          spread: 70, //que tanto se dispersan
          origin: { y: 0.6 } //desde donde aparece el confeti
        });
      }
    });

    //crea un nuevo elemento <li> para agregar a la lista de tareas
    const li = document.createElement("li");

    //crea un <span> que contiene el texto de la tarea
    const span = document.createElement("span");
    span.textContent = text; //pone el texto de la tarea
    span.style.flex = "1"; //ocupa el espacio restante en el <li>
    span.style.cursor = "pointer"; //cambia el cursor al pasar el mouse

    //al hacer clic en el texto de la tarea se marca o se desmarca como hecha
    span.addEventListener("click", () => {
      li.classList.toggle("done");
    });

    //crea el boton "eliminar" para borrar la tarea
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar"; //texto del boton
    deleteBtn.className = "delete"; //clase CSS

    //evento para eliminar la tarea al hacer clic en el boton
    deleteBtn.addEventListener("click", () => {
      li.remove(); //borra el elemento <li> de la lista
    });

    //agrega el botón "hecho", el texto y el boton "eliminar" al <li>
    li.appendChild(doneBtn);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    //agrega la tarea completa (<li>) a la lista
    list.appendChild(li);

    //limpia el campo de texto para escribir otra tarea nueva
    input.value = "";
  });
});

