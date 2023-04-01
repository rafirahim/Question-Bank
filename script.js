function displayQuestion() {
	// Get the question number from the form data
	var question_number = document.getElementById("question_number").value;
	
	// Load the Excel file using XLSX.js library
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'questions.xlsx', true);
	xhr.responseType = 'arraybuffer';

	xhr.onload = function(e) {
		var data = new Uint8Array(xhr.response);
		var workbook = XLSX.read(data, {type:'array'});
		var worksheet = workbook.Sheets[workbook.SheetNames[0]];
		
		// Get the cell containing the question text
		var cell1 = worksheet['A' + question_number];
        var cell2 = worksheet['B' + question_number];
		
		// Output the question text
		var question_text = document.getElementById("question_text");
        var answer_text = document.getElementById("answer_text");
		question_text.innerHTML =  cell1.v ;
        answer_text.innerHTML=cell2.v;
	};
	
	xhr.send();
}
