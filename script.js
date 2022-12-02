
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


  // Generating options from nested array
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
            attempt++;

            if (ele.key === element.value) {
              //For Correct Answer
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
  setTimeout(()=> {
    document.querySelector('.card-back').style.width=point;

  document.querySelector('.card-wrap p').style.paddingLeft = point;
  }, 300);
}

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

