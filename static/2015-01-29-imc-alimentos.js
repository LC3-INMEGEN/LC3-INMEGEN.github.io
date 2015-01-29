var numberFormat = d3.format(".2f");
var projection = d3.geo.mercator()
    .scale(600)
    .center([-79.34034978813841, 14.012062015793]);
var mxChartIMC = dc.geoChoroplethChart("#mx-chart-imc");
var pieChartStatus = dc.pieChart("#pie-chart-status");
var edadChart = dc.compositeChart("#edad-chart");
var alimentosChart = dc.compositeChart("#industry-chart");
//var rowChart1 = dc.rowChart("#chart-row-1");

d3.csv("/data/2015-01-29-imc-alimentos.csv", function (csv) {
    var data = crossfilter(csv);

    var all = data.groupAll().reduce(
        function (p, v) {
            p.count++;
            return p;
        },
        function (p, v) {
            p.count--;
            return p;
        },
        function () {
            return {count: 0};
        }
    );
    var states = data.dimension(function (d) {
        return d["entidad"].toString();
    });

    var stateIMCSum = states.group().reduce(
        function (p, v) {
            p.count++;
            p.total += +v["imc"];
            return p;
        },
        function (p, v) {
            p.count--;
            p.total -= +v["imc"];
            return p;
        },
        function () {
            return {count: 0, total: 0};
        }
    );

    /*var stateAlimento_g = states.group().reduce(
      function (p, v) {
      p.count++;
      p.total += +v["1"];
      return p;
      },
      function (p, v) {
      p.count--;
      p.total -= +v["1"];
      return p;
      },
      function () {
      return {count: 0, total: 0};
      }
      )*/

    var sexo = data.dimension(function(d) { return d["sexo"]=="1"?"Hombre":"Mujer"; });
    var sexo_g = sexo.group().reduce(
        function (p, v) {
            p.count++;
            return p;
        },
        function (p, v) {
            p.count--;
            return p;
        },
        function () {
            return {count: 0};
        }
    );

    var edad = data.dimension(function(d) { return [Math.floor(d["edad"]), d["imc"]]});
    var edad_g = edad.group().reduce(
        function (p, v) {
            p.count++;
            p.total += Math.round(+v["imc"]);
            p.avg = Math.round(p.total / p.count);
            return p;
        },
        function (p, v) {
            p.count--;
            p.total -= Math.round(+v["imc"]);
            p.avg = (p.count == 0) ? 0 : Math.round(p.total / p.count);
            return p;
        },
        function () {
            return {count: 0, total: 0, avg:0};
        }
    );

    lineDimension = data.dimension(function(d) { return d["edad"]; }),
    lineGroup = lineDimension.group().reduce(
        function (p, v) {
            p.count++;
            p.total += Math.round(+v["imc"]);
            p.avg = Math.round(p.total / p.count);
            return p;
        },
        function (p, v) {
            p.count--;
            p.total -= Math.round(+v["imc"]);
            p.avg = (p.count == 0) ? 0 : Math.round(p.total / p.count);
            return p;
        },
        function () {
            return {count: 0, total: 0, avg:0};
        }
    );

    var c1 = lineDimension.group().reduce(
        function (p, v) {
            p.count++;

            p.total_c1 += +v["1"];
            p.total_c2 += +v["2"];
            p.total_c3 += +v["3"];
            p.total_c4 += +v["4"];
            p.total_c5 += +v["5"];
            p.total_c6 += +v["6"];
            p.total_c7 += +v["7"];
            p.total_c8 += +v["8"];
            p.total_c9 += +v["9"];
            p.total_c10 += +v["10"];
            p.total_c11 += +v["11"];
            p.total_c12 += +v["12"];
            p.total_c13 += +v["13"];
            p.total_c14 += +v["14"];
            p.total_c15 += +v["15"];
            p.total_c16 += +v["16"];

            p.avg_c1 = p.total_c1 / p.count;
            p.avg_c2 = p.total_c2 / p.count;
            p.avg_c3 = p.total_c3 / p.count;
            p.avg_c4 = p.total_c4 / p.count;
            p.avg_c5 = p.total_c5 / p.count;
            p.avg_c6 = p.total_c6 / p.count;
            p.avg_c7 = p.total_c7 / p.count;
            p.avg_c8 = p.total_c8 / p.count;
            p.avg_c9 = p.total_c9 / p.count;
            p.avg_c10 = p.total_c10 / p.count;
            p.avg_c11 = p.total_c11 / p.count;
            p.avg_c12 = p.total_c12 / p.count;
            p.avg_c13 = p.total_c13 / p.count;
            p.avg_c14 = p.total_c14 / p.count;
            p.avg_c15 = p.total_c15 / p.count;
            p.avg_c16 = p.total_c16 / p.count;

            return p;
        },
        function (p, v) {
            p.count--;

            p.total_c1 -= +v["1"];
            p.total_c2 -= +v["2"];
            p.total_c3 -= +v["3"];
            p.total_c4 -= +v["4"];
            p.total_c5 -= +v["5"];
            p.total_c6 -= +v["6"];
            p.total_c7 -= +v["7"];
            p.total_c8 -= +v["8"];
            p.total_c9 -= +v["9"];
            p.total_c10 -= +v["10"];
            p.total_c11 -= +v["11"];
            p.total_c12 -= +v["12"];
            p.total_c13 -= +v["13"];
            p.total_c14 -= +v["14"];
            p.total_c15 -= +v["15"];
            p.total_c16 -= +v["16"];

            p.avg_c1 = (p.count == 0) ? 0 : p.total_c1 / p.count;
            p.avg_c2 = (p.count == 0) ? 0 : p.total_c2 / p.count;
            p.avg_c3 = (p.count == 0) ? 0 : p.total_c3 / p.count;
            p.avg_c4 = (p.count == 0) ? 0 : p.total_c4 / p.count;
            p.avg_c5 = (p.count == 0) ? 0 : p.total_c5 / p.count;
            p.avg_c6 = (p.count == 0) ? 0 : p.total_c6 / p.count;
            p.avg_c7 = (p.count == 0) ? 0 : p.total_c7 / p.count;
            p.avg_c8 = (p.count == 0) ? 0 : p.total_c8 / p.count;
            p.avg_c9 = (p.count == 0) ? 0 : p.total_c9 / p.count;
            p.avg_c10 = (p.count == 0) ? 0 : p.total_c10 / p.count;
            p.avg_c11 = (p.count == 0) ? 0 : p.total_c11 / p.count;
            p.avg_c12 = (p.count == 0) ? 0 : p.total_c12 / p.count;
            p.avg_c13 = (p.count == 0) ? 0 : p.total_c13 / p.count;
            p.avg_c14 = (p.count == 0) ? 0 : p.total_c14 / p.count;
            p.avg_c15 = (p.count == 0) ? 0 : p.total_c15 / p.count;
            p.avg_c16 = (p.count == 0) ? 0 : p.total_c16 / p.count;

            return p;
        },
        function () {
            return {count: 0, total_c1: 0,total_c2:0, total_c3:0, total_c4:0, total_c5:0, total_c6:0, total_c7:0, total_c8:0,
                    total_c9: 0, total_c10:0, total_c11:0, total_c12:0, total_c13:0, total_c14:0, total_c15: 0, total_c16: 0, avg_c1:0 ,
                    avg_c2:0, avg_c3:0, avg_c4:0, avg_c5:0, avg_c6:0, avg_c7:0, avg_c8:0,
                    avg_c9: 0, avg_c10:0, avg_c11:0, avg_c12:0, avg_c13:0, avg_c14:0, avg_c15: 0, avg_c16: 0}
        }
    )

    d3.json("/data/mx_tj.json", function (statesJson) {
        mxChartIMC.width(400)
            .height(300)
            .dimension(states)
            .group(stateIMCSum)
            .projection(projection)
        //.colors(d3.scale.quantize().range(["#FFA2FF", "#FF94FF", "#FF828E", "#FF7571", "#FF6A6B", "#FF5E51", "#FF4236", "#FF361E", "#FF2900", "#B51100"]))
            .colors(d3.scale.quantize().range(["#E2F2FF", "#C4E4FF", "#9ED2FF", "#81C5FF", "#6BBAFF", "#51AEFF", "#36A2FF", "#1E96FF", "#0089FF", "#0061B5"]))
            .colorDomain([18, 30])
            .colorCalculator(function (d) { return d ? mxChartIMC.colors()(d) : '#ccc'; })
            .overlayGeoJson(topojson.object(statesJson, statesJson.objects.states).geometries, "state_code", function(d) {
                return d.properties.state_code.toString();
            })
            .valueAccessor(function (p) {
                if(typeof p.value === "undefined") {
                    return 0;                       
                } else {
                    if(typeof p.value.count === "undefined") {
                        return p.value;
                    }
                }
                return p.value.total/p.value.count;
            })
            .title(function (d) {
                var tipo = "";
                if(d.value <= 18.50) {
                    tipo = "bajo peso";
                } else {
                    if(d.value < 25) {
                        tipo = "normal";
                    } else {
                        if(d.value < 30) {
                            tipo = "sobrepeso";
                        } else {
                            tipo = "obesidad";
                        }
                    }
                }
                return "Estado: " + d.key + "\nIMC: " + d.value + " (" + tipo +")";
            });


        /*rowChart1.width(350).height(200)
          .dimension(states)
          .group(stateAlimento_g)
          .valueAccessor(function (p) {
          return p.value.total;
          })
          .elasticX(true);*/

        pieChartStatus.width(200)
            .height(300)
            .transitionDuration(500)
            .radius(100)
            .label(function (d) {
                if (pieChartStatus.hasFilter() && !pieChartStatus.hasFilter(d.key))
                    return d.key + "(0%)";
                return d.key + "(" + Math.floor(d.value.count / all.value().count * 100) + "%)";
            })
            .dimension(sexo)
            .group(sexo_g)
            .innerRadius(30)
        //.legend(dc.legend())
            .valueAccessor(function (p) {
                return p.value.count;
            });


        var symbolAccessor = function(d) { 
            if(parseFloat(d.key[1]) >= 25) {
                return "diamond"
            } else {
                return "circle"; 
            }
        };
        edadChart.width(600)
            .height(300)
            .transitionDuration(1000)
            .margins({top: 30, right: 50, bottom: 25, left: 30})
            .dimension(edad)
            .x(d3.scale.linear().domain([10,100]))
            .elasticY(true)
            .renderHorizontalGridLines(true)
            .yAxisLabel("IMC")
            .xAxisLabel("Edad")
            .brushOn(false)
            .legend(dc.legend().x(400).y(10).itemHeight(13).gap(5))
            .compose([
                dc.scatterPlot(edadChart)
                    .symbolSize(5)
                    .symbol(symbolAccessor)
                    .highlightedSize(10)
                    .clipPadding(10)
                    .colors("#00aa00")
                    .brushOn(false)
                    .group(edad_g)
                    .valueAccessor(function (p) {
                        return p.value.avg;
                    }),
                dc.lineChart(edadChart)
                    .dimension(lineDimension)
                    .group(lineGroup, "normal")
                    .colors("blue")
                    .valueAccessor(function (p) {
                        return 18.5
                    }),
                dc.lineChart(edadChart)
                    .dimension(lineDimension)
                    .group(lineGroup, "limite para sobrepeso")
                    .colors("gray")
                    .valueAccessor(function (p) {
                        return 25
                    }),
                dc.lineChart(edadChart)
                    .dimension(lineDimension)
                    .group(lineGroup, "limite para obesidad")
                    .colors("black")
                    .valueAccessor(function (p) {
                        return 30
                    }),
                dc.lineChart(edadChart)
                    .dimension(lineDimension)
                    .group(lineGroup, "promedio de imc con la edad")
                    .valueAccessor(function (p) {
                        return p.value.avg;
                    })
                    .title(function(d) {
                        return d.key + ":" + d.value.avg
                    })
                    .renderArea(false)
            ])
        

        alimentosChart.width(800)
            .height(300)
            .transitionDuration(1000)
            .margins({top: 30, right: 50, bottom: 25, left: 30})
            .dimension(lineDimension)
            .x(d3.scale.linear().domain([10,100]))
            .elasticY(true)
            .renderHorizontalGridLines(true)
            .yAxisLabel("Freq consumo Dias a la Sem*Veces al dia")
            .xAxisLabel("Edad")
            .brushOn(false)
            .legend(dc.legend().x(700).y(0).itemHeight(13).gap(5))
            .compose([
                dc.lineChart(alimentosChart)
                    .group(c1, "productos lacteos")
                    .colors("red")
                    .valueAccessor(function (p) {
                        return p.value.avg_c1;
                    }),
                dc.lineChart(alimentosChart)
                    .group(c1, "frutas")
                    .colors("green")
                    .valueAccessor(function (p) {
                        return p.value.avg_c2;
                    }),
                dc.lineChart(alimentosChart)
                    .group(c1, "verduras")
                    .colors("brown")
                    .valueAccessor(function (p) {
                        return p.value.avg_c3;
                    }),
                dc.lineChart(alimentosChart)
                    .group(c1, "comida rapida")
                    .colors("gray")
                    .valueAccessor(function (p) {
                        return p.value.avg_c4;
                    }),
                dc.lineChart(alimentosChart)
                    .group(c1, "carnes, embutidos, huevo")
                    .colors("black")
                    .valueAccessor(function (p) {
                        return p.value.avg_c5;
                    }),
                dc.lineChart(alimentosChart)
                    .group(c1, "pescados y mariscos")
                    .colors("yellow")
                    .valueAccessor(function (p) {
                        return p.value.avg_c6;
                    }),
                dc.lineChart(alimentosChart)
                    .group(c1, "leguminosas")
                    .colors("orange")
                    .valueAccessor(function (p) {
                        return p.value.avg_c7;
                    }),
                dc.lineChart(alimentosChart)
                    .group(c1, "cereales y tuberculos")
                    .colors("cyan")
                    .valueAccessor(function (p) {
                        return p.value.avg_c8;
                    }),
                dc.lineChart(alimentosChart)
                    .group(c1, "productos de maiz")
                    .colors("purple")
                    .valueAccessor(function (p) {
                        return p.value.avg_c9;
                    }),
                dc.lineChart(alimentosChart)
                    .group(c1, "bebidas")
                    .colors("blue")
                    .valueAccessor(function (p) {
                        return p.value.avg_c10;
                    }),
                dc.lineChart(alimentosChart)
                    .group(c1, "botanas y postres")
                    .colors("#bcbd22")
                    .valueAccessor(function (p) {
                        return p.value.avg_c11;
                    }),
                dc.lineChart(alimentosChart)
                    .group(c1, "sopas, cremas y pastas")
                    .colors("#aec7e8")
                    .valueAccessor(function (p) {
                        return p.value.avg_c12;
                    }),
                dc.lineChart(alimentosChart)
                    .group(c1, "miscelaneos")
                    .colors("#1f77b4")
                    .valueAccessor(function (p) {
                        return p.value.avg_c13;
                    }),
                dc.lineChart(alimentosChart)
                    .group(c1, "tortillas")
                    .colors("#2ca02c")
                    .valueAccessor(function (p) {
                        return p.value.avg_c14;
                    }),
                /*dc.lineChart(alimentosChart)
                  .group(c1)
                  .colors("#ffbb78")
                  .valueAccessor(function (p) {
                  return p.value.avg_c15;
                  }),*/
                dc.lineChart(alimentosChart)
                    .group(c1, "consumo de suplementos")
                    .colors("#dbdb8d")
                    .valueAccessor(function (p) {
                        return p.value.avg_c16;
                    })
            ])

        dc.renderAll();
    });
});
