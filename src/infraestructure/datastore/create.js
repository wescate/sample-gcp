const {Datastore} = require('@google-cloud/datastore');

/**
 * saves the model in the entity defined on Datastore
 * @return {response} creatin event response
 * @param {model} dataModel
 * @param {entity} entityName
 */
const create = async(model,entityName) => {
    const datastore = new Datastore()
    const modelKey = datastore.key(entityName);
    let eventCreated= null;
    let code= 0;
    let message= '';
    let entity = {
        key: modelKey,
        data: model
    }

    await datastore.save(entity).then(() => {
        message = `record created successfully with the id ${modelKey.id}`     
    }).catch((err) => {
        code = 1
        message = err.message; 
    });   
    return eventCreated = {
        code,
        message
    }

}

module.exports = { create }