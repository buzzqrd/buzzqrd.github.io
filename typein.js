
function typeIn(){
	var typers = document.getElementsByClassName("typein");
	for(let i=0; i<typers.length; i++){
		//typers[i].innerHTML = typers[i].getAttribute("typeintext");
		//typeText(typers[i], typers[i].getAttribute("typeintext"), 100);
		//setTimeout(typeText.bind(this, typers[i], typers[i].getAttribute("typeintext"), 100, null), 1000);
		blinkCursor(typers[i], 1000, 2, typeText.bind(this, typers[i], typers[i].getAttribute("typeintext"), 100, blinkCursor.bind(this, typers[i], 1000, 3, null, 0), 50 ), 50);
		//blinkCursor(typers[i], 500, 3, null, 0);

	}
}

	
function blinkCursor(element, speed, count, chain, chaindelay){
	for(let i=0; i<count; i++){
		setTimeout(function(){
			element.innerHTML += '_';

		}, speed*i);
		setTimeout(function(){
			element.innerHTML = element.innerHTML.substring(0, element.innerHTML.length-1);
		}, (speed*i)+(speed/2));

	}		
	setTimeout(chain, (speed*count)-(speed/2)+chaindelay);
}

function typeText(typer, text, speed, chain, chaindelay){
	typer.innerHTML += text[0];
	if(text.length > 1){
		setTimeout(typeText.bind(this, typer, text.substring(1, text.length), speed, chain, chaindelay), speed);
	}
	else{
		console.log(chain);
		setTimeout(chain, chaindelay);
	}
	//typer.innerHTML = text;
}



