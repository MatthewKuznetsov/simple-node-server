fetch('http://127.0.0.1:8080/api/posts')
.then(res => {
  if (res.status === 200) {
    return res.json();
  }
})
.then(data => {
  data.forEach(p => {
    const wr = document.createElement('div');
    wr.classList.add('post');
    
    const title = document.createElement('h2');
    const titleText = document.createTextNode(p.title);
    title.appendChild(titleText);
    wr.appendChild(title);

    const photo = document.createElement('img');
    photo.setAttribute('src', p.photo)
    photo.setAttribute('width', '200')
    wr.appendChild(photo);
    
    const text = document.createElement('p');
    const textText = document.createTextNode(p.text);
    text.appendChild(textText);
    wr.appendChild(text);

    document.body.appendChild(wr);
  });
})

fetch('http://127.0.0.1:8080/api/users')
.then(res => {
  if (res.status === 200) {
    return res.json();
  }
})
.then(data => {
  data.forEach(u => {
    const wr = document.createElement('div');
    wr.classList.add('user');
    
    const name = document.createElement('h2');
    const nameText = document.createTextNode(u.name);
    name.appendChild(nameText);
    wr.appendChild(name);

    const avatar = document.createElement('img');
    avatar.setAttribute('src', u.avatar)
    avatar.setAttribute('width', '200')
    wr.appendChild(avatar);
    
    const age = document.createElement('p');
    const ageText = document.createTextNode('Age: ' + u.age + ' years');
    age.appendChild(ageText);
    wr.appendChild(age);

    document.body.appendChild(wr);
  });
})
