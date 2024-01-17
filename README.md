# Tournament Bracket Generator

## Flow

- UX/UI
- Backend (Django)
- Frontend (React + GraphQL)
- Docker
- Tests

## App Steps

1. **Form Submissions**: The application should be able to collect form submissions from potential users, save them in the database, and sort them by date and time. When the owner of the tournament creates a tournament, they should be able to send a link or QR code in a promotional post, and users can fill in the form.

2. **User Verification**: When a user signs up, a verification email should be sent. Once the user verifies their account, they should be forwarded to finish setting up their account. The user should be able to set their full name and password. Remember to inform the user to check their inbox to log in.

3. **BING Suggestions**:

   - **Ongoing Tournaments**: A list or grid of tournaments that are currently in progress. Clicking on a tournament could take the user to a detailed view of that tournament's bracket.
   - **Upcoming Matches**: A schedule of the user's upcoming matches in all ongoing tournaments.
   - **Past Results**: A history of the user's past tournaments, including the final standings and brackets.
   - **Account Management**: Options for the user to update their profile information, change their password, or log out.
   - **Role-Based Access Control**: Different users should have different permissions. For example, tournament owners should be able to edit and delete tournaments, while players should only be able to view and register for tournaments.
   - **Data Export**: The ability to export player data to common formats like Excel or PDF.
   - **Final Standings Display**: Display the final standings in a visually appealing way, possibly using graphics or animations to highlight the top three players.
   - **Tournament Promotion**: Consider adding features to help users promote their tournaments, such as social media integration or promotional materials.
   - **Match Scheduling**: Depending on the type of tournament, you might need to implement a feature for scheduling matches. This could include date, time, and location details for each match.
   - **Notifications**: Consider implementing a notification system to keep users informed about upcoming matches, tournament results, and other important updates.

4. Think about PUT and PATCH request [Backend]
5. Check default values for Backend Endpoint Fields - if they are the same like on the frontend
6. Create pages for:

- Tournament Location

13. Consider to implement something like blog posts on the main page of the tournament

14. Find out how to register (without logging functionality) that user was already registered to not let him do this twice or more.

15. Let users reverse their submit response (in the case they want to resign from participation) [Frontend] [Backend]

16. User Search functionality (something like autocomplete) - let users to find themselves on the page [Frontend]

17. Fixture Feature: Having a dedicated page for fixtures that users can access from the sidebar is a great idea. This would provide users with an overview of all matches and allow them to easily keep track of past, ongoing, and future matches. [Backend] [Frontend]

18. Clickable Table Rows: Making the table rows clickable to show more details about a player or a match is a common and intuitive design pattern. This would allow users to access more information without cluttering the main table view.

19. Player Detail Page: A detail page for each player that shows all their matches would be very useful. This could include information like the player’s past performance, upcoming matches, and statistics.

20. Add Postman! [Backend]

21. Add GraphQL [Frontend]

22. What about Docker?! [DevOps]

23. Test [Backend] [Frontend]
