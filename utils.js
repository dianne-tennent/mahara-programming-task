//handle name and surname entries

function nameFormatter(string) {
    //convert to array
    string = string.split('')

    //loop through array
    string = string.map((element, i) => {

        if(element < 'A' || element > 'z') {
            //remove if non alphabetical
            string.splice(i, 1)
        } else {
            //set all letters to lower case
            element = element.toLowerCase()
            return element
        }
    })

    //capitalise first letter
    string[0] = string[0].toUpperCase()

    //return to string format
    string = string.join("")
    return string
}

//format email entries
function emailValidator(email) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        return email.toLowerCase()
      } else {
          return null
      }
}

module.exports = {
    nameFormatter,
    emailValidator
}
