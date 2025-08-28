let str = "";
let buttons = document.querySelectorAll(".buttons button");
buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    try {
      if (btn.innerHTML == "=") {
        str = eval(str);
        document.getElementsByClassName("display")[0].value = str;
      } 
      
      else if (btn.innerHTML == ".") {
        // check current number (last part of str)
        let parts = str.split(/[\+\-\*\/]/); // split by operators
        let lastNumber = parts[parts.length - 1];

        if (!lastNumber.includes(".")) {
          str += ".";
        }
        
        document.getElementsByClassName("display")[0].value = str;
      } 
      
      else {
        str = str + btn.innerHTML;
        if (btn.innerHTML == "C") {
          str = "";
        }
        document.getElementsByClassName("display")[0].value = str;
      }
    } catch (e) {
      str = "Invalid Operation";
      document.getElementsByClassName("display")[0].value = str;
    }
  });
});
