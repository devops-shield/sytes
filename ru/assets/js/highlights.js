fetch('highlights.json')
  .then(response => response.json())
  .then(data => {
    const highlightList = document.getElementById('highlight-list');

    data.forEach(item => {
      const listItem = document.createElement('p');
      listItem.classList.add('skill-item');

      listItem.innerHTML = `
        ${item.title}
        ${item.emoji}
      `;

      highlightList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error while loading json file:', error));