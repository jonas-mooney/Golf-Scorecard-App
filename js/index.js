import { buildCourses } from "./render.mjs";

let myCourses = [];

getApi();

function getApi() {
  return fetch('https://golf-courses-api.herokuapp.com/courses')
  .then(response => response.json())
  .then(data => myCourses = data)
  .then(() => {
    buildCourses(myCourses);
    chooseCourse();
  });
}

function chooseCourse() {
  // let courseSelected = document.querySelector('#course-select').selected;
  let courseSelected = document.querySelector('#course-select');
  // let chosenCourse = formId.courseSelect[formId.courseSelect.selectedIndex].text;
  // console.log(chosenCourse);
  // console.log(formId)
  // console.log(document.querySelector('#courseSelect').value)
  // parent selector

  // console.log(courseSelected)

  // let foxButton = document.querySelector('#18300');
  // let thankButton = document.querySelector('#11819');
  // let spanishButton = document.querySelector('#19002');

}

function chooseCourse2(courseId) {
  console.log(courseId);
}