# Base Project

This project aims to create a base upon which will be possible to build many apps.

## Features

Among the features it provides out of the box are:

- User creation
- User authentication using local strategy
- User roles (regular user and admin), with proper authentication
- CRUD operations over User (some are only available to admins)
- Listing Users (with pagination)
- Field selection in API (allow selecting which fields should be returned at each request)
- User account activation (email sent after user creation)
- Password recovery email
- Basic request/response logging

## Configuration

Some configuration is needed to actually use this project:

- Review app configuration, found in server/config/environment
- Define an app secret (also in server/config/environment)
- Review/define email sending configurations (in server/config/activatorConfig)
- Review email templates (in server/resources/emailTemplates)
- Create a reasonable password recovery page (the one in server/config/resources/templates/emailRecovery.ejs if for POC only)
- Define env variable MAILGUN_APIKEY to hold the apy key to mailgun account


## Todo

Things that will be included in this project:

- Admin front-end webapp