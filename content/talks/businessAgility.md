#Enableing business agility
>@rebeccaparsons  from thoughtworks

The best apporach to develop and run a business is to follow the virtuous cycle and repeat
- testable hypothesis
- Continuous and experimental design
- fast, reliable delivery
- measure the results

We have gotten better at reqirement changes but we have not been able to handle major architecture

Plan for the quick infustracture and ecosystem changes

Evolutionary architecture
- Focus changes
- Best architucture changes over time
** supports guided incremental change acrosss multiple dimensions
Must descided on what to focus an and 
decide fitness functions how close are we to achiving the desired result/outcomes
### fitness function
- manual vs automated
- atomic vs holistic
- static vs dynamic
- triggered vs continuous
- temporal
- domain-specific

Incremental cahnges
- application updates )new versions/features) compatiblitiy 

Tradeoffs (see picture)
security preformance cannot maximize both

Evolvibilty is becoming a first class citizen in todays world

Principals
- last responsible moment: have a lot more information to make the best decision possible
- architect and develop for evolvability ( mainly how easy it is to understand the code) how close is the software to the business logic
- **Poarel's law**: how systems talk to each other, BE be as generous as possible. Only make changes when we ahve to. Be very cautious what you send
- Architect for testability: thinking of testing will steer someone away from bad architecture.
- **Conway's law**: any system an organization build reflect the business communication. if people dont talk the systems will not talk.

Techniques
- Database refactoring: migration of data always hard
- Choreography: automated systems so they can run without relying on a single point of faliure
- contract testing: Get requirements from the client and use the tests as the prove point for all the tests. Ignore each other until the tests fail
- continuous delivery: should not do it if cannot manage it or have the deciplance for it

Architecture style
- big ball of mud
- structured monolith
- layered monolith
- micro-kernel
- micro-services

Mechanics
- define architecture fitensss function
- start from the furtherst thing you are on ( the area you are the weekest at)
- improve on it
- focus on what matters
- monitor, adapt and repeat

Monitoring is critical so you can ensure things dont get wirse and the investment put in will not have to happen again

