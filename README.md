to run with swagger: npm run swagger-autogen
then localhost:5000/doc to see all API endpoints.

==== Flow ====
Signup -> Signin and get token -> Use token to use other endpoints.
You must type "Bearer " before your token when sending request to an endpoint which needs JWT.
