'use strict';

function renderProjectsList() {
  var projects = loadFromStorage('projects');
  var strHTMLS = projects.map(function (project) {
    var projectImg = project.imgFromOtherSource || `img/portfolio/${project.id}.jpg`
    return `<div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" onclick="renderModal('${project.id}')" data-toggle="modal" href="#portfolioModal">
            <div class="portfolio-hover">
            <div class="portfolio-hover-content">
            <i class="fa fa-plus fa-3x"></i>
            </div>
            </div>
            
            <img class="img-fluid" src="${projectImg}" alt="'${project.name}'">
          </a>
          <div class="portfolio-caption">
            <h4>${project.name}</h4>
            <p class="text-muted">${project.subtitle}</p>
          </div>${createLabels(project)}
        </div>`
  }).join('');
  var elList = document.querySelector('.render-projs');
  elList.innerHTML = strHTMLS;
}

function createLabels(project) {
  var strLabels = '';

  // WE CAN USE ...args, BUT FOR LOOP IS FASTER
  for (var i = 0; i < project.labels.length; i++) {
    strLabels += `<span class="badge badge-primary">${project.labels[i]}</span>`;
  }
  return strLabels;
}


// MODAL
function renderModal(getProj) {
  var inButtonTxt = 'Take me there !'
  var proj = gProjects.find(function (project) {
    return getProj === project.id
  });
  //INSIDE PROJECT DATA FOR DOM : 
  var projectUrl = proj.IsLocal ? `${proj.url}/index.html` : proj.url
  var strHTMLS = `<h2 class="light">${proj.name}</h2>
                <ul class="list-inline light">
                  <li>created on: ${createDateFromStamp(proj.publishedAt)}</li>
                </ul>
                <p class="light">${proj.desc}</p>
                <button class="btn btn-success">
                <a class="light" href='${projectUrl}'>
                    ${inButtonTxt}
                </a>
                </button>`;
  var elList = document.querySelector('.modal-body'); //MODAL DIV
  elList.innerHTML = strHTMLS;
  //END INSIDE PROJECT DATA FOR DOM

  //BACKGROUND IMAGE  
  var elBackImg = document.querySelector('.portfolio-modal .modal-content');
  elBackImg.style.backgroundImage = `url(img/florian-olivo-1169465-unsplash.webp)`;
  // elBackImg.style.backgroundImage = `url(img/portfolio/${proj.id}_big.jpg)`;
}

