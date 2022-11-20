setTimeout(() => {
  const flipbook = $("#flipbook").turn({
    autoCenter: true,
  });

  $("#prev").click(function (e) {
    e.preventDefault();
    flipbook.turn("previous");
  });

  $("#next").click(function (e) {
    e.preventDefault();
    flipbook.turn("next");
  });
}, 1000);
