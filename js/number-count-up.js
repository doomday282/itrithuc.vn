// $('.count-down__number').each(function() {
//     var $this = $(this),
//         countTo = $this.attr('data-count');
    
//     $({ countNum: $this.text()}).animate({
//       countNum: countTo
//     },
  
//     {
  
//       duration: 8000,
//       easing:'linear',
//       step: function() {
//         $this.text(Math.floor(this.countNum));
//       },
//       complete: function() {
//         $this.text(this.countNum);
//         //alert('finished');
//       }
  
//     });  
    
    
  
//   });

  $('.count-down__number').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});