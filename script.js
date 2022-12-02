
const main = document.querySelector('main');

let point = 0;
let attempt = 0;

// Generating foundation elements
sets.map((element) => {

  let fieldset = document.createElement('fieldset');
  let legend = document.createElement('legend');
  let section = document.createElement('section');

  fieldset = main.appendChild(fieldset);

  legend = fieldset.appendChild(legend);
  legend.innerText = element.qn;

  section = fieldset.appendChild(section);


  // Generating options from nested option's array
  for (const prop in element) {
    if (prop === "qn" || prop === "id") {
      console.log("wrong Property");
    }
    else if (prop === "option") {

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
      )
    }
  }
}

);




let submitBtn = document.createElement('button');
submitBtn.setAttribute("type", "submit");
submitBtn.setAttribute("class", "submit");

submitBtn = main.appendChild(submitBtn);
submitBtn.innerText = "Submit";


let options = Array.from(document.querySelectorAll("fieldset section div input"));
// options store all the radio type inputs i.e options



submitBtn.addEventListener('click', () => {
  options.map((element) => {
    if (element.checked) {
      let ind = options.indexOf(element);
      ind = ~~(ind / 4);

      let value = sets[ind].id;

      ansSheet.map((ele) => {
        for (let prop in ele) {

          if (prop === "id" && ele[prop] === value) {
            // To count attempted queries
            attempt++;

              //For Correct Answer
            if (ele.key === element.value) {
              point++;
              element.parentElement.style.backgroundColor = "#43b343";
              element.parentElement.style.color = "white";


            }

            else {
              element.parentElement.style.backgroundColor = "#CF0A0A";
              element.parentElement.style.color = "white";

            }

            updateScore(point);
          }
        }

        submitBtn.style.display = "none";
        window.scrollTo(0,0);

      });

    }

  })
});


function updateScore(point) {

  document.querySelector('var.correct').innerHTML = point;
  document.querySelector('var.incorrect').innerHTML = sets.length - attempt;

  point = aggregrator(point);
  point = point + "%";


  document.querySelector('.score-card').style.display = "block";
  document.querySelector('.card-wrap p').innerHTML = point;
  document.querySelector('var.attempt').innerHTML = attempt;
  document.querySelector('var.unattempted').innerHTML = sets.length - attempt;


  // For Animation with Transition Duration 
  
/*============
 We couldn't set a transition directly for a invisible element (with display="none"),
 because the final value was assigned as the only value after it is displaced, so to 
 keep the initial value different for a moment we used setTimeout() event.
 =============*/

  setTimeout(()=> {
    document.querySelector('.card-back').style.width=point;

    // To control the flow of score text 
    if(point) {
      let trash = point.lastIndexOf("%"); 
      let newPoint = point.slice(0,trash); 
     getMessage(newPoint);

      // console.log(point, trash, newPoint);

       
      if(Number(newPoint) >= 94)
         document.querySelector('.card-wrap p').style.paddingLeft = "94%"; }
    
    
  document.querySelector('.card-wrap p').style.paddingLeft = point;
     }, 300); }



function aggregrator(score) {
  // Total no of questions
  let fm = sets.length; 

  // points(Marks) into percentage
  let point = (score / fm) * 100;

  // To neglect decimal on value as whole number
  if (point % 1 != 0)
    point = point.toFixed(2);

  return point;
}


// Making the retry button reload the page onclick 
let retryBtn = document.querySelector('.retry');

retryBtn.addEventListener('click', () => {
  location.reload();
});



// 10 - 40 Study Hard
// 40 - 50 Learn and Practice, you can do it
// 50 - 60 Work Hard, You can Score more
// 60 - 80 Well Done, You are Progressing
// 80 - 90 Lets exceed Limit, Practice More
// 90 - 100 Excellent!, Keep practicing

function getMessage(point) {
if(point < 40)
document.querySelector('.feedback').innerHTML = "Study Hard";

else if(point >= 40 && point < 50) 
document.querySelector('.feedback').innerHTML = "Study Hard";

else if(point >= 50 && point < 60)
document.querySelector('.feedback').innerHTML = "Work Hard, You Deserve More";

else if(point >= 60 && point < 80 )
document.querySelector('.feedback').innerHTML = "Doing well, Work on the mistakes";

else if(point >= 80 && point < 90)
document.querySelector('.feedback').innerHTML = "Lets exceed the limit, Practice More";

else if(point >= 90 && point < 100)
document.querySelector('.feedback').innerHTML = "Excellent, Keep Practicing";

else if(point === 100)
document.querySelector('.feedback').innerHTML = "Fantastic, Extra Ordinary, Mind Blowing";
}