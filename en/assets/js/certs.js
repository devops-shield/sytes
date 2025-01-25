fetch('certs.json')
  .then(response => response.json())
  .then(data => {
    const projectList = document.getElementById('project-list');
    const count_certs = data.length;
    const certsAmountField = document.getElementById('amount_certs');
    certsAmountField.innerHTML = count_certs + ' certifications';

    data.forEach(item => {
      const listItem = document.createElement('li');
      listItem.classList.add('project-item', 'active');
      listItem.setAttribute('data-filter-item', '');
      listItem.setAttribute('data-category', item.data_category);
      listItem.setAttribute('data-category_second', item.data_category_second);

      listItem.innerHTML = `
        <a href="${item.validation_url}" target="_blank">
          <figure class="project-img">
            <div class="project-item-icon-box">
              <ion-icon name="eye-outline"></ion-icon>
            </div>
            <img src="${item.img_url}" alt="${item.img_alt}" loading="lazy">
          </figure>
          <h3 class="project-title">${item.project_title}</h3>
          <p class="project-category">${item.project_category}</p>
        </a>
      `;

      projectList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error while loading json file:', error));