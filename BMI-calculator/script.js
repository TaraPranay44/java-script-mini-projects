const form = document.querySelector('form');  //querySelector is used to select a single element from the DOM tree, while document.

form.addEventListener('submit',function(e){  //The addEventListener() method makes it easier to control how the event reacts to bubbling.
    e.preventDefault();    //preventDefault() is a method used to prevent the default behavior of a specified event from occurrin

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results')

    if((height == '') || (height<0) || isNaN(height)){
        results.innerHTML = "please provide a valid height"; // innerHTML is used for setting text inside of an HTML tag like an anchor tag, paragraph tag, span, div, or textarea
    }else if((weight == '') || (weight<0) || isNaN(weight)){
        results.innerHTML = "please provide a valid weight";
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);  // toFixed() method rounds the string to a specified number of decimals
        results.innerHTML = `<span>${bmi}<span/>`
    }
});