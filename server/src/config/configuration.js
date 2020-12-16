module.exports = {
    port: process.env.PORT || 3001,
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
   
}