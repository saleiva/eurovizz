function createChart(gr,d){

  d3.json("https://saleiva.cartodb.com/api/v2/sql?q=select%20*%20from%20first_phase%20where%20group_name%20=%20'"+gr+"'", function(json) {


  var w = 200,
    h = 160,
    margin = 20,
    y = d3.scale.linear().domain([0, 12]).range([0 + margin, h - margin]),
    x = d3.scale.linear().domain([0, 4]).range([0 + margin, w - margin])


    var vis = d3.select(d)
    .append("svg:svg")
    .attr("width", w)
    .attr("height", h)

    var g = vis.append("svg:g")
    .attr("transform", "translate(-10, 130)");
    
    for (var i = 0; i<4; i++) {
      var data = [0, json.rows[i].j1, json.rows[i].j2, json.rows[i].j3, json.rows[i].j4];        
      var line = d3.svg.line()
      .x(function(d,i) { return x(i); })
      .y(function(d) { return -1 * y(d); })        

      g.append("svg:path")
				.data(data)
  			.attr("d", line(data))
  			.attr("id", json.rows[i].country)
  			.style("stroke", function(d) {
     			return json.rows[i].color;
   			})
				.on("mousemove", function(d) {
					d3.select("#group_"+gr).text(this.id.toUpperCase());
					d3.select(this).style("stroke-width",4);
				})
				.on("mouseout", function(d) {
					d3.select("#group_"+gr).text("GROUP "+gr);
					d3.select(this).style("stroke-width",2);
				});
    }

    g.append("svg:text")
      .attr("class", "group_title")
      .attr("id", "group_"+gr)
      .text("GROUP "+gr)
      .attr("x", 100)
      .attr("y", 26)
      .attr("dy","-0.8em")
      .style("text-anchor","middle")
  });
}

createChart("A","#ch1");
createChart("B","#ch2");
createChart("C","#ch3");
createChart("D","#ch4");
