const blogPostsSection = document.querySelector(".blog-posts");

fetch('skills.json')
  .then(response => response.json())
  .then(categories => {
      categories.skills.forEach(category => {
          const categoryTitle = document.createElement("h3");
          categoryTitle.className = "h3 skills-title";
          categoryTitle.style.marginBottom = "5px";
          categoryTitle.style.marginTop = "20px";
          categoryTitle.textContent = category.category;
          blogPostsSection.appendChild(categoryTitle);

          category.items.forEach(skill => {
            const skillItem = document.createElement("div");
            skillItem.className = "skill-item";
            skillItem.textContent = skill.name;
            blogPostsSection.appendChild(skillItem);


            if (skill.certifications) {
              const tooltip = document.createElement("div");
              tooltip.className = "tooltip";

              skill.certifications.forEach(cert => {
                const certImg = document.createElement("img");
                certImg.src = cert;
                certImg.alt = `${skill.name} Certification`;
                tooltip.appendChild(certImg);
              });

              skillItem.appendChild(tooltip);

              skillItem.addEventListener("mouseenter", () => {
                  const skillItemWidth = skillItem.getBoundingClientRect().width;
                  tooltip.style.width = `${skillItemWidth}px`;
              });
            }

          });
      });

      /*category.items?.forEach(skill => {
        const skillItem = document.createElement("div");
        skillItem.className = "skill-item";
        skillItem.textContent = skill.name;


        if (skill.certifications) {
          const tooltip = document.createElement("div");
          tooltip.className = "tooltip";

          skill.certifications.forEach(cert => {
            const certImg = document.createElement("img");
            certImg.src = cert;
            certImg.alt = `${skill.name} Certification`;
            tooltip.appendChild(certImg);
          });

          skillItem.appendChild(tooltip);
        }

      blogPostsSection.appendChild(skillItem);
    });*/
  })
  .catch(error => console.error('Error while loading json file:', error));