const start = $("#checkIn");
const end = $("#checkOut");

start.datetimepicker({
  timepicker: false,
  format: "Y/m/d",
  onShow: function () {
    this.setOptions({
      maxDate: end.val() ? end.val() : false
    });
  }
});

end.datetimepicker({
  timepicker: false,
  format: "Y/m/d",
  onShow: function () {
    this.setOptions({
      minDate: start.val() ? start.val() : false
    });
  }
});