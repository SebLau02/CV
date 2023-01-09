/////////apparition carte étude///////////


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



///////////event click des boutons de contact et de github/////////////


const contactButton = document.querySelector('.contact-button');
const contactList = document.querySelector('.contact-list');
const siteButton = document.querySelector('.site-button')
const github = document.querySelector('.site-1')

function clickButton(buttonName, content){
	buttonName.addEventListener('click', () => {
		buttonName.classList.toggle('active')
		content.classList.toggle('visible')
	})
}
clickButton(siteButton, github)
clickButton(contactButton, contactList)



//////////apparition de la liste de qualité/////////


const listeQualite = document.querySelector('.liste-qualite')

window.addEventListener('scroll', () => {
	const {scrollTop, clientHeight} =
	document.documentElement;

	const topElToTopViewp = listeQualite.getBoundingClientRect().top;

	if (scrollTop > (scrollTop + topElToTopViewp).toFixed() - clientHeight*0.8){
		listeQualite.classList.add('active')

	}
})



//////////fonction des boutons de navigation/////////


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




//////////apparition des cartes de languages////////////



const css = document.querySelector('.css')
const js = document.querySelector('.js')
const git = document.querySelector('.git')
const listeLanguage = document.querySelector('.liste-language')

window.addEventListener('scroll', () => {
	const {scrollTop, clientHeight} =
	document.documentElement;

	const topElToTopViewp = css.getBoundingClientRect().top;

	if (scrollTop > (scrollTop + topElToTopViewp).toFixed() - clientHeight*0.8){
		setTimeout( () =>{
			css.classList.add('active')
			js.classList.add('active')
			git.classList.add('active')
		}, "1000")

	}
})



////////apparititon des cartes d'expériences////////////



const experience1 = document.querySelector('.experience-1')
const experience2 = document.querySelector('.experience-2')
const experience3 = document.querySelector('.experience-3')

window.addEventListener('scroll', () => {
	const {scrollTop, clientHeight} =
	document.documentElement;

	const topElToTopViewp = experience2.getBoundingClientRect().top;

	if (scrollTop > (scrollTop + topElToTopViewp).toFixed() - clientHeight*0.8){
		setTimeout( () =>{
			experience2.classList.add('active')
			experience3.classList.add('active')
		}, "1000")

	}
})
const starContainer = document.querySelector('.container-star')

function addEtoile(){
	const newEl = document.createElement('div')
	newEl.className = "etoile"
	starContainer.appendChild(newEl)

	let top = Math.floor(Math.random()*500)
	newEl.style.top = `${top + '%'}`

	let left = Math.floor(Math.random()*100)
	newEl.style.left = `${left + '%'}`

	let delay = Math.random()*3
	newEl.style.animationDelay = `${delay + 's'}`
}
//addEtoile()
//addEtoile()

const nombreEtoile = Math.floor(Math.random()*400)
console.log('nombre etoile =' + nombreEtoile)

for (i=0; i< nombreEtoile; i++){
	addEtoile()
}