// Initialize Firebase
var config = {
  apiKey: "AIzaSyAESVvYC6JrJqZWlgA3NuuOXXRkzv-Vhjo",
  authDomain: "human-design-rflow.firebaseapp.com",
  databaseURL: "https://human-design-rflow.firebaseio.com",
  projectId: "human-design-rflow",
  storageBucket: "human-design-rflow.appspot.com",
  messagingSenderId: "177006005130"
};

firebase1 = firebase.initializeApp(config);
var username;

test =
  document.location.href.match(/[^\/]+$/)[0] || "dwdawdadawdwadadwadadwadaw";

userId = test.substring(4);
var count = 0;
var counta = 0;
var counts = -1;
var countss = 0;
var countsin = -1;
var countsins = 0;
var tm, zs;
testurl = firebase.database().ref("/user/" + userId);
testurl2 = firebase.database().ref("/admin");
testurl3 = firebase.database().ref("/scripts");
testurl2.once("value", function(snapshot) {
  tm = snapshot.val();
});

console.log("/user/" + userId);
testurl.on("value", function(snapshot) {
  console.log(snapshot.val());
  username = snapshot.val() || "Anonymous";
  tg = firebase.auth().currentUser.uid;
  if (tm[tg] == true) {
    if (tg == "qQ703qvD7vWmLzaIkrP9K4YvGX82") {
      $(".ts").css("display", "block");
    }
    $("#edit").html(
      '<a href="all" class="edit" title="Все описания"><img src="img/ic_content_paste_black_24px.svg" alt="" /></a><a href="edit?id=' +
        userId +
        '" class="edit" title="Реактировать"><img src="img/ic_create_black_24px.svg" alt="" /></a>'
    );
  }
  testurl3.on("value", function(snapshot) {
    zs = snapshot.val();
    $("#scripts").html(zs);
  });

  if (username == "Anonymous") {
    $("#user").html('<h1 style="color: #000">404 Не найдено</h1>');
  } else {
    $("#name").html(bbcode(snapshot.val().name));
    document.title = "Дизайн человека | " + snapshot.val().name;
    $("#text").html(bbcode(snapshot.val().text));
    $("#ava").attr("src", snapshot.val().ava || "img/ava.png");
    $("#ava").attr("style", username.ava_css);
    $("#test").html(bbcode(snapshot.val().test));
    $("#base").html(bbcode(snapshot.val().base));
    $("#thinking").html(bbcode(username.thinking));
    $("#spheres_of_realization").html(bbcode(username.spheres_of_realization));
    $("#strategy_for_implementation").html(
      bbcode(username.strategy_for_implementation)
    );
    $("#food").html(bbcode(username.food));
    $("#activity").html(bbcode(username.activity));
    $("#genetic_trauma").html(bbcode(username.genetic_trauma));
    $("#sexual_trauma").html(bbcode(username.sexual_trauma));
    $("#motivation").html(bbcode(username.motivation));
    $("#type").html("Тип: <b>" + bbcode(snapshot.val().type) + "</b>");
    $("#class").html("Класс: <b>" + bbcode(snapshot.val().clas) + "</b>");
    $("#sin").html("");
    $("#f1").html("1. " + bbcode(username.f1));
    $("#f2").html("2. " + bbcode(username.f2));
    $("#f3").html("3. " + bbcode(username.f3));
    $("#f4").html("4. " + bbcode(username.f4));
    $("#f5").html("5. " + bbcode(username.f5));
    $("#f6").html("6. " + bbcode(username.f6));
    $("#f7").html("7. " + bbcode(username.f7));
    $("#f8").html("8. " + bbcode(username.f8));
    $("#f9").html("9. " + bbcode(username.f9));
    $("#environment").html(bbcode(username.environment));
    $("#learning_information").html(bbcode(username.learning_information));
    $("#attitudes").html(bbcode(username.attitudes));
    username3 = snapshot.val().you;
    username3a = username.attributes;
    username3s = username.et;
    username3sin = username.sin;
    $("#you").html("");
    for (var k in username3) {
      if (username3.hasOwnProperty(k)) {
        ++count;
        console.log();
        $("#you").append("<li> — " + snapshot.val().you["y" + count] + "</li>");
        te = username3.hasOwnProperty("y" + (count + 1));
        if (te == false) {
          count = 0;
        }
      }
    }
    for (var z in username3a) {
      if (username3a.hasOwnProperty(z)) {
        ++counta;
        console.log(counta);
        $("#attributes #a" + counta + " .show").css(
          "width",
          username.attributes["a" + counta] + "%"
        );
        $("#attributes #a" + counta + " .proc").text(
          username.attributes["a" + counta] + "%"
        );
        te = username3a.hasOwnProperty("a" + (counta + 1));
        if (te == false) {
          counta = 0;
        }
      }
    }
    for (var k in username3s) {
      if (username3s.hasOwnProperty(k)) {
        ++counts;
        if (counts >= 0) {
          $("#" + Object.keys(username3s)[counts] + ' [name="title"]').html(
            username.et[Object.keys(username3s)[counts]].title
          );
          $("#" + Object.keys(username3s)[counts] + ' [name="no"]').html(
            '<em class="reg">Неразвитое состояие:</em> ' +
              bbcode(username.et[Object.keys(username3s)[counts]].no)
          );
          $("#" + Object.keys(username3s)[counts] + ' [name="yes"]').html(
            '<em class="reg">Развитое состояние:</em> ' +
              bbcode(username.et[Object.keys(username3s)[counts]].yes)
          );
          $("#" + Object.keys(username3s)[counts] + ' [name="action"]').html(
            '<em class="reg">Действия для перехода к развитому состоянию:</em> ' +
              bbcode(username.et[Object.keys(username3s)[counts]].action)
          );
          $("#" + Object.keys(username3s)[counts] + ' [name="st"]').html(
            '<em class="reg">Стадия развития:</em> ' +
              bbcode(username.et[Object.keys(username3s)[counts]].st)
          );
          if (username.et[Object.keys(username3s)[counts]].act != undefined) {
            $(
              "#" + Object.keys(username3s)[counts] + ' [name="act"]'
            ).removeClass();
            $("#" + Object.keys(username3s)[counts] + ' [name="act"]').addClass(
              "active-" + username.et[Object.keys(username3s)[counts]].act
            );
            if (username.et[Object.keys(username3s)[counts]].act == 1) {
              $("#" + Object.keys(username3s)[counts] + ' [name="act"]').attr(
                "title",
                "Активирована всегда"
              );
            } else if (username.et[Object.keys(username3s)[counts]].act == 2) {
              $("#" + Object.keys(username3s)[counts] + ' [name="act"]').attr(
                "title",
                "Активирована не всегда, либо при наличии транзитов, либо в окружении людей"
              );
            }
          }
          console.log(
            Object.keys(username3s)[counts],
            username.et[Object.keys(username3s)[counts]].act
          );
        }
        te = username.et[Object.keys(username3s)[counts + 1]];
        if (te == undefined) {
          countss = counts + 1;
          counts = -1;
        }
      }
    }
    for (var k in username3sin) {
      if (username3sin.hasOwnProperty(k)) {
        ++countsin;
        if (countsin >= 0) {
          $("#sin").append(
            '<li id="' +
              Object.keys(username3sin)[countsin] +
              '"><h3 name="title"></h3><h3 name="ability"></h3><p  name="descript" ></p></li>'
          );
          $("#" + Object.keys(username3sin)[countsin] + ' [name="title"]').html(
            bbcode(username.sin[Object.keys(username3sin)[countsin]].title)
          );
          $(
            "#" + Object.keys(username3sin)[countsin] + ' [name="ability"]'
          ).html(
            "(" +
              bbcode(
                username.sin[Object.keys(username3sin)[countsin]].ability + ")"
              )
          );
          $(
            "#" + Object.keys(username3sin)[countsin] + ' [name="descript"]'
          ).html(
            bbcode(username.sin[Object.keys(username3sin)[countsin]].descript)
          );
        }
        te = username.sin[Object.keys(username3s)[countsin + 1]];
        if (te == undefined) {
          countsins = countsin + 1;
          countsin = -1;
        }
      }
    }
    if (username.show_status != 9) {
      $(".t1,.t2,.t3").css("display", "none");
      $("#loading").css("display", "block");
      if (username.show_status >= 0) {
        $("#loading").css("display", "none");
        $(".t1").css("display", "block");
      }
      if (username.show_status >= 1) {
        $(".t2").css("display", "block");
      }
      if (username.show_status >= 2) {
        $(".t3").css("display", "block");
      }
    }
  }
  // ...
});
$format_search = [
  /\[b\](.*?)\[\/b\]/gi,
  /\[i\](.*?)\[\/i\]/gi,
  /\[u\](.*?)\[\/u\]/gi,
  /\[img\](.*?)\[\/img\]/gi,
  /\[img float="center"\](.*?)\[\/img\]/gi,
  /\[img float="right"\](.*?)\[\/img\]/gi,
  /\[\/br\]/gi
]; // NOTE: No comma after the last entry

// The matching array of strings to replace matches with
$format_replace = [
  "<strong>$1</strong>",
  "<em>$1</em>",
  '<span style="text-decoration: underline;">$1</span>',
  '<br/><img src="$1" class="bbcode_img"></img><br/>',
  '<br/><center><img src="$1" class="bbcode_img"></img></center><br/>',
  '<br/><img src="$1" class="bbcode_img" style="float: right"></img><br/>',
  "<br/><br/>"
];

function bbcode(text) {
  // Perform the actual conversion
  $str = "" + text;
  for (var i = 0; i < $format_search.length; i++) {
    $str = $str.replace($format_search[i], $format_replace[i]);
  }
  return $str;
}
