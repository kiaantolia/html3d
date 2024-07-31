function docs(){
  document.body.innerHTML = "hellow world";
  console.log("hewwo");
}

// Attach the function to the global window object
window.docs = docs;
