document.addEventListener("DOMContentLoaded", () => {

    // All ontology sections
    const sections = document.querySelectorAll(".entity");

    // TOC links
    const tocLinks = document.querySelectorAll("#toc a[href^='#']");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting)
                return;

            const id = entry.target.id;

            tocLinks.forEach(link => {
                link.classList.remove("active");
            });

            const active =
                document.querySelector(`#toc a[href="#${id}"]`);

            if(active)
                active.classList.add("active");

        });

    },{
        rootMargin:"-20% 0px -65% 0px",
        threshold:0
    });

    sections.forEach(section => observer.observe(section));

});
