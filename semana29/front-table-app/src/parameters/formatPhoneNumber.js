function formatPhoneNumber(phoneNumberString) {
                        
    let match = phoneNumberString.match(/(?:(\d{2})?)(?:([0-9]{2})|([0-9]{3})?)(\d{4,5})(\d{4})/)
  
    if (match) {
      
      return ['+', match[1], '(', match[2] | match[3], ') ', match[4], '-', match[5]].join('')
    }
    return null
  }
 
  export default formatPhoneNumber;