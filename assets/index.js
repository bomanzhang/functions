const jsonData = [
    {   
        "image": "http://web.archive.org/web/20170910132507if_/https://transhackfeminist.noblogs.org/files/2014/08/transfuturisticcyborgs.png",
        "title": "THF! Transfuturistic Cyborgs",
        "artist": "TransHACKfeminist! Camp",
        "year": 2014,
        "medium": "Digital collage, poster",
        "dimensions": "N/A",
        "link": "https://transhackfeminist.noblogs.org/"
    },
	{   
        "image": "http://web.archive.org/web/20140922071556if_/http://transhackfeminist.noblogs.org/files/2014/05/8_THF_wangechi_mutu_oct20081.png",
        "title": "THF! Wangechi Mutu",
        "artist": "TransHACKfeminist! Camp",
        "year": 2014,
        "medium": "Digital collage, poster",
        "dimensions": "N/A",
        "link": "https://transhackfeminist.noblogs.org/"
    },
    {   
        "image": "http://web.archive.org/web/20141220143909if_/http://transhackfeminist.noblogs.org/files/2014/05/0_THF_Randy-Mora.-A-Dog%E2%80%99s-Dinner.jpg",
        "title": "THF! Randy Mora A Dog Dinner",
        "artist": "TransHACKfeminist! Camp",
        "year": 2014,
        "medium": "Digital collage, poster",
        "dimensions": "N/A",
        "link": "https://transhackfeminist.noblogs.org/"
    },
	{
        "image": "https://monoskop.org/images/thumb/7/74/Varia_Rotterdam_2019_.jpg/450px-Varia_Rotterdam_2019_.jpg",
        "title": "Relearn",
        "artist": "Varia Rotterdam",
        "year": 2019,
        "medium": "Mixed media",
        "dimensions": "N/A",
        "link": "https://www.imdb.com/title/tt0045758"
    },
	{   "image": "https://monoskop.org/images/4/44/VNS_Matrix_1.jpg",
		"title": "A Cyberfeminist Manifesto for the 21st Century",
        "artist": "VNS Matrix",
		"year": 2007,
		"medium": "Postcard",
		"dimensions": "N/A",
        "link": "https://www.imdb.com/title/tt0045758"
	},
	{
        "image": "https://monoskop.org/images/7/7a/VNS_Matrix_1991_A_Cyberfeminist_Manifesto_for_the_21st_Century.jpg",
		"title": "A Cyberfeminist Manifesto for the 21st Century",
        "artist": "VNS Matrix",
		"year": 1991,
		"medium": "Billboard, digital image",
		"dimensions": "6000 mm x 3000 m",
		"link": "https://www.imdb.com/title/tt0045758"
	},
	{
        "image": "https://monoskop.org/images/b/bd/VNS_Matrix_7.jpg",
		"title": "DNA Sluts from All New Gen CDROM",
        "artist": "VNS Matrix",
		"year": 1992,
		"medium": "Digital image",
		"dimensions": "N/A",
		"link": "https://www.imdb.com/title/tt0045758"
	},
    {
        "image": "https://monoskop.org/images/8/87/VNS_Matrix_9.jpg",
		"title": "All New Gen",
        "artist": "VNS Matrix",
		"year": 1994,
		"medium": "Postcard",
		"dimensions": "N/A",
		"link": "https://www.imdb.com/title/tt0045758"
	}	
];

const tableBody = document.querySelector('#index-table tbody');

// loop through the JSON data and create a table row for each item
for (let item of jsonData) {
  const row = tableBody.insertRow();
  row.insertCell().textContent = item.title
  row.insertCell().textContent = item.artist;
  row.insertCell().textContent = item.year;
  row.insertCell().textContent = item.medium;
  row.insertCell().textContent = item.dimensions;
  row.insertCell().innerHTML = `<a href="${item.link}">Link</a>`;
}