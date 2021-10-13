# Turing Cat Test

Basically reCAPTCHA but with cats, because this is the internet and we can do whatever we want.

## Validation API

```
GET /api/cats/validation-set
```

Returns something of the following:

```json
{
  "validationId":"1633704317463BUJAY3E3ZodK",
  "prompt": "Select all the orange cats",
  "assets": [
    {"id":"1633704317462A0BV3i6K","url":"https://cataas.com/cat/595f280f557291a9750ebfb7"},
    {"id":"1633704317463oVbrCEOK","url":"https://cataas.com/cat/595f2810557291a9750ebfce"},
    {"id":"16337043174634iOZePjZ","url":"https://cataas.com/cat/595f2809557291a9750ebf35"},
    {"id":"16337043174638up1IQGj","url":"https://cataas.com/cat/595f280f557291a9750ebfc8"},
    {"id":"1633704317463OXMpskbC","url":"https://cataas.com/cat/595f280f557291a9750ebfbe"},
    {"id":"1633704317463Lz9dFOmy","url":"https://cataas.com/cat/60c0d08ec441cc0011a913c5"},
    {"id":"16337043174633okpvmAU","url":"https://cataas.com/cat/61009bfbcaacc400184f6b2b"},
    {"id":"1633704317463ro20TZnr","url":"https://cataas.com/cat/6010b5d147d128001b7bbb8c"},
    {"id":"16337043174634L7EPCuy","url":"https://cataas.com/cat/595f280f557291a9750ebfbb"}
  ]
}
```

With that `validationId` you can check the user's answers by sending the id's of the images they selected.

```
POST /api/cats/validate/:validationId
```

Example:

```
POST /api/cats/validate/1633704317463BUJAY3E3ZodK
BODY {
  "answer": [
    "1633704317462A0BV3i6K",
    "1633704317463Lz9dFOmy",
    "1633704317463OXMpskbC"
  ]
}
```

Which will return one of the following types of responses:

#### Validation Success

```json
{
  "status": "SUCCESS",
  "message": "Correct!",
}
```

#### Validation Failure

```jsonc
{
  "status": "FAILED",
  "message": "Incorrect, please try again.",
  "retry": {
    "validationId": "16337229564051Tih1TAwOgVO",
    "assets": [
      {
        "id": "1633722956405vtKuGIm1",
        "url": "https://cataas.com/cat/595f280f557291a9750ebfbe"
      },
      // ...
    ]
  }
}
```
#### Validation Session Expired

All sessions are single use and terminate immediately after checking the user's answer. We auto terminate sessions that take longer than 2 minutes to complete.

```jsonc
{
  "status": "EXPIRED",
  "message": "The session has expired, please try again.",
  "retry": {
    "validationId": "16337229564051Tih1TAwOgVO",
    "assets": [
      {
        "id": "1633722956405vtKuGIm1",
        "url": "https://cataas.com/cat/595f280f557291a9750ebfbe"
      },
      // ...
    ]
  }
}
```

## Developing locally

This is the command for vite and nodemon to run so we can have all the nice HMR stuff when developing
```
npm run dev
```

This creates a static build of the frontend and boots up the sever in production mode
```
npm start
```
