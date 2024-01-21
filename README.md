# Tournament Bracket Generator

## Flow

- UX/UI
- Backend (Django)
- Frontend (React + GraphQL)
- Docker
- Tests

## App Steps

1. **Form Submissions**: The application should be able to collect form submissions from potential users, save them in the database, and sort them by date and time. When the owner of the tournament creates a tournament, they should be able to send a link or QR code in a promotional post, and users can fill in the form.

2. Think about PUT and PATCH request [Backend]

3. Create pages for:

- Tournament Location

13. Consider to implement something like blog posts on the main page of the tournament

14. Find out how to register (without logging functionality) that user was already registered to not let him do this twice or more.

15. Let users reverse their submit response (in the case they want to resign from participation) [Frontend] [Backend]

16. Clickable Table Rows: Making the table rows clickable to show more details about a player or a match is a common and intuitive design pattern. This would allow users to access more information without cluttering the main table view.

17. Player Detail Page: A detail page for each player that shows all their matches would be very useful. This could include information like the player’s past performance, upcoming matches, and statistics.

18. Clean TS interface and types through whole project!

19. Add Postman! [Backend]

20. Add GraphQL [Frontend]

21. What about Docker?! [DevOps]

22. Test [Backend] [Frontend]

23. Swagger

24. Can't assign more than 4 people to one group [Backend Serializer or View]

25. Add backend tag to check if the registration form should be available or nice message that signing is over? [Backend endpoint?!]

26. Can 2 players or more can be on the same place in the group? [Backend Serializer or View]

27. Fixture Feature: Having a dedicated page for fixtures that users can access from the sidebar is a great idea. This would provide users with an overview of all matches and allow them to easily keep track of past, ongoing, and future matches. [Backend] [Frontend]

28. Knockout Stage!

29. **Data Export**: The ability to export player data to common formats like Excel or PDF.

30. **Final Standings Display**: Display the final standings in a visually appealing way, possibly using graphics or animations to highlight the top three players.

31. Customize Admin Panel - [https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Admin_site]

PLANS FOR MATCHES AND GROUPS:
Sure, I’d be happy to provide some guidance. Here are my thoughts:

Shuffling Players and Assigning Groups: Whether you shuffle players and assign them to groups on the frontend or backend depends on your specific needs. If the group assignment logic is simple and doesn’t involve sensitive data, doing it on the frontend can be a good option. However, if the logic is complex or involves sensitive data, it’s usually better to do it on the backend. In your case, since you mentioned that group assignment will be done through a professional draw, it might be best to handle this on the backend.

Match Assignments: Automating match assignments on the backend is a good idea. This can simplify the frontend code and ensure that the match assignment logic is consistent and reliable. You can use a round-robin algorithm to ensure each player plays with every other player in their group.

Database Design: Starting with an example database table is a great idea. This can help you visualize the data and understand how to manage it. You might want to include tables for players, groups, and matches (fixtures). Each row in the players table could represent a player, each row in the groups table could represent a group, and each row in the matches table could represent a match. The matches table could have foreign keys linking to the players and groups tables.

Frontend vs Backend: In general, it’s a good practice to keep the frontend as simple as possible and offload complex logic to the backend. This can make the frontend faster and more responsive, and it can also make the application more secure, as backend code is harder for malicious users to tamper with. In your case, I would recommend handling both the shuffling of players and the assignment of matches on the backend.

Tournament Options: Starting with a round-robin option for the group stage is a good choice. This is a fair and straightforward system that’s easy to understand. As your application grows, you can consider adding more options.

Group Assignment: Since the group assignment will be done through a professional draw, it would be most efficient to handle this on the backend. Once the draw is complete, you can update the database with the group assignments. Then, when the frontend needs to display the groups, it can simply fetch the latest data from the backend.

I hope this helps! Let me know if you have any other questions or need further clarification. 😊

**Future improvements ideas:**

- **User Verification**: When a user signs up, a verification email should be sent. Once the user verifies their account, they should be forwarded to finish setting up their account. The user should be able to set their full name and password. Remember to inform the user to check their inbox to log in.
- **Ongoing Tournaments**: A list or grid of tournaments that are currently in progress. Clicking on a tournament could take the user to a detailed view of that tournament's bracket.
- **Upcoming Matches**: A schedule of the user's upcoming matches in all ongoing tournaments.
- **Past Results**: A history of the user's past tournaments, including the final standings and brackets.
- **Account Management**: Options for the user to update their profile information, change their password, or log out.
- **Role-Based Access Control**: Different users should have different permissions. For example, tournament owners should be able to edit and delete tournaments, while players should only be able to view and register for tournaments.
- **Tournament Promotion**: Consider adding features to help users promote their tournaments, such as social media integration or promotional materials.
- **Match Scheduling**: Depending on the type of tournament, you might need to implement a feature for scheduling matches. This could include date, time, and location details for each match.
- **Notifications**: Consider implementing a notification system to keep users informed about upcoming matches, tournament results, and other important updates.
