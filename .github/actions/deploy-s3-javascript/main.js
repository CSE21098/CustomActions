const {core} = require("@actions/core/lib/core");
const github =  require('@actions/github');
const exec =  require('@actions/exec');

function run(){
	core.notice('Hello World using JS!!!');
}

run();
