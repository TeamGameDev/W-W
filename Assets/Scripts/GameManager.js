#pragma strict

var level;

function Start () {
	Debug.Log("GM: Game Manager is up and running :)");
	level = Application.loadedLevel;
	Debug.Log("GM: Loaded Scene: " + Application.loadedLevelName);
}

function Awake () {
	DontDestroyOnLoad (transform.gameObject);
}


function Update() {
	if(Application.loadedLevel != level){
		level = Application.loadedLevel;
		Debug.Log("GM: Loaded Scene: " + Application.loadedLevelName);
	}
}

