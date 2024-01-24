# INTRODUCTION

This web application provides users with a straightforward way to monitor their reading journey, allowing them to seamlessly track their progress and manage their reading goals. Developed using a combination of HTML, JavaScript, and CSS, this simple yet effective tool empowers users to stay organized and motivated in their reading endeavors.


## SCOPE OF THE SOFTWARE
Progress Tracking
The primary functionality of the Reading Progress Tracker revolves around empowering users to actively monitor their reading progress. This includes the ability to mark books as "currently reading" and maintain a comprehensive digital reading log. This feature serves as a motivational tool, encouraging users to set and achieve their reading goals directly within the platform.

Software Requirements
To make effective use of the Progress Tracking feature, users need access to the following:

- **User Account:** Create a personal account to save and sync reading progress across devices.
- **Book Entry:** Input details about the books being read, including title, author, and current progress.
- **Status Labels:** Utilize the "currently reading" and "done reading" labels to categorize books.
- **Reading Log:** Access and manage a digital reading log that provides an overview of past and present reading activities
- **User-Friendly Interface:** The system offers a clean and intuitive interface for a positive user experience. Simple and straightforward functionality to encourage ease of use.
- **Continuous Integration:** Helps automates the integration of code changes from various users into a shared repository.

This feature enhances the user experience by providing a structured way to set, visualize, and accomplish reading goals. It transforms the Reading Progress Tracker into a versatile tool for book enthusiasts seeking a more organized and goal-driven reading experience.


## USED SOFTWARE ARCHITECTURE 

Microservices architecture is chosen as the most suitable architectural paradigm for the Reading Progress Tracker. This architectural choice is driven by its inherent advantages in terms of flexibility, scalability, and maintainability.

In summary, the adoption of a microservices architecture enhances the Reading Progress Tracker's ability to adapt to user needs, scale efficiently, and maintain a high level of performance as the application continues to evolve.

**Key Considerations:**
- Flexibility: Microservices architecture decomposes the overall system into small, independent services. This modular approach facilitates individual development, deployment, and scaling of specific components, allowing for flexibility in adapting to evolving requirements.

- Scalability: By breaking down the application into independently deployable microservices, the Reading Progress Tracker can scale specific functionalities based on demand. This ensures efficient resource allocation and optimal performance, even as the user base and data volume grow.

- Maintainability: Microservices provide a modular structure that simplifies maintenance. Issues and updates are isolated to specific services, making it easier to troubleshoot, update, and enhance individual components without affecting the entire system.

## SOFTWARE DESIGN AND MODEL

- ***Add Book***
    ![UML Sequence diagram for Adding a Book](./src/assets/images/edit-comment.png)

- ***Mark Book Currently Reading***
    ![UML Sequence diagram for marking book added as currently reading](./src/assets/images/edit-comment.png)

- ***Mark Book as Done Reading***
    ![UML Sequence diagram for marking book added as currently done reading](./src/assets/images/edit-comment.png)

-  ***Initializing the application***
    ![UML Sequence diagram for initializing the application](./src/assets/images/edit-comment.png)

- ***Build Pipeline***
    ![TeamCity Screenshot showing successful build pipeline](./src/assets/images/build-pipeline.png)
    Teamcity dashboard showing the successfully configured build pipeline.


## TEST CASES
- [x] Adding a New Book
- [x] Updating Reading Progress
- [x] Marking a Book as Done

## USED TECHNOLOGIES

**Technologies Used**
**HTML:** HTML (Hypertext Markup Language) is used for structuring the content of web pages.
Documentation: HTML MDN Web Docs

**JavaScript:** JavaScript is a programming language that enables dynamic and interactive behavior on web pages.
Documentation: JavaScript MDN Web Docs

**Typescript:** Adds static typing to JavaScript, enhancing code reliability and developer productivity. [Typescript documentation](https://www.typescriptlang.org/docs/).

**CSS:** CSS (Cascading Style Sheets) is used for styling the HTML elements, providing a visually appealing presentation.
Documentation: CSS MDN Web Docs

**Git:** Git is a distributed version control system used for tracking changes in the source code during development.
Documentation: Git Documentation

**GitHub:** GitHub is a web-based platform for hosting and collaborating on Git repositories, facilitating team collaboration.
Documentation: GitHub Docs

**Team city:** TeamCity is a general-purpose CI/CD software platform that allows for flexible workflows, collaboration and development practices. [Team city CI/CD documentation](https://www.jetbrains.com/teamcity/ci-cd-guide/).


**NOTE**
This project embraces simplicity and does not heavily rely on external tools or frameworks, providing a lightweight and straightforward solution for tracking reading progress with the essential use of HTML, JavaScript, and CSS.

Feel free to customize and enhance the code to suit your specific requirements. Happy reading! 📚
