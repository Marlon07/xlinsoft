## Before you start

Create a `.env` file in project folder with the following variables:

```
DATABASE_CONNECTION_STRING=<yourConnectionString>
ORIGIN_LOCAL_DOMAIN=<yourLocalDomain>
PORT=<yourAppPort>
GOOGLE_CLIENT_ID=<googleClientId>
```
Replace `<yourConnectionString>` with your own DB string connection. You could use your local Mongo DB or mongo atlas (https://cloud.mongodb.com) \
Replace `<yourLocalDomain>` with your local client app URL, `htttp://localhost:300` if you're running a `create-react-app`instance.\
Replace `<yourAppPort>` with the PORT number you are using to start up your app.\
Replace `<googleClientId>` with your own google client ID. Go to https://console.cloud.google.com to configure it.

## Available Scripts

In the project directory, you can run:

### `npm start`
