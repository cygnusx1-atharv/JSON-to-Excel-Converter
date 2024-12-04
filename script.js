// Handle the download functionality
document.getElementById("download-btn").addEventListener("click", () => {
	const input = document.getElementById("json-input").value;

	try {
		// Parse the input as JSON
		const data = JSON.parse(input);

		if (!Array.isArray(data)) {
			alert("Please enter a valid array of objects.");
			return;
		}

		// Convert JSON to worksheet
		const worksheet = XLSX.utils.json_to_sheet(data);

		// Create a new workbook and append the worksheet
		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

		// Generate Excel file and trigger download
		XLSX.writeFile(workbook, "data.xlsx");
		alert("Excel file downloaded!");
	} catch (error) {
		alert("Invalid JSON. Please check your input.");
		console.error("Error parsing JSON:", error);
	}
});