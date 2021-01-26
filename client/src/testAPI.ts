import { Test, UserAnswer } from './types';

const baseUrl = 'http://localhost:3002';

export function getTests() {
  return fetchTests(`${baseUrl}/test`);
}

export function postTest(test: Test) {
  return fetchTests(`${baseUrl}/test`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(test),
  });
}

export function deleteTest(id: string) {
  return fetchTests(`${baseUrl}/${id}`, {
    method: 'DELETE',
  });
}

// export function getTest () {
//   return fetchTests(`${baseUrl}/test`, {
//     method: 'GET'
//   })
// }

// export function updateTest (id, dir) {
//   return fetchTests(`${baseUrl}/${id}/${dir}`, {
//     method: 'PUT'
//   })
// }

export function getQuizz(id: string) {
  return fetchTests(`${baseUrl}/quiz/${id}`, {
    method: 'GET',
  });
}

export function checkAnswer(answerObj: UserAnswer) {
  return fetchTests(`${baseUrl}/quiz`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(answerObj),
  });
}

function fetchTests(url: string, options?: RequestInit | undefined) {
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
        else return;
      } else return res;
    })
    .catch((err) => console.log(err));
}
