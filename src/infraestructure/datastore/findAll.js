const {Datastore} = require('@google-cloud/datastore');

const findAll = async(entityName) => { 
    const datastore = new Datastore()
    const modelQuery = datastore.createQuery(entityName)
                                     
     let redordFinded= null;
     let hasRecords= true;
     let message= '';
    const [result] = await datastore.runQuery(modelQuery);
    if ([result][0].length === 0) {
        hasRecords = false
        message = '0 records finded'
    }else{
        message = {
            key : [result][0][0][datastore.KEY].id ,
            entity :[result][0][0]
        }
    }
    redordFinded = {
        hasRecords,
        message
    }
    return redordFinded;
}




module.exports = { findAll }