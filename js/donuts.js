

var w = 544,
    h = 544,
    r = Math.min(w, h) / 2,
    labelr = r + 30, // radius for label anchor
    color = d3.scale.category20(),
    donut = d3.layout.pie(),
    arc = function(outer) {
      return d3.svg.arc().innerRadius(outer - 95).outerRadius(outer);
    }




d3.json("data/results.json", function(json) {

  var donuts = d3.select("#vis")
    .append("svg:svg")
      .attr("width", w)
      .attr("height", h);

    // Quaterfinals

    var quarterfinals = donuts.append("svg:g")
      .data([json[0]])
      .attr("class","quarter")
      
    var arcs = quarterfinals.selectAll("g.arc")
      .data(donut.value(function(d) { return 1200 }))
      .enter().append("svg:g")
      .attr("class", "arc")
      .attr("transform", "translate(" + (r) + "," + r + ")");

    arcs.append("svg:path")
        .attr("fill", function(d, i) { return d.data.color; })
        .attr("d", arc(r))
        .attr("fill-opacity",0.5);


    // Semifinals

    var semifinals = donuts.append("svg:g")
      .data([json[1]])
      .attr("class","semis")
      
    var arcs = semifinals.selectAll("g.arc")
      .data(donut.value(function(d) { return 1200 }))
      .enter().append("svg:g")
      .attr("class", "arc")
      .attr("transform", "translate(" + (r) + "," + r + ")");

    arcs.append("svg:path")
        .attr("fill", function(d, i) { return d.data.color; })
        .attr("d", arc(r-100))
        .attr("fill-opacity",0.5);


    // Finals

    var finals = donuts.append("svg:g")
      .data([json[2]])
      .attr("class","finals")
      
    var arcs = finals.selectAll("g.arc")
      .data(donut.value(function(d) { return 1200 }))
      .enter().append("svg:g")
      .attr("class", "arc")
      .attr("transform", "translate(" + (r) + "," + r + ")");


    arcs.append("svg:path")
        .attr("fill", function(d, i) { return d.data.color; })
        .attr("d", arc(r-200))
        .attr("fill-opacity",0.5);



// arcs.append("svg:text")
//     .attr("transform", function(d) {
//         var c = arc.centroid(d),
//             x = c[0],
//             y = c[1],
//             // pythagorean theorem for hypotenuse
//             h = Math.sqrt(x*x + y*y);
//         return "translate(" + (x/h * labelr) +  ',' +
//            (y/h * labelr) +  ")"; 
//     })
//     .attr("dy", ".35em")
//     .attr("text-anchor", function(d) {
//         // are we past the center?
//         return (d.endAngle + d.startAngle)/2 > Math.PI ?
//             "end" : "start";
//     })
});


// d3.json("data/semifinals.json", function(json) {

// var donuts = d3.select("#vis")
//   .append("svg:svg")
//     .data([json])
//     .attr("width", w)
//     .attr("height", h);

//   var arcs = donuts.selectAll("g.arc")
//     .data(donut.value(function(d) { return 1200 }))
//   .enter().append("svg:g")
//     .attr("class", "arc")
//     .attr("transform", "translate(" + (r) + "," + r + ")");

//   arcs.append("svg:path")
//       .attr("fill", function(d, i) { return d.data.color; })
//       .attr("d", arc);
// });



// d3.json("data/quarterfinals.json", function(json) {

// var donuts = d3.select("#vis")
//   .append("svg:svg")
//     .data([json])
//     .attr("width", w)
//     .attr("height", h);

//   var arcs = donuts.selectAll("g.arc")
//     .data(donut.value(function(d) { return 1200 }))
//   .enter().append("svg:g")
//     .attr("class", "arc")
//     .attr("transform", "translate(" + (r) + "," + r + ")");

// arcs.append("svg:path")
//     .attr("fill", function(d, i) { return d.data.color; })
//     .attr("d", arc);

// });








// var w = 534,
//     h = w,
//     r = w / 2,
//     x = d3.scale.linear().range([0, 2 * Math.PI]),
//     y = d3.scale.pow().exponent(1.3).domain([0, 1]).range([0, r]),
//     p = 5,
//     duration = 1000;

// var div = d3.select("#vis");


// var donuts = div.append("svg")
//     .attr("width", w + p * 2)
//     .attr("height", h + p * 2)
//     .append("g")
//     .attr("transform", "translate(" + (r + p) + "," + (r + p) + ")");

// var partition = d3.layout.partition()
//     .sort(null)
//     .value(function(d) { return 5.8 - d.depth; });

// var arc = d3.svg.arc()
//     .startAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x))); })
//     .endAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx))); })
//     .innerRadius(function(d) { return Math.max(0, d.y ? y(d.y)+5 : d.y+5); })
//     .outerRadius(function(d) { return Math.max(0, y(d.y + d.dy)); });

// d3.json("data/quarterfinals.json", function(json) {
//   var nodes = partition.nodes({children: json});

//   var path = donuts.selectAll("path").data(nodes);
//   path.enter().append("path")
//       .attr("id", function(d, i) { return "path-" + i; })
//       .attr("d", arc)
//       .style("fill", function(d) { return d.color })
//       .attr("fill-rule", "evenodd")
//       //.on("click", click);

//   // var result = donuts.selectAll("circle").data(nodes);
//   // result.enter()
//   //   .append("circle")
//   //   .attr("r","10")
//   //   .attr("fill","black")
//   //   .attr("cy",function(d) {return Math.max(0, d.y ? y(d.y)+5 : d.y+5)})
//   //   .attr("cx",function(d) {return Math.max(0, y(d.y + d.dy))})

//   // var text = donuts.selectAll("text").data(nodes);
//   // var textEnter = text.enter().append("text")
//   //     .style("fill-opacity", ".5")
//   //     .style("font", "bold 15px Arial")
//   //     .attr("text-anchor", function(d) {
//   //       return x(d.x + d.dx / 2) > Math.PI ? "end" : "start";
//   //     })
//   //     .attr("dx", function(d) {
//   //       return x(d.x + d.dx / 2) > Math.PI ? -5 : 5;
//   //     })
//   //     .attr("dy", ".2em")
//   //     .attr("transform", function(d) {
//   //       var multiline = (d.name || "").split(" ").length > 1,
//   //           angle = x(d.x + d.dx / 2) * 180 / Math.PI - 90,
//   //           rotate = angle + (multiline ? -.5 : 0);
//   //       return "rotate(" + rotate + ") translate(" + (y(d.y) + 10 + p) + ") rotate(" + (angle > 90 ? -180 : 0) + ")";
//   //     })
//   //     //.on("click", click);
//   // textEnter.append("tspan")
//   //     .attr("x", 0)
//   //     .text(function(d) { return d.depth ? d.name.split(" ")[0] : ""; });
//   // textEnter.append("tspan")
//   //     .attr("x", 0)
//   //     .attr("dy", "1em")
//   //     .text(function(d) { return d.depth ? d.name.split(" ")[1] || "" : ""; });

//   // function click(d) {
//   //   path.transition()
//   //     .duration(duration)
//   //     .attrTween("d", arcTween(d));

//   //   // Somewhat of a hack as we rely on arcTween updating the scales.
//   //   text
//   //     .style("visibility", function(e) {
//   //       return isParentOf(d, e) ? null : d3.select(this).style("visibility");
//   //     })
//   //     .transition().duration(duration)
//   //     .attrTween("text-anchor", function(d) {
//   //       return function() {
//   //         return x(d.x + d.dx / 2) > Math.PI ? "end" : "start";
//   //       };
//   //     })
//   //     // .attr("dx", function(d) {
//   //     //   return x(d.x + d.dx / 2) > Math.PI ? -10 : 10;
//   //     // })
//   //     .attrTween("transform", function(d) {
//   //       var multiline = (d.name || "").split(" ").length > 1;
//   //       return function() {
//   //         var angle = x(d.x + d.dx / 2) * 180 / Math.PI - 90,
//   //             rotate = angle + (multiline ? -.5 : 0);
//   //         return "rotate(" + rotate + ")translate(" + (y(d.y) + 10 + p) + ")rotate(" + (angle > 90 ? -180 : 0) + ")";
//   //       };
//   //     })
//   //     .style("fill-opacity", function(e) { return isParentOf(d, e) ? 0.5 : 1e-6; })
//   //     .each("end", function(e) {
//   //       d3.select(this).style("visibility", isParentOf(d, e) ? null : "hidden");
//   //     });
//   // }
// });

// function isParentOf(p, c) {
//   if (p === c) return true;
//   if (p.children) {
//     return p.children.some(function(d) {
//       return isParentOf(d, c);
//     });
//   }
//   return false;
// }



// // Interpolate the scales!
// function arcTween(d) {
//   var my = maxY(d),
//       xd = d3.interpolate(x.domain(), [d.x, d.x + d.dx]),
//       yd = d3.interpolate(y.domain(), [d.y, my]),
//       yr = d3.interpolate(y.range(), [d.y ? 20 : 0, r]);
//   return function(d) {
//     return function(t) { x.domain(xd(t)); y.domain(yd(t)).range(yr(t)); return arc(d); };
//   };
// }

// function maxY(d) {
//   return d.children ? Math.max.apply(Math, d.children.map(maxY)) : d.y + d.dy;
// }
