export class BrainHttp{
    constructor (){

    }

    //GET request
    static get(url){
        return new promise ( ( resolver, reject ) => {
            fetch( url ).then( ( response ) => {
                response.json.then( ( data ) => {
                    resolver(data)
                }).catch( ( err) => {
                    reject( err )
                })
                
            })
        })
    }

    //POST REQUEST
    static post(url,data){
        return new promise ( ( resolver, reject ) => {
            fetch(url, {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            }).then( (response) => {
                response.json().then( (data) => {
                    resolver(data)
                }).catch( ( err ) => {
                    reject(err)
                })
            })
        })
    }

    //POST REQUEST
    static put(url,data){
        return new promise ( ( resolver, reject ) => {
            fetch(url, {
                method:'PUT',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            }).then( (response) => {
                response.json().then( (data) => {
                    resolver(data)
                }).catch( ( err ) => {
                    reject(err)
                })
            })
        })
    }

    //DELETE REQUEST
    static delete(url,data){
        return new promise ( ( resolver, reject ) => {
            fetch(url, {
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            }).then( (response) => {
                response.json().then( (data) => {
                    resolver(data)
                }).catch( ( err ) => {
                    reject(err)
                })
            })
        })
    }
}

