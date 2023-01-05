export const revealWords = () => {
  
const reveal = document.querySelectorAll(".reveal");


  reveal.forEach((elem) => {
    let child = document.createElement("span");
    let parent = document.createElement("span");
    child.classList.add("child");
    parent.classList.add("parent");

    const totalWords = elem.textContent.split(" ");
    totalWords.map((word ,index) => {
        
        
        let span = document.createElement("span");
        span.innerText = word;

        child.append(span);
      
    });

    parent.appendChild(child);
    elem.innerHTML = "";
    elem.appendChild(parent);
  });
};



export const revealHeadingWords = () => {
  
  const revealHeading = document.querySelectorAll(".reveal-heading");
  
  
    revealHeading.forEach((elem) => {
      let child = document.createElement("span");
      let parent = document.createElement("span");
      child.classList.add("child");
      parent.classList.add("parent");
  
      const totalWords = elem.textContent.split(" ");
      totalWords.map((word ,index) => {
          
          
          let span = document.createElement("span");
          span.innerText = word;
  
          child.append(span);
        
      });
  
      parent.appendChild(child);
      elem.innerHTML = "";
      elem.appendChild(parent);
    });
  };
  