var carousel = $("#coverflow").flipster({
    style: 'carousel',
    spacing: -0.5,
    // buttons:   true,
  });


  // const theme = document.getElementById('theme');

  // theme.addEventListener('click',()=>{
    
    
  //   if(theme.classList[0]==='close-theme-panel'){
  //     theme.classList.remove('close-theme-panel')
  //     theme.classList.add('open-theme-panel')
  //   }
  //   else{
  //     theme.classList.add('close-theme-panel')
  //     theme.classList.remove('open-theme-panel')
  //   }
    
  // })

  const theme = document.getElementById('theme');
  theme.addEventListener('click',()=>{   
    theme.classList.toggle('active')
  })



  const colorButtons = document.querySelectorAll('.color1')
  colorButtons.forEach(color=>{
    color.addEventListener('click',()=>{
      const themeColor =color.getAttribute('data-color');
      document.querySelector(':root').style.setProperty('--primary',themeColor)
    })
  })










  new WOW().init();





  $('.counter').counterUp();