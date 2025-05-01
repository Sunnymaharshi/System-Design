/*
    SOLID principles 
    Frontend System Design 
        Requirements (10%)
            Functional
                1.feed that displays list of items 
                2.feed item can include comments
                3.only concern about user posts 
                4.should support infinite scroll
            Non-functional
                1.mobile friendly 
                2.does not need to work offline but its good 
                  to have if u can access some data offline 
                3.should be accessible 
                4.should support users globally or a single country?
                5.should be performant
                6.observability or analytics tool like datadog 
        High level Architecture (10%)
            1.start with simple UI design 
            2.design component architecture 
            3.discuss what design pattens you want to use and why 
                MVC, MVP etc
            4.explain how data will flow 
            5.explain how interactions will work 
        Data Model (20%)
            build out data types to render the content on the client 
            ex: AppData, Feed, FeedItem, User etc
        API Design (20%)
            dicuss what protocol to use
                HTTP1 vs HTTP2 
                    HTTP1 
                        limited no of connections it can handle at once 
                        Synchronous blocking queue
                            new connections will wait until resources are loaded 
                        plain text 
                        explicitly need to close the connection 
                        1 TCP sends 1 data at a time
                    HTTP2
                        Multiplexing 
                            Multiple connections at a time 
                            Parallel requests 
                        Rich data 
                        1 TCP sends multiple streams of data at once 
                        better compression HPACK algo 
            API Options 
                Polling/Long Polling/Rest API 
                    pros
                        Simple 
                        Easy to load balance
                        HTTP/2 compatible 
                    cons 
                        longer latency 
                        contection timeouts 
                        traffic overhead
                GraphQL 
                    pros 
                        modern API 
                        Easy to load balance 
                        HTTP/2 compatible
                        only pull data u need 
                        Type safe 
                    cons 
                        longer latency 
                        contection timeouts 
                        traffic overhead
                WebSockets 
                    pros 
                        Bidirectional communication
                        speed 
                        Single TCP connection
                        pull the data u need 
                        Type safe 
                    cons 
                        hard to load balance 
                        resource intensive 
                        Firewall/Proxies issues 
                Server side events 
                    pros 
                        HTTP/2 
                        Efficient 
                        easy to load balance
                    cons 
                        Unidirectional 
                        server to client communication only 
                        limited data types, mainly text 
                        hard to use 
        Performance (40%)
            Optimizations 
                Network 
                    HTTP/2 or anything as per use case 
                Compression headers 
                    Brotli, Gzip 
                    compress everything
                Caching 
                    caching strategies
                    Apollo caching for GraphQL
                Batch requests
                    group requests if possible 
                Image Optimization 
                    pull compressed images by fixed size 
                Bundle Splitting 
                    reduce bundle size by spliting 
                        app code bundle & 3rd-party libs bundle 
                    lazy load large components when needed 
                Rendering 
                    mobile friendly
                    prevent race conditions in code 
                    Application cache 
                        localStorage, sessionStorage & cookies 
                    Server side rendering 
                        helps SEO and reduce latency
                        Next.js 
                    defer non critical resources 
                    Core Web Vitals 
                        Time to Interactive 
                            reduce time taken by app to be interactive 
                        First Contentful Paint (FCP)
                            first thing that is painted on screen 
                        Last Contentful Paint (LCP)
                            last thing that is painted on screen
                    preload JS when needed 
                    import only what u need 
                    Tree shaking 
                        Eliminating dead code from bundles 
                    remove unused bundles 
                    virtualization 
                        to render long lists 
                        replace nodes instead of adding new ones 
                    CSS 
                        avoid reflows 
                            Reflow happens when a browser recalculates the position 
                            and geometry of certain parts of a webpage, such as 
                            after an update on an interactive site. 
                            This tends to be followed by repainting, which is when 
                            browser redraws the webpage to show the resulting visual updates.
                            1.Reduce unnecessary DOM depth. Changes at one level in the DOM tree can cause changes at every level of the tree - all the way up to the root, and all the way down into the children of the modified node. This leads to more time being spent performing reflow.
                            2.Minimize CSS rules, and remove unused CSS rules.
                            3.If you make complex rendering changes such as animations, do so out of the flow. Use position-absolute or position-fixed to accomplish this.
                            4.Avoid unnecessary complex CSS selectors - descendant selectors in particular - which require more CPU power to do selector matching.
                        use CSS animations instead of JS animations 
                            CSS animations are more performant
                        inline CSS for components
                            so CSS is used only when component loads 
                Rate limit 
                    debounce / throttle requests                        
            Security
                XSS 
                    CORS
                    rate limit
                    prevent cross-site scripting attacks
                    SQL injection
            Accessibility 
                font sizes in REM 
                cross device test for compatiblility
                proper contrast to content 
                keyboard navigation
                HTML5 semantic tags 
                Aria roles
            Observability / Tracking
*/
