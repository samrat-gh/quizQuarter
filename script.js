
const main = document.querySelector('main');


const sets = [{
  qn: 'How do you rate this Site ?',
  opt1: 'Good',
  opt2: 'Bad',
  opt3: 'Average',
  opt4: 'Good Attempt, Keep Learning',
  key: 'Good Attempt, Keep Learning'
},

{
  qn: 'What is the full form of WWW?',
  opt1: 'World Wide Web',
  opt2: 'Wonder Win West',
  opt3: 'West Winner Went',
  opt4: 'Who Whom Why',
  key: 'World Wide Web',
  // ans(answer) {
  //   if (answer == this.key) {
  //     console.log(this.key + " is the correct Answer");
  //   }

  //   else {
  //     console.log("Wrong Answer");
  //   }
  // }
}]

  
  sets.map((element, ind) => {
   
  let fieldset = document.createElement('fieldset');
  let legend = document.createElement('legend');
  let section = document.createElement('section');


  fieldset = main.appendChild(fieldset);

  legend = fieldset.appendChild(legend);
  legend.innerText = element.qn;

  section = fieldset.appendChild(section);
  
  for (const prop in element) {
    if (prop === "qn" || prop === "key") {
       console.log("wrong Prop");
    }
else {
  let i = 1; 

  let className = "opt" + i;

  let div = document.createElement('div');
  let input = document.createElement('input');
  let label = document.createElement('label');
   

  section.setAttribute('class', 'option');
  input.setAttribute('type', 'radio');
  input.setAttribute('id', className);
  input.setAttribute('value', element[prop]);

  div = section.appendChild(div);
  
  input = div.appendChild(input);
  label = div.appendChild(label);

  label.innerHTML = element[prop];
  i++;
    } }

});




// for(let i = 0; i<4; i++) {
// let m = "opt" + i;
// const ele1 = document.createElement('div');
// ele1.setAttribute('class', m);
// main.appendChild(ele1);
// }



// Example Structure 

// <fieldset>
//         <legend> Who is known as  the father of Computer?</legend>
// <div class="option">
//     <div>
//         <input type="radio" id="opt1" value="Albert Einstein" name="qn1">
//         <label for="opt1"> Albert Einstein </label>
//     </div>

//     <div>
//         <input type="radio" id="opt2" value="Charles Babbage" name="qn1">
//         <label for="opt2"> Charles Babbage </label>
//     </div>

//     <div>
//         <input type="radio" id="opt3" value="Benjamin" name="qn1">
//         <label for="opt3"> Benjamin </label>
//     </div>

//     <div>
//         <input type="radio" id="opt4" value="Lady Augusta Ada Lovelace" name="qn1">
//         <label for="opt4"> Lady Augusta Ada Lovelace </label>
//     </div>
    

//     </div>   
//     </fieldset>