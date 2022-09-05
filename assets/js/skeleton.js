setTimeout(() => {
	fetchData();
}, 2000);

function fetchData() {
	const allloading = document.querySelectorAll('.loading');
	const cardTitle = document.querySelector('.card-title');
	const SomePadding = document.querySelector('.SomePadding h1');
	const SomePaddingP = document.querySelector('.SomePadding p');
	const filterEl = document.querySelectorAll('.filter');
	const filterJanuary = document.querySelectorAll('.filter-january');
	const AuctionsP = document.querySelector('.AuctionsP');
	const DateSectionAuctionP = document.querySelector('.DateSection .AuctionsP');
	const BarGraphAuctionP = document.querySelector('.BarGraph .AuctionsP');
	const paisanoTitleH2 = document.querySelector('.paisano-title h2');
	const paisanoTitleh3 = document.querySelector('.paisano-title h3');

	allloading.forEach((e) => e.classList.remove('loading'));

	cardTitle.innerHTML = 'Peformance report';
	SomePadding.innerHTML = 'Cualquier texto ';
	SomePaddingP.innerHTML = 'Learn more details on our latest blog post';
	AuctionsP.innerHTML = 'Upcoming auctions';
	DateSectionAuctionP.innerHTML = 'Upcoming auctions';
	BarGraphAuctionP.innerHTML = 'Just added';
	paisanoTitleH2.innerHTML = 'E & S Auto Paisano';
	paisanoTitleh3.innerHTML = 'Thursday, 14 June 2022	';

	filterEl.forEach((e) => {
		e.insertAdjacentHTML(
			'afterbegin',
			`
	<img src="assets/img/3.png" alt="" /> <span>Last 7 days</span>
	`
		);
	});

	filterJanuary.insertAdjacentHTML(
		'afterbegin',
		`
	<img src="assets/img/3.png" alt="" /> <span>Last 7 days</span>
	`
	);
}

// fetchData();
