import { randomUUID } from "crypto";

const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY as string,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  region: process.env.AWS_ACCOUNT_REGION as string,
});

interface FileToUpload {
  folder: String;
  url: String;
}

class Aws {
  uploadFile = async ({ folder, url }: FileToUpload): Promise<void> => {
    try {
      const s3 = new AWS.S3();
      const id = randomUUID();
      const localImagePath = url;
      const fileContent = Buffer.from(localImagePath);

      const params = {
        Bucket: "outspace",
        Key: `${folder}/${id}.png`,
        Body: fileContent,
      };

      const result = await s3.upload(params).promise();

      return result?.Location;
    } catch (error) {
      console.error({ error });
    }
  };
}

export default new Aws();
