document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".tab-pane");
    const storyForm = document.getElementById("story-form");
    const feelingsForm = document.getElementById("feelings-form");
    const commentsSection = document.getElementById("comments");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const tabId = tab.getAttribute("href").substring(1);
            sections.forEach((section) => {
                section.classList.remove("show", "active");
            });
            document.getElementById(tabId).classList.add("show", "active");

            if (tabId === "view-stories-section") {
                // Display stories and feelings
                displayComments();
            }
        });
    });

    storyForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const storyName = document.getElementById("story-name").value;
        const storyComment = document.getElementById("story-comment").value;

        if (storyName.trim() !== "" && storyComment.trim() !== "") {
            addComment(`${storyName} (Story): ${storyComment}`);
            clearForm("story-form");
        }
    });

    feelingsForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const feelingsName = document.getElementById("feelings-name").value;
        const feelingsComment = document.getElementById("feelings-comment").value;

        if (feelingsName.trim() !== "" && feelingsComment.trim() !== "") {
            addComment(`${feelingsName} (Feelings): ${feelingsComment}`);
            clearForm("feelings-form");
        }
    });

    function displayComments() {
        // Clear the comments section
        commentsSection.innerHTML = "";
        // You can fetch and display comments from your server or local storage here.
        // For now, let's add some example comments.
        const exampleComments = [
            "Alice (Story): This is a great website!",
            "Bob (Feelings): I love the design of this website.",
            "Charlie (Story): My story is amazing!",
        ];
        exampleComments.forEach(addComment);
    }

    function addComment(comment) {
        const commentElement = document.createElement("div");
        commentElement.textContent = comment;
        commentsSection.appendChild(commentElement);
    }

    function clearForm(formId) {
        document.getElementById(formId).reset();
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // Your existing code for tabs and comment display goes here

    // Add functionality for Login, Register, and Forgot Password forms
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const forgotPasswordForm = document.getElementById("forgot-password-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = loginForm.querySelector("#login-username").value;
        const password = loginForm.querySelector("#login-password").value;

        // Implement login logic here (e.g., validate user credentials)
        // You can use AJAX or fetch to send the data to a server for validation
    });

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = registerForm.querySelector("#register-username").value;
        const email = registerForm.querySelector("#register-email").value;
        const password = registerForm.querySelector("#register-password").value;

        // Implement registration logic here (e.g., create a new user)
        // You can use AJAX or fetch to send the data to a server for registration
    });

    forgotPasswordForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = forgotPasswordForm.querySelector("#forgot-password-email").value;

        // Implement forgot password logic here (e.g., send a password reset email)
        // You can use AJAX or fetch to send the email to the user
    });
});
