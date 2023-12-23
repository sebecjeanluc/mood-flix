const feelings = {
	Happy: ['Joy', 'Satisfaction', 'Euphoria', 'Pride', 'Optimism', 'Relief'],
	Sad: [
		'Sorrow',
		'Grief',
		'Melancholy',
		'Disappointment',
		'Regret',
		'Loneliness',
	],
}

const categories = {
	EmotionMovieAssociations: {
		Happy: ['Comedy', 'Feel-Good', 'Inspirational'],
		Sad: ['Drama', 'Tragic Romance', 'Comedy'],
		Dark: ['Thriller', 'Horror', 'Documentary'],
		Angry: ['Action', 'Sports', 'Social Drama'],
		Loving: ['Romantic Comedy', 'Epic Romance', 'Heartfelt Drama'],
		Surprised: ['Mystery', 'Plot-Twist', 'Sci-Fi'],
		Disgusted: ['Documentary', 'Satire', 'Challenging'],
	},

	MovieCategories: [
		'Comedy',
		'Feel-Good',
		'Inspirational',
		'Drama',
		'Tragic Romance',
		'Thriller',
		'Horror',
		'Action',
		'Sports',
		'Social Drama',
		'Romantic Comedy',
		'Epic Romance',
		'Heartfelt Drama',
		'Mystery',
		'Plot-Twist',
		'Sci-Fi',
		'Documentary',
		'Satire',
		'Challenging',
	],
}

let bookSeedData = [
	{
		kind: 'books#volume',
		id: 'RnE9DwAAQBAJ',
		etag: 'lKKbeTgP+Ao',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/RnE9DwAAQBAJ',
		volumeInfo: {
			title: 'The Age of Unreason',
			subtitle: 'The Complete Series',
			authors: ['Greg Keyes'],
			publisher: 'Open Road Media',
			publishedDate: '2017-11-28',
			description:
				'Ben Franklin must save the world when Isaac Newton unleashes dark magic in this “ambitious” alternate history series by a New York Times–bestselling author (Library Journal). Greg Keyes reimagines the eighteenth-century as an era of apocalyptic sorcery in which a young printer’s apprentice named Benjamin Franklin joins forces with a host of historical personages to prevent humankind’s annihilation by demons and black magic inadvertently released by the great British alchemist, Sir Isaac Newton. Newton’s Cannon: Isaac Newton’s discovery of philosopher’s mercury threatens to destroy all human life on Earth, unless he and his new American protégé, young Benjamin Franklin, can keep the substance out of the malevolent hands of France’s King Louis XIV. “An intricately crafted, elegantly delivered story filled with idealism and betrayal, adventure, and philosophy . . . fascinating” (Library Journal). A Calculus of Angels: A demonic conspiracy has destroyed England while unleashing chaos and terror upon the world. A possessed Peter the Great marches his conquering armies across a devastated Europe. And Newton and Franklin prepare for Armageddon. Empire of Unreason: As eternal winter descends upon Earth, Franklin returns to the American colonies to hone his alchemical skills and ready his secret cabal of scientists, Native Americans, and former slaves for the upcoming battle for humankind’s survival. “The most original fantasy I have read in years” (Kevin K. Anderson, New York Times–bestselling author). The Shadows of God: Angels and demons watch and wait as the last warriors of dead Europe invade the New World intent on defeating Ben Franklin’s American alliance and conquering the colonies. “Inventive and exciting, filled with clever details and high adventure” (Science Fiction Chronicle).',
			industryIdentifiers: [
				{
					type: 'ISBN_13',
					identifier: '9781504049634',
				},
				{
					type: 'ISBN_10',
					identifier: '1504049632',
				},
			],
			readingModes: {
				text: true,
				image: true,
			},
			pageCount: 1323,
			printType: 'BOOK',
			categories: ['Fiction'],
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: true,
			contentVersion: '1.7.6.0.preview.3',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			imageLinks: {
				smallThumbnail:
					'http://books.google.com/books/content?id=RnE9DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
				thumbnail:
					'http://books.google.com/books/content?id=RnE9DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
			},
			language: 'en',
			previewLink:
				'http://books.google.co.uk/books?id=RnE9DwAAQBAJ&printsec=frontcover&dq=science+fiction:keyes&hl=&cd=1&source=gbs_api',
			infoLink:
				'https://play.google.com/store/books/details?id=RnE9DwAAQBAJ&source=gbs_api',
			canonicalVolumeLink:
				'https://play.google.com/store/books/details?id=RnE9DwAAQBAJ',
		},
		saleInfo: {
			country: 'GB',
			saleability: 'FOR_SALE',
			isEbook: true,
			listPrice: {
				amount: 3.99,
				currencyCode: 'GBP',
			},
			retailPrice: {
				amount: 3.99,
				currencyCode: 'GBP',
			},
			buyLink:
				'https://play.google.com/store/books/details?id=RnE9DwAAQBAJ&rdid=book-RnE9DwAAQBAJ&rdot=1&source=gbs_api',
			offers: [
				{
					finskyOfferType: 1,
					listPrice: {
						amountInMicros: 3990000,
						currencyCode: 'GBP',
					},
					retailPrice: {
						amountInMicros: 3990000,
						currencyCode: 'GBP',
					},
					giftable: true,
				},
			],
		},
		accessInfo: {
			country: 'GB',
			viewability: 'PARTIAL',
			embeddable: true,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED',
			epub: {
				isAvailable: true,
				acsTokenLink:
					'http://books.google.co.uk/books/download/The_Age_of_Unreason-sample-epub.acsm?id=RnE9DwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			pdf: {
				isAvailable: true,
				acsTokenLink:
					'http://books.google.co.uk/books/download/The_Age_of_Unreason-sample-pdf.acsm?id=RnE9DwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			webReaderLink:
				'http://play.google.com/books/reader?id=RnE9DwAAQBAJ&hl=&source=gbs_api',
			accessViewStatus: 'SAMPLE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet:
				'Greg Keyes reimagines the eighteenth-century as an era of apocalyptic sorcery in which a young printer’s apprentice named Benjamin Franklin joins forces with a host of historical personages to prevent humankind’s annihilation by demons ...',
		},
	},
	{
		kind: 'books#volume',
		id: 'PyCGSD_5SC0C',
		etag: 'zQz5mVksUo8',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/PyCGSD_5SC0C',
		volumeInfo: {
			title: 'The Literature of Hope in the Middle Ages and Today',
			subtitle:
				'Connections in Medieval Romance, Modern Fantasy, and Science Fiction',
			authors: ['Flo Keyes'],
			publisher: 'McFarland',
			publishedDate: '2006-03-17',
			description:
				"The influence of medieval literature is instantly apparent in modern fantasy literature, where knights and wizards populate castle-strewn landscapes. Less obvious but still recognizable is the influence in science fiction, which draws on medieval story structure and themes. Beyond these superficial similarities, deeper connections become evident through an analysis of the literature's social function. Like the fantasy and science fiction of today, the romances of the Middle Ages were written in times of extreme and prolonged social upheaval. In all three genres, the storytellers draw on the same archetypes--the hero, the quest, the transformation--for stories whose goal is to provide hope. Using Jungian theory and comparative analysis, this book explores the connections between the three genres. It finds common ground among them in plots that often reflect the recurring cycle of life and the elements of psychological rather than literal realism. Representative texts such as Malory's Le Morte D'Arthur, the Witch World series by Andre Norton and More Than Human by Theodore Sturgeon are examined in depth, and the use of archetypes in each is thoroughly explored. Analysis reveals similarities in images, structures, and the pervasive belief that a perfectible universe is within man's capabilities--if not now, then someday.",
			industryIdentifiers: [
				{
					type: 'ISBN_13',
					identifier: '9780786425969',
				},
				{
					type: 'ISBN_10',
					identifier: '0786425962',
				},
			],
			readingModes: {
				text: true,
				image: true,
			},
			pageCount: 207,
			printType: 'BOOK',
			categories: ['History'],
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: false,
			contentVersion: '0.1.0.0.preview.3',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			imageLinks: {
				smallThumbnail:
					'http://books.google.com/books/content?id=PyCGSD_5SC0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
				thumbnail:
					'http://books.google.com/books/content?id=PyCGSD_5SC0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
			},
			language: 'en',
			previewLink:
				'http://books.google.co.uk/books?id=PyCGSD_5SC0C&printsec=frontcover&dq=science+fiction:keyes&hl=&cd=2&source=gbs_api',
			infoLink:
				'http://books.google.co.uk/books?id=PyCGSD_5SC0C&dq=science+fiction:keyes&hl=&source=gbs_api',
			canonicalVolumeLink:
				'https://books.google.com/books/about/The_Literature_of_Hope_in_the_Middle_Age.html?hl=&id=PyCGSD_5SC0C',
		},
		saleInfo: {
			country: 'GB',
			saleability: 'NOT_FOR_SALE',
			isEbook: false,
		},
		accessInfo: {
			country: 'GB',
			viewability: 'PARTIAL',
			embeddable: true,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED',
			epub: {
				isAvailable: true,
				acsTokenLink:
					'http://books.google.co.uk/books/download/The_Literature_of_Hope_in_the_Middle_Age-sample-epub.acsm?id=PyCGSD_5SC0C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			pdf: {
				isAvailable: true,
				acsTokenLink:
					'http://books.google.co.uk/books/download/The_Literature_of_Hope_in_the_Middle_Age-sample-pdf.acsm?id=PyCGSD_5SC0C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			webReaderLink:
				'http://play.google.com/books/reader?id=PyCGSD_5SC0C&hl=&source=gbs_api',
			accessViewStatus: 'SAMPLE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet:
				'Using Jungian theory and comparative analysis, this book explores the connections between the three genres.',
		},
	},
	{
		kind: 'books#volume',
		id: 'SOuxBAAAQBAJ',
		etag: '/X6YiIrO2vw',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/SOuxBAAAQBAJ',
		volumeInfo: {
			title: 'Footsteps in the Sky',
			authors: ['Greg Keyes'],
			publisher: 'Hachette UK',
			publishedDate: '2020-12-31',
			description:
				"The pueblo people who landed on the Fifth World found it Earthlike, empty, and ready for colonization . . . but a century later, they are about to meet the planet's owners One hundred years ago, Sand's ancestors made the long, one-way trip to the Fifth World, ready to work ceaselessly to terraform the planet. Descendants of native peoples like the Hopi and Zuni, they wanted to return to the way of life of their forebears, who honored the Kachina spirits. Now, though, many of the planet's inhabitants have begun to resent their grandparents' decision to strand them in this harsh and forbidding place, and some have turned away from the customs of the Well-Behaved People. Sand has her doubts, but she longs to believe that the Kachina live on beyond the stars and have been readying a new domain for her people. She may be right. Humans have discovered nine habitable worlds, all with life that shares a genetic code entirely alien to any on Earth. Someone has been seeding planets, bringing life to them. But no other sign of the ancient farmers has ever been discovered-until one day they return to the Fifth World. They do not like what they find.",
			industryIdentifiers: [
				{
					type: 'ISBN_13',
					identifier: '9781473207165',
				},
				{
					type: 'ISBN_10',
					identifier: '1473207169',
				},
			],
			readingModes: {
				text: true,
				image: false,
			},
			pageCount: 150,
			printType: 'BOOK',
			categories: ['Fiction'],
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: false,
			contentVersion: '1.7.8.0.preview.2',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			imageLinks: {
				smallThumbnail:
					'http://books.google.com/books/content?id=SOuxBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
				thumbnail:
					'http://books.google.com/books/content?id=SOuxBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
			},
			language: 'en',
			previewLink:
				'http://books.google.co.uk/books?id=SOuxBAAAQBAJ&printsec=frontcover&dq=science+fiction:keyes&hl=&cd=3&source=gbs_api',
			infoLink:
				'http://books.google.co.uk/books?id=SOuxBAAAQBAJ&dq=science+fiction:keyes&hl=&source=gbs_api',
			canonicalVolumeLink:
				'https://books.google.com/books/about/Footsteps_in_the_Sky.html?hl=&id=SOuxBAAAQBAJ',
		},
		saleInfo: {
			country: 'GB',
			saleability: 'NOT_FOR_SALE',
			isEbook: false,
		},
		accessInfo: {
			country: 'GB',
			viewability: 'PARTIAL',
			embeddable: true,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED',
			epub: {
				isAvailable: true,
				acsTokenLink:
					'http://books.google.co.uk/books/download/Footsteps_in_the_Sky-sample-epub.acsm?id=SOuxBAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			pdf: {
				isAvailable: false,
			},
			webReaderLink:
				'http://play.google.com/books/reader?id=SOuxBAAAQBAJ&hl=&source=gbs_api',
			accessViewStatus: 'SAMPLE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet:
				'The pueblo people who landed on the Fifth World found it Earthlike, empty, and ready for colonization . . . but a century later, they are about to meet the planet&#39;s owners One hundred years ago, Sand&#39;s ancestors made the long, one-way trip ...',
		},
	},
	{
		kind: 'books#volume',
		id: 'syE4DwAAQBAJ',
		etag: 'Ged/dX9DnaQ',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/syE4DwAAQBAJ',
		volumeInfo: {
			title: 'The Touch',
			authors: ['Daniel Keyes'],
			publisher: 'Hachette UK',
			publishedDate: '2017-11-30',
			description:
				"The ultimate 'what if' novel, from the million-copy-bestselling author of FLOWERS FOR ALGERNON: 'A masterpiece of poignant brilliance ... heartbreaking' Guardian Karen and Barney Stark should never have married. Childless, uncomfortable and incompatible, their marriage has not been a success, and the lack of a child only makes the tension between them worse. And living their lives to the beat of a fertility clock only adds to the increasingly volatile atmosphere. When an incident at Barney's workplace causes them both to be unknowingly contaminated with radioactive dust, they also become pariahs - in their neighbourhood and with their families. But things are only going to get worse. Karen discovers she is pregnant and as their closest friends become frightened enemies, the dream of becoming parents turns into a nightmare...",
			industryIdentifiers: [
				{
					type: 'ISBN_13',
					identifier: '9781473215412',
				},
				{
					type: 'ISBN_10',
					identifier: '1473215412',
				},
			],
			readingModes: {
				text: true,
				image: false,
			},
			pageCount: 384,
			printType: 'BOOK',
			categories: ['Fiction'],
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: true,
			contentVersion: '1.2.3.0.preview.2',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			imageLinks: {
				smallThumbnail:
					'http://books.google.com/books/content?id=syE4DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
				thumbnail:
					'http://books.google.com/books/content?id=syE4DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
			},
			language: 'en',
			previewLink:
				'http://books.google.co.uk/books?id=syE4DwAAQBAJ&printsec=frontcover&dq=science+fiction:keyes&hl=&cd=4&source=gbs_api',
			infoLink:
				'https://play.google.com/store/books/details?id=syE4DwAAQBAJ&source=gbs_api',
			canonicalVolumeLink:
				'https://play.google.com/store/books/details?id=syE4DwAAQBAJ',
		},
		saleInfo: {
			country: 'GB',
			saleability: 'FOR_SALE',
			isEbook: true,
			listPrice: {
				amount: 2.99,
				currencyCode: 'GBP',
			},
			retailPrice: {
				amount: 2.99,
				currencyCode: 'GBP',
			},
			buyLink:
				'https://play.google.com/store/books/details?id=syE4DwAAQBAJ&rdid=book-syE4DwAAQBAJ&rdot=1&source=gbs_api',
			offers: [
				{
					finskyOfferType: 1,
					listPrice: {
						amountInMicros: 2990000,
						currencyCode: 'GBP',
					},
					retailPrice: {
						amountInMicros: 2990000,
						currencyCode: 'GBP',
					},
					giftable: true,
				},
			],
		},
		accessInfo: {
			country: 'GB',
			viewability: 'PARTIAL',
			embeddable: true,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED',
			epub: {
				isAvailable: true,
				acsTokenLink:
					'http://books.google.co.uk/books/download/The_Touch-sample-epub.acsm?id=syE4DwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			pdf: {
				isAvailable: false,
			},
			webReaderLink:
				'http://play.google.com/books/reader?id=syE4DwAAQBAJ&hl=&source=gbs_api',
			accessViewStatus: 'SAMPLE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet:
				'The ultimate &#39;what if&#39; novel, from the million-copy-bestselling author of FLOWERS FOR ALGERNON: &#39;A masterpiece of poignant brilliance ... heartbreaking&#39; Guardian Karen and Barney Stark should never have married.',
		},
	},
	{
		kind: 'books#volume',
		id: 'pIs9Em38dAoC',
		etag: 'fKSe9jZKFnI',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/pIs9Em38dAoC',
		volumeInfo: {
			title: "The Play of Daniel Keyes' Flowers for Algernon",
			publisher: 'Heinemann',
			publishedDate: '1993',
			industryIdentifiers: [
				{
					type: 'ISBN_10',
					identifier: '0435232932',
				},
				{
					type: 'ISBN_13',
					identifier: '9780435232931',
				},
			],
			readingModes: {
				text: false,
				image: true,
			},
			pageCount: 136,
			printType: 'BOOK',
			categories: ['English drama'],
			averageRating: 5,
			ratingsCount: 1,
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: false,
			contentVersion: '0.3.3.0.preview.1',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			imageLinks: {
				smallThumbnail:
					'http://books.google.com/books/content?id=pIs9Em38dAoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
				thumbnail:
					'http://books.google.com/books/content?id=pIs9Em38dAoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
			},
			language: 'en',
			previewLink:
				'http://books.google.co.uk/books?id=pIs9Em38dAoC&printsec=frontcover&dq=science+fiction:keyes&hl=&cd=5&source=gbs_api',
			infoLink:
				'http://books.google.co.uk/books?id=pIs9Em38dAoC&dq=science+fiction:keyes&hl=&source=gbs_api',
			canonicalVolumeLink:
				'https://books.google.com/books/about/The_Play_of_Daniel_Keyes_Flowers_for_Alg.html?hl=&id=pIs9Em38dAoC',
		},
		saleInfo: {
			country: 'GB',
			saleability: 'NOT_FOR_SALE',
			isEbook: false,
		},
		accessInfo: {
			country: 'GB',
			viewability: 'PARTIAL',
			embeddable: true,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED',
			epub: {
				isAvailable: false,
			},
			pdf: {
				isAvailable: true,
				acsTokenLink:
					'http://books.google.co.uk/books/download/The_Play_of_Daniel_Keyes_Flowers_for_Alg-sample-pdf.acsm?id=pIs9Em38dAoC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			webReaderLink:
				'http://play.google.com/books/reader?id=pIs9Em38dAoC&hl=&source=gbs_api',
			accessViewStatus: 'SAMPLE',
			quoteSharingAllowed: false,
		},
	},
	{
		kind: 'books#volume',
		id: 'RCoHzwEACAAJ',
		etag: 'YCg6e7hQaQ8',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/RCoHzwEACAAJ',
		volumeInfo: {
			title: 'Flowers for Algernon',
			subtitle: 'The Must-Read Literary Science Fiction Masterpiece',
			authors: ['Daniel Keyes'],
			publisher: 'Gateway',
			publishedDate: '2022-10-25',
			description:
				"The classic novel about a daring experiment in human intelligence Charlie Gordon, IQ 68, is a floor sweeper and the gentle butt of everyone's jokes - until an experiment in the enhancement of human intelligence turns him into a genius. But then Algernon, the mouse whose triumphal experimental transformation preceded his, fades and dies, and Charlie has to face the possibility that his salvation was only temporary.",
			industryIdentifiers: [
				{
					type: 'ISBN_10',
					identifier: '1399607766',
				},
				{
					type: 'ISBN_13',
					identifier: '9781399607766',
				},
			],
			readingModes: {
				text: false,
				image: false,
			},
			pageCount: 0,
			printType: 'BOOK',
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: false,
			contentVersion: 'preview-1.0.0',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			imageLinks: {
				smallThumbnail:
					'http://books.google.com/books/content?id=RCoHzwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
				thumbnail:
					'http://books.google.com/books/content?id=RCoHzwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
			},
			language: 'en',
			previewLink:
				'http://books.google.co.uk/books?id=RCoHzwEACAAJ&dq=science+fiction:keyes&hl=&cd=6&source=gbs_api',
			infoLink:
				'http://books.google.co.uk/books?id=RCoHzwEACAAJ&dq=science+fiction:keyes&hl=&source=gbs_api',
			canonicalVolumeLink:
				'https://books.google.com/books/about/Flowers_for_Algernon.html?hl=&id=RCoHzwEACAAJ',
		},
		saleInfo: {
			country: 'GB',
			saleability: 'NOT_FOR_SALE',
			isEbook: false,
		},
		accessInfo: {
			country: 'GB',
			viewability: 'NO_PAGES',
			embeddable: false,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED',
			epub: {
				isAvailable: false,
			},
			pdf: {
				isAvailable: false,
			},
			webReaderLink:
				'http://play.google.com/books/reader?id=RCoHzwEACAAJ&hl=&source=gbs_api',
			accessViewStatus: 'NONE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet:
				'Winner of the 1960 Hugo Award for Best Short Story, and subsequently expanded into a Hugo-nominated novel, Flowers for Algernon earned Daniel Keyes the honour of SFWA Author Emeritus in 2000 for his contribution to Science Fiction and ...',
		},
	},
	{
		kind: 'books#volume',
		id: 'ruixBAAAQBAJ',
		etag: '6llmdnJVVEM',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/ruixBAAAQBAJ',
		volumeInfo: {
			title: 'The Waterborn',
			subtitle: 'Children of the Changeling Book 1',
			authors: ['Greg Keyes'],
			publisher: 'Hachette UK',
			publishedDate: '2014-10-30',
			description:
				"The River flowed through all the land, deep and unstoppable, a god in his own right. His head was in the mountains; his arms embraced the outlands; his body lay at the core of all the civilized realms; and his legs stretched on to the distant sea. Dark and sluggish, he rolled unchallenged, dreaming his own invincible might and glory into stark reality. Everywhere he touched, the River God held dominion. And in Nhol, the fabled city at the heart of the world, an emperor ruled as the living aspect of the god, presiding over the splendors and intrigues of a prosperous land and a glittering court. Hezhi was an imperial princess; her blood carried the seeds of the River's power. When her favorite cousin disappeared, Hezhi searched throughout the sumptuous palace with its ghosts and priests, giants and courtiers, and frightening creatures of wizardry. And the magic within her began to grow; soon it must attract dangerous attention. Hezhi's anxious quest ripened into a desperate fight for her own life--a battle she could not hope to win alone. Small wonder that the princess wished for a hero. And far away, a hero's journey began...",
			industryIdentifiers: [
				{
					type: 'ISBN_13',
					identifier: '9781473207141',
				},
				{
					type: 'ISBN_10',
					identifier: '1473207142',
				},
			],
			readingModes: {
				text: true,
				image: false,
			},
			pageCount: 228,
			printType: 'BOOK',
			categories: ['Fiction'],
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: false,
			contentVersion: '1.3.4.0.preview.2',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			imageLinks: {
				smallThumbnail:
					'http://books.google.com/books/content?id=ruixBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
				thumbnail:
					'http://books.google.com/books/content?id=ruixBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
			},
			language: 'en',
			previewLink:
				'http://books.google.co.uk/books?id=ruixBAAAQBAJ&printsec=frontcover&dq=science+fiction:keyes&hl=&cd=7&source=gbs_api',
			infoLink:
				'http://books.google.co.uk/books?id=ruixBAAAQBAJ&dq=science+fiction:keyes&hl=&source=gbs_api',
			canonicalVolumeLink:
				'https://books.google.com/books/about/The_Waterborn.html?hl=&id=ruixBAAAQBAJ',
		},
		saleInfo: {
			country: 'GB',
			saleability: 'NOT_FOR_SALE',
			isEbook: false,
		},
		accessInfo: {
			country: 'GB',
			viewability: 'PARTIAL',
			embeddable: true,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED',
			epub: {
				isAvailable: true,
				acsTokenLink:
					'http://books.google.co.uk/books/download/The_Waterborn-sample-epub.acsm?id=ruixBAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			pdf: {
				isAvailable: false,
			},
			webReaderLink:
				'http://play.google.com/books/reader?id=ruixBAAAQBAJ&hl=&source=gbs_api',
			accessViewStatus: 'SAMPLE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet:
				'The River flowed through all the land, deep and unstoppable, a god in his own right.',
		},
	},
	{
		kind: 'books#volume',
		id: 'heiBDwAAQBAJ',
		etag: '6mKYy5X3qiY',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/heiBDwAAQBAJ',
		volumeInfo: {
			title:
				'American Science Fiction: Four Classic Novels 1960-1966 (LOA #321)',
			authors: [
				'Poul Anderson',
				'Clifford D. Simak',
				'Daniel Keyes',
				'Roger Zelasny',
			],
			publisher: 'Library of America',
			publishedDate: '2019-11-05',
			description:
				"In a deluxe collector's edition hardcover, four classic novels from science fiction's most transformative decade, including the landmark Flowers for Algernon This volume, the first of a two-volume set gathering the best American science fiction from the tumultuous 1960s, opens with Poul Anderson's immensely popular The High Crusade, in which aliens planning to conquer Earth land in Lincolnshire during the Hundred Years' War. In Clifford Simak's Hugo Award-winning Way Station, Enoch Wallace is a spry 124-year-old Civil War veteran whose lifelong job monitoring the intergalactic pit stop inside his home is largely uneventful--until a CIA agent shows up and Cold War hostilities threaten the peaceful harmony of the Galactic confederation. Daniel Keyes's beloved Flowers for Algernon, winner of the Nebula Award and adapted as the Academy Award-winning movie Charly, is told through the journal entries of Charlie Gordon, a young man with severe learning disabilities who is the test subject for surgery to improve his intelligence. And in the postapocalyptic earthscape of Roger Zelazny's Hugo Award-winning . . . And Call Me Conrad (also published as This Immortal) Conrad Nomikos reluctantly accepts the responsibility of showing the planet to the governing extraterrestrials' representative and protecting him from rebellious remnants of the human race. Using early manuscripts and original setting copy, this Library of America volume restores the novel to a version that most closely approximates Zelazny's original text.",
			industryIdentifiers: [
				{
					type: 'ISBN_13',
					identifier: '9781598536362',
				},
				{
					type: 'ISBN_10',
					identifier: '1598536362',
				},
			],
			readingModes: {
				text: true,
				image: true,
			},
			pageCount: 738,
			printType: 'BOOK',
			categories: ['Fiction'],
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: true,
			contentVersion: '1.2.2.0.preview.3',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			imageLinks: {
				smallThumbnail:
					'http://books.google.com/books/content?id=heiBDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
				thumbnail:
					'http://books.google.com/books/content?id=heiBDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
			},
			language: 'en',
			previewLink:
				'http://books.google.co.uk/books?id=heiBDwAAQBAJ&printsec=frontcover&dq=science+fiction:keyes&hl=&cd=8&source=gbs_api',
			infoLink:
				'http://books.google.co.uk/books?id=heiBDwAAQBAJ&dq=science+fiction:keyes&hl=&source=gbs_api',
			canonicalVolumeLink:
				'https://books.google.com/books/about/American_Science_Fiction_Four_Classic_No.html?hl=&id=heiBDwAAQBAJ',
		},
		saleInfo: {
			country: 'GB',
			saleability: 'NOT_FOR_SALE',
			isEbook: false,
		},
		accessInfo: {
			country: 'GB',
			viewability: 'PARTIAL',
			embeddable: true,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED',
			epub: {
				isAvailable: true,
				acsTokenLink:
					'http://books.google.co.uk/books/download/American_Science_Fiction_Four_Classic_No-sample-epub.acsm?id=heiBDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			pdf: {
				isAvailable: true,
				acsTokenLink:
					'http://books.google.co.uk/books/download/American_Science_Fiction_Four_Classic_No-sample-pdf.acsm?id=heiBDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			webReaderLink:
				'http://play.google.com/books/reader?id=heiBDwAAQBAJ&hl=&source=gbs_api',
			accessViewStatus: 'SAMPLE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet:
				'In a deluxe collector’s edition, four classic science fiction novels from the genre’s most transformative decade—including the landmark Flowers for Algernon This volume, the first of a two-volume set gathering the best American ...',
		},
	},
	{
		kind: 'books#volume',
		id: 'P_omBQAAQBAJ',
		etag: 'ZokHk9EbR0A',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/P_omBQAAQBAJ',
		volumeInfo: {
			title: 'The Blackgod',
			subtitle: 'Children of the Changeling Book 2',
			authors: ['Greg Keyes'],
			publisher: 'Hachette UK',
			publishedDate: '2014-11-27',
			description:
				"The River flowed from the mountains to the distant sea, and everywhere he touched, he ruled. And his blood ran thick in the veins of Nhol's Royal Family. But the god's power had a price: some members of the Family were never seen after puberty, and dark rumours abounded concerning their fate. When the magic woke in her, Princess Hezhi fled for her life into the lands beyond the River's reach. With Perkar, a youth in search of honour, and loyal Tsem, her half-Giant bodyguard, she sought refuge among the barbarian Mang. But in those demon-infested hinterlands, until she learned to wield the powers of her birthright, her sanity and her soul would be at risk. And grisly danger pursued her - the River bent all his might and slumbrous cunning to the task of finding his wayward child. Only the Blackgod knew how to defeat the River. But the Blackgod was a creature of guile and limitless duplicity; to trust him might be the most perilous move she could make ...",
			industryIdentifiers: [
				{
					type: 'ISBN_13',
					identifier: '9781473207158',
				},
				{
					type: 'ISBN_10',
					identifier: '1473207150',
				},
			],
			readingModes: {
				text: true,
				image: false,
			},
			pageCount: 294,
			printType: 'BOOK',
			categories: ['Fiction'],
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: false,
			contentVersion: '1.4.5.0.preview.2',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			imageLinks: {
				smallThumbnail:
					'http://books.google.com/books/content?id=P_omBQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
				thumbnail:
					'http://books.google.com/books/content?id=P_omBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
			},
			language: 'en',
			previewLink:
				'http://books.google.co.uk/books?id=P_omBQAAQBAJ&printsec=frontcover&dq=science+fiction:keyes&hl=&cd=9&source=gbs_api',
			infoLink:
				'http://books.google.co.uk/books?id=P_omBQAAQBAJ&dq=science+fiction:keyes&hl=&source=gbs_api',
			canonicalVolumeLink:
				'https://books.google.com/books/about/The_Blackgod.html?hl=&id=P_omBQAAQBAJ',
		},
		saleInfo: {
			country: 'GB',
			saleability: 'NOT_FOR_SALE',
			isEbook: false,
		},
		accessInfo: {
			country: 'GB',
			viewability: 'PARTIAL',
			embeddable: true,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED',
			epub: {
				isAvailable: true,
				acsTokenLink:
					'http://books.google.co.uk/books/download/The_Blackgod-sample-epub.acsm?id=P_omBQAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			pdf: {
				isAvailable: false,
			},
			webReaderLink:
				'http://play.google.com/books/reader?id=P_omBQAAQBAJ&hl=&source=gbs_api',
			accessViewStatus: 'SAMPLE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet:
				'Only the Blackgod knew how to defeat the River. But the Blackgod was a creature of guile and limitless duplicity; to trust him might be the most perilous move she could make .',
		},
	},
	{
		kind: 'books#volume',
		id: '7EO_BgAAQBAJ',
		etag: 'fgnQxBjfa4E',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/7EO_BgAAQBAJ',
		volumeInfo: {
			title: 'Interstellar: The Official Movie Novelization',
			authors: ['Greg Keyes'],
			publisher: 'Titan Books',
			publishedDate: '2014-11-11',
			description:
				'THE END OF EARTH WILL NOT BE THE END OF US. From acclaimed filmmaker Christopher Nolan (The Dark Knight Triology, Inception), this is the chronicle of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage. At stake are the fate of a planet... Earth... and the future of the human race.',
			industryIdentifiers: [
				{
					type: 'ISBN_13',
					identifier: '9781783293704',
				},
				{
					type: 'ISBN_10',
					identifier: '1783293705',
				},
			],
			readingModes: {
				text: true,
				image: true,
			},
			pageCount: 241,
			printType: 'BOOK',
			categories: ['Fiction'],
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: true,
			contentVersion: '1.4.4.0.preview.3',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			imageLinks: {
				smallThumbnail:
					'http://books.google.com/books/content?id=7EO_BgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
				thumbnail:
					'http://books.google.com/books/content?id=7EO_BgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
			},
			language: 'en',
			previewLink:
				'http://books.google.co.uk/books?id=7EO_BgAAQBAJ&printsec=frontcover&dq=science+fiction:keyes&hl=&cd=10&source=gbs_api',
			infoLink:
				'https://play.google.com/store/books/details?id=7EO_BgAAQBAJ&source=gbs_api',
			canonicalVolumeLink:
				'https://play.google.com/store/books/details?id=7EO_BgAAQBAJ',
		},
		saleInfo: {
			country: 'GB',
			saleability: 'FOR_SALE',
			isEbook: true,
			listPrice: {
				amount: 6.99,
				currencyCode: 'GBP',
			},
			retailPrice: {
				amount: 4.68,
				currencyCode: 'GBP',
			},
			buyLink:
				'https://play.google.com/store/books/details?id=7EO_BgAAQBAJ&rdid=book-7EO_BgAAQBAJ&rdot=1&source=gbs_api',
			offers: [
				{
					finskyOfferType: 1,
					listPrice: {
						amountInMicros: 6990000,
						currencyCode: 'GBP',
					},
					retailPrice: {
						amountInMicros: 4680000,
						currencyCode: 'GBP',
					},
					giftable: true,
				},
			],
		},
		accessInfo: {
			country: 'GB',
			viewability: 'PARTIAL',
			embeddable: true,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED',
			epub: {
				isAvailable: true,
				acsTokenLink:
					'http://books.google.co.uk/books/download/Interstellar_The_Official_Movie_Noveliza-sample-epub.acsm?id=7EO_BgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			pdf: {
				isAvailable: true,
				acsTokenLink:
					'http://books.google.co.uk/books/download/Interstellar_The_Official_Movie_Noveliza-sample-pdf.acsm?id=7EO_BgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			webReaderLink:
				'http://play.google.com/books/reader?id=7EO_BgAAQBAJ&hl=&source=gbs_api',
			accessViewStatus: 'SAMPLE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet:
				'THE END OF EARTH WILL NOT BE THE END OF US. From acclaimed filmmaker Christopher Nolan (The Dark Knight Triology, Inception), this is the chronicle of a group of explorers who make use of a newly discovered wormhole to surpass the ...',
		},
	},
]
