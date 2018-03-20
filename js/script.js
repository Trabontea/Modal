

// open and close modal
function openCloseModal() {

  var modal = document.querySelector('#modal');
  var modalOverlay = document.querySelector('#modal-overlay');
  var closeButton = document.querySelector('#close-button');
  var openButton = document.querySelector('#open-modal');

  closeButton.addEventListener('click', function() {
    modal.classList.toggle('closed');
    modalOverlay.classList.toggle('closed');
  });

  openButton.addEventListener('click', function() {
    modal.classList.toggle('closed');
    modalOverlay.classList.toggle('closed');
  });
  console.log('test')
};

openCloseModal(); 

// Run function when DOM Content has loaded
document.addEventListener('DOMContentLoaded', init);

function init(event) {
	submitForm = document.forms['carform'];
	submitForm['save'].onclick = validateForm; 
}

// Function to validate form elements
function validateForm(event) {

	// Array to contain all error messages
	var errorMessages = Array();

	// If title is empty
	if(!submitForm['title'].value) {
		errorMessages.push('* Please enter Title of anunoucement!');
	}

	// If Brand is empty
	if(!submitForm['brand'].value) {
		errorMessages.push('* Please enter Brand!');
	}

	// If Year is empty
	if(!submitForm['year'].value || /\D/.test(submitForm['year'].value)) {
		errorMessages.push('* Please enter Year. You can introduce just numbers!');
	}
	//1945 - 2017
	if(submitForm['year'].value && !/^(194[5-9]|19[5-9]\d|200\d|201[0-7])$/.test(submitForm['year'].value)){
		errorMessages.push('* Please introduce a valid Year.');
	}

	// If Mileage is empty
	if(!submitForm['mileage'].value || /\D/.test(submitForm['mileage'].value)) {
		errorMessages.push('* Please enter Mileage. Please introduce just numbers!');
	}
	
  // If fuel has no value
  if(!submitForm['fuel'].value) {
  	errorMessages.push('* Please select Fuel!');
  }

	// If Color has no value
  if(!submitForm['culori'].value) {
  	errorMessages.push('* Please select Color!');
  }

	// If damage has no value
  if(!submitForm['damage'].value) {
		errorMessages.push('* Please select Damage!');
  }

	// If price has no value
  if(!submitForm['price'].value || /\D/.test(submitForm['price'].value)) {
  	errorMessages.push('* Please enter Price. Please introduce just numbers!');
  }

	// If crush has no value
	var crush = document.getElementById('crushDetails');
  if(!submitForm['crush'].value && crush.style.display === 'block' ) {
  	errorMessages.push('* Please select crush details!');
  }

	// If currency has no value
  if(!submitForm['currency'].value) {
  	errorMessages.push('* Please select Currency!');
  }

	// If description has no value
  if(!submitForm['descriptions'].value) {
  	errorMessages.push('* Please enter Description!');
  }

  // Show error messages
	displayErrors(errorMessages);
  
	// If there are errors, stop the form from submitting
	if(errorMessages.length) {
		return false;
	}
}


function displayErrors(errors) {
	var errorBox = document.getElementById('errorMessages');
  
  // If there aren't any errors
	if(!errors.length) {
		errorBox.innerHTML = '';
    return false;
	}
	var errorBox = document.getElementById('errorMessages');
	var messageString = '<ul>';

	for(var i=0; i<errors.length; i++) {
		messageString += '<li>' + errors[i] + '</li>';
	}
	messageString += '</ul>';

	errorBox.innerHTML = messageString;
}


/** show/hide elements **/

function showHideLogo(el) {
	if(el.selectedIndex != 0) {
		var divsL = document.getElementById('brands').getElementsByTagName('div');
		//hide the divs
		for(var i=0; i < divsL.length; i++) {
			divsL[i].style.display = 'none';
		}
		//unhide the selected div
		document.getElementById('div'+el.value).style.display = 'block';
	}
}

function showHideColor(elem) {
	if(elem.selectedIndex != 0) {
		var divsO = document.getElementById('colors').getElementsByTagName('div');
		for(var i=0; i < divsO.length; i++) {
			divsO[i].style.display = 'none';
		}
		document.getElementById('div'+elem.value).style.display = 'block';
	}
}

document.getElementById('damage').addEventListener('change', function () {
  var stylediv = this.value == 0 ? 'block' : 'none';
  	document.getElementById('crushDetails').style.display = stylediv;
});
