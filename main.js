function printAmount(amount) {
  $(".js-debt").hide();
  $(".js-paid-off").removeClass("hidden");
  $(".js-paid-off").submit(event => {
    event.preventDefault;
    const paid = $(event.currentTarget).find($("#paid"));
    const query = paid.val();
    paid.val("");
    $(".js-paid-off").hide();
    const percent = (query / amount) * 100 + "%";
    $(".progress-bar").attr("style", "width:" + percent);
  });
}

function keepGoing() {}

function watchSubmit() {
  $(".js-debt").submit(event => {
    event.preventDefault;
    const amount = $(event.currentTarget).find($("#amount"));
    const query = amount.val();
    amount.val("");
    printAmount(query);
  });
}
$(watchSubmit);
