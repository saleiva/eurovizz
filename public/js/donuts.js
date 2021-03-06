

var w = 600,
    h = 600,
    r = (Math.min(550, 550) / 2)-5,
    color = d3.scale.category20(),
    donut = d3.layout.pie(),
    arc = function(outer) {
      return d3.svg.arc().innerRadius(outer - 66).outerRadius(outer);
    }

d3.json("data/results.json", function(json) {

  var donuts = d3.select("#vis")
    .append("svg:svg")
      .attr("width", w)
      .attr("height", h)

  // Quaterfinals

  var quarterfinals = donuts.append("svg:g")
    .data([json[0][0]])
    .attr("class","quarter");
    
  var arcs = quarterfinals.selectAll("g.arc")
    .data(donut.value(function(d) { return 1200 }))
    .enter().append("svg:g")
    .attr("class", "arc")
    .attr("data-country", function(d) {return d.data.name})
    .attr("transform", "translate(" + (r+25) + "," + (r+25) + ")");

  arcs.append("svg:path")
      .attr("fill", function(d, i) { return d.data.color; })
      .attr("d", arc(r))
      .attr("opacity",0)
      .attr("stroke-width", 2)
      .attr("stroke-opacity", .3)
      .attr("stroke","#000");

  arcs.append("svg:text")
      .text(function(d){return d.data.name})
      .attr("x", function(d){return d.data.position[0]})
      .attr("y", function(d){return d.data.position[1]})
      .attr("transform", function (d){return "rotate"+d.data.rotate})
      .attr("class", "country_name")
      .style("text-anchor","middle");

  d3.selectAll("path").transition()
    .attr("opacity", 1)
    .delay(function(d,i) { return (i+1) * 150 })
    .ease("cubic")
    .duration(300);


  // Quaterfinals results

  var quarterfinals_results = donuts.append("svg:g")
    .data([json[0][1]])
    .attr("class","quarter_results")

  var circles = quarterfinals_results.selectAll("g.circle")
    .data(donut.value(function(d) { return d.position }))
    .enter().append("svg:g")
    .attr("transform", function(d){ return "translate("+d.data.position[0]+","+d.data.position[1]+")"});

    circles.append("svg:circle")
      .attr("fill", "black")
      .attr("opacity",0)
      .attr("r", 15);

    circles.append("svg:text")
      .text(function(d){return d.data.result})
      .attr("x", 0)
      .attr("y", 4)
      .attr("transform",function (d){return "rotate"+d.data.rotate})
      .attr("class", "result_text")
      .style("text-anchor","middle");

  d3.selectAll("circle").transition()
    .attr("opacity", 1)
    .delay(function(d,i) { return (i+1) * 300 })
    .ease("cubic")
    .duration(300);  

  // Semifinals

  var semifinals = donuts.append("svg:g")
    .data([json[1][0]])
    .attr("class","semis")
    
  var arcs = semifinals.selectAll("g.arc")
    .data(donut.value(function(d) { return 1200 }))
    .enter().append("svg:g")
    .attr("class", "arc")
    .attr("data-country", function(d) {return d.data.name})
    .attr("transform", "translate(" + (r+25) + "," + (r+25) + ")");

  arcs.append("svg:path")
      .attr("fill", function(d, i) { if(d.data.color == ""){return "grey"} return d.data.color; })
      .attr("d", arc(r-69))
      .attr("fill-opacity", function(d, i) { if(d.data.color == ""){return 0.45} return 1; })
      .attr("stroke-width", 2)
      .attr("stroke-opacity", .3)
      .attr("opacity",0)
      .attr("stroke","#000");

  arcs.append("svg:text")
      .text(function(d){return d.data.name})
      .attr("x", function(d){return d.data.position[0]})
      .attr("y", function(d){return d.data.position[1]})
      .attr("transform", function (d){return "rotate"+d.data.rotate})
      .attr("class", "country_name")
      .style("text-anchor","middle");

  d3.selectAll("path").transition()
    .attr("opacity", 1)
    .delay(function(d,i) { return (i+1) * 150 })
    .ease("cubic")
    .duration(300);

// Semifinals results

  var semifinals_results = donuts.append("svg:g")
    .data([json[1][1]])
    .attr("class","quarter_results")

  var circles = semifinals_results.selectAll("g.circle")
    .data(donut.value(function(d) { return d.position }))
    .enter().append("svg:g")
    .attr("transform", function(d){ return "translate("+d.data.position[0]+","+d.data.position[1]+")"});

    circles.append("svg:circle")
      .attr("fill", "black")
      .attr("opacity",0)
      .attr("r", 15);

    circles.append("svg:text")
      .text(function(d){return d.data.result})
      .attr("x", 0)
      .attr("y", 4)
      .attr("class", "result_text")
      .style("text-anchor","middle");        

    d3.selectAll("circle").transition()
      .attr("opacity", 1)
      .delay(function(d,i) { return (i+1) * 300 })
      .ease("cubic")
      .duration(300);  


  // Finals

  var finals = donuts.append("svg:g")
    .data([json[2][0]])
    .attr("class","finals")
    
  var arcs = finals.selectAll("g.arc")
    .data(donut.value(function(d) {return 1200 }))
    .enter().append("svg:g")
    .attr("class", "arc")
    .attr("data-country", function(d) {return d.data.name})
    .attr("transform", "translate(" + (r+25) + "," + (r+25) + ")");

  arcs.append("svg:path")
      .attr("fill", function(d, i) {if(d.data.color == ""){return "grey"} return d.data.color; })
      .attr("d", arc(r-138))
      .attr("fill-opacity", function(d, i) { if(d.data.color == ""){return 0.35} return 1; })
      .attr("stroke-width", 2)
      .attr("stroke-opacity", .3)
      .attr("opacity", 0)
      .attr("stroke","#000");

  arcs.append("svg:text")
      .text(function(d){return d.data.name})
      .attr("x", function(d){return d.data.position[0]})
      .attr("y", function(d){return d.data.position[1]})
      .attr("class", "country_name")
      .style("text-anchor","middle");

  d3.selectAll("path").transition()
    .attr("opacity", 1)
    .delay(function(d,i) { return (i+1) * 150 })
    .ease("cubic")
    .duration(300);

// finals result

  var finals_results = donuts.append("svg:g")
    .data([json[2][1]])
    .attr("class","finals_results")

  var circles = finals_results.selectAll("g.circle")
    .data(donut.value(function(d) { return d.position }))
    .enter().append("svg:g")
    .attr("transform", function(d){ return "translate("+d.data.position[0]+","+d.data.position[1]+")"});

    circles.append("svg:circle")
      .attr("fill", "black")
      .attr("opacity",0)
      .attr("r", 15);

    circles.append("svg:text")
      .text(function(d){return d.data.result})
      .attr("x", 0)
      .attr("y", 4)
      .attr("transform",function (d){return "rotate"+d.data.rotate})
      .attr("class", "result_text")
      .style("text-anchor","middle");

    d3.selectAll("circle").transition()
      .attr("opacity", 1)
      .delay(function(d,i) { return (i+1) * 300 })
      .ease("cubic")
      .duration(300);

  
  // Winner
  var winner = donuts.append("svg:g")
    .data([json[3][0]])
    .attr("opacity",0)
    .attr("class","finals");

  winner.append("svg:circle")
      .attr("fill", function(d) {if(d.color == ""){return "grey"} return d.color; })
      .attr("opacity", function(d) {if(d.name == ""){return .2} return 1; })
      .attr("data-country", function(d) {return d.name})
      .attr("r", 63)
      .attr("transform", "translate(" + (r+25) + "," + (r+25) + ")");

  winner.append("svg:text")
      .text(function(d){return d.name})
      .attr("x", 295)
      .attr("y", 298)
      .attr("class", "country_name")
      .style("text-anchor","middle");

  winner.transition()
      .attr("opacity", 1)
      .delay(2400)
      .ease("cubic")
      .duration(300);



  setTimeout(function(){
    d3.selectAll("g.arc").on("mouseover",onMouseOver);
    d3.selectAll("g.arc").on("mouseout",onMouseOut);
  },2500)


  function onMouseOver() {
    var self = this;

    if (d3.select(self).attr("data-country") == "") {
      onMouseOut();
      return false;
    }

    d3
      .selectAll("g.arc")
      .filter(function(d, i) { return (((self != this) && (d3.select(self).attr("data-country") != d3.select(this).attr("data-country"))) ? d : null) })
      .transition()
      .duration(350)
      .style("opacity",0.3);
  }

  function onMouseOut() {
    d3
      .selectAll("g.arc")
      .transition()
      .duration(350)
      .style("opacity",1)
  }

});
