const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const prices=document.querySelectorAll(".prices");
	let total=0;
	prices.forEach(prices =>{
		total+=Number(prices.textContent);
	});
	const row=document.createElement("tr");
	const cell=document.createElement("td");

	cell.colspan=2;
	cell.textContent=total;
	row.appendChild(cell);
	document.querySelector("table").appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

