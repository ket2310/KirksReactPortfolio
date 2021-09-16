import React from 'react';

// Here we destructure our props into their own distinct variables
export default function Navigation({ currPg, setPage }) {
    console.log(currPg)
    return (
        <div>
            {currPg === "AboutMe"} (
            <div class="MyBio">
                <p>
                    Full stack web developer with a solid history of creating web applications for organizations
                    Core, VB,
                    C#/ MVC, Javascript, and Entity Framework. Astute problem-solver who is capable of prioritizing and
                    managing
                    complex projects independently or in collaboration with others. Successfully migrated an application
                    from File
                    Maker Pro to .NET Core. Rebuilt the application from scratch, designing the models and migrating them to
                    a SQL
                    Server database. Tenacious problem-solver who sees obstacles as solutions waiting to be discovered.
                </p>
            </div>
            )
            {currPg === 'Portfolio'}(
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

            )
        </div>
    )
}
