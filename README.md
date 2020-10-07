# Project2
### Project 2 | John Deere App

### Description
This app was developed to familiarize users with John Deere Equipment, while allowing them to set up and organize their operation on the site. Once they have signed up they can view and edit their information, visit the equipment show page, the attachments show page, or view other operations. The equipment show page is linked to the attachments page to show compatible attachments for all equipment. The equipment is also linked to users so that a user can see who owns a specific piece of equipment, and a list of the equipment they own in their operation as well.

### Technologies Used
Technologies used:
- MVC
- JavaScript
- HTML
- CSS
- ejs
- postgres

### Approach taken
We began with a planning phase which consisted of creating a wireframe, ERD, and basic MVC structure. From there we took the initial steps of downloading all of the initial packages required for this app. This led into the generation of models and basic structure of our MVC. From there we began the steady development through linking pages and creating relationships between the quipment and attachments, and users to join table to achive our MVP. Once the basic program was created and functioning we moved onto our stretch features and made them funtional. We finished the development of this project withstyling to give the app a professional and funtional look.

### Wireframe

![wireframe](https://i.imgur.com/THKD4Wu.png)

### MVP

A working full-stack application, built by you, using Node.js, Postgres, Express and EJS 

– Application will have user profile attached to equipment they own. Many to one and many to many relationships with equipment and attachments, and equipment to customer relationships. Data stored on backend from user and for user to see.

Adhere to the MVC file structure: Models, Views, Controllers 

– models for equipment, users, and attachments, with views for all of them and controllers to complete the functionality.

At least one model with CRUD. 

– user will have crud functionality with the ability to signup, login, update and delete profiles.

At least 2 models that are associated in some way (one-to-many, many-to-many)- 3 models (equipment, users, attachments) 

– equipment to attachments is one to many relationship, and users to equipment is many to many relationship.

:exclamation: A git repository not in the git enterprise.

At least 50 Github commits in total.

At least 10 User Stories

Be deployed online and accessible to the public via Heroku

A README.md file with app idea, technologies used, the approach was taken, unsolved problems, user stories, and notes to yourself so you can come back to your project later in the course and be able to pick up your train of thought, etc. Inside Your README.md:
 
Stretch Goals
·     Search for a specific user
·     Google maps operation location functionality
·     Professional css
·     Ease of user navigation
·     Data validation

### Unsolved problems

- Keeping users logged in
- Check boxes for user input

### User Stories

1.    As an unregistered operations manager I would like to sign up for the app and list my equipment for tracking purposes
2.    As a farmer I would like to see what attachments are available for my equipment.
3.    I am a dealer and would like to see what equipment is being bought and trends in equipment purchased.
4.    As a subcontractor I would like to see operation in the area with the equipment necessary to assist me on larger jobs.
5.    As an account manager in charge of awarding construction jobs to private businesses I would like to seek out the companies large enough to complete our large project within our tight timeline.
6.    As a custom harvesting manager, I would like to see people with extra equipment to assist me this year.
7.    As customer in search of a new bulldozer I would like to find a dealer with the machine I need.
8.    As a person looking to buy a new tractor, I would like to find a local farmer to discuss how it is performing and any troubles he has had.
9.    As a homeowner I would like to find the equipment/ attachment that will best suit putting in a new water line.
10. As a customer I would like to see the equipment John Deere has to offer.

### ERD
![ERD](https://files.slack.com/files-pri/TSHV6HCEB-F01C2V21TDK/image.png)