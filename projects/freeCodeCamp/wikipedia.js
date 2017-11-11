$(document).ready(function() {
  $("#search").click(function() {
    var searchTerm = $("#searchTerm").val();

    var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      searchTerm +
      "&format=json&callback=?";
    console.log(api);

    $.getJSON(api, function(data) {
      $("#result").empty();
      // console.log(api);
      var dataLink = data[3];
      var dataHeader = data[1];
      var dataDescription = data[2];

      for (var i = 0; i < data[1].length; i++) {
        $("#result").append(
          "<div class='well'><a href =" +
            dataLink[i] +
            " target='blank'>" +
            "<h3>" +
            dataHeader[i] +
            "</h3>" +
            "<p>" +
            dataDescription[i] +
            "</p></a>" +
            "</div>"
        );
      }
    });
  });
  $("#searchTerm").keypress(function(e) {
    if (e.keyCode === 13) {
      $("#search").click();
    }
  });
});
