describe('lib/handlebar-helpers/time', async()=>{
    
    it('lib/handlebar-helpers/time::cover', async()=>{
        const ctx = require(_$t+'context')
        const time = ctx.loadHandlebarsHelper(_$+'views/helpers/time')
        time(new Date().toString())
    })

})