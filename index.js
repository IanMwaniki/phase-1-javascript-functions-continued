// code your solution here
function saturdayFun(worktodo = "roller-skate") {
	return `This Saturday, I want to ${worktodo}!`;
}

function mondayWork(activity = "go to the office") {
	return `This Monday, I will ${activity}.`;
}
let wrapAdjective = function (adjective = "*") {
	return function (highlight = "a hard worker") {
		return `You are ${adjective}${highlight}${adjective}!`;
	};
};