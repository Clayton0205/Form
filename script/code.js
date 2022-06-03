const btnDisplay = document.getElementById('btnDisplay');

btnDisplay.addEventListener('click',()=>{
    var Name= document.getElementById('Name').value ;
    var Surname = document.getElementById('Surname').value ;
    var FullName = Name +' '+Surname;
    document.getElementById('FullName').innerText= FullName;
})