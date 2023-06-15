<?php 
    session_start();
?>
<!DOCTYPE HTML>
<html lang="pl">
	<head>
        <?php
            require_once "settings.php";
            echo $head;
        ?>
        <script src="js/jquery.js"></script>
        <script src="js/projects.js"></script>
        <script src="js/work.js"></script>
        <script src="js/language.js"></script>
        <link rel="stylesheet" href="css/fontello.css">
	</head>
	<body>  
        <header>
            <nav>
                <div>
                    <a href="#AM"><div class="about"></div></a>
                    <hr>
                </div>
                <div>
                    <a href="#CE"><div class="ComExp"></div></a>
                    <hr>
                </div>
                <div>
                    <a href="#PR"><div class="projects"></div></a>
                    <hr>
                </div>
                <div>
                    <a href="#KO"><div class="contact"></div></a>
                    <hr>
                </div>
            </nav>
            <div class="langDiv">
                <a href="#" onclick="setLanguage('pl')"><img src="img/plFlag" alt="PL"></a>
                <a href="#" onclick="setLanguage('en')"><img src="img/anFlag.svg" alt="EN"></a>
            </div>
        </header>
        <main>
            <section class="chapter" is="AM">
                <h1 class="about"></h1>
                <div class="aboutCon">
                    <div class="aboutImg">
                        <img src="img/ja.png">
                        <div class="aboutPanel">
                            <div class="_h1">Wojciech Jędrzejewski</div>
                            <div class="_h3">C++ Developer</div>
                            <div class="localPanel">
                                <i class="icon-location localIC"></i>
                                <div class="ZSElocal"></div>
                            </div>
                            <a href="https://github.com/wojtij99" target="blank" class="profileLinks"><i class="icon-github-circled"></i>GitHub</a>
                            <a href="https://www.linkedin.com/in/wojciech-jędrzejewski-737a071b5/" class="profileLinks" target="blank"><i class="icon-linkedin-squared"></i>LinkedIn</a>
                            <a href="mailto:wojtij99@gmail.com" target="blank" class="profileLinks"><i class="icon-mail"></i>Email</a>
                            <a href="CV.pdf" target="blank" class="profileLinks"><i class="icon-user"></i> My CV/resume</a>
                            <p class="aboutMe aboutText"></p>
                        </div>
                        <div class="cls"></div>
                    </div>
                </div>
            </section>
            <hr>
            <section class="chapter" id="CE">
                <h1 class="ComExp"></h1>
                <div id="works"></div>
            </section>
            <hr>
            <section class="chapter" id="PR">
                <h1 class="projects"></h1>
                <div id="projects"></div>  
            </section>
            <hr>
            <section class="chapter">
                <h1 class="Skills"></h1>
                <div class="skillContainer">
                    <h3 class="mainLangs"></h3>
                    <div class="skillHolder">
                        <img src="img/c.png" class="skillImg">
                        <img src="img/cpp.png" class="skillImg">
                        <img src="img/cs.png" class="skillImg">
                        <img src="img/MySQL.png" class="skillImg">
                    </div>
                </div>
                <!-- <div class="skillTag">C</div>
                <div class="skillTag">C++</div>
                <div class="skillTag">C#</div>
                <div class="skillTag">MySQL</div> -->
                <div class="skillContainer">
                    <h3 class="secLangs"></h3>
                    <div class="skillHolder">
                        <img src="img/js.webp" class="skillImg">
                        <img src="img/php.png" class="skillImg">
                    </div>
                </div>
                <!-- <div class="skillTag">JS</div>
                <div class="skillTag">PHP</div> -->
                <div class="skillContainer">
                    <h3 class="other"></h3>
                    <div class="skillHolder">
                        <img src="img/dotNET.png" class="skillImg">
                        <a href="https://crowcpp.org" target="blank"><img src="img/crow.png" class="skillImg"></a>
                        <img src="img/Git.png" class="skillImg">
                        <img src="img/arch.svg" title="I use Arch BTW" class="skillImg">
                    </div>
                </div>
                <!-- <div class="skillTag">Git</div>
                <div class="skillTag">Linux (BTW I use Arch)</div> -->
            </section>
            <hr>
            <section class="chapter">
                <h1 class="Interests"></h1>
                <div class="skillContainer">
                    <div class="skillTag INTruss"></div>
                    <div class="skillTag INTlat"></div>
                    <div class="skillTag INTworbui"></div>
                    <div class="skillTag INTpaperRPG"></div>
                    <div class="skillTag INTgameDev"></div>
                    <div class="skillTag INTcoj"></div>
                    <div class="skillTag INTkaczmar"></div>
                </div>
            </section>
            <hr>
            <section class="chapter">
                <h1 class="Education"></h1>
                <a href="https://elektronik.rzeszow.pl" target="blank"> <section class="small_card">
                    <div class="SC_Img"><img src="img/zse.svg"></div>
                    <div class="SC_Content">
                        <div class="SC_h2">Zespół Szkół Elektronicznych w Rzeszowie</div>
                        <div class="SC_Desc ZSEdesc"></div>
                        <div class="SC_Type blank">Apprenticeship</div>
                        <div class="SC_Desc2 blank">Application to manage Solls Active Sky System (DALI)Application to manage Solls Active Sky System (DALI)</div>
                        <div class="SC_Local"><i class="icon-location localIC"></i><div class="ZSElocal"></div></div>
                        <div class="SC_Time ZSEtime"></div>
                    </div>
                </section></a>
            </section>
        </main>
        <footer id="KO">
            <div>
                <a href="mailto:wojtij99@gmail.com" target="blank" class="profileLinks"><i class="icon-mail"></i>wojtij99@gmail.com</a>
                <a href="https://github.com/wojtij99" target="blank" class="profileLinks"><i class="icon-github-circled"></i>GitHub</a>
                <a href="https://www.linkedin.com/in/wojciech-jędrzejewski-737a071b5/" class="profileLinks" target="blank"><i class="icon-linkedin-squared"></i>LinkedIn</a>
            </div>
        </footer>
	</body>
</html>