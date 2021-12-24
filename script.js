const btn = document.querySelector("#btn");
const firstname = document.getElementById("name");
const companies = document.getElementById("company");
const table=document.querySelector("#table")
const para =document.getElementById("para")



btn.addEventListener("click",function(){
  

    fetch("https://run.mocky.io/v3/f3feef1c-9bfa-43fd-b2a0-bbe9abadb4f6")
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data.clients)
        // itrating to each value of array

        data.clients.map((curr)=>{
            // name list
          let li =document.createElement("li")
          para.appendChild(li)
          li.innerText=curr.name;
          li.classList.add("list")

        //   company list
        let companylist =document.createElement("li")
        paraone.appendChild(companylist)
        companylist.innerText=curr.company;
        companylist.classList.add("list")

        })
  
     
    }).catch((err)=>{
        console.log(err)
    })
        
      console.log("clicked")
});