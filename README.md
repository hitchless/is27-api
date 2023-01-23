# IS27 Full Stack Developer - Technical Assignment

Build a simple web application that tracks and manages delivery trucks as described in the story provided below.

## Notes

As far as I can tell, from monitoring the DB, everything (the buttons) is actually working totally error free ... BUT I did not learn until a few hours ago that Vercel is incredibly slow to read the data back. And by slow I mean hours :( I guess that's what you get for free. You can confirm that the CRUD is working by hitting the GET endpoints in the browser, and reviewing the JSON data.

Another thing I'd like to mention is that I'm very aware that this could be a lot slicker from a UX perspective, however time was very limited so I approached it from an MVP perspective. While it would be clunky, if that was for a real client it would actually be useful in the field, right now, and could then be continuosly improved on. The next major sprint could probably be completed in a week or so. Drag/drop functionality would be high on the list.

Also, again due to lack of time, I have only built out the CRUD operations for two of the three tables.

And lastly, if I'm honest it just wasn't worth it to spend time on seeding when there was so little data needed, and most of the hosted DB solutions these days come with rather easy to use, and slick, graphicial interfaces.

## Links
- Back-end Compontent (Node and Express) cloud source control repository: https://github.com/hitchless/is27-api
- Back-end Compontent Public URL: https://is27-api.vercel.app/ (append this to the start of the end points to get the actual endpoint URLS)
- Front-end Compontent (Astro and Tailwind CSS) cloud source control repository: https://github.com/hitchless/is27-font-end
- Front-end Compontent Public URL: https://is27-font-end.vercel.app/ 
- Database Compontent: https://supabase.com/ (Postgres)

## Endpoints
/* truck routes */

- app.get('/api/trucks', db.getTrucks)
- app.post('/api/truck/new', db.createTruck)
- app.post('/api/truck/update', db.updateTruck)
- app.delete('/api/truck/delete', db.deleteTruck)

/* driver routes */

- app.get('/api/drivers', db.getAllDrivers)
- app.post('/api/driver/new', db.createDriver)
- app.post('/api/driver/update', db.updateDriver)
- app.delete('/api/driver/delete', db.deleteDriver)

/* lane routes */

- app.get('/api/lanes', db.getLanes)
- app.post('/api/lane/new', db.createLane)
- app.post('/api/lane/update', db.updateLane)
- app.delete('/api/lane/delete', db.deleteLane)
## Authors

- Jonny Miller
