const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');
const client = new SecretManagerServiceClient();
const getName = (secretName) => {
    const parts = secretName.split('/');
    const name = parts[parts.length - 1];
    return name;
}

 
const list = async () => {
    const secretsNamesOnGCP = ['Salt','KeyPass','InitializationVector','Sample']

    let enviroments = {};
    const secretNames = [];
    const parent = 'projects/proy-pr-smp'
    const [secrets] = await client.listSecrets({
        parent: parent,
    });

    secrets.forEach(secret => {
        const name = getName(secret.name);
        secretsNamesOnGCP.map(scGCP => {
            if(name.trim() === scGCP.trim())
                secretNames.push(name);  
        });
    });

   

    for (let index = 0; index < secretNames.length; index++) {
        const secretName = secretNames[index];  
        
        const [version] = await client.accessSecretVersion({
            name: `${parent}/secrets/${secretName}/versions/latest`,
        })

        enviroments[secretName] = version.payload.data.toString();
 
       
    }
    return enviroments;
}
const secret =
{
    list
}

module.exports = {
    secret
}