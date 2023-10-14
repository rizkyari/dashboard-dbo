# Dashboard DBO

## Overview

Dashboard DBO is a Vue 3-based web application developed for efficient data management. It leverages the power of Bootstrap 5 and Pinia for state management.

## Getting Started

To set up the project, use the following commands:
```
# Install project dependencies
yarn install

# Compile and launch the application with hot-reloading
yarn serve
```

## Technology Stack
- Vue 3: The core framework for building dynamic web applications.
- Bootstrap 5: A sleek, intuitive, and powerful front-end framework.
- Pinia: A state management library for Vue 3 that simplifies the management of application state.

## Modules

### Login Authentication
Perform user authentication with error handling.
Admin role provides full CRUD functionality.
Staff role has read-only access.
Login Credentials:
- Admin:
Username: admin
Password: admin
- Staff 1:
Username: staff1@example.com
Password: staff1password
- Staff 2:
Username: staff2@example.com
Password: staff2password

### Menus
- Profile: View personal data.
- Dashboard Menu: Introduction to the application.
- Supplier Management: Manage supplier data with CRUD operations.
- Customer Management: Manage customer data with CRUD operations.
- Order Management: Manage order data with CRUD operations.

## Folder Structure
The project structure is organized as follows:

```
src/
|-- assets/ : Contains static assets like images.
|-- components/ : Vue components.
|-- views/ : Vue components representing different pages or sections.
|-- services/ : Handlers and services that interact with APIs.
|-- store/ : State management using Pinia.
|-- router/ : Routing configuration.
|-- App.vue : The main Vue component serving as the entry point.
|-- main.js : Configures the Vue app, imports necessary libraries, and mounts the app.
```

## Known Issues
- After successfully performing CRUD operations, data updates may not reflect immediately. Navigating to another page and back is a temporary workaround.
- Authentication security features are not fully implemented yet.
- Minor responsive design issues may be present.


Feel free to contribute to the project and help resolve these issues.

Enjoy using Dashboard DBO!