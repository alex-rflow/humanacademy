
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAESVvYC6JrJqZWlgA3NuuOXXRkzv-Vhjo",
    authDomain: "human-design-rflow.firebaseapp.com",
    databaseURL: "https://human-design-rflow.firebaseio.com",
    projectId: "human-design-rflow",
    storageBucket: "human-design-rflow.appspot.com",
    messagingSenderId: "177006005130"
  };
  var count = 0;
  var counta = 0;
  var county = 1;
  var counts = -1;
  var countss = 0;
  var countsin = -1;
  var countsins = 0;

  firebase1 = firebase.initializeApp(config);
  var provider = new firebase.auth.GoogleAuthProvider();
  var username,luser,admin ;

  test = document.location.href.match(/[^\/]+$/)[0];
firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;

      // ...
    }
    // The signed-in user info.
    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;
    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                       // this value to authenticate with your backend server, if
                       // you have one. Use User.getToken() instead.
      luser = firebase.auth().currentUser.uid;
      admin_test = firebase.database().ref('admin/' + luser);
      admin_test.once('value', function(snapshot) {

        console.log(snapshot.val())
        if (snapshot.val() == true) {
          admin = true
  userId = test.substring(4);
  if (userId != 'create') {

    

    $('#user_url').attr('href','../?id='+userId)

     testurl = firebase.database().ref('/user/' + userId);
     username3status = firebase.database().ref('/user/' + userId+'/status');
     console.log('/user/' + userId)
      testurl.once('value', function(snapshot) {
        
        console.log(snapshot.val());
        username = (snapshot.val()) || 'Anonymous';

          username3 = username.you
          username3s = username.et
          username3sin = username.sin
          var tm,zs;
          tg = firebase.auth().currentUser.uid;
          
          testurl2 = firebase.database().ref('/admin');
            testurl3 = firebase.database().ref('/scripts');
            testurl2.once('value', function(snapshot) {
            tm= snapshot.val()
          })
          if (tg == "qQ703qvD7vWmLzaIkrP9K4YvGX82") {
            $('.ts').css('display','block');
          }
          testurl3.on('value', function(snapshot) {
            zs= snapshot.val();
            $('#scripts').val(zs);
          })

          username3status.on('value', function(snapshot) {
            $('#b1,#b2,#b3').css('display','none');
            $('#loading').css('display','block');
            if (snapshot.val() >= 0) {
              $('#loading').css('display','none');
              $('#b1').css('display','block');
              $('#hd_type').text('Базовое описание')
              $('#photo').css('margin-left',-($('#photo').width())/2);
            };
            if (snapshot.val() >= 1) {
              $('#b2').css('display','block');
              $('#hd_type').text('Основное описание')
            };
            if (snapshot.val() >= 2) {
              $('#b3').css('display','block');
              $('#hd_type').text('Расширенное описание')
            };
          })

          $('#name').val(username.name)
          $('#text').val(username.text);
          $('#ava').attr('src',(username.ava || "../img/ava.png"));
          $('#ava').attr('style',(username.ava_css));
          $('#photo').attr('src',(username.ava || "../img/ava.png"));
          $('#clas').val(username.clas);
          $('#type').val(username.type);
          $('#base').val(username.base);
          $('#thinking').val(username.thinking);
          $('#spheres_of_realization').val(username.spheres_of_realization);
          $('#strategy_for_implementation').val(username.strategy_for_implementation);
          $('#food').val(username.food);
          $('#activity').val(username.activity);
          $('#genetic_trauma').val(username.genetic_trauma);
          $('#sexual_trauma').val(username.sexual_trauma);
          $('#motivation').val(username.motivation);
          $('#status').val((username.status) || 0);
          $('#show_status').val((username.show_status) || 0);
          $('#f1').val(username.f1);
          $('#f2').val(username.f2);
          $('#f3').val(username.f3);
          $('#f4').val(username.f4);
          $('#f5').val(username.f5);
          $('#f6').val(username.f6);
          $('#f7').val(username.f7);
          $('#f8').val(username.f8);
          $('#f9').val(username.f9);
          $('#environment').val(username.environment);
          $('#learning_information').val(username.learning_information);
          $('#attitudes').val(username.attitudes);
          function preview(img, selection) {
              var scaleX = 130 / (selection.width || 1);
              var scaleY = 130 / (selection.height || 1);
              $('#ava').css({
                  width: Math.round(scaleX * $('#photo').width()) + 'px',
                  height: Math.round(scaleY * $('#photo').height()) + 'px',
                  marginLeft: '-' + Math.round(scaleX * selection.x1) + 'px',
                  marginTop: '-' + Math.round(scaleY * selection.y1) + 'px'
              });
              firebase.database().ref('/user/' + userId + '/ava_css').set($('#ava').attr('style'))
          } 

          $(document).ready(function () {

              $('#photo').imgAreaSelect({
                  aspectRatio: '1:1',
                  handles: true,
                  onSelectChange: preview
              });
          });
          
          $('#you').html('')
          console.log(1)
          for (var k in username3) {
            if (username3.hasOwnProperty(k)) {
              ++count;
              console.log(count)
              if (count > 0) {
                $('#you').append('<input value="' + username.you['y'+count] + '" id="y' + count + '">');
              };
              te = username3.hasOwnProperty('y'+(count+1));
              if (te == false){
                county = count+1
                count = 0
              }
              
            }
          };
          for (var k in username3s) {
            if (username3s.hasOwnProperty(k)) {
              ++counts;
              if (counts >= 0) {
                $('#'+Object.keys(username3s)[counts]+' [name="title"]').val(username.et[Object.keys(username3s)[counts]].title);
                $('#'+Object.keys(username3s)[counts]+' [name="no"]').val(username.et[Object.keys(username3s)[counts]].no);
                $('#'+Object.keys(username3s)[counts]+' [name="yes"]').val(username.et[Object.keys(username3s)[counts]].yes);
                $('#'+Object.keys(username3s)[counts]+' [name="action"]').val(username.et[Object.keys(username3s)[counts]].action);
                $('#'+Object.keys(username3s)[counts]+' [name="st"]').val(username.et[Object.keys(username3s)[counts]].st);
                if (username.et[Object.keys(username3s)[counts]].act != undefined) {
                  $('#'+Object.keys(username3s)[counts]+' [name="act"]').val(username.et[Object.keys(username3s)[counts]].act);
                }
              };
              te = username.et[Object.keys(username3s)[(counts+1)]];
              if (te == undefined){
                countss = counts+1
                counts = -1
              }
              
            }
          };
          for (var k in username3sin) {
            if (username3sin.hasOwnProperty(k)) {
              ++countsin;
              if (countsin >= 0) {
                $('#sin').append('<li id="'+Object.keys(username3sin)[countsin]+'"><input name="title"  type="text" placeholder="Название"><input name="ability"  type="text" placeholder="Две способности"><textarea  name="descript" placeholder="Описание"></textarea></li>')
                $('#'+Object.keys(username3sin)[countsin]+' [name="title"]').val(username.sin[Object.keys(username3sin)[countsin]].title);
                $('#'+Object.keys(username3sin)[countsin]+' [name="ability"]').val(username.sin[Object.keys(username3sin)[countsin]].ability);
                $('#'+Object.keys(username3sin)[countsin]+' [name="descript"]').val(username.sin[Object.keys(username3sin)[countsin]].descript);
              };
              te = username.et[Object.keys(username3s)[(countsin+1)]];
              if (te == undefined){
                countsins = countsin+1
                countsin = -1
              }
              
            }
          };

          console.log(2)
          username3a = username.attributes
          for (var z in username3a) {
            if (username3a.hasOwnProperty(z)) {
              ++counta;
              console.log()
              $('#attributes #a' + counta).val(username.attributes['a'+counta]);
            }
          };
          if (tg == "qQ703qvD7vWmLzaIkrP9K4YvGX82") {
            $('#user').append('<textarea id="scripts"></textarea>')
          }
          console.log(3)
          start()
      });
}else {
  var url = "./?id="+md5(Math.random());
  $(location).attr('href',url);
}}else {
          admin = false
          $('#loading').text(name + ', Вы не являетесь администратором')
        }
      })
      
    }else{
      $('#loading').html('<input type="submit" onClick="login()" value="Войти" />')

    }
    console.log(name)
    
  })

 var storageRef = firebase.storage().ref();

function handleFileSelect(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  var file = evt.target.files[0];

  var metadata = {
    'contentType': file.type
  };

  // Push to child path.
  // [START oncomplete]
  storageRef.child('images/' + file.name).put(file, metadata).then(function(snapshot) {
    console.log('Uploaded', snapshot.totalBytes, 'bytes.');
    console.log(snapshot.metadata);
    var url = snapshot.downloadURL;
    console.log('File available at', url);
    // [START_EXCLUDE]
    firebase.database().ref('/user/' + userId + '/ava').set(url)
    console.log('/user/' + userId + '/ava');
    $('#ava').attr('src',url)
    // [END_EXCLUDE]
  }).catch(function(error) {
    // [START onfailure]
    console.error('Upload failed:', error);
    // [END onfailure]
  });
  // [END oncomplete]
}

window.onload = function() {
  document.getElementById('file').addEventListener('change', handleFileSelect, false);

}
function start() {
  $('.ava').click(function (e){
                $('.imgareaselect-outer').removeClass('dn')
                $('#photo').removeClass('dn')
                $('.cedit').removeClass('dn')
                $('#photo').css('margin-left',-($('#photo').width())/2);
                $('#photo').css('margin-top',-($('#photo').height())/2);
                $('.imgareaselect-selection').parent().removeClass('dn')
              })
  $('.cedit').click(function (e){
                $('.imgareaselect-outer').addClass('dn')
                $('#photo').addClass('dn')
                $('.cedit').addClass('dn')
                $('.imgareaselect-selection').parent().addClass('dn')
              })
  $('input').keyup(function (e){
    console.log($(this).parent().attr('id').charAt(0) == 'e')
        $('#main li').remove()
        if ($(this).attr('id') == "") {
          if ($(this).parent().attr('id').charAt(0) == 's') {
            firebase.database().ref('/user/' + userId + '/sin/' + $(this).parent().attr('id')+'/'+$(this).attr('name')).set($(this).val())
          }else if ($(this).parent().attr('id').charAt(0) == 'e') {
            console.log('test')
            firebase.database().ref('/user/' + userId + '/et/' + $(this).parent().attr('id')+'/'+$(this).attr('name')).set($(this).val())
          }
        }else{
          if ($(this).attr('id').charAt(0) == 'y') {
            if ($(this).val() == 'dell') {
               firebase.database().ref('/user/' + userId + '/you/' + $(this).attr('id')).remove()
               $(this).remove()
            }else {
              firebase.database().ref('/user/' + userId + '/you/' + $(this).attr('id')).set($(this).val())
            }
          }else if ($(this).attr('id').charAt(0) == 'a') {
            firebase.database().ref('/user/' + userId + '/attributes/' + $(this).attr('id')).set($(this).val())
          }else {
            firebase.database().ref('/user/' + userId + '/' + $(this).attr('id')).set($(this).val())
          }
        };
        console.log(e.keyCode)
        if(e.ctrlKey && e.keyCode == 73) {
          var ta = $(this),
          p = ta[0].selectionStart,
          text = ta.val();
          addText = '[i][/i]'
          console.log(ta)
          if(p != undefined)
             ta.val(text.slice(0, p) + addText + text.slice(p));
          else{
             ta.trigger('focus');
             range = document.selection.createRange();
             range.text = addText;
         }
        }
        
  });
  $('#b1 select').change(function (e){
    firebase.database().ref('/user/' + userId + '/'+$(this).attr('id')).set($(this).val())
  });
  $('#b3 select').change(function (e){
    firebase.database().ref('/user/' + userId + '/et/' + $(this).parent().attr('id')+'/'+$(this).attr('name')).set($(this).val())
  });
  $('textarea').keyup(function (e){
    $('#main li').remove()
    if ($(this).attr('id') == "") {
          if ($(this).parent().attr('id').charAt(0) == 's') {
            firebase.database().ref('/user/' + userId + '/sin/' + $(this).parent().attr('id')+'/'+$(this).attr('name')).set($(this).val())
          }else if ($(this).parent().attr('id').charAt(0) == 'e') {
            firebase.database().ref('/user/' + userId + '/et/' + $(this).parent().attr('id')+'/'+$(this).attr('name')).set($(this).val())
          }
        }else{
      firebase.database().ref('/user/' + userId + '/' + $(this).attr('id')).set($(this).val())
    };
    if ($(this).attr('id') == 'scripts'){
      firebase.database().ref('/scripts').set($('#scripts').val())
    }
    else if(e.ctrlKey && e.keyCode == 73) {
          var ta = $(this),
          p = ta[0].selectionStart,
          text = ta.val();
          addText = '[i][/i]'
          console.log(p)
          if(p != undefined){
            ta.val(text.slice(0, p) + addText + text.slice(p));
            ta[0].setSelectionRange(p+3,p+3);
          }
          else{
             ta.trigger('focus');
             range = document.selection.createRange();
             range.text = addText;
         }
    };
    if(e.ctrlKey && e.keyCode == 66) {
          var ta = $(this),
          p = ta[0].selectionStart,
          text = ta.val();
          addText = '[b][/b]'
          console.log(p)
          if(p != undefined){
            ta.val(text.slice(0, p) + addText + text.slice(p));
            ta[0].setSelectionRange(p+3,p+3);
          }
          else{
             ta.trigger('focus');
             range = document.selection.createRange();
             range.text = addText;
         }
    };
    if(e.ctrlKey && e.keyCode == 77) {
          var ta = $(this),
          p = ta[0].selectionStart,
          text = ta.val();
          addText = '[img][/img]'
          console.log(p)
          if(p != undefined){
            ta.val(text.slice(0, p) + addText + text.slice(p));
            ta[0].setSelectionRange(p+5,p+5);
          }
          else{
             ta.trigger('focus');
             range = document.selection.createRange();
             range.text = addText;
         }
    }
  });
}
function adda() {
  $('#you').append('<input id="y'+county+'">')
  ++county
  start()
}
function addas() {
  $('#sin').append('<li id="s'+(countsin+1)+'"><input name="title"  type="text" placeholder="Название"><input name="ability"  type="text" placeholder="Две способности"><textarea  name="descript" placeholder="Описание"></textarea></li>')
  ++countsin
  start()
}

function login() {
  firebase.auth().signInWithRedirect(provider);
}