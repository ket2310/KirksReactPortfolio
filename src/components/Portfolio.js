import React from "react";



function Portfolio() {
    return (
        <div>
            <div class="featuredProj">
                <section class="Wilbert">
                    <a href="https://github.com/Amplimark/WilbertSvcs.Management"  class="grid-item">
                        <div>
                            <h3>Wilbert Funeral Services Inc.</h3>
                            <span>.NET Core / C# / MVC / Entity Framework / JavaScript / CSS / APIs</span>
                        </div>
                    </a>
                </section>
            </div>
            <div class="fromTriogy">
                <section class="ecommerce">
                    <div>
                        <a href="https://github.com/ket2310/ecommerceStore"  id="repoEcomm" class="grid-item">
                            <div>
                                <h3>Ecommerce Store</h3>
                                <span>JavaScript / Sequelize</span>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
            <div class="fromTrilogy">
                <section class="techBlog">
                    <div>
                        <a href="https://github.com/ket2310/KirksBitsAndBytes" id="tech"  class="grid-item">
                            <div>
                                <h3>Tech Blog</h3>
                                <span>JavaScript / CSS / Handlebars</span>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
            <div class="fromTrilogy">
                <section class="team">
                    <div>
                        <a href="https://github.com/ket2310/TeamProfileGenerator" id="teamGen"  class="grid-item">
                            <div>
                                <h3 >Team Generator</h3>
                                <span>JavaScript / HTML</span>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Portfolio;