export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "sls-stack-notes-uploads",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://bh5wzpr6p9.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_rMIy0iriI",
    APP_CLIENT_ID: "2gb3s3op4gmaiama5i86ivf7ft",
    IDENTITY_POOL_ID: "us-east-1:5117d707-d9c3-4e9a-b5fb-629f2de37133D",
  },
};
