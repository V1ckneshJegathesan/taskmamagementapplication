# Task Management Application
Sample Spring Boot Application built using Angular8 + Express.js (server for production build environment) + Spring Boot (Spring Data JPA + Spring Security) + PostgreSQL + Auth0 (for authentication) 


# Purpose of the project

The purpose of this project is to demonstrate the concepts using the above technologies.

Angular8
ExpressJS
SpringBoot 2.0
Spring Data JPA
Spring Security + Auth0 (Authentication with JWT)
PostgreSQL

#Pre-configuration

Before starting the project, there are some prequisite configurations to be made to the project.

1. Download PostgreSQL and set it up.

2. Change the database configuration in the below file 

		.\taskmanager-demo\src\main\java\com\example\taskmanagerdemo\config\PersistenceConfiguration

		builder.url("<Your jdbc url>");
		builder.username("<Your database username>");
		builder.password("<Your database password");
		builder.driverClassName("<Your driver class name>");

3. For Authentication, create an account with https://auth0.com/

4. Ensure the domain name is noted down.

5. Once logged in go to APIs -> Create API.

6. Name your API.

7. Set the identifier to be http://localhost:8080 -> this is the proxy to your springboot application.

8. Once Created go to APIs -> Click on your newly created API -> Permissions 

9. Key in the 2 permissions as follows. This will be used to guard our routes in the project.

		Permission: read:tasks Description: All Tasks

		Permission:read:task    Description: All Tasks

12. Next go to APIs -> Click on your newly created API -> Machine to Machine Applications

13. Ensure your application is authorized (Green slide button). Click the > arrow next to it. 

14. Grant authorizations to the newly created permissions above.

15. Go to Applications -> Your application (this will be automatically created for you)

16. Set the Allowed callback URL's http://localhost:4200/callback

17. Set the Allowed Web Origins http://localhost:4200

18. Scroll to the bottom click Show Advanced settings.

19. Grant Types - Click Implicit, Authorization Code, Refresh Token

20. Click Save Changes.

21. Copy the domain into the below 2 files

		.\taskmanager-demo\src\main\resources\application.yml

			issuer: https://<Your Auth0 domain>

		.\taskmanager-demo-ui\src\app\services\authentication.service

			
			domain: '<Your Auth0 domain name>'



22. and ClientID at the top of the page into the below file.

		.\taskmanager-demo-ui\src\app\services\authentication.service

		clientID: '<Your Auth0 ClientID>'



#To start the Angular Front End.

For non-production environment build.

cd taskmanager-demo-ui

npm install

npm start

For a production environment build

cd taskmanager-demo-ui

ng build (--prod configuration has been set in package.json)

node server.js

#To start the SpringBoot Back End.

cd taskmanager-demo

mvn spring-boot:run




# Angular form page

Go to http://localhost:4200

You will be presented with a form to enter your task.

Click Save to persist into the database


# Angular Task page

To view your current tasks manually navigate to the below url.

http://localhost:4200/taskviewer

You will be presented with a login page similar to the Auth0 login page.

Key in your credentials and click yes to authenticate the endpoints.

You should see the tasks you have saved in your database.
