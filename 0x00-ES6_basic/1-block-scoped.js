export default function taskBlock(trueorFalse){
	const task = false;
	const task2 = true;

	if (trueorFalse) {
		var task = true;
		var task2 = false;
	}
	return [task, task2];
}
