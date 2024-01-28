---
layout: page
title: mitigating sql injection attacks
description: "sql injection: where a single misplaced character can turn a database into a liability"
img: assets/img/project_imgs/3_project_sqli.png
importance: 3
category: work
related_publications: true
---


SQL injection attacks pose a significant threat to the security of databases and web applications. In these attacks, malicious actors exploit vulnerabilities in input fields or poorly sanitized user inputs to inject malicious SQL code into the database queries. By doing so, attackers can manipulate the database and gain unauthorized access, retrieve, modify, or delete sensitive information. SQL injection attacks are often facilitated by inadequate input validation and lack of parameterized queries in the application's code. To mitigate this risk, developers must employ secure coding practices, such as parameterized queries and input validation, to ensure that user inputs are properly sanitized. Regular security audits and monitoring are also crucial to detect and prevent SQL injection vulnerabilities, helping to fortify the overall security posture of web applications and databases against these types of attacks.

Even with secure coding practices and regular security audits, there is still a chance of a malicious code being injected through an SQL injection attack. So, to predict whether a query could be potentially unsafe, we proposed a machine learning model using random decision forest classifier {% cite 9622689sqli %}. From the sql queries that we collected, we identified the features present in them such as the number of comment characters, number of semicolons, logical operators, true conditions, the keywords, and wildcard characters. This helped us get better insights of the database and we scored all the keywords based on their potential risk factor. Other features, like comment characters and wildcard characters were given a score of 1 (least unsafe). Now, based on the score list, we scored the queries in the dataset and trained a machine learning model based on a random decision forest classifier to predict if a query is potentially unsafe or not.