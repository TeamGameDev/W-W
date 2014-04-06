#pragma strict

public var player : GameObject;
private var offset : Vector3;


function Start () {

	offset = transform.position;
}

function LateUpdate () {

	transform.position = offset + player.transform.position;

}