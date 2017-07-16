# Stat Tracker

The Iron Yard Weekly Project: Stat Tracker

---

Token testing info for Postman header -

key: x-access-token

value:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiUmljayIsImlhdCI6MTUwMDIyOTYwNCwiZXhwIjoxNTAwMzE2MDA0fQ.lY_RyBijWnV6p_DnBkLTq32UYBGQTRzY3hM_eGbjHds

---

Build an application people can use to track any stats they want about themselves on a daily basis.

You are going to build an application to track personal statistics about their activities. A personal statistic is a numerical record for a person in a time series by day. For example, let's say you wanted to track how many flights of stairs you walked up in a day. A sample week might look like:

![Sample tracker picture.](https://github.com/rickmurdock/stat-tracker/blob/master/readmePics/sample.png)

Users of your application can create as many different activities to track as they want.

You will be building an API to create and serve this data backed by MongoDB.

### API Specification  

For your API, we have specified the endpoints you'll need and what they should do. The URLs we using are not prefixed: yours should have `/api/` in front of them.

All the endpoints require authentication. You can use JSON Web Tokens for authentication, or if you prefer, you can use HTTP Basic Authentication. Feel free to use [Passport](http://passportjs.org/) to make this part easier.

![Endpoints picture.](https://github.com/rickmurdock/stat-tracker/blob/master/readmePics/endpoints.png)

### Hard mode  

Build a front-end for your API using HTML, CSS, and browser-side JavaScript.
