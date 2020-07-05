export const emailValidator = val => {
  if (!val) return 'Required'

  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if(!regEx.test(val)) return 'Must be an email'
}

export const passwordValidator = (val) => {
  if(!val) return 'Required'
  if(val.length < 6) return 'Must be greater than five characters'
}

export const zipCodeValidator = (val) => {
  if(!val) return 'Required'
  
  const regEx = /^[0-9\s]*$/
  if(!regEx.test(val)) return 'Must be a zip code'
}