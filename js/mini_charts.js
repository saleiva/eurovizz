function createChart(g,d){

    console.log(g+","+d)
    d3.json("https://saleiva.cartodb.com/api/v2/sql?q=select%20*%20from%20first_phase%20where%20group_name%20=%20'"+g+"'", function(json) {

        w = 400,
        h = 400,
        margin = 20,
        y = d3.scale.linear().domain([0, 12]).range([0 + margin, h - margin]),
        x = d3.scale.linear().domain([0, 4]).range([0 + margin, w - margin])

        var vis = d3.select(d)
        .append("svg:svg")
        .attr("width", w)
        .attr("height", h)

        var g = vis.append("svg:g")
        .attr("transform", "translate(0, 200)");    
        
        for (var i = 0; i<4; i++) {
          var data = [0, json.rows[i].j1, json.rows[i].j2, json.rows[i].j3, json.rows[i].j4];        
          var line = d3.svg.line()
          .x(function(d,i) { return x(i); })
          .y(function(d) { return -1 * y(d); })        

          g.append("svg:path").attr("d", line(data));
      }
  });
}

function init(){
    createChart("A","#ch1");
    createChart("B","#ch2");
    createChart("C","#ch3");
    createChart("D","#ch4");
}