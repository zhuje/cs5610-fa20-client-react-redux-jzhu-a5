
const url = "https://wbdv-generic-server.herokuapp.com/api/zhuje/courses"

export const findCourseById = (courseId) =>
  fetch(`${url}/${courseId}`)
    .then(response => response.json())

export const findAllCourses = () =>
  fetch(url)
    .then(response => response.json())

export const createCourse = (newCourse) =>
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newCourse),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())

export const deleteCourse = (courseId) =>
  fetch(`${url}/${courseId}`, {
    method: 'DELETE'
  })
    .then(response => response.json())

export const updateCourse = (courseId, newCourse) =>
  fetch(`${url}/${courseId}`, {
    method: 'PUT',
    body: JSON.stringify(newCourse),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())

