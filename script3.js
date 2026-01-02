const box = document.getElementById("box");
  let typedText = "";

  box.addEventListener("input", (e) => {
    typedText = e.target.value;
    console.log(typedText);
  });