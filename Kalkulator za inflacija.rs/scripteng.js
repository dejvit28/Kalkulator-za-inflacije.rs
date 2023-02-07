function inflationCalculator(){
let inflationRate = document.querySelector('#inflationRate');
let money = document.querySelector('#money');

inflationRate = parseFloat(inflationRate.value);
money = parseFloat(money.value);

let years = document.querySelector('#years').value;
years = parseFloat(years);

//formula za presmetuvanje inflacija
let worth = money + (money * (inflationRate / 100));

console.log(worth);

for(let i = 1; i < years; i++){
	worth += worth * (inflationRate/100);
}
worth = worth.toFixed(2);

let newElement = document.createElement('div');
newElement.className = 'new-value';
newElement.innerText = `Todays ${money}€ worth the same as ${worth}€ for ${years} years`;
document.querySelector('.container').appendChild(newElement);  
}

    /* When the user clicks on the button, 
            toggle between hiding and showing the dropdown content */
            function myFunction0() {
              document.getElementById("myDropdown").classList.toggle("show");
            }
            
            
            window.onclick = function(event) {
              if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                  var openDropdown = dropdowns[i];
                  if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                  }
                }
              }
            }
