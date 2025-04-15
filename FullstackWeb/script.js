function sayHello() {
    alert("Hello from our project!");
  }
  
  const backgrounds = [
    "linear-gradient(to bottom right, #f9fbe7, #e8f5e9)",  // green
    "linear-gradient(to bottom right, #fff3e0, #ffe0b2)",  // orange
    "linear-gradient(to bottom right, #ede7f6, #d1c4e9)",  // purple
    "linear-gradient(to bottom right, #e1f5fe, #b3e5fc)",  // blue
    "linear-gradient(to bottom right, #fce4ec, #f8bbd0)",  // pink
    "linear-gradient(to bottom right, #f3e5f5, #ce93d8)"   // violet
  ];
  
  let currentBgIndex = 0;
  
  function cycleBackground() {
    currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
    document.body.style.background = backgrounds[currentBgIndex];
  }
  