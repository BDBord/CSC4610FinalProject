window.addEventListener('load', () => {
	
	const form = document.querySelector("#new-class-form");
	const input = document.querySelector("#new-class-input");
	const list_el = document.querySelector("#classes");
	
	
	form.addEventListener('reset', (e) => {
		e.preventDefault();
		
		
		const class1 = input.value;
		
		let getLocalStorage = localStorage.getItem("Classes");
		if (getLocalStorage == null){
			listarr = [];
		}
		
		else {
			listarr = JSON.parse(getLocalStorage);
		}
		
		listarr.push(class1);
		localStorage.setItem("Classes", JSON.stringify(listarr));

		const class_el = document.createElement("div");
		class_el.classList.add("class");
		const class_content_el = document.createElement("div");
		class_content_el.classList.add("content");
		
		class_el.appendChild(class_content_el);
		
		const class_input_el = document.createElement("input");
		class_input_el.classList.add("text");
		class_input_el.type = "text";
		class_input_el.value = class1;
		class_input_el.setAttribute("readonly","readonly");
		class_content_el.appendChild(class_input_el);
		
		const class_actions_el = document.createElement("div");
		class_actions_el.classList.add("actions");
		
		
		
		const class_delete_el = document.createElement("button");
		class_delete_el.classList.add("delete");
		class_delete_el.innerText = "Delete";
		
		class_actions_el.appendChild(class_delete_el);
		class_el.appendChild(class_actions_el);
		
		list_el.appendChild(class_el);
		input.value = '';
		
		class_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(class_el);
		});
		
	});
	
	
	
	
});