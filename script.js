const openModel = document.querySelector("#openmodal");
const closeModel = document.querySelector("#closemodal");
const model = document.querySelector("#modal");

// code to open popup on button click
openModel.addEventListener("click",()=>{
  model.classList.add("open");
})

// code to close popup on button click
closeModel.addEventListener("click",()=>{
  model.classList.remove("open");
})
