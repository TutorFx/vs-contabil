# 📚 Landing Page VS Contábil

![image](https://github.com/TutorFx/vs-contabil/assets/26338224/355a0159-89ad-404c-806d-88f830fd7ab6)

## 🚀 Intro

This landing page was built with Nuxt3, an open source framework that makes web development intuitive and powerful.
Create performant and production-grade full-stack web apps and websites with confidence.

![Nuxtjs](https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82)
![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

## ✨ Features

#### 🧩 Service Pattern

The service pattern was used to organize the business logic of the application. This pattern helps to keep the code clean and easy to maintain, clearly separating responsibilities.

#### 🌐 Google APIs

Google APIs were used to integrate the application with Google Sheets. This allows data to be sent directly to a Google Sheets spreadsheet, making it easy to manage and analyze data.

#### 🔍 @nuxtseo/module

The @nuxtseo/module module was used to generate metadata that makes the application easier to index by search engines.

#### 🎨 Tailwind CSS

The entire application is built using Tailwind CSS, a low-level CSS framework that allows for the easy creation of custom designs. This makes the application incredibly fast and lightweight.

#### 📏 Eslint

The application uses ESLint with specific plugins to work together with Tailwind and Vue. This helps to maintain code quality and prevent common errors.

#### ⚡ nuxt-speedkit and @nuxt/image

nuxt-speedkit and @nuxt/image were used to speed up page performance. These tools help to optimize image loading and the overall performance of the application.

#### 🎉 nuxt-icon

Nuxt-icon was used for the icons. This allows for the use of a wide variety of icons easily and efficiently.

## 🎯 Final considerations

This architecture allows for a clear separation of responsibilities and facilitates the maintenance and expansion of the application in the future. Additionally, the integration with Google Sheets offers a convenient and efficient way to manage user data. And of course, it's `FREE` 💸


## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm run dev
```

## Production

Build the application for production:

```bash
# pnpm
pnpm run build
```

Locally preview production build:

```bash
# pnpm
pnpm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Obtain Google Credentials

**Objective:** This tutorial will guide you through the process of obtaining the necessary Google credentials to connect to the Google API and perform actions on your account. The credentials you will obtain are:

* **GOOGLE_CLIENT:** The email address of the Google Cloud Platform (GCP) service account.
* **GOOGLE_API:** The private key of the service account in PEM format.

**Prerequisites:**

* A Google Cloud Platform (GCP) account.
* Permissions to create and manage service accounts on GCP.
* A text editor, such as Notepad++ or Sublime Text.

**Steps:**

**1. Create a service account:**

* Access the Google Cloud Platform Console: [https://console.cloud.google.com/](https://console.cloud.google.com/).
* In the left menu, click on "IAM & Admin".
* Click on "Service accounts".
* Click on "Create service account".
* Enter a name for the service account, for example, "My robot".
* Select the "Editor" role from the list of predefined roles.
* Click on "Create".

**2. Download the private key:**

* On the service account page, click on the "Keys" tab.
* Click on "Add key" and select "Create new key".
* Select the "JSON" key type.
* Click on "Create".
* The private key will be downloaded to your computer in JSON format.

**3. Extract information from the private key:**

* Open the downloaded JSON file in a text editor.
* Locate the "client_email" field. This is the value you need to use for the `GOOGLE_CLIENT` variable.
* Locate the "private_key" field. This is the value you need to use for the `GOOGLE_API` variable.

**4. Set up environment variables:**

* Create a configuration file:**

* Create a text file named `.env` in the root of your code.
* In the `.env` file, add the following lines, replacing the values according to your information:

```
GOOGLE_CLIENT="yourbot@yourorg.iam.gserviceaccount.com"
GOOGLE_API="-----BEGIN PRIVATE KEY-----
< YOUR PRIVATE KEY HERE >
-----END PRIVATE KEY-----"
```

## Obtain Google Sheet ID

Now that we have an IAM account configured, the next steps to receive customer data in the spreadsheet are:

**1. Create a Google Sheets spreadsheet.**

**2. Change the name of the Sheet Page to match the name of the runtime config `google.sheet_page`.**

**3. Invite the IAM account to modify the spreadsheet by clicking on the "share" button.** Send an invitation to your IAM, example: yourbot@yourorg.iam.gserviceaccount.com.

**4. Set the GOOGLE_SHEET_ID in the `.env` file.** This value can be found in the link of the spreadsheet.

```
## Your .env file should look like this

GOOGLE_SHEET_ID = "<insert the id of the link to your google sheet here>"
GOOGLE_CLIENT = "yourbot@yourorg.iam.gserviceaccount.com"
GOOGLE_API = "-----BEGIN PRIVATE KEY-----
< YOUR PRIVATE KEY HERE >
-----END PRIVATE KEY-----"
```

**That's it, integration done.** Here is some information about the Google Sheets API (Free plan).

**Limit per minute:** 100 forms per minute per project.
**Limit per day:** 4,000 forms per day per project.

