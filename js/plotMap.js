$(document).ready(function () {
  $(".mapcontainer").mapael({
    map: {
      name: "japan_country",

      // Set default plots and areas style
      defaultPlot: {
          attrs: {
            fill: "#004a9b"
            , opacity: 0.6
          }
          , attrsHover: {
              opacity: 1
          }
          , text: {
              attrs: {
                  fill: "#505444"
              }
              , attrsHover: {
                  fill: "#000"
              }
          }
      },
      defaultArea: {
        attrs: {
            fill: "#f4f4e8"
            , stroke: "#ced8d0"
        }
        , attrsHover: {
            fill: "#a4e100"
        }
        , text: {
            attrs: {
                fill: "#505444"
            }
            , attrsHover: {
                fill: "#000"
            }
        }
    }
    },

    // Add some plots on the map
    plots: {
      // Square plot
      'Tokyo': {
          type: "circle",
          size: 20,
          latitude: 35.7295,
          longitude: 139.747344,
          tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> Tokyo, a teeming metrolopis"},
          text: {content: "Tokyo"},
          eventHandlers: {
            click: function() {
              $('#TokyoModal').modal('show');
            }
          }
      },
      // Square plot
      'Kyoto': {
          type: "circle",
          size: 20,
          latitude: 35.0485,
          longitude: 135.784,
          tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> World Heritage Site"},
          text: {content: "Kyoto"},
          eventHandlers: {
            click: function() {
              $('#KyotoModal').modal('show');
            }
          }
      },
      // Square plot
      'Hiroshima': {
          type: "circle",
          size: 20,
          latitude: 34.423439,
          longitude: 132.4473,
          tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> A sleek, modern place"},
          text: {content: "Hiroshima"},
          eventHandlers: {
            click: function() {
              $('#HiroshimaModal').modal('show');
            }
          }
      },
      // Plot positioned by x and y instead of latitude, longitude
      'myplot': {
          x: 300,
          y: 200,
          text: {
              content: "My plot"
              , position: "bottom"
              , attrs: {"font-size": 10, fill: "#004a9b", opacity: 0.6}
              , attrsHover: {fill: "#004a9b", opacity: 1}
          },
      },
    }
  });
});