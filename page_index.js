function generate() {
    const targetElement = document.getElementById('content');
	{
		const parentDiv = document.createElement('div');
		parentDiv.style.display = 'flex';
		parentDiv.style.flexDirection = 'column';
		parentDiv.style.alignItems = 'center';
		parentDiv.style.justifyContent = 'center';
		parentDiv.style.backgroundImage = 'url("https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg")';
		const textElement = document.createElement('div');
		textElement.style.textAlign = 'center';
		textElement.style.fontSize = '14px';
		textElement.style.padding = '10px';
		textElement.style.borderRadius = '8px';
		const usedText = document.createTextNode('If you have encountered any bugs/issues on my website, please open a new issue');
		textElement.appendChild(usedText);	
		const anchor = document.createElement('a');
		anchor.href = 'https://github.com/AnimatorDisciple123/Portfolio_PJ/issues';
		anchor.textContent = "here";
		anchor.id = "niger"
		anchor.style.fontSize = "14px";
		anchor.style.marginLeft = '4px';
		anchor.style.marginRight = '4px';
		textElement.appendChild(anchor);	
		const templateText = document.createTextNode('and I will reply as soon as I can.');
		textElement.appendChild(templateText);
		parentDiv.appendChild(textElement);
		const logoImg = document.createElement('img');
		logoImg.src = '/img/logo_text.svg';
		logoImg.id = 'mainTitle';
		logoImg.classList.add('mainObject');
		logoImg.draggable = false;
		parentDiv.appendChild(logoImg);
		const russianImg = document.createElement('img');
		russianImg.src = 'https://asset-cdn.schoology.com/system/files/imagecache/profile_tiny/pictures/picture-566b2f731fbfbe49f840cc6da5fb3428_66d1ec4e1a741.jpg?1725033550';
		russianImg.width = 256;
		russianImg.height = 256;
		russianImg.classList.add('mainObject');
		russianImg.draggable = false;
		parentDiv.appendChild(russianImg);
		targetElement.append(parentDiv);
	}
	{
		const section = document.createElement('section');
		section.className = 'intro';
		section.id = 'intro';
		const header = document.createElement('h2');
		header.innerText = 'Introduction';
		section.appendChild(header);
		const paragraph1 = document.createElement('p');
		paragraph1.innerText = 'I am Anime_Disciple123, an ambitious coder looking to develop Web Development and Animation Skills.';
		section.appendChild(paragraph1);
		const paragraph2 = document.createElement('p');
		paragraph2.innerText = 'Outside of coding, I am a guitarist and mathematician, as well as a part-time tutor.';
		section.appendChild(paragraph2);
		const paragraph3 = document.createElement('p');
		paragraph3.innerText = "Here's a list of topics I tutor at Schoolhouse:";
		section.appendChild(paragraph3);
		const tutorList = document.createElement('ul');
		['Pre-Algebra', 'Algebra I', 'Algebra II', 'Geometry'].forEach(topic => {
			const listItem = document.createElement('li');
			listItem.innerText = topic;
			tutorList.appendChild(listItem);
		});
		section.appendChild(tutorList);
		const paragraph4 = document.createElement('p');
		paragraph4.innerText = "Here's a list of song genres I love:";
		section.appendChild(paragraph4);
	
		const genreList = document.createElement('ul');
		['Classical', 'Funk', 'Metallic', 'EDM'].forEach(genre => {
			const listItem = document.createElement('li');
			listItem.innerText = genre;
			genreList.appendChild(listItem);
		});
		section.appendChild(genreList);
		targetElement.appendChild(section);
	}
	{
		const section = document.createElement('section');
		section.className = 'background';
		section.id = 'background';
		const header = document.createElement('h2');
		header.innerText = 'Background';
		section.appendChild(header);
		const anchor = document.createElement('a');
		anchor.href = 'https://outreach-international.org/blog/poverty-in-india/';
		anchor.target = '_blank';
		const mediaDiv = document.createElement('div');
		mediaDiv.className = 'media';
		const img = document.createElement('img');
		img.src = 'https://newprojects.99acres.com/projects/modi_builders/modi_lotus_homes/images/w1btogb_1734426730_538459161_med.webp';
		img.alt = 'Image representing poverty-stricken area';
		mediaDiv.appendChild(img);
		const caption = document.createElement('p');
		caption.className = 'caption';
		caption.innerText = 'I was born in a poverty-stricken area in the trenches of India.';
		mediaDiv.appendChild(caption);
		anchor.appendChild(mediaDiv);
		section.appendChild(anchor);
		const paragraph1 = document.createElement('p');
		paragraph1.innerText = `I was raised by a hard-working mother and with an intelligent brother. 
		It's a miracle that I have transformed my life in such amazing ways. 
		I mean, come on, I'm a coder, guitarist, and mathematician and go to a public school! Isn't that amazing?`;
		section.appendChild(paragraph1);
		const paragraph2 = document.createElement('p');
		paragraph2.innerText = `I came to the USA at a very young age (since kindergarten) and have been living here ever since. 
		As a young juvenile in a foreign land, I was bullied and teased for my accent and my oh-so-odoriferous lunch. 
		But I didn't let that stop me. I kept on exploring, learning, and growing, making true friends along the way! 
		Now I am the center of a friend group and have a high reputation in my school!`;
		section.appendChild(paragraph2);
		const paragraph3 = document.createElement('p');
		paragraph3.innerText = `After some time, I got used to the American culture and started to embrace it. 
		I maintained my Indian roots but also started to self-encourage sociality and friendliness with other unique people.`;
		section.appendChild(paragraph3);
		targetElement.appendChild(section);
	}
	{
		 const section = document.createElement('section');
		 section.className = 'hobbies';
		 section.id = 'hobbies';
		 const header = document.createElement('h2');
		 header.innerText = 'Hobbies';
		 section.appendChild(header);
		 const introParagraph = document.createElement('p');
		 introParagraph.innerText = 'As you probably know by now, I love math, guitar, and coding!';
		 section.appendChild(introParagraph);
		 const mathHeader = document.createElement('h3');
		 mathHeader.innerText = 'Math';
		 section.appendChild(mathHeader);
	 
		 const mathParagraph = document.createElement('p');
		 mathParagraph.innerText = "I love math because it's a universal language that can be used to solve any problem. Who doesn't like Calculus and Physics?";
		 section.appendChild(mathParagraph);
	 
		 const mathImage = document.createElement('img');
		 mathImage.src = 'https://www.universetoday.com/wp-content/uploads/2015/06/maths.jpg';
		 mathImage.id = 'math_photo';
		 mathImage.height = 200;
		 mathImage.width = 300;
		 section.appendChild(mathImage);
		 const guitarHeader = document.createElement('h3');
		 guitarHeader.innerText = 'Guitar';
		 section.appendChild(guitarHeader);
		 const guitarParagraph1 = document.createElement('p');
		 guitarParagraph1.innerText = "I've been playing guitar for a few years now! It's a hobby that fuels harmony!";
		 section.appendChild(guitarParagraph1);	 
		 const guitarParagraph2 = document.createElement('p');
		 guitarParagraph2.innerText = "Here's a list of guitar songs (from multifaceted genres) I enjoy listening to!";
		 section.appendChild(guitarParagraph2);	 
		 const guitarList = document.createElement('ol');
		 const guitarSongs = ['Crazy Train', 'Enter Sandman', 'Ride the Lightning'];
		 guitarSongs.forEach(song => {
			 const listItem = document.createElement('li');
			 listItem.innerText = song;
			 guitarList.appendChild(listItem);
		 });
		 section.appendChild(guitarList);
		 const codingHeader = document.createElement('h3');
		 codingHeader.innerText = 'Coding';
		 section.appendChild(codingHeader);	 
		 const codingParagraph1 = document.createElement('p');
		 codingParagraph1.innerText = "I've been coding for a few days now! It's a hobby that sparks creativity and logic!";
		 section.appendChild(codingParagraph1);	 
		 const codingParagraph2 = document.createElement('p');
		 codingParagraph2.innerText = "Here's a list of 3 coding languages I enjoy using and want to learn more about!";
		 section.appendChild(codingParagraph2);	 
		 const codingList = document.createElement('ol');
		 const codingLanguages = ['HTML', 'CSS', 'JavaScript'];
		 codingLanguages.forEach(language => {
			 const listItem = document.createElement('li');
			 listItem.innerText = language;
			 codingList.appendChild(listItem);
		 });
		 section.appendChild(codingList);
		targetElement.appendChild(section);
	}
	{
		const container = document.getElementById('content');

		const osuHeading = document.createElement('div');
		osuHeading.innerHTML = 'Random osu! songs<br>';
		osuHeading.style.marginTop = '100px';
		osuHeading.style.textAlign = 'left';
		container.appendChild(osuHeading);
		
		const osuSongs = [
			{ src: 'https://paraliyzed.net/img/DECO%EF%BC%8A27%20-%20%E5%88%9D%E5%B5%90%20feat.%20%E5%88%9D%E9%9F%B3%E3%83%9F%E3%82%AF%20[L7BxD7HHWl4].mp3?i=1', type: 'audio/mpeg' },
			{ src: 'https://paraliyzed.net/img/Rabbit%20Hole%20%E2%A7%B8%20Pure%20Pure%20%EF%BC%82%E3%83%A9%E3%83%93%E3%83%83%E3%83%88%E3%83%9B%E3%83%BC%E3%83%AB%EF%BC%82%204K%20Edit%20Full%20Version%20feat.%20@channelcaststation%20[zVRDUtJXCrQ].mp3?i=1', type: 'audio/mpeg' },
			{ src: 'https://paraliyzed.net/img/mesmerizer%2025%20people.mp3?i=3', type: 'audio/mpeg' },
		];

		osuSongs.forEach(song => {
			const audioElement = document.createElement('audio');
			audioElement.controls = true;

			const sourceElement = document.createElement('source');
			sourceElement.src = song.src;
			sourceElement.type = song.type;

			audioElement.appendChild(sourceElement);
			audioElement.style.display = 'block';
			audioElement.style.marginLeft = '0';
			container.appendChild(audioElement);
		});

		const osuSpotifyTracks = [
			'https://open.spotify.com/embed/track/47lKHyMERKqbCwYVw4ytTz?utm_source=generator',
			'https://open.spotify.com/embed/track/2nKzhen7U2hJqZSKJcg8Ei?utm_source=generator',
		];

		osuSpotifyTracks.forEach(src => {
			const osuSpotify = document.createElement('iframe');
			osuSpotify.style.borderRadius = '12px';
			osuSpotify.src = src;
			osuSpotify.width = '300';
			osuSpotify.height = '152';
			osuSpotify.frameBorder = '0';
			osuSpotify.allowFullscreen = true;
			osuSpotify.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
			osuSpotify.loading = 'lazy';
			osuSpotify.style.display = 'block';
			osuSpotify.style.marginLeft = '0';
			container.appendChild(osuSpotify);
		});
		container.appendChild(document.createElement('br'));
		container.appendChild(document.createElement('br'));

		const nonOsuHeading = document.createElement('div');
		nonOsuHeading.innerHTML = 'Random non-osu! songs<br>';
		nonOsuHeading.style.textAlign = 'left';
		container.appendChild(nonOsuHeading);

		const nonOsuSongs = [
			{ src: 'https://paraliyzed.net/img/CRAZY%20(feat.%20PinkPantheress)%20English%20Ver.).mp3?i=1', type: 'audio/mpeg' },
		];

		nonOsuSongs.forEach(song => {
			const audioElement = document.createElement('audio');
			audioElement.controls = true;

			const sourceElement = document.createElement('source');
			sourceElement.src = song.src;
			sourceElement.type = song.type;

			audioElement.appendChild(sourceElement);
			audioElement.style.display = 'block';
			audioElement.style.marginLeft = '0';
			container.appendChild(audioElement);
		});

		const nonOsuSpotifyTracks = [
			'https://open.spotify.com/embed/track/0RYHqnmtNRfbYxP6Dn8Vse?utm_source=generator',
			'https://open.spotify.com/embed/track/1M6VHCglQ2PLWeAsyhgEUH?utm_source=generator',
			'https://open.spotify.com/embed/track/6SjxVgMjH3b3AI4wVviZfi?utm_source=generator',
			'https://open.spotify.com/embed/track/3PM4cZMctdMliKHEFLXgLH?utm_source=generator',
			'https://open.spotify.com/embed/track/7GX5flRQZVHRAGd6B4TmDO?utm_source=generator',
			'https://open.spotify.com/embed/track/3WattXYKPa1N4sDqTvSrLS?utm_source=generator',
			'https://open.spotify.com/embed/track/5tqZJUHEuqdN12RZVq2l9p?utm_source=generator'

		];

		nonOsuSpotifyTracks.forEach(src => {
			const nonOsuSpotify = document.createElement('iframe');
			nonOsuSpotify.style.borderRadius = '12px';
			nonOsuSpotify.src = src;
			nonOsuSpotify.width = '300';
			nonOsuSpotify.height = '152';
			nonOsuSpotify.frameBorder = '0';
			nonOsuSpotify.allowFullscreen = true;
			nonOsuSpotify.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
			nonOsuSpotify.loading = 'lazy';
			nonOsuSpotify.style.textAlign = 'left';
			nonOsuSpotify.style.display = 'block';
			nonOsuSpotify.style.marginLeft = '0';
			container.appendChild(nonOsuSpotify);
		});
	}
}