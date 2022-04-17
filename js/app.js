const weeks = [
    {
      label: "Week1 notes",
      url: "week1/index.html"  
    },
    {
      label: "Week2 notes",
      url: "week2/index.html"
    }, 
    {
      label: "Week3 notes",
      url: "week3/index.html"
    },
    {
      label: "Week4 notes",
      url: "week4/index.html"
    },
    {
      label: "Week5 notes",
      url: "week5/index.html"
    },  
    {
      label: "Week 6 To Do",
      url: "week06/todo.html"
    },
    {
      label: "Week 7 notes",
      url: "week7/index.html"
    },
    {
      label: "Week 8 notes",
      url: "week8/index.html"
    },
    {
      label: "Week 9 notes",
      url: "week9/index.html"
    },
    {
      label: "Week 10 notes",
      url: "week10/index.html"
    },
    {
      label: "Final Project",
      url: "Final/index.html"
    }
    
  ]
  
  let olist = document.getElementById("list");
  
  for (let i=0; i < weeks.length; i++){
    let a = document.createElement("a");
    let li = document.createElement("li");
    a.textContent = weeks[i].label;
    a.setAttribute('href', weeks[i].url);
    li.appendChild(a);
    olist.appendChild(li); 
  }
document.getElementById("year").innerHTML = new Date().getFullYear()