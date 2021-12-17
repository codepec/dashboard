
const myChartObject = document.getElementById('myChart');


const data = [
        {x: 'Jan', bathroom: 73, kitchen: 62, basement: 142, laundry:843}, {x: 'Feb', bathroom: 68, kitchen: 55, basement: 58, laundry:850},
        {x: 'Mar', bathroom: 57, kitchen: 48, basement: 68, laundry:558}, {x: 'Apr', bathroom: 48, kitchen: 67, basement: 89, laundry:480},
        {x: 'May', bathroom: 48, kitchen: 45, basement: 101, laundry:425}, {x: 'Jun', bathroom: 51, kitchen: 58, basement: 98, laundry:680},
        {x: 'Jul', bathroom: 55, kitchen: 46, basement: 67, laundry:648}, {x: 'Aug', bathroom: 58, kitchen: 55, basement: 82, laundry:740},
        {x: 'Sep', bathroom: 85, kitchen: 55, basement: 61, laundry:488}, {x: 'Oct', bathroom: 120, kitchen: 81, basement: 250, laundry:840},
        {x: 'Nov', bathroom: 68, kitchen: 64, basement: 120, laundry:555}, {x: 'Dec', bathroom: 158, kitchen: 45, basement: 100, laundry:640},
];

//Bq/m³

const cfg = {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'bathroom1',
            borderColor:'black',
            backgroundColor:'black',
            data: data,
            parsing: {
                yAxisKey: 'bathroom'
            }
        }, {
            label: 'kitchen1',
            borderColor:'yellow',
            backgroundColor:'yellow',
            data: data,
            parsing: {
                yAxisKey: 'kitchen'
            }
        }, {
            label: 'basement1',
            borderColor:'green',
            backgroundColor:'green',
            data: data,
            parsing: {
                yAxisKey: 'basement'
            }
        }, {
            label: 'laundry1',
            borderColor:'red',
            backgroundColor:'red',
            data: data,
           
            parsing: {
                
                yAxisKey: 'laundry'
            }
        }]
    },
};




let chart = new Chart(myChartObject, cfg, {
  


});


 
        
    





























firstRegister.style.cssText = "display:block;";
secondRegister.style.cssText = "display:none;";
thirdRegister.style.cssText = "display:none;";
fourthRegister.style.cssText = "display:none;";

firstRegisterNavbar.addEventListener("click", hideSecondThirdFourthRegister);

function hideSecondThirdFourthRegister() {
  firstRegister.style.cssText = "display:block;";
  secondRegister.style.cssText = "display:none;";
  thirdRegister.style.cssText = "display:none;";
  fourthRegister.style.cssText = "display:none;";
}

secondRegisterNavbar.addEventListener("click", hideFirstThirdFourthRegister);

function hideFirstThirdFourthRegister() {
  firstRegister.style.cssText = "display:none;";
  secondRegister.style.cssText = "display:block;";
  thirdRegister.style.cssText = "display:none;";
  fourthRegister.style.cssText = "display:none;";
}

thirdRegisterNavbar.addEventListener("click", hideFirstSecondFourthRegister);

function hideFirstSecondFourthRegister() {
  firstRegister.style.cssText = "display:none;";
  secondRegister.style.cssText = "display:none;";
  thirdRegister.style.cssText = "display:block;";
  fourthRegister.style.cssText = "display:none;";
}

fourthRegisterNavbar.addEventListener("click", hideFirstSecondThirdRegister);

function hideFirstSecondThirdRegister() {
  firstRegister.style.cssText = "display:none;";
  secondRegister.style.cssText = "display:none;";
  thirdRegister.style.cssText = "display:none;";
  fourthRegister.style.cssText = "display:block;";
}


// start: open/close navbar small

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
	button.addEventListener('click',() => {
		const modal = document.querySelector(button.dataset.modalTarget)
		openModal(modal)
	})
	
})




closeModalButtons.forEach(button => {
	button.addEventListener('click',() => {
		const modal = button.closest('.modal')
		closeModal(modal)
	})
	
})

function openModal(modal) {
	if (modal == null) return
	modal.classList.add('active')
	overlay.classList.add('active')
}

function closeModal(modal) {
	if (modal == null) return
	modal.classList.remove('active')
	overlay.classList.remove('active')
}





// end: open/close navbar small