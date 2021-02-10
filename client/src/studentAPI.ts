import { AssignToStudentsList, Student } from './types';

const baseUrl = 'http://localhost:3002/student';

export function getStudents() {
  return fetchStudents(baseUrl);
}

export function getStudent(id: string) {
  return fetchStudents(`${baseUrl}/${id}`, {
    method: 'GET',
  });
}
// export function getStudent(name) {
//   return fetchStudents(`${baseUrl}/${name}`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ name: name }),
//   });
// }

export function importStudents(newSs: Student[]) {
  return fetchStudents(`${baseUrl}/multiple`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newSs),
  });
}

/* StudentID, 'completed', Test results
TestID, 'pending', Students Pending */
export function updateStudentTests(
  id: string,
  status: string,
  updatedData: AssignToStudentsList
) {
  return fetchStudents(`${baseUrl}/${status}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedData),
  });
}

function fetchStudents(url: string, options?: RequestInit | undefined) {
  return fetch(url, options)
    .then((res) => {
      if (res.status < 400) return res;
      else {
        Promise.reject(res);
        return;
      }
    })
    .then((res) => {
      if (typeof res !== 'undefined') {
        if (res.status !== 204) return res.json();
        else return res;
      } else return;
    })
    .catch((err) => console.log(err));
}
