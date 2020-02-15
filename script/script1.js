window.onload=function(){
	function setHeading(Lisa) {
	  let myHeading = document.querySelector('h2');
	  myHeading.textContent = 'Hello!' + Lisa + '!';
	}   
	function setUserName() {
		let MyName = prompt("请输入你的名字：");
		localStorage.setItem('name',MyName);
		setHeading(MyName);
	}   
	let storedName = localStorage.getItem('name');
	if(!storedName) {
	   setUserName();
	} else {
	   setHeading(storedName);
	}    
	let myButton = document.querySelector('button'); 
	myButton.onclick = setUserName;
};