const etude1 = document.querySelector('.etude-1')
const etude2 = document.querySelector('.etude-2')

window.addEventListener('scroll', () => {
	const {scrollTop, clientHeight} =
	document.documentElement;

	const topElToTopViewp = etude1.getBoundingClientRect().top;

	if (scrollTop > (scrollTop + topElToTopViewp).toFixed() - clientHeight*0.5){
		etude1.classList.add('slide-in')
		etude2.classList.add('slide-in')

		if (scrollTop > (scrollTop + topElToTopViewp).toFixed() - clientHeight *0.1){		
			etude1.classList.remove('slide-in')
			etude2.classList.remove('slide-in')
		}
	}
	else if (scrollTop < (scrollTop + topElToTopViewp).toFixed() - clientHeight*0.7){		
		etude1.classList.remove('slide-in')
		etude2.classList.remove('slide-in')
	}
	
})



const contactButton = document.querySelector('.contact-button');
const contactList = document.querySelector('.contact-list');

contactButton.addEventListener('click', () => {
	contactList.classList.toggle('visible')
	contactButton.classList.toggle('active')
});

const siteButton = document.querySelector('.site-button')
const github = document.querySelector('.site-1')

siteButton.addEventListener('click', () => {
	siteButton.classList.toggle('active')
	github.classList.toggle('visible')
})



const listeQualite = document.querySelector('.liste-qualite')

window.addEventListener('scroll', () => {
	const {scrollTop, clientHeight} =
	document.documentElement;

	const topElToTopViewp = listeQualite.getBoundingClientRect().top;

	if (scrollTop > (scrollTop + topElToTopViewp).toFixed() - clientHeight*0.8){
		listeQualite.classList.add('apear')

	}
})


const navigationTop = document.querySelector('#navigation-top')
const navigationBottom = document.querySelector('#navigation-bottom')

navigationBottom.addEventListener('click', () => {
	const { scrollTop, clientHeight, scrollHeight} = document.documentElement;
	window.scrollTo({
		top:`${scrollTop + clientHeight}`,
		behavior: "smooth"
	})

})

navigationTop.addEventListener('click', () => {
	const { scrollTop, clientHeight, scrollHeight} = document.documentElement;
	window.scrollTo({
		top:`${scrollTop - clientHeight}`,
		behavior: "smooth"
	})

})

