const jsonData = [
    {   
        "image": "https://www.anat.org.au/wp-content/uploads/2022/09/unnamed.jpg",
        "title": "HER EYES WERE AS BLACK AS COAL",
        "artist": "In Her Interior",
        "year": 2018,
        "medium":"installation",
        "description":" In Her Interior exhibited the video and soundwork installation 'her eyes were as black as coal...' at 205 Hudson Gallery in New York. They had produced the work for an event called Refiguring the Future. Three characters - krill, spore and terra - emerged from the not-yet photographed black hole. The conditions momentarily perfect to give voice to the anthropoetics of time-travelling fossil-becomings. These voices without organs had been channeled by In Her Interior through field trips and the fugue-induced sympoiesis of collaborative writing across timespace",
        "link": "http://www.anat.org.au/anat-update/anat-alumnus-virginia-barratt/"
    },
    {   
        "image": "https://images.squarespace-cdn.com/content/v1/5d71c5cfe0f5f90001021017/1598577748656-OVH5F8WZLD11PMEU6SD0/accomplices_IHI_460kb.jpg?format=1500w",
        "title": "HER EYES WERE AS BLACK AS COAL",
        "artist": "In Her Interior",
        "year": 2018,
        "medium": "installation",
        "description":"",
        "link": "https://www.thisbreath.space/in-her-interior"
    },
    {   
        "image": "https://images.squarespace-cdn.com/content/v1/5c8f4d16809d8e697b0fc54b/1580490880280-JZR3EFH17GNGE4PKE203/_SP_6198-Edit-web.jpg?format=1500w",
        "title": "HER EYES WERE AS BLACK AS COAL",
        "artist": "In Her Interior",
        "year": 2019,
        "medium": "Mixed media installation",
        "description":"",
        "link": "https://refreshart.tech/in-her-interior"
    },
    {   
      "image": "https://lab.cccb.org/wp-content/uploads/xenofeminisme.jpg",
      "title": "Still from The Body as Technology",
      "artist": "Diann Bauer",
      "year": 2020,
      "medium": "Still from video work",
      "description":"",
      "link": "https://vimeo.com/472224217"
    },
    {   
        "image": "https://images.squarespace-cdn.com/content/v1/51129f41e4b0917ed28d824f/1511528861436-L6M1MDENVCKDIRQLAB7K/Laboria+Cuboniks+image.png?format=1500w",
        "title": "Still from video work ‘XF no. 4’",
        "artist": "Diann Bauer",
        "year": 2017,
        "medium": "Still from video work",
        "description":"",
        "link": "https://vimeo.com/216831883"
    },
    {   
        "image": "https://vectoreditors.files.wordpress.com/2017/11/laboria-cuboniks-image-courtesy-diann-bauer.jpg",
        "title": " Post-Cyber Feminist International",
        "artist": "Laboria Cuboniks",
        "year": 2017,
        "medium": "Digital image",
        "description":"",
        "link": "https://vector-bsfa.com/2017/11/20/post-cyber-feminist-international/"
    },
    {   
        "image": "http://www.lindadement.com/images/img/g3-right03.jpg",
        "title": "In my Gash",
        "artist": "Linda Dement",
        "year": 1999,
        "medium": "Video art",
        "description":"",
        "link": "http://www.lindadement.com/in-my-gash.htm"
    },
    {   
        "image": "https://v2.nl/wp-content/uploads/files/1995/events/deaf95/digital-dive/cdrom-dement/dement_cyberflesh_text02_20021119.png",
        "title": "Cyberflesh Girlmonster",
        "artist": "Linda Dement",
        "year": 1995,
        "medium": "CD-ROM, Interactive art",
        "description":"",
        "link": "http://www.lindadement.com/cyberflesh-girlmonster.htm"
    },
    {   
        "image": "https://v2.nl/wp-content/uploads/files/1995/events/deaf95/digital-dive/cdrom-dement/dement_cyberflesh_monster07_20021119.png",
        "title": "Cyberflesh Girlmonster",
        "artist": "Linda Dement",
        "year": 1995,
        "medium": "CD-ROM, Interactive art",
        "description":"",
        "link": "http://www.lindadement.com/cyberflesh-girlmonster.htm"
    },
    {   
        "image": "https://monoskop.org/images/9/9e/Dement_Linda_Cyberflesh_Girlmonster_1995.jpg",
        "title": "Cyberflesh Girlmonster",
        "artist": "Linda Dement",
        "year": 1995,
        "medium": "CD-ROM, Interactive art",
        "description":"",
        "link": "http://www.lindadement.com/cyberflesh-girlmonster.htm"
    },
    {   
        "image": "http://www.lindadement.com/images/tm/smileForMe.jpg",
        "title": "Typhoid Mary",
        "artist": "Linda Dement",
        "year": 1991,
        "medium": "CD-ROM, Interactive art",
        "description":"",
        "link": "http://www.lindadement.com/typhoid-mary.htm"
    },
    {   
        "image": "http://www.lindadement.com/images/tm/cutWet.jpg",
        "title": "Typhoid Mary",
        "artist": "Linda Dement",
        "year": 1991,
        "medium": "CD-ROM, Interactive art",
        "description":"",
        "link": "http://www.lindadement.com/typhoid-mary.htm"
    },
    {   
        "image": "https://monoskop.org/images/e/ec/Etc-punch.jpg",
        "title": "ETC Logo",
        "artist": "Eclectic Tech Carnival",
        "year": 2004,
        "medium": "Logo",
        "description":"",
        "link": "https://eclectictechcarnival.org/"
    },
    {   
        "image": "https://monoskop.org/images/thumb/f/f3/Old_Boys_Network_1997_100_Anti-Theses_of_Cyberfeminism.jpg/1024px-Old_Boys_Network_1997_100_Anti-Theses_of_Cyberfeminism.jpg",
        "title": "100 Anti-Theses of Cyberfeminism",
        "artist": "The Old Boys Network",
        "year": 1997,
        "medium": "Poster",
        "description":"",
        "link": "https://obn.org/obn/reading_room/manifestos/html/anti.html"
    },
    {
        "image": "https://emare.eu/media/pages/works/improved-television/e49840b5e3-1668713888/screenshot-2022-11-17-203651.jpg",
        "title": "Improved Television",
        "artist": "Cornelia Solfrank",
        "year": 2001,
        "medium": "Conceptual internet project",
        "description":"",
        "link": "https://transhackfeminist.noblogs.org/"
    },
    {     
        "image": "https://images.squarespace-cdn.com/content/v1/63a2ce0664014f2264b055d4/1671628116581-Q6PJTF0WXF52R5HSKZZQ/image-asset.png",
        "title": "Female Extension",
        "artist": "Cornelia Solfrank",
        "year": 1997,
        "medium": "Net.art",
        "description":"",
        "link": "https://transhackfeminist.noblogs.org/"
    },
    {      
        "image": "http://web.archive.org/web/20170910132507if_/https://transhackfeminist.noblogs.org/files/2014/08/transfuturisticcyborgs.png",
        "title": "THF! Transfuturistic Cyborgs",
        "artist": "TransHACKfeminist! Camp",
        "year": 2014,
        "medium": "Digital collage, poster",
        "description":"",
        "link": "https://transhackfeminist.noblogs.org/"
    },
    {   
        "image": "http://web.archive.org/web/20140922071556if_/http://transhackfeminist.noblogs.org/files/2014/05/8_THF_wangechi_mutu_oct20081.png",
        "title": "THF! Wangechi Mutu",
        "artist": "TransHACKfeminist! Camp",
        "year": 2014,
        "medium": "Digital collage, poster",
        "description":"",
        "link": "https://transhackfeminist.noblogs.org/"
    },
    {   
        "image": "http://web.archive.org/web/20141220143909if_/http://transhackfeminist.noblogs.org/files/2014/05/0_THF_Randy-Mora.-A-Dog%E2%80%99s-Dinner.jpg",
        "title": "THF! Randy Mora A Dog Dinner",
        "artist": "TransHACKfeminist! Camp",
        "year": 2014,
        "medium": "Digital collage, poster",
        "description":"",
        "link": "https://transhackfeminist.noblogs.org/"
    },
    {
        "image": "https://monoskop.org/images/thumb/7/74/Varia_Rotterdam_2019_.jpg/450px-Varia_Rotterdam_2019_.jpg",
        "title": "Relearn",
        "artist": "Varia Rotterdam",
        "year": 2019,
        "medium": "Mixed media",
        "description":"",
        "link": "https://www.imdb.com/title/tt0045758"
    },
	{   "image": "https://monoskop.org/images/4/44/VNS_Matrix_1.jpg",
		"title": "A Cyberfeminist Manifesto for the 21st Century",
        "artist": "VNS Matrix",
		"year": 2007,
		"medium": "Postcard",
		"description":"",
        "link": "https://www.imdb.com/title/tt0045758"
	},
	{
        "image": "https://monoskop.org/images/7/7a/VNS_Matrix_1991_A_Cyberfeminist_Manifesto_for_the_21st_Century.jpg",
		"title": "A Cyberfeminist Manifesto for the 21st Century",
        "artist": "VNS Matrix",
		"year": 1991,
		"medium": "Billboard, digital image",
		"description":"",
		"link": "https://www.imdb.com/title/tt0045758"
	},
	{
        "image": "https://monoskop.org/images/b/bd/VNS_Matrix_7.jpg",
		"title": "DNA Sluts from All New Gen CDROM",
        "artist": "VNS Matrix",
		"year": 1992,
		"medium": "Digital image",
		"description":"",
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

for (let item of jsonData) {
    const row = tableBody.insertRow();
    const titleCell = row.insertCell();

    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.title;

    titleCell.insertAdjacentHTML('beforeend', item.title);
    titleCell.classList.add('title-cell');

    row.insertCell().textContent = item.artist;
  
    const mediumCell = row.insertCell();
    mediumCell.textContent = item.medium;
    mediumCell.classList.add('medium-column');
  
    const yearCell = row.insertCell();
    yearCell.textContent = item.year;
    yearCell.classList.add('year-column');

    // Creating a div class for Expand 
    const expandCell = row.insertCell();
    expandCell.textContent = `↓`;
    expandCell.classList.add('expand-cell');

  const descriptionRow = tableBody.insertRow();
  const descriptionCell = descriptionRow.insertCell();
  descriptionCell.colSpan = 5;
  descriptionCell.classList.add('description');
  descriptionCell.innerHTML = item.description;

  // Source link after description 
  const sourceLink = document.createElement('a');
  sourceLink.href = item.link;
  sourceLink.textContent = '↗';
  descriptionCell.appendChild(sourceLink);

  // Create a new img element for the description row
  const descriptionImage = document.createElement('img');
  descriptionImage.src = item.image;
  descriptionImage.alt = item.title;
  descriptionImage.classList.add('artwork-image');
  descriptionCell.appendChild(descriptionImage);

  // Hiding the description
  descriptionCell.style.display = 'none';

  // Adding a click event listener to toggle description visibility
  expandCell.addEventListener('click', () => {
    if (descriptionCell.style.display == 'none') {
      descriptionCell.style.display = 'table-cell';
      expandCell.textContent = '↑'; // change to 'Close'

      // Insert the description row
      tableBody.insertBefore(descriptionRow, row.nextSibling);
    } else {
      descriptionCell.style.display = 'none';
      // Changing back to 'Expand'
      expandCell.textContent = '↓'; 
      tableBody.removeChild(descriptionRow);
    }
  });

    // EventListener for an image preview when mouse enters row
    row.addEventListener('mouseenter', (event) => {
        const previewImage = document.createElement('img');
        previewImage.src = item.image;
        previewImage.alt = item.title;
        previewImage.classList.add('preview-image');
        previewImage.style.position = 'absolute';
        previewImage.style.top = `${event.clientY}px`;
        previewImage.style.left = `${event.clientX+20}px`;
        document.body.appendChild(previewImage);
  });

  // Eventlistener when mouse leaves
  row.addEventListener('mouseleave', () => {
    const previewImage = document.querySelector('.preview-image');
    if (previewImage) {
      document.body.removeChild(previewImage);
    }
  });
}


