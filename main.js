let name = document.querySelector('#software-name');
let link = document.querySelector('#software-link');
let des = document.querySelector('#software-des');
let randomgen = document.querySelector('#random-generate');


function RandomSoftware(arr){
   return (Math.floor(Math.random() * list.length)+1);
}
function CreateUi(){
let software = list[RandomSoftware()];
  name.innerText = software.name.split('-')[0];
  des.innerText = software.description;
  link.href = software.Download;
  console.log(software.Download)
 }

CreateUi();

randomgen.addEventListener('click', CreateUi);