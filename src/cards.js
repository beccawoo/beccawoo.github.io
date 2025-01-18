function sprintf(format) {
    var args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;
    });
}

const CARD_BOILERPLATE = '<a class="card" href="{0}"> \
  <img src="/images/{1}"> \
  <br style="display: block; margin-top: 0.78cqw"> \
  <span class="project">{2}</span> \
  <br style="display: block; margin-top: 0.469cqw"> \
  <span class="position">{3}</span> \
  <br style="display: block; margin-top: 0.469cqw"> \
  <span class="date">{4}</span> \
</a>';

function createCard(link, image, project, position, date) {
  return sprintf(CARD_BOILERPLATE, link, image, project, position, date);
}

const CARDS = {
  "connect2grow": createCard("/case-study/connect2grow.html", "{0}-connect2grow.png", "Connect2Grow", "Lead UX Designer & Tech Writer", "August 2023"),
  "genre-analysis": createCard("/case-study/genre-analysis.html", "{0}-genre_analysis.png", "Genre Analysis", "Tech Writer", "September 2024"),
  "dehs-project-lead": createCard("/case-study/dehs-project-lead.html", "{0}-dehs_project_lead.png", "Project Lead, DEHS", "Project Lead, BRIDGEGOOD", "June-July 2024"),
  "sat-portal": createCard("/case-study/sat-portal.html", "{0}-sat_portal.png", "SAT Portal", "UX Designer", "April 2023-April 2024"),
  "portfolio-audit": createCard("/case-study/portfolio-audit.html", "{0}-portfolio_audit.png", "Portfolio Audit", "UX Designer, Accessibility", "December 2024"),
  "fcc-microsite": createCard("/case-study/fcc-microsite.html", "{0}-fcc.png", "FCC Microsite", "UX Designer", "September 2024"),
};
const HIDDEN_CARDS = {
  "magazine-ad": createCard("/case-study/magazine-ad.html", "{0}-brand_ad.png", "Brand & Ad Design", "UX Designer", "January-February 2024"),
  "type-persona": createCard("/case-study/type-persona.html", "{0}-type_persona.png", "Type Persona", "UX Designer", "October 2024"),
};

function formatAndJoin(cards, prefix, join) {
  var joined = "";
  for (var i = 0; i < cards.length; i++) {
    joined += sprintf(cards[i], prefix) + join;
  }
  return joined;
}

function createCarousel() {
  var url = window.location.href;
  var path = url.split('/');
  var pageId = path[path.length - 1].replace(".html", "");
  var carousel = document.getElementById("cardCarousel");
  var pageCards = { ...CARDS };
  delete pageCards[pageId];
  carousel.innerHTML = formatAndJoin(Object.values(pageCards), "carousel_img", '\n');
}

function createGrid() {
  var grid = document.getElementById("cardGrid");
  grid.innerHTML = formatAndJoin(Object.values(CARDS), "card_img", '\n');
}
