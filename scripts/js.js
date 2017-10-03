/*main.css*/
/*OE, 2016*/
/*This is the main js for the travel website.*/

 /*
        simple time functions to just display time
        */
    		function startTime() {
			    var n = new Date();
			    var wd = n.getDay();
			    var d = n.getDate();
			    var y = n.getFullYear();
			    var hou = n.getHours();
			    var min = n.getMinutes();
			    var m = n.getMonth();
			    var sec = n.getSeconds();
			    //add a zero in front of numbers<10
			    min = checkTime(min);
			    sec = checkTime(sec);
			    //get week day
			    var weekday = new Array(7);
			    weekday[0] = "Sun";
			    weekday[1] = "Mon";
			    weekday[2] = "Tue";
			    weekday[3] = "Wed";
			    weekday[4] = "Thu";
			    weekday[5] = "Fri";
			    weekday[6] = "Sat";
			    wd = weekday[wd];
			    //all other
			    m++;
			
			    document.getElementById('dateTxt').innerHTML = wd + " " + d + "." + m + "." + y + " " + hou + ":" + min + ":" + sec;
			
			    t = setTimeout('startTime()', 500);
			}
			
			function checkTime(i) {
			    if (i < 10) {
			        i = "0" + i;
			    }
			    return i;
			}
			
			
			
			
			
			

			
			/*
			
			CollapsibleLists.js
			
			An object allowing lists to dynamically expand and collapse
			
			Created by Stephen Morley - http://code.stephenmorley.org/ - and released under
			the terms of the CC0 1.0 Universal legal code:
			
			http://creativecommons.org/publicdomain/zero/1.0/legalcode
			
			*/
			
			// create the CollapsibleLists object
			var CollapsibleLists =
			new function(){
			
			/* Makes all lists with the class 'collapsibleList' collapsible. The
			* parameter is:
			*
			* doNotRecurse - true if sub-lists should not be made collapsible
			*/
			this.apply = function(doNotRecurse){
			
			// loop over the unordered lists
			var uls = document.getElementsByTagName('ul');
			for (var index = 0; index < uls.length; index ++){
			
			// check whether this list should be made collapsible
			if (uls[index].className.match(/(^| )collapsibleList( |$)/)){
			
			// make this list collapsible
			this.applyTo(uls[index], true);
			
			// check whether sub-lists should also be made collapsible
			if (!doNotRecurse){
			
			  // add the collapsibleList class to the sub-lists
			  var subUls = uls[index].getElementsByTagName('ul');
			  for (var subIndex = 0; subIndex < subUls.length; subIndex ++){
			    subUls[subIndex].className += ' collapsibleList';
			  }
			
			}
			
			}
			
			}
			
			};
				
								    // Post-order traversal of the collapsible list(s) 
    // if collapse is true, then all list items implode, else they explode.
    this.collapse = function(collapse){
      // find all elements with class collapsibleList(Open|Closed) and click   them
      var elements = document.getElementsByClassName('collapsibleList' + (collapse ? 'Open' : 'Closed'));
      for (var i = elements.length; i--;) {
        elements[i].click();
      }
    };

			
			/* Makes the specified list collapsible. The parameters are:
			*
			* node         - the list element
			* doNotRecurse - true if sub-lists should not be made collapsible
			*/
			this.applyTo = function(node, doNotRecurse){
			
			// loop over the list items within this node
			var lis = node.getElementsByTagName('li');
			for (var index = 0; index < lis.length; index ++){
			
			// check whether this list item should be collapsible
			if (!doNotRecurse || node == lis[index].parentNode){
			
			// prevent text from being selected unintentionally
			if (lis[index].addEventListener){
			  lis[index].addEventListener(
			      'mousedown', function (e){ e.preventDefault(); }, false);
			}else{
			  lis[index].attachEvent(
			      'onselectstart', function(){ event.returnValue = false; });
			}
			
			// add the click listener
			if (lis[index].addEventListener){
			  lis[index].addEventListener(
			      'click', createClickListener(lis[index]), false);
			}else{
			  lis[index].attachEvent(
			      'onclick', createClickListener(lis[index]));
			}
			
			// close the unordered lists within this list item
			toggle(lis[index]);
			
			}
			
			}
			
			};
			
			/* Returns a function that toggles the display status of any unordered
			* list elements within the specified node. The parameter is:
			*
			* node - the node containing the unordered list elements
			*/
			function createClickListener(node){
			
			// return the function
			return function(e){
			
			// ensure the event object is defined
			if (!e) e = window.event;
			
			// find the list item containing the target of the event
			var li = (e.target ? e.target : e.srcElement);
			while (li.nodeName != 'LI') li = li.parentNode;
			
			// toggle the state of the node if it was the target of the event
			if (li == node) toggle(node);
			
			};
				
				
				
				
				
				
				
				
				
				
				
				
				

			
			}
			
			/* Opens or closes the unordered list elements directly within the
			* specified node. The parameter is:
			*
			* node - the node containing the unordered list elements
			*/
			function toggle(node){
			
			// determine whether to open or close the unordered lists
			var open = node.className.match(/(^| )collapsibleListClosed( |$)/);
			
			// loop over the unordered list elements with the node
			var uls = node.getElementsByTagName('ul');
			for (var index = 0; index < uls.length; index ++){
			
			// find the parent list item of this unordered list
			var li = uls[index];
			while (li.nodeName != 'LI') li = li.parentNode;
			
			// style the unordered list if it is directly within this node
			if (li == node) uls[index].style.display = (open ? 'block' : 'none');
			
			}
			
			// remove the current class from the node
			node.className =
			node.className.replace(
			    /(^| )collapsibleList(Open|Closed)( |$)/, '');
			
			// if the node contains unordered lists, set its class
			if (uls.length > 0){
			node.className += ' collapsibleList' + (open ? 'Open' : 'Closed');
			}
			
			}
			
			}();
			
			
			
			
			
			
			
			
			








function roll(img_name, img_src){
document[img_name].src = img_src;
}






































function prepareList() {
  $('#expList').find('li:has(ul)')
      .click( function(event) {
  		if (this == event.target) {
  			$(this).toggleClass('expanded');
  			$(this).children('ul').toggle('medium');
  		}
  		return false;
  	})
  	.addClass('collapsed')
  	.children('ul').hide();
  };
 
  $(document).ready( function() {
      prepareList();
  });
  
  
  
  $(document).ready(function () {
    setTimeout(function () {
        // Slide
    $('#menu1 li > a.expanded + ul').slideToggle('medium');
    $('#menu1 li > a').click(function () {
        $(this).toggleClass('expanded').toggleClass('collapsed').parent().find('> ul').slideToggle('medium');
    });
        $('#example1 .expand_all').click(function () {
            $('#menu1 > li > a.collapsed').addClass('expanded').removeClass('collapsed').parent().find('> ul').slideDown('medium');
        });
        $('#example1 .collapse_all').click(function () {
            $('#menu1 > li > a.expanded').addClass('collapsed').removeClass('expanded').parent().find('> ul').slideUp('medium');
        });
    }, 250);
});


