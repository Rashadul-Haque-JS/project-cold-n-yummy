

let placeholder = document.querySelector('#email')
let memberEmail = document.querySelector('.member-email').innerHTML

const showEmali = () => {
  
  if (memberEmail) {
    return placeholder.value = memberEmail
  } else {
    console.log('no')
    return placeholder.value = `type your email`
  }

}

showEmali()