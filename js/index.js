// const { json } = require("express/lib/response");

let myCourses = [];
let selectedCourse;
let count = 0;
let teeType;

getApi();

function getApi() {
  return fetch('https://golf-courses-api.herokuapp.com/courses')
  .then(response => response.json())
  .then(data => myCourses = data)
  .then(() => {
    buildCourses();
    chooseCourse();
  });
}
// The data is not available until you open a .then statement or call within a seperate function.


function buildCourses() {
  let courseOptionsHTML = '';
  let courseImages = '';
  myCourses.courses.forEach((course) => {
    courseOptionsHTML += `<option id='${course.id}' value='${course.id}'>${course.name}</option>`;
    courseImages += `<div class='imageAndGroup'><h4>${course.name}</h4><img id='course-image' src='${course.image}'></div>`
  })
  document.querySelector('#course-select').innerHTML = courseOptionsHTML;
  document.querySelector('#course-images').innerHTML = courseImages;
}

// form-id
// course-select

chooseCourse();
function chooseCourse() {
  // let courseSelected = document.querySelector('#course-select').selected;
  let courseSelected = document.querySelector('#course-select');
  let form = document.querySelector('#formId');
  let chosenCourse = form-id.course-select;
  // console.log(chosenCourse);

  // console.log(courseSelected)

  // let foxButton = document.querySelector('#18300');
  // let thankButton = document.querySelector('#11819');
  // let spanishButton = document.querySelector('#19002');

  // Selecting parent value
}

// foxButton.addEventListener('click', selectCourse(this.id))
// function selectCourse(id) {
//   console.log(id);
// }


// fetch('https://reqres.in/api/users')
// .then(res => res.json())
// .then(data => console.log(data));

