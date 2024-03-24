const input = document.getElementById("input");
const btn = document.getElementById("addbtn");
const list = document.getElementById("list");
const empty = document.getElementById("empty");
const icon = document.getElementById("icon");

btn.addEventListener("click", (e) =>{
	e.preventDefault();
	
	const text = input.value;

	if(text !== ""){
	    const li = document.createElement("LI");
	    li.classList.add("li");
	    const parrafo = document.createElement("P");

	    parrafo.textContent = text;
	    li.appendChild(parrafo);
	    li.appendChild(addDeleteBtn());
	    list.appendChild(li);

	    input.value = "";
	    empty.style.display = "none"; 
	}
});

function addDeleteBtn(){
	const dltbtn = document.createElement("BUTTON");

	dltbtn.textContent = "x";
	dltbtn.className = "btn-delete";

	dltbtn.addEventListener("click", (e) =>{
		const item = e.target.parentElement;
		list.removeChild(item);

		const items = document.querySelectorAll("li");
	    if (items.length === 0) {
	    	empty.style.display = "block";
	    }
	})
	return dltbtn;
};

