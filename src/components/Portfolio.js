import React from "react";
import '../styles/portfolio.css'

function Portfolio() {
    return (
        <div>
            <div className="featuredProj">
                <section className="Wilbert">
                    <a href="https://github.com/Amplimark/WilbertSvcs.Management"  className="grid-item">
                        <div>
                            <h3>Wilbert Funeral Services Inc.</h3>
                            <span>.NET Core / C# / MVC / Entity Framework / JavaScript / CSS / APIs</span>
                        </div>
                    </a>
                </section>
            </div>
            <div className="fromTriogy">
                <section className="ecommerce">
                    <div>
                        <a href="https://github.com/ket2310/ecommerceStore"  id="repoEcomm" className="grid-item">
                            <div>
                                <h3>Ecommerce Store</h3>
                                <span>JavaScript / Sequelize</span>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
            <div className="fromTrilogy">
                <section className="techBlog">
                    <div>
                        <a href="https://github.com/ket2310/KirksBitsAndBytes" id="tech"  className="grid-item">
                            <div>
                                <h3>Tech Blog</h3>
                                <span>JavaScript / CSS / Handlebars</span>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
            <div className="fromTrilogy">
                <section className="team">
                    <div>
                        <a href="https://github.com/ket2310/TeamProfileGenerator" id="teamGen"  className="grid-item">
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