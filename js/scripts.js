(($) => {
  $(() => {

    $("body").css("height", window.innerHeight);
    $("body").css("width", window.innerWidth);

    const decode = (a) => {
      return a.replace(/[a-zA-Z]/g, (c) => {
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
      });
    };

    const mailLink = $(".email-link");
    mailLink.click(() => {
      const b = "znvygb:znvy@pue";
      const h = "vfgvnaqbreara.qr";
      var y = decode(b + h);
      mailLink.attr("href", y);
    });

    var part1 = decode("znvy");
    var part2 = Math.pow(2, 6);
    var part3 = String.fromCharCode(part2);
    var part4 = decode("puevfgvnaqbreara.qr");
    var part5 = "<span class='anti-spam'>no-my-friend</span>";
    const email = $.parseHTML(part1 + part5 + part3 + part4);

    $(".contact").append(email);

    $(".overlay").addClass("loaded");
  });
})(jQuery);