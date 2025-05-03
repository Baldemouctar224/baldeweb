// Message de bienvenue dynamique
window.addEventListener('load', () => {
    alert('Bienvenue sur BALDEWEB ! Découvre mes services pour créer ton site web.');
  });
  
  // Toggle d’affichage des services
  document.addEventListener('DOMContentLoaded', () => {
    const servicesSection = document.querySelector('.services');
    const toggleBtn = document.createElement('button');
  
    toggleBtn.textContent = 'Afficher / Cacher les services';
    toggleBtn.style.margin = '20px';
    toggleBtn.style.padding = '10px 20px';
    toggleBtn.style.backgroundColor = '#0078d7';
    toggleBtn.style.color = 'white';
    toggleBtn.style.border = 'none';
    toggleBtn.style.borderRadius = '5px';
    toggleBtn.style.cursor = 'pointer';
  
    servicesSection.parentNode.insertBefore(toggleBtn, servicesSection);
  
    let visible = true;
    toggleBtn.addEventListener('click', () => {
      visible = !visible;
      servicesSection.style.display = visible ? 'block' : 'none';
    });
  });
  





  

 
