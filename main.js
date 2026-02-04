/*
  Gioco dove si deve indovinare il numero da 1 a 10 
*/

/* 
  ==============
  Elementi HTML 
  ==============
*/
let inputInsertNumber = document.querySelector("#inputInsertNumber");
let buttonSubmit = document.querySelector("#buttonSubmit");
let spanRandomNumber = document.querySelector("#spanRandomNumber");
let spanWinOrLose = document.querySelector("#spanWinOrLose");
let error = document.querySelector("#error");

/*
  =============================================
  Metodo ramdom, che genera un numero da 1 a 10
  =============================================
*/
let randomNumber = Math.floor(Math.random() * 10 + 1);

/*
  ========================================================
  Evento, che al submit deduce in base al numero inserito,
  si abbia vinto oppure perso
  ========================================================
*/
buttonSubmit.addEventListener("click", () => {
  // Inserimeto del valore deve essere di tipo number
  let numberInsert = Number(inputInsertNumber.value);

  // Se si inserisce un numero non valido
  if (numberInsert <= 0 || numberInsert > 10 || isNaN(numberInsert)) {
    error.textContent = "Inserire un numero valido";
    return;
  }

  // mostrare il numero generato
  spanRandomNumber.textContent = randomNumber;

  // nascondere errori precedenti
  if (error) error.classList.add("hidden");

  /*
    ==========================================
    Sistema, dove mostra dati inerenti nel
    caso di numero indovinato oppure no.
    Con messaggi, style e audio appositi
    ==========================================
  */
  if (numberInsert === randomNumber) {
    winOrLose(
      "HAI VINTO!!!",
      "bg-green-500",
      "audio/11l-victory-1749704550711-358777.mp3",
    );
    return;
  } else {
    winOrLose(
      `Mi dispiace hai perso!`,
      "bg-red-500",
      "audio/wrong-answer-21-199825.mp3",
    );
    return;
  }

  /*
    =========================================================
    Funzione che gestisce l'esito della partita. 
    Mostra il messaggio finale, applica lo
    stile grafico corretto, riproduce l'audio associato
    e disabilita input e bottone per impedire nuovi tentativi
    =========================================================
  */
  function winOrLose(content, classAdd, audioFile) {
    spanWinOrLose.textContent = content;
    spanWinOrLose.classList.add(classAdd);
    const audio = new Audio(audioFile);
    audio.play();
    numberInsert.disabled = true;
    buttonSubmit.disabled = true;
  }
});
