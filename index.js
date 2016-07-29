$(function(){

   var color=['c','d','s','h'];
   var biao=[];
    var pukepai=[]
      audio.src='手机铃声-打火机短信音(1秒铃声版).mp3';
      audio.play();

      while(pukepai.length<52){
      var huase=color [Math.floor(Math.random()*4)];
      var shuzi=Math.ceil(Math.random()*13);
      var time=
      {huase:huase,shuzi:shuzi }
      if(! biao[shuzi+'-'+huase]){
         pukepai.push(time);
         biao[shuzi+'-'+huase]=true;
      }
      
   }
 
  biao2={
       1:'A',
       2:'2',
       3:'3',
       4:'4',
       5:'5',
       6:'6',
       7:'7',
       8:'8',
       9:'9',
       10:'T',
       11:'J',
       12:'Q',
       13:'K'
       };
  


  var index=0;
  var d=0;
  $audio=$("audio");



    function fapai() {
      for (var i = 0; i < 7; i++) {
          for (var j = 0; j < i + 1; j++) {
              d += 90;
              index += 1;
              $('<div>')
                  .addClass('puke shang')
                  .attr('id', i + '-' + j)
                  .data('shuzi', pukepai[index].shuzi)
                  .css({
                      backgroundImage: 'url(imgs/' + biao2[pukepai[index].shuzi]
                      + [pukepai[index].huase] + '.png)'
                  })
                  .appendTo('.zuozi')
                  .delay(d)
                  .animate({
                      top: i * 55,
                      left: (6 - i) * 50 + j * 100,
                      opacity: 1

                  })

          }
      }

      for (; index < pukepai.length; index++) {
          d += 90;
          $('<div>')
              .addClass('puke you')
              .data('shuzi', pukepai[index].shuzi)
              .css({
                  backgroundImage: 'url(imgs/' + biao2[pukepai[index].shuzi]
                  + [pukepai[index].huase] + '.png)'
              })
              .appendTo('.zuozi')
              .delay(d)
              .animate({
                  top: 490,
                  left: 150,
                  opacity: 1

              })
      }

      var youmeiyoubeiyazhu = function (el) {
          var x = Number($(el).attr('id').split('-')[0]);
          var y = Number($(el).attr('id').split('-')[1]);
          return $('#' + (x + 1) + '-' + y).length || $('#' + (x + 1) + '-' + (y + 1)).length;

      }

      var shangyizhang = null;
      $('.puke').on('click', function () {
          if ($(this).hasClass('shang') && youmeiyoubeiyazhu(this)) {
              return;
          }

          /*判断如果等于13时*/
          if ($(this).data('shuzi') === 13) {
              $(this).animate({
                  top: 0,
                  left: 610,
                  opacity: 0,
              }).queue(function () {
                  $(this).remove();
              })
              return;
          }
          /*第一次点击*/
          $(this).toggleClass('chulie');
          if ($(this).hasClass('chulie')) {
              $(this).animate({top: '-=30'})
          } else {
              $(this).animate({top: '+=30'})
          }

          if (!shangyizhang) {
              shangyizhang = $(this);
          } else {
              /*第二次点击*/
              if (shangyizhang.data('shuzi') + $(this).data('shuzi') === 13) {
                  $('.zuozi .chulie')
                      .animate({
                          top: 0,
                          left: 610,
                          opacity: 0
                      })
                      .queue(function () {
                          $('.chulie').remove();
                      })
                  shangyizhang = null;
              } else {
                  $('.zuozi .chulie')
                      .removeClass('chulie')
                      .animate({
                          top: '+=30'
                      })
                  shangyizhang = null;
              }

          }

      })

      var det = 0;
      $('.yourongqi').on('click', function () {
          det++;
          $('.puke.you').eq(-1)
              .css({zIndex: det})
              .removeClass('you')
              .addClass('hui')
              .animate({
                  top: 490,
                  left: 450
              })
      })

      var cishu = 0;
      $('.huiqu').on('click', function () {
          cishu += 1;
          if ($('.puke.you').length) {
              return;
          }
          if (cishu > 3) {
              $('.yxsb').addClass('xialai')
              return;
          }
          $('.puke.hui').each(function (i, el) {
              $(this)
                  .removeClass('hui')
                  .addClass('you')
                  .delay(i * 90)
                  .animate({
                      top: 490,
                      left: 150
                  })
                  .css({zIndex: 0})

          })
      })
      $('.jieshao').removeClass('xialai');
  }
    $('.cxfp').on('click',function(){
        location.reload();
    })

    $('.kaishi').on('click',function() {
        fapai();
        $('.huo').remove();
        audio.src = '富士山下.mp3';
        audio.play();
        $audio.on('ended', function () {
            audio.src = '富士山下.mp3';
            audio.play();
        })
    })
$('.youxijieshao').on('click',function(){
   $('.jieshao').toggleClass('xialai');
   $('.huo').remove();
})
$('.jieshao').on('click',function(){
   $('.jieshao').removeClass('xialai');
})
$('<div>')
.addClass('huo')
.appendTo('.tp')
.delay(4500)
.animate({
  opacity:1,
});



})