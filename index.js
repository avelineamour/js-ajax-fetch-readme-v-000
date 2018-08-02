const app = "I don't do much.";

const token = '95eb2cfee828c02f51ada759e9db051fccbcf4b3'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
