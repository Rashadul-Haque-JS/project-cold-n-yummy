

let input = document.querySelector('#email')
let memberEmail = document.querySelector('.member-email')

const showEmali = () => {
  
  if (memberEmail) {
    return input.value = memberEmail.innerText
  } else {
    console.log('no')
    return ''
  }

}

showEmali()