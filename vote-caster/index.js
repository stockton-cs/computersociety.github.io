var realtime = new Ably.Realtime("9GaDiw.NRzavQ:7ehetonWTstUUXnI");
var sendChannel = realtime.channels.get("vote-channel");
var score;
function yesVote() {
    vote(1);
}
function noVote() {
    vote(-1);
}
function maybeVote() {
    vote(0);
}
function vote(score) {
    sendChannel.publish("update", { "vote": score}, errCallback)
	document.getElementById('yesbtn').setAttribute("disabled", "true")
	document.getElementById('nobtn').setAttribute("disabled", "true")
	document.getElementById('maybebtn').setAttribute("disabled", "true")
}

function errCallback(err){
    window.alert(err.message);
}