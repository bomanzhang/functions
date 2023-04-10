// Function to render your items
const renderItems = (data) => {
	// The `ul` where the items will be inserted
	const dataList = document.getElementById('data-list')


	// Loop through each item in the data array
	data.forEach(item => {
		const listItem = document.createElement('li') // Make an `li`


		// You can make each element inside of that…
		const itemImage = document.createElement('img') // And an image
		itemImage.src = item.image // Set the `src` attribute from the JSON
		listItem.appendChild(itemImage) // And add that too


		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
			`	<p>Title: ${item.title}</p>
				<p>Artist: ${item.artist}</p>
				<p>Medium: ${item.medium}</p>
				<p>Dimensions: ${item.dimensions}</p>
				<a href="${item.link}">
					<p>Source</p>
				</a>
			`
		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

		// You can build logic from your specific data, too
/* 		if (!item.alsoWriter) { // If this is `false`
			listItem.classList.add('faded') // Add this class to the whole `li`
		} */

		dataList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})
}


// Fetch gets your JSON file…
fetch('assets/data.json')
	.then(response => response.json())
	.then(data => {
		// And passes the data to the function, above!
		renderItems(data)
	})
