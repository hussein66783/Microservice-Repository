# INTRODUCTION

This web application provides users with a straightforward way to monitor their reading journey, allowing them to seamlessly track their progress and manage their reading goals. Developed using a combination of HTML, JavaScript, and CSS, this simple yet effective tool empowers users to stay organized and motivated in their reading endeavors.


## SCOPE OF THE SOFTWARE
**Progress Tracking**

The primary functionality of the Reading Progress Tracker revolves around empowering users to actively monitor their reading progress. This includes the ability to mark books as "currently reading" and maintain a comprehensive digital reading log. This feature serves as a motivational tool, encouraging users to set and achieve their reading goals directly within the platform.

***Software Requirements***
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

***Key Considerations:***
- **Flexibility:** Microservices architecture decomposes the overall system into small, independent services. This modular approach facilitates individual development, deployment, and scaling of specific components, allowing for flexibility in adapting to evolving requirements.

- **Scalability:** By breaking down the application into independently deployable microservices, the Reading Progress Tracker can scale specific functionalities based on demand. This ensures efficient resource allocation and optimal performance, even as the user base and data volume grow.

- **Maintainability:** Microservices provide a modular structure that simplifies maintenance. Issues and updates are isolated to specific services, making it easier to troubleshoot, update, and enhance individual components without affecting the entire system.

## SOFTWARE DESIGN AND MODEL

- ***Add Book***
  ![UML Sequence diagram for Adding a Book](https://github.com/hussein66783/Microservice-Repository/assets/121267312/20731299-f896-4c9b-ad3d-a4061a245ab7)
**UML Sequence diagram for Adding a Book.**

- ***Mark Book as Currently Reading***
  ![UML Sequence diagram for marking book added as currently reading](https://github.com/hussein66783/Microservice-Repository/assets/121267312/dabad6a1-8fd9-4df8-b3da-63e428ab9fc7)
**UML Sequence diagram for marking book added as currently reading.**

- ***Mark Book as Done Reading***
 ![UML Sequence diagram for marking book added as currently done reading](https://github.com/hussein66783/Microservice-Repository/assets/121267312/3eb8c43a-638c-4a81-99c4-255349ed9d0f)
**UML Sequence diagram for marking book added as currently done reading.**

-  ***Initializing the application***
![UML Sequence diagram for initializing the application](https://github.com/hussein66783/Microservice-Repository/assets/121267312/a5c2ccc1-a35e-4e04-b0c8-ddc366da37e7)
**UML Sequence diagram for initializing the application.**

- ***Build Pipeline***
  ![TeamCity Screenshot showing successful build pipeline](https://github.com/hussein66783/Microservice-Repository/assets/121267312/24fd5626-ad74-4d56-88bb-8ab121a4f4cc)
**Teamcity dashboard screenshot showing the bugs that were found and fixed to result into a successful build pipeline.**


## TEST CASES
- [x] Adding a New Book
- [x] Updating Reading Progress
- [x] Marking a Book as Done

## USED TECHNOLOGIES

**Technologies Used**
**HTML:** HTML (Hypertext Markup Language) is used for structuring the content of web pages.
Documentation: [HTML documentation](https://www.w3schools.com/html/).

**JavaScript:** JavaScript is a programming language that enables dynamic and interactive behavior on web pages.
Documentation: [JavaScript documentation](https://www.w3schools.com/js/).

**Typescript:** Adds static typing to JavaScript, enhancing code reliability and developer productivity. 
Documentation: [Typescript documentation](https://www.typescriptlang.org/docs/).

**CSS:** CSS (Cascading Style Sheets) is used for styling the HTML elements, providing a visually appealing presentation.
Documentation: [CSS documentation](https://https://www.w3schools.com/css/).

**Git:** Git is a distributed version control system used for tracking changes in the source code during development.
Documentation: [Git documentation](https://git-scm.com/doc).

**GitHub:** GitHub is a web-based platform for hosting and collaborating on Git repositories, facilitating team collaboration.
Documentation: [Git documentation](https://docs.github.com/en).

**Team city:** TeamCity is a general-purpose CI/CD software platform that allows for flexible workflows, collaboration and development practices.
Documentation: [Team city CI/CD documentation](https://www.jetbrains.com/teamcity/ci-cd-guide/).


# NOTE
This project embraces simplicity and does not heavily rely on external tools or frameworks, providing a lightweight and straightforward solution for tracking reading progress with the essential use of HTML, JavaScript, and CSS.

Feel free to customize and enhance the code to suit your specific requirements. Happy reading! 📚
