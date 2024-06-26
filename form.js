const supButton = document.getElementById('submitt')

supButton.addEventListener('click', (event) => {
  event.preventDefault()
})


const inputValue = document.getElementById('myPassword')



const validOutput = document.getElementById('valid')
// const upperCase = /[A-Z]/

// const displayInfo = document.getElementById('displayMessage').innerHTML 

inputValue.oninput = () => {
  if(inputValue.value.length < 8){
    document.getElementById('lengtherror').innerHTML  = "Enter 8 characters"
  } else if(!inputValue.value.match(/[A-Z]/) ){
    document.getElementById('lengtherror').innerHTML  = "Enter an uppercase letter"
  } else if(!inputValue.value.match(/[a-z]/)){
    document.getElementById('lengtherror').innerHTML = "Enter a lowercase number"
  } else if(!inputValue.value.match(/[0-9]/)){
    document.getElementById('lengtherror').innerHTML = "Enter a numeric value"
  } else if(!inputValue.value.match(/[!@#$%^&*+]/)){
    document.getElementById('lengtherror').innerHTML = "Enter a symbol"
  } else{
    // document.getElementById('lengtherror').innerHTML = "Good Password"
    
    
  }

  const showPassword = document.getElementById('showP')

  showPassword.addEventListener('click', () => {
    if(inputValue.type === 'password'){
      inputValue.type = 'text';
      showPassword.textContent = 'Hide'
    } else{
      inputValue.type = 'password'
      showPassword.textContent = 'Show'
    }
  })
  
  // if(){
  //   document.getElementById('alphaerror').innerHTML = "Password must contain a capital letter"
  // } else{

  // }
}

// document.getElementById('displayMessage').innerHTML  = "youuuu"



