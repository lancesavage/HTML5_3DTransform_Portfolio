var init = function() {
  var box = document.querySelector('.containerLeft').children[0],
      showPanelButtons = document.querySelectorAll('#show-buttons button'),
      panelClassName = 'show-front',

      onButtonClick = function( event ){
        box.removeClassName( panelClassName );
        panelClassName = event.target.className;
		
		if(panelClassName === "show-random"){
			
				var x = Math.floor((Math.random() * 6) + 1);
    			
				switch(x){
					
					case 1: 
					panelClassName = "show-front";
					break;
					
					case 2: 
					panelClassName = "show-back";
					break;
					
					case 3: 
					panelClassName = "show-left";
					break;
					
					case 4: 
					panelClassName = "show-right";
					break;
					
					case 5: 
					panelClassName = "show-top";
					break;
					
					case 6:
						panelClassName = "show-bottom";
					break;
					
					default:
						panelClassName = "show-top";
										
					}
				
				
			
			} 
		
        box.addClassName( panelClassName );
      };

  for (var i=0, len = showPanelButtons.length; i < len; i++) {
    showPanelButtons[i].addEventListener( 'click', onButtonClick, false);
  }
  
   var box2 = document.querySelector('.containerRight').children[0],
      showPanelButtons2 = document.querySelectorAll('#show-buttons2 button'),
      panelClassName = 'show-front',

      onButtonClick = function( event ){
        box2.removeClassName( panelClassName );
        panelClassName = event.target.className;
		
			if(panelClassName === "show-random"){
			
				var x = Math.floor((Math.random() * 6) + 1);
    			
				switch(x){
					
					case 1: 
					panelClassName = "show-front";
					break;
					
					case 2: 
					panelClassName = "show-back";
					break;
					
					case 3: 
					panelClassName = "show-left";
					break;
					
					case 4: 
					panelClassName = "show-right";
					break;
					
					case 5: 
					panelClassName = "show-top";
					break;
					
					case 6:
						panelClassName = "show-bottom";
					break;
					
					default:
						panelClassName = "show-top";
										
					}
				
				
			
			} 
		
        box2.addClassName( panelClassName );
		
				
      };

  for (var i=0, len = showPanelButtons2.length; i < len; i++) {
    showPanelButtons2[i].addEventListener( 'click', onButtonClick, false);
  }
  
  
};
  
window.addEventListener( 'DOMContentLoaded', init, false);