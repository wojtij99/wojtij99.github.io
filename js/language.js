var language; 
function getLanguage() 
{
	(localStorage.getItem('language') == null) ? setLanguage('en') : false;
	$.ajax({ 
		url:  'js/json/langs/' +  localStorage.getItem('language') + '.json', 
		dataType: 'json', async: false, dataType: 'json', 
		success: function (lang) { language = lang } 
	});
}

function setLanguage(lang) 
{ 
	localStorage.setItem('language', lang);
	location.reload();
}

getLanguage();

$(document).ready(function(){
	loadWorks();
	loadProjects();
	$('.about').text(language.AboutMe);
	$('.projects').text(language.Projects);
	$('.contact').text(language.Contact);
	$('.ComExp').text(language.ComExp);
	$('.Skills').text(language.Skills);
	$('.Interests').text(language.Interests);
	$('.Languages').text(language.Languages);
	$('.Education').text(language.Education);
	$('.mainLangs').text(language.mainLangs);
	$('.secLangs').text(language.secLangs);
	$('.other').text(language.Other);
	$('.aboutMe').text(language.aboutMeTxt);
	$('.INTruss').text(language.INTruss);
	$('.INTlat').text(language.INTlat);
	$('.INTworbui').text(language.INTworbui);
	$('.INTpaperRPG').text(language.INTpaperRPG);
	$('.INTgameDev').text(language.INTgameDev);
	$('.INTkaczmar').text(language.INTkaczmar);
	$('.INTcoj').text(language.INTcoj);
	$('.ZSEdesc').text(language.ZSEdesc);
	$('.ZSElocal').text(language.ZSElocal);
	$('.ZSEtime').text(language.ZSEtime);
	$('.seeIt').text(language.seeIt);
	$('.Apprenticeship').text(language.Apprenticeship);
});