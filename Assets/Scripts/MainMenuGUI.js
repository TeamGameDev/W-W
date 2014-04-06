#pragma strict

function Start () {

}

function Update () {

}

function OnGUI(){

	var height = Screen.height;
	var width = Screen.width;
	
	GUI.Box(Rect(0,0,Screen.width,Screen.height),"Whiskey and Wizards");
	
	if(GUI.Button(Rect(10,10,100,30),"Play")){
		Application.LoadLevel("TavernTest");
	}

}//END OnGUI