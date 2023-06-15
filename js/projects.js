var slides = {};

function loadProjects() {
    var projects;
    $.ajax({ 
		url:  'js/json/projects.json', 
		dataType: 'json', async: false, dataType: 'json', 
		success: function (proj) 
        { 
            projects = proj['projects'];
            var index = 0;
            projects.forEach(e => {
                var element = "<section class='projectCard'><div class='PC_imgBox'><img src='' class='PC_img' id=slider_"+ index +">"+
                "<div class='dotContainer'>" +
                "<a class='prev dotContainerElement' onclick=\"plusSlides(\'" + e.title+ "\',-1)\">&#10094;</a>"+
                "<div class='dotHolder dotContainerElement' id='holder_" + index + "'>";
                
                slides[e.title] = {index: 0, content: []};
                var imgn = 0;
                e.imgs.forEach(img => {
                    slides[e.title]["content"].push(img);
                    element += "<span class='dot' onclick=\"currentSlide(\'" + e.title+ "\',"+imgn+")\"></span>";
                    imgn++;
                })

                element += "</div><a class='next dotContainerElement' onclick=\"plusSlides(\'" + e.title+ "\',1)\">&#10095;</a>"+
                "</div></div><div class='PC_content'><div class='PC_h1 PC_titleElem'>" + e.title +"</div>"+
                "<div class='PC_year PC_titleElem'>" + e.date_start + "</div><div class='tagsHolder'>";
                e.tags.forEach(t => {element += "<div class='skillTag'>" + t + "</div>";});
                element += "</div><div class='PC_text'>" + e.about[localStorage.getItem('language')] + "</div>";
                if(e.github != null) element += "<a href='"+e.github+"' target='blank'><button><i class=\"icon-github-circled\"></i>GitHub</button></a>";
                if(e.seeIt != null) element += "<a href='"+e.seeIt+"' target='blank'><button><i class=\"icon-eye\"></i><div class='seeIt'></div></button></a></div></section>";
                document.getElementById('projects').innerHTML += element;
                showSlides(e.title, 0)
                index++;
            });
        } 
	});
}

function plusSlides(s, n) {
    showSlides(s, slides[s].index += n);
}
  
  // Thumbnail image controls
function currentSlide(s, n) {
    showSlides(s, slides[s].index = n);
}

function showSlides(s, n) {
    if (n < 0) slides[s].index = slides[s].content.length - 1;
    else if (n >= slides[s].content.length) slides[s].index = 0;

    let sIndex = 0;
    for(var slide in slides)
    {
        if(slide == s) break;
        sIndex++;
    }
    console.log(slides[s].content[slides[s].index]);
    // document.getElementById("slider_" + sIndex).src = "img/projects/ArcanoidIm.png";
    document.getElementById("slider_" + sIndex).src = "img/projects/" + slides[s].content[slides[s].index];
    const dots = document.getElementById("holder_" + sIndex).getElementsByClassName("dot");
    for(var dot in dots)
    {
        if(dot == "length") break;
        dots[dot].className = dots[dot].className.replace(" active", "")
    }
    dots[slides[s].index].className += " active";

}

/*
<section>
    <div><img src=''>
        <a class='prev' onclick='plusSlides(-1)'>&#10094;</a>
        <a class='next' onclick='plusSlides(1)'>&#10095;</a>
        <div style='text-align:center'>
            <span class='dot' onclick='currentSlide(1)'></span>
            <span class='dot' onclick='currentSlide(2)'></span>
            <span class='dot' onclick='currentSlide(3)'></span>
        </div>
    </div>
    <div>
        <div></div> <!-- Tytuł -->
        <div></div> <!-- Data -->
        <div></div> <!-- tagi -->
        <div></div> <!-- opis -->
        <div></div> <!-- guziki -->
    </div>
</section>
*/