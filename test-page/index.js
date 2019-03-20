const settings = {
  measure: "STRESN",
  panel: "RACE",
  margin: { left: 125 }
};

d3.csv("https://cdn.jsdelivr.net/gh/RhoInc/data-library/data/clinical-trials/renderer-specific/adbds.csv", function(data) {
  spikeHistogram("#container .chart .content", settings).init(
    data.filter(function(d) {
      return d.TEST === "Albumin";
    })
  );
});
