

function isDefined(val) {
	if (val === undefined)
		return false;
	else
		return true;
}

function sleep(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
};

module.exports = {
	isDefined,
	sleep
}
