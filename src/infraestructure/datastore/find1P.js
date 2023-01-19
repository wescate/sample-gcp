const {Datastore} = require('@google-cloud/datastore');

const find1P = async(entityName,property,value) => {
    const datastore = new Datastore()
    const modelQuery = datastore.createQuery(entityName)
                                     .filter(property,value);
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

const find1PWithProjection = async(entityName,property,value,projection) => {
    const datastore = new Datastore()
    const modelQuery = datastore.createQuery(entityName)
                                     .filter(property,value)
                                     .select(projection);
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


module.exports = { find1P,find1PWithProjection }