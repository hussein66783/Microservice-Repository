# INTRODUCTION

This web application provides users with a straightforward way to monitor their reading journey, allowing them to seamlessly track their progress and manage their reading goals. Developed using a combination of HTML, JavaScript, and CSS, this simple yet effective tool empowers users to stay organized and motivated in their reading endeavors.


## SCOPE OF THE SOFTWARE
#Progress Tracking
The primary functionality of the Reading Progress Tracker revolves around empowering users to actively monitor their reading progress. This includes the ability to mark books as "currently reading" and maintain a comprehensive digital reading log. This feature serves as a motivational tool, encouraging users to set and achieve their reading goals directly within the platform.

#Software Requirements
To make effective use of the Progress Tracking feature, users need access to the following:

- User Account: Create a personal account to save and sync reading progress across devices.
- Book Entry: Input details about the books being read, including title, author, and current progress.
- Status Labels: Utilize the "currently reading" and "done reading" labels to categorize books.
- Reading Log: Access and manage a digital reading log that provides an overview of past and present reading activities
- User-Friendly Interface: The system offers a clean and intuitive interface for a positive user experience. Simple and straightforward functionality to encourage ease of use.
- Continuous Integration: Helps automates the integration of code changes from various users into a shared repository.
This feature enhances the user experience by providing a structured way to set, visualize, and accomplish reading goals. It transforms the Reading Progress Tracker into a versatile tool for book enthusiasts seeking a more organized and goal-driven reading experience.


## USED SOFTWARE ARCHITECTURE 

Microservices architecture is chosen as the most suitable architectural paradigm for the Reading Progress Tracker. This architectural choice is driven by its inherent advantages in terms of flexibility, scalability, and maintainability.

In summary, the adoption of a microservices architecture enhances the Reading Progress Tracker's ability to adapt to user needs, scale efficiently, and maintain a high level of performance as the application continues to evolve.

#Key Considerations:
Flexibility: Microservices architecture decomposes the overall system into small, independent services. This modular approach facilitates individual development, deployment, and scaling of specific components, allowing for flexibility in adapting to evolving requirements.

Scalability: By breaking down the application into independently deployable microservices, the Reading Progress Tracker can scale specific functionalities based on demand. This ensures efficient resource allocation and optimal performance, even as the user base and data volume grow.

Maintainability: Microservices provide a modular structure that simplifies maintenance. Issues and updates are isolated to specific services, making it easier to troubleshoot, update, and enhance individual components without affecting the entire system.

## SOFTWARE DESIGN AND MODEL
- UML Sequence diagram for Adding a Book
- UML Sequence diagram for marking book added as currently reading.
- UML Sequence diagram for marking book added as currently done reading
- UML Sequence diagram for initializing the application.


## TEST CASES
- Adding a New Book
- Updating Reading Progress
- Marking a Book as Done

## USED TOOLS, LANGUAGES AND FRAMEWORKS

#Technologies Used
#HTML:
Description: HTML (Hypertext Markup Language) is used for structuring the content of web pages.
Documentation: HTML MDN Web Docs

#JavaScript:
Description: JavaScript is a programming language that enables dynamic and interactive behavior on web pages.
Documentation: JavaScript MDN Web Docs

#CSS:
Description: CSS (Cascading Style Sheets) is used for styling the HTML elements, providing a visually appealing presentation.
Documentation: CSS MDN Web Docs

#Frameworks and Preprocessors

#No Framework (Pure JavaScript):
Description: The application uses native JavaScript for dynamic behavior without relying on a specific framework.

#No CSS Framework (Custom Styles):
Description: Custom CSS is employed to style the HTML elements, ensuring a unique and tailored appearance.

#No Build Tool (Manual Setup):
Description: The project does not use a specific build tool, opting for a manual setup of the development environment.

#No TypeScript:
Description: TypeScript is not used in this project, and the code is written in standard JavaScript.

#Development and Collaboration Tools
#Git:
Description: Git is a distributed version control system used for tracking changes in the source code during development.
Documentation: Git Documentation

#GitHub:
Description: GitHub is a web-based platform for hosting and collaborating on Git repositories, facilitating team collaboration.
Documentation: GitHub Docs

#Build and CI/CD Tools
Build Tool (Manual Setup):
Description: The project does not use a specific build tool, relying on a straightforward manual setup.

No CI/CD Tool (Manual Deployment):
Description: Deployment is done manually without using a dedicated Continuous Integration/Continuous Deployment (CI/CD) tool.


##NOTE
This project embraces simplicity and does not heavily rely on external tools or frameworks, providing a lightweight and straightforward solution for tracking reading progress with the essential use of HTML, JavaScript, and CSS.

Feel free to customize and enhance the code to suit your specific requirements. Happy reading! 📚
