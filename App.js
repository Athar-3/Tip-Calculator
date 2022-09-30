function calculateTip() {
	const amount = document.querySelector('#bill').value;
	const amount2 = parseInt(amount);
	
	const persons = parseInt(document.querySelector('#split').value);
	
	const tip = document.querySelector('#tip').value;
	const tip2 = parseInt(tip);
	
	const percentage = (tip2 / 100) * amount2;
	const totalBill = amount2 + percentage;
	const splitPerPerson = totalBill / persons;
	
	if (amount === "" || tip === "" )
		alert("please enter Bill Amount and Tip percent");
	if (totalBill > 0)
		document.getElementById("total").innerHTML = `Total Bill: ${parseInt(totalBill).toFixed(2)}`;
	if (persons > 1)
		document.getElementById("splitTotal").innerHTML = `Each person pay: ${parseInt(splitPerPerson).toFixed(2)}`;
	if (['1', ''].includes(persons))
		document.querySelector('#split').style.display = 'none';
}

