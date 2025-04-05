
var width = 400;
var height = 200;

function resize() {
	
	this.patcher.box.varname = "bp_" + Math.random()*10000;
	this.patcher.parentpatcher.message("script", "sendbox", this.patcher.box.varname, "patching_size", width, height);
	this.patcher.box.varname = "";
}