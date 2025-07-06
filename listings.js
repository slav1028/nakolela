fetch('ads.json')
  .then(res => res.json())
  .then(ads => {
    const container = document.getElementById('ads-container');
    ads.forEach(ad => {
      const card = document.createElement('div');
      card.className = 'listing';

      let tagSpan = '';
      if (ad.tags.length > 0) {
        tagSpan = `<span class="tag">${ad.tags[0]}</span>`;
      }

      card.innerHTML = `
        <div class="listing-card">
          ${tagSpan}
          <img src="${ad.image}" alt="${ad.title}">
        </div>
        <div class="listing-info">
          <h3>${ad.title}</h3>
          <p class="price">${ad.price}</p>
          <p>${ad.location}</p>
        </div>
      `;
      container.appendChild(card);
    });
  });
