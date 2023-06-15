function nrToDate(str)
{
    var json = {
        "1": {
          "pl": "Styczeń",
          "en": "January",
          "ru": "Январь"
        },
        "2": {
          "pl": "Luty",
          "en": "February",
          "ru": "Февраль"
        },
        "3": {
          "pl": "Marzec",
          "en": "March",
          "ru": "Март"
        },
        "4": {
          "pl": "Kwiecień",
          "en": "April",
          "ru": "Апрель"
        },
        "5": {
          "pl": "Maj",
          "en": "May",
          "ru": "Май"
        },
        "6": {
          "pl": "Czerwiec",
          "en": "June",
          "ru": "Июнь"
        },
        "7": {
          "pl": "Lipiec",
          "en": "July",
          "ru": "Июль"
        },
        "8": {
          "pl": "Sierpień",
          "en": "August",
          "ru": "Август"
        },
        "9": {
          "pl": "Wrzesień",
          "en": "September",
          "ru": "Сентябрь"
        },
        "10": {
          "pl": "Październik",
          "en": "October",
          "ru": "Октябрь"
        },
        "11": {
          "pl": "Listopad",
          "en": "November",
          "ru": "Ноябрь"
        },
        "12": {
          "pl": "Grudzień",
          "en": "December",
          "ru": "Декабрь"
        }
      }
    
    var date = str.split(".");
    var nr = date[0];
    return json[nr][localStorage.getItem('language')] + " " + date[1];
}

function loadWorks() {
    $.ajax({ 
		url:  'js/json/work.json', 
		dataType: 'json', async: false, dataType: 'json', 
		success: function (wr) 
        { 
            var works = wr['work'];
            works.forEach(w => {
                var element = "<a href='" + w.link + "' target='blank'>" +
                "<section class='small_card'> <div class='SC_Img'>" +
                "<img src='img/work/" + w.img + "'></div>" + 
                "<div class='SC_Content'>" + 
                "<div class='SC_h2'>" + w.title + "</div>" + 
                "<div class='SC_Desc'>" + w.subtitle + "</div>" + 
                "<div class='SC_Type " + w.type +"'></div><div class='cls'><div>" + 
                "<div class='SC_Desc2'>" + w.about[localStorage.getItem('language')] + "</div>" + 
                "<div class='SC_Local'><i class=\"icon-location localIC\"></i>" + w.local[localStorage.getItem('language')] + "</div>" +
                "<div class='SC_Time'>" + nrToDate(w.startT) + " - " + nrToDate(w.stopT) +"</div>" +
                "</div></section></a>";
                document.getElementById('works').innerHTML += element;
                nrToDate(w.startT)
            });
        } 
	});
}

/*
<a href='https://elektronik.rzeszow.pl' target='blank'> <section class='small_card'>
    <div class='SC_Img'><img src='img/zse.svg'></div>
    <div class='SC_Content'>
        <div class='SC_h2'>Zespół Szkół Elektronicznych w Rzeszowie</div>
        <div class='SC_Desc ZSEdesc'></div>
        <div class='SC_Local ZSElocal'></div>
        <div class='SC_Time ZSEtime'></div>
    </div>
</section></a>
*/