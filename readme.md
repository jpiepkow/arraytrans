Array Transform
==
Description: This module is used to do complex array transformations based on substrings to change the order of an array or remove values.

*Latest version includes delete off substring and not exact value.

	npm install arraytrans --save
	
	
	var arrayTrans = require('arraytrans')
	
Methods:

	order: Use this method to sort/order an array based on substrings.
	
	remove: use this method to include or exclude elements of the array based on substrings.	
Order Method requires:

	1.The array to transform.
	2.Array of substrings in proper order.
	3.Base string the substrings will be pulled from.
	4.Location you want values that do not include base string(start or end or null). If null will try best to reconstruct close to original array.
Remove Method requires:	
		
	1.The array to transform.
	2.Object that has include or exclude array.** Only pass one.
	3.String base. This is used to delete from only a section of an array based on the string.
	
	
###example:

	var testArr = 
	['basestring.arrayone.one',
	'nobase1',
	'basestring.arrayone.two',
	'nobase2',
	'basestring.arrayone.three',
	'basestring.arraytwo.one',
	'basestring.arraytwo.two',
	'basestring.arraytwo.three',
	'basestring.arraythree.one',
	'basestring.arraythree.two',
	'basestring.araythree.three'];
	
	
	console.log(arrayTrans.order(testArr,['arraytwo','arrayone','arraythree'],'basestring','start'));	
	
	//OUTPUT=========================
	
	[ 'nobase1',
  	'nobase2',
  	'basestring.arraytwo.three',
  	'basestring.arraytwo.two',
  	'basestring.arraytwo.one',
  	'basestring.arrayone.three',
  	'basestring.arrayone.two',
  	'basestring.arrayone.one',
  	'basestring.arraythree.two',
  	'basestring.arraythree.one',
  	'basestring.araythree.three' ]
  	
  	=================================
  	
  	console.log(arrayTrans.remove(testArr,{include:['basestring.arrayone.one']},'basestring.arrayone'));
  	
  	//OUTPUT=========================
  	
  	[ 'basestring.arrayone.one',
  	'nobase1',
  	'nobase2',
  	'basestring.arraytwo.one',
  	'basestring.arraytwo.two',
  	'basestring.arraytwo.three',
  	'basestring.arraythree.one',
  	'basestring.arraythree.two',
 	 'basestring.araythree.three' ]
 	 
 	 =================================
 	 
 	  	console.log(arrayTrans.remove(testArr,{exclude:['basestring.arrayone.one','basestring.arraythree.one']},'basestring'));
  	
  	//OUTPUT=========================
  	
  	[ 'nobase1',
  	'basestring.arrayone.two',
  	'nobase2',
  	'basestring.arrayone.three',
  	'basestring.arraytwo.one',
  	'basestring.arraytwo.two',
  	'basestring.arraytwo.three',
  	'basestring.arraythree.two',
  	'basestring.araythree.three' ]
  	
	=================================
  	 	 
 	  	console.log(arrayTrans.remove(testArr,{exclude:['basestring.arrayone','basestring.arraythree.one']},'basestring'));
  	
  	//OUTPUT=========================
  	
  	[ 'nobase1',
  	'nobase2',
  	'basestring.arraytwo.one',
  	'basestring.arraytwo.two',
  	'basestring.arraytwo.three',
  	'basestring.arraythree.two',
  	'basestring.araythree.three' ]
  	
	=================================
  	