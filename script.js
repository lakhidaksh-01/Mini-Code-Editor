function run(){
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "<style>";
    output.contentWindow.eval(jsCode);


    /*output.contentWindow gives access to the window object of the <iframe>, which is essentially like the global environment of the content inside the <iframe>.
      eval(jsCode) is a function that takes a string as input (in this case, the JavaScript code from the js-code textarea) and evaluates or executes that code within the context of the <iframe>'s window.*/
}


function toggleTheme() {
document.body.classList.toggle('dark');
document.querySelector('header').classList.toggle('dark');
document.querySelector('.container').classList.toggle('dark'); 
document.querySelectorAll('textarea').forEach(textarea => {
textarea.classList.toggle('dark');
});
document.querySelectorAll('label').forEach(label => {  // Toggle dark class for labels
label.classList.toggle('dark');
});
document.querySelector('#output').classList.toggle('dark');
}