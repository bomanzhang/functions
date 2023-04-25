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
				<a href="${item.link}">
					<p>↗</p>
				</a>
			`
		//listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert


// Create a click event listener
listItem.addEventListener('click', () => {

	// Create new div element fullScreen
	const fullScreen = document.createElement('div')
	// Added a class 'fullscreen' to the div element
	fullScreen.classList.add('fullscreen')
	// Create a new image element called fullScreenImage
	const fullScreenImage = document.createElement('img')

	// Setting the source of fullScreenImage to the value of item.image
	fullScreenImage.src = item.image
	fullScreen.appendChild(fullScreenImage)

	// Create new div element for each image's details
	const fullScreenDetails = document.createElement('div')

	fullScreenDetails.classList.add('fullscreen-details')
	fullScreenDetails.innerHTML = itemDetails
	fullScreen.appendChild(fullScreenDetails)
	document.body.appendChild(fullScreen)

	// Remove the fullScreen element from body when clicked 
	fullScreen.addEventListener('click', () => {
	document.body.removeChild(fullScreen)
	})
})

	// Then add the whole `li` into the `ul`
	dataList.appendChild(listItem) 
	})
}

// Fetch gets your JSON file…
fetch('assets/data.json')
	.then(response => response.json())
	.then(data => {
		// And passes the data to the function, above!
		renderItems(data)
	})
