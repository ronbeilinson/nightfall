module.exports = {
    domainName: 'http://api.nightfall.docker',
    aliceDetails: { name: "alice", email: "alice@ey.com", password: "pass" },
    bobDetails:{ name: "bob", email: "bob@ey.com", password: "pass" },
    ft:{
       mintAmount: 1000,
       transferAmount:100,
       burnAmount:50
    },
    nft:{
        tokenUriOne: 'widget01',
        tokenUriTwo: 'widget02',
        tokenUriThree:'widget03'
     },
    databaseConfig:{
        host: 'nightfall_mongo_1',
        port: "27017",
        databaseName: "nightfall",
        admin: "admin",
        password: "admin"
    }
}