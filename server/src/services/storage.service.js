import ImageKit from '@imagekit/nodejs';
import config from '../config/config'

const client = new ImageKit({
    privateKey: config.IMAGEKIT_PRIVATE_KEY
});

 




//this uploadFile function upload the file/img on imageKIt.

export async function uploadFile({ buffer,filesName }){
    const response = await client.files.upload({
        file: await toFile(buffer),
        fileName: fileName,
        Folder: "snitch"
    })
    return response;
}