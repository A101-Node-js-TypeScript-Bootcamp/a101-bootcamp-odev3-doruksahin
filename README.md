to run with swagger: npm run swagger-autogen
then localhost:5000/doc to see all API endpoints.

==== Flow ====
Signup -> Signin and get token -> Use token to use other endpoints.
You must type "Bearer " before your token when sending request to an endpoint which needs JWT.



==== SQL - NOSQL FARKLARI ====
1 - SQL Sabit tablolara sahiptir. NoSQL JSON belgeleri tutar, bu sayede dinamik olarak yeni kolon eklenebilir.
2 - Yukarıdaki nedenlerden dolayı SQL'de verinin tipi bellidir bu da geliştirmede kolaylık sağlarken NoSQL'de olan tipin belli olmaması durumu geliştirmeyi yavaşlatır.
3 - Mikroservis mimarilerindeki business logicler çok büyümeyeceği için mongodb bu alanda kullanabilir ve hızlıca kurulabilir.
4 - SQL'de join vardır NoSQL'de join yoktur, ayrı join tabloları oluşturmaya gerek kalmaz.