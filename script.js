const form = document.getElementById("resumeForm");

        form.addEventListener("submit", function(event) {
            event.preventDefault();

            document.getElementById("rName").textContent =
                document.getElementById("name").value;

            document.getElementById("rTitle").textContent =
                document.getElementById("title").value;

            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;

            document.getElementById("rContact").textContent =
                "Email: " + email +
                (phone ? " | Phone: " + phone : "");

            document.getElementById("rObjective").textContent =
                document.getElementById("objective").value;

            document.getElementById("rEducation").textContent =
                document.getElementById("education").value;

            document.getElementById("rSkills").textContent =
                document.getElementById("skills").value;

            document.getElementById("rProjects").textContent =
                document.getElementById("projects").value;

            document.getElementById("resume").style.display = "block";

            document.getElementById("resume").scrollIntoView({
                behavior: "smooth"
            });
        });

        form.addEventListener("reset", function() {
            document.getElementById("resume").style.display = "none";
        });