function clearText() {
  document.getElementById('searchBox').value ="";
};

function putSearchBack() {
  if (document.getElementById('searchBox').value==="") {
    document.getElementById('searchBox').value = "Search by title...";
  }
};

function updateShows(all) {
  var shows = ["Lost", "How_I_Met_Your_Mother", "Heroes", "Prison_Break", "The_100", "Fringe", "Scrubs", "The_Walking_Dead"];
  var searchTerm = document.getElementById('searchBox').value.trim().replace(/ /g, '_');
  var children = document.getElementById('shows');
  while (children.hasChildNodes()) {
    children.removeChild(children.firstChild);
  }
  var numShows = shows.length;
  for (var i=0; i<numShows; i++) {
    var currentShow = shows[i];
    if (currentShow.toLowerCase().substring(0,searchTerm.length) === searchTerm.toLowerCase() || all) {
      var a = document.createElement("a");
      a.setAttribute("href", "#theGraph");
      a.setAttribute("class", "showImage");
      a.setAttribute("id", currentShow);
      a.setAttribute("onclick","updateGraph(this.id);");
      children.appendChild(a);
    }
  }
};

function updateGraph(id) {
  clearText();
  putSearchBack();
  updateShows(true);
  var links = {Lost:"https://plot.ly/~cdr23859/76.embed", How_I_Met_Your_Mother:"https://plot.ly/~cdr23859/74.embed", Heroes:"https://plot.ly/~cdr23859/72.embed", Prison_Break:"https://plot.ly/~cdr23859/78.embed", The_100:"https://plot.ly/~cdr23859/82.embed", Fringe:"https://plot.ly/~cdr23859/70.embed", Scrubs:"https://plot.ly/~cdr23859/80.embed", The_Walking_Dead:"https://plot.ly/~cdr23859/84.embed"};
  var graph = document.getElementById('graphEmbed');
  graph.parentNode.removeChild(graph);
  var firstElement = document.getElementById('newSearch');
  var embed = document.createElement("embed");
  embed.setAttribute("src",links[id]);
  embed.setAttribute("id","graphEmbed")
  document.getElementById('theGraph').insertBefore(embed, newSearch);
};
