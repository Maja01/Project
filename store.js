const motori = document.querySelector('#shop1'),
      rezerviraniMotori = document.querySelector('#cart-content tbody'),
      clearCardBtn = document.querySelector('#clear-cart');

      loadEvents();

      function loadEvents() {
          motori.addEventListener('click', buyMotors);
          rezerviraniMotori.addEventListener('click', removeMotori);
          clearCardBtn.addEventListener('click', clearCart);
          document.addEventListener('DOMContentLoaded', getLocalStorage);
      }

      function buyMotors(e) {
          e.preventDefault();
          if(e.target.classList.contains('btn-shop')) {
              const motor = e.target.parentElement.parentElement;
              console.log(motor)
              getmotorInfo(motor);
            
          }
      }

      function getmotorInfo(motor) {
          const motorInfo = {
              image: motor.querySelector('img').src,
              name: motor.querySelector('.shop-title').textContent,
              price: motor.querySelector('.price').textContent,
              id: motor.querySelector('button').getAttribute('data-id')
            
          }
          console.log(motorInfo)
      addMotorsCart(motorInfo);
      }
      function addMotorsCart(motor) {
          const row = document.createElement('tr');
          row.innerHTML = `
          <tr>
          <td>
               <img src="${motor.image}" width=100>
          </td>
          <td>${motor.name}</td>
          <td>${motor.price}</td>
          <td>
               <a href="#" class="remove" data-id="${motor.id}">X</a>
          </td>
     </tr>
          `;
          rezerviraniMotori.appendChild(row);
          saveToLocal(motor);
      }
      function saveToLocal(motor) {
          var motori = getMotorsStorage();
          motori.push(motor);
          localStorage.setItem('motori', JSON.stringify(motori));
      }
      function getMotorsStorage() {
          var motori;
          if(localStorage.getItem('motori')=== null) {
              motori=[];
          }
          else{
              motori= JSON.parse(localStorage.getItem('motori'))
          }
          return motori;
      }
      function removeMotori(e) {
         var motori, motorId;
         if(e.target.classList.contains('remove')) {
             e.target.parentElement.parentElement.remove();
             motori = e.target.parentElement.parentElement;
             motorId = motori.querySelector('.remove').getAttribute('data-id');
            
         }
         removeMotoriStorage(motorId);
      }
      function removeMotoriStorage(id) {
         var motoriLS = getMotorsStorage();
         motoriLS.forEach(function(motorLS, index) {

            if(motorLS.id === id){
                console.log(id)
            motoriLS.splice(index, 1);
         }
         });
         localStorage.setItem('motori', JSON.stringify(motoriLS));
      }
      function clearCart() {
         rezerviraniMotori.innerHTML = "";
         while (rezerviraniMotori.firstChild) {
             rezerviraniMotori.removeChild(rezerviraniMotori.firstChild);
         }
         clearLocalStorage();
         
      }
      function clearLocalStorage() {
          localStorage.clear();
      }
      function getLocalStorage() {
          var motoriLS = getMotorsStorage();

          motoriLS.forEach(function(motor) {
          const row = document.createElement('tr');
      row.innerHTML = `
              <tr>
                   <td>
                        <img src="${motor.image}" width=100>
                   </td>
                   <td>${motor.name}</td>
                   <td>${motor.price}</td>
                   <td>
                        <a href="#" class="remove" data-id="${motor.id}">X</a>
                   </td>
              </tr>
         `;
       rezerviraniMotori.appendChild(row);
   });
}
 $(".here").click(function(){
     $("#shopping-cart").css({
         display: "flex",
     })
 })

 $("#clear-cart").click(function(){
    $("#shopping-cart").css({
        display: "none",
    })
})
