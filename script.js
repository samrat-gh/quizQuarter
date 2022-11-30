
const main = document.querySelector('main');
let score = '--score'; //Assinging to CSS Variables
let point = 0;
let attempt = 0;


  sets.map((element, ind) => {
   
  let fieldset = document.createElement('fieldset');
  let legend = document.createElement('legend');
  let section = document.createElement('section');


  fieldset = main.appendChild(fieldset);

  legend = fieldset.appendChild(legend);
  legend.innerText = element.qn;

  section = fieldset.appendChild(section);
  

  for (const prop in element) {
    if (prop === "qn" || prop === "id") {
       console.log("wrong Property");
    }
else if(prop ==="option") {

  element[prop].map((opt) => { 
  let i = 1; 

  let className = "opt" + i;
  let name = "set" + sets.indexOf(element);


  let div = document.createElement('div');
  let input = document.createElement('input');
  let label = document.createElement('label');
   

  section.setAttribute('class', 'option');
  input.setAttribute('type', 'radio');
  input.setAttribute('id', className);
  input.setAttribute('name', name);
  input.setAttribute('value', opt);

  div = section.appendChild(div);
  
  input = div.appendChild(input);
  label = div.appendChild(label);

  label.innerHTML = opt;
  i++;
  }
  )}  } } 

);




let submitBtn = document.createElement('button');
submitBtn.setAttribute("type", "submit");
submitBtn.setAttribute("class", "submit");

submitBtn = main.appendChild(submitBtn);
submitBtn.innerText = "Submit";

console.log(submitBtn);


let options = Array.from(document.querySelectorAll("fieldset section div input"));
// console.log(options);

submitBtn.addEventListener('click', ()=> {
   options.map((element) => {
    if(element.checked) {
      let ind = options.indexOf(element);
      ind = ~~ (ind / 4);

      let value = sets[ind].id;

      ansSheet.map((ele) => {
            for(let prop in ele) {

              if(prop === "id" && ele[prop] === value){
                attempt++;

                if(ele.key === element.value) {
                  // console.log("answer is true")
                  point++;
                  element.parentElement.style.backgroundColor="#43b343";
                  element.parentElement.style.color="white";  

                  document.documentElement.style.setProperty(score, point);
                  console.log(score, "hello", point);

                } 

                else {
                  element.parentElement.style.backgroundColor="#CF0A0A";
                  element.parentElement.style.color="white";
            
                  }

                  updateScore(score, point);
              }
            }

            submitBtn.style.display="none";
      });

    } 

   })
});

function updateScore(score, point) {
 let element = document.querySelector('.card-back');

 document.querySelector('var.correct').innerHTML = point;
 document.querySelector('var.incorrect').innerHTML = sets.length - attempt;

 point = aggregrator(point);
 point = point + "%";
 console.log(element);
 element.style.width=point;
 document.querySelector('.score-card').style.display="block";
 document.querySelector('.card-wrap p').style.paddingLeft = point;
 document.querySelector('.card-wrap p').innerHTML = point;
 document.querySelector('var.attempt').innerHTML = attempt;
}

function aggregrator(score) {
  let fm = sets.length;
  let point = (score/fm)*100;
  console.log(fm, score, point);

  if(point % 1 != 0)
  point = point.toFixed(2);

  return point;
} 

  // fm is full mark, equals to length of main array gives the no of questions.





