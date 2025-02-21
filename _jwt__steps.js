/***
 *
 * 1: install jwt
 * 2: jwt.sign({ played }, 'secret', { expiresIn: '' });
 * 3: token client
 *
 * **/

/***
 *
 *
 * how to store token in the client side
 * 1: memory --> ok type
 * 2: local storage --> ok type (xxs)
 * 3: cookies: http only
 *
 *
 * ***/

/***
 *
 * 1: set cookies only http only. for development source: false
 *
 * 2: cors
 *  cors({
     origin: ["http://localhost:5173/"],
     credentials: true,
   })
 *
 * 3: client side axios setting
 * 4: in axios set withCredentials: true
 *
 * ***/







  /**
   * 
   * {
    "version": 2,
    "builds": [
        {
            "src": "./index.js",
            "use": "@vercel/node"
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "/",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
        }
    ]
}
   * 
   * 
   * */  
